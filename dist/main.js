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


var Game = __webpack_require__(/*! ./js/game */ "./src/js/game.js");

var ViewPort = __webpack_require__(/*! ./js/viewport */ "./src/js/viewport.js");

var canvas = document.getElementById("stage");
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;
var ctx = canvas.getContext("2d");
var game = new Game();
new ViewPort(game, ctx).start();
console.log("hello");

/***/ }),

/***/ "./src/js/cursor.js":
/*!**************************!*\
  !*** ./src/js/cursor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Cursor(options) {
  this.game = options.game;
  this.pos = [this.game.DIM_X / 2, this.game.DIM_Y / 2];
  this.color = '#000000';
  this.radius = 15;
}

Cursor.prototype.draw = function draw(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.fill();
};

module.exports = Cursor;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Cursor = __webpack_require__(/*! ./cursor */ "./src/js/cursor.js");

function Game() {
  this.cursor = [];
  this.walls = [];
}

Game.DIM_X = 1024;
Game.DIM_Y = 768;

Game.prototype.allObjects = function () {
  return [].concat(this.cursor, this.walls);
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function (object) {
    object.move(delta);
  });
};

Game.prototype.add = function add(object) {
  if (object instanceof Cursor) {
    this.cursor.push(object);
  }
}; // Game.prototype.remove = function remove(object){
// }


Game.prototype.addCursor = function addCursor() {
  var cursor = new Cursor({
    pos: [Game.DIM_X / 2, Game.DIM_Y / 2],
    game: this
  });
};

Game.prototype.draw = function draw(ctx) {
  this.allObjects().forEach(function (object) {
    object.draw(ctx);
  });
};

Game.prototype.step = function step(delta) {
  this.moveObjects(delta);
};

module.exports = Game;

/***/ }),

