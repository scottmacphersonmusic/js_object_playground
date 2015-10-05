var Performance = require('../lib/performance');
var expect = require('chai').expect

describe('A Performance instance', function() {
  it('should have a venue, a date, and the compensation', function() {
    var date = new Date(2015, 10, 7, 20, 30);
    var performance = new Performance('Paramount', date, 350);
    expect(performance.venue).to.equal('Paramount');
    expect(performance.date).to.be.a('date');
    expect(performance.compensation).to.equal(350);
  });
});