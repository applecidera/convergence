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
  if (!this.game.newHighScore) {
    document.addEventListener('keydown', this.startGame);
  }

  ;
  document.removeEventListener('keydown', this.keyDown);
  document.removeEventListener('keyup', this.keyUp);
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
    this.game.startNewGame();
    this.overlay[0].classList.add("clear-background-image");
    this.bigLogo[0].classList.remove("start-game-logo-fade-in");
    this.bigLogo[0].classList.add("start-game-logo-fade-out");
    this.smallLogo[0].classList.remove("title-box-fade-out");
    this.smallLogo[0].classList.add("title-box-fade-in");
    this.gameInfo[0].classList.remove("start-game-info-fade-in");
    this.gameInfo[0].classList.add("start-game-info-fade-out");
    this.highScoreList[0].classList.add("hidden");
    this.enablePlayerControls();
  }
};

Controls.prototype.gameOver = function () {
  this.game.gameOver();
  this.bigLogo[0].classList.remove("start-game-logo-fade-out");
  this.bigLogo[0].classList.add("start-game-logo-fade-in");
  this.smallLogo[0].classList.remove("title-box-fade-in");
  this.smallLogo[0].classList.add("title-box-fade-out");
  this.gameInfo[0].classList.remove("start-game-info-fade-out");
  this.gameInfo[0].classList.add("start-game-info-fade-in");
  this.highScoreList[0].classList.remove("hidden");
  this.disablePlayerControls();
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
  this.highScores = [["Administrator", 28.79], ["Zekemeister", 23.45], ["TheJonBae", 3.33]];
  this.highScoreBox = document.getElementsByClassName("high-score-form");
  this.highScoreInputField = document.getElementsByClassName("high-score-input-field");
  document.addEventListener('submit', this.addHighScore.bind(this));
  this.firstPlaceName = document.getElementsByClassName("first-place-name");
  this.firstPlaceScore = document.getElementsByClassName("first-place-score");
  this.secondPlaceName = document.getElementsByClassName("second-place-name");
  this.secondPlaceScore = document.getElementsByClassName("second-place-score");
  this.thirdPlaceName = document.getElementsByClassName("third-place-name");
  this.thirdPlaceScore = document.getElementsByClassName("third-place-score");
  this.isGameOver = true;
  this.totalTimeElapsed = 0;
  this.subwaveTimer = 0;
  this.subWaveInterval = 2;
  this.waves = [];
  this.patternList = [];
  this.difficulty = 'easy';
  this.rotation = 0;
  this.rotationSpeed = 0.1;
  this.newHighScore = false;
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
  // TODO check high score to display name prompt
  // if true, on form submit, set highscore = false and recall gameOver()
  var survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;
  var firstPlace = this.highScores[0];
  var secondPlace = this.highScores[1];
  var thirdPlace = this.highScores[2];
  this.highScoreBox[0].classList.remove("hidden");
  this.highScoreBox[0].classList.add("hidden");

  if (survivedTime > firstPlace[1] || survivedTime > secondPlace[1] || survivedTime > thirdPlace[1]) {
    this.newHighScore = true;
    this.highScoreBox[0].classList.remove("hidden");
    this.highScoreInputField[0].focus();
    this.highScoreInputField[0].select();
  }

  this.deadShip = true;
  this.isGameOver = true;
};

