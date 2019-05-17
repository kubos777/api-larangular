import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Componentes*/

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ListarComponent } from './components/listar.component';
import { AddProductComponent } from './components/add_product.component';

const routes: Routes = [
	{ path: 'inicio',component: HomeComponent },
	{ path: 'listar', component:ListarComponent },
	{ path: 'crear', component:AddProductComponent},
	{ path: '**',component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
