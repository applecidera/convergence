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
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_game__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_gamestage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gamestage */ "./src/js/gamestage.js");
/* harmony import */ var _js_gamestage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_gamestage__WEBPACK_IMPORTED_MODULE_2__);



var canvas = document.getElementById('stage');
canvas.width = 768;
canvas.height = 768;
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over'; // instantiate game

var game = new _js_game__WEBPACK_IMPORTED_MODULE_1___default.a(ctx);
var gamestage = new _js_gamestage__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, game);
gamestage.ticker();

/***/ }),

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// player controls
function Controls(game) {
  this.game = game;
  this.degrees = 0;
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
  this.bigLogo = document.getElementsByClassName("start-game-logo"); // this.bigLogo[0].classList.remove("start-game-logo");

  this.smallLogo = document.getElementsByClassName("title-box"); // this.smallLogo[0].classList.remove("title-box-fade-out");

  this.gameInfo = document.getElementsByClassName("start-game-info");
}

Controls.prototype.enablePlayerControls = function () {
  document.removeEventListener('keydown', this.startGame);
  document.addEventListener('keydown', this.keyDown);
  document.addEventListener('keyup', this.keyUp);
};

Controls.prototype.disablePlayerControls = function () {
  document.removeEventListener('keydown', this.keyDown);
  document.removeEventListener('keyup', this.keyUp);
  document.addEventListener('keydown', this.startGame);
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
  }
};

Controls.prototype.startGame = function (e) {
  if (e.code === "Space") this.enablePlayerControls();
  this.game.startNewGame();
  this.bigLogo[0].classList.remove("start-game-logo-fade-in");
  this.bigLogo[0].classList.add("start-game-logo-fade-out");
  this.smallLogo[0].classList.remove("title-box-fade-in");
  this.smallLogo[0].classList.add("title-box-fade-out");
  this.gameInfo[0].classList.remove("start-game-info-fade-in");
  this.gameInfo[0].classList.add("start-game-info-fade-out");
};

Controls.prototype.gameOver = function () {
  this.disablePlayerControls();
  this.game.gameOver();
  this.bigLogo[0].classList.remove("start-game-logo-fade-out");
  this.bigLogo[0].classList.add("start-game-logo-fade-in");
  this.smallLogo[0].classList.remove("title-box-fade-out");
  this.smallLogo[0].classList.add("title-box-fade-in");
  this.gameInfo[0].classList.remove("start-game-info-fade-out");
  this.gameInfo[0].classList.add("start-game-info-fade-in");
};

module.exports = Controls;

/***/ }),

/***/ "./src/js/cursor.js":
/*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Cursor(context) {
  this.degrees = 0;
  this.cursorSpeed = 5;
  this.position = [];
  this.cursor = new Image();
  this.cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
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

Cursor.prototype.collisionDetect = function () {// TODO some sort of hitbox logic
};

Cursor.prototype.draw = function (ctx, dim_x, dim_y) {
  ctx.beginPath();
  ctx.translate(dim_x / 2, dim_y / 2);
  ctx.rotate(2 * Math.PI / 360 * (this.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(this.cursor, 0, -35);
};

module.exports = Cursor;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Controls = __webpack_require__(/*! ./controls */ "./src/js/controls.js");

var Cursor = __webpack_require__(/*! ./cursor */ "./src/js/cursor.js"); // initializer


function Game(context) {
  var _this = this;

  this.isGameOver = true;
  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.elapsedTime = 0;
  this.totalTimeElapsed = 0;
  this.waves = [];
  this.waveInterval = 0;
  this.difficulty = "easy";
  this.gameState = false;
  this.sunMap = new Image();
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
  this.timer = document.getElementsByClassName("timer");
}

