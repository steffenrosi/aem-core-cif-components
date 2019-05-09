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

/***/ "./src/PageContext.js":
/*!****************************!*\
  !*** ./src/PageContext.js ***!
  \****************************/
/*! exports provided: pageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageContext\", function() { return pageContext; });\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\nwindow.CIF = window.CIF || {};\n\nfunction PageContext() {\n  let pageMask = document.querySelector(\"button.mask__root\");\n  console.log(\"Hello from the PageContext\");\n  return {\n    maskPage: function () {\n      pageMask.classList.toggle(\"mask__root_active\");\n    },\n    unmaskPage: function () {\n      pageMask.classList.toggle(\"mask__root_active\");\n    }\n  };\n}\n\nconst pageContext = new PageContext(); // put it in the window context, just in case somebody else wants to use it\n\nwindow.CIF.PageContext = pageContext;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGFnZUNvbnRleHQuanM/M2ZhZCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJDSUYiLCJQYWdlQ29udGV4dCIsInBhZ2VNYXNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsIm1hc2tQYWdlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidW5tYXNrUGFnZSIsInBhZ2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkFBLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhRCxNQUFNLENBQUNDLEdBQVAsSUFBYyxFQUEzQjs7QUFHQSxTQUFTQyxXQUFULEdBQXVCO0FBQ25CLE1BQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFmO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0EsU0FBTztBQUNIQyxZQUFRLEVBQUUsWUFBWTtBQUNsQkwsY0FBUSxDQUFDTSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixtQkFBMUI7QUFDSCxLQUhFO0FBSUhDLGNBQVUsRUFBRSxZQUFZO0FBQ3BCUixjQUFRLENBQUNNLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLG1CQUExQjtBQUNIO0FBTkUsR0FBUDtBQVFIOztBQUVELE1BQU1FLFdBQVcsR0FBRyxJQUFJVixXQUFKLEVBQXBCLEMsQ0FFQTs7QUFDQUYsTUFBTSxDQUFDQyxHQUFQLENBQVdDLFdBQVgsR0FBeUJVLFdBQXpCIiwiZmlsZSI6Ii4vc3JjL1BhZ2VDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFET0JFIENPTkZJREVOVElBTFxuICogX19fX19fX19fX19fX19fX19fXG4gKlxuICogQ29weXJpZ2h0IDIwMTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWRcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTk9USUNFOiAgQWxsIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBoZXJlaW4gaXMsIGFuZCByZW1haW5zXG4gKiB0aGUgcHJvcGVydHkgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgYW5kIGl0cyBzdXBwbGllcnMsXG4gKiBpZiBhbnkuICBUaGUgaW50ZWxsZWN0dWFsIGFuZCB0ZWNobmljYWwgY29uY2VwdHMgY29udGFpbmVkXG4gKiBoZXJlaW4gYXJlIHByb3ByaWV0YXJ5IHRvIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHNcbiAqIHN1cHBsaWVycyBhbmQgYXJlIHByb3RlY3RlZCBieSB0cmFkZSBzZWNyZXQgb3IgY29weXJpZ2h0IGxhdy5cbiAqIERpc3NlbWluYXRpb24gb2YgdGhpcyBpbmZvcm1hdGlvbiBvciByZXByb2R1Y3Rpb24gb2YgdGhpcyBtYXRlcmlhbFxuICogaXMgc3RyaWN0bHkgZm9yYmlkZGVuIHVubGVzcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gaXMgb2J0YWluZWRcbiAqIGZyb20gQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG53aW5kb3cuQ0lGID0gd2luZG93LkNJRiB8fCB7fTtcblxuXG5mdW5jdGlvbiBQYWdlQ29udGV4dCgpIHtcbiAgICBsZXQgcGFnZU1hc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLm1hc2tfX3Jvb3RcIik7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHRoZSBQYWdlQ29udGV4dFwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtYXNrUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFnZU1hc2suY2xhc3NMaXN0LnRvZ2dsZShcIm1hc2tfX3Jvb3RfYWN0aXZlXCIpO1xuICAgICAgICB9LFxuICAgICAgICB1bm1hc2tQYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwYWdlTWFzay5jbGFzc0xpc3QudG9nZ2xlKFwibWFza19fcm9vdF9hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHBhZ2VDb250ZXh0ID0gbmV3IFBhZ2VDb250ZXh0KCk7XG5cbi8vIHB1dCBpdCBpbiB0aGUgd2luZG93IGNvbnRleHQsIGp1c3QgaW4gY2FzZSBzb21lYm9keSBlbHNlIHdhbnRzIHRvIHVzZSBpdFxud2luZG93LkNJRi5QYWdlQ29udGV4dCA9IHBhZ2VDb250ZXh0O1xuXG5leHBvcnQge3BhZ2VDb250ZXh0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/PageContext.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: pageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageContext */ \"./src/PageContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageContext\", function() { return _PageContext__WEBPACK_IMPORTED_MODULE_0__[\"pageContext\"]; });\n\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFET0JFIENPTkZJREVOVElBTFxuICogX19fX19fX19fX19fX19fX19fXG4gKlxuICogQ29weXJpZ2h0IDIwMTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWRcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTk9USUNFOiAgQWxsIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBoZXJlaW4gaXMsIGFuZCByZW1haW5zXG4gKiB0aGUgcHJvcGVydHkgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgYW5kIGl0cyBzdXBwbGllcnMsXG4gKiBpZiBhbnkuICBUaGUgaW50ZWxsZWN0dWFsIGFuZCB0ZWNobmljYWwgY29uY2VwdHMgY29udGFpbmVkXG4gKiBoZXJlaW4gYXJlIHByb3ByaWV0YXJ5IHRvIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHNcbiAqIHN1cHBsaWVycyBhbmQgYXJlIHByb3RlY3RlZCBieSB0cmFkZSBzZWNyZXQgb3IgY29weXJpZ2h0IGxhdy5cbiAqIERpc3NlbWluYXRpb24gb2YgdGhpcyBpbmZvcm1hdGlvbiBvciByZXByb2R1Y3Rpb24gb2YgdGhpcyBtYXRlcmlhbFxuICogaXMgc3RyaWN0bHkgZm9yYmlkZGVuIHVubGVzcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gaXMgb2J0YWluZWRcbiAqIGZyb20gQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5leHBvcnQgIHtwYWdlQ29udGV4dCB9IGZyb20gXCIuL1BhZ2VDb250ZXh0XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });