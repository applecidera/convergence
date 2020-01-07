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

  ctx.rotate(2 * Math.PI / 360 * (degrees % 360));
  ctx.translate(105, 0);
  ctx.drawImage(cursor, 0, -35);
  ctx.restore(); // ctx.beginPath();
  // ctx.arc(DIM_X/2, DIM_Y/2, 105, 0, Math.PI * 2, false); // Earth orbit
  // ctx.stroke();

  ctx.drawImage(warpGate[warpGateIndex], DIM_X / 4 + 100, DIM_Y / 4 + 100, DIM_X / 4, DIM_Y / 4);
  ctx.drawImage(sunMap, 0, 0, DIM_X, DIM_Y);
  window.requestAnimationFrame(draw);
} // player controls


var controls = {
  left: {
    active: false
  },
  right: {
    active: false
  }
};
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
var clockwise;
var cclockwise;
var cursorSpeed = 3;

function keyDown(e) {
  ;

  switch (e.code) {
    case "ArrowRight":
      if (!controls.right.active) {
        controls.right.active = true;
        clockwise = setInterval(function () {
          degrees += cursorSpeed;
        }, 1000 / 60);
      }

      break;

    case "ArrowLeft":
      if (!controls.left.active) {
        controls.left.active = true;
        cclockwise = setInterval(function () {
          degrees -= cursorSpeed;
        }, 1000 / 60);
      }

      break;
  }
}

