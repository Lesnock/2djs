"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __importDefault(require("./State"));
var Assets_1 = __importDefault(require("./Assets"));
var Configs_1 = __importDefault(require("./Configs"));
var Display_1 = __importDefault(require("./Display"));
var Globals_1 = __importDefault(require("./Globals"));
var Input_1 = __importDefault(require("./input/Input"));
var Loader_1 = __importDefault(require("./loader/Loader"));
var Game = /** @class */ (function () {
    function Game(_configs) {
        this.config = __assign(__assign({}, Configs_1.default), _configs);
        document.title = this.config.title;
        // Start display
        this.display = new Display_1.default(this.config.width, this.config.height);
        // Start Input
        this.input = new Input_1.default(this, this.config);
        this.input.listener();
        // Start Globals
        this.globals = new Globals_1.default();
        // Start Loader
        this.loader = new Loader_1.default();
        // Assets
        this.assets = Assets_1.default;
        this.globals.set('game', this);
    }
    Game.prototype.start = function (initialState) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!initialState) {
                            throw new Error('A initial state is required to start the game.');
                        }
                        return [4 /*yield*/, this.initializeState(initialState)];
                    case 1:
                        _a.sent();
                        this.runLoop();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.initializeState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(state instanceof State_1.default)) {
                            throw new Error('initialState should be an instance of State');
                        }
                        // Pass modules to state
                        this.setModulesToObject(state);
                        return [4 /*yield*/, state.start()
                            // Start gameObjects
                        ];
                    case 1:
                        _a.sent();
                        // Start gameObjects
                        state.gameObjects.forEach(function (gameobject) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.setModulesToObject(gameobject);
                                        gameobject.state = state;
                                        return [4 /*yield*/, gameobject.start()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.display.graphics.setLayers(state.layers);
                        this.currentState = state;
                        this.globals.set('currentState', state);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set the current state of the game
     */
    Game.prototype.setCurrentState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initializeState(state)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set all modules to classes that implements Modules
     * @param state
     */
    Game.prototype.setModulesToObject = function (object) {
        // Pass modules to object
        object.config = this.config;
        object.input = this.input;
        object.globals = this.globals;
        object.display = this.display;
        object.loader = this.loader;
        object.assets = this.assets;
    };
    Game.prototype.update = function (dt) {
        var currentState = this.globals.get('currentState');
        if (currentState.canUpdate) {
            currentState.superUpdate(dt);
            currentState.update(dt);
        }
    };
    Game.prototype.render = function (g) {
        g.clear(this.display.width, this.display.height);
        if (this.currentState.canRender) {
            this.currentState.render(g);
            this.currentState.superRender(g);
            this.currentState.layers.render(g);
        }
    };
    Game.prototype.runLoop = function () {
        var _this = this;
        var fps = this.config.fps;
        var deltaTime = 1 / fps;
        var lastTime = 0;
        var timer = 0;
        var now;
        var loop = function () {
            now = performance.now();
            // Timer in miliseconds
            timer += (now - lastTime) / 100;
            if (timer > 1) {
                timer = 1;
            }
            // Exec all overflow timer compared to delta
            while (timer > deltaTime) {
                _this.update(deltaTime);
                _this.render(_this.display.graphics);
                timer -= deltaTime;
            }
            lastTime = now;
            requestAnimationFrame(loop);
        };
        loop();
    };
    return Game;
}());
exports.default = Game;
