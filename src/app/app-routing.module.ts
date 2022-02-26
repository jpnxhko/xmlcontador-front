import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MercadosComponent } from './views/mercados/mercados.component';
import { ContadoresComponent } from './views/contadores/contadores.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "mercados",
    component: MercadosComponent
  },
  {
    path: "contadores",
    component: ContadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
