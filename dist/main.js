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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");
/* harmony import */ var _js_gamestage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gamestage */ "./src/js/gamestage.js");



var canvas = document.getElementById('stage');
canvas.width = 768;
canvas.height = 768;
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over'; // instantiate game

var game = new _js_game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
var gamestage = new _js_gamestage__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, game);
gamestage.ticker();

/***/ }),

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// player controls
function Controls(game) {
  this.game = game;
  this.degrees = 0;
  this.state = {
    left: {
      active: false
    },
    right: {
      active: false
    }
  };
  this.disablePlayerControls = this.disablePlayerControls.bind(this);
  this.enablePlayerControls = this.enablePlayerControls.bind(this);
  this.keyDown = this.keyDown.bind(this);
  this.keyUp = this.keyUp.bind(this);
  this.startGame = this.startGame.bind(this);
  this.gameOver = this.gameOver.bind(this);
  this.bigLogo = document.getElementsByClassName("start-game-logo");
  this.smallLogo = document.getElementsByClassName("title-box");
  this.gameInfo = document.getElementsByClassName("start-game-info");
}

Controls.prototype.enablePlayerControls = function () {
  document.removeEventListener('keydown', this.startGame);
  document.addEventListener('keydown', this.keyDown);
  document.addEventListener('keyup', this.keyUp);
};

Controls.prototype.disablePlayerControls = function () {
  document.removeEventListener('keydown', this.keyDown);
  document.removeEventListener('keyup', this.keyUp);
  document.addEventListener('keydown', this.startGame);
};

Controls.prototype.keyDown = function (e) {
  switch (e.code) {
    case "ArrowRight":
      if (!this.state.right.active) {
        this.state.right.active = true;
      }

      break;

    case "ArrowLeft":
      if (!this.state.left.active) {
        this.state.left.active = true;
      }

      break;

    default:
      break;
  }
};

Controls.prototype.keyUp = function (e) {
  switch (e.code) {
    case "ArrowRight":
      this.state.right.active = false;
      break;

    case "ArrowLeft":
      this.state.left.active = false;
      break;

    default:
      break;
  }
};

Controls.prototype.startGame = function (e) {
  if (e.code === "Space") {
    this.enablePlayerControls();
    this.game.startNewGame();
    this.bigLogo[0].classList.remove("start-game-logo-fade-in");
    this.bigLogo[0].classList.add("start-game-logo-fade-out");
    this.smallLogo[0].classList.remove("title-box-fade-in");
    this.smallLogo[0].classList.add("title-box-fade-out");
    this.gameInfo[0].classList.remove("start-game-info-fade-in");
    this.gameInfo[0].classList.add("start-game-info-fade-out");
  }
};

Controls.prototype.gameOver = function () {
  this.disablePlayerControls();
  this.game.gameOver();
  this.bigLogo[0].classList.remove("start-game-logo-fade-out");
  this.bigLogo[0].classList.add("start-game-logo-fade-in");
  this.smallLogo[0].classList.remove("title-box-fade-out");
  this.smallLogo[0].classList.add("title-box-fade-in");
  this.gameInfo[0].classList.remove("start-game-info-fade-out");
  this.gameInfo[0].classList.add("start-game-info-fade-in");
};

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/js/cursor.js":
/*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Cursor(context) {
  this.degrees = -90;
  this.cursorSpeed = 5;
  this.position = [];
  this.cursor = new Image();
  this.cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
}

Cursor.prototype.moveCursor = function (direction) {
  switch (direction) {
    case "clockwise":
      this.degrees += this.cursorSpeed;
      break;

    case "cclockwise":
      this.degrees -= this.cursorSpeed;
      break;
  }
};

Cursor.prototype.collisionDetect = function () {// TODO some sort of hitbox logic
};

Cursor.prototype.draw = function (ctx, dim_x, dim_y) {
  ctx.beginPath();
  ctx.translate(dim_x / 2, dim_y / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.cursor, 0, -35);
};

module.exports = Cursor;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/js/controls.js");
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursor */ "./src/js/cursor.js");
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wave */ "./src/js/wave.js");


 // initializer

function Game(context) {
  var _this = this;

  this.isGameOver = true;
  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.elapsedTime = 0;
  this.totalTimeElapsed = 0;
  this.waves = [];
  this.waveInterval = 0;
  this.difficulty = 'easy';
  this.gameState = false;
  this.sunMap = new Image();
  this.warpGate1 = new Image();
  this.warpGate2 = new Image();
  this.warpGate3 = new Image();
  this.warpGateIndex = 0;
  this.warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
  this.warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
  this.warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
  this.warpGate = [this.warpGate1, this.warpGate2, this.warpGate3];
  this.sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  this.warpGateTimer = setInterval(function () {
    _this.warpGateIndex += 1;
    if (_this.warpGateIndex === 3) _this.warpGateIndex = 0;
  }, 500);
  this.timer = document.getElementsByClassName('timer');
}

Game.prototype.logic = function (frameInterval) {
  var controls = this.controls,
      cursor = this.cursor;

  if (controls.state.left.active) {
    cursor.moveCursor('cclockwise');
  } else if (controls.state.right.active) {
    cursor.moveCursor('clockwise');
  }

  this.timerCounter(frameInterval);
  this.waveLogic(frameInterval);
};

Game.prototype.draw = function () {
  var dim_x = this.dim_x,
      dim_y = this.dim_y,
      ctx = this.ctx,
      warpGate = this.warpGate,
      warpGateIndex = this.warpGateIndex,
      sunMap = this.sunMap;
  ctx.clearRect(0, 0, dim_x, dim_y); // clear canvas

  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'blue';
  ctx.save(); // Cursor

  this.cursor.draw(ctx, dim_x, dim_y);
  this.ctx.restore(); // Waves

  this.waves.forEach(function (wave) {
    wave.draw(ctx);
  }); // Earth orbit

  this.ctx.beginPath();
  this.ctx.arc(dim_x / 2, dim_y / 2, 105, 0, Math.PI * 2, false);
  this.ctx.stroke(); // Warpgate

  this.ctx.drawImage(warpGate[warpGateIndex], dim_x / 4 + 97.5, dim_y / 4 + 97.5, dim_x / 4, dim_y / 4); // Map

  this.ctx.drawImage(sunMap, 0, 0, dim_x, dim_y);
};

Game.prototype.addCursor = function () {
  this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_1___default.a();
  return this.cursor;
};

