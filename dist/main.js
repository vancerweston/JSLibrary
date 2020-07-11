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

/***/ "./src/dice.js":
/*!*********************!*\
  !*** ./src/dice.js ***!
  \*********************/
/*! exports provided: dice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dice\", function() { return dice; });\nlet dice = (function() {\r\n    return {\r\n        rollDie: function(dieType) {\r\n            return Math.floor(Math.random() * Math.floor(dieType)) + 1;\r\n        },\r\n        rollDice: function(numOfDie, dieType) {\r\n            let result = [];\r\n            for (let i = 0; i < numOfDie; i++) {\r\n                result.push(dice.rollDie(dieType));\r\n            }\r\n            return result;\r\n        },\r\n        rollStats: function() {\r\n            let stats = [];\r\n            let diceResults =[];\r\n            let statScore;\r\n            for (let i = 0; i < 6; i++) {\r\n                diceResults = dice.rollDice(4, 6);\r\n                diceResults = diceResults.sort(function(a,b){return b - a});\r\n                diceResults.pop();\r\n                statScore = diceResults[0] + diceResults[1] + diceResults[2];\r\n                stats.push(statScore);\r\n            }\r\n            return stats;\r\n        }\r\n    }\r\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGljZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kaWNlLmpzP2I4NzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBkaWNlID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByb2xsRGllOiBmdW5jdGlvbihkaWVUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKGRpZVR5cGUpKSArIDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsRGljZTogZnVuY3Rpb24obnVtT2ZEaWUsIGRpZVR5cGUpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mRGllOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRpY2Uucm9sbERpZShkaWVUeXBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGxTdGF0czogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGljZVJlc3VsdHMgPVtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhdFNjb3JlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGljZVJlc3VsdHMgPSBkaWNlLnJvbGxEaWNlKDQsIDYpO1xyXG4gICAgICAgICAgICAgICAgZGljZVJlc3VsdHMgPSBkaWNlUmVzdWx0cy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIgLSBhfSk7XHJcbiAgICAgICAgICAgICAgICBkaWNlUmVzdWx0cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHN0YXRTY29yZSA9IGRpY2VSZXN1bHRzWzBdICsgZGljZVJlc3VsdHNbMV0gKyBkaWNlUmVzdWx0c1syXTtcclxuICAgICAgICAgICAgICAgIHN0YXRzLnB1c2goc3RhdFNjb3JlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dice.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ \"./src/dice.js\");\n// import { myMath } from './myMath';\r\n\r\n// let x = 2;\r\n// let y = 3;\r\n\r\n// let addFunc = myMath.add(x,y);\r\n\r\n// console.log('add:', addFunc);\r\n\r\n// let subFunc = myMath.subtract(y,x);\r\n\r\n// console.log('sub:', subFunc);\r\n\r\n\r\n\r\n\r\nlet result = _dice__WEBPACK_IMPORTED_MODULE_0__[\"dice\"].rollDie(10);\r\n\r\nconsole.log(result);\r\n\r\nlet diceTotal = _dice__WEBPACK_IMPORTED_MODULE_0__[\"dice\"].rollDice(3, 8);\r\n\r\nconsole.log(diceTotal);\r\n\r\nlet myStats = _dice__WEBPACK_IMPORTED_MODULE_0__[\"dice\"].rollStats();\r\n\r\nconsole.log(myStats);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBteU1hdGggfSBmcm9tICcuL215TWF0aCc7XHJcblxyXG4vLyBsZXQgeCA9IDI7XHJcbi8vIGxldCB5ID0gMztcclxuXHJcbi8vIGxldCBhZGRGdW5jID0gbXlNYXRoLmFkZCh4LHkpO1xyXG5cclxuLy8gY29uc29sZS5sb2coJ2FkZDonLCBhZGRGdW5jKTtcclxuXHJcbi8vIGxldCBzdWJGdW5jID0gbXlNYXRoLnN1YnRyYWN0KHkseCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZygnc3ViOicsIHN1YkZ1bmMpO1xyXG5cclxuXHJcbmltcG9ydCB7IGRpY2UgfSBmcm9tICcuL2RpY2UnO1xyXG5cclxubGV0IHJlc3VsdCA9IGRpY2Uucm9sbERpZSgxMCk7XHJcblxyXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxubGV0IGRpY2VUb3RhbCA9IGRpY2Uucm9sbERpY2UoMywgOCk7XHJcblxyXG5jb25zb2xlLmxvZyhkaWNlVG90YWwpO1xyXG5cclxubGV0IG15U3RhdHMgPSBkaWNlLnJvbGxTdGF0cygpO1xyXG5cclxuY29uc29sZS5sb2cobXlTdGF0cyk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });