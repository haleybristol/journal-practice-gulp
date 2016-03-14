var moment = require('moment');

var Entry = function(title, text) {
  this.title = title;
  this.text = text;
  this.timeStamp = moment().calendar();
}

Entry.prototype.wordCount = function (){
  return this.text.split(" ").length;
}


exports.Entry = Entry
