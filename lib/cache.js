var Class = require('uberclass');

module.exports = Class.extend({

    init: function (options) {
        this.expirationTimeout = options.expirationTimeout;
        this.items = {};
    },

    find: function (key) {
        var item = this.items[key];
        if (item) {
            this.refresh(key, item);
        }
        return item && item.value;
    },

    save: function (key, value) {
        var item = this.items[key] || {};
        item.value = value;
        this.items[key] = item;
        this.refresh(key, item);
    },

    refresh: function (key, item) {
        clearTimeout(item.t);
        item.t = setTimeout(this.clear.bind(this, key), this.expirationTimeout);
    },

    clear: function (key) {
        delete this.items[key];
    }

});
