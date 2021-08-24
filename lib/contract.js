const querystring = require('querystring');
module.exports = function(getRequest, apiKey) {
  return {
    /**
     * Returns the ABI/Interface of a given contract
     * @param {string} address - Contract address
     * @example
     * api.contract
     *  .getabi('0x2791bca1f2de4661ed88a30c99a7a9449aa84174')
     *  .at('0x2791bca1f2de4661ed88a30c99a7a9449aa84174')
     *  .memberId('0x2791bca1f2de4661ed88a30c99a7a9449aa84174')
     *  .then(console.log)
     * @returns {Promise.<object>}
     */
    getabi(address) {
      const module = 'contract';
      const action = 'getsourcecode';

      var query = querystring.stringify({
        module, action, address, apiKey
      });

      return getRequest(query);
    }
  };
};
