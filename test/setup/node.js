// Create our JSDom document
global.jsdom = require('jsdom').jsdom;
global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.parentWindow;
global.navigator = window.navigator = {
  userAgent: 'NodeJS JSDom',
  appVersion: ''
};

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

global._ = require('underscore');
global.moment = require('moment');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

global.fixtures = {};
global.fixtures.one = require('../fixtures/one');
global.fixtures.two = require('../fixtures/two');

// Load the library
global.TimeSegments = require('../../tmp/time-segments');
