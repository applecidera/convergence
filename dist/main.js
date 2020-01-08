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
function Controls() {
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
  this.gameOver = this.gameOver.bind(this); // this.bigLogo = document.getElementsByClassName("start-game-logo");
  // this.smallLogo = document.getElementsByClassName("title-box");
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
  if (e.code === "Space") this.enablePlayerControls(); // this.bigLogo.classList.remove("start-game-logo-fade-in");
  // this.bigLogo.classList.add("start-game-logo-fade-out");
  // this.smallLogo.classList.remove("title-box-fade-in");
  // this.smallLogo.classList.add("title-box-fade-out");
};

Controls.prototype.gameOver = function () {
  this.disablePlayerControls(); // this.bigLogo.classList.remove("start-game-logo-fade-out");
  // this.bigLogo.classList.add("start-game-logo-fade-in");
  // this.smallLogo.classList.remove("title-box-fade-out");
  // this.smallLogo.classList.add("title-box-fade-in");
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

  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.elapsedTime = 0;
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
}

Game.prototype.logic = function (frameInterval) {
  var controls = this.controls,
      cursor = this.cursor;

  if (controls.state.left.active) {
    cursor.moveCursor("cclockwise");
  } else if (controls.state.right.active) {
    cursor.moveCursor("clockwise");
  } // TODO uncomment when finished
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
  this.controls = new Controls();
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
  this.addWave(frameInterval);
  var waves = this.waves;
  waves.forEach(function (wave) {
    wave.move();
  });
};

Game.prototype.timer = function () {};

Game.prototype.startNewGame = function () {
  this.elapsedTime = 0;
  this.waves = [];
};

