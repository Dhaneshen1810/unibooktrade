webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




handleResponse = function handleResponse(data) {
  console.log(data);
};

handleError = function handleError(error) {
  _this.setState({
    error: error
  });
};

var Index = function Index() {
  return __jsx("div", {
    className: "login-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "MacEwan Book Trade")), __jsx("div", {
    className: "my-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Macewan Book Exchange"), __jsx("div", {
    className: "my-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "Login via facebook and start trading your macEwan books!"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "123456789",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["LoginButton"], {
    scope: "email",
    onCompleted: _this.handleResponse,
    onError: _this.handleError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Login via Facebook"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 1
    }
  }, "Go to posts"));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsInNldFN0YXRlIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFJQUEsY0FBYyxHQUFHLHdCQUFDQyxJQUFELEVBQVU7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsQ0FGSDs7QUFHRUcsV0FBVyxHQUFHLHFCQUFDQyxLQUFELEVBQVc7QUFDdkIsT0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQsU0FBSyxFQUFMQTtBQUFGLEdBQWQ7QUFDRCxDQUZEOztBQUlGLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FJVjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkEsRUFLQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBTEEsRUFNQSxNQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsZUFBVyxFQUFFLEtBQUksQ0FBQ1AsY0FGcEI7QUFHRSxXQUFPLEVBQUUsS0FBSSxDQUFDSSxXQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMRixDQURKLENBTkEsRUFlSixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSSxDQUpVO0FBQUEsQ0FBZDs7S0FBTUcsSztBQTBCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRjNGZhMWJhMzIyYjFmMDljYTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIExvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xyXG5cclxuXHJcblxyXG5oYW5kbGVSZXNwb25zZSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcclxuICB9XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuXHJcbiAgICBcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tcGFnZSc+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWFjRXdhbiBCb29rIFRyYWRlPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS10aXRsZSc+TWFjZXdhbiBCb29rIEV4Y2hhbmdlPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaW50cm8nPkxvZ2luIHZpYSBmYWNlYm9vayBhbmQgc3RhcnQgdHJhZGluZyB5b3VyIG1hY0V3YW4gYm9va3MhPC9kaXY+XHJcbiAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjEyMzQ1Njc4OVwiPlxyXG4gICAgICAgIDxMb2dpbkJ1dHRvblxyXG4gICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNvbXBsZXRlZD17dGhpcy5oYW5kbGVSZXNwb25zZX1cclxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+TG9naW4gdmlhIEZhY2Vib29rPC9zcGFuPlxyXG4gICAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cclxuPExpbmsgaHJlZj0nL3Bvc3RzJz5HbyB0byBwb3N0czwvTGluaz5cclxuPC9kaXY+XHJcblxyXG4pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9