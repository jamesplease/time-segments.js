function setupTestHelpers() {
  beforeEach(function() {
    this.sinon = sinon.sandbox.create();
    global.stub = _.bind(this.sinon.stub, this.sinon);
    global.spy  = _.bind(this.sinon.spy, this.sinon);
  });

  afterEach(function() {
    this.sinon.restore();
    delete global.stub;
    delete global.spy;
  });
}

var node = typeof exports !== 'undefined';

// Humanize an array of Events or Segments
var humanReadableFormat = 'YYYY-MM-DD';
function humanize(segments) {
  var ret = {}, key;
  _.each(segments, function(s, unix) {
    key = moment.unix(unix).utc().format(humanReadableFormat);
    ret[key] = _.clone(s);
  });
  return ret;
}

if (node) {
  global.humanize = humanize;
  setupTestHelpers();
}

// when running in browser
else {
  this.global = window;
  mocha.setup('bdd');

  window.expect = chai.expect;
  window.sinon = sinon;

  onload = function() {
    mocha.checkLeaks();
    mocha.globals(['stub', 'spy']);
    mocha.run();
    setupTestHelpers();
  };
}
