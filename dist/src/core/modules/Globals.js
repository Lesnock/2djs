"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalData = {};
var Globals = /** @class */ (function () {
    function Globals() {
    }
    /**
     * Get data from global data
     */
    Globals.prototype.get = function (key) {
        // Sent array
        if (Array.isArray(key)) {
            var data_1 = {};
            key.forEach(function (keyName) {
                if (typeof keyName !== 'string') {
                    throw new Error('Key name from global data should be a string');
                }
                data_1[keyName] = globalData[keyName];
            });
            return data_1;
        }
        // Sent string (unique value)
        if (typeof key === 'string') {
            return globalData[key];
        }
    };
    /**
     * Get all global data
     */
    Globals.prototype.all = function () {
        return globalData;
    };
    /**
     * Set data to global data
     */
    Globals.prototype.set = function (key, data) {
        var _this = this;
        // Sent object
        if (typeof key === 'object') {
            Object.keys(key).forEach(function (keyName) {
                var object = key;
                _this.set(keyName, object[keyName]);
            });
            return;
        }
        globalData[key] = data;
    };
    return Globals;
}());
exports.default = Globals;
