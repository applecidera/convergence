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

var canvas = document.getElementById("viewport");
canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;
var ctx = canvas.getContext("2d");
var game = new Game(); // new ViewPort(game, ctx).start();

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Triangle = __webpack_require__(/*! ./triangle */ "./src/js/triangle.js");

function Game() {
  this.triangle = [];
  this.walls = [];
}

Game.DIM_X = 1024;
Game.DIM_Y = 768;

Game.prototype.allObjects = function () {
  return [].concat(this.triangle, this.walls);
}; // Game.prototype.add = function add(object){
//   switch (object){
//     case (object instanceof Triangle):
//       this.triangle.push(object); // adds Triangle to the game
//       break;
//   }
// }
// Game.prototype.addTriangle = function addTriangle() {
//   const triangle = new Triangle({
//     pos: [500,500],
//     game: this
//   });
//   this.add(triangle);
//   return triangle;
// }


module.exports = Game;

/***/ }),

/***/ "./src/js/triangle.js":
/*!****************************!*\
  !*** ./src/js/triangle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Triangle() {
  this.dimensions = options.dimensions;
  this.game = options.game;
  this.pos = [this.game.DIM_X / 2, this.game.DIM_Y / 2];
  this.color = "#000000";
}

;

Triangle.prototype.draw = function draw(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath(this.game.DIM_X, this.game.DIM_Y);
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
};

module.exports = Triangle;

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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiVmlld1BvcnQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJUcmlhbmdsZSIsInRyaWFuZ2xlIiwid2FsbHMiLCJwcm90b3R5cGUiLCJhbGxPYmplY3RzIiwiY29uY2F0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRpbWVuc2lvbnMiLCJvcHRpb25zIiwicG9zIiwiY29sb3IiLCJkcmF3IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFF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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vanMvZ2FtZScpO1xuY29uc3QgVmlld1BvcnQgPSByZXF1aXJlKCcuL2pzL3ZpZXdwb3J0JylcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3cG9ydFwiKTtcbmNhbnZhcy53aWR0aCA9IEdhbWUuRElNX1g7XG5jYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuLy8gbmV3IFZpZXdQb3J0KGdhbWUsIGN0eCkuc3RhcnQoKTtcbiIsImNvbnN0IFRyaWFuZ2xlID0gcmVxdWlyZSgnLi90cmlhbmdsZScpO1xuXG5mdW5jdGlvbiBHYW1lKCl7XG4gIHRoaXMudHJpYW5nbGUgPSBbXTtcbiAgdGhpcy53YWxscyA9IFtdO1xufVxuXG5HYW1lLkRJTV9YID0gMTAyNDtcbkdhbWUuRElNX1kgPSA3Njg7XG5cbkdhbWUucHJvdG90eXBlLmFsbE9iamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLnRyaWFuZ2xlLCB0aGlzLndhbGxzKVxufVxuXG4vLyBHYW1lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQob2JqZWN0KXtcbi8vICAgc3dpdGNoIChvYmplY3Qpe1xuLy8gICAgIGNhc2UgKG9iamVjdCBpbnN0YW5jZW9mIFRyaWFuZ2xlKTpcbi8vICAgICAgIHRoaXMudHJpYW5nbGUucHVzaChvYmplY3QpOyAvLyBhZGRzIFRyaWFuZ2xlIHRvIHRoZSBnYW1lXG4vLyAgICAgICBicmVhaztcbi8vICAgfVxuLy8gfVxuXG4vLyBHYW1lLnByb3RvdHlwZS5hZGRUcmlhbmdsZSA9IGZ1bmN0aW9uIGFkZFRyaWFuZ2xlKCkge1xuLy8gICBjb25zdCB0cmlhbmdsZSA9IG5ldyBUcmlhbmdsZSh7XG4vLyAgICAgcG9zOiBbNTAwLDUwMF0sXG4vLyAgICAgZ2FtZTogdGhpc1xuLy8gICB9KTtcblxuLy8gICB0aGlzLmFkZCh0cmlhbmdsZSk7XG5cbi8vICAgcmV0dXJuIHRyaWFuZ2xlO1xuLy8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiZnVuY3Rpb24gVHJpYW5nbGUoKXtcbiAgdGhpcy5kaW1lbnNpb25zID0gb3B0aW9ucy5kaW1lbnNpb25zO1xuICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gIHRoaXMucG9zID0gW3RoaXMuZ2FtZS5ESU1fWCAvIDIsIHRoaXMuZ2FtZS5ESU1fWSAvIDJdO1xuICB0aGlzLmNvbG9yID0gXCIjMDAwMDAwXCI7XG59O1xuXG5UcmlhbmdsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KXtcbiAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG5cbiAgY3R4LmJlZ2luUGF0aCh0aGlzLmdhbWUuRElNX1gsIHRoaXMuZ2FtZS5ESU1fWSk7XG4gIGN0eC5tb3ZlVG8oNzUsIDUwKTtcbiAgY3R4LmxpbmVUbygxMDAsIDc1KTtcbiAgY3R4LmxpbmVUbygxMDAsIDI1KTtcbiAgY3R4LmZpbGwoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmlhbmdsZTsiLCJmdW5jdGlvbiBWaWV3UG9ydChnYW1lLCBjdHgpe1xuICB0aGlzLmN0eCA9IGN0eDtcbiAgdGhpcy5nYW1lID0gZ2FtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3UG9ydDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9