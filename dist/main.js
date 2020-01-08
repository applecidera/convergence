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
    if (wave.move(_this2.cursor)) _this2.gameOver();
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
  this.speed = 4;
  this.octantLogic(octant);
  this.sprite.src = "https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png";
}

Wall.prototype.octantLogic = function (octant) {
  switch (octant) {
    case 0:
      // this.sprite = "image goes here"
      this.pos = [0, 384];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 1:
      this.pos = [0, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 2:
      this.pos = [384, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 3:
      this.pos = [768, 0];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 4:
      this.pos = [768, 384];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 5:
      this.pos = [768, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 6:
      this.pos = [384, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      break;

    case 7:
      this.pos = [0, 768];
      this.xoffset = 0;
      this.yoffset = 0;
      break;
  }
};

Wall.prototype.move = function (cursor) {
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

Wave.prototype.move = function (cursor) {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  if (this.difficulty === "easy") {
    for (var i = 0; i < 8; i++) {
      if (this.walls[i].move(cursor)) gameOver = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImJpZ0xvZ28iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic21hbGxMb2dvIiwiZ2FtZUluZm8iLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiSW1hZ2UiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uRGV0ZWN0IiwiZHJhdyIsImRpbV94IiwiZGltX3kiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXF1aXJlIiwiV2F2ZSIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsImRpZmZpY3VsdHkiLCJnYW1lU3RhdGUiLCJzdW5NYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwicmVzdG9yZSIsImZvckVhY2giLCJ3YXZlIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJhZGRXYXZlIiwibmV3V2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwic2hpZnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiY3VyVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRUFTWV9QQVRURVJOUyIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic3BlZWQiLCJvY3RhbnRMb2dpYyIsInBvcyIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJkZWdyZWVSb3RhdGlvbiIsIndhbGxzIiwiYWRkV2FsbHMiLCJlbmQiLCJwYXR0ZXJuIiwicmFuZG9tIiwiZmxvb3IiLCJsZW5ndGgiLCJpIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxJQUFJQyxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELEdBQUcsQ0FBQ0Usd0JBQUosR0FBK0Isa0JBQS9CLEMsQ0FFQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsK0NBQUosQ0FBU0osR0FBVCxDQUFiO0FBQ0EsSUFB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UyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsQ0FSb0IsRUFlcEIsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsQ0Fmb0IsQ0FBdEIsQyxDQXdCQTs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsQ0FDdEIsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsQ0FEc0IsRUFhdEIsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsQ0Fic0IsQ0FBeEIsQyxDQTRCQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FDcEIsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsRUFXRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWEYsRUFZRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWkYsRUFhRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBYkYsRUFjRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBZEYsRUFlRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBZkYsRUFnQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQWhCRixFQWlCRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBakJGLEVBa0JFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FsQkYsRUFtQkUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQW5CRixFQW9CRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBcEJGLENBRG9CLEVBdUJwQixDQUNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FERixFQUVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FGRixFQUdFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FIRixFQUlFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FKRixFQUtFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FMRixFQU1FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FORixFQU9FLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FQRixFQVFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FSRixFQVNFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FURixFQVVFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYs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Q0FiRDs7QUFlQW9DLElBQUksQ0FBQy9CLFNBQUwsQ0FBZXFCLElBQWYsR0FBc0IsVUFBUzlDLEdBQVQsRUFBYTtBQUNqQyxPQUFLLElBQUlxSSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsQ0FBaEIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDckIsU0FBS1AsS0FBTCxDQUFXTyxDQUFYLEVBQWN2RixJQUFkLENBQW1COUMsR0FBbkI7QUFDRDtBQUNGLENBSkQ7O0FBTUFrQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJxQixJQUFqQixDOzs7Ozs7Ozs7OztBQ25FQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG5jYW52YXMud2lkdGggPSA3Njg7XG5jYW52YXMuaGVpZ2h0ID0gNzY4O1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuLy8gaW5zdGFudGlhdGUgZ2FtZVxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5jb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG5nYW1lc3RhZ2UudGlja2VyKCk7IiwiXG4vLyBwbGF5ZXIgY29udHJvbHNcbmZ1bmN0aW9uIENvbnRyb2xzKGdhbWUpe1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmRlZ3JlZXMgPSAwO1xuICB0aGlzLnN0YXRlID0ge1xuICAgIGxlZnQ6IHthY3RpdmU6IGZhbHNlfSxcbiAgICByaWdodDoge2FjdGl2ZTogZmFsc2V9XG4gIH1cbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcbiAgdGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IC05MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLnBvc2l0aW9uID0gW107XG4gIHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRPRE8gc29tZSBzb3J0IG9mIGhpdGJveCBsb2dpY1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgsIGRpbV94LCBkaW1feSl7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnRyYW5zbGF0ZShkaW1feC8yLCBkaW1feS8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImNvbnN0IENvbnRyb2xzID0gcmVxdWlyZSgnLi9jb250cm9scycpO1xuY29uc3QgQ3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKTtcbmNvbnN0IFdhdmUgPSByZXF1aXJlKCcuL3dhdmUnKTtcblxuLy8gaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMud2F2ZUludGVydmFsID0gMDtcblx0dGhpcy5kaWZmaWN1bHR5ID0gXCJlYXN5XCI7XG5cdHRoaXMuZ2FtZVN0YXRlID0gZmFsc2U7XG5cdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdHRoaXMud2FycEdhdGUxLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdHRoaXMud2FycEdhdGUgPSBbdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlM107XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aW1lclwiKTtcbn1cblxuR2FtZS5wcm90b3R5cGUubG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKXtcblx0Y29uc3Qge2NvbnRyb2xzLCBjdXJzb3J9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKXtcblx0XHRjdXJzb3IubW92ZUN1cnNvcihcImNjbG9ja3dpc2VcIik7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKXtcblx0XHRjdXJzb3IubW92ZUN1cnNvcihcImNsb2Nrd2lzZVwiKTtcblx0fVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdC8vIFRPRE8gdW5jb21tZW50IHdoZW4gZmluaXNoZWRcblx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdC8vIHRoaXMud2F2ZU1vdmVtZW50KCk7XG59XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpe1xuXHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwfSA9IHRoaXM7XG5cdGN0eC5jbGVhclJlY3QoMCwgMCwgZGltX3gsIGRpbV95KTsgLy8gY2xlYXIgY2FudmFzXG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc2F2ZSgpO1xuXG5cdC8vIEN1cnNvclxuXHR0aGlzLmN1cnNvci5kcmF3KGN0eCwgZGltX3gsIGRpbV95KVxuXG5cdHRoaXMuY3R4LnJlc3RvcmUoKTtcblxuXHQvLyBXYXZlc1xuXHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpPT57XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pXG5cbiAgLy8gRWFydGggb3JiaXRcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyhkaW1feC8yLCBkaW1feS8yLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7IFxuXHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZSh3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSwgZGltX3gvNCArIDk3LjUsIGRpbV95LzQgKyA5Ny41LGRpbV94LzQsIGRpbV95LzQpXG5cdFxuXHQvLyBNYXBcbiAgdGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcblxufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblx0cmV0dXJuIHRoaXMuY3Vyc29yO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdGNvbnN0IHtlbGFwc2VkVGltZSwgd2F2ZUludGVydmFsfSA9IHRoaXM7XG5cdGlmIChlbGFwc2VkVGltZSA+IHdhdmVJbnRlcnZhbCl7XG5cdFx0Ly8gVE9ETyBsYXVuY2ggbmV4dCB3YXZlXG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0XHQvLyBUT0RPIGNyZWF0ZSBuZXcgd2F2ZUludGVydmFsIGJhc2VkIG9uIGRpZmZpY3VsdHlcblx0XHR0aGlzLndhdmVJbnRlcnZhbCA9IDEwICogMTAwMDtcblx0fSBlbHNlIHtcblxuXHR9XG5cblx0Ly8gaW5jcmVtZW50IGVsYXBzZWRUaW1lXG5cdHRoaXMuZWxhcHNlZFRpbWUgKz0gZnJhbWVJbnRlcnZhbDtcbn1cblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdHRoaXMud2F2ZXMuc2hpZnQoKTtcbn1cblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblxuXHRjb25zdCB7d2F2ZXN9ID0gdGhpcztcblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSk9Pntcblx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0aWYgKHdhdmUubW92ZSh0aGlzLmN1cnNvcikpIHRoaXMuZ2FtZU92ZXIoKTtcblx0fSlcbn1cblxuR2FtZS5wcm90b3R5cGUudGltZXJDb3VudGVyID0gZnVuY3Rpb24odGltZUVsYXBzZWQpe1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9ICgoTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQvMTApKS8xMDApO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG5cdFxufVxuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbn1cblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpe1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTdGFnZTsiLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5jb25zdCBFQVNZX1BBVFRFUk5TID0gWyBcbiAgW1xuICAgIFsxLDEsMCwwLDEsMSwwLDAsXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXSxcbiAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICBbMSwxLDAsMCwxLDEsMCwwXVxuICBdLFxuICBbXG4gICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgWzEsMSwwLDAsMSwxLDAsMF0sXG4gICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgWzEsMSwwLDAsMSwxLDAsMF0sXG4gICAgWzAsMCwxLDEsMCwwLDEsMV1cbiAgXSxcbiAgW1xuICAgIFsxLDEsMSwwLDAsMSwxLDFdLFxuICAgIFsxLDAsMCwxLDEsMSwxLDFdLFxuICAgIFswLDAsMSwxLDEsMSwxLDFdLFxuICAgIFswLDEsMSwxLDEsMSwxLDBdLFxuICAgIFsxLDEsMSwxLDEsMSwwLDBdXG4gIF1cbl1cblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXSxcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF1cbl1cblxuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyAoMTAgc2Vjb25kcylcbmNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG4gIFtcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXSxcbiAgICBbMCwwLDAsMCwwLDAsMCwwXVxuICBdLFxuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXVxuXSIsIlxuZnVuY3Rpb24gV2FsbChvY3RhbnQpe1xuICB0aGlzLm9jdGFudCA9IG9jdGFudDtcbiAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5zcGVlZCA9IDQ7XG4gIHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcbiAgdGhpcy5zcHJpdGUuc3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZ2A7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KXtcbiAgXG4gIHN3aXRjaCAob2N0YW50KSB7XG4gICAgY2FzZSAwOlxuICAgICAgLy8gdGhpcy5zcHJpdGUgPSBcImltYWdlIGdvZXMgaGVyZVwiXG4gICAgICB0aGlzLnBvcyA9IFswLDM4NF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHRoaXMucG9zID0gWzAsMF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHRoaXMucG9zID0gWzM4NCwwXTtcbiAgICAgIHRoaXMueG9mZnNldCA9IDA7XG4gICAgICB0aGlzLnlvZmZzZXQgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdGhpcy5wb3MgPSBbNzY4LDBdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICB0aGlzLnBvcyA9IFs3NjgsMzg0XTtcbiAgICAgIHRoaXMueG9mZnNldCA9IDA7XG4gICAgICB0aGlzLnlvZmZzZXQgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgdGhpcy5wb3MgPSBbNzY4LDc2OF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIHRoaXMucG9zID0gWzM4NCw3NjhdO1xuICAgICAgdGhpcy54b2Zmc2V0ID0gMDtcbiAgICAgIHRoaXMueW9mZnNldCA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICB0aGlzLnBvcyA9IFswLDc2OF07XG4gICAgICB0aGlzLnhvZmZzZXQgPSAwO1xuICAgICAgdGhpcy55b2Zmc2V0ID0gMDtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihjdXJzb3Ipe1xuICAvLyBUT0RPIGhpdGJveCBsb2dpYyBpcyBhY3R1YWxseSBjb2RlZCBoZXJlLCByZXR1cm4gdHJ1ZSBpZiBnYW1lT3ZlclxuICAvLyBtYXkgbmVlZCB0byBwYXNzIGRvd24gZGVncmVlcyBmcm9tIGN1cnNvclxuXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICBcbiAgbGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcbiAgbGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcbiAgbGV0IGR4ID0gMzg0IC0gcG9zeDtcbiAgbGV0IGR5ID0gMzg0IC0gcG9zeTtcbiAgLy8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuICBpZiAoZHggPiAwKXt0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkfSBlbHNlIGlmIChkeCA8IDApIHt0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkfTtcbiAgaWYgKGR5ID4gMCl7dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZH0gZWxzZSBpZiAoZHkgPCAwKSB7dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZH07XG5cbiAgLy8gRklYTUUgXG4gIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkgZ2FtZU92ZXIgPSB0cnVlO1xuXG4gIHJldHVybiBnYW1lT3Zlcjtcbn1cblxuV2FsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCl7XG4gIGNvbnN0IHtwb3N9ID0gdGhpcztcbiAgbGV0IHggPSBwb3NbMF07XG4gIGxldCB5ID0gcG9zWzFdO1xuICBcblxuICAvLyBUT0RPIGNoYW5nZSB0byBzcHJpdGUgd2l0aCBvZmZzZXQgYmFzZWQgb24gb2N0YW50XG5cbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlICx4LXRoaXMueG9mZnNldCwgeS10aGlzLnlvZmZzZXQsIDEwMCwgMTAwKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjdHguYXJjKHgsIHksIDUwLCAwLCAyICogTWF0aC5QSSk7XG4gIC8vIGN0eC5zdHJva2UoKTtcbiAgXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7IiwiXG4vLyB1c2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydFxuY29uc3QgRUFTWV9QQVRURVJOUyA9IHJlcXVpcmUoJy4vcGF0dGVybnMnKTtcbmNvbnN0IFdhbGwgPSByZXF1aXJlKCcuL3dhbGxzJylcblxuZnVuY3Rpb24gV2F2ZShkaWZmaWN1bHR5KSB7XG4gIHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuICB0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICBzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcbiAgICBjYXNlIFwiZWFzeVwiOlxuICAgICAgdGhpcy5wYXR0ZXJuID0gRUFTWV9QQVRURVJOU1tNYXRoLnJhbmRvbShNYXRoLmZsb29yKEVBU1lfUEFUVEVSTlMubGVuZ3RoKSldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgdGhpcy5wYXR0ZXJuID0gTUVESVVNX1BBVFRFUk5TW01hdGgucmFuZG9tKE1hdGguZmxvb3IoTUVESVVNX1BBVFRFUk5TLmxlbmd0aCkpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoYXJkXCI6XG4gICAgICB0aGlzLnBhdHRlcm4gPSBIQVJEX1BBVFRFUk5TW01hdGgucmFuZG9tKE1hdGguZmxvb3IoSEFSRF9QQVRURVJOUy5sZW5ndGgpKV07XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5XYXZlLnByb3RvdHlwZS5hZGRXYWxscyA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpe1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgLy8gRklYTUUgUmVtb3ZlIHN0YXRpYyBwYXR0ZXJuIGFuZCBtYWtlIGR5YW1pYyByYW5kb21pemVyXG4gIGxldCBwYXR0ZXJuID0gWyBcbiAgICBbXG4gICAgICBbMSwxLDAsMCwxLDEsMCwwLF0sXG4gICAgICBbMCwwLDEsMSwwLDAsMSwxXSxcbiAgICAgIFsxLDEsMCwwLDEsMSwwLDBdLFxuICAgICAgWzAsMCwxLDEsMCwwLDEsMV0sXG4gICAgICBbMSwxLDAsMCwxLDEsMCwwXVxuICAgIF1cbiAgXTtcblxuICBpZiAoZGlmZmljdWx0eSA9PT0gXCJlYXN5XCIpe1xuICAgIGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuICAgICAgbGV0IG5ld1dhbGwgPSBuZXcgV2FsbChpLCBwYXR0ZXJuKTtcbiAgICAgIC8vIGxldCBuZXdXYWxsID0gbmV3IFdhbGwoaSk7XG4gICAgICB3YWxscy5wdXNoKG5ld1dhbGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3YWxscztcbn1cblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGN1cnNvcil7XG4gIC8vIFRPRE8gaXRlcmF0ZSB0aHJ1IGVhY2ggd2FsbCBhbmQgc2V0IG5ldyBjb29yZGluYXRlcywgbW92ZW1lbnQgYWxvd2VkIGJhc2VkIG9uIGVsYXBzZWQgdGltZVxuICAvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcbiAgLy8gYWN0dWFsIGxvZ2ljIGluIHdhbGxzLmpzXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09IFwiZWFzeVwiKXtcbiAgICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKXtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUoY3Vyc29yKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnYW1lT3Zlcjtcbn1cblxuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCl7XG4gIGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuICAgIHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F2ZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9