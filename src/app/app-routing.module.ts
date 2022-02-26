import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MercadosComponent } from './views/mercados/mercados.component';
import { MercadosCreateComponent } from './components/mercados/mercados-create/mercados-create.component';
import { MercadosEditComponent } from './components/mercados/mercados-edit/mercados-edit.component';
import { MercadosDeleteComponent } from './components/mercados/mercados-delete/mercados-delete.component';
import { ContadoresComponent } from './views/contadores/contadores.component';
import { ContadoresCreateComponent } from './components/contadores/contadores-create/contadores-create.component';
import { ContadoresEditComponent } from './components/contadores/contadores-edit/contadores-edit.component';
import { ContadoresDeleteComponent } from './components/contadores/contadores-delete/contadores-delete.component';

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
    path: "mercados/create",
    component: MercadosCreateComponent
  },
  {
    path: "mercados/edit",
    component: MercadosEditComponent
  },
  {
    path: "mercados/delete",
    component: MercadosDeleteComponent
  },
  {
    path: "contadores",
    component: ContadoresComponent
  },
  {
    path: "contadores/create",
    component: ContadoresCreateComponent
  },
  {
    path: "contadores/edit",
    component: ContadoresEditComponent
  },
  {
    path: "contadores/delete",
    component: ContadoresDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
