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
  }
};

Controls.prototype.startGame = function (e) {
  if (e.code === "Space") this.enablePlayerControls();
  this.game.startNewGame();
  this.bigLogo[0].classList.remove("start-game-logo-fade-in");
  this.bigLogo[0].classList.add("start-game-logo-fade-out");
  this.smallLogo[0].classList.remove("title-box-fade-in");
  this.smallLogo[0].classList.add("title-box-fade-out");
  this.gameInfo[0].classList.remove("start-game-info-fade-in");
  this.gameInfo[0].classList.add("start-game-info-fade-out");
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

  this.timerCounter(frameInterval); // TODO uncomment when finished

  this.waveLogic(frameInterval); // this.waveMovement();
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
    // TODO launch next wave
    var newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](this.difficulty);
    this.waves.push(newWave);
    this.elapsedTime = 0; // TODO create new waveInterval based on difficulty

    this.waveInterval = 10 * 1000;
  } else {} // increment elapsedTime


  this.elapsedTime += frameInterval;
};

Game.prototype.removeWave = function () {
  // shifts off wave in FIFO
  this.waves.shift();
};

Game.prototype.waveLogic = function (frameInterval) {
  var _this2 = this;

  this.addWave(frameInterval);
  var game = this;
  var removeDistance = 384 - 50;
  var waves = this.waves;

  if (waves[0] !== undefined) {
    if (Math.abs(waves[0].walls[0].pos[0]) > removeDistance) {
      this.removeWave();
    }
  }

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
  this.sprite.src = "https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png";
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

  ;

  if (dy > 0) {
    this.pos[1] += this.speed;
  } else if (dy < 0) {
    this.pos[1] -= this.speed;
  }

  ;

  if (dx === 0 && dy === 0) {// gameOver = true;
  }

  ;
  return gameOver;
};

