webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  //Handle facebook login data\n  var handleResponse = function handleResponse(data) {\n    console.log(data); //Toggle logincheck\n\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    Router.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  var responseFacebook = function responseFacebook(response) {\n    console.log(response);\n    console.log('That was the response');\n  };\n\n  __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookLogin\"], {\n    appId: \"2605624903036488\",\n    autoLoad: true,\n    fields: \"name,email,picture\",\n    onClick: componentClicked,\n    callback: responseFacebook,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  });\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Will redirect');\n    var LoginBtn = document.getElementById('LoginBtn');\n    var prov = document.getElementById('provider');\n    console.log(LoginBtn);\n    console.log(prov);\n    console.log(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"]);\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, \"Redirecting...\"));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInJlc3BvbnNlRmFjZWJvb2siLCJyZXNwb25zZSIsImNvbXBvbmVudENsaWNrZWQiLCJ1c2VFZmZlY3QiLCJMb2dpbkJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm92IiwiTG9naW5CdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUUsU0FBaEJBLGNBQWdCLEdBQU07QUFBQTs7QUFHeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFENkIsQ0FJN0I7O0FBS0EsUUFBSUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdOLElBQUksQ0FBQ0ksT0FBTCxDQUFhRyxJQUExQjtBQUNBLFFBQUlDLFNBQVMsR0FBR1IsSUFBSSxDQUFDSSxPQUFMLENBQWFLLFVBQTdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHVixJQUFJLENBQUNJLE9BQUwsQ0FBYU8sS0FBN0I7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFNBQVo7QUFFQUUsVUFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUVSLFlBQUksRUFBRUQsTUFBUjtBQUNDRCxVQUFFLEVBQUVGLElBREw7QUFFQ2EsaUJBQVMsRUFBRVIsU0FGWjtBQUdDRSxpQkFBUyxFQUFFQTtBQUhaLE9BRkM7QUFPUk8sWUFBTSxFQUFDO0FBUEMsS0FBWixFQVNJLFNBVEo7QUFVRCxHQXpCSDs7QUEyQkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFNRCxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFFBQUQsRUFBYztBQUNuQ3JCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsUUFBWjtBQUNBckIsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxHQUhIOztBQUtFLFFBQUMsNERBQUQ7QUFDRSxTQUFLLEVBQUMsa0JBRFI7QUFFRSxZQUFRLEVBQUUsSUFGWjtBQUdFLFVBQU0sRUFBQyxvQkFIVDtBQUlFLFdBQU8sRUFBRXFCLGdCQUpYO0FBS0UsWUFBUSxFQUFFRixnQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFGRyx5REFBUyxDQUFDLFlBQUs7QUFDWHZCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFFQSxRQUFJdUIsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLFFBQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQVg7QUFDQTFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdUIsUUFBWjtBQUNBeEIsV0FBTyxDQUFDQyxHQUFSLENBQVkwQixJQUFaO0FBQ0EzQixXQUFPLENBQUNDLEdBQVIsQ0FBWTJCLDBEQUFaO0FBYUgsR0FwQlEsQ0FBVDtBQXNCQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLENBREo7QUFVSCxDQWxGRDs7R0FBTS9CLGM7O0FBb0ZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2svZGlzdC9Mb2dpbic7XG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcblxuXG4gICAgLy9IYW5kbGUgZmFjZWJvb2sgbG9naW4gZGF0YVxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cblxuICAgICAgICAvL1RvZ2dsZSBsb2dpbmNoZWNrXG5cblxuICAgICAgICBcblxuICAgICAgICB2YXIgbXlJRCA9IGRhdGEucHJvZmlsZS5pZDtcbiAgICAgICAgdmFyIG15TmFtZSA9IGRhdGEucHJvZmlsZS5uYW1lO1xuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZGF0YS5wcm9maWxlLmZpcnN0X25hbWU7XG4gICAgICAgIHZhciB1c2VyRW1haWwgPSBkYXRhLnByb2ZpbGUuZW1haWw7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJFbWFpbClcbiAgICAgICAgXG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IG15TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG15SUQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWw6IHVzZXJFbWFpbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzUGF0aDonL3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH0sJy9zZWFyY2gnKVxuICAgICAgfTtcblxuICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICB9O1xuXG5cblxuICAgIGNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhhdCB3YXMgdGhlIHJlc3BvbnNlJylcbiAgICAgIH1cblxuICAgICAgPEZhY2Vib29rTG9naW5cbiAgICAgICAgYXBwSWQ9XCIyNjA1NjI0OTAzMDM2NDg4XCJcbiAgICAgICAgYXV0b0xvYWQ9e3RydWV9XG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgICAgIG9uQ2xpY2s9e2NvbXBvbmVudENsaWNrZWR9XG4gICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfSAvPlxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdXaWxsIHJlZGlyZWN0Jyk7XG5cbiAgICAgICAgdmFyIExvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luQnRuJylcbiAgICAgICAgdmFyIHByb3YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvdmlkZXInKVxuICAgICAgICBjb25zb2xlLmxvZyhMb2dpbkJ0bilcbiAgICAgICAgY29uc29sZS5sb2cocHJvdilcbiAgICAgICAgY29uc29sZS5sb2coTG9naW5CdXR0b24pXG5cblxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cblxuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDI+UmVkaXJlY3RpbmcuLi48L2gyPlxuXG4gICAgICAgICBcblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUmVkaXJlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})