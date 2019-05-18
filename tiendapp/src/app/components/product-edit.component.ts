import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'product-edit',
	templateUrl: '../views/product-edit.component.html',
	providers:[ProductService]
})

export class ProductEditComponent{
	public titulo:string;
	public id_recibido='';
	public name='';
	public price='';
	public quantity='';
	public product:Product;
	public image='';
	public filedata;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService,
		private _http:HttpClient
		){
		this.titulo = "Crear un nuevo producto";



	}
	

	ngOnInit(){
				/**/

		console.log('Listo para crear producto');
		this._route.params.forEach((params:Params) =>{
			let id = params['id'];
			//console.log(id);
			this._productService.getProducto(id).subscribe(
				result =>{
					//console.log(result);
					this.product = result;
					this.id_recibido = this.product[0].id;
					this.name = this.product[0].name;
					this.price = this.product[0].price;
					this.quantity = this.product[0].quantity;
					this.image = this.product[0].image;
					
					//console.log(this.product[0]);
				},
				error=>{
					console.log(<any>error);
				}
				)
		});

		console.log(this.name);
		/**/
	}
	


	onSubmit(form:NgForm){
		var myFormData = new FormData();
		const headers = new HttpHeaders();
		headers.append('Content-Type','multipart/form-data');
		headers.append('Accept','application/json');
		myFormData.append('_method','PUT');
		myFormData.append('id',this.id_recibido);
		myFormData.append('name',this.name);
		myFormData.append('price',this.price);
		myFormData.append('quantity',this.quantity);
		myFormData.append('image',this.filedata);

		console.log(myFormData);

		this._http.post(GLOBAL.url+'api/products/'+this.id_recibido,myFormData,{headers:headers}).subscribe(data=>{
			this._router.navigate(['/listar']);

			console.log("Si jaló");
		},error=>{
			console.log("No jaló");
		})
	}

	fileEvent(event){
		this.filedata = event.target.files[0];
		console.log(this.filedata);
	}



	
		
}
