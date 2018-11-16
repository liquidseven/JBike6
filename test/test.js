//var Matrix = require('Matrix');
var assert = require('assert');
var Matrix = require('./../Matrix')
import Matrix from '../src/Matrix'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});