Game.prototype.logic = function (frameInterval) {
  var controls = this.controls,
      cursor = this.cursor;

  if (controls.state.left.active) {
    cursor.moveCursor("cclockwise");
  } else if (controls.state.right.active) {
    cursor.moveCursor("clockwise");
  }

  this.timerCounter(frameInterval); // TODO uncomment when finished
  // this.waveLogic(frameInterval);
  // this.waveMovement();
};

Game.prototype.draw = function () {
  var dim_x = this.dim_x,
      dim_y = this.dim_y,
      ctx = this.ctx,
      warpGate = this.warpGate,
      warpGateIndex = this.warpGateIndex,
      sunMap = this.sunMap;
  ctx.clearRect(0, 0, dim_x, dim_y); // clear canvas

  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'blue';
  ctx.save(); // Cursor

  this.cursor.draw(ctx, dim_x, dim_y);
  this.ctx.restore(); // Waves
  // this.waves.forEach((wave){
  // 	wave.draw();
  // })
  // Earth orbit

  this.ctx.beginPath();
  this.ctx.arc(dim_x / 2, dim_y / 2, 105, 0, Math.PI * 2, false);
  this.ctx.stroke(); // Warpgate

  this.ctx.drawImage(warpGate[warpGateIndex], dim_x / 4 + 97.5, dim_y / 4 + 97.5, dim_x / 4, dim_y / 4); // Map

  this.ctx.drawImage(sunMap, 0, 0, dim_x, dim_y);
};

Game.prototype.addCursor = function () {
  // or make a variable cursor, add to an "add function that parses by object type so you can add different types of objects?"
  this.cursor = new Cursor();
  return this.cursor;
};

Game.prototype.addControls = function () {
  this.controls = new Controls(this);
  return this.controls;
};

Game.prototype.addWave = function (frameInterval) {
  var elapsedTime = this.elapsedTime,
      waveInterval = this.waveInterval;

  if (elapsedTime > waveInterval) {
    // TODO launch next wave
    var newWave = new Wave(this.difficulty);
    this.waves.push(newWave);
    this.elapsedTime = 0; // TODO create new waveInterval based on difficulty

    this.waveInterval = 10 * 1000;
  } else {} // increment elapsedTime


  this.elapsedTime += frameInterval;
};

Game.prototype.removeWave = function () {
  var waves = this.waves;
  waves.forEach(function (wave) {
    wave.remove();
  });
};

Game.prototype.waveLogic = function () {
  var _this2 = this;

  this.addWave(frameInterval);
  var waves = this.waves;
  waves.forEach(function (wave) {
    // if any return true, call this.gameOver()
    if (wave.move()) _this2.gameOver();
  });
};

Game.prototype.timerCounter = function (timeElapsed) {
  this.totalTimeElapsed += timeElapsed;
  var roundedTime = Math.round(this.totalTimeElapsed / 10) / 100;
  this.timer[0].innerHTML = roundedTime.toString();
};

Game.prototype.startNewGame = function () {
  this.elapsedTime = 0;
  this.waves = [];
  this.totalTimeElapsed = 0;
  this.isGameOver = false;
};

Game.prototype.gameOver = function () {
  // option to play again, calls start new game
  this.isGameOver = true;
};

module.exports = Game;

/***/ }),

