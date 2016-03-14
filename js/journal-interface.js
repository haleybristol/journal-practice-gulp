var Entry = require('./../js/Entry.js').Entry;

function getEntryTitle() {
  return document.getElementById('title').value;
}

function getEntryText() {
  return document.getElementById('body').value;
}

var template = "<article><h1>%title%</h1><h4>%time%</h4><p>%text%</p><h4>count= %count%</h4></article>"

function createArticle(entry){
  var article = template.replace('%title%', entry.title).
  replace('%time%', entry.timeStamp).
  replace('%text%', entry.text).
  replace('%count%', entry.wordCount());
  return article;
}


$(document).ready(function() {
    $('#text').submit(function(event){
      event.preventDefault();
      var entry = new Entry(getEntryTitle(), getEntryText());
      $('#blog').append(createArticle(entry));
    })
})
