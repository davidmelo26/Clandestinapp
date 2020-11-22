import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AprendaPageComponent } from './componentes/aprenda-page/aprenda-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AprendaPageComponent,
    NotFoundPageComponent,
    CaracteristicasComponent,
    RegistrarseComponent,
    SobrenosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
