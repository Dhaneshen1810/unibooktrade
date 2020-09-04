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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"react-facebook\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"react-facebook/dist/Login\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst searchRedirect = () => {\n  const handleResponse = data => {\n    console.log(data);\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  const handleError = error => {\n    undefined.setState({\n      error\n    });\n  };\n\n  const simulateClick = e => {\n    //e.click()\n    console.log(e);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log('Redirecting');\n    var tag = document.getElementsByTagName(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"]);\n    console.log(tag);\n    simulateClick(tag);\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, \"For security purposes, please\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, \"Click here\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2guanM/NzhlOCJdLCJuYW1lcyI6WyJzZWFyY2hSZWRpcmVjdCIsImhhbmRsZVJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJteUlEIiwicHJvZmlsZSIsImlkIiwibXlOYW1lIiwibmFtZSIsImZpcnN0TmFtZSIsImZpcnN0X25hbWUiLCJ1c2VyRW1haWwiLCJlbWFpbCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZmlyc3RuYW1lIiwiYXNQYXRoIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsInNldFN0YXRlIiwic2ltdWxhdGVDbGljayIsImUiLCJ1c2VFZmZlY3QiLCJ0YWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiRmFjZWJvb2tQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsY0FBYyxHQUFFLE1BQU07QUFHeEIsUUFBTUMsY0FBYyxHQUFJQyxJQUFELElBQVU7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBR0EsUUFBSUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdOLElBQUksQ0FBQ0ksT0FBTCxDQUFhRyxJQUExQjtBQUNBLFFBQUlDLFNBQVMsR0FBR1IsSUFBSSxDQUFDSSxPQUFMLENBQWFLLFVBQTdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHVixJQUFJLENBQUNJLE9BQUwsQ0FBYU8sS0FBN0I7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFNBQVo7QUFFQUUsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxRQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFUixZQUFJLEVBQUVELE1BQVI7QUFDQ0QsVUFBRSxFQUFFRixJQURMO0FBRUNhLGlCQUFTLEVBQUVSLFNBRlo7QUFHQ0UsaUJBQVMsRUFBRUE7QUFIWixPQUZDO0FBT1JPLFlBQU0sRUFBQztBQVBDLEtBQVosRUFTSSxTQVRKO0FBVUQsR0FwQkg7O0FBc0JDLFFBQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzVCLGFBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVEO0FBQUYsS0FBZDtBQUNELEdBRkY7O0FBS0MsUUFBTUUsYUFBYSxHQUFJQyxDQUFELElBQU07QUFDeEI7QUFDQXJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsQ0FBWjtBQUNILEdBSEQ7O0FBS0ZDLHlEQUFTLENBQUMsTUFBSztBQUNYdEIsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUVBLFFBQUlzQixHQUFHLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEJDLCtEQUE5QixDQUFWO0FBQ0ExQixXQUFPLENBQUNDLEdBQVIsQ0FBWXNCLEdBQVo7QUFDQUgsaUJBQWEsQ0FBQ0csR0FBRCxDQUFiO0FBR0gsR0FSUSxDQUFUO0FBVUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBLEVBR0EsTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUV6QixjQUZmO0FBR0UsV0FBTyxFQUFFbUIsV0FIWDtBQUlFLGFBQVMsRUFBQyxpQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQU4sQ0FORixDQUZKLENBSEEsQ0FESjtBQXVCSCxDQXBFRDs7QUFzRWVwQiw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4sIGZhY2Vib29rQWN0aW9ucyB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCBMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcbiAgICBcblxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgICAgICB2YXIgbXlJRCA9IGRhdGEucHJvZmlsZS5pZDtcbiAgICAgICAgdmFyIG15TmFtZSA9IGRhdGEucHJvZmlsZS5uYW1lO1xuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZGF0YS5wcm9maWxlLmZpcnN0X25hbWU7XG4gICAgICAgIHZhciB1c2VyRW1haWwgPSBkYXRhLnByb2ZpbGUuZW1haWw7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbClcbiAgICAgICAgXG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IG15TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG15SUQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWw6IHVzZXJFbWFpbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzUGF0aDonL3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0sJy9zZWFyY2gnKVxuICAgICAgfTtcblxuICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICB9O1xuXG5cbiAgICAgIGNvbnN0IHNpbXVsYXRlQ2xpY2sgPSAoZSkgPT57XG4gICAgICAgICAgLy9lLmNsaWNrKClcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zb2xlLmxvZygnUmVkaXJlY3RpbmcnKTtcblxuICAgICAgICB2YXIgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoRmFjZWJvb2tQcm92aWRlcilcbiAgICAgICAgY29uc29sZS5sb2codGFnKVxuICAgICAgICBzaW11bGF0ZUNsaWNrKHRhZylcbiAgICAgICBcbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZGlyZWN0LXBhZ2UnPlxuICAgICAgICA8aDI+Rm9yIHNlY3VyaXR5IHB1cnBvc2VzLCBwbGVhc2U8L2gyPlxuXG4gICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiMjYwNTYyNDkwMzAzNjQ4OFwiPlxuICAgIFxuICAgICAgICAgICAgPExvZ2luQnV0dG9uXG4gICAgICAgICAgICAgIHNjb3BlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNvbXBsZXRlZD17aGFuZGxlUmVzcG9uc2V9XG4gICAgICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUVycm9yfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj48Yj5DbGljayBoZXJlPC9iPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvTG9naW5CdXR0b24+XG4gICAgXG4gICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cblxuICAgICAgXG5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFJlZGlyZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n");

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