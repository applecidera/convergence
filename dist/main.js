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
/* harmony import */ var _js_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/controls */ "./src/js/controls.js");
/* harmony import */ var _js_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_controls__WEBPACK_IMPORTED_MODULE_2__);



var DIM_X = 768;
var DIM_Y = 768;
var canvas = document.getElementById('stage');
canvas.width = DIM_X;
canvas.height = DIM_Y;
var ctx = canvas.getContext('2d');
var controls = new _js_controls__WEBPACK_IMPORTED_MODULE_2___default.a();
controls.gameOver(); // instantiate game
// const game = new Game(ctx);
// game.gameOver();
// Game Constants

var sunMap = new Image();
var cursor = new Image();
var warpGate1 = new Image();
var warpGate2 = new Image();
var warpGate3 = new Image();
var warpGate = [warpGate1, warpGate2, warpGate3];
var warpGateIndex = 0;

function init() {
  sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
  warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
  warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
  warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
  window.requestAnimationFrame(draw);
  setInterval(function () {
    warpGateIndex += 1;
    if (warpGateIndex === 3) warpGateIndex = 0;
  }, 500);
}

function draw() {
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X / 2, DIM_Y / 2); // Cursor

  ctx.rotate(2 * Math.PI / 360 * (controls.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(cursor, 0, -35);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(DIM_X / 2, DIM_Y / 2, 105, 0, Math.PI * 2, false); // Earth orbit

  ctx.stroke();
  ctx.drawImage(warpGate[warpGateIndex], DIM_X / 4 + 97.5, DIM_Y / 4 + 97.5, DIM_X / 4, DIM_Y / 4);
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);
  window.requestAnimationFrame(draw);
}

init();

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

// import Controls from './controls';
// initializer
function Game(context) {
  this.ctx = context;
  this.gameState = false;
  this.gameSpeed = 60;
}

Game.prototype.startTicker = function () {};

Game.prototype.ticker = function () {
  // draws stuff in set intervals
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X / 2, DIM_Y / 2); // Cursor

  ctx.rotate(2 * Math.PI / 360 * (controls.degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(cursor, 0, -35);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(DIM_X / 2, DIM_Y / 2, 105, 0, Math.PI * 2, false); // Earth orbit

  ctx.stroke();
  ctx.drawImage(warpGate[warpGateIndex], DIM_X / 4 + 97.5, DIM_Y / 4 + 97.5, DIM_X / 4, DIM_Y / 4);
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);
  window.requestAnimationFrame(ticker);
};

Game.prototype.startNewGame = function () {// 
};

Game.prototype.gameOver = function () {// resets the playfield
};

module.exports = Game;
var sunMap = new Image();
var cursor = new Image();
var warpGate1 = new Image();
var warpGate2 = new Image();
var warpGate3 = new Image();
var warpGate = [warpGate1, warpGate2, warpGate3];
var warpGateIndex = 0;

