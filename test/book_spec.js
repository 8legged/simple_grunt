/* jshint expr: true */
var expect = require('chai').expect;
// 'use strict';

var Book = require('../lib/book').Book;
describe('Book object tests', function() {

  var book;
  beforeEach(function() {
    book = new Book('Addy Osmani', 'Learning JS', 2013);
  });
  describe('constructor', function() {
    it('book should be truthy(exists)', function() {
      expect(book).to.be.ok;
    });
    it('book should have author property', function() {
      expect(book).to.have.property('author');
    });

  });
});
