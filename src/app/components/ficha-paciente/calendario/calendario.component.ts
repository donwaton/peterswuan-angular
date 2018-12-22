import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor() { }

  ngOnInit() {
    this.calendarOptions = {
      views: {
        agenda: {
          // options apply to agendaWeek and agendaDay views
        },
        day: {
          titleFormat: 'DD MMM YYYY'
        }
      },
      locale: 'es',
      editable: false,
      eventLimit: false,
      defaultView: 'agendaDay',
      allDayText:'',
      nowIndicator: true,
      aspectRatio: 0.9,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaDay,listMonth',
      },
      buttonText:
      {
        today:    'Hoy',
        day:      'Día',
        list:     'Lista'
      },
      events: [
        { title: 'Dormir',              start: '2018-12-21 00:00', end: '2018-12-21 05:00' },
        { title: 'Desayuno',            start: '2018-12-21 05:00', end: '2018-12-21 06:00' },
        { title: 'Baño',                start: '2018-12-21 06:00', end: '2018-12-21 07:00' },
        { title: 'Visita Enfermera',    start: '2018-12-21 07:00', end: '2018-12-21 08:00' },
        { title: 'Cambio de Invasivo',  start: '2018-12-21 08:00', end: '2018-12-21 09:00' },
        { title: 'Leche',               start: '2018-12-21 09:00', end: '2018-12-21 10:00' },
        { title: 'Ejercicio KTR',       start: '2018-12-21 10:00', end: '2018-12-21 10:30' },
        { title: 'Curación',            start: '2018-12-21 10:30', end: '2018-12-21 11:00' },
        { title: 'Aseo Bucal',          start: '2018-12-21 11:00', end: '2018-12-21 12:00' },
        { title: 'Paseo en silla',      start: '2018-12-21 12:00', end: '2018-12-21 13:00' },
        { title: 'Dormir',              start: '2018-12-21 13:00', end: '2018-12-21 17:00' },
        { title: 'Leche',               start: '2018-12-21 17:00', end: '2018-12-21 18:00' },
        { title: 'Cambio Collarín',     start: '2018-12-21 18:00', end: '2018-12-21 20:00' },
        { title: 'Curación',            start: '2018-12-21 20:00', end: '2018-12-21 21:00' },
        { title: 'Leche',               start: '2018-12-21 21:00', end: '2018-12-21 22:00' },
        { title: 'Muda',                start: '2018-12-21 22:00', end: '2018-12-22 00:00' },
        { title: 'Dormir',              start: '2018-12-22 00:00', end: '2018-12-22 05:00' },
        { title: 'Desayuno',            start: '2018-12-22 05:00', end: '2018-12-22 06:00' },
        { title: 'Baño',                start: '2018-12-22 06:00', end: '2018-12-22 07:00' },
        { title: 'Visita Enfermera',    start: '2018-12-22 07:00', end: '2018-12-22 08:00' },
        { title: 'Cambio de Invasivo',  start: '2018-12-22 08:00', end: '2018-12-22 09:00' },
        { title: 'Leche',               start: '2018-12-22 09:00', end: '2018-12-22 10:00' },
        { title: 'Ejercicio KTR',       start: '2018-12-22 10:00', end: '2018-12-22 10:30' },
        { title: 'Curación',            start: '2018-12-22 10:30', end: '2018-12-22 11:00' },
        { title: 'Aseo Bucal',          start: '2018-12-22 11:00', end: '2018-12-22 12:00' },
        { title: 'Paseo en silla',      start: '2018-12-22 12:00', end: '2018-12-22 13:00' },
        { title: 'Dormir',              start: '2018-12-22 13:00', end: '2018-12-22 17:00' },
        { title: 'Leche',               start: '2018-12-22 17:00', end: '2018-12-22 18:00' },
        { title: 'Cambio Collarín',     start: '2018-12-22 18:00', end: '2018-12-22 20:00' },
        { title: 'Curación',            start: '2018-12-22 20:00', end: '2018-12-22 21:00' },
        { title: 'Leche',               start: '2018-12-22 21:00', end: '2018-12-22 22:00' },
        { title: 'Muda',                start: '2018-12-22 22:00', end: '2018-12-23 00:00' }
      ]
    };
  }

}
