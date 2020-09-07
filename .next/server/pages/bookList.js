module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/bookList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/bookList.js":
/*!***************************!*\
  !*** ./pages/bookList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"react-facebook\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"react-facebook/dist/Login\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/bookList.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst bookList = () => {\n  const handleResponse = data => {\n    console.log(data);\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        mytitle: '',\n        author: '',\n        userEmail: userEmail\n      }\n    }, '/search');\n  };\n\n  const handleError = error => {\n    undefined.setState({\n      error\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log('Redirecting');\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"For security purposes, please\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"Click here\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rTGlzdC5qcz9lMTkxIl0sIm5hbWVzIjpbImJvb2tMaXN0IiwiaGFuZGxlUmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm15SUQiLCJwcm9maWxlIiwiaWQiLCJteU5hbWUiLCJuYW1lIiwiZmlyc3ROYW1lIiwiZmlyc3RfbmFtZSIsInVzZXJFbWFpbCIsImVtYWlsIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJmaXJzdG5hbWUiLCJteXRpdGxlIiwiYXV0aG9yIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsInNldFN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxRQUFRLEdBQUUsTUFBTTtBQUdsQixRQUFNQyxjQUFjLEdBQUlDLElBQUQsSUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFHQSxRQUFJRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxFQUF4QjtBQUNBLFFBQUlDLE1BQU0sR0FBR04sSUFBSSxDQUFDSSxPQUFMLENBQWFHLElBQTFCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHUixJQUFJLENBQUNJLE9BQUwsQ0FBYUssVUFBN0I7QUFDQSxRQUFJQyxTQUFTLEdBQUdWLElBQUksQ0FBQ0ksT0FBTCxDQUFhTyxLQUE3QjtBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWVEsU0FBWjtBQUVBRSxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUVSLFlBQUksRUFBRUQsTUFBUjtBQUNDRCxVQUFFLEVBQUVGLElBREw7QUFFQ2EsaUJBQVMsRUFBRVIsU0FGWjtBQUdDUyxlQUFPLEVBQUUsRUFIVjtBQUlDQyxjQUFNLEVBQUMsRUFKUjtBQUtDUixpQkFBUyxFQUFFQTtBQUxaO0FBRkMsS0FBWixFQVNJLFNBVEo7QUFVRCxHQXBCSDs7QUFzQkMsUUFBTVMsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDNUIsYUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQ7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFLREUseURBQVMsQ0FBQyxNQUFLO0FBQ1hyQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBS0gsR0FOUSxDQUFUO0FBUUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBLEVBR0EsTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUVILGNBRmY7QUFHRSxXQUFPLEVBQUVvQixXQUhYO0FBSUUsYUFBUyxFQUFDLGlCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixDQU5GLENBRkosQ0FIQSxDQURKO0FBdUJILENBN0REOztBQStEZXJCLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYm9va0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIExvZ2luQnV0dG9uLCBGYWNlYm9va0xvZ2luLCBmYWNlYm9va0FjdGlvbnMgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2svZGlzdC9Mb2dpbic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5cbmNvbnN0IGJvb2tMaXN0PSAoKSA9PiB7XG4gICAgXG5cbiAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICAgICAgdmFyIG15SUQgPSBkYXRhLnByb2ZpbGUuaWQ7XG4gICAgICAgIHZhciBteU5hbWUgPSBkYXRhLnByb2ZpbGUubmFtZTtcbiAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGRhdGEucHJvZmlsZS5maXJzdF9uYW1lO1xuICAgICAgICB2YXIgdXNlckVtYWlsID0gZGF0YS5wcm9maWxlLmVtYWlsO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpXG4gICAgICAgIFxuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXG4gICAgICAgICAgICBxdWVyeTogeyBuYW1lOiBteU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBteUlELFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjonJyxcbiAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyRW1haWxcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfSwnL3NlYXJjaCcpXG4gICAgICB9O1xuXG4gICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIH07XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coJ1JlZGlyZWN0aW5nJyk7XG5cblxuICAgICAgIFxuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkaXJlY3QtcGFnZSc+XG4gICAgICAgIDxoMj5Gb3Igc2VjdXJpdHkgcHVycG9zZXMsIHBsZWFzZTwvaDI+XG5cbiAgICAgICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCIyNjA1NjI0OTAzMDM2NDg4XCI+XG4gICAgXG4gICAgICAgICAgICA8TG9naW5CdXR0b25cbiAgICAgICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cbiAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPjxiPkNsaWNrIGhlcmU8L2I+PC9zcGFuPlxuICAgICAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICBcbiAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuXG4gICAgICBcblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9va0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bookList.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-facebook":
/*!*********************************!*\
  !*** external "react-facebook" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-facebook\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9va1wiP2Y2YjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZmFjZWJvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mYWNlYm9va1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-facebook\n");

/***/ }),

/***/ "react-facebook/dist/Login":
/*!********************************************!*\
  !*** external "react-facebook/dist/Login" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-facebook/dist/Login\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luXCI/NWQ0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmFjZWJvb2svZGlzdC9Mb2dpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-facebook/dist/Login\n");

/***/ })

/******/ });