/***/ "./src/js/viewport.js":
/*!****************************!*\
  !*** ./src/js/viewport.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ViewPort(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.cursor = this.game.addCursor();
}

ViewPort.prototype.start = function start() {
  // this.bindKeyHandlers();
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
};

ViewPort.prototype.animate = function animate(time) {
  var timeDelta = time - this.lastTime;
  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = ViewPort;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIlZpZXdQb3J0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiQ3Vyc29yIiwib3B0aW9ucyIsInBvcyIsImNvbG9yIiwicmFkaXVzIiwicHJvdG90eXBlIiwiZHJhdyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3Vyc29yIiwid2FsbHMiLCJhbGxPYmplY3RzIiwiY29uY2F0IiwibW92ZU9iamVjdHMiLCJkZWx0YSIsImZvckVhY2giLCJvYmplY3QiLCJtb3ZlIiwiYWRkIiwicHVzaCIsImFkZEN1cnNvciIsInN0ZXAiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJiaW5kIiwidGltZSIsInRpbWVEZWx0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFD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TUFBTCxHQUFjLEtBQUtuQixJQUFMLENBQVU4QixTQUFWLEVBQWQ7QUFDQTs7QUFFRHhDLFFBQVEsQ0FBQ21CLFNBQVQsQ0FBbUJSLEtBQW5CLEdBQTJCLFNBQVNBLEtBQVQsR0FBaUI7QUFDM0M7QUFDQSxPQUFLK0IsUUFBTCxHQUFnQixDQUFoQjtBQUVBQyx1QkFBcUIsQ0FBQyxLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxDQUFyQjtBQUNBLENBTEQ7O0FBT0E3QyxRQUFRLENBQUNtQixTQUFULENBQW1CeUIsT0FBbkIsR0FBNkIsU0FBU0EsT0FBVCxDQUFpQkUsSUFBakIsRUFBdUI7QUFDbkQsTUFBTUMsU0FBUyxHQUFHRCxJQUFJLEdBQUcsS0FBS0osUUFBOUI7QUFFQSxPQUFLaEMsSUFBTCxDQUFVK0IsSUFBVixDQUFlTSxTQUFmO0FBQ0EsT0FBS3JDLElBQUwsQ0FBVVUsSUFBVixDQUFlLEtBQUtaLEdBQXBCO0FBQ0EsT0FBS2tDLFFBQUwsR0FBZ0JJLElBQWhCO0FBRUFILHVCQUFxQixDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFELENBQXJCO0FBQ0EsQ0FSRDs7QUFVQWxCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLFFBQWpCLEM7Ozs7Ozs7Ozs7O0FDdkJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2pzL2dhbWUnKTtcbmNvbnN0IFZpZXdQb3J0ID0gcmVxdWlyZSgnLi9qcy92aWV3cG9ydCcpXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIik7XG5jYW52YXMud2lkdGggPSBHYW1lLkRJTV9YO1xuY2FudmFzLmhlaWdodCA9IEdhbWUuRElNX1k7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbm5ldyBWaWV3UG9ydChnYW1lLCBjdHgpLnN0YXJ0KCk7XG5jb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuIiwiZnVuY3Rpb24gQ3Vyc29yKG9wdGlvbnMpIHtcblx0dGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xuXHR0aGlzLnBvcyA9IFsgdGhpcy5nYW1lLkRJTV9YIC8gMiwgdGhpcy5nYW1lLkRJTV9ZIC8gMiBdO1xuICB0aGlzLmNvbG9yID0gJyMwMDAwMDAnO1xuICB0aGlzLnJhZGl1cyA9IDE1O1xufVxuXG5DdXJzb3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KGN0eCkge1xuXHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcblxuXHRjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoXG4gICAgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIHRydWVcbiAgKTtcbiAgY3R4LmZpbGwoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Vyc29yO1xuIiwiY29uc3QgQ3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcblx0dGhpcy5jdXJzb3IgPSBbXTtcblx0dGhpcy53YWxscyA9IFtdO1xufVxuXG5HYW1lLkRJTV9YID0gMTAyNDtcbkdhbWUuRElNX1kgPSA3Njg7XG5cbkdhbWUucHJvdG90eXBlLmFsbE9iamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLmN1cnNvciwgdGhpcy53YWxscylcbn1cblxuR2FtZS5wcm90b3R5cGUubW92ZU9iamVjdHMgPSBmdW5jdGlvbiBtb3ZlT2JqZWN0cyhkZWx0YSkge1xuICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIG9iamVjdC5tb3ZlKGRlbHRhKTtcbiAgfSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQob2JqZWN0KSB7XG5cdGlmIChvYmplY3QgaW5zdGFuY2VvZiBDdXJzb3IpIHtcblx0XHR0aGlzLmN1cnNvci5wdXNoKG9iamVjdCk7XG5cdH1cbn07XG5cbi8vIEdhbWUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShvYmplY3Qpe1xuXG4vLyB9XG5cbkdhbWUucHJvdG90eXBlLmFkZEN1cnNvciA9IGZ1bmN0aW9uIGFkZEN1cnNvcigpIHtcblx0Y29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcih7XG5cdFx0cG9zOiBbIEdhbWUuRElNX1ggLyAyLCBHYW1lLkRJTV9ZIC8gMiBdLFxuXHRcdGdhbWU6IHRoaXNcblx0fSk7XG59O1xuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gZHJhdyhjdHgpe1xuICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpPT57XG4gICAgb2JqZWN0LmRyYXcoY3R4KTtcbiAgfSk7XG59XG5cbkdhbWUucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiBzdGVwKGRlbHRhKXtcbiAgdGhpcy5tb3ZlT2JqZWN0cyhkZWx0YSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImZ1bmN0aW9uIFZpZXdQb3J0KGdhbWUsIGN0eCkge1xuXHR0aGlzLmN0eCA9IGN0eDtcblx0dGhpcy5nYW1lID0gZ2FtZTtcblx0dGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuYWRkQ3Vyc29yKCk7XG59XG5cblZpZXdQb3J0LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQvLyB0aGlzLmJpbmRLZXlIYW5kbGVycygpO1xuXHR0aGlzLmxhc3RUaW1lID0gMDtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xufTtcblxuVmlld1BvcnQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiBhbmltYXRlKHRpbWUpIHtcblx0Y29uc3QgdGltZURlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cblx0dGhpcy5nYW1lLnN0ZXAodGltZURlbHRhKTtcblx0dGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuXHR0aGlzLmxhc3RUaW1lID0gdGltZTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3UG9ydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=