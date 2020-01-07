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


 // Game Constants

var sunMap = new Image();
var cursor = new Image();
var warpGate1 = new Image();
var warpGate2 = new Image();
var warpGate3 = new Image();
var warpGate = [warpGate1, warpGate2, warpGate3];
var warpGateIndex = 0;
var degrees = 0;

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

var DIM_X = 768;
var DIM_Y = 768;
var canvas = document.getElementById('stage');
canvas.width = DIM_X;
canvas.height = DIM_Y;
var ctx = canvas.getContext('2d');

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

var controls = new _js_controls__WEBPACK_IMPORTED_MODULE_2___default.a();
controls.gameOver();
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
}; // ! Not Working


Controls.prototype.startGame = function (e) {
  if (e.code === "Space") this.enablePlayerControls();
};

Controls.prototype.gameOver = function () {
  this.disablePlayerControls();
  this.enablePlayerControls();
};

module.exports = Controls;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Game() {
  this.gameState = false;
}

if (this.gameState === false) module.exports = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsic3VuTWFwIiwiSW1hZ2UiLCJjdXJzb3IiLCJ3YXJwR2F0ZTEiLCJ3YXJwR2F0ZTIiLCJ3YXJwR2F0ZTMiLCJ3YXJwR2F0ZSIsIndhcnBHYXRlSW5kZXgiLCJkZWdyZWVzIiwiaW5pdCIsInNyYyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJzZXRJbnRlcnZhbCIsIkRJTV9YIiwiRElNX1kiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiY29udHJvbHMiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwiQ29udHJvbHMiLCJnYW1lT3ZlciIsImxlZnQiLCJhY3RpdmUiLCJyaWdodCIsImNsb2Nrd2lzZSIsImNjbG9ja3dpc2UiLCJjdXJzb3JTcGVlZCIsImRpc2FibGVQbGF5ZXJDb250cm9scyIsImJpbmQiLCJlbmFibGVQbGF5ZXJDb250cm9scyIsImtleURvd24iLCJrZXlVcCIsInByb3RvdHlwZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGFydEdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJjbGVhckludGVydmFsIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWUiLCJnYW1lU3RhdGUi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QixHQUErQixVQUFTRSxDQUFULEVBQVk7QUFDekMsTUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsT0FBZixFQUF3QixLQUFLUixvQkFBTDtBQUN6QixDQUZEOztBQUlBVixRQUFRLENBQUNhLFNBQVQsQ0FBbUJaLFFBQW5CLEdBQThCLFlBQVc7QUFDdkMsT0FBS08scUJBQUw7QUFDQSxPQUFLRSxvQkFBTDtBQUNELENBSEQ7O0FBS0FVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJCLFFBQWpCLEM7Ozs7Ozs7Ozs7O0FDM0VBLFNBQVNzQixJQUFULEdBQWdCO0FBQ2YsT0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBOztBQUVELElBQUksS0FBS0EsU0FBTCxLQUFtQixLQUF2QixFQUdBSCxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLElBQWpCLEM7Ozs7Ozs7Ozs7O0FDVEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vanMvZ2FtZSc7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9qcy9jb250cm9scyc7XG5cbi8vIEdhbWUgQ29uc3RhbnRzXG5jb25zdCBzdW5NYXAgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGN1cnNvciA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUxID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZTIgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUgPSBbd2FycEdhdGUxLCB3YXJwR2F0ZTIsIHdhcnBHYXRlM107XG5sZXQgd2FycEdhdGVJbmRleCA9IDA7XG5sZXQgZGVncmVlcyA9IDA7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcbiAgY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xuICB3YXJwR2F0ZTEuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8xLnBuZyc7XG4gIHdhcnBHYXRlMi5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzIucG5nJztcbiAgd2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgd2FycEdhdGVJbmRleCArPSAxO1xuICAgIGlmICh3YXJwR2F0ZUluZGV4ID09PSAzKSB3YXJwR2F0ZUluZGV4ID0gMDtcbiAgfSwgNTAwKTtcbn1cblxubGV0IERJTV9YID0gNzY4O1xubGV0IERJTV9ZID0gNzY4O1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG4gIFxuY2FudmFzLndpZHRoID0gRElNX1g7XG5jYW52YXMuaGVpZ2h0ID0gRElNX1k7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblxuZnVuY3Rpb24gZHJhdygpIHtcblxuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMTUzLCAyNTUsIDAuNCknO1xuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKERJTV9YLzIsIERJTV9ZLzIpO1xuXG4gIC8vIEN1cnNvclxuICBjdHgucm90YXRlKCgoMiAqIE1hdGguUEkpIC8gMzYwKSAqIChjb250cm9scy5kZWdyZWVzICUgMzYwKSk7XG4gIGN0eC50cmFuc2xhdGUoMTA1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZShjdXJzb3IsIDAsLTM1KTtcblxuICBjdHgucmVzdG9yZSgpO1xuICBcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKERJTV9YLzIsIERJTV9ZLzIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgLy8gRWFydGggb3JiaXRcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIGN0eC5kcmF3SW1hZ2Uod2FycEdhdGVbd2FycEdhdGVJbmRleF0sIERJTV9YLzQgKyA5Ny41LCBESU1fWS80ICsgOTcuNSxESU1fWC80LCBESU1fWS80KVxuIFxuICBjdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgRElNX1gsIERJTV9ZKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5jb25zdCBjb250cm9scyA9IG5ldyBDb250cm9scygpO1xuY29udHJvbHMuZ2FtZU92ZXIoKTtcblxuaW5pdCgpOyIsIlxuLy8gcGxheWVyIGNvbnRyb2xzXG5mdW5jdGlvbiBDb250cm9scygpe1xuICB0aGlzLmRlZ3JlZXMgPSAwO1xuICB0aGlzLmNvbnRyb2xzID0ge1xuICAgIGxlZnQ6IHthY3RpdmU6IGZhbHNlfSxcbiAgICByaWdodDoge2FjdGl2ZTogZmFsc2V9XG4gIH1cbiAgdGhpcy5jbG9ja3dpc2UgPSAwXG4gIHRoaXMuY2Nsb2Nrd2lzZSA9IDBcbiAgdGhpcy5jdXJzb3JTcGVlZCA9IDM7XG5cblxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUuZW5hYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlVcCk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5kaXNhYmxlUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbigpe1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdGFydEdhbWUpO1xufVxuXG5Db250cm9scy5wcm90b3R5cGUua2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgaWYgKCF0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSl7XG4gICAgICAgIHRoaXMuY29udHJvbHMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9ja3dpc2UgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kZWdyZWVzICs9IHRoaXMuY3Vyc29yU3BlZWQ7ICBcbiAgICAgICAgfSwgKDEwMDAvNjApICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuY29udHJvbHMubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICAgIH0sICgxMDAwLzYwKSApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLmNvbnRyb2xzLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY2Nsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vLyAhIE5vdCBXb3JraW5nXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmdhbWVPdmVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzKCk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sczsiLCJcblxuZnVuY3Rpb24gR2FtZSgpIHtcblx0dGhpcy5nYW1lU3RhdGUgPSBmYWxzZTtcbn1cblxuaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBmYWxzZSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9