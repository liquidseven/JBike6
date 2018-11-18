//var Matrix = require('Matrix');
var assert = require('assert');
const math = require('mathjs')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Math', function() {
  let headAngle = 0
  let lambda = Math.PI / 2 - headAngle

  let massMatrix = math.matrix([frontWheelMass, frontForkMass, frontBasketMass, rearWheelMass, rearFrameMass, rearRackMass, riderMass])

  let R1 = math.matrix([[Math.cos(lambda), -Math.sin(lambda)], [Math.sin(lambda), Math.cos(lambda)]])

  let O1 = math.matrix([[2], [4]])
  let x = O1.get([0,0])
  let y = O1.get([1,0])
  let p0 = math.eval('R1[1:1,:] + x', {R1, x})
  let p1 = math.eval('R1[2:2,:] + y', {R1, y})
  it('Testing', function() {
    assert.equal(2,2)
  })
})