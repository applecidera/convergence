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
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_game__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_gamestage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gamestage */ "./src/js/gamestage.js");
/* harmony import */ var _js_gamestage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_gamestage__WEBPACK_IMPORTED_MODULE_2__);



var canvas = document.getElementById('stage');
canvas.width = 768;
canvas.height = 768;
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over'; // instantiate game

var game = new _js_game__WEBPACK_IMPORTED_MODULE_1___default.a(ctx);
var gamestage = new _js_gamestage__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, game);
gamestage.ticker();

/***/ }),

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = Controls;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Controls = __webpack_require__(/*! ./controls */ "./src/js/controls.js");

var Cursor = __webpack_require__(/*! ./cursor */ "./src/js/cursor.js");

var Wave = __webpack_require__(/*! ./wave */ "./src/js/wave.js"); // initializer


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
  this.difficulty = "easy";
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
  this.timer = document.getElementsByClassName("timer");
}

Game.prototype.logic = function (frameInterval) {
  var controls = this.controls,
      cursor = this.cursor;

  if (controls.state.left.active) {
    cursor.moveCursor("cclockwise");
  } else if (controls.state.right.active) {
    cursor.moveCursor("clockwise");
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
  this.cursor = new Cursor();
  return this.cursor;
};

Game.prototype.addControls = function () {
  this.controls = new Controls(this);
  return this.controls;
};

Game.prototype.addWave = function (frameInterval) {
  var elapsedTime = this.elapsedTime,
      waveInterval = this.waveInterval;

  if (elapsedTime > waveInterval) {
    // TODO launch next wave
    var newWave = new Wave(this.difficulty);
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
  var waves = this.waves;
  waves.forEach(function (wave) {
    // if any return true, call this.gameOver()
    if (wave.move()) _this2.gameOver();
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

module.exports = Game;

/***/ }),

/***/ "./src/js/gamestage.js":
/*!*****************************!*\
  !*** ./src/js/gamestage.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function GameStage(context, game) {
  this.ctx = context;
  this.game = game;
  this.frameRate = 60;
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

module.exports = GameStage;

/***/ }),

/***/ "./src/js/patterns.js":
/*!****************************!*\
  !*** ./src/js/patterns.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 2 second spawn intervals (10 seconds)
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0]], [[0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1]], [[1, 1, 1, 0, 0, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 0, 0]]]; // 1 second intervals (10 seconds)

var MEDIUM_PATTERNS = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]]; // 0.5 second intervals (10 seconds)

var HARD_PATTERNS = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]];

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
  this.sprite.src = "https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png";
  this.speed = 4;
  this.octantLogic(octant);
}

Wall.prototype.octantLogic = function (octant) {
  switch (octant) {
    case 0:
      // this.sprite = "image goes here"
      this.pos = [0, 384];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 1:
      this.pos = [0, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 2:
      this.pos = [384, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 3:
      this.pos = [768, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 4:
      this.pos = [768, 384];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 5:
      this.pos = [768, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 6:
      this.pos = [384, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;

    case 7:
      this.pos = [0, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      this.degreeRotation = 0;
      break;
  }
};

Wall.prototype.move = function () {
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

  ; // FIXME 

  if (dx === 0 && dy === 0) gameOver = true;
  return gameOver;
};

Wall.prototype.draw = function (ctx) {
  var pos = this.pos;
  var x = pos[0];
  var y = pos[1]; // TODO change to sprite with offset based on octant

  ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
  ctx.drawImage(this.sprite, x - this.xoffset, y - this.yoffset, 100, 100);
  ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360)); // ctx.beginPath();
  // ctx.arc(x, y, 50, 0, 2 * Math.PI);
  // ctx.stroke();
};

module.exports = Wall;

/***/ }),

/***/ "./src/js/wave.js":
/*!************************!*\
  !*** ./src/js/wave.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// use require instead of import
var EASY_PATTERNS = __webpack_require__(/*! ./patterns */ "./src/js/patterns.js");

var Wall = __webpack_require__(/*! ./walls */ "./src/js/walls.js");

