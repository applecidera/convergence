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



var DIM_X = 768;
var DIM_Y = 768;
var canvas = document.getElementById('stage');
canvas.width = DIM_X;
canvas.height = DIM_Y;
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'destination-over'; // Game Constants

var sunMap = new Image();
var cursor = new Image();
var warpGate1 = new Image();
var warpGate2 = new Image();
var warpGate3 = new Image();
var warpGate = [warpGate1, warpGate2, warpGate3];
var warpGateIndex = 0;
sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
setInterval(function () {
  warpGateIndex += 1;
  if (warpGateIndex === 3) warpGateIndex = 0;
}, 500); // instantiate game

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
  this.controls = {
    left: {
      active: false
    },
    right: {
      active: false
    }
  };
  this.clockwise = 0;
  this.cclockwise = 0;
  this.cursorSpeed = 3;
  this.disablePlayerControls = this.disablePlayerControls.bind(this);
  this.enablePlayerControls = this.enablePlayerControls.bind(this);
  this.keyDown = this.keyDown.bind(this);
  this.keyUp = this.keyUp.bind(this);
  this.startGame = this.startGame.bind(this);
  this.gameOver = this.gameOver.bind(this);
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
  var _this = this;

  switch (e.code) {
    case "ArrowRight":
      if (!this.controls.right.active) {
        this.controls.right.active = true;
        this.clockwise = setInterval(function () {
          _this.degrees += _this.cursorSpeed;
        }, 1000 / 60);
      }

      break;

    case "ArrowLeft":
      if (!this.controls.left.active) {
        this.controls.left.active = true;
        this.cclockwise = setInterval(function () {
          _this.degrees -= _this.cursorSpeed;
        }, 1000 / 60);
      }

      break;
  }
};

Controls.prototype.keyUp = function (e) {
  switch (e.code) {
    case "ArrowRight":
      this.controls.right.active = false;
      clearInterval(this.clockwise);
      break;

    case "ArrowLeft":
      this.controls.left.active = false;
      clearInterval(this.cclockwise);
      break;
  }
};

Controls.prototype.startGame = function (e) {
  if (e.code === "Space") this.enablePlayerControls();
  clearInterval(this.clockwise);
};

Controls.prototype.gameOver = function () {
  var _this2 = this;

  this.disablePlayerControls();
  this.clockwise = setInterval(function () {
    _this2.degrees += _this2.cursorSpeed / 2;
  }, 1000 / 60);
};

module.exports = Controls;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// initializer
function Game(context) {
  this.ctx = context;
  this.dim_x = 768;
  this.dim_y = 768;
  this.gameState = false;
}

