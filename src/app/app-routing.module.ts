import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { Routes, RouterModule} from "@angular/router";
import { MainUserComponent } from './guser/main-user/main-user.component';
import { MainProductComponent } from './gproduct/main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { ContentComponent } from './content/content.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListUserComponent} from "./guser/list-user/list-user.component";
import {FormAddUserComponent} from "./guser/form-add-user/form-add-user.component";
import {LoginComponent} from "./guser/login/login.component";
const ROUTES: Routes =
  [
    {path: 'provider', component: MainProviderComponent},
    {path: '', component: ContentComponent},
    { path: 'Gproduct', loadChildren: () => import('./gproduct/gproduct.module').then(m => m.GproductModule) },
    { path: 'Guser', loadChildren: () => import('./guser/guser.module').then(m => m.GuserModule) },
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
