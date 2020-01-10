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



document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('stage');
  canvas.width = 768;
  canvas.height = 768;
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'destination-over'; // instantiate game

  var game = new _js_game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  var gamestage = new _js_gamestage__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, game);
  gamestage.ticker();
});

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
  this.degrees = 270;
  this.cursorSpeed = 10;
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



 // constructor

function Game(context) {
  var _this = this;

  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.isGameOver = true;
  this.totalTimeElapsed = 0;
  this.subwaveTimer = 0;
  this.subWaveInterval = 2;
  this.waves = [];
  this.patternList = [];
  this.difficulty = 'easy';
  this.rotation = 0;
  this.rotationSpeed = 0.1;
  this.sunMap = new Image();
  this.staticMap = new Image();
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

  if (this.totalTimeElapsed > 9.5 * 1000) {
    this.difficulty = "medium";
  }

  if (this.totalTimeElapsed > 19.5 * 1000) {
    this.difficulty = "hard";
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
      sunMap = this.sunMap,
      staticMap = this.staticMap;
  this.rotation += this.rotationSpeed;
  this.totalRotation += this.rotation;
  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.rotation / 360));
  ctx.translate(-768 / 2, -768 / 2);
  ctx.clearRect(-2000, -2000, dim_x + 2000, dim_y + 2000); // clear canvas

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
  var difficulty = this.difficulty; // launch wave every x seconds

  if (this.subwaveTimer > this.subWaveInterval * 1000 || this.totalTimeElapsed === frameInterval) {
    // if (this.subwaveTimer > this.subWaveInterval * 1000 ) {
    // if patternList is empty, add more patterns to patternList
    if (this.patternList.length === 0) {
      switch (difficulty) {
        case 'easy':
          this.patternList = this.patternList.concat(_patterns__WEBPACK_IMPORTED_MODULE_3__["EASY_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["EASY_PATTERNS"].length)]);
          this.subWaveInterval = 1;
          break;

        case 'medium':
          this.patternList = this.patternList.concat(_patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"].length)]);
          this.subWaveInterval = .75;
          break;

        case 'hard':
          this.patternList = this.patternList.concat(_patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"].length)]);
          this.subWaveInterval = 0.5;
          break;
      }
    } // this stuff runs at set intervals (2s)


    this.pattern = this.patternList.shift();
    var newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](this.pattern, this.difficulty);
    this.waves.push(newWave);
    this.subwaveTimer = 0;
  } // runs regardless of timer


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
        var distance = Math.sqrt(Math.pow(384 - x1, 2) + Math.pow(384 - y1, 2));

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

  this.removeWave(); //cursor angle as theta

  var degrees = this.cursor.degrees;
  degrees = degrees % 360;

  while (degrees < 0) {
    degrees += 360;
  }

  waves.forEach(function (wave) {
    // if any return true, call this.gameOver()	
    if (wave.move(degrees, game)) _this2.controls.gameOver();
  });
}; // top right timer


Game.prototype.timerCounter = function (timeElapsed) {
  this.totalTimeElapsed += timeElapsed;
  var roundedTime = Math.round(this.totalTimeElapsed / 10) / 100;
  this.timer[0].innerHTML = roundedTime.toString();
};

Game.prototype.startNewGame = function () {
  this.totalTimeElapsed = 0;
  this.subwaveTimer = 0;
  this.subWaveInterval = 2;
  this.waves = [];
  this.patternList = [];
  this.difficulty = 'easy';
  this.cursor.degrees = 270;
  this.controls.state.left.active = false;
  this.controls.state.right.active = false;
  this.rotation = 0;
  this.rotationSpeed = 0.1;
  this.isGameOver = false;
};

Game.prototype.gameOver = function () {
  // option to play again, calls start new game
  // this.controls.gameOver();
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");


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

GameStage.prototype.ticker = function (time) {
  var frameInterval = this.frameInterval,
      setTime = this.setTime; // time-limit

  var curTime = time;
  var timeDif = curTime - setTime; // frame limiter

  if (timeDif >= frameInterval && !this.game.isGameOver) {
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
};

var audio = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/Megalovania.mp3');
audio.addEventListener('ended', function () {
  audio.currentTime = 0;
  audio.play();
}, false); // audio.play();

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
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 1, 0]], [[1, 0, 1, 0, 0, 0, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0]], [[0, 0, 1, 0, 1, 1, 0, 1], [1, 1, 0, 1, 0, 0, 1, 0]], [[1, 1, 1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 1, 0, 0, 1]], [[1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1]]]; // 1 second intervals (10 seconds)

var MEDIUM_PATTERNS = [[[1, 1, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 0, 1, 0, 0], [1, 1, 0, 0, 1, 0, 1, 1], [1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0, 0, 0]], [[1, 1, 0, 1, 1, 0, 1, 0], [0, 0, 1, 0, 1, 1, 1, 1], [1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 0, 1, 1, 1, 0]], [[1, 0, 0, 1, 1, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1, 0], [1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 0, 0]]]; // 0.5 second intervals (10 seconds)

var HARD_PATTERNS = [[[1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 0, 0, 0, 0, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1]], [[0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 1]]];

/***/ }),

