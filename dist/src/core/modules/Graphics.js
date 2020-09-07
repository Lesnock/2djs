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
    Graphics.prototype.drawAnimation = function (animation, x, y, width, height) {
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
        this.context.drawImage(bufferOrImage, x, y, dWidth, dHeight);
        animation.update();
    };
    return Graphics;
}());
exports.default = Graphics;
