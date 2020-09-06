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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/core */ \"./src/core/index.ts\");\n/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/GameState.ts */ \"./public/js/states/GameState.ts\");\n/* harmony import */ var _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_states_GameState_ts__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst game = new _src_core__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]({\r\n  title: 'My Game',\r\n  width: 800,\r\n  height: 600,\r\n  fps: 60\r\n})\r\n\r\ngame.start(new _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1___default.a())\r\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/js/states/GameState.ts":
/*!***************************************!*\
  !*** ./public/js/states/GameState.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(/*! ../../../src/core */ \"./src/core/index.ts\");\r\nvar GameState = /** @class */ (function (_super) {\r\n    __extends(GameState, _super);\r\n    function GameState() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    GameState.prototype.start = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var globals, _a, _b;\r\n            return __generator(this, function (_c) {\r\n                switch (_c.label) {\r\n                    case 0:\r\n                        this.blockX = 100;\r\n                        this.blockY = 100;\r\n                        this.blockVelocity = 100;\r\n                        globals = new core_1.Globals();\r\n                        globals.set({\r\n                            name: 'Caio',\r\n                            lastname: 'Lesnock'\r\n                        });\r\n                        _b = (_a = console).log;\r\n                        return [4 /*yield*/, this.loader.loadImage('images/test.jpg')];\r\n                    case 1:\r\n                        _b.apply(_a, [_c.sent()]);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    GameState.prototype.update = function (dt) {\r\n        if (this.input.get('KeyA')) {\r\n            this.blockX -= this.blockVelocity * dt;\r\n        }\r\n    };\r\n    GameState.prototype.render = function (g) {\r\n        g.drawRect(this.blockX, this.blockY, 100, 100, '#550000');\r\n    };\r\n    return GameState;\r\n}(core_1.State));\r\nexports.default = GameState;\r\n\n\n//# sourceURL=webpack:///./public/js/states/GameState.ts?");

/***/ }),

/***/ "./src/config/input.ts":
/*!*****************************!*\
  !*** ./src/config/input.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    mainController: 'keyboard'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/config/input.ts?");

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Rect = exports.Loader = exports.Graphics = exports.Input = exports.Display = exports.Globals = exports.State = exports.Game = void 0;\r\nvar Game_1 = __webpack_require__(/*! ./modules/Game */ \"./src/core/modules/Game.ts\");\r\nObject.defineProperty(exports, \"Game\", { enumerable: true, get: function () { return __importDefault(Game_1).default; } });\r\nvar State_1 = __webpack_require__(/*! ./modules/State */ \"./src/core/modules/State.ts\");\r\nObject.defineProperty(exports, \"State\", { enumerable: true, get: function () { return __importDefault(State_1).default; } });\r\nvar Globals_1 = __webpack_require__(/*! ./modules/Globals */ \"./src/core/modules/Globals.ts\");\r\nObject.defineProperty(exports, \"Globals\", { enumerable: true, get: function () { return __importDefault(Globals_1).default; } });\r\nvar Display_1 = __webpack_require__(/*! ./modules/Display */ \"./src/core/modules/Display.ts\");\r\nObject.defineProperty(exports, \"Display\", { enumerable: true, get: function () { return __importDefault(Display_1).default; } });\r\nvar Input_1 = __webpack_require__(/*! ./modules/input/Input */ \"./src/core/modules/input/Input.ts\");\r\nObject.defineProperty(exports, \"Input\", { enumerable: true, get: function () { return __importDefault(Input_1).default; } });\r\nvar Graphics_1 = __webpack_require__(/*! ./modules/Graphics */ \"./src/core/modules/Graphics.ts\");\r\nObject.defineProperty(exports, \"Graphics\", { enumerable: true, get: function () { return __importDefault(Graphics_1).default; } });\r\nvar Loader_1 = __webpack_require__(/*! ./modules/loader/Loader */ \"./src/core/modules/loader/Loader.ts\");\r\nObject.defineProperty(exports, \"Loader\", { enumerable: true, get: function () { return __importDefault(Loader_1).default; } });\r\nvar Shapes_1 = __webpack_require__(/*! ./modules/Shapes */ \"./src/core/modules/Shapes.ts\");\r\nObject.defineProperty(exports, \"Rect\", { enumerable: true, get: function () { return Shapes_1.Rect; } });\r\n\n\n//# sourceURL=webpack:///./src/core/index.ts?");

/***/ }),