Game.prototype.gameOver = function () {// resets the playfield
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
      setTime = this.setTime; //Stepper

  var curTime = Date.now();
  var timeDif = curTime - setTime; // skip logic and draw if not time yet

  if (timeDif >= frameInterval) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwiZGVncmVlcyIsInN0YXRlIiwibGVmdCIsImFjdGl2ZSIsInJpZ2h0IiwiZGlzYWJsZVBsYXllckNvbnRyb2xzIiwiYmluZCIsImVuYWJsZVBsYXllckNvbnRyb2xzIiwia2V5RG93biIsImtleVVwIiwic3RhcnRHYW1lIiwiZ2FtZU92ZXIiLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkN1cnNvciIsImNvbnRleHQiLCJjdXJzb3JTcGVlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiSW1hZ2UiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uRGV0ZWN0IiwiZHJhdyIsImRpbV94IiwiZGltX3kiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXF1aXJlIiwiZWxhcHNlZFRpbWUiLCJ3YXZlcyIsIndhdmVJbnRlcnZhbCIsImRpZmZpY3VsdHkiLCJnYW1lU3RhdGUiLCJzdW5NYXAiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZUluZGV4Iiwid2FycEdhdGUiLCJ3YXJwR2F0ZVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsb2dpYyIsImZyYW1lSW50ZXJ2YWwiLCJjb250cm9scyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInJlc3RvcmUiLCJhcmMiLCJzdHJva2UiLCJhZGRDdXJzb3IiLCJhZGRDb250cm9scyIsImFkZFdhdmUiLCJuZXdXYXZlIiwiV2F2ZSIsInB1c2giLCJyZW1vdmVXYXZlIiwiZm9yRWFjaCIsIndhdmUiLCJyZW1vdmUiLCJ3YXZlTG9naWMiLCJtb3ZlIiwidGltZXIiLCJzdGFydE5ld0dhbWUiLCJmcmFtZVJhdGUiLCJzZXRUaW1lIiwiY3VyVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRGlmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RB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LEVBQW1DO0FBQ2pDLE9BQUtILEdBQUwsR0FBVzZCLE9BQVg7QUFDQSxPQUFLMUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS2tGLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLdkIsYUFBTCxHQUFxQixPQUFLLEtBQUt1QixTQUEvQjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBS3RELE1BQUwsR0FBYyxLQUFLN0IsSUFBTCxDQUFVb0UsU0FBVixFQUFkO0FBQ0EsT0FBS1IsUUFBTCxHQUFnQixLQUFLNUQsSUFBTCxDQUFVcUUsV0FBVixFQUFoQjtBQUNBLE9BQUtULFFBQUwsQ0FBYzNDLFFBQWQ7QUFDRDs7QUFFRGQsU0FBUyxDQUFDZSxTQUFWLENBQW9CZCxNQUFwQixHQUE2QixZQUFVO0FBQUEsTUFDOUJ1RCxhQUQ4QixHQUNKLElBREksQ0FDOUJBLGFBRDhCO0FBQUEsTUFDZndCLE9BRGUsR0FDSixJQURJLENBQ2ZBLE9BRGUsRUFJckM7O0FBQ0EsTUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBR0gsT0FBTyxHQUFHRCxPQUF4QixDQU5xQyxDQVFyQzs7QUFDQSxNQUFJSSxPQUFPLElBQUk1QixhQUFmLEVBQTZCO0FBQzNCLFNBQUszRCxJQUFMLENBQVUwRCxLQUFWLENBQWdCQyxhQUFoQjtBQUNBLFNBQUszRCxJQUFMLENBQVVtQyxJQUFWO0FBQ0EsU0FBS2dELE9BQUwsR0FBZUMsT0FBZjtBQUNEOztBQUVESSxRQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtyRixNQUFMLENBQVlRLElBQVosQ0FBaUIsSUFBakIsQ0FBN0I7QUFDRCxDQWhCRDs7QUFrQkFXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFNBQWpCLEM7Ozs7Ozs7Ozs7O0FDOUJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbmNhbnZhcy53aWR0aCA9IDc2ODtcbmNhbnZhcy5oZWlnaHQgPSA3Njg7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoKXtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5VXAgPSB0aGlzLmtleVVwLmJpbmQodGhpcyk7XG4gIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgLy8gdGhpcy5iaWdMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0LWdhbWUtbG9nb1wiKTtcbiAgLy8gdGhpcy5zbWFsbExvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGUtYm94XCIpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIC8vIHRoaXMuYmlnTG9nby5jbGFzc0xpc3QucmVtb3ZlKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtaW5cIik7XG4gIC8vIHRoaXMuYmlnTG9nby5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZS1sb2dvLWZhZGUtb3V0XCIpO1xuICAvLyB0aGlzLnNtYWxsTG9nby5jbGFzc0xpc3QucmVtb3ZlKFwidGl0bGUtYm94LWZhZGUtaW5cIik7XG4gIC8vIHRoaXMuc21hbGxMb2dvLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1ib3gtZmFkZS1vdXRcIik7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICAvLyB0aGlzLmJpZ0xvZ28uY2xhc3NMaXN0LnJlbW92ZShcInN0YXJ0LWdhbWUtbG9nby1mYWRlLW91dFwiKTtcbiAgLy8gdGhpcy5iaWdMb2dvLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lLWxvZ28tZmFkZS1pblwiKTtcbiAgLy8gdGhpcy5zbWFsbExvZ28uY2xhc3NMaXN0LnJlbW92ZShcInRpdGxlLWJveC1mYWRlLW91dFwiKTtcbiAgLy8gdGhpcy5zbWFsbExvZ28uY2xhc3NMaXN0LmFkZChcInRpdGxlLWJveC1mYWRlLWluXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzOyIsImZ1bmN0aW9uIEN1cnNvcihjb250ZXh0KSB7XG4gIHRoaXMuZGVncmVlcyA9IDA7IFxuICB0aGlzLmN1cnNvclNwZWVkID0gNTtcbiAgdGhpcy5wb3NpdGlvbiA9IFtdO1xuICB0aGlzLmN1cnNvciA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLmN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5tb3ZlQ3Vyc29yID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIFwiY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIFxuICAgIGNhc2UgXCJjY2xvY2t3aXNlXCI6XG4gICAgICB0aGlzLmRlZ3JlZXMgLT0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5jb2xsaXNpb25EZXRlY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUT0RPIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJjb25zdCBDb250cm9scyA9IHJlcXVpcmUoJy4vY29udHJvbHMnKTtcbmNvbnN0IEN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyk7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0dGhpcy53YXZlcyA9IFtdO1xuXHR0aGlzLndhdmVJbnRlcnZhbCA9IDA7XG5cdHRoaXMuZGlmZmljdWx0eSA9IFwiZWFzeVwiO1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gW3RoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTNdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdGNvbnN0IHtjb250cm9scywgY3Vyc29yfSA9IHRoaXM7XG5cdGlmIChjb250cm9scy5zdGF0ZS5sZWZ0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjY2xvY2t3aXNlXCIpO1xuXHR9IGVsc2UgaWYgKGNvbnRyb2xzLnN0YXRlLnJpZ2h0LmFjdGl2ZSl7XG5cdFx0Y3Vyc29yLm1vdmVDdXJzb3IoXCJjbG9ja3dpc2VcIik7XG5cdH1cblxuXHQvLyBUT0RPIHVuY29tbWVudCB3aGVuIGZpbmlzaGVkXG5cdC8vIHRoaXMud2F2ZUxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuXHQvLyB0aGlzLndhdmVNb3ZlbWVudCgpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcblx0Y3R4LnNhdmUoKTtcblxuXHQvLyBDdXJzb3Jcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSlcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cblx0Ly8gV2F2ZXNcblx0Ly8gdGhpcy53YXZlcy5mb3JFYWNoKCh3YXZlKXtcblx0Ly8gXHR3YXZlLmRyYXcoKTtcblx0Ly8gfSlcblxuICAvLyBFYXJ0aCBvcmJpdFxuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguYXJjKGRpbV94LzIsIGRpbV95LzIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgXG5cdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHRcblx0Ly8gV2FycGdhdGVcblx0dGhpcy5jdHguZHJhd0ltYWdlKHdhcnBHYXRlW3dhcnBHYXRlSW5kZXhdLCBkaW1feC80ICsgOTcuNSwgZGltX3kvNCArIDk3LjUsZGltX3gvNCwgZGltX3kvNClcblx0XG5cdC8vIE1hcFxuICB0aGlzLmN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBkaW1feCwgZGltX3kpO1xuXG59XG5cbkdhbWUucHJvdG90eXBlLmFkZEN1cnNvciA9IGZ1bmN0aW9uKCl7XG5cdC8vIG9yIG1ha2UgYSB2YXJpYWJsZSBjdXJzb3IsIGFkZCB0byBhbiBcImFkZCBmdW5jdGlvbiB0aGF0IHBhcnNlcyBieSBvYmplY3QgdHlwZSBzbyB5b3UgY2FuIGFkZCBkaWZmZXJlbnQgdHlwZXMgb2Ygb2JqZWN0cz9cIlxuXHR0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoKTtcblxuXHRyZXR1cm4gdGhpcy5jdXJzb3I7XG59XG5cbkdhbWUucHJvdG90eXBlLmFkZENvbnRyb2xzID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scygpO1xuXG5cdHJldHVybiB0aGlzLmNvbnRyb2xzO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRXYXZlID0gZnVuY3Rpb24oZnJhbWVJbnRlcnZhbCl7XG5cdGNvbnN0IHtlbGFwc2VkVGltZSwgd2F2ZUludGVydmFsfSA9IHRoaXM7XG5cdGlmIChlbGFwc2VkVGltZSA+IHdhdmVJbnRlcnZhbCl7XG5cdFx0Ly8gVE9ETyBsYXVuY2ggbmV4dCB3YXZlXG5cdFx0bGV0IG5ld1dhdmUgPSBuZXcgV2F2ZSh0aGlzLmRpZmZpY3VsdHkpO1xuXHRcdHRoaXMud2F2ZXMucHVzaChuZXdXYXZlKTtcblx0XHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0XHQvLyBUT0RPIGNyZWF0ZSBuZXcgd2F2ZUludGVydmFsIGJhc2VkIG9uIGRpZmZpY3VsdHlcblx0XHR0aGlzLndhdmVJbnRlcnZhbCA9IDEwICogMTAwMDtcblx0fSBlbHNlIHtcblxuXHR9XG5cblx0Ly8gaW5jcmVtZW50IGVsYXBzZWRUaW1lXG5cdHRoaXMuZWxhcHNlZFRpbWUgKz0gZnJhbWVJbnRlcnZhbDtcbn1cblxuR2FtZS5wcm90b3R5cGUucmVtb3ZlV2F2ZSA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IHt3YXZlc30gPSB0aGlzO1xuXHR3YXZlcy5mb3JFYWNoKCh3YXZlKT0+e1xuXHRcdHdhdmUucmVtb3ZlKCk7XG5cdH0pXG59XG5cbkdhbWUucHJvdG90eXBlLndhdmVMb2dpYyA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuYWRkV2F2ZShmcmFtZUludGVydmFsKTtcblxuXHRjb25zdCB7d2F2ZXN9ID0gdGhpcztcblx0d2F2ZXMuZm9yRWFjaCgod2F2ZSk9Pntcblx0XHR3YXZlLm1vdmUoKTtcblx0fSlcbn1cblxuR2FtZS5wcm90b3R5cGUudGltZXIgPSBmdW5jdGlvbigpe1xuXG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZWxhcHNlZFRpbWUgPSAwO1xuXHR0aGlzLndhdmVzID0gW107XG59XG5cbkdhbWUucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKXtcblx0Ly8gcmVzZXRzIHRoZSBwbGF5ZmllbGRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiXG5mdW5jdGlvbiBHYW1lU3RhZ2UgKGNvbnRleHQsIGdhbWUpIHtcbiAgdGhpcy5jdHggPSBjb250ZXh0O1xuICB0aGlzLmdhbWUgPSBnYW1lO1xuICB0aGlzLmZyYW1lUmF0ZSA9IDYwO1xuICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwL3RoaXMuZnJhbWVSYXRlO1xuICB0aGlzLnNldFRpbWUgPSAwO1xuICB0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbiAgdGhpcy5jb250cm9scyA9IHRoaXMuZ2FtZS5hZGRDb250cm9scygpO1xuICB0aGlzLmNvbnRyb2xzLmdhbWVPdmVyKCk7XG59XG5cbkdhbWVTdGFnZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qge2ZyYW1lSW50ZXJ2YWwsIHNldFRpbWV9ID0gdGhpcztcblxuXG4gIC8vU3RlcHBlclxuICBsZXQgY3VyVGltZSA9IERhdGUubm93KCk7XG4gIGxldCB0aW1lRGlmID0gY3VyVGltZSAtIHNldFRpbWU7XG5cbiAgLy8gc2tpcCBsb2dpYyBhbmQgZHJhdyBpZiBub3QgdGltZSB5ZXRcbiAgaWYgKHRpbWVEaWYgPj0gZnJhbWVJbnRlcnZhbCl7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKGZyYW1lSW50ZXJ2YWwpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KCk7XG4gICAgdGhpcy5zZXRUaW1lID0gY3VyVGltZTtcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVN0YWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=