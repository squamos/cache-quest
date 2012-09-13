cache-quest
==========

Easy to use drop-in cache for simple HTTP requests

## Usage

Cache-Quest can be used just like [request](https://github.com/mikeal/request)

```javascript
var request = require('cache-quest')({expirationTimeout: 10000});
request('http://www.google.com', function (error, response, body) {
  if (!error) {
    console.log(body); // Print the google web page.
  }
});
```

## Support

Currently supports `request` and `request.get`