/***/ "./src/js/gamestage.js":
/*!*****************************!*\
  !*** ./src/js/gamestage.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function GameStage(context, game) {
  this.ctx = context;
  this.game = game;
  this.frameRate = 60;
  this.frameInterval = 1000 / this.frameRate;
  this.setTime = 0;
  this.cursor = this.game.addCursor();
  this.controls = this.game.addControls();
  this.controls.gameOver();
}

GameStage.prototype.ticker = function () {
  var frameInterval = this.frameInterval,
      setTime = this.setTime; // time-limit

  var curTime = Date.now();
  var timeDif = curTime - setTime; // frame limiter

  if (timeDif >= frameInterval && !this.game.isGameOver) {
    this.game.logic(frameInterval);
    this.game.draw();
    this.setTime = curTime;
  }

  window.requestAnimationFrame(this.ticker.bind(this));
};

module.exports = GameStage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwiZGVncmVlcyIsInN0YXRlIiwibGVmdCIsImFjdGl2ZSIsInJpZ2h0IiwiZGlzYWJsZVBsYXllckNvbnRyb2xzIiwiYmluZCIsImVuYWJsZVBsYXllckNvbnRyb2xzIiwia2V5RG93biIsImtleVVwIiwic3RhcnRHYW1lIiwiZ2FtZU92ZXIiLCJiaWdMb2dvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNtYWxsTG9nbyIsImdhbWVJbmZvIiwicHJvdG90eXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsInN0YXJ0TmV3R2FtZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJDdXJzb3IiLCJjb250ZXh0IiwiY3Vyc29yU3BlZWQiLCJwb3NpdGlvbiIsImN1cnNvciIsIkltYWdlIiwic3JjIiwibW92ZUN1cnNvciIsImRpcmVjdGlvbiIsImNvbGxpc2lvbkRldGVjdCIsImRyYXciLCJkaW1feCIsImRpbV95IiwiYmVnaW5QYXRoIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVxdWlyZSIsImlzR2FtZU92ZXIiLCJlbGFwc2VkVGltZSIsInRvdGFsVGltZUVsYXBzZWQiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsImRpZmZpY3VsdHkiLCJnYW1lU3RhdGUiLCJzdW5NYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJ0aW1lciIsImxvZ2ljIiwiZnJhbWVJbnRlcnZhbCIsImNvbnRyb2xzIiwidGltZXJDb3VudGVyIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwicmVzdG9yZSIsImFyYyIsInN0cm9rZSIsImFkZEN1cnNvciIsImFkZENvbnRyb2xzIiwiYWRkV2F2ZSIsIm5ld1dhdmUiLCJXYXZlIiwicHVzaCIsInJlbW92ZVdhdmUiLCJmb3JFYWNoIiwid2F2ZSIsIndhdmVMb2dpYyIsIm1vdmUiLCJ0aW1lRWxhcHNlZCIsInJvdW5kZWRUaW1lIiwicm91bmQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsImZyYW1lUmF0ZSIsInNldFRpbWUiLCJjdXJUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVEaWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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YUFBTCxHQUFxQixPQUFLLEtBQUswQixTQUEvQjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSzVELE1BQUwsR0FBYyxLQUFLckMsSUFBTCxDQUFVZ0YsU0FBVixFQUFkO0FBQ0EsT0FBS1QsUUFBTCxHQUFnQixLQUFLdkUsSUFBTCxDQUFVaUYsV0FBVixFQUFoQjtBQUNBLE9BQUtWLFFBQUwsQ0FBY3RELFFBQWQ7QUFDRDs7QUFFRGQsU0FBUyxDQUFDbUIsU0FBVixDQUFvQmxCLE1BQXBCLEdBQTZCLFlBQVU7QUFBQSxNQUM5QmtFLGFBRDhCLEdBQ0osSUFESSxDQUM5QkEsYUFEOEI7QUFBQSxNQUNmMkIsT0FEZSxHQUNKLElBREksQ0FDZkEsT0FEZSxFQUlyQzs7QUFDQSxNQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHSCxPQUFPLEdBQUdELE9BQXhCLENBTnFDLENBUXJDOztBQUNBLE1BQUlJLE9BQU8sSUFBSS9CLGFBQVgsSUFBNEIsQ0FBQyxLQUFLdEUsSUFBTCxDQUFVcUQsVUFBM0MsRUFBc0Q7QUFDcEQsU0FBS3JELElBQUwsQ0FBVXFFLEtBQVYsQ0FBZ0JDLGFBQWhCO0FBQ0EsU0FBS3RFLElBQUwsQ0FBVTJDLElBQVY7QUFDQSxTQUFLc0QsT0FBTCxHQUFlQyxPQUFmO0FBQ0Q7O0FBRURJLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkIsS0FBS25HLE1BQUwsQ0FBWVEsSUFBWixDQUFpQixJQUFqQixDQUE3QjtBQUNELENBaEJEOztBQWtCQW1CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdCLFNBQWpCLEM7Ozs7Ozs7Ozs7O0FDOUJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbmNhbnZhcy53aWR0aCA9IDc2ODtcbmNhbnZhcy5oZWlnaHQgPSA3Njg7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoZ2FtZSl7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZGVncmVlcyA9IDA7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gIHRoaXMuYmlnTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFydC1nYW1lLWxvZ29cIik7XG4gIC8vIHRoaXMuYmlnTG9nb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvXCIpO1xuICB0aGlzLnNtYWxsTG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aXRsZS1ib3hcIik7XG4gIC8vIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3RhcnQtZ2FtZS1pbmZvXCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZ2FtZS5zdGFydE5ld0dhbWUoKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1vdXRcIik7XG4gIHRoaXMuc21hbGxMb2dvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZS1ib3gtZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5nYW1lSW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1pbmZvLWZhZGUtaW5cIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLW91dFwiKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xuICB0aGlzLmJpZ0xvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgdGhpcy5iaWdMb2dvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgdGhpcy5zbWFsbExvZ29bMF0uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xuICB0aGlzLmdhbWVJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGFydC1nYW1lLWluZm8tZmFkZS1vdXRcIik7XG4gIHRoaXMuZ2FtZUluZm9bMF0uY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWUtaW5mby1mYWRlLWluXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDA7IFxuICB0aGlzLmN1cnNvclNwZWVkID0gNTtcbiAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJjb25zdCBDb250cm9scyA9IHJlcXVpcmUoJy4vY29udHJvbHMnKTtcbmNvbnN0IEN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyk7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy50b3RhbFRpbWVFbGFwc2VkID0gMDtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLndhdmVJbnRlcnZhbCA9IDA7XG5cdHRoaXMuZGlmZmljdWx0eSA9IFwiZWFzeVwiO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gW3RoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTNdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG5cdHRoaXMudGltZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGltZXJcIik7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdGNvbnN0IHtjb250cm9scywgY3Vyc29yfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjY2xvY2t3aXNlXCIpO1xuXHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjbG9ja3dpc2VcIik7XG5cdH1cblxuXHR0aGlzLnRpbWVyQ291bnRlcihmcmFtZUludGVydmFsKTtcblxuXHQvLyBUT0RPIHVuY29tbWVudCB3aGVuIGZpbmlzaGVkXG5cdC8vIHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHQvLyB0aGlzLndhdmVNb3ZlbWVudCgpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSlcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0Ly8gdGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKXtcblx0Ly8gXHR3YXZlLmRyYXcoKTtcblx0Ly8gfSlcblxuICAvLyBFYXJ0aCBvcmJpdFxuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguYXJjKGRpbV94LzIsIGRpbV95LzIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgXG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLCBkaW1feC80ICsgOTcuNSwgZGltX3kvNCArIDk3LjUsZGltX3gvNCwgZGltX3kvNClcblx0XG5cdC8vIE1hcFxuICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXG59XG5cbkdhbWUucHJvdG90eXBlLmFkZEN1cnNvciA9IGZ1bmN0aW9uKCl7XG5cdC8vIG9yIG1ha2UgYSB2YXJpYWJsZSBjdXJzb3IsIGFkZCB0byBhbiBcImFkZCBmdW5jdGlvbiB0aGF0IHBhcnNlcyBieSBvYmplY3QgdHlwZSBzbyB5b3UgY2FuIGFkZCBkaWZmZXJlbnQgdHlwZXMgb2Ygb2JqZWN0cz9cIlxuXHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblxuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzKTtcblxuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn1cblxuR2FtZS5wcm90b3R5cGUuYWRkV2F2ZSA9IGZ1bmN0aW9uKGZyYW1lSW50ZXJ2YWwpe1xuXHRjb25zdCB7ZWxhcHNlZFRpbWUsIHdhdmVJbnRlcnZhbH0gPSB0aGlzO1xuXHRpZiAoZWxhcHNlZFRpbWUgPiB3YXZlSW50ZXJ2YWwpe1xuXHRcdC8vIFRPRE8gbGF1bmNoIG5leHQgd2F2ZVxuXHRcdGxldCBuZXdXYXZlID0gbmV3IFdhdmUodGhpcy5kaWZmaWN1bHR5KTtcblx0XHR0aGlzLndhdmVzLnB1c2gobmV3V2F2ZSk7XG5cdFx0dGhpcy5lbGFwc2VkVGltZSA9IDA7XG5cdFx0Ly8gVE9ETyBjcmVhdGUgbmV3IHdhdmVJbnRlcnZhbCBiYXNlZCBvbiBkaWZmaWN1bHR5XG5cdFx0dGhpcy53YXZlSW50ZXJ2YWwgPSAxMCAqIDEwMDA7XG5cdH0gZWxzZSB7XG5cblx0fVxuXG5cdC8vIGluY3JlbWVudCBlbGFwc2VkVGltZVxuXHR0aGlzLmVsYXBzZWRUaW1lICs9IGZyYW1lSW50ZXJ2YWw7XG59XG5cbkdhbWUucHJvdG90eXBlLnJlbW92ZVdhdmUgPSBmdW5jdGlvbigpe1xuXHRjb25zdCB7d2F2ZXN9ID0gdGhpcztcblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSk9Pntcblx0XHR3YXZlLnJlbW92ZSgpO1xuXHR9KVxufVxuXG5HYW1lLnByb3RvdHlwZS53YXZlTG9naWMgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmFkZFdhdmUoZnJhbWVJbnRlcnZhbCk7XG5cblx0Y29uc3Qge3dhdmVzfSA9IHRoaXM7XG5cdHdhdmVzLmZvckVhY2goKHdhdmUpPT57XG5cdFx0Ly8gaWYgYW55IHJldHVybiB0cnVlLCBjYWxsIHRoaXMuZ2FtZU92ZXIoKVxuXHRcdGlmICh3YXZlLm1vdmUoKSkgdGhpcy5nYW1lT3ZlcigpO1xuXHRcdFxuXHR9KVxufVxuXG5HYW1lLnByb3RvdHlwZS50aW1lckNvdW50ZXIgPSBmdW5jdGlvbih0aW1lRWxhcHNlZCl7XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcblx0bGV0IHJvdW5kZWRUaW1lID0gKChNYXRoLnJvdW5kKHRoaXMudG90YWxUaW1lRWxhcHNlZC8xMCkpLzEwMCk7XG5cdHRoaXMudGltZXJbMF0uaW5uZXJIVE1MID0gcm91bmRlZFRpbWUudG9TdHJpbmcoKTtcblx0XG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG5cdHRoaXMudG90YWxUaW1lRWxhcHNlZCA9IDA7XG5cdHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xufVxuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCl7XG5cdC8vIG9wdGlvbiB0byBwbGF5IGFnYWluLCBjYWxscyBzdGFydCBuZXcgZ2FtZVxuXHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJcbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCB7ZnJhbWVJbnRlcnZhbCwgc2V0VGltZX0gPSB0aGlzO1xuXG5cbiAgLy8gdGltZS1saW1pdFxuICBsZXQgY3VyVGltZSA9IERhdGUubm93KCk7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gZnJhbWUgbGltaXRlclxuICBpZiAodGltZURpZiA+PSBmcmFtZUludGVydmFsICYmICF0aGlzLmdhbWUuaXNHYW1lT3Zlcil7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVN0YWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=