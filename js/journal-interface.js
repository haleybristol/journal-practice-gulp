var Entry = require('./../js/Entry.js').Entry;

function getEntryTitle() {
  return document.getElementById('title').value;
}

function getEntryText() {
  return document.getElementById('body').value;
}

$(document).ready(function() {
    $('#text').submit(function(event){
      event.preventDefault();
      var entry = new Entry(getEntryTitle(), getEntryText());
      console.log(entry);
      console.log(entry.wordCount().length);
    })
});
