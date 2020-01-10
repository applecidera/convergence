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
    this.descaleFactor = 0.9;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGlnaHNjb3JlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwiZGVhZEN1cnNvciIsImV4cGxvc2lvbiIsImV4cGxvc2lvbkZyYW1lIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImRyYXciLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImV4cGxvc2lvbkFuaW1hdGlvbiIsIngxIiwiRVhQTE9TSU9OX1BPU0lUSU9OIiwieTEiLCJ4MiIsInkyIiwibW9kdWxlIiwiZXhwb3J0cyIsImRpbV94IiwiZGltX3kiLCJpc0dhbWVPdmVyIiwidG90YWxUaW1lRWxhcHNlZCIsInN1YndhdmVUaW1lciIsInN1YldhdmVJbnRlcnZhbCIsIndhdmVzIiwicGF0dGVybkxpc3QiLCJkaWZmaWN1bHR5Iiwicm90YXRpb24iLCJyb3RhdGlvblNwZWVkIiwiaGlnaFNjb3JlIiwiZGVhZFNoaXAiLCJzdW5NYXAiLCJzdGF0aWNNYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmb3JFYWNoIiwid2F2ZSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsImxlbmd0aCIsImNvbmNhdCIsIkVBU1lfUEFUVEVSTlMiLCJmbG9vciIsInJhbmRvbSIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJwYXR0ZXJuIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwibG9hZFNjcmVlbiIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1ZGlvIiwiQXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7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LENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FISCxDQUQ0QixFQU0zQixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRixFQUdFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRixDQU4yQixFQVczQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQVgyQixFQWMzQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQWQyQixFQWlCM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FqQjJCLENBQXRCLEMsQ0FzQlA7O0FBQ08sSUFBTUcsZUFBZSxHQUFHLENBQzlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBRDhCLEVBTzdCLENBQ0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURBLEVBRUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZBLEVBR0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhBLEVBSUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpBLENBUDZCLEVBYTlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBYjhCLEVBbUI3QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQW5CNkIsQ0FBeEIsQyxDQTJCUDs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsQ0FDNUIsQ0FDRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREgsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkgsRUFLRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTEgsRUFNRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTkgsQ0FENEIsRUFTNUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkgsRUFHRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEgsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsRUFLRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTEgsRUFNRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTkgsRUFPQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBUEQsRUFRQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBUkQsRUFTQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBVEQsQ0FUNEIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUNwRFAsU0FBU2dDLElBQVQsQ0FBY0MsTUFBZCxFQUFzQnZFLFVBQXRCLEVBQWtDO0FBQ2pDLE9BQUt1RSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxNQUFMLEdBQWMsSUFBSXZHLEtBQUosRUFBZDtBQUNBLE9BQUt3RyxLQUFMLEdBQWEsQ0FBYixDQUhpQyxDQUlqQztBQUNDOztBQUNBLE9BQUt6RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNELE9BQUt3RSxNQUFMLENBQVluRyxHQUFaLEdBQ0MsNEZBREQ7O0FBRUEsTUFBSTJCLFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUMxQixTQUFLMEUsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsR0FIRCxNQUdPLElBQUkzRSxVQUFVLEtBQUssUUFBbkIsRUFBNkI7QUFDbkMsU0FBSzBFLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixHQUFyQjtBQUNBLEdBSE0sTUFHQSxJQUFJM0UsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ2pDLFNBQUswRSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQTs7QUFFRCxPQUFLQyxXQUFMLENBQWlCTCxNQUFqQjtBQUNBOztBQUVERCxJQUFJLENBQUNuSCxTQUFMLENBQWV5SCxXQUFmLEdBQTZCLFVBQVNMLE1BQVQsRUFBaUI7QUFDN0MsVUFBUUEsTUFBUjtBQUNDLFNBQUssQ0FBTDtBQUNDLFdBQUt0QixHQUFMLEdBQVcsQ0FBRSxDQUFGLEVBQUssR0FBTCxDQUFYO0FBQ0EsV0FBSzRCLGNBQUwsR0FBc0IsQ0FBQyxFQUF2QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSy9CLEdBQUwsR0FBVyxDQUFFLENBQUYsRUFBSyxDQUFMLENBQVg7QUFDQSxXQUFLNEIsY0FBTCxHQUFzQixDQUFDLEVBQXZCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxLQUFULENBQWQ7QUFDQTs7QUFDRCxTQUFLLENBQUw7QUFDQyxXQUFLL0IsR0FBTCxHQUFXLENBQUUsR0FBRixFQUFPLENBQVAsQ0FBWDtBQUNBLFdBQUs0QixjQUFMLEdBQXNCLENBQXRCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxLQUFULENBQWQ7QUFDQTs7QUFDRCxTQUFLLENBQUw7QUFDQyxXQUFLL0IsR0FBTCxHQUFXLENBQUUsR0FBRixFQUFPLENBQVAsQ0FBWDtBQUNBLFdBQUs0QixjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsRUFBaEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxLQUFULENBQWQ7QUFDQTs7QUFDRCxTQUFLLENBQUw7QUFDQyxXQUFLL0IsR0FBTCxHQUFXLENBQUUsR0FBRixFQUFPLEdBQVAsQ0FBWDtBQUNBLFdBQUs0QixjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxHQUFULENBQWQ7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBRSxDQUFGLEVBQUssSUFBTCxDQUFmO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBS2hDLEdBQUwsR0FBVyxDQUFFLEdBQUYsRUFBTyxHQUFQLENBQVg7QUFDQSxXQUFLNEIsY0FBTCxHQUFzQixHQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsRUFBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxJQUFGLEVBQVEsSUFBUixDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSy9CLEdBQUwsR0FBVyxDQUFFLEdBQUYsRUFBTyxHQUFQLENBQVg7QUFDQSxXQUFLNEIsY0FBTCxHQUFzQixHQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxJQUFGLEVBQVEsS0FBUixDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSy9CLEdBQUwsR0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMLENBQVg7QUFDQSxXQUFLNEIsY0FBTCxHQUFzQixHQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUFkO0FBQ0E7QUF6REY7QUEyREEsQ0E1REQ7O0FBOERBVixJQUFJLENBQUNuSCxTQUFMLENBQWVpRyxJQUFmLEdBQXNCLFVBQVM4QixLQUFULEVBQWdCO0FBQUEsTUFDN0JGLE1BRDZCLEdBQ1QsSUFEUyxDQUM3QkEsTUFENkI7QUFBQSxNQUNyQkMsT0FEcUIsR0FDVCxJQURTLENBQ3JCQSxPQURxQjtBQUdyQyxNQUFJLEtBQUtSLEtBQUwsR0FBYSxJQUFJLEtBQUtFLGFBQTFCLEVBQXlDLEtBQUtGLEtBQUwsSUFBYyxLQUFLRSxhQUFuQjtBQUN6QyxNQUFJOUgsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFJc0ksSUFBSSxHQUFHLEtBQUtsQyxHQUFMLENBQVMsQ0FBVCxDQUFYO0FBQ0EsTUFBSW1DLElBQUksR0FBRyxLQUFLbkMsR0FBTCxDQUFTLENBQVQsQ0FBWDtBQUNDLE1BQUlDLFFBQVEsR0FBR3RFLElBQUksQ0FBQ3VFLElBQUwsQ0FBVSxTQUFDLE1BQU1nQyxJQUFQLEVBQWdCLENBQWhCLGFBQXFCLE1BQU1DLElBQTNCLEVBQW9DLENBQXBDLENBQVYsQ0FBZixDQVBvQyxDQVFwQzs7QUFFRCxNQUFJLEtBQUtiLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsS0FBS0EsTUFBTCxLQUFnQixDQUFyQyxJQUEwQyxLQUFLQSxNQUFMLEtBQWdCLENBQTlELEVBQWlFO0FBQ2hFLFFBQ0NXLEtBQUssR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FBZCxJQUNBRSxLQUFLLEdBQUdGLE1BQU0sQ0FBQyxDQUFELENBRGQsSUFFQTlCLFFBQVEsSUFBSSxFQUZaLElBR0FBLFFBQVEsSUFBSSxHQUpiLEVBS0U7QUFDRHJHLGNBQVEsR0FBRyxJQUFYO0FBQ0E7QUFDRDs7QUFDRCxNQUFJLEtBQUswSCxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3RCLFFBQ0VXLEtBQUssR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FBZCxJQUNBRSxLQUFLLEdBQUdGLE1BQU0sQ0FBQyxDQUFELENBRGQsSUFFQTlCLFFBQVEsSUFBSSxFQUZaLElBR0FBLFFBQVEsSUFBSSxHQUhiLElBSUNnQyxLQUFLLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQWYsSUFDQUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQURmLElBRUEvQixRQUFRLElBQUksRUFGWixJQUdBQSxRQUFRLElBQUksR0FSZCxFQVNFO0FBQ0RyRyxjQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsTUFDQyxLQUFLMEgsTUFBTCxLQUFnQixDQUFoQixJQUNBLEtBQUtBLE1BQUwsS0FBZ0IsQ0FEaEIsSUFFQSxLQUFLQSxNQUFMLEtBQWdCLENBRmhCLElBR0EsS0FBS0EsTUFBTCxLQUFnQixDQUpqQixFQUtFO0FBQ0QsUUFDQ1csS0FBSyxHQUFHRixNQUFNLENBQUMsQ0FBRCxDQUFkLElBQ0FFLEtBQUssR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FEZCxJQUVBOUIsUUFBUSxJQUFJLEdBRlosSUFHQUEsUUFBUSxJQUFJLEdBSmIsRUFLRTtBQUNEckcsY0FBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUVELE1BQUl3SSxFQUFFLEdBQUcsTUFBTUYsSUFBZjtBQUNBLE1BQUlHLEVBQUUsR0FBRyxNQUFNRixJQUFmLENBbkRxQyxDQW9EckM7O0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNYLFNBQUtwQyxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUt5QixLQUFwQjtBQUNBLEdBRkQsTUFFTyxJQUFJVyxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ2xCLFNBQUtwQyxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUt5QixLQUFwQjtBQUNBOztBQUNELE1BQUlZLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFDWCxTQUFLckMsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLeUIsS0FBcEI7QUFDQSxHQUZELE1BRU8sSUFBSVksRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNsQixTQUFLckMsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLeUIsS0FBcEI7QUFDQTs7QUFFRCxTQUFPN0gsUUFBUDtBQUNBLENBakVEOztBQW1FQXlILElBQUksQ0FBQ25ILFNBQUwsQ0FBZXFCLElBQWYsR0FBc0IsVUFBUzlDLEdBQVQsRUFBYztBQUFBLE1BQzNCdUgsR0FEMkIsR0FDbkIsSUFEbUIsQ0FDM0JBLEdBRDJCO0FBRW5DLE1BQUlzQyxDQUFDLEdBQUd0QyxHQUFHLENBQUMsQ0FBRCxDQUFYO0FBQ0EsTUFBSXVDLENBQUMsR0FBR3ZDLEdBQUcsQ0FBQyxDQUFELENBQVg7QUFFQXZILEtBQUcsQ0FBQ2dELFNBQUosQ0FBYzZHLENBQUMsR0FBRyxLQUFLVCxPQUFMLEdBQWUsS0FBS0wsS0FBdEMsRUFBNkNlLENBQUMsR0FBRyxLQUFLVCxPQUFMLEdBQWUsS0FBS04sS0FBckU7QUFDQS9JLEtBQUcsQ0FBQ2lELE1BQUosQ0FBVyxJQUFJQyxJQUFJLENBQUNDLEVBQVQsR0FBYyxHQUFkLElBQXFCLEtBQUtnRyxjQUFMLEdBQXNCLEdBQTNDLENBQVg7QUFDQW5KLEtBQUcsQ0FBQ29ELFNBQUosQ0FDQyxLQUFLMEYsTUFETixFQUVDLE1BQU0sS0FBS0MsS0FBWCxHQUFtQixDQUZwQixFQUdDLE1BQU0sS0FBS0EsS0FBWCxHQUFtQixDQUhwQixFQUlDLE1BQU0sS0FBS0EsS0FKWixFQUtDLE1BQU0sS0FBS0EsS0FMWjtBQU9BL0ksS0FBRyxDQUFDaUQsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsQ0FBQyxLQUFLZ0csY0FBTixHQUF1QixHQUE1QyxDQUFYO0FBQ0FuSixLQUFHLENBQUNnRCxTQUFKLENBQWMsQ0FBQzZHLENBQUQsR0FBSyxLQUFLVCxPQUFMLEdBQWUsS0FBS0wsS0FBdkMsRUFBOEMsQ0FBQ2UsQ0FBRCxHQUFLLEtBQUtULE9BQUwsR0FBZSxLQUFLTixLQUF2RTtBQUNBLENBaEJEOztBQWtCQW5GLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQitFLElBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTNUIsSUFBVCxDQUFjSCxPQUFkLEVBQXVCdkMsVUFBdkIsRUFBbUM7QUFDakMsT0FBS3VDLE9BQUwsR0FBZUEsT0FBZjtBQUNELE9BQUtrRCxHQUFMLEdBQVcsS0FBWDtBQUNDLE9BQUs3RixZQUFMLEdBQW9CLENBQXBCO0FBQ0EsT0FBSzhGLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxPQUFLMUMsS0FBTCxHQUFhLEtBQUsyQyxRQUFMLENBQWMzRixVQUFkLENBQWI7QUFDQSxPQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVEMEMsSUFBSSxDQUFDdkYsU0FBTCxDQUFld0ksUUFBZixHQUEwQixVQUFTM0YsVUFBVCxFQUFxQjtBQUM3QyxNQUFJZ0QsS0FBSyxHQUFHLEVBQVo7QUFENkMsTUFFdENULE9BRnNDLEdBRTNCLElBRjJCLENBRXRDQSxPQUZzQzs7QUFJOUMsT0FBSyxJQUFJZ0MsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNBLE1BQU0sRUFBdkMsRUFBMkM7QUFDMUMsUUFBSWhDLE9BQU8sQ0FBQ2dDLE1BQUQsQ0FBUCxLQUFvQixDQUF4QixFQUEyQjtBQUMxQixVQUFJcUIsT0FBTyxHQUFHLElBQUl0Qiw2Q0FBSixDQUFTQyxNQUFULEVBQWlCdkUsVUFBakIsQ0FBZDtBQUNBZ0QsV0FBSyxDQUFDTCxJQUFOLENBQVdpRCxPQUFYO0FBQ0EsS0FIRCxNQUdPO0FBQ041QyxXQUFLLENBQUNMLElBQU4sQ0FBVyxJQUFYO0FBQ0E7QUFDRDs7QUFFRCxTQUFPSyxLQUFQO0FBQ0EsQ0FkRDs7QUFnQkFOLElBQUksQ0FBQ3ZGLFNBQUwsQ0FBZWlHLElBQWYsR0FBc0IsVUFBU3RGLE9BQVQsRUFBa0JqQyxJQUFsQixFQUF3QjtBQUM3QztBQUNBLE1BQUlnQixRQUFRLEdBQUcsS0FBZjs7QUFFQyxPQUFLLElBQUlrRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFFBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzFCLFVBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNLLElBQWQsQ0FBbUJ0RixPQUFuQixFQUE0QmpDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN4QztBQUNGOztBQUVGLFNBQU9BLFFBQVA7QUFDQSxDQVhEOztBQWFBNkYsSUFBSSxDQUFDdkYsU0FBTCxDQUFlcUIsSUFBZixHQUFzQixVQUFTOUMsR0FBVCxFQUFjO0FBQ25DLE9BQUssSUFBSXFILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDekIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWN2RSxJQUFkLENBQW1COUMsR0FBbkI7QUFDRDtBQUNIO0FBQ0QsQ0FORDs7QUFRZWdILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbihoaWdoc2NvcmUpIHtcbiAgLy8gaWYgKCFoaWdoc2NvcmUpe3RoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCl9OyBcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDI3MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSAxMDtcbiAgdGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5kZWFkQ3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuZXhwbG9zaW9uID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbiAgdGhpcy5kZWFkQ3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG4gIHRoaXMuZXhwbG9zaW9uLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG59XG5cbkN1cnNvci5wcm90b3R5cGUubW92ZUN1cnNvciA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcImNsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICBcbiAgICBjYXNlIFwiY2Nsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCl7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoNzY4LzIsIDc2OC8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xuICBjdHgucmVzdG9yZSgpO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmV4cGxvc2lvbkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGN0eCkge1xuXG4gIGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKXsgIFxuICAgIGNvbnN0IHgxID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzBdO1xuICAgIGNvbnN0IHkxID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzFdO1xuICAgIGNvbnN0IHgyID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzJdO1xuICAgIGNvbnN0IHkyID0gRVhQTE9TSU9OX1BPU0lUSU9OW3RoaXMuZXhwbG9zaW9uRnJhbWVdWzNdO1xuXG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDc2OC8yLCA3NjgvMik7XG4gICAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gICAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5leHBsb3Npb24sIHgxLCB5MSwgeDIsIHkyLCAtNTAsIC03NSwgMTUwLCAxNTApO1xuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLmV4cGxvc2lvbkZyYW1lKys7XG4gIH1cblxuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKDc2OC8yLCA3NjgvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLC0zNSk7XG4gIGN0eC5yZXN0b3JlKCk7XG4gIFxufVxuXG5jb25zdCBFWFBMT1NJT05fUE9TSVRJT04gPSBbXG5bMCwgMCAsMTAwLCAxMDBdLFxuWzEwMCwgMCAsMTAwLCAxMDBdLFxuWzIwMCwgMCAsMTAwLCAxMDBdLFxuWzMwMCwgMCAsMTAwLCAxMDBdLFxuWzQwMCwgMCAsMTAwLCAxMDBdLFxuWzUwMCwgMCAsMTAwLCAxMDBdLFxuWzYwMCwgMCAsMTAwLCAxMDBdLFxuWzcwMCwgMCAsMTAwLCAxMDBdLFxuWzgwMCwgMCAsMTAwLCAxMDBdLFxuWzkwMCwgMCAsMTAwLCAxMDBdLFxuWzAsIDEwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMTAwICwxMDAsIDEwMF0sXG5bMjAwLCAxMDAgLDEwMCwgMTAwXSxcblszMDAsIDEwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMTAwICwxMDAsIDEwMF0sXG5bNTAwLCAxMDAgLDEwMCwgMTAwXSxcbls2MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMTAwICwxMDAsIDEwMF0sXG5bODAwLCAxMDAgLDEwMCwgMTAwXSxcbls5MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzAsIDIwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMjAwICwxMDAsIDEwMF0sXG5bMjAwLCAyMDAgLDEwMCwgMTAwXSxcblszMDAsIDIwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMjAwICwxMDAsIDEwMF0sXG5bNTAwLCAyMDAgLDEwMCwgMTAwXSxcbls2MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMjAwICwxMDAsIDEwMF0sXG5bODAwLCAyMDAgLDEwMCwgMTAwXSxcbls5MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzAsIDMwMCAsMTAwLCAxMDBdLFxuWzEwMCwgMzAwICwxMDAsIDEwMF0sXG5bMjAwLCAzMDAgLDEwMCwgMTAwXSxcblszMDAsIDMwMCAsMTAwLCAxMDBdLFxuWzQwMCwgMzAwICwxMDAsIDEwMF0sXG5bNTAwLCAzMDAgLDEwMCwgMTAwXSxcbls2MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzcwMCwgMzAwICwxMDAsIDEwMF0sXG5bODAwLCAzMDAgLDEwMCwgMTAwXSxcbls5MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzAsIDQwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNDAwICwxMDAsIDEwMF0sXG5bMjAwLCA0MDAgLDEwMCwgMTAwXSxcblszMDAsIDQwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNDAwICwxMDAsIDEwMF0sXG5bNTAwLCA0MDAgLDEwMCwgMTAwXSxcbls2MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNDAwICwxMDAsIDEwMF0sXG5bODAwLCA0MDAgLDEwMCwgMTAwXSxcbls5MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzAsIDUwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNTAwICwxMDAsIDEwMF0sXG5bMjAwLCA1MDAgLDEwMCwgMTAwXSxcblszMDAsIDUwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNTAwICwxMDAsIDEwMF0sXG5bNTAwLCA1MDAgLDEwMCwgMTAwXSxcbls2MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNTAwICwxMDAsIDEwMF0sXG5bODAwLCA1MDAgLDEwMCwgMTAwXSxcbls5MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzAsIDYwMCAsMTAwLCAxMDBdLFxuWzEwMCwgNjAwICwxMDAsIDEwMF0sXG5bMjAwLCA2MDAgLDEwMCwgMTAwXSxcblszMDAsIDYwMCAsMTAwLCAxMDBdLFxuWzQwMCwgNjAwICwxMDAsIDEwMF0sXG5bNTAwLCA2MDAgLDEwMCwgMTAwXSxcbls2MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzcwMCwgNjAwICwxMDAsIDEwMF0sXG5bODAwLCA2MDAgLDEwMCwgMTAwXSxcbls5MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzAsIDcwMCAsMTAwLCAxMDBdXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmhpZ2hTY29yZSA9IGZhbHNlO1xuXHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cblx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5sb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpe1xuXG5cdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdH1cblxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gOS41ICogMTAwMCkge1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdtZWRpdW0nO1xuXHR9XG5cdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAxOS41ICogMTAwMCkge1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdoYXJkJztcblx0fVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5zYXZlKCk7XG5cdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHQvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94KzI1NiwgZGltX3krMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdGN0eC5yZXN0b3JlKCk7XG5cdGlmICghdGhpcy5pc0dhbWVPdmVyKXtcblx0XHR0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcblx0fVxuXHRcblx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLTc2OCAvIDIsIC03NjggLyAyKTtcblxuXHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0Ly8gQ3Vyc29yXG5cdGlmICghdGhpcy5kZWFkU2hpcCl7XG5cdFx0dGhpcy5jdXJzb3IuZHJhdyhjdHgpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY3Vyc29yLmV4cGxvc2lvbkFuaW1hdGlvbihjdHgpO1xuXHR9XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRpZiAoXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0KSB7XG5cdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR9XG5cdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdGxldCBnYW1lID0gdGhpcztcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0ZGVncmVlcyArPSAzNjA7XG5cdH1cblxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmN1cnNvci5leHBsb3Npb25GcmFtZSA9IDA7XG5cdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0Ly8gdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHQvLyBUT0RPIGNoZWNrIGhpZ2ggc2NvcmUgdG8gZGlzcGxheSBuYW1lIHByb21wdFxuXHQvLyBpZiB0cnVlLCBvbiBmb3JtIHN1Ym1pdCwgc2V0IGhpZ2hzY29yZSA9IGZhbHNlIGFuZCByZWNhbGwgZ2FtZU92ZXIoKVxuXHR0aGlzLmRlYWRTaGlwID0gdHJ1ZTtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMubG9hZFNjcmVlbiA9IHRydWU7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbih0aW1lKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuICAvLyBmcmFtZSBsaW1pdGVyXG4gIGxldCBjdXJUaW1lID0gdGltZTtcbiAgbGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gc2V0VGltZTtcblxuICAvLyBkcmF3IGZyYW1lXG4gIGlmICh0aW1lRGlmID49IGZyYW1lSW50ZXJ2YWwpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG4gICAgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxIF0sXG5cdF0sXG5cdFtcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXVxuXHRdXG5dO1xuIiwiZnVuY3Rpb24gV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHQvLyB0aGlzLnNwZWVkID0gODtcbiAgLy8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjk7XG5cdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ2hhcmQnKSB7XG5cdFx0dGhpcy5zcGVlZCA9IDEwO1xuXHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0fVxuXG5cdHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcbn1cblxuV2FsbC5wcm90b3R5cGUub2N0YW50TG9naWMgPSBmdW5jdGlvbihvY3RhbnQpIHtcblx0c3dpdGNoIChvY3RhbnQpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxNTcuNSwgMjAyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDMwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIwMi41LCAyNDcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA0NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0zMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjk3LjUsIDMzNi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA5MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMzM2LjUsIDM2MCBdO1xuXHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxMzU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMjA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjIuNSwgNjcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA2OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTgwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDY3LjUsIDExMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDc6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMzA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMjA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuV2FsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHRoZXRhKSB7XG5cdGNvbnN0IHsgaGl0Ym94LCBoaXRib3gyIH0gPSB0aGlzO1xuXG5cdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXHRsZXQgcG9zeCA9IHRoaXMucG9zWzBdO1xuXHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHBvc3gpICoqIDIgKyAoMzg0IC0gcG9zeSkgKiogMik7XG4gIC8vIGRlYnVnZ2VyXG5cblx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmICh0aGlzLm9jdGFudCA9PT0gNCkge1xuXHRcdGlmIChcblx0XHRcdCh0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApIHx8XG5cdFx0XHQodGhldGEgPiBoaXRib3gyWzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94MlsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdGlmIChcblx0XHR0aGlzLm9jdGFudCA9PT0gMSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSAzIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gN1xuXHQpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDEyMCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTcwXG5cdFx0KSB7XG5cdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGR4ID0gMzg0IC0gcG9zeDtcblx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRpZiAoZHggPiAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHR0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cdGlmIChkeSA+IDApIHtcblx0XHR0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRsZXQgeCA9IHBvc1swXTtcblx0bGV0IHkgPSBwb3NbMV07XG5cblx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgeSArIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LmRyYXdJbWFnZShcblx0XHR0aGlzLnNwcml0ZSxcblx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHQxMDAgKiB0aGlzLnNjYWxlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0KTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHgudHJhbnNsYXRlKC14IC0gdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgLXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiIsIlxuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxscyc7XG5cbmZ1bmN0aW9uIFdhdmUocGF0dGVybiwgZGlmZmljdWx0eSkge1xuICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuXG5cdHRoaXMuZW5kID0gZmFsc2U7XG4gIHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcbiAgdGhpcy5jdXJyZW50U3Vid2F2ZSA9IDA7XG4gIHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xufVxuXG5XYXZlLnByb3RvdHlwZS5hZGRXYWxscyA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpIHtcbiAgbGV0IHdhbGxzID0gW107XG4gIGNvbnN0IHtwYXR0ZXJufSA9IHRoaXM7XG5cblx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRpZiAocGF0dGVybltvY3RhbnRdID09PSAxKSB7XG5cdFx0XHRsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKG9jdGFudCwgZGlmZmljdWx0eSk7XG5cdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YWxscy5wdXNoKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB3YWxscztcbn07XG5cbldhdmUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbihkZWdyZWVzLCBnYW1lKSB7XG5cdC8vIGhpdGJveCBsb2dpYyBpZiBhbnkgb2YgdGhlIHdhbGxzIHRvdWNoIGN1cnNvciwgc2V0IGdhbWVPdmVyID0gdHJ1ZVxuXHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9