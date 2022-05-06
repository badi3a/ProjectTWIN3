import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuserComponent } from './guser.component';
import {FormAddUserComponent} from "./form-add-user/form-add-user.component";
import {LoginComponent} from "./login/login.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [{ path: '', component: GuserComponent },
  {path:'subscribe', component: FormAddUserComponent},
  {path:'login', component: LoginComponent},
  {path: 'user', component: MainUserComponent,
    children:[
    {path:'category/:category', component: ListUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuserRoutingModule { }
