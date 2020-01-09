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
  this.overlay = document.getElementsByClassName("overlay");
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
    this.overlay[0].classList.add("clear-background-image");
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
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns */ "./src/js/patterns.js");



 // initializer

function Game(context) {
  var _this = this;

  this.isGameOver = true;
  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.elapsedTime = 0;
  this.totalTimeElapsed = 0;
  this.subwaveTimer = 0;
  this.subWaveInterval = 2;
  this.waves = [];
  this.waveInterval = 0;
  this.patternStep = 0;
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
  } // if (this.totalTimeElapsed > 19 * 1000){
  // 	this.difficulty = "medium";
  // }
  // if (this.totalTimeElapsed > 39 * 1000){
  // 	this.difficulty = "hard";
  // }


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
      waveInterval = this.waveInterval,
      pattern = this.pattern,
      difficulty = this.difficulty; // every 10 seconds randomly select new pattern

  if (elapsedTime > waveInterval) {
    switch (difficulty) {
      case 'easy':
        this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_3__["EASY_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["EASY_PATTERNS"].length)];
        break;

      case 'medium':
        this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"].length)];
        break;

      case 'hard':
        this.pattern = _patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"].length)];
        break;
    } // debugger


    var newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](this.pattern[0]);
    this.waves.push(newWave);
    this.elapsedTime = frameInterval + 1; // TODO create new waveInterval based on difficulty

    this.waveInterval = 10 * 1000;
    this.patternStep = 0;
    this.subwaveTimer = 0;
  }

  if (difficulty === 'easy') {
    this.subWaveInterval = 2;
  } else if (difficulty === "medium") {
    this.subWaveInterval = 1;
  } else if (difficulty === "hard") {
    this.subWaveInterval = 0.75;
  }

  if (this.subwaveTimer > this.subWaveInterval * 1000) {
    this.patternStep += 1;
    this.subwaveTimer = 0;

    var _newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](pattern[this.patternStep]);

    this.waves.push(_newWave);
  } // increment elapsedTime


  this.elapsedTime += frameInterval;
  this.subwaveTimer += frameInterval;
};

Game.prototype.removeWave = function () {
  var waves = this.waves;
  var removeDistance = 60; // shifts off wave in FIFO

  if (waves[0] !== undefined) {
    for (var i = 0; i < 8; i++) {
      if (waves[0].walls[i] !== null) {
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
}; // top right timer


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
/*! exports provided: EASY_PATTERNS, MEDIUM_PATTERNS, HARD_PATTERNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EASY_PATTERNS", function() { return EASY_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIUM_PATTERNS", function() { return MEDIUM_PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HARD_PATTERNS", function() { return HARD_PATTERNS; });
// 2 second spawn intervals (10 seconds)
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0]], [[1, 1, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]]; // 1 second intervals (10 seconds)

var MEDIUM_PATTERNS = [[[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]]; // 0.5 second intervals (10 seconds)

var HARD_PATTERNS = [[[1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1]]];

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
/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./walls */ "./src/js/walls.js");
/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walls__WEBPACK_IMPORTED_MODULE_0__);


function Wave(pattern) {
  this.pattern = pattern;
  this.end = false;
  this.subwaveTimer = 0;
  this.currentSubwave = 0;
  this.walls = this.addWalls();
}

Wave.prototype.addWalls = function (difficulty) {
  var walls = [];
  var pattern = this.pattern;

  for (var i = 0; i < 8; i++) {
    if (pattern[i] === 1) {
      var newWall = new _walls__WEBPACK_IMPORTED_MODULE_0___default.a(i);
      walls.push(newWall);
    } else {
      walls.push(null);
    }
  }

  return walls;
};

Wave.prototype.move = function (cursor, game) {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  for (var i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      if (this.walls[i].move(cursor, game)) gameOver = true;
    }
  }

  return gameOver;
};

