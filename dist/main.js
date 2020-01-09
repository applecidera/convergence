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
  ctx.drawImage(this.cursor, 0, -35); // console.log(Math.abs(this.degrees % 360));
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
  this.patternList = [];
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

  if (this.totalTimeElapsed > 19.5 * 1000) {
    this.difficulty = "medium";
  }

  if (this.totalTimeElapsed > 39.5 * 1000) {
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
  var elapsedTime = this.elapsedTime,
      waveInterval = this.waveInterval,
      pattern = this.pattern,
      difficulty = this.difficulty; // launch wave every x seconds

  if (this.subwaveTimer > this.subWaveInterval * 1000 || this.totalTimeElapsed === frameInterval) {
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
      } // this stuff runs if patternList is empty
      // TODO create new waveInterval based on difficulty
      // this.elapsedTime = frameInterval + 1;
      // this.waveInterval = 10 * 1000;
      // this.patternStep = 0;

    } // this stuff runs at set intervals (2s)


    this.pattern = this.patternList.shift();
    var newWave = new _wave__WEBPACK_IMPORTED_MODULE_2__["default"](this.pattern);
    this.waves.push(newWave);
    this.subwaveTimer = 0; // this.patternStep += 1;
  } // this stuff happens regardless of timer
  // increment elapsedTime
  // this.elapsedTime += frameInterval;


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

  this.removeWave();
  var theta = Math.abs(this.cursor.degrees % 360);
  console.log(theta);
  waves.forEach(function (wave) {
    // if any return true, call this.gameOver()
    if (wave.move(theta, game)) _this2.gameOver();
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

var HARD_PATTERNS = [[[1, 0, 1, 0, 1, 0, 1, 0], [1, 1, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1]] // [
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

function Wall(octant) {
  this.octant = octant;
  this.sprite = new Image();
  this.speed = 5;
  this.scale = 4;
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
      this.hitbox = [157.5, 202.5];
      break;

    case 1:
      this.pos = [0, 0];
      this.degreeRotation = -45;
      this.xoffset = -100;
      this.yoffset = 50;
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
      this.xoffset = -50;
      this.yoffset = -100;
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
      this.xoffset = 100;
      this.yoffset = -50;
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
      this.xoffset = 50;
      this.yoffset = 100;
      this.hitbox = [112.5, 157.5];
      break;
  }
};

Wall.prototype.move = function (theta, game) {
  var hitbox = this.hitbox,
      hitbox2 = this.hitbox2;
  var gameOver = false;
  var posx = this.pos[0];
  var posy = this.pos[1];
  var distance = Math.sqrt(Math.pow(384 - posx, 2) + Math.pow(384 - posy, 2)); // TODO hitbox logic is actually coded here, return true if gameOver
  // may need to pass down degrees from cursor
  // if (this.octant === 7){
  //   console.log(distance);
  //   console.log(theta);
  // }

  if (this.octant === 0 || this.octant === 2 || this.octant === 4 || this.octant === 6) {
    if (theta > hitbox[0] && theta < hitbox[1] && distance >= 70 && distance <= 120) {
      console.log("angle is ".concat(theta));
      console.log("distance is ".concat(distance));
      console.log("octant is ".concat(this.octant));
      console.log("gameover");
      gameOver = true;
    }
  }

  if (this.octant === 1 || this.octant === 3 || this.octant === 5 || this.octant === 7) {
    if (theta > hitbox[0] && theta < hitbox[1] && distance >= 140 && distance <= 190) {
      console.log("angle is ".concat(theta));
      console.log("distance is ".concat(distance));
      console.log("octant is ".concat(this.octant));
      console.log("gameover");
      gameOver = true;
    }
  } // let radius = 50;
  // // cursor default = (489 , 384)
  // // let curX = radius * Math.sin(theta);
  // // let curY = radius * Math.cos(theta);
  // let curX = ((368+105)*Math.cos(theta))
  // let curY = (-1*(368+105)*Math.sin(theta))
  // let distance = Math.sqrt((curX - posx) ** 2 + (curY - posy) ** 2);
  // if (distance < 100){
  //   debugger
  // }


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
  if (this.scale > 1.01) this.scale -= 0.04;
  ctx.translate(x + this.xoffset, y + this.yoffset);
  ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
  ctx.drawImage(this.sprite, 100 / 2, 100 / 2, 100, 100 // 100 * this.scale,
  // 100 * this.scale
  );
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

Wave.prototype.move = function (theta, game) {
  // TODO iterate thru each wall and set new coordinates, movement alowed based on elapsed time
  // hitbox logic if any of the walls touch cursor, set gameOver = true
  // actual logic in walls.js
  var gameOver = false;

  for (var i = 0; i < 8; i++) {
    if (this.walls[i] !== null) {
      if (this.walls[i].move(theta, game)) gameOver = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsInBhdHRlcm5TdGVwIiwicGF0dGVybkxpc3QiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsInBhdHRlcm4iLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJ4MSIsInBvcyIsInkxIiwiZGlzdGFuY2UiLCJzcXJ0IiwidGhldGEiLCJhYnMiLCJjb25zb2xlIiwibG9nIiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1ZGlvIiwiQXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic3BlZWQiLCJzY2FsZSIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImhpdGJveCIsImhpdGJveDIiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0FGLE1BQU0s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RSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBRDhCLEVBTzlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBUDhCLEVBYTlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUss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cEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsVUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY1csSUFBZCxDQUFtQkosS0FBbkIsRUFBMEIvRyxJQUExQixDQUFKLEVBQXFDaUIsUUFBUSxHQUFHLElBQVg7QUFDdEM7QUFDRjs7QUFFRixTQUFPQSxRQUFQO0FBQ0EsQ0FiRDs7QUFlQWtGLElBQUksQ0FBQzVFLFNBQUwsQ0FBZWtCLElBQWYsR0FBc0IsVUFBUzVDLEdBQVQsRUFBYztBQUNuQyxPQUFLLElBQUkyRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3pCLFFBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzFCLFdBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjL0QsSUFBZCxDQUFtQjVDLEdBQW5CO0FBQ0Q7QUFDSDtBQUNELENBTkQ7O0FBUWVzRyxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG5jYW52YXMud2lkdGggPSA3Njg7XG5jYW52YXMuaGVpZ2h0ID0gNzY4O1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuLy8gaW5zdGFudGlhdGUgZ2FtZVxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5jb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG5nYW1lc3RhZ2UudGlja2VyKCk7IiwiXG4vLyBwbGF5ZXIgY29udHJvbHNcbmZ1bmN0aW9uIENvbnRyb2xzKGdhbWUpe1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmRlZ3JlZXMgPSAwO1xuICB0aGlzLnN0YXRlID0ge1xuICAgIGxlZnQ6IHthY3RpdmU6IGZhbHNlfSxcbiAgICByaWdodDoge2FjdGl2ZTogZmFsc2V9XG4gIH1cbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcbiAgdGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheVwiKTtcbiAgdGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtbG9nb1wiKTtcbiAgdGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGUtYm94XCIpO1xuICB0aGlzLmdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtaW5mb1wiKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmVuYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5VXAgPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuICAgIHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcbiAgICB0aGlzLm92ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZChcImNsZWFyLWJhY2tncm91bmQtaW1hZ2VcIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbiAgICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sczsiLCJmdW5jdGlvbiBDdXJzb3IoY29udGV4dCkge1xuICB0aGlzLmRlZ3JlZXMgPSAtOTA7IFxuICB0aGlzLmN1cnNvclNwZWVkID0gNTtcbiAgdGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5jdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG59XG5cbkN1cnNvci5wcm90b3R5cGUubW92ZUN1cnNvciA9IGZ1bmN0aW9uKGRpcmVjdGlvbil7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBcImNsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICBcbiAgICBjYXNlIFwiY2Nsb2Nrd2lzZVwiOlxuICAgICAgdGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkN1cnNvci5wcm90b3R5cGUuY29sbGlzaW9uRGV0ZWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVE9ETyBzb21lIHNvcnQgb2YgaGl0Ym94IGxvZ2ljXG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCwgZGltX3gsIGRpbV95KXtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgudHJhbnNsYXRlKGRpbV94LzIsIGRpbV95LzIpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLC0zNSk7XG4gIC8vIGNvbnNvbGUubG9nKE1hdGguYWJzKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcbmltcG9ydCB7IEVBU1lfUEFUVEVSTlMsIE1FRElVTV9QQVRURVJOUywgSEFSRF9QQVRURVJOUyB9IGZyb20gJy4vcGF0dGVybnMnO1xuXG4vLyBpbml0aWFsaXplclxuZnVuY3Rpb24gR2FtZShjb250ZXh0KSB7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdHRoaXMuY3R4ID0gY29udGV4dDtcblx0dGhpcy5kaW1feCA9IDc2ODtcblx0dGhpcy5kaW1feSA9IDc2ODtcblx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMud2F2ZUludGVydmFsID0gMDtcblx0dGhpcy5wYXR0ZXJuU3RlcCA9IDA7XG5cdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0fSwgNTAwKTtcblx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHR9XG5cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKXtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSBcIm1lZGl1bVwiO1xuXHR9XG5cdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAzOS41ICogMTAwMCl7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gXCJoYXJkXCI7XG5cdH1cblxuXHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcCB9ID0gdGhpcztcblx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBkaW1feCwgZGltX3kpOyAvLyBjbGVhciBjYW52YXNcblxuXHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zYXZlKCk7XG5cblx0Ly8gQ3Vyc29yXG5cdHRoaXMuY3Vyc29yLmRyYXcoY3R4LCBkaW1feCwgZGltX3kpO1xuXG5cdHRoaXMuY3R4LnJlc3RvcmUoKTtcblxuXHQvLyBXYXZlc1xuXHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHR3YXZlLmRyYXcoY3R4KTtcblx0fSk7XG5cblx0Ly8gRWFydGggb3JiaXRcblx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdHRoaXMuY3R4LmFyYyhkaW1feCAvIDIsIGRpbV95IC8gMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuXHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHQvLyBXYXJwZ2F0ZVxuXHR0aGlzLmN0eC5kcmF3SW1hZ2UoXG5cdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0ZGltX3ggLyA0ICsgOTcuNSxcblx0XHRkaW1feSAvIDQgKyA5Ny41LFxuXHRcdGRpbV94IC8gNCxcblx0XHRkaW1feSAvIDRcblx0KTtcblxuXHQvLyBNYXBcblx0dGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZEN1cnNvciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblx0cmV0dXJuIHRoaXMuY3Vyc29yO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ29udHJvbHMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzKTtcblx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHRjb25zdCB7IGVsYXBzZWRUaW1lLCB3YXZlSW50ZXJ2YWwsIHBhdHRlcm4sIGRpZmZpY3VsdHkgfSA9IHRoaXM7XG5cblx0Ly8gbGF1bmNoIHdhdmUgZXZlcnkgeCBzZWNvbmRzXG5cdGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCB8fCB0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWwpIHtcblx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5XG5cdFx0XHQvLyBUT0RPIGNyZWF0ZSBuZXcgd2F2ZUludGVydmFsIGJhc2VkIG9uIGRpZmZpY3VsdHlcblx0XHRcdC8vIHRoaXMuZWxhcHNlZFRpbWUgPSBmcmFtZUludGVydmFsICsgMTtcblx0XHRcdC8vIHRoaXMud2F2ZUludGVydmFsID0gMTAgKiAxMDAwO1xuXHRcdFx0Ly8gdGhpcy5wYXR0ZXJuU3RlcCA9IDA7XG5cdFx0fVxuXHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBhdCBzZXQgaW50ZXJ2YWxzICgycylcblx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm5MaXN0LnNoaWZ0KCk7XG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4pO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0Ly8gdGhpcy5wYXR0ZXJuU3RlcCArPSAxO1xuXHR9XG5cdC8vIHRoaXMgc3R1ZmYgaGFwcGVucyByZWdhcmRsZXNzIG9mIHRpbWVyXG5cblx0Ly8gaW5jcmVtZW50IGVsYXBzZWRUaW1lXG5cdC8vIHRoaXMuZWxhcHNlZFRpbWUgKz0gZnJhbWVJbnRlcnZhbDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRsZXQgZ2FtZSA9IHRoaXM7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXHRsZXQgdGhldGEgPSBNYXRoLmFicyh0aGlzLmN1cnNvci5kZWdyZWVzICUgMzYwKTtcblx0Y29uc29sZS5sb2codGhldGEpO1xuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdFxuXHRcdGlmICh3YXZlLm1vdmUodGhldGEsIGdhbWUpKSB0aGlzLmdhbWVPdmVyKCk7XG5cdH0pO1xufTtcblxuLy8gdG9wIHJpZ2h0IHRpbWVyXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbih0aW1lKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuICAvLyB0aW1lLWxpbWl0XG4gIGxldCBjdXJUaW1lID0gdGltZTtcbiAgbGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gc2V0VGltZTtcblxuICAvLyBmcmFtZSBsaW1pdGVyXG4gIGlmICh0aW1lRGlmID49IGZyYW1lSW50ZXJ2YWwgJiYgIXRoaXMuZ2FtZS5pc0dhbWVPdmVyKXtcbiAgICB0aGlzLmdhbWUubG9naWMoZnJhbWVJbnRlcnZhbCk7XG4gICAgdGhpcy5nYW1lLmRyYXcoKTtcbiAgICB0aGlzLnNldFRpbWUgPSBjdXJUaW1lO1xuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcbn1cblxuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKT0+e1xuICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIGF1ZGlvLnBsYXkoKVxufSwgZmFsc2UpO1xuLy8gYXVkaW8ucGxheSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAgXVxuXHRdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcbiAgICBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcblx0XSxcblx0Ly8gW1xuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHQvLyBcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdXG5cdC8vIF1cbl07XG4iLCJmdW5jdGlvbiBXYWxsKG9jdGFudCkge1xuXHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zcGVlZCA9IDU7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHR0aGlzLnNwcml0ZS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSA1MDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsyNDcuNSwgMjkyLjVdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTUwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC01MDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSA1MDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24odGhldGEsIGdhbWUpIHtcblx0Y29uc3QgeyBoaXRib3gsIGhpdGJveDIgfSA9IHRoaXM7XG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXHRsZXQgcG9zeCA9IHRoaXMucG9zWzBdO1xuXHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHBvc3gpICoqIDIgKyAoMzg0IC0gcG9zeSkgKiogMik7XG5cblx0Ly8gVE9ETyBoaXRib3ggbG9naWMgaXMgYWN0dWFsbHkgY29kZWQgaGVyZSwgcmV0dXJuIHRydWUgaWYgZ2FtZU92ZXJcblx0Ly8gbWF5IG5lZWQgdG8gcGFzcyBkb3duIGRlZ3JlZXMgZnJvbSBjdXJzb3JcblxuICAvLyBpZiAodGhpcy5vY3RhbnQgPT09IDcpe1xuICAvLyAgIGNvbnNvbGUubG9nKGRpc3RhbmNlKTtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGV0YSk7XG4gIC8vIH1cbiAgXG5cdGlmICh0aGlzLm9jdGFudCA9PT0gMCB8fCB0aGlzLm9jdGFudCA9PT0gMiB8fCB0aGlzLm9jdGFudCA9PT0gNCB8fCB0aGlzLm9jdGFudCA9PT0gNikge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDEyMFxuXHRcdCl7XG4gICAgICBjb25zb2xlLmxvZyhgYW5nbGUgaXMgJHt0aGV0YX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBkaXN0YW5jZSBpcyAke2Rpc3RhbmNlfWApO1xuICAgICAgY29uc29sZS5sb2coYG9jdGFudCBpcyAke3RoaXMub2N0YW50fWApO1xuICAgICAgY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHRoaXMub2N0YW50ID09PSAxIHx8IHRoaXMub2N0YW50ID09PSAzIHx8IHRoaXMub2N0YW50ID09PSA1IHx8IHRoaXMub2N0YW50ID09PSA3KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSAxNDAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDE5MFxuXHRcdCl7XG4gICAgICBjb25zb2xlLmxvZyhgYW5nbGUgaXMgJHt0aGV0YX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBkaXN0YW5jZSBpcyAke2Rpc3RhbmNlfWApO1xuICAgICAgY29uc29sZS5sb2coYG9jdGFudCBpcyAke3RoaXMub2N0YW50fWApO1xuICAgICAgY29uc29sZS5sb2coXCJnYW1lb3ZlclwiKTtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG5cblx0Ly8gbGV0IHJhZGl1cyA9IDUwO1xuXHQvLyAvLyBjdXJzb3IgZGVmYXVsdCA9ICg0ODkgLCAzODQpXG5cdC8vIC8vIGxldCBjdXJYID0gcmFkaXVzICogTWF0aC5zaW4odGhldGEpO1xuXHQvLyAvLyBsZXQgY3VyWSA9IHJhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcblx0Ly8gbGV0IGN1clggPSAoKDM2OCsxMDUpKk1hdGguY29zKHRoZXRhKSlcblx0Ly8gbGV0IGN1clkgPSAoLTEqKDM2OCsxMDUpKk1hdGguc2luKHRoZXRhKSlcblx0Ly8gbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChjdXJYIC0gcG9zeCkgKiogMiArIChjdXJZIC0gcG9zeSkgKiogMik7XG5cblx0Ly8gaWYgKGRpc3RhbmNlIDwgMTAwKXtcblx0Ly8gICBkZWJ1Z2dlclxuXHQvLyB9XG5cblx0bGV0IGR4ID0gMzg0IC0gcG9zeDtcblx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRpZiAoZHggPiAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHR0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cdGlmIChkeSA+IDApIHtcblx0XHR0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRsZXQgeCA9IHBvc1swXTtcblx0bGV0IHkgPSBwb3NbMV07XG5cdGlmICh0aGlzLnNjYWxlID4gMS4wMSkgdGhpcy5zY2FsZSAtPSAwLjA0O1xuXG5cdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCwgeSArIHRoaXMueW9mZnNldCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKFxuXHRcdHRoaXMuc3ByaXRlLFxuXHRcdDEwMCAvIDIsXG5cdFx0MTAwIC8gMixcblx0XHQxMDAsXG5cdFx0MTAwXG5cdFx0Ly8gMTAwICogdGhpcy5zY2FsZSxcblx0XHQvLyAxMDAgKiB0aGlzLnNjYWxlXG5cdCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgteCAtIHRoaXMueG9mZnNldCwgLXkgLSB0aGlzLnlvZmZzZXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiXG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuZnVuY3Rpb24gV2F2ZShwYXR0ZXJuKSB7XG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cblx0dGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuICB0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcblx0dGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoKTtcbn1cblxuV2F2ZS5wcm90b3R5cGUuYWRkV2FsbHMgPSBmdW5jdGlvbihkaWZmaWN1bHR5KSB7XG4gIGxldCB3YWxscyA9IFtdO1xuICBjb25zdCB7cGF0dGVybn0gPSB0aGlzO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0aWYgKHBhdHRlcm5baV0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwoaSk7XG5cdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YWxscy5wdXNoKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB3YWxscztcbn07XG5cbldhdmUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSwgZ2FtZSkge1xuXHQvLyBUT0RPIGl0ZXJhdGUgdGhydSBlYWNoIHdhbGwgYW5kIHNldCBuZXcgY29vcmRpbmF0ZXMsIG1vdmVtZW50IGFsb3dlZCBiYXNlZCBvbiBlbGFwc2VkIHRpbWVcblx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdC8vIGFjdHVhbCBsb2dpYyBpbiB3YWxscy5qc1xuXHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy53YWxsc1tpXS5tb3ZlKHRoZXRhLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==