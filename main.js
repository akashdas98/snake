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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.querySelector('canvas');\nconst c = canvas.getContext('2d');\nconst scale = 20;\n\ncanvas.height = 500;\ncanvas.width = 500;\n\nfunction makeSnake() {\n    let x = 0;\n    let y = 0;\n    let xSpeed = 1;\n    let ySpeed = 0;\n    \n    function draw() {\n        c.fillStyle = '#13ba2c';\n        c.fillRect(x, y, scale, scale);\n    }\n    function update() {\n        x += xSpeed;\n        y += ySpeed;\n        if(x > canvas.width)\n            x = 0;\n        if(y > canvas.height)\n            y = 0;\n        if(x < 0 - scale)\n            x = canvas.width;\n        if(y < 0 - scale)\n            y = canvas.height;\n    }\n    function changeDirection(direction) {\n        if(x % scale != 0 || y % scale != 0) {\n            setTimeout(() => {\n                changeDirection(direction);\n            }, 10);\n            \n            return;\n        }\n        if(x < 0 || x == canvas.width || y < 0 || y == canvas.height) return;\n        switch(direction) {\n            case 'Up':\n                xSpeed = 0;\n                ySpeed = -1;\n                break;\n            case 'Down':\n                xSpeed = 0;\n                ySpeed = 1;\n                break;\n            case 'Left':\n                ySpeed = 0;\n                xSpeed = -1;\n                break;\n            case 'Right':\n                ySpeed = 0;\n                xSpeed = 1;\n                break;\n        }\n    }\n\n    return {\n        draw,\n        update,\n        changeDirection,\n    };\n}\n\nconst Snake = makeSnake();\n\n(function game() {\n    window.setInterval(() => {\n        c.clearRect(0, 0, canvas.width, canvas.height);\n        Snake.draw();\n        Snake.update();\n    }, 10);\n    window.addEventListener('keydown', (e) => {\n        Snake.changeDirection(e.key.replace('Arrow', ''));\n    });\n}());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });