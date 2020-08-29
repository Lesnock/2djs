"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./core/Game"));
document.onload = () => {
    const game = new Game_1.default({
        title: 'Game',
        width: 800,
        height: 600
    });
    game.run();
};
