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
    this.loading = document.getElementsByClassName('loading');
    this.deathExplosion = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/explosion_sound.mp3'); // this.gameStartEffect = new Audio('/home/andrew/Documents/Sound effects Pack 2/Power-up/MP3/Powerup 1 - Sound effects Pack 2.mp3');
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
    value: function disablePlayerControls(initial) {
      var _this = this;

      if (!this.game.newHighScore) {
        if (initial) {
          setTimeout(function () {
            document.addEventListener('keydown', _this.startGame);
            _this.loading[0].innerText = "Press Space to begin";
          }, 3000);
        } else {
          document.addEventListener('keydown', this.startGame);
        }
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
        this.deathExplosion.pause();
        this.deathExplosion.currentTime = 0;
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
    value: function gameOver(initial) {
      if (!initial) {
        this.deathExplosion.play();
      }

      this.game.gameOver();
      this.bigLogo[0].classList.remove('start-game-logo-fade-out');
      this.bigLogo[0].classList.add('start-game-logo-fade-in');
      this.smallLogo[0].classList.remove('title-box-fade-in');
      this.smallLogo[0].classList.add('title-box-fade-out');
      this.gameInfo[0].classList.remove('start-game-info-fade-out');
      this.gameInfo[0].classList.add('start-game-info-fade-in');
      this.highScoreList[0].classList.remove('hidden');
      this.aboutMe[0].classList.remove('hidden');
      this.disablePlayerControls(initial);
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
    this.rotation = -30;
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
      this.audio.volume = 1;
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
      this.audio.volume = 0.25;
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
      this.controls.gameOver(true);
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
    this.controls.gameOver(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsImFib3V0TWUiLCJsb2FkaW5nIiwiZGVhdGhFeHBsb3Npb24iLCJBdWRpbyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWFsIiwibmV3SGlnaFNjb3JlIiwic2V0VGltZW91dCIsImlubmVyVGV4dCIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwicGF1c2UiLCJjdXJyZW50VGltZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBsYXkiLCJDdXJzb3IiLCJjb250ZXh0IiwiZGVncmVlcyIsImN1cnNvclNwZWVkIiwiY3Vyc29yIiwiSW1hZ2UiLCJkZWFkQ3Vyc29yIiwiZXhwbG9zaW9uIiwiZXhwbG9zaW9uRnJhbWUiLCJ4MSIsInkxIiwic3JjIiwiZGlyZWN0aW9uIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGltX3giLCJkaW1feSIsImhpZ2hTY29yZXMiLCJoaWdoU2NvcmVCb3giLCJoaWdoU2NvcmVJbnB1dEZpZWxkIiwiYWRkSGlnaFNjb3JlIiwiZmlyc3RQbGFjZU5hbWUiLCJmaXJzdFBsYWNlU2NvcmUiLCJzZWNvbmRQbGFjZU5hbWUiLCJzZWNvbmRQbGFjZVNjb3JlIiwidGhpcmRQbGFjZU5hbWUiLCJ0aGlyZFBsYWNlU2NvcmUiLCJhdWRpbyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJkZWFkU2hpcCIsInN1bk1hcCIsInN0YXRpY01hcCIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlSW5kZXgiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwibW92ZUN1cnNvciIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImV4cGxvc2lvbkFuaW1hdGlvbiIsImZvckVhY2giLCJ3YXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwiYWRkV2F2ZSIsInJlbW92ZVdhdmUiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJyZXNldCIsInZvbHVtZSIsInN1cnZpdmVkVGltZSIsImZpcnN0UGxhY2UiLCJzZWNvbmRQbGFjZSIsInRoaXJkUGxhY2UiLCJmb2N1cyIsInNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaWdoU2NvcmVOYW1lIiwidmFsdWUiLCJuZXdQbGF5ZXIiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJsb2FkU2NyZWVuIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwibG9naWMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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QUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQUQ4QixFQU83QixDQUNBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQSxFQUVBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGQSxFQUdBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIQSxFQUlBLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKQSxDQVA2QixFQWE5QixDQUNDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FERCxFQUVDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FGRCxFQUdDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FIRCxFQUlDLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FKRCxDQWI4QixFQW1CN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxD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O0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGNBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNPLElBQWQsQ0FBbUIxRixPQUFuQixFQUE0QjNDLElBQTVCLENBQUosRUFBdUNnQixRQUFRLEdBQUcsSUFBWDtBQUN2QztBQUNEOztBQUVELGFBQU9BLFFBQVA7QUFDQTs7O3lCQUVJbkIsRyxFQUFLO0FBQ1QsV0FBSyxJQUFJaUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixlQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY3JCLElBQWQsQ0FBbUI1RyxHQUFuQjtBQUNBO0FBQ0Q7QUFDRDs7Ozs7O0FBR2E2SCxtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG4gIGNhbnZhcy53aWR0aCA9IDc2ODtcbiAgY2FudmFzLmhlaWdodCA9IDc2ODtcbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4gIC8vIGluc3RhbnRpYXRlIGdhbWVcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIGNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbiAgZ2FtZXN0YWdlLnRpY2tlcigpO1xufSlcblxuIiwiLy8gcGxheWVyIGNvbnRyb2xzXG5jbGFzcyBDb250cm9scyB7XG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHR0aGlzLmdhbWUgPSBnYW1lO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsZWZ0OiB7IGFjdGl2ZTogZmFsc2UgfSxcblx0XHRcdHJpZ2h0OiB7IGFjdGl2ZTogZmFsc2UgfVxuXHRcdH07XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhpZ2hTY29yZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaWdoLXNjb3JlLWJveCcpO1xuXHRcdHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ292ZXJsYXknKTtcblx0XHR0aGlzLmJpZ0xvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWxvZ28nKTtcblx0XHR0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpdGxlLWJveCcpO1xuXHRcdHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFydC1nYW1lLWluZm8nKTtcblx0XHR0aGlzLmFib3V0TWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dC1tZScpO1xuXHRcdHRoaXMubG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRpbmcnKTtcblx0XHR0aGlzLmRlYXRoRXhwbG9zaW9uID0gbmV3IEF1ZGlvKFxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9leHBsb3Npb25fc291bmQubXAzJ1xuXHRcdCk7XG5cdFx0Ly8gdGhpcy5nYW1lU3RhcnRFZmZlY3QgPSBuZXcgQXVkaW8oJy9ob21lL2FuZHJldy9Eb2N1bWVudHMvU291bmQgZWZmZWN0cyBQYWNrIDIvUG93ZXItdXAvTVAzL1Bvd2VydXAgMSAtIFNvdW5kIGVmZmVjdHMgUGFjayAyLm1wMycpO1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoaW5pdGlhbCkge1xuXHRcdGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSkge1xuXHRcdFx0aWYgKGluaXRpYWwpIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmdbMF0uaW5uZXJUZXh0ID0gXCJQcmVzcyBTcGFjZSB0byBiZWdpblwiO1xuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRrZXlEb3duKGUpIHtcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGtleVVwKGUpIHtcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHN0YXJ0R2FtZShlKSB7XG5cdFx0aWYgKGUuY29kZSA9PT0gJ1NwYWNlJykge1xuXHRcdFx0dGhpcy5nYW1lLnN0YXJ0TmV3R2FtZSgpO1xuXHRcdFx0dGhpcy5kZWF0aEV4cGxvc2lvbi5wYXVzZSgpO1xuXHRcdFx0dGhpcy5kZWF0aEV4cGxvc2lvbi5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHR0aGlzLm92ZXJsYXlbMF0uY2xhc3NMaXN0LmFkZCgnY2xlYXItYmFja2dyb3VuZC1pbWFnZScpO1xuXHRcdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5hYm91dE1lWzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5lbmFibGVQbGF5ZXJDb250cm9scygpO1xuXHRcdH1cblx0fVxuXG5cdGdhbWVPdmVyKGluaXRpYWwpIHtcblx0XHRpZiAoIWluaXRpYWwpIHtcblx0XHRcdHRoaXMuZGVhdGhFeHBsb3Npb24ucGxheSgpO1xuXHRcdH1cblx0XHR0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcblx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLWluJyk7XG5cdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgndGl0bGUtYm94LWZhZGUtaW4nKTtcblx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gtZmFkZS1vdXQnKTtcblx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLW91dCcpO1xuXHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW4nKTtcblx0XHR0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5hYm91dE1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKGluaXRpYWwpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIiwiY2xhc3MgQ3Vyc29yIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuZGVncmVlcyA9IDI3MDtcblx0XHR0aGlzLmN1cnNvclNwZWVkID0gMTA7XG5cdFx0dGhpcy5jdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmRlYWRDdXJzb3IgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbiA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHRcdHRoaXMuY3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmRlYWRDdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9ncmVlbl9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5leHBsb3Npb24uc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3Nwcml0ZXNoZWV0LnBuZyc7XG5cdH1cblxuXHRtb3ZlQ3Vyc29yKGRpcmVjdGlvbikge1xuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XG5cdFx0XHRjYXNlICdjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2NjbG9ja3dpc2UnOlxuXHRcdFx0XHR0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0ZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCkge1xuXHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lIDw9IDcwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHR0aGlzLmV4cGxvc2lvbixcblx0XHRcdFx0dGhpcy54MSxcblx0XHRcdFx0dGhpcy55MSxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdC01MCxcblx0XHRcdFx0LTc1LFxuXHRcdFx0XHQxNTAsXG5cdFx0XHRcdDE1MFxuXHRcdFx0KTtcblx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cblx0XHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUrKztcblxuXHRcdFx0dGhpcy54MSArPSAxMDA7XG5cdFx0XHRpZiAodGhpcy54MSA9PT0gMTAwMCkge1xuXHRcdFx0XHR0aGlzLnkxICs9IDEwMDtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmV4cGxvc2lvbkZyYW1lID09PSA3MSkge1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdFx0dGhpcy55MSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5kZWFkQ3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1cnNvcjtcbiIsImltcG9ydCBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJztcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi9jdXJzb3InO1xuaW1wb3J0IFdhdmUgZnJvbSAnLi93YXZlJztcbmltcG9ydCB7IEVBU1lfUEFUVEVSTlMsIE1FRElVTV9QQVRURVJOUywgSEFSRF9QQVRURVJOUyB9IGZyb20gJy4vcGF0dGVybnMnO1xuXG4vLyBjb25zdHJ1Y3RvclxuY2xhc3MgR2FtZSB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmN0eCA9IGNvbnRleHQ7XG5cdFx0dGhpcy5kaW1feCA9IDc2ODtcblx0XHR0aGlzLmRpbV95ID0gNzY4O1xuXHRcdC8vIFRPRE8gZmV0Y2ggaGlnaCBzY29yZXMgZnJvbSBkYlxuXHRcdHRoaXMuaGlnaFNjb3JlcyA9IFtcblx0XHRcdFsgJ0FkbWluaXN0cmF0b3InLCAyOC43OSBdLFxuXHRcdFx0WyAnWmVrZW1laXN0ZXInLCAyMy40NSBdLFxuXHRcdFx0WyAnVGhlSm9uQmFlJywgMy4zMyBdXG5cdFx0XTtcblx0XHR0aGlzLmhpZ2hTY29yZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtZm9ybScpO1xuXHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0XHQnaGlnaC1zY29yZS1pbnB1dC1maWVsZCdcblx0XHQpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWRkSGlnaFNjb3JlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZmlyc3RQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy5maXJzdFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLnRoaXJkUGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhpcmQtcGxhY2Utc2NvcmUnKTtcblx0XHR0aGlzLmF1ZGlvID0gbmV3IEF1ZGlvKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvTWVnYWxvdmFuaWEubXAzJyk7XG5cblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMjtcblx0XHR0aGlzLndhdmVzID0gW107XG5cdFx0dGhpcy5wYXR0ZXJuTGlzdCA9IFtdO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9ICdlYXN5Jztcblx0XHR0aGlzLnJvdGF0aW9uID0gLTMwO1xuXHRcdHRoaXMucm90YXRpb25TcGVlZCA9IDAuMTtcblx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IGZhbHNlO1xuXHRcdHRoaXMuZGVhZFNoaXAgPSBmYWxzZTtcblxuXHRcdHRoaXMuc3VuTWFwID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5zdGF0aWNNYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHRcdHRoaXMud2FycEdhdGUxLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMi5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZTMuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUgPSBbIHRoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTMgXTtcblx0XHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0XHR0aGlzLndhcnBHYXRlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHR0aGlzLndhcnBHYXRlSW5kZXggKz0gMTtcblx0XHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0fSwgNTAwKTtcblx0XHR0aGlzLnRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZXInKTtcblx0fVxuXG5cdGxvZ2ljKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuXHRcdFx0Y29uc3QgeyBjb250cm9scywgY3Vyc29yIH0gPSB0aGlzO1xuXHRcdFx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjY2xvY2t3aXNlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSkge1xuXHRcdFx0XHRjdXJzb3IubW92ZUN1cnNvcignY2xvY2t3aXNlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnRvdGFsVGltZUVsYXBzZWQgPiA5LjUgKiAxMDAwKSB7XG5cdFx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdtZWRpdW0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDE5LjUgKiAxMDAwKSB7XG5cdFx0XHRcdHRoaXMuZGlmZmljdWx0eSA9ICdoYXJkJztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy50aW1lckNvdW50ZXIoZnJhbWVJbnRlcnZhbCk7XG5cblx0XHRcdHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcCB9ID0gdGhpcztcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7IC8vIHJlc2V0cyB0cmFuc2Zvcm0gdG8gY2xlYXIgZW50aXJlIGNhdmFzXG5cdFx0Y3R4LmNsZWFyUmVjdCgtMjU2LCAtMjU2LCBkaW1feCArIDI1NiwgZGltX3kgKyAyNTYpOyAvLyBjbGVhciBjYW52YXNcblx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHR0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcblx0XHR9XG5cblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5yb3RhdGlvbiAvIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoLTc2OCAvIDIsIC03NjggLyAyKTtcblxuXHRcdGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuXG5cdFx0Ly8gQ3Vyc29yXG5cdFx0aWYgKCF0aGlzLmRlYWRTaGlwKSB7XG5cdFx0XHR0aGlzLmN1cnNvci5kcmF3KGN0eCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3Vyc29yLmV4cGxvc2lvbkFuaW1hdGlvbihjdHgpO1xuXHRcdH1cblxuXHRcdC8vIFdhdmVzXG5cdFx0dGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHR3YXZlLmRyYXcoY3R4KTtcblx0XHR9KTtcblxuXHRcdC8vIEVhcnRoIG9yYml0XG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jdHguYXJjKGRpbV94IC8gMiwgZGltX3kgLyAyLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cblx0XHQvLyBXYXJwZ2F0ZVxuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZShcblx0XHRcdHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLFxuXHRcdFx0ZGltX3ggLyA0ICsgOTcuNSxcblx0XHRcdGRpbV95IC8gNCArIDk3LjUsXG5cdFx0XHRkaW1feCAvIDQsXG5cdFx0XHRkaW1feSAvIDRcblx0XHQpO1xuXG5cdFx0Ly8gTWFwXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcblx0fVxuXG5cdGFkZEN1cnNvcigpIHtcblx0XHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblx0XHRyZXR1cm4gdGhpcy5jdXJzb3I7XG5cdH1cblxuXHRhZGRDb250cm9scygpIHtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMpO1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xzO1xuXHR9XG5cblx0YWRkV2F2ZShmcmFtZUludGVydmFsKSB7XG5cdFx0Y29uc3QgeyBkaWZmaWN1bHR5IH0gPSB0aGlzO1xuXG5cdFx0Ly8gbGF1bmNoIHdhdmUgZXZlcnkgeCBzZWNvbmRzXG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgfHxcblx0XHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9PT0gZnJhbWVJbnRlcnZhbFxuXHRcdCkge1xuXHRcdFx0Ly8gaWYgKHRoaXMuc3Vid2F2ZVRpbWVyID4gdGhpcy5zdWJXYXZlSW50ZXJ2YWwgKiAxMDAwICkge1xuXHRcdFx0Ly8gaWYgcGF0dGVybkxpc3QgaXMgZW1wdHksIGFkZCBtb3JlIHBhdHRlcm5zIHRvIHBhdHRlcm5MaXN0XG5cdFx0XHRpZiAodGhpcy5wYXR0ZXJuTGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0c3dpdGNoIChkaWZmaWN1bHR5KSB7XG5cdFx0XHRcdFx0Y2FzZSAnZWFzeSc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdEVBU1lfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRUFTWV9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ21lZGl1bSc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdE1FRElVTV9QQVRURVJOU1tcblx0XHRcdFx0XHRcdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNRURJVU1fUEFUVEVSTlMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjc1O1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnaGFyZCc6XG5cdFx0XHRcdFx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gdGhpcy5wYXR0ZXJuTGlzdC5jb25jYXQoXG5cdFx0XHRcdFx0XHRcdEhBUkRfUEFUVEVSTlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogSEFSRF9QQVRURVJOUy5sZW5ndGgpXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuc3ViV2F2ZUludGVydmFsID0gMC41O1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHRoaXMgc3R1ZmYgcnVucyBhdCBzZXQgaW50ZXJ2YWxzICgycylcblx0XHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybkxpc3Quc2hpZnQoKTtcblx0XHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5wYXR0ZXJuLCB0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdFx0dGhpcy53YXZlcy5wdXNoKG5ld1dhdmUpO1xuXHRcdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdH1cblx0XHQvLyBydW5zIHJlZ2FyZGxlc3Mgb2YgdGltZXJcblx0XHR0aGlzLnN1YndhdmVUaW1lciArPSBmcmFtZUludGVydmFsO1xuXHR9XG5cblx0cmVtb3ZlV2F2ZSgpIHtcblx0XHRjb25zdCB7IHdhdmVzIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHJlbW92ZURpc3RhbmNlID0gNjA7XG5cdFx0Ly8gc2hpZnRzIG9mZiB3YXZlIGluIEZJRk9cblx0XHRpZiAod2F2ZXNbMF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdFx0aWYgKHdhdmVzWzBdLndhbGxzW2ldICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGV0IHgxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzBdO1xuXHRcdFx0XHRcdGxldCB5MSA9IHdhdmVzWzBdLndhbGxzW2ldLnBvc1sxXTtcblx0XHRcdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKDM4NCAtIHgxKSAqKiAyICsgKDM4NCAtIHkxKSAqKiAyKTtcblx0XHRcdFx0XHRpZiAoZGlzdGFuY2UgPCByZW1vdmVEaXN0YW5jZSkge1xuXHRcdFx0XHRcdFx0dGhpcy53YXZlcy5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0d2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cdFx0bGV0IGdhbWUgPSB0aGlzO1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cblx0XHQvLyB3YXZlIGRlc3Bhd24gbG9naWNcblx0XHR0aGlzLnJlbW92ZVdhdmUoKTtcblxuXHRcdC8vY3Vyc29yIGFuZ2xlIGFzIHRoZXRhXG5cdFx0bGV0IGRlZ3JlZXMgPSB0aGlzLmN1cnNvci5kZWdyZWVzO1xuXHRcdGRlZ3JlZXMgPSBkZWdyZWVzICUgMzYwO1xuXHRcdHdoaWxlIChkZWdyZWVzIDwgMCkge1xuXHRcdFx0ZGVncmVlcyArPSAzNjA7XG5cdFx0fVxuXG5cdFx0d2F2ZXMuZm9yRWFjaCgod2F2ZSkgPT4ge1xuXHRcdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdFx0aWYgKHdhdmUubW92ZShkZWdyZWVzLCBnYW1lKSkgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gdG9wIHJpZ2h0IHRpbWVyXG5cdHRpbWVyQ291bnRlcih0aW1lRWxhcHNlZCkge1xuXHRcdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0XHRsZXQgcm91bmRlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHR0aGlzLnRpbWVyWzBdLmlubmVySFRNTCA9IHJvdW5kZWRUaW1lLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGFydE5ld0dhbWUoKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdHRoaXMud2F2ZXMgPSBbXTtcblx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHRcdHRoaXMuY3Vyc29yLmRlZ3JlZXMgPSAyNzA7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMuY3Vyc29yLnJlc2V0KCk7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuXHRcdHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuXHRcdHRoaXMuYXVkaW8udm9sdW1lID0gMTtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdC8vIFRPRE8gY2hlY2sgaGlnaCBzY29yZSB0byBkaXNwbGF5IG5hbWUgcHJvbXB0XG5cdFx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0aWYgKFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHRoaXJkUGxhY2VbMV1cblx0XHQpIHtcblx0XHRcdHRoaXMubmV3SGlnaFNjb3JlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLmZvY3VzKCk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZFNoaXAgPSB0cnVlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy5hdWRpby52b2x1bWUgPSAwLjI1O1xuXHR9XG5cblx0YWRkSGlnaFNjb3JlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHN1cnZpdmVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXG5cdFx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J2hpZ2gtc2NvcmUtaW5wdXQtZmllbGQnXG5cdFx0KVswXTtcblx0XHRsZXQgaGlnaFNjb3JlTmFtZSA9IGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWU7XG5cdFx0bGV0IG5ld1BsYXllciA9IFsgaGlnaFNjb3JlTmFtZSwgc3Vydml2ZWRUaW1lIF07XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdFx0aWYgKHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gZmlyc3RQbGFjZTtcblx0XHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIGlmIChzdXJ2aXZlZFRpbWUgPiBzZWNvbmRQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gWyBmaXJzdFBsYWNlLCBzZWNvbmRQbGFjZSwgdGhpcmRQbGFjZSBdO1xuXG5cdFx0Ly8gVE9ETyBtb3ZlIGludG8gb3duIGZ1bmN0aW9uXG5cdFx0Ly8gcmVhc3NpZ24gdG9wIHN1cnZpdm9yc1xuXHRcdC8vIGRlYnVnZ2VyXG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgRmlyc3Q6ICR7Zmlyc3RQbGFjZVswXX1gO1xuXHRcdHRoaXMuZmlyc3RQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IGZpcnN0UGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHNlY29uZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgVGhpcmQ6ICR7dGhpcmRQbGFjZVswXX1gO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblxuXHRcdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdFx0Ly8gY2xlYXIgZW50ZXJlZCBuYW1lIGFuZCByZXNldCBnYW1lIGxvZ2ljXG5cdFx0aGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jbGFzcyBHYW1lU3RhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBnYW1lKSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcblx0XHR0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcmFtZVJhdGU7XG5cdFx0dGhpcy5zZXRUaW1lID0gMDtcblx0XHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcblx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG5cdFx0dGhpcy5sb2FkU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG5cblx0dGlja2VyKHRpbWUpIHtcblx0XHRjb25zdCB7IGZyYW1lSW50ZXJ2YWwsIHNldFRpbWUgfSA9IHRoaXM7XG5cblx0XHQvLyBmcmFtZSBsaW1pdGVyXG5cdFx0bGV0IGN1clRpbWUgPSB0aW1lO1xuXHRcdGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cblx0XHQvLyBkcmF3IGZyYW1lXG5cdFx0aWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdFx0dGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5nYW1lLmRyYXcoKTtcblx0XHRcdHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7XG4iLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbIFsgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCBdIFxuICBdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAgXVxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0W1xuICAgIFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG4iLCJjbGFzcyBXYWxsIHtcblx0Y29uc3RydWN0b3Iob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnNjYWxlID0gNDtcblx0XHQvLyB0aGlzLnNwZWVkID0gODtcblx0XHQvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdFx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHRcdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDk7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0XHR9XG5cblx0XHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG5cdH1cblxuXHRvY3RhbnRMb2dpYyhvY3RhbnQpIHtcblx0XHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG1vdmUodGhldGEpIHtcblx0XHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRcdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdFx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0XHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblx0XHQvLyBkZWJ1Z2dlclxuXG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA3XG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRcdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdFx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRcdGlmIChkeCA+IDApIHtcblx0XHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXHRcdGlmIChkeSA+IDApIHtcblx0XHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0XHRsZXQgeCA9IHBvc1swXTtcblx0XHRsZXQgeSA9IHBvc1sxXTtcblxuXHRcdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5zcHJpdGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0LXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLFxuXHRcdFx0LXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuY2xhc3MgV2F2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdHRoaXMuZW5kID0gZmFsc2U7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHRcdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdH1cblxuXHRhZGRXYWxscyhkaWZmaWN1bHR5KSB7XG5cdFx0bGV0IHdhbGxzID0gW107XG5cdFx0Y29uc3QgeyBwYXR0ZXJuIH0gPSB0aGlzO1xuXG5cdFx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd2FsbHM7XG5cdH1cblxuXHRtb3ZlKGRlZ3JlZXMsIGdhbWUpIHtcblx0XHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9