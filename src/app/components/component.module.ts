import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.components';
import { ProductDialogBoxComponent } from './productDialogBox/productDialogBox.components';
import { CustomerDialogBoxComponent } from './customerDialogBox/customerDialogBox.components';
import { SaleDialogBoxComponent } from './saleDialogBox/saleDialogBox.components';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductDialogBoxComponent,
    CustomerDialogBoxComponent,
    SaleDialogBoxComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [],
  entryComponents: [
    ProductDialogBoxComponent,
    CustomerDialogBoxComponent,
    SaleDialogBoxComponent,
  ],
  exports: [
    HeaderComponent,
    ProductDialogBoxComponent,
    CustomerDialogBoxComponent,
    SaleDialogBoxComponent,
  ],
})
export class ComponentsModule {}
