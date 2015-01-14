//
// Time Segments
//

var TimeSegments = {
  segment: function(events, scale, options) {
    scale = scale || 'weeks';
    events = _.chain(events).clone().sortBy('start').value();
    var timeline = {};
    _.each(events, function(e) {
      TimeSegments._insertIntoTimeline(timeline, e, scale);
    });
    return timeline;
  },

  _insertIntoTimeline: function(timeline, e, scale) {
    var startMoment = moment.utc(e.start).startOf(scale);
    var endMoment = moment.utc(e.end).endOf(scale);
    var exclusiveEnd = moment.utc(endMoment).add(1, 'milliseconds');
    var duration = exclusiveEnd.diff(startMoment, scale);
    var segmentStart;
    for(var i = 0; i < duration; i++) {
      segmentStart = moment.utc(startMoment).add(i, scale).unix();
      if (!timeline[segmentStart]) { timeline[segmentStart] = []; }
      timeline[segmentStart].push(_.clone(e));
    }
  }
};
