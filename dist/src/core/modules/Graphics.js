"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graphics = /** @class */ (function () {
    function Graphics(context) {
        this.context = context;
    }
    Graphics.prototype.clear = function (displayWidth, displayHeight) {
        this.context.clearRect(0, 0, displayWidth, displayHeight);
    };
    Graphics.prototype.drawRect = function (x, y, width, height, color) {
        this.context.save();
        if (color) {
            this.context.fillStyle = color;
        }
        this.context.fillRect(x, y, width, height);
        this.context.restore();
    };
    return Graphics;
}());
exports.default = Graphics;