Game.prototype.addHighScore = function (event) {
  event.preventDefault();
  var survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;
  var highScoreInputField = document.getElementsByClassName("high-score-input-field")[0];
  var highScoreName = highScoreInputField.value;
  var newPlayer = [highScoreName, survivedTime];
  var firstPlace = this.highScores[0];
  var secondPlace = this.highScores[1];
  var thirdPlace = this.highScores[2];

  if (survivedTime > firstPlace[1]) {
    thirdPlace = secondPlace;
    secondPlace = firstPlace;
    firstPlace = newPlayer;
  } else if (survivedTime > secondPlace[1]) {
    thirdPlace = secondPlace;
    secondPlace = newPlayer;
  } else {
    thirdPlace = newPlayer;
  }

  this.highScores = [firstPlace, secondPlace, thirdPlace]; // TODO move into own function
  // reassign top survivors
  // debugger

  this.firstPlaceName[0].innerText = "First: ".concat(firstPlace[0]);
  this.firstPlaceScore[0].innerText = firstPlace[1].toString();
  this.secondPlaceName[0].innerText = "Second: ".concat(secondPlace[0]);
  this.secondPlaceScore[0].innerText = secondPlace[1].toString();
  this.thirdPlaceName[0].innerText = "Third: ".concat(thirdPlace[0]);
  this.thirdPlaceScore[0].innerText = thirdPlace[1].toString(); // database logic goes here
  // clear entered name and reset game logic

  highScoreInputField.value = "";
  this.highScoreBox[0].classList.add("hidden");
  this.newHighScore = false;
  this.totalTimeElapsed = 0;
  this.controls.gameOver();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJzdGF0ZSIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInN0YXJ0R2FtZSIsImdhbWVPdmVyIiwiaGlnaFNjb3JlTGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvdmVybGF5IiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld0hpZ2hTY29yZSIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwiZGVhZEN1cnNvciIsImV4cGxvc2lvbiIsImV4cGxvc2lvbkZyYW1lIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImRyYXciLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImV4cGxvc2lvbkFuaW1hdGlvbiIsIngxIiwiRVhQTE9TSU9OX1BPU0lUSU9OIiwieTEiLCJ4MiIsInkyIiwibW9kdWxlIiwiZXhwb3J0cyIsImRpbV94IiwiZGltX3kiLCJoaWdoU2NvcmVzIiwiaGlnaFNjb3JlQm94IiwiaGlnaFNjb3JlSW5wdXRGaWVsZCIsImFkZEhpZ2hTY29yZSIsImZpcnN0UGxhY2VOYW1lIiwiZmlyc3RQbGFjZVNjb3JlIiwic2Vjb25kUGxhY2VOYW1lIiwic2Vjb25kUGxhY2VTY29yZSIsInRoaXJkUGxhY2VOYW1lIiwidGhpcmRQbGFjZVNjb3JlIiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJhZGRDdXJzb3IiLCJhZGRDb250cm9scyIsImFkZFdhdmUiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlV2F2ZSIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwibW92ZSIsInRpbWVFbGFwc2VkIiwicm91bmRlZFRpbWUiLCJyb3VuZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwic3Vydml2ZWRUaW1lIiwiZmlyc3RQbGFjZSIsInNlY29uZFBsYWNlIiwidGhpcmRQbGFjZSIsImZvY3VzIiwic2VsZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhpZ2hTY29yZU5hbWUiLCJ2YWx1ZSIsIm5ld1BsYXllciIsImlubmVyVGV4dCIsImZyYW1lUmF0ZSIsInNldFRpbWUiLCJsb2FkU2NyZWVuIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXVkaW8iLCJBdWRpbyIsImN1cnJlbnRUaW1lIiwicGxheSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzY2FsZSIsInNwZWVkIiwiZGVzY2FsZUZhY3RvciIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImhpdGJveCIsImhpdGJveDIiLCJ0aGV0YSIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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Q0FGRCxFQUdHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FISCxDQUQ0QixFQU0zQixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRixFQUdFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRixDQU4yQixFQVczQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQVgyQixFQWMzQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQWQyQixFQWlCM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBC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RUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEgsRUFJRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkgsQ0FENEIsRUFPNUIsQ0FDRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREgsRUFFRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkgsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkgsRUFLRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTEgsRUFNQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFX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QVA7QUFDQSxDQVhEOztBQWFBdUcsSUFBSSxDQUFDaEcsU0FBTCxDQUFlcUIsSUFBZixHQUFzQixVQUFTL0MsR0FBVCxFQUFjO0FBQ25DLE9BQUssSUFBSStILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDekIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNoRixJQUFkLENBQW1CL0MsR0FBbkI7QUFDRDtBQUNIO0FBQ0QsQ0FORDs7QUFRZTBILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMuaGlnaFNjb3JlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtYm94Jyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuXG4gIGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgfTsgXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuICBcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5VXAgPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgICB0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICB0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gMjcwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5leHBsb3Npb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xuICB0aGlzLmRlYWRDdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX2dyZWVuX3NtYWxsXzIucG5nJztcbiAgdGhpcy5leHBsb3Npb24uc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9leHBsb3Npb25fc3ByaXRlc2hlZXQucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KXtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnRyYW5zbGF0ZSg3NjgvMiwgNzY4LzIpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLC0zNSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59XG5cbkN1cnNvci5wcm90b3R5cGUuZXhwbG9zaW9uQW5pbWF0aW9uID0gZnVuY3Rpb24oY3R4KSB7XG5cbiAgaWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPD0gNzApeyAgXG4gICAgY29uc3QgeDEgPSBFWFBMT1NJT05fUE9TSVRJT05bdGhpcy5leHBsb3Npb25GcmFtZV1bMF07XG4gICAgY29uc3QgeTEgPSBFWFBMT1NJT05fUE9TSVRJT05bdGhpcy5leHBsb3Npb25GcmFtZV1bMV07XG4gICAgY29uc3QgeDIgPSBFWFBMT1NJT05fUE9TSVRJT05bdGhpcy5leHBsb3Npb25GcmFtZV1bMl07XG4gICAgY29uc3QgeTIgPSBFWFBMT1NJT05fUE9TSVRJT05bdGhpcy5leHBsb3Npb25GcmFtZV1bM107XG5cbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoNzY4LzIsIDc2OC8yKTtcbiAgICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmV4cGxvc2lvbiwgeDEsIHkxLCB4MiwgeTIsIC01MCwgLTc1LCAxNTAsIDE1MCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcbiAgfVxuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoNzY4LzIsIDc2OC8yKTtcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZSh0aGlzLmRlYWRDdXJzb3IsIDAsLTM1KTtcbiAgY3R4LnJlc3RvcmUoKTtcbiAgXG59XG5cbmNvbnN0IEVYUExPU0lPTl9QT1NJVElPTiA9IFtcblswLCAwICwxMDAsIDEwMF0sXG5bMTAwLCAwICwxMDAsIDEwMF0sXG5bMjAwLCAwICwxMDAsIDEwMF0sXG5bMzAwLCAwICwxMDAsIDEwMF0sXG5bNDAwLCAwICwxMDAsIDEwMF0sXG5bNTAwLCAwICwxMDAsIDEwMF0sXG5bNjAwLCAwICwxMDAsIDEwMF0sXG5bNzAwLCAwICwxMDAsIDEwMF0sXG5bODAwLCAwICwxMDAsIDEwMF0sXG5bOTAwLCAwICwxMDAsIDEwMF0sXG5bMCwgMTAwICwxMDAsIDEwMF0sXG5bMTAwLCAxMDAgLDEwMCwgMTAwXSxcblsyMDAsIDEwMCAsMTAwLCAxMDBdLFxuWzMwMCwgMTAwICwxMDAsIDEwMF0sXG5bNDAwLCAxMDAgLDEwMCwgMTAwXSxcbls1MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzYwMCwgMTAwICwxMDAsIDEwMF0sXG5bNzAwLCAxMDAgLDEwMCwgMTAwXSxcbls4MDAsIDEwMCAsMTAwLCAxMDBdLFxuWzkwMCwgMTAwICwxMDAsIDEwMF0sXG5bMCwgMjAwICwxMDAsIDEwMF0sXG5bMTAwLCAyMDAgLDEwMCwgMTAwXSxcblsyMDAsIDIwMCAsMTAwLCAxMDBdLFxuWzMwMCwgMjAwICwxMDAsIDEwMF0sXG5bNDAwLCAyMDAgLDEwMCwgMTAwXSxcbls1MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzYwMCwgMjAwICwxMDAsIDEwMF0sXG5bNzAwLCAyMDAgLDEwMCwgMTAwXSxcbls4MDAsIDIwMCAsMTAwLCAxMDBdLFxuWzkwMCwgMjAwICwxMDAsIDEwMF0sXG5bMCwgMzAwICwxMDAsIDEwMF0sXG5bMTAwLCAzMDAgLDEwMCwgMTAwXSxcblsyMDAsIDMwMCAsMTAwLCAxMDBdLFxuWzMwMCwgMzAwICwxMDAsIDEwMF0sXG5bNDAwLCAzMDAgLDEwMCwgMTAwXSxcbls1MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzYwMCwgMzAwICwxMDAsIDEwMF0sXG5bNzAwLCAzMDAgLDEwMCwgMTAwXSxcbls4MDAsIDMwMCAsMTAwLCAxMDBdLFxuWzkwMCwgMzAwICwxMDAsIDEwMF0sXG5bMCwgNDAwICwxMDAsIDEwMF0sXG5bMTAwLCA0MDAgLDEwMCwgMTAwXSxcblsyMDAsIDQwMCAsMTAwLCAxMDBdLFxuWzMwMCwgNDAwICwxMDAsIDEwMF0sXG5bNDAwLCA0MDAgLDEwMCwgMTAwXSxcbls1MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzYwMCwgNDAwICwxMDAsIDEwMF0sXG5bNzAwLCA0MDAgLDEwMCwgMTAwXSxcbls4MDAsIDQwMCAsMTAwLCAxMDBdLFxuWzkwMCwgNDAwICwxMDAsIDEwMF0sXG5bMCwgNTAwICwxMDAsIDEwMF0sXG5bMTAwLCA1MDAgLDEwMCwgMTAwXSxcblsyMDAsIDUwMCAsMTAwLCAxMDBdLFxuWzMwMCwgNTAwICwxMDAsIDEwMF0sXG5bNDAwLCA1MDAgLDEwMCwgMTAwXSxcbls1MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzYwMCwgNTAwICwxMDAsIDEwMF0sXG5bNzAwLCA1MDAgLDEwMCwgMTAwXSxcbls4MDAsIDUwMCAsMTAwLCAxMDBdLFxuWzkwMCwgNTAwICwxMDAsIDEwMF0sXG5bMCwgNjAwICwxMDAsIDEwMF0sXG5bMTAwLCA2MDAgLDEwMCwgMTAwXSxcblsyMDAsIDYwMCAsMTAwLCAxMDBdLFxuWzMwMCwgNjAwICwxMDAsIDEwMF0sXG5bNDAwLCA2MDAgLDEwMCwgMTAwXSxcbls1MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzYwMCwgNjAwICwxMDAsIDEwMF0sXG5bNzAwLCA2MDAgLDEwMCwgMTAwXSxcbls4MDAsIDYwMCAsMTAwLCAxMDBdLFxuWzkwMCwgNjAwICwxMDAsIDEwMF0sXG5bMCwgNzAwICwxMDAsIDEwMF1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmZ1bmN0aW9uIEdhbWUoY29udGV4dCkge1xuXHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdHRoaXMuZGltX3ggPSA3Njg7XG5cdHRoaXMuZGltX3kgPSA3Njg7XG5cdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRbXCJBZG1pbmlzdHJhdG9yXCIsIDI4Ljc5XSxcblx0XHRbXCJaZWtlbWVpc3RlclwiLCAyMy40NV0sXG5cdFx0W1wiVGhlSm9uQmFlXCIsIDMuMzNdXG5cdF07XG5cdHRoaXMuaGlnaFNjb3JlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhpZ2gtc2NvcmUtZm9ybVwiKTtcblx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhpZ2gtc2NvcmUtaW5wdXQtZmllbGRcIik7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWRkSGlnaFNjb3JlLmJpbmQodGhpcykpO1xuXHR0aGlzLmZpcnN0UGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpcnN0LXBsYWNlLW5hbWVcIik7XG5cdHRoaXMuZmlyc3RQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpcnN0LXBsYWNlLXNjb3JlXCIpO1xuXHR0aGlzLnNlY29uZFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWNvbmQtcGxhY2UtbmFtZVwiKTtcblx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlY29uZC1wbGFjZS1zY29yZVwiKTtcblx0dGhpcy50aGlyZFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aGlyZC1wbGFjZS1uYW1lXCIpO1xuXHR0aGlzLnRoaXJkUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aGlyZC1wbGFjZS1zY29yZVwiKTtcblxuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXG5cdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMuc3RhdGljTWFwID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdHRoaXMud2FycEdhdGUxLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG5cdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdHRoaXMud2FycEdhdGUgPSBbIHRoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTMgXTtcblx0dGhpcy5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5cdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHR0aGlzLndhcnBHYXRlSW5kZXggKz0gMTtcblx0XHRpZiAodGhpcy53YXJwR2F0ZUluZGV4ID09PSAzKSB0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR9LCA1MDApO1xuXHR0aGlzLnRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZXInKTtcbn1cblxuR2FtZS5wcm90b3R5cGUubG9naWMgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0Y29uc3QgeyBjb250cm9scywgY3Vyc29yIH0gPSB0aGlzO1xuXHRcdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0XHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiA5LjUgKiAxMDAwKSB7XG5cdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnbWVkaXVtJztcblx0XHR9XG5cdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKSB7XG5cdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnaGFyZCc7XG5cdFx0fVxuXG5cdFx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0XHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRjdHguc2F2ZSgpO1xuXHRjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApOyAvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94ICsgMjU2LCBkaW1feSArIDI1Nik7IC8vIGNsZWFyIGNhbnZhc1xuXHRjdHgucmVzdG9yZSgpO1xuXHRpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuXHRcdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHR9XG5cblx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLTc2OCAvIDIsIC03NjggLyAyKTtcblxuXHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0Ly8gQ3Vyc29yXG5cdGlmICghdGhpcy5kZWFkU2hpcCkge1xuXHRcdHRoaXMuY3Vyc29yLmRyYXcoY3R4KTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLmN1cnNvci5leHBsb3Npb25BbmltYXRpb24oY3R4KTtcblx0fVxuXG5cdC8vIFdhdmVzXG5cdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdHdhdmUuZHJhdyhjdHgpO1xuXHR9KTtcblxuXHQvLyBFYXJ0aCBvcmJpdFxuXHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIFdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0ZGltX3ggLyA0LFxuXHRcdGRpbV95IC8gNFxuXHQpO1xuXG5cdC8vIE1hcFxuXHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZFdhdmUgPSBmdW5jdGlvbihmcmFtZUludGVydmFsKSB7XG5cdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0aWYgKFxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdCkge1xuXHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBhdCBzZXQgaW50ZXJ2YWxzICgycylcblx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm5MaXN0LnNoaWZ0KCk7XG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0fVxuXHQvLyBydW5zIHJlZ2FyZGxlc3Mgb2YgdGltZXJcblx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcbn07XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRsZXQgZ2FtZSA9IHRoaXM7XG5cdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdC8vY3Vyc29yIGFuZ2xlIGFzIHRoZXRhXG5cdGxldCBkZWdyZWVzID0gdGhpcy5jdXJzb3IuZGVncmVlcztcblx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdHdoaWxlIChkZWdyZWVzIDwgMCkge1xuXHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHR9XG5cblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdH0pO1xufTtcblxuLy8gdG9wIHJpZ2h0IHRpbWVyXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5zdGFydE5ld0dhbWUgPSBmdW5jdGlvbigpIHtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdHRoaXMud2F2ZXMgPSBbXTtcblx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0dGhpcy5jdXJzb3IuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gVE9ETyBjaGVjayBoaWdoIHNjb3JlIHRvIGRpc3BsYXkgbmFtZSBwcm9tcHRcblx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRpZiAoXG5cdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdIHx8XG5cdFx0c3Vydml2ZWRUaW1lID4gdGhpcmRQbGFjZVsxXVxuXHQpIHtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IHRydWU7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uZm9jdXMoKTtcblx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdH1cblx0dGhpcy5kZWFkU2hpcCA9IHRydWU7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRIaWdoU2NvcmUgPSBmdW5jdGlvbihldmVudCl7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cblx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlnaC1zY29yZS1pbnB1dC1maWVsZFwiKVswXTtcblx0bGV0IGhpZ2hTY29yZU5hbWUgPSBoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlO1xuXHRsZXQgbmV3UGxheWVyID0gW2hpZ2hTY29yZU5hbWUsIHN1cnZpdmVkVGltZV07XG5cdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdGlmIChzdXJ2aXZlZFRpbWUgPiBmaXJzdFBsYWNlWzFdKXtcblx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0c2Vjb25kUGxhY2UgPSBmaXJzdFBsYWNlO1xuXHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdH0gZWxzZSBpZiAoc3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0pIHtcblx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcmRQbGFjZSA9IG5ld1BsYXllcjtcblx0fVxuXG5cdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRmaXJzdFBsYWNlLFxuXHRcdHNlY29uZFBsYWNlLFxuXHRcdHRoaXJkUGxhY2Vcblx0XVxuXG5cdC8vIFRPRE8gbW92ZSBpbnRvIG93biBmdW5jdGlvblxuXHQvLyByZWFzc2lnbiB0b3Agc3Vydml2b3JzXG5cdC8vIGRlYnVnZ2VyXG5cdHRoaXMuZmlyc3RQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYEZpcnN0OiAke2ZpcnN0UGxhY2VbMF19YDtcblx0dGhpcy5maXJzdFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gZmlyc3RQbGFjZVsxXS50b1N0cmluZygpO1xuXHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdHRoaXMuc2Vjb25kUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBzZWNvbmRQbGFjZVsxXS50b1N0cmluZygpO1xuXHR0aGlzLnRoaXJkUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBUaGlyZDogJHt0aGlyZFBsYWNlWzBdfWA7XG5cdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XG5cdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdC8vIGNsZWFyIGVudGVyZWQgbmFtZSBhbmQgcmVzZXQgZ2FtZSBsb2dpY1xuXHRoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlID0gXCJcIjtcblx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmxvYWRTY3JlZW4gPSB0cnVlO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24odGltZSl7XG4gIGNvbnN0IHtmcmFtZUludGVydmFsLCBzZXRUaW1lfSA9IHRoaXM7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBsZXQgY3VyVGltZSA9IHRpbWU7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZHJhdyBmcmFtZVxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsKXtcbiAgICB0aGlzLmdhbWUubG9naWMoZnJhbWVJbnRlcnZhbCk7XG4gICAgdGhpcy5nYW1lLmRyYXcoKTtcbiAgICB0aGlzLnNldFRpbWUgPSBjdXJUaW1lO1xuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9NZWdhbG92YW5pYS5tcDMnKTtcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCk9PntcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICBhdWRpby5wbGF5KClcbn0sIGZhbHNlKTtcbmF1ZGlvLnBsYXkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YWdlOyIsIi8vIDIgc2Vjb25kIHNwYXduIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBFQVNZX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFsgWyAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwIF0gXG4gIF0sXG4gIFsgWyAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxIF0gXG4gIF0sXG4gIFsgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sIFxuICAgIFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdIFxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF1cblx0XVxuXTtcblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuXHRdLFxuXHRbXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwIF1cblx0XVxuXTtcbiIsImZ1bmN0aW9uIFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdHRoaXMub2N0YW50ID0gb2N0YW50O1xuXHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLnNjYWxlID0gNDtcblx0Ly8gdGhpcy5zcGVlZCA9IDg7XG4gIC8vIHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHR0aGlzLnNwZWVkID0gODtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0dGhpcy5zcGVlZCA9IDk7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wOTtcblx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHR0aGlzLnNwZWVkID0gMTA7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4xO1xuXHR9XG5cblx0dGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xufVxuXG5XYWxsLnByb3RvdHlwZS5vY3RhbnRMb2dpYyA9IGZ1bmN0aW9uKG9jdGFudCkge1xuXHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjAyLjUsIDI0Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI0Ny41LCAyOTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0zMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24odGhldGEpIHtcblx0Y29uc3QgeyBoaXRib3gsIGhpdGJveDIgfSA9IHRoaXM7XG5cblx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3Rvcjtcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcbiAgLy8gZGVidWdnZXJcblxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPCBoaXRib3hbMV0gJiZcblx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKHRoaXMub2N0YW50ID09PSA0KSB7XG5cdFx0aWYgKFxuXHRcdFx0KHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDwgaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMCkgfHxcblx0XHRcdCh0aGV0YSA+IGhpdGJveDJbMF0gJiZcblx0XHRcdFx0dGhldGEgPCBoaXRib3gyWzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKFxuXHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA3XG5cdCkge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID4gaGl0Ym94WzBdICYmXG5cdFx0XHR0aGV0YSA8IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRkaXN0YW5jZSA8PSAxNzBcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdGlmIChkeCA+IDApIHtcblx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdH1cblx0aWYgKGR5ID4gMCkge1xuXHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdGxldCB4ID0gcG9zWzBdO1xuXHRsZXQgeSA9IHBvc1sxXTtcblxuXHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCB5ICsgdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRjdHguZHJhd0ltYWdlKFxuXHRcdHRoaXMuc3ByaXRlLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZVxuXHQpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC50cmFuc2xhdGUoLXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCAteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiXG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuZnVuY3Rpb24gV2F2ZShwYXR0ZXJuLCBkaWZmaWN1bHR5KSB7XG4gIHRoaXMucGF0dGVybiA9IHBhdHRlcm5cblx0dGhpcy5lbmQgPSBmYWxzZTtcbiAgdGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuICB0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcbiAgdGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG59XG5cbldhdmUucHJvdG90eXBlLmFkZFdhbGxzID0gZnVuY3Rpb24oZGlmZmljdWx0eSkge1xuICBsZXQgd2FsbHMgPSBbXTtcbiAgY29uc3Qge3BhdHRlcm59ID0gdGhpcztcblxuXHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdhbGxzO1xufTtcblxuV2F2ZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMsIGdhbWUpIHtcblx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLndhbGxzW2ldLm1vdmUoZGVncmVlcywgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuXHRyZXR1cm4gZ2FtZU92ZXI7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=