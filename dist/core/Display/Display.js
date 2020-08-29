"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Display {
    createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.setProperty('image-rendering', 'pixelated');
        return canvas;
    }
    createDisplay(width, height) {
        var _a;
        const canvas = this.createCanvas(width, height);
        canvas.id = 'display';
        // Add canvas to the document
        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
    }
}
exports.default = Display;
