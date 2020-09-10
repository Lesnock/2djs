"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tile_1 = __importDefault(require("./Tile"));
var Sprite_1 = __importDefault(require("./Sprite"));
var Graphics = /** @class */ (function () {
    function Graphics(context) {
        this.context = context;
    }
    Graphics.prototype.setLayers = function (layers) {
        this.layers = layers;
    };
    Graphics.prototype.on = function (index) {
        return this.layers.get(index).g;
    };
    Graphics.prototype.clear = function (displayWidth, displayHeight) {
        this.context.clearRect(0, 0, displayWidth, displayHeight);
    };
    Graphics.prototype.drawRect = function (x, y, width, height, color, opacity) {
        if (opacity === void 0) { opacity = 1; }
        this.context.save();
        if (color) {
            this.context.fillStyle = color;
        }
        this.context.globalAlpha = opacity;
        this.context.fillRect(x, y, width, height);
        this.context.restore();
    };
    Graphics.prototype.drawSprite = function (sprite, x, y, width, height, opacity) {
        if (opacity === void 0) { opacity = 1; }
        var dWidth = !width ? sprite.width : width;
        var dHeight = !height ? sprite.height : height;
        this.context.save();
        this.context.globalAlpha = opacity;
        this.context.drawImage(sprite.buffer, x, y, dWidth, dHeight);
        this.context.restore();
    };
    Graphics.prototype.drawTile = function (tile, x, y, width, height, opacity) {
        if (opacity === void 0) { opacity = 1; }
        var dWidth = !width ? tile.width : width;
        var dHeight = !height ? tile.height : height;
        this.context.save();
        this.context.globalAlpha = opacity;
        this.context.drawImage(tile.buffer, x, y, dWidth, dHeight);
        this.context.restore();
    };
    Graphics.prototype.drawAnimation = function (animation, x, y, width, height, opacity) {
        if (opacity === void 0) { opacity = 1; }
        var currentFrame = animation.currentFrame;
        var bufferOrImage = null;
        if (currentFrame.frame instanceof Sprite_1.default || currentFrame.frame instanceof Tile_1.default) {
            bufferOrImage = currentFrame.frame.buffer;
        }
        else {
            bufferOrImage = currentFrame.frame;
        }
        var dWidth = !width ? currentFrame.frame.width : width;
        var dHeight = !height ? currentFrame.frame.height : height;
        this.context.save();
        this.context.globalAlpha = opacity;
        this.context.drawImage(bufferOrImage, x, y, dWidth, dHeight);
        this.context.restore();
        animation.update();
    };
    return Graphics;
}());
exports.default = Graphics;
