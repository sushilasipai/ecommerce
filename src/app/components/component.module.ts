import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.components';
import { ProductDialogBoxComponent } from './productDialogBox/productDialogBox.components';
import { CustomerDialogBoxComponent } from './customerDialogBox/customerDialogBox.components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductDialogBoxComponent,
    CustomerDialogBoxComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [],
  entryComponents: [ProductDialogBoxComponent, CustomerDialogBoxComponent],
  exports: [
    HeaderComponent,
    ProductDialogBoxComponent,
    CustomerDialogBoxComponent,
  ],
})
export class ComponentsModule {}
