'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('testnet balance', function() {
  it('returns a promise', function( ){
    var api = init('YourApiKeyToken','ropsten');
    var balance = api.account.balance('0xa10d2e55f0f87756d6f99960176120c512eb3e15');
    assert.ok(balance.then);
  });

  it('executes the promise', function(done){
    var api = init('YourApiKeyToken','ropsten');
    var balance = api.account.balance('0xa10d2e55f0f87756d6f99960176120c512eb3e15');
    balance.then(function(){
      done();
    });
  });

  it('has data', function(done){
    var api = init('YourApiKeyToken','ropsten');
    var balance = api.account.balance('0xa10d2e55f0f87756d6f99960176120c512eb3e15');
    balance.then(function(res){
      assert.ok(res);
      done();
    });
  });

});
