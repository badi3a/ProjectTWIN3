import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { Routes, RouterModule} from "@angular/router";
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { ContentComponent } from './content/content.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListUserComponent} from "./list-user/list-user.component";
const ROUTES: Routes =
  [
    {path: 'user', component: MainUserComponent, children:[
        {path:'category/:category', component: ListUserComponent}
      ]},
    {path: 'provider', component: MainProviderComponent},
    {path: 'product', component: MainProductComponent},
    {path: '', component: ContentComponent},
    {path: '**',component: NotFoundComponent }

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ]
  ,exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
