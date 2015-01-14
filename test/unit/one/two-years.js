describe('One event; two years', function() {
  beforeEach(function() {
    this.events = fixtures.one.twoYears;
  });

  describe('and the scale is years', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'years'));
    });

    it('should have two keys', function() {
      expect(this.segments).to.have.keys([
        '2014-01-01', '2015-01-01'
      ]);
    });

    it('should have a single event in each key', function() {
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

  describe('and the scale is months', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'months'));
    });

    it('should have two keys', function() {
      expect(this.segments).to.have.keys([
        '2014-12-01', '2015-01-01'
      ]);
    });

    it('should have a single event in that key', function() {
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

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks'));
    });

    it('should have 2 keys', function() {
      expect(this.segments).to.have.keys([
        '2014-12-28', '2015-01-04'
      ]);
    });

    it('should have a single event within each those keys', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(1);
      });
    });

    it('should have the event passed in within each those keys', function() {
      _.each(this.segments, function(s) {
        expect(s[0]).to.deep.equal(this.events[0]);
      }, this);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days'));
    });

    it('should have seven keys', function() {
      expect(this.segments).to.have.keys([
        '2014-12-30', '2014-12-31', '2015-01-01',
        '2015-01-02', '2015-01-03', '2015-01-04',
        '2015-01-05'
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
