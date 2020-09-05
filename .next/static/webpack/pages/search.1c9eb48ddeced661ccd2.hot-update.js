webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  var handleResponse = function handleResponse(data) {\n    console.log(data);\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Redirecting');\n    var fb = document.getElementsByName(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"]);\n    console.log(fb);\n  });\n  return __jsx(\"div\", {\n    className: \"redirect-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"For security purposes, please\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, \"Click here\")))));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImZiIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsIkxvZ2luQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxjQUFjLEdBQUUsU0FBaEJBLGNBQWdCLEdBQU07QUFBQTs7QUFHeEIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQVU7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBR0EsUUFBSUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdOLElBQUksQ0FBQ0ksT0FBTCxDQUFhRyxJQUExQjtBQUNBLFFBQUlDLFNBQVMsR0FBR1IsSUFBSSxDQUFDSSxPQUFMLENBQWFLLFVBQTdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHVixJQUFJLENBQUNJLE9BQUwsQ0FBYU8sS0FBN0I7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFNBQVo7QUFFQUUsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxRQURGO0FBRVJDLFdBQUssRUFBRTtBQUFFUixZQUFJLEVBQUVELE1BQVI7QUFDQ0QsVUFBRSxFQUFFRixJQURMO0FBRUNhLGlCQUFTLEVBQUVSLFNBRlo7QUFHQ0UsaUJBQVMsRUFBRUE7QUFIWixPQUZDO0FBT1JPLFlBQU0sRUFBQztBQVBDLEtBQVosRUFTSSxTQVRKO0FBVUQsR0FwQkg7O0FBc0JDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM1QixTQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxXQUFLLEVBQUxBO0FBQUYsS0FBZDtBQUNELEdBRkY7O0FBS0RFLHlEQUFTLENBQUMsWUFBSztBQUNYcEIsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUVBLFFBQUlvQixFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsaUJBQVQsQ0FBMkJDLDBEQUEzQixDQUFUO0FBQ0F4QixXQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEVBQVo7QUFJSCxHQVJRLENBQVQ7QUFVQSxTQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREEsRUFHQSxNQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBQyxrQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLGVBQVcsRUFBRXZCLGNBRmY7QUFHRSxXQUFPLEVBQUVtQixXQUhYO0FBSUUsYUFBUyxFQUFDLGlCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTixDQU5GLENBRkosQ0FIQSxDQURKO0FBdUJILENBL0REOztHQUFNcEIsYzs7QUFpRVNBLDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBMb2dpbkJ1dHRvbiwgRmFjZWJvb2tMb2dpbiwgZmFjZWJvb2tBY3Rpb25zIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xuaW1wb3J0IExvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rL2Rpc3QvTG9naW4nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5jb25zdCBzZWFyY2hSZWRpcmVjdD0gKCkgPT4ge1xuICAgIFxuXG4gICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgICAgIHZhciBteUlEID0gZGF0YS5wcm9maWxlLmlkO1xuICAgICAgICB2YXIgbXlOYW1lID0gZGF0YS5wcm9maWxlLm5hbWU7XG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSBkYXRhLnByb2ZpbGUuZmlyc3RfbmFtZTtcbiAgICAgICAgdmFyIHVzZXJFbWFpbCA9IGRhdGEucHJvZmlsZS5lbWFpbDtcbiAgICAgICAgY29uc29sZS5sb2codXNlckVtYWlsKVxuICAgICAgICBcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHsgbmFtZTogbXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogbXlJRCxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbDogdXNlckVtYWlsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXNQYXRoOicvc2VhcmNoJ1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfSwnL3NlYXJjaCcpXG4gICAgICB9O1xuXG4gICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIH07XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coJ1JlZGlyZWN0aW5nJyk7XG5cbiAgICAgICAgdmFyIGZiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoTG9naW5CdXR0b24pXG4gICAgICAgIGNvbnNvbGUubG9nKGZiKVxuXG4gICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWRpcmVjdC1wYWdlJz5cbiAgICAgICAgPGgyPkZvciBzZWN1cml0eSBwdXJwb3NlcywgcGxlYXNlPC9oMj5cblxuICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjI2MDU2MjQ5MDMwMzY0ODhcIj5cbiAgICBcbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICBzY29wZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZWQ9e2hhbmRsZVJlc3BvbnNlfVxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+PGI+Q2xpY2sgaGVyZTwvYj48L3NwYW4+XG4gICAgICAgICAgICA8L0xvZ2luQnV0dG9uPlxuICAgIFxuICAgICAgICA8L0ZhY2Vib29rUHJvdmlkZXI+XG5cbiAgICAgIFxuXG4gICAgICA8L2Rpdj5cbiAgICApXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hSZWRpcmVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})