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
          this.subWaveInterval = 2;
          break;

        case 'medium':
          this.patternList = this.patternList.concat(_patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["MEDIUM_PATTERNS"].length)]);
          this.subWaveInterval = 1;
          break;

        case 'hard':
          this.patternList = this.patternList.concat(_patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"][Math.floor(Math.random() * _patterns__WEBPACK_IMPORTED_MODULE_3__["HARD_PATTERNS"].length)]);
          this.subWaveInterval = 0.75;
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
  this.speed = 4;
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

Wall.prototype.move = function (cursor, game) {
  var hitbox = this.hitbox,
      hitbox2 = this.hitbox2;
  var gameOver = false;
  var posx = this.pos[0];
  var posy = this.pos[1];
  var distance = Math.sqrt(Math.pow(384 - posx, 2) + Math.pow(384 - posy, 2)); // TODO hitbox logic is actually coded here, return true if gameOver
  // may need to pass down degrees from cursor
  // octanct hit box detection

  var theta = Math.abs(cursor.degrees % 360); // if (this.octant === 7){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsInBhdHRlcm5TdGVwIiwicGF0dGVybkxpc3QiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsInBhdHRlcm4iLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJ4MSIsInBvcyIsInkxIiwiZGlzdGFuY2UiLCJzcXJ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzcGVlZCIsInNjYWxlIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInBvc3giLCJwb3N5IiwidGhldGEiLCJhYnMiLCJjb25zb2xlIiwibG9nIiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJ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RSxTQUFMLENBQWVrQixJQUFmLEdBQXNCLFVBQVM1QyxHQUFULEVBQWM7QUFDbkMsT0FBSyxJQUFJMkcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN6QixRQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMxQixXQUFLQyxLQUFMLENBQVdELENBQVgsRUFBYy9ELElBQWQsQ0FBbUI1QyxHQUFuQjtBQUNEO0FBQ0g7QUFDRCxDQU5EOztBQVFlc0csbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuXG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbmNhbnZhcy53aWR0aCA9IDc2ODtcbmNhbnZhcy5oZWlnaHQgPSA3Njg7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZGVncmVlcyA9IDA7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgdGhpcy5nYW1lLmdhbWVPdmVyKCk7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IC05MDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbiAgLy8gY29uc29sZS5sb2coTWF0aC5hYnModGhpcy5kZWdyZWVzICUgMzYwKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy53YXZlSW50ZXJ2YWwgPSAwO1xuXHR0aGlzLnBhdHRlcm5TdGVwID0gMDtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMuZ2FtZVN0YXRlID0gZmFsc2U7XG5cdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdHRoaXMud2FycEdhdGUxLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG5cdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdHRoaXMud2FycEdhdGUgPSBbIHRoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTMgXTtcblx0dGhpcy5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5cdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHR0aGlzLndhcnBHYXRlSW5kZXggKz0gMTtcblx0XHRpZiAodGhpcy53YXJwR2F0ZUluZGV4ID09PSAzKSB0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR9LCA1MDApO1xuXHR0aGlzLnRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZXInKTtcbn1cblxuR2FtZS5wcm90b3R5cGUubG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdH1cblxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApe1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IFwibWVkaXVtXCI7XG5cdH1cblx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDM5LjUgKiAxMDAwKXtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSBcImhhcmRcIjtcblx0fVxuXG5cdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSk7XG5cblx0dGhpcy5jdHgucmVzdG9yZSgpO1xuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZWxhcHNlZFRpbWUsIHdhdmVJbnRlcnZhbCwgcGF0dGVybiwgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0aWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8IHRoaXMudG90YWxUaW1lRWxhcHNlZCA9PT0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eVxuXHRcdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0XHQvLyB0aGlzLmVsYXBzZWRUaW1lID0gZnJhbWVJbnRlcnZhbCArIDE7XG5cdFx0XHQvLyB0aGlzLndhdmVJbnRlcnZhbCA9IDEwICogMTAwMDtcblx0XHRcdC8vIHRoaXMucGF0dGVyblN0ZXAgPSAwO1xuXHRcdH1cblx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuKTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdC8vIHRoaXMucGF0dGVyblN0ZXAgKz0gMTtcblx0fVxuXHQvLyB0aGlzIHN0dWZmIGhhcHBlbnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXG5cdC8vIGluY3JlbWVudCBlbGFwc2VkVGltZVxuXHQvLyB0aGlzLmVsYXBzZWRUaW1lICs9IGZyYW1lSW50ZXJ2YWw7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5yZW1vdmVXYXZlID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0bGV0IGdhbWUgPSB0aGlzO1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHR0aGlzLnJlbW92ZVdhdmUoKTtcblxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUodGhpcy5jdXJzb3IsIGdhbWUpKSB0aGlzLmdhbWVPdmVyKCk7XG5cdH0pO1xufTtcblxuLy8gdG9wIHJpZ2h0IHRpbWVyXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBvcHRpb24gdG8gcGxheSBhZ2FpbiwgY2FsbHMgc3RhcnQgbmV3IGdhbWVcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbih0aW1lKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuXG4gIC8vIHRpbWUtbGltaXRcbiAgbGV0IGN1clRpbWUgPSB0aW1lO1xuICBsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG4gIC8vIGZyYW1lIGxpbWl0ZXJcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCAmJiAhdGhpcy5nYW1lLmlzR2FtZU92ZXIpe1xuICAgIHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcbiAgICB0aGlzLmdhbWUuZHJhdygpO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7IiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAgXVxuXHRdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzICgxMCBzZWNvbmRzKVxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcbiAgICBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEgXSxcblx0XSxcblx0Ly8gW1xuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHQvLyBcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHQvLyBcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdXG5cdC8vIF1cbl07XG4iLCJmdW5jdGlvbiBXYWxsKG9jdGFudCkge1xuXHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zcGVlZCA9IDQ7XG5cdHRoaXMuc2NhbGUgPSA0O1xuXHR0aGlzLnNwcml0ZS5zcmMgPVxuXHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG59XG5cbldhbGwucHJvdG90eXBlLm9jdGFudExvZ2ljID0gZnVuY3Rpb24ob2N0YW50KSB7XG5cdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSA1MDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsyNDcuNSwgMjkyLjVdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTUwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC01MDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSA1MDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oY3Vyc29yLCBnYW1lKSB7XG5cdGNvbnN0IHsgaGl0Ym94LCBoaXRib3gyIH0gPSB0aGlzO1xuXHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0bGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcblx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSBwb3N4KSAqKiAyICsgKDM4NCAtIHBvc3kpICoqIDIpO1xuXG5cdC8vIFRPRE8gaGl0Ym94IGxvZ2ljIGlzIGFjdHVhbGx5IGNvZGVkIGhlcmUsIHJldHVybiB0cnVlIGlmIGdhbWVPdmVyXG5cdC8vIG1heSBuZWVkIHRvIHBhc3MgZG93biBkZWdyZWVzIGZyb20gY3Vyc29yXG5cblx0Ly8gb2N0YW5jdCBoaXQgYm94IGRldGVjdGlvblxuICBsZXQgdGhldGEgPSBNYXRoLmFicyhjdXJzb3IuZGVncmVlcyAlIDM2MCk7XG5cbiAgLy8gaWYgKHRoaXMub2N0YW50ID09PSA3KXtcbiAgLy8gICBjb25zb2xlLmxvZyhkaXN0YW5jZSk7XG4gIC8vICAgY29uc29sZS5sb2codGhldGEpO1xuICAvLyB9XG4gIFxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDQgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHQpe1xuICAgICAgY29uc29sZS5sb2coYGFuZ2xlIGlzICR7dGhldGF9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgZGlzdGFuY2UgaXMgJHtkaXN0YW5jZX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBvY3RhbnQgaXMgJHt0aGlzLm9jdGFudH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZW92ZXJcIik7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmICh0aGlzLm9jdGFudCA9PT0gMSB8fCB0aGlzLm9jdGFudCA9PT0gMyB8fCB0aGlzLm9jdGFudCA9PT0gNSB8fCB0aGlzLm9jdGFudCA9PT0gNykge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gMTQwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxOTBcblx0XHQpe1xuICAgICAgY29uc29sZS5sb2coYGFuZ2xlIGlzICR7dGhldGF9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgZGlzdGFuY2UgaXMgJHtkaXN0YW5jZX1gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBvY3RhbnQgaXMgJHt0aGlzLm9jdGFudH1gKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZW92ZXJcIik7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuXG5cdC8vIGxldCByYWRpdXMgPSA1MDtcblx0Ly8gLy8gY3Vyc29yIGRlZmF1bHQgPSAoNDg5ICwgMzg0KVxuXHQvLyAvLyBsZXQgY3VyWCA9IHJhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcblx0Ly8gLy8gbGV0IGN1clkgPSByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSk7XG5cdC8vIGxldCBjdXJYID0gKCgzNjgrMTA1KSpNYXRoLmNvcyh0aGV0YSkpXG5cdC8vIGxldCBjdXJZID0gKC0xKigzNjgrMTA1KSpNYXRoLnNpbih0aGV0YSkpXG5cdC8vIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoY3VyWCAtIHBvc3gpICoqIDIgKyAoY3VyWSAtIHBvc3kpICoqIDIpO1xuXG5cdC8vIGlmIChkaXN0YW5jZSA8IDEwMCl7XG5cdC8vICAgZGVidWdnZXJcblx0Ly8gfVxuXG5cdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcblx0aWYgKGR4ID4gMCkge1xuXHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHggPCAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXHRpZiAoZHkgPiAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHR0aGlzLnBvc1sxXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2FsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0bGV0IHggPSBwb3NbMF07XG5cdGxldCB5ID0gcG9zWzFdO1xuXHRpZiAodGhpcy5zY2FsZSA+IDEuMDEpIHRoaXMuc2NhbGUgLT0gMC4wNDtcblxuXHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQsIHkgKyB0aGlzLnlvZmZzZXQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LmRyYXdJbWFnZShcblx0XHR0aGlzLnNwcml0ZSxcblx0XHQxMDAgLyAyLFxuXHRcdDEwMCAvIDIsXG5cdFx0MTAwLFxuXHRcdDEwMFxuXHRcdC8vIDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0Ly8gMTAwICogdGhpcy5zY2FsZVxuXHQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLXggLSB0aGlzLnhvZmZzZXQsIC15IC0gdGhpcy55b2Zmc2V0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiIsIlxuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxscyc7XG5cbmZ1bmN0aW9uIFdhdmUocGF0dGVybikge1xuICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuXG5cdHRoaXMuZW5kID0gZmFsc2U7XG4gIHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcbiAgdGhpcy5jdXJyZW50U3Vid2F2ZSA9IDA7XG5cdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKCk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdGlmIChwYXR0ZXJuW2ldID09PSAxKSB7XG5cdFx0XHRsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKGkpO1xuXHRcdFx0d2FsbHMucHVzaChuZXdXYWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd2FsbHM7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oY3Vyc29yLCBnYW1lKSB7XG5cdC8vIFRPRE8gaXRlcmF0ZSB0aHJ1IGVhY2ggd2FsbCBhbmQgc2V0IG5ldyBjb29yZGluYXRlcywgbW92ZW1lbnQgYWxvd2VkIGJhc2VkIG9uIGVsYXBzZWQgdGltZVxuXHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0Ly8gYWN0dWFsIGxvZ2ljIGluIHdhbGxzLmpzXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUoY3Vyc29yLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==