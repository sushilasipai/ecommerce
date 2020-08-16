import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.pages';
import { HomeComponent } from './pages/home/home.pages';
import { SignupComponent } from './pages/signup/signup.pages';
import { ProductsComponent } from './pages/products/products.pages';
import { CustomersComponent } from './pages/customers/customers.pages';
import { SalesComponent } from './pages/sales/sales.pages';

const routes: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pages/customers',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pages/customers',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
