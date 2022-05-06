import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GproductComponent } from './gproduct.component';
import {MainProductComponent} from "./main-product/main-product.component";

const routes: Routes = [
  { path: '', component: GproductComponent },
  {path: 'product', component: MainProductComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GproductRoutingModule { }
