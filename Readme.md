# Polygonscan API

## Development of a NEXTGEN Version has started - please stand by

A way to access the [polygonscan.com api](https://polygonscan.com/apis) using promises. Fetch a diverse set of information about the blockchain.

Mainnet

```javascript
var api = require("polygonscan-api").init("YourApiKey");
var balance = api.account.balance("0x0000000000000000000000000000000000001010");
balance.then(function (balanceData) {
  console.log(balanceData);
});
```

## For testnet usage

Supported:

Latest

```javascript
// apikey, network, timeout
var api = require('polygonscan-api').init('YourApiKey','rinkeby'. '3000');
```

## Install

```bash
npm install polygonscan-api --save
```

## API Documentation

## Development workflow

- npm test - runs tests
  - npm run posttest - starts the linter
- npm run lint - preconfigured linter
- npm run docs - generates the apidocs
- npm run bundle - builds a new bundle
- npm run preversion - Steps before we create a new Tag
  - lint
  - changelog
- npm run pages - pushes generated apidocs to the server
- postversion - after generating a new version, push the tag to the server
- npm run changelog - generates a changelog and pushes it
