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
  { path: '**', component: NopageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
