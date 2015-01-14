//
// Time Segments
//

var TimeSegments = {

  // Segment an array of events by scale
  segment: function(events, scale, options) {
    scale = scale || 'weeks';
    var segments = {};

    // Clone our events so that we're not modifying the original
    // objects. Loop through them, inserting the events into the
    // corresponding segments
    _.each(_.clone(events), function(e) {
      TimeSegments._insertIntoSegments(segments, e, scale);
    });
    return segments;
  },

  _insertIntoSegments: function(segments, e, scale) {

    // Calculate the duration of the event; this determines
    // how many segments it will be in
    var startMoment = moment.utc(e.start).startOf(scale);
    var endMoment = moment.utc(e.end).endOf(scale).add(1, 'milliseconds');
    var duration = endMoment.diff(startMoment, scale);

    // For each duration, add the event to the corresponding segment
    var segmentStart;
    for(var i = 0; i < duration; i++) {
      segmentStart = moment.utc(startMoment).add(i, scale).unix();
      if (!segments[segmentStart]) { segments[segmentStart] = []; }
      segments[segmentStart].push(_.clone(e));
    }
  }
};
