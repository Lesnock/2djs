"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    ImageLoader.prototype.load = function (path) {
        var image = new Image();
        return new Promise(function (resolve) {
            image.onload = function () {
                resolve(image);
            };
            image.src = path;
        });
    };
    return ImageLoader;
}());
exports.default = ImageLoader;
