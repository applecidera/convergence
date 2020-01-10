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
    this.aboutMe = document.getElementsByClassName('about-me');
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
        this.aboutMe[0].classList.add('hidden');
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
      this.aboutMe[0].classList.remove('hidden');
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
      }, false); // audio.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdhbWUiLCJHYW1lIiwiZ2FtZXN0YWdlIiwiR2FtZVN0YWdlIiwidGlja2VyIiwiQ29udHJvbHMiLCJzdGF0ZSIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInN0YXJ0R2FtZSIsImdhbWVPdmVyIiwiaGlnaFNjb3JlTGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvdmVybGF5IiwiYmlnTG9nbyIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwiYWJvdXRNZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXdIaWdoU2NvcmUiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkN1cnNvciIsImNvbnRleHQiLCJkZWdyZWVzIiwiY3Vyc29yU3BlZWQiLCJjdXJzb3IiLCJJbWFnZSIsImRlYWRDdXJzb3IiLCJleHBsb3Npb24iLCJleHBsb3Npb25GcmFtZSIsIngxIiwieTEiLCJzcmMiLCJkaXJlY3Rpb24iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaW1feCIsImRpbV95IiwiaGlnaFNjb3JlcyIsImhpZ2hTY29yZUJveCIsImhpZ2hTY29yZUlucHV0RmllbGQiLCJhZGRIaWdoU2NvcmUiLCJmaXJzdFBsYWNlTmFtZSIsImZpcnN0UGxhY2VTY29yZSIsInNlY29uZFBsYWNlTmFtZSIsInNlY29uZFBsYWNlU2NvcmUiLCJ0aGlyZFBsYWNlTmFtZSIsInRoaXJkUGxhY2VTY29yZSIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJkZWFkU2hpcCIsInN1bk1hcCIsInN0YXRpY01hcCIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlSW5kZXgiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwibW92ZUN1cnNvciIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImV4cGxvc2lvbkFuaW1hdGlvbiIsImZvckVhY2giLCJ3YXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwiYWRkV2F2ZSIsInJlbW92ZVdhdmUiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJyZXNldCIsInN1cnZpdmVkVGltZSIsImZpcnN0UGxhY2UiLCJzZWNvbmRQbGFjZSIsInRoaXJkUGxhY2UiLCJmb2N1cyIsInNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaWdoU2NvcmVOYW1lIiwidmFsdWUiLCJuZXdQbGF5ZXIiLCJpbm5lclRleHQiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJsb2FkU2NyZWVuIiwibG9vcE11c2ljIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwibG9naWMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhdWRpbyIsIkF1ZGlvIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNjYWxlIiwic3BlZWQiLCJkZXNjYWxlRmFjdG9yIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInRoZXRhIiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJjdXJyZW50U3Vid2F2ZSIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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QUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQWI4QixFQW1CN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FuQjZCLENBQXhCLEMsQ0EyQlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILENBRDRCLEVBTzVCLENBQ0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURILEVBRUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZILEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5ELEVBT0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQVBELEVBUUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxF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QUl0Qiw2Q0FBSixDQUFTQyxNQUFULEVBQWlCdkYsVUFBakIsQ0FBZDtBQUNBNkMsZUFBSyxDQUFDSixJQUFOLENBQVdtRSxPQUFYO0FBQ0EsU0FIRCxNQUdPO0FBQ04vRCxlQUFLLENBQUNKLElBQU4sQ0FBVyxJQUFYO0FBQ0E7QUFDRDs7QUFFRCxhQUFPSSxLQUFQO0FBQ0E7Ozt5QkFFSW5GLE8sRUFBU2xDLEksRUFBTTtBQUNuQjtBQUNBLFVBQUlnQixRQUFRLEdBQUcsS0FBZjs7QUFFQSxXQUFLLElBQUlvRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGNBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNPLElBQWQsQ0FBbUJ6RixPQUFuQixFQUE0QmxDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN2QztBQUNEOztBQUVELGFBQU9BLFFBQVA7QUFDQTs7O3lCQUVJbkIsRyxFQUFLO0FBQ1QsV0FBSyxJQUFJdUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixlQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY3JCLElBQWQsQ0FBbUJsRyxHQUFuQjtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O0FBR2FtSCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG4gIGNhbnZhcy53aWR0aCA9IDc2ODtcbiAgY2FudmFzLmhlaWdodCA9IDc2ODtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4gIC8vIGluc3RhbnRpYXRlIGdhbWVcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIGNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbiAgZ2FtZXN0YWdlLnRpY2tlcigpO1xufSlcblxuIiwiLy8gcGxheWVyIGNvbnRyb2xzXG5jbGFzcyBDb250cm9scyB7XG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsZWZ0OiB7IGFjdGl2ZTogZmFsc2UgfSxcblx0XHRcdHJpZ2h0OiB7IGFjdGl2ZTogZmFsc2UgfVxuXHRcdH07XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhpZ2hTY29yZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdoLXNjb3JlLWJveCcpO1xuXHRcdHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJsYXknKTtcblx0XHR0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWxvZ28nKTtcblx0XHR0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlLWJveCcpO1xuXHRcdHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWluZm8nKTtcblx0XHR0aGlzLmFib3V0TWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dC1tZScpO1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbWUubmV3SGlnaFNjb3JlKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuXHRcdH1cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0a2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRrZXlVcChlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzdGFydEdhbWUoZSkge1xuXHRcdGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcblx0XHRcdHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblx0XHRcdHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKCdjbGVhci1iYWNrZ3JvdW5kLWltYWdlJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmFib3V0TWVbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZU92ZXIoKSB7XG5cdFx0dGhpcy5nYW1lLmdhbWVPdmVyKCk7XG5cdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLW91dCcpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWluZm8tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuYWJvdXRNZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIiwiY2xhc3MgQ3Vyc29yIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmN1cnNvclNwZWVkID0gMTA7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHRcdHRoaXMuY3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmRlYWRDdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5leHBsb3Npb24uc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG5cdH1cblxuXHRtb3ZlQ3Vyc29yKGRpcmVjdGlvbikge1xuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRjYXNlICdjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2NjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0ZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCkge1xuXHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHR0aGlzLmV4cGxvc2lvbixcblx0XHRcdFx0dGhpcy54MSxcblx0XHRcdFx0dGhpcy55MSxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdC01MCxcblx0XHRcdFx0LTc1LFxuXHRcdFx0XHQxNTAsXG5cdFx0XHRcdDE1MFxuXHRcdFx0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcblxuXHRcdFx0dGhpcy54MSArPSAxMDA7XG5cdFx0XHRpZiAodGhpcy54MSA9PT0gMTAwMCkge1xuXHRcdFx0XHR0aGlzLnkxICs9IDEwMDtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lID09PSA3MSkge1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdFx0dGhpcy55MSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcbmltcG9ydCB7IEVBU1lfUEFUVEVSTlMsIE1FRElVTV9QQVRURVJOUywgSEFSRF9QQVRURVJOUyB9IGZyb20gJy4vcGF0dGVybnMnO1xuXG4vLyBjb25zdHJ1Y3RvclxuY2xhc3MgR2FtZSB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5kaW1feCA9IDc2ODtcblx0XHR0aGlzLmRpbV95ID0gNzY4O1xuXHRcdC8vIFRPRE8gZmV0Y2ggaGlnaCBzY29yZXMgZnJvbSBkYlxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRcdFsgJ0FkbWluaXN0cmF0b3InLCAyOC43OSBdLFxuXHRcdFx0WyAnWmVrZW1laXN0ZXInLCAyMy40NSBdLFxuXHRcdFx0WyAnVGhlSm9uQmFlJywgMy4zMyBdXG5cdFx0XTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtZm9ybScpO1xuXHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWRkSGlnaFNjb3JlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2Utc2NvcmUnKTtcblxuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdHRoaXMud2F2ZXMgPSBbXTtcblx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHRcdHRoaXMucm90YXRpb24gPSAwO1xuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IGZhbHNlO1xuXHRcdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblxuXHRcdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHRcdHRoaXMud2FycEdhdGUxLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUgPSBbIHRoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTMgXTtcblx0XHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0XHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHR0aGlzLndhcnBHYXRlSW5kZXggKz0gMTtcblx0XHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0fSwgNTAwKTtcblx0XHR0aGlzLnRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZXInKTtcblx0fVxuXG5cdGxvZ2ljKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuXHRcdFx0Y29uc3QgeyBjb250cm9scywgY3Vyc29yIH0gPSB0aGlzO1xuXHRcdFx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiA5LjUgKiAxMDAwKSB7XG5cdFx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdtZWRpdW0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKSB7XG5cdFx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdoYXJkJztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0XHRcdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcCB9ID0gdGhpcztcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7IC8vIHJlc2V0cyB0cmFuc2Zvcm0gdG8gY2xlYXIgZW50aXJlIGNhdmFzXG5cdFx0Y3R4LmNsZWFyUmVjdCgtMjU2LCAtMjU2LCBkaW1feCArIDI1NiwgZGltX3kgKyAyNTYpOyAvLyBjbGVhciBjYW52YXNcblx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcblx0XHR9XG5cblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5yb3RhdGlvbiAvIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoLTc2OCAvIDIsIC03NjggLyAyKTtcblxuXHRcdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG5cdFx0Ly8gQ3Vyc29yXG5cdFx0aWYgKCF0aGlzLmRlYWRTaGlwKSB7XG5cdFx0XHR0aGlzLmN1cnNvci5kcmF3KGN0eCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3Vyc29yLmV4cGxvc2lvbkFuaW1hdGlvbihjdHgpO1xuXHRcdH1cblxuXHRcdC8vIFdhdmVzXG5cdFx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHR3YXZlLmRyYXcoY3R4KTtcblx0XHR9KTtcblxuXHRcdC8vIEVhcnRoIG9yYml0XG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0XHQvLyBXYXJwZ2F0ZVxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdFx0ZGltX3ggLyA0ICsgOTcuNSxcblx0XHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0XHRkaW1feCAvIDQsXG5cdFx0XHRkaW1feSAvIDRcblx0XHQpO1xuXG5cdFx0Ly8gTWFwXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcblx0fVxuXG5cdGFkZEN1cnNvcigpIHtcblx0XHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblx0XHRyZXR1cm4gdGhpcy5jdXJzb3I7XG5cdH1cblxuXHRhZGRDb250cm9scygpIHtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzO1xuXHR9XG5cblx0YWRkV2F2ZShmcmFtZUludGVydmFsKSB7XG5cdFx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdFx0Ly8gbGF1bmNoIHdhdmUgZXZlcnkgeCBzZWNvbmRzXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9PT0gZnJhbWVJbnRlcnZhbFxuXHRcdCkge1xuXHRcdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdFx0Ly8gaWYgcGF0dGVybkxpc3QgaXMgZW1wdHksIGFkZCBtb3JlIHBhdHRlcm5zIHRvIHBhdHRlcm5MaXN0XG5cdFx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdFx0Y2FzZSAnZWFzeSc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ21lZGl1bSc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tcblx0XHRcdFx0XHRcdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjc1O1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC41O1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBhdCBzZXQgaW50ZXJ2YWxzICgycylcblx0XHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuLCB0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHRcdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdH1cblx0XHQvLyBydW5zIHJlZ2FyZGxlc3Mgb2YgdGltZXJcblx0XHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xuXHR9XG5cblx0cmVtb3ZlV2F2ZSgpIHtcblx0XHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdFx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0XHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0d2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdFx0bGV0IGdhbWUgPSB0aGlzO1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0XHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0XHR0aGlzLnJlbW92ZVdhdmUoKTtcblxuXHRcdC8vY3Vyc29yIGFuZ2xlIGFzIHRoZXRhXG5cdFx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRcdGRlZ3JlZXMgPSBkZWdyZWVzICUgMzYwO1xuXHRcdHdoaWxlIChkZWdyZWVzIDwgMCkge1xuXHRcdFx0ZGVncmVlcyArPSAzNjA7XG5cdFx0fVxuXG5cdFx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdFx0aWYgKHdhdmUubW92ZShkZWdyZWVzLCBnYW1lKSkgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdG9wIHJpZ2h0IHRpbWVyXG5cdHRpbWVyQ291bnRlcih0aW1lRWxhcHNlZCkge1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0XHRsZXQgcm91bmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGFydE5ld0dhbWUoKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdHRoaXMud2F2ZXMgPSBbXTtcblx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHRcdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMuY3Vyc29yLnJlc2V0KCk7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuXHR9XG5cblx0Z2FtZU92ZXIoKSB7XG5cdFx0Ly8gVE9ETyBjaGVjayBoaWdoIHNjb3JlIHRvIGRpc3BsYXkgbmFtZSBwcm9tcHRcblx0XHQvLyBpZiB0cnVlLCBvbiBmb3JtIHN1Ym1pdCwgc2V0IGhpZ2hzY29yZSA9IGZhbHNlIGFuZCByZWNhbGwgZ2FtZU92ZXIoKVxuXHRcdGNvbnN0IHN1cnZpdmVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHRcdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRcdGxldCBzZWNvbmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1sxXTtcblx0XHRsZXQgdGhpcmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1syXTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHRpZiAoXG5cdFx0XHRzdXJ2aXZlZFRpbWUgPiBmaXJzdFBsYWNlWzFdIHx8XG5cdFx0XHRzdXJ2aXZlZFRpbWUgPiBzZWNvbmRQbGFjZVsxXSB8fFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gdGhpcmRQbGFjZVsxXVxuXHRcdCkge1xuXHRcdFx0dGhpcy5uZXdIaWdoU2NvcmUgPSB0cnVlO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uZm9jdXMoKTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZFswXS5zZWxlY3QoKTtcblx0XHR9XG5cdFx0dGhpcy5kZWFkU2hpcCA9IHRydWU7XG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0fVxuXG5cdGFkZEhpZ2hTY29yZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblxuXHRcdGxldCBoaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdCdoaWdoLXNjb3JlLWlucHV0LWZpZWxkJ1xuXHRcdClbMF07XG5cdFx0bGV0IGhpZ2hTY29yZU5hbWUgPSBoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlO1xuXHRcdGxldCBuZXdQbGF5ZXIgPSBbIGhpZ2hTY29yZU5hbWUsIHN1cnZpdmVkVGltZSBdO1xuXHRcdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRcdGxldCBzZWNvbmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1sxXTtcblx0XHRsZXQgdGhpcmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1syXTtcblxuXHRcdGlmIChzdXJ2aXZlZFRpbWUgPiBmaXJzdFBsYWNlWzFdKSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0XHRzZWNvbmRQbGFjZSA9IGZpcnN0UGxhY2U7XG5cdFx0XHRmaXJzdFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH0gZWxzZSBpZiAoc3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH1cblxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFsgZmlyc3RQbGFjZSwgc2Vjb25kUGxhY2UsIHRoaXJkUGxhY2UgXTtcblxuXHRcdC8vIFRPRE8gbW92ZSBpbnRvIG93biBmdW5jdGlvblxuXHRcdC8vIHJlYXNzaWduIHRvcCBzdXJ2aXZvcnNcblx0XHQvLyBkZWJ1Z2dlclxuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYEZpcnN0OiAke2ZpcnN0UGxhY2VbMF19YDtcblx0XHR0aGlzLmZpcnN0UGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBmaXJzdFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYFNlY29uZDogJHtzZWNvbmRQbGFjZVswXX1gO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBzZWNvbmRQbGFjZVsxXS50b1N0cmluZygpO1xuXHRcdHRoaXMudGhpcmRQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYFRoaXJkOiAke3RoaXJkUGxhY2VbMF19YDtcblx0XHR0aGlzLnRoaXJkUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSB0aGlyZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cblx0XHQvLyBkYXRhYmFzZSBsb2dpYyBnb2VzIGhlcmVcblxuXHRcdC8vIGNsZWFyIGVudGVyZWQgbmFtZSBhbmQgcmVzZXQgZ2FtZSBsb2dpY1xuXHRcdGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWUgPSAnJztcblx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IGZhbHNlO1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jbGFzcyBHYW1lU3RhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBnYW1lKSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcblx0XHR0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcmFtZVJhdGU7XG5cdFx0dGhpcy5zZXRUaW1lID0gMDtcblx0XHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcblx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG5cdFx0dGhpcy5sb2FkU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG4gICAgdGhpcy5sb29wTXVzaWMoKTtcblx0fVxuXG5cdHRpY2tlcih0aW1lKSB7XG5cdFx0Y29uc3QgeyBmcmFtZUludGVydmFsLCBzZXRUaW1lIH0gPSB0aGlzO1xuXG5cdFx0Ly8gZnJhbWUgbGltaXRlclxuXHRcdGxldCBjdXJUaW1lID0gdGltZTtcblx0XHRsZXQgdGltZURpZiA9IGN1clRpbWUgLSBzZXRUaW1lO1xuXG5cdFx0Ly8gZHJhdyBmcmFtZVxuXHRcdGlmICh0aW1lRGlmID49IGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRcdHRoaXMuZ2FtZS5sb2dpYyhmcmFtZUludGVydmFsKTtcblx0XHRcdHRoaXMuZ2FtZS5kcmF3KCk7XG5cdFx0XHR0aGlzLnNldFRpbWUgPSBjdXJUaW1lO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRsb29wTXVzaWMoKSB7XG5cdFx0Y29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oXG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMydcblx0XHQpO1xuXHRcdGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnZW5kZWQnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRhdWRpby5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0XHRcdH0sXG5cdFx0XHRmYWxzZVxuXHRcdCk7XG5cdFx0Ly8gYXVkaW8ucGxheSgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFnZTtcbiIsIi8vIDIgc2Vjb25kIHNwYXduIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBFQVNZX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFsgWyAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwIF0gXG4gIF0sXG4gIFsgWyAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxIF0gXG4gIF0sXG4gIFsgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sIFxuICAgIFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdIFxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF1cblx0XVxuXTtcblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuXHRdLFxuXHRbXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwIF1cblx0XVxuXTtcbiIsImNsYXNzIFdhbGwge1xuXHRjb25zdHJ1Y3RvcihvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0XHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuc2NhbGUgPSA0O1xuXHRcdC8vIHRoaXMuc3BlZWQgPSA4O1xuXHRcdC8vIHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0XHR0aGlzLnNwcml0ZS5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdFx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdFx0dGhpcy5zcGVlZCA9IDg7XG5cdFx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA5O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wOTtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdFx0dGhpcy5zcGVlZCA9IDEwO1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4xO1xuXHRcdH1cblxuXHRcdHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcblx0fVxuXG5cdG9jdGFudExvZ2ljKG9jdGFudCkge1xuXHRcdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDIwMi41LCAyNDcuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDI0Ny41LCAyOTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0zMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA5MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMzM2LjUsIDM2MCBdO1xuXHRcdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAxMjA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0zMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTgwO1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDY3LjUsIDExMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgNzY4IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0bW92ZSh0aGV0YSkge1xuXHRcdGNvbnN0IHsgaGl0Ym94LCBoaXRib3gyIH0gPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3Rvcjtcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblx0XHRsZXQgcG9zeCA9IHRoaXMucG9zWzBdO1xuXHRcdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG5cdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSBwb3N4KSAqKiAyICsgKDM4NCAtIHBvc3kpICoqIDIpO1xuXHRcdC8vIGRlYnVnZ2VyXG5cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9jdGFudCA9PT0gNCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdFx0dGhldGEgPD0gaGl0Ym94WzFdICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApIHx8XG5cdFx0XHRcdCh0aGV0YSA+PSBoaXRib3gyWzBdICYmXG5cdFx0XHRcdFx0dGhldGEgPD0gaGl0Ym94MlsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDEgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSAzIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDdcblx0XHQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSAxMjAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTcwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdFx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0XHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdFx0aWYgKGR4ID4gMCkge1xuXHRcdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0XHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0XHR9XG5cdFx0aWYgKGR5ID4gMCkge1xuXHRcdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0XHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ2FtZU92ZXI7XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRcdGxldCB4ID0gcG9zWzBdO1xuXHRcdGxldCB5ID0gcG9zWzFdO1xuXG5cdFx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgeSArIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRcdGN0eC5kcmF3SW1hZ2UoXG5cdFx0XHR0aGlzLnNwcml0ZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZVxuXHRcdCk7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoXG5cdFx0XHQteCAtIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsXG5cdFx0XHQteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiIsImltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5jbGFzcyBXYXZlIHtcblx0Y29uc3RydWN0b3IocGF0dGVybiwgZGlmZmljdWx0eSkge1xuXHRcdHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG5cdFx0dGhpcy5lbmQgPSBmYWxzZTtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5jdXJyZW50U3Vid2F2ZSA9IDA7XG5cdFx0dGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0fVxuXG5cdGFkZFdhbGxzKGRpZmZpY3VsdHkpIHtcblx0XHRsZXQgd2FsbHMgPSBbXTtcblx0XHRjb25zdCB7IHBhdHRlcm4gfSA9IHRoaXM7XG5cblx0XHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdFx0aWYgKHBhdHRlcm5bb2N0YW50XSA9PT0gMSkge1xuXHRcdFx0XHRsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKG9jdGFudCwgZGlmZmljdWx0eSk7XG5cdFx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3YWxscy5wdXNoKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB3YWxscztcblx0fVxuXG5cdG1vdmUoZGVncmVlcywgZ2FtZSkge1xuXHRcdC8vIGhpdGJveCBsb2dpYyBpZiBhbnkgb2YgdGhlIHdhbGxzIHRvdWNoIGN1cnNvciwgc2V0IGdhbWVPdmVyID0gdHJ1ZVxuXHRcdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGlmICh0aGlzLndhbGxzW2ldLm1vdmUoZGVncmVlcywgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZ2FtZU92ZXI7XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=