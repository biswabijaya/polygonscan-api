'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('proxy', function() {
  it('eth.getminedblocks', function(done){
    var api = init();
    var txlist = api.account.getminedblocks('0x46a3a41bd932244dd08186e4c19f1a7e48cbcdf4');
    txlist.then(function(res){
      assert.ok(res);
      done();
    });
  });
});
