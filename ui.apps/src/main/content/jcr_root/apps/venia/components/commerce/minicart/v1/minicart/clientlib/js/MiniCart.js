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

/***/ "../cif-components-common/src/PageContext.js":
/*!***************************************************!*\
  !*** ../cif-components-common/src/PageContext.js ***!
  \***************************************************/
/*! exports provided: pageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageContext\", function() { return pageContext; });\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\n\nwindow.CIF = window.CIF || {};\n\n\nfunction PageContext() {\n    let pageMask = document.querySelector(\"button.mask__root\");\n    console.log(\"Hello from the PageContext\");\n    return {\n        maskPage: function () {\n            pageMask.classList.toggle(\"mask__root_active\");\n        },\n        unmaskPage: function () {\n            pageMask.classList.toggle(\"mask__root_active\");\n        }\n    }\n}\n\nconst pageContext = new PageContext();\n\n// put it in the window context, just in case somebody else wants to use it\nwindow.CIF.PageContext = pageContext;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY2lmLWNvbXBvbmVudHMtY29tbW9uL3NyYy9QYWdlQ29udGV4dC5qcz8yNDQyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFb0IiLCJmaWxlIjoiLi4vY2lmLWNvbXBvbmVudHMtY29tbW9uL3NyYy9QYWdlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBBRE9CRSBDT05GSURFTlRJQUxcbiAqIF9fX19fX19fX19fX19fX19fX1xuICpcbiAqIENvcHlyaWdodCAyMDE5IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIE5PVElDRTogIEFsbCBpbmZvcm1hdGlvbiBjb250YWluZWQgaGVyZWluIGlzLCBhbmQgcmVtYWluc1xuICogdGhlIHByb3BlcnR5IG9mIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHMgc3VwcGxpZXJzLFxuICogaWYgYW55LiAgVGhlIGludGVsbGVjdHVhbCBhbmQgdGVjaG5pY2FsIGNvbmNlcHRzIGNvbnRhaW5lZFxuICogaGVyZWluIGFyZSBwcm9wcmlldGFyeSB0byBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZCBhbmQgaXRzXG4gKiBzdXBwbGllcnMgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgdHJhZGUgc2VjcmV0IG9yIGNvcHlyaWdodCBsYXcuXG4gKiBEaXNzZW1pbmF0aW9uIG9mIHRoaXMgaW5mb3JtYXRpb24gb3IgcmVwcm9kdWN0aW9uIG9mIHRoaXMgbWF0ZXJpYWxcbiAqIGlzIHN0cmljdGx5IGZvcmJpZGRlbiB1bmxlc3MgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGlzIG9idGFpbmVkXG4gKiBmcm9tIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxud2luZG93LkNJRiA9IHdpbmRvdy5DSUYgfHwge307XG5cblxuZnVuY3Rpb24gUGFnZUNvbnRleHQoKSB7XG4gICAgbGV0IHBhZ2VNYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5tYXNrX19yb290XCIpO1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSB0aGUgUGFnZUNvbnRleHRcIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFza1BhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBhZ2VNYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJtYXNrX19yb290X2FjdGl2ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5tYXNrUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFnZU1hc2suY2xhc3NMaXN0LnRvZ2dsZShcIm1hc2tfX3Jvb3RfYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBwYWdlQ29udGV4dCA9IG5ldyBQYWdlQ29udGV4dCgpO1xuXG4vLyBwdXQgaXQgaW4gdGhlIHdpbmRvdyBjb250ZXh0LCBqdXN0IGluIGNhc2Ugc29tZWJvZHkgZWxzZSB3YW50cyB0byB1c2UgaXRcbndpbmRvdy5DSUYuUGFnZUNvbnRleHQgPSBwYWdlQ29udGV4dDtcblxuZXhwb3J0IHtwYWdlQ29udGV4dH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../cif-components-common/src/PageContext.js\n");

/***/ }),

/***/ "../cif-components-common/src/index.js":
/*!*********************************************!*\
  !*** ../cif-components-common/src/index.js ***!
  \*********************************************/
/*! exports provided: pageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageContext */ \"../cif-components-common/src/PageContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageContext\", function() { return _PageContext__WEBPACK_IMPORTED_MODULE_0__[\"pageContext\"]; });\n\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY2lmLWNvbXBvbmVudHMtY29tbW9uL3NyYy9pbmRleC5qcz85ZTIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vY2lmLWNvbXBvbmVudHMtY29tbW9uL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBBRE9CRSBDT05GSURFTlRJQUxcbiAqIF9fX19fX19fX19fX19fX19fX1xuICpcbiAqIENvcHlyaWdodCAyMDE5IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIE5PVElDRTogIEFsbCBpbmZvcm1hdGlvbiBjb250YWluZWQgaGVyZWluIGlzLCBhbmQgcmVtYWluc1xuICogdGhlIHByb3BlcnR5IG9mIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHMgc3VwcGxpZXJzLFxuICogaWYgYW55LiAgVGhlIGludGVsbGVjdHVhbCBhbmQgdGVjaG5pY2FsIGNvbmNlcHRzIGNvbnRhaW5lZFxuICogaGVyZWluIGFyZSBwcm9wcmlldGFyeSB0byBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZCBhbmQgaXRzXG4gKiBzdXBwbGllcnMgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgdHJhZGUgc2VjcmV0IG9yIGNvcHlyaWdodCBsYXcuXG4gKiBEaXNzZW1pbmF0aW9uIG9mIHRoaXMgaW5mb3JtYXRpb24gb3IgcmVwcm9kdWN0aW9uIG9mIHRoaXMgbWF0ZXJpYWxcbiAqIGlzIHN0cmljdGx5IGZvcmJpZGRlbiB1bmxlc3MgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIGlzIG9idGFpbmVkXG4gKiBmcm9tIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0ICB7cGFnZUNvbnRleHQgfSBmcm9tIFwiLi9QYWdlQ29udGV4dFwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../cif-components-common/src/index.js\n");

