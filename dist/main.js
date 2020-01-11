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
      this.audio.pause();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsImFib3V0TWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV3SGlnaFNjb3JlIiwiZSIsImNvZGUiLCJzdGFydE5ld0dhbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDdXJzb3IiLCJjb250ZXh0IiwiZGVncmVlcyIsImN1cnNvclNwZWVkIiwiY3Vyc29yIiwiSW1hZ2UiLCJkZWFkQ3Vyc29yIiwiZXhwbG9zaW9uIiwiZXhwbG9zaW9uRnJhbWUiLCJ4MSIsInkxIiwic3JjIiwiZGlyZWN0aW9uIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGltX3giLCJkaW1feSIsImhpZ2hTY29yZXMiLCJoaWdoU2NvcmVCb3giLCJoaWdoU2NvcmVJbnB1dEZpZWxkIiwiYWRkSGlnaFNjb3JlIiwiZmlyc3RQbGFjZU5hbWUiLCJmaXJzdFBsYWNlU2NvcmUiLCJzZWNvbmRQbGFjZU5hbWUiLCJzZWNvbmRQbGFjZVNjb3JlIiwidGhpcmRQbGFjZU5hbWUiLCJ0aGlyZFBsYWNlU2NvcmUiLCJhdWRpbyIsIkF1ZGlvIiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJmcmFtZUludGVydmFsIiwiY29udHJvbHMiLCJtb3ZlQ3Vyc29yIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZXhwbG9zaW9uQW5pbWF0aW9uIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJhZGRXYXZlIiwicmVtb3ZlV2F2ZSIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsInJlc2V0IiwiY3VycmVudFRpbWUiLCJwbGF5Iiwic3Vydml2ZWRUaW1lIiwiZmlyc3RQbGFjZSIsInNlY29uZFBsYWNlIiwidGhpcmRQbGFjZSIsImZvY3VzIiwic2VsZWN0IiwicGF1c2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGlnaFNjb3JlTmFtZSIsInZhbHVlIiwibmV3UGxheWVyIiwiaW5uZXJUZXh0IiwiZnJhbWVSYXRlIiwic2V0VGltZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwibG9hZFNjcmVlbiIsInRpbWUiLCJjdXJUaW1lIiwidGltZURpZiIsImxvZ2ljIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiV2FsbCIsIm9jdGFudCIsInNwcml0ZSIsInNjYWxlIiwic3BlZWQiLCJkZXNjYWxlRmFjdG9yIiwib2N0YW50TG9naWMiLCJkZWdyZWVSb3RhdGlvbiIsInhvZmZzZXQiLCJ5b2Zmc2V0IiwiaGl0Ym94IiwiaGl0Ym94MiIsInRoZXRhIiwicG9zeCIsInBvc3kiLCJkeCIsImR5IiwieCIsInkiLCJlbmQiLCJjdXJyZW50U3Vid2F2ZSIsImFkZFdhbGxzIiwibmV3V2FsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQUk7QUFDaEQsTUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBRCxRQUFNLENBQUNFLEtBQVAsR0FBZSxHQUFmO0FBQ0FGLFFBQU0sQ0FBQ0csTUFBUCxHQUFnQixHQUFoQjtBQUNBLE1BQUlDLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsS0FBRyxDQUFDRSx3QkFBSixHQUErQixrQkFBL0IsQ0FMZ0QsQ0FPaEQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLENBQVNKLEdBQVQsQ0FBYjtBQUNBLE1BQU1LLFNBQVMsR0FBRyxJQUFJQyxxREFBSixDQUFjTixHQUFkLEVBQW1CRyxJQUFuQixDQUFsQjtBQUNBRSxXQUFTLENBQUNFLE1BQVY7QUFDRCxDQVhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtJQUNNQyxROzs7QUFDTCxvQkFBWUwsSUFBWixFQUFrQjtBQUFBOztBQUNqQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTSxLQUFMLEdBQWE7QUFDWkMsVUFBSSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BRE07QUFFWkMsV0FBSyxFQUFFO0FBQUVELGNBQU0sRUFBRTtBQUFWO0FBRkssS0FBYjtBQUlBLFNBQUtFLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCQyxJQUEzQixDQUFnQyxJQUFoQyxDQUE3QjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE1QjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFGLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdILElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLFNBQUtJLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsU0FBS0ssUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNMLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLTSxhQUFMLEdBQXFCMUIsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQXJCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlNUIsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZjtBQUNBLFNBQUtFLE9BQUwsR0FBZTdCLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFmO0FBQ0EsU0FBS0csU0FBTCxHQUFpQjlCLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLFdBQWhDLENBQWpCO0FBQ0EsU0FBS0ksUUFBTCxHQUFnQi9CLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGlCQUFoQyxDQUFoQjtBQUNBLFNBQUtLLE9BQUwsR0FBZWhDLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLFVBQWhDLENBQWY7QUFDQTs7OzsyQ0FFc0I7QUFDdEIzQixjQUFRLENBQUNpQyxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLVCxTQUE3QztBQUVBeEIsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLcUIsT0FBMUM7QUFDQXRCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS3NCLEtBQXhDO0FBQ0E7Ozs0Q0FFdUI7QUFDdkIsVUFBSSxDQUFDLEtBQUtkLElBQUwsQ0FBVXlCLFlBQWYsRUFBNkI7QUFDNUJsQyxnQkFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLdUIsU0FBMUM7QUFDQTs7QUFDRHhCLGNBQVEsQ0FBQ2lDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtYLE9BQTdDO0FBQ0F0QixjQUFRLENBQUNpQyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLVixLQUEzQztBQUNBOzs7NEJBRU9ZLEMsRUFBRztBQUNWLGNBQVFBLENBQUMsQ0FBQ0MsSUFBVjtBQUNDLGFBQUssWUFBTDtBQUNDLGNBQUksQ0FBQyxLQUFLckIsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUF0QixFQUE4QjtBQUM3QixpQkFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCRCxNQUFqQixHQUEwQixJQUExQjtBQUNBOztBQUNEOztBQUNELGFBQUssV0FBTDtBQUNDLGNBQUksQ0FBQyxLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLE1BQXJCLEVBQTZCO0FBQzVCLGlCQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0E7O0FBQ0Q7O0FBQ0Q7QUFDQztBQVpGO0FBY0E7OzswQkFFS2tCLEMsRUFBRztBQUNSLGNBQVFBLENBQUMsQ0FBQ0MsSUFBVjtBQUNDLGFBQUssWUFBTDtBQUNDLGVBQUtyQixLQUFMLENBQVdHLEtBQVgsQ0FBaUJELE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0E7O0FBQ0QsYUFBSyxXQUFMO0FBQ0MsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxNQUFoQixHQUF5QixLQUF6QjtBQUNBOztBQUNEO0FBQ0M7QUFSRjtBQVVBOzs7OEJBRVNrQixDLEVBQUc7QUFDWixVQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3ZCLGFBQUszQixJQUFMLENBQVU0QixZQUFWO0FBQ0EsYUFBS1QsT0FBTCxDQUFhLENBQWIsRUFBZ0JVLFNBQWhCLENBQTBCQyxHQUExQixDQUE4Qix3QkFBOUI7QUFDQSxhQUFLVixPQUFMLENBQWEsQ0FBYixFQUFnQlMsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLGFBQUtYLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsMEJBQTlCO0FBQ0EsYUFBS1QsU0FBTCxDQUFlLENBQWYsRUFBa0JRLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxvQkFBbkM7QUFDQSxhQUFLVixTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG1CQUFoQztBQUNBLGFBQUtSLFFBQUwsQ0FBYyxDQUFkLEVBQWlCTyxTQUFqQixDQUEyQkUsTUFBM0IsQ0FBa0MseUJBQWxDO0FBQ0EsYUFBS1QsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQiwwQkFBL0I7QUFDQSxhQUFLYixhQUFMLENBQW1CLENBQW5CLEVBQXNCWSxTQUF0QixDQUFnQ0MsR0FBaEMsQ0FBb0MsUUFBcEM7QUFDQSxhQUFLUCxPQUFMLENBQWEsQ0FBYixFQUFnQk0sU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0FBQ0EsYUFBS2xCLG9CQUFMO0FBQ0E7QUFDRDs7OytCQUVVO0FBQ1YsV0FBS1osSUFBTCxDQUFVZ0IsUUFBVjtBQUNBLFdBQUtJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUyxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsMEJBQWpDO0FBQ0EsV0FBS1gsT0FBTCxDQUFhLENBQWIsRUFBZ0JTLFNBQWhCLENBQTBCQyxHQUExQixDQUE4Qix5QkFBOUI7QUFDQSxXQUFLVCxTQUFMLENBQWUsQ0FBZixFQUFrQlEsU0FBbEIsQ0FBNEJFLE1BQTVCLENBQW1DLG1CQUFuQztBQUNBLFdBQUtWLFNBQUwsQ0FBZSxDQUFmLEVBQWtCUSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0Msb0JBQWhDO0FBQ0EsV0FBS1IsUUFBTCxDQUFjLENBQWQsRUFBaUJPLFNBQWpCLENBQTJCRSxNQUEzQixDQUFrQywwQkFBbEM7QUFDQSxXQUFLVCxRQUFMLENBQWMsQ0FBZCxFQUFpQk8sU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLHlCQUEvQjtBQUNBLFdBQUtiLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JZLFNBQXRCLENBQWdDRSxNQUFoQyxDQUF1QyxRQUF2QztBQUNBLFdBQUtSLE9BQUwsQ0FBYSxDQUFiLEVBQWdCTSxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsUUFBakM7QUFDQSxXQUFLckIscUJBQUw7QUFDQTs7Ozs7O0FBR2FMLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakdNMkIsTTs7O0FBQ0wsa0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDcEIsU0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSUQsS0FBSixFQUFsQjtBQUNBLFNBQUtFLFNBQUwsR0FBaUIsSUFBSUYsS0FBSixFQUFqQjtBQUNBLFNBQUtHLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS04sTUFBTCxDQUFZTyxHQUFaLEdBQ0Msd0dBREQ7QUFFQSxTQUFLTCxVQUFMLENBQWdCSyxHQUFoQixHQUNDLDBHQUREO0FBRUEsU0FBS0osU0FBTCxDQUFlSSxHQUFmLEdBQ0MsdUdBREQ7QUFFQTs7OzsrQkFFVUMsUyxFQUFXO0FBQ3JCLGNBQVFBLFNBQVI7QUFDQyxhQUFLLFdBQUw7QUFDQyxlQUFLVixPQUFMLElBQWdCLEtBQUtDLFdBQXJCO0FBQ0E7O0FBRUQsYUFBSyxZQUFMO0FBQ0MsZUFBS0QsT0FBTCxJQUFnQixLQUFLQyxXQUFyQjtBQUNBO0FBUEY7QUFTQTs7O3lCQUVJdEMsRyxFQUFLO0FBQ1RBLFNBQUcsQ0FBQ2dELElBQUo7QUFDQWhELFNBQUcsQ0FBQ2lELFNBQUosQ0FBYyxNQUFNLENBQXBCLEVBQXVCLE1BQU0sQ0FBN0I7QUFDQWpELFNBQUcsQ0FBQ2tELE1BQUosQ0FBVyxJQUFJQyxJQUFJLENBQUNDLEVBQVQsR0FBYyxHQUFkLElBQXFCLEtBQUtmLE9BQUwsR0FBZSxHQUFwQyxDQUFYO0FBQ0FyQyxTQUFHLENBQUNpRCxTQUFKLENBQWMsR0FBZCxFQUFtQixDQUFuQjtBQUNBakQsU0FBRyxDQUFDcUQsU0FBSixDQUFjLEtBQUtkLE1BQW5CLEVBQTJCLENBQTNCLEVBQThCLENBQUMsRUFBL0I7QUFDQXZDLFNBQUcsQ0FBQ3NELE9BQUo7QUFDQTs7O3VDQUVrQnRELEcsRUFBSztBQUN2QixVQUFJLEtBQUsyQyxjQUFMLElBQXVCLEVBQTNCLEVBQStCO0FBQzlCM0MsV0FBRyxDQUFDZ0QsSUFBSjtBQUNBaEQsV0FBRyxDQUFDaUQsU0FBSixDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QjtBQUNBakQsV0FBRyxDQUFDa0QsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsS0FBS2YsT0FBTCxHQUFlLEdBQXBDLENBQVg7QUFDQXJDLFdBQUcsQ0FBQ2lELFNBQUosQ0FBYyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FqRCxXQUFHLENBQUNxRCxTQUFKLENBQ0MsS0FBS1gsU0FETixFQUVDLEtBQUtFLEVBRk4sRUFHQyxLQUFLQyxFQUhOLEVBSUMsR0FKRCxFQUtDLEdBTEQsRUFNQyxDQUFDLEVBTkYsRUFPQyxDQUFDLEVBUEYsRUFRQyxHQVJELEVBU0MsR0FURDtBQVdBN0MsV0FBRyxDQUFDc0QsT0FBSjtBQUVBLGFBQUtYLGNBQUw7QUFFQSxhQUFLQyxFQUFMLElBQVcsR0FBWDs7QUFDQSxZQUFJLEtBQUtBLEVBQUwsS0FBWSxJQUFoQixFQUFzQjtBQUNyQixlQUFLQyxFQUFMLElBQVcsR0FBWDtBQUNBLGVBQUtELEVBQUwsR0FBVSxDQUFWO0FBQ0E7O0FBRUQsWUFBSSxLQUFLRCxjQUFMLEtBQXdCLEVBQTVCLEVBQWdDO0FBQy9CLGVBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsZUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQTtBQUNEOztBQUVEN0MsU0FBRyxDQUFDZ0QsSUFBSjtBQUNBaEQsU0FBRyxDQUFDaUQsU0FBSixDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QjtBQUNBakQsU0FBRyxDQUFDa0QsTUFBSixDQUFXLElBQUlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjLEdBQWQsSUFBcUIsS0FBS2YsT0FBTCxHQUFlLEdBQXBDLENBQVg7QUFDQXJDLFNBQUcsQ0FBQ2lELFNBQUosQ0FBYyxHQUFkLEVBQW1CLENBQW5CO0FBQ0FqRCxTQUFHLENBQUNxRCxTQUFKLENBQWMsS0FBS1osVUFBbkIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBQyxFQUFuQztBQUNBekMsU0FBRyxDQUFDc0QsT0FBSjtBQUNBOzs7NEJBRU87QUFDUCxXQUFLWCxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsV0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBOzs7Ozs7QUFHRlUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckIsTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtDQUdBOztJQUNNL0IsSTs7O0FBQ0wsZ0JBQVlnQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ3BCLFNBQUtwQyxHQUFMLEdBQVdvQyxPQUFYO0FBQ0EsU0FBS3FCLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWIsQ0FIb0IsQ0FJcEI7O0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUNqQixDQUFFLGVBQUYsRUFBbUIsS0FBbkIsQ0FEaUIsRUFFakIsQ0FBRSxhQUFGLEVBQWlCLEtBQWpCLENBRmlCLEVBR2pCLENBQUUsV0FBRixFQUFlLElBQWYsQ0FIaUIsQ0FBbEI7QUFLQSxTQUFLQyxZQUFMLEdBQW9CbEUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQXBCO0FBQ0EsU0FBS3dDLG1CQUFMLEdBQTJCbkUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FDMUIsd0JBRDBCLENBQTNCO0FBR0EzQixZQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLEtBQUttRSxZQUFMLENBQWtCaEQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEM7QUFDQSxTQUFLaUQsY0FBTCxHQUFzQnJFLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGtCQUFoQyxDQUF0QjtBQUNBLFNBQUsyQyxlQUFMLEdBQXVCdEUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsbUJBQWhDLENBQXZCO0FBQ0EsU0FBSzRDLGVBQUwsR0FBdUJ2RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBdkI7QUFDQSxTQUFLNkMsZ0JBQUwsR0FBd0J4RSxRQUFRLENBQUMyQixzQkFBVCxDQUFnQyxvQkFBaEMsQ0FBeEI7QUFDQSxTQUFLOEMsY0FBTCxHQUFzQnpFLFFBQVEsQ0FBQzJCLHNCQUFULENBQWdDLGtCQUFoQyxDQUF0QjtBQUNBLFNBQUsrQyxlQUFMLEdBQXVCMUUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsbUJBQWhDLENBQXZCO0FBQ0EsU0FBS2dELEtBQUwsR0FBYSxJQUFJQyxLQUFKLENBQVUsNkZBQVYsQ0FBYjtBQUVBLFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixNQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBQ0EsU0FBS25ELFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLb0QsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxJQUFJekMsS0FBSixFQUFkO0FBQ0EsU0FBSzBDLFNBQUwsR0FBaUIsSUFBSTFDLEtBQUosRUFBakI7QUFDQSxTQUFLMkMsU0FBTCxHQUFpQixJQUFJM0MsS0FBSixFQUFqQjtBQUNBLFNBQUs0QyxTQUFMLEdBQWlCLElBQUk1QyxLQUFKLEVBQWpCO0FBQ0EsU0FBSzZDLFNBQUwsR0FBaUIsSUFBSTdDLEtBQUosRUFBakI7QUFDQSxTQUFLOEMsYUFBTCxHQUFxQixDQUFyQjtBQUNBLFNBQUtILFNBQUwsQ0FBZXJDLEdBQWYsR0FDQyw0RkFERDtBQUVBLFNBQUtzQyxTQUFMLENBQWV0QyxHQUFmLEdBQ0MsNEZBREQ7QUFFQSxTQUFLdUMsU0FBTCxDQUFldkMsR0FBZixHQUNDLDRGQUREO0FBRUEsU0FBS3lDLFFBQUwsR0FBZ0IsQ0FBRSxLQUFLSixTQUFQLEVBQWtCLEtBQUtDLFNBQXZCLEVBQWtDLEtBQUtDLFNBQXZDLENBQWhCO0FBQ0EsU0FBS0osTUFBTCxDQUFZbkMsR0FBWixHQUFrQix3REFBbEI7QUFDQSxTQUFLMEMsYUFBTCxHQUFxQkMsV0FBVyxDQUFDLFlBQU07QUFDdEMsV0FBSSxDQUFDSCxhQUFMLElBQXNCLENBQXRCO0FBQ0EsVUFBSSxLQUFJLENBQUNBLGFBQUwsS0FBdUIsQ0FBM0IsRUFBOEIsS0FBSSxDQUFDQSxhQUFMLEdBQXFCLENBQXJCO0FBQzlCLEtBSCtCLEVBRzdCLEdBSDZCLENBQWhDO0FBSUEsU0FBS0ksS0FBTCxHQUFhaEcsUUFBUSxDQUFDMkIsc0JBQVQsQ0FBZ0MsT0FBaEMsQ0FBYjtBQUNBOzs7OzBCQUVLc0UsYSxFQUFlO0FBQ3BCLFVBQUksQ0FBQyxLQUFLcEIsVUFBVixFQUFzQjtBQUFBLFlBQ2JxQixRQURhLEdBQ1EsSUFEUixDQUNiQSxRQURhO0FBQUEsWUFDSHJELE1BREcsR0FDUSxJQURSLENBQ0hBLE1BREc7O0FBRXJCLFlBQUlxRCxRQUFRLENBQUNuRixLQUFULENBQWVDLElBQWYsQ0FBb0JDLE1BQXhCLEVBQWdDO0FBQy9CNEIsZ0JBQU0sQ0FBQ3NELFVBQVAsQ0FBa0IsWUFBbEI7QUFDQSxTQUZELE1BRU8sSUFBSUQsUUFBUSxDQUFDbkYsS0FBVCxDQUFlRyxLQUFmLENBQXFCRCxNQUF6QixFQUFpQztBQUN2QzRCLGdCQUFNLENBQUNzRCxVQUFQLENBQWtCLFdBQWxCO0FBQ0E7O0FBRUQsWUFBSSxLQUFLckIsZ0JBQUwsR0FBd0IsTUFBTSxJQUFsQyxFQUF3QztBQUN2QyxlQUFLSyxVQUFMLEdBQWtCLFFBQWxCO0FBQ0E7O0FBQ0QsWUFBSSxLQUFLTCxnQkFBTCxHQUF3QixPQUFPLElBQW5DLEVBQXlDO0FBQ3hDLGVBQUtLLFVBQUwsR0FBa0IsTUFBbEI7QUFDQTs7QUFFRCxhQUFLaUIsWUFBTCxDQUFrQkgsYUFBbEI7QUFFQSxhQUFLSSxTQUFMLENBQWVKLGFBQWY7QUFDQTtBQUNEOzs7MkJBRU07QUFBQSxVQUNFbEMsS0FERixHQUN5RCxJQUR6RCxDQUNFQSxLQURGO0FBQUEsVUFDU0MsS0FEVCxHQUN5RCxJQUR6RCxDQUNTQSxLQURUO0FBQUEsVUFDZ0IxRCxHQURoQixHQUN5RCxJQUR6RCxDQUNnQkEsR0FEaEI7QUFBQSxVQUNxQnVGLFFBRHJCLEdBQ3lELElBRHpELENBQ3FCQSxRQURyQjtBQUFBLFVBQytCRCxhQUQvQixHQUN5RCxJQUR6RCxDQUMrQkEsYUFEL0I7QUFBQSxVQUM4Q0wsTUFEOUMsR0FDeUQsSUFEekQsQ0FDOENBLE1BRDlDO0FBRU5qRixTQUFHLENBQUNnRCxJQUFKO0FBQ0FoRCxTQUFHLENBQUNnRyxZQUFKLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBSE0sQ0FHOEI7O0FBQ3BDaEcsU0FBRyxDQUFDaUcsU0FBSixDQUFjLENBQUMsR0FBZixFQUFvQixDQUFDLEdBQXJCLEVBQTBCeEMsS0FBSyxHQUFHLEdBQWxDLEVBQXVDQyxLQUFLLEdBQUcsR0FBL0MsRUFKTSxDQUkrQzs7QUFDckQxRCxTQUFHLENBQUNzRCxPQUFKOztBQUNBLFVBQUksQ0FBQyxLQUFLaUIsVUFBVixFQUFzQjtBQUNyQixhQUFLTyxRQUFMLElBQWlCLEtBQUtDLGFBQXRCO0FBQ0E7O0FBRUQvRSxTQUFHLENBQUNpRCxTQUFKLENBQWMsTUFBTSxDQUFwQixFQUF1QixNQUFNLENBQTdCO0FBQ0FqRCxTQUFHLENBQUNrRCxNQUFKLENBQVcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWMsR0FBZCxJQUFxQixLQUFLMEIsUUFBTCxHQUFnQixHQUFyQyxDQUFYO0FBQ0E5RSxTQUFHLENBQUNpRCxTQUFKLENBQWMsQ0FBQyxHQUFELEdBQU8sQ0FBckIsRUFBd0IsQ0FBQyxHQUFELEdBQU8sQ0FBL0I7QUFFQWpELFNBQUcsQ0FBQ2tHLFNBQUosR0FBZ0IsTUFBaEI7QUFDQWxHLFNBQUcsQ0FBQ21HLFdBQUosR0FBa0IsTUFBbEIsQ0FmTSxDQWlCTjs7QUFDQSxVQUFJLENBQUMsS0FBS25CLFFBQVYsRUFBb0I7QUFDbkIsYUFBS3pDLE1BQUwsQ0FBWTZELElBQVosQ0FBaUJwRyxHQUFqQjtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUt1QyxNQUFMLENBQVk4RCxrQkFBWixDQUErQnJHLEdBQS9CO0FBQ0EsT0F0QkssQ0F3Qk47OztBQUNBLFdBQUsyRSxLQUFMLENBQVcyQixPQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUM1QkEsWUFBSSxDQUFDSCxJQUFMLENBQVVwRyxHQUFWO0FBQ0EsT0FGRCxFQXpCTSxDQTZCTjs7QUFDQSxXQUFLQSxHQUFMLENBQVN3RyxTQUFUO0FBQ0EsV0FBS3hHLEdBQUwsQ0FBU3lHLEdBQVQsQ0FBYWhELEtBQUssR0FBRyxDQUFyQixFQUF3QkMsS0FBSyxHQUFHLENBQWhDLEVBQW1DLEdBQW5DLEVBQXdDLENBQXhDLEVBQTJDUCxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyRCxFQUF3RCxLQUF4RDtBQUNBLFdBQUtwRCxHQUFMLENBQVMwRyxNQUFULEdBaENNLENBa0NOOztBQUNBLFdBQUsxRyxHQUFMLENBQVNxRCxTQUFULENBQ0NrQyxRQUFRLENBQUNELGFBQUQsQ0FEVCxFQUVDN0IsS0FBSyxHQUFHLENBQVIsR0FBWSxJQUZiLEVBR0NDLEtBQUssR0FBRyxDQUFSLEdBQVksSUFIYixFQUlDRCxLQUFLLEdBQUcsQ0FKVCxFQUtDQyxLQUFLLEdBQUcsQ0FMVCxFQW5DTSxDQTJDTjs7QUFDQSxXQUFLMUQsR0FBTCxDQUFTcUQsU0FBVCxDQUFtQjRCLE1BQW5CLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDeEIsS0FBakMsRUFBd0NDLEtBQXhDO0FBQ0E7OztnQ0FFVztBQUNYLFdBQUtuQixNQUFMLEdBQWMsSUFBSUosOENBQUosRUFBZDtBQUNBLGFBQU8sS0FBS0ksTUFBWjtBQUNBOzs7a0NBRWE7QUFDYixXQUFLcUQsUUFBTCxHQUFnQixJQUFJcEYsaURBQUosQ0FBYSxJQUFiLENBQWhCO0FBQ0EsYUFBTyxLQUFLb0YsUUFBWjtBQUNBOzs7NEJBRU9ELGEsRUFBZTtBQUFBLFVBQ2RkLFVBRGMsR0FDQyxJQURELENBQ2RBLFVBRGMsRUFHdEI7O0FBQ0EsVUFDQyxLQUFLSixZQUFMLEdBQW9CLEtBQUtDLGVBQUwsR0FBdUIsSUFBM0MsSUFDQSxLQUFLRixnQkFBTCxLQUEwQm1CLGFBRjNCLEVBR0U7QUFDRDtBQUNBO0FBQ0EsWUFBSSxLQUFLZixXQUFMLENBQWlCK0IsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDbEMsa0JBQVE5QixVQUFSO0FBQ0MsaUJBQUssTUFBTDtBQUNDLG1CQUFLRCxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJnQyxNQUFqQixDQUNsQkMsdURBQWEsQ0FBQzFELElBQUksQ0FBQzJELEtBQUwsQ0FBVzNELElBQUksQ0FBQzRELE1BQUwsS0FBZ0JGLHVEQUFhLENBQUNGLE1BQXpDLENBQUQsQ0FESyxDQUFuQjtBQUdBLG1CQUFLakMsZUFBTCxHQUF1QixDQUF2QjtBQUNBOztBQUNELGlCQUFLLFFBQUw7QUFDQyxtQkFBS0UsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCZ0MsTUFBakIsQ0FDbEJJLHlEQUFlLENBQ2Q3RCxJQUFJLENBQUMyRCxLQUFMLENBQVczRCxJQUFJLENBQUM0RCxNQUFMLEtBQWdCQyx5REFBZSxDQUFDTCxNQUEzQyxDQURjLENBREcsQ0FBbkI7QUFLQSxtQkFBS2pDLGVBQUwsR0FBdUIsSUFBdkI7QUFDQTs7QUFDRCxpQkFBSyxNQUFMO0FBQ0MsbUJBQUtFLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQmdDLE1BQWpCLENBQ2xCSyx1REFBYSxDQUFDOUQsSUFBSSxDQUFDMkQsS0FBTCxDQUFXM0QsSUFBSSxDQUFDNEQsTUFBTCxLQUFnQkUsdURBQWEsQ0FBQ04sTUFBekMsQ0FBRCxDQURLLENBQW5CO0FBR0EsbUJBQUtqQyxlQUFMLEdBQXVCLEdBQXZCO0FBQ0E7QUFwQkY7QUFzQkEsU0ExQkEsQ0EyQkQ7OztBQUNBLGFBQUt3QyxPQUFMLEdBQWUsS0FBS3RDLFdBQUwsQ0FBaUJ1QyxLQUFqQixFQUFmO0FBQ0EsWUFBSUMsT0FBTyxHQUFHLElBQUlDLDZDQUFKLENBQVMsS0FBS0gsT0FBZCxFQUF1QixLQUFLckMsVUFBNUIsQ0FBZDtBQUNBLGFBQUtGLEtBQUwsQ0FBVzJDLElBQVgsQ0FBZ0JGLE9BQWhCO0FBQ0EsYUFBSzNDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxPQXZDcUIsQ0F3Q3RCOzs7QUFDQSxXQUFLQSxZQUFMLElBQXFCa0IsYUFBckI7QUFDQTs7O2lDQUVZO0FBQUEsVUFDSmhCLEtBREksR0FDTSxJQUROLENBQ0pBLEtBREk7QUFFWixVQUFNNEMsY0FBYyxHQUFHLEVBQXZCLENBRlksQ0FHWjs7QUFDQSxVQUFJNUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhNkMsU0FBakIsRUFBNEI7QUFDM0IsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLGNBQUk5QyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMrQyxLQUFULENBQWVELENBQWYsTUFBc0IsSUFBMUIsRUFBZ0M7QUFDL0IsZ0JBQUk3RSxFQUFFLEdBQUcrQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMrQyxLQUFULENBQWVELENBQWYsRUFBa0JFLEdBQWxCLENBQXNCLENBQXRCLENBQVQ7QUFDQSxnQkFBSTlFLEVBQUUsR0FBRzhCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUytDLEtBQVQsQ0FBZUQsQ0FBZixFQUFrQkUsR0FBbEIsQ0FBc0IsQ0FBdEIsQ0FBVDtBQUNBLGdCQUFJQyxRQUFRLEdBQUd6RSxJQUFJLENBQUMwRSxJQUFMLENBQVUsU0FBQyxNQUFNakYsRUFBUCxFQUFjLENBQWQsYUFBbUIsTUFBTUMsRUFBekIsRUFBZ0MsQ0FBaEMsQ0FBVixDQUFmOztBQUNBLGdCQUFJK0UsUUFBUSxHQUFHTCxjQUFmLEVBQStCO0FBQzlCLG1CQUFLNUMsS0FBTCxDQUFXd0MsS0FBWDtBQUNBO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7OzhCQUVTeEIsYSxFQUFlO0FBQUE7O0FBQ3hCLFdBQUttQyxPQUFMLENBQWFuQyxhQUFiO0FBQ0EsVUFBSXhGLElBQUksR0FBRyxJQUFYO0FBRndCLFVBR2hCd0UsS0FIZ0IsR0FHTixJQUhNLENBR2hCQSxLQUhnQixFQUt4Qjs7QUFDQSxXQUFLb0QsVUFBTCxHQU53QixDQVF4Qjs7QUFDQSxVQUFJMUYsT0FBTyxHQUFHLEtBQUtFLE1BQUwsQ0FBWUYsT0FBMUI7QUFDQUEsYUFBTyxHQUFHQSxPQUFPLEdBQUcsR0FBcEI7O0FBQ0EsYUFBT0EsT0FBTyxHQUFHLENBQWpCLEVBQW9CO0FBQ25CQSxlQUFPLElBQUksR0FBWDtBQUNBOztBQUVEc0MsV0FBSyxDQUFDMkIsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN2QjtBQUNBLFlBQUlBLElBQUksQ0FBQ3lCLElBQUwsQ0FBVTNGLE9BQVYsRUFBbUJsQyxJQUFuQixDQUFKLEVBQThCLE1BQUksQ0FBQ3lGLFFBQUwsQ0FBY3pFLFFBQWQ7QUFDOUIsT0FIRDtBQUlBLEssQ0FFRDs7OztpQ0FDYThHLFcsRUFBYTtBQUN6QixXQUFLekQsZ0JBQUwsSUFBeUJ5RCxXQUF6QjtBQUNBLFVBQUlDLFdBQVcsR0FBRy9FLElBQUksQ0FBQ2dGLEtBQUwsQ0FBVyxLQUFLM0QsZ0JBQUwsR0FBd0IsRUFBbkMsSUFBeUMsR0FBM0Q7QUFDQSxXQUFLa0IsS0FBTCxDQUFXLENBQVgsRUFBYzBDLFNBQWQsR0FBMEJGLFdBQVcsQ0FBQ0csUUFBWixFQUExQjtBQUNBOzs7bUNBRWM7QUFDZCxXQUFLN0QsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsV0FBS0MsZUFBTCxHQUF1QixDQUF2QjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsTUFBbEI7QUFDQSxXQUFLdEMsTUFBTCxDQUFZRixPQUFaLEdBQXNCLEdBQXRCO0FBQ0EsV0FBS3VELFFBQUwsQ0FBY25GLEtBQWQsQ0FBb0JDLElBQXBCLENBQXlCQyxNQUF6QixHQUFrQyxLQUFsQztBQUNBLFdBQUtpRixRQUFMLENBQWNuRixLQUFkLENBQW9CRyxLQUFwQixDQUEwQkQsTUFBMUIsR0FBbUMsS0FBbkM7QUFDQSxXQUFLbUUsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxXQUFLeEMsTUFBTCxDQUFZK0YsS0FBWjtBQUNBLFdBQUt0RCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS1QsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtGLEtBQUwsQ0FBV2tFLFdBQVgsR0FBeUIsQ0FBekI7QUFDQSxXQUFLbEUsS0FBTCxDQUFXbUUsSUFBWDtBQUNBOzs7K0JBRVU7QUFDVjtBQUNBO0FBQ0EsVUFBTUMsWUFBWSxHQUFHdEYsSUFBSSxDQUFDZ0YsS0FBTCxDQUFXLEtBQUszRCxnQkFBTCxHQUF3QixFQUFuQyxJQUF5QyxHQUE5RDtBQUNBLFVBQUlrRSxVQUFVLEdBQUcsS0FBSy9FLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBakI7QUFDQSxVQUFJZ0YsV0FBVyxHQUFHLEtBQUtoRixVQUFMLENBQWdCLENBQWhCLENBQWxCO0FBQ0EsVUFBSWlGLFVBQVUsR0FBRyxLQUFLakYsVUFBTCxDQUFnQixDQUFoQixDQUFqQjtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUI1QixTQUFyQixDQUErQkUsTUFBL0IsQ0FBc0MsUUFBdEM7QUFDQSxXQUFLMEIsWUFBTCxDQUFrQixDQUFsQixFQUFxQjVCLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQzs7QUFDQSxVQUNDd0csWUFBWSxHQUFHQyxVQUFVLENBQUMsQ0FBRCxDQUF6QixJQUNBRCxZQUFZLEdBQUdFLFdBQVcsQ0FBQyxDQUFELENBRDFCLElBRUFGLFlBQVksR0FBR0csVUFBVSxDQUFDLENBQUQsQ0FIMUIsRUFJRTtBQUNELGFBQUtoSCxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsYUFBS2dDLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUI1QixTQUFyQixDQUErQkUsTUFBL0IsQ0FBc0MsUUFBdEM7QUFDQSxhQUFLMkIsbUJBQUwsQ0FBeUIsQ0FBekIsRUFBNEJnRixLQUE1QjtBQUNBLGFBQUtoRixtQkFBTCxDQUF5QixDQUF6QixFQUE0QmlGLE1BQTVCO0FBQ0E7O0FBQ0QsV0FBSzlELFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLVCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0YsS0FBTCxDQUFXMEUsS0FBWDtBQUNBOzs7aUNBRVlDLEssRUFBTztBQUNuQkEsV0FBSyxDQUFDQyxjQUFOO0FBRUEsVUFBTVIsWUFBWSxHQUFHdEYsSUFBSSxDQUFDZ0YsS0FBTCxDQUFXLEtBQUszRCxnQkFBTCxHQUF3QixFQUFuQyxJQUF5QyxHQUE5RDtBQUVBLFVBQUlYLG1CQUFtQixHQUFHbkUsUUFBUSxDQUFDMkIsc0JBQVQsQ0FDekIsd0JBRHlCLEVBRXhCLENBRndCLENBQTFCO0FBR0EsVUFBSTZILGFBQWEsR0FBR3JGLG1CQUFtQixDQUFDc0YsS0FBeEM7QUFDQSxVQUFJQyxTQUFTLEdBQUcsQ0FBRUYsYUFBRixFQUFpQlQsWUFBakIsQ0FBaEI7QUFDQSxVQUFJQyxVQUFVLEdBQUcsS0FBSy9FLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBakI7QUFDQSxVQUFJZ0YsV0FBVyxHQUFHLEtBQUtoRixVQUFMLENBQWdCLENBQWhCLENBQWxCO0FBQ0EsVUFBSWlGLFVBQVUsR0FBRyxLQUFLakYsVUFBTCxDQUFnQixDQUFoQixDQUFqQjs7QUFFQSxVQUFJOEUsWUFBWSxHQUFHQyxVQUFVLENBQUMsQ0FBRCxDQUE3QixFQUFrQztBQUNqQ0Usa0JBQVUsR0FBR0QsV0FBYjtBQUNBQSxtQkFBVyxHQUFHRCxVQUFkO0FBQ0FBLGtCQUFVLEdBQUdVLFNBQWI7QUFDQSxPQUpELE1BSU8sSUFBSVgsWUFBWSxHQUFHRSxXQUFXLENBQUMsQ0FBRCxDQUE5QixFQUFtQztBQUN6Q0Msa0JBQVUsR0FBR0QsV0FBYjtBQUNBQSxtQkFBVyxHQUFHUyxTQUFkO0FBQ0EsT0FITSxNQUdBO0FBQ05SLGtCQUFVLEdBQUdRLFNBQWI7QUFDQTs7QUFFRCxXQUFLekYsVUFBTCxHQUFrQixDQUFFK0UsVUFBRixFQUFjQyxXQUFkLEVBQTJCQyxVQUEzQixDQUFsQixDQXpCbUIsQ0EyQm5CO0FBQ0E7QUFDQTs7QUFDQSxXQUFLN0UsY0FBTCxDQUFvQixDQUFwQixFQUF1QnNGLFNBQXZCLG9CQUE2Q1gsVUFBVSxDQUFDLENBQUQsQ0FBdkQ7QUFDQSxXQUFLMUUsZUFBTCxDQUFxQixDQUFyQixFQUF3QnFGLFNBQXhCLEdBQW9DWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNMLFFBQWQsRUFBcEM7QUFDQSxXQUFLcEUsZUFBTCxDQUFxQixDQUFyQixFQUF3Qm9GLFNBQXhCLHFCQUErQ1YsV0FBVyxDQUFDLENBQUQsQ0FBMUQ7QUFDQSxXQUFLekUsZ0JBQUwsQ0FBc0IsQ0FBdEIsRUFBeUJtRixTQUF6QixHQUFxQ1YsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlTixRQUFmLEVBQXJDO0FBQ0EsV0FBS2xFLGNBQUwsQ0FBb0IsQ0FBcEIsRUFBdUJrRixTQUF2QixvQkFBNkNULFVBQVUsQ0FBQyxDQUFELENBQXZEO0FBQ0EsV0FBS3hFLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0JpRixTQUF4QixHQUFvQ1QsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjUCxRQUFkLEVBQXBDLENBbkNtQixDQXFDbkI7QUFFQTs7QUFDQXhFLHlCQUFtQixDQUFDc0YsS0FBcEIsR0FBNEIsRUFBNUI7QUFDQSxXQUFLdkYsWUFBTCxDQUFrQixDQUFsQixFQUFxQjVCLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQUNBLFdBQUtMLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxXQUFLNEMsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxXQUFLb0IsUUFBTCxDQUFjekUsUUFBZDtBQUNBOzs7Ozs7QUFHYWYsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVUE7O0lBRU1FLFM7OztBQUNMLHFCQUFZOEIsT0FBWixFQUFxQmpDLElBQXJCLEVBQTJCO0FBQUE7O0FBQzFCLFNBQUtILEdBQUwsR0FBV29DLE9BQVg7QUFDQSxTQUFLakMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS21KLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLM0QsYUFBTCxHQUFxQixPQUFPLEtBQUsyRCxTQUFqQztBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS2hILE1BQUwsR0FBYyxLQUFLcEMsSUFBTCxDQUFVcUosU0FBVixFQUFkO0FBQ0EsU0FBSzVELFFBQUwsR0FBZ0IsS0FBS3pGLElBQUwsQ0FBVXNKLFdBQVYsRUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0UsU0FBSzlELFFBQUwsQ0FBY3pFLFFBQWQ7QUFDRjs7OzsyQkFFTXdJLEksRUFBTTtBQUFBLFVBQ0poRSxhQURJLEdBQ3VCLElBRHZCLENBQ0pBLGFBREk7QUFBQSxVQUNXNEQsT0FEWCxHQUN1QixJQUR2QixDQUNXQSxPQURYLEVBR1o7O0FBQ0EsVUFBSUssT0FBTyxHQUFHRCxJQUFkO0FBQ0EsVUFBSUUsT0FBTyxHQUFHRCxPQUFPLEdBQUdMLE9BQXhCLENBTFksQ0FPWjs7QUFDQSxVQUFJTSxPQUFPLElBQUlsRSxhQUFmLEVBQThCO0FBQzdCLGFBQUt4RixJQUFMLENBQVUySixLQUFWLENBQWdCbkUsYUFBaEI7QUFDQSxhQUFLeEYsSUFBTCxDQUFVaUcsSUFBVjtBQUNBLGFBQUttRCxPQUFMLEdBQWVLLE9BQWY7QUFDQTs7QUFFREcsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLekosTUFBTCxDQUFZTyxJQUFaLENBQWlCLElBQWpCLENBQTdCO0FBQ0EsSyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHY1Isd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNdUcsYUFBYSxHQUFHLENBQzVCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0csQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhILENBRDRCLEVBTTNCLENBQ0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURBLEVBRUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZGLEVBR0UsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhGLENBTjJCLEVBVzNCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFGLEVBQ0UsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURGLENBWDJCLEVBYzNCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFGLEVBQ0UsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURGLENBZDJCLEVBaUIzQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBRixFQUNFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERixDQWpCMkIsQ0FBdEIsQyxDQXNCUDs7QUFDTyxJQUFNRyxlQUFlLEdBQUcsQ0FDOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsQ0FEOEIsRUFPN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FQNkIsRUFhOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsQ0FiOEIsRUFtQjdCLENBQ0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURBLEVBRUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZBLEVBR0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhBLEVBSUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpBLENBbkI2QixDQUF4QixDLENBMkJQOztBQUNPLElBQU1DLGFBQWEsR0FBRyxDQUM1QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FISCxFQUlHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKSCxDQUQ0QixFQU81QixDQUNHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FESCxFQUVHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGSCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKSCxFQUtHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FMSCxFQU1DLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FORCxFQU9DLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FQRCxFQVFDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FSRCxDQVA0QixDQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3BERGdELEk7OztBQUNMLGdCQUFZQyxNQUFaLEVBQW9CckYsVUFBcEIsRUFBZ0M7QUFBQTs7QUFDL0IsU0FBS3FGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJM0gsS0FBSixFQUFkO0FBQ0EsU0FBSzRILEtBQUwsR0FBYSxDQUFiLENBSCtCLENBSS9CO0FBQ0E7O0FBQ0EsU0FBS3ZGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS3NGLE1BQUwsQ0FBWXJILEdBQVosR0FDQyw0RkFERDs7QUFFQSxRQUFJK0IsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQzFCLFdBQUt3RixLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxLQUhELE1BR08sSUFBSXpGLFVBQVUsS0FBSyxRQUFuQixFQUE2QjtBQUNuQyxXQUFLd0YsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsS0FITSxNQUdBLElBQUl6RixVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDakMsV0FBS3dGLEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixHQUFyQjtBQUNBOztBQUVELFNBQUtDLFdBQUwsQ0FBaUJMLE1BQWpCO0FBQ0E7Ozs7Z0NBRVdBLE0sRUFBUTtBQUNuQixjQUFRQSxNQUFSO0FBQ0MsYUFBSyxDQUFMO0FBQ0MsZUFBS3ZDLEdBQUwsR0FBVyxDQUFFLENBQUYsRUFBSyxHQUFMLENBQVg7QUFDQSxlQUFLNkMsY0FBTCxHQUFzQixDQUFDLEVBQXZCO0FBQ0EsZUFBS0MsT0FBTCxHQUFlLENBQUMsR0FBaEI7QUFDQSxlQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLGVBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxLQUFULENBQWQ7QUFDQTs7QUFDRCxhQUFLLENBQUw7QUFDQyxlQUFLaEQsR0FBTCxHQUFXLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBWDtBQUNBLGVBQUs2QyxjQUFMLEdBQXNCLENBQUMsRUFBdkI7QUFDQSxlQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLGVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsZUFBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZDtBQUNBOztBQUNELGFBQUssQ0FBTDtBQUNDLGVBQUtoRCxHQUFMLEdBQVcsQ0FBRSxHQUFGLEVBQU8sQ0FBUCxDQUFYO0FBQ0EsZUFBSzZDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxlQUFLQyxPQUFMLEdBQWUsQ0FBQyxHQUFoQjtBQUNBLGVBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsZUFBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZDtBQUNBOztBQUNELGFBQUssQ0FBTDtBQUNDLGVBQUtoRCxHQUFMLEdBQVcsQ0FBRSxHQUFGLEVBQU8sQ0FBUCxDQUFYO0FBQ0EsZUFBSzZDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxlQUFLQyxPQUFMLEdBQWUsQ0FBQyxFQUFoQjtBQUNBLGVBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsZUFBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEtBQVQsQ0FBZDtBQUNBOztBQUNELGFBQUssQ0FBTDtBQUNDLGVBQUtoRCxHQUFMLEdBQVcsQ0FBRSxHQUFGLEVBQU8sR0FBUCxDQUFYO0FBQ0EsZUFBSzZDLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxlQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLGVBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsZUFBS0MsTUFBTCxHQUFjLENBQUUsS0FBRixFQUFTLEdBQVQsQ0FBZDtBQUNBLGVBQUtDLE9BQUwsR0FBZSxDQUFFLENBQUYsRUFBSyxJQUFMLENBQWY7QUFDQTs7QUFDRCxhQUFLLENBQUw7QUFDQyxlQUFLakQsR0FBTCxHQUFXLENBQUUsR0FBRixFQUFPLEdBQVAsQ0FBWDtBQUNBLGVBQUs2QyxjQUFMLEdBQXNCLEdBQXRCO0FBQ0EsZUFBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxlQUFLQyxPQUFMLEdBQWUsQ0FBQyxFQUFoQjtBQUNBLGVBQUtDLE1BQUwsR0FBYyxDQUFFLElBQUYsRUFBUSxJQUFSLENBQWQ7QUFDQTs7QUFDRCxhQUFLLENBQUw7QUFDQyxlQUFLaEQsR0FBTCxHQUFXLENBQUUsR0FBRixFQUFPLEdBQVAsQ0FBWDtBQUNBLGVBQUs2QyxjQUFMLEdBQXNCLEdBQXRCO0FBQ0EsZUFBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxlQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLGVBQUtDLE1BQUwsR0FBYyxDQUFFLElBQUYsRUFBUSxLQUFSLENBQWQ7QUFDQTs7QUFDRCxhQUFLLENBQUw7QUFDQyxlQUFLaEQsR0FBTCxHQUFXLENBQUUsQ0FBRixFQUFLLEdBQUwsQ0FBWDtBQUNBLGVBQUs2QyxjQUFMLEdBQXNCLEdBQXRCO0FBQ0EsZUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxlQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLGVBQUtDLE1BQUwsR0FBYyxDQUFFLEtBQUYsRUFBUyxLQUFULENBQWQ7QUFDQTtBQXpERjtBQTJEQTs7O3lCQUVJRSxLLEVBQU87QUFBQSxVQUNIRixNQURHLEdBQ2lCLElBRGpCLENBQ0hBLE1BREc7QUFBQSxVQUNLQyxPQURMLEdBQ2lCLElBRGpCLENBQ0tBLE9BREw7QUFHWCxVQUFJLEtBQUtSLEtBQUwsR0FBYSxJQUFJLEtBQUtFLGFBQTFCLEVBQXlDLEtBQUtGLEtBQUwsSUFBYyxLQUFLRSxhQUFuQjtBQUN6QyxVQUFJbkosUUFBUSxHQUFHLEtBQWY7QUFDQSxVQUFJMkosSUFBSSxHQUFHLEtBQUtuRCxHQUFMLENBQVMsQ0FBVCxDQUFYO0FBQ0EsVUFBSW9ELElBQUksR0FBRyxLQUFLcEQsR0FBTCxDQUFTLENBQVQsQ0FBWDtBQUNBLFVBQUlDLFFBQVEsR0FBR3pFLElBQUksQ0FBQzBFLElBQUwsQ0FBVSxTQUFDLE1BQU1pRCxJQUFQLEVBQWdCLENBQWhCLGFBQXFCLE1BQU1DLElBQTNCLEVBQW9DLENBQXBDLENBQVYsQ0FBZixDQVBXLENBUVg7O0FBRUEsVUFBSSxLQUFLYixNQUFMLEtBQWdCLENBQWhCLElBQXFCLEtBQUtBLE1BQUwsS0FBZ0IsQ0FBckMsSUFBMEMsS0FBS0EsTUFBTCxLQUFnQixDQUE5RCxFQUFpRTtBQUNoRSxZQUNDVyxLQUFLLElBQUlGLE1BQU0sQ0FBQyxDQUFELENBQWYsSUFDQUUsS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQURmLElBRUEvQyxRQUFRLElBQUksRUFGWixJQUdBQSxRQUFRLElBQUksR0FKYixFQUtFO0FBQ0R6RyxrQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUNELFVBQUksS0FBSytJLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDdEIsWUFDRVcsS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQUFmLElBQ0FFLEtBQUssSUFBSUYsTUFBTSxDQUFDLENBQUQsQ0FEZixJQUVBL0MsUUFBUSxJQUFJLEVBRlosSUFHQUEsUUFBUSxJQUFJLEdBSGIsSUFJQ2lELEtBQUssSUFBSUQsT0FBTyxDQUFDLENBQUQsQ0FBaEIsSUFDQUMsS0FBSyxJQUFJRCxPQUFPLENBQUMsQ0FBRCxDQURoQixJQUVBaEQsUUFBUSxJQUFJLEVBRlosSUFHQUEsUUFBUSxJQUFJLEdBUmQsRUFTRTtBQUNEekcsa0JBQVEsR0FBRyxJQUFYO0FBQ0E7QUFDRDs7QUFDRCxVQUNDLEtBQUsrSSxNQUFMLEtBQWdCLENBQWhCLElBQ0EsS0FBS0EsTUFBTCxLQUFnQixDQURoQixJQUVBLEtBQUtBLE1BQUwsS0FBZ0IsQ0FGaEIsSUFHQSxLQUFLQSxNQUFMLEtBQWdCLENBSmpCLEVBS0U7QUFDRCxZQUNDVyxLQUFLLElBQUlGLE1BQU0sQ0FBQyxDQUFELENBQWYsSUFDQUUsS0FBSyxJQUFJRixNQUFNLENBQUMsQ0FBRCxDQURmLElBRUEvQyxRQUFRLElBQUksR0FGWixJQUdBQSxRQUFRLElBQUksR0FKYixFQUtFO0FBQ0R6RyxrQkFBUSxHQUFHLElBQVg7QUFDQTtBQUNEOztBQUVELFVBQUk2SixFQUFFLEdBQUcsTUFBTUYsSUFBZjtBQUNBLFVBQUlHLEVBQUUsR0FBRyxNQUFNRixJQUFmLENBbkRXLENBb0RYOztBQUNBLFVBQUlDLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFDWCxhQUFLckQsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLMEMsS0FBcEI7QUFDQSxPQUZELE1BRU8sSUFBSVcsRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNsQixhQUFLckQsR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLMEMsS0FBcEI7QUFDQTs7QUFDRCxVQUFJWSxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ1gsYUFBS3RELEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBSzBDLEtBQXBCO0FBQ0EsT0FGRCxNQUVPLElBQUlZLEVBQUUsR0FBRyxDQUFULEVBQVk7QUFDbEIsYUFBS3RELEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBSzBDLEtBQXBCO0FBQ0E7O0FBRUQsYUFBT2xKLFFBQVA7QUFDQTs7O3lCQUVJbkIsRyxFQUFLO0FBQUEsVUFDRDJILEdBREMsR0FDTyxJQURQLENBQ0RBLEdBREM7QUFFVCxVQUFJdUQsQ0FBQyxHQUFHdkQsR0FBRyxDQUFDLENBQUQsQ0FBWDtBQUNBLFVBQUl3RCxDQUFDLEdBQUd4RCxHQUFHLENBQUMsQ0FBRCxDQUFYO0FBRUEzSCxTQUFHLENBQUNpRCxTQUFKLENBQWNpSSxDQUFDLEdBQUcsS0FBS1QsT0FBTCxHQUFlLEtBQUtMLEtBQXRDLEVBQTZDZSxDQUFDLEdBQUcsS0FBS1QsT0FBTCxHQUFlLEtBQUtOLEtBQXJFO0FBQ0FwSyxTQUFHLENBQUNrRCxNQUFKLENBQVcsSUFBSUMsSUFBSSxDQUFDQyxFQUFULEdBQWMsR0FBZCxJQUFxQixLQUFLb0gsY0FBTCxHQUFzQixHQUEzQyxDQUFYO0FBQ0F4SyxTQUFHLENBQUNxRCxTQUFKLENBQ0MsS0FBSzhHLE1BRE4sRUFFQyxNQUFNLEtBQUtDLEtBQVgsR0FBbUIsQ0FGcEIsRUFHQyxNQUFNLEtBQUtBLEtBQVgsR0FBbUIsQ0FIcEIsRUFJQyxNQUFNLEtBQUtBLEtBSlosRUFLQyxNQUFNLEtBQUtBLEtBTFo7QUFPQXBLLFNBQUcsQ0FBQ2tELE1BQUosQ0FBVyxJQUFJQyxJQUFJLENBQUNDLEVBQVQsR0FBYyxHQUFkLElBQXFCLENBQUMsS0FBS29ILGNBQU4sR0FBdUIsR0FBNUMsQ0FBWDtBQUNBeEssU0FBRyxDQUFDaUQsU0FBSixDQUNDLENBQUNpSSxDQUFELEdBQUssS0FBS1QsT0FBTCxHQUFlLEtBQUtMLEtBRDFCLEVBRUMsQ0FBQ2UsQ0FBRCxHQUFLLEtBQUtULE9BQUwsR0FBZSxLQUFLTixLQUYxQjtBQUlBOzs7Ozs7QUFHRjdHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnlHLElBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LQTs7SUFFTTVDLEk7OztBQUNMLGdCQUFZSCxPQUFaLEVBQXFCckMsVUFBckIsRUFBaUM7QUFBQTs7QUFDaEMsU0FBS3FDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtrRSxHQUFMLEdBQVcsS0FBWDtBQUNBLFNBQUszRyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBSzRHLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxTQUFLM0QsS0FBTCxHQUFhLEtBQUs0RCxRQUFMLENBQWN6RyxVQUFkLENBQWI7QUFDQSxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBOzs7OzZCQUVRQSxVLEVBQVk7QUFDcEIsVUFBSTZDLEtBQUssR0FBRyxFQUFaO0FBRG9CLFVBRVpSLE9BRlksR0FFQSxJQUZBLENBRVpBLE9BRlk7O0FBSXBCLFdBQUssSUFBSWdELE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHLENBQTlCLEVBQWlDQSxNQUFNLEVBQXZDLEVBQTJDO0FBQzFDLFlBQUloRCxPQUFPLENBQUNnRCxNQUFELENBQVAsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDMUIsY0FBSXFCLE9BQU8sR0FBRyxJQUFJdEIsNkNBQUosQ0FBU0MsTUFBVCxFQUFpQnJGLFVBQWpCLENBQWQ7QUFDQTZDLGVBQUssQ0FBQ0osSUFBTixDQUFXaUUsT0FBWDtBQUNBLFNBSEQsTUFHTztBQUNON0QsZUFBSyxDQUFDSixJQUFOLENBQVcsSUFBWDtBQUNBO0FBQ0Q7O0FBRUQsYUFBT0ksS0FBUDtBQUNBOzs7eUJBRUlyRixPLEVBQVNsQyxJLEVBQU07QUFDbkI7QUFDQSxVQUFJZ0IsUUFBUSxHQUFHLEtBQWY7O0FBRUEsV0FBSyxJQUFJc0csQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixjQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjTyxJQUFkLENBQW1CM0YsT0FBbkIsRUFBNEJsQyxJQUE1QixDQUFKLEVBQXVDZ0IsUUFBUSxHQUFHLElBQVg7QUFDdkM7QUFDRDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0E7Ozt5QkFFSW5CLEcsRUFBSztBQUNULFdBQUssSUFBSXlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsWUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsZUFBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNyQixJQUFkLENBQW1CcEcsR0FBbkI7QUFDQTtBQUNEO0FBQ0Q7Ozs7OztBQUdhcUgsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBjYW52YXMud2lkdGggPSA3Njg7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuICAvLyBpbnN0YW50aWF0ZSBnYW1lXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBjb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG4gIGdhbWVzdGFnZS50aWNrZXIoKTtcbn0pXG5cbiIsIi8vIHBsYXllciBjb250cm9sc1xuY2xhc3MgQ29udHJvbHMge1xuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGVmdDogeyBhY3RpdmU6IGZhbHNlIH0sXG5cdFx0XHRyaWdodDogeyBhY3RpdmU6IGZhbHNlIH1cblx0XHR9O1xuXHRcdHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1ib3gnKTtcblx0XHR0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5Jyk7XG5cdFx0dGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnQtZ2FtZS1sb2dvJyk7XG5cdFx0dGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZS1ib3gnKTtcblx0XHR0aGlzLmdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnQtZ2FtZS1pbmZvJyk7XG5cdFx0dGhpcy5hYm91dE1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXQtbWUnKTtcblx0fVxuXG5cdGVuYWJsZVBsYXllckNvbnRyb2xzKCkge1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0ZGlzYWJsZVBsYXllckNvbnRyb2xzKCkge1xuXHRcdGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblx0fVxuXG5cdGtleURvd24oZSkge1xuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0a2V5VXAoZSkge1xuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0c3RhcnRHYW1lKGUpIHtcblx0XHRpZiAoZS5jb2RlID09PSAnU3BhY2UnKSB7XG5cdFx0XHR0aGlzLmdhbWUuc3RhcnROZXdHYW1lKCk7XG5cdFx0XHR0aGlzLm92ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZCgnY2xlYXItYmFja2dyb3VuZC1pbWFnZScpO1xuXHRcdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5hYm91dE1lWzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuXHRcdH1cblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWluZm8tZmFkZS1pbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlTGlzdFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmFib3V0TWVbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9scztcbiIsImNsYXNzIEN1cnNvciB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmRlZ3JlZXMgPSAyNzA7XG5cdFx0dGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5kZWFkQ3Vyc29yID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5leHBsb3Npb24gPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0XHR0aGlzLmN1cnNvci5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5kZWFkQ3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfZ3JlZW5fc21hbGxfMi5wbmcnO1xuXHRcdHRoaXMuZXhwbG9zaW9uLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL2V4cGxvc2lvbl9zcHJpdGVzaGVldC5wbmcnO1xuXHR9XG5cblx0bW92ZUN1cnNvcihkaXJlY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xuXHRcdFx0Y2FzZSAnY2xvY2t3aXNlJzpcblx0XHRcdFx0dGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdjY2xvY2t3aXNlJzpcblx0XHRcdFx0dGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsIC0zNSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGV4cGxvc2lvbkFuaW1hdGlvbihjdHgpIHtcblx0XHRpZiAodGhpcy5leHBsb3Npb25GcmFtZSA8PSA3MCkge1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShcblx0XHRcdFx0dGhpcy5leHBsb3Npb24sXG5cdFx0XHRcdHRoaXMueDEsXG5cdFx0XHRcdHRoaXMueTEsXG5cdFx0XHRcdDEwMCxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQtNTAsXG5cdFx0XHRcdC03NSxcblx0XHRcdFx0MTUwLFxuXHRcdFx0XHQxNTBcblx0XHRcdCk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lKys7XG5cblx0XHRcdHRoaXMueDEgKz0gMTAwO1xuXHRcdFx0aWYgKHRoaXMueDEgPT09IDEwMDApIHtcblx0XHRcdFx0dGhpcy55MSArPSAxMDA7XG5cdFx0XHRcdHRoaXMueDEgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5leHBsb3Npb25GcmFtZSA9PT0gNzEpIHtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHRcdHRoaXMueTEgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuZGVhZEN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG5cdFx0dGhpcy54MSA9IDA7XG5cdFx0dGhpcy55MSA9IDA7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmNsYXNzIEdhbWUge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZGltX3ggPSA3Njg7XG5cdFx0dGhpcy5kaW1feSA9IDc2ODtcblx0XHQvLyBUT0RPIGZldGNoIGhpZ2ggc2NvcmVzIGZyb20gZGJcblx0XHR0aGlzLmhpZ2hTY29yZXMgPSBbXG5cdFx0XHRbICdBZG1pbmlzdHJhdG9yJywgMjguNzkgXSxcblx0XHRcdFsgJ1pla2VtZWlzdGVyJywgMjMuNDUgXSxcblx0XHRcdFsgJ1RoZUpvbkJhZScsIDMuMzMgXVxuXHRcdF07XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdoLXNjb3JlLWZvcm0nKTtcblx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J2hpZ2gtc2NvcmUtaW5wdXQtZmllbGQnXG5cdFx0KTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmFkZEhpZ2hTY29yZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmZpcnN0UGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlyc3QtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMuZmlyc3RQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlyc3QtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlY29uZC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLXBsYWNlLXNjb3JlJyk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoaXJkLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoaXJkLXBsYWNlLXNjb3JlJyk7XG5cdFx0dGhpcy5hdWRpbyA9IG5ldyBBdWRpbygnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL01lZ2Fsb3ZhbmlhLm1wMycpO1xuXG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnN0YXRpY01hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHRcdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR9LCA1MDApO1xuXHRcdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xuXHR9XG5cblx0bG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdFx0XHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ21lZGl1bSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2hhcmQnO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHRcdFx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXRzIHRyYW5zZm9ybSB0byBjbGVhciBlbnRpcmUgY2F2YXNcblx0XHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94ICsgMjU2LCBkaW1feSArIDI1Nik7IC8vIGNsZWFyIGNhbnZhc1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHRcdH1cblxuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0XHQvLyBDdXJzb3Jcblx0XHRpZiAoIXRoaXMuZGVhZFNoaXApIHtcblx0XHRcdHRoaXMuY3Vyc29yLmRyYXcoY3R4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJzb3IuZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCk7XG5cdFx0fVxuXG5cdFx0Ly8gV2F2ZXNcblx0XHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdHdhdmUuZHJhdyhjdHgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWFydGggb3JiaXRcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHRcdC8vIFdhcnBnYXRlXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRcdGRpbV94IC8gNCxcblx0XHRcdGRpbV95IC8gNFxuXHRcdCk7XG5cblx0XHQvLyBNYXBcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXHR9XG5cblx0YWRkQ3Vyc29yKCkge1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRcdHJldHVybiB0aGlzLmN1cnNvcjtcblx0fVxuXG5cdGFkZENvbnRyb2xzKCkge1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG5cdH1cblxuXHRhZGRXYXZlKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRjb25zdCB7IGRpZmZpY3VsdHkgfSA9IHRoaXM7XG5cblx0XHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCB8fFxuXHRcdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdFx0KSB7XG5cdFx0XHQvLyBpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgKSB7XG5cdFx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcblx0XHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFQVNZX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0TUVESVVNX1BBVFRFUk5TW1xuXHRcdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1FRElVTV9QQVRURVJOUy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdoYXJkJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0fVxuXHRcdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG5cdH1cblxuXHRyZW1vdmVXYXZlKCkge1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0XHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRcdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR3YXZlTG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0XHRsZXQgZ2FtZSA9IHRoaXM7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHRcdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHRcdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdFx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0XHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdFx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdFx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0XHRkZWdyZWVzICs9IDM2MDtcblx0XHR9XG5cblx0XHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyB0b3AgcmlnaHQgdGltZXJcblx0dGltZXJDb3VudGVyKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRcdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHRcdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXJ0TmV3R2FtZSgpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5jdXJzb3IuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5yaWdodC5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7XG5cdFx0dGhpcy5jdXJzb3IucmVzZXQoKTtcblx0XHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG5cdFx0dGhpcy5hdWRpby5jdXJyZW50VGltZSA9IDA7XG5cdFx0dGhpcy5hdWRpby5wbGF5KCk7XG5cdH1cblxuXHRnYW1lT3ZlcigpIHtcblx0XHQvLyBUT0RPIGNoZWNrIGhpZ2ggc2NvcmUgdG8gZGlzcGxheSBuYW1lIHByb21wdFxuXHRcdC8vIGlmIHRydWUsIG9uIGZvcm0gc3VibWl0LCBzZXQgaGlnaHNjb3JlID0gZmFsc2UgYW5kIHJlY2FsbCBnYW1lT3ZlcigpXG5cdFx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdGlmIChcblx0XHRcdHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdIHx8XG5cdFx0XHRzdXJ2aXZlZFRpbWUgPiB0aGlyZFBsYWNlWzFdXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IHRydWU7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZFswXS5mb2N1cygpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLnNlbGVjdCgpO1xuXHRcdH1cblx0XHR0aGlzLmRlYWRTaGlwID0gdHJ1ZTtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHRcdHRoaXMuYXVkaW8ucGF1c2UoKTtcblx0fVxuXG5cdGFkZEhpZ2hTY29yZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblxuXHRcdGxldCBoaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdCdoaWdoLXNjb3JlLWlucHV0LWZpZWxkJ1xuXHRcdClbMF07XG5cdFx0bGV0IGhpZ2hTY29yZU5hbWUgPSBoaWdoU2NvcmVJbnB1dEZpZWxkLnZhbHVlO1xuXHRcdGxldCBuZXdQbGF5ZXIgPSBbIGhpZ2hTY29yZU5hbWUsIHN1cnZpdmVkVGltZSBdO1xuXHRcdGxldCBmaXJzdFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzBdO1xuXHRcdGxldCBzZWNvbmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1sxXTtcblx0XHRsZXQgdGhpcmRQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1syXTtcblxuXHRcdGlmIChzdXJ2aXZlZFRpbWUgPiBmaXJzdFBsYWNlWzFdKSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gc2Vjb25kUGxhY2U7XG5cdFx0XHRzZWNvbmRQbGFjZSA9IGZpcnN0UGxhY2U7XG5cdFx0XHRmaXJzdFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH0gZWxzZSBpZiAoc3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlyZFBsYWNlID0gbmV3UGxheWVyO1xuXHRcdH1cblxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFsgZmlyc3RQbGFjZSwgc2Vjb25kUGxhY2UsIHRoaXJkUGxhY2UgXTtcblxuXHRcdC8vIFRPRE8gbW92ZSBpbnRvIG93biBmdW5jdGlvblxuXHRcdC8vIHJlYXNzaWduIHRvcCBzdXJ2aXZvcnNcblx0XHQvLyBkZWJ1Z2dlclxuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYEZpcnN0OiAke2ZpcnN0UGxhY2VbMF19YDtcblx0XHR0aGlzLmZpcnN0UGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBmaXJzdFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYFNlY29uZDogJHtzZWNvbmRQbGFjZVswXX1gO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSBzZWNvbmRQbGFjZVsxXS50b1N0cmluZygpO1xuXHRcdHRoaXMudGhpcmRQbGFjZU5hbWVbMF0uaW5uZXJUZXh0ID0gYFRoaXJkOiAke3RoaXJkUGxhY2VbMF19YDtcblx0XHR0aGlzLnRoaXJkUGxhY2VTY29yZVswXS5pbm5lclRleHQgPSB0aGlyZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cblx0XHQvLyBkYXRhYmFzZSBsb2dpYyBnb2VzIGhlcmVcblxuXHRcdC8vIGNsZWFyIGVudGVyZWQgbmFtZSBhbmQgcmVzZXQgZ2FtZSBsb2dpY1xuXHRcdGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWUgPSAnJztcblx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IGZhbHNlO1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jbGFzcyBHYW1lU3RhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBnYW1lKSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcblx0XHR0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcmFtZVJhdGU7XG5cdFx0dGhpcy5zZXRUaW1lID0gMDtcblx0XHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcblx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG5cdFx0dGhpcy5sb2FkU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdH1cblxuXHR0aWNrZXIodGltZSkge1xuXHRcdGNvbnN0IHsgZnJhbWVJbnRlcnZhbCwgc2V0VGltZSB9ID0gdGhpcztcblxuXHRcdC8vIGZyYW1lIGxpbWl0ZXJcblx0XHRsZXQgY3VyVGltZSA9IHRpbWU7XG5cdFx0bGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gc2V0VGltZTtcblxuXHRcdC8vIGRyYXcgZnJhbWVcblx0XHRpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsKSB7XG5cdFx0XHR0aGlzLmdhbWUubG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0XHR0aGlzLmdhbWUuZHJhdygpO1xuXHRcdFx0dGhpcy5zZXRUaW1lID0gY3VyVGltZTtcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGlja2VyLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Ly8gbG9vcE11c2ljKCkge1xuXHRcdFxuXHQvLyBcdGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXG5cdC8vIFx0XHQnZW5kZWQnLFxuXHQvLyBcdFx0KCkgPT4ge1xuXHQvLyBcdFx0XHRhdWRpby5jdXJyZW50VGltZSA9IDA7XG5cdC8vIFx0XHRcdGF1ZGlvLnBsYXkoKTtcblx0Ly8gXHRcdH0sXG5cdC8vIFx0XHRmYWxzZVxuXHQvLyBcdCk7XG5cdC8vIFx0Ly8gYXVkaW8ucGxheSgpO1xuXHQvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVTdGFnZTtcbiIsIi8vIDIgc2Vjb25kIHNwYXduIGludGVydmFscyBcbmV4cG9ydCBjb25zdCBFQVNZX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFsgWyAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwIF0gXG4gIF0sXG4gIFsgWyAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwIF0sXG4gICAgWyAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxIF0gXG4gIF0sXG4gIFsgWyAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwIF0sIFxuICAgIFsgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdIFxuICBdXG5dO1xuXG4vLyAxIHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgTUVESVVNX1BBVFRFUk5TID0gW1xuXHRbXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCBdXG5cdF0sXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAgXSxcblx0XHRbIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEgXSxcblx0XHRbIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSxcblx0XHRbIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAgXVxuICBdLFxuICBbXG5cdFx0WyAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwIF1cblx0XVxuXTtcblxuLy8gMC41IHNlY29uZCBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgSEFSRF9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuXHRdLFxuXHRbXG4gICAgWyAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF0sXG4gICAgWyAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxIF0sXG4gICAgWyAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxIF0sXG4gICAgWyAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwIF0sXG5cdFx0WyAxLCAxLCAxLCAwLCAxLCAwLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwIF1cblx0XVxuXTtcbiIsImNsYXNzIFdhbGwge1xuXHRjb25zdHJ1Y3RvcihvY3RhbnQsIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLm9jdGFudCA9IG9jdGFudDtcblx0XHR0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuc2NhbGUgPSA0O1xuXHRcdC8vIHRoaXMuc3BlZWQgPSA4O1xuXHRcdC8vIHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDg7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0XHR0aGlzLnNwcml0ZS5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy90aHJ1c3Rlci0yLnBuZyc7XG5cdFx0aWYgKGRpZmZpY3VsdHkgPT09ICdlYXN5Jykge1xuXHRcdFx0dGhpcy5zcGVlZCA9IDg7XG5cdFx0XHR0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gJ21lZGl1bScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA5O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wOTtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdoYXJkJykge1xuXHRcdFx0dGhpcy5zcGVlZCA9IDEwO1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4xO1xuXHRcdH1cblxuXHRcdHRoaXMub2N0YW50TG9naWMob2N0YW50KTtcblx0fVxuXG5cdG9jdGFudExvZ2ljKG9jdGFudCkge1xuXHRcdHN3aXRjaCAob2N0YW50KSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAwLCAzODQgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC05MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTU3LjUsIDIwMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gLTQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDIwMi41LCAyNDcuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDM4NCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDI0Ny41LCAyOTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gNDU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0zMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDI5Ny41LCAzMzYuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDc2OCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSA5MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMTAwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMzM2LjUsIDM2MCBdO1xuXHRcdFx0XHR0aGlzLmhpdGJveDIgPSBbIDAsIDIyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTM1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAxMjA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0zMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDIyLjUsIDY3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMTgwO1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDY3LjUsIDExMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgNzY4IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAyMjU7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDMwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAxMTIuNSwgMTU3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0bW92ZSh0aGV0YSkge1xuXHRcdGNvbnN0IHsgaGl0Ym94LCBoaXRib3gyIH0gPSB0aGlzO1xuXG5cdFx0aWYgKHRoaXMuc2NhbGUgPiAxICsgdGhpcy5kZXNjYWxlRmFjdG9yKSB0aGlzLnNjYWxlIC09IHRoaXMuZGVzY2FsZUZhY3Rvcjtcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblx0XHRsZXQgcG9zeCA9IHRoaXMucG9zWzBdO1xuXHRcdGxldCBwb3N5ID0gdGhpcy5wb3NbMV07XG5cdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgzODQgLSBwb3N4KSAqKiAyICsgKDM4NCAtIHBvc3kpICoqIDIpO1xuXHRcdC8vIGRlYnVnZ2VyXG5cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDAgfHwgdGhpcy5vY3RhbnQgPT09IDIgfHwgdGhpcy5vY3RhbnQgPT09IDYpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRkaXN0YW5jZSA8PSAxMjBcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLm9jdGFudCA9PT0gNCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdFx0dGhldGEgPD0gaGl0Ym94WzFdICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA8PSAxMjApIHx8XG5cdFx0XHRcdCh0aGV0YSA+PSBoaXRib3gyWzBdICYmXG5cdFx0XHRcdFx0dGhldGEgPD0gaGl0Ym94MlsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDEgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSAzIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gNSB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDdcblx0XHQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhldGEgPj0gaGl0Ym94WzBdICYmXG5cdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRkaXN0YW5jZSA+PSAxMjAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTcwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBkeCA9IDM4NCAtIHBvc3g7XG5cdFx0bGV0IGR5ID0gMzg0IC0gcG9zeTtcblx0XHQvLyB3YWxscyB3aWxsIGNvbnZlcmdlIHRvd2FyZHMgY2VudGVyXG5cdFx0aWYgKGR4ID4gMCkge1xuXHRcdFx0dGhpcy5wb3NbMF0gKz0gdGhpcy5zcGVlZDtcblx0XHR9IGVsc2UgaWYgKGR4IDwgMCkge1xuXHRcdFx0dGhpcy5wb3NbMF0gLT0gdGhpcy5zcGVlZDtcblx0XHR9XG5cdFx0aWYgKGR5ID4gMCkge1xuXHRcdFx0dGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZDtcblx0XHR9IGVsc2UgaWYgKGR5IDwgMCkge1xuXHRcdFx0dGhpcy5wb3NbMV0gLT0gdGhpcy5zcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZ2FtZU92ZXI7XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGNvbnN0IHsgcG9zIH0gPSB0aGlzO1xuXHRcdGxldCB4ID0gcG9zWzBdO1xuXHRcdGxldCB5ID0gcG9zWzFdO1xuXG5cdFx0Y3R4LnRyYW5zbGF0ZSh4ICsgdGhpcy54b2Zmc2V0ICogdGhpcy5zY2FsZSwgeSArIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGUpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRcdGN0eC5kcmF3SW1hZ2UoXG5cdFx0XHR0aGlzLnNwcml0ZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSAvIDIsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZVxuXHRcdCk7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICgtdGhpcy5kZWdyZWVSb3RhdGlvbiAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoXG5cdFx0XHQteCAtIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsXG5cdFx0XHQteSAtIHRoaXMueW9mZnNldCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2FsbDtcbiIsImltcG9ydCBXYWxsIGZyb20gJy4vd2FsbHMnO1xuXG5jbGFzcyBXYXZlIHtcblx0Y29uc3RydWN0b3IocGF0dGVybiwgZGlmZmljdWx0eSkge1xuXHRcdHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG5cdFx0dGhpcy5lbmQgPSBmYWxzZTtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5jdXJyZW50U3Vid2F2ZSA9IDA7XG5cdFx0dGhpcy53YWxscyA9IHRoaXMuYWRkV2FsbHMoZGlmZmljdWx0eSk7XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcblx0fVxuXG5cdGFkZFdhbGxzKGRpZmZpY3VsdHkpIHtcblx0XHRsZXQgd2FsbHMgPSBbXTtcblx0XHRjb25zdCB7IHBhdHRlcm4gfSA9IHRoaXM7XG5cblx0XHRmb3IgKGxldCBvY3RhbnQgPSAwOyBvY3RhbnQgPCA4OyBvY3RhbnQrKykge1xuXHRcdFx0aWYgKHBhdHRlcm5bb2N0YW50XSA9PT0gMSkge1xuXHRcdFx0XHRsZXQgbmV3V2FsbCA9IG5ldyBXYWxsKG9jdGFudCwgZGlmZmljdWx0eSk7XG5cdFx0XHRcdHdhbGxzLnB1c2gobmV3V2FsbCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3YWxscy5wdXNoKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB3YWxscztcblx0fVxuXG5cdG1vdmUoZGVncmVlcywgZ2FtZSkge1xuXHRcdC8vIGhpdGJveCBsb2dpYyBpZiBhbnkgb2YgdGhlIHdhbGxzIHRvdWNoIGN1cnNvciwgc2V0IGdhbWVPdmVyID0gdHJ1ZVxuXHRcdGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdGlmICh0aGlzLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdGlmICh0aGlzLndhbGxzW2ldLm1vdmUoZGVncmVlcywgZ2FtZSkpIGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZ2FtZU92ZXI7XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLndhbGxzW2ldLmRyYXcoY3R4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=