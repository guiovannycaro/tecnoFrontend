import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { CommicsComponent } from './commics/commics.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { TipodocumentoComponent } from './tipodocumento/tipodocumento.component';
import { PersonasComponent } from './personas/personas.component';
import { PaisComponent } from './pais/pais.component';
import { GenerosComponent } from './generos/generos.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CiudadComponent } from './ciudad/ciudad.component';

const routes: Routes = [
{path:'dashboard',component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent,data: { titulo: 'Dashboard' } },
    {path:'ciudad', component:CiudadComponent,data:{titulo:'Ciudad'}},
    {path:'commic', component:CommicsComponent,data:{titulo:'Commics'}},
    {path:'departamentos', component:DepartamentoComponent,data:{titulo:'Departamentos'}},
    {path:'generos', component:GenerosComponent,data:{titulo:'Generos'}},
    {path:'pais', component:PaisComponent,data:{titulo:'Pais'}},
    {path:'personas', component:PersonasComponent,data:{titulo:'Preferencias'}},
    {path:'preferencias', component:PreferenciasComponent,data:{titulo:'Preferencias'}},
    {path:'roles', component:RolesComponent,data:{titulo:'Roles'}},
    {path:'tipodoc', component:TipodocumentoComponent,data:{titulo:'Tipo Documento'}},
    {path:'usuarios', component:UsuariosComponent,data:{titulo:'Usuarios'}}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
