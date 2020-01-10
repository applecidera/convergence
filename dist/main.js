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
  this.cursorSpeed = 5;
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
  this.controls.state.right.active = false; // this.controls.startGame();

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
var EASY_PATTERNS = [[[1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1], [0, 1, 1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0]], [[1, 1, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 0, 0, 1]], [[1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1]]]; // 1 second intervals (10 seconds)

var MEDIUM_PATTERNS = [[[1, 1, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 0, 0]], [[1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 1]], [[1, 1, 0, 1, 1, 0, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0]]]; // 0.5 second intervals (10 seconds)

var HARD_PATTERNS = [[[1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 0, 0, 0, 0, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1]] // [
// 	[ 1, 1, 0, 1, 1, 1, 1, 1 ],
// 	[ 1, 1, 1, 0, 1, 1, 1, 1 ],
// 	[ 1, 1, 1, 1, 0, 1, 1, 1 ],
// 	[ 1, 1, 1, 1, 1, 0, 1, 1 ],
// 	[ 1, 1, 1, 1, 1, 1, 0, 1 ],
// 	[ 1, 1, 1, 1, 1, 1, 1, 0 ],
// 	[ 0, 1, 1, 1, 1, 1, 1, 1 ],
// 	[ 1, 0, 1, 1, 1, 1, 1, 1 ],
// 	[ 1, 1, 0, 1, 1, 1, 1, 1 ]
// ]
];

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

  this.difficulty;
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
  var distance = Math.sqrt(Math.pow(384 - posx, 2) + Math.pow(384 - posy, 2));

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
  this.walls = this.addWalls();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJzdGF0ZSIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInN0YXJ0R2FtZSIsImdhbWVPdmVyIiwib3ZlcmxheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJiaWdMb2dvIiwic21hbGxMb2dvIiwiZ2FtZUluZm8iLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJzdW5NYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwicmVzdG9yZSIsImZvckVhY2giLCJ3YXZlIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJhZGRXYXZlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZVdhdmUiLCJyZW1vdmVEaXN0YW5jZSIsInVuZGVmaW5lZCIsImkiLCJ3YWxscyIsIngxIiwicG9zIiwieTEiLCJkaXN0YW5jZSIsInNxcnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXVkaW8iLCJBdWRpbyIsImN1cnJlbnRUaW1lIiwicGxheSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzY2FsZSIsInNwZWVkIiwiZGVzY2FsZUZhY3RvciIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImhpdGJveCIsImhpdGJveDIiLCJ0aGV0YSIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxJ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QUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBRDhCLEVBTzlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBUDhCLEVBYTlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixD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Q0FORDs7QUFRZWtHLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbkRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbmNhbnZhcy53aWR0aCA9IDc2ODtcbmNhbnZhcy5oZWlnaHQgPSA3Njg7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDI3MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXG5cdHRoaXMuY3R4ID0gY29udGV4dDtcblx0dGhpcy5kaW1feCA9IDc2ODtcblx0dGhpcy5kaW1feSA9IDc2ODtcblxuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5JztcblxuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApe1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IFwibWVkaXVtXCI7XG5cdH1cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKXtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSBcImhhcmRcIjtcblx0fVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSk7XG5cblx0dGhpcy5jdHgucmVzdG9yZSgpO1xuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0aWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8IHRoaXMudG90YWxUaW1lRWxhcHNlZCA9PT0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuLCB0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0XG5cdH1cblx0Ly8gcnVucyByZWdhcmRsZXNzIG9mIHRpbWVyXG5cdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5yZW1vdmVXYXZlID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0bGV0IGdhbWUgPSB0aGlzO1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHR0aGlzLnJlbW92ZVdhdmUoKTtcblxuXHQvL2N1cnNvciBhbmdsZSBhcyB0aGV0YVxuXHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdGRlZ3JlZXMgPSBkZWdyZWVzICUgMzYwO1xuXHR3aGlsZSAoZGVncmVlcyA8IDApe1xuXHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHR9XG5cblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcdFxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHRcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0Ly8gdGhpcy5jb250cm9scy5zdGFydEdhbWUoKTtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0Ly8gdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZnVuY3Rpb24gR2FtZVN0YWdlIChjb250ZXh0LCBnYW1lKSB7XG4gIHRoaXMuY3R4ID0gY29udGV4dDtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5mcmFtZVJhdGUgPSA2MDtcbiAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMC90aGlzLmZyYW1lUmF0ZTtcbiAgdGhpcy5zZXRUaW1lID0gMDtcbiAgdGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG4gIHRoaXMuY29udHJvbHMgPSB0aGlzLmdhbWUuYWRkQ29udHJvbHMoKTtcbiAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5HYW1lU3RhZ2UucHJvdG90eXBlLnRpY2tlciA9IGZ1bmN0aW9uKHRpbWUpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSB0aW1lO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuLy8gYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAgXVxuXHRdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcbiAgICBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0Ly8gW1xuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHQvLyBcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdXG5cdC8vIF1cbl07XG4iLCJmdW5jdGlvbiBXYWxsKG9jdGFudCwgZGlmZmljdWx0eSkge1xuXHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zY2FsZSA9IDQ7XG5cdC8vIHRoaXMuc3BlZWQgPSA4O1xuICAvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuICB0aGlzLmRpZmZpY3VsdHk7XG5cdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHR0aGlzLnNwZWVkID0gODtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0dGhpcy5zcGVlZCA9IDk7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wOTtcblx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHR0aGlzLnNwZWVkID0gMTA7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4xO1xuXHR9XG5cblx0dGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xufVxuXG5XYWxsLnByb3RvdHlwZS5vY3RhbnRMb2dpYyA9IGZ1bmN0aW9uKG9jdGFudCkge1xuXHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjAyLjUsIDI0Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI0Ny41LCAyOTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0zMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24odGhldGEpIHtcblx0Y29uc3QgeyBoaXRib3gsIGhpdGJveDIgfSA9IHRoaXM7XG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXHRsZXQgcG9zeCA9IHRoaXMucG9zWzBdO1xuXHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHBvc3gpICoqIDIgKyAoMzg0IC0gcG9zeSkgKiogMik7XG5cblx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmICh0aGlzLm9jdGFudCA9PT0gNCkge1xuXHRcdGlmIChcblx0XHRcdCh0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApIHx8XG5cdFx0XHQodGhldGEgPiBoaXRib3gyWzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94MlsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChcblx0XHR0aGlzLm9jdGFudCA9PT0gMSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSAzIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gN1xuXHQpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDEyMCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTcwXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGR4ID0gMzg0IC0gcG9zeDtcblx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRpZiAoZHggPiAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHR0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cdGlmIChkeSA+IDApIHtcblx0XHR0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRsZXQgeCA9IHBvc1swXTtcblx0bGV0IHkgPSBwb3NbMV07XG5cdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cblx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgeSArIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LmRyYXdJbWFnZShcblx0XHR0aGlzLnNwcml0ZSxcblx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHQxMDAgKiB0aGlzLnNjYWxlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0KTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHgudHJhbnNsYXRlKC14IC0gdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgLXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiIsIlxuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxscyc7XG5cbmZ1bmN0aW9uIFdhdmUocGF0dGVybiwgZGlmZmljdWx0eSkge1xuICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuXG5cdHRoaXMuZW5kID0gZmFsc2U7XG4gIHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcbiAgdGhpcy5jdXJyZW50U3Vid2F2ZSA9IDA7XG4gIHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKCk7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMsIGdhbWUpIHtcblx0Ly8gVE9ETyBpdGVyYXRlIHRocnUgZWFjaCB3YWxsIGFuZCBzZXQgbmV3IGNvb3JkaW5hdGVzLCBtb3ZlbWVudCBhbG93ZWQgYmFzZWQgb24gZWxhcHNlZCB0aW1lXG5cdC8vIGhpdGJveCBsb2dpYyBpZiBhbnkgb2YgdGhlIHdhbGxzIHRvdWNoIGN1cnNvciwgc2V0IGdhbWVPdmVyID0gdHJ1ZVxuXHQvLyBhY3R1YWwgbG9naWMgaW4gd2FsbHMuanNcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMud2FsbHNbaV0ubW92ZShkZWdyZWVzLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==