function keyUp(e) {
  ;

  switch (e.code) {
    case "ArrowRight":
      controls.right.active = false;
      clearInterval(clockwise);
      break;

    case "ArrowLeft":
      controls.left.active = false;
      clearInterval(cclockwise);
      break;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJzdW5NYXAiLCJJbWFnZSIsImN1cnNvciIsIndhcnBHYXRlMSIsIndhcnBHYXRlMiIsIndhcnBHYXRlMyIsIndhcnBHYXRlIiwid2FycEdhdGVJbmRleCIsImRlZ3JlZXMiLCJpbml0Iiwic3JjIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsInNldEludGVydmFsIiwiRElNX1giLCJESU1fWSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiY29udHJvbHMiLCJsZWZ0IiwiYWN0aXZlIiwicmlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93biIsImtleVVwIiwiY2xvY2t3aXNlIiwiY2Nsb2Nrd2lzZSIsImN1cnNvclNwZWVkIiwiZSIsImNvZGUiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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Q0MsSUFBVCxDQUFjQyxNQUFkLEdBQXVCLElBQXZCO0FBQ0FNLGtCQUFVLEdBQUc3QixXQUFXLENBQUMsWUFBTTtBQUM3Qk4saUJBQU8sSUFBSW9DLFdBQVg7QUFDRCxTQUZ1QixFQUVwQixPQUFLLEVBRmUsQ0FBeEI7QUFHRDs7QUFDRDtBQWhCSjtBQWtCRDs7QUFFRCxTQUFTSCxLQUFULENBQWVJLENBQWYsRUFBa0I7QUFBQzs7QUFDakIsVUFBUUEsQ0FBQyxDQUFDQyxJQUFWO0FBQ0UsU0FBSyxZQUFMO0FBQ0VYLGNBQVEsQ0FBQ0csS0FBVCxDQUFlRCxNQUFmLEdBQXdCLEtBQXhCO0FBQ0FVLG1CQUFhLENBQUNMLFNBQUQsQ0FBYjtBQUNBOztBQUNGLFNBQUssV0FBTDtBQUNFUCxjQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxHQUF1QixLQUF2QjtBQUNBVSxtQkFBYSxDQUFDSixVQUFELENBQWI7QUFDQTtBQVJKO0FBVUQ7O0FBRURsQyxJQUFJLEc7Ozs7Ozs7Ozs7O0FDN0hKLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2pzL2dhbWUnKTtcbi8vIGNvbnN0IFZpZXdQb3J0ID0gcmVxdWlyZSgnLi9qcy92aWV3cG9ydCcpXG5cbi8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIik7XG4vLyBjYW52YXMud2lkdGggPSBHYW1lLkRJTV9YO1xuLy8gY2FudmFzLmhlaWdodCA9IEdhbWUuRElNX1k7XG5cbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbi8vIG5ldyBWaWV3UG9ydChnYW1lLCBjdHgpLnN0YXJ0KCk7XG4vLyBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG4vLyBHYW1lIENvbnN0YW50c1xuY29uc3Qgc3VuTWFwID0gbmV3IEltYWdlKCk7XG5jb25zdCBjdXJzb3IgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgd2FycEdhdGUyID0gbmV3IEltYWdlKCk7XG5jb25zdCB3YXJwR2F0ZTMgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHdhcnBHYXRlID0gW3dhcnBHYXRlMSwgd2FycEdhdGUyLCB3YXJwR2F0ZTNdO1xubGV0IHdhcnBHYXRlSW5kZXggPSAwO1xubGV0IGRlZ3JlZXMgPSAwO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBzdW5NYXAuc3JjID0gJ2h0dHBzOi8vbWRuLm1vemlsbGFkZW1vcy5vcmcvZmlsZXMvMTQ1Ni9DYW52YXNfc3VuLnBuZyc7XG4gIGN1cnNvci5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3BpeGVsX3NoaXBfcmVkX3NtYWxsXzIucG5nJztcbiAgd2FycEdhdGUxLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMS5wbmcnO1xuICB3YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG4gIHdhcnBHYXRlMy5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzMucG5nJztcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHdhcnBHYXRlSW5kZXggKz0gMTtcbiAgICBpZiAod2FycEdhdGVJbmRleCA9PT0gMykgd2FycEdhdGVJbmRleCA9IDA7XG4gIH0sIDUwMCk7XG59XG5cbmxldCBESU1fWCA9IDc2ODtcbmxldCBESU1fWSA9IDc2ODtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFnZScpO1xuICBcbmNhbnZhcy53aWR0aCA9IERJTV9YO1xuY2FudmFzLmhlaWdodCA9IERJTV9ZO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG5cbiAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpOyAvLyBjbGVhciBjYW52YXNcblxuICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC40KSc7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDE1MywgMjU1LCAwLjQpJztcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnRyYW5zbGF0ZShESU1fWC8yLCBESU1fWS8yKTtcblxuICAvLyBDdXJzb3JcbiAgXG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKGRlZ3JlZXMgJSAzNjApKTtcbiAgY3R4LnRyYW5zbGF0ZSgxMDUsIDApO1xuICBjdHguZHJhd0ltYWdlKGN1cnNvciwgMCwtMzUpO1xuXG4gIGN0eC5yZXN0b3JlKCk7XG4gIFxuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5hcmMoRElNX1gvMiwgRElNX1kvMiwgMTA1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpOyAvLyBFYXJ0aCBvcmJpdFxuICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgY3R4LmRyYXdJbWFnZSh3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSwgRElNX1gvNCArIDEwMCwgRElNX1kvNCArIDEwMCxESU1fWC80LCBESU1fWS80KVxuIFxuICBjdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgRElNX1gsIERJTV9ZKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xufVxuXG5cbi8vIHBsYXllciBjb250cm9sc1xuXG5jb25zdCBjb250cm9scyA9IHtcbiAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICByaWdodDoge2FjdGl2ZTogZmFsc2V9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXApO1xuXG5sZXQgY2xvY2t3aXNlO1xubGV0IGNjbG9ja3dpc2U7XG5sZXQgY3Vyc29yU3BlZWQgPSAzO1xuXG5mdW5jdGlvbiBrZXlEb3duKGUpIHs7XG4gIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGlmICghY29udHJvbHMucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgY29udHJvbHMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGRlZ3JlZXMgKz0gY3Vyc29yU3BlZWQ7ICBcbiAgICAgICAgfSwgKDEwMDAvNjApICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIWNvbnRyb2xzLmxlZnQuYWN0aXZlKXtcbiAgICAgICAgY29udHJvbHMubGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGRlZ3JlZXMgLT0gY3Vyc29yU3BlZWQ7ICBcbiAgICAgICAgfSwgKDEwMDAvNjApICk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlVcChlKSB7O1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBjb250cm9scy5yaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2xvY2t3aXNlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgIGNvbnRyb2xzLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjbGVhckludGVydmFsKGNjbG9ja3dpc2UpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuaW5pdCgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=