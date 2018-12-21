import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarModule } from 'ng-fullcalendar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FichaPacienteComponent } from './components/ficha-paciente/ficha-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';

import { PacienteService } from './services/paciente.service';
import { DatosPersonalesComponent } from './components/ficha-paciente/datos-personales/datos-personales.component';
import { SignosVitalesComponent } from './components/ficha-paciente/signos-vitales/signos-vitales.component';
import { AlertasComponent } from './components/ficha-paciente/alertas/alertas.component';
import { ActividadesComponent } from './components/ficha-paciente/actividades/actividades.component';
import { CalendarioComponent } from './components/ficha-paciente/calendario/calendario.component';
import { ModalSignosVitalesComponent } from './components/modals/modal-signos-vitales/modal-signos-vitales.component';

const routes: Routes = [
  { path: 'ficha-paciente/:id', component: FichaPacienteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista-pacientes', component: ListaPacientesComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FichaPacienteComponent,
    ListaPacientesComponent,
    DatosPersonalesComponent,
    SignosVitalesComponent,
    AlertasComponent,
    ActividadesComponent,
    CalendarioComponent,
    ModalSignosVitalesComponent
  ],
  entryComponents: [
    ModalSignosVitalesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
