webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook */ \"./node_modules/react-facebook/lib/index.js\");\n/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook/dist/Login */ \"./node_modules/react-facebook/dist/Login.js\");\n/* harmony import */ var react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_dist_Login__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/search.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar searchRedirect = function searchRedirect() {\n  _s();\n\n  //Handle facebook login data\n  var handleResponse = function handleResponse(data) {\n    console.log(data); //Toggle logincheck\n\n    var myID = data.profile.id;\n    var myName = data.profile.name;\n    var firstName = data.profile.first_name;\n    var userEmail = data.profile.email;\n    console.log(userEmail);\n    Router.push({\n      pathname: '/posts',\n      query: {\n        name: myName,\n        id: myID,\n        firstname: firstName,\n        userEmail: userEmail\n      },\n      asPath: '/search'\n    }, '/search');\n  };\n\n  var handleError = function handleError(error) {\n    _this.setState({\n      error: error\n    });\n  };\n\n  var responseFacebook = function responseFacebook(response) {\n    console.log(response);\n    console.log('That was the response');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('Will redirect');\n    var LoginBtn = document.getElementById('LoginBtn');\n    var prov = document.getElementById('provider');\n    console.log(LoginBtn);\n    console.log(prov);\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"Redirecting...\"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"FacebookProvider\"], {\n    appId: \"2605624903036488\",\n    id: \"provider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_1__[\"LoginButton\"], {\n    scope: \"email\",\n    onCompleted: handleResponse,\n    onError: handleError,\n    className: \"btn btn-primary btn-fb\",\n    id: \"LoginBtn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, \"Login via Facebook\")))));\n};\n\n_s(searchRedirect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchRedirect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsic2VhcmNoUmVkaXJlY3QiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibXlJRCIsInByb2ZpbGUiLCJpZCIsIm15TmFtZSIsIm5hbWUiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwidXNlckVtYWlsIiwiZW1haWwiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImFzUGF0aCIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInJlc3BvbnNlRmFjZWJvb2siLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsIkxvZ2luQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb3YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUUsU0FBaEJBLGNBQWdCLEdBQU07QUFBQTs7QUFHeEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFENkIsQ0FHN0I7O0FBS0EsUUFBSUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJQyxNQUFNLEdBQUdOLElBQUksQ0FBQ0ksT0FBTCxDQUFhRyxJQUExQjtBQUNBLFFBQUlDLFNBQVMsR0FBR1IsSUFBSSxDQUFDSSxPQUFMLENBQWFLLFVBQTdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHVixJQUFJLENBQUNJLE9BQUwsQ0FBYU8sS0FBN0I7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFNBQVo7QUFFQUUsVUFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUVSLFlBQUksRUFBRUQsTUFBUjtBQUNDRCxVQUFFLEVBQUVGLElBREw7QUFFQ2EsaUJBQVMsRUFBRVIsU0FGWjtBQUdDRSxpQkFBUyxFQUFFQTtBQUhaLE9BRkM7QUFPUk8sWUFBTSxFQUFDO0FBUEMsS0FBWixFQVNJLFNBVEo7QUFVRCxHQXhCSDs7QUEwQkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFNRCxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFFBQUQsRUFBYztBQUNuQ3JCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsUUFBWjtBQUNBckIsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDRCxHQUhIOztBQU1BcUIseURBQVMsQ0FBQyxZQUFLO0FBQ1h0QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBRUEsUUFBSXNCLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxRQUFJQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFYO0FBQ0F6QixXQUFPLENBQUNDLEdBQVIsQ0FBWXNCLFFBQVo7QUFDQXZCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZeUIsSUFBWjtBQVNILEdBZlEsQ0FBVDtBQWlCQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLEVBR0ksTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQTJDLE1BQUUsRUFBQyxVQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUosTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsZUFBVyxFQUFFNUIsY0FGZjtBQUdFLFdBQU8sRUFBRW1CLFdBSFg7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFLRSxNQUFFLEVBQUcsVUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQU4sQ0FQRixDQUZJLENBSEosQ0FESjtBQXFCSCxDQWhGRDs7R0FBTXBCLGM7O0FBa0ZTQSw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24sIEZhY2Vib29rTG9naW4gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2svZGlzdC9Mb2dpbic7XG5cblxuY29uc3Qgc2VhcmNoUmVkaXJlY3Q9ICgpID0+IHtcblxuXG4gICAgLy9IYW5kbGUgZmFjZWJvb2sgbG9naW4gZGF0YVxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy9Ub2dnbGUgbG9naW5jaGVja1xuXG5cbiAgICAgICAgXG5cbiAgICAgICAgdmFyIG15SUQgPSBkYXRhLnByb2ZpbGUuaWQ7XG4gICAgICAgIHZhciBteU5hbWUgPSBkYXRhLnByb2ZpbGUubmFtZTtcbiAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGRhdGEucHJvZmlsZS5maXJzdF9uYW1lO1xuICAgICAgICB2YXIgdXNlckVtYWlsID0gZGF0YS5wcm9maWxlLmVtYWlsO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpXG4gICAgICAgIFxuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXG4gICAgICAgICAgICBxdWVyeTogeyBuYW1lOiBteU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBteUlELFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlsOiB1c2VyRW1haWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc1BhdGg6Jy9zZWFyY2gnXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9LCcvc2VhcmNoJylcbiAgICAgIH07XG5cbiAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xuICAgICAgfTtcblxuXG5cbiAgICBjb25zdCByZXNwb25zZUZhY2Vib29rID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoYXQgd2FzIHRoZSByZXNwb25zZScpXG4gICAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coJ1dpbGwgcmVkaXJlY3QnKTtcblxuICAgICAgICB2YXIgTG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9naW5CdG4nKVxuICAgICAgICB2YXIgcHJvdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm92aWRlcicpXG4gICAgICAgIGNvbnNvbGUubG9nKExvZ2luQnRuKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm92KVxuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcblxuXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5SZWRpcmVjdGluZy4uLjwvaDI+XG5cbiAgICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiMjYwNTYyNDkwMzAzNjQ4OFwiIGlkPSdwcm92aWRlcic+XG4gICAgXG4gICAgICAgIDxMb2dpbkJ1dHRvblxuICAgICAgICAgIHNjb3BlPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cbiAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWZiXCJcbiAgICAgICAgICBpZCA9ICdMb2dpbkJ0bidcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPjxiPkxvZ2luIHZpYSBGYWNlYm9vazwvYj48L3NwYW4+XG4gICAgICAgIDwvTG9naW5CdXR0b24+XG4gICAgICAgIFxuICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUmVkaXJlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

})