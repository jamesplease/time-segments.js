//
// Two Data Points
//

var fixtures = fixtures || {};
fixtures.twoEvents = {};

var module = module || {};
if (module.exports) { module.exports = fixtures.twoEvents; }

//       Mar 10   ...   Mar 20
//  1    [-------------------]
//  2    [-------------------]
//

fixtures.twoEvents.concurrent = [
  {
    "id": 1,
    "start": "2015-3-10",
    "end": "2015-3-17"
  },
  {
    "id": 2,
    "start": "2015-3-10",
    "end": "2015-3-17"
  }
];

//       Dec 2014   Jan 2015
//  1    [------]
//  2               [------]
//

fixtures.twoEvents.nonconcurrent = [
  {
    "id": 1,
    "start": "2014-12-10",
    "end": "2014-12-14"
  },
  {
    "id": 2,
    "start": "2015-01-10",
    "end": "2015-01-28"
  }
];

//       Mar 10   Mar 11   Mar 12
//  1    [-------------]
//  2             [-------------]
//

fixtures.twoEvents.overlapping = [
  {
    "id": 1,
    "start": "2015-03-10",
    "end": "2015-03-11"
  },
  {
    "id": 2,
    "start": "2015-03-11",
    "end": "2015-03-12"
  }
];
