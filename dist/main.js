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
  switch (e.code) {
    case "ArrowRight":
      if (!this.state.right.active) {
        this.state.right.active = true; // this.clockwise = setInterval(() => {
        //   this.degrees += this.cursorSpeed;  
        // }, (1000/60) );
        // call cursor.moveCursor("clockwise")
      }

      break;

    case "ArrowLeft":
      if (!this.state.left.active) {
        this.state.left.active = true; // this.cclockwise = setInterval(() => {
        //   this.degrees -= this.cursorSpeed;  
        // }, (1000/60) );
        // call cursor.moveCursor("cclockwise")
      }

      break;
  }
};

Controls.prototype.keyUp = function (e) {
  switch (e.code) {
    case "ArrowRight":
      this.state.right.active = false; // clearInterval(this.clockwise);

      break;

    case "ArrowLeft":
      this.state.left.active = false; // clearInterval(this.cclockwise);

      break;
  }
};

Controls.prototype.startGame = function (e) {
  if (e.code === "Space") this.enablePlayerControls();
  clearInterval(this.clockwise);
};

Controls.prototype.gameOver = function () {
  var _this = this;

  this.disablePlayerControls();
  this.clockwise = setInterval(function () {
    _this.degrees += _this.cursorSpeed / 2;
  }, 1000 / 60);
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

Cursor.prototype.collisionDetect = function () {// some sort of hitbox logic
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

Game.prototype.logic = function () {
  var controls = this.controls,
      cursor = this.cursor;

  if (controls.state.left.active) {
    cursor.moveCursor("cclockwise");
  } else if (controls.state.right.active) {
    cursor.moveCursor("clockwise");
  }
};

Game.prototype.draw = function () {
  var dim_x = this.dim_x,
      dim_y = this.dim_y,
      ctx = this.ctx,
      warpGate = this.warpGate,
      warpGateIndex = this.warpGateIndex,
      sunMap = this.sunMap;
  ctx.clearRect(0, 0, dim_x, dim_y); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  this.cursor.draw(ctx, dim_x, dim_y);
  this.ctx.restore(); // Earth orbit

  this.ctx.beginPath();
  this.ctx.arc(dim_x / 2, dim_y / 2, 105, 0, Math.PI * 2, false);
  this.ctx.stroke(); // warpgate

  this.ctx.drawImage(warpGate[warpGateIndex], dim_x / 4 + 97.5, dim_y / 4 + 97.5, dim_x / 4, dim_y / 4); // map

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

Game.prototype.startNewGame = function () {// initialize constants
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
  //Stepper
  var curTime = Date.now();
  var timeDif = curTime - this.setTime; // skip logic and draw if not time yet

  if (timeDif >= this.frameInterval) {
    this.game.logic();
    this.game.draw();
    this.setTime = curTime;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3Vyc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJnYW1lIiwiR2FtZSIsImdhbWVzdGFnZSIsIkdhbWVTdGFnZSIsInRpY2tlciIsIkNvbnRyb2xzIiwiZGVncmVlcyIsInN0YXRlIiwibGVmdCIsImFjdGl2ZSIsInJpZ2h0IiwiZGlzYWJsZVBsYXllckNvbnRyb2xzIiwiYmluZCIsImVuYWJsZVBsYXllckNvbnRyb2xzIiwia2V5RG93biIsImtleVVwIiwic3RhcnRHYW1lIiwiZ2FtZU92ZXIiLCJwcm90b3R5cGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiY2xlYXJJbnRlcnZhbCIsImNsb2Nrd2lzZSIsInNldEludGVydmFsIiwiY3Vyc29yU3BlZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ3Vyc29yIiwiY29udGV4dCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiSW1hZ2UiLCJzcmMiLCJtb3ZlQ3Vyc29yIiwiZGlyZWN0aW9uIiwiY29sbGlzaW9uRGV0ZWN0IiwiZHJhdyIsImRpbV94IiwiZGltX3kiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3SW1hZ2UiLCJyZXF1aXJlIiwiZ2FtZVN0YXRlIiwic3VuTWFwIiwid2FycEdhdGUxIiwid2FycEdhdGUyIiwid2FycEdhdGUzIiwid2FycEdhdGVJbmRleCIsIndhcnBHYXRlIiwid2FycEdhdGVUaW1lciIsImxvZ2ljIiwiY29udHJvbHMiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInNhdmUiLCJyZXN0b3JlIiwiYXJjIiwic3Ryb2tlIiwiYWRkQ3Vyc29yIiwiYWRkQ29udHJvbHMiLCJzdGFydE5ld0dhbWUiLCJmcmFtZVJhdGUiLCJmcmFtZUludGVydmFsIiwic2V0VGltZSIsImN1clRpbWUiLCJEYXRlIiwibm93IiwidGltZURpZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFD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Q0FBZjtBQUNBLE9BQUt0QyxNQUFMLEdBQWMsS0FBS2hDLElBQUwsQ0FBVWlFLFNBQVYsRUFBZDtBQUNBLE9BQUtSLFFBQUwsR0FBZ0IsS0FBS3pELElBQUwsQ0FBVWtFLFdBQVYsRUFBaEI7QUFDQSxPQUFLVCxRQUFMLENBQWN4QyxRQUFkO0FBQ0Q7O0FBRURkLFNBQVMsQ0FBQ2UsU0FBVixDQUFvQmQsTUFBcEIsR0FBNkIsWUFBVTtBQUVyQztBQUNBLE1BQUltRSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFkO0FBQ0EsTUFBSUMsT0FBTyxHQUFHSCxPQUFPLEdBQUcsS0FBS0QsT0FBN0IsQ0FKcUMsQ0FNckM7O0FBQ0EsTUFBSUksT0FBTyxJQUFJLEtBQUtMLGFBQXBCLEVBQWtDO0FBQ2hDLFNBQUtyRSxJQUFMLENBQVV3RCxLQUFWO0FBQ0EsU0FBS3hELElBQUwsQ0FBVXNDLElBQVY7QUFDQSxTQUFLZ0MsT0FBTCxHQUFlQyxPQUFmO0FBQ0EsU0FBS0QsT0FBTCxHQUFlQyxPQUFmO0FBQ0Q7O0FBRURJLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkIsS0FBS3hFLE1BQUwsQ0FBWVEsSUFBWixDQUFpQixJQUFqQixDQUE3QjtBQUNELENBZkQ7O0FBaUJBZSxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixTQUFqQixDOzs7Ozs7Ozs7OztBQzdCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qcy9nYW1lJztcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSAnLi9qcy9nYW1lc3RhZ2UnO1xuXG5sZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YWdlJyk7XG5jYW52YXMud2lkdGggPSA3Njg7XG5jYW52YXMuaGVpZ2h0ID0gNzY4O1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcblxuLy8gaW5zdGFudGlhdGUgZ2FtZVxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5jb25zdCBnYW1lc3RhZ2UgPSBuZXcgR2FtZVN0YWdlKGN0eCwgZ2FtZSk7XG5nYW1lc3RhZ2UudGlja2VyKCk7IiwiXG4vLyBwbGF5ZXIgY29udHJvbHNcbmZ1bmN0aW9uIENvbnRyb2xzKCl7XG4gIHRoaXMuZGVncmVlcyA9IDA7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbGVmdDoge2FjdGl2ZTogZmFsc2V9LFxuICAgIHJpZ2h0OiB7YWN0aXZlOiBmYWxzZX1cbiAgfVxuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IHRoaXMuZGlzYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMgPSB0aGlzLmVuYWJsZVBsYXllckNvbnRyb2xzLmJpbmQodGhpcyk7XG4gIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICB0aGlzLmtleVVwID0gdGhpcy5rZXlVcC5iaW5kKHRoaXMpO1xuICB0aGlzLnN0YXJ0R2FtZSA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5lbmFibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleVVwKTtcbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmRpc2FibGVQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uKCl7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5VXApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN0YXJ0R2FtZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5rZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucmlnaHQuYWN0aXZlKXtcbiAgICAgICAgdGhpcy5zdGF0ZS5yaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmNsb2Nrd2lzZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZDsgIFxuICAgICAgICAvLyB9LCAoMTAwMC82MCkgKTtcblxuICAgICAgICAvLyBjYWxsIGN1cnNvci5tb3ZlQ3Vyc29yKFwiY2xvY2t3aXNlXCIpXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBpZiAoIXRoaXMuc3RhdGUubGVmdC5hY3RpdmUpe1xuICAgICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5jY2xvY2t3aXNlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICAgIC8vIH0sICgxMDAwLzYwKSApO1xuICAgICAgICAvLyBjYWxsIGN1cnNvci5tb3ZlQ3Vyc29yKFwiY2Nsb2Nrd2lzZVwiKVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuQ29udHJvbHMucHJvdG90eXBlLmtleVVwID0gZnVuY3Rpb24oZSkge1xuICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICB0aGlzLnN0YXRlLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICB0aGlzLnN0YXRlLmxlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Nsb2Nrd2lzZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5Db250cm9scy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oZSkge1xuICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHRoaXMuZW5hYmxlUGxheWVyQ29udHJvbHMoKTtcbiAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2Nrd2lzZSk7XG59XG5cbkNvbnRyb2xzLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVQbGF5ZXJDb250cm9scygpO1xuICB0aGlzLmNsb2Nrd2lzZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICB0aGlzLmRlZ3JlZXMgKz0gdGhpcy5jdXJzb3JTcGVlZCAvIDI7ICBcbiAgfSwgKDEwMDAvNjApICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7IiwiZnVuY3Rpb24gQ3Vyc29yKGNvbnRleHQpIHtcbiAgdGhpcy5kZWdyZWVzID0gMDsgXG4gIHRoaXMuY3Vyc29yU3BlZWQgPSA1O1xuICB0aGlzLnBvc2l0aW9uID0gW107XG4gIHRoaXMuY3Vyc29yID0gbmV3IEltYWdlKCk7XG4gIHRoaXMuY3Vyc29yLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvcGl4ZWxfc2hpcF9yZWRfc21hbGxfMi5wbmcnO1xufVxuXG5DdXJzb3IucHJvdG90eXBlLm1vdmVDdXJzb3IgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgXCJjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyArPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgXG4gICAgY2FzZSBcImNjbG9ja3dpc2VcIjpcbiAgICAgIHRoaXMuZGVncmVlcyAtPSB0aGlzLmN1cnNvclNwZWVkOyAgXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5DdXJzb3IucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIHNvbWUgc29ydCBvZiBoaXRib3ggbG9naWNcbn1cblxuQ3Vyc29yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCBkaW1feCwgZGltX3kpe1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC50cmFuc2xhdGUoZGltX3gvMiwgZGltX3kvMik7XG4gIGN0eC5yb3RhdGUoKCgyICogTWF0aC5QSSkgLyAzNjApICogKHRoaXMuZGVncmVlcyAlIDM2MCkpO1xuICBjdHgudHJhbnNsYXRlKDEwNSwgMCk7XG4gIGN0eC5kcmF3SW1hZ2UodGhpcy5jdXJzb3IsIDAsLTM1KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXJzb3I7XG4iLCJjb25zdCBDb250cm9scyA9IHJlcXVpcmUoJy4vY29udHJvbHMnKTtcbmNvbnN0IEN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyk7XG5cbi8vIGluaXRpYWxpemVyXG5mdW5jdGlvbiBHYW1lKGNvbnRleHQpIHtcblx0dGhpcy5jdHggPSBjb250ZXh0O1xuXHR0aGlzLmRpbV94ID0gNzY4O1xuXHR0aGlzLmRpbV95ID0gNzY4O1xuXHR0aGlzLmdhbWVTdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLnN1bk1hcCA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMSA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMiA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlMyA9IG5ldyBJbWFnZSgpO1xuXHR0aGlzLndhcnBHYXRlSW5kZXggPSAwO1xuXHR0aGlzLndhcnBHYXRlMS5zcmMgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FwcGxlY2lkZXJhL2NvbnZlcmdlbmNlL21hc3Rlci9zcmMvYXNzZXRzL3dhcnBnYXRlXzEucG5nJztcblx0dGhpcy53YXJwR2F0ZTIuc3JjID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hcHBsZWNpZGVyYS9jb252ZXJnZW5jZS9tYXN0ZXIvc3JjL2Fzc2V0cy93YXJwZ2F0ZV8yLnBuZyc7XG5cdHRoaXMud2FycEdhdGUzLnNyYyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYXBwbGVjaWRlcmEvY29udmVyZ2VuY2UvbWFzdGVyL3NyYy9hc3NldHMvd2FycGdhdGVfMy5wbmcnO1xuXHR0aGlzLndhcnBHYXRlID0gW3RoaXMud2FycEdhdGUxLCB0aGlzLndhcnBHYXRlMiwgdGhpcy53YXJwR2F0ZTNdO1xuXHR0aGlzLnN1bk1hcC5zcmMgPSAnaHR0cHM6Ly9tZG4ubW96aWxsYWRlbW9zLm9yZy9maWxlcy8xNDU2L0NhbnZhc19zdW4ucG5nJztcblx0dGhpcy53YXJwR2F0ZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHRoaXMud2FycEdhdGVJbmRleCArPSAxO1xuXHRcdGlmICh0aGlzLndhcnBHYXRlSW5kZXggPT09IDMpIHRoaXMud2FycEdhdGVJbmRleCA9IDA7XG5cdH0sIDUwMCk7XG59XG5cbkdhbWUucHJvdG90eXBlLmxvZ2ljID0gZnVuY3Rpb24oKXtcblx0Y29uc3Qge2NvbnRyb2xzLCBjdXJzb3J9ID0gdGhpcztcblx0aWYgKGNvbnRyb2xzLnN0YXRlLmxlZnQuYWN0aXZlKXtcblx0XHRjdXJzb3IubW92ZUN1cnNvcihcImNjbG9ja3dpc2VcIik7XG5cdH0gZWxzZSBpZiAoY29udHJvbHMuc3RhdGUucmlnaHQuYWN0aXZlKXtcblx0XHRjdXJzb3IubW92ZUN1cnNvcihcImNsb2Nrd2lzZVwiKTtcblx0fVxufVxuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgeyBkaW1feCwgZGltX3ksIGN0eCwgd2FycEdhdGUsIHdhcnBHYXRlSW5kZXgsIHN1bk1hcH0gPSB0aGlzO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIGRpbV94LCBkaW1feSk7IC8vIGNsZWFyIGNhbnZhc1xuXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjQpJztcbiAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMTUzLCAyNTUsIDAuNCknO1xuXHRjdHguc2F2ZSgpO1xuXHRcblx0dGhpcy5jdXJzb3IuZHJhdyhjdHgsIGRpbV94LCBkaW1feSlcblxuXHR0aGlzLmN0eC5yZXN0b3JlKCk7XG5cbiAgLy8gRWFydGggb3JiaXRcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyhkaW1feC8yLCBkaW1feS8yLCAxMDUsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7IFxuXHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XG5cdC8vIHdhcnBnYXRlXG5cdHRoaXMuY3R4LmRyYXdJbWFnZSh3YXJwR2F0ZVt3YXJwR2F0ZUluZGV4XSwgZGltX3gvNCArIDk3LjUsIGRpbV95LzQgKyA5Ny41LGRpbV94LzQsIGRpbV95LzQpXG5cdFxuXHQvLyBtYXBcbiAgdGhpcy5jdHguZHJhd0ltYWdlKHN1bk1hcCwgMCwgMCwgZGltX3gsIGRpbV95KTtcblxufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRDdXJzb3IgPSBmdW5jdGlvbigpe1xuXHQvLyBvciBtYWtlIGEgdmFyaWFibGUgY3Vyc29yLCBhZGQgdG8gYW4gXCJhZGQgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYnkgb2JqZWN0IHR5cGUgc28geW91IGNhbiBhZGQgZGlmZmVyZW50IHR5cGVzIG9mIG9iamVjdHM/XCJcblx0dGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKCk7XG5cblx0cmV0dXJuIHRoaXMuY3Vyc29yO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hZGRDb250cm9scyA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29udHJvbHMgPSBuZXcgQ29udHJvbHMoKTtcblxuXHRyZXR1cm4gdGhpcy5jb250cm9scztcbn1cblxuR2FtZS5wcm90b3R5cGUuc3RhcnROZXdHYW1lID0gZnVuY3Rpb24oKXtcblx0Ly8gaW5pdGlhbGl6ZSBjb25zdGFudHNcbn1cblxuR2FtZS5wcm90b3R5cGUuZ2FtZU92ZXIgPSBmdW5jdGlvbigpe1xuXHQvLyByZXNldHMgdGhlIHBsYXlmaWVsZFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJcbmZ1bmN0aW9uIEdhbWVTdGFnZSAoY29udGV4dCwgZ2FtZSkge1xuICB0aGlzLmN0eCA9IGNvbnRleHQ7XG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIHRoaXMuZnJhbWVSYXRlID0gNjA7XG4gIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAvdGhpcy5mcmFtZVJhdGU7XG4gIHRoaXMuc2V0VGltZSA9IDA7XG4gIHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmFkZEN1cnNvcigpO1xuICB0aGlzLmNvbnRyb2xzID0gdGhpcy5nYW1lLmFkZENvbnRyb2xzKCk7XG4gIHRoaXMuY29udHJvbHMuZ2FtZU92ZXIoKTtcbn1cblxuR2FtZVN0YWdlLnByb3RvdHlwZS50aWNrZXIgPSBmdW5jdGlvbigpe1xuICBcbiAgLy9TdGVwcGVyXG4gIGxldCBjdXJUaW1lID0gRGF0ZS5ub3coKTtcbiAgbGV0IHRpbWVEaWYgPSBjdXJUaW1lIC0gdGhpcy5zZXRUaW1lO1xuXG4gIC8vIHNraXAgbG9naWMgYW5kIGRyYXcgaWYgbm90IHRpbWUgeWV0XG4gIGlmICh0aW1lRGlmID49IHRoaXMuZnJhbWVJbnRlcnZhbCl7XG4gICAgdGhpcy5nYW1lLmxvZ2ljKCk7XG4gICAgdGhpcy5nYW1lLmRyYXcoKTtcbiAgICB0aGlzLnNldFRpbWUgPSBjdXJUaW1lO1xuICAgIHRoaXMuc2V0VGltZSA9IGN1clRpbWVcbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIuYmluZCh0aGlzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVN0YWdlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=