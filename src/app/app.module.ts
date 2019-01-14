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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FichaPacienteComponent } from './components/ficha-paciente/ficha-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { DatosPersonalesComponent } from './components/ficha-paciente/datos-personales/datos-personales.component';
import { SignosVitalesComponent } from './components/ficha-paciente/signos-vitales/signos-vitales.component';
import { AlertasComponent } from './components/ficha-paciente/alertas/alertas.component';
import { CalendarioComponent } from './components/ficha-paciente/calendario/calendario.component';
import { EvolucionComponent } from './components/ficha-paciente/evolucion/evolucion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AdmMedicamentosComponent } from './components/ficha-paciente/adm-medicamentos/adm-medicamentos.component';
import { InvasivosComponent } from './components/ficha-paciente/invasivos/invasivos.component';

import { ModalSignosVitalesComponent } from './components/modals/modal-signos-vitales/modal-signos-vitales.component';
import { ModalSignosVitales24hComponent } from './components/modals/modal-signos-vitales24h/modal-signos-vitales24h.component';
import { ModalEvolucionComponent } from './components/modals/modal-evolucion/modal-evolucion.component';
import { ModalPacienteComponent } from './components/modals/modal-paciente/modal-paciente.component';
import { ModalUsuarioComponent } from './components/modals/modal-usuario/modal-usuario.component';
import { ModalAlertasComponent } from './components/modals/modal-alertas/modal-alertas.component';
import { ModalAdmMedComponent } from './components/modals/modal-adm-med/modal-adm-med.component';
import { ModalConfirmacionComponent } from './components/modals/modal-confirmacion/modal-confirmacion.component';
import { ModalProtocolosComponent } from './components/modals/modal-protocolos/modal-protocolos.component';
import { ModalInvasivosComponent } from './components/modals/modal-invasivos/modal-invasivos.component';

import { PacienteService } from './services/paciente.service';
import { SignosVitalesService } from './services/signos-vitales.service';
import { EvolucionService } from './services/evolucion.service';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioService } from './services/usuario.service';
import { AdministracionService } from './services/administracion.service';
import { AlertasService } from './services/alertas.service';
import { AntropometricosService } from './services/antropometricos.service';
import { InsumosService } from './services/insumos.service';
import { MedicamentosService } from './services/medicamentos.service';

const routes: Routes = [
  { path: 'ficha-paciente/:id', component: FichaPacienteComponent, canActivate: [AuthGuard] },
  { path: 'lista-pacientes', component: ListaPacientesComponent, canActivate: [AuthGuard] },
  { path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ListaPacientesComponent, canActivate: [AuthGuard] },
  { path: '', component: ListaPacientesComponent, canActivate: [AuthGuard] }
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
    EvolucionComponent,
    CalendarioComponent,
    NavbarComponent,
    AdmMedicamentosComponent,
    ListaUsuariosComponent,
    InvasivosComponent,
    ModalSignosVitalesComponent,
    ModalSignosVitales24hComponent,
    ModalEvolucionComponent,
    ModalPacienteComponent,
    ModalUsuarioComponent,
    ModalAlertasComponent,
    ModalAdmMedComponent,
    ModalConfirmacionComponent,
    ModalProtocolosComponent,
    ModalInvasivosComponent
  ],
  entryComponents: [
    ModalAdmMedComponent,
    ModalSignosVitalesComponent,
    ModalSignosVitales24hComponent,
    ModalEvolucionComponent,
    ModalPacienteComponent,
    ModalUsuarioComponent,
    ModalAlertasComponent,
    ModalConfirmacionComponent,
    ModalProtocolosComponent,
    ModalInvasivosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatSnackBarModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AdministracionService,
    AlertasService,
    AntropometricosService,
    EvolucionService,
    InsumosService,
    EvolucionService,
    LoginService,
    MedicamentosService,
    PacienteService,
    SignosVitalesService,
    UsuarioService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
