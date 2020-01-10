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
  this.highScoreList = document.getElementsByClassName('high-score-box');
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
    this.highScoreList[0].classList.add("hidden");
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
  this.highScoreList[0].classList.remove("hidden");
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
  this.deadCursor = new Image();
  this.explosion = new Image();
  this.explosionFrame = 0;
  this.cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
  this.deadCursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_green_small_2.png';
  this.explosion.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/explosion_spritesheet.png';
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

Cursor.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.cursor, 0, -35);
  ctx.restore();
};

Cursor.prototype.explosionAnimation = function (ctx) {
  if (this.explosionFrame <= 70) {
    var x1 = EXPLOSION_POSITION[this.explosionFrame][0];
    var y1 = EXPLOSION_POSITION[this.explosionFrame][1];
    var x2 = EXPLOSION_POSITION[this.explosionFrame][2];
    var y2 = EXPLOSION_POSITION[this.explosionFrame][3];
    ctx.save();
    ctx.translate(768 / 2, 768 / 2);
    ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
    ctx.translate(105, 0);
    ctx.drawImage(this.explosion, x1, y1, x2, y2, -50, -75, 150, 150);
    ctx.restore();
    this.explosionFrame++;
  }

  ctx.save();
  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.deadCursor, 0, -35);
  ctx.restore();
};

var EXPLOSION_POSITION = [[0, 0, 100, 100], [100, 0, 100, 100], [200, 0, 100, 100], [300, 0, 100, 100], [400, 0, 100, 100], [500, 0, 100, 100], [600, 0, 100, 100], [700, 0, 100, 100], [800, 0, 100, 100], [900, 0, 100, 100], [0, 100, 100, 100], [100, 100, 100, 100], [200, 100, 100, 100], [300, 100, 100, 100], [400, 100, 100, 100], [500, 100, 100, 100], [600, 100, 100, 100], [700, 100, 100, 100], [800, 100, 100, 100], [900, 100, 100, 100], [0, 200, 100, 100], [100, 200, 100, 100], [200, 200, 100, 100], [300, 200, 100, 100], [400, 200, 100, 100], [500, 200, 100, 100], [600, 200, 100, 100], [700, 200, 100, 100], [800, 200, 100, 100], [900, 200, 100, 100], [0, 300, 100, 100], [100, 300, 100, 100], [200, 300, 100, 100], [300, 300, 100, 100], [400, 300, 100, 100], [500, 300, 100, 100], [600, 300, 100, 100], [700, 300, 100, 100], [800, 300, 100, 100], [900, 300, 100, 100], [0, 400, 100, 100], [100, 400, 100, 100], [200, 400, 100, 100], [300, 400, 100, 100], [400, 400, 100, 100], [500, 400, 100, 100], [600, 400, 100, 100], [700, 400, 100, 100], [800, 400, 100, 100], [900, 400, 100, 100], [0, 500, 100, 100], [100, 500, 100, 100], [200, 500, 100, 100], [300, 500, 100, 100], [400, 500, 100, 100], [500, 500, 100, 100], [600, 500, 100, 100], [700, 500, 100, 100], [800, 500, 100, 100], [900, 500, 100, 100], [0, 600, 100, 100], [100, 600, 100, 100], [200, 600, 100, 100], [300, 600, 100, 100], [400, 600, 100, 100], [500, 600, 100, 100], [600, 600, 100, 100], [700, 600, 100, 100], [800, 600, 100, 100], [900, 600, 100, 100], [0, 700, 100, 100]];
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
  if (!this.isGameOver) {
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
  }
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

  if (!this.isGameOver) {
    this.rotation += this.rotationSpeed;
  }

  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.rotation / 360));
  ctx.translate(-768 / 2, -768 / 2);
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'blue'; // Cursor

  if (!this.deadShip) {
    this.cursor.draw(ctx);
  } else {
    this.cursor.explosionAnimation(ctx);
  } // Waves


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
  this.cursor.explosionFrame = 0;
  this.deadShip = false;
  this.isGameOver = false;
};

Game.prototype.gameOver = function () {
  // option to play again, calls start new game
  // this.controls.gameOver();
  // TODO check high score to display name prompt
  // if true, on form submit, set highscore = false and recall gameOver()
  this.deadShip = true;
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
  this.loadScreen = true;
  this.controls.gameOver();
}

