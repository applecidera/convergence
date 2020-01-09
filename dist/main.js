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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJkZWdyZWVzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsIm92ZXJsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsInBhdHRlcm5TdGVwIiwicGF0dGVybkxpc3QiLCJkaWZmaWN1bHR5IiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJmb3JFYWNoIiwid2F2ZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsInBhdHRlcm4iLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJ4MSIsInBvcyIsInkxIiwiZGlzdGFuY2UiLCJzcXJ0IiwidGhldGEiLCJhYnMiLCJjb25zb2xlIiwibG9nIiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwiZnJhbWVSYXRlIiwic2V0VGltZSIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzcGVlZCIsInNjYWxlIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWI7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJ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LENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsRUFLQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTEQsQ0FENEIsRUFRM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FSMkIsRUFXM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FYMkIsQ0FBdEIsQyxDQWdCUDs7QUFDTyxJQUFNRyxlQUFlLEdBQUcsQ0FDOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsQ0FEOEIsRUFPOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsQ0FQOEIsRUFhOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFB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LElBQUksQ0FBQzVFLFNBQUwsQ0FBZWtCLElBQWYsR0FBc0IsVUFBUzVDLEdBQVQsRUFBYztBQUNuQyxPQUFLLElBQUkyRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3pCLFFBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzFCLFdBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjL0QsSUFBZCxDQUFtQjVDLEdBQW5CO0FBQ0Q7QUFDSDtBQUNELENBTkQ7O0FBUWVzRyxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5cblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gNzY4O1xuY2FudmFzLmhlaWdodCA9IDc2ODtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbi8vIGluc3RhbnRpYXRlIGdhbWVcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuZ2FtZXN0YWdlLnRpY2tlcigpOyIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scyhnYW1lKXtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXlcIik7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRpdGxlLWJveFwiKTtcbiAgdGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWluZm9cIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5zdGFydEdhbWUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgICB0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG4gICAgdGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoXCJjbGVhci1iYWNrZ3JvdW5kLWltYWdlXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gICAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB9XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1pblwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gLTkwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDU7XG4gIHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRPRE8gc29tZSBzb3J0IG9mIGhpdGJveCBsb2dpY1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgsIGRpbV94LCBkaW1feSl7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnRyYW5zbGF0ZShkaW1feC8yLCBkaW1feS8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwtMzUpO1xuICAvLyBjb25zb2xlLmxvZyhNYXRoLmFicyh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gaW5pdGlhbGl6ZXJcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLndhdmVJbnRlcnZhbCA9IDA7XG5cdHRoaXMucGF0dGVyblN0ZXAgPSAwO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5nYW1lU3RhdGUgPSBmYWxzZTtcblx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5sb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBjb250cm9scywgY3Vyc29yIH0gPSB0aGlzO1xuXHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRjdXJzb3IubW92ZUN1cnNvcignY2Nsb2Nrd2lzZScpO1xuXHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0fVxuXG5cdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAxOS41ICogMTAwMCl7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gXCJtZWRpdW1cIjtcblx0fVxuXHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMzkuNSAqIDEwMDApe1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IFwiaGFyZFwiO1xuXHR9XG5cblx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5jbGVhclJlY3QoMCwgMCwgZGltX3gsIGRpbV95KTsgLy8gY2xlYXIgY2FudmFzXG5cblx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0Y3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc2F2ZSgpO1xuXG5cdC8vIEN1cnNvclxuXHR0aGlzLmN1cnNvci5kcmF3KGN0eCwgZGltX3gsIGRpbV95KTtcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBlbGFwc2VkVGltZSwgd2F2ZUludGVydmFsLCBwYXR0ZXJuLCBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHwgdGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsKSB7XG5cdFx0Ly8gaWYgcGF0dGVybkxpc3QgaXMgZW1wdHksIGFkZCBtb3JlIHBhdHRlcm5zIHRvIHBhdHRlcm5MaXN0XG5cdFx0aWYgKHRoaXMucGF0dGVybkxpc3QubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcblx0XHRcdFx0Y2FzZSAnZWFzeSc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFQVNZX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21lZGl1bSc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0TUVESVVNX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1FRElVTV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAuNzU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eVxuXHRcdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0XHQvLyB0aGlzLmVsYXBzZWRUaW1lID0gZnJhbWVJbnRlcnZhbCArIDE7XG5cdFx0XHQvLyB0aGlzLndhdmVJbnRlcnZhbCA9IDEwICogMTAwMDtcblx0XHRcdC8vIHRoaXMucGF0dGVyblN0ZXAgPSAwO1xuXHRcdH1cblx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuKTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdC8vIHRoaXMucGF0dGVyblN0ZXAgKz0gMTtcblx0fVxuXHQvLyB0aGlzIHN0dWZmIGhhcHBlbnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXG5cdC8vIGluY3JlbWVudCBlbGFwc2VkVGltZVxuXHQvLyB0aGlzLmVsYXBzZWRUaW1lICs9IGZyYW1lSW50ZXJ2YWw7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5yZW1vdmVXYXZlID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0bGV0IGdhbWUgPSB0aGlzO1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHR0aGlzLnJlbW92ZVdhdmUoKTtcblx0bGV0IHRoZXRhID0gTWF0aC5hYnModGhpcy5jdXJzb3IuZGVncmVlcyAlIDM2MCk7XG5cdGNvbnNvbGUubG9nKHRoZXRhKTtcblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRcblx0XHRpZiAod2F2ZS5tb3ZlKHRoZXRhLCBnYW1lKSkgdGhpcy5nYW1lT3ZlcigpO1xuXHR9KTtcbn07XG5cbi8vIHRvcCByaWdodCB0aW1lclxuR2FtZS5wcm90b3R5cGUudGltZXJDb3VudGVyID0gZnVuY3Rpb24odGltZUVsYXBzZWQpIHtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRsZXQgcm91bmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0dGhpcy50aW1lclswXS5pbm5lckhUTUwgPSByb3VuZGVkVGltZS50b1N0cmluZygpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuc3RhcnROZXdHYW1lID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gb3B0aW9uIHRvIHBsYXkgYWdhaW4sIGNhbGxzIHN0YXJ0IG5ldyBnYW1lXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24odGltZSl7XG4gIGNvbnN0IHtmcmFtZUludGVydmFsLCBzZXRUaW1lfSA9IHRoaXM7XG5cbiAgLy8gdGltZS1saW1pdFxuICBsZXQgY3VyVGltZSA9IHRpbWU7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsICYmICF0aGlzLmdhbWUuaXNHYW1lT3Zlcil7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFnZTsiLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCBdXG5cdF0sXG4gIFsgWyAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxIF0sXG4gICAgWyAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxIF0gXG4gIF0sXG4gIFsgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sIFxuICAgIFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdIFxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF1cblx0XVxuXTtcblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgKDEwIHNlY29uZHMpXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcblx0W1xuICAgIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSBdLFxuXHRdLFxuXHQvLyBbXG5cdC8vIFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdC8vIFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdC8vIFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxIF1cblx0Ly8gXVxuXTtcbiIsImZ1bmN0aW9uIFdhbGwob2N0YW50KSB7XG5cdHRoaXMub2N0YW50ID0gb2N0YW50O1xuXHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLnNwZWVkID0gNTtcblx0dGhpcy5zY2FsZSA9IDQ7XG5cdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcbn1cblxuV2FsbC5wcm90b3R5cGUub2N0YW50TG9naWMgPSBmdW5jdGlvbihvY3RhbnQpIHtcblx0c3dpdGNoIChvY3RhbnQpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxNTcuNSwgMjAyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDUwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIwMi41LCAyNDcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWzI0Ny41LCAyOTIuNV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtNTA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTUwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNjpcblx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA3OlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDUwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbldhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih0aGV0YSwgZ2FtZSkge1xuXHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG5cdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblxuXHQvLyBUT0RPIGhpdGJveCBsb2dpYyBpcyBhY3R1YWxseSBjb2RlZCBoZXJlLCByZXR1cm4gdHJ1ZSBpZiBnYW1lT3ZlclxuXHQvLyBtYXkgbmVlZCB0byBwYXNzIGRvd24gZGVncmVlcyBmcm9tIGN1cnNvclxuXG4gIC8vIGlmICh0aGlzLm9jdGFudCA9PT0gNyl7XG4gIC8vICAgY29uc29sZS5sb2coZGlzdGFuY2UpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoZXRhKTtcbiAgLy8gfVxuICBcblx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA0IHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhldGEgPiBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0KXtcbiAgICAgIGNvbnNvbGUubG9nKGBhbmdsZSBpcyAke3RoZXRhfWApO1xuICAgICAgY29uc29sZS5sb2coYGRpc3RhbmNlIGlzICR7ZGlzdGFuY2V9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgb2N0YW50IGlzICR7dGhpcy5vY3RhbnR9YCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdhbWVvdmVyXCIpO1xuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAodGhpcy5vY3RhbnQgPT09IDEgfHwgdGhpcy5vY3RhbnQgPT09IDMgfHwgdGhpcy5vY3RhbnQgPT09IDUgfHwgdGhpcy5vY3RhbnQgPT09IDcpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDE0MCAmJlxuXHRcdFx0ZGlzdGFuY2UgPD0gMTkwXG5cdFx0KXtcbiAgICAgIGNvbnNvbGUubG9nKGBhbmdsZSBpcyAke3RoZXRhfWApO1xuICAgICAgY29uc29sZS5sb2coYGRpc3RhbmNlIGlzICR7ZGlzdGFuY2V9YCk7XG4gICAgICBjb25zb2xlLmxvZyhgb2N0YW50IGlzICR7dGhpcy5vY3RhbnR9YCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdhbWVvdmVyXCIpO1xuICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcblxuXHQvLyBsZXQgcmFkaXVzID0gNTA7XG5cdC8vIC8vIGN1cnNvciBkZWZhdWx0ID0gKDQ4OSAsIDM4NClcblx0Ly8gLy8gbGV0IGN1clggPSByYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XG5cdC8vIC8vIGxldCBjdXJZID0gcmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xuXHQvLyBsZXQgY3VyWCA9ICgoMzY4KzEwNSkqTWF0aC5jb3ModGhldGEpKVxuXHQvLyBsZXQgY3VyWSA9ICgtMSooMzY4KzEwNSkqTWF0aC5zaW4odGhldGEpKVxuXHQvLyBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGN1clggLSBwb3N4KSAqKiAyICsgKGN1clkgLSBwb3N5KSAqKiAyKTtcblxuXHQvLyBpZiAoZGlzdGFuY2UgPCAxMDApe1xuXHQvLyAgIGRlYnVnZ2VyXG5cdC8vIH1cblxuXHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdGlmIChkeCA+IDApIHtcblx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblx0aWYgKGR5ID4gMCkge1xuXHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdGxldCB4ID0gcG9zWzBdO1xuXHRsZXQgeSA9IHBvc1sxXTtcblx0aWYgKHRoaXMuc2NhbGUgPiAxLjAxKSB0aGlzLnNjYWxlIC09IDAuMDQ7XG5cblx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0LCB5ICsgdGhpcy55b2Zmc2V0KTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC5kcmF3SW1hZ2UoXG5cdFx0dGhpcy5zcHJpdGUsXG5cdFx0MTAwIC8gMixcblx0XHQxMDAgLyAyLFxuXHRcdDEwMCxcblx0XHQxMDBcblx0XHQvLyAxMDAgKiB0aGlzLnNjYWxlLFxuXHRcdC8vIDEwMCAqIHRoaXMuc2NhbGVcblx0KTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHgudHJhbnNsYXRlKC14IC0gdGhpcy54b2Zmc2V0LCAteSAtIHRoaXMueW9mZnNldCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5mdW5jdGlvbiBXYXZlKHBhdHRlcm4pIHtcbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuXHR0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLnN1YndhdmVUaW1lciA9IDA7XG4gIHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHR0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscygpO1xufVxuXG5XYXZlLnByb3RvdHlwZS5hZGRXYWxscyA9IGZ1bmN0aW9uKGRpZmZpY3VsdHkpIHtcbiAgbGV0IHdhbGxzID0gW107XG4gIGNvbnN0IHtwYXR0ZXJufSA9IHRoaXM7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRpZiAocGF0dGVybltpXSA9PT0gMSkge1xuXHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChpKTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHRoZXRhLCBnYW1lKSB7XG5cdC8vIFRPRE8gaXRlcmF0ZSB0aHJ1IGVhY2ggd2FsbCBhbmQgc2V0IG5ldyBjb29yZGluYXRlcywgbW92ZW1lbnQgYWxvd2VkIGJhc2VkIG9uIGVsYXBzZWQgdGltZVxuXHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0Ly8gYWN0dWFsIGxvZ2ljIGluIHdhbGxzLmpzXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUodGhldGEsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2F2ZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9