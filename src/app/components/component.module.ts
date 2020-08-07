import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.components';
import { DialogBoxComponent } from './dialogBox/dialogBox.components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, DialogBoxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [],
  entryComponents: [DialogBoxComponent],
  exports: [HeaderComponent, DialogBoxComponent],
})
export class ComponentsModule {}
