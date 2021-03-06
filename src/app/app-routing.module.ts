import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ProfileCompanyComponent } from './componentes/profile-company/profile-company.component';
import { LoginPageComponent }             from './componentes/login-page/login-page.component';
import { ProfileComponent }               from './componentes/profile/profile.component';
import { ShopcarComponent }               from './componentes/shopcar/shopcar.component';
import { StoreComponent }                 from './componentes/store/store.component';
import { MainCustomerComponent }          from './componentes/main-customer/main-customer.component';
import { MainCompanyComponent }           from './componentes/main-company/main-company.component';
import { RegisterCompanyPageComponent }   from './componentes/register-company-page/register-company-page.component';
import { RegisterCustomerPageComponent }  from './componentes/register-customer-page/register-customer-page.component';
import { RegisterPageComponent }          from './componentes/register-page/register-page.component';
import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { HomePageComponent }              from './componentes/home-page/home-page.component';
import { AprendaPageComponent }           from './componentes/aprenda-page/aprenda-page.component'; 
import { NotFoundPageComponent }          from './componentes/not-found-page/not-found-page.component';
           
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',                 component: HomePageComponent},
  { path: 'registrese',       component: RegisterPageComponent},
  { path: 'aprenda',          component: AprendaPageComponent},
  { path: 'login',            component: LoginPageComponent},
  { path: 'registro_cliente', component: RegisterCustomerPageComponent},
  { path: 'registro_empresa', component: RegisterCompanyPageComponent},
  { path: 'main-customer',    component: MainCustomerComponent},
  { path: 'store',            component: StoreComponent},
  { path: 'shopcar',          component: ShopcarComponent},
  { path: 'profile',          component: ProfileComponent},
  { path: 'profile-company', component: ProfileCompanyComponent},
  { path: 'catalogo',         component: CatalogoComponent},
  { path: 'main-company',     component: MainCompanyComponent},
  { path: '**',               component: NotFoundPageComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