Game.prototype.addControls = function () {
  this.controls = new _controls__WEBPACK_IMPORTED_MODULE_0__["default"](this);
  return this.controls;
};

Game.prototype.addWave = function (frameInterval) {
  var elapsedTime = this.elapsedTime,
      waveInterval = this.waveInterval;

  if (elapsedTime > waveInterval) {
    // launch next wave at set intervals
    var newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](this.difficulty);
    this.waves.push(newWave);
    this.elapsedTime = 0; // TODO create new waveInterval based on difficulty

    this.waveInterval = 10 * 1000;
  } // increment elapsedTime


  this.elapsedTime += frameInterval;
};

Game.prototype.removeWave = function () {
  var waves = this.waves;
  var removeDistance = 60; // shifts off wave in FIFO
  // debugger

  if (waves[0] !== undefined) {
    for (var i = 0; i < 8; i++) {
      // debugger;
      if (waves[0].walls[i] !== undefined) {
        // debugger
        var x1 = waves[0].walls[i].pos[0];
        var y1 = waves[0].walls[i].pos[1];
        var distance = Math.sqrt(Math.pow(384 - x1, 2) + Math.pow(384 - y1, 2)); // console.log(`distance is ${distance} and removeDistance is 50`);

        if (distance < removeDistance) {
          this.waves.shift();
          break;
        }
      }
    }
  }
};

Game.prototype.waveLogic = function (frameInterval) {
  var _this2 = this;

  this.addWave(frameInterval);
  var game = this;
  var waves = this.waves; // wave despawn logic

  this.removeWave();
  waves.forEach(function (wave) {
    // if any return true, call this.gameOver()
    if (wave.move(_this2.cursor, game)) _this2.gameOver();
  });
};

Game.prototype.timerCounter = function (timeElapsed) {
  this.totalTimeElapsed += timeElapsed;
  var roundedTime = Math.round(this.totalTimeElapsed / 10) / 100;
  this.timer[0].innerHTML = roundedTime.toString();
};

Game.prototype.startNewGame = function () {
  this.elapsedTime = 0;
  this.waves = [];
  this.totalTimeElapsed = 0;
  this.isGameOver = false;
};

Game.prototype.gameOver = function () {
  // option to play again, calls start new game
  this.isGameOver = true;
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/gamestage.js":
/*!*****************************!*\
  !*** ./src/js/gamestage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function GameStage(context, game) {
  this.ctx = context;
  this.game = game;
  this.frameRate = 65;
  this.frameInterval = 1000 / this.frameRate;
  this.setTime = 0;
  this.cursor = this.game.addCursor();
  this.controls = this.game.addControls();
  this.controls.gameOver();
}

GameStage.prototype.ticker = function () {
  var frameInterval = this.frameInterval,
      setTime = this.setTime; // time-limit

  var curTime = Date.now();
  var timeDif = curTime - setTime; // frame limiter

  if (timeDif >= frameInterval && !this.game.isGameOver) {
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
};

/* harmony default export */ __webpack_exports__["default"] = (GameStage);

/***/ }),

/***/ "./src/js/patterns.js":
/*!****************************!*\
  !*** ./src/js/patterns.js ***!
  \****************************/
/*! exports provided: EASY_PATTERNS, MEDIUM_PATTERNS, HARD_PATTERNS, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASY_PATTERNS", function() { return EASY_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIUM_PATTERNS", function() { return MEDIUM_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HARD_PATTERNS", function() { return HARD_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
// 2 second spawn intervals (10 seconds)
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0]], [[0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1]], [[1, 1, 1, 0, 0, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 0, 0]]]; // 1 second intervals (10 seconds)

var MEDIUM_PATTERNS = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]]; // 0.5 second intervals (10 seconds)

var HARD_PATTERNS = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]];
var test = "this is a test";

/***/ }),

/***/ "./src/js/walls.js":
/*!*************************!*\
  !*** ./src/js/walls.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Wall(octant) {
  this.octant = octant;
  this.sprite = new Image();
  this.speed = 4;
  this.sprite.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png';
  this.octantLogic(octant);
}

Wall.prototype.octantLogic = function (octant) {
  switch (octant) {
    case 0:
      this.pos = [0, 384];
      this.degreeRotation = -90;
      this.xoffset = -100;
      this.yoffset = 100;
      break;

    case 1:
      this.pos = [0, 0];
      this.degreeRotation = -45;
      this.xoffset = -100;
      this.yoffset = 50;
      break;

    case 2:
      this.pos = [384, 0];
      this.degreeRotation = 0;
      this.xoffset = -100;
      this.yoffset = -100;
      break;

    case 3:
      this.pos = [768, 0];
      this.degreeRotation = 45;
      this.xoffset = -50;
      this.yoffset = -100;
      break;

    case 4:
      this.pos = [768, 384];
      this.degreeRotation = 90;
      this.xoffset = 100;
      this.yoffset = -100;
      break;

    case 5:
      this.pos = [768, 768];
      this.degreeRotation = 135;
      this.xoffset = 100;
      this.yoffset = -50;
      break;

    case 6:
      this.pos = [384, 768];
      this.degreeRotation = 180;
      this.xoffset = 100;
      this.yoffset = 100;
      break;

    case 7:
      this.pos = [0, 768];
      this.degreeRotation = 225;
      this.xoffset = 50;
      this.yoffset = 100;
      break;
  }
};

Wall.prototype.move = function (cursor, game) {
  // TODO hitbox logic is actually coded here, return true if gameOver
  // may need to pass down degrees from cursor
  var gameOver = false;
  var posx = this.pos[0];
  var posy = this.pos[1];
  var dx = 384 - posx;
  var dy = 384 - posy; // walls will converge towards center

  if (dx > 0) {
    this.pos[0] += this.speed;
  } else if (dx < 0) {
    this.pos[0] -= this.speed;
  }

  if (dy > 0) {
    this.pos[1] += this.speed;
  } else if (dy < 0) {
    this.pos[1] -= this.speed;
  }

  return gameOver;
};

Wall.prototype.draw = function (ctx) {
  var pos = this.pos;
  var x = pos[0];
  var y = pos[1];
  ctx.translate(x + this.xoffset, y + this.yoffset);
  ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
  ctx.drawImage(this.sprite, 100 / 2, 100 / 2, 100, 100);
  ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
  ctx.translate(-x - this.xoffset, -y - this.yoffset);
};

module.exports = Wall;

/***/ }),

