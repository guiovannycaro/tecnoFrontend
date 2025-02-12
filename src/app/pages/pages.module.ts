import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CommicsComponent } from './commics/commics.component';
import { GenerosComponent } from './generos/generos.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PaisComponent } from './pais/pais.component';
import { PersonasComponent } from './personas/personas.component';
import { TipodocumentoComponent } from './tipodocumento/tipodocumento.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    RolesComponent,
    UsuariosComponent,
    CommicsComponent,
    GenerosComponent,
    PreferenciasComponent,
    CiudadComponent,
    DepartamentoComponent,
    PaisComponent,
    PersonasComponent,
    TipodocumentoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
