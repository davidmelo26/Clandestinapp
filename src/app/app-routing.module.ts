import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { AprendaPageComponent } from './componentes/aprenda-page/aprenda-page.component'; 
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'registrarse', component: RegisterPageComponent},
  { path: 'aprenda', component: AprendaPageComponent},
  { path: '**', component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
