describe('Two events; nonconcurrent', function() {
  beforeEach(function() {
    this.events = fixtures.twoEvents.nonconcurrent;
    this.options = {timeFormat: 'YYYY-MM-DD'};
  });

  describe('and the scale is years', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'years', this.options));
    });

    it('should have two segments', function() {
      expect(this.segments).to.have.keys(['2014-01-01', '2015-01-01']);
    });

    it('should have one event in each segment', function() {
      expect(this.segments['2014-01-01']).to.have.length(1);
      expect(this.segments['2015-01-01']).to.have.length(1);
    });

    it('should have the 2014 event in the 2014 segment', function() {
      expect(this.segments['2014-01-01'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the 2015 event in the 2015 segment', function() {
      expect(this.segments['2015-01-01'][0]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is months', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'months', this.options));
    });

    it('should have two segments', function() {
      expect(this.segments).to.have.keys(['2014-12-01', '2015-01-01']);
    });

    it('should have one event in each segment', function() {
      expect(this.segments['2014-12-01']).to.have.length(1);
      expect(this.segments['2015-01-01']).to.have.length(1);
    });

    it('should have the December event in the December segment', function() {
      expect(this.segments['2014-12-01'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the January event in the January segment', function() {
      expect(this.segments['2015-01-01'][0]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is weeks', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'weeks', this.options));
    });

    it('should have two segments', function() {
      expect(this.segments).to.have.keys([
        '2014-12-07', '2014-12-14', '2015-01-04',
        '2015-01-11', '2015-01-18', '2015-01-25'
      ]);
    });

    it('should have one event in the 2014 segments, and one event in the 2015 segments', function() {
      expect(this.segments['2014-12-07']).to.have.length(1);
      expect(this.segments['2014-12-14']).to.have.length(1);
      expect(this.segments['2015-01-04']).to.have.length(1);
      expect(this.segments['2015-01-11']).to.have.length(1);
      expect(this.segments['2015-01-18']).to.have.length(1);
      expect(this.segments['2015-01-25']).to.have.length(1);
    });

    it('should have the 2014 events in the 2014 segments', function() {
      expect(this.segments['2014-12-07'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2014-12-14'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the 2015 events in the 2015 segments', function() {
      expect(this.segments['2015-01-04'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-11'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-18'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-25'][0]).to.deep.equal(this.events[1]);
    });
  });

  describe('and the scale is days', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(this.events, 'days', this.options));
    });

    it('should have 24 segments', function() {
      expect(Object.keys(this.segments)).to.have.length(24);
      expect(this.segments).to.contain.keys(
        '2014-12-10', '2014-12-11', '2014-12-14',
        '2015-01-10', '2015-01-11', '2015-01-15',
        '2015-01-16', '2015-01-17', '2015-01-28'
      );
    });

    it('should have one event in each segment', function() {
      _.each(this.segments, function(s) {
        expect(s).to.have.length(1);
      });
    });

    it('should have the 2015 event in the 2015 segments', function() {
      expect(this.segments['2014-12-10'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2014-12-11'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2014-12-12'][0]).to.deep.equal(this.events[0]);
      expect(this.segments['2014-12-14'][0]).to.deep.equal(this.events[0]);
    });

    it('should have the 2014 event in the 2014 segments', function() {
      expect(this.segments['2015-01-10'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-14'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-20'][0]).to.deep.equal(this.events[1]);
      expect(this.segments['2015-01-28'][0]).to.deep.equal(this.events[1]);
    });
  });
});
