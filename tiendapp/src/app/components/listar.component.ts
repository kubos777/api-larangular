import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
@Component({
	selector:'listar',
	templateUrl:'../views/listar.component.html',
	providers:[ProductService]
})

export class ListarComponent{
	public titulo:string;
	public productos: Product[];

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService
		){
		this.titulo = "Listado de productos";
	}

	ngOnInit(){
		console.log('Se ha cargado el listado de productos');
		//alert(this._productService.getProductos());
		this._productService.getProductos().subscribe(
			result =>{
				//console.log(result);
				this.productos = result;
				//console.log(this.productos);
			},
			error=>{
				console.log(<any>error);
			}
			);
	}

}