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
    this.smallLogo[0].classList.remove("title-box-fade-out");
    this.smallLogo[0].classList.add("title-box-fade-in");
    this.gameInfo[0].classList.remove("start-game-info-fade-in");
    this.gameInfo[0].classList.add("start-game-info-fade-out");
  }
};

Controls.prototype.gameOver = function (highscore) {
  // if (!highscore){this.disablePlayerControls()}; 
  this.disablePlayerControls();
  this.game.gameOver();
  this.bigLogo[0].classList.remove("start-game-logo-fade-out");
  this.bigLogo[0].classList.add("start-game-logo-fade-in");
  this.smallLogo[0].classList.remove("title-box-fade-in");
  this.smallLogo[0].classList.add("title-box-fade-out");
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
  this.highScore = false;
  this.deadShip = false;
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

  if (this.game.deadShip) {// explosion loop logic
    // draw dead ship behind explosion (green ship)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGlnaHNjb3JlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJoaWdoU2NvcmUiLCJkZWFkU2hpcCIsInN1bk1hcCIsInN0YXRpY01hcCIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlSW5kZXgiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwibG9naWMiLCJmcmFtZUludGVydmFsIiwiY29udHJvbHMiLCJ0aW1lckNvdW50ZXIiLCJ3YXZlTG9naWMiLCJzYXZlIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwicmVzdG9yZSIsInRvdGFsUm90YXRpb24iLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImZvckVhY2giLCJ3YXZlIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJhZGRXYXZlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZVdhdmUiLCJyZW1vdmVEaXN0YW5jZSIsInVuZGVmaW5lZCIsImkiLCJ3YWxscyIsIngxIiwicG9zIiwieTEiLCJkaXN0YW5jZSIsInNxcnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXVkaW8iLCJBdWRpbyIsImN1cnJlbnRUaW1lIiwicGxheSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzY2FsZSIsInNwZWVkIiwiZGVzY2FsZUZhY3RvciIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImhpdGJveCIsImhpdGJveDIiLCJ0aGV0YSIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4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UixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEgsQ0FENEIsRUFNM0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkYsRUFHRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEYsQ0FOMkIsRUFXM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FYMkIsRUFjM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FkMkIsRUFpQjNCLENBQUUsQ0FBRSxDQUFGLEVBQUss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L0UsU0FBTCxDQUFlMkYsSUFBZixHQUFzQixVQUFTaEYsT0FBVCxFQUFrQmpDLElBQWxCLEVBQXdCO0FBQzdDO0FBQ0EsTUFBSWdCLFFBQVEsR0FBRyxLQUFmOztBQUVDLE9BQUssSUFBSTBGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY08sSUFBZCxDQUFtQmhGLE9BQW5CLEVBQTRCakMsSUFBNUIsQ0FBSixFQUF1Q2dCLFFBQVEsR0FBRyxJQUFYO0FBQ3hDO0FBQ0Y7O0FBRUYsU0FBT0EsUUFBUDtBQUNBLENBWEQ7O0FBYUFxRixJQUFJLENBQUMvRSxTQUFMLENBQWVrQixJQUFmLEdBQXNCLFVBQVMzQyxHQUFULEVBQWM7QUFDbkMsT0FBSyxJQUFJNkcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN6QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMxQixXQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY2xFLElBQWQsQ0FBbUIzQyxHQUFuQjtBQUNEO0FBQ0g7QUFDRCxDQU5EOztBQVFld0csbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBjYW52YXMud2lkdGggPSA3Njg7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuICAvLyBpbnN0YW50aWF0ZSBnYW1lXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBjb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG4gIGdhbWVzdGFnZS50aWNrZXIoKTtcbn0pXG5cbiIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXlcIik7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgdGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoXCJjbGVhci1iYWNrZ3JvdW5kLWltYWdlXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKGhpZ2hzY29yZSkge1xuICAvLyBpZiAoIWhpZ2hzY29yZSl7dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKX07IFxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gMjcwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMucm90YXRpb24gPSAwO1xuXHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cdHRoaXMuaGlnaFNjb3JlID0gZmFsc2U7XG5cdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblxuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLnN0YXRpY01hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnbWVkaXVtJztcblx0fVxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnaGFyZCc7XG5cdH1cblxuXHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcCB9ID0gdGhpcztcblx0Y3R4LnNhdmUoKTtcblx0Y3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcdC8vIHJlc2V0cyB0cmFuc2Zvcm0gdG8gY2xlYXIgZW50aXJlIGNhdmFzXG5cdGN0eC5jbGVhclJlY3QoLTI1NiwgLTI1NiwgZGltX3grMjU2LCBkaW1feSsyNTYpOyAvLyBjbGVhciBjYW52YXNcblx0Y3R4LnJlc3RvcmUoKTtcblxuXHR0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcblx0dGhpcy50b3RhbFJvdGF0aW9uICs9IHRoaXMucm90YXRpb247XG5cdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5yb3RhdGlvbiAvIDM2MCkpO1xuXHRjdHgudHJhbnNsYXRlKC03NjggLyAyLCAtNzY4IC8gMik7XG5cblx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0Y3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc2F2ZSgpO1xuXG5cdC8vIEN1cnNvclxuXHR0aGlzLmN1cnNvci5kcmF3KGN0eCwgZGltX3gsIGRpbV95KTtcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRpZiAoXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0KSB7XG5cdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR9XG5cdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdGxldCBnYW1lID0gdGhpcztcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0ZGVncmVlcyArPSAzNjA7XG5cdH1cblxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG5cdC8vIG9wdGlvbiB0byBwbGF5IGFnYWluLCBjYWxscyBzdGFydCBuZXcgZ2FtZVxuXHQvLyB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24odGltZSl7XG4gIGNvbnN0IHtmcmFtZUludGVydmFsLCBzZXRUaW1lfSA9IHRoaXM7XG5cbiAgLy8gdGltZS1saW1pdFxuICBsZXQgY3VyVGltZSA9IHRpbWU7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsICYmICF0aGlzLmdhbWUuaXNHYW1lT3Zlcil7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuICBpZiAodGhpcy5nYW1lLmRlYWRTaGlwKXtcbiAgICAvLyBleHBsb3Npb24gbG9vcCBsb2dpY1xuICAgIC8vIGRyYXcgZGVhZCBzaGlwIGJlaGluZCBleHBsb3Npb24gKGdyZWVuIHNoaXApXG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG4gICAgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdF0sXG5cdFtcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXVxuXHRdXG5dO1xuIiwiZnVuY3Rpb24gV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHQvLyB0aGlzLnNwZWVkID0gODtcbiAgLy8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA5O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjE7XG5cdH1cblxuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMjA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjQ3LjUsIDI5Mi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA3OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSkge1xuXHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcbiAgLy8gZGVidWdnZXJcblxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMub2N0YW50ID09PSA0KSB7XG5cdFx0aWYgKFxuXHRcdFx0KHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMCkgfHxcblx0XHRcdCh0aGV0YSA+IGhpdGJveDJbMF0gJiZcblx0XHRcdFx0dGhldGEgPCBoaXRib3gyWzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKFxuXHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA3XG5cdCkge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxNzBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdGlmIChkeCA+IDApIHtcblx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblx0aWYgKGR5ID4gMCkge1xuXHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdGxldCB4ID0gcG9zWzBdO1xuXHRsZXQgeSA9IHBvc1sxXTtcblx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3RvcjtcblxuXHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCB5ICsgdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKFxuXHRcdHRoaXMuc3ByaXRlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZVxuXHQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCAteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiXG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuZnVuY3Rpb24gV2F2ZShwYXR0ZXJuLCBkaWZmaWN1bHR5KSB7XG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cblx0dGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuICB0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcbiAgdGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMsIGdhbWUpIHtcblx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUoZGVncmVlcywgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=