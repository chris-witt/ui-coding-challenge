import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.css']
})
export class CalendarDisplayComponent implements OnInit {
  @Input() calendarModel: Array<any>;

  constructor() { }

  ngOnInit() { }

  isWeekend(date: Date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }
  isHoliday(testDate: Date) {
    return false;
  }
}
