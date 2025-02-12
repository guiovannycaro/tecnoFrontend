import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from  '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';


import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RecordarComponent } from './recordar/recordar.component';


@NgModule({
  declarations: [

    RegistrarseComponent,
    RecordarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
