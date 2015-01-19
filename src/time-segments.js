import _ from 'underscore';
import moment from 'moment';

var TimeSegments = {

  // Segment an array of events by scale
  segment(events, scale, options) {
    scale = scale || 'weeks';
    options = options || {};
    _.defaults(options, {
      startAttribute: 'start',
      endAttribute: 'end'
    });
    var start, end, startIsMoment, endIsMoment;
    events = _.chain(events)
      .clone()
      .map(e => {
        start = e[options.startAttribute];
        end = e[options.endAttribute];
        startIsMoment = moment.isMoment(start);
        endIsMoment = moment.isMoment(end);
        if ((!startIsMoment || !endIsMoment) && !options.timeFormat) {
          throw new Error('Parsing strings into dates requires the `timeFormat` option.');
        }
        start = moment.isMoment(start) ? start : moment(start, options.timeFormat);
        end = moment.isMoment(end) ? end : moment(end, options.timeFormat);
        return _.extend(e, {start, end});
      })
      .sortBy(e => { return e.start.unix(); })
      .value();

    var segments = {};

    // Clone our events so that we're not modifying the original
    // objects. Loop through them, inserting the events into the
    // corresponding segments
    _.each(_.clone(events), e => {
      
      // Calculate the duration of the event; this determines
      // how many segments it will be in
      var startMoment = moment.utc(e[options.startAttribute]).startOf(scale);
      var endMoment = moment.utc(e[options.endAttribute]).endOf(scale).add(1, 'milliseconds');

      // For each duration, add the event to the corresponding segment
      var segmentStart;
      for(var i = 0, duration = endMoment.diff(startMoment, scale); i < duration; i++) {
        segmentStart = moment.utc(startMoment).add(i, scale).unix();
        if (!segments[segmentStart]) { segments[segmentStart] = []; }
        segments[segmentStart].push(_.clone(e));
      }
    });
    return segments;
  }
};

export default TimeSegments;
