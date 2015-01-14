describe('Humanize', function() {
  beforeEach(function() {
    this.data = {
      1421250669: {
        name: 'james'
      },
      1420250669: 'asdf'
    };
    this.humanized = humanize(this.data);
  });

  it('should humanize the keys, but not modify the values', function() {
    expect(this.humanized).to.deep.equal({
      '2015-01-14': {
        name: 'james'
      },
      '2015-01-03': 'asdf'
    });
  });

  it('should clone the values', function() {
    expect(this.humanized['2015-01-14']).to.not.equal(this.data[1421250669]);
  });
});
