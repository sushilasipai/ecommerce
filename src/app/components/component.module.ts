import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.components';
import { DialogBoxComponent } from './dialogBox/dialogBox.components';

@NgModule({
  declarations: [HeaderComponent, DialogBoxComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [DialogBoxComponent],
  exports: [HeaderComponent, DialogBoxComponent],
})
export class ComponentsModule {}
