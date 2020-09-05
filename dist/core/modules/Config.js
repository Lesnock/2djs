"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.prototype.set = function (name, value) {
        this.configs[name] = value;
    };
    Config.prototype.get = function (name) {
        return this.configs[name];
    };
    return Config;
}());
exports.default = Config;
