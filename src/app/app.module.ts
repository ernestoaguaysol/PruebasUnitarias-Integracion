import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incremantador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';

import { RouterTestingModule } from "@angular/router/testing";
import { NavbarComponent } from './avanzado/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
