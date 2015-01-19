module.exports = function() {
  global.expect = global.chai.expect;
  global._ = require('underscore');
  global.moment = require('moment');

  // Humanize an array of Events or Segments
  var humanReadableFormat = 'YYYY-MM-DD';
  function humanize(segments) {
    var ret = {}, key;
    _.each(segments, function(s, unix) {
      key = global.moment.unix(unix).utc().format(humanReadableFormat);
      ret[key] = _.clone(s);
    });
    return ret;
  }

  global.humanize = humanize;


  global.fixtures = {};
  global.fixtures.oneEvent = require('../fixtures/one-event');
  global.fixtures.twoEvents = require('../fixtures/two-events');
  global.fixtures.options = require('../fixtures/nonstandard-format');

  beforeEach(function() {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy  = this.sandbox.spy.bind(this.sandbox);
  });

  afterEach(function() {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
  });
}