Wall.prototype.draw = function (ctx) {
  var pos = this.pos;
  var x = pos[0];
  var y = pos[1]; // TODO change to sprite with offset based on octant

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
    case "easy":
      // debugger
      this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_0__["EASY_PATTERNS"][Math.floor(Math.random(_patterns__WEBPACK_IMPORTED_MODULE_0__["EASY_PATTERNS"].length))];
      break;

    case "medium":
      this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_0__["MEDIUM_PATTERNS"][Math.floor(Math.random(_patterns__WEBPACK_IMPORTED_MODULE_0__["MEDIUM_PATTERNS"].length))];
      break;

    case "hard":
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

  if (this.difficulty === "easy") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImJpZ0xvZ28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic21hbGxMb2dvIiwiZ2FtZUluZm8iLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiQ3Vyc29yIiwiY29udGV4dCIsImN1cnNvclNwZWVkIiwicG9zaXRpb24iLCJjdXJzb3IiLCJJbWFnZSIsInNyYyIsIm1vdmVDdXJzb3IiLCJkaXJlY3Rpb24iLCJjb2xsaXNpb25EZXRlY3QiLCJkcmF3IiwiZGltX3giLCJkaW1feSIsImJlZ2luUGF0aCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0dhbWVPdmVyIiwiZWxhcHNlZFRpbWUiLCJ0b3RhbFRpbWVFbGFwc2VkIiwid2F2ZXMiLCJ3YXZlSW50ZXJ2YWwiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZVdhdmUiLCJzaGlmdCIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiYWJzIiwid2FsbHMiLCJwb3MiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiY3VyVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRUFTWV9QQVRURVJOUyIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJ0ZXN0IiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNwZWVkIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJwYXR0ZXJuIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhZGRXYWxscyIsImkiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLEdBQWY7QUFDQUgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsSUFBSUMsR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRCxHQUFHLENBQUNFLHdCQUFKLEdBQStCLGtCQUEvQixDLENBRUE7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLENB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RDJCLEVBUTNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLENBUjJCLEVBZTNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLENBZjJCLENBQXRCLEMsQ0F3QlA7O0FBQ08sSUFBTUMsZUFBZSxHQUFHLENBQzdCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLENBRDZCLEVBYTdCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLENBYjZCLENBQXhCLEMsQ0E0QlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLEVBV0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVhGLEVBWUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVpGLEVBYUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWJGLEVBY0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWRGLEVBZUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWZGLEVBZ0JFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FoQkYsRUFpQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWpCRixFQWtCRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBbEJGLEVBbUJFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FuQkYsRUFvQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQXBCRixDQUQyQixFQXVCM0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVB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QkEsQ0FBQyxFQUFwQixFQUF1QjtBQUNyQixVQUFJLEtBQUt4QyxLQUFMLENBQVd3QyxDQUFYLEVBQWN0QyxJQUFkLENBQW1CNUQsTUFBbkIsRUFBMkJuQyxJQUEzQixDQUFKLEVBQXNDaUIsUUFBUSxHQUFHLElBQVg7QUFDdkM7QUFDRjs7QUFFRCxTQUFPQSxRQUFQO0FBQ0QsQ0FiRDs7QUFlQXFFLElBQUksQ0FBQ2hFLFNBQUwsQ0FBZW1CLElBQWYsR0FBc0IsVUFBUzVDLEdBQVQsRUFBYTtBQUNqQyxPQUFLLElBQUl3SSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsQ0FBaEIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDckIsU0FBS3hDLEtBQUwsQ0FBV3dDLENBQVgsRUFBYzVGLElBQWQsQ0FBbUI1QyxHQUFuQjtBQUNEO0FBQ0YsQ0FKRDs7QUFNZXlGLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbEVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbmNhbnZhcy53aWR0aCA9IDc2ODtcbmNhbnZhcy5oZWlnaHQgPSA3Njg7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZGVncmVlcyA9IDA7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5VXAgPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IC05MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLnBvc2l0aW9uID0gW107XG4gIHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRPRE8gc29tZSBzb3J0IG9mIGhpdGJveCBsb2dpY1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgsIGRpbV94LCBkaW1feSl7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnRyYW5zbGF0ZShkaW1feC8yLCBkaW1feS8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcblxuLy8gaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMud2F2ZUludGVydmFsID0gMDtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0Ly8gVE9ETyB1bmNvbW1lbnQgd2hlbiBmaW5pc2hlZFxuXHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcblx0Ly8gdGhpcy53YXZlTW92ZW1lbnQoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcCB9ID0gdGhpcztcblx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBkaW1feCwgZGltX3kpOyAvLyBjbGVhciBjYW52YXNcblxuXHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zYXZlKCk7XG5cblx0Ly8gQ3Vyc29yXG5cdHRoaXMuY3Vyc29yLmRyYXcoY3R4LCBkaW1feCwgZGltX3kpO1xuXG5cdHRoaXMuY3R4LnJlc3RvcmUoKTtcblxuXHQvLyBXYXZlc1xuXHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHR3YXZlLmRyYXcoY3R4KTtcblx0fSk7XG5cblx0Ly8gRWFydGggb3JiaXRcblx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdHRoaXMuY3R4LmFyYyhkaW1feCAvIDIsIGRpbV95IC8gMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuXHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHQvLyBXYXJwZ2F0ZVxuXHR0aGlzLmN0eC5kcmF3SW1hZ2UoXG5cdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0ZGltX3ggLyA0ICsgOTcuNSxcblx0XHRkaW1feSAvIDQgKyA5Ny41LFxuXHRcdGRpbV94IC8gNCxcblx0XHRkaW1feSAvIDRcblx0KTtcblxuXHQvLyBNYXBcblx0dGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZEN1cnNvciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblx0cmV0dXJuIHRoaXMuY3Vyc29yO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzKTtcblx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGVsYXBzZWRUaW1lLCB3YXZlSW50ZXJ2YWwgfSA9IHRoaXM7XG5cdGlmIChlbGFwc2VkVGltZSA+IHdhdmVJbnRlcnZhbCkge1xuXHRcdC8vIFRPRE8gbGF1bmNoIG5leHQgd2F2ZVxuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0dGhpcy53YXZlSW50ZXJ2YWwgPSAxMCAqIDEwMDA7XG5cdH0gZWxzZSB7XG5cdH1cblxuXHQvLyBpbmNyZW1lbnQgZWxhcHNlZFRpbWVcblx0dGhpcy5lbGFwc2VkVGltZSArPSBmcmFtZUludGVydmFsO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHR0aGlzLndhdmVzLnNoaWZ0KCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0bGV0IGdhbWUgPSB0aGlzO1xuXHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDM4NC01MDtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmICggTWF0aC5hYnMod2F2ZXNbMF0ud2FsbHNbMF0ucG9zWzBdKSA+IHJlbW92ZURpc3RhbmNlKXtcblx0XHRcdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXHRcdH1cblx0fVxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUodGhpcy5jdXJzb3IsIGdhbWUpKSB0aGlzLmdhbWVPdmVyKCk7XG5cdH0pO1xufTtcblxuR2FtZS5wcm90b3R5cGUudGltZXJDb3VudGVyID0gZnVuY3Rpb24odGltZUVsYXBzZWQpIHtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRsZXQgcm91bmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0dGhpcy50aW1lclswXS5pbm5lckhUTUwgPSByb3VuZGVkVGltZS50b1N0cmluZygpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuc3RhcnROZXdHYW1lID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gb3B0aW9uIHRvIHBsYXkgYWdhaW4sIGNhbGxzIHN0YXJ0IG5ldyBnYW1lXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDY1O1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbIFxuICBbXG4gICAgWzEsMSwwLDAsMSwxLDAsMCxdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXVxuICBdLFxuICBbXG4gICAgWzEsMSwxLDAsMCwxLDEsMV0sXG4gICAgWzEsMCwwLDEsMSwxLDEsMV0sXG4gICAgWzAsMCwxLDEsMSwxLDEsMV0sXG4gICAgWzAsMSwxLDEsMSwxLDEsMF0sXG4gICAgWzEsMSwxLDEsMSwxLDAsMF1cbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdXG5dO1xuXG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdLFxuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXVxuXTtcblxuZXhwb3J0IGNvbnN0IHRlc3QgPSBcInRoaXMgaXMgYSB0ZXN0XCI7IiwiXG5mdW5jdGlvbiBXYWxsKG9jdGFudCl7XG4gIHRoaXMub2N0YW50ID0gb2N0YW50O1xuICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLnNwZWVkID0gNDtcbiAgdGhpcy5zcHJpdGUuc3JjID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmdcIjtcbiAgdGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xufVxuXG5XYWxsLnByb3RvdHlwZS5vY3RhbnRMb2dpYyA9IGZ1bmN0aW9uKG9jdGFudCl7XG4gIFxuICBzd2l0Y2ggKG9jdGFudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHRoaXMucG9zID0gWzAsMzg0XTtcbiAgICAgIHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG4gICAgICB0aGlzLnhvZmZzZXQgPSAtMTAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMTAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgdGhpcy5wb3MgPSBbMCwwXTtcbiAgICAgIHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG4gICAgICB0aGlzLnhvZmZzZXQgPSAtMTAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gNTA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB0aGlzLnBvcyA9IFszODQsMF07XG4gICAgICB0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMueG9mZnNldCA9IC0xMDA7XG4gICAgICB0aGlzLnlvZmZzZXQgPSAtMTAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdGhpcy5wb3MgPSBbNzY4LDBdO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuICAgICAgdGhpcy54b2Zmc2V0ID0gLTUwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gLTEwMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHRoaXMucG9zID0gWzc2OCwzODRdO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMTAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gLTEwMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHRoaXMucG9zID0gWzc2OCw3NjhdO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcbiAgICAgIHRoaXMueG9mZnNldCA9IDEwMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IC01MDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIHRoaXMucG9zID0gWzM4NCw3NjhdO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcbiAgICAgIHRoaXMueG9mZnNldCA9IDEwMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDEwMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzpcbiAgICAgIHRoaXMucG9zID0gWzAsNzY4XTtcbiAgICAgIHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG4gICAgICB0aGlzLnhvZmZzZXQgPSA1MDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDEwMDtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihjdXJzb3IsIGdhbWUpe1xuICAvLyBUT0RPIGhpdGJveCBsb2dpYyBpcyBhY3R1YWxseSBjb2RlZCBoZXJlLCByZXR1cm4gdHJ1ZSBpZiBnYW1lT3ZlclxuICAvLyBtYXkgbmVlZCB0byBwYXNzIGRvd24gZGVncmVlcyBmcm9tIGN1cnNvclxuXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICBcbiAgbGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcbiAgbGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcbiAgbGV0IGR4ID0gMzg0IC0gcG9zeDtcbiAgbGV0IGR5ID0gMzg0IC0gcG9zeTtcbiAgLy8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuICBpZiAoZHggPiAwKXt0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkfSBlbHNlIGlmIChkeCA8IDApIHt0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkfTtcbiAgaWYgKGR5ID4gMCl7dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZH0gZWxzZSBpZiAoZHkgPCAwKSB7dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZH07XG5cbiAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKXtcbiAgICAvLyBnYW1lT3ZlciA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIGdhbWVPdmVyO1xufVxuXG5XYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KXtcbiAgY29uc3Qge3Bvc30gPSB0aGlzO1xuICBsZXQgeCA9IHBvc1swXTtcbiAgbGV0IHkgPSBwb3NbMV07XG4gIFxuXG4gIC8vIFRPRE8gY2hhbmdlIHRvIHNwcml0ZSB3aXRoIG9mZnNldCBiYXNlZCBvbiBvY3RhbnRcbiAgY3R4LnRyYW5zbGF0ZSh4K3RoaXMueG9mZnNldCwgeSt0aGlzLnlvZmZzZXQpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUgLDEwMC8yLCAxMDAvMiwgMTAwLCAxMDApO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKC14LXRoaXMueG9mZnNldCwgLXktdGhpcy55b2Zmc2V0KTtcbiAgXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7IiwiXG4vLyB1c2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydFxuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TLCB0ZXN0IH0gIGZyb20gJy4vcGF0dGVybnMnO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxscyc7XG5cbmZ1bmN0aW9uIFdhdmUoZGlmZmljdWx0eSkge1xuICAvLyBjb25zb2xlLmxvZyhFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oRUFTWV9QQVRURVJOUy5sZW5ndGgpKV0pO1xuICB0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICBzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcbiAgICBjYXNlIFwiZWFzeVwiOlxuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIHRoaXMucGF0dGVybiA9IEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbShFQVNZX1BBVFRFUk5TLmxlbmd0aCkpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHRoaXMucGF0dGVybiA9IE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKE1FRElVTV9QQVRURVJOUy5sZW5ndGgpKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFyZFwiOlxuICAgICAgdGhpcy5wYXR0ZXJuID0gSEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKEhBUkRfUEFUVEVSTlMubGVuZ3RoKSldO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgdGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSl7XG4gIGxldCB3YWxscyA9IFtdO1xuICBjb25zdCB7cGF0dGVybn0gPSB0aGlzO1xuICBcbiAgLy8gZm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG4gIC8vICAgaWYgKHBhdHRlcm5baV0gPT09IDEpe1xuICAvLyAgICAgbGV0IG5ld1dhbGwgPSBuZXcgV2FsbChpLCB0aGlzLnBhdHRlcm4pO1xuICAvLyAgICAgd2FsbHMucHVzaChuZXdXYWxsKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgd2FsbHMucHVzaChudWxsKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcbiAgICAgIGxldCBuZXdXYWxsID0gbmV3IFdhbGwoaSwgdGhpcy5wYXR0ZXJuKTtcbiAgICAgIHdhbGxzLnB1c2gobmV3V2FsbCk7XG4gIH1cblxuICByZXR1cm4gd2FsbHM7XG59XG5cbldhdmUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihjdXJzb3IsIGdhbWUpe1xuICAvLyBUT0RPIGl0ZXJhdGUgdGhydSBlYWNoIHdhbGwgYW5kIHNldCBuZXcgY29vcmRpbmF0ZXMsIG1vdmVtZW50IGFsb3dlZCBiYXNlZCBvbiBlbGFwc2VkIHRpbWVcbiAgLy8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG4gIC8vIGFjdHVhbCBsb2dpYyBpbiB3YWxscy5qc1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSBcImVhc3lcIil7XG4gICAgZm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG4gICAgICBpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGN1cnNvciwgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZU92ZXI7XG59XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcbiAgICB0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXZlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=