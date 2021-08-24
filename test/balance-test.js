'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('balance', function() {
  it('returns a promise', function( ){
    var api = init();
    var balance = api.account.balance('0x0000000000000000000000000000000000001010');
    assert.ok(balance.then);
  });

  it('executes the promise', function(done){
    var api = init();
    var balance = api.account.balance('0x0000000000000000000000000000000000001010');
    balance.then(function(){
      done();
    });
  });

  it('has data', function(done){
    var api = init();
    var balance = api.account.balance('0x0000000000000000000000000000000000001010');
    balance.then(function(res){
      assert.ok(res);
      done();
    });
  });

});
