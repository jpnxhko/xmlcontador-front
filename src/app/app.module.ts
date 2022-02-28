import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MercadosComponent } from './views/mercados/mercados.component';
import { ContadoresComponent } from './views/contadores/contadores.component';
import { MercadosCreateComponent } from './components/mercados/mercados-create/mercados-create.component';
import { MercadosEditComponent } from './components/mercados/mercados-edit/mercados-edit.component';
import { MercadosDeleteComponent } from './components/mercados/mercados-delete/mercados-delete.component';
import { ContadoresCreateComponent } from './components/contadores/contadores-create/contadores-create.component';
import { ContadoresEditComponent } from './components/contadores/contadores-edit/contadores-edit.component';
import { ContadoresDeleteComponent } from './components/contadores/contadores-delete/contadores-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    MercadosComponent,
    ContadoresComponent,
    MercadosCreateComponent,
    MercadosEditComponent,
    MercadosDeleteComponent,
    ContadoresCreateComponent,
    ContadoresEditComponent,
    ContadoresDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
