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
    this.deathExplosion.volume = 0.5;
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
          this.loading[0].innerText = 'Loading';
          setTimeout(function () {
            document.addEventListener('keydown', _this.startGame);
            _this.loading[0].innerText = 'Press Space to begin';
          }, 1500);
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

    this.highScores = [['Administrator', 28.79], ['Zekemeister', 23.45], ['TheJonBae', 19.45]];
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

      if (Math.round(Math.random()) === 0) {
        this.rotationSpeed = 0.1;
      } else {
        this.rotationSpeed = -0.1;
      }

      ;
      this.cursor.reset();
      this.deadShip = false;
      this.isGameOver = false;
      this.audio.currentTime = 0;
      this.audio.volume = 0.5;
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
      this.audio.volume = 0.1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy93YWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwic3RhdGUiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJkaXNhYmxlUGxheWVyQ29udHJvbHMiLCJiaW5kIiwiZW5hYmxlUGxheWVyQ29udHJvbHMiLCJrZXlEb3duIiwia2V5VXAiLCJzdGFydEdhbWUiLCJnYW1lT3ZlciIsImhpZ2hTY29yZUxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3ZlcmxheSIsImJpZ0xvZ28iLCJzbWFsbExvZ28iLCJnYW1lSW5mbyIsImFib3V0TWUiLCJsb2FkaW5nIiwiZGVhdGhFeHBsb3Npb24iLCJBdWRpbyIsInZvbHVtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0aWFsIiwibmV3SGlnaFNjb3JlIiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsImUiLCJjb2RlIiwic3RhcnROZXdHYW1lIiwicGF1c2UiLCJjdXJyZW50VGltZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBsYXkiLCJDdXJzb3IiLCJjb250ZXh0IiwiZGVncmVlcyIsImN1cnNvclNwZWVkIiwiY3Vyc29yIiwiSW1hZ2UiLCJkZWFkQ3Vyc29yIiwiZXhwbG9zaW9uIiwiZXhwbG9zaW9uRnJhbWUiLCJ4MSIsInkxIiwic3JjIiwiZGlyZWN0aW9uIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGltX3giLCJkaW1feSIsImhpZ2hTY29yZXMiLCJoaWdoU2NvcmVCb3giLCJoaWdoU2NvcmVJbnB1dEZpZWxkIiwiYWRkSGlnaFNjb3JlIiwiZmlyc3RQbGFjZU5hbWUiLCJmaXJzdFBsYWNlU2NvcmUiLCJzZWNvbmRQbGFjZU5hbWUiLCJzZWNvbmRQbGFjZVNjb3JlIiwidGhpcmRQbGFjZU5hbWUiLCJ0aGlyZFBsYWNlU2NvcmUiLCJhdWRpbyIsImlzR2FtZU92ZXIiLCJ0b3RhbFRpbWVFbGFwc2VkIiwic3Vid2F2ZVRpbWVyIiwic3ViV2F2ZUludGVydmFsIiwid2F2ZXMiLCJwYXR0ZXJuTGlzdCIsImRpZmZpY3VsdHkiLCJyb3RhdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJkZWFkU2hpcCIsInN1bk1hcCIsInN0YXRpY01hcCIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlSW5kZXgiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlVGltZXIiLCJzZXRJbnRlcnZhbCIsInRpbWVyIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwibW92ZUN1cnNvciIsInRpbWVyQ291bnRlciIsIndhdmVMb2dpYyIsInNldFRyYW5zZm9ybSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImV4cGxvc2lvbkFuaW1hdGlvbiIsImZvckVhY2giLCJ3YXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwibGVuZ3RoIiwiY29uY2F0IiwiRUFTWV9QQVRURVJOUyIsImZsb29yIiwicmFuZG9tIiwiTUVESVVNX1BBVFRFUk5TIiwiSEFSRF9QQVRURVJOUyIsInBhdHRlcm4iLCJzaGlmdCIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZURpc3RhbmNlIiwidW5kZWZpbmVkIiwiaSIsIndhbGxzIiwicG9zIiwiZGlzdGFuY2UiLCJzcXJ0IiwiYWRkV2F2ZSIsInJlbW92ZVdhdmUiLCJtb3ZlIiwidGltZUVsYXBzZWQiLCJyb3VuZGVkVGltZSIsInJvdW5kIiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJyZXNldCIsInN1cnZpdmVkVGltZSIsImZpcnN0UGxhY2UiLCJzZWNvbmRQbGFjZSIsInRoaXJkUGxhY2UiLCJmb2N1cyIsInNlbGVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoaWdoU2NvcmVOYW1lIiwidmFsdWUiLCJuZXdQbGF5ZXIiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJsb2FkU2NyZWVuIiwidGltZSIsImN1clRpbWUiLCJ0aW1lRGlmIiwibG9naWMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJXYWxsIiwib2N0YW50Iiwic3ByaXRlIiwic2NhbGUiLCJzcGVlZCIsImRlc2NhbGVGYWN0b3IiLCJvY3RhbnRMb2dpYyIsImRlZ3JlZVJvdGF0aW9uIiwieG9mZnNldCIsInlvZmZzZXQiLCJoaXRib3giLCJoaXRib3gyIiwidGhldGEiLCJwb3N4IiwicG9zeSIsImR4IiwiZHkiLCJ4IiwieSIsImVuZCIsImN1cnJlbnRTdWJ3YXZlIiwiYWRkV2FsbHMiLCJuZXdXYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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QVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEQsRUFJQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkQsQ0FEOEIsRUFPN0IsQ0FDQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREEsRUFFQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkEsRUFHQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSEEsRUFJQSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBSkEsQ0FQNkIsRUFhOUIsQ0FDQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQsRUFFQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBRkQsRUFHQyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFX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SixJQUFOLENBQVcsSUFBWDtBQUNBO0FBQ0Q7O0FBRUQsYUFBT0ksS0FBUDtBQUNBOzs7eUJBRUlwRixPLEVBQVM1QyxJLEVBQU07QUFDbkI7QUFDQSxVQUFJZ0IsUUFBUSxHQUFHLEtBQWY7O0FBRUEsV0FBSyxJQUFJK0csQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUMzQixZQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxNQUFrQixJQUF0QixFQUE0QjtBQUMzQixjQUFJLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBWCxFQUFjTyxJQUFkLENBQW1CMUYsT0FBbkIsRUFBNEI1QyxJQUE1QixDQUFKLEVBQXVDZ0IsUUFBUSxHQUFHLElBQVg7QUFDdkM7QUFDRDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0E7Ozt5QkFFSW5CLEcsRUFBSztBQUNULFdBQUssSUFBSWtJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDM0IsWUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsTUFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsZUFBS0MsS0FBTCxDQUFXRCxDQUFYLEVBQWNyQixJQUFkLENBQW1CN0csR0FBbkI7QUFDQTtBQUNEO0FBQ0Q7Ozs7OztBQUdhOEgsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgR2FtZVN0YWdlIGZyb20gJy4vanMvZ2FtZXN0YWdlJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBjYW52YXMud2lkdGggPSA3Njg7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuICAvLyBpbnN0YW50aWF0ZSBnYW1lXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBjb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG4gIGdhbWVzdGFnZS50aWNrZXIoKTtcbn0pXG5cbiIsIi8vIHBsYXllciBjb250cm9sc1xuY2xhc3MgQ29udHJvbHMge1xuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bGVmdDogeyBhY3RpdmU6IGZhbHNlIH0sXG5cdFx0XHRyaWdodDogeyBhY3RpdmU6IGZhbHNlIH1cblx0XHR9O1xuXHRcdHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1ib3gnKTtcblx0XHR0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5Jyk7XG5cdFx0dGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnQtZ2FtZS1sb2dvJyk7XG5cdFx0dGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZS1ib3gnKTtcblx0XHR0aGlzLmdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhcnQtZ2FtZS1pbmZvJyk7XG5cdFx0dGhpcy5hYm91dE1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXQtbWUnKTtcblx0XHR0aGlzLmxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkaW5nJyk7XG5cdFx0dGhpcy5kZWF0aEV4cGxvc2lvbiA9IG5ldyBBdWRpbyhcblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvZXhwbG9zaW9uX3NvdW5kLm1wMydcblx0XHQpO1xuXHRcdHRoaXMuZGVhdGhFeHBsb3Npb24udm9sdW1lID0gMC41O1xuXHR9XG5cblx0ZW5hYmxlUGxheWVyQ29udHJvbHMoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG5cdH1cblxuXHRkaXNhYmxlUGxheWVyQ29udHJvbHMoaW5pdGlhbCkge1xuXHRcdGlmICghdGhpcy5nYW1lLm5ld0hpZ2hTY29yZSkge1xuXHRcdFx0aWYgKGluaXRpYWwpIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nWzBdLmlubmVyVGV4dCA9ICdMb2FkaW5nJztcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3RhcnRHYW1lKTtcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmdbMF0uaW5uZXJUZXh0ID0gJ1ByZXNzIFNwYWNlIHRvIGJlZ2luJztcblx0XHRcdFx0fSwgMTUwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXHR9XG5cblx0a2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmxlZnQuYWN0aXZlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRrZXlVcChlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzdGFydEdhbWUoZSkge1xuXHRcdGlmIChlLmNvZGUgPT09ICdTcGFjZScpIHtcblx0XHRcdHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcblx0XHRcdHRoaXMuZGVhdGhFeHBsb3Npb24ucGF1c2UoKTtcblx0XHRcdHRoaXMuZGVhdGhFeHBsb3Npb24uY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0dGhpcy5vdmVybGF5WzBdLmNsYXNzTGlzdC5hZGQoJ2NsZWFyLWJhY2tncm91bmQtaW1hZ2UnKTtcblx0XHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1pbicpO1xuXHRcdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLW91dCcpO1xuXHRcdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZSgndGl0bGUtYm94LWZhZGUtb3V0Jyk7XG5cdFx0XHR0aGlzLnNtYWxsTG9nb1swXS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gtZmFkZS1pbicpO1xuXHRcdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWluZm8tZmFkZS1pbicpO1xuXHRcdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWluZm8tZmFkZS1vdXQnKTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlTGlzdFswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuYWJvdXRNZVswXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcblx0XHR9XG5cdH1cblxuXHRnYW1lT3Zlcihpbml0aWFsKSB7XG5cdFx0aWYgKCFpbml0aWFsKSB7XG5cdFx0XHR0aGlzLmRlYXRoRXhwbG9zaW9uLnBsYXkoKTtcblx0XHR9XG5cdFx0dGhpcy5nYW1lLmdhbWVPdmVyKCk7XG5cdFx0dGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0LWdhbWUtbG9nby1mYWRlLW91dCcpO1xuXHRcdHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QuYWRkKCdzdGFydC1nYW1lLWxvZ28tZmFkZS1pbicpO1xuXHRcdHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RpdGxlLWJveC1mYWRlLWluJyk7XG5cdFx0dGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94LWZhZGUtb3V0Jyk7XG5cdFx0dGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFydC1nYW1lLWluZm8tZmFkZS1vdXQnKTtcblx0XHR0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWdhbWUtaW5mby1mYWRlLWluJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVMaXN0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuYWJvdXRNZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHR0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyhpbml0aWFsKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9scztcbiIsImNsYXNzIEN1cnNvciB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblx0XHR0aGlzLmRlZ3JlZXMgPSAyNzA7XG5cdFx0dGhpcy5jdXJzb3JTcGVlZCA9IDEwO1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5kZWFkQ3Vyc29yID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5leHBsb3Npb24gPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lID0gMDtcblx0XHR0aGlzLngxID0gMDtcblx0XHR0aGlzLnkxID0gMDtcblx0XHR0aGlzLmN1cnNvci5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG5cdFx0dGhpcy5kZWFkQ3Vyc29yLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfZ3JlZW5fc21hbGxfMi5wbmcnO1xuXHRcdHRoaXMuZXhwbG9zaW9uLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL2V4cGxvc2lvbl9zcHJpdGVzaGVldC5wbmcnO1xuXHR9XG5cblx0bW92ZUN1cnNvcihkaXJlY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xuXHRcdFx0Y2FzZSAnY2xvY2t3aXNlJzpcblx0XHRcdFx0dGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdjY2xvY2t3aXNlJzpcblx0XHRcdFx0dGhpcy5kZWdyZWVzIC09IHRoaXMuY3Vyc29yU3BlZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGRyYXcoY3R4KSB7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKDc2OCAvIDIsIDc2OCAvIDIpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAodGhpcy5kZWdyZWVzICUgMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsIC0zNSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGV4cGxvc2lvbkFuaW1hdGlvbihjdHgpIHtcblx0XHRpZiAodGhpcy5leHBsb3Npb25GcmFtZSA8PSA3MCkge1xuXHRcdFx0Y3R4LnNhdmUoKTtcblx0XHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdFx0Y3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShcblx0XHRcdFx0dGhpcy5leHBsb3Npb24sXG5cdFx0XHRcdHRoaXMueDEsXG5cdFx0XHRcdHRoaXMueTEsXG5cdFx0XHRcdDEwMCxcblx0XHRcdFx0MTAwLFxuXHRcdFx0XHQtNTAsXG5cdFx0XHRcdC03NSxcblx0XHRcdFx0MTUwLFxuXHRcdFx0XHQxNTBcblx0XHRcdCk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXG5cdFx0XHR0aGlzLmV4cGxvc2lvbkZyYW1lKys7XG5cblx0XHRcdHRoaXMueDEgKz0gMTAwO1xuXHRcdFx0aWYgKHRoaXMueDEgPT09IDEwMDApIHtcblx0XHRcdFx0dGhpcy55MSArPSAxMDA7XG5cdFx0XHRcdHRoaXMueDEgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5leHBsb3Npb25GcmFtZSA9PT0gNzEpIHtcblx0XHRcdFx0dGhpcy54MSA9IDA7XG5cdFx0XHRcdHRoaXMueTEgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSg3NjggLyAyLCA3NjggLyAyKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuXHRcdGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcblx0XHRjdHguZHJhd0ltYWdlKHRoaXMuZGVhZEN1cnNvciwgMCwgLTM1KTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5leHBsb3Npb25GcmFtZSA9IDA7XG5cdFx0dGhpcy54MSA9IDA7XG5cdFx0dGhpcy55MSA9IDA7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJpbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yJztcbmltcG9ydCBXYXZlIGZyb20gJy4vd2F2ZSc7XG5pbXBvcnQgeyBFQVNZX1BBVFRFUk5TLCBNRURJVU1fUEFUVEVSTlMsIEhBUkRfUEFUVEVSTlMgfSBmcm9tICcuL3BhdHRlcm5zJztcblxuLy8gY29uc3RydWN0b3JcbmNsYXNzIEdhbWUge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZGltX3ggPSA3Njg7XG5cdFx0dGhpcy5kaW1feSA9IDc2ODtcblx0XHQvLyBUT0RPIGZldGNoIGhpZ2ggc2NvcmVzIGZyb20gZGJcblx0XHR0aGlzLmhpZ2hTY29yZXMgPSBbXG5cdFx0XHRbICdBZG1pbmlzdHJhdG9yJywgMjguNzkgXSxcblx0XHRcdFsgJ1pla2VtZWlzdGVyJywgMjMuNDUgXSxcblx0XHRcdFsgJ1RoZUpvbkJhZScsIDE5LjQ1IF1cblx0XHRdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlnaC1zY29yZS1mb3JtJyk7XG5cdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHRcdCdoaWdoLXNjb3JlLWlucHV0LWZpZWxkJ1xuXHRcdCk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hZGRIaWdoU2NvcmUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLW5hbWUnKTtcblx0XHR0aGlzLmZpcnN0UGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0LXBsYWNlLXNjb3JlJyk7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWNvbmQtcGxhY2UtbmFtZScpO1xuXHRcdHRoaXMuc2Vjb25kUGxhY2VTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlY29uZC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMudGhpcmRQbGFjZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1uYW1lJyk7XG5cdFx0dGhpcy50aGlyZFBsYWNlU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aGlyZC1wbGFjZS1zY29yZScpO1xuXHRcdHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9NZWdhbG92YW5pYS5tcDMnKTtcblxuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAyO1xuXHRcdHRoaXMud2F2ZXMgPSBbXTtcblx0XHR0aGlzLnBhdHRlcm5MaXN0ID0gW107XG5cdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2Vhc3knO1xuXHRcdHRoaXMucm90YXRpb24gPSAtMzA7XG5cdFx0dGhpcy5yb3RhdGlvblNwZWVkID0gMC4xO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy5kZWFkU2hpcCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zdW5NYXAgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnN0YXRpY01hcCA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy53YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdFx0dGhpcy53YXJwR2F0ZTEuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGUyLnNyYyA9XG5cdFx0XHQnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcblx0XHR0aGlzLndhcnBHYXRlMy5zcmMgPVxuXHRcdFx0J2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cdFx0dGhpcy53YXJwR2F0ZSA9IFsgdGhpcy53YXJwR2F0ZTEsIHRoaXMud2FycEdhdGUyLCB0aGlzLndhcnBHYXRlMyBdO1xuXHRcdHRoaXMuc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuXHRcdHRoaXMud2FycEdhdGVUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdFx0aWYgKHRoaXMud2FycEdhdGVJbmRleCA9PT0gMykgdGhpcy53YXJwR2F0ZUluZGV4ID0gMDtcblx0XHR9LCA1MDApO1xuXHRcdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lcicpO1xuXHR9XG5cblx0bG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdGlmICghdGhpcy5pc0dhbWVPdmVyKSB7XG5cdFx0XHRjb25zdCB7IGNvbnRyb2xzLCBjdXJzb3IgfSA9IHRoaXM7XG5cdFx0XHRpZiAoY29udHJvbHMuc3RhdGUubGVmdC5hY3RpdmUpIHtcblx0XHRcdFx0Y3Vyc29yLm1vdmVDdXJzb3IoJ2NjbG9ja3dpc2UnKTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKSB7XG5cdFx0XHRcdGN1cnNvci5tb3ZlQ3Vyc29yKCdjbG9ja3dpc2UnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudG90YWxUaW1lRWxhcHNlZCA+IDkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ21lZGl1bSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50b3RhbFRpbWVFbGFwc2VkID4gMTkuNSAqIDEwMDApIHtcblx0XHRcdFx0dGhpcy5kaWZmaWN1bHR5ID0gJ2hhcmQnO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHRcdFx0dGhpcy53YXZlTG9naWMoZnJhbWVJbnRlcnZhbCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zdCB7IGRpbV94LCBkaW1feSwgY3R4LCB3YXJwR2F0ZSwgd2FycEdhdGVJbmRleCwgc3VuTWFwIH0gPSB0aGlzO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXRzIHRyYW5zZm9ybSB0byBjbGVhciBlbnRpcmUgY2F2YXNcblx0XHRjdHguY2xlYXJSZWN0KC0yNTYsIC0yNTYsIGRpbV94ICsgMjU2LCBkaW1feSArIDI1Nik7IC8vIGNsZWFyIGNhbnZhc1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0aWYgKCF0aGlzLmlzR2FtZU92ZXIpIHtcblx0XHRcdHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xuXHRcdH1cblxuXHRcdGN0eC50cmFuc2xhdGUoNzY4IC8gMiwgNzY4IC8gMik7XG5cdFx0Y3R4LnJvdGF0ZSgyICogTWF0aC5QSSAvIDM2MCAqICh0aGlzLnJvdGF0aW9uIC8gMzYwKSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgtNzY4IC8gMiwgLTc2OCAvIDIpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG5cblx0XHQvLyBDdXJzb3Jcblx0XHRpZiAoIXRoaXMuZGVhZFNoaXApIHtcblx0XHRcdHRoaXMuY3Vyc29yLmRyYXcoY3R4KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJzb3IuZXhwbG9zaW9uQW5pbWF0aW9uKGN0eCk7XG5cdFx0fVxuXG5cdFx0Ly8gV2F2ZXNcblx0XHR0aGlzLndhdmVzLmZvckVhY2goKHdhdmUpID0+IHtcblx0XHRcdHdhdmUuZHJhdyhjdHgpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWFydGggb3JiaXRcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmN0eC5hcmMoZGltX3ggLyAyLCBkaW1feSAvIDIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblxuXHRcdC8vIFdhcnBnYXRlXG5cdFx0dGhpcy5jdHguZHJhd0ltYWdlKFxuXHRcdFx0d2FycEdhdGVbd2FycEdhdGVJbmRleF0sXG5cdFx0XHRkaW1feCAvIDQgKyA5Ny41LFxuXHRcdFx0ZGltX3kgLyA0ICsgOTcuNSxcblx0XHRcdGRpbV94IC8gNCxcblx0XHRcdGRpbV95IC8gNFxuXHRcdCk7XG5cblx0XHQvLyBNYXBcblx0XHR0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXHR9XG5cblx0YWRkQ3Vyc29yKCkge1xuXHRcdHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcigpO1xuXHRcdHJldHVybiB0aGlzLmN1cnNvcjtcblx0fVxuXG5cdGFkZENvbnRyb2xzKCkge1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHModGhpcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHM7XG5cdH1cblxuXHRhZGRXYXZlKGZyYW1lSW50ZXJ2YWwpIHtcblx0XHRjb25zdCB7IGRpZmZpY3VsdHkgfSA9IHRoaXM7XG5cblx0XHQvLyBsYXVuY2ggd2F2ZSBldmVyeSB4IHNlY29uZHNcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA+IHRoaXMuc3ViV2F2ZUludGVydmFsICogMTAwMCB8fFxuXHRcdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID09PSBmcmFtZUludGVydmFsXG5cdFx0KSB7XG5cdFx0XHQvLyBpZiAodGhpcy5zdWJ3YXZlVGltZXIgPiB0aGlzLnN1YldhdmVJbnRlcnZhbCAqIDEwMDAgKSB7XG5cdFx0XHQvLyBpZiBwYXR0ZXJuTGlzdCBpcyBlbXB0eSwgYWRkIG1vcmUgcGF0dGVybnMgdG8gcGF0dGVybkxpc3Rcblx0XHRcdGlmICh0aGlzLnBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcblx0XHRcdFx0XHRjYXNlICdlYXN5Jzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0RUFTWV9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFQVNZX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAxO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbWVkaXVtJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0TUVESVVNX1BBVFRFUk5TW1xuXHRcdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1FRElVTV9QQVRURVJOUy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDAuNzU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdoYXJkJzpcblx0XHRcdFx0XHRcdHRoaXMucGF0dGVybkxpc3QgPSB0aGlzLnBhdHRlcm5MaXN0LmNvbmNhdChcblx0XHRcdFx0XHRcdFx0SEFSRF9QQVRURVJOU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBIQVJEX1BBVFRFUk5TLmxlbmd0aCldXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdWJXYXZlSW50ZXJ2YWwgPSAwLjU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gdGhpcyBzdHVmZiBydW5zIGF0IHNldCBpbnRlcnZhbHMgKDJzKVxuXHRcdFx0dGhpcy5wYXR0ZXJuID0gdGhpcy5wYXR0ZXJuTGlzdC5zaGlmdCgpO1xuXHRcdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLnBhdHRlcm4sIHRoaXMuZGlmZmljdWx0eSk7XG5cdFx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0XHR0aGlzLnN1YndhdmVUaW1lciA9IDA7XG5cdFx0fVxuXHRcdC8vIHJ1bnMgcmVnYXJkbGVzcyBvZiB0aW1lclxuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyICs9IGZyYW1lSW50ZXJ2YWw7XG5cdH1cblxuXHRyZW1vdmVXYXZlKCkge1xuXHRcdGNvbnN0IHsgd2F2ZXMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgcmVtb3ZlRGlzdGFuY2UgPSA2MDtcblx0XHQvLyBzaGlmdHMgb2ZmIHdhdmUgaW4gRklGT1xuXHRcdGlmICh3YXZlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0XHRpZiAod2F2ZXNbMF0ud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgeDEgPSB3YXZlc1swXS53YWxsc1tpXS5wb3NbMF07XG5cdFx0XHRcdFx0bGV0IHkxID0gd2F2ZXNbMF0ud2FsbHNbaV0ucG9zWzFdO1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0geDEpICoqIDIgKyAoMzg0IC0geTEpICoqIDIpO1xuXHRcdFx0XHRcdGlmIChkaXN0YW5jZSA8IHJlbW92ZURpc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLndhdmVzLnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR3YXZlTG9naWMoZnJhbWVJbnRlcnZhbCkge1xuXHRcdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblx0XHRsZXQgZ2FtZSA9IHRoaXM7XG5cdFx0Y29uc3QgeyB3YXZlcyB9ID0gdGhpcztcblxuXHRcdC8vIHdhdmUgZGVzcGF3biBsb2dpY1xuXHRcdHRoaXMucmVtb3ZlV2F2ZSgpO1xuXG5cdFx0Ly9jdXJzb3IgYW5nbGUgYXMgdGhldGFcblx0XHRsZXQgZGVncmVlcyA9IHRoaXMuY3Vyc29yLmRlZ3JlZXM7XG5cdFx0ZGVncmVlcyA9IGRlZ3JlZXMgJSAzNjA7XG5cdFx0d2hpbGUgKGRlZ3JlZXMgPCAwKSB7XG5cdFx0XHRkZWdyZWVzICs9IDM2MDtcblx0XHR9XG5cblx0XHR3YXZlcy5mb3JFYWNoKCh3YXZlKSA9PiB7XG5cdFx0XHQvLyBpZiBhbnkgcmV0dXJuIHRydWUsIGNhbGwgdGhpcy5nYW1lT3ZlcigpXG5cdFx0XHRpZiAod2F2ZS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyB0b3AgcmlnaHQgdGltZXJcblx0dGltZXJDb3VudGVyKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuXHRcdGxldCByb3VuZGVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXHRcdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXJ0TmV3R2FtZSgpIHtcblx0XHR0aGlzLnRvdGFsVGltZUVsYXBzZWQgPSAwO1xuXHRcdHRoaXMuc3Vid2F2ZVRpbWVyID0gMDtcblx0XHR0aGlzLnN1YldhdmVJbnRlcnZhbCA9IDI7XG5cdFx0dGhpcy53YXZlcyA9IFtdO1xuXHRcdHRoaXMucGF0dGVybkxpc3QgPSBbXTtcblx0XHR0aGlzLmRpZmZpY3VsdHkgPSAnZWFzeSc7XG5cdFx0dGhpcy5jb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMuY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0aWYgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk9PT0wKXtcblx0XHR0aGlzLnJvdGF0aW9uU3BlZWQgPSAwLjE7fSBlbHNlIHt0aGlzLnJvdGF0aW9uU3BlZWQgPSAtMC4xO307XG5cdFx0dGhpcy5jdXJzb3IucmVzZXQoKTtcblx0XHR0aGlzLmRlYWRTaGlwID0gZmFsc2U7XG5cdFx0dGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG5cdFx0dGhpcy5hdWRpby5jdXJyZW50VGltZSA9IDA7XG5cdFx0dGhpcy5hdWRpby52b2x1bWUgPSAwLjU7XG5cdFx0dGhpcy5hdWRpby5wbGF5KCk7XG5cdH1cblxuXHRnYW1lT3ZlcigpIHtcblx0XHQvLyBUT0RPIGNoZWNrIGhpZ2ggc2NvcmUgdG8gZGlzcGxheSBuYW1lIHByb21wdFxuXHRcdC8vIGlmIHRydWUsIG9uIGZvcm0gc3VibWl0LCBzZXQgaGlnaHNjb3JlID0gZmFsc2UgYW5kIHJlY2FsbCBnYW1lT3ZlcigpXG5cdFx0Y29uc3Qgc3Vydml2ZWRUaW1lID0gTWF0aC5yb3VuZCh0aGlzLnRvdGFsVGltZUVsYXBzZWQgLyAxMCkgLyAxMDA7XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdGlmIChcblx0XHRcdHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0gfHxcblx0XHRcdHN1cnZpdmVkVGltZSA+IHNlY29uZFBsYWNlWzFdIHx8XG5cdFx0XHRzdXJ2aXZlZFRpbWUgPiB0aGlyZFBsYWNlWzFdXG5cdFx0KSB7XG5cdFx0XHR0aGlzLm5ld0hpZ2hTY29yZSA9IHRydWU7XG5cdFx0XHR0aGlzLmhpZ2hTY29yZUJveFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblx0XHRcdHRoaXMuaGlnaFNjb3JlSW5wdXRGaWVsZFswXS5mb2N1cygpO1xuXHRcdFx0dGhpcy5oaWdoU2NvcmVJbnB1dEZpZWxkWzBdLnNlbGVjdCgpO1xuXHRcdH1cblx0XHR0aGlzLmRlYWRTaGlwID0gdHJ1ZTtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuXHRcdHRoaXMuYXVkaW8udm9sdW1lID0gMC4xO1xuXHR9XG5cblx0YWRkSGlnaFNjb3JlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHN1cnZpdmVkVGltZSA9IE1hdGgucm91bmQodGhpcy50b3RhbFRpbWVFbGFwc2VkIC8gMTApIC8gMTAwO1xuXG5cdFx0bGV0IGhpZ2hTY29yZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdFx0J2hpZ2gtc2NvcmUtaW5wdXQtZmllbGQnXG5cdFx0KVswXTtcblx0XHRsZXQgaGlnaFNjb3JlTmFtZSA9IGhpZ2hTY29yZUlucHV0RmllbGQudmFsdWU7XG5cdFx0bGV0IG5ld1BsYXllciA9IFsgaGlnaFNjb3JlTmFtZSwgc3Vydml2ZWRUaW1lIF07XG5cdFx0bGV0IGZpcnN0UGxhY2UgPSB0aGlzLmhpZ2hTY29yZXNbMF07XG5cdFx0bGV0IHNlY29uZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzFdO1xuXHRcdGxldCB0aGlyZFBsYWNlID0gdGhpcy5oaWdoU2NvcmVzWzJdO1xuXG5cdFx0aWYgKHN1cnZpdmVkVGltZSA+IGZpcnN0UGxhY2VbMV0pIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBzZWNvbmRQbGFjZTtcblx0XHRcdHNlY29uZFBsYWNlID0gZmlyc3RQbGFjZTtcblx0XHRcdGZpcnN0UGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIGlmIChzdXJ2aXZlZFRpbWUgPiBzZWNvbmRQbGFjZVsxXSkge1xuXHRcdFx0dGhpcmRQbGFjZSA9IHNlY29uZFBsYWNlO1xuXHRcdFx0c2Vjb25kUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXJkUGxhY2UgPSBuZXdQbGF5ZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5oaWdoU2NvcmVzID0gWyBmaXJzdFBsYWNlLCBzZWNvbmRQbGFjZSwgdGhpcmRQbGFjZSBdO1xuXG5cdFx0Ly8gVE9ETyBtb3ZlIGludG8gb3duIGZ1bmN0aW9uXG5cdFx0Ly8gcmVhc3NpZ24gdG9wIHN1cnZpdm9yc1xuXHRcdC8vIGRlYnVnZ2VyXG5cdFx0dGhpcy5maXJzdFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgRmlyc3Q6ICR7Zmlyc3RQbGFjZVswXX1gO1xuXHRcdHRoaXMuZmlyc3RQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IGZpcnN0UGxhY2VbMV0udG9TdHJpbmcoKTtcblx0XHR0aGlzLnNlY29uZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgU2Vjb25kOiAke3NlY29uZFBsYWNlWzBdfWA7XG5cdFx0dGhpcy5zZWNvbmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHNlY29uZFBsYWNlWzFdLnRvU3RyaW5nKCk7XG5cdFx0dGhpcy50aGlyZFBsYWNlTmFtZVswXS5pbm5lclRleHQgPSBgVGhpcmQ6ICR7dGhpcmRQbGFjZVswXX1gO1xuXHRcdHRoaXMudGhpcmRQbGFjZVNjb3JlWzBdLmlubmVyVGV4dCA9IHRoaXJkUGxhY2VbMV0udG9TdHJpbmcoKTtcblxuXHRcdC8vIGRhdGFiYXNlIGxvZ2ljIGdvZXMgaGVyZVxuXG5cdFx0Ly8gY2xlYXIgZW50ZXJlZCBuYW1lIGFuZCByZXNldCBnYW1lIGxvZ2ljXG5cdFx0aGlnaFNjb3JlSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHRcdHRoaXMuaGlnaFNjb3JlQm94WzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdHRoaXMubmV3SGlnaFNjb3JlID0gZmFsc2U7XG5cdFx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0XHR0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jbGFzcyBHYW1lU3RhZ2Uge1xuXHRjb25zdHJ1Y3Rvcihjb250ZXh0LCBnYW1lKSB7XG5cdFx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5mcmFtZVJhdGUgPSA2MDtcblx0XHR0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcmFtZVJhdGU7XG5cdFx0dGhpcy5zZXRUaW1lID0gMDtcblx0XHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcblx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG5cdFx0dGhpcy5sb2FkU2NyZWVuID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKHRydWUpO1xuXHR9XG5cblx0dGlja2VyKHRpbWUpIHtcblx0XHRjb25zdCB7IGZyYW1lSW50ZXJ2YWwsIHNldFRpbWUgfSA9IHRoaXM7XG5cblx0XHQvLyBmcmFtZSBsaW1pdGVyXG5cdFx0bGV0IGN1clRpbWUgPSB0aW1lO1xuXHRcdGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cblx0XHQvLyBkcmF3IGZyYW1lXG5cdFx0aWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCkge1xuXHRcdFx0dGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5nYW1lLmRyYXcoKTtcblx0XHRcdHRoaXMuc2V0VGltZSA9IGN1clRpbWU7XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2tlci5iaW5kKHRoaXMpKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lU3RhZ2U7XG4iLCIvLyAyIHNlY29uZCBzcGF3biBpbnRlcnZhbHMgXG5leHBvcnQgY29uc3QgRUFTWV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAgXSxcbiAgICBbIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXVxuICBdLFxuICBbIFsgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCBdIFxuICBdLFxuICBbIFsgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCBdLFxuICAgIFsgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMSBdIFxuICBdLFxuICBbIFsgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCBdLCBcbiAgICBbIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEgXSBcbiAgXVxuXTtcblxuLy8gMSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IE1FRElVTV9QQVRURVJOUyA9IFtcblx0W1xuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSBdXG4gIF0sXG4gIFtcblx0XHRbIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAgXSxcblx0XHRbIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDAgXSxcblx0XHRbIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAgXVxuXHRdLFxuXHRbXG5cdFx0WyAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwIF0sXG5cdFx0WyAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxIF0sXG5cdFx0WyAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxIF0sXG5cdFx0WyAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwIF1cbiAgXSxcbiAgW1xuXHRcdFsgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCBdXG5cdF1cbl07XG5cbi8vIDAuNSBzZWNvbmQgaW50ZXJ2YWxzIFxuZXhwb3J0IGNvbnN0IEhBUkRfUEFUVEVSTlMgPSBbXG5cdFtcblx0XHRbIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDEgXSxcblx0XHRbIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAgXSxcbiAgICBbIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEgXSxcblx0XSxcblx0W1xuICAgIFsgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCBdLFxuICAgIFsgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSBdLFxuICAgIFsgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSBdLFxuICAgIFsgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSBdLFxuXHRcdFsgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCBdLFxuXHRcdFsgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMSBdLFxuXHRcdFsgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCBdXG5cdF1cbl07XG4iLCJjbGFzcyBXYWxsIHtcblx0Y29uc3RydWN0b3Iob2N0YW50LCBkaWZmaWN1bHR5KSB7XG5cdFx0dGhpcy5vY3RhbnQgPSBvY3RhbnQ7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLnNjYWxlID0gNDtcblx0XHQvLyB0aGlzLnNwZWVkID0gODtcblx0XHQvLyB0aGlzLmRlc2NhbGVGYWN0b3IgPSAwLjA4O1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdFx0dGhpcy5zcHJpdGUuc3JjID1cblx0XHRcdCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvdGhydXN0ZXItMi5wbmcnO1xuXHRcdGlmIChkaWZmaWN1bHR5ID09PSAnZWFzeScpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSA4O1xuXHRcdFx0dGhpcy5kZXNjYWxlRmFjdG9yID0gMC4wODtcblx0XHR9IGVsc2UgaWYgKGRpZmZpY3VsdHkgPT09ICdtZWRpdW0nKSB7XG5cdFx0XHR0aGlzLnNwZWVkID0gOTtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMDk7XG5cdFx0fSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSAnaGFyZCcpIHtcblx0XHRcdHRoaXMuc3BlZWQgPSAxMDtcblx0XHRcdHRoaXMuZGVzY2FsZUZhY3RvciA9IDAuMTtcblx0XHR9XG5cblx0XHR0aGlzLm9jdGFudExvZ2ljKG9jdGFudCk7XG5cdH1cblxuXHRvY3RhbnRMb2dpYyhvY3RhbnQpIHtcblx0XHRzd2l0Y2ggKG9jdGFudCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMCwgMzg0IF07XG5cdFx0XHRcdHRoaXMuZGVncmVlUm90YXRpb24gPSAtOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDE1Ny41LCAyMDIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IC00NTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gLTEyMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMDIuNSwgMjQ3LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRoaXMucG9zID0gWyAzODQsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyNDcuNSwgMjkyLjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDAgXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDQ1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMueW9mZnNldCA9IC0xMjA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyOTcuNSwgMzM2LjUgXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHRoaXMucG9zID0gWyA3NjgsIDM4NCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gOTA7XG5cdFx0XHRcdHRoaXMueG9mZnNldCA9IDEwMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5oaXRib3ggPSBbIDMzNi41LCAzNjAgXTtcblx0XHRcdFx0dGhpcy5oaXRib3gyID0gWyAwLCAyMi41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgNzY4LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDEzNTtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAtMzA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyAyMi41LCA2Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHR0aGlzLnBvcyA9IFsgMzg0LCA3NjggXTtcblx0XHRcdFx0dGhpcy5kZWdyZWVSb3RhdGlvbiA9IDE4MDtcblx0XHRcdFx0dGhpcy54b2Zmc2V0ID0gMTAwO1xuXHRcdFx0XHR0aGlzLnlvZmZzZXQgPSAxMDA7XG5cdFx0XHRcdHRoaXMuaGl0Ym94ID0gWyA2Ny41LCAxMTIuNSBdO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0dGhpcy5wb3MgPSBbIDAsIDc2OCBdO1xuXHRcdFx0XHR0aGlzLmRlZ3JlZVJvdGF0aW9uID0gMjI1O1xuXHRcdFx0XHR0aGlzLnhvZmZzZXQgPSAzMDtcblx0XHRcdFx0dGhpcy55b2Zmc2V0ID0gMTIwO1xuXHRcdFx0XHR0aGlzLmhpdGJveCA9IFsgMTEyLjUsIDE1Ny41IF07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG1vdmUodGhldGEpIHtcblx0XHRjb25zdCB7IGhpdGJveCwgaGl0Ym94MiB9ID0gdGhpcztcblxuXHRcdGlmICh0aGlzLnNjYWxlID4gMSArIHRoaXMuZGVzY2FsZUZhY3RvcikgdGhpcy5zY2FsZSAtPSB0aGlzLmRlc2NhbGVGYWN0b3I7XG5cdFx0bGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cdFx0bGV0IHBvc3ggPSB0aGlzLnBvc1swXTtcblx0XHRsZXQgcG9zeSA9IHRoaXMucG9zWzFdO1xuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCgoMzg0IC0gcG9zeCkgKiogMiArICgzODQgLSBwb3N5KSAqKiAyKTtcblx0XHQvLyBkZWJ1Z2dlclxuXG5cdFx0aWYgKHRoaXMub2N0YW50ID09PSAwIHx8IHRoaXMub2N0YW50ID09PSAyIHx8IHRoaXMub2N0YW50ID09PSA2KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gNzAgJiZcblx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwXG5cdFx0XHQpIHtcblx0XHRcdFx0Z2FtZU92ZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5vY3RhbnQgPT09IDQpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveFsxXSAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlID49IDcwICYmXG5cdFx0XHRcdFx0ZGlzdGFuY2UgPD0gMTIwKSB8fFxuXHRcdFx0XHQodGhldGEgPj0gaGl0Ym94MlswXSAmJlxuXHRcdFx0XHRcdHRoZXRhIDw9IGhpdGJveDJbMV0gJiZcblx0XHRcdFx0XHRkaXN0YW5jZSA+PSA3MCAmJlxuXHRcdFx0XHRcdGRpc3RhbmNlIDw9IDEyMClcblx0XHRcdCkge1xuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdHRoaXMub2N0YW50ID09PSAxIHx8XG5cdFx0XHR0aGlzLm9jdGFudCA9PT0gMyB8fFxuXHRcdFx0dGhpcy5vY3RhbnQgPT09IDUgfHxcblx0XHRcdHRoaXMub2N0YW50ID09PSA3XG5cdFx0KSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoZXRhID49IGhpdGJveFswXSAmJlxuXHRcdFx0XHR0aGV0YSA8PSBoaXRib3hbMV0gJiZcblx0XHRcdFx0ZGlzdGFuY2UgPj0gMTIwICYmXG5cdFx0XHRcdGRpc3RhbmNlIDw9IDE3MFxuXHRcdFx0KSB7XG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZHggPSAzODQgLSBwb3N4O1xuXHRcdGxldCBkeSA9IDM4NCAtIHBvc3k7XG5cdFx0Ly8gd2FsbHMgd2lsbCBjb252ZXJnZSB0b3dhcmRzIGNlbnRlclxuXHRcdGlmIChkeCA+IDApIHtcblx0XHRcdHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeCA8IDApIHtcblx0XHRcdHRoaXMucG9zWzBdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXHRcdGlmIChkeSA+IDApIHtcblx0XHRcdHRoaXMucG9zWzFdICs9IHRoaXMuc3BlZWQ7XG5cdFx0fSBlbHNlIGlmIChkeSA8IDApIHtcblx0XHRcdHRoaXMucG9zWzFdIC09IHRoaXMuc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRjb25zdCB7IHBvcyB9ID0gdGhpcztcblx0XHRsZXQgeCA9IHBvc1swXTtcblx0XHRsZXQgeSA9IHBvc1sxXTtcblxuXHRcdGN0eC50cmFuc2xhdGUoeCArIHRoaXMueG9mZnNldCAqIHRoaXMuc2NhbGUsIHkgKyB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlKTtcblx0XHRjdHgucm90YXRlKDIgKiBNYXRoLlBJIC8gMzYwICogKHRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5zcHJpdGUsXG5cdFx0XHQxMDAgKiB0aGlzLnNjYWxlIC8gMixcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGUgLyAyLFxuXHRcdFx0MTAwICogdGhpcy5zY2FsZSxcblx0XHRcdDEwMCAqIHRoaXMuc2NhbGVcblx0XHQpO1xuXHRcdGN0eC5yb3RhdGUoMiAqIE1hdGguUEkgLyAzNjAgKiAoLXRoaXMuZGVncmVlUm90YXRpb24gJSAzNjApKTtcblx0XHRjdHgudHJhbnNsYXRlKFxuXHRcdFx0LXggLSB0aGlzLnhvZmZzZXQgKiB0aGlzLnNjYWxlLFxuXHRcdFx0LXkgLSB0aGlzLnlvZmZzZXQgKiB0aGlzLnNjYWxlXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhbGw7XG4iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGxzJztcblxuY2xhc3MgV2F2ZSB7XG5cdGNvbnN0cnVjdG9yKHBhdHRlcm4sIGRpZmZpY3VsdHkpIHtcblx0XHR0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuXHRcdHRoaXMuZW5kID0gZmFsc2U7XG5cdFx0dGhpcy5zdWJ3YXZlVGltZXIgPSAwO1xuXHRcdHRoaXMuY3VycmVudFN1YndhdmUgPSAwO1xuXHRcdHRoaXMud2FsbHMgPSB0aGlzLmFkZFdhbGxzKGRpZmZpY3VsdHkpO1xuXHRcdHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG5cdH1cblxuXHRhZGRXYWxscyhkaWZmaWN1bHR5KSB7XG5cdFx0bGV0IHdhbGxzID0gW107XG5cdFx0Y29uc3QgeyBwYXR0ZXJuIH0gPSB0aGlzO1xuXG5cdFx0Zm9yIChsZXQgb2N0YW50ID0gMDsgb2N0YW50IDwgODsgb2N0YW50KyspIHtcblx0XHRcdGlmIChwYXR0ZXJuW29jdGFudF0gPT09IDEpIHtcblx0XHRcdFx0bGV0IG5ld1dhbGwgPSBuZXcgV2FsbChvY3RhbnQsIGRpZmZpY3VsdHkpO1xuXHRcdFx0XHR3YWxscy5wdXNoKG5ld1dhbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2FsbHMucHVzaChudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gd2FsbHM7XG5cdH1cblxuXHRtb3ZlKGRlZ3JlZXMsIGdhbWUpIHtcblx0XHQvLyBoaXRib3ggbG9naWMgaWYgYW55IG9mIHRoZSB3YWxscyB0b3VjaCBjdXJzb3IsIHNldCBnYW1lT3ZlciA9IHRydWVcblx0XHRsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy53YWxsc1tpXSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodGhpcy53YWxsc1tpXS5tb3ZlKGRlZ3JlZXMsIGdhbWUpKSBnYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdhbWVPdmVyO1xuXHR9XG5cblx0ZHJhdyhjdHgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMud2FsbHNbaV0gIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy53YWxsc1tpXS5kcmF3KGN0eCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9