describe('Failing to pass timeFormat', function() {
  it('should throw an error', function() {
    var options = {startAttribute: 'first_day', endAttribute: 'last_day'};
    expect(function() {
      TimeSegments.segment(fixtures.options.differentAttrs, 'years', options);
    }).to.throw('Parsing strings into dates requires the `timeFormat` option.');
  });
});
