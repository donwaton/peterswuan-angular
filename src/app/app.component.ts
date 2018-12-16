import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { PacienteService } from './services/paciente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paciente: any;
  listaPacientes: any;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  
  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
     this.calendarOptions = {
      locale: 'es',
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      buttonText:
      {
        today:    'Hoy',
        month:    'Mes',
        week:     'Semana',
        day:      'Día',
        list:     'Lista'
      },
      events: []
    };

    this.pacienteService.getListaPacientes()
      .subscribe(resp => {
        this.listaPacientes = resp.pacientes;
      })
  }

  getPaciente(id){
    this.pacienteService.getPaciente(id)
      .subscribe(resp => {
        this.paciente = resp.paciente;
      })
  }
}
