describe('Two events; overlapping', function() {
  beforeEach(function() {
    this.events = fixtures.twoEvents.overlapping;
    this.options = {timeFormat: 'YYYY-MM-DD'};
  });

  describe('and the scale is years', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'years', this.options));
    });

    it('should have one segment', function() {
      expect(this.segments).to.have.keys(['2015-01-01']);
    });

    it('should have both events in that segment', function() {
      expect(this.segments['2015-01-01']).to.have.length(2);
    });

    it('should have the events in the correct order', function() {
      expect(this.segments['2015-01-01'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2015-01-01'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is months', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'months', this.options));
    });

    it('should have one segment', function() {
      expect(this.segments).to.have.keys(['2015-03-01']);
    });

    it('should have both events in that segment', function() {
      expect(this.segments['2015-03-01']).to.have.length(2);
    });

    it('should have the events in the correct order', function() {
      expect(this.segments['2015-03-01'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2015-03-01'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks', this.options));
    });

    it('should have one segment', function() {
      expect(this.segments).to.have.keys(['2015-03-08']);
    });

    it('should have both events in that segment', function() {
      expect(this.segments['2015-03-08']).to.have.length(2);
    });

    it('should have the events in the correct order', function() {
      expect(this.segments['2015-03-08'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2015-03-08'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days', this.options));
    });

    it('should have three segments', function() {
      expect(this.segments).to.have.keys(['2015-03-10', '2015-03-11', '2015-03-12']);
    });

    it('should have the right lengths for each segment', function() {
      expect(this.segments['2015-03-10']).to.have.length(1);
      expect(this.segments['2015-03-11']).to.have.length(2);
      expect(this.segments['2015-03-10']).to.have.length(1);
    });

    it('should have the earliest event in the first segment', function() {
      expect(this.segments['2015-03-10'][0]).to.deep.equal(this.events[0]);
    });

    it('should have both events in the middle segment', function() {
      expect(this.segments['2015-03-10'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2015-03-11'][1]).to.deep.equal(this.events[1]);
    });

    it('should have the second event in the last segment', function() {
      expect(this.segments['2015-03-12'][0]).to.deep.equal(this.events[1]);
    });
  });
});
