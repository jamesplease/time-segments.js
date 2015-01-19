describe('A single event with moments as the start and end', function() {
  beforeEach(function() {
    this.events = fixtures.options.moments;
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
