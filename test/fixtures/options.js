var fixtures = fixtures || {};
fixtures.options = {};

var module = module || {};
if (module) { module.exports = fixtures.options; }

fixtures.options.differentAttrs = [
  {
    id: 1,
    first_day: '2014-03-28',
    last_day: '2014-03-28'
  }
];

fixtures.options.moments = [
  {
    id: 1,
    start: moment('2015-03-28', 'YYYY-MM-DD'),
    end: moment('2015-03-28', 'YYYY-MM-DD')
  }
];
