const querystring = require('querystring');
module.exports = function(getRequest, apiKey) {
  return {
    /**
     * Returns the supply of Tokens
     * @param {string} tokenname - Name of the Token
     * @param {string} contractaddress - Address from token contract
     * @example
     * var supply = api.stats.tokensupply(null, '0x0000000000000000000000000000000000001010');
     * @returns {Promise.<object>}
     */
    tokensupply(tokenname, contractaddress) {
      const module = 'stats';
      const action = 'tokensupply';

      let params = {
        module, action, apiKey
      };

      if (tokenname) {
        params.tokenname = tokenname;
      }

      if (contractaddress) {
        params.contractaddress = contractaddress;
      }

      var query = querystring.stringify(params);
      return getRequest(query);
    },
  };
};
