// var expect = require('chai').expect;

exports.Book = function(author, title, year) {
'use strict';
  var book = {
    author: author,
    title: title,
    year: year,
  };

  return book;
};
