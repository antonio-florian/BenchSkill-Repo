import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'pokemon-component', component: PokemonComponent },
  { path: 'detail-component', component: DetailComponent },
  { path: 'create-product-component', component: CreateProductComponent },
  { path: 'product-list-component', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
