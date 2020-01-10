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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJzdGF0ZSIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInN0YXJ0R2FtZSIsImdhbWVPdmVyIiwiaGlnaFNjb3JlTGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvdmVybGF5IiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld0hpZ2hTY29yZSIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQ3Vyc29yIiwiY29udGV4dCIsImRlZ3JlZXMiLCJjdXJzb3JTcGVlZCIsImN1cnNvciIsIkltYWdlIiwiZGVhZEN1cnNvciIsImV4cGxvc2lvbiIsImV4cGxvc2lvbkZyYW1lIiwieDEiLCJ5MSIsInNyYyIsImRpcmVjdGlvbiIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRpbV94IiwiZGltX3kiLCJoaWdoU2NvcmVzIiwiaGlnaFNjb3JlQm94IiwiaGlnaFNjb3JlSW5wdXRGaWVsZCIsImFkZEhpZ2hTY29yZSIsImZpcnN0UGxhY2VOYW1lIiwiZmlyc3RQbGFjZVNjb3JlIiwic2Vjb25kUGxhY2VOYW1lIiwic2Vjb25kUGxhY2VTY29yZSIsInRoaXJkUGxhY2VOYW1lIiwidGhpcmRQbGFjZVNjb3JlIiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJmcmFtZUludGVydmFsIiwiY29udHJvbHMiLCJtb3ZlQ3Vyc29yIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZXhwbG9zaW9uQW5pbWF0aW9uIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJhZGRXYXZlIiwicmVtb3ZlV2F2ZSIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsInJlc2V0Iiwic3Vydml2ZWRUaW1lIiwiZmlyc3RQbGFjZSIsInNlY29uZFBsYWNlIiwidGhpcmRQbGFjZSIsImZvY3VzIiwic2VsZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhpZ2hTY29yZU5hbWUiLCJ2YWx1ZSIsIm5ld1BsYXllciIsImlubmVyVGV4dCIsImZyYW1lUmF0ZSIsInNldFRpbWUiLCJhZGRDdXJzb3IiLCJhZGRDb250cm9scyIsImxvYWRTY3JlZW4iLCJsb29wTXVzaWMiLCJ0aW1lIiwiY3VyVGltZSIsInRpbWVEaWYiLCJsb2dpYyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImF1ZGlvIiwiQXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoRCxNQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0FELFFBQU0sQ0FBQ0UsS0FBUCxHQUFlLEdBQWY7QUFDQUYsUUFBTSxDQUFDRyxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRCxLQUFHLENBQUNFLHdCQUFKLEdBQStCLGtCQUEvQixDQUxnRCxDQU9oRDs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0RBQUosQ0FBU0osR0FBVCxDQUFiO0FBQ0EsTUFBTUssU0FBUyxHQUFHLElBQUlDLHFEQUFKLENBQWNOLEdBQWQsRUFBbUJHLElBQW5CLENBQWxCO0FBQ0FFLFdBQVMsQ0FBQ0UsTUFBVjtBQUNELENBWEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0lBQ01DLFE7OztBQUNMLG9CQUFZTCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2pCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtNLEtBQUwsR0FBYTtBQUNaQyxVQUFJLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVYsT0FETTtBQUVaQyxXQUFLLEVBQUU7QUFBRUQsY0FBTSxFQUFFO0FBQVY7QUFGSyxLQUFiO0FBSUEsU0FBS0UscUJBQUwsR0FBNkIsS0FBS0EscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQTdCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0gsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS0ksU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVKLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxTQUFLSyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0wsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtNLGFBQUwsR0FBcUIxQixRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxnQkFBaEMsQ0FBckI7QUFDQSxTQUFLQyxPQUFMLEdBQWU1QixRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsU0FBS0UsT0FBTCxHQUFlN0IsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQWY7QUFDQSxTQUFLRyxTQUFMLEdBQWlCOUIsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsV0FBaEMsQ0FBakI7QUFDQSxTQUFLSSxRQUFMLEdBQWdCL0IsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQWhCO0FBQ0E7Ozs7MkNBRXNCO0FBQ3RCM0IsY0FBUSxDQUFDZ0MsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS1IsU0FBN0M7QUFFQXhCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS3FCLE9BQTFDO0FBQ0F0QixjQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtzQixLQUF4QztBQUNBOzs7NENBRXVCO0FBQ3ZCLFVBQUksQ0FBQyxLQUFLZCxJQUFMLENBQVV3QixZQUFmLEVBQTZCO0FBQzVCakMsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS3VCLFNBQTFDO0FBQ0E7O0FBQ0R4QixjQUFRLENBQUNnQyxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLVixPQUE3QztBQUNBdEIsY0FBUSxDQUFDZ0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS1QsS0FBM0M7QUFDQTs7OzRCQUVPVyxDLEVBQUc7QUFDVixjQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDQyxhQUFLLFlBQUw7QUFDQyxjQUFJLENBQUMsS0FBS3BCLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkQsTUFBdEIsRUFBOEI7QUFDN0IsaUJBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkQsTUFBakIsR0FBMEIsSUFBMUI7QUFDQTs7QUFDRDs7QUFDRCxhQUFLLFdBQUw7QUFDQyxjQUFJLENBQUMsS0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFyQixFQUE2QjtBQUM1QixpQkFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFoQixHQUF5QixJQUF6QjtBQUNBOztBQUNEOztBQUNEO0FBQ0M7QUFaRjtBQWNBOzs7MEJBRUtpQixDLEVBQUc7QUFDUixjQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDQyxhQUFLLFlBQUw7QUFDQyxlQUFLcEIsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUFqQixHQUEwQixLQUExQjtBQUNBOztBQUNELGFBQUssV0FBTDtBQUNDLGVBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsTUFBaEIsR0FBeUIsS0FBekI7QUFDQTs7QUFDRDtBQUNDO0FBUkY7QUFVQTs7OzhCQUVTaUIsQyxFQUFHO0FBQ1osVUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF3QjtBQUN2QixhQUFLMUIsSUFBTCxDQUFVMkIsWUFBVjtBQUNBLGFBQUtSLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsd0JBQTlCO0FBQ0EsYUFBS1QsT0FBTCxDQUFhLENBQWIsRUFBZ0JRLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxhQUFLVixPQUFMLENBQWEsQ0FBYixFQUFnQlEsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLDBCQUE5QjtBQUNBLGFBQUtSLFNBQUwsQ0FBZSxDQUFmLEVBQWtCTyxTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsb0JBQW5DO0FBQ0EsYUFBS1QsU0FBTCxDQUFlLENBQWYsRUFBa0JPLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxtQkFBaEM7QUFDQSxhQUFLUCxRQUFMLENBQWMsQ0FBZCxFQUFpQk0sU0FBakIsQ0FBMkJFLE1BQTNCLENBQWtDLHlCQUFsQztBQUNBLGFBQUtSLFFBQUwsQ0FBYyxDQUFkLEVBQWlCTSxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsMEJBQS9CO0FBQ0EsYUFBS1osYUFBTCxDQUFtQixDQUFuQixFQUFzQlcsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLFFBQXBDO0FBQ0EsYUFBS2pCLG9CQUFMO0FBQ0E7QUFDRDs7OytCQUVVO0FBQ1YsV0FBS1osSUFBTCxDQUFVZ0IsUUFBVjtBQUNBLFdBQUtJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUSxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsMEJBQWpDO0FBQ0EsV0FBS1YsT0FBTCxDQUFhLENBQWIsRUFBZ0JRLFNBQWhCLENBQTBCQyxHQUExQixDQUE4Qix5QkFBOUI7QUFDQSxXQUFLUixTQUFMLENBQWUsQ0FBZixFQUFrQk8sU0FBbEIsQ0FBNEJFLE1BQTVCLENBQW1DLG1CQUFuQztBQUNBLFdBQUtULFNBQUwsQ0FBZSxDQUFmLEVBQWtCTyxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0Msb0JBQWhDO0FBQ0EsV0FBS1AsUUFBTCxDQUFjLENBQWQsRUFBaUJNLFNBQWpCLENBQTJCRSxNQUEzQixDQUFrQywwQkFBbEM7QUFDQSxXQUFLUixRQUFMLENBQWMsQ0FBZCxFQUFpQk0sU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLHlCQUEvQjtBQUNBLFdBQUtaLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JXLFNBQXRCLENBQWdDRSxNQUFoQyxDQUF1QyxRQUF2QztBQUNBLFdBQUtwQixxQkFBTDtBQUNBOzs7Ozs7QUFHYUwsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5Rk0wQixNOzs7QUFDTCxrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNwQixTQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFJRCxLQUFKLEVBQWxCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixJQUFJRixLQUFKLEVBQWpCO0FBQ0EsU0FBS0csY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLTixNQUFMLENBQVlPLEdBQVosR0FDQyx3R0FERDtBQUVBLFNBQUtMLFVBQUwsQ0FBZ0JLLEdBQWhCLEdBQ0MsMEdBREQ7QUFFQSxTQUFLSixTQUFMLENBQWVJLEdBQWYsR0FDQyx1R0FERDtBQUVBOzs7OytCQUVVQyxTLEVBQVc7QUFDckIsY0FBUUEsU0FBUjtBQUNDLGFBQUssV0FBTDtBQUNDLGVBQUtWLE9BQUwsSUFBZ0IsS0FBS0MsV0FBckI7QUFDQTs7QUFFRCxhQUFLLFlBQUw7QUFDQyxlQUFLRCxPQUFMLElBQWdCLEtBQUtDLFdBQXJCO0FBQ0E7QUFQRjtBQVNBOzs7eUJBRUlyQyxHLEVBQUs7QUFDVEEsU0FBRyxDQUFDK0MsSUFBSjtBQUNBL0MsU0FBRyxDQUFDZ0QsU0FBSixDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QjtBQUNBaEQsU0FBRyxDQUFDaUQsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsS0FBS2YsT0FBTCxHQUFlLEdBQXBDLENBQVg7QUFDQXBDLFNBQUcsQ0FBQ2dELFNBQUosQ0FBYyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FoRCxTQUFHLENBQUNvRCxTQUFKLENBQWMsS0FBS2QsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBQyxFQUEvQjtBQUNBdEMsU0FBRyxDQUFDcUQsT0FBSjtBQUNBOzs7dUNBRWtCckQsRyxFQUFLO0FBQ3ZCLFVBQUksS0FBSzBDLGNBQUwsSUFBdUIsRUFBM0IsRUFBK0I7QUFDOUIxQyxXQUFHLENBQUMrQyxJQUFKO0FBQ0EvQyxXQUFHLENBQUNnRCxTQUFKLENBQWMsTUFBTSxDQUFwQixFQUF1QixNQUFNLENBQTdCO0FBQ0FoRCxXQUFHLENBQUNpRCxNQUFKLENBQVcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWMsR0FBZCxJQUFxQixLQUFLZixPQUFMLEdBQWUsR0FBcEMsQ0FBWDtBQUNBcEMsV0FBRyxDQUFDZ0QsU0FBSixDQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQWhELFdBQUcsQ0FBQ29ELFNBQUosQ0FDQyxLQUFLWCxTQUROLEVBRUMsS0FBS0UsRUFGTixFQUdDLEtBQUtDLEVBSE4sRUFJQyxHQUpELEVBS0MsR0FMRCxFQU1DLENBQUMsRUFORixFQU9DLENBQUMsRUFQRixFQVFDLEdBUkQsRUFTQyxHQVREO0FBV0E1QyxXQUFHLENBQUNxRCxPQUFKO0FBRUEsYUFBS1gsY0FBTDtBQUVBLGFBQUtDLEVBQUwsSUFBVyxHQUFYOztBQUNBLFlBQUksS0FBS0EsRUFBTCxLQUFZLElBQWhCLEVBQXNCO0FBQ3JCLGVBQUtDLEVBQUwsSUFBVyxHQUFYO0FBQ0EsZUFBS0QsRUFBTCxHQUFVLENBQVY7QUFDQTs7QUFFRCxZQUFJLEtBQUtELGNBQUwsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDL0IsZUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxlQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBO0FBQ0Q7O0FBRUQ1QyxTQUFHLENBQUMrQyxJQUFKO0FBQ0EvQyxTQUFHLENBQUNnRCxTQUFKLENBQWMsTUFBTSxDQUFwQixFQUF1QixNQUFNLENBQTdCO0FBQ0FoRCxTQUFHLENBQUNpRCxNQUFKLENBQVcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWMsR0FBZCxJQUFxQixLQUFLZixPQUFMLEdBQWUsR0FBcEMsQ0FBWDtBQUNBcEMsU0FBRyxDQUFDZ0QsU0FBSixDQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQWhELFNBQUcsQ0FBQ29ELFNBQUosQ0FBYyxLQUFLWixVQUFuQixFQUErQixDQUEvQixFQUFrQyxDQUFDLEVBQW5DO0FBQ0F4QyxTQUFHLENBQUNxRCxPQUFKO0FBQ0E7Ozs0QkFFTztBQUNQLFdBQUtYLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxXQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0E7Ozs7OztBQUdGVSxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQixNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0NBR0E7O0lBQ005QixJOzs7QUFDTCxnQkFBWStCLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFDcEIsU0FBS25DLEdBQUwsR0FBV21DLE9BQVg7QUFDQSxTQUFLcUIsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYixDQUhvQixDQUlwQjs7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQ2pCLENBQUUsZUFBRixFQUFtQixLQUFuQixDQURpQixFQUVqQixDQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FGaUIsRUFHakIsQ0FBRSxXQUFGLEVBQWUsSUFBZixDQUhpQixDQUFsQjtBQUtBLFNBQUtDLFlBQUwsR0FBb0JqRSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBcEI7QUFDQSxTQUFLdUMsbUJBQUwsR0FBMkJsRSxRQUFRLENBQUMyQixzQkFBVCxDQUMxQix3QkFEMEIsQ0FBM0I7QUFHQTNCLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsS0FBS2tFLFlBQUwsQ0FBa0IvQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQztBQUNBLFNBQUtnRCxjQUFMLEdBQXNCcEUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0Msa0JBQWhDLENBQXRCO0FBQ0EsU0FBSzBDLGVBQUwsR0FBdUJyRSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBdkI7QUFDQSxTQUFLMkMsZUFBTCxHQUF1QnRFLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLG1CQUFoQyxDQUF2QjtBQUNBLFNBQUs0QyxnQkFBTCxHQUF3QnZFLFFBQVEsQ0FBQzJCLHNCQUFULENBQ3ZCLG9CQUR1QixDQUF4QjtBQUdBLFNBQUs2QyxjQUFMLEdBQXNCeEUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0Msa0JBQWhDLENBQXRCO0FBQ0EsU0FBSzhDLGVBQUwsR0FBdUJ6RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBdkI7QUFFQSxTQUFLK0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxTQUFLakQsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUtrRCxRQUFMLEdBQWdCLEtBQWhCO0FBRUEsU0FBS0MsTUFBTCxHQUFjLElBQUl2QyxLQUFKLEVBQWQ7QUFDQSxTQUFLd0MsU0FBTCxHQUFpQixJQUFJeEMsS0FBSixFQUFqQjtBQUNBLFNBQUt5QyxTQUFMLEdBQWlCLElBQUl6QyxLQUFKLEVBQWpCO0FBQ0EsU0FBSzBDLFNBQUwsR0FBaUIsSUFBSTFDLEtBQUosRUFBakI7QUFDQSxTQUFLMkMsU0FBTCxHQUFpQixJQUFJM0MsS0FBSixFQUFqQjtBQUNBLFNBQUs0QyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0gsU0FBTCxDQUFlbkMsR0FBZixHQUNDLDRGQUREO0FBRUEsU0FBS29DLFNBQUwsQ0FBZXBDLEdBQWYsR0FDQyw0RkFERDtBQUVBLFNBQUtxQyxTQUFMLENBQWVyQyxHQUFmLEdBQ0MsNEZBREQ7QUFFQSxTQUFLdUMsUUFBTCxHQUFnQixDQUFFLEtBQUtKLFNBQVAsRUFBa0IsS0FBS0MsU0FBdkIsRUFBa0MsS0FBS0MsU0FBdkMsQ0FBaEI7QUFDQSxTQUFLSixNQUFMLENBQVlqQyxHQUFaLEdBQWtCLHdEQUFsQjtBQUNBLFNBQUt3QyxhQUFMLEdBQXFCQyxXQUFXLENBQUMsWUFBTTtBQUN0QyxXQUFJLENBQUNILGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxVQUFJLEtBQUksQ0FBQ0EsYUFBTCxLQUF1QixDQUEzQixFQUE4QixLQUFJLENBQUNBLGFBQUwsR0FBcUIsQ0FBckI7QUFDOUIsS0FIK0IsRUFHN0IsR0FINkIsQ0FBaEM7QUFJQSxTQUFLSSxLQUFMLEdBQWE3RixRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxPQUFoQyxDQUFiO0FBQ0E7Ozs7MEJBRUttRSxhLEVBQWU7QUFDcEIsVUFBSSxDQUFDLEtBQUtwQixVQUFWLEVBQXNCO0FBQUEsWUFDYnFCLFFBRGEsR0FDUSxJQURSLENBQ2JBLFFBRGE7QUFBQSxZQUNIbkQsTUFERyxHQUNRLElBRFIsQ0FDSEEsTUFERzs7QUFFckIsWUFBSW1ELFFBQVEsQ0FBQ2hGLEtBQVQsQ0FBZUMsSUFBZixDQUFvQkMsTUFBeEIsRUFBZ0M7QUFDL0IyQixnQkFBTSxDQUFDb0QsVUFBUCxDQUFrQixZQUFsQjtBQUNBLFNBRkQsTUFFTyxJQUFJRCxRQUFRLENBQUNoRixLQUFULENBQWVHLEtBQWYsQ0FBcUJELE1BQXpCLEVBQWlDO0FBQ3ZDMkIsZ0JBQU0sQ0FBQ29ELFVBQVAsQ0FBa0IsV0FBbEI7QUFDQTs7QUFFRCxZQUFJLEtBQUtyQixnQkFBTCxHQUF3QixNQUFNLElBQWxDLEVBQXdDO0FBQ3ZDLGVBQUtLLFVBQUwsR0FBa0IsUUFBbEI7QUFDQTs7QUFDRCxZQUFJLEtBQUtMLGdCQUFMLEdBQXdCLE9BQU8sSUFBbkMsRUFBeUM7QUFDeEMsZUFBS0ssVUFBTCxHQUFrQixNQUFsQjtBQUNBOztBQUVELGFBQUtpQixZQUFMLENBQWtCSCxhQUFsQjtBQUVBLGFBQUtJLFNBQUwsQ0FBZUosYUFBZjtBQUNBO0FBQ0Q7OzsyQkFFTTtBQUFBLFVBQ0VoQyxLQURGLEdBQ3lELElBRHpELENBQ0VBLEtBREY7QUFBQSxVQUNTQyxLQURULEdBQ3lELElBRHpELENBQ1NBLEtBRFQ7QUFBQSxVQUNnQnpELEdBRGhCLEdBQ3lELElBRHpELENBQ2dCQSxHQURoQjtBQUFBLFVBQ3FCb0YsUUFEckIsR0FDeUQsSUFEekQsQ0FDcUJBLFFBRHJCO0FBQUEsVUFDK0JELGFBRC9CLEdBQ3lELElBRHpELENBQytCQSxhQUQvQjtBQUFBLFVBQzhDTCxNQUQ5QyxHQUN5RCxJQUR6RCxDQUM4Q0EsTUFEOUM7QUFFTjlFLFNBQUcsQ0FBQytDLElBQUo7QUFDQS9DLFNBQUcsQ0FBQzZGLFlBQUosQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFITSxDQUc4Qjs7QUFDcEM3RixTQUFHLENBQUM4RixTQUFKLENBQWMsQ0FBQyxHQUFmLEVBQW9CLENBQUMsR0FBckIsRUFBMEJ0QyxLQUFLLEdBQUcsR0FBbEMsRUFBdUNDLEtBQUssR0FBRyxHQUEvQyxFQUpNLENBSStDOztBQUNyRHpELFNBQUcsQ0FBQ3FELE9BQUo7O0FBQ0EsVUFBSSxDQUFDLEtBQUtlLFVBQVYsRUFBc0I7QUFDckIsYUFBS08sUUFBTCxJQUFpQixLQUFLQyxhQUF0QjtBQUNBOztBQUVENUUsU0FBRyxDQUFDZ0QsU0FBSixDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QjtBQUNBaEQsU0FBRyxDQUFDaUQsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsS0FBS3dCLFFBQUwsR0FBZ0IsR0FBckMsQ0FBWDtBQUNBM0UsU0FBRyxDQUFDZ0QsU0FBSixDQUFjLENBQUMsR0FBRCxHQUFPLENBQXJCLEVBQXdCLENBQUMsR0FBRCxHQUFPLENBQS9CO0FBRUFoRCxTQUFHLENBQUMrRixTQUFKLEdBQWdCLE1BQWhCO0FBQ0EvRixTQUFHLENBQUNnRyxXQUFKLEdBQWtCLE1BQWxCLENBZk0sQ0FpQk47O0FBQ0EsVUFBSSxDQUFDLEtBQUtuQixRQUFWLEVBQW9CO0FBQ25CLGFBQUt2QyxNQUFMLENBQVkyRCxJQUFaLENBQWlCakcsR0FBakI7QUFDQSxPQUZELE1BRU87QUFDTixhQUFLc0MsTUFBTCxDQUFZNEQsa0JBQVosQ0FBK0JsRyxHQUEvQjtBQUNBLE9BdEJLLENBd0JOOzs7QUFDQSxXQUFLd0UsS0FBTCxDQUFXMkIsT0FBWCxDQUFtQixVQUFDQyxJQUFELEVBQVU7QUFDNUJBLFlBQUksQ0FBQ0gsSUFBTCxDQUFVakcsR0FBVjtBQUNBLE9BRkQsRUF6Qk0sQ0E2Qk47O0FBQ0EsV0FBS0EsR0FBTCxDQUFTcUcsU0FBVDtBQUNBLFdBQUtyRyxHQUFMLENBQVNzRyxHQUFULENBQWE5QyxLQUFLLEdBQUcsQ0FBckIsRUFBd0JDLEtBQUssR0FBRyxDQUFoQyxFQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxFQUEyQ1AsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBckQsRUFBd0QsS0FBeEQ7QUFDQSxXQUFLbkQsR0FBTCxDQUFTdUcsTUFBVCxHQWhDTSxDQWtDTjs7QUFDQSxXQUFLdkcsR0FBTCxDQUFTb0QsU0FBVCxDQUNDZ0MsUUFBUSxDQUFDRCxhQUFELENBRFQsRUFFQzNCLEtBQUssR0FBRyxDQUFSLEdBQVksSUFGYixFQUdDQyxLQUFLLEdBQUcsQ0FBUixHQUFZLElBSGIsRUFJQ0QsS0FBSyxHQUFHLENBSlQsRUFLQ0MsS0FBSyxHQUFHLENBTFQsRUFuQ00sQ0EyQ047O0FBQ0EsV0FBS3pELEdBQUwsQ0FBU29ELFNBQVQsQ0FBbUIwQixNQUFuQixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQ3RCLEtBQWpDLEVBQXdDQyxLQUF4QztBQUNBOzs7Z0NBRVc7QUFDWCxXQUFLbkIsTUFBTCxHQUFjLElBQUlKLDhDQUFKLEVBQWQ7QUFDQSxhQUFPLEtBQUtJLE1BQVo7QUFDQTs7O2tDQUVhO0FBQ2IsV0FBS21ELFFBQUwsR0FBZ0IsSUFBSWpGLGlEQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLGFBQU8sS0FBS2lGLFFBQVo7QUFDQTs7OzRCQUVPRCxhLEVBQWU7QUFBQSxVQUNkZCxVQURjLEdBQ0MsSUFERCxDQUNkQSxVQURjLEVBR3RCOztBQUNBLFVBQ0MsS0FBS0osWUFBTCxHQUFvQixLQUFLQyxlQUFMLEdBQXVCLElBQTNDLElBQ0EsS0FBS0YsZ0JBQUwsS0FBMEJtQixhQUYzQixFQUdFO0FBQ0Q7QUFDQTtBQUNBLFlBQUksS0FBS2YsV0FBTCxDQUFpQitCLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2xDLGtCQUFROUIsVUFBUjtBQUNDLGlCQUFLLE1BQUw7QUFDQyxtQkFBS0QsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCZ0MsTUFBakIsQ0FDbEJDLHVEQUFhLENBQUN4RCxJQUFJLENBQUN5RCxLQUFMLENBQVd6RCxJQUFJLENBQUMwRCxNQUFMLEtBQWdCRix1REFBYSxDQUFDRixNQUF6QyxDQUFELENBREssQ0FBbkI7QUFHQSxtQkFBS2pDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQTs7QUFDRCxpQkFBSyxRQUFMO0FBQ0MsbUJBQUtFLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQmdDLE1BQWpCLENBQ2xCSSx5REFBZSxDQUNkM0QsSUFBSSxDQUFDeUQsS0FBTCxDQUFXekQsSUFBSSxDQUFDMEQsTUFBTCxLQUFnQkMseURBQWUsQ0FBQ0wsTUFBM0MsQ0FEYyxDQURHLENBQW5CO0FBS0EsbUJBQUtqQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0E7O0FBQ0QsaUJBQUssTUFBTDtBQUNDLG1CQUFLRSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJnQyxNQUFqQixDQUNsQkssdURBQWEsQ0FBQzVELElBQUksQ0FBQ3lELEtBQUwsQ0FBV3pELElBQUksQ0FBQzBELE1BQUwsS0FBZ0JFLHVEQUFhLENBQUNOLE1BQXpDLENBQUQsQ0FESyxDQUFuQjtBQUdBLG1CQUFLakMsZUFBTCxHQUF1QixHQUF2QjtBQUNBO0FBcEJGO0FBc0JBLFNBMUJBLENBMkJEOzs7QUFDQSxhQUFLd0MsT0FBTCxHQUFlLEtBQUt0QyxXQUFMLENBQWlCdUMsS0FBakIsRUFBZjtBQUNBLFlBQUlDLE9BQU8sR0FBRyxJQUFJQyw2Q0FBSixDQUFTLEtBQUtILE9BQWQsRUFBdUIsS0FBS3JDLFVBQTVCLENBQWQ7QUFDQSxhQUFLRixLQUFMLENBQVcyQyxJQUFYLENBQWdCRixPQUFoQjtBQUNBLGFBQUszQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsT0F2Q3FCLENBd0N0Qjs7O0FBQ0EsV0FBS0EsWUFBTCxJQUFxQmtCLGFBQXJCO0FBQ0E7OztpQ0FFWTtBQUFBLFVBQ0poQixLQURJLEdBQ00sSUFETixDQUNKQSxLQURJO0FBRVosVUFBTTRDLGNBQWMsR0FBRyxFQUF2QixDQUZZLENBR1o7O0FBQ0EsVUFBSTVDLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYTZDLFNBQWpCLEVBQTRCO0FBQzNCLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixjQUFJOUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTK0MsS0FBVCxDQUFlRCxDQUFmLE1BQXNCLElBQTFCLEVBQWdDO0FBQy9CLGdCQUFJM0UsRUFBRSxHQUFHNkIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTK0MsS0FBVCxDQUFlRCxDQUFmLEVBQWtCRSxHQUFsQixDQUFzQixDQUF0QixDQUFUO0FBQ0EsZ0JBQUk1RSxFQUFFLEdBQUc0QixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMrQyxLQUFULENBQWVELENBQWYsRUFBa0JFLEdBQWxCLENBQXNCLENBQXRCLENBQVQ7QUFDQSxnQkFBSUMsUUFBUSxHQUFHdkUsSUFBSSxDQUFDd0UsSUFBTCxDQUFVLFNBQUMsTUFBTS9FLEVBQVAsRUFBYyxDQUFkLGFBQW1CLE1BQU1DLEVBQXpCLEVBQWdDLENBQWhDLENBQVYsQ0FBZjs7QUFDQSxnQkFBSTZFLFFBQVEsR0FBR0wsY0FBZixFQUErQjtBQUM5QixtQkFBSzVDLEtBQUwsQ0FBV3dDLEtBQVg7QUFDQTtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7Ozs4QkFFU3hCLGEsRUFBZTtBQUFBOztBQUN4QixXQUFLbUMsT0FBTCxDQUFhbkMsYUFBYjtBQUNBLFVBQUlyRixJQUFJLEdBQUcsSUFBWDtBQUZ3QixVQUdoQnFFLEtBSGdCLEdBR04sSUFITSxDQUdoQkEsS0FIZ0IsRUFLeEI7O0FBQ0EsV0FBS29ELFVBQUwsR0FOd0IsQ0FReEI7O0FBQ0EsVUFBSXhGLE9BQU8sR0FBRyxLQUFLRSxNQUFMLENBQVlGLE9BQTFCO0FBQ0FBLGFBQU8sR0FBR0EsT0FBTyxHQUFHLEdBQXBCOztBQUNBLGFBQU9BLE9BQU8sR0FBRyxDQUFqQixFQUFvQjtBQUNuQkEsZUFBTyxJQUFJLEdBQVg7QUFDQTs7QUFFRG9DLFdBQUssQ0FBQzJCLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdkI7QUFDQSxZQUFJQSxJQUFJLENBQUN5QixJQUFMLENBQVV6RixPQUFWLEVBQW1CakMsSUFBbkIsQ0FBSixFQUE4QixNQUFJLENBQUNzRixRQUFMLENBQWN0RSxRQUFkO0FBQzlCLE9BSEQ7QUFJQSxLLENBRUQ7Ozs7aUNBQ2EyRyxXLEVBQWE7QUFDekIsV0FBS3pELGdCQUFMLElBQXlCeUQsV0FBekI7QUFDQSxVQUFJQyxXQUFXLEdBQUc3RSxJQUFJLENBQUM4RSxLQUFMLENBQVcsS0FBSzNELGdCQUFMLEdBQXdCLEVBQW5DLElBQXlDLEdBQTNEO0FBQ0EsV0FBS2tCLEtBQUwsQ0FBVyxDQUFYLEVBQWMwQyxTQUFkLEdBQTBCRixXQUFXLENBQUNHLFFBQVosRUFBMUI7QUFDQTs7O21DQUVjO0FBQ2QsV0FBSzdELGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsV0FBS3BDLE1BQUwsQ0FBWUYsT0FBWixHQUFzQixHQUF0QjtBQUNBLFdBQUtxRCxRQUFMLENBQWNoRixLQUFkLENBQW9CQyxJQUFwQixDQUF5QkMsTUFBekIsR0FBa0MsS0FBbEM7QUFDQSxXQUFLOEUsUUFBTCxDQUFjaEYsS0FBZCxDQUFvQkcsS0FBcEIsQ0FBMEJELE1BQTFCLEdBQW1DLEtBQW5DO0FBQ0EsV0FBS2dFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsV0FBS3RDLE1BQUwsQ0FBWTZGLEtBQVo7QUFDQSxXQUFLdEQsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFdBQUtULFVBQUwsR0FBa0IsS0FBbEI7QUFDQTs7OytCQUVVO0FBQ1Y7QUFDQTtBQUNBLFVBQU1nRSxZQUFZLEdBQUdsRixJQUFJLENBQUM4RSxLQUFMLENBQVcsS0FBSzNELGdCQUFMLEdBQXdCLEVBQW5DLElBQXlDLEdBQTlEO0FBQ0EsVUFBSWdFLFVBQVUsR0FBRyxLQUFLM0UsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUNBLFVBQUk0RSxXQUFXLEdBQUcsS0FBSzVFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxVQUFJNkUsVUFBVSxHQUFHLEtBQUs3RSxVQUFMLENBQWdCLENBQWhCLENBQWpCO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixDQUFsQixFQUFxQjVCLFNBQXJCLENBQStCRSxNQUEvQixDQUFzQyxRQUF0QztBQUNBLFdBQUswQixZQUFMLENBQWtCLENBQWxCLEVBQXFCNUIsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLFFBQW5DOztBQUNBLFVBQ0NvRyxZQUFZLEdBQUdDLFVBQVUsQ0FBQyxDQUFELENBQXpCLElBQ0FELFlBQVksR0FBR0UsV0FBVyxDQUFDLENBQUQsQ0FEMUIsSUFFQUYsWUFBWSxHQUFHRyxVQUFVLENBQUMsQ0FBRCxDQUgxQixFQUlFO0FBQ0QsYUFBSzVHLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLZ0MsWUFBTCxDQUFrQixDQUFsQixFQUFxQjVCLFNBQXJCLENBQStCRSxNQUEvQixDQUFzQyxRQUF0QztBQUNBLGFBQUsyQixtQkFBTCxDQUF5QixDQUF6QixFQUE0QjRFLEtBQTVCO0FBQ0EsYUFBSzVFLG1CQUFMLENBQXlCLENBQXpCLEVBQTRCNkUsTUFBNUI7QUFDQTs7QUFDRCxXQUFLNUQsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtULFVBQUwsR0FBa0IsSUFBbEI7QUFDQTs7O2lDQUVZc0UsSyxFQUFPO0FBQ25CQSxXQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNUCxZQUFZLEdBQUdsRixJQUFJLENBQUM4RSxLQUFMLENBQVcsS0FBSzNELGdCQUFMLEdBQXdCLEVBQW5DLElBQXlDLEdBQTlEO0FBRUEsVUFBSVQsbUJBQW1CLEdBQUdsRSxRQUFRLENBQUMyQixzQkFBVCxDQUN6Qix3QkFEeUIsRUFFeEIsQ0FGd0IsQ0FBMUI7QUFHQSxVQUFJdUgsYUFBYSxHQUFHaEYsbUJBQW1CLENBQUNpRixLQUF4QztBQUNBLFVBQUlDLFNBQVMsR0FBRyxDQUFFRixhQUFGLEVBQWlCUixZQUFqQixDQUFoQjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxLQUFLM0UsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUNBLFVBQUk0RSxXQUFXLEdBQUcsS0FBSzVFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxVQUFJNkUsVUFBVSxHQUFHLEtBQUs3RSxVQUFMLENBQWdCLENBQWhCLENBQWpCOztBQUVBLFVBQUkwRSxZQUFZLEdBQUdDLFVBQVUsQ0FBQyxDQUFELENBQTdCLEVBQWtDO0FBQ2pDRSxrQkFBVSxHQUFHRCxXQUFiO0FBQ0FBLG1CQUFXLEdBQUdELFVBQWQ7QUFDQUEsa0JBQVUsR0FBR1MsU0FBYjtBQUNBLE9BSkQsTUFJTyxJQUFJVixZQUFZLEdBQUdFLFdBQVcsQ0FBQyxDQUFELENBQTlCLEVBQW1DO0FBQ3pDQyxrQkFBVSxHQUFHRCxXQUFiO0FBQ0FBLG1CQUFXLEdBQUdRLFNBQWQ7QUFDQSxPQUhNLE1BR0E7QUFDTlAsa0JBQVUsR0FBR08sU0FBYjtBQUNBOztBQUVELFdBQUtwRixVQUFMLEdBQWtCLENBQUUyRSxVQUFGLEVBQWNDLFdBQWQsRUFBMkJDLFVBQTNCLENBQWxCLENBekJtQixDQTJCbkI7QUFDQTtBQUNBOztBQUNBLFdBQUt6RSxjQUFMLENBQW9CLENBQXBCLEVBQXVCaUYsU0FBdkIsb0JBQTZDVixVQUFVLENBQUMsQ0FBRCxDQUF2RDtBQUNBLFdBQUt0RSxlQUFMLENBQXFCLENBQXJCLEVBQXdCZ0YsU0FBeEIsR0FBb0NWLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0gsUUFBZCxFQUFwQztBQUNBLFdBQUtsRSxlQUFMLENBQXFCLENBQXJCLEVBQXdCK0UsU0FBeEIscUJBQStDVCxXQUFXLENBQUMsQ0FBRCxDQUExRDtBQUNBLFdBQUtyRSxnQkFBTCxDQUFzQixDQUF0QixFQUF5QjhFLFNBQXpCLEdBQXFDVCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVKLFFBQWYsRUFBckM7QUFDQSxXQUFLaEUsY0FBTCxDQUFvQixDQUFwQixFQUF1QjZFLFNBQXZCLG9CQUE2Q1IsVUFBVSxDQUFDLENBQUQsQ0FBdkQ7QUFDQSxXQUFLcEUsZUFBTCxDQUFxQixDQUFyQixFQUF3QjRFLFNBQXhCLEdBQW9DUixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNMLFFBQWQsRUFBcEMsQ0FuQ21CLENBcUNuQjtBQUVBOztBQUNBdEUseUJBQW1CLENBQUNpRixLQUFwQixHQUE0QixFQUE1QjtBQUNBLFdBQUtsRixZQUFMLENBQWtCLENBQWxCLEVBQXFCNUIsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLFFBQW5DO0FBQ0EsV0FBS0wsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFdBQUswQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFdBQUtvQixRQUFMLENBQWN0RSxRQUFkO0FBQ0E7Ozs7OztBQUdhZixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xVQTs7SUFFTUUsUzs7O0FBQ0wscUJBQVk2QixPQUFaLEVBQXFCaEMsSUFBckIsRUFBMkI7QUFBQTs7QUFDMUIsU0FBS0gsR0FBTCxHQUFXbUMsT0FBWDtBQUNBLFNBQUtoQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLNkksU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUt4RCxhQUFMLEdBQXFCLE9BQU8sS0FBS3dELFNBQWpDO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLM0csTUFBTCxHQUFjLEtBQUtuQyxJQUFMLENBQVUrSSxTQUFWLEVBQWQ7QUFDQSxTQUFLekQsUUFBTCxHQUFnQixLQUFLdEYsSUFBTCxDQUFVZ0osV0FBVixFQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDRSxTQUFLM0QsUUFBTCxDQUFjdEUsUUFBZDtBQUNBLFNBQUtrSSxTQUFMO0FBQ0Y7Ozs7MkJBRU1DLEksRUFBTTtBQUFBLFVBQ0o5RCxhQURJLEdBQ3VCLElBRHZCLENBQ0pBLGFBREk7QUFBQSxVQUNXeUQsT0FEWCxHQUN1QixJQUR2QixDQUNXQSxPQURYLEVBR1o7O0FBQ0EsVUFBSU0sT0FBTyxHQUFHRCxJQUFkO0FBQ0EsVUFBSUUsT0FBTyxHQUFHRCxPQUFPLEdBQUdOLE9BQXhCLENBTFksQ0FPWjs7QUFDQSxVQUFJTyxPQUFPLElBQUloRSxhQUFmLEVBQThCO0FBQzdCLGFBQUtyRixJQUFMLENBQVVzSixLQUFWLENBQWdCakUsYUFBaEI7QUFDQSxhQUFLckYsSUFBTCxDQUFVOEYsSUFBVjtBQUNBLGFBQUtnRCxPQUFMLEdBQWVNLE9BQWY7QUFDQTs7QUFFREcsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLcEosTUFBTCxDQUFZTyxJQUFaLENBQWlCLElBQWpCLENBQTdCO0FBQ0E7OztnQ0FFVztBQUNYLFVBQU04SSxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUNiLDZGQURhLENBQWQ7QUFHQUQsV0FBSyxDQUFDakssZ0JBQU4sQ0FDQyxPQURELEVBRUMsWUFBTTtBQUNMaUssYUFBSyxDQUFDRSxXQUFOLEdBQW9CLENBQXBCO0FBQ0FGLGFBQUssQ0FBQ0csSUFBTjtBQUNBLE9BTEYsRUFNQyxLQU5EO0FBUUFILFdBQUssQ0FBQ0csSUFBTjtBQUNBOzs7Ozs7QUFHYXpKLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTW9HLGFBQWEsR0FBRyxDQUM1QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FISCxDQUQ0QixFQU0zQixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRixFQUdFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRixDQU4yQixFQVczQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQVgyQixFQWMzQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQWQyQixFQWlCM0IsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQUYsRUFDRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREYsQ0FqQjJCLENBQXRCLEMsQ0FzQlA7O0FBQ08sSUFBTUcsZUFBZSxHQUFHLENBQzlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBRDhCLEVBTzdCLENBQ0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURBLEVBRUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZBLEVBR0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhBLEVBSUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpBLENBUDZCLEVBYTlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUss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Q25CO0FBQ0EsVUFBSWdCLFFBQVEsR0FBRyxLQUFmOztBQUVBLFdBQUssSUFBSW1HLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsWUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsY0FBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY08sSUFBZCxDQUFtQnpGLE9BQW5CLEVBQTRCakMsSUFBNUIsQ0FBSixFQUF1Q2dCLFFBQVEsR0FBRyxJQUFYO0FBQ3ZDO0FBQ0Q7O0FBRUQsYUFBT0EsUUFBUDtBQUNBOzs7eUJBRUluQixHLEVBQUs7QUFDVCxXQUFLLElBQUlzSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGVBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjckIsSUFBZCxDQUFtQmpHLEdBQW5CO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7QUFHYWtILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbERBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCIvLyBwbGF5ZXIgY29udHJvbHNcbmNsYXNzIENvbnRyb2xzIHtcblx0Y29uc3RydWN0b3IoZ2FtZSkge1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxlZnQ6IHsgYWN0aXZlOiBmYWxzZSB9LFxuXHRcdFx0cmlnaHQ6IHsgYWN0aXZlOiBmYWxzZSB9XG5cdFx0fTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGlnaFNjb3JlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtYm94Jyk7XG5cdFx0dGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3ZlcmxheScpO1xuXHRcdHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0LWdhbWUtbG9nbycpO1xuXHRcdHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUtYm94Jyk7XG5cdFx0dGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0LWdhbWUtaW5mbycpO1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbWUubmV3SGlnaFNjb3JlKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuXHRcdH1cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0a2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRrZXlVcChlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzdGFydEdhbWUoZSkge1xuXHRcdGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcblx0XHRcdHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblx0XHRcdHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKCdjbGVhci1iYWNrZ3JvdW5kLWltYWdlJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZU92ZXIoKSB7XG5cdFx0dGhpcy5nYW1lLmdhbWVPdmVyKCk7XG5cdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLW91dCcpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWluZm8tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7XG4iLCJjbGFzcyBDdXJzb3Ige1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0dGhpcy5kZWdyZWVzID0gMjcwO1xuXHRcdHRoaXMuY3Vyc29yU3BlZWQgPSAxMDtcblx0XHR0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZGVhZEN1cnNvciA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG5cdFx0dGhpcy54MSA9IDA7XG5cdFx0dGhpcy55MSA9IDA7XG5cdFx0dGhpcy5jdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xuXHRcdHRoaXMuZGVhZEN1cnNvci5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX2dyZWVuX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmV4cGxvc2lvbi5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9leHBsb3Npb25fc3ByaXRlc2hlZXQucG5nJztcblx0fVxuXG5cdG1vdmVDdXJzb3IoZGlyZWN0aW9uKSB7XG5cdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ2Nsb2Nrd2lzZSc6XG5cdFx0XHRcdHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnY2Nsb2Nrd2lzZSc6XG5cdFx0XHRcdHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRleHBsb3Npb25BbmltYXRpb24oY3R4KSB7XG5cdFx0aWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPD0gNzApIHtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoXG5cdFx0XHRcdHRoaXMuZXhwbG9zaW9uLFxuXHRcdFx0XHR0aGlzLngxLFxuXHRcdFx0XHR0aGlzLnkxLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdDEwMCxcblx0XHRcdFx0LTUwLFxuXHRcdFx0XHQtNzUsXG5cdFx0XHRcdDE1MCxcblx0XHRcdFx0MTUwXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdFx0dGhpcy5leHBsb3Npb25GcmFtZSsrO1xuXG5cdFx0XHR0aGlzLngxICs9IDEwMDtcblx0XHRcdGlmICh0aGlzLngxID09PSAxMDAwKSB7XG5cdFx0XHRcdHRoaXMueTEgKz0gMTAwO1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPT09IDcxKSB7XG5cdFx0XHRcdHRoaXMueDEgPSAwO1xuXHRcdFx0XHR0aGlzLnkxID0gMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmRlYWRDdXJzb3IsIDAsIC0zNSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5jbGFzcyBHYW1lIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuY3R4ID0gY29udGV4dDtcblx0XHR0aGlzLmRpbV94ID0gNzY4O1xuXHRcdHRoaXMuZGltX3kgPSA3Njg7XG5cdFx0Ly8gVE9ETyBmZXRjaCBoaWdoIHNjb3JlcyBmcm9tIGRiXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gW1xuXHRcdFx0WyAnQWRtaW5pc3RyYXRvcicsIDI4Ljc5IF0sXG5cdFx0XHRbICdaZWtlbWVpc3RlcicsIDIzLjQ1IF0sXG5cdFx0XHRbICdUaGVKb25CYWUnLCAzLjMzIF1cblx0XHRdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1mb3JtJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdCdoaWdoLXNjb3JlLWlucHV0LWZpZWxkJ1xuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hZGRIaWdoU2NvcmUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLmZpcnN0UGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLXNjb3JlJyk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnc2Vjb25kLXBsYWNlLXNjb3JlJ1xuXHRcdCk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoaXJkLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoaXJkLXBsYWNlLXNjb3JlJyk7XG5cblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0XHR0aGlzLndhdmVzID0gW107XG5cdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cdFx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0XHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cblx0XHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuc3RhdGljTWFwID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUzLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0XHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdFx0dGhpcy5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0XHRpZiAodGhpcy53YXJwR2F0ZUluZGV4ID09PSAzKSB0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHRcdH0sIDUwMCk7XG5cdFx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG5cdH1cblxuXHRsb2dpYyhmcmFtZUludGVydmFsKSB7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0XHRcdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2Nsb2Nrd2lzZScpO1xuXHRcdFx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gOS41ICogMTAwMCkge1xuXHRcdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnbWVkaXVtJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAxOS41ICogMTAwMCkge1xuXHRcdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnaGFyZCc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdFx0XHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApOyAvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRcdGN0eC5jbGVhclJlY3QoLTI1NiwgLTI1NiwgZGltX3ggKyAyNTYsIGRpbV95ICsgMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuXHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG5cdFx0fVxuXG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMucm90YXRpb24gLyAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKC03NjggLyAyLCAtNzY4IC8gMik7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuXHRcdC8vIEN1cnNvclxuXHRcdGlmICghdGhpcy5kZWFkU2hpcCkge1xuXHRcdFx0dGhpcy5jdXJzb3IuZHJhdyhjdHgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnNvci5leHBsb3Npb25BbmltYXRpb24oY3R4KTtcblx0XHR9XG5cblx0XHQvLyBXYXZlc1xuXHRcdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdFx0fSk7XG5cblx0XHQvLyBFYXJ0aCBvcmJpdFxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdHRoaXMuY3R4LmFyYyhkaW1feCAvIDIsIGRpbV95IC8gMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdFx0Ly8gV2FycGdhdGVcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXG5cdFx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0XHRkaW1feSAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3ggLyA0LFxuXHRcdFx0ZGltX3kgLyA0XG5cdFx0KTtcblxuXHRcdC8vIE1hcFxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG5cdH1cblxuXHRhZGRDdXJzb3IoKSB7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdFx0cmV0dXJuIHRoaXMuY3Vyc29yO1xuXHR9XG5cblx0YWRkQ29udHJvbHMoKSB7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzKTtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9scztcblx0fVxuXG5cdGFkZFdhdmUoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHRcdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRcdGlmIChcblx0XHRcdHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8XG5cdFx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0XHQpIHtcblx0XHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdFx0aWYgKHRoaXMucGF0dGVybkxpc3QubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDE7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRIQVJEX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEhBUkRfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm5MaXN0LnNoaWZ0KCk7XG5cdFx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR9XG5cdFx0Ly8gcnVucyByZWdhcmRsZXNzIG9mIHRpbWVyXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcblx0fVxuXG5cdHJlbW92ZVdhdmUoKSB7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0XHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHRcdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdFx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHdhdmVMb2dpYyhmcmFtZUludGVydmFsKSB7XG5cdFx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdGxldCBnYW1lID0gdGhpcztcblx0XHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdFx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdFx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0XHQvL2N1cnNvciBhbmdsZSBhcyB0aGV0YVxuXHRcdGxldCBkZWdyZWVzID0gdGhpcy5jdXJzb3IuZGVncmVlcztcblx0XHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0XHR3aGlsZSAoZGVncmVlcyA8IDApIHtcblx0XHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHRcdH1cblxuXHRcdHdhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIHRvcCByaWdodCB0aW1lclxuXHR0aW1lckNvdW50ZXIodGltZUVsYXBzZWQpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdFx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdFx0dGhpcy50aW1lclswXS5pbm5lckhUTUwgPSByb3VuZGVkVGltZS50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhcnROZXdHYW1lKCkge1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0XHR0aGlzLndhdmVzID0gW107XG5cdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0XHR0aGlzLmN1cnNvci5kZWdyZWVzID0gMjcwO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMucm90YXRpb24gPSAwO1xuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0XHR0aGlzLmN1cnNvci5yZXNldCgpO1xuXHRcdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdC8vIFRPRE8gY2hlY2sgaGlnaCBzY29yZSB0byBkaXNwbGF5IG5hbWUgcHJvbXB0XG5cdFx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0aWYgKFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHRoaXJkUGxhY2VbMV1cblx0XHQpIHtcblx0XHRcdHRoaXMubmV3SGlnaFNjb3JlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLmZvY3VzKCk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZFNoaXAgPSB0cnVlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdH1cblxuXHRhZGRIaWdoU2NvcmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cblx0XHRsZXQgaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpWzBdO1xuXHRcdGxldCBoaWdoU2NvcmVOYW1lID0gaGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZTtcblx0XHRsZXQgbmV3UGxheWVyID0gWyBoaWdoU2NvcmVOYW1lLCBzdXJ2aXZlZFRpbWUgXTtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cblx0XHRpZiAoc3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBmaXJzdFBsYWNlO1xuXHRcdFx0Zmlyc3RQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9IGVsc2UgaWYgKHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdKSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0XHRzZWNvbmRQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcmRQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9XG5cblx0XHR0aGlzLmhpZ2hTY29yZXMgPSBbIGZpcnN0UGxhY2UsIHNlY29uZFBsYWNlLCB0aGlyZFBsYWNlIF07XG5cblx0XHQvLyBUT0RPIG1vdmUgaW50byBvd24gZnVuY3Rpb25cblx0XHQvLyByZWFzc2lnbiB0b3Agc3Vydml2b3JzXG5cdFx0Ly8gZGVidWdnZXJcblx0XHR0aGlzLmZpcnN0UGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBGaXJzdDogJHtmaXJzdFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gZmlyc3RQbGFjZVsxXS50b1N0cmluZygpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBTZWNvbmQ6ICR7c2Vjb25kUGxhY2VbMF19YDtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gc2Vjb25kUGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBUaGlyZDogJHt0aGlyZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy50aGlyZFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gdGhpcmRQbGFjZVsxXS50b1N0cmluZygpO1xuXG5cdFx0Ly8gZGF0YWJhc2UgbG9naWMgZ29lcyBoZXJlXG5cblx0XHQvLyBjbGVhciBlbnRlcmVkIG5hbWUgYW5kIHJlc2V0IGdhbWUgbG9naWNcblx0XHRoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY2xhc3MgR2FtZVN0YWdlIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCwgZ2FtZSkge1xuXHRcdHRoaXMuY3R4ID0gY29udGV4dDtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuZnJhbWVSYXRlID0gNjA7XG5cdFx0dGhpcy5mcmFtZUludGVydmFsID0gMTAwMCAvIHRoaXMuZnJhbWVSYXRlO1xuXHRcdHRoaXMuc2V0VGltZSA9IDA7XG5cdFx0dGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG5cdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuXHRcdHRoaXMubG9hZFNjcmVlbiA9IHRydWU7XG4gICAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuICAgIHRoaXMubG9vcE11c2ljKCk7XG5cdH1cblxuXHR0aWNrZXIodGltZSkge1xuXHRcdGNvbnN0IHsgZnJhbWVJbnRlcnZhbCwgc2V0VGltZSB9ID0gdGhpcztcblxuXHRcdC8vIGZyYW1lIGxpbWl0ZXJcblx0XHRsZXQgY3VyVGltZSA9IHRpbWU7XG5cdFx0bGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gc2V0VGltZTtcblxuXHRcdC8vIGRyYXcgZnJhbWVcblx0XHRpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsKSB7XG5cdFx0XHR0aGlzLmdhbWUubG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0XHR0aGlzLmdhbWUuZHJhdygpO1xuXHRcdFx0dGhpcy5zZXRUaW1lID0gY3VyVGltZTtcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xuXHR9XG5cblx0bG9vcE11c2ljKCkge1xuXHRcdGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9NZWdhbG92YW5pYS5tcDMnXG5cdFx0KTtcblx0XHRhdWRpby5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2VuZGVkJyxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0YXVkaW8uY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHRhdWRpby5wbGF5KCk7XG5cdFx0XHR9LFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHRcdGF1ZGlvLnBsYXkoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7XG4iLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbIFsgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCBdIFxuICBdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAgXVxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0W1xuICAgIFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG4iLCJjbGFzcyBXYWxsIHtcblx0Y29uc3RydWN0b3Iob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnNjYWxlID0gNDtcblx0XHQvLyB0aGlzLnNwZWVkID0gODtcblx0XHQvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdFx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHRcdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDk7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0XHR9XG5cblx0XHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG5cdH1cblxuXHRvY3RhbnRMb2dpYyhvY3RhbnQpIHtcblx0XHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG1vdmUodGhldGEpIHtcblx0XHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRcdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdFx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0XHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblx0XHQvLyBkZWJ1Z2dlclxuXG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA3XG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRcdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdFx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRcdGlmIChkeCA+IDApIHtcblx0XHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXHRcdGlmIChkeSA+IDApIHtcblx0XHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0XHRsZXQgeCA9IHBvc1swXTtcblx0XHRsZXQgeSA9IHBvc1sxXTtcblxuXHRcdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5zcHJpdGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0LXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLFxuXHRcdFx0LXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuY2xhc3MgV2F2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdHRoaXMuZW5kID0gZmFsc2U7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHRcdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdH1cblxuXHRhZGRXYWxscyhkaWZmaWN1bHR5KSB7XG5cdFx0bGV0IHdhbGxzID0gW107XG5cdFx0Y29uc3QgeyBwYXR0ZXJuIH0gPSB0aGlzO1xuXG5cdFx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd2FsbHM7XG5cdH1cblxuXHRtb3ZlKGRlZ3JlZXMsIGdhbWUpIHtcblx0XHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9