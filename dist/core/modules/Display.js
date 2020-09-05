"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Graphics_1 = __importDefault(require("./Graphics"));
var Display = /** @class */ (function () {
    function Display(width, height) {
        var _a;
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas(width, height);
        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(this.canvas);
        this.graphics = new Graphics_1.default(this.canvas.getContext('2d'));
    }
    Display.prototype.createCanvas = function (width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.setProperty('image-rendering', 'pixelated');
        return canvas;
    };
    Display.prototype.getGraphics = function () {
        return this.graphics;
    };
    return Display;
}());
exports.default = Display;
