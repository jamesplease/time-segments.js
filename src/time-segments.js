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

    var segments = {}, start, end, startIsMoment, endIsMoment;
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
        start = moment.isMoment(start) ? start : moment.utc(start, options.timeFormat);
        end = moment.isMoment(end) ? end : moment.utc(end, options.timeFormat);
        return {
          start, end,
          original: _.clone(e)
        };
      })
      .sortBy(e => e.start.unix())
      .each(e => {
        // Calculate the duration of the event; this determines
        // how many segments it will be in
        var startMoment = moment.utc(e.start).startOf(scale);
        var endMoment = moment.utc(e.end).endOf(scale).add(1, 'milliseconds');

        // For each duration, add the event to the corresponding segment
        var segmentStart;
        for(var i = 0, duration = endMoment.diff(startMoment, scale); i < duration; i++) {
          segmentStart = moment.utc(startMoment).add(i, scale).unix();
          if (!segments[segmentStart]) { segments[segmentStart] = []; }
          segments[segmentStart].push(e.original);
        }
      });      
    return segments;
  }
};

export default TimeSegments;
