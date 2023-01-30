import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'register-component', component: RegisterComponent },
  { path: 'login-component', component: LoginComponent },
  {
    path: 'detail-component',
    component: DetailComponent,
    children: [{ path: ':pokemonName', component: DetailComponent }],
  },
  { path: 'create-product-component', component: CreateProductComponent },
  { path: 'product-list-component', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
