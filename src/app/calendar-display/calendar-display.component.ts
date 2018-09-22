import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.css']
})
export class CalendarDisplayComponent implements OnInit {
  calendarModel: any;

  constructor() {

    this.calendarModel = [
        {
          weeks: [
            { days: [ new Date('9/22/2018'), ] },
            { days: [ new Date('9/23/2018'),
                 new Date('9/24/2018'),
                 new Date('9/25/2018'),
                 new Date('9/26/2018'),
                 new Date('9/27/2018'),
                 new Date('9/28/2018'),
                 new Date('9/29/2018'), ] }
          ]
        }
      ];

  }

  ngOnInit() {
  }

}
