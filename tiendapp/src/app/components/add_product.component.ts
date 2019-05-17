import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'add-product',
	templateUrl: '../views/add_product.component.html',
	providers:[ProductService]
})

export class AddProductComponent{
	public titulo:string;
	public product:Product;
	public filedata;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService,
		private _http:HttpClient
		){
		this.titulo = "Crear un nuevo producto";
		this.product = new Product(0,'','','','');
	}
	ngOnInit(){
		console.log('Listo para crear producto');
	}


	onSubmit(form:NgForm){
		var myFormData = new FormData();
		const headers = new HttpHeaders();
		headers.append('Content-Type','multipart/form-data');
		headers.append('Accept','application/json');
		myFormData.append('name',this.product.name);
		myFormData.append('price',this.product.price);
		myFormData.append('quantity',this.product.quantity);
		myFormData.append('image',this.filedata);

		console.log(myFormData);
		this._http.post(GLOBAL.url+'api/products',myFormData,{headers:headers}).subscribe(data=>{
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