/***/ "./src/core/modules/Config.ts":
/*!************************************!*\
  !*** ./src/core/modules/Config.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Config = /** @class */ (function () {\r\n    function Config() {\r\n        // Default Configs\r\n        this.configs = {\r\n            title: '2DJS',\r\n            width: 800,\r\n            height: 600,\r\n            fps: 60\r\n        };\r\n    }\r\n    Config.prototype.set = function (name, value) {\r\n        this.configs[name] = value;\r\n    };\r\n    Config.prototype.get = function (name) {\r\n        return this.configs[name];\r\n    };\r\n    return Config;\r\n}());\r\nexports.default = Config;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Config.ts?");

/***/ }),

/***/ "./src/core/modules/Display.ts":
/*!*************************************!*\
  !*** ./src/core/modules/Display.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Graphics_1 = __importDefault(__webpack_require__(/*! ./Graphics */ \"./src/core/modules/Graphics.ts\"));\r\nvar Display = /** @class */ (function () {\r\n    function Display(width, height) {\r\n        var _a;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.canvas = this.createCanvas(width, height);\r\n        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(this.canvas);\r\n        this.graphics = new Graphics_1.default(this.canvas.getContext('2d'));\r\n    }\r\n    Display.prototype.createCanvas = function (width, height) {\r\n        var canvas = document.createElement('canvas');\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n        canvas.style.setProperty('image-rendering', 'pixelated');\r\n        return canvas;\r\n    };\r\n    Display.prototype.getGraphics = function () {\r\n        return this.graphics;\r\n    };\r\n    return Display;\r\n}());\r\nexports.default = Display;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Display.ts?");

/***/ }),

/***/ "./src/core/modules/Game.ts":
/*!**********************************!*\
  !*** ./src/core/modules/Game.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar State_1 = __importDefault(__webpack_require__(/*! ./State */ \"./src/core/modules/State.ts\"));\r\nvar Config_1 = __importDefault(__webpack_require__(/*! ./Config */ \"./src/core/modules/Config.ts\"));\r\nvar Display_1 = __importDefault(__webpack_require__(/*! ./Display */ \"./src/core/modules/Display.ts\"));\r\nvar Globals_1 = __importDefault(__webpack_require__(/*! ./Globals */ \"./src/core/modules/Globals.ts\"));\r\nvar Input_1 = __importDefault(__webpack_require__(/*! ./input/Input */ \"./src/core/modules/input/Input.ts\"));\r\nvar Loader_1 = __importDefault(__webpack_require__(/*! ./loader/Loader */ \"./src/core/modules/loader/Loader.ts\"));\r\nvar Game = /** @class */ (function () {\r\n    function Game(configs) {\r\n        this.config = new Config_1.default();\r\n        for (var name in configs) {\r\n            this.config.set(name, configs[name]);\r\n        }\r\n        document.title = this.config.get('title');\r\n        // Start display\r\n        this.display = new Display_1.default(this.config.get('width'), this.config.get('height'));\r\n        // Start Input\r\n        this.input = new Input_1.default();\r\n        this.input.listener();\r\n        // Start Globals\r\n        this.globals = new Globals_1.default();\r\n        // Start Loader\r\n        this.loader = new Loader_1.default();\r\n    }\r\n    Game.prototype.start = function (initialState) {\r\n        var _a;\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        if (!initialState) {\r\n                            throw new Error('A initial state is required to start the game.');\r\n                        }\r\n                        if (!(initialState instanceof State_1.default)) {\r\n                            throw new Error('initialState should be an instance of State');\r\n                        }\r\n                        // Pass modules to state\r\n                        initialState.setModules({\r\n                            config: this.config,\r\n                            input: this.input,\r\n                            globals: this.globals,\r\n                            display: this.display,\r\n                            loader: this.loader\r\n                        });\r\n                        this.currentState = initialState;\r\n                        return [4 /*yield*/, ((_a = this.currentState) === null || _a === void 0 ? void 0 : _a.start())];\r\n                    case 1:\r\n                        _b.sent();\r\n                        this.runLoop();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Game.prototype.update = function (dt) {\r\n        this.currentState.update(dt);\r\n    };\r\n    Game.prototype.render = function (g) {\r\n        g.clear(this.display.width, this.display.height);\r\n        this.currentState.render(g);\r\n    };\r\n    Game.prototype.runLoop = function () {\r\n        var _this = this;\r\n        var fps = this.config.get('fps');\r\n        var deltaTime = 1 / fps;\r\n        var lastTime = 0;\r\n        var timer = 0;\r\n        var now;\r\n        var loop = function () {\r\n            now = performance.now();\r\n            // Timer in miliseconds\r\n            timer += (now - lastTime) / 100;\r\n            if (timer > 1) {\r\n                timer = 1;\r\n            }\r\n            // Exec all overflow timer compared to delta\r\n            while (timer > deltaTime) {\r\n                _this.update(deltaTime);\r\n                _this.render(_this.display.graphics);\r\n                timer -= deltaTime;\r\n            }\r\n            lastTime = now;\r\n            requestAnimationFrame(loop);\r\n        };\r\n        loop();\r\n    };\r\n    return Game;\r\n}());\r\nexports.default = Game;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Game.ts?");

