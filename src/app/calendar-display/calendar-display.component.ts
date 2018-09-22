import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.css']
})
export class CalendarDisplayComponent implements OnInit {
  @Input() calendarModel: Array<any>;

  constructor() {

    /* this.calendarModel = [
        {
          month: 'September',
          year: 2018,
          weeks: [
            [
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
              {date: new Date('9/22/2018'), empty: false},
            ],
            [
              {date: new Date('9/23/2018'), empty: false},
              {date: new Date('9/24/2018'), empty: false},
              {date: new Date('9/25/2018'), empty: false},
              {date: new Date('9/26/2018'), empty: false},
              {date: new Date('9/27/2018'), empty: false},
              {date: new Date('9/28/2018'), empty: false},
              {date: new Date('9/29/2018'), empty: false},
            ],
            [
              {date: new Date('9/30/2018'), empty: false},
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
              {empty: true},
            ],
          ]
        },
        {
          month: 'October',
          year: 2018,
          weeks: [
            [
              {empty: true},
              {date: new Date('10/1/2018'), empty: false},
              {date: new Date('10/2/2018'), empty: false},
              {date: new Date('10/3/2018'), empty: false},
              {date: new Date('10/4/2018'), empty: false},
              {date: new Date('10/5/2018'), empty: false},
              {date: new Date('10/6/2018'), empty: false},
            ],
            [
              {date: new Date('10/7/2018'), empty: false},
              {date: new Date('10/8/2018'), empty: false},
              {date: new Date('10/9/2018'), empty: false},
              {date: new Date('10/10/2018'), empty: false},
              {date: new Date('10/11/2018'), empty: false},
              {date: new Date('10/12/2018'), empty: false},
              {date: new Date('10/13/2018'), empty: false},
            ],
          ]
        }
      ]; */

  }

  ngOnInit() { }

  isWeekend(date: Date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }
}
