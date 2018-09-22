import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  submitForm(formValues: any) {

    this.submitted.emit({
      startDate: formValues.startDate,
      numberOfDays: formValues.numberOfDays,
      countryCode: formValues.countryCode
    });
  }
}
