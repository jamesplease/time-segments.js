describe('Two events; concurrent', function() {
  beforeEach(function() {
    this.events = fixtures.twoEvents.concurrent;
  });

  describe('and the scale is years', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'years'));
    });

    it('should have a single segment', function() {
      expect(this.segments).to.have.keys(['2015-01-01']);
    });

    it('should have two events in that segment', function() {
      expect(this.segments['2015-01-01']).to.have.length(2);
    });

    it('should have the earliest event first', function() {
      expect(this.segments['2015-01-01'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the second event next', function() {
      expect(this.segments['2015-01-01'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is months', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'months'));
    });

    it('should have a single segment', function() {
      expect(this.segments).to.have.keys(['2015-03-01']);
    });

    it('should have two events in that segment', function() {
      expect(this.segments['2015-03-01']).to.have.length(2);
    });

    it('should have the earliest event first', function() {
      expect(this.segments['2015-03-01'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the second event next', function() {
      expect(this.segments['2015-03-01'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks'));
    });

    it('should have two segments', function() {
      expect(this.segments).to.have.keys([
        '2015-03-08', '2015-03-15'
      ]);
    });

    it('should have two events in those segments', function() {
      expect(this.segments['2015-03-08']).to.have.length(2);
      expect(this.segments['2015-03-15']).to.have.length(2);
    });

    it('should have the earliest event first in both segments', function() {
      expect(this.segments['2015-03-08'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2015-03-15'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the second event next in both segments', function() {
      expect(this.segments['2015-03-08'][1]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-03-15'][1]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days'));
    });

    it('should have 8 segments', function() {
      expect(this.segments).to.have.keys([
        '2015-03-10', '2015-03-11', '2015-03-12',
        '2015-03-13', '2015-03-14', '2015-03-15',
        '2015-03-16', '2015-03-17'
      ]);
    });

    it('should have two events in each of those segments', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(2);
      });
    });

    it('should have the earliest event first in both segments', function() {
      _.each(this.segments, function(s) {
        expect(s[0]).to.deep.equal(this.events[0]);
      }, this);
    });

    it('should have the second event next in both segments', function() {
      _.each(this.segments, function(s) {
        expect(s[1]).to.deep.equal(this.events[1]);
      }, this);
    });
  });
});
