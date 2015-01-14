describe('One event; two months', function() {
  beforeEach(function() {
    this.events = fixtures.one.twoMonths;
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

    it('should have two keys', function() {
      expect(this.segments).to.have.keys([
        '2015-03-01', '2015-04-01'
      ]);
    });

    it('should have a single event in each key', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(1);
      });
    });

    it('should have the event passed in within each key', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(1);
      });
    });
  });

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks'));
    });

    it('should have a single key', function() {
      expect(this.segments).to.have.keys(['2015-03-29']);
    });

    it('should have a single event in that key', function() {
      expect(this.segments['2015-03-29']).to.have.length(1);
    });

    it('should have the event passed in within that key', function() {
      expect(this.segments['2015-03-29'][0]).to.deep.equal(this.events[0]);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days'));
    });

    it('should have six keys', function() {
      expect(this.segments).to.have.keys([
        '2015-03-29', '2015-03-30', '2015-03-31',
        '2015-04-01', '2015-04-02', '2015-04-03'
      ]);
    });

    it('should have a single event within each key', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(1);
      });
    });

    it('should have the event passed in within each key', function() {
      _.each(this.segments, function(s) {
        expect(s[0]).to.deep.equal(this.events[0]);
      }, this);
    });
  });
});