Wave.prototype.draw = function (ctx) {
  for (var i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      this.walls[i].draw(ctx);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiSW1hZ2UiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uRGV0ZWN0IiwiZHJhdyIsImRpbV94IiwiZGltX3kiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNHYW1lT3ZlciIsImVsYXBzZWRUaW1lIiwidG90YWxUaW1lRWxhcHNlZCIsInN1YndhdmVUaW1lciIsInN1YldhdmVJbnRlcnZhbCIsIndhdmVzIiwid2F2ZUludGVydmFsIiwicGF0dGVyblN0ZXAiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsInBhdHRlcm4iLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlV2F2ZSIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwieDEiLCJwb3MiLCJ5MSIsImRpc3RhbmNlIiwic3FydCIsInNoaWZ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsImN1clRpbWUiLCJEYXRlIiwibm93IiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzcGVlZCIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxJQUFJQyxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELEdBQUcsQ0FBQ0Usd0JBQUosR0FBK0Isa0JBQS9CLEMsQ0FFQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0RBQUosQ0FBU0osR0FBVCxDQUFiO0FBQ0EsSUFBTUssU0FBUyxHQUFHLElBQUlDLHFEQUFKLENBQWNOLEdBQWQsRUFBbUJHLElBQW5CLENBQWxCO0FBQ0FFLFNBQVMsQ0FBQ0UsTUFBVixHOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQ0EsU0FBU0MsUUFBVCxDQUFrQkwsSUFBbEIsRUFBdUI7QUFDckIsT0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS00sT0FBTCxHQUFlLENBQWY7QUFDQSxPQUFLQyxLQUFMLEdBQWE7QUFDWEMsUUFBSSxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBREs7QUFFWEMsU0FBSyxFQUFFO0FBQUNELFlBQU0sRUFBRTtBQUFUO0FBRkksR0FBYjtBQUlBLE9BQUtFLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUE3QjtBQUNBLE9BQUtDLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLE9BQUtFLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFGLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLE9BQUtHLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdILElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLE9BQUtJLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsT0FBS0ssUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNMLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxPQUFLTSxPQUFMLEdBQWV6QixRQUFRLENBQUMwQixzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsT0FBS0MsT0FBTCxHQUFlM0IsUUFBUSxDQUFDMEIsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQWY7QUFDQSxPQUFLRSxTQUFMLEdBQWlCNUIsUUFBUSxDQUFDMEIsc0JBQVQsQ0FBZ0MsV0FBaEMsQ0FBakI7QUFDQSxPQUFLRyxRQUFMLEdBQWdCN0IsUUFBUSxDQUFDMEIsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQWhCO0FBQ0Q7O0FBRURkLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJWLG9CQUFuQixHQUEwQyxZQUFVO0FBQ2xEcEIsVUFBUSxDQUFDK0IsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS1IsU0FBN0M7QUFFQXZCLFVBQVEsQ0FBQ2dDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtYLE9BQTFDO0FBQ0FyQixVQUFRLENBQUNnQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLVixLQUF4QztBQUNELENBTEQ7O0FBT0FWLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJaLHFCQUFuQixHQUEyQyxZQUFVO0FBQ25EbEIsVUFBUSxDQUFDK0IsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS1YsT0FBN0M7QUFDQXJCLFVBQVEsQ0FBQytCLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtULEtBQTNDO0FBRUF0QixVQUFRLENBQUNnQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLVCxTQUExQztBQUNELENBTEQ7O0FBT0FYLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJULE9BQW5CLEdBQTZCLFVBQVNZLENBQVQsRUFBWTtBQUN2QyxVQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDRSxTQUFLLFlBQUw7QUFDRSxVQUFJLENBQUMsS0FBS3BCLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkQsTUFBdEIsRUFBNkI7QUFDM0IsYUFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUFqQixHQUEwQixJQUExQjtBQUNEOztBQUNEOztBQUNGLFNBQUssV0FBTDtBQUNFLFVBQUksQ0FBQyxLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLE1BQXJCLEVBQTRCO0FBQzFCLGFBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUIsSUFBekI7QUFDRDs7QUFDRDs7QUFDRjtBQUNFO0FBWko7QUFjRCxDQWZEOztBQWlCQUosUUFBUSxDQUFDa0IsU0FBVCxDQUFtQlIsS0FBbkIsR0FBMkIsVUFBU1csQ0FBVCxFQUFZO0FBQ3JDLFVBQVFBLENBQUMsQ0FBQ0MsSUFBVjtBQUNFLFNBQUssWUFBTDtBQUNFLFdBQUtwQixLQUFMLENBQVdHLEtBQVgsQ0FBaUJELE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0E7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsV0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFoQixHQUF5QixLQUF6QjtBQUNBOztBQUNGO0FBQ0U7QUFSSjtBQVVELENBWEQ7O0FBYUFKLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJQLFNBQW5CLEdBQStCLFVBQVNVLENBQVQsRUFBWTtBQUN6QyxNQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFNBQUtkLG9CQUFMO0FBQ0EsU0FBS2IsSUFBTCxDQUFVNEIsWUFBVjtBQUNBLFNBQUtWLE9BQUwsQ0FBYSxDQUFiLEVBQWdCVyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsd0JBQTlCO0FBQ0EsU0FBS1YsT0FBTCxDQUFhLENBQWIsRUFBZ0JTLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxTQUFLWCxPQUFMLENBQWEsQ0FBYixFQUFnQlMsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDBCQUE5QjtBQUNBLFNBQUtULFNBQUwsQ0FBZSxDQUFmLEVBQWtCUSxTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsbUJBQW5DO0FBQ0EsU0FBS1YsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxvQkFBaEM7QUFDQSxTQUFLUixRQUFMLENBQWMsQ0FBZCxFQUFpQk8sU0FBakIsQ0FBMkJFLE1BQTNCLENBQWtDLHlCQUFsQztBQUNBLFNBQUtULFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsMEJBQS9CO0FBQ0Q7QUFDRixDQVpEOztBQWNBekIsUUFBUSxDQUFDa0IsU0FBVCxDQUFtQk4sUUFBbkIsR0FBOEIsWUFBVztBQUN2QyxPQUFLTixxQkFBTDtBQUNBLE9BQUtYLElBQUwsQ0FBVWlCLFFBQVY7QUFDQSxPQUFLRyxPQUFMLENBQWEsQ0FBYixFQUFnQlMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLDBCQUFqQztBQUNBLE9BQUtYLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIseUJBQTlCO0FBQ0EsT0FBS1QsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxvQkFBbkM7QUFDQSxPQUFLVixTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQztBQUNBLE9BQUtSLFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkUsTUFBM0IsQ0FBa0MsMEJBQWxDO0FBQ0EsT0FBS1QsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQix5QkFBL0I7QUFDRCxDQVREOztBQVdlekIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxRkEsU0FBUzJCLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCO0FBQ3ZCLE9BQUszQixPQUFMLEdBQWUsQ0FBQyxFQUFoQjtBQUNBLE9BQUs0QixXQUFMLEdBQW1CLENBQW5CO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxJQUFJQyxLQUFKLEVBQWQ7QUFDQSxPQUFLRCxNQUFMLENBQVlFLEdBQVosR0FBa0Isd0dBQWxCO0FBQ0Q7O0FBRUROLE1BQU0sQ0FBQ1QsU0FBUCxDQUFpQmdCLFVBQWpCLEdBQThCLFVBQVNDLFNBQVQsRUFBbUI7QUFDL0MsVUFBUUEsU0FBUjtBQUNFLFNBQUssV0FBTDtBQUNFLFdBQUtsQyxPQUFMLElBQWdCLEtBQUs0QixXQUFyQjtBQUNBOztBQUVGLFNBQUssWUFBTDtBQUNFLFdBQUs1QixPQUFMLElBQWdCLEtBQUs0QixXQUFyQjtBQUNBO0FBUEo7QUFTRCxDQVZEOztBQVlBRixNQUFNLENBQUNULFNBQVAsQ0FBaUJrQixlQUFqQixHQUFtQyxZQUFVLENBQzNDO0FBQ0QsQ0FGRDs7QUFJQVQsTUFBTSxDQUFDVCxTQUFQLENBQWlCbUIsSUFBakIsR0FBd0IsVUFBUzdDLEdBQVQsRUFBYzhDLEtBQWQsRUFBcUJDLEtBQXJCLEVBQTJCO0FBQ2pEL0MsS0FBRyxDQUFDZ0QsU0FBSjtBQUNBaEQsS0FBRyxDQUFDaUQsU0FBSixDQUFjSCxLQUFLLEdBQUMsQ0FBcEIsRUFBdUJDLEtBQUssR0FBQyxDQUE3QjtBQUNBL0MsS0FBRyxDQUFDa0QsTUFBSixDQUFhLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQixHQUFqQixJQUF5QixLQUFLM0MsT0FBTCxHQUFlLEdBQXhDLENBQVg7QUFDQVQsS0FBRyxDQUFDaUQsU0FBSixDQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQWpELEtBQUcsQ0FBQ3FELFNBQUosQ0FBYyxLQUFLZCxNQUFuQixFQUEyQixDQUEzQixFQUE2QixDQUFDLEVBQTlCO0FBQ0QsQ0FORDs7QUFRQWUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsTUFBakIsQzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLFNBQVMvQixJQUFULENBQWNnQyxPQUFkLEVBQXVCO0FBQUE7O0FBQ3RCLE9BQUtvQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS3hELEdBQUwsR0FBV29DLE9BQVg7QUFDQSxPQUFLVSxLQUFMLEdBQWEsR0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBS1UsV0FBTCxHQUFtQixDQUFuQjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixNQUFsQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsSUFBSTFCLEtBQUosRUFBZDtBQUNBLE9BQUsyQixTQUFMLEdBQWlCLElBQUkzQixLQUFKLEVBQWpCO0FBQ0EsT0FBSzRCLFNBQUwsR0FBaUIsSUFBSTVCLEtBQUosRUFBakI7QUFDQSxPQUFLNkIsU0FBTCxHQUFpQixJQUFJN0IsS0FBSixFQUFqQjtBQUNBLE9BQUs4QixhQUFMLEdBQXFCLENBQXJCO0FBQ0EsT0FBS0gsU0FBTCxDQUFlMUIsR0FBZixHQUNDLDRGQUREO0FBRUEsT0FBSzJCLFNBQUwsQ0FBZTNCLEdBQWYsR0FDQyw0RkFERDtBQUVBLE9BQUs0QixTQUFMLENBQWU1QixHQUFmLEdBQ0MsNEZBREQ7QUFFQSxPQUFLOEIsUUFBTCxHQUFnQixDQUFFLEtBQUtKLFNBQVAsRUFBa0IsS0FBS0MsU0FBdkIsRUFBa0MsS0FBS0MsU0FBdkMsQ0FBaEI7QUFDQSxPQUFLSCxNQUFMLENBQVl6QixHQUFaLEdBQWtCLHdEQUFsQjtBQUNBLE9BQUsrQixhQUFMLEdBQXFCQyxXQUFXLENBQUMsWUFBTTtBQUN0QyxTQUFJLENBQUNILGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxRQUFJLEtBQUksQ0FBQ0EsYUFBTCxLQUF1QixDQUEzQixFQUE4QixLQUFJLENBQUNBLGFBQUwsR0FBcUIsQ0FBckI7QUFDOUIsR0FIK0IsRUFHN0IsR0FINkIsQ0FBaEM7QUFJQSxPQUFLSSxLQUFMLEdBQWE5RSxRQUFRLENBQUMwQixzQkFBVCxDQUFnQyxPQUFoQyxDQUFiO0FBQ0E7O0FBRURsQixJQUFJLENBQUNzQixTQUFMLENBQWVpRCxLQUFmLEdBQXVCLFVBQVNDLGFBQVQsRUFBd0I7QUFBQSxNQUN0Q0MsUUFEc0MsR0FDakIsSUFEaUIsQ0FDdENBLFFBRHNDO0FBQUEsTUFDNUJ0QyxNQUQ0QixHQUNqQixJQURpQixDQUM1QkEsTUFENEI7O0FBRTlDLE1BQUlzQyxRQUFRLENBQUNuRSxLQUFULENBQWVDLElBQWYsQ0FBb0JDLE1BQXhCLEVBQWdDO0FBQy9CMkIsVUFBTSxDQUFDRyxVQUFQLENBQWtCLFlBQWxCO0FBQ0EsR0FGRCxNQUVPLElBQUltQyxRQUFRLENBQUNuRSxLQUFULENBQWVHLEtBQWYsQ0FBcUJELE1BQXpCLEVBQWlDO0FBQ3ZDMkIsVUFBTSxDQUFDRyxVQUFQLENBQWtCLFdBQWxCO0FBQ0EsR0FONkMsQ0FROUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxPQUFLb0MsWUFBTCxDQUFrQkYsYUFBbEI7QUFFQSxPQUFLRyxTQUFMLENBQWVILGFBQWY7QUFDQSxDQWxCRDs7QUFvQkF4RSxJQUFJLENBQUNzQixTQUFMLENBQWVtQixJQUFmLEdBQXNCLFlBQVc7QUFBQSxNQUN4QkMsS0FEd0IsR0FDK0IsSUFEL0IsQ0FDeEJBLEtBRHdCO0FBQUEsTUFDakJDLEtBRGlCLEdBQytCLElBRC9CLENBQ2pCQSxLQURpQjtBQUFBLE1BQ1YvQyxHQURVLEdBQytCLElBRC9CLENBQ1ZBLEdBRFU7QUFBQSxNQUNMdUUsUUFESyxHQUMrQixJQUQvQixDQUNMQSxRQURLO0FBQUEsTUFDS0QsYUFETCxHQUMrQixJQUQvQixDQUNLQSxhQURMO0FBQUEsTUFDb0JKLE1BRHBCLEdBQytCLElBRC9CLENBQ29CQSxNQURwQjtBQUVoQ2xFLEtBQUcsQ0FBQ2dGLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbEMsS0FBcEIsRUFBMkJDLEtBQTNCLEVBRmdDLENBRUc7O0FBRW5DL0MsS0FBRyxDQUFDaUYsU0FBSixHQUFnQixNQUFoQjtBQUNBakYsS0FBRyxDQUFDa0YsV0FBSixHQUFrQixNQUFsQjtBQUNBbEYsS0FBRyxDQUFDbUYsSUFBSixHQU5nQyxDQVFoQzs7QUFDQSxPQUFLNUMsTUFBTCxDQUFZTSxJQUFaLENBQWlCN0MsR0FBakIsRUFBc0I4QyxLQUF0QixFQUE2QkMsS0FBN0I7QUFFQSxPQUFLL0MsR0FBTCxDQUFTb0YsT0FBVCxHQVhnQyxDQWFoQzs7QUFDQSxPQUFLdkIsS0FBTCxDQUFXd0IsT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJBLFFBQUksQ0FBQ3pDLElBQUwsQ0FBVTdDLEdBQVY7QUFDQSxHQUZELEVBZGdDLENBa0JoQzs7QUFDQSxPQUFLQSxHQUFMLENBQVNnRCxTQUFUO0FBQ0EsT0FBS2hELEdBQUwsQ0FBU3VGLEdBQVQsQ0FBYXpDLEtBQUssR0FBRyxDQUFyQixFQUF3QkMsS0FBSyxHQUFHLENBQWhDLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDSSxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyRCxFQUF3RCxLQUF4RDtBQUNBLE9BQUtwRCxHQUFMLENBQVN3RixNQUFULEdBckJnQyxDQXVCaEM7O0FBQ0EsT0FBS3hGLEdBQUwsQ0FBU3FELFNBQVQsQ0FDQ2tCLFFBQVEsQ0FBQ0QsYUFBRCxDQURULEVBRUN4QixLQUFLLEdBQUcsQ0FBUixHQUFZLElBRmIsRUFHQ0MsS0FBSyxHQUFHLENBQVIsR0FBWSxJQUhiLEVBSUNELEtBQUssR0FBRyxDQUpULEVBS0NDLEtBQUssR0FBRyxDQUxULEVBeEJnQyxDQWdDaEM7O0FBQ0EsT0FBSy9DLEdBQUwsQ0FBU3FELFNBQVQsQ0FBbUJhLE1BQW5CLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDcEIsS0FBakMsRUFBd0NDLEtBQXhDO0FBQ0EsQ0FsQ0Q7O0FBb0NBM0MsSUFBSSxDQUFDc0IsU0FBTCxDQUFlK0QsU0FBZixHQUEyQixZQUFXO0FBQ3JDLE9BQUtsRCxNQUFMLEdBQWMsSUFBSUosOENBQUosRUFBZDtBQUNBLFNBQU8sS0FBS0ksTUFBWjtBQUNBLENBSEQ7O0FBS0FuQyxJQUFJLENBQUNzQixTQUFMLENBQWVnRSxXQUFmLEdBQTZCLFlBQVc7QUFDdkMsT0FBS2IsUUFBTCxHQUFnQixJQUFJckUsaURBQUosQ0FBYSxJQUFiLENBQWhCO0FBQ0EsU0FBTyxLQUFLcUUsUUFBWjtBQUNBLENBSEQ7O0FBS0F6RSxJQUFJLENBQUNzQixTQUFMLENBQWVpRSxPQUFmLEdBQXlCLFVBQVNmLGFBQVQsRUFBd0I7QUFBQSxNQUN4Q25CLFdBRHdDLEdBQ1csSUFEWCxDQUN4Q0EsV0FEd0M7QUFBQSxNQUMzQkssWUFEMkIsR0FDVyxJQURYLENBQzNCQSxZQUQyQjtBQUFBLE1BQ2I4QixPQURhLEdBQ1csSUFEWCxDQUNiQSxPQURhO0FBQUEsTUFDSjVCLFVBREksR0FDVyxJQURYLENBQ0pBLFVBREksRUFFaEQ7O0FBQ0EsTUFBSVAsV0FBVyxHQUFHSyxZQUFsQixFQUFnQztBQUMvQixZQUFRRSxVQUFSO0FBQ0MsV0FBSyxNQUFMO0FBQ0MsYUFBSzRCLE9BQUwsR0FDQ0MsdURBQWEsQ0FBQzFDLElBQUksQ0FBQzJDLEtBQUwsQ0FBVzNDLElBQUksQ0FBQzRDLE1BQUwsS0FBZ0JGLHVEQUFhLENBQUNHLE1BQXpDLENBQUQsQ0FEZDtBQUVBOztBQUNELFdBQUssUUFBTDtBQUNDLGFBQUtKLE9BQUwsR0FDQ0sseURBQWUsQ0FBQzlDLElBQUksQ0FBQzJDLEtBQUwsQ0FBVzNDLElBQUksQ0FBQzRDLE1BQUwsS0FBZ0JFLHlEQUFlLENBQUNELE1BQTNDLENBQUQsQ0FEaEI7QUFFQTs7QUFDRCxXQUFLLE1BQUw7QUFDQyxhQUFLSixPQUFMLEdBQ0NNLHVEQUFhLENBQUMvQyxJQUFJLENBQUMyQyxLQUFMLENBQVczQyxJQUFJLENBQUM0QyxNQUFMLEtBQWdCRyx1REFBYSxDQUFDRixNQUF6QyxDQUFELENBRGQ7QUFFQTtBQVpGLEtBRCtCLENBZS9COzs7QUFDQSxRQUFJRyxPQUFPLEdBQUcsSUFBSUMsNkNBQUosQ0FBUyxLQUFLUixPQUFMLENBQWEsQ0FBYixDQUFULENBQWQ7QUFDQSxTQUFLL0IsS0FBTCxDQUFXd0MsSUFBWCxDQUFnQkYsT0FBaEI7QUFDQSxTQUFLMUMsV0FBTCxHQUFtQm1CLGFBQWEsR0FBRyxDQUFuQyxDQWxCK0IsQ0FtQi9COztBQUNBLFNBQUtkLFlBQUwsR0FBb0IsS0FBSyxJQUF6QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLSixZQUFMLEdBQW9CLENBQXBCO0FBQ0E7O0FBRUQsTUFBSUssVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQzFCLFNBQUtKLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxHQUZELE1BRU8sSUFBSUksVUFBVSxLQUFLLFFBQW5CLEVBQTZCO0FBQ25DLFNBQUtKLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxHQUZNLE1BRUEsSUFBSUksVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQUtKLGVBQUwsR0FBdUIsSUFBdkI7QUFDQTs7QUFFRCxNQUFJLEtBQUtELFlBQUwsR0FBb0IsS0FBS0MsZUFBTCxHQUF1QixJQUEvQyxFQUFxRDtBQUNwRCxTQUFLRyxXQUFMLElBQW9CLENBQXBCO0FBQ0EsU0FBS0osWUFBTCxHQUFvQixDQUFwQjs7QUFDQSxRQUFJd0MsUUFBTyxHQUFHLElBQUlDLDZDQUFKLENBQVNSLE9BQU8sQ0FBQyxLQUFLN0IsV0FBTixDQUFoQixDQUFkOztBQUNBLFNBQUtGLEtBQUwsQ0FBV3dDLElBQVgsQ0FBZ0JGLFFBQWhCO0FBQ0EsR0F6QytDLENBMkNoRDs7O0FBQ0EsT0FBSzFDLFdBQUwsSUFBb0JtQixhQUFwQjtBQUNBLE9BQUtqQixZQUFMLElBQXFCaUIsYUFBckI7QUFDQSxDQTlDRDs7QUFnREF4RSxJQUFJLENBQUNzQixTQUFMLENBQWU0RSxVQUFmLEdBQTRCLFlBQVc7QUFBQSxNQUM5QnpDLEtBRDhCLEdBQ3BCLElBRG9CLENBQzlCQSxLQUQ4QjtBQUV0QyxNQUFNMEMsY0FBYyxHQUFHLEVBQXZCLENBRnNDLENBR3RDOztBQUNBLE1BQUkxQyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEyQyxTQUFqQixFQUE0QjtBQUMzQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsVUFBSTVDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzZDLEtBQVQsQ0FBZUQsQ0FBZixNQUFzQixJQUExQixFQUFnQztBQUMvQixZQUFJRSxFQUFFLEdBQUc5QyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVM2QyxLQUFULENBQWVELENBQWYsRUFBa0JHLEdBQWxCLENBQXNCLENBQXRCLENBQVQ7QUFDQSxZQUFJQyxFQUFFLEdBQUdoRCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVM2QyxLQUFULENBQWVELENBQWYsRUFBa0JHLEdBQWxCLENBQXNCLENBQXRCLENBQVQ7QUFDQSxZQUFJRSxRQUFRLEdBQUczRCxJQUFJLENBQUM0RCxJQUFMLENBQVUsU0FBQyxNQUFNSixFQUFQLEVBQWMsQ0FBZCxhQUFtQixNQUFNRSxFQUF6QixFQUFnQyxDQUFoQyxDQUFWLENBQWYsQ0FIK0IsQ0FJL0I7O0FBQ0EsWUFBSUMsUUFBUSxHQUFHUCxjQUFmLEVBQStCO0FBQzlCLGVBQUsxQyxLQUFMLENBQVdtRCxLQUFYO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNELENBbEJEOztBQW9CQTVHLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZXFELFNBQWYsR0FBMkIsVUFBU0gsYUFBVCxFQUF3QjtBQUFBOztBQUNsRCxPQUFLZSxPQUFMLENBQWFmLGFBQWI7QUFDQSxNQUFJekUsSUFBSSxHQUFHLElBQVg7QUFGa0QsTUFHMUMwRCxLQUgwQyxHQUdoQyxJQUhnQyxDQUcxQ0EsS0FIMEMsRUFLbEQ7O0FBQ0EsT0FBS3lDLFVBQUw7QUFFQXpDLE9BQUssQ0FBQ3dCLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdkI7QUFDQSxRQUFJQSxJQUFJLENBQUMyQixJQUFMLENBQVUsTUFBSSxDQUFDMUUsTUFBZixFQUF1QnBDLElBQXZCLENBQUosRUFBa0MsTUFBSSxDQUFDaUIsUUFBTDtBQUNsQyxHQUhEO0FBSUEsQ0FaRCxDLENBY0E7OztBQUNBaEIsSUFBSSxDQUFDc0IsU0FBTCxDQUFlb0QsWUFBZixHQUE4QixVQUFTb0MsV0FBVCxFQUFzQjtBQUNuRCxPQUFLeEQsZ0JBQUwsSUFBeUJ3RCxXQUF6QjtBQUNBLE1BQUlDLFdBQVcsR0FBR2hFLElBQUksQ0FBQ2lFLEtBQUwsQ0FBVyxLQUFLMUQsZ0JBQUwsR0FBd0IsRUFBbkMsSUFBeUMsR0FBM0Q7QUFDQSxPQUFLZ0IsS0FBTCxDQUFXLENBQVgsRUFBYzJDLFNBQWQsR0FBMEJGLFdBQVcsQ0FBQ0csUUFBWixFQUExQjtBQUNBLENBSkQ7O0FBTUFsSCxJQUFJLENBQUNzQixTQUFMLENBQWVLLFlBQWYsR0FBOEIsWUFBVztBQUN4QyxPQUFLMEIsV0FBTCxHQUFtQixDQUFuQjtBQUNBLE9BQUtJLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0gsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxPQUFLRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsQ0FMRDs7QUFPQXBELElBQUksQ0FBQ3NCLFNBQUwsQ0FBZU4sUUFBZixHQUEwQixZQUFXO0FBQ3BDO0FBQ0EsT0FBS29DLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxDQUhEOztBQUtlcEQsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOU1BO0FBQUEsU0FBU0UsU0FBVCxDQUFvQjhCLE9BQXBCLEVBQTZCakMsSUFBN0IsRUFBbUM7QUFDakMsT0FBS0gsR0FBTCxHQUFXb0MsT0FBWDtBQUNBLE9BQUtqQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLb0gsU0FBTCxHQUFpQixFQUFqQjtBQUNBLE9BQUszQyxhQUFMLEdBQXFCLE9BQUssS0FBSzJDLFNBQS9CO0FBQ0EsT0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxPQUFLakYsTUFBTCxHQUFjLEtBQUtwQyxJQUFMLENBQVVzRixTQUFWLEVBQWQ7QUFDQSxPQUFLWixRQUFMLEdBQWdCLEtBQUsxRSxJQUFMLENBQVV1RixXQUFWLEVBQWhCO0FBQ0EsT0FBS2IsUUFBTCxDQUFjekQsUUFBZDtBQUNEOztBQUVEZCxTQUFTLENBQUNvQixTQUFWLENBQW9CbkIsTUFBcEIsR0FBNkIsWUFBVTtBQUFBLE1BQzlCcUUsYUFEOEIsR0FDSixJQURJLENBQzlCQSxhQUQ4QjtBQUFBLE1BQ2Y0QyxPQURlLEdBQ0osSUFESSxDQUNmQSxPQURlLEVBSXJDOztBQUNBLE1BQUlDLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUdILE9BQU8sR0FBR0QsT0FBeEIsQ0FOcUMsQ0FRckM7O0FBQ0EsTUFBSUksT0FBTyxJQUFJaEQsYUFBWCxJQUE0QixDQUFDLEtBQUt6RSxJQUFMLENBQVVxRCxVQUEzQyxFQUFzRDtBQUNwRCxTQUFLckQsSUFBTCxDQUFVd0UsS0FBVixDQUFnQkMsYUFBaEI7QUFDQSxTQUFLekUsSUFBTCxDQUFVMEMsSUFBVjtBQUNBLFNBQUsyRSxPQUFMLEdBQWVDLE9BQWY7QUFDRDs7QUFFREksUUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLdkgsTUFBTCxDQUFZUSxJQUFaLENBQWlCLElBQWpCLENBQTdCO0FBQ0QsQ0FoQkQ7O0FBa0JlVCx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU11RixhQUFhLEdBQUcsQ0FDM0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsQ0FEMkIsRUFRM0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsQ0FSMkIsQ0FBdEIsQyxDQWlCUDs7QUFDTyxJQUFNSSxlQUFlLEdBQUcsQ0FDN0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsQ0FENkIsRUFhN0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsQ0FiNkIsQ0FBeEIsQyxDQTRCUDs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsQ0FDM0IsQ0FDRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBREYsRUFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBRkYsRUFHRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSEYsRUFJRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBSkYsRUFLRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTEYsRUFNRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBTkYsRUFPRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUEYsRUFRRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBUkYsRUFTRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVEYsRUFVRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBVkYsRUFXRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWEYsRUFZRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBWkYsRUFhRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBYkYsQ0FEMkIsRUFnQjNCLENBQ0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQURGLEVBRUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUZGLEVBR0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUhGLEVBSUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUpGLEVBS0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUxGLEVBTUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQU5GLEVBT0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVBGLEVBUUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVJGLEVBU0UsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQVRGLEVBVUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVB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QUN6QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMxQixXQUFLQyxLQUFMLENBQVdELENBQVgsRUFBYzVELElBQWQsQ0FBbUI3QyxHQUFuQjtBQUNEO0FBQ0g7QUFDRCxDQU5EOztBQVFlb0csbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gNzY4O1xuY2FudmFzLmhlaWdodCA9IDc2ODtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbi8vIGluc3RhbnRpYXRlIGdhbWVcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuZ2FtZXN0YWdlLnRpY2tlcigpOyIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXlcIik7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgdGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoXCJjbGVhci1iYWNrZ3JvdW5kLWltYWdlXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gLTkwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDU7XG4gIHRoaXMucG9zaXRpb24gPSBbXTtcbiAgdGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5jdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG59XG5cbkN1cnNvci5wcm90b3R5cGUubW92ZUN1cnNvciA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcImNsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICBcbiAgICBjYXNlIFwiY2Nsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkN1cnNvci5wcm90b3R5cGUuY29sbGlzaW9uRGV0ZWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVE9ETyBzb21lIHNvcnQgb2YgaGl0Ym94IGxvZ2ljXG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCwgZGltX3gsIGRpbV95KXtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgudHJhbnNsYXRlKGRpbV94LzIsIGRpbV95LzIpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLC0zNSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy53YXZlSW50ZXJ2YWwgPSAwO1xuXHR0aGlzLnBhdHRlcm5TdGVwID0gMDtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0Ly8gaWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5ICogMTAwMCl7XG5cdC8vIFx0dGhpcy5kaWZmaWN1bHR5ID0gXCJtZWRpdW1cIjtcblx0Ly8gfVxuXHQvLyBpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMzkgKiAxMDAwKXtcblx0Ly8gXHR0aGlzLmRpZmZpY3VsdHkgPSBcImhhcmRcIjtcblx0Ly8gfVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSk7XG5cblx0dGhpcy5jdHgucmVzdG9yZSgpO1xuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZWxhcHNlZFRpbWUsIHdhdmVJbnRlcnZhbCwgcGF0dGVybiwgZGlmZmljdWx0eSB9ID0gdGhpcztcblx0Ly8gZXZlcnkgMTAgc2Vjb25kcyByYW5kb21seSBzZWxlY3QgbmV3IHBhdHRlcm5cblx0aWYgKGVsYXBzZWRUaW1lID4gd2F2ZUludGVydmFsKSB7XG5cdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0dGhpcy5wYXR0ZXJuID1cblx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0dGhpcy5wYXR0ZXJuID1cblx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHR0aGlzLnBhdHRlcm4gPVxuXHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vIGRlYnVnZ2VyXG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm5bMF0pO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLmVsYXBzZWRUaW1lID0gZnJhbWVJbnRlcnZhbCArIDE7XG5cdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0dGhpcy53YXZlSW50ZXJ2YWwgPSAxMCAqIDEwMDA7XG5cdFx0dGhpcy5wYXR0ZXJuU3RlcCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR9XG5cblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcdFxuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09IFwibWVkaXVtXCIpIHtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDE7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gXCJoYXJkXCIpIHtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdH1cblxuXHRpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDApIHtcblx0XHR0aGlzLnBhdHRlcm5TdGVwICs9IDE7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUocGF0dGVyblt0aGlzLnBhdHRlcm5TdGVwXSk7XG5cdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHR9XG5cblx0Ly8gaW5jcmVtZW50IGVsYXBzZWRUaW1lXG5cdHRoaXMuZWxhcHNlZFRpbWUgKz0gZnJhbWVJbnRlcnZhbDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coYGRpc3RhbmNlIGlzICR7ZGlzdGFuY2V9IGFuZCByZW1vdmVEaXN0YW5jZSBpcyA1MGApO1xuXHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdGxldCBnYW1lID0gdGhpcztcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRpZiAod2F2ZS5tb3ZlKHRoaXMuY3Vyc29yLCBnYW1lKSkgdGhpcy5nYW1lT3ZlcigpO1xuXHR9KTtcbn07XG5cbi8vIHRvcCByaWdodCB0aW1lclxuR2FtZS5wcm90b3R5cGUudGltZXJDb3VudGVyID0gZnVuY3Rpb24odGltZUVsYXBzZWQpIHtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRsZXQgcm91bmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0dGhpcy50aW1lclswXS5pbm5lckhUTUwgPSByb3VuZGVkVGltZS50b1N0cmluZygpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuc3RhcnROZXdHYW1lID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gb3B0aW9uIHRvIHBsYXkgYWdhaW4sIGNhbGxzIHN0YXJ0IG5ldyBnYW1lXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDY1O1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSBEYXRlLm5vdygpO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbIFxuICBbXG4gICAgWzEsMSwwLDAsMSwxLDAsMCxdLFxuICAgIFswLDAsMSwxLDAsMCwxLDFdLFxuICAgIFswLDEsMSwwLDAsMSwxLDBdLFxuICAgIFsxLDAsMSwwLDAsMCwxLDFdLFxuICAgIFsxLDEsMSwxLDAsMCwwLDBdXG4gIF0sXG4gIFtcbiAgICBbMSwxLDEsMCwwLDAsMCwxXSxcbiAgICBbMSwwLDAsMSwxLDAsMCwxXSxcbiAgICBbMCwwLDAsMCwxLDEsMSwxXSxcbiAgICBbMCwwLDEsMSwxLDEsMCwwXSxcbiAgICBbMSwxLDEsMSwwLDAsMCwwXVxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuICBbXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF0sXG4gICAgWzAsMCwwLDAsMCwwLDAsMF1cbiAgXSxcbiAgW1xuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdLFxuICAgIFswLDAsMCwwLDAsMCwwLDBdXG4gIF1cbl07XG5cblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcbiAgW1xuICAgIFsxLDEsMSwxLDEsMSwwLDFdLFxuICAgIFsxLDEsMSwxLDEsMSwxLDBdLFxuICAgIFswLDEsMSwxLDEsMSwxLDFdLFxuICAgIFsxLDAsMSwxLDEsMSwxLDFdLFxuICAgIFsxLDEsMCwxLDEsMSwxLDFdLFxuICAgIFsxLDEsMSwwLDEsMSwxLDFdLFxuICAgIFsxLDEsMSwxLDAsMSwxLDFdLFxuICAgIFsxLDEsMSwxLDEsMCwxLDFdLFxuICAgIFsxLDEsMSwxLDEsMSwwLDFdLFxuICAgIFsxLDEsMSwxLDEsMSwxLDBdLFxuICAgIFswLDEsMSwxLDEsMSwxLDFdLFxuICAgIFsxLDAsMSwxLDEsMSwxLDFdLFxuICAgIFsxLDEsMCwxLDEsMSwxLDFdXG4gIF0sXG4gIFtcbiAgICBbMSwxLDEsMSwxLDEsMSwwXSxcbiAgICBbMCwxLDEsMSwxLDEsMSwxXSxcbiAgICBbMSwwLDEsMSwxLDEsMSwxXSxcbiAgICBbMSwxLDAsMSwxLDEsMSwxXSxcbiAgICBbMSwxLDEsMCwxLDEsMSwxXSxcbiAgICBbMSwxLDEsMSwwLDEsMSwxXSxcbiAgICBbMSwxLDEsMSwxLDAsMSwxXSxcbiAgICBbMSwxLDEsMSwxLDEsMCwxXSxcbiAgICBbMSwxLDEsMSwxLDEsMSwwXSxcbiAgICBbMCwxLDEsMSwxLDEsMSwxXSxcbiAgICBbMSwwLDEsMSwxLDEsMSwxXSxcbiAgICBbMSwxLDAsMSwxLDEsMSwxXSxcbiAgICBbMSwxLDEsMCwxLDEsMSwxXSxcbiAgICBbMSwxLDEsMSwwLDEsMSwxXVxuICBdXG5dOyIsImZ1bmN0aW9uIFdhbGwob2N0YW50KSB7XG5cdHRoaXMub2N0YW50ID0gb2N0YW50O1xuXHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLnNwZWVkID0gNDtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0dGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xufVxuXG5XYWxsLnByb3RvdHlwZS5vY3RhbnRMb2dpYyA9IGZ1bmN0aW9uKG9jdGFudCkge1xuXHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gNTA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTUwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC01MDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSA1MDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oY3Vyc29yLCBnYW1lKSB7XG5cdC8vIFRPRE8gaGl0Ym94IGxvZ2ljIGlzIGFjdHVhbGx5IGNvZGVkIGhlcmUsIHJldHVybiB0cnVlIGlmIGdhbWVPdmVyXG5cdC8vIG1heSBuZWVkIHRvIHBhc3MgZG93biBkZWdyZWVzIGZyb20gY3Vyc29yXG5cblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cblx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0bGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcblx0bGV0IGR4ID0gMzg0IC0gcG9zeDtcblx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRpZiAoZHggPiAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHR0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cdGlmIChkeSA+IDApIHtcblx0XHR0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRsZXQgeCA9IHBvc1swXTtcblx0bGV0IHkgPSBwb3NbMV07XG5cblx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0LCB5ICsgdGhpcy55b2Zmc2V0KTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIDEwMCAvIDIsIDEwMCAvIDIsIDEwMCwgMTAwKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHgudHJhbnNsYXRlKC14IC0gdGhpcy54b2Zmc2V0LCAteSAtIHRoaXMueW9mZnNldCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5mdW5jdGlvbiBXYXZlKHBhdHRlcm4pIHtcbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuXHR0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLnN1YndhdmVUaW1lciA9IDA7XG4gIHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHR0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscygpO1xufVxuXG5XYXZlLnByb3RvdHlwZS5hZGRXYWxscyA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpIHtcbiAgbGV0IHdhbGxzID0gW107XG4gIGNvbnN0IHtwYXR0ZXJufSA9IHRoaXM7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRpZiAocGF0dGVybltpXSA9PT0gMSkge1xuXHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChpKTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGN1cnNvciwgZ2FtZSkge1xuXHQvLyBUT0RPIGl0ZXJhdGUgdGhydSBlYWNoIHdhbGwgYW5kIHNldCBuZXcgY29vcmRpbmF0ZXMsIG1vdmVtZW50IGFsb3dlZCBiYXNlZCBvbiBlbGFwc2VkIHRpbWVcblx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdC8vIGFjdHVhbCBsb2dpYyBpbiB3YWxscy5qc1xuXHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGN1cnNvciwgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=