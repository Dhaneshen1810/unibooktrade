webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  var handleResponse = function handleResponse(data) {\n    console.log(data); //Toggle logincheck\n\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Redirecting');\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"For security purposes, please\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, \"Click here\")))));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixHQUFNO0FBQUE7O0FBR3hCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUQ2QixDQUc3Qjs7QUFLQSxRQUFJRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxFQUF4QjtBQUNBLFFBQUlDLE1BQU0sR0FBR04sSUFBSSxDQUFDSSxPQUFMLENBQWFHLElBQTFCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHUixJQUFJLENBQUNJLE9BQUwsQ0FBYUssVUFBN0I7QUFDQSxRQUFJQyxTQUFTLEdBQUdWLElBQUksQ0FBQ0ksT0FBTCxDQUFhTyxLQUE3QjtBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWVEsU0FBWjtBQUVBRSxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUVSLFlBQUksRUFBRUQsTUFBUjtBQUNDRCxVQUFFLEVBQUVGLElBREw7QUFFQ2EsaUJBQVMsRUFBRVIsU0FGWjtBQUdDRSxpQkFBUyxFQUFFQTtBQUhaLE9BRkM7QUFPUk8sWUFBTSxFQUFDO0FBUEMsS0FBWixFQVNJLFNBVEo7QUFVRCxHQXhCSDs7QUEwQkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFLREUseURBQVMsQ0FBQyxZQUFLO0FBQ1hwQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBR0gsR0FKUSxDQUFUO0FBTUEsU0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURBLEVBR0EsTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUVILGNBRmY7QUFHRSxXQUFPLEVBQUVtQixXQUhYO0FBSUUsYUFBUyxFQUFDLGlCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixDQU5GLENBRkosQ0FIQSxDQURKO0FBdUJILENBL0REOztHQUFNcEIsYzs7QUFpRVNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBMb2dpbkJ1dHRvbiwgRmFjZWJvb2tMb2dpbiwgZmFjZWJvb2tBY3Rpb25zIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xuaW1wb3J0IExvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rL2Rpc3QvTG9naW4nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5jb25zdCBzZWFyY2hSZWRpcmVjdD0gKCkgPT4ge1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAvL1RvZ2dsZSBsb2dpbmNoZWNrXG5cblxuICAgICAgICBcblxuICAgICAgICB2YXIgbXlJRCA9IGRhdGEucHJvZmlsZS5pZDtcbiAgICAgICAgdmFyIG15TmFtZSA9IGRhdGEucHJvZmlsZS5uYW1lO1xuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZGF0YS5wcm9maWxlLmZpcnN0X25hbWU7XG4gICAgICAgIHZhciB1c2VyRW1haWwgPSBkYXRhLnByb2ZpbGUuZW1haWw7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbClcbiAgICAgICAgXG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IG15TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG15SUQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWw6IHVzZXJFbWFpbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzUGF0aDonL3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0sJy9zZWFyY2gnKVxuICAgICAgfTtcblxuICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICB9O1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGluZycpO1xuICAgICAgIFxuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVkaXJlY3QtcGFnZSc+XG4gICAgICAgIDxoMj5Gb3Igc2VjdXJpdHkgcHVycG9zZXMsIHBsZWFzZTwvaDI+XG5cbiAgICAgICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCIyNjA1NjI0OTAzMDM2NDg4XCI+XG4gICAgXG4gICAgICAgICAgICA8TG9naW5CdXR0b25cbiAgICAgICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cbiAgICAgICAgICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPjxiPkNsaWNrIGhlcmU8L2I+PC9zcGFuPlxuICAgICAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICBcbiAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuXG4gICAgICBcblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUmVkaXJlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})