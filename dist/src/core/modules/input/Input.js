"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../../../config/input"));
var KeyboardController_1 = __importDefault(require("./controllers/KeyboardController"));
var controllers = {};
var Input = /** @class */ (function () {
    function Input() {
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
        if (!input_1.default.mainController) {
            throw new Error('mainController config does not exists on input config file');
        }
        if (!controllers[input_1.default.mainController]) {
            throw new Error("Controller " + input_1.default.mainController + " does not exists.");
        }
        return controllers[input_1.default.mainController].get(name);
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
