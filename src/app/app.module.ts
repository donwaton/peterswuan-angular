import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

import { AppComponent } from './app.component';
import { PacienteService } from './services/paciente.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
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
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PacienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
