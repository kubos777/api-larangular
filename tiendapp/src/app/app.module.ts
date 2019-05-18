import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
/*Componentes*/

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ListarComponent } from './components/listar.component';
import { AddProductComponent } from './components/add_product.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ListarComponent,
    AddProductComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