/***/ "./src/js/walls.js":
/*!*************************!*\
  !*** ./src/js/walls.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Wall(octant, difficulty) {
  this.octant = octant;
  this.sprite = new Image();
  this.scale = 4; // this.speed = 8;
  // this.descaleFactor = 0.08;

  this.difficulty = difficulty;
  this.sprite.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/thruster-2.png';

  if (difficulty === 'easy') {
    this.speed = 8;
    this.descaleFactor = 0.08;
  } else if (difficulty === 'medium') {
    this.speed = 9;
    this.descaleFactor = 0.09;
  } else if (difficulty === 'hard') {
    this.speed = 10;
    this.descaleFactor = 0.1;
  }

  this.octantLogic(octant);
}

Wall.prototype.octantLogic = function (octant) {
  switch (octant) {
    case 0:
      this.pos = [0, 384];
      this.degreeRotation = -90;
      this.xoffset = -100;
      this.yoffset = 100;
      this.hitbox = [157.5, 202.5];
      break;

    case 1:
      this.pos = [0, 0];
      this.degreeRotation = -45;
      this.xoffset = -120;
      this.yoffset = 30;
      this.hitbox = [202.5, 247.5];
      break;

    case 2:
      this.pos = [384, 0];
      this.degreeRotation = 0;
      this.xoffset = -100;
      this.yoffset = -100;
      this.hitbox = [247.5, 292.5];
      break;

    case 3:
      this.pos = [768, 0];
      this.degreeRotation = 45;
      this.xoffset = -30;
      this.yoffset = -120;
      this.hitbox = [297.5, 336.5];
      break;

    case 4:
      this.pos = [768, 384];
      this.degreeRotation = 90;
      this.xoffset = 100;
      this.yoffset = -100;
      this.hitbox = [336.5, 360];
      this.hitbox2 = [0, 22.5];
      break;

    case 5:
      this.pos = [768, 768];
      this.degreeRotation = 135;
      this.xoffset = 120;
      this.yoffset = -30;
      this.hitbox = [22.5, 67.5];
      break;

    case 6:
      this.pos = [384, 768];
      this.degreeRotation = 180;
      this.xoffset = 100;
      this.yoffset = 100;
      this.hitbox = [67.5, 112.5];
      break;

    case 7:
      this.pos = [0, 768];
      this.degreeRotation = 225;
      this.xoffset = 30;
      this.yoffset = 120;
      this.hitbox = [112.5, 157.5];
      break;
  }
};

Wall.prototype.move = function (theta) {
  var hitbox = this.hitbox,
      hitbox2 = this.hitbox2;
  var gameOver = false;
  var posx = this.pos[0];
  var posy = this.pos[1];
  var distance = Math.sqrt(Math.pow(384 - posx, 2) + Math.pow(384 - posy, 2)); // debugger

  if (this.octant === 0 || this.octant === 2 || this.octant === 6) {
    if (theta > hitbox[0] && theta < hitbox[1] && distance >= 70 && distance <= 120) {
      gameOver = true;
    }
  }

  if (this.octant === 4) {
    if (theta > hitbox[0] && theta < hitbox[1] && distance >= 70 && distance <= 120 || theta > hitbox2[0] && theta < hitbox2[1] && distance >= 70 && distance <= 120) {
      gameOver = true;
    }
  }

  if (this.octant === 1 || this.octant === 3 || this.octant === 5 || this.octant === 7) {
    if (theta > hitbox[0] && theta < hitbox[1] && distance >= 120 && distance <= 170) {
      gameOver = true;
    }
  }

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
  if (this.scale > 1 + this.descaleFactor) this.scale -= this.descaleFactor;
  ctx.translate(x + this.xoffset * this.scale, y + this.yoffset * this.scale);
  ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
  ctx.drawImage(this.sprite, 100 * this.scale / 2, 100 * this.scale / 2, 100 * this.scale, 100 * this.scale);
  ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
  ctx.translate(-x - this.xoffset * this.scale, -y - this.yoffset * this.scale);
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


function Wave(pattern, difficulty) {
  this.pattern = pattern;
  this.end = false;
  this.subwaveTimer = 0;
  this.currentSubwave = 0;
  this.walls = this.addWalls(difficulty);
  this.difficulty = difficulty;
}

Wave.prototype.addWalls = function (difficulty) {
  var walls = [];
  var pattern = this.pattern;

  for (var octant = 0; octant < 8; octant++) {
    if (pattern[octant] === 1) {
      var newWall = new _walls__WEBPACK_IMPORTED_MODULE_0___default.a(octant, difficulty);
      walls.push(newWall);
    } else {
      walls.push(null);
    }
  }

  return walls;
};

Wave.prototype.move = function (degrees, game) {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  for (var i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      if (this.walls[i].move(degrees, game)) gameOver = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJzdW5NYXAiLCJzdGF0aWNNYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwidG90YWxSb3RhdGlvbiIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsImxlbmd0aCIsImNvbmNhdCIsIkVBU1lfUEFUVEVSTlMiLCJmbG9vciIsInJhbmRvbSIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJwYXR0ZXJuIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJ4MSIsInBvcyIsInkxIiwiZGlzdGFuY2UiLCJzcXJ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1ZGlvIiwiQXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFJQyxNQUFNLEdBQUdGLFFB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QUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQWI4QixFQW1CN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FuQjZCLENBQXhCLEMsQ0EyQlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzVCLENBQ0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURILEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5ILENBRDRCLEVBUzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZILEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUcsQ0FBRSxDQUFGLEVB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QTRCO0FBQzFCLFVBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNPLElBQWQsQ0FBbUI5RSxPQUFuQixFQUE0QmhDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN4QztBQUNGOztBQUVGLFNBQU9BLFFBQVA7QUFDQSxDQWJEOztBQWVBa0YsSUFBSSxDQUFDNUUsU0FBTCxDQUFla0IsSUFBZixHQUFzQixVQUFTM0MsR0FBVCxFQUFjO0FBQ25DLE9BQUssSUFBSTBHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDekIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWMvRCxJQUFkLENBQW1CM0MsR0FBbkI7QUFDRDtBQUNIO0FBQ0QsQ0FORDs7QUFRZXFHLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbkRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDI3MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSAxMDtcbiAgdGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5jdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG59XG5cbkN1cnNvci5wcm90b3R5cGUubW92ZUN1cnNvciA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcImNsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICBcbiAgICBjYXNlIFwiY2Nsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkN1cnNvci5wcm90b3R5cGUuY29sbGlzaW9uRGV0ZWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVE9ETyBzb21lIHNvcnQgb2YgaGl0Ym94IGxvZ2ljXG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCwgZGltX3gsIGRpbV95KXtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgudHJhbnNsYXRlKGRpbV94LzIsIGRpbV95LzIpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLC0zNSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblxuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdFxuXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXG5cdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc3RhdGljTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdHRoaXMud2FycEdhdGUxLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG5cdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdHRoaXMud2FycEdhdGUgPSBbIHRoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTMgXTtcblx0dGhpcy5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5cdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHR0aGlzLndhcnBHYXRlSW5kZXggKz0gMTtcblx0XHRpZiAodGhpcy53YXJwR2F0ZUluZGV4ID09PSAzKSB0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR9LCA1MDApO1xuXHR0aGlzLnRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZXInKTtcbn1cblxuR2FtZS5wcm90b3R5cGUubG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdH1cblxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gOS41ICogMTAwMCl7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gXCJtZWRpdW1cIjtcblx0fVxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApe1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IFwiaGFyZFwiO1xuXHR9XG5cblx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAsIHN0YXRpY01hcCB9ID0gdGhpcztcblx0XG5cdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHR0aGlzLnRvdGFsUm90YXRpb24gKz0gdGhpcy5yb3RhdGlvbjtcblx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjgvMik7XG5cdGN0eC5yb3RhdGUoMipNYXRoLlBJIC8gMzYwICogKHRoaXMucm90YXRpb24gLyAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OC8yKTtcblxuXHRjdHguY2xlYXJSZWN0KC0yMDAwLCAtMjAwMCwgZGltX3grMjAwMCwgZGltX3krMjAwMCk7IC8vIGNsZWFyIGNhbnZhc1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSk7XG5cblx0dGhpcy5jdHgucmVzdG9yZSgpO1xuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0aWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8IHRoaXMudG90YWxUaW1lRWxhcHNlZCA9PT0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuLCB0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0XG5cdH1cblx0Ly8gcnVucyByZWdhcmRsZXNzIG9mIHRpbWVyXG5cdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5yZW1vdmVXYXZlID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0bGV0IGdhbWUgPSB0aGlzO1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHR0aGlzLnJlbW92ZVdhdmUoKTtcblxuXHQvL2N1cnNvciBhbmdsZSBhcyB0aGV0YVxuXHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdGRlZ3JlZXMgPSBkZWdyZWVzICUgMzYwO1xuXHR3aGlsZSAoZGVncmVlcyA8IDApe1xuXHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHR9XG5cblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcdFxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHRcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0Ly8gdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZnVuY3Rpb24gR2FtZVN0YWdlIChjb250ZXh0LCBnYW1lKSB7XG4gIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5mcmFtZVJhdGUgPSA2MDtcbiAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMC90aGlzLmZyYW1lUmF0ZTtcbiAgdGhpcy5zZXRUaW1lID0gMDtcbiAgdGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG4gIHRoaXMuY29udHJvbHMgPSB0aGlzLmdhbWUuYWRkQ29udHJvbHMoKTtcbiAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5HYW1lU3RhZ2UucHJvdG90eXBlLnRpY2tlciA9IGZ1bmN0aW9uKHRpbWUpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSB0aW1lO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuLy8gYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyAoMTAgc2Vjb25kcylcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyAoMTAgc2Vjb25kcylcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG4gICAgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdF0sXG5cdFtcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXVxuXHRdXG5dO1xuIiwiZnVuY3Rpb24gV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHQvLyB0aGlzLnNwZWVkID0gODtcbiAgLy8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA5O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjE7XG5cdH1cblxuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMjA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjQ3LjUsIDI5Mi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA3OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSkge1xuXHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcbiAgLy8gZGVidWdnZXJcblxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMub2N0YW50ID09PSA0KSB7XG5cdFx0aWYgKFxuXHRcdFx0KHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMCkgfHxcblx0XHRcdCh0aGV0YSA+IGhpdGJveDJbMF0gJiZcblx0XHRcdFx0dGhldGEgPCBoaXRib3gyWzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKFxuXHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA3XG5cdCkge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxNzBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdGlmIChkeCA+IDApIHtcblx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblx0aWYgKGR5ID4gMCkge1xuXHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdGxldCB4ID0gcG9zWzBdO1xuXHRsZXQgeSA9IHBvc1sxXTtcblx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3RvcjtcblxuXHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCB5ICsgdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKFxuXHRcdHRoaXMuc3ByaXRlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZVxuXHQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCAteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiXG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuZnVuY3Rpb24gV2F2ZShwYXR0ZXJuLCBkaWZmaWN1bHR5KSB7XG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cblx0dGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuICB0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcbiAgdGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMsIGdhbWUpIHtcblx0Ly8gVE9ETyBpdGVyYXRlIHRocnUgZWFjaCB3YWxsIGFuZCBzZXQgbmV3IGNvb3JkaW5hdGVzLCBtb3ZlbWVudCBhbG93ZWQgYmFzZWQgb24gZWxhcHNlZCB0aW1lXG5cdC8vIGhpdGJveCBsb2dpYyBpZiBhbnkgb2YgdGhlIHdhbGxzIHRvdWNoIGN1cnNvciwgc2V0IGdhbWVPdmVyID0gdHJ1ZVxuXHQvLyBhY3R1YWwgbG9naWMgaW4gd2FsbHMuanNcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMud2FsbHNbaV0ubW92ZShkZWdyZWVzLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==