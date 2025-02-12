import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopageFoundComponent,
    IndexComponent,
    PieComponent,
    BarnavComponent,
    BarinfComponent,
    CommicsComponent,
    PreferidosComponent,
    GenerosComponent,
    DetgenerosComponent,
    DetpreferidosComponent,
    DetcommicsComponent,
    VerdetgenerosComponent,
    VerdetcommicsComponent

  ],
  imports: [
    BrowserModule,
    PagesModule,
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
