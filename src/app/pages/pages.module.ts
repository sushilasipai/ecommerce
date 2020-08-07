import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.pages';
import { HomeComponent } from './home/home.pages';
import { SignupComponent } from './signup/signup.pages';
import { ProductsComponent } from './products/products.pages';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [LoginComponent, HomeComponent],
})
export class PagesModule {}
