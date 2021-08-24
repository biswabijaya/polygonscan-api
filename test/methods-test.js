'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('api', function() {

  describe('account', function() {
    it('getminedblocks', function(done){
      var api = init();
      var txlist = api.account.getminedblocks('0x46a3a41bd932244dd08186e4c19f1a7e48cbcdf4');
      txlist.then(function(res){
        assert.ok(res);
        done();
      });
    });
    /**
     * @deprecated by Polygonscan
     * https://polygonscan.com/apis#tokens
     */
    // it('tokenbalance by name', function (done) {
    //   var api = init();
    //
    //   var supply = api.account.tokenbalance(
    //     '0x0000000000000000000000000000000000001010',
    //     'DGD'
    //   );
    //   supply.then(function (res) {
    //     assert.ok(res.result);
    //     done();
    //   });
    // });
    it('tokenbalance by address', function(done) {
      var api = init();
      var supply = api.account.tokenbalance('0x0000000000000000000000000000000000001010', false, '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063');
      supply.then(function(res){
        assert.ok(res);
        done();
      });
    });
    it('txlist', function(done){
      var api = init();
      var txlist = api.account.txlist('0x0000000000000000000000000000000000001010');
      txlist.then(function(res){
        assert.ok(res);
        done();
      });
    });
    it('txlistinternal by hash', function(done){
      var api = init();
      var txlist = api.account.txlistinternal('0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170');
      txlist.then(function(res){
        assert.ok(res);
        done();
      }).catch(done);
    });
    it('txlistinternal by address', function(done){
      var api = init();
      var txlist = api.account.txlistinternal(null, '0x0000000000000000000000000000000000001010');
      txlist.then(function(res) {
        assert.ok(res);
        done();
      });
    });
    it('balance', function(done){
      var api = init();
      var balance = api.account.balance('0x0000000000000000000000000000000000001010');
      balance.then(function(res){
        assert.ok(res);
        done();
      });
    });
    it('balance multi', function(done){
      var api = init();
      var balance = api.account.balance(['0x0000000000000000000000000000000000001010']);
      balance.then(function(res){
        assert.ok(res);
        done();
      });
    });
    it('tokentx', function(done){
      var api = init();
      var txlist = api.account.tokentx(
        '0x0000000000000000000000000000000000001010',
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        1, 'latest', 'asc'
      );
      txlist.then(function(res){
        assert.ok(res);
        done();
      });
    });
  });
  describe('stats', function(){
    it('ethsupply', function(done){
      var api = init();
      var supply = api.stats.ethsupply();
      supply.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('tokensupply by tokenname', function(done){
      var api = init();
      var supply = api.stats.tokensupply('MKR');
      supply.then(function(res){
        assert.ok(res);
        done();
      });
    });
    it('tokensupply by address', function(done){
      var api = init();
      var supply = api.stats.tokensupply(null, '0x0000000000000000000000000000000000001010');
      supply.then(function(res){
        assert.ok(res);
        done();
      }).catch(done);
    });

    it('ethprice', function(done){
      var api = init();
      var price = api.stats.ethprice();
      price.then(function(res){
        assert.ok(res);
        done();
      }).catch(done);
    });
  });


  it('block.getblockreward', function(done){
    var api = init();
    var blockreward = api.block.getblockreward();
    blockreward.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('transaction.getstatus', function(done){
    var api = init();
    var status = api.transaction.getstatus('0x591ca00bf6b404e24e21732023abc0416673beff9586f37e61fb0f07ca560940');
    status.then(function(res){
      assert.ok(res);
      done();
    });
  });
  // test for bug #31
  // see https://github.com/sebs/etherscan-api/issues/31
  it('contract.getabi for a contract that is not verified by etherscan: error', function(done){
    var api = init();
    var abi = api.contract.getabi('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
    abi.then(function(){
      assert.false(true, 'should not be a success');
    }).catch(err=> {
      assert.equal(err, 'Contract source code not verified');
      done();
    });
  });



  describe('proxy', function() {
    it('proxy.eth_blockNumber', function(done){
      var api = init();
      var res = api.proxy.eth_blockNumber();
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });


    it('proxy.eth_getBlockByNumber', function(done){
      var api = init();
      var res = api.proxy.eth_getBlockByNumber('0x10d4f');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });


    it('proxy.eth_getUncleByBlockNumberAndIndex', function(done){
      var api = init();
      var res = api.proxy.eth_getUncleByBlockNumberAndIndex('0x210A9B', '0x0');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getBlockTransactionCountByNumber', function(done){
      var api = init();
      var res = api.proxy.eth_getBlockTransactionCountByNumber('0x10FB78');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getTransactionByHash', function(done){
      var api = init();
      var res = api.proxy.eth_getTransactionByHash('0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });


    it('proxy.eth_getTransactionByBlockNumberAndIndex', function(done){
      var api = init();
      var res = api.proxy.eth_getTransactionByBlockNumberAndIndex('0x10d4f', '0x0');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getTransactionCount', function(done){
      var api = init();
      var res = api.proxy.eth_getTransactionCount('0x2910543af39aba0cd09dbb2d50200b3e800a63d2');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    xit('proxy.eth_sendRawTransaction', function(done){
      var api = init();
      var res = api.proxy.eth_sendRawTransaction('0xf904808000831cfde080');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getTransactionReceipt', function(done){
      var api = init();
      var res = api.proxy.eth_getTransactionReceipt('0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_call', function(done){
      var api = init();
      var res = api.proxy.eth_call(
        '0xAEEF46DB4855E25702F8237E8f403FddcaF931C0',
        '0x70a08231000000000000000000000000e16359506c028e51f16be38986ec5746251e9724',
        'latest'
      );
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getCode', function(done){
      var api = init();
      var res = api.proxy.eth_getCode('0xf75e354c5edc8efed9b59ee9f67a80845ade7d0c', 'latest');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_getStorageAt', function(done){
      var api = init();
      var res = api.proxy.eth_getStorageAt('0x6e03d9cce9d60f3e9f2597e13cd4c54c55330cfd', '0x0', 'latest');
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    it('proxy.eth_gasPrice', function(done){
      var api = init();
      var res = api.proxy.eth_gasPrice();
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });

    xit('proxy.eth_estimateGas', function(done){
      var api = init();
      var res = api.proxy.eth_estimateGas(
        '0xf0160428a8552ac9bb7e050d90eeade4ddd52843',
        '0xff22',
        '0x051da038cc',
        '0xffffff'
      );
      res.then(function(res){
        assert.ok(res);
        done();
      });
    });
  });
});
