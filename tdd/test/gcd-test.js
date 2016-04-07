/*  global describe it:true*/
var assert = require('assert');
var gcd = require('../gcd');

describe('gcd', function() {
  it('calculates GCD of 9 and 12', function() {
    assert.equal(gcd(9, 12), 3);
  });

  it('calculates GCD of 6 and 4', function() {
    assert.equal(gcd(6, 4), 2);
  });

  it('calculates GCD of 70 and 49', function() {
    assert.equal(gcd(70, 49), 7);
  });

  it('calculates GCD of 50 and 51', function() {
    assert.equal(gcd(50, 51), 1);
  });
});
