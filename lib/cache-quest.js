var request = require('request'),
    HTTPRequestCache = require('./http-request-cache');

module.exports = function (options) {
    var cache = new HTTPRequestCache(options);
    var cachequest = function (uri, options, callback) {
        if (typeof uri === 'undefined') throw new Error('undefined is not a valid uri or options object.');
        if ((typeof options === 'function') && !callback) callback = options;
        if (options && typeof options === 'object') {
            options.uri = uri;
        } else if (typeof uri === 'string') {
            options = {uri:uri};
        } else {
            options = uri;
        }
        var cachedBody = cache.find(options);
        if (cachedBody) {
            console.dir(cachedBody);
            return callback(null, null, cachedBody);
        }
        return request(options, function(error, response, body) {
            !error && response.statusCode === 200 && cache.save(options, body);
            callback(error, response, body);
        });
    };

    cachequest.get = cachequest;

    return cachequest;
};
