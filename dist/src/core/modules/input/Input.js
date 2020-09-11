"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MouseController_1 = __importDefault(require("./controllers/MouseController"));
var KeyboardController_1 = __importDefault(require("./controllers/KeyboardController"));
var Input = /** @class */ (function () {
    function Input(game, configs) {
        this.configs = configs;
        this.keyboard = new KeyboardController_1.default();
        this.mouse = new MouseController_1.default(game);
        // Keyboard Controller is the default
        // this.addController(new KeyboardController())
    }
    Input.prototype.listener = function () {
        this.keyboard.listener();
        this.mouse.listener();
    };
    return Input;
}());
exports.default = Input;
