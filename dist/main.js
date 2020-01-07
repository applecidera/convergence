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
  this.cursor = []; // this.walls = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIlZpZXdQb3J0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwiQ3Vyc29yIiwib3B0aW9ucyIsInBvcyIsImNvbG9yIiwicmFkaXVzIiwicHJvdG90eXBlIiwiZHJhdyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3Vyc29yIiwiYWxsT2JqZWN0cyIsImNvbmNhdCIsIndhbGxzIiwibW92ZU9iamVjdHMiLCJkZWx0YSIsImZvckVhY2giLCJvYmplY3QiLCJtb3ZlIiwiYWRkIiwicHVzaCIsImFkZEN1cnNvciIsInN0ZXAiLCJsYXN0VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJiaW5kIiwidGltZSIsInRpbWVEZWx0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFD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LElBQUwsQ0FBVThCLFNBQVYsRUFBZDtBQUNBOztBQUVEeEMsUUFBUSxDQUFDbUIsU0FBVCxDQUFtQlIsS0FBbkIsR0FBMkIsU0FBU0EsS0FBVCxHQUFpQjtBQUMzQztBQUNBLE9BQUsrQixRQUFMLEdBQWdCLENBQWhCO0FBRUFDLHVCQUFxQixDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFELENBQXJCO0FBQ0EsQ0FMRDs7QUFPQTdDLFFBQVEsQ0FBQ21CLFNBQVQsQ0FBbUJ5QixPQUFuQixHQUE2QixTQUFTQSxPQUFULENBQWlCRSxJQUFqQixFQUF1QjtBQUNuRCxNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxLQUFLSixRQUE5QjtBQUVBLE9BQUtoQyxJQUFMLENBQVUrQixJQUFWLENBQWVNLFNBQWY7QUFDQSxPQUFLckMsSUFBTCxDQUFVVSxJQUFWLENBQWUsS0FBS1osR0FBcEI7QUFDQSxPQUFLa0MsUUFBTCxHQUFnQkksSUFBaEI7QUFFQUgsdUJBQXFCLENBQUMsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQUQsQ0FBckI7QUFDQSxDQVJEOztBQVVBbEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUIsUUFBakIsQzs7Ozs7Ozs7Ozs7QUN2QkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vanMvZ2FtZScpO1xuY29uc3QgVmlld1BvcnQgPSByZXF1aXJlKCcuL2pzL3ZpZXdwb3J0JylcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFnZVwiKTtcbmNhbnZhcy53aWR0aCA9IEdhbWUuRElNX1g7XG5jYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xubmV3IFZpZXdQb3J0KGdhbWUsIGN0eCkuc3RhcnQoKTtcbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4iLCJmdW5jdGlvbiBDdXJzb3Iob3B0aW9ucykge1xuXHR0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG5cdHRoaXMucG9zID0gWyB0aGlzLmdhbWUuRElNX1ggLyAyLCB0aGlzLmdhbWUuRElNX1kgLyAyIF07XG4gIHRoaXMuY29sb3IgPSAnIzAwMDAwMCc7XG4gIHRoaXMucmFkaXVzID0gMTU7XG59XG5cbkN1cnNvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG5cdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuXG5cdGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyhcbiAgICB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgdHJ1ZVxuICApO1xuICBjdHguZmlsbCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJjb25zdCBDdXJzb3IgPSByZXF1aXJlKCcuL2N1cnNvcicpO1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuXHR0aGlzLmN1cnNvciA9IFtdO1xuXHQvLyB0aGlzLndhbGxzID0gW107XG59XG5cbkdhbWUuRElNX1ggPSAxMDI0O1xuR2FtZS5ESU1fWSA9IDc2ODtcblxuR2FtZS5wcm90b3R5cGUuYWxsT2JqZWN0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gW10uY29uY2F0KHRoaXMuY3Vyc29yLCB0aGlzLndhbGxzKVxufVxuXG5HYW1lLnByb3RvdHlwZS5tb3ZlT2JqZWN0cyA9IGZ1bmN0aW9uIG1vdmVPYmplY3RzKGRlbHRhKSB7XG4gIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgb2JqZWN0Lm1vdmUoZGVsdGEpO1xuICB9KTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChvYmplY3QpIHtcblx0aWYgKG9iamVjdCBpbnN0YW5jZW9mIEN1cnNvcikge1xuXHRcdHRoaXMuY3Vyc29yLnB1c2gob2JqZWN0KTtcblx0fVxufTtcblxuLy8gR2FtZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG9iamVjdCl7XG5cbi8vIH1cblxuR2FtZS5wcm90b3R5cGUuYWRkQ3Vyc29yID0gZnVuY3Rpb24gYWRkQ3Vyc29yKCkge1xuXHRjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKHtcblx0XHRwb3M6IFsgR2FtZS5ESU1fWCAvIDIsIEdhbWUuRElNX1kgLyAyIF0sXG5cdFx0Z2FtZTogdGhpc1xuXHR9KTtcbn07XG5cbkdhbWUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiBkcmF3KGN0eCl7XG4gIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCk9PntcbiAgICBvYmplY3QuZHJhdyhjdHgpO1xuICB9KTtcbn1cblxuR2FtZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uIHN0ZXAoZGVsdGEpe1xuICB0aGlzLm1vdmVPYmplY3RzKGRlbHRhKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiZnVuY3Rpb24gVmlld1BvcnQoZ2FtZSwgY3R4KSB7XG5cdHRoaXMuY3R4ID0gY3R4O1xuXHR0aGlzLmdhbWUgPSBnYW1lO1xuXHR0aGlzLmN1cnNvciA9IHRoaXMuZ2FtZS5hZGRDdXJzb3IoKTtcbn1cblxuVmlld1BvcnQucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG5cdC8vIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG5cdHRoaXMubGFzdFRpbWUgPSAwO1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG59O1xuXG5WaWV3UG9ydC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xuXHRjb25zdCB0aW1lRGVsdGEgPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcblxuXHR0aGlzLmdhbWUuc3RlcCh0aW1lRGVsdGEpO1xuXHR0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG5cdHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdQb3J0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==