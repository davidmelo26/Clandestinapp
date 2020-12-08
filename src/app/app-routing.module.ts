import { ProfileCompanyComponent }        from './componentes/profile-company/profile-company.component';
import { LoginPageComponent }             from './componentes/login-page/login-page.component';
import { ProfileComponent }               from './componentes/profile/profile.component';
import { ShopcarComponent }               from './componentes/shopcar/shopcar.component';
// import { StoreComponent }                 from './componentes/store/store.component';
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

// import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',                 component: HomePageComponent},
  { path: 'registrese',       component: RegisterPageComponent},
  { path: 'aprenda',          component: AprendaPageComponent},
  { path: 'login',            component: LoginPageComponent},
  { path: 'registro_cliente', component: RegisterCustomerPageComponent},
  { path: 'registro_empresa', component: RegisterCompanyPageComponent},
  { path: 'main-customer',    component: MainCustomerComponent},
  { path: 'store',            component: ProductListComponent },
  { path: 'cart',             component: CartComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'products',         component: ProductListComponent },
  { path: 'profile',          component: ProfileComponent},
  { path: 'profile-company',  component: ProfileCompanyComponent},
  { path: 'main-company',     component: MainCompanyComponent},
  { path: '**',               component: NotFoundPageComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
