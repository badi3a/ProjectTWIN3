import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GproductRoutingModule } from './gproduct-routing.module';
import { GproductComponent } from './gproduct.component';
import {BestSellerComponent} from "./best-seller/best-seller.component";
import {FormAddProductComponent} from "./form-add-product/form-add-product.component";
import {ProductComponent} from "./product/product.component";
import {MainProductComponent} from "./main-product/main-product.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GproductComponent,
    BestSellerComponent,
    FormAddProductComponent,
    ProductComponent,
    MainProductComponent
  ],
  imports: [
    CommonModule,
    GproductRoutingModule,
    FormsModule
  ]
})
export class GproductModule { }
