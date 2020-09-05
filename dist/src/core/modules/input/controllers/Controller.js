"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
        this.keys = {};
    }
    /**
     * Get status of a keyboard key
     */
    Controller.prototype.get = function (name) {
        if (!this.keys[name]) {
            this.keys[name] = false;
        }
        return this.keys[name];
    };
    return Controller;
}());
exports.default = Controller;