GameStage.prototype.ticker = function (time) {
  var frameInterval = this.frameInterval,
      setTime = this.setTime; // frame limiter

  var curTime = time;
  var timeDif = curTime - setTime; // draw frame

  if (timeDif >= frameInterval) {
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

var HARD_PATTERNS = [[[1, 1, 0, 1, 1, 0, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0, 1, 1]], [[1, 1, 1, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 1, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 1, 1, 0, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 0, 1, 1], [1, 1, 0, 1, 1, 1, 1, 0]]];

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
  if (this.scale > 1 + this.descaleFactor) this.scale -= this.descaleFactor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsInByb3RvdHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhpZ2hzY29yZSIsIkN1cnNvciIsImNvbnRleHQiLCJkZWdyZWVzIiwiY3Vyc29yU3BlZWQiLCJjdXJzb3IiLCJJbWFnZSIsImRlYWRDdXJzb3IiLCJleHBsb3Npb24iLCJleHBsb3Npb25GcmFtZSIsInNyYyIsIm1vdmVDdXJzb3IiLCJkaXJlY3Rpb24iLCJkcmF3Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJleHBsb3Npb25BbmltYXRpb24iLCJ4MSIsIkVYUExPU0lPTl9QT1NJVElPTiIsInkxIiwieDIiLCJ5MiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaW1feCIsImRpbV95IiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImhpZ2hTY29yZSIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJhZGRDdXJzb3IiLCJhZGRDb250cm9scyIsImFkZFdhdmUiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlV2F2ZSIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsImxvYWRTY3JlZW4iLCJ0aW1lIiwiY3VyVGltZSIsInRpbWVEaWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhdWRpbyIsIkF1ZGlvIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNjYWxlIiwic3BlZWQiLCJkZXNjYWxlRmFjdG9yIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInRoZXRhIiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJjdXJyZW50U3Vid2F2ZSIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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LEVBQXdCO0FBQzdDO0FBQ0EsTUFBSWdCLFFBQVEsR0FBRyxLQUFmOztBQUVDLE9BQUssSUFBSW1HLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY0ssSUFBZCxDQUFtQnRGLE9BQW5CLEVBQTRCbEMsSUFBNUIsQ0FBSixFQUF1Q2dCLFFBQVEsR0FBRyxJQUFYO0FBQ3hDO0FBQ0Y7O0FBRUYsU0FBT0EsUUFBUDtBQUNBLENBWEQ7O0FBYUE4RixJQUFJLENBQUN2RixTQUFMLENBQWVxQixJQUFmLEdBQXNCLFVBQVMvQyxHQUFULEVBQWM7QUFDbkMsT0FBSyxJQUFJc0gsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN6QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMxQixXQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY3ZFLElBQWQsQ0FBbUIvQyxHQUFuQjtBQUNEO0FBQ0g7QUFDRCxDQU5EOztBQVFlaUgsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBjYW52YXMud2lkdGggPSA3Njg7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuICAvLyBpbnN0YW50aWF0ZSBnYW1lXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBjb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG4gIGdhbWVzdGFnZS50aWNrZXIoKTtcbn0pXG5cbiIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5oaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1ib3gnKTtcbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXlcIik7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgdGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoXCJjbGVhci1iYWNrZ3JvdW5kLWltYWdlXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuaGlnaFNjb3JlTGlzdFswXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKGhpZ2hzY29yZSkge1xuICAvLyBpZiAoIWhpZ2hzY29yZSl7dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKX07IFxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbiAgdGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDI3MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSAxMDtcbiAgdGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5kZWFkQ3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuZXhwbG9zaW9uID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbiAgdGhpcy5kZWFkQ3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG4gIHRoaXMuZXhwbG9zaW9uLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG59XG5cbkN1cnNvci5wcm90b3R5cGUubW92ZUN1cnNvciA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcImNsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICBcbiAgICBjYXNlIFwiY2Nsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCl7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoNzY4LzIsIDc2OC8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmV4cGxvc2lvbkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGN0eCkge1xuXG4gIGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKXsgIFxuICAgIGNvbnN0IHgxID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzBdO1xuICAgIGNvbnN0IHkxID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzFdO1xuICAgIGNvbnN0IHgyID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzJdO1xuICAgIGNvbnN0IHkyID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzNdO1xuXG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDc2OC8yLCA3NjgvMik7XG4gICAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5leHBsb3Npb24sIHgxLCB5MSwgeDIsIHkyLCAtNTAsIC03NSwgMTUwLCAxNTApO1xuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLmV4cGxvc2lvbkZyYW1lKys7XG4gIH1cblxuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKDc2OC8yLCA3NjgvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLC0zNSk7XG4gIGN0eC5yZXN0b3JlKCk7XG4gIFxufVxuXG5jb25zdCBFWFBMT1NJT05fUE9TSVRJT04gPSBbXG5bMCwgMCAsMTAwLCAxMDBdLFxuWzEwMCwgMCAsMTAwLCAxMDBdLFxuWzIwMCwgMCAsMTAwLCAxMDBdLFxuWzMwMCwgMCAsMTAwLCAxMDBdLFxuWzQwMCwgMCAsMTAwLCAxMDBdLFxuWzUwMCwgMCAsMTAwLCAxMDBdLFxuWzYwMCwgMCAsMTAwLCAxMDBdLFxuWzcwMCwgMCAsMTAwLCAxMDBdLFxuWzgwMCwgMCAsMTAwLCAxMDBdLFxuWzkwMCwgMCAsMTAwLCAxMDBdLFxuWzAsIDEwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMTAwICwxMDAsIDEwMF0sXG5bMjAwLCAxMDAgLDEwMCwgMTAwXSxcblszMDAsIDEwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMTAwICwxMDAsIDEwMF0sXG5bNTAwLCAxMDAgLDEwMCwgMTAwXSxcbls2MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMTAwICwxMDAsIDEwMF0sXG5bODAwLCAxMDAgLDEwMCwgMTAwXSxcbls5MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzAsIDIwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMjAwICwxMDAsIDEwMF0sXG5bMjAwLCAyMDAgLDEwMCwgMTAwXSxcblszMDAsIDIwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMjAwICwxMDAsIDEwMF0sXG5bNTAwLCAyMDAgLDEwMCwgMTAwXSxcbls2MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMjAwICwxMDAsIDEwMF0sXG5bODAwLCAyMDAgLDEwMCwgMTAwXSxcbls5MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzAsIDMwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMzAwICwxMDAsIDEwMF0sXG5bMjAwLCAzMDAgLDEwMCwgMTAwXSxcblszMDAsIDMwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMzAwICwxMDAsIDEwMF0sXG5bNTAwLCAzMDAgLDEwMCwgMTAwXSxcbls2MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMzAwICwxMDAsIDEwMF0sXG5bODAwLCAzMDAgLDEwMCwgMTAwXSxcbls5MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzAsIDQwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNDAwICwxMDAsIDEwMF0sXG5bMjAwLCA0MDAgLDEwMCwgMTAwXSxcblszMDAsIDQwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNDAwICwxMDAsIDEwMF0sXG5bNTAwLCA0MDAgLDEwMCwgMTAwXSxcbls2MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNDAwICwxMDAsIDEwMF0sXG5bODAwLCA0MDAgLDEwMCwgMTAwXSxcbls5MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzAsIDUwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNTAwICwxMDAsIDEwMF0sXG5bMjAwLCA1MDAgLDEwMCwgMTAwXSxcblszMDAsIDUwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNTAwICwxMDAsIDEwMF0sXG5bNTAwLCA1MDAgLDEwMCwgMTAwXSxcbls2MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNTAwICwxMDAsIDEwMF0sXG5bODAwLCA1MDAgLDEwMCwgMTAwXSxcbls5MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzAsIDYwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNjAwICwxMDAsIDEwMF0sXG5bMjAwLCA2MDAgLDEwMCwgMTAwXSxcblszMDAsIDYwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNjAwICwxMDAsIDEwMF0sXG5bNTAwLCA2MDAgLDEwMCwgMTAwXSxcbls2MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNjAwICwxMDAsIDEwMF0sXG5bODAwLCA2MDAgLDEwMCwgMTAwXSxcbls5MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzAsIDcwMCAsMTAwLCAxMDBdXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmhpZ2hTY29yZSA9IGZhbHNlO1xuXHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cblx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5sb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpe1xuXG5cdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdH1cblxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gOS41ICogMTAwMCkge1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdtZWRpdW0nO1xuXHR9XG5cdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAxOS41ICogMTAwMCkge1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdoYXJkJztcblx0fVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5zYXZlKCk7XG5cdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHQvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94KzI1NiwgZGltX3krMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdGN0eC5yZXN0b3JlKCk7XG5cdGlmICghdGhpcy5pc0dhbWVPdmVyKXtcblx0XHR0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcblx0fVxuXHRcblx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLTc2OCAvIDIsIC03NjggLyAyKTtcblxuXHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0Ly8gQ3Vyc29yXG5cdGlmICghdGhpcy5kZWFkU2hpcCl7XG5cdFx0dGhpcy5jdXJzb3IuZHJhdyhjdHgpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY3Vyc29yLmV4cGxvc2lvbkFuaW1hdGlvbihjdHgpO1xuXHR9XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRpZiAoXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0KSB7XG5cdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR9XG5cdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdGxldCBnYW1lID0gdGhpcztcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0ZGVncmVlcyArPSAzNjA7XG5cdH1cblxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmN1cnNvci5leHBsb3Npb25GcmFtZSA9IDA7XG5cdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0Ly8gdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHQvLyBUT0RPIGNoZWNrIGhpZ2ggc2NvcmUgdG8gZGlzcGxheSBuYW1lIHByb21wdFxuXHQvLyBpZiB0cnVlLCBvbiBmb3JtIHN1Ym1pdCwgc2V0IGhpZ2hzY29yZSA9IGZhbHNlIGFuZCByZWNhbGwgZ2FtZU92ZXIoKVxuXHR0aGlzLmRlYWRTaGlwID0gdHJ1ZTtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMubG9hZFNjcmVlbiA9IHRydWU7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbih0aW1lKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuICAvLyBmcmFtZSBsaW1pdGVyXG4gIGxldCBjdXJUaW1lID0gdGltZTtcbiAgbGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gc2V0VGltZTtcblxuICAvLyBkcmF3IGZyYW1lXG4gIGlmICh0aW1lRGlmID49IGZyYW1lSW50ZXJ2YWwpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgXG5cdF0sXG5cdFtcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAgXVxuXHRdXG5dO1xuIiwiZnVuY3Rpb24gV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHQvLyB0aGlzLnNwZWVkID0gODtcbiAgLy8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA5O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjE7XG5cdH1cblxuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMjA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjQ3LjUsIDI5Mi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA3OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSkge1xuXHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRpZiAodGhpcy5zY2FsZSA+IDEgKyB0aGlzLmRlc2NhbGVGYWN0b3IpIHRoaXMuc2NhbGUgLT0gdGhpcy5kZXNjYWxlRmFjdG9yO1xuXHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0bGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcbiAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSBwb3N4KSAqKiAyICsgKDM4NCAtIHBvc3kpICoqIDIpO1xuICAvLyBkZWJ1Z2dlclxuXG5cdGlmICh0aGlzLm9jdGFudCA9PT0gMCB8fCB0aGlzLm9jdGFudCA9PT0gMiB8fCB0aGlzLm9jdGFudCA9PT0gNikge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDEyMFxuXHRcdCkge1xuXHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRpZiAoXG5cdFx0XHQodGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0KHRoZXRhID4gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHR0aGV0YSA8IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKVxuXHRcdCkge1xuXHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRpZiAoXG5cdFx0dGhpcy5vY3RhbnQgPT09IDEgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA1IHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDdcblx0KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSAxMjAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdCkge1xuXHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcblx0aWYgKGR4ID4gMCkge1xuXHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHggPCAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXHRpZiAoZHkgPiAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHR0aGlzLnBvc1sxXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2FsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0bGV0IHggPSBwb3NbMF07XG5cdGxldCB5ID0gcG9zWzFdO1xuXG5cdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC5kcmF3SW1hZ2UoXG5cdFx0dGhpcy5zcHJpdGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHQxMDAgKiB0aGlzLnNjYWxlXG5cdCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgteCAtIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIC15IC0gdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5mdW5jdGlvbiBXYXZlKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuXHR0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLnN1YndhdmVUaW1lciA9IDA7XG4gIHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuICB0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscyhkaWZmaWN1bHR5KTtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbn1cblxuV2F2ZS5wcm90b3R5cGUuYWRkV2FsbHMgPSBmdW5jdGlvbihkaWZmaWN1bHR5KSB7XG4gIGxldCB3YWxscyA9IFtdO1xuICBjb25zdCB7cGF0dGVybn0gPSB0aGlzO1xuXG5cdGZvciAobGV0IG9jdGFudCA9IDA7IG9jdGFudCA8IDg7IG9jdGFudCsrKSB7XG5cdFx0aWYgKHBhdHRlcm5bb2N0YW50XSA9PT0gMSkge1xuXHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0d2FsbHMucHVzaChuZXdXYWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd2FsbHM7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oZGVncmVlcywgZ2FtZSkge1xuXHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMud2FsbHNbaV0ubW92ZShkZWdyZWVzLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==