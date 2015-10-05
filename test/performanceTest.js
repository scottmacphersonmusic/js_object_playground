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

  it('should have a toString() method', function() {
    var date = new Date(2015, 10, 7, 20, 30);
    var performance = new Performance('Paramount', date, 350);
    expect(performance.toString()).to.equal(
      "Paramount\n10/6/2015 @ 20:30\n$350\n"
    );
  });

  it('should have a paysEnough() method', function() {
    var date = new Date(2015, 10, 7, 14, 0);
    var performance = new Performance('Some park', date, 300);
    expect(performance.paysEnough()).to.be.true;
    date.setHours(9);
    expect(performance.paysEnough()).to.be.false;
  });

  it('should have a changeVenue() method', function() {
    var date = new Date(2015, 10, 7, 20, 30);
    var performance = new Performance('Paramount', date, 350);
    performance.changeVenue('Triple Door');
    expect(performance.venue).to.equal('Triple Door');
  });

  it('should have a changeDate() method', function() {
    var date = new Date(2015, 10, 7, 20, 30);
    var performance = new Performance('Paramount', date, 350);
    var newDate = new Date(2015, 10, 7, 21, 0);
    performance.changeDate(newDate);
    expect(performance.date.getHours()).to.equal(21);
  });
});
