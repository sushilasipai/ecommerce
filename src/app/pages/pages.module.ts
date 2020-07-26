import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.pages';
import { HomeComponent } from './home/home.pages';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [LoginComponent, HomeComponent],
})
export class PagesModule {}
