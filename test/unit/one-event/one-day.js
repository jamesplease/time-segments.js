describe('One event; one day', function() {
  beforeEach(function() {
    this.events = fixtures.oneEvent.oneDay;
  });

  describe('and the scale is years', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'years'));
    });

    it('should have a single key', function() {
      expect(this.segments).to.have.keys(['2015-01-01']);
    });

    it('should have a single event in that key', function() {
      expect(this.segments['2015-01-01']).to.have.length(1);
    });

    it('should have the event passed in within that key', function() {
      expect(this.segments['2015-01-01'][0]).to.deep.equal(this.events[0]);
    });
  });

  describe('and the scale is months', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'months'));
    });

    it('should have a single key', function() {
      expect(this.segments).to.have.keys(['2015-03-01']);
    });

    it('should have a single event in that key', function() {
      expect(this.segments['2015-03-01']).to.have.length(1);
    });

    it('should have the event passed in within that key', function() {
      expect(this.segments['2015-03-01'][0]).to.deep.equal(this.events[0]);
    });
  });

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks'));
    });

    it('should have a single key', function() {
      expect(this.segments).to.have.keys(['2015-03-22']);
    });

    it('should have a single event in that key', function() {
      expect(this.segments['2015-03-22']).to.have.length(1);
    });

    it('should have the event passed in within that key', function() {
      expect(this.segments['2015-03-22'][0]).to.deep.equal(this.events[0]);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days'));
    });

    it('should have a single key', function() {
      expect(this.segments).to.have.keys(['2015-03-28']);
    });

    it('should have a single event in that key', function() {
      expect(this.segments['2015-03-28']).to.have.length(1);
    });

    it('should have the event passed in within that key', function() {
      expect(this.segments['2015-03-28'][0]).to.deep.equal(this.events[0]);
    });
  });
});