/***/ }),

/***/ "./src/MiniCart.js":
/*!*************************!*\
  !*** ./src/MiniCart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cif_components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cif-components-common */ \"../cif-components-common/src/index.js\");\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\n\n\nclass MiniCart {\n  constructor() {\n    this.rootNode = document.querySelector(\".miniCart__root\"); // just trigger an event to let other components know we're ready.\n\n    const event = new CustomEvent(\"aem.cif.cart-intialized\");\n    document.dispatchEvent(event);\n\n    this._initializeBehavior();\n\n    this.pageContext = cif_components_common__WEBPACK_IMPORTED_MODULE_0__[\"pageContext\"];\n  }\n\n  _initializeBehavior() {\n    let closeButton = this.rootNode.querySelector(\"button[data-action='close']\");\n    closeButton.addEventListener('click', event => {\n      this.close();\n    });\n  }\n\n  open() {\n    this.rootNode.classList.add(\"miniCart__root_open\");\n    this.pageContext.maskPage();\n  }\n\n  close() {\n    this.rootNode.classList.remove(\"miniCart__root_open\");\n    this.pageContext.unmaskPage();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniCart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWluaUNhcnQuanM/NzVhMyJdLCJuYW1lcyI6WyJNaW5pQ2FydCIsImNvbnN0cnVjdG9yIiwicm9vdE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIl9pbml0aWFsaXplQmVoYXZpb3IiLCJwYWdlQ29udGV4dCIsImNsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwib3BlbiIsImNsYXNzTGlzdCIsImFkZCIsIm1hc2tQYWdlIiwicmVtb3ZlIiwidW5tYXNrUGFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUVBLE1BQU1BLFFBQU4sQ0FBZTtBQUNYQyxhQUFXLEdBQUc7QUFFVixTQUFLQyxRQUFMLEdBQWdCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWhCLENBRlUsQ0FJVjs7QUFDQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQix5QkFBaEIsQ0FBZDtBQUNBSCxZQUFRLENBQUNJLGFBQVQsQ0FBdUJGLEtBQXZCOztBQUVBLFNBQUtHLG1CQUFMOztBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLGlFQUFuQjtBQUNIOztBQUVERCxxQkFBbUIsR0FBRztBQUNsQixRQUFJRSxXQUFXLEdBQUcsS0FBS1IsUUFBTCxDQUFjRSxhQUFkLENBQTRCLDZCQUE1QixDQUFsQjtBQUNBTSxlQUFXLENBQUNDLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDTixLQUFLLElBQUk7QUFDM0MsV0FBS08sS0FBTDtBQUNILEtBRkQ7QUFJSDs7QUFFREMsTUFBSSxHQUFHO0FBQ0gsU0FBS1gsUUFBTCxDQUFjWSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixxQkFBNUI7QUFDQSxTQUFLTixXQUFMLENBQWlCTyxRQUFqQjtBQUNIOztBQUVESixPQUFLLEdBQUc7QUFDSixTQUFLVixRQUFMLENBQWNZLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLHFCQUEvQjtBQUNBLFNBQUtSLFdBQUwsQ0FBaUJTLFVBQWpCO0FBQ0g7O0FBN0JVOztBQWdDQWxCLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL01pbmlDYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFET0JFIENPTkZJREVOVElBTFxuICogX19fX19fX19fX19fX19fX19fXG4gKlxuICogQ29weXJpZ2h0IDIwMTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWRcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTk9USUNFOiAgQWxsIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBoZXJlaW4gaXMsIGFuZCByZW1haW5zXG4gKiB0aGUgcHJvcGVydHkgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgYW5kIGl0cyBzdXBwbGllcnMsXG4gKiBpZiBhbnkuICBUaGUgaW50ZWxsZWN0dWFsIGFuZCB0ZWNobmljYWwgY29uY2VwdHMgY29udGFpbmVkXG4gKiBoZXJlaW4gYXJlIHByb3ByaWV0YXJ5IHRvIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHNcbiAqIHN1cHBsaWVycyBhbmQgYXJlIHByb3RlY3RlZCBieSB0cmFkZSBzZWNyZXQgb3IgY29weXJpZ2h0IGxhdy5cbiAqIERpc3NlbWluYXRpb24gb2YgdGhpcyBpbmZvcm1hdGlvbiBvciByZXByb2R1Y3Rpb24gb2YgdGhpcyBtYXRlcmlhbFxuICogaXMgc3RyaWN0bHkgZm9yYmlkZGVuIHVubGVzcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gaXMgb2J0YWluZWRcbiAqIGZyb20gQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQge3BhZ2VDb250ZXh0fSBmcm9tIFwiY2lmLWNvbXBvbmVudHMtY29tbW9uXCI7XG5cbmNsYXNzIE1pbmlDYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLnJvb3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5pQ2FydF9fcm9vdFwiKTtcblxuICAgICAgICAvLyBqdXN0IHRyaWdnZXIgYW4gZXZlbnQgdG8gbGV0IG90aGVyIGNvbXBvbmVudHMga25vdyB3ZSdyZSByZWFkeS5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJhZW0uY2lmLmNhcnQtaW50aWFsaXplZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUJlaGF2aW9yKCk7XG4gICAgICAgIHRoaXMucGFnZUNvbnRleHQgPSBwYWdlQ29udGV4dDtcbiAgICB9XG5cbiAgICBfaW5pdGlhbGl6ZUJlaGF2aW9yKCkge1xuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hY3Rpb249J2Nsb3NlJ11cIik7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5yb290Tm9kZS5jbGFzc0xpc3QuYWRkKFwibWluaUNhcnRfX3Jvb3Rfb3BlblwiKTtcbiAgICAgICAgdGhpcy5wYWdlQ29udGV4dC5tYXNrUGFnZSgpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnJvb3ROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJtaW5pQ2FydF9fcm9vdF9vcGVuXCIpO1xuICAgICAgICB0aGlzLnBhZ2VDb250ZXh0LnVubWFza1BhZ2UoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlDYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/MiniCart.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniCart */ \"./src/MiniCart.js\");\n/*******************************************************************************\n * ADOBE CONFIDENTIAL\n * __________________\n *\n * Copyright 2019 Adobe Systems Incorporated\n * All Rights Reserved.\n *\n * NOTICE:  All information contained herein is, and remains\n * the property of Adobe Systems Incorporated and its suppliers,\n * if any.  The intellectual and technical concepts contained\n * herein are proprietary to Adobe Systems Incorporated and its\n * suppliers and are protected by trade secret or copyright law.\n * Dissemination of this information or reproduction of this material\n * is strictly forbidden unless prior written permission is obtained\n * from Adobe Systems Incorporated.\n ******************************************************************************/\n\n\nfunction onDocumentReady() {\n  window.CIF.MiniCart = new _MiniCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n}\n\nif (document.readyState !== \"loading\") {\n  onDocumentReady();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDocumentReady);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJvbkRvY3VtZW50UmVhZHkiLCJ3aW5kb3ciLCJDSUYiLCJNaW5pQ2FydCIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3ZCQyxRQUFNLENBQUNDLEdBQVAsQ0FBV0MsUUFBWCxHQUFzQixJQUFJQSxpREFBSixFQUF0QjtBQUNIOztBQUVELElBQUlDLFFBQVEsQ0FBQ0MsVUFBVCxLQUF3QixTQUE1QixFQUF1QztBQUNuQ0wsaUJBQWU7QUFDbEIsQ0FGRCxNQUVPO0FBQ0hJLFVBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDTixlQUE5QztBQUNIIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFET0JFIENPTkZJREVOVElBTFxuICogX19fX19fX19fX19fX19fX19fXG4gKlxuICogQ29weXJpZ2h0IDIwMTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWRcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTk9USUNFOiAgQWxsIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBoZXJlaW4gaXMsIGFuZCByZW1haW5zXG4gKiB0aGUgcHJvcGVydHkgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgYW5kIGl0cyBzdXBwbGllcnMsXG4gKiBpZiBhbnkuICBUaGUgaW50ZWxsZWN0dWFsIGFuZCB0ZWNobmljYWwgY29uY2VwdHMgY29udGFpbmVkXG4gKiBoZXJlaW4gYXJlIHByb3ByaWV0YXJ5IHRvIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIGFuZCBpdHNcbiAqIHN1cHBsaWVycyBhbmQgYXJlIHByb3RlY3RlZCBieSB0cmFkZSBzZWNyZXQgb3IgY29weXJpZ2h0IGxhdy5cbiAqIERpc3NlbWluYXRpb24gb2YgdGhpcyBpbmZvcm1hdGlvbiBvciByZXByb2R1Y3Rpb24gb2YgdGhpcyBtYXRlcmlhbFxuICogaXMgc3RyaWN0bHkgZm9yYmlkZGVuIHVubGVzcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24gaXMgb2J0YWluZWRcbiAqIGZyb20gQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5pbXBvcnQgTWluaUNhcnQgZnJvbSAnLi9NaW5pQ2FydCc7XG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRSZWFkeSgpIHtcbiAgICB3aW5kb3cuQ0lGLk1pbmlDYXJ0ID0gbmV3IE1pbmlDYXJ0KCk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICAgIG9uRG9jdW1lbnRSZWFkeSgpXG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG9uRG9jdW1lbnRSZWFkeSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });