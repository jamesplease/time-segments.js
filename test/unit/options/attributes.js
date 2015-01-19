describe('A single event with different start and end keys', function() {
  beforeEach(function() {
    this.events = fixtures.options.differentAttrs;
    var options = {
      startAttribute: 'first_day',
      endAttribute: 'last_day',
      timeFormat: 'YYYY-MM-DD'
    };
    this.segments = humanize(TimeSegments.segment(this.events, 'years', options));
  });

  it('should have a single key', function() {
    expect(this.segments).to.have.keys(['2014-01-01']);
  });

  it('should have a single event in that key', function() {
    expect(this.segments['2014-01-01']).to.have.length(1);
  });

  it('should have the event passed in within that key', function() {
    expect(this.segments['2014-01-01'][0]).to.deep.equal(this.events[0]);
  });
});
