webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  //Handle facebook login data\n  var handleResponse = function handleResponse(data) {\n    console.log(data); //Toggle logincheck\n\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    Router.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  var responseFacebook = function responseFacebook(response) {\n    console.log(response);\n    console.log('That was the response');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Will redirect');\n    var LoginBtn = document.getElementById('LoginBtn');\n    var prov = document.getElementById('provider');\n    console.log(LoginBtn);\n    console.log(prov);\n    console.log(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"]);\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Redirecting...\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary btn-fb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, \"Login via Facebook\")))));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInJlc3BvbnNlRmFjZWJvb2siLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsIkxvZ2luQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb3YiLCJMb2dpbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBTTtBQUFBOztBQUd4QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUQ2QixDQUc3Qjs7QUFLQSxRQUFJRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxFQUF4QjtBQUNBLFFBQUlDLE1BQU0sR0FBR04sSUFBSSxDQUFDSSxPQUFMLENBQWFHLElBQTFCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHUixJQUFJLENBQUNJLE9BQUwsQ0FBYUssVUFBN0I7QUFDQSxRQUFJQyxTQUFTLEdBQUdWLElBQUksQ0FBQ0ksT0FBTCxDQUFhTyxLQUE3QjtBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWVEsU0FBWjtBQUVBRSxVQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsUUFERjtBQUVSQyxXQUFLLEVBQUU7QUFBRVIsWUFBSSxFQUFFRCxNQUFSO0FBQ0NELFVBQUUsRUFBRUYsSUFETDtBQUVDYSxpQkFBUyxFQUFFUixTQUZaO0FBR0NFLGlCQUFTLEVBQUVBO0FBSFosT0FGQztBQU9STyxZQUFNLEVBQUM7QUFQQyxLQUFaLEVBU0ksU0FUSjtBQVVELEdBeEJIOztBQTBCQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDNUIsU0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQsV0FBSyxFQUFMQTtBQUFGLEtBQWQ7QUFDRCxHQUZGOztBQU1ELE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DckIsV0FBTyxDQUFDQyxHQUFSLENBQVlvQixRQUFaO0FBQ0FyQixXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNELEdBSEg7O0FBTUFxQix5REFBUyxDQUFDLFlBQUs7QUFDWHRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFFQSxRQUFJc0IsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLFFBQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQVg7QUFDQXpCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsUUFBWjtBQUNBdkIsV0FBTyxDQUFDQyxHQUFSLENBQVl5QixJQUFaO0FBQ0ExQixXQUFPLENBQUNDLEdBQVIsQ0FBWTBCLDBEQUFaO0FBVUgsR0FqQlEsQ0FBVDtBQW1CQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLEVBR0ksTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSixNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUU3QixjQUZmO0FBR0UsV0FBTyxFQUFFbUIsV0FIWDtBQUlFLGFBQVMsRUFBQyx3QkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQU4sQ0FORixDQUZJLENBSEosQ0FESjtBQXFCSCxDQWxGRDs7R0FBTXBCLGM7O0FBb0ZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2svZGlzdC9Mb2dpbic7XG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcblxuXG4gICAgLy9IYW5kbGUgZmFjZWJvb2sgbG9naW4gZGF0YVxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy9Ub2dnbGUgbG9naW5jaGVja1xuXG5cbiAgICAgICAgXG5cbiAgICAgICAgdmFyIG15SUQgPSBkYXRhLnByb2ZpbGUuaWQ7XG4gICAgICAgIHZhciBteU5hbWUgPSBkYXRhLnByb2ZpbGUubmFtZTtcbiAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGRhdGEucHJvZmlsZS5maXJzdF9uYW1lO1xuICAgICAgICB2YXIgdXNlckVtYWlsID0gZGF0YS5wcm9maWxlLmVtYWlsO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpXG4gICAgICAgIFxuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXG4gICAgICAgICAgICBxdWVyeTogeyBuYW1lOiBteU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBteUlELFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyRW1haWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc1BhdGg6Jy9zZWFyY2gnXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCcvc2VhcmNoJylcbiAgICAgIH07XG5cbiAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgfTtcblxuXG5cbiAgICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoYXQgd2FzIHRoZSByZXNwb25zZScpXG4gICAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coJ1dpbGwgcmVkaXJlY3QnKTtcblxuICAgICAgICB2YXIgTG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9naW5CdG4nKVxuICAgICAgICB2YXIgcHJvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm92aWRlcicpXG4gICAgICAgIGNvbnNvbGUubG9nKExvZ2luQnRuKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm92KVxuICAgICAgICBjb25zb2xlLmxvZyhMb2dpbkJ1dHRvbilcblxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcblxuXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5SZWRpcmVjdGluZy4uLjwvaDI+XG5cbiAgICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiMjYwNTYyNDkwMzAzNjQ4OFwiPlxuICAgIFxuICAgICAgICA8TG9naW5CdXR0b25cbiAgICAgICAgICBzY29wZT1cImVtYWlsXCJcbiAgICAgICAgICBvbkNvbXBsZXRlZD17aGFuZGxlUmVzcG9uc2V9XG4gICAgICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1mYlwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj48Yj5Mb2dpbiB2aWEgRmFjZWJvb2s8L2I+PC9zcGFuPlxuICAgICAgICA8L0xvZ2luQnV0dG9uPlxuICAgICAgICBcbiAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUmVkaXJlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})