import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RecordarComponent } from './recordar/recordar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'recordar', component:RecordarComponent},
  { path:'registrarse', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
