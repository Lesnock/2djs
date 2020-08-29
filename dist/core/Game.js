"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Display_1 = __importDefault(require("./Display/Display"));
class Game {
    constructor({ title, width, height }) {
        document.title = title;
        this.display = new Display_1.default();
        this.display.createDisplay(width, height);
    }
    run() {
        console.log('running');
    }
}
exports.default = Game;
