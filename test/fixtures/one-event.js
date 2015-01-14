//
// One Data Point
//

var fixtures = fixtures || {};
fixtures.oneEvent = {};

var module = module || {};
if (module) { module.exports = fixtures.one; }

//       Mar 28, 2015
//  1    [----------]
//

// Durations:
// Days, weeks, months, years: 1
//

fixtures.oneEvent.oneDay = [
  {
    "id": 1,
    "start": "2015-03-28",
    "end": "2015-03-28"
  }
];

//       Apr 1    Apr 2     Apr 3
//  1    [----------------------]
//

// Durations:
// Days: 3
// Weeks, months, years: 1
//

fixtures.oneEvent.threeDays = [
  {
    "id": 1,
    "start": "2015-04-01",
    "end": "2015-04-03"
  }
];

//       Apr 1    ...    Apr 7
//  1    [-------------------]
//

// Durations:
// Days: 7
// Weeks, months, years: 1
//

fixtures.oneEvent.twoWeeks = [
  {
    "id": 1,
    "start": "2015-04-01",
    "end": "2015-04-07"
  }
];

//       Mar 29    ...   Apr 3
//  1    [-------------------]
//

// Durations:
// Days: 6
// Weeks: 1
// Months: 2
// Years: 1
//

fixtures.oneEvent.twoMonths = [
  {
    "id": 1,
    "start": "2015-03-29",
    "end": "2015-04-03"
  }
];

//       Dec 30, 2013  ...  Jan 2, 2014
//  1    [----------------------------]
//

// Durations:
// Days: 4
// Weeks: 1
// Months: 2
// Years: 2
//


fixtures.oneEvent.twoYears = [
  {
    "id": 1,
    "start": "2014-12-30",
    "end": "2015-01-05"
  }
];

// Durations:
// Days: 7
// Weeks: 2
// Months: 2
// Years: 2
//
