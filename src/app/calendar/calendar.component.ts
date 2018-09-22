import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarModel: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  formSubmitted(formValues) {
    console.log(formValues);
  }
}