/***/ "./src/js/wave.js":
/*!************************!*\
  !*** ./src/js/wave.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "./src/js/patterns.js");
/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walls */ "./src/js/walls.js");
/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walls__WEBPACK_IMPORTED_MODULE_1__);
// use require instead of import



function Wave(difficulty) {
  // console.log(EASY_PATTERNS[Math.floor(Math.random(EASY_PATTERNS.length))]);
  this.end = false;
  this.difficulty = difficulty;

  switch (difficulty) {
    case 'easy':
      // debugger
      this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_0__["EASY_PATTERNS"][Math.floor(Math.random(_patterns__WEBPACK_IMPORTED_MODULE_0__["EASY_PATTERNS"].length))];
      break;

    case 'medium':
      this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_0__["MEDIUM_PATTERNS"][Math.floor(Math.random(_patterns__WEBPACK_IMPORTED_MODULE_0__["MEDIUM_PATTERNS"].length))];
      break;

    case 'hard':
      this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_0__["HARD_PATTERNS"][Math.floor(Math.random(_patterns__WEBPACK_IMPORTED_MODULE_0__["HARD_PATTERNS"].length))];
      break;
  }

  this.walls = this.addWalls(difficulty);
}

Wave.prototype.addWalls = function (difficulty) {
  var walls = [];
  var pattern = this.pattern; // for (let i=0; i<8; i++){
  //   if (pattern[i] === 1){
  //     let newWall = new Wall(i, this.pattern);
  //     walls.push(newWall);
  //   } else {
  //     walls.push(null);
  //   }
  // }

  for (var i = 0; i < 8; i++) {
    var newWall = new _walls__WEBPACK_IMPORTED_MODULE_1___default.a(i, this.pattern);
    walls.push(newWall);
  }

  return walls;
};

Wave.prototype.move = function (cursor, game) {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  if (this.difficulty === 'easy') {
    for (var i = 0; i < 8; i++) {
      if (this.walls[i].move(cursor, game)) gameOver = true;
    }
  }

  return gameOver;
};

