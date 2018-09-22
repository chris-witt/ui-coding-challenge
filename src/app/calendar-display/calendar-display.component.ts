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

  // found this on stack overflow
  getEaster(year) {
    const f = Math.floor,
      // Golden Number - 1
      G = year % 19,
      C = f(year / 100),
      // related to Epact
      H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
      // number of days from 21 March to the Paschal full moon
      I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
      // weekday for the Paschal full moon
      J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
      // number of days from 21 March to the Sunday on or before the Paschal full moon
      L = I - J,
      month = 3 + f((L + 40) / 44),
      date = L + 28 - 31 * f(month / 4);

    return {month, date};
  }

  // converted from PHP code found on stack overflow
  // easter part was missing & columbus day was incorrect
  isHoliday(testDate: Date) {
    const month = testDate.getMonth();
    const date = testDate.getDate();
    const day = testDate.getDay();
    const easter = this.getEaster(testDate.getFullYear());
    // Easter
    if ((month === easter.month) && (date === easter.date)) { return 'Easter Sunday'; }
    // January
    if ((month === 0) && (date === 1)) { return 'New Year\'s Day'; }
    if ((month === 0) && (date === 15)) { return 'Adults Day (Japan)'; }
    if ((month === 0) && (date === 27)) { return 'Wolfgang Amadeus Mozart born (1756)'; }
    if ((month === 0) && (day === 1) && (date > 14) && (date < 22)) { return 'Martin Luther King\'s Birthday'; }
    // February
    if ((month === 1) && (date === 2)) { return 'Groundhog Day'; }
    if ((month === 1) && (date === 8)) { return 'Jules Verne born (1828)'; }
    if ((month === 1) && (date === 11)) { return 'National Foundation Day (Japan)'; }
    if ((month === 1) && (date === 12)) { return 'Lincoln\'s Birthday'; }
    if ((month === 1) && (date === 14)) { return 'St. Valentine\'s Day'; }
    if ((month === 1) && (date === 15)) { return 'Galileo Galilei born (1564)'; }
    if ((month === 1) && (date === 22)) { return 'Washington\'s Birthday'; }
    if ((month === 1) && (date === 29)) { return 'Leap Day'; }
    // March
    if ((month === 2) && (date === 3)) { return 'Girl\'s Day (Japan)'; }
    if ((month === 2) && (date === 17)) { return 'St. Patrick\'s Day'; }
    if ((month === 2) && (date === 21)) { return 'J.S. Bach born (1685)'; }
    // April
    if ((month === 3) && (date === 1)) { return 'April Fools\' Day'; }
    if ((month === 3) && (date === 8)) { return 'Buddha born'; }
    if ((month === 3) && (date === 15) && (day !== 0)) { return 'Income Tax Day (USA),   '; }
    if ((month === 3) && (date === 16) && (day === 1)) { return 'Income Tax Day (USA) '; }
    if ((month === 3) && (date === 15)) { return 'Leonardo da Vinci born (1452)'; }
    if ((month === 3) && (date === 22)) { return 'Earth Day'; }
    if ((month === 3) && (date === 29)) { return 'Emperor\'s Birthday (Japan)'; }
    if ((month === 3) && (day === 0) && (date > 0) && (date < 8)) { return 'Daylight Savings Time Begins'; }
    // May
    if ((month === 4) && (date === 1)) { return 'May Day,   Boy\'s Day (Japan)'; }
    if ((month === 4) && (date === 2)) { return 'Constitution Day (Japan)'; }
    if ((month === 4) && (date === 5)) { return 'Cinco de Mayo (Mexico),   Children\'s Day (Japan)'; }
    if ((month === 4) && (date === 14)) { return 'Independence Day (Paraguay)'; }
    if ((month === 4) && (day === 0) && (date > 7) && (date < 16)) { return 'Mother\'s Day'; }
    if ((month === 4) && (day === 1) && (date > 24)) { return 'Memorial Day'; }
    // June
    if ((month === 5) && (date === 5)) { return 'Constitution Day (Denmark)'; }
    if ((month === 5) && (date === 6)) { return 'D-Day (USA)'; }
    if ((month === 5) && (date === 11)) { return 'Kamehameha (Hawaii)'; }
    if ((month === 5) && (date === 14)) { return 'FlagDay (USA)'; }
    if ((month === 5) && (date === 21)) { return 'Summer Solstice'; }
    if ((month === 5) && (date === 24)) { return 'St. Jean Baptiste Day (Canada)'; }
    if ((month === 5) && (date === 30)) { return 'Independence Day (Zaire)'; }
    if ((month === 5) && (day === 0) && (date > 15) && (date < 24)) { return 'Father\'s Day'; }
    // July
    if ((month === 6) && (date === 1)) { return 'Independence Day (Canada)'; }
    if ((month === 6) && (date === 4)) { return 'Independence Day (USA)'; }
    if ((month === 6) && (date === 14)) { return 'Bastille Day (France)'; }
    // August
    if ((month === 7) && (date === 1)) { return 'Confederation Day (Switzerland)'; }
    if ((month === 7) && (date === 10)) { return 'Independence Day (Ecuador)'; }
    if ((month === 7) && (date === 15)) { return 'Independence Day (India)'; }
    // September
    if ((month === 8) && (date === 7)) { return 'Independence Day (Brazil)'; }
    if ((month === 8) && (date === 15)) { return 'Respect for the Aged Day (Japan)'; }
    if ((month === 8) && (date === 16)) { return 'Independence Day (Mexico)'; }
    if ((month === 8) && (day === 1) && (date > 0) && (date < 8)) { return 'Labor Day (USA)'; }
    // October
    if ((month === 9) && (date === 1)) { return 'German Reunufication (1990)'; }
    if ((month === 9) && (date === 10)) { return 'Health-Sports Day (Japan)'; }
    if ((month === 9) && (day === 1) && (date > 7) && (date < 15)) { return 'Columbus Day (USA)'; }
    if ((month === 9) && (day === 0) && (date > 24) && (date < 31)) { return 'Daylight Savings Time Ends'; }
    if ((month === 9) && (day === 0) && (date === 31)) { return 'Daylight Savings Time Ends<BR>'; }
    if ((month === 9) && (date === 24)) { return 'United Nations Day'; }
    if ((month === 9) && (date === 31)) { return 'Halloween'; }
    // November
    if ((month === 10) && (date === 1)) { return 'All Saints Day'; }
    if ((month === 10) && (date === 2)) { return 'All Souls Day'; }
    if ((month === 10) && (date === 3)) { return 'Culture Day (Japan)'; }
    if ((month === 10) && (date === 11)) { return 'Veteran\'s Day (USA),    Remembrance Day (Canada)'; }
    if ((month === 10) && (date === 20)) { return 'Revolution Day (Mexico)'; }
    if ((month === 10) && (date === 23)) { return 'Labor Thanksgiving Day (Japan)'; }
    if ((month === 10) && (day === 4) && (date > 23) && (date < 30)) { return 'Thanksgiving (USA)'; }
    if ((month === 10) && (date === 30) && (day === 4)) { return 'Thanksgiving (USA)'; }
    // December
    if ((month === 11) && (date === 10)) { return 'Human Rights Day'; }
    if ((month === 11) && (date === 21)) { return 'Winter Solstice'; }
    if ((month === 11) && (date === 24)) { return 'Christmas Eve'; }
    if ((month === 11) && (date === 25)) { return 'Christmas'; }
    if ((month === 11) && (date === 26)) { return 'Boxing Day'; }
    if ((month === 11) && (date === 31)) { return 'New Year\'s Eve'; }

    return false;
  }
}