/***/ }),

/***/ "./src/core/modules/Globals.ts":
/*!*************************************!*\
  !*** ./src/core/modules/Globals.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar globalData = {};\r\nvar Globals = /** @class */ (function () {\r\n    function Globals() {\r\n    }\r\n    /**\r\n     * Get data from global data\r\n     */\r\n    Globals.prototype.get = function (key) {\r\n        // Sent array\r\n        if (Array.isArray(key)) {\r\n            var data_1 = {};\r\n            key.forEach(function (keyName) {\r\n                if (typeof keyName !== 'string') {\r\n                    throw new Error('Key name from global data should be a string');\r\n                }\r\n                data_1[keyName] = globalData[keyName];\r\n            });\r\n            return data_1;\r\n        }\r\n        // Sent string (unique value)\r\n        if (typeof key === 'string') {\r\n            return globalData[key];\r\n        }\r\n    };\r\n    /**\r\n     * Get all global data\r\n     */\r\n    Globals.prototype.all = function () {\r\n        return globalData;\r\n    };\r\n    /**\r\n     * Set data to global data\r\n     */\r\n    Globals.prototype.set = function (key, data) {\r\n        var _this = this;\r\n        // Sent object\r\n        if (typeof key === 'object') {\r\n            Object.keys(key).forEach(function (keyName) {\r\n                var object = key;\r\n                _this.set(keyName, object[keyName]);\r\n            });\r\n            return;\r\n        }\r\n        globalData[key] = data;\r\n    };\r\n    return Globals;\r\n}());\r\nexports.default = Globals;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Globals.ts?");

/***/ }),

/***/ "./src/core/modules/Graphics.ts":
/*!**************************************!*\
  !*** ./src/core/modules/Graphics.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Graphics = /** @class */ (function () {\r\n    function Graphics(context) {\r\n        this.context = context;\r\n    }\r\n    Graphics.prototype.clear = function (displayWidth, displayHeight) {\r\n        this.context.clearRect(0, 0, displayWidth, displayHeight);\r\n    };\r\n    Graphics.prototype.drawRect = function (x, y, width, height, color) {\r\n        this.context.save();\r\n        if (color) {\r\n            this.context.fillStyle = color;\r\n        }\r\n        this.context.fillRect(x, y, width, height);\r\n        this.context.restore();\r\n    };\r\n    return Graphics;\r\n}());\r\nexports.default = Graphics;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Graphics.ts?");

/***/ }),

/***/ "./src/core/modules/Shapes.ts":
/*!************************************!*\
  !*** ./src/core/modules/Shapes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n\n\n//# sourceURL=webpack:///./src/core/modules/Shapes.ts?");

/***/ }),

/***/ "./src/core/modules/State.ts":
/*!***********************************!*\
  !*** ./src/core/modules/State.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar State = /** @class */ (function () {\r\n    function State() {\r\n    }\r\n    State.prototype.update = function (dt) { };\r\n    ;\r\n    State.prototype.render = function (g) { };\r\n    ;\r\n    /**\r\n     * Set Game Modules\r\n     */\r\n    State.prototype.setModules = function (_a) {\r\n        var config = _a.config, input = _a.input, display = _a.display, globals = _a.globals, loader = _a.loader;\r\n        this.config = config;\r\n        this.input = input;\r\n        this.display = display;\r\n        this.globals = globals;\r\n        this.loader = loader;\r\n    };\r\n    /**\r\n     * Start\r\n     */\r\n    State.prototype.start = function () {\r\n        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n            return [2 /*return*/];\r\n        }); });\r\n    };\r\n    return State;\r\n}());\r\nexports.default = State;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/State.ts?");

/***/ }),

