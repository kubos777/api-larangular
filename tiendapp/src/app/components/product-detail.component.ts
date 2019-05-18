import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
@Component({
	selector:'product-detail',
	templateUrl:'../views/product-detail.component.html',
	providers:[ProductService]
})

export class ProductDetailComponent{
	public titulo:string;
	public product: Product;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
		){
		this.titulo = "Detalles del producto";
	}

	ngOnInit(){
		console.log('Se ha cargado el producto');
		this.getProducto();


	}

	getProducto(){
		this._route.params.forEach((params:Params) =>{
			let id = params['id'];
			//console.log(id);
			this._productService.getProducto(id).subscribe(
				result =>{
					console.log(result);
					this.product = result;
					console.log(this.product);
				},
				error=>{
					console.log(<any>error);
				}
				)
		});
	}

}


