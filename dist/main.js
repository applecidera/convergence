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
 // const Game = require('./js/game');
// const ViewPort = require('./js/viewport')
// const canvas = document.getElementById("stage");
// canvas.width = Game.DIM_X;
// canvas.height = Game.DIM_Y;
// const ctx = canvas.getContext("2d");
// const game = new Game();
// new ViewPort(game, ctx).start();
// console.log("hello");

var sunMap = new Image();
var cursor = new Image();
var degrees = 0;

function init() {
  sunMap.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  cursor.src = 'https://raw.githubusercontent.com/applecidera/convergence/master/src/assets/cursor_rotated.png';
  window.requestAnimationFrame(draw);
}

var DIM_X = 768;
var DIM_Y = 768;
var canvas = document.getElementById('stage');
canvas.width = DIM_X;
canvas.height = DIM_Y;
var ctx = canvas.getContext('2d');
document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e.code);
}

function draw() {
  degrees += 2;
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, DIM_X, DIM_Y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(DIM_X / 2, DIM_Y / 2); // Cursor

  ctx.rotate(2 * Math.PI / 360 * (degrees % 360));
  ctx.translate(85, 0);
  ctx.drawImage(cursor, -12, -12);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(DIM_X / 2, DIM_Y / 2, 105, 0, Math.PI * 2, false); // Earth orbit

  ctx.stroke();
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);
  window.requestAnimationFrame(draw);
}

init();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJzdW5NYXAiLCJJbWFnZSIsImN1cnNvciIsImRlZ3JlZXMiLCJpbml0Iiwic3JjIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsIkRJTV9YIiwiRElNX1kiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ0tleSIsImUiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0NBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxJQUFJQyxLQUFKLEVBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUQsS0FBSixFQUFmO0FBQ0EsSUFBSUUsT0FBTyxHQUFHLENBQWQ7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkSixRQUFNLENBQUNLLEdBQVAsR0FBYSx3REFBYjtBQUNBSCxRQUFNLENBQUNHLEdBQVAsR0FBYSxnR0FBYjtBQUNBQyxRQUFNLENBQUNDLHFCQUFQLENBQTZCQyxJQUE3QjtBQUNEOztBQUVELElBQUlDLEtBQUssR0FBRyxHQUFaO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFFQSxJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFiO0FBRUFGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlTCxLQUFmO0FBQ0FFLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkwsS0FBaEI7QUFDQSxJQUFJTSxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBRUFMLFFBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNDLE1BQXJDOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxJQUFkO0FBQ0Q7O0FBRUQsU0FBU2YsSUFBVCxHQUFnQjtBQUNkTCxTQUFPLElBQUksQ0FBWDtBQUVBYSxLQUFHLENBQUNRLHdCQUFKLEdBQStCLGtCQUEvQjtBQUNBUixLQUFHLENBQUNTLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CaEIsS0FBcEIsRUFBMkJDLEtBQTNCLEVBSmMsQ0FJcUI7O0FBRW5DTSxLQUFHLENBQUNVLFNBQUosR0FBZ0Isb0JBQWhCO0FBQ0FWLEtBQUcsQ0FBQ1csV0FBSixHQUFrQix3QkFBbEI7QUFDQVgsS0FBRyxDQUFDWSxJQUFKO0FBQ0FaLEtBQUcsQ0FBQ2EsU0FBSixDQUFjcEIsS0FBSyxHQUFDLENBQXBCLEVBQXVCQyxLQUFLLEdBQUMsQ0FBN0IsRUFUYyxDQVdkOztBQUVBTSxLQUFHLENBQUNjLE1BQUosQ0FBYSxJQUFJQyxJQUFJLENBQUNDLEVBQVYsR0FBZ0IsR0FBakIsSUFBeUI3QixPQUFPLEdBQUcsR0FBbkMsQ0FBWDtBQUNBYSxLQUFHLENBQUNhLFNBQUosQ0FBYyxFQUFkLEVBQWtCLENBQWxCO0FBQ0FiLEtBQUcsQ0FBQ2lCLFNBQUosQ0FBYy9CLE1BQWQsRUFBc0IsQ0FBQyxFQUF2QixFQUEyQixDQUFDLEVBQTVCO0FBRUFjLEtBQUcsQ0FBQ2tCLE9BQUo7QUFFQWxCLEtBQUcsQ0FBQ21CLFNBQUo7QUFDQW5CLEtBQUcsQ0FBQ29CLEdBQUosQ0FBUTNCLEtBQUssR0FBQyxDQUFkLEVBQWlCQyxLQUFLLEdBQUMsQ0FBdkIsRUFBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsRUFBa0NxQixJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUE1QyxFQUErQyxLQUEvQyxFQXBCYyxDQW9CeUM7O0FBQ3ZEaEIsS0FBRyxDQUFDcUIsTUFBSjtBQUVBckIsS0FBRyxDQUFDaUIsU0FBSixDQUFjakMsTUFBZCxFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QlMsS0FBNUIsRUFBbUNDLEtBQW5DO0FBRUFKLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJDLElBQTdCO0FBQ0Q7O0FBRURKLElBQUksRzs7Ozs7Ozs7Ozs7QUNwRUosdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vanMvZ2FtZScpO1xuLy8gY29uc3QgVmlld1BvcnQgPSByZXF1aXJlKCcuL2pzL3ZpZXdwb3J0JylcblxuLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFnZVwiKTtcbi8vIGNhbnZhcy53aWR0aCA9IEdhbWUuRElNX1g7XG4vLyBjYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcblxuLy8gY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gbmV3IFZpZXdQb3J0KGdhbWUsIGN0eCkuc3RhcnQoKTtcbi8vIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cblxuY29uc3Qgc3VuTWFwID0gbmV3IEltYWdlKCk7XG5jb25zdCBjdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbmxldCBkZWdyZWVzID0gMDtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgc3VuTWFwLnNyYyA9ICdodHRwczovL21kbi5tb3ppbGxhZGVtb3Mub3JnL2ZpbGVzLzE0NTYvQ2FudmFzX3N1bi5wbmcnO1xuICBjdXJzb3Iuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy9jdXJzb3Jfcm90YXRlZC5wbmcnO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5sZXQgRElNX1ggPSA3Njg7XG5sZXQgRElNX1kgPSA3Njg7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhZ2UnKTtcbiAgXG5jYW52YXMud2lkdGggPSBESU1fWDtcbmNhbnZhcy5oZWlnaHQgPSBESU1fWTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvZ0tleSk7XG5cbmZ1bmN0aW9uIGxvZ0tleShlKSB7XG4gIGNvbnNvbGUubG9nKGUuY29kZSk7XG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGRlZ3JlZXMgKz0gMjtcblxuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMTUzLCAyNTUsIDAuNCknO1xuICBjdHguc2F2ZSgpO1xuICBjdHgudHJhbnNsYXRlKERJTV9YLzIsIERJTV9ZLzIpO1xuXG4gIC8vIEN1cnNvclxuICBcbiAgY3R4LnJvdGF0ZSgoKDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAoZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDg1LCAwKTtcbiAgY3R4LmRyYXdJbWFnZShjdXJzb3IsIC0xMiwgLTEyKTtcblxuICBjdHgucmVzdG9yZSgpO1xuICBcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKERJTV9YLzIsIERJTV9ZLzIsIDEwNSwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgLy8gRWFydGggb3JiaXRcbiAgY3R4LnN0cm9rZSgpO1xuIFxuICBjdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgRElNX1gsIERJTV9ZKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5pbml0KCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==