import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadComponent } from './layouts/head/head.component';
import { ContentComponent } from './content/content.component';
import { ListUserComponent } from './guser/list-user/list-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainUserComponent } from './guser/main-user/main-user.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormAddUserComponent } from './guser/form-add-user/form-add-user.component';
import { LoginComponent } from './guser/login/login.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    MainProviderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
