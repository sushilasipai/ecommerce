import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.pages';
import { HomeComponent } from './pages/home/home.pages';
import { SignupComponent } from './pages/signup/signup.pages';
import { ProductsComponent } from './pages/products/products.pages';
import { CustomersComponent } from './pages/customers/customers.pages';

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
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