Wave.prototype.draw = function (ctx) {
  for (var i = 0; i < 8; i++) {
    this.walls[i].draw(ctx);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Wave);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImJpZ0xvZ28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic21hbGxMb2dvIiwiZ2FtZUluZm8iLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiQ3Vyc29yIiwiY29udGV4dCIsImN1cnNvclNwZWVkIiwicG9zaXRpb24iLCJjdXJzb3IiLCJJbWFnZSIsInNyYyIsIm1vdmVDdXJzb3IiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25EZXRlY3QiLCJkcmF3IiwiZGltX3giLCJkaW1feSIsImJlZ2luUGF0aCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0dhbWVPdmVyIiwiZWxhcHNlZFRpbWUiLCJ0b3RhbFRpbWVFbGFwc2VkIiwid2F2ZXMiLCJ3YXZlSW50ZXJ2YWwiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZVdhdmUiLCJyZW1vdmVEaXN0YW5jZSIsInVuZGVmaW5lZCIsImkiLCJ3YWxscyIsIngxIiwicG9zIiwieTEiLCJkaXN0YW5jZSIsInNxcnQiLCJzaGlmdCIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsImZyYW1lUmF0ZSIsInNldFRpbWUiLCJjdXJUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVEaWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJFQVNZX1BBVFRFUk5TIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInRlc3QiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic3BlZWQiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsInBhdHRlcm4iLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZSxHQUFmO0FBQ0FILE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQjtBQUNBLElBQUlDLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsR0FBRyxDQUFDRSx3QkFBSixHQUErQixrQkFBL0IsQyxDQUVBOztBQUNBLElBQU1DLElBQUksR0FBRyxJQUFJQyxnREFBSixDQUFTSixHQUFULENBQWI7QUFDQSxJQUFNSyxTQUFTLEdBQUcsSUFBSUMscURBQUosQ0FBY04sR0FBZCxFQUFtQkcsSUFBbkIsQ0FBbEI7QUFDQUUsU0FBUyxDQUFDRSxNQUFWLEc7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFDQSxTQUFTQyxRQUFULENBQWtCTCxJQUFsQixFQUF1QjtBQUNyQixPQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLTSxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUNYQyxRQUFJLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FESztBQUVYQyxTQUFLLEVBQUU7QUFBQ0QsWUFBTSxFQUFFO0FBQVQ7QUFGSSxHQUFiO0FBSUEsT0FBS0UscUJBQUwsR0FBNkIsS0FBS0EscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQTdCO0FBQ0EsT0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsT0FBS0UsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsT0FBS0csS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0gsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsT0FBS0ksU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVKLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxPQUFLSyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0wsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLE9BQUtNLE9BQUwsR0FBZXpCLFFBQVEsQ0FBQzBCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQjNCLFFBQVEsQ0FBQzBCLHNCQUFULENBQWdDLFdBQWhDLENBQWpCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQjVCLFFBQVEsQ0FBQzBCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFoQjtBQUNEOztBQUVEZCxRQUFRLENBQUNpQixTQUFULENBQW1CVCxvQkFBbkIsR0FBMEMsWUFBVTtBQUNsRHBCLFVBQVEsQ0FBQzhCLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtQLFNBQTdDO0FBRUF2QixVQUFRLENBQUMrQixnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLVixPQUExQztBQUNBckIsVUFBUSxDQUFDK0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS1QsS0FBeEM7QUFDRCxDQUxEOztBQU9BVixRQUFRLENBQUNpQixTQUFULENBQW1CWCxxQkFBbkIsR0FBMkMsWUFBVTtBQUNuRGxCLFVBQVEsQ0FBQzhCLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtULE9BQTdDO0FBQ0FyQixVQUFRLENBQUM4QixtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLUixLQUEzQztBQUVBdEIsVUFBUSxDQUFDK0IsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS1IsU0FBMUM7QUFDRCxDQUxEOztBQU9BWCxRQUFRLENBQUNpQixTQUFULENBQW1CUixPQUFuQixHQUE2QixVQUFTVyxDQUFULEVBQVk7QUFDdkMsVUFBUUEsQ0FBQyxDQUFDQyxJQUFWO0FBQ0UsU0FBSyxZQUFMO0FBQ0UsVUFBSSxDQUFDLEtBQUtuQixLQUFMLENBQVdHLEtBQVgsQ0FBaUJELE1BQXRCLEVBQTZCO0FBQzNCLGFBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkQsTUFBakIsR0FBMEIsSUFBMUI7QUFDRDs7QUFDRDs7QUFDRixTQUFLLFdBQUw7QUFDRSxVQUFJLENBQUMsS0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFyQixFQUE0QjtBQUMxQixhQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRTtBQVpKO0FBY0QsQ0FmRDs7QUFpQkFKLFFBQVEsQ0FBQ2lCLFNBQVQsQ0FBbUJQLEtBQW5CLEdBQTJCLFVBQVNVLENBQVQsRUFBWTtBQUNyQyxVQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDRSxTQUFLLFlBQUw7QUFDRSxXQUFLbkIsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUFqQixHQUEwQixLQUExQjtBQUNBOztBQUNGLFNBQUssV0FBTDtBQUNFLFdBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUIsS0FBekI7QUFDQTs7QUFDRjtBQUNFO0FBUko7QUFVRCxDQVhEOztBQWFBSixRQUFRLENBQUNpQixTQUFULENBQW1CTixTQUFuQixHQUErQixVQUFTUyxDQUFULEVBQVk7QUFDekMsTUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUN0QixTQUFLYixvQkFBTDtBQUNBLFNBQUtiLElBQUwsQ0FBVTJCLFlBQVY7QUFDQSxTQUFLVCxPQUFMLENBQWEsQ0FBYixFQUFnQlUsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFNBQUtYLE9BQUwsQ0FBYSxDQUFiLEVBQWdCVSxTQUFoQixDQUEwQkUsR0FBMUIsQ0FBOEIsMEJBQTlCO0FBQ0EsU0FBS1YsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCQyxNQUE1QixDQUFtQyxtQkFBbkM7QUFDQSxTQUFLVCxTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJFLEdBQTVCLENBQWdDLG9CQUFoQztBQUNBLFNBQUtULFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MseUJBQWxDO0FBQ0EsU0FBS1IsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCRSxHQUEzQixDQUErQiwwQkFBL0I7QUFDRDtBQUNGLENBWEQ7O0FBYUF6QixRQUFRLENBQUNpQixTQUFULENBQW1CTCxRQUFuQixHQUE4QixZQUFXO0FBQ3ZDLE9BQUtOLHFCQUFMO0FBQ0EsT0FBS1gsSUFBTCxDQUFVaUIsUUFBVjtBQUNBLE9BQUtDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCVSxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsMEJBQWpDO0FBQ0EsT0FBS1gsT0FBTCxDQUFhLENBQWIsRUFBZ0JVLFNBQWhCLENBQTBCRSxHQUExQixDQUE4Qix5QkFBOUI7QUFDQSxPQUFLVixTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLG9CQUFuQztBQUNBLE9BQUtULFNBQUwsQ0FBZSxDQUFmLEVBQWtCUSxTQUFsQixDQUE0QkUsR0FBNUIsQ0FBZ0MsbUJBQWhDO0FBQ0EsT0FBS1QsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQywwQkFBbEM7QUFDQSxPQUFLUixRQUFMLENBQWMsQ0FBZCxFQUFpQk8sU0FBakIsQ0FBMkJFLEdBQTNCLENBQStCLHlCQUEvQjtBQUNELENBVEQ7O0FBV2V6Qix1RUFBZixFOzs7Ozs7Ozs7OztBQ3hGQSxTQUFTMEIsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDdkIsT0FBSzFCLE9BQUwsR0FBZSxDQUFDLEVBQWhCO0FBQ0EsT0FBSzJCLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLE9BQUtELE1BQUwsQ0FBWUUsR0FBWixHQUFrQix3R0FBbEI7QUFDRDs7QUFFRE4sTUFBTSxDQUFDVCxTQUFQLENBQWlCZ0IsVUFBakIsR0FBOEIsVUFBU0MsU0FBVCxFQUFtQjtBQUMvQyxVQUFRQSxTQUFSO0FBQ0UsU0FBSyxXQUFMO0FBQ0UsV0FBS2pDLE9BQUwsSUFBZ0IsS0FBSzJCLFdBQXJCO0FBQ0E7O0FBRUYsU0FBSyxZQUFMO0FBQ0UsV0FBSzNCLE9BQUwsSUFBZ0IsS0FBSzJCLFdBQXJCO0FBQ0E7QUFQSjtBQVNELENBVkQ7O0FBWUFGLE1BQU0sQ0FBQ1QsU0FBUCxDQUFpQmtCLGVBQWpCLEdBQW1DLFlBQVUsQ0FDM0M7QUFDRCxDQUZEOztBQUlBVCxNQUFNLENBQUNULFNBQVAsQ0FBaUJtQixJQUFqQixHQUF3QixVQUFTNUMsR0FBVCxFQUFjNkMsS0FBZCxFQUFxQkMsS0FBckIsRUFBMkI7QUFDakQ5QyxLQUFHLENBQUMrQyxTQUFKO0FBQ0EvQyxLQUFHLENBQUNnRCxTQUFKLENBQWNILEtBQUssR0FBQyxDQUFwQixFQUF1QkMsS0FBSyxHQUFDLENBQTdCO0FBQ0E5QyxLQUFHLENBQUNpRCxNQUFKLENBQWEsSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCLEdBQWpCLElBQXlCLEtBQUsxQyxPQUFMLEdBQWUsR0FBeEMsQ0FBWDtBQUNBVCxLQUFHLENBQUNnRCxTQUFKLENBQWMsR0FBZCxFQUFtQixDQUFuQjtBQUNBaEQsS0FBRyxDQUFDb0QsU0FBSixDQUFjLEtBQUtkLE1BQW5CLEVBQTJCLENBQTNCLEVBQTZCLENBQUMsRUFBOUI7QUFDRCxDQU5EOztBQVFBZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJwQixNQUFqQixDOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxTQUFTOUIsSUFBVCxDQUFjK0IsT0FBZCxFQUF1QjtBQUFBOztBQUN0QixPQUFLb0IsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUt2RCxHQUFMLEdBQVdtQyxPQUFYO0FBQ0EsT0FBS1UsS0FBTCxHQUFhLEdBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNBLE9BQUtVLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxPQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUl2QixLQUFKLEVBQWQ7QUFDQSxPQUFLd0IsU0FBTCxHQUFpQixJQUFJeEIsS0FBSixFQUFqQjtBQUNBLE9BQUt5QixTQUFMLEdBQWlCLElBQUl6QixLQUFKLEVBQWpCO0FBQ0EsT0FBSzBCLFNBQUwsR0FBaUIsSUFBSTFCLEtBQUosRUFBakI7QUFDQSxPQUFLMkIsYUFBTCxHQUFxQixDQUFyQjtBQUNBLE9BQUtILFNBQUwsQ0FBZXZCLEdBQWYsR0FDQyw0RkFERDtBQUVBLE9BQUt3QixTQUFMLENBQWV4QixHQUFmLEdBQ0MsNEZBREQ7QUFFQSxPQUFLeUIsU0FBTCxDQUFlekIsR0FBZixHQUNDLDRGQUREO0FBRUEsT0FBSzJCLFFBQUwsR0FBZ0IsQ0FBRSxLQUFLSixTQUFQLEVBQWtCLEtBQUtDLFNBQXZCLEVBQWtDLEtBQUtDLFNBQXZDLENBQWhCO0FBQ0EsT0FBS0gsTUFBTCxDQUFZdEIsR0FBWixHQUFrQix3REFBbEI7QUFDQSxPQUFLNEIsYUFBTCxHQUFxQkMsV0FBVyxDQUFDLFlBQU07QUFDdEMsU0FBSSxDQUFDSCxhQUFMLElBQXNCLENBQXRCO0FBQ0EsUUFBSSxLQUFJLENBQUNBLGFBQUwsS0FBdUIsQ0FBM0IsRUFBOEIsS0FBSSxDQUFDQSxhQUFMLEdBQXFCLENBQXJCO0FBQzlCLEdBSCtCLEVBRzdCLEdBSDZCLENBQWhDO0FBSUEsT0FBS0ksS0FBTCxHQUFhMUUsUUFBUSxDQUFDMEIsc0JBQVQsQ0FBZ0MsT0FBaEMsQ0FBYjtBQUNBOztBQUVEbEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlOEMsS0FBZixHQUF1QixVQUFTQyxhQUFULEVBQXdCO0FBQUEsTUFDdENDLFFBRHNDLEdBQ2pCLElBRGlCLENBQ3RDQSxRQURzQztBQUFBLE1BQzVCbkMsTUFENEIsR0FDakIsSUFEaUIsQ0FDNUJBLE1BRDRCOztBQUU5QyxNQUFJbUMsUUFBUSxDQUFDL0QsS0FBVCxDQUFlQyxJQUFmLENBQW9CQyxNQUF4QixFQUFnQztBQUMvQjBCLFVBQU0sQ0FBQ0csVUFBUCxDQUFrQixZQUFsQjtBQUNBLEdBRkQsTUFFTyxJQUFJZ0MsUUFBUSxDQUFDL0QsS0FBVCxDQUFlRyxLQUFmLENBQXFCRCxNQUF6QixFQUFpQztBQUN2QzBCLFVBQU0sQ0FBQ0csVUFBUCxDQUFrQixXQUFsQjtBQUNBOztBQUVELE9BQUtpQyxZQUFMLENBQWtCRixhQUFsQjtBQUVBLE9BQUtHLFNBQUwsQ0FBZUgsYUFBZjtBQUNBLENBWEQ7O0FBYUFwRSxJQUFJLENBQUNxQixTQUFMLENBQWVtQixJQUFmLEdBQXNCLFlBQVc7QUFBQSxNQUN4QkMsS0FEd0IsR0FDK0IsSUFEL0IsQ0FDeEJBLEtBRHdCO0FBQUEsTUFDakJDLEtBRGlCLEdBQytCLElBRC9CLENBQ2pCQSxLQURpQjtBQUFBLE1BQ1Y5QyxHQURVLEdBQytCLElBRC9CLENBQ1ZBLEdBRFU7QUFBQSxNQUNMbUUsUUFESyxHQUMrQixJQUQvQixDQUNMQSxRQURLO0FBQUEsTUFDS0QsYUFETCxHQUMrQixJQUQvQixDQUNLQSxhQURMO0FBQUEsTUFDb0JKLE1BRHBCLEdBQytCLElBRC9CLENBQ29CQSxNQURwQjtBQUVoQzlELEtBQUcsQ0FBQzRFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CL0IsS0FBcEIsRUFBMkJDLEtBQTNCLEVBRmdDLENBRUc7O0FBRW5DOUMsS0FBRyxDQUFDNkUsU0FBSixHQUFnQixNQUFoQjtBQUNBN0UsS0FBRyxDQUFDOEUsV0FBSixHQUFrQixNQUFsQjtBQUNBOUUsS0FBRyxDQUFDK0UsSUFBSixHQU5nQyxDQVFoQzs7QUFDQSxPQUFLekMsTUFBTCxDQUFZTSxJQUFaLENBQWlCNUMsR0FBakIsRUFBc0I2QyxLQUF0QixFQUE2QkMsS0FBN0I7QUFFQSxPQUFLOUMsR0FBTCxDQUFTZ0YsT0FBVCxHQVhnQyxDQWFoQzs7QUFDQSxPQUFLdEIsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJBLFFBQUksQ0FBQ3RDLElBQUwsQ0FBVTVDLEdBQVY7QUFDQSxHQUZELEVBZGdDLENBa0JoQzs7QUFDQSxPQUFLQSxHQUFMLENBQVMrQyxTQUFUO0FBQ0EsT0FBSy9DLEdBQUwsQ0FBU21GLEdBQVQsQ0FBYXRDLEtBQUssR0FBRyxDQUFyQixFQUF3QkMsS0FBSyxHQUFHLENBQWhDLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDSSxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyRCxFQUF3RCxLQUF4RDtBQUNBLE9BQUtuRCxHQUFMLENBQVNvRixNQUFULEdBckJnQyxDQXVCaEM7O0FBQ0EsT0FBS3BGLEdBQUwsQ0FBU29ELFNBQVQsQ0FDQ2UsUUFBUSxDQUFDRCxhQUFELENBRFQsRUFFQ3JCLEtBQUssR0FBRyxDQUFSLEdBQVksSUFGYixFQUdDQyxLQUFLLEdBQUcsQ0FBUixHQUFZLElBSGIsRUFJQ0QsS0FBSyxHQUFHLENBSlQsRUFLQ0MsS0FBSyxHQUFHLENBTFQsRUF4QmdDLENBZ0NoQzs7QUFDQSxPQUFLOUMsR0FBTCxDQUFTb0QsU0FBVCxDQUFtQlUsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUNqQixLQUFqQyxFQUF3Q0MsS0FBeEM7QUFDQSxDQWxDRDs7QUFvQ0ExQyxJQUFJLENBQUNxQixTQUFMLENBQWU0RCxTQUFmLEdBQTJCLFlBQVc7QUFDckMsT0FBSy9DLE1BQUwsR0FBYyxJQUFJSiw4Q0FBSixFQUFkO0FBQ0EsU0FBTyxLQUFLSSxNQUFaO0FBQ0EsQ0FIRDs7QUFLQWxDLElBQUksQ0FBQ3FCLFNBQUwsQ0FBZTZELFdBQWYsR0FBNkIsWUFBVztBQUN2QyxPQUFLYixRQUFMLEdBQWdCLElBQUlqRSxpREFBSixDQUFhLElBQWIsQ0FBaEI7QUFDQSxTQUFPLEtBQUtpRSxRQUFaO0FBQ0EsQ0FIRDs7QUFLQXJFLElBQUksQ0FBQ3FCLFNBQUwsQ0FBZThELE9BQWYsR0FBeUIsVUFBU2YsYUFBVCxFQUF3QjtBQUFBLE1BQ3hDaEIsV0FEd0MsR0FDVixJQURVLENBQ3hDQSxXQUR3QztBQUFBLE1BQzNCRyxZQUQyQixHQUNWLElBRFUsQ0FDM0JBLFlBRDJCOztBQUVoRCxNQUFJSCxXQUFXLEdBQUdHLFlBQWxCLEVBQWdDO0FBQy9CO0FBQ0EsUUFBSTZCLE9BQU8sR0FBRyxJQUFJQyw2Q0FBSixDQUFTLEtBQUs3QixVQUFkLENBQWQ7QUFDQSxTQUFLRixLQUFMLENBQVdnQyxJQUFYLENBQWdCRixPQUFoQjtBQUNBLFNBQUtoQyxXQUFMLEdBQW1CLENBQW5CLENBSitCLENBSy9COztBQUNBLFNBQUtHLFlBQUwsR0FBb0IsS0FBSyxJQUF6QjtBQUNBLEdBVCtDLENBV2hEOzs7QUFDQSxPQUFLSCxXQUFMLElBQW9CZ0IsYUFBcEI7QUFDQSxDQWJEOztBQWVBcEUsSUFBSSxDQUFDcUIsU0FBTCxDQUFla0UsVUFBZixHQUE0QixZQUFXO0FBQUEsTUFDOUJqQyxLQUQ4QixHQUNwQixJQURvQixDQUM5QkEsS0FEOEI7QUFFdEMsTUFBTWtDLGNBQWMsR0FBRyxFQUF2QixDQUZzQyxDQUd0QztBQUNBOztBQUNBLE1BQUlsQyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFtQyxTQUFqQixFQUE0QjtBQUMzQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0I7QUFDQSxVQUFJcEMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTcUMsS0FBVCxDQUFlRCxDQUFmLE1BQXNCRCxTQUExQixFQUFxQztBQUNwQztBQUNBLFlBQUlHLEVBQUUsR0FBR3RDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3FDLEtBQVQsQ0FBZUQsQ0FBZixFQUFrQkcsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBVDtBQUNBLFlBQUlDLEVBQUUsR0FBR3hDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3FDLEtBQVQsQ0FBZUQsQ0FBZixFQUFrQkcsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBVDtBQUNBLFlBQUlFLFFBQVEsR0FBR2pELElBQUksQ0FBQ2tELElBQUwsQ0FBVSxTQUFDLE1BQU1KLEVBQVAsRUFBYyxDQUFkLGFBQW1CLE1BQU1FLEVBQXpCLEVBQWdDLENBQWhDLENBQVYsQ0FBZixDQUpvQyxDQUtwQzs7QUFDQSxZQUFJQyxRQUFRLEdBQUdQLGNBQWYsRUFBK0I7QUFDOUIsZUFBS2xDLEtBQUwsQ0FBVzJDLEtBQVg7QUFDQTtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0QsQ0FyQkQ7O0FBdUJBakcsSUFBSSxDQUFDcUIsU0FBTCxDQUFla0QsU0FBZixHQUEyQixVQUFTSCxhQUFULEVBQXdCO0FBQUE7O0FBQ2xELE9BQUtlLE9BQUwsQ0FBYWYsYUFBYjtBQUNBLE1BQUlyRSxJQUFJLEdBQUcsSUFBWDtBQUZrRCxNQUcxQ3VELEtBSDBDLEdBR2hDLElBSGdDLENBRzFDQSxLQUgwQyxFQUtsRDs7QUFDQSxPQUFLaUMsVUFBTDtBQUVBakMsT0FBSyxDQUFDdUIsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN2QjtBQUNBLFFBQUlBLElBQUksQ0FBQ29CLElBQUwsQ0FBVSxNQUFJLENBQUNoRSxNQUFmLEVBQXVCbkMsSUFBdkIsQ0FBSixFQUFrQyxNQUFJLENBQUNpQixRQUFMO0FBQ2xDLEdBSEQ7QUFJQSxDQVpEOztBQWNBaEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlaUQsWUFBZixHQUE4QixVQUFTNkIsV0FBVCxFQUFzQjtBQUNuRCxPQUFLOUMsZ0JBQUwsSUFBeUI4QyxXQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBR3RELElBQUksQ0FBQ3VELEtBQUwsQ0FBVyxLQUFLaEQsZ0JBQUwsR0FBd0IsRUFBbkMsSUFBeUMsR0FBM0Q7QUFDQSxPQUFLYSxLQUFMLENBQVcsQ0FBWCxFQUFjb0MsU0FBZCxHQUEwQkYsV0FBVyxDQUFDRyxRQUFaLEVBQTFCO0FBQ0EsQ0FKRDs7QUFNQXZHLElBQUksQ0FBQ3FCLFNBQUwsQ0FBZUssWUFBZixHQUE4QixZQUFXO0FBQ3hDLE9BQUswQixXQUFMLEdBQW1CLENBQW5CO0FBQ0EsT0FBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLRCxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLE9BQUtGLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxDQUxEOztBQU9BbkQsSUFBSSxDQUFDcUIsU0FBTCxDQUFlTCxRQUFmLEdBQTBCLFlBQVc7QUFDcEM7QUFDQSxPQUFLbUMsVUFBTCxHQUFrQixJQUFsQjtBQUNBLENBSEQ7O0FBS2VuRCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwS0E7QUFBQSxTQUFTRSxTQUFULENBQW9CNkIsT0FBcEIsRUFBNkJoQyxJQUE3QixFQUFtQztBQUNqQyxPQUFLSCxHQUFMLEdBQVdtQyxPQUFYO0FBQ0EsT0FBS2hDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUt5RyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS3BDLGFBQUwsR0FBcUIsT0FBSyxLQUFLb0MsU0FBL0I7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUt2RSxNQUFMLEdBQWMsS0FBS25DLElBQUwsQ0FBVWtGLFNBQVYsRUFBZDtBQUNBLE9BQUtaLFFBQUwsR0FBZ0IsS0FBS3RFLElBQUwsQ0FBVW1GLFdBQVYsRUFBaEI7QUFDQSxPQUFLYixRQUFMLENBQWNyRCxRQUFkO0FBQ0Q7O0FBRURkLFNBQVMsQ0FBQ21CLFNBQVYsQ0FBb0JsQixNQUFwQixHQUE2QixZQUFVO0FBQUEsTUFDOUJpRSxhQUQ4QixHQUNKLElBREksQ0FDOUJBLGFBRDhCO0FBQUEsTUFDZnFDLE9BRGUsR0FDSixJQURJLENBQ2ZBLE9BRGUsRUFJckM7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0gsT0FBTyxHQUFHRCxPQUF4QixDQU5xQyxDQVFyQzs7QUFDQSxNQUFJSSxPQUFPLElBQUl6QyxhQUFYLElBQTRCLENBQUMsS0FBS3JFLElBQUwsQ0FBVW9ELFVBQTNDLEVBQXNEO0FBQ3BELFNBQUtwRCxJQUFMLENBQVVvRSxLQUFWLENBQWdCQyxhQUFoQjtBQUNBLFNBQUtyRSxJQUFMLENBQVV5QyxJQUFWO0FBQ0EsU0FBS2lFLE9BQUwsR0FBZUMsT0FBZjtBQUNEOztBQUVESSxRQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUs1RyxNQUFMLENBQVlRLElBQVosQ0FBaUIsSUFBakIsQ0FBN0I7QUFDRCxDQWhCRDs7QUFrQmVULHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNOEcsYUFBYSxHQUFHLENBQzNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLENBRDJCLEVBUTNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLENBUjJCLEVBZTNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLENBZjJCLENBQXRCLEMsQ0F3QlA7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLENBQzdCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLENBRDZCLEVBYTdCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLENBYjZCLENBQXhCLEMsQ0E0QlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLEVBV0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVhGLEVBWUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVpGLEVBYUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWJGLEVBY0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWRGLEVBZUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWZGLEVBZ0JFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FoQkYsRUFpQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWpCRixFQWtCRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBbEJGLEVBbUJFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FuQkYsRUFvQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQXBCRixDQUQyQixFQXVCM0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsRUFXRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWEYsRUFZRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWkYsRUFhRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBYkYsRUFj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LEVBQTRCO0FBQzNCLFFBQUk4QyxPQUFPLEdBQUcsSUFBSXBCLDZDQUFKLENBQVMxQixDQUFULEVBQVksS0FBS3lDLE9BQWpCLENBQWQ7QUFDQXhDLFNBQUssQ0FBQ0wsSUFBTixDQUFXa0QsT0FBWDtBQUNBOztBQUVELFNBQU83QyxLQUFQO0FBQ0EsQ0FuQkQ7O0FBcUJBTixJQUFJLENBQUNoRSxTQUFMLENBQWU2RSxJQUFmLEdBQXNCLFVBQVNoRSxNQUFULEVBQWlCbkMsSUFBakIsRUFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsTUFBSWlCLFFBQVEsR0FBRyxLQUFmOztBQUVBLE1BQUksS0FBS3dDLFVBQUwsS0FBb0IsTUFBeEIsRUFBZ0M7QUFDL0IsU0FBSyxJQUFJa0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixVQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjUSxJQUFkLENBQW1CaEUsTUFBbkIsRUFBMkJuQyxJQUEzQixDQUFKLEVBQXNDaUIsUUFBUSxHQUFHLElBQVg7QUFDdEM7QUFDRDs7QUFFRCxTQUFPQSxRQUFQO0FBQ0EsQ0FiRDs7QUFlQXFFLElBQUksQ0FBQ2hFLFNBQUwsQ0FBZW1CLElBQWYsR0FBc0IsVUFBUzVDLEdBQVQsRUFBYztBQUNuQyxPQUFLLElBQUk4RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFNBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjbEQsSUFBZCxDQUFtQjVDLEdBQW5CO0FBQ0E7QUFDRCxDQUpEOztBQU1leUYsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gNzY4O1xuY2FudmFzLmhlaWdodCA9IDc2ODtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbi8vIGluc3RhbnRpYXRlIGdhbWVcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuZ2FtZXN0YWdlLnRpY2tlcigpOyIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtbG9nb1wiKTtcbiAgdGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGUtYm94XCIpO1xuICB0aGlzLmdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtaW5mb1wiKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmVuYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5VXAgPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuICAgIHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IC05MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLnBvc2l0aW9uID0gW107XG4gIHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRPRE8gc29tZSBzb3J0IG9mIGhpdGJveCBsb2dpY1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgsIGRpbV94LCBkaW1feSl7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnRyYW5zbGF0ZShkaW1feC8yLCBkaW1feS8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcblxuLy8gaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMud2F2ZUludGVydmFsID0gMDtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5jbGVhclJlY3QoMCwgMCwgZGltX3gsIGRpbV95KTsgLy8gY2xlYXIgY2FudmFzXG5cblx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0Y3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc2F2ZSgpO1xuXG5cdC8vIEN1cnNvclxuXHR0aGlzLmN1cnNvci5kcmF3KGN0eCwgZGltX3gsIGRpbV95KTtcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBlbGFwc2VkVGltZSwgd2F2ZUludGVydmFsIH0gPSB0aGlzO1xuXHRpZiAoZWxhcHNlZFRpbWUgPiB3YXZlSW50ZXJ2YWwpIHtcblx0XHQvLyBsYXVuY2ggbmV4dCB3YXZlIGF0IHNldCBpbnRlcnZhbHNcblx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHRcdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHRcdC8vIFRPRE8gY3JlYXRlIG5ldyB3YXZlSW50ZXJ2YWwgYmFzZWQgb24gZGlmZmljdWx0eVxuXHRcdHRoaXMud2F2ZUludGVydmFsID0gMTAgKiAxMDAwO1xuXHR9XG5cblx0Ly8gaW5jcmVtZW50IGVsYXBzZWRUaW1lXG5cdHRoaXMuZWxhcHNlZFRpbWUgKz0gZnJhbWVJbnRlcnZhbDtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0Ly8gZGVidWdnZXJcblx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0Ly8gZGVidWdnZXI7XG5cdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBkZWJ1Z2dlclxuXHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGBkaXN0YW5jZSBpcyAke2Rpc3RhbmNlfSBhbmQgcmVtb3ZlRGlzdGFuY2UgaXMgNTBgKTtcblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRsZXQgZ2FtZSA9IHRoaXM7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdHdhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0aWYgKHdhdmUubW92ZSh0aGlzLmN1cnNvciwgZ2FtZSkpIHRoaXMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJcbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjU7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG5cbiAgLy8gdGltZS1saW1pdFxuICBsZXQgY3VyVGltZSA9IERhdGUubm93KCk7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsICYmICF0aGlzLmdhbWUuaXNHYW1lT3Zlcil7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFnZTsiLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFsgXG4gIFtcbiAgICBbMSwxLDAsMCwxLDEsMCwwLF0sXG4gICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgWzEsMSwwLDAsMSwxLDAsMF0sXG4gICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgWzEsMSwwLDAsMSwxLDAsMF1cbiAgXSxcbiAgW1xuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdXG4gIF0sXG4gIFtcbiAgICBbMSwxLDEsMCwwLDEsMSwxXSxcbiAgICBbMSwwLDAsMSwxLDEsMSwxXSxcbiAgICBbMCwwLDEsMSwxLDEsMSwxXSxcbiAgICBbMCwxLDEsMSwxLDEsMSwwXSxcbiAgICBbMSwxLDEsMSwxLDEsMCwwXVxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXSxcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF1cbl07XG5cblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdXG5dO1xuXG5leHBvcnQgY29uc3QgdGVzdCA9IFwidGhpcyBpcyBhIHRlc3RcIjsiLCJmdW5jdGlvbiBXYWxsKG9jdGFudCkge1xuXHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zcGVlZCA9IDQ7XG5cdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcbn1cblxuV2FsbC5wcm90b3R5cGUub2N0YW50TG9naWMgPSBmdW5jdGlvbihvY3RhbnQpIHtcblx0c3dpdGNoIChvY3RhbnQpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDUwO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA0NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC01MDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA5MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxMzU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtNTA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDc6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gNTA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuV2FsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGN1cnNvciwgZ2FtZSkge1xuXHQvLyBUT0RPIGhpdGJveCBsb2dpYyBpcyBhY3R1YWxseSBjb2RlZCBoZXJlLCByZXR1cm4gdHJ1ZSBpZiBnYW1lT3ZlclxuXHQvLyBtYXkgbmVlZCB0byBwYXNzIGRvd24gZGVncmVlcyBmcm9tIGN1cnNvclxuXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG5cdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcblx0aWYgKGR4ID4gMCkge1xuXHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHggPCAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXHRpZiAoZHkgPiAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHR0aGlzLnBvc1sxXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2FsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0bGV0IHggPSBwb3NbMF07XG5cdGxldCB5ID0gcG9zWzFdO1xuXG5cdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCwgeSArIHRoaXMueW9mZnNldCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCAxMDAgLyAyLCAxMDAgLyAyLCAxMDAsIDEwMCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgteCAtIHRoaXMueG9mZnNldCwgLXkgLSB0aGlzLnlvZmZzZXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiLy8gdXNlIHJlcXVpcmUgaW5zdGVhZCBvZiBpbXBvcnRcbmltcG9ydCB7XG5cdEVBU1lfUEFUVEVSTlMsXG5cdE1FRElVTV9QQVRURVJOUyxcblx0SEFSRF9QQVRURVJOUyxcblx0dGVzdFxufSBmcm9tICcuL3BhdHRlcm5zJztcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5mdW5jdGlvbiBXYXZlKGRpZmZpY3VsdHkpIHtcblx0Ly8gY29uc29sZS5sb2coRUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKEVBU1lfUEFUVEVSTlMubGVuZ3RoKSldKTtcblx0dGhpcy5lbmQgPSBmYWxzZTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0Y2FzZSAnZWFzeSc6XG5cdFx0XHQvLyBkZWJ1Z2dlclxuXHRcdFx0dGhpcy5wYXR0ZXJuID1cblx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKEVBU1lfUEFUVEVSTlMubGVuZ3RoKSldO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdHRoaXMucGF0dGVybiA9XG5cdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKE1FRElVTV9QQVRURVJOUy5sZW5ndGgpKV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdoYXJkJzpcblx0XHRcdHRoaXMucGF0dGVybiA9XG5cdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbShIQVJEX1BBVFRFUk5TLmxlbmd0aCkpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xufVxuXG5XYXZlLnByb3RvdHlwZS5hZGRXYWxscyA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpIHtcblx0bGV0IHdhbGxzID0gW107XG5cdGNvbnN0IHsgcGF0dGVybiB9ID0gdGhpcztcblxuXHQvLyBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcblx0Ly8gICBpZiAocGF0dGVybltpXSA9PT0gMSl7XG5cdC8vICAgICBsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKGksIHRoaXMucGF0dGVybik7XG5cdC8vICAgICB3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHQvLyAgIH0gZWxzZSB7XG5cdC8vICAgICB3YWxscy5wdXNoKG51bGwpO1xuXHQvLyAgIH1cblx0Ly8gfVxuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChpLCB0aGlzLnBhdHRlcm4pO1xuXHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdH1cblxuXHRyZXR1cm4gd2FsbHM7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oY3Vyc29yLCBnYW1lKSB7XG5cdC8vIFRPRE8gaXRlcmF0ZSB0aHJ1IGVhY2ggd2FsbCBhbmQgc2V0IG5ldyBjb29yZGluYXRlcywgbW92ZW1lbnQgYWxvd2VkIGJhc2VkIG9uIGVsYXBzZWQgdGltZVxuXHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0Ly8gYWN0dWFsIGxvZ2ljIGluIHdhbGxzLmpzXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG5cdGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGN1cnNvciwgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9