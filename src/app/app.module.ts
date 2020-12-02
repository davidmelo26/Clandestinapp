import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { AprendaPageComponent } from './componentes/aprenda-page/aprenda-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { RegisterCustomerPageComponent } from './componentes/register-customer-page/register-customer-page.component';
import { RegisterCompanyPageComponent } from './componentes/register-company-page/register-company-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    AprendaPageComponent,
    NotFoundPageComponent,
    CaracteristicasComponent,
    RegistrarseComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    RegisterCustomerPageComponent,
    RegisterCompanyPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