function Wave(difficulty) {
  this.walls = this.addWalls(difficulty);
  this.end = false;
  this.difficulty = difficulty;

  switch (difficulty) {
    case "easy":
      this.pattern = EASY_PATTERNS[Math.random(Math.floor(EASY_PATTERNS.length))];
      break;

    case "medium":
      this.pattern = MEDIUM_PATTERNS[Math.random(Math.floor(MEDIUM_PATTERNS.length))];
      break;

    case "hard":
      this.pattern = HARD_PATTERNS[Math.random(Math.floor(HARD_PATTERNS.length))];
      break;
  }
}

Wave.prototype.addWalls = function (difficulty) {
  var walls = []; // FIXME Remove static pattern and make dyamic randomizer

  var pattern = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0]]];

  if (difficulty === "easy") {
    for (var i = 0; i < 8; i++) {
      var newWall = new Wall(i, pattern); // let newWall = new Wall(i);

      walls.push(newWall);
    }
  }

  return walls;
};

Wave.prototype.move = function () {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  if (this.difficulty === "easy") {
    for (var i = 0; i < 8; i++) {
      if (this.walls[i].move()) gameOver = true;
    }
  }

  return gameOver;
};

Wave.prototype.draw = function (ctx) {
  for (var i = 0; i < 8; i++) {
    this.walls[i].draw(ctx);
  }
};

