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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// player controls
var Controls =
/*#__PURE__*/
function () {
  function Controls(game) {
    _classCallCheck(this, Controls);

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
    this.overlay = document.getElementsByClassName('overlay');
    this.bigLogo = document.getElementsByClassName('start-game-logo');
    this.smallLogo = document.getElementsByClassName('title-box');
    this.gameInfo = document.getElementsByClassName('start-game-info');
  }

  _createClass(Controls, [{
    key: "enablePlayerControls",
    value: function enablePlayerControls() {
      document.removeEventListener('keydown', this.startGame);
      document.addEventListener('keydown', this.keyDown);
      document.addEventListener('keyup', this.keyUp);
    }
  }, {
    key: "disablePlayerControls",
    value: function disablePlayerControls() {
      if (!this.game.newHighScore) {
        document.addEventListener('keydown', this.startGame);
      }

      document.removeEventListener('keydown', this.keyDown);
      document.removeEventListener('keyup', this.keyUp);
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      switch (e.code) {
        case 'ArrowRight':
          if (!this.state.right.active) {
            this.state.right.active = true;
          }

          break;

        case 'ArrowLeft':
          if (!this.state.left.active) {
            this.state.left.active = true;
          }

          break;

        default:
          break;
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      switch (e.code) {
        case 'ArrowRight':
          this.state.right.active = false;
          break;

        case 'ArrowLeft':
          this.state.left.active = false;
          break;

        default:
          break;
      }
    }
  }, {
    key: "startGame",
    value: function startGame(e) {
      if (e.code === 'Space') {
        this.game.startNewGame();
        this.overlay[0].classList.add('clear-background-image');
        this.bigLogo[0].classList.remove('start-game-logo-fade-in');
        this.bigLogo[0].classList.add('start-game-logo-fade-out');
        this.smallLogo[0].classList.remove('title-box-fade-out');
        this.smallLogo[0].classList.add('title-box-fade-in');
        this.gameInfo[0].classList.remove('start-game-info-fade-in');
        this.gameInfo[0].classList.add('start-game-info-fade-out');
        this.highScoreList[0].classList.add('hidden');
        this.enablePlayerControls();
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.game.gameOver();
      this.bigLogo[0].classList.remove('start-game-logo-fade-out');
      this.bigLogo[0].classList.add('start-game-logo-fade-in');
      this.smallLogo[0].classList.remove('title-box-fade-in');
      this.smallLogo[0].classList.add('title-box-fade-out');
      this.gameInfo[0].classList.remove('start-game-info-fade-out');
      this.gameInfo[0].classList.add('start-game-info-fade-in');
      this.highScoreList[0].classList.remove('hidden');
      this.disablePlayerControls();
    }
  }]);

  return Controls;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/js/cursor.js":
/*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cursor =
/*#__PURE__*/
function () {
  function Cursor(context) {
    _classCallCheck(this, Cursor);

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

  _createClass(Cursor, [{
    key: "moveCursor",
    value: function moveCursor(direction) {
      switch (direction) {
        case 'clockwise':
          this.degrees += this.cursorSpeed;
          break;

        case 'cclockwise':
          this.degrees -= this.cursorSpeed;
          break;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      ctx.translate(768 / 2, 768 / 2);
      ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
      ctx.translate(105, 0);
      ctx.drawImage(this.cursor, 0, -35);
      ctx.restore();
    }
  }, {
    key: "explosionAnimation",
    value: function explosionAnimation(ctx) {
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
    }
  }, {
    key: "reset",
    value: function reset() {
      this.explosionFrame = 0;
      this.x1 = 0;
      this.y1 = 0;
    }
  }]);

  return Cursor;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 // constructor

var Game =
/*#__PURE__*/
function () {
  function Game(context) {
    var _this = this;

    _classCallCheck(this, Game);

    this.ctx = context;
    this.dim_x = 768;
    this.dim_y = 768; // TODO fetch high scores from db

    this.highScores = [['Administrator', 28.79], ['Zekemeister', 23.45], ['TheJonBae', 3.33]];
    this.highScoreBox = document.getElementsByClassName('high-score-form');
    this.highScoreInputField = document.getElementsByClassName('high-score-input-field');
    document.addEventListener('submit', this.addHighScore.bind(this));
    this.firstPlaceName = document.getElementsByClassName('first-place-name');
    this.firstPlaceScore = document.getElementsByClassName('first-place-score');
    this.secondPlaceName = document.getElementsByClassName('second-place-name');
    this.secondPlaceScore = document.getElementsByClassName('second-place-score');
    this.thirdPlaceName = document.getElementsByClassName('third-place-name');
    this.thirdPlaceScore = document.getElementsByClassName('third-place-score');
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

  _createClass(Game, [{
    key: "logic",
    value: function logic(frameInterval) {
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
    }
  }, {
    key: "draw",
    value: function draw() {
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
    }
  }, {
    key: "addCursor",
    value: function addCursor() {
      this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_1___default.a();
      return this.cursor;
    }
  }, {
    key: "addControls",
    value: function addControls() {
      this.controls = new _controls__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      return this.controls;
    }
  }, {
    key: "addWave",
    value: function addWave(frameInterval) {
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
    }
  }, {
    key: "removeWave",
    value: function removeWave() {
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
    }
  }, {
    key: "waveLogic",
    value: function waveLogic(frameInterval) {
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
    } // top right timer

  }, {
    key: "timerCounter",
    value: function timerCounter(timeElapsed) {
      this.totalTimeElapsed += timeElapsed;
      var roundedTime = Math.round(this.totalTimeElapsed / 10) / 100;
      this.timer[0].innerHTML = roundedTime.toString();
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
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
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      // TODO check high score to display name prompt
      // if true, on form submit, set highscore = false and recall gameOver()
      var survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;
      var firstPlace = this.highScores[0];
      var secondPlace = this.highScores[1];
      var thirdPlace = this.highScores[2];
      this.highScoreBox[0].classList.remove('hidden');
      this.highScoreBox[0].classList.add('hidden');

      if (survivedTime > firstPlace[1] || survivedTime > secondPlace[1] || survivedTime > thirdPlace[1]) {
        this.newHighScore = true;
        this.highScoreBox[0].classList.remove('hidden');
        this.highScoreInputField[0].focus();
        this.highScoreInputField[0].select();
      }

      this.deadShip = true;
      this.isGameOver = true;
    }
  }, {
    key: "addHighScore",
    value: function addHighScore(event) {
      event.preventDefault();
      var survivedTime = Math.round(this.totalTimeElapsed / 10) / 100;
      var highScoreInputField = document.getElementsByClassName('high-score-input-field')[0];
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

      highScoreInputField.value = '';
      this.highScoreBox[0].classList.add('hidden');
      this.newHighScore = false;
      this.totalTimeElapsed = 0;
      this.controls.gameOver();
    }
  }]);

  return Game;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameStage =
/*#__PURE__*/
function () {
  function GameStage(context, game) {
    _classCallCheck(this, GameStage);

    this.ctx = context;
    this.game = game;
    this.frameRate = 60;
    this.frameInterval = 1000 / this.frameRate;
    this.setTime = 0;
    this.cursor = this.game.addCursor();
    this.controls = this.game.addControls();
    this.loadScreen = true;
    this.controls.gameOver();
    this.loopMusic();
  }

  _createClass(GameStage, [{
    key: "ticker",
    value: function ticker(time) {
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
    }
  }, {
    key: "loopMusic",
    value: function loopMusic() {
      var audio = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/Megalovania.mp3');
      audio.addEventListener('ended', function () {
        audio.currentTime = 0;
        audio.play();
      }, false);
      audio.play();
    }
  }]);

  return GameStage;
}();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Wall =
/*#__PURE__*/
function () {
  function Wall(octant, difficulty) {
    _classCallCheck(this, Wall);

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

  _createClass(Wall, [{
    key: "octantLogic",
    value: function octantLogic(octant) {
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
    }
  }, {
    key: "move",
    value: function move(theta) {
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
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var pos = this.pos;
      var x = pos[0];
      var y = pos[1];
      ctx.translate(x + this.xoffset * this.scale, y + this.yoffset * this.scale);
      ctx.rotate(2 * Math.PI / 360 * (this.degreeRotation % 360));
      ctx.drawImage(this.sprite, 100 * this.scale / 2, 100 * this.scale / 2, 100 * this.scale, 100 * this.scale);
      ctx.rotate(2 * Math.PI / 360 * (-this.degreeRotation % 360));
      ctx.translate(-x - this.xoffset * this.scale, -y - this.yoffset * this.scale);
    }
  }]);

  return Wall;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Wave =
/*#__PURE__*/
function () {
  function Wave(pattern, difficulty) {
    _classCallCheck(this, Wave);

    this.pattern = pattern;
    this.end = false;
    this.subwaveTimer = 0;
    this.currentSubwave = 0;
    this.walls = this.addWalls(difficulty);
    this.difficulty = difficulty;
  }

  _createClass(Wave, [{
    key: "addWalls",
    value: function addWalls(difficulty) {
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
    }
  }, {
    key: "move",
    value: function move(degrees, game) {
      // hitbox logic if any of the walls touch cursor, set gameOver = true
      var gameOver = false;

      for (var i = 0; i < 8; i++) {
        if (this.walls[i] !== null) {
          if (this.walls[i].move(degrees, game)) gameOver = true;
        }
      }

      return gameOver;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      for (var i = 0; i < 8; i++) {
        if (this.walls[i] !== null) {
          this.walls[i].draw(ctx);
        }
      }
    }
  }]);

  return Wave;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdIaWdoU2NvcmUiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJkZWdyZWVzIiwiY3Vyc29yU3BlZWQiLCJjdXJzb3IiLCJJbWFnZSIsImRlYWRDdXJzb3IiLCJleHBsb3Npb24iLCJleHBsb3Npb25GcmFtZSIsIngxIiwieTEiLCJzcmMiLCJkaXJlY3Rpb24iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaW1feCIsImRpbV95IiwiaGlnaFNjb3JlcyIsImhpZ2hTY29yZUJveCIsImhpZ2hTY29yZUlucHV0RmllbGQiLCJhZGRIaWdoU2NvcmUiLCJmaXJzdFBsYWNlTmFtZSIsImZpcnN0UGxhY2VTY29yZSIsInNlY29uZFBsYWNlTmFtZSIsInNlY29uZFBsYWNlU2NvcmUiLCJ0aGlyZFBsYWNlTmFtZSIsInRoaXJkUGxhY2VTY29yZSIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJkZWFkU2hpcCIsInN1bk1hcCIsInN0YXRpY01hcCIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlSW5kZXgiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwibW92ZUN1cnNvciIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImV4cGxvc2lvbkFuaW1hdGlvbiIsImZvckVhY2giLCJ3YXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwiYWRkV2F2ZSIsInJlbW92ZVdhdmUiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJyZXNldCIsInN1cnZpdmVkVGltZSIsImZpcnN0UGxhY2UiLCJzZWNvbmRQbGFjZSIsInRoaXJkUGxhY2UiLCJmb2N1cyIsInNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaWdoU2NvcmVOYW1lIiwidmFsdWUiLCJuZXdQbGF5ZXIiLCJpbm5lclRleHQiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJsb2FkU2NyZWVuIiwibG9vcE11c2ljIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwibG9naWMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhdWRpbyIsIkF1ZGlvIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNjYWxlIiwic3BlZWQiLCJkZXNjYWxlRmFjdG9yIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInRoZXRhIiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJjdXJyZW50U3Vid2F2ZSIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNB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RixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUws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QUNBLFVBQUlnQixRQUFRLEdBQUcsS0FBZjs7QUFFQSxXQUFLLElBQUltRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGNBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNPLElBQWQsQ0FBbUJ6RixPQUFuQixFQUE0QmpDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN2QztBQUNEOztBQUVELGFBQU9BLFFBQVA7QUFDQTs7O3lCQUVJbkIsRyxFQUFLO0FBQ1QsV0FBSyxJQUFJc0gsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixlQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY3JCLElBQWQsQ0FBbUJqRyxHQUFuQjtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O0FBR2FrSCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG4gIGNhbnZhcy53aWR0aCA9IDc2ODtcbiAgY2FudmFzLmhlaWdodCA9IDc2ODtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4gIC8vIGluc3RhbnRpYXRlIGdhbWVcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIGNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbiAgZ2FtZXN0YWdlLnRpY2tlcigpO1xufSlcblxuIiwiLy8gcGxheWVyIGNvbnRyb2xzXG5jbGFzcyBDb250cm9scyB7XG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsZWZ0OiB7IGFjdGl2ZTogZmFsc2UgfSxcblx0XHRcdHJpZ2h0OiB7IGFjdGl2ZTogZmFsc2UgfVxuXHRcdH07XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhpZ2hTY29yZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdoLXNjb3JlLWJveCcpO1xuXHRcdHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJsYXknKTtcblx0XHR0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWxvZ28nKTtcblx0XHR0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlLWJveCcpO1xuXHRcdHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWluZm8nKTtcblx0fVxuXG5cdGVuYWJsZVBsYXllckNvbnRyb2xzKCkge1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0ZGlzYWJsZVBsYXllckNvbnRyb2xzKCkge1xuXHRcdGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblx0fVxuXG5cdGtleURvd24oZSkge1xuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0a2V5VXAoZSkge1xuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0c3RhcnRHYW1lKGUpIHtcblx0XHRpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG5cdFx0XHR0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG5cdFx0XHR0aGlzLm92ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZCgnY2xlYXItYmFja2dyb3VuZC1pbWFnZScpO1xuXHRcdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuXHRcdH1cblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWluZm8tZmFkZS1pbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlTGlzdFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIiwiY2xhc3MgQ3Vyc29yIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmN1cnNvclNwZWVkID0gMTA7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHRcdHRoaXMuY3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmRlYWRDdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5leHBsb3Npb24uc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG5cdH1cblxuXHRtb3ZlQ3Vyc29yKGRpcmVjdGlvbikge1xuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRjYXNlICdjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2NjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0ZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCkge1xuXHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHR0aGlzLmV4cGxvc2lvbixcblx0XHRcdFx0dGhpcy54MSxcblx0XHRcdFx0dGhpcy55MSxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdC01MCxcblx0XHRcdFx0LTc1LFxuXHRcdFx0XHQxNTAsXG5cdFx0XHRcdDE1MFxuXHRcdFx0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcblxuXHRcdFx0dGhpcy54MSArPSAxMDA7XG5cdFx0XHRpZiAodGhpcy54MSA9PT0gMTAwMCkge1xuXHRcdFx0XHR0aGlzLnkxICs9IDEwMDtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lID09PSA3MSkge1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdFx0dGhpcy55MSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcbmltcG9ydCB7IEVBU1lfUEFUVEVSTlMsIE1FRElVTV9QQVRURVJOUywgSEFSRF9QQVRURVJOUyB9IGZyb20gJy4vcGF0dGVybnMnO1xuXG4vLyBjb25zdHJ1Y3RvclxuY2xhc3MgR2FtZSB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5kaW1feCA9IDc2ODtcblx0XHR0aGlzLmRpbV95ID0gNzY4O1xuXHRcdC8vIFRPRE8gZmV0Y2ggaGlnaCBzY29yZXMgZnJvbSBkYlxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRcdFsgJ0FkbWluaXN0cmF0b3InLCAyOC43OSBdLFxuXHRcdFx0WyAnWmVrZW1laXN0ZXInLCAyMy40NSBdLFxuXHRcdFx0WyAnVGhlSm9uQmFlJywgMy4zMyBdXG5cdFx0XTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtZm9ybScpO1xuXHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWRkSGlnaFNjb3JlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J3NlY29uZC1wbGFjZS1zY29yZSdcblx0XHQpO1xuXHRcdHRoaXMudGhpcmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy50aGlyZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1zY29yZScpO1xuXG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnN0YXRpY01hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHRcdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR9LCA1MDApO1xuXHRcdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xuXHR9XG5cblx0bG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdFx0XHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ21lZGl1bSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2hhcmQnO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHRcdFx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXRzIHRyYW5zZm9ybSB0byBjbGVhciBlbnRpcmUgY2F2YXNcblx0XHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94ICsgMjU2LCBkaW1feSArIDI1Nik7IC8vIGNsZWFyIGNhbnZhc1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHRcdH1cblxuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0XHQvLyBDdXJzb3Jcblx0XHRpZiAoIXRoaXMuZGVhZFNoaXApIHtcblx0XHRcdHRoaXMuY3Vyc29yLmRyYXcoY3R4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJzb3IuZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCk7XG5cdFx0fVxuXG5cdFx0Ly8gV2F2ZXNcblx0XHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdHdhdmUuZHJhdyhjdHgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWFydGggb3JiaXRcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHRcdC8vIFdhcnBnYXRlXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRcdGRpbV94IC8gNCxcblx0XHRcdGRpbV95IC8gNFxuXHRcdCk7XG5cblx0XHQvLyBNYXBcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXHR9XG5cblx0YWRkQ3Vyc29yKCkge1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRcdHJldHVybiB0aGlzLmN1cnNvcjtcblx0fVxuXG5cdGFkZENvbnRyb2xzKCkge1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG5cdH1cblxuXHRhZGRXYXZlKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRjb25zdCB7IGRpZmZpY3VsdHkgfSA9IHRoaXM7XG5cblx0XHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCB8fFxuXHRcdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdFx0KSB7XG5cdFx0XHQvLyBpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgKSB7XG5cdFx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcblx0XHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFQVNZX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0TUVESVVNX1BBVFRFUk5TW1xuXHRcdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1FRElVTV9QQVRURVJOUy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdoYXJkJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0fVxuXHRcdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG5cdH1cblxuXHRyZW1vdmVXYXZlKCkge1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0XHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRcdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR3YXZlTG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0XHRsZXQgZ2FtZSA9IHRoaXM7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHRcdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHRcdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdFx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0XHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdFx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdFx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0XHRkZWdyZWVzICs9IDM2MDtcblx0XHR9XG5cblx0XHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyB0b3AgcmlnaHQgdGltZXJcblx0dGltZXJDb3VudGVyKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRcdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHRcdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXJ0TmV3R2FtZSgpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cdFx0dGhpcy5jdXJzb3IucmVzZXQoKTtcblx0XHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG5cdH1cblxuXHRnYW1lT3ZlcigpIHtcblx0XHQvLyBUT0RPIGNoZWNrIGhpZ2ggc2NvcmUgdG8gZGlzcGxheSBuYW1lIHByb21wdFxuXHRcdC8vIGlmIHRydWUsIG9uIGZvcm0gc3VibWl0LCBzZXQgaGlnaHNjb3JlID0gZmFsc2UgYW5kIHJlY2FsbCBnYW1lT3ZlcigpXG5cdFx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdGlmIChcblx0XHRcdHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdIHx8XG5cdFx0XHRzdXJ2aXZlZFRpbWUgPiB0aGlyZFBsYWNlWzFdXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IHRydWU7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZFswXS5mb2N1cygpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLnNlbGVjdCgpO1xuXHRcdH1cblx0XHR0aGlzLmRlYWRTaGlwID0gdHJ1ZTtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHR9XG5cblx0YWRkSGlnaFNjb3JlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHN1cnZpdmVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXG5cdFx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J2hpZ2gtc2NvcmUtaW5wdXQtZmllbGQnXG5cdFx0KVswXTtcblx0XHRsZXQgaGlnaFNjb3JlTmFtZSA9IGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWU7XG5cdFx0bGV0IG5ld1BsYXllciA9IFsgaGlnaFNjb3JlTmFtZSwgc3Vydml2ZWRUaW1lIF07XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdFx0aWYgKHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gZmlyc3RQbGFjZTtcblx0XHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIGlmIChzdXJ2aXZlZFRpbWUgPiBzZWNvbmRQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gWyBmaXJzdFBsYWNlLCBzZWNvbmRQbGFjZSwgdGhpcmRQbGFjZSBdO1xuXG5cdFx0Ly8gVE9ETyBtb3ZlIGludG8gb3duIGZ1bmN0aW9uXG5cdFx0Ly8gcmVhc3NpZ24gdG9wIHN1cnZpdm9yc1xuXHRcdC8vIGRlYnVnZ2VyXG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgRmlyc3Q6ICR7Zmlyc3RQbGFjZVswXX1gO1xuXHRcdHRoaXMuZmlyc3RQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IGZpcnN0UGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHNlY29uZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgVGhpcmQ6ICR7dGhpcmRQbGFjZVswXX1gO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblxuXHRcdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdFx0Ly8gY2xlYXIgZW50ZXJlZCBuYW1lIGFuZCByZXNldCBnYW1lIGxvZ2ljXG5cdFx0aGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmNsYXNzIEdhbWVTdGFnZSB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIGdhbWUpIHtcblx0XHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcblx0XHR0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuXHRcdHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZyYW1lUmF0ZTtcblx0XHR0aGlzLnNldFRpbWUgPSAwO1xuXHRcdHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuXHRcdHRoaXMuY29udHJvbHMgPSB0aGlzLmdhbWUuYWRkQ29udHJvbHMoKTtcblx0XHR0aGlzLmxvYWRTY3JlZW4gPSB0cnVlO1xuICAgIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbiAgICB0aGlzLmxvb3BNdXNpYygpO1xuXHR9XG5cblx0dGlja2VyKHRpbWUpIHtcblx0XHRjb25zdCB7IGZyYW1lSW50ZXJ2YWwsIHNldFRpbWUgfSA9IHRoaXM7XG5cblx0XHQvLyBmcmFtZSBsaW1pdGVyXG5cdFx0bGV0IGN1clRpbWUgPSB0aW1lO1xuXHRcdGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cblx0XHQvLyBkcmF3IGZyYW1lXG5cdFx0aWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdFx0dGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5nYW1lLmRyYXcoKTtcblx0XHRcdHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGxvb3BNdXNpYygpIHtcblx0XHRjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhcblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvTWVnYWxvdmFuaWEubXAzJ1xuXHRcdCk7XG5cdFx0YXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdlbmRlZCcsXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblx0XHRcdFx0YXVkaW8ucGxheSgpO1xuXHRcdFx0fSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0XHRhdWRpby5wbGF5KCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YWdlO1xuIiwiLy8gMiBzZWNvbmQgc3Bhd24gaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEVBU1lfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgWyBbIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAgXSBcbiAgXSxcbiAgWyBbIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEgXSBcbiAgXSxcbiAgWyBbIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAgXSwgXG4gICAgWyAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0gXG4gIF1cbl07XG5cbi8vIDEgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBNRURJVU1fUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAwLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwIF1cblx0XSxcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXVxuXHRdXG5dO1xuXG4vLyAwLjUgc2Vjb25kIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBIQVJEX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG5cdF0sXG5cdFtcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAgXVxuXHRdXG5dO1xuIiwiY2xhc3MgV2FsbCB7XG5cdGNvbnN0cnVjdG9yKG9jdGFudCwgZGlmZmljdWx0eSkge1xuXHRcdHRoaXMub2N0YW50ID0gb2N0YW50O1xuXHRcdHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5zY2FsZSA9IDQ7XG5cdFx0Ly8gdGhpcy5zcGVlZCA9IDg7XG5cdFx0Ly8gdGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuXHRcdHRoaXMuc3ByaXRlLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3RocnVzdGVyLTIucG5nJztcblx0XHRpZiAoZGlmZmljdWx0eSA9PT0gJ2Vhc3knKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gODtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnbWVkaXVtJykge1xuXHRcdFx0dGhpcy5zcGVlZCA9IDk7XG5cdFx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA5O1xuXHRcdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ2hhcmQnKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gMTA7XG5cdFx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjE7XG5cdFx0fVxuXG5cdFx0dGhpcy5vY3RhbnRMb2dpYyhvY3RhbnQpO1xuXHR9XG5cblx0b2N0YW50TG9naWMob2N0YW50KSB7XG5cdFx0c3dpdGNoIChvY3RhbnQpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTkwO1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxNTcuNSwgMjAyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAwLCAwIF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtNDU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDMwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMjAyLjUsIDI0Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCAwIF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAwO1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMjQ3LjUsIDI5Mi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAwIF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA0NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTMwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMjk3LjUsIDMzNi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCAzODQgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDkwO1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAzMzYuNSwgMzYwIF07XG5cdFx0XHRcdHRoaXMuaGl0Ym94MiA9IFsgMCwgMjIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgNzY4IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxMzU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTMwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMjIuNSwgNjcuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgNzY4IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAxODA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgNjcuNSwgMTEyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDc6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAwLCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDIyNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEyMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDExMi41LCAxNTcuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRtb3ZlKHRoZXRhKSB7XG5cdFx0Y29uc3QgeyBoaXRib3gsIGhpdGJveDIgfSA9IHRoaXM7XG5cblx0XHRpZiAodGhpcy5zY2FsZSA+IDEgKyB0aGlzLmRlc2NhbGVGYWN0b3IpIHRoaXMuc2NhbGUgLT0gdGhpcy5kZXNjYWxlRmFjdG9yO1xuXHRcdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXHRcdGxldCBwb3N4ID0gdGhpcy5wb3NbMF07XG5cdFx0bGV0IHBvc3kgPSB0aGlzLnBvc1sxXTtcblx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHBvc3gpICoqIDIgKyAoMzg0IC0gcG9zeSkgKiogMik7XG5cdFx0Ly8gZGVidWdnZXJcblxuXHRcdGlmICh0aGlzLm9jdGFudCA9PT0gMCB8fCB0aGlzLm9jdGFudCA9PT0gMiB8fCB0aGlzLm9jdGFudCA9PT0gNikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGV0YSA+PSBoaXRib3hbMF0gJiZcblx0XHRcdFx0dGhldGEgPD0gaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDEyMFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSA0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGV0YSA+PSBoaXRib3hbMF0gJiZcblx0XHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMCkgfHxcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveDJbMF0gJiZcblx0XHRcdFx0XHR0aGV0YSA8PSBoaXRib3gyWzFdICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMSB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDMgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA1IHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gN1xuXHRcdCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGV0YSA+PSBoaXRib3hbMF0gJiZcblx0XHRcdFx0dGhldGEgPD0gaGl0Ym94WzFdICYmXG5cdFx0XHRcdGRpc3RhbmNlID49IDEyMCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxNzBcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IGR4ID0gMzg0IC0gcG9zeDtcblx0XHRsZXQgZHkgPSAzODQgLSBwb3N5O1xuXHRcdC8vIHdhbGxzIHdpbGwgY29udmVyZ2UgdG93YXJkcyBjZW50ZXJcblx0XHRpZiAoZHggPiAwKSB7XG5cdFx0XHR0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoZHggPCAwKSB7XG5cdFx0XHR0aGlzLnBvc1swXSAtPSB0aGlzLnNwZWVkO1xuXHRcdH1cblx0XHRpZiAoZHkgPiAwKSB7XG5cdFx0XHR0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkO1xuXHRcdH0gZWxzZSBpZiAoZHkgPCAwKSB7XG5cdFx0XHR0aGlzLnBvc1sxXSAtPSB0aGlzLnNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiBnYW1lT3Zlcjtcblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Y29uc3QgeyBwb3MgfSA9IHRoaXM7XG5cdFx0bGV0IHggPSBwb3NbMF07XG5cdFx0bGV0IHkgPSBwb3NbMV07XG5cblx0XHRjdHgudHJhbnNsYXRlKHggKyB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLCB5ICsgdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZSk7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdFx0Y3R4LmRyYXdJbWFnZShcblx0XHRcdHRoaXMuc3ByaXRlLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKC10aGlzLmRlZ3JlZVJvdGF0aW9uICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZShcblx0XHRcdC14IC0gdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSxcblx0XHRcdC15IC0gdGhpcy55b2Zmc2V0ICogdGhpcy5zY2FsZVxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYWxsO1xuIiwiaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxscyc7XG5cbmNsYXNzIFdhdmUge1xuXHRjb25zdHJ1Y3RvcihwYXR0ZXJuLCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcblx0XHR0aGlzLmVuZCA9IGZhbHNlO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLmN1cnJlbnRTdWJ3YXZlID0gMDtcblx0XHR0aGlzLndhbGxzID0gdGhpcy5hZGRXYWxscyhkaWZmaWN1bHR5KTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuXHR9XG5cblx0YWRkV2FsbHMoZGlmZmljdWx0eSkge1xuXHRcdGxldCB3YWxscyA9IFtdO1xuXHRcdGNvbnN0IHsgcGF0dGVybiB9ID0gdGhpcztcblxuXHRcdGZvciAobGV0IG9jdGFudCA9IDA7IG9jdGFudCA8IDg7IG9jdGFudCsrKSB7XG5cdFx0XHRpZiAocGF0dGVybltvY3RhbnRdID09PSAxKSB7XG5cdFx0XHRcdGxldCBuZXdXYWxsID0gbmV3IFdhbGwob2N0YW50LCBkaWZmaWN1bHR5KTtcblx0XHRcdFx0d2FsbHMucHVzaChuZXdXYWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdhbGxzLnB1c2gobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdhbGxzO1xuXHR9XG5cblx0bW92ZShkZWdyZWVzLCBnYW1lKSB7XG5cdFx0Ly8gaGl0Ym94IGxvZ2ljIGlmIGFueSBvZiB0aGUgd2FsbHMgdG91Y2ggY3Vyc29yLCBzZXQgZ2FtZU92ZXIgPSB0cnVlXG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0aWYgKHRoaXMud2FsbHNbaV0ubW92ZShkZWdyZWVzLCBnYW1lKSkgZ2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBnYW1lT3Zlcjtcblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMud2FsbHNbaV0uZHJhdyhjdHgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXZlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==