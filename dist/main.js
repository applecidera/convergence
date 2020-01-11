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
    this.deathExplosion = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/explosion_sound.mp3');
    this.gameStartSound = new Audio('https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/start_game_sound.mp3');
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
            _this.loading[0].innerText = 'Press Space to begin';
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
        this.deathExplosion.currentTime = 0; // this.gameStartSound.currentTime = 0;
        // this.gameStartSound.play();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsImFib3V0TWUiLCJsb2FkaW5nIiwiZGVhdGhFeHBsb3Npb24iLCJBdWRpbyIsImdhbWVTdGFydFNvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluaXRpYWwiLCJuZXdIaWdoU2NvcmUiLCJzZXRUaW1lb3V0IiwiaW5uZXJUZXh0IiwiZSIsImNvZGUiLCJzdGFydE5ld0dhbWUiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGxheSIsIkN1cnNvciIsImNvbnRleHQiLCJkZWdyZWVzIiwiY3Vyc29yU3BlZWQiLCJjdXJzb3IiLCJJbWFnZSIsImRlYWRDdXJzb3IiLCJleHBsb3Npb24iLCJleHBsb3Npb25GcmFtZSIsIngxIiwieTEiLCJzcmMiLCJkaXJlY3Rpb24iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkaW1feCIsImRpbV95IiwiaGlnaFNjb3JlcyIsImhpZ2hTY29yZUJveCIsImhpZ2hTY29yZUlucHV0RmllbGQiLCJhZGRIaWdoU2NvcmUiLCJmaXJzdFBsYWNlTmFtZSIsImZpcnN0UGxhY2VTY29yZSIsInNlY29uZFBsYWNlTmFtZSIsInNlY29uZFBsYWNlU2NvcmUiLCJ0aGlyZFBsYWNlTmFtZSIsInRoaXJkUGxhY2VTY29yZSIsImF1ZGlvIiwiaXNHYW1lT3ZlciIsInRvdGFsVGltZUVsYXBzZWQiLCJzdWJ3YXZlVGltZXIiLCJzdWJXYXZlSW50ZXJ2YWwiLCJ3YXZlcyIsInBhdHRlcm5MaXN0IiwiZGlmZmljdWx0eSIsInJvdGF0aW9uIiwicm90YXRpb25TcGVlZCIsImRlYWRTaGlwIiwic3VuTWFwIiwic3RhdGljTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsInNldEludGVydmFsIiwidGltZXIiLCJmcmFtZUludGVydmFsIiwiY29udHJvbHMiLCJtb3ZlQ3Vyc29yIiwidGltZXJDb3VudGVyIiwid2F2ZUxvZ2ljIiwic2V0VHJhbnNmb3JtIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwiZXhwbG9zaW9uQW5pbWF0aW9uIiwiZm9yRWFjaCIsIndhdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJsZW5ndGgiLCJjb25jYXQiLCJFQVNZX1BBVFRFUk5TIiwiZmxvb3IiLCJyYW5kb20iLCJNRURJVU1fUEFUVEVSTlMiLCJIQVJEX1BBVFRFUk5TIiwicGF0dGVybiIsInNoaWZ0IiwibmV3V2F2ZSIsIldhdmUiLCJwdXNoIiwicmVtb3ZlRGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJpIiwid2FsbHMiLCJwb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJhZGRXYXZlIiwicmVtb3ZlV2F2ZSIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsInJlc2V0Iiwidm9sdW1lIiwic3Vydml2ZWRUaW1lIiwiZmlyc3RQbGFjZSIsInNlY29uZFBsYWNlIiwidGhpcmRQbGFjZSIsImZvY3VzIiwic2VsZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhpZ2hTY29yZU5hbWUiLCJ2YWx1ZSIsIm5ld1BsYXllciIsImZyYW1lUmF0ZSIsInNldFRpbWUiLCJhZGRDdXJzb3IiLCJhZGRDb250cm9scyIsImxvYWRTY3JlZW4iLCJ0aW1lIiwiY3VyVGltZSIsInRpbWVEaWYiLCJsb2dpYyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIldhbGwiLCJvY3RhbnQiLCJzcHJpdGUiLCJzY2FsZSIsInNwZWVkIiwiZGVzY2FsZUZhY3RvciIsIm9jdGFudExvZ2ljIiwiZGVncmVlUm90YXRpb24iLCJ4b2Zmc2V0IiwieW9mZnNldCIsImhpdGJveCIsImhpdGJveDIiLCJ0aGV0YSIsInBvc3giLCJwb3N5IiwiZHgiLCJkeSIsIngiLCJ5IiwiZW5kIiwiY3VycmVudFN1YndhdmUiLCJhZGRXYWxscyIsIm5ld1dhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztR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QUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpELENBRDhCLEVBTzdCLENBQ0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURBLEVBRUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZBLEVBR0EsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhBLEVBSUEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUpBLENBUDZCLEVBYTlCLENBQ0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQURELEVBRUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUZELEVBR0MsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUhELEVBSUMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixD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QUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsWUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsY0FBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsRUFBY08sSUFBZCxDQUFtQjFGLE9BQW5CLEVBQTRCNUMsSUFBNUIsQ0FBSixFQUF1Q2dCLFFBQVEsR0FBRyxJQUFYO0FBQ3ZDO0FBQ0Q7O0FBRUQsYUFBT0EsUUFBUDtBQUNBOzs7eUJBRUluQixHLEVBQUs7QUFDVCxXQUFLLElBQUlrSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQzNCLFlBQUksS0FBS0MsS0FBTCxDQUFXRCxDQUFYLE1BQWtCLElBQXRCLEVBQTRCO0FBQzNCLGVBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjckIsSUFBZCxDQUFtQjdHLEdBQW5CO0FBQ0E7QUFDRDtBQUNEOzs7Ozs7QUFHYThILG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbERBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgY2FudmFzLndpZHRoID0gNzY4O1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG5cbiAgLy8gaW5zdGFudGlhdGUgZ2FtZVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgY29uc3QgZ2FtZXN0YWdlID0gbmV3IEdhbWVTdGFnZShjdHgsIGdhbWUpO1xuICBnYW1lc3RhZ2UudGlja2VyKCk7XG59KVxuXG4iLCIvLyBwbGF5ZXIgY29udHJvbHNcbmNsYXNzIENvbnRyb2xzIHtcblx0Y29uc3RydWN0b3IoZ2FtZSkge1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxlZnQ6IHsgYWN0aXZlOiBmYWxzZSB9LFxuXHRcdFx0cmlnaHQ6IHsgYWN0aXZlOiBmYWxzZSB9XG5cdFx0fTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGlnaFNjb3JlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2gtc2NvcmUtYm94Jyk7XG5cdFx0dGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3ZlcmxheScpO1xuXHRcdHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0LWdhbWUtbG9nbycpO1xuXHRcdHRoaXMuc21hbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGl0bGUtYm94Jyk7XG5cdFx0dGhpcy5nYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXJ0LWdhbWUtaW5mbycpO1xuXHRcdHRoaXMuYWJvdXRNZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fib3V0LW1lJyk7XG5cdFx0dGhpcy5sb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZGluZycpO1xuXHRcdHRoaXMuZGVhdGhFeHBsb3Npb24gPSBuZXcgQXVkaW8oXG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL2V4cGxvc2lvbl9zb3VuZC5tcDMnXG5cdFx0KTtcblx0XHR0aGlzLmdhbWVTdGFydFNvdW5kID0gbmV3IEF1ZGlvKFxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9zdGFydF9nYW1lX3NvdW5kLm1wMydcblx0XHQpO1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoaW5pdGlhbCkge1xuXHRcdGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSkge1xuXHRcdFx0aWYgKGluaXRpYWwpIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmdbMF0uaW5uZXJUZXh0ID0gJ1ByZXNzIFNwYWNlIHRvIGJlZ2luJztcblx0XHRcdFx0fSwgMzAwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0a2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRrZXlVcChlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzdGFydEdhbWUoZSkge1xuXHRcdGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcblx0XHRcdHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblx0XHRcdHRoaXMuZGVhdGhFeHBsb3Npb24ucGF1c2UoKTtcblx0XHRcdHRoaXMuZGVhdGhFeHBsb3Npb24uY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0Ly8gdGhpcy5nYW1lU3RhcnRTb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHQvLyB0aGlzLmdhbWVTdGFydFNvdW5kLnBsYXkoKTtcblx0XHRcdHRoaXMub3ZlcmxheVswXS5jbGFzc0xpc3QuYWRkKCdjbGVhci1iYWNrZ3JvdW5kLWltYWdlJyk7XG5cdFx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW4nKTtcblx0XHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUxpc3RbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmFib3V0TWVbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZU92ZXIoaW5pdGlhbCkge1xuXHRcdGlmICghaW5pdGlhbCkge1xuXHRcdFx0dGhpcy5kZWF0aEV4cGxvc2lvbi5wbGF5KCk7XG5cdFx0fVxuXHRcdHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LmFkZCgnc3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW4nKTtcblx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCd0aXRsZS1ib3gtZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveC1mYWRlLW91dCcpO1xuXHRcdHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3RhcnQtZ2FtZS1pbmZvLWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWluZm8tZmFkZS1pbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlTGlzdFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmFib3V0TWVbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMoaW5pdGlhbCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7XG4iLCJjbGFzcyBDdXJzb3Ige1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0dGhpcy5kZWdyZWVzID0gMjcwO1xuXHRcdHRoaXMuY3Vyc29yU3BlZWQgPSAxMDtcblx0XHR0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZGVhZEN1cnNvciA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZXhwbG9zaW9uID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG5cdFx0dGhpcy54MSA9IDA7XG5cdFx0dGhpcy55MSA9IDA7XG5cdFx0dGhpcy5jdXJzb3Iuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xuXHRcdHRoaXMuZGVhZEN1cnNvci5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX2dyZWVuX3NtYWxsXzIucG5nJztcblx0XHR0aGlzLmV4cGxvc2lvbi5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9leHBsb3Npb25fc3ByaXRlc2hlZXQucG5nJztcblx0fVxuXG5cdG1vdmVDdXJzb3IoZGlyZWN0aW9uKSB7XG5cdFx0c3dpdGNoIChkaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ2Nsb2Nrd2lzZSc6XG5cdFx0XHRcdHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnY2Nsb2Nrd2lzZSc6XG5cdFx0XHRcdHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuY3Vyc29yLCAwLCAtMzUpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRleHBsb3Npb25BbmltYXRpb24oY3R4KSB7XG5cdFx0aWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPD0gNzApIHtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoXG5cdFx0XHRcdHRoaXMuZXhwbG9zaW9uLFxuXHRcdFx0XHR0aGlzLngxLFxuXHRcdFx0XHR0aGlzLnkxLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdDEwMCxcblx0XHRcdFx0LTUwLFxuXHRcdFx0XHQtNzUsXG5cdFx0XHRcdDE1MCxcblx0XHRcdFx0MTUwXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdFx0dGhpcy5leHBsb3Npb25GcmFtZSsrO1xuXG5cdFx0XHR0aGlzLngxICs9IDEwMDtcblx0XHRcdGlmICh0aGlzLngxID09PSAxMDAwKSB7XG5cdFx0XHRcdHRoaXMueTEgKz0gMTAwO1xuXHRcdFx0XHR0aGlzLngxID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZXhwbG9zaW9uRnJhbWUgPT09IDcxKSB7XG5cdFx0XHRcdHRoaXMueDEgPSAwO1xuXHRcdFx0XHR0aGlzLnkxID0gMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLmRlZ3JlZXMgJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG5cdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLmRlYWRDdXJzb3IsIDAsIC0zNSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuZXhwbG9zaW9uRnJhbWUgPSAwO1xuXHRcdHRoaXMueDEgPSAwO1xuXHRcdHRoaXMueTEgPSAwO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEN1cnNvciBmcm9tICcuL2N1cnNvcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuaW1wb3J0IHsgRUFTWV9QQVRURVJOUywgTUVESVVNX1BBVFRFUk5TLCBIQVJEX1BBVFRFUk5TIH0gZnJvbSAnLi9wYXR0ZXJucyc7XG5cbi8vIGNvbnN0cnVjdG9yXG5jbGFzcyBHYW1lIHtcblx0Y29uc3RydWN0b3IoY29udGV4dCkge1xuXHRcdHRoaXMuY3R4ID0gY29udGV4dDtcblx0XHR0aGlzLmRpbV94ID0gNzY4O1xuXHRcdHRoaXMuZGltX3kgPSA3Njg7XG5cdFx0Ly8gVE9ETyBmZXRjaCBoaWdoIHNjb3JlcyBmcm9tIGRiXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gW1xuXHRcdFx0WyAnQWRtaW5pc3RyYXRvcicsIDI4Ljc5IF0sXG5cdFx0XHRbICdaZWtlbWVpc3RlcicsIDIzLjQ1IF0sXG5cdFx0XHRbICdUaGVKb25CYWUnLCAzLjMzIF1cblx0XHRdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1mb3JtJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdCdoaWdoLXNjb3JlLWlucHV0LWZpZWxkJ1xuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hZGRIaWdoU2NvcmUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLmZpcnN0UGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLXNjb3JlJyk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlY29uZC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMudGhpcmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy50aGlyZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9NZWdhbG92YW5pYS5tcDMnKTtcblxuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdHRoaXMud2F2ZXMgPSBbXTtcblx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHRcdHRoaXMucm90YXRpb24gPSAtMzA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnN0YXRpY01hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHRcdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR9LCA1MDApO1xuXHRcdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xuXHR9XG5cblx0bG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdFx0XHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ21lZGl1bSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2hhcmQnO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHRcdFx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXRzIHRyYW5zZm9ybSB0byBjbGVhciBlbnRpcmUgY2F2YXNcblx0XHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94ICsgMjU2LCBkaW1feSArIDI1Nik7IC8vIGNsZWFyIGNhbnZhc1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHRcdH1cblxuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0XHQvLyBDdXJzb3Jcblx0XHRpZiAoIXRoaXMuZGVhZFNoaXApIHtcblx0XHRcdHRoaXMuY3Vyc29yLmRyYXcoY3R4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJzb3IuZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCk7XG5cdFx0fVxuXG5cdFx0Ly8gV2F2ZXNcblx0XHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdHdhdmUuZHJhdyhjdHgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWFydGggb3JiaXRcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHRcdC8vIFdhcnBnYXRlXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRcdGRpbV94IC8gNCxcblx0XHRcdGRpbV95IC8gNFxuXHRcdCk7XG5cblx0XHQvLyBNYXBcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXHR9XG5cblx0YWRkQ3Vyc29yKCkge1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRcdHJldHVybiB0aGlzLmN1cnNvcjtcblx0fVxuXG5cdGFkZENvbnRyb2xzKCkge1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG5cdH1cblxuXHRhZGRXYXZlKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRjb25zdCB7IGRpZmZpY3VsdHkgfSA9IHRoaXM7XG5cblx0XHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCB8fFxuXHRcdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdFx0KSB7XG5cdFx0XHQvLyBpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgKSB7XG5cdFx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcblx0XHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFQVNZX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0TUVESVVNX1BBVFRFUk5TW1xuXHRcdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1FRElVTV9QQVRURVJOUy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdoYXJkJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0fVxuXHRcdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG5cdH1cblxuXHRyZW1vdmVXYXZlKCkge1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0XHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRcdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR3YXZlTG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0XHRsZXQgZ2FtZSA9IHRoaXM7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHRcdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHRcdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdFx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0XHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdFx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdFx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0XHRkZWdyZWVzICs9IDM2MDtcblx0XHR9XG5cblx0XHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyB0b3AgcmlnaHQgdGltZXJcblx0dGltZXJDb3VudGVyKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRcdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHRcdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXJ0TmV3R2FtZSgpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMuY3Vyc29yLnJlc2V0KCk7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuXHRcdHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuXHRcdHRoaXMuYXVkaW8udm9sdW1lID0gMTtcblx0XHR0aGlzLmF1ZGlvLnBsYXkoKTtcblx0fVxuXG5cdGdhbWVPdmVyKCkge1xuXHRcdC8vIFRPRE8gY2hlY2sgaGlnaCBzY29yZSB0byBkaXNwbGF5IG5hbWUgcHJvbXB0XG5cdFx0Ly8gaWYgdHJ1ZSwgb24gZm9ybSBzdWJtaXQsIHNldCBoaWdoc2NvcmUgPSBmYWxzZSBhbmQgcmVjYWxsIGdhbWVPdmVyKClcblx0XHRjb25zdCBzdXJ2aXZlZFRpbWUgPSBNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZCAvIDEwKSAvIDEwMDtcblx0XHRsZXQgZmlyc3RQbGFjZSA9IHRoaXMuaGlnaFNjb3Jlc1swXTtcblx0XHRsZXQgc2Vjb25kUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMV07XG5cdFx0bGV0IHRoaXJkUGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMl07XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVCb3hbMF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0aWYgKFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gZmlyc3RQbGFjZVsxXSB8fFxuXHRcdFx0c3Vydml2ZWRUaW1lID4gc2Vjb25kUGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHRoaXJkUGxhY2VbMV1cblx0XHQpIHtcblx0XHRcdHRoaXMubmV3SGlnaFNjb3JlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLmZvY3VzKCk7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUlucHV0RmllbGRbMF0uc2VsZWN0KCk7XG5cdFx0fVxuXHRcdHRoaXMuZGVhZFNoaXAgPSB0cnVlO1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy5hdWRpby52b2x1bWUgPSAwLjI1O1xuXHR9XG5cblx0YWRkSGlnaFNjb3JlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHN1cnZpdmVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXG5cdFx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J2hpZ2gtc2NvcmUtaW5wdXQtZmllbGQnXG5cdFx0KVswXTtcblx0XHRsZXQgaGlnaFNjb3JlTmFtZSA9IGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWU7XG5cdFx0bGV0IG5ld1BsYXllciA9IFsgaGlnaFNjb3JlTmFtZSwgc3Vydml2ZWRUaW1lIF07XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdFx0aWYgKHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gZmlyc3RQbGFjZTtcblx0XHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIGlmIChzdXJ2aXZlZFRpbWUgPiBzZWNvbmRQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gWyBmaXJzdFBsYWNlLCBzZWNvbmRQbGFjZSwgdGhpcmRQbGFjZSBdO1xuXG5cdFx0Ly8gVE9ETyBtb3ZlIGludG8gb3duIGZ1bmN0aW9uXG5cdFx0Ly8gcmVhc3NpZ24gdG9wIHN1cnZpdm9yc1xuXHRcdC8vIGRlYnVnZ2VyXG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgRmlyc3Q6ICR7Zmlyc3RQbGFjZVswXX1gO1xuXHRcdHRoaXMuZmlyc3RQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IGZpcnN0UGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHNlY29uZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgVGhpcmQ6ICR7dGhpcmRQbGFjZVswXX1gO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblxuXHRcdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdFx0Ly8gY2xlYXIgZW50ZXJlZCBuYW1lIGFuZCByZXNldCBnYW1lIGxvZ2ljXG5cdFx0aGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jbGFzcyBHYW1lU3RhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBnYW1lKSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcblx0XHR0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcmFtZVJhdGU7XG5cdFx0dGhpcy5zZXRUaW1lID0gMDtcblx0XHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcblx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG5cdFx0dGhpcy5sb2FkU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG5cblx0dGlja2VyKHRpbWUpIHtcblx0XHRjb25zdCB7IGZyYW1lSW50ZXJ2YWwsIHNldFRpbWUgfSA9IHRoaXM7XG5cblx0XHQvLyBmcmFtZSBsaW1pdGVyXG5cdFx0bGV0IGN1clRpbWUgPSB0aW1lO1xuXHRcdGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cblx0XHQvLyBkcmF3IGZyYW1lXG5cdFx0aWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdFx0dGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5nYW1lLmRyYXcoKTtcblx0XHRcdHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7XG4iLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbIFsgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCBdIFxuICBdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAgXVxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0W1xuICAgIFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG4iLCJjbGFzcyBXYWxsIHtcblx0Y29uc3RydWN0b3Iob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnNjYWxlID0gNDtcblx0XHQvLyB0aGlzLnNwZWVkID0gODtcblx0XHQvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdFx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHRcdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDk7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0XHR9XG5cblx0XHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG5cdH1cblxuXHRvY3RhbnRMb2dpYyhvY3RhbnQpIHtcblx0XHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG1vdmUodGhldGEpIHtcblx0XHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRcdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdFx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0XHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblx0XHQvLyBkZWJ1Z2dlclxuXG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA3XG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRcdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdFx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRcdGlmIChkeCA+IDApIHtcblx0XHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXHRcdGlmIChkeSA+IDApIHtcblx0XHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0XHRsZXQgeCA9IHBvc1swXTtcblx0XHRsZXQgeSA9IHBvc1sxXTtcblxuXHRcdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5zcHJpdGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0LXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLFxuXHRcdFx0LXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuY2xhc3MgV2F2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdHRoaXMuZW5kID0gZmFsc2U7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHRcdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdH1cblxuXHRhZGRXYWxscyhkaWZmaWN1bHR5KSB7XG5cdFx0bGV0IHdhbGxzID0gW107XG5cdFx0Y29uc3QgeyBwYXR0ZXJuIH0gPSB0aGlzO1xuXG5cdFx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd2FsbHM7XG5cdH1cblxuXHRtb3ZlKGRlZ3JlZXMsIGdhbWUpIHtcblx0XHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9