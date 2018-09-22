import { Component, OnInit } from '@angular/core';

const SATURDAY = 6, SUNDAY = 0;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarModel: Array<any>;

  constructor() { }
  ngOnInit() { }

  getMonthName(index: number) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[index];
  }

  datesAreEqual(a: Date, b: Date) {
    return (a.getFullYear() === b.getFullYear()) &&
      (a.getMonth() === b.getMonth()) &&
      (a.getDate() === b.getDate());
  }

  addEmptyDays(weekArray: Array<any>, numberOfDays: number) {
    for (let i = 0; i < numberOfDays; i++) {
      weekArray.push({ empty: true });
    }
  }

  formSubmitted(formValues: any) {
    const startDate = formValues.startDate;
    const numberOfDays = formValues.numberOfDays;
    const countryCode = formValues.countryCode;
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + numberOfDays);

    this.calendarModel = [];
    let monthModel = {
      weeks: [],
      month: this.getMonthName(startDate.getMonth()),
      year: startDate.getFullYear()
    };
    let weekModel = [];
    let prevDate = new Date(startDate);

    this.addEmptyDays(weekModel, startDate.getDay()); // add empty days prior to start day

    for (let i = 0; i <= numberOfDays; i++) {
      const currDate = new Date(startDate);
      currDate.setDate(currDate.getDate() + i);

      const isNewMonth = (currDate.getMonth() !== prevDate.getMonth());
      const isNewWeek = currDate.getDay() === SUNDAY // first day of week
        || (currDate.getDate() === 1 && !this.datesAreEqual(currDate, startDate)) ; // first day of month, but not start day

      if (isNewWeek) {
        if (currDate.getDay() !== SUNDAY) { // not sunday, must be new month
          this.addEmptyDays(weekModel, SATURDAY - prevDate.getDay()); // add empty days to end of prev month
        }
        monthModel.weeks.push(weekModel); // push prev week into month
        weekModel = []; // reset week model
      }

      if (isNewMonth) {
        this.calendarModel.push(monthModel); // push prev month
        monthModel = { weeks: [], month: this.getMonthName(currDate.getMonth()), year: currDate.getFullYear() }; // reset month model
        this.addEmptyDays(weekModel, prevDate.getDay() === SATURDAY ? 0 : prevDate.getDay() + 1); // add empty days to beginning of month
      }

      weekModel.push({ empty: false, date: currDate }); // push current day

      if (this.datesAreEqual(currDate, endDate)) { // final day in range
        this.addEmptyDays(weekModel, SATURDAY - currDate.getDay()); // fill out the remainder of the week
        monthModel.weeks.push(weekModel); // push final week
        this.calendarModel.push(monthModel); // push final month
      }

      prevDate = new Date(currDate);
    }
  }
}
