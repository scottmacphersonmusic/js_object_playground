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

Performance.prototype.paysEnough = function() {
  if (this.compensation < 200)
    return false;
  else if (this.date.getHours() < 12 && this.compensation < 400)
    return false;
  else
    return true;
};

Performance.prototype.changeVenue = function(venue) {
  this.venue = venue
};

Performance.prototype.changeDate = function(date) {
  this.date = date
};

module.exports = Performance;
