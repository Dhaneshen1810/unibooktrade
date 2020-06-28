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
    style: {
      display: "flex",
      flexDirection: "column"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "login-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "MacEwan Book Trade")), __jsx("div", {
    className: "my-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "MacEwan"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Book"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Trade")), __jsx("div", {
    className: "my-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["LoginButton"], {
    scope: "email",
    onCompleted: handleResponse,
    onError: handleError,
    className: "btn btn-primary btn-fb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Login via Facebook")))), __jsx("div", {
    className: "screen-remain",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteUlEIiwibXlOYW1lIiwiSW5kZXgiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImlkIiwibmFtZSIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFJQSxJQUFJQSxJQUFJLEdBQUMsSUFBVDtBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFaEIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQVU7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBRUEsUUFBSUosSUFBSSxHQUFHSSxJQUFJLENBQUNHLE9BQUwsQ0FBYUMsRUFBeEI7QUFDQSxRQUFJUCxNQUFNLEdBQUdHLElBQUksQ0FBQ0csT0FBTCxDQUFhRSxJQUExQjtBQUNELEdBTEg7O0FBT0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFJQyxTQUNGO0FBQUssU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBRSxNQUFWO0FBQWtCQyxtQkFBYSxFQUFDO0FBQWhDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FEQSxFQUlBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixDQUpBLEVBU0E7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpR0FESixDQVRBLEVBY0EsTUFBQywrREFBRDtBQUFrQixTQUFLLEVBQUMsa0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxlQUFXLEVBQUVYLGNBRmY7QUFHRSxXQUFPLEVBQUVPLFdBSFg7QUFJRSxhQUFTLEVBQUMsd0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkYsQ0FESixDQWRBLENBREEsRUEwQko7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJJLENBREU7QUFnQ0QsQ0E3Q0w7O0tBQU1SLEs7QUFpRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44YjU4ZjRlZTcyMzliY2Y5YTE3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XHJcblxyXG5cclxuXHJcbnZhciBteUlEPW51bGw7XHJcbnZhciBteU5hbWUgPSBudWxsO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICB2YXIgbXlJRCA9IGRhdGEucHJvZmlsZS5pZDtcclxuICAgICAgICB2YXIgbXlOYW1lID0gZGF0YS5wcm9maWxlLm5hbWVcclxuICAgICAgfTtcclxuXHJcbiAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLXBhZ2UnPlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1hY0V3YW4gQm9vayBUcmFkZTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktdGl0bGUnPlxyXG4gICAgICAgIDxoMT5NYWNFd2FuPC9oMT5cclxuICAgICAgICA8aDE+Qm9vazwvaDE+XHJcbiAgICAgICAgPGgxPlRyYWRlPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pbnRybyc+XHJcbiAgICAgICAgPHA+TWFraW5nIGl0IGVhc2llciBmb3IgdGhvc2Ugd2hvIG5lZWQgdG8gZmluZCB0aGVpciBib29rc1xyXG4gICAgICAgIEFuZCB0aG9zZSBzZWxsaW5nIHRoZWlyIG9sZCBvbmVzLjwvcD5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCIxMzM4MjUyNjk2NTY0NDIxXCI+XHJcbiAgICAgICAgPExvZ2luQnV0dG9uXHJcbiAgICAgICAgICBzY29wZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cclxuICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUVycm9yfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1mYlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+TG9naW4gdmlhIEZhY2Vib29rPC9zcGFuPlxyXG4gICAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwic2NyZWVuLXJlbWFpblwiPlxyXG5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9