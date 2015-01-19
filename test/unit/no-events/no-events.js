describe('No events', function() {
  describe('Passing in undefined', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment(undefined, 'years'));
    });

    it('should return an empty object', function() {
      expect(this.segments).to.deep.equal({});
    });
  });

  describe('Passing in an empty array', function() {
    beforeEach(function() {
      this.segments = humanize(TimeSegments.segment([], 'years'));
    });

    it('should return an empty object', function() {
      expect(this.segments).to.deep.equal({});
    });
  });
});
