/*  global describe it before beforeEach after afterEach:true*/
var assert = require('assert');
var should = require('should');
var User = require('./user');

// Hooks
// Mocha provides the hooks before(), after(), beforeEach(), and afterEach(), which can be used to set up preconditions and clean up after your tests.
describe('hooks', function() {
  before(function() {
    console.log('runs before all tests in this block');
  });

  after(function() {
    console.log('runs after all tests in this block');
  });

  beforeEach(function() {
    console.log('runs before each test in this block');
  });

  afterEach(function() {
    console.log('runs after each test in this block');
  });


  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
      });
    });
  });

  // Synchronous Code
  // When testing synchronous code, omit the callback and Mocha will automatically continue on to the next test.
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        [1, 2, 3].indexOf(5).should.equal(-1);
        [1, 2, 3].indexOf(0).should.equal(-1);
      });
    });
  });

  // Asynchronous Code
  // Testing asynchronous code with Mocha could not be simpler! Simply invoke the callback when your test is complete. By adding a callback (usually named done) to it() Mocha will know that it should wait for completion.
  describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function(done) {
        var user = new User('Luna');
        user.save(done);
      });
    });
  });

});


function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [{
    args: [1, 2],
    expected: 3
  }, {
    args: [1, 2, 3],
    expected: 6
  }, {
    args: [1, 2, 3, 4],
    expected: 10
  }];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
