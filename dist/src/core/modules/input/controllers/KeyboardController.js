"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardController = /** @class */ (function () {
    function KeyboardController() {
        this.name = 'keyboard';
        this.keys = {};
    }
    /**
     * Get status of a keyboard key
     */
    KeyboardController.prototype.get = function (name) {
        if (!this.keys[name]) {
            this.keys[name] = false;
        }
        return this.keys[name];
    };
    KeyboardController.prototype.listener = function () {
        var _this = this;
        // Key Down
        document.onkeydown = function (event) {
            event.preventDefault();
            _this.keys[event.code] = true;
        };
        // Key Up
        document.onkeyup = function (event) {
            event.preventDefault();
            _this.keys[event.code] = false;
        };
    };
    return KeyboardController;
}());
exports.default = KeyboardController;
