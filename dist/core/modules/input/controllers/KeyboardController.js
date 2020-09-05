"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __importDefault(require("./Controller"));
var KeyboardController = /** @class */ (function (_super) {
    __extends(KeyboardController, _super);
    function KeyboardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'keyboard';
        return _this;
    }
    KeyboardController.prototype.listener = function () {
        var _this = this;
        // Key Down
        document.onkeydown = function (event) {
            event.preventDefault();
            _this.keys[event.code] = true;
        };
        // Key Up
        document.onkeyup = function (event) {
            event.preventDefault();
            _this.keys[event.code] = false;
        };
    };
    return KeyboardController;
}(Controller_1.default));
exports.default = KeyboardController;
