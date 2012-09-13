var Cache = require('./cache');

module.exports = Cache.extend({

    find: function (requestOptions) {
        return this._super(JSON.stringify(requestOptions));
    },

    save: function (requestOptions, responseData) {
        return this._super(JSON.stringify(requestOptions), responseData);
    }

});
