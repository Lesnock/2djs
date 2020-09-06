"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardController_1 = __importDefault(require("./controllers/KeyboardController"));
var controllers = {};
var Input = /** @class */ (function () {
    function Input(configs) {
        this.configs = configs;
        // Keyboard Controller is the default
        this.addController(new KeyboardController_1.default());
    }
    Object.defineProperty(Input.prototype, "controllers", {
        /**
         * Get all available controllers
         */
        get: function () {
            return controllers;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get Controller instance
     */
    Input.prototype.getController = function (name) {
        return controllers[name];
    };
    /**
     * Add Controller to Input system
     */
    Input.prototype.addController = function (controller) {
        controllers[controller.name] = controller;
    };
    /**
     * Shortcut for method 'get' of main controller
     */
    Input.prototype.get = function (name) {
        if (!controllers[this.configs.mainController]) {
            throw new Error("Controller " + this.configs.mainController + " does not exists.");
        }
        return controllers[this.configs.mainController].get(name);
    };
    /**
     * Add listeners to keyboard keys
     */
    Input.prototype.listener = function () {
        Object.keys(controllers).forEach(function (controllerName) {
            controllers[controllerName].listener();
        });
    };
    return Input;
}());
exports.default = Input;
