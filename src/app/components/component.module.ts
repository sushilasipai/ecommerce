import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.components';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
