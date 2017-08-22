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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = (function () {
    function Canvas(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.appendCanvas();
    }
    Canvas.prototype.addEventListener = function (event, callback) {
        this.canvas.addEventListener(event, callback);
    };
    Canvas.prototype.line = function (x, y, dx, dy) {
        var prevStyle = this.context.fillStyle;
        this.context.fillStyle = '#111111';
        this.context.lineJoin = 'round';
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(dx, dy);
        this.context.closePath();
        this.context.stroke();
        this.context.fillStyle = prevStyle;
    };
    Canvas.prototype.appendCanvas = function () {
        if (!document.body) {
            document.appendChild(document.createElement('body'));
        }
        document.body.appendChild(this.canvas);
    };
    return Canvas;
}());
exports.Canvas = Canvas;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvas_1 = __webpack_require__(0);
var cursor_1 = __webpack_require__(2);
var canvas = new canvas_1.Canvas(window.innerWidth, window.innerHeight);
var cursor = new cursor_1.Cursor(canvas);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cursor = (function () {
    function Cursor(canvas) {
        this.canvas = canvas;
        this.isMouseDown = false;
        this.canvas.addEventListener('mousemove', this.draw());
        this.canvas.addEventListener('mousedown', this.mouseDown());
        this.canvas.addEventListener('mouseup', this.mouseUp());
    }
    Cursor.prototype.draw = function () {
        var cursor = this;
        return function (event) {
            if (cursor.isMouseDown) {
                var startX = cursor.lastX || event.layerX - 1;
                var startY = cursor.lastY || event.layerY - 1;
                cursor.canvas.line(startX, startY, event.layerX, event.layerY);
                cursor.lastX = event.layerX;
                cursor.lastY = event.layerY;
            }
        };
    };
    Cursor.prototype.mouseDown = function () {
        var cursor = this;
        return function (event) {
            cursor.isMouseDown = true;
        };
    };
    Cursor.prototype.mouseUp = function () {
        var cursor = this;
        return function (event) {
            cursor.lastX = null;
            cursor.lastY = null;
            cursor.isMouseDown = false;
        };
    };
    return Cursor;
}());
exports.Cursor = Cursor;


/***/ })
/******/ ]);