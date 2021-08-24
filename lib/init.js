"use strict";
const proxy = require('./proxy');
const stats = require('./stats');
const transaction = require('./transaction');
const contract = require('./contract');
const account = require('./account');
/**
 * @module polygonscan/api
 */

/**
 * @param {string} apiKey - (optional) Your Polygonscan APIkey
 * @param {string} chain - (optional) Testnet chain keys [ropsten, rinkeby, kovan]
 * @param {number} timeout - (optional) Timeout in milliseconds for requests, default 10000
 */
module.exports = function(apiKey, chain, timeout) {

  if (!apiKey) {
    apiKey = "YourApiKey";
  }


  if (!timeout) {
    timeout = 10000;
  }

  var getRequest = require('./get-request')(chain, timeout);

  /** @lends module:polygonscan/api */
  return {
    /**
     * @namespace
     */
    proxy: proxy(getRequest, apiKey),
    /**
     * @namespace
     */
    stats: stats(getRequest, apiKey),
    /**
     * @namespace
     */
    transaction: transaction(getRequest, apiKey),
    /**
     * @namespace
     */
    contract: contract(getRequest, apiKey),
    /**
     * @namespace
     */
    account: account(getRequest, apiKey)
  };
};
