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
  this.x1 = 0;
  this.y1 = 0;
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
    ctx.save();
    ctx.translate(768 / 2, 768 / 2);
    ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
    ctx.translate(105, 0);
    ctx.drawImage(this.explosion, this.x1, this.y1, 100, 100, -50, -75, 150, 150);
    ctx.restore();
    this.explosionFrame++;
    this.x1 += 100;

    if (this.x1 === 1000) {
      this.y1 += 100;
      this.x1 = 0;
    }

    if (this.explosionFrame === 71) {
      this.x1 = 0;
      this.y1 = 0;
    }
  }

  ctx.save();
  ctx.translate(768 / 2, 768 / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.deadCursor, 0, -35);
  ctx.restore();
};

Cursor.prototype.reset = function () {
  this.explosionFrame = 0;
  this.x1 = 0;
  this.y1 = 0;
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
  this.dim_y = 768; // TODO fetch high scores from db

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
  this.cursor.reset();
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
    if (theta >= hitbox[0] && theta <= hitbox[1] && distance >= 70 && distance <= 120) {
      gameOver = true;
    }
  }

  if (this.octant === 4) {
    if (theta >= hitbox[0] && theta <= hitbox[1] && distance >= 70 && distance <= 120 || theta >= hitbox2[0] && theta <= hitbox2[1] && distance >= 70 && distance <= 120) {
      gameOver = true;
    }
  }

  if (this.octant === 1 || this.octant === 3 || this.octant === 5 || this.octant === 7) {
    if (theta >= hitbox[0] && theta <= hitbox[1] && distance >= 120 && distance <= 170) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsInByb3RvdHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdIaWdoU2NvcmUiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJkZWdyZWVzIiwiY3Vyc29yU3BlZWQiLCJjdXJzb3IiLCJJbWFnZSIsImRlYWRDdXJzb3IiLCJleHBsb3Npb24iLCJleHBsb3Npb25GcmFtZSIsIngxIiwieTEiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiZHJhdyIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZXhwbG9zaW9uQW5pbWF0aW9uIiwicmVzZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGltX3giLCJkaW1feSIsImhpZ2hTY29yZXMiLCJoaWdoU2NvcmVCb3giLCJoaWdoU2NvcmVJbnB1dEZpZWxkIiwiYWRkSGlnaFNjb3JlIiwiZmlyc3RQbGFjZU5hbWUiLCJmaXJzdFBsYWNlU2NvcmUiLCJzZWNvbmRQbGFjZU5hbWUiLCJzZWNvbmRQbGFjZVNjb3JlIiwidGhpcmRQbGFjZU5hbWUiLCJ0aGlyZFBsYWNlU2NvcmUiLCJpc0dhbWVPdmVyIiwidG90YWxUaW1lRWxhcHNlZCIsInN1YndhdmVUaW1lciIsInN1YldhdmVJbnRlcnZhbCIsIndhdmVzIiwicGF0dGVybkxpc3QiLCJkaWZmaWN1bHR5Iiwicm90YXRpb24iLCJyb3RhdGlvblNwZWVkIiwiZGVhZFNoaXAiLCJzdW5NYXAiLCJzdGF0aWNNYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJmb3JFYWNoIiwid2F2ZSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsImxlbmd0aCIsImNvbmNhdCIsIkVBU1lfUEFUVEVSTlMiLCJmbG9vciIsInJhbmRvbSIsIk1FRElVTV9QQVRURVJOUyIsIkhBUkRfUEFUVEVSTlMiLCJwYXR0ZXJuIiwic2hpZnQiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJzdXJ2aXZlZFRpbWUiLCJmaXJzdFBsYWNlIiwic2Vjb25kUGxhY2UiLCJ0aGlyZFBsYWNlIiwiZm9jdXMiLCJzZWxlY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGlnaFNjb3JlTmFtZSIsInZhbHVlIiwibmV3UGxheWVyIiwiaW5uZXJUZXh0IiwiZnJhbWVSYXRlIiwic2V0VGltZSIsImxvYWRTY3JlZW4iLCJ0aW1lIiwiY3VyVGltZSIsInRpbWVEaWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhdWRpbyIsIkF1ZGlvIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNjYWxlIiwic3BlZWQiLCJkZXNjYWxlRmFjdG9yIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInRoZXRhIiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJjdXJyZW50U3Vid2F2ZSIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQUk7QUFDaEQsTUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBRCxRQUFNLENBQUNFLEtBQVAsR0FBZSxHQUFmO0FBQ0FGLFFBQU0sQ0FBQ0csTUFBUCxHQUFnQixHQUFoQjtBQUNBLE1BQUlDLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsS0FBRyxDQUFDRSx3QkFBSixHQUErQixrQkFBL0IsQ0FMZ0QsQ0FPaEQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLENBQVNKLEdBQVQsQ0FBYjtBQUNBLE1BQU1LLFNBQVMsR0FBRyxJQUFJQyxxREFBSixDQUFjTixHQUFkLEVBQW1CRyxJQUFuQixDQUFsQjtBQUNBRSxXQUFTLENBQUNFLE1BQVY7QUFDRCxDQVhELEU7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQSxTQUFTQyxRQUFULENBQWtCTCxJQUFsQixFQUF1QjtBQUNyQixPQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLTSxLQUFMLEdBQWE7QUFDWEMsUUFBSSxFQUFFO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBREs7QUFFWEMsU0FBSyxFQUFFO0FBQUNELFlBQU0sRUFBRTtBQUFUO0FBRkksR0FBYjtBQUlBLE9BQUtFLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUE3QjtBQUNBLE9BQUtDLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLE9BQUtFLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFGLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLE9BQUtHLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdILElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLE9BQUtJLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsT0FBS0ssUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNMLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxPQUFLTSxhQUFMLEdBQXFCMUIsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQXJCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlNUIsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLE9BQUtFLE9BQUwsR0FBZTdCLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFmO0FBQ0EsT0FBS0csU0FBTCxHQUFpQjlCLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLFdBQWhDLENBQWpCO0FBQ0EsT0FBS0ksUUFBTCxHQUFnQi9CLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFoQjtBQUNEOztBQUVEYixRQUFRLENBQUNrQixTQUFULENBQW1CWCxvQkFBbkIsR0FBMEMsWUFBVTtBQUNsRHJCLFVBQVEsQ0FBQ2lDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtULFNBQTdDO0FBRUF4QixVQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtxQixPQUExQztBQUNBdEIsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLc0IsS0FBeEM7QUFDRCxDQUxEOztBQU9BVCxRQUFRLENBQUNrQixTQUFULENBQW1CYixxQkFBbkIsR0FBMkMsWUFBVTtBQUVuRCxNQUFJLENBQUMsS0FBS1YsSUFBTCxDQUFVeUIsWUFBZixFQUE0QjtBQUMxQmxDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS3VCLFNBQTFDO0FBQ0Q7O0FBQUE7QUFDRHhCLFVBQVEsQ0FBQ2lDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtYLE9BQTdDO0FBQ0F0QixVQUFRLENBQUNpQyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLVixLQUEzQztBQUVELENBUkQ7O0FBVUFULFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJWLE9BQW5CLEdBQTZCLFVBQVNhLENBQVQsRUFBWTtBQUN2QyxVQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDRSxTQUFLLFlBQUw7QUFDRSxVQUFJLENBQUMsS0FBS3JCLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkQsTUFBdEIsRUFBNkI7QUFDM0IsYUFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUFqQixHQUEwQixJQUExQjtBQUNEOztBQUNEOztBQUNGLFNBQUssV0FBTDtBQUNFLFVBQUksQ0FBQyxLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLE1BQXJCLEVBQTRCO0FBQzFCLGFBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUIsSUFBekI7QUFDRDs7QUFDRDs7QUFDRjtBQUNFO0FBWko7QUFjRCxDQWZEOztBQWlCQUgsUUFBUSxDQUFDa0IsU0FBVCxDQUFtQlQsS0FBbkIsR0FBMkIsVUFBU1ksQ0FBVCxFQUFZO0FBQ3JDLFVBQVFBLENBQUMsQ0FBQ0MsSUFBVjtBQUNFLFNBQUssWUFBTDtBQUNFLFdBQUtyQixLQUFMLENBQVdHLEtBQVgsQ0FBaUJELE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0E7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsV0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFoQixHQUF5QixLQUF6QjtBQUNBOztBQUNGO0FBQ0U7QUFSSjtBQVVELENBWEQ7O0FBYUFILFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJSLFNBQW5CLEdBQStCLFVBQVNXLENBQVQsRUFBWTtBQUN6QyxNQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFNBQUszQixJQUFMLENBQVU0QixZQUFWO0FBQ0EsU0FBS1QsT0FBTCxDQUFhLENBQWIsRUFBZ0JVLFNBQWhCLENBQTBCQyxHQUExQixDQUE4Qix3QkFBOUI7QUFDQSxTQUFLVixPQUFMLENBQWEsQ0FBYixFQUFnQlMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFNBQUtYLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsMEJBQTlCO0FBQ0EsU0FBS1QsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxvQkFBbkM7QUFDQSxTQUFLVixTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQztBQUNBLFNBQUtSLFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkUsTUFBM0IsQ0FBa0MseUJBQWxDO0FBQ0EsU0FBS1QsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQiwwQkFBL0I7QUFDQSxTQUFLYixhQUFMLENBQW1CLENBQW5CLEVBQXNCWSxTQUF0QixDQUFnQ0MsR0FBaEMsQ0FBb0MsUUFBcEM7QUFDQSxTQUFLbEIsb0JBQUw7QUFDRDtBQUNGLENBYkQ7O0FBZUFQLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJQLFFBQW5CLEdBQThCLFlBQVc7QUFDdkMsT0FBS2hCLElBQUwsQ0FBVWdCLFFBQVY7QUFDQSxPQUFLSSxPQUFMLENBQWEsQ0FBYixFQUFnQlMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLDBCQUFqQztBQUNBLE9BQUtYLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIseUJBQTlCO0FBQ0EsT0FBS1QsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxtQkFBbkM7QUFDQSxPQUFLVixTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG9CQUFoQztBQUNBLE9BQUtSLFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkUsTUFBM0IsQ0FBa0MsMEJBQWxDO0FBQ0EsT0FBS1QsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQix5QkFBL0I7QUFDQSxPQUFLYixhQUFMLENBQW1CLENBQW5CLEVBQXNCWSxTQUF0QixDQUFnQ0UsTUFBaEMsQ0FBdUMsUUFBdkM7QUFDQSxPQUFLckIscUJBQUw7QUFDRCxDQVZEOztBQVllTCx1RUFBZixFOzs7Ozs7Ozs7OztBQy9GQSxTQUFTMkIsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDdkIsT0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsSUFBSUQsS0FBSixFQUFsQjtBQUNBLE9BQUtFLFNBQUwsR0FBaUIsSUFBSUYsS0FBSixFQUFqQjtBQUNBLE9BQUtHLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxPQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLE9BQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsT0FBS04sTUFBTCxDQUFZTyxHQUFaLEdBQWtCLHdHQUFsQjtBQUNBLE9BQUtMLFVBQUwsQ0FBZ0JLLEdBQWhCLEdBQXNCLDBHQUF0QjtBQUNBLE9BQUtKLFNBQUwsQ0FBZUksR0FBZixHQUFxQix1R0FBckI7QUFDRDs7QUFFRFgsTUFBTSxDQUFDVCxTQUFQLENBQWlCcUIsVUFBakIsR0FBOEIsVUFBU0MsU0FBVCxFQUFtQjtBQUMvQyxVQUFRQSxTQUFSO0FBQ0UsU0FBSyxXQUFMO0FBQ0UsV0FBS1gsT0FBTCxJQUFnQixLQUFLQyxXQUFyQjtBQUNBOztBQUVGLFNBQUssWUFBTDtBQUNFLFdBQUtELE9BQUwsSUFBZ0IsS0FBS0MsV0FBckI7QUFDQTtBQVBKO0FBU0QsQ0FWRDs7QUFZQUgsTUFBTSxDQUFDVCxTQUFQLENBQWlCdUIsSUFBakIsR0FBd0IsVUFBU2pELEdBQVQsRUFBYTtBQUNuQ0EsS0FBRyxDQUFDa0QsSUFBSjtBQUNBbEQsS0FBRyxDQUFDbUQsU0FBSixDQUFjLE1BQUksQ0FBbEIsRUFBcUIsTUFBSSxDQUF6QjtBQUNBbkQsS0FBRyxDQUFDb0QsTUFBSixDQUFhLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQixHQUFqQixJQUF5QixLQUFLakIsT0FBTCxHQUFlLEdBQXhDLENBQVg7QUFDQXJDLEtBQUcsQ0FBQ21ELFNBQUosQ0FBYyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FuRCxLQUFHLENBQUN1RCxTQUFKLENBQWMsS0FBS2hCLE1BQW5CLEVBQTJCLENBQTNCLEVBQTZCLENBQUMsRUFBOUI7QUFDQXZDLEtBQUcsQ0FBQ3dELE9BQUo7QUFDRCxDQVBEOztBQVNBckIsTUFBTSxDQUFDVCxTQUFQLENBQWlCK0Isa0JBQWpCLEdBQXNDLFVBQVN6RCxHQUFULEVBQWM7QUFFbEQsTUFBSSxLQUFLMkMsY0FBTCxJQUF1QixFQUEzQixFQUE4QjtBQUM1QjNDLE9BQUcsQ0FBQ2tELElBQUo7QUFDQWxELE9BQUcsQ0FBQ21ELFNBQUosQ0FBYyxNQUFJLENBQWxCLEVBQXFCLE1BQUksQ0FBekI7QUFDQW5ELE9BQUcsQ0FBQ29ELE1BQUosQ0FBYSxJQUFJQyxJQUFJLENBQUNDLEVBQVYsR0FBZ0IsR0FBakIsSUFBeUIsS0FBS2pCLE9BQUwsR0FBZSxHQUF4QyxDQUFYO0FBQ0FyQyxPQUFHLENBQUNtRCxTQUFKLENBQWMsR0FBZCxFQUFtQixDQUFuQjtBQUNBbkQsT0FBRyxDQUFDdUQsU0FBSixDQUFjLEtBQUtiLFNBQW5CLEVBQThCLEtBQUtFLEVBQW5DLEVBQXVDLEtBQUtDLEVBQTVDLEVBQWdELEdBQWhELEVBQXFELEdBQXJELEVBQTBELENBQUMsRUFBM0QsRUFBK0QsQ0FBQyxFQUFoRSxFQUFvRSxHQUFwRSxFQUF5RSxHQUF6RTtBQUNBN0MsT0FBRyxDQUFDd0QsT0FBSjtBQUVBLFNBQUtiLGNBQUw7QUFFQSxTQUFLQyxFQUFMLElBQVcsR0FBWDs7QUFDQSxRQUFJLEtBQUtBLEVBQUwsS0FBWSxJQUFoQixFQUFxQjtBQUNuQixXQUFLQyxFQUFMLElBQVcsR0FBWDtBQUNBLFdBQUtELEVBQUwsR0FBVSxDQUFWO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLRCxjQUFMLEtBQXdCLEVBQTVCLEVBQStCO0FBQzdCLFdBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsV0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDRDtBQUNGOztBQUVEN0MsS0FBRyxDQUFDa0QsSUFBSjtBQUNBbEQsS0FBRyxDQUFDbUQsU0FBSixDQUFjLE1BQUksQ0FBbEIsRUFBcUIsTUFBSSxDQUF6QjtBQUNBbkQsS0FBRyxDQUFDb0QsTUFBSixDQUFhLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQixHQUFqQixJQUF5QixLQUFLakIsT0FBTCxHQUFlLEdBQXhDLENBQVg7QUFDQXJDLEtBQUcsQ0FBQ21ELFNBQUosQ0FBYyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FuRCxLQUFHLENBQUN1RCxTQUFKLENBQWMsS0FBS2QsVUFBbkIsRUFBK0IsQ0FBL0IsRUFBaUMsQ0FBQyxFQUFsQztBQUNBekMsS0FBRyxDQUFDd0QsT0FBSjtBQUVELENBL0JEOztBQWlDQXJCLE1BQU0sQ0FBQ1QsU0FBUCxDQUFpQmdDLEtBQWpCLEdBQXlCLFlBQVU7QUFDakMsT0FBS2YsY0FBTCxHQUFzQixDQUF0QjtBQUNELE9BQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsT0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxDQUpEOztBQU1BYyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixNQUFqQixDOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBUy9CLElBQVQsQ0FBY2dDLE9BQWQsRUFBdUI7QUFBQTs7QUFDdEIsT0FBS3BDLEdBQUwsR0FBV29DLE9BQVg7QUFDQSxPQUFLeUIsS0FBTCxHQUFhLEdBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsR0FBYixDQUhzQixDQUl0Qjs7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLENBQ2pCLENBQUMsZUFBRCxFQUFrQixLQUFsQixDQURpQixFQUVqQixDQUFDLGFBQUQsRUFBZ0IsS0FBaEIsQ0FGaUIsRUFHakIsQ0FBQyxXQUFELEVBQWMsSUFBZCxDQUhpQixDQUFsQjtBQUtBLE9BQUtDLFlBQUwsR0FBb0J0RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBcEI7QUFDQSxPQUFLNEMsbUJBQUwsR0FBMkJ2RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyx3QkFBaEMsQ0FBM0I7QUFDQTNCLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsS0FBS3VFLFlBQUwsQ0FBa0JwRCxJQUFsQixDQUF1QixJQUF2QixDQUFwQztBQUNBLE9BQUtxRCxjQUFMLEdBQXNCekUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0Msa0JBQWhDLENBQXRCO0FBQ0EsT0FBSytDLGVBQUwsR0FBdUIxRSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBdkI7QUFDQSxPQUFLZ0QsZUFBTCxHQUF1QjNFLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLG1CQUFoQyxDQUF2QjtBQUNBLE9BQUtpRCxnQkFBTCxHQUF3QjVFLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLG9CQUFoQyxDQUF4QjtBQUNBLE9BQUtrRCxjQUFMLEdBQXNCN0UsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0Msa0JBQWhDLENBQXRCO0FBQ0EsT0FBS21ELGVBQUwsR0FBdUI5RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBdkI7QUFFQSxPQUFLb0QsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxPQUFLckQsWUFBTCxHQUFvQixLQUFwQjtBQUNBLE9BQUtzRCxRQUFMLEdBQWdCLEtBQWhCO0FBRUEsT0FBS0MsTUFBTCxHQUFjLElBQUkzQyxLQUFKLEVBQWQ7QUFDQSxPQUFLNEMsU0FBTCxHQUFpQixJQUFJNUMsS0FBSixFQUFqQjtBQUNBLE9BQUs2QyxTQUFMLEdBQWlCLElBQUk3QyxLQUFKLEVBQWpCO0FBQ0EsT0FBSzhDLFNBQUwsR0FBaUIsSUFBSTlDLEtBQUosRUFBakI7QUFDQSxPQUFLK0MsU0FBTCxHQUFpQixJQUFJL0MsS0FBSixFQUFqQjtBQUNBLE9BQUtnRCxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsT0FBS0gsU0FBTCxDQUFldkMsR0FBZixHQUNDLDRGQUREO0FBRUEsT0FBS3dDLFNBQUwsQ0FBZXhDLEdBQWYsR0FDQyw0RkFERDtBQUVBLE9BQUt5QyxTQUFMLENBQWV6QyxHQUFmLEdBQ0MsNEZBREQ7QUFFQSxPQUFLMkMsUUFBTCxHQUFnQixDQUFFLEtBQUtKLFNBQVAsRUFBa0IsS0FBS0MsU0FBdkIsRUFBa0MsS0FBS0MsU0FBdkMsQ0FBaEI7QUFDQSxPQUFLSixNQUFMLENBQVlyQyxHQUFaLEdBQWtCLHdEQUFsQjtBQUNBLE9BQUs0QyxhQUFMLEdBQXFCQyxXQUFXLENBQUMsWUFBTTtBQUN0QyxTQUFJLENBQUNILGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxRQUFJLEtBQUksQ0FBQ0EsYUFBTCxLQUF1QixDQUEzQixFQUE4QixLQUFJLENBQUNBLGFBQUwsR0FBcUIsQ0FBckI7QUFDOUIsR0FIK0IsRUFHN0IsR0FINkIsQ0FBaEM7QUFJQSxPQUFLSSxLQUFMLEdBQWFsRyxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxPQUFoQyxDQUFiO0FBQ0E7O0FBRURqQixJQUFJLENBQUNzQixTQUFMLENBQWVtRSxLQUFmLEdBQXVCLFVBQVNDLGFBQVQsRUFBd0I7QUFDOUMsTUFBSSxDQUFDLEtBQUtyQixVQUFWLEVBQXNCO0FBQUEsUUFDYnNCLFFBRGEsR0FDUSxJQURSLENBQ2JBLFFBRGE7QUFBQSxRQUNIeEQsTUFERyxHQUNRLElBRFIsQ0FDSEEsTUFERzs7QUFFckIsUUFBSXdELFFBQVEsQ0FBQ3RGLEtBQVQsQ0FBZUMsSUFBZixDQUFvQkMsTUFBeEIsRUFBZ0M7QUFDL0I0QixZQUFNLENBQUNRLFVBQVAsQ0FBa0IsWUFBbEI7QUFDQSxLQUZELE1BRU8sSUFBSWdELFFBQVEsQ0FBQ3RGLEtBQVQsQ0FBZUcsS0FBZixDQUFxQkQsTUFBekIsRUFBaUM7QUFDdkM0QixZQUFNLENBQUNRLFVBQVAsQ0FBa0IsV0FBbEI7QUFDQTs7QUFFRCxRQUFJLEtBQUsyQixnQkFBTCxHQUF3QixNQUFNLElBQWxDLEVBQXdDO0FBQ3ZDLFdBQUtLLFVBQUwsR0FBa0IsUUFBbEI7QUFDQTs7QUFDRCxRQUFJLEtBQUtMLGdCQUFMLEdBQXdCLE9BQU8sSUFBbkMsRUFBeUM7QUFDeEMsV0FBS0ssVUFBTCxHQUFrQixNQUFsQjtBQUNBOztBQUVELFNBQUtpQixZQUFMLENBQWtCRixhQUFsQjtBQUVBLFNBQUtHLFNBQUwsQ0FBZUgsYUFBZjtBQUNBO0FBQ0QsQ0FwQkQ7O0FBc0JBMUYsSUFBSSxDQUFDc0IsU0FBTCxDQUFldUIsSUFBZixHQUFzQixZQUFXO0FBQUEsTUFDeEJZLEtBRHdCLEdBQytCLElBRC9CLENBQ3hCQSxLQUR3QjtBQUFBLE1BQ2pCQyxLQURpQixHQUMrQixJQUQvQixDQUNqQkEsS0FEaUI7QUFBQSxNQUNWOUQsR0FEVSxHQUMrQixJQUQvQixDQUNWQSxHQURVO0FBQUEsTUFDTHlGLFFBREssR0FDK0IsSUFEL0IsQ0FDTEEsUUFESztBQUFBLE1BQ0tELGFBREwsR0FDK0IsSUFEL0IsQ0FDS0EsYUFETDtBQUFBLE1BQ29CTCxNQURwQixHQUMrQixJQUQvQixDQUNvQkEsTUFEcEI7QUFFaENuRixLQUFHLENBQUNrRCxJQUFKO0FBQ0FsRCxLQUFHLENBQUNrRyxZQUFKLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBSGdDLENBR0k7O0FBQ3BDbEcsS0FBRyxDQUFDbUcsU0FBSixDQUFjLENBQUMsR0FBZixFQUFvQixDQUFDLEdBQXJCLEVBQTBCdEMsS0FBSyxHQUFHLEdBQWxDLEVBQXVDQyxLQUFLLEdBQUcsR0FBL0MsRUFKZ0MsQ0FJcUI7O0FBQ3JEOUQsS0FBRyxDQUFDd0QsT0FBSjs7QUFDQSxNQUFJLENBQUMsS0FBS2lCLFVBQVYsRUFBc0I7QUFDckIsU0FBS08sUUFBTCxJQUFpQixLQUFLQyxhQUF0QjtBQUNBOztBQUVEakYsS0FBRyxDQUFDbUQsU0FBSixDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QjtBQUNBbkQsS0FBRyxDQUFDb0QsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsS0FBSzBCLFFBQUwsR0FBZ0IsR0FBckMsQ0FBWDtBQUNBaEYsS0FBRyxDQUFDbUQsU0FBSixDQUFjLENBQUMsR0FBRCxHQUFPLENBQXJCLEVBQXdCLENBQUMsR0FBRCxHQUFPLENBQS9CO0FBRUFuRCxLQUFHLENBQUNvRyxTQUFKLEdBQWdCLE1BQWhCO0FBQ0FwRyxLQUFHLENBQUNxRyxXQUFKLEdBQWtCLE1BQWxCLENBZmdDLENBaUJoQzs7QUFDQSxNQUFJLENBQUMsS0FBS25CLFFBQVYsRUFBb0I7QUFDbkIsU0FBSzNDLE1BQUwsQ0FBWVUsSUFBWixDQUFpQmpELEdBQWpCO0FBQ0EsR0FGRCxNQUVPO0FBQ04sU0FBS3VDLE1BQUwsQ0FBWWtCLGtCQUFaLENBQStCekQsR0FBL0I7QUFDQSxHQXRCK0IsQ0F3QmhDOzs7QUFDQSxPQUFLNkUsS0FBTCxDQUFXeUIsT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJBLFFBQUksQ0FBQ3RELElBQUwsQ0FBVWpELEdBQVY7QUFDQSxHQUZELEVBekJnQyxDQTZCaEM7O0FBQ0EsT0FBS0EsR0FBTCxDQUFTd0csU0FBVDtBQUNBLE9BQUt4RyxHQUFMLENBQVN5RyxHQUFULENBQWE1QyxLQUFLLEdBQUcsQ0FBckIsRUFBd0JDLEtBQUssR0FBRyxDQUFoQyxFQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxFQUEyQ1QsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBckQsRUFBd0QsS0FBeEQ7QUFDQSxPQUFLdEQsR0FBTCxDQUFTMEcsTUFBVCxHQWhDZ0MsQ0FrQ2hDOztBQUNBLE9BQUsxRyxHQUFMLENBQVN1RCxTQUFULENBQ0NrQyxRQUFRLENBQUNELGFBQUQsQ0FEVCxFQUVDM0IsS0FBSyxHQUFHLENBQVIsR0FBWSxJQUZiLEVBR0NDLEtBQUssR0FBRyxDQUFSLEdBQVksSUFIYixFQUlDRCxLQUFLLEdBQUcsQ0FKVCxFQUtDQyxLQUFLLEdBQUcsQ0FMVCxFQW5DZ0MsQ0EyQ2hDOztBQUNBLE9BQUs5RCxHQUFMLENBQVN1RCxTQUFULENBQW1CNEIsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUN0QixLQUFqQyxFQUF3Q0MsS0FBeEM7QUFDQSxDQTdDRDs7QUErQ0ExRCxJQUFJLENBQUNzQixTQUFMLENBQWVpRixTQUFmLEdBQTJCLFlBQVc7QUFDckMsT0FBS3BFLE1BQUwsR0FBYyxJQUFJSiw4Q0FBSixFQUFkO0FBQ0EsU0FBTyxLQUFLSSxNQUFaO0FBQ0EsQ0FIRDs7QUFLQW5DLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZWtGLFdBQWYsR0FBNkIsWUFBVztBQUN2QyxPQUFLYixRQUFMLEdBQWdCLElBQUl2RixpREFBSixDQUFhLElBQWIsQ0FBaEI7QUFDQSxTQUFPLEtBQUt1RixRQUFaO0FBQ0EsQ0FIRDs7QUFLQTNGLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZW1GLE9BQWYsR0FBeUIsVUFBU2YsYUFBVCxFQUF3QjtBQUFBLE1BQ3hDZixVQUR3QyxHQUN6QixJQUR5QixDQUN4Q0EsVUFEd0MsRUFHaEQ7O0FBQ0EsTUFDQyxLQUFLSixZQUFMLEdBQW9CLEtBQUtDLGVBQUwsR0FBdUIsSUFBM0MsSUFDQSxLQUFLRixnQkFBTCxLQUEwQm9CLGFBRjNCLEVBR0U7QUFDRDtBQUNBO0FBQ0EsUUFBSSxLQUFLaEIsV0FBTCxDQUFpQmdDLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2xDLGNBQVEvQixVQUFSO0FBQ0MsYUFBSyxNQUFMO0FBQ0MsZUFBS0QsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCaUMsTUFBakIsQ0FDbEJDLHVEQUFhLENBQUMzRCxJQUFJLENBQUM0RCxLQUFMLENBQVc1RCxJQUFJLENBQUM2RCxNQUFMLEtBQWdCRix1REFBYSxDQUFDRixNQUF6QyxDQUFELENBREssQ0FBbkI7QUFHQSxlQUFLbEMsZUFBTCxHQUF1QixDQUF2QjtBQUNBOztBQUNELGFBQUssUUFBTDtBQUNDLGVBQUtFLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQmlDLE1BQWpCLENBQ2xCSSx5REFBZSxDQUFDOUQsSUFBSSxDQUFDNEQsS0FBTCxDQUFXNUQsSUFBSSxDQUFDNkQsTUFBTCxLQUFnQkMseURBQWUsQ0FBQ0wsTUFBM0MsQ0FBRCxDQURHLENBQW5CO0FBR0EsZUFBS2xDLGVBQUwsR0FBdUIsSUFBdkI7QUFDQTs7QUFDRCxhQUFLLE1BQUw7QUFDQyxlQUFLRSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJpQyxNQUFqQixDQUNsQkssdURBQWEsQ0FBQy9ELElBQUksQ0FBQzRELEtBQUwsQ0FBVzVELElBQUksQ0FBQzZELE1BQUwsS0FBZ0JFLHVEQUFhLENBQUNOLE1BQXpDLENBQUQsQ0FESyxDQUFuQjtBQUdBLGVBQUtsQyxlQUFMLEdBQXVCLEdBQXZCO0FBQ0E7QUFsQkY7QUFvQkEsS0F4QkEsQ0F5QkQ7OztBQUNBLFNBQUt5QyxPQUFMLEdBQWUsS0FBS3ZDLFdBQUwsQ0FBaUJ3QyxLQUFqQixFQUFmO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLElBQUlDLDZDQUFKLENBQVMsS0FBS0gsT0FBZCxFQUF1QixLQUFLdEMsVUFBNUIsQ0FBZDtBQUNBLFNBQUtGLEtBQUwsQ0FBVzRDLElBQVgsQ0FBZ0JGLE9BQWhCO0FBQ0EsU0FBSzVDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxHQXJDK0MsQ0FzQ2hEOzs7QUFDQSxPQUFLQSxZQUFMLElBQXFCbUIsYUFBckI7QUFDQSxDQXhDRDs7QUEwQ0ExRixJQUFJLENBQUNzQixTQUFMLENBQWVnRyxVQUFmLEdBQTRCLFlBQVc7QUFBQSxNQUM5QjdDLEtBRDhCLEdBQ3BCLElBRG9CLENBQzlCQSxLQUQ4QjtBQUV0QyxNQUFNOEMsY0FBYyxHQUFHLEVBQXZCLENBRnNDLENBR3RDOztBQUNBLE1BQUk5QyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWErQyxTQUFqQixFQUE0QjtBQUMzQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsVUFBSWhELEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2lELEtBQVQsQ0FBZUQsQ0FBZixNQUFzQixJQUExQixFQUFnQztBQUMvQixZQUFJakYsRUFBRSxHQUFHaUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTaUQsS0FBVCxDQUFlRCxDQUFmLEVBQWtCRSxHQUFsQixDQUFzQixDQUF0QixDQUFUO0FBQ0EsWUFBSWxGLEVBQUUsR0FBR2dDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2lELEtBQVQsQ0FBZUQsQ0FBZixFQUFrQkUsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBVDtBQUNBLFlBQUlDLFFBQVEsR0FBRzNFLElBQUksQ0FBQzRFLElBQUwsQ0FBVSxTQUFDLE1BQU1yRixFQUFQLEVBQWMsQ0FBZCxhQUFtQixNQUFNQyxFQUF6QixFQUFnQyxDQUFoQyxDQUFWLENBQWY7O0FBQ0EsWUFBSW1GLFFBQVEsR0FBR0wsY0FBZixFQUErQjtBQUM5QixlQUFLOUMsS0FBTCxDQUFXeUMsS0FBWDtBQUNBO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxDQWpCRDs7QUFtQkFsSCxJQUFJLENBQUNzQixTQUFMLENBQWV1RSxTQUFmLEdBQTJCLFVBQVNILGFBQVQsRUFBd0I7QUFBQTs7QUFDbEQsT0FBS2UsT0FBTCxDQUFhZixhQUFiO0FBQ0EsTUFBSTNGLElBQUksR0FBRyxJQUFYO0FBRmtELE1BRzFDMEUsS0FIMEMsR0FHaEMsSUFIZ0MsQ0FHMUNBLEtBSDBDLEVBS2xEOztBQUNBLE9BQUs2QyxVQUFMLEdBTmtELENBUWxEOztBQUNBLE1BQUlyRixPQUFPLEdBQUcsS0FBS0UsTUFBTCxDQUFZRixPQUExQjtBQUNBQSxTQUFPLEdBQUdBLE9BQU8sR0FBRyxHQUFwQjs7QUFDQSxTQUFPQSxPQUFPLEdBQUcsQ0FBakIsRUFBb0I7QUFDbkJBLFdBQU8sSUFBSSxHQUFYO0FBQ0E7O0FBRUR3QyxPQUFLLENBQUN5QixPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCO0FBQ0EsUUFBSUEsSUFBSSxDQUFDMkIsSUFBTCxDQUFVN0YsT0FBVixFQUFtQmxDLElBQW5CLENBQUosRUFBOEIsTUFBSSxDQUFDNEYsUUFBTCxDQUFjNUUsUUFBZDtBQUM5QixHQUhEO0FBSUEsQ0FuQkQsQyxDQXFCQTs7O0FBQ0FmLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZXNFLFlBQWYsR0FBOEIsVUFBU21DLFdBQVQsRUFBc0I7QUFDbkQsT0FBS3pELGdCQUFMLElBQXlCeUQsV0FBekI7QUFDQSxNQUFJQyxXQUFXLEdBQUcvRSxJQUFJLENBQUNnRixLQUFMLENBQVcsS0FBSzNELGdCQUFMLEdBQXdCLEVBQW5DLElBQXlDLEdBQTNEO0FBQ0EsT0FBS2tCLEtBQUwsQ0FBVyxDQUFYLEVBQWMwQyxTQUFkLEdBQTBCRixXQUFXLENBQUNHLFFBQVosRUFBMUI7QUFDQSxDQUpEOztBQU1BbkksSUFBSSxDQUFDc0IsU0FBTCxDQUFlSyxZQUFmLEdBQThCLFlBQVc7QUFDeEMsT0FBSzJDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLE9BQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsT0FBS3hDLE1BQUwsQ0FBWUYsT0FBWixHQUFzQixHQUF0QjtBQUNBLE9BQUswRCxRQUFMLENBQWN0RixLQUFkLENBQW9CQyxJQUFwQixDQUF5QkMsTUFBekIsR0FBa0MsS0FBbEM7QUFDQSxPQUFLb0YsUUFBTCxDQUFjdEYsS0FBZCxDQUFvQkcsS0FBcEIsQ0FBMEJELE1BQTFCLEdBQW1DLEtBQW5DO0FBQ0EsT0FBS3FFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsT0FBSzFDLE1BQUwsQ0FBWW1CLEtBQVo7QUFDQSxPQUFLd0IsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtULFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxDQWZEOztBQWlCQXJFLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZVAsUUFBZixHQUEwQixZQUFXO0FBQ3BDO0FBQ0E7QUFDQSxNQUFNcUgsWUFBWSxHQUFHbkYsSUFBSSxDQUFDZ0YsS0FBTCxDQUFXLEtBQUszRCxnQkFBTCxHQUF3QixFQUFuQyxJQUF5QyxHQUE5RDtBQUNBLE1BQUkrRCxVQUFVLEdBQUcsS0FBSzFFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBakI7QUFDQSxNQUFJMkUsV0FBVyxHQUFHLEtBQUszRSxVQUFMLENBQWdCLENBQWhCLENBQWxCO0FBQ0EsTUFBSTRFLFVBQVUsR0FBRyxLQUFLNUUsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUNBLE9BQUtDLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJoQyxTQUFyQixDQUErQkUsTUFBL0IsQ0FBc0MsUUFBdEM7QUFDQSxPQUFLOEIsWUFBTCxDQUFrQixDQUFsQixFQUFxQmhDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQzs7QUFDQSxNQUNDdUcsWUFBWSxHQUFHQyxVQUFVLENBQUMsQ0FBRCxDQUF6QixJQUNBRCxZQUFZLEdBQUdFLFdBQVcsQ0FBQyxDQUFELENBRDFCLElBRUFGLFlBQVksR0FBR0csVUFBVSxDQUFDLENBQUQsQ0FIMUIsRUFJRTtBQUNELFNBQUsvRyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS29DLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJoQyxTQUFyQixDQUErQkUsTUFBL0IsQ0FBc0MsUUFBdEM7QUFDQSxTQUFLK0IsbUJBQUwsQ0FBeUIsQ0FBekIsRUFBNEIyRSxLQUE1QjtBQUNBLFNBQUszRSxtQkFBTCxDQUF5QixDQUF6QixFQUE0QjRFLE1BQTVCO0FBQ0E7O0FBQ0QsT0FBSzNELFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLVCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsQ0FyQkQ7O0FBdUJBckUsSUFBSSxDQUFDc0IsU0FBTCxDQUFld0MsWUFBZixHQUE4QixVQUFTNEUsS0FBVCxFQUFlO0FBQzVDQSxPQUFLLENBQUNDLGNBQU47QUFFQSxNQUFNUCxZQUFZLEdBQUduRixJQUFJLENBQUNnRixLQUFMLENBQVcsS0FBSzNELGdCQUFMLEdBQXdCLEVBQW5DLElBQXlDLEdBQTlEO0FBRUEsTUFBSVQsbUJBQW1CLEdBQUd2RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyx3QkFBaEMsRUFBMEQsQ0FBMUQsQ0FBMUI7QUFDQSxNQUFJMkgsYUFBYSxHQUFHL0UsbUJBQW1CLENBQUNnRixLQUF4QztBQUNBLE1BQUlDLFNBQVMsR0FBRyxDQUFDRixhQUFELEVBQWdCUixZQUFoQixDQUFoQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxLQUFLMUUsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUNBLE1BQUkyRSxXQUFXLEdBQUcsS0FBSzNFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxNQUFJNEUsVUFBVSxHQUFHLEtBQUs1RSxVQUFMLENBQWdCLENBQWhCLENBQWpCOztBQUVBLE1BQUl5RSxZQUFZLEdBQUdDLFVBQVUsQ0FBQyxDQUFELENBQTdCLEVBQWlDO0FBQ2hDRSxjQUFVLEdBQUdELFdBQWI7QUFDQUEsZUFBVyxHQUFHRCxVQUFkO0FBQ0FBLGNBQVUsR0FBR1MsU0FBYjtBQUNBLEdBSkQsTUFJTyxJQUFJVixZQUFZLEdBQUdFLFdBQVcsQ0FBQyxDQUFELENBQTlCLEVBQW1DO0FBQ3pDQyxjQUFVLEdBQUdELFdBQWI7QUFDQUEsZUFBVyxHQUFHUSxTQUFkO0FBQ0EsR0FITSxNQUdBO0FBQ05QLGNBQVUsR0FBR08sU0FBYjtBQUNBOztBQUVELE9BQUtuRixVQUFMLEdBQWtCLENBQ2pCMEUsVUFEaUIsRUFFakJDLFdBRmlCLEVBR2pCQyxVQUhpQixDQUFsQixDQXZCNEMsQ0E2QjVDO0FBQ0E7QUFDQTs7QUFDQSxPQUFLeEUsY0FBTCxDQUFvQixDQUFwQixFQUF1QmdGLFNBQXZCLG9CQUE2Q1YsVUFBVSxDQUFDLENBQUQsQ0FBdkQ7QUFDQSxPQUFLckUsZUFBTCxDQUFxQixDQUFyQixFQUF3QitFLFNBQXhCLEdBQW9DVixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNGLFFBQWQsRUFBcEM7QUFDQSxPQUFLbEUsZUFBTCxDQUFxQixDQUFyQixFQUF3QjhFLFNBQXhCLHFCQUErQ1QsV0FBVyxDQUFDLENBQUQsQ0FBMUQ7QUFDQSxPQUFLcEUsZ0JBQUwsQ0FBc0IsQ0FBdEIsRUFBeUI2RSxTQUF6QixHQUFxQ1QsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlSCxRQUFmLEVBQXJDO0FBQ0EsT0FBS2hFLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUI0RSxTQUF2QixvQkFBNkNSLFVBQVUsQ0FBQyxDQUFELENBQXZEO0FBQ0EsT0FBS25FLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IyRSxTQUF4QixHQUFvQ1IsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjSixRQUFkLEVBQXBDLENBckM0QyxDQXVDNUM7QUFFQTs7QUFDQXRFLHFCQUFtQixDQUFDZ0YsS0FBcEIsR0FBNEIsRUFBNUI7QUFDQSxPQUFLakYsWUFBTCxDQUFrQixDQUFsQixFQUFxQmhDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQUNBLE9BQUtMLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxPQUFLOEMsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxPQUFLcUIsUUFBTCxDQUFjNUUsUUFBZDtBQUNBLENBL0NEOztBQWlEZWYsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQUE7QUFBQTs7QUFFQSxTQUFTRSxTQUFULENBQW9COEIsT0FBcEIsRUFBNkJqQyxJQUE3QixFQUFtQztBQUNqQyxPQUFLSCxHQUFMLEdBQVdvQyxPQUFYO0FBQ0EsT0FBS2pDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtpSixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS3RELGFBQUwsR0FBcUIsT0FBSyxLQUFLc0QsU0FBL0I7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUs5RyxNQUFMLEdBQWMsS0FBS3BDLElBQUwsQ0FBVXdHLFNBQVYsRUFBZDtBQUNBLE9BQUtaLFFBQUwsR0FBZ0IsS0FBSzVGLElBQUwsQ0FBVXlHLFdBQVYsRUFBaEI7QUFDQSxPQUFLMEMsVUFBTCxHQUFrQixJQUFsQjtBQUNBLE9BQUt2RCxRQUFMLENBQWM1RSxRQUFkO0FBQ0Q7O0FBRURiLFNBQVMsQ0FBQ29CLFNBQVYsQ0FBb0JuQixNQUFwQixHQUE2QixVQUFTZ0osSUFBVCxFQUFjO0FBQUEsTUFDbEN6RCxhQURrQyxHQUNSLElBRFEsQ0FDbENBLGFBRGtDO0FBQUEsTUFDbkJ1RCxPQURtQixHQUNSLElBRFEsQ0FDbkJBLE9BRG1CLEVBR3pDOztBQUNBLE1BQUlHLE9BQU8sR0FBR0QsSUFBZDtBQUNBLE1BQUlFLE9BQU8sR0FBR0QsT0FBTyxHQUFHSCxPQUF4QixDQUx5QyxDQU96Qzs7QUFDQSxNQUFJSSxPQUFPLElBQUkzRCxhQUFmLEVBQTZCO0FBQzNCLFNBQUszRixJQUFMLENBQVUwRixLQUFWLENBQWdCQyxhQUFoQjtBQUNBLFNBQUszRixJQUFMLENBQVU4QyxJQUFWO0FBQ0EsU0FBS29HLE9BQUwsR0FBZUcsT0FBZjtBQUNEOztBQUVERSxRQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtwSixNQUFMLENBQVlPLElBQVosQ0FBaUIsSUFBakIsQ0FBN0I7QUFDRCxDQWZEOztBQWlCQSxJQUFNOEksS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSw2RkFBVixDQUFkO0FBQ0FELEtBQUssQ0FBQ2pLLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQUk7QUFDbENpSyxPQUFLLENBQUNFLFdBQU4sR0FBb0IsQ0FBcEI7QUFDQUYsT0FBSyxDQUFDRyxJQUFOO0FBQ0QsQ0FIRCxFQUdHLEtBSEg7QUFJQUgsS0FBSyxDQUFDRyxJQUFOO0FBRWV6Six3RUFBZixFOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU0wRyxhQUFhLEdBQUcsQ0FDNUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEgsQ0FENEIsRUFNM0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkYsRUFHRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEYsQ0FOMkIsRUFXM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FYMkIsRUFjM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FkMkIsRUFpQjNCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFGLEVBQ0UsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURGLENBakIyQixDQUF0QixDLENBc0JQOztBQUNPLElBQU1HLGVBQWUsR0FBRyxDQUM5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQWI4QixFQW1CN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FuQjZCLENBQXhCLEMsQ0EyQlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILENBRDRCLEVBTzVCLENBQ0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURILEVBRUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZILEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5ELEVBT0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQVBELEVBUUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQVJELENBUDRCLENBQXRCLEM7Ozs7Ozs7Ozs7O0FDcERQLFNBQVM0QyxJQUFULENBQWNDLE1BQWQsRUFBc0JsRixVQUF0QixFQUFrQztBQUNqQyxPQUFLa0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQUkxSCxLQUFKLEVBQWQ7QUFDQSxPQUFLMkgsS0FBTCxHQUFhLENBQWIsQ0FIaUMsQ0FJakM7QUFDQzs7QUFDQSxPQUFLcEYsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRCxPQUFLbUYsTUFBTCxDQUFZcEgsR0FBWixHQUNDLDRGQUREOztBQUVBLE1BQUlpQyxVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDMUIsU0FBS3FGLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLEdBSEQsTUFHTyxJQUFJdEYsVUFBVSxLQUFLLFFBQW5CLEVBQTZCO0FBQ25DLFNBQUtxRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxHQUhNLE1BR0EsSUFBSXRGLFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUNqQyxTQUFLcUYsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0E7O0FBRUQsT0FBS0MsV0FBTCxDQUFpQkwsTUFBakI7QUFDQTs7QUFFREQsSUFBSSxDQUFDdEksU0FBTCxDQUFlNEksV0FBZixHQUE2QixVQUFTTCxNQUFULEVBQWlCO0FBQzdDLFVBQVFBLE1BQVI7QUFDQyxTQUFLLENBQUw7QUFDQyxXQUFLbEMsR0FBTCxHQUFXLENBQUUsQ0FBRixFQUFLLEdBQUwsQ0FBWDtBQUNBLFdBQUt3QyxjQUFMLEdBQXNCLENBQUMsRUFBdkI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZDtBQUNBOztBQUNELFNBQUssQ0FBTDtBQUNDLFdBQUszQyxHQUFMLEdBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFYO0FBQ0EsV0FBS3dDLGNBQUwsR0FBc0IsQ0FBQyxFQUF2QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSzNDLEdBQUwsR0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQLENBQVg7QUFDQSxXQUFLd0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSzNDLEdBQUwsR0FBVyxDQUFFLEdBQUYsRUFBTyxDQUFQLENBQVg7QUFDQSxXQUFLd0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFDLEVBQWhCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsS0FBVCxDQUFkO0FBQ0E7O0FBQ0QsU0FBSyxDQUFMO0FBQ0MsV0FBSzNDLEdBQUwsR0FBVyxDQUFFLEdBQUYsRUFBTyxHQUFQLENBQVg7QUFDQSxXQUFLd0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFGLEVBQVMsR0FBVCxDQUFkO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQUUsQ0FBRixFQUFLLElBQUwsQ0FBZjtBQUNBOztBQUNELFNBQUssQ0FBTDtBQUNDLFdBQUs1QyxHQUFMLEdBQVcsQ0FBRSxHQUFGLEVBQU8sR0FBUCxDQUFYO0FBQ0EsV0FBS3dDLGNBQUwsR0FBc0IsR0FBdEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFDLEVBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQUUsSUFBRixFQUFRLElBQVIsQ0FBZDtBQUNBOztBQUNELFNBQUssQ0FBTDtBQUNDLFdBQUszQyxHQUFMLEdBQVcsQ0FBRSxHQUFGLEVBQU8sR0FBUCxDQUFYO0FBQ0EsV0FBS3dDLGNBQUwsR0FBc0IsR0FBdEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQUUsSUFBRixFQUFRLEtBQVIsQ0FBZDtBQUNBOztBQUNELFNBQUssQ0FBTDtBQUNDLFdBQUszQyxHQUFMLEdBQVcsQ0FBRSxDQUFGLEVBQUssR0FBTCxDQUFYO0FBQ0EsV0FBS3dDLGNBQUwsR0FBc0IsR0FBdEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxHQUFmO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZDtBQUNBO0FBekRGO0FBMkRBLENBNUREOztBQThEQVYsSUFBSSxDQUFDdEksU0FBTCxDQUFld0csSUFBZixHQUFzQixVQUFTMEMsS0FBVCxFQUFnQjtBQUFBLE1BQzdCRixNQUQ2QixHQUNULElBRFMsQ0FDN0JBLE1BRDZCO0FBQUEsTUFDckJDLE9BRHFCLEdBQ1QsSUFEUyxDQUNyQkEsT0FEcUI7QUFHckMsTUFBSSxLQUFLUixLQUFMLEdBQWEsSUFBSSxLQUFLRSxhQUExQixFQUF5QyxLQUFLRixLQUFMLElBQWMsS0FBS0UsYUFBbkI7QUFDekMsTUFBSWxKLFFBQVEsR0FBRyxLQUFmO0FBQ0EsTUFBSTBKLElBQUksR0FBRyxLQUFLOUMsR0FBTCxDQUFTLENBQVQsQ0FBWDtBQUNBLE1BQUkrQyxJQUFJLEdBQUcsS0FBSy9DLEdBQUwsQ0FBUyxDQUFULENBQVg7QUFDQyxNQUFJQyxRQUFRLEdBQUczRSxJQUFJLENBQUM0RSxJQUFMLENBQVUsU0FBQyxNQUFNNEMsSUFBUCxFQUFnQixDQUFoQixhQUFxQixNQUFNQyxJQUEzQixFQUFvQyxDQUFwQyxDQUFWLENBQWYsQ0FQb0MsQ0FRcEM7O0FBRUQsTUFBSSxLQUFLYixNQUFMLEtBQWdCLENBQWhCLElBQXFCLEtBQUtBLE1BQUwsS0FBZ0IsQ0FBckMsSUFBMEMsS0FBS0EsTUFBTCxLQUFnQixDQUE5RCxFQUFpRTtBQUNoRSxRQUNDVyxLQUFLLElBQUlGLE1BQU0sQ0FBQyxDQUFELENBQWYsSUFDQUUsS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQURmLElBRUExQyxRQUFRLElBQUksRUFGWixJQUdBQSxRQUFRLElBQUksR0FKYixFQUtFO0FBQ0Q3RyxjQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsTUFBSSxLQUFLOEksTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUN0QixRQUNFVyxLQUFLLElBQUlGLE1BQU0sQ0FBQyxDQUFELENBQWYsSUFDQUUsS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQURmLElBRUExQyxRQUFRLElBQUksRUFGWixJQUdBQSxRQUFRLElBQUksR0FIYixJQUlDNEMsS0FBSyxJQUFJRCxPQUFPLENBQUMsQ0FBRCxDQUFoQixJQUNBQyxLQUFLLElBQUlELE9BQU8sQ0FBQyxDQUFELENBRGhCLElBRUEzQyxRQUFRLElBQUksRUFGWixJQUdBQSxRQUFRLElBQUksR0FSZCxFQVNFO0FBQ0Q3RyxjQUFRLEdBQUcsSUFBWDtBQUNBO0FBQ0Q7O0FBQ0QsTUFDQyxLQUFLOEksTUFBTCxLQUFnQixDQUFoQixJQUNBLEtBQUtBLE1BQUwsS0FBZ0IsQ0FEaEIsSUFFQSxLQUFLQSxNQUFMLEtBQWdCLENBRmhCLElBR0EsS0FBS0EsTUFBTCxLQUFnQixDQUpqQixFQUtFO0FBQ0QsUUFDQ1csS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQUFmLElBQ0FFLEtBQUssSUFBSUYsTUFBTSxDQUFDLENBQUQsQ0FEZixJQUVBMUMsUUFBUSxJQUFJLEdBRlosSUFHQUEsUUFBUSxJQUFJLEdBSmIsRUFLRTtBQUNEN0csY0FBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUVELE1BQUk0SixFQUFFLEdBQUcsTUFBTUYsSUFBZjtBQUNBLE1BQUlHLEVBQUUsR0FBRyxNQUFNRixJQUFmLENBbkRxQyxDQW9EckM7O0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNYLFNBQUtoRCxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtxQyxLQUFwQjtBQUNBLEdBRkQsTUFFTyxJQUFJVyxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ2xCLFNBQUtoRCxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtxQyxLQUFwQjtBQUNBOztBQUNELE1BQUlZLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFDWCxTQUFLakQsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLcUMsS0FBcEI7QUFDQSxHQUZELE1BRU8sSUFBSVksRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNsQixTQUFLakQsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLcUMsS0FBcEI7QUFDQTs7QUFFRCxTQUFPakosUUFBUDtBQUNBLENBakVEOztBQW1FQTZJLElBQUksQ0FBQ3RJLFNBQUwsQ0FBZXVCLElBQWYsR0FBc0IsVUFBU2pELEdBQVQsRUFBYztBQUFBLE1BQzNCK0gsR0FEMkIsR0FDbkIsSUFEbUIsQ0FDM0JBLEdBRDJCO0FBRW5DLE1BQUlrRCxDQUFDLEdBQUdsRCxHQUFHLENBQUMsQ0FBRCxDQUFYO0FBQ0EsTUFBSW1ELENBQUMsR0FBR25ELEdBQUcsQ0FBQyxDQUFELENBQVg7QUFFQS9ILEtBQUcsQ0FBQ21ELFNBQUosQ0FBYzhILENBQUMsR0FBRyxLQUFLVCxPQUFMLEdBQWUsS0FBS0wsS0FBdEMsRUFBNkNlLENBQUMsR0FBRyxLQUFLVCxPQUFMLEdBQWUsS0FBS04sS0FBckU7QUFDQW5LLEtBQUcsQ0FBQ29ELE1BQUosQ0FBVyxJQUFJQyxJQUFJLENBQUNDLEVBQVQsR0FBYyxHQUFkLElBQXFCLEtBQUtpSCxjQUFMLEdBQXNCLEdBQTNDLENBQVg7QUFDQXZLLEtBQUcsQ0FBQ3VELFNBQUosQ0FDQyxLQUFLMkcsTUFETixFQUVDLE1BQU0sS0FBS0MsS0FBWCxHQUFtQixDQUZwQixFQUdDLE1BQU0sS0FBS0EsS0FBWCxHQUFtQixDQUhwQixFQUlDLE1BQU0sS0FBS0EsS0FKWixFQUtDLE1BQU0sS0FBS0EsS0FMWjtBQU9BbkssS0FBRyxDQUFDb0QsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsQ0FBQyxLQUFLaUgsY0FBTixHQUF1QixHQUE1QyxDQUFYO0FBQ0F2SyxLQUFHLENBQUNtRCxTQUFKLENBQWMsQ0FBQzhILENBQUQsR0FBSyxLQUFLVCxPQUFMLEdBQWUsS0FBS0wsS0FBdkMsRUFBOEMsQ0FBQ2UsQ0FBRCxHQUFLLEtBQUtULE9BQUwsR0FBZSxLQUFLTixLQUF2RTtBQUNBLENBaEJEOztBQWtCQXhHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm9HLElBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTeEMsSUFBVCxDQUFjSCxPQUFkLEVBQXVCdEMsVUFBdkIsRUFBbUM7QUFDakMsT0FBS3NDLE9BQUwsR0FBZUEsT0FBZjtBQUNELE9BQUs4RCxHQUFMLEdBQVcsS0FBWDtBQUNDLE9BQUt4RyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsT0FBS3lHLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxPQUFLdEQsS0FBTCxHQUFhLEtBQUt1RCxRQUFMLENBQWN0RyxVQUFkLENBQWI7QUFDQSxPQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVEeUMsSUFBSSxDQUFDOUYsU0FBTCxDQUFlMkosUUFBZixHQUEwQixVQUFTdEcsVUFBVCxFQUFxQjtBQUM3QyxNQUFJK0MsS0FBSyxHQUFHLEVBQVo7QUFENkMsTUFFdENULE9BRnNDLEdBRTNCLElBRjJCLENBRXRDQSxPQUZzQzs7QUFJOUMsT0FBSyxJQUFJNEMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNBLE1BQU0sRUFBdkMsRUFBMkM7QUFDMUMsUUFBSTVDLE9BQU8sQ0FBQzRDLE1BQUQsQ0FBUCxLQUFvQixDQUF4QixFQUEyQjtBQUMxQixVQUFJcUIsT0FBTyxHQUFHLElBQUl0Qiw2Q0FBSixDQUFTQyxNQUFULEVBQWlCbEYsVUFBakIsQ0FBZDtBQUNBK0MsV0FBSyxDQUFDTCxJQUFOLENBQVc2RCxPQUFYO0FBQ0EsS0FIRCxNQUdPO0FBQ054RCxXQUFLLENBQUNMLElBQU4sQ0FBVyxJQUFYO0FBQ0E7QUFDRDs7QUFFRCxTQUFPSyxLQUFQO0FBQ0EsQ0FkRDs7QUFnQkFOLElBQUksQ0FBQzlGLFNBQUwsQ0FBZXdHLElBQWYsR0FBc0IsVUFBUzdGLE9BQVQsRUFBa0JsQyxJQUFsQixFQUF3QjtBQUM3QztBQUNBLE1BQUlnQixRQUFRLEdBQUcsS0FBZjs7QUFFQyxPQUFLLElBQUkwRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFFBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzFCLFVBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNLLElBQWQsQ0FBbUI3RixPQUFuQixFQUE0QmxDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN4QztBQUNGOztBQUVGLFNBQU9BLFFBQVA7QUFDQSxDQVhEOztBQWFBcUcsSUFBSSxDQUFDOUYsU0FBTCxDQUFldUIsSUFBZixHQUFzQixVQUFTakQsR0FBVCxFQUFjO0FBQ25DLE9BQUssSUFBSTZILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDekIsUUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWM1RSxJQUFkLENBQW1CakQsR0FBbkI7QUFDRDtBQUNIO0FBQ0QsQ0FORDs7QUFRZXdILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMuaGlnaFNjb3JlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtYm94Jyk7XG4gIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5XCIpO1xuICB0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuXG4gIGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcbiAgfTsgXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuICBcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5VXAgPSBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB7XG4gICAgdGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuICAgIHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKFwiY2xlYXItYmFja2dyb3VuZC1pbWFnZVwiKTtcbiAgICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLWluXCIpO1xuICAgIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAgIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gICAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICAgIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbiAgICB0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtYm94LWZhZGUtb3V0XCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xuICB0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gMjcwOyBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5leHBsb3Npb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG4gIHRoaXMueDEgPSAwO1xuICB0aGlzLnkxID0gMDtcbiAgdGhpcy5jdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG4gIHRoaXMuZGVhZEN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfZ3JlZW5fc21hbGxfMi5wbmcnO1xuICB0aGlzLmV4cGxvc2lvbi5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL2V4cGxvc2lvbl9zcHJpdGVzaGVldC5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpe1xuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKDc2OC8yLCA3NjgvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5leHBsb3Npb25BbmltYXRpb24gPSBmdW5jdGlvbihjdHgpIHtcblxuICBpZiAodGhpcy5leHBsb3Npb25GcmFtZSA8PSA3MCl7ICBcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoNzY4LzIsIDc2OC8yKTtcbiAgICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmV4cGxvc2lvbiwgdGhpcy54MSwgdGhpcy55MSwgMTAwLCAxMDAsIC01MCwgLTc1LCAxNTAsIDE1MCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcblxuICAgIHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcblxuICAgIHRoaXMueDEgKz0gMTAwO1xuICAgIGlmICh0aGlzLngxID09PSAxMDAwKXtcbiAgICAgIHRoaXMueTEgKz0gMTAwO1xuICAgICAgdGhpcy54MSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPT09IDcxKXtcbiAgICAgIHRoaXMueDEgPSAwO1xuICAgICAgdGhpcy55MSA9IDA7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnRyYW5zbGF0ZSg3NjgvMiwgNzY4LzIpO1xuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKHRoaXMuZGVhZEN1cnNvciwgMCwtMzUpO1xuICBjdHgucmVzdG9yZSgpO1xuICBcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHR0aGlzLngxID0gMDtcblx0dGhpcy55MSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHQvLyBUT0RPIGZldGNoIGhpZ2ggc2NvcmVzIGZyb20gZGJcblx0dGhpcy5oaWdoU2NvcmVzID0gW1xuXHRcdFtcIkFkbWluaXN0cmF0b3JcIiwgMjguNzldLFxuXHRcdFtcIlpla2VtZWlzdGVyXCIsIDIzLjQ1XSxcblx0XHRbXCJUaGVKb25CYWVcIiwgMy4zM11cblx0XTtcblx0dGhpcy5oaWdoU2NvcmVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlnaC1zY29yZS1mb3JtXCIpO1xuXHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlnaC1zY29yZS1pbnB1dC1maWVsZFwiKTtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hZGRIaWdoU2NvcmUuYmluZCh0aGlzKSk7XG5cdHRoaXMuZmlyc3RQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmlyc3QtcGxhY2UtbmFtZVwiKTtcblx0dGhpcy5maXJzdFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmlyc3QtcGxhY2Utc2NvcmVcIik7XG5cdHRoaXMuc2Vjb25kUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlY29uZC1wbGFjZS1uYW1lXCIpO1xuXHR0aGlzLnNlY29uZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2Vjb25kLXBsYWNlLXNjb3JlXCIpO1xuXHR0aGlzLnRoaXJkUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoaXJkLXBsYWNlLW5hbWVcIik7XG5cdHRoaXMudGhpcmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRoaXJkLXBsYWNlLXNjb3JlXCIpO1xuXG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLm5ld0hpZ2hTY29yZSA9IGZhbHNlO1xuXHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cblx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5sb2dpYyA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdFx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2Nsb2Nrd2lzZScpO1xuXHRcdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdtZWRpdW0nO1xuXHRcdH1cblx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdoYXJkJztcblx0XHR9XG5cblx0XHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHRcdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHR9XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdGN0eC5zYXZlKCk7XG5cdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7IC8vIHJlc2V0cyB0cmFuc2Zvcm0gdG8gY2xlYXIgZW50aXJlIGNhdmFzXG5cdGN0eC5jbGVhclJlY3QoLTI1NiwgLTI1NiwgZGltX3ggKyAyNTYsIGRpbV95ICsgMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdGN0eC5yZXN0b3JlKCk7XG5cdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0dGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG5cdH1cblxuXHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMucm90YXRpb24gLyAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuXHQvLyBDdXJzb3Jcblx0aWYgKCF0aGlzLmRlYWRTaGlwKSB7XG5cdFx0dGhpcy5jdXJzb3IuZHJhdyhjdHgpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuY3Vyc29yLmV4cGxvc2lvbkFuaW1hdGlvbihjdHgpO1xuXHR9XG5cblx0Ly8gV2F2ZXNcblx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdH0pO1xuXG5cdC8vIEVhcnRoIG9yYml0XG5cdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRkaW1feCAvIDQsXG5cdFx0ZGltX3kgLyA0XG5cdCk7XG5cblx0Ly8gTWFwXG5cdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdHJldHVybiB0aGlzLmN1cnNvcjtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufTtcblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpIHtcblx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRpZiAoXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0KSB7XG5cdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHR9XG5cdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xufTtcblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCkge1xuXHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuR2FtZS5wcm90b3R5cGUud2F2ZUxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCkge1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdGxldCBnYW1lID0gdGhpcztcblx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0ZGVncmVlcyArPSAzNjA7XG5cdH1cblxuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fSk7XG59O1xuXG4vLyB0b3AgcmlnaHQgdGltZXJcbkdhbWUucHJvdG90eXBlLnRpbWVyQ291bnRlciA9IGZ1bmN0aW9uKHRpbWVFbGFwc2VkKSB7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcbn07XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHR0aGlzLnJvdGF0aW9uID0gMDtcblx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHR0aGlzLmN1cnNvci5yZXNldCgpO1xuXHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufTtcblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gVE9ETyBjaGVjayBoaWdoIHNjb3JlIHRvIGRpc3BsYXkgbmFtZSBwcm9tcHRcblx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRpZiAoXG5cdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdIHx8XG5cdFx0c3Vydml2ZWRUaW1lID4gdGhpcmRQbGFjZVsxXVxuXHQpIHtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IHRydWU7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uZm9jdXMoKTtcblx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdH1cblx0dGhpcy5kZWFkU2hpcCA9IHRydWU7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGRIaWdoU2NvcmUgPSBmdW5jdGlvbihldmVudCl7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cblx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGlnaC1zY29yZS1pbnB1dC1maWVsZFwiKVswXTtcblx0bGV0IGhpZ2hTY29yZU5hbWUgPSBoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlO1xuXHRsZXQgbmV3UGxheWVyID0gW2hpZ2hTY29yZU5hbWUsIHN1cnZpdmVkVGltZV07XG5cdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdGlmIChzdXJ2aXZlZFRpbWUgPiBmaXJzdFBsYWNlWzFdKXtcblx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0c2Vjb25kUGxhY2UgPSBmaXJzdFBsYWNlO1xuXHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdH0gZWxzZSBpZiAoc3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0pIHtcblx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcmRQbGFjZSA9IG5ld1BsYXllcjtcblx0fVxuXG5cdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRmaXJzdFBsYWNlLFxuXHRcdHNlY29uZFBsYWNlLFxuXHRcdHRoaXJkUGxhY2Vcblx0XVxuXG5cdC8vIFRPRE8gbW92ZSBpbnRvIG93biBmdW5jdGlvblxuXHQvLyByZWFzc2lnbiB0b3Agc3Vydml2b3JzXG5cdC8vIGRlYnVnZ2VyXG5cdHRoaXMuZmlyc3RQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYEZpcnN0OiAke2ZpcnN0UGxhY2VbMF19YDtcblx0dGhpcy5maXJzdFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gZmlyc3RQbGFjZVsxXS50b1N0cmluZygpO1xuXHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdHRoaXMuc2Vjb25kUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBzZWNvbmRQbGFjZVsxXS50b1N0cmluZygpO1xuXHR0aGlzLnRoaXJkUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBUaGlyZDogJHt0aGlyZFBsYWNlWzBdfWA7XG5cdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XG5cdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdC8vIGNsZWFyIGVudGVyZWQgbmFtZSBhbmQgcmVzZXQgZ2FtZSBsb2dpY1xuXHRoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlID0gXCJcIjtcblx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmxvYWRTY3JlZW4gPSB0cnVlO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24odGltZSl7XG4gIGNvbnN0IHtmcmFtZUludGVydmFsLCBzZXRUaW1lfSA9IHRoaXM7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBsZXQgY3VyVGltZSA9IHRpbWU7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZHJhdyBmcmFtZVxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsKXtcbiAgICB0aGlzLmdhbWUubG9naWMoZnJhbWVJbnRlcnZhbCk7XG4gICAgdGhpcy5nYW1lLmRyYXcoKTtcbiAgICB0aGlzLnNldFRpbWUgPSBjdXJUaW1lO1xuICB9XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9NZWdhbG92YW5pYS5tcDMnKTtcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCk9PntcbiAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICBhdWRpby5wbGF5KClcbn0sIGZhbHNlKTtcbmF1ZGlvLnBsYXkoKTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YWdlOyIsIi8vIDIgc2Vjb25kIHNwYXduIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBFQVNZX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFsgWyAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwIF0gXG4gIF0sXG4gIFsgWyAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxIF0gXG4gIF0sXG4gIFsgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sIFxuICAgIFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdIFxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF1cblx0XVxuXTtcblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuXHRdLFxuXHRbXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwIF1cblx0XVxuXTtcbiIsImZ1bmN0aW9uIFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdHRoaXMub2N0YW50ID0gb2N0YW50O1xuXHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLnNjYWxlID0gNDtcblx0Ly8gdGhpcy5zcGVlZCA9IDg7XG4gIC8vIHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG4gIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHR0aGlzLnNwZWVkID0gODtcblx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0dGhpcy5zcGVlZCA9IDk7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wOTtcblx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHR0aGlzLnNwZWVkID0gMTA7XG5cdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4xO1xuXHR9XG5cblx0dGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xufVxuXG5XYWxsLnByb3RvdHlwZS5vY3RhbnRMb2dpYyA9IGZ1bmN0aW9uKG9jdGFudCkge1xuXHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTIwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgMjAyLjUsIDI0Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCAwIF07XG5cdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0dGhpcy5oaXRib3ggPSBbIDI0Ny41LCAyOTIuNSBdO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gLTMwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNTpcblx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdHRoaXMueG9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IC0zMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNzpcblx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdHRoaXMueW9mZnNldCA9IDEyMDtcblx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5XYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24odGhldGEpIHtcblx0Y29uc3QgeyBoaXRib3gsIGhpdGJveDIgfSA9IHRoaXM7XG5cblx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3Rvcjtcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG4gIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcbiAgLy8gZGVidWdnZXJcblxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGV0YSA+PSBoaXRib3hbMF0gJiZcblx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDEyMFxuXHRcdCkge1xuXHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRpZiAoXG5cdFx0XHQodGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApIHx8XG5cdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3gyWzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHQpIHtcblx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0aWYgKFxuXHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdHRoaXMub2N0YW50ID09PSA3XG5cdCkge1xuXHRcdGlmIChcblx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0dGhldGEgPD0gaGl0Ym94WzFdICYmXG5cdFx0XHRkaXN0YW5jZSA+PSAxMjAgJiZcblx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdCkge1xuXHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcblx0aWYgKGR4ID4gMCkge1xuXHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdH0gZWxzZSBpZiAoZHggPCAwKSB7XG5cdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0fVxuXHRpZiAoZHkgPiAwKSB7XG5cdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHR0aGlzLnBvc1sxXSAtPSB0aGlzLnNwZWVkO1xuXHR9XG5cblx0cmV0dXJuIGdhbWVPdmVyO1xufTtcblxuV2FsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuXHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0bGV0IHggPSBwb3NbMF07XG5cdGxldCB5ID0gcG9zWzFdO1xuXG5cdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdGN0eC5kcmF3SW1hZ2UoXG5cdFx0dGhpcy5zcHJpdGUsXG5cdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHQxMDAgKiB0aGlzLnNjYWxlXG5cdCk7XG5cdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0Y3R4LnRyYW5zbGF0ZSgteCAtIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIC15IC0gdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5mdW5jdGlvbiBXYXZlKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcbiAgdGhpcy5wYXR0ZXJuID0gcGF0dGVyblxuXHR0aGlzLmVuZCA9IGZhbHNlO1xuICB0aGlzLnN1YndhdmVUaW1lciA9IDA7XG4gIHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuICB0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscyhkaWZmaWN1bHR5KTtcbiAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbn1cblxuV2F2ZS5wcm90b3R5cGUuYWRkV2FsbHMgPSBmdW5jdGlvbihkaWZmaWN1bHR5KSB7XG4gIGxldCB3YWxscyA9IFtdO1xuICBjb25zdCB7cGF0dGVybn0gPSB0aGlzO1xuXG5cdGZvciAobGV0IG9jdGFudCA9IDA7IG9jdGFudCA8IDg7IG9jdGFudCsrKSB7XG5cdFx0aWYgKHBhdHRlcm5bb2N0YW50XSA9PT0gMSkge1xuXHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0d2FsbHMucHVzaChuZXdXYWxsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd2FsbHM7XG59O1xuXG5XYXZlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oZGVncmVlcywgZ2FtZSkge1xuXHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMud2FsbHNbaV0ubW92ZShkZWdyZWVzLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdHJldHVybiBnYW1lT3Zlcjtcbn07XG5cbldhdmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==