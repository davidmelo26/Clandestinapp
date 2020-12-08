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
import { MainCustomerComponent } from './componentes/main-customer/main-customer.component';
import { MainCompanyComponent } from './componentes/main-company/main-company.component';
import { NavbarCompanyComponent } from './componentes/navbar-company/navbar-company.component';
import { NavbarCustomerComponent } from './componentes/navbar-customer/navbar-customer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
// import { StoreComponent } from './componentes/store/store.component';
import { ShopcarComponent } from './componentes/shopcar/shopcar.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
// import { CartComponent } from './componentes/store/cart/cart.component';
// import { FiltersComponent } from './componentes/store/filters/filters.component';
// import { ProductThumbnailComponent } from './componentes/store/product-thumbnail/product-thumbnail.component';
// import { SearchBarComponent } from './componentes/store/search-bar/search-bar.component';
// import { ShowcaseComponent } from './componentes/store/showcase/showcase.component';
// import { SortFiltersComponent } from './componentes/store/sort-filters/sort-filters.component';
// import { UrlFormComponent } from './componentes/store/url-form/url-form.component';
import { ProfileCompanyComponent } from './componentes/profile-company/profile-company.component';
import { FilterComponent } from './filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


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
    RegisterCompanyPageComponent,
    MainCustomerComponent,
    MainCompanyComponent,
    NavbarCompanyComponent,
    NavbarCustomerComponent,
    DashboardComponent,
    // StoreComponent,
    ShopcarComponent,
    ProfileComponent,
    LoginPageComponent,
/*     CartComponent,
    FiltersComponent,
    ProductThumbnailComponent,
    SearchBarComponent,
    ShowcaseComponent,
    SortFiltersComponent,
    UrlFormComponent, */
    ProfileCompanyComponent,
    FilterComponent,
    ProductDetailComponent,
    ProductListComponent
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
