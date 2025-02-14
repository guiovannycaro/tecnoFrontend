import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './front/index/index.component';
import { PreferidosComponent } from './front/preferidos/preferidos.component';
import { CommicsComponent } from './front/commics/commics.component';
import { GenerosComponent } from './front/generos/generos.component';
import { DetcommicsComponent } from './front/detcommics/detcommics.component';
import { DetgenerosComponent } from './front/detgeneros/detgeneros.component';
import { VerdetcommicsComponent } from './front/verdetcommics/verdetcommics.component';
import { VerdetgenerosComponent } from './front/verdetgeneros/verdetgeneros.component';



import { DashboardComponent } from './back/dashboard/dashboard.component';
import { PreferenciasComponent } from './back/preferencias/preferencias.component';
import { RevistasComponent } from './back/revistas/revistas.component';

import { RolesComponent } from './back/roles/roles.component';
import { UsuariosComponent } from './back/usuarios/usuarios.component';
import { DetpreferenciasComponent } from './back/detpreferencias/detpreferencias.component';
import { VcomicdetalleComponent } from './back/vcomicdetalle/vcomicdetalle.component';
import { SeleccionComponent } from './back/seleccion/seleccion.component';




const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path:'login', component:LoginComponent},
  { path: 'preferidos', component: PreferidosComponent },
  { path: 'commics', component: CommicsComponent },
  { path: 'detallecom/:id', component: DetcommicsComponent }, // Debe estar aquí
  { path: 'vdetcommic/:id', component: VerdetcommicsComponent },
  { path: 'Generos', component: GenerosComponent },
  { path: 'detgeneros/:id', component: DetgenerosComponent },
  { path: 'vdetgenero/:id', component: VerdetgenerosComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/preferencias', component: PreferenciasComponent },
  { path: 'dashboard/detpreferencias/:id', component: DetpreferenciasComponent },
  { path: 'dashboard/vseleccion/:id', component: SeleccionComponent },
  { path: 'dashboard/commics', component: RevistasComponent },
  { path: 'dashboard/vcommicdet/:id', component: VcomicdetalleComponent },
  { path: 'dashboard/usuario', component: UsuariosComponent },
  { path: 'dashboard/rol', component: RolesComponent },

  { path: '**', component: NopageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
