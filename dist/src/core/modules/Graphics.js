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
    Graphics.prototype.drawSprite = function (sprite, x, y, width, height) {
        var dWidth = !width ? sprite.image.width : width;
        var dHeight = !height ? sprite.image.height : height;
        this.context.drawImage(sprite.buffer, x, y, dWidth, dHeight);
    };
    Graphics.prototype.drawTile = function (tile, x, y, width, height) {
        var dWidth = !width ? tile.image.width : width;
        var dHeight = !height ? tile.image.height : height;
        this.context.drawImage(tile.buffer, x, y, dWidth, dHeight);
    };
    return Graphics;
}());
exports.default = Graphics;
