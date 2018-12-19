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
        right: 'agendaDay,listMonth'
      },
      buttonText:
      {
        today:    'Hoy',
        day:      'Día',
        list:     'Lista'
      },
      events: [
        {
          id: '1',
          resourceId: 'a',
          title: 'Meeting',
          start: '2018-12-18 12:00',
          end: '2018-12-18 14:00'
        }
      ]
    };
  }

}
