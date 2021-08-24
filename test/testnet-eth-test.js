'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('testnet eth', function() {
  xit('eth.getminedblocks', function(done){
    var api = init("YourApiKey",'morden');
    //In testnet there are no mined blocks by this account
    //reference - https://api-testnet.polygonscan.com/api?module=account&action=getminedblocks&address=0x0000000000000000000000000000000000001010&blocktype=blocks&apikey=YourApiKeyToken
    //  var txlist = api.account.getminedblocks('0x46a3a41bd932244dd08186e4c19f1a7e48cbcdf4');
// will use other address instead
    var txlist = api.account.getminedblocks('0x3D6F8823Ad21CD299814B62D198d9001E67E20B3');
    txlist.then(function(res){
      assert.ok(res);
      done();
    });
  });
});
