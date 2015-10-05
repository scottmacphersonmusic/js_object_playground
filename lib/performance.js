var Performance = function(venue, date, compensation) {
  this.venue = venue
  this.date = date
  this.compensation = compensation
};

var formatDate = function(date) {
  var day, time
  day = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
  time = date.getHours() + ":" + date.getMinutes();
  return day + " @ " + time;
};

Performance.prototype.toString = function() {
  return this.venue + "\n" + formatDate(this.date) + "\n$" + this.compensation + "\n";
};

module.exports = Performance;
