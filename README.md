# node-dan-api

This is a Node.js library for [Dan](https://dan.com/) api.

## Installation

```bash
npm install dan-api
```

## Usage

```js
const DanApi = require('dan-api');

const api = new DanApi({
    token: 'YOUR_TOKEN',
    timeout: 10000,
    sandbox: false,
});

(async () => {
    console.log(await api.dp.search('dan'));
})();
```