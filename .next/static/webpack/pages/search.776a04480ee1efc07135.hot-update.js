webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  searchRedirect.fbAsyncInit = function () {\n    console.log('init');\n    FB.init({\n      appId: '2605624903036488',\n      xfbml: true,\n      version: 'v2.5'\n    });\n    FB.getLoginStatus(function (response) {\n      statusChangeCallback(response);\n      console.log('resppnse is');\n      console.log(response);\n    });\n  };\n\n  var initFacebook = function initFacebook() {\n    searchRedirect.fbAsyncInit = function () {\n      FB.init({\n        appId: AppConstants.FB_APP_ID,\n        xfbml: true,\n        version: 'v2.5'\n      }); // after initialization, get the login status\n\n      FacebookActions.getLoginStatus();\n    };\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Will redirect');\n    fbAsyncInit();\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"Redirecting...\"));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJmYkFzeW5jSW5pdCIsImNvbnNvbGUiLCJsb2ciLCJGQiIsImluaXQiLCJhcHBJZCIsInhmYm1sIiwidmVyc2lvbiIsImdldExvZ2luU3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXNDaGFuZ2VDYWxsYmFjayIsImluaXRGYWNlYm9vayIsIkFwcENvbnN0YW50cyIsIkZCX0FQUF9JRCIsIkZhY2Vib29rQWN0aW9ucyIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBTTtBQUFBOztBQUV4QkEsZ0JBQWMsQ0FBQ0MsV0FBZixHQUE2QixZQUFXO0FBQ3BDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FDLE1BQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ0pDLFdBQUssRUFBUSxrQkFEVDtBQUVKQyxXQUFLLEVBQVEsSUFGVDtBQUdKQyxhQUFPLEVBQU07QUFIVCxLQUFSO0FBS0FKLE1BQUUsQ0FBQ0ssY0FBSCxDQUFrQixVQUFTQyxRQUFULEVBQW1CO0FBQ2pDQywwQkFBb0IsQ0FBQ0QsUUFBRCxDQUFwQjtBQUNBUixhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxRQUFaO0FBQ0gsS0FKRDtBQUtILEdBWkQ7O0FBY0EsTUFBTUUsWUFBWSxHQUFFLFNBQWRBLFlBQWMsR0FBSztBQUNyQlosa0JBQWMsQ0FBQ0MsV0FBZixHQUE2QixZQUFXO0FBQ3BDRyxRQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNKQyxhQUFLLEVBQVFPLFlBQVksQ0FBQ0MsU0FEdEI7QUFFSlAsYUFBSyxFQUFRLElBRlQ7QUFHSkMsZUFBTyxFQUFNO0FBSFQsT0FBUixFQURvQyxDQU9wQzs7QUFDQU8scUJBQWUsQ0FBQ04sY0FBaEI7QUFDSCxLQVREO0FBVUgsR0FYRDs7QUFpQkFPLHlEQUFTLENBQUMsWUFBSztBQUNYZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FGLGVBQVc7QUFZZCxHQWRRLENBQVQ7QUFnQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxDQURKO0FBVUgsQ0EzREQ7O0dBQU1ELGM7O0FBNkRTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4sIGZhY2Vib29rQWN0aW9ucyB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCBMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay9kaXN0L0xvZ2luJztcblxuXG5cbmNvbnN0IHNlYXJjaFJlZGlyZWN0PSAoKSA9PiB7XG5cbiAgICBzZWFyY2hSZWRpcmVjdC5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCcpXG4gICAgICAgIEZCLmluaXQoe1xuICAgICAgICAgICAgYXBwSWQgICAgICA6ICcyNjA1NjI0OTAzMDM2NDg4JyxcbiAgICAgICAgICAgIHhmYm1sICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgdmVyc2lvbiAgICA6ICd2Mi41J1xuICAgICAgICB9KTtcbiAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN0YXR1c0NoYW5nZUNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwcG5zZSBpcycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdEZhY2Vib29rID0oKSA9PntcbiAgICAgICAgc2VhcmNoUmVkaXJlY3QuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEZCLmluaXQoe1xuICAgICAgICAgICAgICAgIGFwcElkICAgICAgOiBBcHBDb25zdGFudHMuRkJfQVBQX0lELFxuICAgICAgICAgICAgICAgIHhmYm1sICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZlcnNpb24gICAgOiAndjIuNSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBhZnRlciBpbml0aWFsaXphdGlvbiwgZ2V0IHRoZSBsb2dpbiBzdGF0dXNcbiAgICAgICAgICAgIEZhY2Vib29rQWN0aW9ucy5nZXRMb2dpblN0YXR1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdXaWxsIHJlZGlyZWN0Jyk7XG4gICAgICAgIGZiQXN5bmNJbml0KClcblxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cblxuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDI+UmVkaXJlY3RpbmcuLi48L2gyPlxuXG4gICAgICAgICBcblxuICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUmVkaXJlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})