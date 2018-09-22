import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit() { }

  submitForm(formValues: any) {
    const utcDate = new Date(formValues.startDate); // Date object, uses UTC
    const newStartDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000); // local Date

    this.submitted.emit({
      startDate: newStartDate,
      numberOfDays: formValues.numberOfDays,
      countryCode: formValues.countryCode
    });
  }
}
