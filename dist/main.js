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
    this.difficulty = 'medium';
  }

  if (this.totalTimeElapsed > 19.5 * 1000) {
    this.difficulty = 'hard';
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
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0); // resets transform to clear entire cavas

  ctx.clearRect(-256, -256, dim_x + 256, dim_y + 256); // clear canvas

  ctx.restore();
  this.rotation += this.rotationSpeed;
  this.totalRotation += this.rotation;
  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.rotation / 360));
  ctx.translate(-768 / 2, -768 / 2);
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
          this.subWaveInterval = 0.75;
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
}, false);
audio.play();
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
// 2 second spawn intervals 
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 1, 0]], [[1, 0, 1, 0, 0, 0, 1, 1], [1, 1, 1, 0, 1, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0]], [[0, 0, 1, 0, 1, 1, 0, 1], [1, 1, 0, 1, 0, 0, 1, 0]], [[1, 1, 1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 1, 0, 0, 1]], [[1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1]]]; // 1 second intervals 

var MEDIUM_PATTERNS = [[[1, 1, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1]], [[1, 1, 1, 1, 0, 1, 0, 0], [1, 1, 0, 0, 1, 0, 1, 1], [1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0, 0, 0]], [[1, 1, 0, 1, 1, 0, 1, 0], [0, 0, 1, 0, 1, 1, 1, 1], [1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 0, 1, 1, 1, 0]], [[1, 0, 0, 1, 1, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1, 0], [1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 0, 0]]]; // 0.5 second intervals 

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
  // hitbox logic if any of the walls touch cursor, set gameOver = true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJzdW5NYXAiLCJzdGF0aWNNYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2F2ZSIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsInJlc3RvcmUiLCJ0b3RhbFJvdGF0aW9uIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsImxlbmd0aCIsImNvbmNhdCIsIkVBU1lfUEFUVEVSTlMiLCJmbG9vciIsInJhbmRvbSIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJwYXR0ZXJuIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJ4MSIsInBvcyIsInkxIiwiZGlzdGFuY2UiLCJzcXJ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1ZGlvIiwiQXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFJQyxNQUFNLEdBQUdGLFFBQVEs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Q0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkYsRUFHRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEYsQ0FOMkIsRUFXM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FYMkIsRUFjM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FkMkIsRUFpQjNCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFGLEVBQ0UsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURG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QVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5ILENBRDRCLEVBUzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZILEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxF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QUFDMUIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY08sSUFBZCxDQUFtQjlFLE9BQW5CLEVBQTRCaEMsSUFBNUIsQ0FBSixFQUF1Q2dCLFFBQVEsR0FBRyxJQUFYO0FBQ3hDO0FBQ0Y7O0FBRUYsU0FBT0EsUUFBUDtBQUNBLENBWEQ7O0FBYUFrRixJQUFJLENBQUM1RSxTQUFMLENBQWVpQixJQUFmLEdBQXNCLFVBQVMxQyxHQUFULEVBQWM7QUFDbkMsT0FBSyxJQUFJMEcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN6QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMxQixXQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY2hFLElBQWQsQ0FBbUIxQyxHQUFuQjtBQUNEO0FBQ0g7QUFDRCxDQU5EOztBQVFlcUcsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBjYW52YXMud2lkdGggPSA3Njg7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuICAvLyBpbnN0YW50aWF0ZSBnYW1lXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBjb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG4gIGdhbWVzdGFnZS50aWNrZXIoKTtcbn0pXG5cbiIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXlcIik7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgdGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoXCJjbGVhci1iYWNrZ3JvdW5kLWltYWdlXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gMjcwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMucm90YXRpb24gPSAwO1xuXHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cblx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5sb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBjb250cm9scywgY3Vyc29yIH0gPSB0aGlzO1xuXHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2Nsb2Nrd2lzZScpO1xuXHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0fVxuXG5cdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiA5LjUgKiAxMDAwKSB7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ21lZGl1bSc7XG5cdH1cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKSB7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2hhcmQnO1xuXHR9XG5cblx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5zYXZlKCk7XG5cdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHQvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94KzI1NiwgZGltX3krMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdGN0eC5yZXN0b3JlKCk7XG5cblx0dGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG5cdHRoaXMudG90YWxSb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uO1xuXHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMucm90YXRpb24gLyAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSk7XG5cblx0dGhpcy5jdHgucmVzdG9yZSgpO1xuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0aWYgKFxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdCkge1xuXHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBhdCBzZXQgaW50ZXJ2YWxzICgycylcblx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm5MaXN0LnNoaWZ0KCk7XG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0fVxuXHQvLyBydW5zIHJlZ2FyZGxlc3Mgb2YgdGltZXJcblx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRsZXQgZ2FtZSA9IHRoaXM7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdC8vY3Vyc29yIGFuZ2xlIGFzIHRoZXRhXG5cdGxldCBkZWdyZWVzID0gdGhpcy5jdXJzb3IuZGVncmVlcztcblx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdHdoaWxlIChkZWdyZWVzIDwgMCkge1xuXHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHR9XG5cblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdH0pO1xufTtcblxuLy8gdG9wIHJpZ2h0IHRpbWVyXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0Ly8gdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZnVuY3Rpb24gR2FtZVN0YWdlIChjb250ZXh0LCBnYW1lKSB7XG4gIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5mcmFtZVJhdGUgPSA2MDtcbiAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMC90aGlzLmZyYW1lUmF0ZTtcbiAgdGhpcy5zZXRUaW1lID0gMDtcbiAgdGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG4gIHRoaXMuY29udHJvbHMgPSB0aGlzLmdhbWUuYWRkQ29udHJvbHMoKTtcbiAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5HYW1lU3RhZ2UucHJvdG90eXBlLnRpY2tlciA9IGZ1bmN0aW9uKHRpbWUpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSB0aW1lO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG4gICAgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdF0sXG5cdFtcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXVxuXHRdXG5dO1xuIiwiZnVuY3Rpb24gV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHQvLyB0aGlzLnNwZWVkID0gODtcbiAgLy8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA5O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjE7XG5cdH1cblxuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMjA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjQ3LjUsIDI5Mi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA3OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSkge1xuXHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcbiAgLy8gZGVidWdnZXJcblxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMub2N0YW50ID09PSA0KSB7XG5cdFx0aWYgKFxuXHRcdFx0KHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMCkgfHxcblx0XHRcdCh0aGV0YSA+IGhpdGJveDJbMF0gJiZcblx0XHRcdFx0dGhldGEgPCBoaXRib3gyWzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKFxuXHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA3XG5cdCkge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxNzBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdGlmIChkeCA+IDApIHtcblx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblx0aWYgKGR5ID4gMCkge1xuXHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdGxldCB4ID0gcG9zWzBdO1xuXHRsZXQgeSA9IHBvc1sxXTtcblx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3RvcjtcblxuXHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCB5ICsgdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKFxuXHRcdHRoaXMuc3ByaXRlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZVxuXHQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCAteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiXG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuZnVuY3Rpb24gV2F2ZShwYXR0ZXJuLCBkaWZmaWN1bHR5KSB7XG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cblx0dGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuICB0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcbiAgdGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMsIGdhbWUpIHtcblx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUoZGVncmVlcywgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=