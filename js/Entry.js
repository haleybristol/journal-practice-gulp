
var Entry = function(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.wordCount = function (){
  return this.text.split(" ");
}

exports.Entry = Entry;
