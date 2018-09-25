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
/******/ 	__webpack_require__.p = "";
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pers_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pers/enemy */ \"./src/pers/enemy.js\");\n/* harmony import */ var _pers_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pers/player */ \"./src/pers/player.js\");\n/* harmony import */ var _pers_powerdot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pers/powerdot */ \"./src/pers/powerdot.js\");\n/* harmony import */ var _lib_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/render */ \"./src/lib/render.js\");\n/* harmony import */ var _lib_move__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/move */ \"./src/lib/move.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.createElement(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nconst image = new Image();\r\nimage.src = \"./img/pac.png\";\r\nimage.onload = () => {\r\n  window.addEventListener(\"resize\", resizeCanvas, false);\r\n  resizeCanvas();\r\n};\r\n\r\nconst enemy = Object(_pers_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst data = {\r\n  pscore: 0,\r\n  gscore: 0\r\n};\r\n\r\nconst keyClick = {};\r\ndocument.addEventListener(\"keydown\", event => {\r\n  keyClick[event.keyCode] = true;\r\n  console.log(event.keyCode);\r\n  Object(_lib_move__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(keyClick, _pers_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"], canvas);\r\n});\r\ndocument.addEventListener(\"keyup\", event => {\r\n  delete keyClick[event.keyCode];\r\n});\r\n\r\nconst resizeCanvas = () => {\r\n  canvas.height = window.innerHeight;\r\n  canvas.width = window.innerWidth;\r\n  Object(_lib_render__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctx, canvas, _pers_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"], enemy, _pers_powerdot__WEBPACK_IMPORTED_MODULE_2__[\"default\"], data.pscore, data.gscore, image);\r\n  requestAnimationFrame(resizeCanvas);\r\n};\r\n\r\ndocument.body.appendChild(canvas);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/move.js":
/*!*************************!*\
  !*** ./src/lib/move.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((keyClick, player, canvas) => {\r\n  if (37 in keyClick) {\r\n    player.x -= player.speed;\r\n    player.pacY = 64;\r\n  }\r\n  if (38 in keyClick) {\r\n    player.y -= player.speed;\r\n    player.pacY = 96;\r\n  }\r\n  if (39 in keyClick) {\r\n    player.x += player.speed;\r\n    player.pacY = 0;\r\n  }\r\n  if (40 in keyClick) {\r\n    player.y += player.speed;\r\n    player.pacY = 32;\r\n  }\r\n\r\n  if (player.x >= canvas.width + 1) {\r\n    player.x = -20;\r\n  }\r\n  if (player.x <= -30) {\r\n    player.x = canvas.width;\r\n  }\r\n  if (player.y <= -30) {\r\n    player.y = canvas.height;\r\n  }\r\n  if (player.y >= canvas.height + 1) {\r\n    player.y = -20;\r\n  }\r\n\r\n  player.pacX = player.pacX === 320 ? 352 : 320;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/lib/move.js?");

/***/ }),

/***/ "./src/lib/randomeFunc.js":
/*!********************************!*\
  !*** ./src/lib/randomeFunc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (n => {\r\n  return Math.floor(Math.random() * n);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/lib/randomeFunc.js?");

/***/ }),

/***/ "./src/lib/render.js":
/*!***************************!*\
  !*** ./src/lib/render.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randomeFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomeFunc */ \"./src/lib/randomeFunc.js\");\n\r\n\r\nlet showEnemy = false;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((\r\n  ctx,\r\n  canvas,\r\n  player,\r\n  enemy,\r\n  powerdot,\r\n  pscore,\r\n  gscore,\r\n  image\r\n) => {\r\n  ctx.fillStyle = \"black\";\r\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n  ctx.font = \"20px Verbana\";\r\n\r\n  ctx.fillStyle = \"white\";\r\n  ctx.fillText(`Человек: ${pscore}    Сопливчик: ${gscore}`, 2, 20);\r\n\r\n  if (!showEnemy) {\r\n    enemy.pacX = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5) * 64;\r\n    enemy.speed = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    enemy.x = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas.width - 62);\r\n    enemy.y = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas.height - 62);\r\n    showEnemy = true;\r\n  } else {\r\n    ctx.fillStyle = \"#ffff00\";\r\n    ctx.beginPath();\r\n    ctx.arc(powerdot.x, powerdot.y, 8, 0, Math.PI * 2, true);\r\n    ctx.fill();\r\n  }\r\n\r\n  if (enemy.moving <= 0) {\r\n    enemy.moving = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(30) * 3;\r\n    enemy.speed = Object(_randomeFunc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    enemy.dirX = 0;\r\n    enemy.dirY = 0;\r\n\r\n    if (enemy.moving % 2) {\r\n      enemy.dirX = player.x < enemy.x ? -enemy.speed : enemy.speed;\r\n    } else {\r\n      enemy.dirY = player.y < enemy.y ? -enemy.speed : enemy.speed;\r\n    }\r\n  }\r\n\r\n  enemy.moving--;\r\n  enemy.x += enemy.dirX;\r\n  enemy.y += enemy.dirY;\r\n  enemy.pacY = enemy.pacY === 0 ? (enemy.pacY = 32) : (enemy.pacY = 0);\r\n\r\n  ctx.drawImage(\r\n    image,\r\n    player.pacX,\r\n    player.pacY,\r\n    32,\r\n    32,\r\n    player.x,\r\n    player.y,\r\n    player.size,\r\n    player.size\r\n  );\r\n  ctx.drawImage(\r\n    image,\r\n    enemy.pacX,\r\n    enemy.pacY,\r\n    32,\r\n    32,\r\n    enemy.x,\r\n    enemy.y,\r\n    enemy.size,\r\n    enemy.size\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack:///./src/lib/render.js?");

/***/ }),

/***/ "./src/pers/enemy.js":
/*!***************************!*\
  !*** ./src/pers/enemy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((\r\n  x = 110,\r\n  y = 310,\r\n  pacX = 0,\r\n  pacY = 0,\r\n  size = 32,\r\n  moving = 0,\r\n  dirX = 0,\r\n  dirY = 0,\r\n  speed = 5\r\n) => {\r\n  return {\r\n    x,\r\n    y,\r\n    pacX,\r\n    pacY,\r\n    size,\r\n    moving,\r\n    dirX,\r\n    dirY,\r\n    speed\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/pers/enemy.js?");

/***/ }),

/***/ "./src/pers/player.js":
/*!****************************!*\
  !*** ./src/pers/player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  x: 10,\r\n  y: 30,\r\n  pacX: 320,\r\n  pacY: 0,\r\n  size: 32,\r\n  speed: 5\r\n});\r\n\n\n//# sourceURL=webpack:///./src/pers/player.js?");

/***/ }),

/***/ "./src/pers/powerdot.js":
/*!******************************!*\
  !*** ./src/pers/powerdot.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  x: 110,\r\n  y: 310,\r\n  powerUp: false,\r\n  pcountdoun: 0,\r\n  ghostNum: 0,\r\n  ghosteat: false\r\n});\r\n\n\n//# sourceURL=webpack:///./src/pers/powerdot.js?");

/***/ })

/******/ });