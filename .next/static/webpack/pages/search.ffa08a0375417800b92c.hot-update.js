webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  var dataCheck = function dataCheck(data) {\n    console.log(data);\n  };\n\n  var handleResponse = function handleResponse(data) {\n    console.log(data); //Toggle logincheck\n\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Redirecting');\n    console.log(document.getElementById('mybtn'));\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, \"If you are not automatically redirected\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Click here\")))));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJkYXRhQ2hlY2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJlc3BvbnNlIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBTTtBQUFBOztBQUV4QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVM7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0gsR0FGRDs7QUFLQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFENkIsQ0FHN0I7O0FBS0EsUUFBSUksSUFBSSxHQUFHSixJQUFJLENBQUNLLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdQLElBQUksQ0FBQ0ssT0FBTCxDQUFhRyxJQUExQjtBQUNBLFFBQUlDLFNBQVMsR0FBR1QsSUFBSSxDQUFDSyxPQUFMLENBQWFLLFVBQTdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHWCxJQUFJLENBQUNLLE9BQUwsQ0FBYU8sS0FBN0I7QUFDQVgsV0FBTyxDQUFDQyxHQUFSLENBQVlTLFNBQVo7QUFHQUUsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxRQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFUixZQUFJLEVBQUVELE1BQVI7QUFDQ0QsVUFBRSxFQUFFRixJQURMO0FBRUNhLGlCQUFTLEVBQUVSLFNBRlo7QUFHQ0UsaUJBQVMsRUFBRUE7QUFIWixPQUZDO0FBT1JPLFlBQU0sRUFBQztBQVBDLEtBQVosRUFTSSxTQVRKO0FBVUQsR0F6Qkg7O0FBNEJDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM1QixTQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxXQUFLLEVBQUxBO0FBQUYsS0FBZDtBQUNELEdBRkY7O0FBVURFLHlEQUFTLENBQUMsWUFBSztBQUNYckIsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWXFCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBRUgsR0FKUSxDQUFUO0FBTUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQURBLEVBR0EsTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSixNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUVyQixjQUZmO0FBR0UsV0FBTyxFQUFFZ0IsV0FIWDtBQUlFLGFBQVMsRUFBQyxpQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQU4sQ0FORixDQUhJLENBSEEsQ0FESjtBQXNCSCxDQXpFRDs7R0FBTXJCLGM7O0FBMkVTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4sIGZhY2Vib29rQWN0aW9ucyB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCBMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcblxuICAgIGNvbnN0IGRhdGFDaGVjayA9IChkYXRhKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vVG9nZ2xlIGxvZ2luY2hlY2tcblxuXG4gICAgICAgIFxuXG4gICAgICAgIHZhciBteUlEID0gZGF0YS5wcm9maWxlLmlkO1xuICAgICAgICB2YXIgbXlOYW1lID0gZGF0YS5wcm9maWxlLm5hbWU7XG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSBkYXRhLnByb2ZpbGUuZmlyc3RfbmFtZTtcbiAgICAgICAgdmFyIHVzZXJFbWFpbCA9IGRhdGEucHJvZmlsZS5lbWFpbDtcbiAgICAgICAgY29uc29sZS5sb2codXNlckVtYWlsKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IG15TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG15SUQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWw6IHVzZXJFbWFpbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzUGF0aDonL3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0sJy9zZWFyY2gnKVxuICAgICAgfTtcbiAgICAgIFxuXG4gICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIH07XG5cbiAgICAgICAgXG5cbiAgICBcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGluZycpO1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlidG4nKSlcbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlZGlyZWN0LXBhZ2UnPlxuICAgICAgICA8aDI+SWYgeW91IGFyZSBub3QgYXV0b21hdGljYWxseSByZWRpcmVjdGVkPC9oMj5cblxuICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjI2MDU2MjQ5MDMwMzY0ODhcIj5cblxuICAgIFxuICAgIDxMb2dpbkJ1dHRvblxuICAgICAgc2NvcGU9XCJlbWFpbFwiXG4gICAgICBvbkNvbXBsZXRlZD17aGFuZGxlUmVzcG9uc2V9XG4gICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgPlxuICAgICAgPHNwYW4+PGI+Q2xpY2sgaGVyZTwvYj48L3NwYW4+XG4gICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICBcbiAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hSZWRpcmVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})