/***/ "./src/core/modules/input/Input.ts":
/*!*****************************************!*\
  !*** ./src/core/modules/input/Input.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar input_1 = __importDefault(__webpack_require__(/*! ../../../config/input */ \"./src/config/input.ts\"));\r\nvar KeyboardController_1 = __importDefault(__webpack_require__(/*! ./controllers/KeyboardController */ \"./src/core/modules/input/controllers/KeyboardController.ts\"));\r\nvar controllers = {};\r\nvar Input = /** @class */ (function () {\r\n    function Input() {\r\n        // Keyboard Controller is the default\r\n        this.addController(new KeyboardController_1.default());\r\n    }\r\n    Object.defineProperty(Input.prototype, \"controllers\", {\r\n        /**\r\n         * Get all available controllers\r\n         */\r\n        get: function () {\r\n            return controllers;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Get Controller instance\r\n     */\r\n    Input.prototype.getController = function (name) {\r\n        return controllers[name];\r\n    };\r\n    /**\r\n     * Add Controller to Input system\r\n     */\r\n    Input.prototype.addController = function (controller) {\r\n        controllers[controller.name] = controller;\r\n    };\r\n    /**\r\n     * Shortcut for method 'get' of main controller\r\n     */\r\n    Input.prototype.get = function (name) {\r\n        if (!input_1.default.mainController) {\r\n            throw new Error('mainController config does not exists on input config file');\r\n        }\r\n        if (!controllers[input_1.default.mainController]) {\r\n            throw new Error(\"Controller \" + input_1.default.mainController + \" does not exists.\");\r\n        }\r\n        return controllers[input_1.default.mainController].get(name);\r\n    };\r\n    /**\r\n     * Add listeners to keyboard keys\r\n     */\r\n    Input.prototype.listener = function () {\r\n        Object.keys(controllers).forEach(function (controllerName) {\r\n            controllers[controllerName].listener();\r\n        });\r\n    };\r\n    return Input;\r\n}());\r\nexports.default = Input;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/input/Input.ts?");

/***/ }),

/***/ "./src/core/modules/input/controllers/Controller.ts":
/*!**********************************************************!*\
  !*** ./src/core/modules/input/controllers/Controller.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        this.keys = {};\r\n    }\r\n    /**\r\n     * Get status of a keyboard key\r\n     */\r\n    Controller.prototype.get = function (name) {\r\n        if (!this.keys[name]) {\r\n            this.keys[name] = false;\r\n        }\r\n        return this.keys[name];\r\n    };\r\n    return Controller;\r\n}());\r\nexports.default = Controller;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/input/controllers/Controller.ts?");

/***/ }),

/***/ "./src/core/modules/input/controllers/KeyboardController.ts":
/*!******************************************************************!*\
  !*** ./src/core/modules/input/controllers/KeyboardController.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controller_1 = __importDefault(__webpack_require__(/*! ./Controller */ \"./src/core/modules/input/controllers/Controller.ts\"));\r\nvar KeyboardController = /** @class */ (function (_super) {\r\n    __extends(KeyboardController, _super);\r\n    function KeyboardController() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.name = 'keyboard';\r\n        return _this;\r\n    }\r\n    KeyboardController.prototype.listener = function () {\r\n        var _this = this;\r\n        // Key Down\r\n        document.onkeydown = function (event) {\r\n            event.preventDefault();\r\n            _this.keys[event.code] = true;\r\n        };\r\n        // Key Up\r\n        document.onkeyup = function (event) {\r\n            event.preventDefault();\r\n            _this.keys[event.code] = false;\r\n        };\r\n    };\r\n    return KeyboardController;\r\n}(Controller_1.default));\r\nexports.default = KeyboardController;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/input/controllers/KeyboardController.ts?");

/***/ }),

/***/ "./src/core/modules/loader/ImageLoader.ts":
/*!************************************************!*\
  !*** ./src/core/modules/loader/ImageLoader.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ImageLoader = /** @class */ (function () {\r\n    function ImageLoader() {\r\n    }\r\n    ImageLoader.prototype.load = function (path) {\r\n        var image = new Image();\r\n        return new Promise(function (resolve) {\r\n            image.onload = function () {\r\n                resolve(image);\r\n            };\r\n            image.src = path;\r\n        });\r\n    };\r\n    return ImageLoader;\r\n}());\r\nexports.default = ImageLoader;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/loader/ImageLoader.ts?");

/***/ }),

/***/ "./src/core/modules/loader/Loader.ts":
/*!*******************************************!*\
  !*** ./src/core/modules/loader/Loader.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ImageLoader_1 = __importDefault(__webpack_require__(/*! ./ImageLoader */ \"./src/core/modules/loader/ImageLoader.ts\"));\r\nvar Loader = /** @class */ (function () {\r\n    function Loader() {\r\n    }\r\n    /**\r\n     * Load image\r\n     */\r\n    Loader.prototype.loadImage = function (path) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var loader;\r\n            return __generator(this, function (_a) {\r\n                loader = new ImageLoader_1.default();\r\n                return [2 /*return*/, loader.load(path)];\r\n            });\r\n        });\r\n    };\r\n    return Loader;\r\n}());\r\nexports.default = Loader;\r\n\n\n//# sourceURL=webpack:///./src/core/modules/loader/Loader.ts?");

/***/ })

/******/ });