Game.prototype.startNewGame = function () {// 
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
/***/ (function(module, exports, __webpack_require__) {

// import Controls from './controls';
var Controls = __webpack_require__(/*! ./controls */ "./src/js/controls.js");

function GameStage(context, game) {
  this.ctx = context;
  this.game = game;
  this.controls = new Controls();
  this.frameRate = 60;
  this.frameInterval = 1000 / this.frameRate;
  this.controls.gameOver();
}

GameStage.prototype.ticker = function () {
  // draws stuff in set intervals
  this.ctx.clearRect(0, 0, this.dim_x, this.dim_y); // clear canvas

  this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  this.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  this.ctx.save();
  this.ctx.translate(this.dim_x / 2, this.dim_y / 2); // Cursor

  this.ctx.rotate(2 * Math.PI / 360 * (this.controls.degrees % 360));
  this.ctx.translate(105, 0);
  this.ctx.drawImage(cursor, 0, -35);
  this.ctx.restore();
  this.ctx.beginPath();
  this.ctx.arc(this.dim_x / 2, this.dim_y / 2, 105, 0, Math.PI * 2, false); // Earth orbit

  this.ctx.stroke(); // warpgate

  this.ctx.drawImage(warpGate[warpGateIndex], this.dim_x / 4 + 97.5, this.dim_y / 4 + 97.5, this.dim_x / 4, this.dim_y / 4); // map

  this.ctx.drawImage(sunMap, 0, 0, this.dim_x, this.dim_y);
  window.requestAnimationFrame(ticker);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZXN0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJESU1fWCIsIkRJTV9ZIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsInN1bk1hcCIsIkltYWdlIiwiY3Vyc29yIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGUiLCJ3YXJwR2F0ZUluZGV4Iiwic3JjIiwic2V0SW50ZXJ2YWwiLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwiZGVncmVlcyIsImNvbnRyb2xzIiwibGVmdCIsImFjdGl2ZSIsInJpZ2h0IiwiY2xvY2t3aXNlIiwiY2Nsb2Nrd2lzZSIsImN1cnNvclNwZWVkIiwiZGlzYWJsZVBsYXllckNvbnRyb2xzIiwiYmluZCIsImVuYWJsZVBsYXllckNvbnRyb2xzIiwia2V5RG93biIsImtleVVwIiwic3RhcnRHYW1lIiwiZ2FtZU92ZXIiLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiY2xlYXJJbnRlcnZhbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZXh0IiwiZGltX3giLCJkaW1feSIsImdhbWVTdGF0ZSIsInN0YXJ0TmV3R2FtZSIsInJlcXVpcmUiLCJmcmFtZVJhdGUiLCJmcmFtZUludGVydmFsIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxHQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFFQSxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlTCxLQUFmO0FBQ0FFLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkwsS0FBaEI7QUFDQSxJQUFJTSxHQUFHLEdBQUdMLE1BQU0sQ0FB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QUFLM0QsR0FBTCxDQUFTNEQsU0FBVDtBQUNBLE9BQUs1RCxHQUFMLENBQVM2RCxHQUFULENBQWEsS0FBS2xCLEtBQUwsR0FBVyxDQUF4QixFQUEyQixLQUFLQyxLQUFMLEdBQVcsQ0FBdEMsRUFBeUMsR0FBekMsRUFBOEMsQ0FBOUMsRUFBaURZLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQTNELEVBQThELEtBQTlELEVBakJxQyxDQWlCaUM7O0FBQ3RFLE9BQUt6RCxHQUFMLENBQVM4RCxNQUFULEdBbEJxQyxDQW9CdEM7O0FBQ0MsT0FBSzlELEdBQUwsQ0FBUzBELFNBQVQsQ0FBbUJqRCxRQUFRLENBQUNDLGFBQUQsQ0FBM0IsRUFBNEMsS0FBS2lDLEtBQUwsR0FBVyxDQUFYLEdBQWUsSUFBM0QsRUFBaUUsS0FBS0MsS0FBTCxHQUFXLENBQVgsR0FBZSxJQUFoRixFQUFxRixLQUFLRCxLQUFMLEdBQVcsQ0FBaEcsRUFBbUcsS0FBS0MsS0FBTCxHQUFXLENBQTlHLEVBckJxQyxDQXVCdEM7O0FBQ0MsT0FBSzVDLEdBQUwsQ0FBUzBELFNBQVQsQ0FBbUJ2RCxNQUFuQixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxLQUFLd0MsS0FBdEMsRUFBNkMsS0FBS0MsS0FBbEQ7QUFFQW1CLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkIvQyxNQUE3QjtBQUNELENBM0JEOztBQTZCQXVCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLFNBQWpCLEM7Ozs7Ozs7Ozs7O0FDekNBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnO1xuaW1wb3J0IEdhbWVTdGFnZSBmcm9tICcuL2pzL2dhbWVzdGFnZSc7XG5cbmxldCBESU1fWCA9IDc2ODtcbmxldCBESU1fWSA9IDc2ODtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gRElNX1g7XG5jYW52YXMuaGVpZ2h0ID0gRElNX1k7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuXG4vLyBHYW1lIENvbnN0YW50c1xuY29uc3Qgc3VuTWFwID0gbmV3IEltYWdlKCk7XG5jb25zdCBjdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlID0gW3dhcnBHYXRlMSwgd2FycEdhdGUyLCB3YXJwR2F0ZTNdO1xubGV0IHdhcnBHYXRlSW5kZXggPSAwO1xuXG5zdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG5jdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG53YXJwR2F0ZTEuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG53YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG53YXJwR2F0ZTMuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgd2FycEdhdGVJbmRleCArPSAxO1xuICBpZiAod2FycEdhdGVJbmRleCA9PT0gMykgd2FycEdhdGVJbmRleCA9IDA7XG59LCA1MDApO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVzdGFnZSA9IG5ldyBHYW1lU3RhZ2UoY3R4LCBnYW1lKTtcbmdhbWVzdGFnZS50aWNrZXIoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoKXtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5jb250cm9scyA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuY2xvY2t3aXNlID0gMFxuICB0aGlzLmNjbG9ja3dpc2UgPSAwXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSAzO1xuXG5cbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcbiAgdGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuY29udHJvbHMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9ja3dpc2UgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgICAgfSwgKDEwMDAvNjApICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuY29udHJvbHMubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICAgIH0sICgxMDAwLzYwKSApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY2Nsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmNsb2Nrd2lzZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZCAvIDI7ICBcbiAgfSwgKDEwMDAvNjApICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7IiwiXG4vLyBpbml0aWFsaXplclxuZnVuY3Rpb24gR2FtZShjb250ZXh0KSB7XG5cdHRoaXMuY3R4ID0gY29udGV4dDtcblx0dGhpcy5kaW1feCA9IDc2ODtcblx0dGhpcy5kaW1feSA9IDc2ODtcblx0dGhpcy5nYW1lU3RhdGUgPSBmYWxzZTtcbn1cblxuR2FtZS5wcm90b3R5cGUuc3RhcnROZXdHYW1lID0gZnVuY3Rpb24oKXtcblx0Ly8gXG59XG5cbkdhbWUucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKXtcblx0Ly8gcmVzZXRzIHRoZSBwbGF5ZmllbGRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiLy8gaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuY29uc3QgQ29udHJvbHMgPSByZXF1aXJlKCcuL2NvbnRyb2xzJyk7XG5cbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcbiAgdGhpcy5mcmFtZVJhdGUgPSA2MDtcbiAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMC90aGlzLmZyYW1lUmF0ZTtcbiAgdGhpcy5jb250cm9scy5nYW1lT3ZlcigpO1xufVxuXG5HYW1lU3RhZ2UucHJvdG90eXBlLnRpY2tlciA9IGZ1bmN0aW9uKCl7XG5cdC8vIGRyYXdzIHN0dWZmIGluIHNldCBpbnRlcnZhbHNcbiAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltX3gsIHRoaXMuZGltX3kpOyAvLyBjbGVhciBjYW52YXNcblxuICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAxNTMsIDI1NSwgMC40KSc7XG4gIHRoaXMuY3R4LnNhdmUoKTtcbiAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMuZGltX3gvMiwgdGhpcy5kaW1feS8yKTtcblxuICAvLyBDdXJzb3JcbiAgdGhpcy5jdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqICh0aGlzLmNvbnRyb2xzLmRlZ3JlZXMgJSAzNjApKTtcbiAgdGhpcy5jdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIHRoaXMuY3R4LmRyYXdJbWFnZShjdXJzb3IsIDAsLTM1KTtcblxuICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIFxuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguYXJjKHRoaXMuZGltX3gvMiwgdGhpcy5kaW1feS8yLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7IC8vIEVhcnRoIG9yYml0XG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG5cdC8vIHdhcnBnYXRlXG4gIHRoaXMuY3R4LmRyYXdJbWFnZSh3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSwgdGhpcy5kaW1feC80ICsgOTcuNSwgdGhpcy5kaW1feS80ICsgOTcuNSx0aGlzLmRpbV94LzQsIHRoaXMuZGltX3kvNClcbiBcblx0Ly8gbWFwXG4gIHRoaXMuY3R4LmRyYXdJbWFnZShzdW5NYXAsIDAsIDAsIHRoaXMuZGltX3gsIHRoaXMuZGltX3kpO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGlja2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lU3RhZ2U7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==