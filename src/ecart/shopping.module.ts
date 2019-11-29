import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';

@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    ShoppingRoutingModule
  ],
  providers: [],
  bootstrap: [ShoppingComponent]
})
export class ShoppingModule { }
