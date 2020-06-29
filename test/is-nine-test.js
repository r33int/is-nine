var nine = require('../index.js');
var assert = require("assert");

describe('The is-nine package', function() {
   it('should return true for 9', function() {
      assert.equal(true, nine(9));
   }),
   it('should return true for "9"', function() {
      assert.equal(true, nine("9"));
   }),
   it('should return true for 3+6', function() {
      assert.equal(true, nine(3+6));
   }),
   it('should return true for 9.0', function() {
      assert.equal(true, nine(9.0));
   }),
   it('should return true for "IX"', function() {
      assert.equal(true, nine("IX"));
   }),
   it('should return true for "nine"', function() {
      assert.equal(true, nine("nine"));
   }),
   it('should return true for "neuf"', function() {
      assert.equal(true, nine("neuf"));
   }),
   it('should return true for "nueve"', function() {
      assert.equal(true, nine("nueve"));
   }),

   it('should return false for 7', function() {
      assert.notEqual(true, nine(7));
   }),
   it('should return false for 90', function() {
      assert.notEqual(true, nine(90));
   }),
   it('should return false for -9', function() {
      assert.notEqual(true, nine(-9));
   })
});
