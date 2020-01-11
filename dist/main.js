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
    this.audio = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/Megalovania.mp3');
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
      this.audio.currentTime = 0;
      this.audio.play();
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
      this.audio.stop();
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
    } // loopMusic() {
    // 	audio.addEventListener(
    // 		'ended',
    // 		() => {
    // 			audio.currentTime = 0;
    // 			audio.play();
    // 		},
    // 		false
    // 	);
    // 	// audio.play();
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsImFib3V0TWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV3SGlnaFNjb3JlIiwiZSIsImNvZGUiLCJzdGFydE5ld0dhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDdXJzb3IiLCJjb250ZXh0IiwiZGVncmVlcyIsImN1cnNvclNwZWVkIiwiY3Vyc29yIiwiSW1hZ2UiLCJkZWFkQ3Vyc29yIiwiZXhwbG9zaW9uIiwiZXhwbG9zaW9uRnJhbWUiLCJ4MSIsInkxIiwic3JjIiwiZGlyZWN0aW9uIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGltX3giLCJkaW1feSIsImhpZ2hTY29yZXMiLCJoaWdoU2NvcmVCb3giLCJoaWdoU2NvcmVJbnB1dEZpZWxkIiwiYWRkSGlnaFNjb3JlIiwiZmlyc3RQbGFjZU5hbWUiLCJmaXJzdFBsYWNlU2NvcmUiLCJzZWNvbmRQbGFjZU5hbWUiLCJzZWNvbmRQbGFjZVNjb3JlIiwidGhpcmRQbGFjZU5hbWUiLCJ0aGlyZFBsYWNlU2NvcmUiLCJhdWRpbyIsIkF1ZGlvIiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJmcmFtZUludGVydmFsIiwiY29udHJvbHMiLCJtb3ZlQ3Vyc29yIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZXhwbG9zaW9uQW5pbWF0aW9uIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJhZGRXYXZlIiwicmVtb3ZlV2F2ZSIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsInJlc2V0IiwiY3VycmVudFRpbWUiLCJwbGF5Iiwic3Vydml2ZWRUaW1lIiwiZmlyc3RQbGFjZSIsInNlY29uZFBsYWNlIiwidGhpcmRQbGFjZSIsImZvY3VzIiwic2VsZWN0Iiwic3RvcCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaWdoU2NvcmVOYW1lIiwidmFsdWUiLCJuZXdQbGF5ZXIiLCJpbm5lclRleHQiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJsb2FkU2NyZWVuIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwibG9naWMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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LEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQWI4QixFQW1CN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FuQjZCLENBQXhCLEMsQ0EyQlA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILENBRDRCLEVBTzVCLENBQ0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURILEVBRUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZILEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpILEVBS0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUxILEVBTUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQU5ELEVBT0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQVBELEVBUUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFY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QUFULEVBQWlCckYsVUFBakIsQ0FBZDtBQUNBNkMsZUFBSyxDQUFDSixJQUFOLENBQVdpRSxPQUFYO0FBQ0EsU0FIRCxNQUdPO0FBQ043RCxlQUFLLENBQUNKLElBQU4sQ0FBVyxJQUFYO0FBQ0E7QUFDRDs7QUFFRCxhQUFPSSxLQUFQO0FBQ0E7Ozt5QkFFSXJGLE8sRUFBU2xDLEksRUFBTTtBQUNuQjtBQUNBLFVBQUlnQixRQUFRLEdBQUcsS0FBZjs7QUFFQSxXQUFLLElBQUlzRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGNBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNPLElBQWQsQ0FBbUIzRixPQUFuQixFQUE0QmxDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN2QztBQUNEOztBQUVELGFBQU9BLFFBQVA7QUFDQTs7O3lCQUVJbkIsRyxFQUFLO0FBQ1QsV0FBSyxJQUFJeUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixlQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY3JCLElBQWQsQ0FBbUJwRyxHQUFuQjtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O0FBR2FxSCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG4gIGNhbnZhcy53aWR0aCA9IDc2ODtcbiAgY2FudmFzLmhlaWdodCA9IDc2ODtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4gIC8vIGluc3RhbnRpYXRlIGdhbWVcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIGNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbiAgZ2FtZXN0YWdlLnRpY2tlcigpO1xufSlcblxuIiwiLy8gcGxheWVyIGNvbnRyb2xzXG5jbGFzcyBDb250cm9scyB7XG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsZWZ0OiB7IGFjdGl2ZTogZmFsc2UgfSxcblx0XHRcdHJpZ2h0OiB7IGFjdGl2ZTogZmFsc2UgfVxuXHRcdH07XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhpZ2hTY29yZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdoLXNjb3JlLWJveCcpO1xuXHRcdHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJsYXknKTtcblx0XHR0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWxvZ28nKTtcblx0XHR0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlLWJveCcpO1xuXHRcdHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWluZm8nKTtcblx0XHR0aGlzLmFib3V0TWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dC1tZScpO1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbWUubmV3SGlnaFNjb3JlKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuXHRcdH1cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0a2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRrZXlVcChlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzdGFydEdhbWUoZSkge1xuXHRcdGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcblx0XHRcdHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblx0XHRcdHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKCdjbGVhci1iYWNrZ3JvdW5kLWltYWdlJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmFib3V0TWVbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZU92ZXIoKSB7XG5cdFx0dGhpcy5nYW1lLmdhbWVPdmVyKCk7XG5cdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLW91dCcpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWluZm8tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuYWJvdXRNZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIiwiY2xhc3MgQ3Vyc29yIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmN1cnNvclNwZWVkID0gMTA7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHRcdHRoaXMuY3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmRlYWRDdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5leHBsb3Npb24uc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG5cdH1cblxuXHRtb3ZlQ3Vyc29yKGRpcmVjdGlvbikge1xuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRjYXNlICdjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2NjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0ZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCkge1xuXHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHR0aGlzLmV4cGxvc2lvbixcblx0XHRcdFx0dGhpcy54MSxcblx0XHRcdFx0dGhpcy55MSxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdC01MCxcblx0XHRcdFx0LTc1LFxuXHRcdFx0XHQxNTAsXG5cdFx0XHRcdDE1MFxuXHRcdFx0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcblxuXHRcdFx0dGhpcy54MSArPSAxMDA7XG5cdFx0XHRpZiAodGhpcy54MSA9PT0gMTAwMCkge1xuXHRcdFx0XHR0aGlzLnkxICs9IDEwMDtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lID09PSA3MSkge1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdFx0dGhpcy55MSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcbmltcG9ydCB7IEVBU1lfUEFUVEVSTlMsIE1FRElVTV9QQVRURVJOUywgSEFSRF9QQVRURVJOUyB9IGZyb20gJy4vcGF0dGVybnMnO1xuXG4vLyBjb25zdHJ1Y3RvclxuY2xhc3MgR2FtZSB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5kaW1feCA9IDc2ODtcblx0XHR0aGlzLmRpbV95ID0gNzY4O1xuXHRcdC8vIFRPRE8gZmV0Y2ggaGlnaCBzY29yZXMgZnJvbSBkYlxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRcdFsgJ0FkbWluaXN0cmF0b3InLCAyOC43OSBdLFxuXHRcdFx0WyAnWmVrZW1laXN0ZXInLCAyMy40NSBdLFxuXHRcdFx0WyAnVGhlSm9uQmFlJywgMy4zMyBdXG5cdFx0XTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtZm9ybScpO1xuXHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWRkSGlnaFNjb3JlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvTWVnYWxvdmFuaWEubXAzJyk7XG5cblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0XHR0aGlzLndhdmVzID0gW107XG5cdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cdFx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0XHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cblx0XHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuc3RhdGljTWFwID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR0aGlzLndhcnBHYXRlMS5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZTIuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUzLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcblx0XHR0aGlzLndhcnBHYXRlID0gWyB0aGlzLndhcnBHYXRlMSwgdGhpcy53YXJwR2F0ZTIsIHRoaXMud2FycEdhdGUzIF07XG5cdFx0dGhpcy5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGhpcy53YXJwR2F0ZUluZGV4ICs9IDE7XG5cdFx0XHRpZiAodGhpcy53YXJwR2F0ZUluZGV4ID09PSAzKSB0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHRcdH0sIDUwMCk7XG5cdFx0dGhpcy50aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVyJyk7XG5cdH1cblxuXHRsb2dpYyhmcmFtZUludGVydmFsKSB7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdGNvbnN0IHsgY29udHJvbHMsIGN1cnNvciB9ID0gdGhpcztcblx0XHRcdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2Nsb2Nrd2lzZScpO1xuXHRcdFx0fSBlbHNlIGlmIChjb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2Nsb2Nrd2lzZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gOS41ICogMTAwMCkge1xuXHRcdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnbWVkaXVtJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiAxOS41ICogMTAwMCkge1xuXHRcdFx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnaGFyZCc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudGltZXJDb3VudGVyKGZyYW1lSW50ZXJ2YWwpO1xuXG5cdFx0XHR0aGlzLndhdmVMb2dpYyhmcmFtZUludGVydmFsKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGNvbnN0IHsgZGltX3gsIGRpbV95LCBjdHgsIHdhcnBHYXRlLCB3YXJwR2F0ZUluZGV4LCBzdW5NYXAgfSA9IHRoaXM7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApOyAvLyByZXNldHMgdHJhbnNmb3JtIHRvIGNsZWFyIGVudGlyZSBjYXZhc1xuXHRcdGN0eC5jbGVhclJlY3QoLTI1NiwgLTI1NiwgZGltX3ggKyAyNTYsIGRpbV95ICsgMjU2KTsgLy8gY2xlYXIgY2FudmFzXG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuXHRcdFx0dGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG5cdFx0fVxuXG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMucm90YXRpb24gLyAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKC03NjggLyAyLCAtNzY4IC8gMik7XG5cblx0XHRjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblxuXHRcdC8vIEN1cnNvclxuXHRcdGlmICghdGhpcy5kZWFkU2hpcCkge1xuXHRcdFx0dGhpcy5jdXJzb3IuZHJhdyhjdHgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnNvci5leHBsb3Npb25BbmltYXRpb24oY3R4KTtcblx0XHR9XG5cblx0XHQvLyBXYXZlc1xuXHRcdHRoaXMud2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdFx0d2F2ZS5kcmF3KGN0eCk7XG5cdFx0fSk7XG5cblx0XHQvLyBFYXJ0aCBvcmJpdFxuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdHRoaXMuY3R4LmFyYyhkaW1feCAvIDIsIGRpbV95IC8gMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdFx0Ly8gV2FycGdhdGVcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2UoXG5cdFx0XHR3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSxcblx0XHRcdGRpbV94IC8gNCArIDk3LjUsXG5cdFx0XHRkaW1feSAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3ggLyA0LFxuXHRcdFx0ZGltX3kgLyA0XG5cdFx0KTtcblxuXHRcdC8vIE1hcFxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIGRpbV94LCBkaW1feSk7XG5cdH1cblxuXHRhZGRDdXJzb3IoKSB7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cdFx0cmV0dXJuIHRoaXMuY3Vyc29yO1xuXHR9XG5cblx0YWRkQ29udHJvbHMoKSB7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzKTtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9scztcblx0fVxuXG5cdGFkZFdhdmUoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGNvbnN0IHsgZGlmZmljdWx0eSB9ID0gdGhpcztcblxuXHRcdC8vIGxhdW5jaCB3YXZlIGV2ZXJ5IHggc2Vjb25kc1xuXHRcdGlmIChcblx0XHRcdHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwIHx8XG5cdFx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPT09IGZyYW1lSW50ZXJ2YWxcblx0XHQpIHtcblx0XHRcdC8vIGlmICh0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCApIHtcblx0XHRcdC8vIGlmIHBhdHRlcm5MaXN0IGlzIGVtcHR5LCBhZGQgbW9yZSBwYXR0ZXJucyB0byBwYXR0ZXJuTGlzdFxuXHRcdFx0aWYgKHRoaXMucGF0dGVybkxpc3QubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHN3aXRjaCAoZGlmZmljdWx0eSkge1xuXHRcdFx0XHRcdGNhc2UgJ2Vhc3knOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRFQVNZX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVBU1lfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDE7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdtZWRpdW0nOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRNRURJVU1fUEFUVEVSTlNbXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUVESVVNX1BBVFRFUk5TLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC43NTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2hhcmQnOlxuXHRcdFx0XHRcdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IHRoaXMucGF0dGVybkxpc3QuY29uY2F0KFxuXHRcdFx0XHRcdFx0XHRIQVJEX1BBVFRFUk5TW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEhBUkRfUEFUVEVSTlMubGVuZ3RoKV1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzIHN0dWZmIHJ1bnMgYXQgc2V0IGludGVydmFscyAoMnMpXG5cdFx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm5MaXN0LnNoaWZ0KCk7XG5cdFx0XHRsZXQgbmV3V2F2ZSA9IG5ldyBXYXZlKHRoaXMucGF0dGVybiwgdGhpcy5kaWZmaWN1bHR5KTtcblx0XHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR9XG5cdFx0Ly8gcnVucyByZWdhcmRsZXNzIG9mIHRpbWVyXG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgKz0gZnJhbWVJbnRlcnZhbDtcblx0fVxuXG5cdHJlbW92ZVdhdmUoKSB7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblx0XHRjb25zdCByZW1vdmVEaXN0YW5jZSA9IDYwO1xuXHRcdC8vIHNoaWZ0cyBvZmYgd2F2ZSBpbiBGSUZPXG5cdFx0aWYgKHdhdmVzWzBdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRcdGlmICh3YXZlc1swXS53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCB4MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1swXTtcblx0XHRcdFx0XHRsZXQgeTEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMV07XG5cdFx0XHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSB4MSkgKiogMiArICgzODQgLSB5MSkgKiogMik7XG5cdFx0XHRcdFx0aWYgKGRpc3RhbmNlIDwgcmVtb3ZlRGlzdGFuY2UpIHtcblx0XHRcdFx0XHRcdHRoaXMud2F2ZXMuc2hpZnQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHdhdmVMb2dpYyhmcmFtZUludGVydmFsKSB7XG5cdFx0dGhpcy5hZGRXYXZlKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdGxldCBnYW1lID0gdGhpcztcblx0XHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXG5cdFx0Ly8gd2F2ZSBkZXNwYXduIGxvZ2ljXG5cdFx0dGhpcy5yZW1vdmVXYXZlKCk7XG5cblx0XHQvL2N1cnNvciBhbmdsZSBhcyB0aGV0YVxuXHRcdGxldCBkZWdyZWVzID0gdGhpcy5jdXJzb3IuZGVncmVlcztcblx0XHRkZWdyZWVzID0gZGVncmVlcyAlIDM2MDtcblx0XHR3aGlsZSAoZGVncmVlcyA8IDApIHtcblx0XHRcdGRlZ3JlZXMgKz0gMzYwO1xuXHRcdH1cblxuXHRcdHdhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdC8vIGlmIGFueSByZXR1cm4gdHJ1ZSwgY2FsbCB0aGlzLmdhbWVPdmVyKClcblx0XHRcdGlmICh3YXZlLm1vdmUoZGVncmVlcywgZ2FtZSkpIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIHRvcCByaWdodCB0aW1lclxuXHR0aW1lckNvdW50ZXIodGltZUVsYXBzZWQpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG5cdFx0bGV0IHJvdW5kZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdFx0dGhpcy50aW1lclswXS5pbm5lckhUTUwgPSByb3VuZGVkVGltZS50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhcnROZXdHYW1lKCkge1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0XHR0aGlzLndhdmVzID0gW107XG5cdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0XHR0aGlzLmN1cnNvci5kZWdyZWVzID0gMjcwO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLmNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMucm90YXRpb24gPSAwO1xuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0XHR0aGlzLmN1cnNvci5yZXNldCgpO1xuXHRcdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcblx0XHR0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdC8vIFRPRE8gY2hlY2sgaGlnaCBzY29yZSB0byBkaXNwbGF5IG5hbWUgcHJvbXB0XG5cdFx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0aWYgKFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHRoaXJkUGxhY2VbMV1cblx0XHQpIHtcblx0XHRcdHRoaXMubmV3SGlnaFNjb3JlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLmZvY3VzKCk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZFNoaXAgPSB0cnVlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy5hdWRpby5zdG9wKCk7XG5cdH1cblxuXHRhZGRIaWdoU2NvcmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cblx0XHRsZXQgaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpWzBdO1xuXHRcdGxldCBoaWdoU2NvcmVOYW1lID0gaGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZTtcblx0XHRsZXQgbmV3UGxheWVyID0gWyBoaWdoU2NvcmVOYW1lLCBzdXJ2aXZlZFRpbWUgXTtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cblx0XHRpZiAoc3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBmaXJzdFBsYWNlO1xuXHRcdFx0Zmlyc3RQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9IGVsc2UgaWYgKHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdKSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0XHRzZWNvbmRQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcmRQbGFjZSA9IG5ld1BsYXllcjtcblx0XHR9XG5cblx0XHR0aGlzLmhpZ2hTY29yZXMgPSBbIGZpcnN0UGxhY2UsIHNlY29uZFBsYWNlLCB0aGlyZFBsYWNlIF07XG5cblx0XHQvLyBUT0RPIG1vdmUgaW50byBvd24gZnVuY3Rpb25cblx0XHQvLyByZWFzc2lnbiB0b3Agc3Vydml2b3JzXG5cdFx0Ly8gZGVidWdnZXJcblx0XHR0aGlzLmZpcnN0UGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBGaXJzdDogJHtmaXJzdFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gZmlyc3RQbGFjZVsxXS50b1N0cmluZygpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBTZWNvbmQ6ICR7c2Vjb25kUGxhY2VbMF19YDtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gc2Vjb25kUGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VOYW1lWzBdLmlubmVyVGV4dCA9IGBUaGlyZDogJHt0aGlyZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy50aGlyZFBsYWNlU2NvcmVbMF0uaW5uZXJUZXh0ID0gdGhpcmRQbGFjZVsxXS50b1N0cmluZygpO1xuXG5cdFx0Ly8gZGF0YWJhc2UgbG9naWMgZ29lcyBoZXJlXG5cblx0XHQvLyBjbGVhciBlbnRlcmVkIG5hbWUgYW5kIHJlc2V0IGdhbWUgbG9naWNcblx0XHRoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0dGhpcy5uZXdIaWdoU2NvcmUgPSBmYWxzZTtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY2xhc3MgR2FtZVN0YWdlIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCwgZ2FtZSkge1xuXHRcdHRoaXMuY3R4ID0gY29udGV4dDtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuZnJhbWVSYXRlID0gNjA7XG5cdFx0dGhpcy5mcmFtZUludGVydmFsID0gMTAwMCAvIHRoaXMuZnJhbWVSYXRlO1xuXHRcdHRoaXMuc2V0VGltZSA9IDA7XG5cdFx0dGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG5cdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuXHRcdHRoaXMubG9hZFNjcmVlbiA9IHRydWU7XG4gICAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR9XG5cblx0dGlja2VyKHRpbWUpIHtcblx0XHRjb25zdCB7IGZyYW1lSW50ZXJ2YWwsIHNldFRpbWUgfSA9IHRoaXM7XG5cblx0XHQvLyBmcmFtZSBsaW1pdGVyXG5cdFx0bGV0IGN1clRpbWUgPSB0aW1lO1xuXHRcdGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cblx0XHQvLyBkcmF3IGZyYW1lXG5cdFx0aWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdFx0dGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5nYW1lLmRyYXcoKTtcblx0XHRcdHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8vIGxvb3BNdXNpYygpIHtcblx0XHRcblx0Ly8gXHRhdWRpby5hZGRFdmVudExpc3RlbmVyKFxuXHQvLyBcdFx0J2VuZGVkJyxcblx0Ly8gXHRcdCgpID0+IHtcblx0Ly8gXHRcdFx0YXVkaW8uY3VycmVudFRpbWUgPSAwO1xuXHQvLyBcdFx0XHRhdWRpby5wbGF5KCk7XG5cdC8vIFx0XHR9LFxuXHQvLyBcdFx0ZmFsc2Vcblx0Ly8gXHQpO1xuXHQvLyBcdC8vIGF1ZGlvLnBsYXkoKTtcblx0Ly8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7XG4iLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbIFsgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCBdIFxuICBdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAgXVxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0W1xuICAgIFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG4iLCJjbGFzcyBXYWxsIHtcblx0Y29uc3RydWN0b3Iob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnNjYWxlID0gNDtcblx0XHQvLyB0aGlzLnNwZWVkID0gODtcblx0XHQvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdFx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHRcdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDk7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0XHR9XG5cblx0XHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG5cdH1cblxuXHRvY3RhbnRMb2dpYyhvY3RhbnQpIHtcblx0XHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG1vdmUodGhldGEpIHtcblx0XHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRcdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdFx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0XHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblx0XHQvLyBkZWJ1Z2dlclxuXG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA3XG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRcdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdFx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRcdGlmIChkeCA+IDApIHtcblx0XHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXHRcdGlmIChkeSA+IDApIHtcblx0XHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0XHRsZXQgeCA9IHBvc1swXTtcblx0XHRsZXQgeSA9IHBvc1sxXTtcblxuXHRcdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5zcHJpdGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0LXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLFxuXHRcdFx0LXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuY2xhc3MgV2F2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdHRoaXMuZW5kID0gZmFsc2U7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHRcdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdH1cblxuXHRhZGRXYWxscyhkaWZmaWN1bHR5KSB7XG5cdFx0bGV0IHdhbGxzID0gW107XG5cdFx0Y29uc3QgeyBwYXR0ZXJuIH0gPSB0aGlzO1xuXG5cdFx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd2FsbHM7XG5cdH1cblxuXHRtb3ZlKGRlZ3JlZXMsIGdhbWUpIHtcblx0XHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9