function init() {
  sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/pixel_ship_red_small_2.png';
  warpGate1.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_1.png';
  warpGate2.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_2.png';
  warpGate3.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/warpgate_3.png';
  window.requestAnimationFrame(draw);
  setInterval(function () {
    warpGateIndex += 1;
    if (warpGateIndex === 3) warpGateIndex = 0;
  }, 500);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiRElNX1giLCJESU1fWSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjb250cm9scyIsIkNvbnRyb2xzIiwiZ2FtZU92ZXIiLCJzdW5NYXAiLCJJbWFnZSIsImN1cnNvciIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlIiwid2FycEdhdGVJbmRleCIsImluaXQiLCJzcmMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3Iiwic2V0SW50ZXJ2YWwiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkZWdyZWVzIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZSIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImNsb2Nrd2lzZSIsImNjbG9ja3dpc2UiLCJjdXJzb3JTcGVlZCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInN0YXJ0R2FtZSIsInByb3RvdHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJjbGVhckludGVydmFsIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWUiLCJjb250ZXh0IiwiZ2FtZVN0YXRlIiwiZ2FtZVNwZWVkIiwic3RhcnRUaWNrZXIiLCJ0aWNrZXIiLCJzdGFydE5ld0dhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUcsR0FBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxHQUFaO0FBRUEsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZUwsS0FBZjtBQUNBRSxNQUFNLENBQUNJLE1BQVAsR0FBZ0JMLEtBQWhCO0FBQ0EsSUFBSU0sR0FBRyxHQUFHTCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxtREFBSixFQUFqQjtBQUNBRCxRQUFRLENBQUNFLFFBQVQsRyxDQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxLQUFKLEVBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUQsS0FBSixFQUFmO0FBQ0EsSUFBTUUsU0FBUyxHQUFHLElBQUlGLEtBQUosRUFBbEI7QUFDQSxJQUFNRyxTQUFTLEdBQUcsSUFBSUgsS0FBSixFQUFsQjtBQUNBLElBQU1JLFNBQVMsR0FBRyxJQUFJSixLQUFKLEVBQWxCO0FBQ0EsSUFBTUssUUFBUSxHQUFHLENBQUNILFNBQUQsRUFBWUMsU0FBWixFQUF1QkMsU0FBdkIsQ0FBakI7QUFDQSxJQUFJRSxhQUFhLEdBQUcsQ0FBcEI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkUixRQUFNLENBQUNTLEdBQVAsR0FBYSx3REFBYjtBQUNBUCxRQUFNLENBQUNPLEdBQVAsR0FBYSx3R0FBYjtBQUNBTixXQUFTLENBQUNNLEdBQVYsR0FBZ0IsNEZBQWhCO0FBQ0FMLFdBQVMsQ0FBQ0ssR0FBVixHQUFnQiw0RkFBaEI7QUFDQUosV0FBUyxDQUFDSSxHQUFWLEdBQWdCLDRGQUFoQjtBQUNBQyxRQUFNLENBQUNDLHFCQUFQLENBQTZCQyxJQUE3QjtBQUNBQyxhQUFXLENBQUMsWUFBTTtBQUNoQk4saUJBQWEsSUFBSSxDQUFqQjtBQUNBLFFBQUlBLGFBQWEsS0FBSyxDQUF0QixFQUF5QkEsYUFBYSxHQUFHLENBQWhCO0FBQzFCLEdBSFUsRUFHUixHQUhRLENBQVg7QUFJRDs7QUFLRCxTQUFTSyxJQUFULEdBQWdCO0FBRWRqQixLQUFHLENBQUNtQix3QkFBSixHQUErQixrQkFBL0I7QUFDQW5CLEtBQUcsQ0FBQ29CLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CM0IsS0FBcEIsRUFBMkJDLEtBQTNCLEVBSGMsQ0FHcUI7O0FBRW5DTSxLQUFHLENBQUNxQixTQUFKLEdBQWdCLG9CQUFoQjtBQUNBckIsS0FBRyxDQUFDc0IsV0FBSixHQUFrQix3QkFBbEI7QUFDQXRCLEtBQUcsQ0FBQ3VCLElBQUo7QUFDQXZCLEtBQUcsQ0FBQ3dCLFNBQUosQ0FBYy9CLEtBQUssR0FBQyxDQUFwQixFQUF1QkMsS0FBSyxHQUFDLENBQTdCLEVBUmMsQ0FVZDs7QUFDQU0sS0FBRyxDQUFDeUIsTUFBSixDQUFhLElBQUlDLElBQUksQ0FBQ0MsRUFBVixHQUFnQixHQUFqQixJQUF5QnpCLFFBQVEsQ0FBQzBCLE9BQVQsR0FBbUIsR0FBNUMsQ0FBWDtBQUNBNUIsS0FBRyxDQUFDd0IsU0FBSixDQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQXhCLEtBQUcsQ0FBQzZCLFNBQUosQ0FBY3RCLE1BQWQsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBQyxFQUF6QjtBQUVBUCxLQUFHLENBQUM4QixPQUFKO0FBRUE5QixLQUFHLENBQUMrQixTQUFKO0FBQ0EvQixLQUFHLENBQUNnQyxHQUFKLENBQVF2QyxLQUFLLEdBQUMsQ0FBZCxFQUFpQkMsS0FBSyxHQUFDLENBQXZCLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CLEVBQWtDZ0MsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBNUMsRUFBK0MsS0FBL0MsRUFsQmMsQ0FrQnlDOztBQUN2RDNCLEtBQUcsQ0FBQ2lDLE1BQUo7QUFFQWpDLEtBQUcsQ0FBQzZCLFNBQUosQ0FBY2xCLFFBQVEsQ0FBQ0MsYUFBRCxDQUF0QixFQUF1Q25CLEtBQUssR0FBQyxDQUFOLEdBQVUsSUFBakQsRUFBdURDLEtBQUssR0FBQyxDQUFOLEdBQVUsSUFBakUsRUFBc0VELEtBQUssR0FBQyxDQUE1RSxFQUErRUMsS0FBSyxHQUFDLENBQXJGO0FBRUFNLEtBQUcsQ0FBQzZCLFNBQUosQ0FBY3hCLE1BQWQsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJaLEtBQTVCLEVBQW1DQyxLQUFuQztBQUVBcUIsUUFBTSxDQUFDQyxxQkFBUCxDQUE2QkMsSUFBN0I7QUFDRDs7QUFFREosSUFBSSxHOzs7Ozs7Ozs7OztBQ3ZFSjtBQUNBLFNBQVNWLFFBQVQsR0FBbUI7QUFDakIsT0FBS3lCLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSzFCLFFBQUwsR0FBZ0I7QUFDZGdDLFFBQUksRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQURRO0FBRWRDLFNBQUssRUFBRTtBQUFDRCxZQUFNLEVBQUU7QUFBVDtBQUZPLEdBQWhCO0FBSUEsT0FBS0UsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBR0EsT0FBS0MscUJBQUwsR0FBNkIsS0FBS0EscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQTdCO0FBQ0EsT0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTVCO0FBQ0EsT0FBS0UsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUYsSUFBYixDQUFrQixJQUFsQixDQUFmO0FBQ0EsT0FBS0csS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0gsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsT0FBS0ksU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVKLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxPQUFLckMsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNxQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0Q7O0FBRUR0QyxRQUFRLENBQUMyQyxTQUFULENBQW1CSixvQkFBbkIsR0FBMEMsWUFBVTtBQUNsRDlDLFVBQVEsQ0FBQ21ELG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtGLFNBQTdDO0FBRUFqRCxVQUFRLENBQUNvRCxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLTCxPQUExQztBQUNBL0MsVUFBUSxDQUFDb0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0osS0FBeEM7QUFDRCxDQUxEOztBQU9BekMsUUFBUSxDQUFDMkMsU0FBVCxDQUFtQk4scUJBQW5CLEdBQTJDLFlBQVU7QUFDbkQ1QyxVQUFRLENBQUNtRCxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLSixPQUE3QztBQUNBL0MsVUFBUSxDQUFDbUQsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsS0FBM0M7QUFFQWhELFVBQVEsQ0FBQ29ELGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtILFNBQTFDO0FBQ0QsQ0FMRDs7QUFPQTFDLFFBQVEsQ0FBQzJDLFNBQVQsQ0FBbUJILE9BQW5CLEdBQTZCLFVBQVNNLENBQVQsRUFBWTtBQUFBOztBQUN2QyxVQUFRQSxDQUFDLENBQUNDLElBQVY7QUFDRSxTQUFLLFlBQUw7QUFDRSxVQUFJLENBQUMsS0FBS2hELFFBQUwsQ0FBY2tDLEtBQWQsQ0FBb0JELE1BQXpCLEVBQWdDO0FBQzlCLGFBQUtqQyxRQUFMLENBQWNrQyxLQUFkLENBQW9CRCxNQUFwQixHQUE2QixJQUE3QjtBQUNBLGFBQUtFLFNBQUwsR0FBaUJuQixXQUFXLENBQUMsWUFBTTtBQUNqQyxlQUFJLENBQUNVLE9BQUwsSUFBZ0IsS0FBSSxDQUFDVyxXQUFyQjtBQUNELFNBRjJCLEVBRXhCLE9BQUssRUFGbUIsQ0FBNUI7QUFHRDs7QUFDRDs7QUFDRixTQUFLLFdBQUw7QUFDRSxVQUFJLENBQUMsS0FBS3JDLFFBQUwsQ0FBY2dDLElBQWQsQ0FBbUJDLE1BQXhCLEVBQStCO0FBQzdCLGFBQUtqQyxRQUFMLENBQWNnQyxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixJQUE1QjtBQUNBLGFBQUtHLFVBQUwsR0FBa0JwQixXQUFXLENBQUMsWUFBTTtBQUNsQyxlQUFJLENBQUNVLE9BQUwsSUFBZ0IsS0FBSSxDQUFDVyxXQUFyQjtBQUNELFNBRjRCLEVBRXpCLE9BQUssRUFGb0IsQ0FBN0I7QUFHRDs7QUFDRDtBQWhCSjtBQWtCRCxDQW5CRDs7QUFxQkFwQyxRQUFRLENBQUMyQyxTQUFULENBQW1CRixLQUFuQixHQUEyQixVQUFTSyxDQUFULEVBQVk7QUFDckMsVUFBUUEsQ0FBQyxDQUFDQyxJQUFWO0FBQ0UsU0FBSyxZQUFMO0FBQ0UsV0FBS2hELFFBQUwsQ0FBY2tDLEtBQWQsQ0FBb0JELE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0FnQixtQkFBYSxDQUFDLEtBQUtkLFNBQU4sQ0FBYjtBQUNBOztBQUNGLFNBQUssV0FBTDtBQUNFLFdBQUtuQyxRQUFMLENBQWNnQyxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixLQUE1QjtBQUNBZ0IsbUJBQWEsQ0FBQyxLQUFLYixVQUFOLENBQWI7QUFDQTtBQVJKO0FBVUQsQ0FYRDs7QUFhQW5DLFFBQVEsQ0FBQzJDLFNBQVQsQ0FBbUJELFNBQW5CLEdBQStCLFVBQVNJLENBQVQsRUFBWTtBQUN6QyxNQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCLEtBQUtSLG9CQUFMO0FBQ3hCUyxlQUFhLENBQUMsS0FBS2QsU0FBTixDQUFiO0FBQ0QsQ0FIRDs7QUFLQWxDLFFBQVEsQ0FBQzJDLFNBQVQsQ0FBbUIxQyxRQUFuQixHQUE4QixZQUFXO0FBQUE7O0FBQ3ZDLE9BQUtvQyxxQkFBTDtBQUNBLE9BQUtILFNBQUwsR0FBaUJuQixXQUFXLENBQUMsWUFBTTtBQUNqQyxVQUFJLENBQUNVLE9BQUwsSUFBZ0IsTUFBSSxDQUFDVyxXQUFMLEdBQW1CLENBQW5DO0FBQ0QsR0FGMkIsRUFFeEIsT0FBSyxFQUZtQixDQUE1QjtBQUdELENBTEQ7O0FBT0FhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxELFFBQWpCLEM7Ozs7Ozs7Ozs7O0FDakZBO0FBRUE7QUFDQSxTQUFTbUQsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ3RCLE9BQUt2RCxHQUFMLEdBQVd1RCxPQUFYO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQTs7QUFFREgsSUFBSSxDQUFDUixTQUFMLENBQWVZLFdBQWYsR0FBNkIsWUFBVSxDQUV0QyxDQUZEOztBQUlBSixJQUFJLENBQUNSLFNBQUwsQ0FBZWEsTUFBZixHQUF3QixZQUFVO0FBQ2pDO0FBQ0EzRCxLQUFHLENBQUNtQix3QkFBSixHQUErQixrQkFBL0I7QUFDQ25CLEtBQUcsQ0FBQ29CLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CM0IsS0FBcEIsRUFBMkJDLEtBQTNCLEVBSGdDLENBR0c7O0FBRW5DTSxLQUFHLENBQUNxQixTQUFKLEdBQWdCLG9CQUFoQjtBQUNBckIsS0FBRyxDQUFDc0IsV0FBSixHQUFrQix3QkFBbEI7QUFDQXRCLEtBQUcsQ0FBQ3VCLElBQUo7QUFDQXZCLEtBQUcsQ0FBQ3dCLFNBQUosQ0FBYy9CLEtBQUssR0FBQyxDQUFwQixFQUF1QkMsS0FBSyxHQUFDLENBQTdCLEVBUmdDLENBVWhDOztBQUNBTSxLQUFHLENBQUN5QixNQUFKLENBQWEsSUFBSUMsSUFBSSxDQUFDQyxFQUFWLEdBQWdCLEdBQWpCLElBQXlCekIsUUFBUSxDQUFDMEIsT0FBVCxHQUFtQixHQUE1QyxDQUFYO0FBQ0E1QixLQUFHLENBQUN3QixTQUFKLENBQWMsR0FBZCxFQUFtQixDQUFuQjtBQUNBeEIsS0FBRyxDQUFDNkIsU0FBSixDQUFjdEIsTUFBZCxFQUFzQixDQUF0QixFQUF3QixDQUFDLEVBQXpCO0FBRUFQLEtBQUcsQ0FBQzhCLE9BQUo7QUFFQTlCLEtBQUcsQ0FBQytCLFNBQUo7QUFDQS9CLEtBQUcsQ0FBQ2dDLEdBQUosQ0FBUXZDLEtBQUssR0FBQyxDQUFkLEVBQWlCQyxLQUFLLEdBQUMsQ0FBdkIsRUFBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsRUFBa0NnQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUE1QyxFQUErQyxLQUEvQyxFQWxCZ0MsQ0FrQnVCOztBQUN2RDNCLEtBQUcsQ0FBQ2lDLE1BQUo7QUFFQWpDLEtBQUcsQ0FBQzZCLFNBQUosQ0FBY2xCLFFBQVEsQ0FBQ0MsYUFBRCxDQUF0QixFQUF1Q25CLEtBQUssR0FBQyxDQUFOLEdBQVUsSUFBakQsRUFBdURDLEtBQUssR0FBQyxDQUFOLEdBQVUsSUFBakUsRUFBc0VELEtBQUssR0FBQyxDQUE1RSxFQUErRUMsS0FBSyxHQUFDLENBQXJGO0FBRUFNLEtBQUcsQ0FBQzZCLFNBQUosQ0FBY3hCLE1BQWQsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEJaLEtBQTVCLEVBQW1DQyxLQUFuQztBQUVBcUIsUUFBTSxDQUFDQyxxQkFBUCxDQUE2QjJDLE1BQTdCO0FBQ0QsQ0ExQkQ7O0FBNEJBTCxJQUFJLENBQUNSLFNBQUwsQ0FBZWMsWUFBZixHQUE4QixZQUFVLENBQ3ZDO0FBQ0EsQ0FGRDs7QUFJQU4sSUFBSSxDQUFDUixTQUFMLENBQWUxQyxRQUFmLEdBQTBCLFlBQVUsQ0FDbkM7QUFDQSxDQUZEOztBQUlBZ0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxJQUFqQjtBQUdBLElBQU1qRCxNQUFNLEdBQUcsSUFBSUMsS0FBSixFQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlELEtBQUosRUFBZjtBQUNBLElBQU1FLFNBQVMsR0FBRyxJQUFJRixLQUFKLEVBQWxCO0FBQ0EsSUFBTUcsU0FBUyxHQUFHLElBQUlILEtBQUosRUFBbEI7QUFDQSxJQUFNSSxTQUFTLEdBQUcsSUFBSUosS0FBSixFQUFsQjtBQUNBLElBQU1LLFFBQVEsR0FBRyxDQUFDSCxTQUFELEVBQVlDLFNBQVosRUFBdUJDLFNBQXZCLENBQWpCO0FBQ0EsSUFBSUUsYUFBYSxHQUFHLENBQXBCOztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZFIsUUFBTSxDQUFDUyxHQUFQLEdBQWEsd0RBQWI7QUFDQVAsUUFBTSxDQUFDTyxHQUFQLEdBQWEsd0dBQWI7QUFDQU4sV0FBUyxDQUFDTSxHQUFWLEdBQWdCLDRGQUFoQjtBQUNBTCxXQUFTLENBQUNLLEdBQVYsR0FBZ0IsNEZBQWhCO0FBQ0FKLFdBQVMsQ0FBQ0ksR0FBVixHQUFnQiw0RkFBaEI7QUFDQUMsUUFBTSxDQUFDQyxxQkFBUCxDQUE2QkMsSUFBN0I7QUFDQUMsYUFBVyxDQUFDLFlBQU07QUFDaEJOLGlCQUFhLElBQUksQ0FBakI7QUFDQSxRQUFJQSxhQUFhLEtBQUssQ0FBdEIsRUFBeUJBLGFBQWEsR0FBRyxDQUFoQjtBQUMxQixHQUhVLEVBR1IsR0FIUSxDQUFYO0FBSUQsQzs7Ozs7Ozs7Ozs7QUN2RUQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9qcy9jb250cm9scyc7XG5cbmxldCBESU1fWCA9IDc2ODtcbmxldCBESU1fWSA9IDc2ODtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuY2FudmFzLndpZHRoID0gRElNX1g7XG5jYW52YXMuaGVpZ2h0ID0gRElNX1k7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnN0IGNvbnRyb2xzID0gbmV3IENvbnRyb2xzKCk7XG5jb250cm9scy5nYW1lT3ZlcigpO1xuXG4vLyBpbnN0YW50aWF0ZSBnYW1lXG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbi8vIGdhbWUuZ2FtZU92ZXIoKTtcblxuLy8gR2FtZSBDb25zdGFudHNcbmNvbnN0IHN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgY3Vyc29yID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZTEgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUzID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZSA9IFt3YXJwR2F0ZTEsIHdhcnBHYXRlMiwgd2FycEdhdGUzXTtcbmxldCB3YXJwR2F0ZUluZGV4ID0gMDtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuICBjdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9waXhlbF9zaGlwX3JlZF9zbWFsbF8yLnBuZyc7XG4gIHdhcnBHYXRlMS5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcbiAgd2FycEdhdGUyLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMi5wbmcnO1xuICB3YXJwR2F0ZTMuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8zLnBuZyc7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICB3YXJwR2F0ZUluZGV4ICs9IDE7XG4gICAgaWYgKHdhcnBHYXRlSW5kZXggPT09IDMpIHdhcnBHYXRlSW5kZXggPSAwO1xuICB9LCA1MDApO1xufVxuXG5cblxuXG5mdW5jdGlvbiBkcmF3KCkge1xuXG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTsgLy8gY2xlYXIgY2FudmFzXG5cbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNCknO1xuICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAxNTMsIDI1NSwgMC40KSc7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoRElNX1gvMiwgRElNX1kvMik7XG5cbiAgLy8gQ3Vyc29yXG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKGNvbnRyb2xzLmRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKGN1cnNvciwgMCwtMzUpO1xuXG4gIGN0eC5yZXN0b3JlKCk7XG4gIFxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoRElNX1gvMiwgRElNX1kvMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpOyAvLyBFYXJ0aCBvcmJpdFxuICBjdHguc3Ryb2tlKCk7XG5cbiAgY3R4LmRyYXdJbWFnZSh3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSwgRElNX1gvNCArIDk3LjUsIERJTV9ZLzQgKyA5Ny41LERJTV9YLzQsIERJTV9ZLzQpXG4gXG4gIGN0eC5kcmF3SW1hZ2Uoc3VuTWFwLCAwLCAwLCBESU1fWCwgRElNX1kpO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59XG5cbmluaXQoKTsiLCJcbi8vIHBsYXllciBjb250cm9sc1xuZnVuY3Rpb24gQ29udHJvbHMoKXtcbiAgdGhpcy5kZWdyZWVzID0gMDtcbiAgdGhpcy5jb250cm9scyA9IHtcbiAgICBsZWZ0OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgcmlnaHQ6IHthY3RpdmU6IGZhbHNlfVxuICB9XG4gIHRoaXMuY2xvY2t3aXNlID0gMFxuICB0aGlzLmNjbG9ja3dpc2UgPSAwXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSAzO1xuXG5cbiAgdGhpcy5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzID0gdGhpcy5lbmFibGVQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpO1xuICB0aGlzLmtleURvd24gPSB0aGlzLmtleURvd24uYmluZCh0aGlzKTtcbiAgdGhpcy5rZXlVcCA9IHRoaXMua2V5VXAuYmluZCh0aGlzKTtcbiAgdGhpcy5zdGFydEdhbWUgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuY29udHJvbHMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9ja3dpc2UgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgICAgfSwgKDEwMDAvNjApICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuY29udHJvbHMubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICAgIH0sICgxMDAwLzYwKSApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY2Nsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmNsb2Nrd2lzZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZCAvIDI7ICBcbiAgfSwgKDEwMDAvNjApICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7IiwiLy8gaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnO1xuXG4vLyBpbml0aWFsaXplclxuZnVuY3Rpb24gR2FtZShjb250ZXh0KSB7XG5cdHRoaXMuY3R4ID0gY29udGV4dDtcblx0dGhpcy5nYW1lU3RhdGUgPSBmYWxzZTtcblx0dGhpcy5nYW1lU3BlZWQgPSA2MDtcbn1cblxuR2FtZS5wcm90b3R5cGUuc3RhcnRUaWNrZXIgPSBmdW5jdGlvbigpe1xuXHRcbn1cblxuR2FtZS5wcm90b3R5cGUudGlja2VyID0gZnVuY3Rpb24oKXtcblx0Ly8gZHJhd3Mgc3R1ZmYgaW4gc2V0IGludGVydmFsc1xuXHRjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMTUzLCAyNTUsIDAuNCknO1xuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKERJTV9YLzIsIERJTV9ZLzIpO1xuXG4gIC8vIEN1cnNvclxuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqIChjb250cm9scy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZShjdXJzb3IsIDAsLTM1KTtcblxuICBjdHgucmVzdG9yZSgpO1xuICBcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKERJTV9YLzIsIERJTV9ZLzIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgLy8gRWFydGggb3JiaXRcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIGN0eC5kcmF3SW1hZ2Uod2FycEdhdGVbd2FycEdhdGVJbmRleF0sIERJTV9YLzQgKyA5Ny41LCBESU1fWS80ICsgOTcuNSxESU1fWC80LCBESU1fWS80KVxuIFxuICBjdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgRElNX1gsIERJTV9ZKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2tlcik7XG59XG5cbkdhbWUucHJvdG90eXBlLnN0YXJ0TmV3R2FtZSA9IGZ1bmN0aW9uKCl7XG5cdC8vIFxufVxuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCl7XG5cdC8vIHJlc2V0cyB0aGUgcGxheWZpZWxkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcblxuXG5jb25zdCBzdW5NYXAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGN1cnNvciA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUgPSBbd2FycEdhdGUxLCB3YXJwR2F0ZTIsIHdhcnBHYXRlM107XG5sZXQgd2FycEdhdGVJbmRleCA9IDA7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcbiAgY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xuICB3YXJwR2F0ZTEuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG4gIHdhcnBHYXRlMi5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcbiAgd2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgd2FycEdhdGVJbmRleCArPSAxO1xuICAgIGlmICh3YXJwR2F0ZUluZGV4ID09PSAzKSB3YXJwR2F0ZUluZGV4ID0gMDtcbiAgfSwgNTAwKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=