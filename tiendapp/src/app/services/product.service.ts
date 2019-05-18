import { Injectable } from '@angular/core';
//Instalar el modulo http
//npm i @angular/http
import { Http,Response,Headers, RequestOptions } from '@angular/http';
import { Product } from '../models/product';
import { GLOBAL } from './global';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable()
export class ProductService{
	public url:string;
	public filesToUpload;
	public resultUpload;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getProductos(){
		//return "Texto enviado desde el servicio";
		return this._http.get(this.url+'api/products').pipe(map(res=>res.json()));
	}

	getProducto(id){
		return this._http.delete(this.url+'api/products/'+id).pipe(map(res=>res.json()));
	}
	


	

}


