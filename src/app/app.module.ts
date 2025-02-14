import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './front/index/index.component';
import { PieComponent } from './sharedf/pie/pie.component';
import { BarnavComponent } from './sharedf/barnav/barnav.component';
import { BarinfComponent } from './sharedf/barinf/barinf.component';
import { CommicsComponent } from './front/commics/commics.component';
import { PreferidosComponent } from './front/preferidos/preferidos.component';
import { GenerosComponent } from './front/generos/generos.component';
import { DetgenerosComponent } from './front/detgeneros/detgeneros.component';
import { DetpreferidosComponent } from './front/detpreferidos/detpreferidos.component';
import { DetcommicsComponent } from './front/detcommics/detcommics.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxPaginationModule } from 'ngx-pagination';
import { VerdetgenerosComponent } from './front/verdetgeneros/verdetgeneros.component';
import { VerdetcommicsComponent } from './front/verdetcommics/verdetcommics.component';






import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { PreferenciasComponent } from './back/preferencias/preferencias.component';
import { RevistasComponent } from './back/revistas/revistas.component';
import { RolesComponent } from './back/roles/roles.component';
import { UsuariosComponent } from './back/usuarios/usuarios.component';
import { DetpreferenciasComponent } from './back/detpreferencias/detpreferencias.component';
import { VcomicdetalleComponent } from './back/vcomicdetalle/vcomicdetalle.component';
import { SeleccionComponent } from './back/seleccion/seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopageFoundComponent,
    IndexComponent,
    PieComponent,
    BarnavComponent,
    BarinfComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidebarComponent,
    CommicsComponent,
    PreferidosComponent,
    GenerosComponent,
    DetgenerosComponent,
    DetpreferidosComponent,
    DetcommicsComponent,
    VerdetgenerosComponent,
    VerdetcommicsComponent,

    DashboardComponent,
    RolesComponent,
    UsuariosComponent,
    CommicsComponent,
    PreferenciasComponent,
    RevistasComponent,
    DetpreferenciasComponent,
    VcomicdetalleComponent,
    SeleccionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
