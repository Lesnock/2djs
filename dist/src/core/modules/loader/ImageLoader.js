"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Assets_1 = __importDefault(require("../Assets"));
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    ImageLoader.prototype.load = function (path) {
        if (Assets_1.default.images.has(path)) {
            return new Promise(function (resolve) {
                resolve(Assets_1.default.images.get(path));
            });
        }
        var image = new Image();
        return new Promise(function (resolve) {
            image.onload = function () {
                Assets_1.default.images.set(path, image);
                resolve(image);
            };
            image.src = path;
        });
    };
    return ImageLoader;
}());
exports.default = ImageLoader;
