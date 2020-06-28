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




var myID = null;
var myName = null;

var Index = function Index() {
  var handleResponse = function handleResponse(data) {
    console.log(data);
    var myID = data.profile.id;
    var myName = data.profile.name;
  };

  var handleError = function handleError(error) {
    _this.setState({
      error: error
    });
  };

  return __jsx("div", {
    className: "login-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "MacEwan Book Trade")), __jsx("div", {
    className: "my-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "MacEwan"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Book"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Trade")), __jsx("div", {
    className: "my-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Making it easier for those who need to find their books And those selling their old ones.")), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "1338252696564421",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: './posts'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["LoginButton"], {
    scope: "email",
    onCompleted: handleResponse,
    onError: handleError,
    className: "btn btn-primary btn-fb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Login via Facebook")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteUlEIiwibXlOYW1lIiwiSW5kZXgiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImlkIiwibmFtZSIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBLElBQUlBLElBQUksR0FBQyxJQUFUO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUVoQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQSxRQUFJSixJQUFJLEdBQUdJLElBQUksQ0FBQ0csT0FBTCxDQUFhQyxFQUF4QjtBQUNBLFFBQUlQLE1BQU0sR0FBR0csSUFBSSxDQUFDRyxPQUFMLENBQWFFLElBQTFCO0FBQ0QsR0FMSDs7QUFPQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDNUIsU0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQsV0FBSyxFQUFMQTtBQUFGLEtBQWQ7QUFDRCxHQUZGOztBQUlDLFNBQ0Y7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURBLEVBSUE7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLENBSkEsRUFTQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQURKLENBVEEsRUFlQSxNQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBQyxrQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUU7QUFBRUUsY0FBUSxFQUFDO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsZUFBVyxFQUFFVixjQUZmO0FBR0UsV0FBTyxFQUFFTyxXQUhYO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLENBREosQ0FEQSxDQWZBLENBREU7QUFvQ0QsQ0FqREw7O0tBQU1SLEs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yNzFkYzlkOTBiNDYzYzgxMDFlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcclxuXHJcblxyXG5cclxudmFyIG15SUQ9bnVsbDtcclxudmFyIG15TmFtZSA9IG51bGw7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIHZhciBteUlEID0gZGF0YS5wcm9maWxlLmlkO1xyXG4gICAgICAgIHZhciBteU5hbWUgPSBkYXRhLnByb2ZpbGUubmFtZVxyXG4gICAgICB9O1xyXG5cclxuICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1wYWdlJz5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NYWNFd2FuIEJvb2sgVHJhZGU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J215LXRpdGxlJz5cclxuICAgICAgICA8aDE+TWFjRXdhbjwvaDE+XHJcbiAgICAgICAgPGgxPkJvb2s8L2gxPlxyXG4gICAgICAgIDxoMT5UcmFkZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaW50cm8nPlxyXG4gICAgICAgIDxwPk1ha2luZyBpdCBlYXNpZXIgZm9yIHRob3NlIHdobyBuZWVkIHRvIGZpbmQgdGhlaXIgYm9va3NcclxuICAgICAgICBBbmQgdGhvc2Ugc2VsbGluZyB0aGVpciBvbGQgb25lcy48L3A+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjEzMzgyNTI2OTY1NjQ0MjFcIj5cclxuICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6Jy4vcG9zdHMnfX0+XHJcbiAgICAgICAgPExvZ2luQnV0dG9uXHJcbiAgICAgICAgICBzY29wZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cclxuICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUVycm9yfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1mYlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+TG9naW4gdmlhIEZhY2Vib29rPC9zcGFuPlxyXG4gICAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0ZhY2Vib29rUHJvdmlkZXI+XHJcbiAgICAgIFxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9