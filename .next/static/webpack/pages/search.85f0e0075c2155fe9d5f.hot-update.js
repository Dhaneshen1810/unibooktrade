webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  var dataCheck = function dataCheck(data) {\n    console.log(data);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Redirecting');\n    console.log(document.getElementById('mybtn'));\n\n    window.fbAsyncInit = function () {\n      FB.init({\n        appId: '2605624903036488',\n        autoLogAppEvents: true,\n        xfbml: true,\n        version: 'v8.0'\n      });\n      FB.getLoginStatus(function (response) {\n        statusChangeCallback(response);\n      });\n    };\n\n    console.log(window.FB.getLoginStatus());\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"If you are not automatically redirected\"));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJkYXRhQ2hlY2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsIkZCIiwiaW5pdCIsImFwcElkIiwiYXV0b0xvZ0FwcEV2ZW50cyIsInhmYm1sIiwidmVyc2lvbiIsImdldExvZ2luU3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXNDaGFuZ2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixHQUFNO0FBQUE7O0FBRXhCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBUztBQUN2QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDSCxHQUZEOztBQVdBRyx5REFBUyxDQUFDLFlBQUs7QUFDWEYsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7O0FBR0FDLFVBQU0sQ0FBQ0MsV0FBUCxHQUFxQixZQUFXO0FBQzVCQyxRQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNOQyxhQUFLLEVBQWMsa0JBRGI7QUFFTkMsd0JBQWdCLEVBQUcsSUFGYjtBQUdOQyxhQUFLLEVBQWMsSUFIYjtBQUlOQyxlQUFPLEVBQVk7QUFKYixPQUFSO0FBT0FMLFFBQUUsQ0FBQ00sY0FBSCxDQUFrQixVQUFTQyxRQUFULEVBQW1CO0FBQ2pDQyw0QkFBb0IsQ0FBQ0QsUUFBRCxDQUFwQjtBQUNILE9BRkQ7QUFHRCxLQVhIOztBQWFFZCxXQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBTSxDQUFDRSxFQUFQLENBQVVNLGNBQVYsRUFBWjtBQUlMLEdBdEJRLENBQVQ7QUF3QkEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURBLENBREo7QUFZSCxDQWpERDs7R0FBTWhCLGM7O0FBbURTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4sIGZhY2Vib29rQWN0aW9ucyB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCBMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcblxuICAgIGNvbnN0IGRhdGFDaGVjayA9IChkYXRhKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG5cbiAgICAgICAgXG5cbiAgICBcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGluZycpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlidG4nKSlcblxuXG4gICAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgRkIuaW5pdCh7XG4gICAgICAgICAgICAgIGFwcElkICAgICAgICAgICAgOiAnMjYwNTYyNDkwMzAzNjQ4OCcsXG4gICAgICAgICAgICAgIGF1dG9Mb2dBcHBFdmVudHMgOiB0cnVlLFxuICAgICAgICAgICAgICB4ZmJtbCAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgdmVyc2lvbiAgICAgICAgICA6ICd2OC4wJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5GQi5nZXRMb2dpblN0YXR1cygpKVxuXG4gICAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWRpcmVjdC1wYWdlJz5cbiAgICAgICAgPGgyPklmIHlvdSBhcmUgbm90IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZDwvaDI+XG5cbiAgICAgICAgXG5cbiAgICAgIFxuXG4gICAgICA8L2Rpdj5cbiAgICApXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hSZWRpcmVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})