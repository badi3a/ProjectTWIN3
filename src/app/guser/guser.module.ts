import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuserRoutingModule } from './guser-routing.module';
import { GuserComponent } from './guser.component';
import {MainUserComponent} from "./main-user/main-user.component";
import {LoginComponent} from "./login/login.component";
import {FormAddUserComponent} from "./form-add-user/form-add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GuserComponent,
    MainUserComponent,
    LoginComponent,
    FormAddUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    GuserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GuserModule { }