module.exports = Wave;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImJpZ0xvZ28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic21hbGxMb2dvIiwiZ2FtZUluZm8iLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiSW1hZ2UiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uRGV0ZWN0IiwiZHJhdyIsImRpbV94IiwiZGltX3kiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXF1aXJlIiwiV2F2ZSIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsImRpZmZpY3VsdHkiLCJnYW1lU3RhdGUiLCJzdW5NYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwicmVzdG9yZSIsImZvckVhY2giLCJ3YXZlIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJhZGRXYXZlIiwibmV3V2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwic2hpZnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiY3VyVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRUFTWV9QQVRURVJOUyIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic3BlZWQiLCJvY3RhbnRMb2dpYyIsInBvcyIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiZGVncmVlUm90YXRpb24iLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsIndhbGxzIiwiYWRkV2FsbHMiLCJlbmQiLCJwYXR0ZXJuIiwicmFuZG9tIiwiZmxvb3IiLCJsZW5ndGgiLCJpIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxJQUFJQyxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELEdBQUcsQ0FBQ0Usd0JBQUosR0FBK0Isa0JBQS9CLEMsQ0FFQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsK0NBQUosQ0FBU0osR0FBVCxDQUFiO0FBQ0EsSUFB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Q0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixDQVJvQixFQWVwQixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixDQWZvQixDQUF0QixDLENBd0JBOztBQUNBLElBQU1DLGVBQWUsR0FBRyxDQUN0QixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixFQU1FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FORixFQU9FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FQRixFQVFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FSRixFQVNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FURixFQVVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FWRixDQURzQixFQWF0QixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixFQU1FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FORixFQU9FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FQRixFQVFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FSRixFQVNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FURixFQVVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FWRixDQWJzQixDQUF4QixDLENBNEJBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxDQUNwQixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixFQU1FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FORixFQU9FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FQRixFQVFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FSRixFQVNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FURixFQVVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FWRixFQVdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FYRixFQVlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FaRixFQWFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FiRixFQWNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FkRixFQWVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FmRixFQWdCRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBaEJGLEVBaUJFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FqQkYsRUFrQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWxCRixFQW1CRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBbkJGLEVBb0JFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FwQkYsQ0FEb0IsRUF1QnBCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVZGLEVBV0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVhGLEVBWUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVpGLEVBYUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWJGLEVBY0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWRGLEVBZUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWZGLEVBZ0JFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FoQkYsRUFpQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWpCRixFQWtCRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBbEJGLEVBbUJFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FuQkYsRUFvQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQXBCRixDQXZCb0IsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUN0REEsU0FBU0MsSUFBVCxDQUFjQyxNQUFkLEVBQXFCO0FBQ25CLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtDLE1BQUwsR0FBYyxJQUFJeEUsS0FBSixFQUFkO0FBQ0EsT0FBS3dFLE1BQUwsQ0FBWXZFLEdBQVosR0FBa0IsNEZBQWxCO0FBQ0EsT0FBS3dFLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsV0FBTCxDQUFpQkgsTUFBakI7QUFDRDs7QUFFREQsSUFBSSxDQUFDdEYsU0FBTCxDQUFlMEYsV0FBZixHQUE2QixVQUFTSCxNQUFULEVBQWdCO0FBRTNDLFVBQVFBLE1BQVI7QUFDRSxTQUFLLENBQUw7QUFDRTtBQUNBLFdBQUtJLEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxHQUFILENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLEdBQUQsRUFBSyxDQUFMLENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLEdBQUQsRUFBSyxDQUFMLENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBOztBQUNGLFNBQUssQ0FBTDtBQUNFLFdBQUtILEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBRyxHQUFILENBQVg7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBO0FBakRKO0FBbURELENBckREOztBQXVEQVIsSUFBSSxDQUFDdEYsU0FBTCxDQUFlcUUsSUFBZixHQUFzQixZQUFVO0FBQzlCO0FBQ0E7QUFFQSxNQUFJMUUsUUFBUSxHQUFHLEtBQWY7QUFFQSxNQUFJb0csSUFBSSxHQUFHLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBQVg7QUFDQSxNQUFJSyxJQUFJLEdBQUcsS0FBS0wsR0FBTCxDQUFTLENBQVQsQ0FBWDtBQUNBLE1BQUlNLEVBQUUsR0FBRyxNQUFNRixJQUFmO0FBQ0EsTUFBSUcsRUFBRSxHQUFHLE1BQU1GLElBQWYsQ0FUOEIsQ0FVOUI7O0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQVQsRUFBVztBQUFDLFNBQUtOLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0YsS0FBcEI7QUFBMEIsR0FBdEMsTUFBNEMsSUFBSVEsRUFBRSxHQUFHLENBQVQsRUFBWTtBQUFDLFNBQUtOLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0YsS0FBcEI7QUFBMEI7O0FBQUE7O0FBQ25GLE1BQUlTLEVBQUUsR0FBRyxDQUFULEVBQVc7QUFBQyxTQUFLUCxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEtBQXBCO0FBQTBCLEdBQXRDLE1BQTRDLElBQUlTLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFBQyxTQUFLUCxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEtBQXBCO0FBQTBCOztBQUFBLEdBWnJELENBYzlCOztBQUNBLE1BQUlRLEVBQUUsS0FBSyxDQUFQLElBQVlDLEVBQUUsS0FBSyxDQUF2QixFQUEwQnZHLFFBQVEsR0FBRyxJQUFYO0FBRTFCLFNBQU9BLFFBQVA7QUFDRCxDQWxCRDs7QUFvQkEyRixJQUFJLENBQUN0RixTQUFMLENBQWVxQixJQUFmLEdBQXNCLFVBQVM5QyxHQUFULEVBQWE7QUFBQSxNQUMxQm9ILEdBRDBCLEdBQ25CLElBRG1CLENBQzFCQSxHQUQwQjtBQUVqQyxNQUFJUSxDQUFDLEdBQUdSLEdBQUcsQ0FBQyxDQUFELENBQVg7QUFDQSxNQUFJUyxDQUFDLEdBQUdULEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FIaUMsQ0FNakM7O0FBRUFwSCxLQUFHLENBQUNtRCxNQUFKLENBQWEsSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCLEdBQWpCLElBQXlCLEtBQUtrRSxjQUFMLEdBQXNCLEdBQS9DLENBQVg7QUFDQXZILEtBQUcsQ0FBQ3NELFNBQUosQ0FBYyxLQUFLMkQsTUFBbkIsRUFBMkJXLENBQUMsR0FBQyxLQUFLUCxPQUFsQyxFQUEyQ1EsQ0FBQyxHQUFDLEtBQUtQLE9BQWxELEVBQTJELEdBQTNELEVBQWdFLEdBQWhFO0FBQ0F0SCxLQUFHLENBQUNtRCxNQUFKLENBQWEsSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCLEdBQWpCLElBQXlCLENBQUMsS0FBS2tFLGNBQU4sR0FBdUIsR0FBaEQsQ0FBWCxFQVZpQyxDQVdqQztBQUNBO0FBQ0E7QUFFRCxDQWZEOztBQW1CQXJGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjRFLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0EsSUFBTUgsYUFBYSxHQUFHckQsbUJBQU8sQ0FBQyx3Q0FBRCxDQUE3Qjs7QUFDQSxJQUFNd0QsSUFBSSxHQUFHeEQsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFwQjs7QUFFQSxTQUFTQyxJQUFULENBQWNNLFVBQWQsRUFBMEI7QUFDeEIsT0FBS2dFLEtBQUwsR0FBYSxLQUFLQyxRQUFMLENBQWNqRSxVQUFkLENBQWI7QUFDQSxPQUFLa0UsR0FBTCxHQUFXLEtBQVg7QUFDQSxPQUFLbEUsVUFBTCxHQUFrQkEsVUFBbEI7O0FBQ0EsVUFBUUEsVUFBUjtBQUNFLFNBQUssTUFBTDtBQUNFLFdBQUttRSxPQUFMLEdBQWVyQixhQUFhLENBQUN4RCxJQUFJLENBQUM4RSxNQUFMLENBQVk5RSxJQUFJLENBQUMrRSxLQUFMLENBQVd2QixhQUFhLENBQUN3QixNQUF6QixDQUFaLENBQUQsQ0FBNUI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxXQUFLSCxPQUFMLEdBQWVwQixlQUFlLENBQUN6RCxJQUFJLENBQUM4RSxNQUFMLENBQVk5RSxJQUFJLENBQUMrRSxLQUFMLENBQVd0QixlQUFlLENBQUN1QixNQUEzQixDQUFaLENBQUQsQ0FBOUI7QUFDQTs7QUFDRixTQUFLLE1BQUw7QUFDRSxXQUFLSCxPQUFMLEdBQWVuQixhQUFhLENBQUMxRCxJQUFJLENBQUM4RSxNQUFMLENBQVk5RSxJQUFJLENBQUMrRSxLQUFMLENBQVdyQixhQUFhLENBQUNzQixNQUF6QixDQUFaLENBQUQsQ0FBNUI7QUFDQTtBQVRKO0FBV0Q7O0FBRUQ1RSxJQUFJLENBQUMvQixTQUFMLENBQWVzRyxRQUFmLEdBQTBCLFVBQVNqRSxVQUFULEVBQW9CO0FBQzVDLE1BQUlnRSxLQUFLLEdBQUcsRUFBWixDQUQ0QyxDQUU1Qzs7QUFDQSxNQUFJRyxPQUFPLEdBQUcsQ0FDWixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixDQURZLENBQWQ7O0FBVUEsTUFBSW5FLFVBQVUsS0FBSyxNQUFuQixFQUEwQjtBQUN4QixTQUFLLElBQUl1RSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsQ0FBaEIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDckIsVUFBSUMsT0FBTyxHQUFHLElBQUl2QixJQUFKLENBQVNzQixDQUFULEVBQVlKLE9BQVosQ0FBZCxDQURxQixDQUVyQjs7QUFDQUgsV0FBSyxDQUFDbkMsSUFBTixDQUFXMkMsT0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT1IsS0FBUDtBQUNELENBdEJEOztBQXdCQXRFLElBQUksQ0FBQy9CLFNBQUwsQ0FBZXFFLElBQWYsR0FBc0IsWUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxNQUFJMUUsUUFBUSxHQUFHLEtBQWY7O0FBRUEsTUFBSSxLQUFLMEMsVUFBTCxLQUFvQixNQUF4QixFQUErQjtBQUM3QixTQUFLLElBQUl1RSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsQ0FBaEIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDckIsVUFBSSxLQUFLUCxLQUFMLENBQVdPLENBQVgsRUFBY3ZDLElBQWQsRUFBSixFQUEwQjFFLFFBQVEsR0FBRyxJQUFYO0FBQzNCO0FBQ0Y7O0FBRUQsU0FBT0EsUUFBUDtBQUNELENBYkQ7O0FBZUFvQyxJQUFJLENBQUMvQixTQUFMLENBQWVxQixJQUFmLEdBQXNCLFVBQVM5QyxHQUFULEVBQWE7QUFDakMsT0FBSyxJQUFJcUksQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLENBQWhCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXVCO0FBQ3JCLFNBQUtQLEtBQUwsQ0FBV08sQ0FBWCxFQUFjdkYsSUFBZCxDQUFtQjlDLEdBQW5CO0FBQ0Q7QUFDRixDQUpEOztBQU1Ba0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcUIsSUFBakIsQzs7Ozs7Ozs7Ozs7QUNuRUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gNzY4O1xuY2FudmFzLmhlaWdodCA9IDc2ODtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbi8vIGluc3RhbnRpYXRlIGdhbWVcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuZ2FtZXN0YWdlLnRpY2tlcigpOyIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtbG9nb1wiKTtcbiAgdGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGUtYm94XCIpO1xuICB0aGlzLmdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtaW5mb1wiKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmVuYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sczsiLCJmdW5jdGlvbiBDdXJzb3IoY29udGV4dCkge1xuICB0aGlzLmRlZ3JlZXMgPSAtOTA7IFxuICB0aGlzLmN1cnNvclNwZWVkID0gNTtcbiAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJjb25zdCBDb250cm9scyA9IHJlcXVpcmUoJy4vY29udHJvbHMnKTtcbmNvbnN0IEN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyk7XG5jb25zdCBXYXZlID0gcmVxdWlyZSgnLi93YXZlJyk7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLndhdmVJbnRlcnZhbCA9IDA7XG5cdHRoaXMuZGlmZmljdWx0eSA9IFwiZWFzeVwiO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gW3RoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTNdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGltZXJcIik7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdGNvbnN0IHtjb250cm9scywgY3Vyc29yfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjY2xvY2t3aXNlXCIpO1xuXHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjbG9ja3dpc2VcIik7XG5cdH1cblxuXHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHQvLyBUT0RPIHVuY29tbWVudCB3aGVuIGZpbmlzaGVkXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHQvLyB0aGlzLndhdmVNb3ZlbWVudCgpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSlcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKT0+e1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KVxuXG4gIC8vIEVhcnRoIG9yYml0XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5hcmMoZGltX3gvMiwgZGltX3kvMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpOyBcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdFxuXHQvLyBXYXJwZ2F0ZVxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uod2FycEdhdGVbd2FycEdhdGVJbmRleF0sIGRpbV94LzQgKyA5Ny41LCBkaW1feS80ICsgOTcuNSxkaW1feC80LCBkaW1feS80KVxuXHRcblx0Ly8gTWFwXG4gIHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG5cbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpe1xuXHRjb25zdCB7ZWxhcHNlZFRpbWUsIHdhdmVJbnRlcnZhbH0gPSB0aGlzO1xuXHRpZiAoZWxhcHNlZFRpbWUgPiB3YXZlSW50ZXJ2YWwpe1xuXHRcdC8vIFRPRE8gbGF1bmNoIG5leHQgd2F2ZVxuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0dGhpcy53YXZlSW50ZXJ2YWwgPSAxMCAqIDEwMDA7XG5cdH0gZWxzZSB7XG5cblx0fVxuXG5cdC8vIGluY3JlbWVudCBlbGFwc2VkVGltZVxuXHR0aGlzLmVsYXBzZWRUaW1lICs9IGZyYW1lSW50ZXJ2YWw7XG59XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpe1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHR0aGlzLndhdmVzLnNoaWZ0KCk7XG59XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpe1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cblx0Y29uc3Qge3dhdmVzfSA9IHRoaXM7XG5cdHdhdmVzLmZvckVhY2goKHdhdmUpPT57XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoKSkgdGhpcy5nYW1lT3ZlcigpO1xuXHR9KVxufVxuXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCl7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gKChNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZC8xMCkpLzEwMCk7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0XG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufVxuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCl7XG5cdC8vIG9wdGlvbiB0byBwbGF5IGFnYWluLCBjYWxscyBzdGFydCBuZXcgZ2FtZVxuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJcbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG5cbiAgLy8gdGltZS1saW1pdFxuICBsZXQgY3VyVGltZSA9IERhdGUubm93KCk7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsICYmICF0aGlzLmdhbWUuaXNHYW1lT3Zlcil7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVN0YWdlOyIsIi8vIDIgc2Vjb25kIHNwYXduIGludGVydmFscyAoMTAgc2Vjb25kcylcbmNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbIFxuICBbXG4gICAgWzEsMSwwLDAsMSwxLDAsMCxdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFsxLDEsMCwwLDEsMSwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXVxuICBdLFxuICBbXG4gICAgWzEsMSwxLDAsMCwxLDEsMV0sXG4gICAgWzEsMCwwLDEsMSwxLDEsMV0sXG4gICAgWzAsMCwxLDEsMSwxLDEsMV0sXG4gICAgWzAsMSwxLDEsMSwxLDEsMF0sXG4gICAgWzEsMSwxLDEsMSwxLDAsMF1cbiAgXVxuXVxuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5jb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdLFxuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXVxuXVxuXG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdXG5dIiwiXG5mdW5jdGlvbiBXYWxsKG9jdGFudCl7XG4gIHRoaXMub2N0YW50ID0gb2N0YW50O1xuICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLnNwcml0ZS5zcmMgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZ1wiXG4gIHRoaXMuc3BlZWQgPSA0O1xuICB0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KXtcbiAgXG4gIHN3aXRjaCAob2N0YW50KSB7XG4gICAgY2FzZSAwOlxuICAgICAgLy8gdGhpcy5zcHJpdGUgPSBcImltYWdlIGdvZXMgaGVyZVwiXG4gICAgICB0aGlzLnBvcyA9IFswLDM4NF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgdGhpcy5wb3MgPSBbMCwwXTtcbiAgICAgIHRoaXMueG9mZnNldCA9IDA7XG4gICAgICB0aGlzLnlvZmZzZXQgPSAwO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB0aGlzLnBvcyA9IFszODQsMF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdGhpcy5wb3MgPSBbNzY4LDBdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICB0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHRoaXMucG9zID0gWzc2OCwzODRdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICB0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIHRoaXMucG9zID0gWzc2OCw3NjhdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICB0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIHRoaXMucG9zID0gWzM4NCw3NjhdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICB0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzpcbiAgICAgIHRoaXMucG9zID0gWzAsNzY4XTtcbiAgICAgIHRoaXMueG9mZnNldCA9IDA7XG4gICAgICB0aGlzLnlvZmZzZXQgPSAwO1xuICAgICAgdGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKXtcbiAgLy8gVE9ETyBoaXRib3ggbG9naWMgaXMgYWN0dWFsbHkgY29kZWQgaGVyZSwgcmV0dXJuIHRydWUgaWYgZ2FtZU92ZXJcbiAgLy8gbWF5IG5lZWQgdG8gcGFzcyBkb3duIGRlZ3JlZXMgZnJvbSBjdXJzb3JcblxuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgXG4gIGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG4gIGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkeCA9IDM4NCAtIHBvc3g7XG4gIGxldCBkeSA9IDM4NCAtIHBvc3k7XG4gIC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcbiAgaWYgKGR4ID4gMCl7dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZH0gZWxzZSBpZiAoZHggPCAwKSB7dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZH07XG4gIGlmIChkeSA+IDApe3RoaXMucG9zWzFdICs9IHRoaXMuc3BlZWR9IGVsc2UgaWYgKGR5IDwgMCkge3RoaXMucG9zWzFdIC09IHRoaXMuc3BlZWR9O1xuXG4gIC8vIEZJWE1FIFxuICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIGdhbWVPdmVyID0gdHJ1ZTtcblxuICByZXR1cm4gZ2FtZU92ZXI7XG59XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBjb25zdCB7cG9zfSA9IHRoaXM7XG4gIGxldCB4ID0gcG9zWzBdO1xuICBsZXQgeSA9IHBvc1sxXTtcbiAgXG5cbiAgLy8gVE9ETyBjaGFuZ2UgdG8gc3ByaXRlIHdpdGggb2Zmc2V0IGJhc2VkIG9uIG9jdGFudFxuXG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZSAseC10aGlzLnhvZmZzZXQsIHktdGhpcy55b2Zmc2V0LCAxMDAsIDEwMCk7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY3R4LmFyYyh4LCB5LCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAvLyBjdHguc3Ryb2tlKCk7XG4gIFxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsOyIsIlxuLy8gdXNlIHJlcXVpcmUgaW5zdGVhZCBvZiBpbXBvcnRcbmNvbnN0IEVBU1lfUEFUVEVSTlMgPSByZXF1aXJlKCcuL3BhdHRlcm5zJyk7XG5jb25zdCBXYWxsID0gcmVxdWlyZSgnLi93YWxscycpXG5cbmZ1bmN0aW9uIFdhdmUoZGlmZmljdWx0eSkge1xuICB0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscyhkaWZmaWN1bHR5KTtcbiAgdGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbiAgc3dpdGNoIChkaWZmaWN1bHR5KSB7XG4gICAgY2FzZSBcImVhc3lcIjpcbiAgICAgIHRoaXMucGF0dGVybiA9IEVBU1lfUEFUVEVSTlNbTWF0aC5yYW5kb20oTWF0aC5mbG9vcihFQVNZX1BBVFRFUk5TLmxlbmd0aCkpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHRoaXMucGF0dGVybiA9IE1FRElVTV9QQVRURVJOU1tNYXRoLnJhbmRvbShNYXRoLmZsb29yKE1FRElVTV9QQVRURVJOUy5sZW5ndGgpKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGFyZFwiOlxuICAgICAgdGhpcy5wYXR0ZXJuID0gSEFSRF9QQVRURVJOU1tNYXRoLnJhbmRvbShNYXRoLmZsb29yKEhBUkRfUEFUVEVSTlMubGVuZ3RoKSldO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuV2F2ZS5wcm90b3R5cGUuYWRkV2FsbHMgPSBmdW5jdGlvbihkaWZmaWN1bHR5KXtcbiAgbGV0IHdhbGxzID0gW107XG4gIC8vIEZJWE1FIFJlbW92ZSBzdGF0aWMgcGF0dGVybiBhbmQgbWFrZSBkeWFtaWMgcmFuZG9taXplclxuICBsZXQgcGF0dGVybiA9IFsgXG4gICAgW1xuICAgICAgWzEsMSwwLDAsMSwxLDAsMCxdLFxuICAgICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgICAgWzEsMSwwLDAsMSwxLDAsMF1cbiAgICBdXG4gIF07XG5cbiAgaWYgKGRpZmZpY3VsdHkgPT09IFwiZWFzeVwiKXtcbiAgICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcbiAgICAgIGxldCBuZXdXYWxsID0gbmV3IFdhbGwoaSwgcGF0dGVybik7XG4gICAgICAvLyBsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKGkpO1xuICAgICAgd2FsbHMucHVzaChuZXdXYWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2FsbHM7XG59XG5cbldhdmUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIGl0ZXJhdGUgdGhydSBlYWNoIHdhbGwgYW5kIHNldCBuZXcgY29vcmRpbmF0ZXMsIG1vdmVtZW50IGFsb3dlZCBiYXNlZCBvbiBlbGFwc2VkIHRpbWVcbiAgLy8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG4gIC8vIGFjdHVhbCBsb2dpYyBpbiB3YWxscy5qc1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSBcImVhc3lcIil7XG4gICAgZm9yIChsZXQgaT0wOyBpPDg7IGkrKyl7XG4gICAgICBpZiAodGhpcy53YWxsc1tpXS5tb3ZlKCkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2FtZU92ZXI7XG59XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcbiAgICB0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdmU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==