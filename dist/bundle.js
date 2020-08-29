/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/game.ts":
/*!****************************!*\
  !*** ./src/config/game.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    fps: 60,\r\n    initialState: 'GameState'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/config/game.ts?");

/***/ }),

/***/ "./src/core/Display/Display.ts":
/*!*************************************!*\
  !*** ./src/core/Display/Display.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Display = /** @class */ (function () {\r\n    function Display(width, height) {\r\n        var _a;\r\n        this.canvas = this.createCanvas(width, height);\r\n        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(this.canvas);\r\n        this.graphics = this.canvas.getContext('2d');\r\n    }\r\n    Display.prototype.createCanvas = function (width, height) {\r\n        var canvas = document.createElement('canvas');\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n        canvas.style.setProperty('image-rendering', 'pixelated');\r\n        return canvas;\r\n    };\r\n    Display.prototype.getGraphics = function () {\r\n        return this.graphics;\r\n    };\r\n    return Display;\r\n}());\r\nexports.default = Display;\r\n\n\n//# sourceURL=webpack:///./src/core/Display/Display.ts?");

/***/ }),

/***/ "./src/core/Game.ts":
/*!**************************!*\
  !*** ./src/core/Game.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar game_1 = __importDefault(__webpack_require__(/*! ../config/game */ \"./src/config/game.ts\"));\r\nvar Display_1 = __importDefault(__webpack_require__(/*! ./Display/Display */ \"./src/core/Display/Display.ts\"));\r\nvar Game = /** @class */ (function () {\r\n    function Game(_a) {\r\n        var title = _a.title, width = _a.width, height = _a.height;\r\n        document.title = title;\r\n        this.display = new Display_1.default(width, height);\r\n    }\r\n    Game.prototype.start = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.loadInitialState()];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.runLoop();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Game.prototype.loadInitialState = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var imported, _stateClass, initialState;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(__webpack_require__(\"./src/states sync recursive ^\\\\.\\\\/.*$\")(\"./\" + game_1.default.initialState)); })];\r\n                    case 1:\r\n                        imported = _a.sent();\r\n                        _stateClass = imported.default;\r\n                        initialState = new _stateClass();\r\n                        this.initialState = initialState;\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Game.prototype.update = function (dt) {\r\n        var _a;\r\n        (_a = this.initialState) === null || _a === void 0 ? void 0 : _a.update(dt);\r\n    };\r\n    Game.prototype.render = function (g) {\r\n        var _a;\r\n        (_a = this.initialState) === null || _a === void 0 ? void 0 : _a.render(g);\r\n    };\r\n    Game.prototype.runLoop = function () {\r\n        var _this = this;\r\n        var fps = game_1.default.fps;\r\n        var deltaTime = 1 / fps;\r\n        var lastTime = 0;\r\n        var timer = 0;\r\n        var now;\r\n        var loop = function () {\r\n            now = performance.now();\r\n            // Timer in miliseconds\r\n            timer += (now - lastTime) / 100;\r\n            if (timer > 1) {\r\n                timer = 1;\r\n            }\r\n            // Exec all overflow timer compared to delta\r\n            while (timer > deltaTime) {\r\n                _this.update(deltaTime);\r\n                _this.render(_this.display.graphics);\r\n                timer -= deltaTime;\r\n            }\r\n            lastTime = now;\r\n            requestAnimationFrame(loop);\r\n        };\r\n        loop();\r\n    };\r\n    return Game;\r\n}());\r\nexports.default = Game;\r\n\n\n//# sourceURL=webpack:///./src/core/Game.ts?");

/***/ }),

/***/ "./src/core/State/State.ts":
/*!*********************************!*\
  !*** ./src/core/State/State.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar State = /** @class */ (function () {\r\n    function State() {\r\n    }\r\n    State.prototype.update = function () { };\r\n    State.prototype.render = function () { };\r\n    return State;\r\n}());\r\nexports.default = State;\r\n\n\n//# sourceURL=webpack:///./src/core/State/State.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Game_1 = __importDefault(__webpack_require__(/*! ./core/Game */ \"./src/core/Game.ts\"));\r\nvar game = new Game_1.default({\r\n    title: 'Game',\r\n    width: 800,\r\n    height: 600\r\n});\r\ngame.start();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/states sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/states sync ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./GameState\": \"./src/states/GameState.ts\",\n\t\"./GameState.ts\": \"./src/states/GameState.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/states sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/states_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/states/GameState.ts":
/*!*********************************!*\
  !*** ./src/states/GameState.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar State_1 = __importDefault(__webpack_require__(/*! ../core/State/State */ \"./src/core/State/State.ts\"));\r\nvar GameState = /** @class */ (function (_super) {\r\n    __extends(GameState, _super);\r\n    function GameState() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    GameState.prototype.update = function () {\r\n    };\r\n    return GameState;\r\n}(State_1.default));\r\nexports.default = GameState;\r\n\n\n//# sourceURL=webpack:///./src/states/GameState.ts?");

/***/ })

/******/ });