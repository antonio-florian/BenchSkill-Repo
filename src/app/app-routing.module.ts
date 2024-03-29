import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'create-product-component', component: CreateProductComponent },
  { path: 'product-list-component', component: ProductListComponent },
  {
    path: '',
    children: [
      { path: 'detail-component', component: EmptyPageComponent },
      { path: 'detail-component/:pokemonName', component: DetailComponent },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
