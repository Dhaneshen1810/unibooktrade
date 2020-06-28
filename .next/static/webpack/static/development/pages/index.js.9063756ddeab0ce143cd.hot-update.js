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
  }, "Making it easier for those who need to find their books"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "And those selling their old ones.")), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "1338252696564421",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Login via Facebook"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteUlEIiwibXlOYW1lIiwiSW5kZXgiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImlkIiwibmFtZSIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBSUEsSUFBSUEsSUFBSSxHQUFDLElBQVQ7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLFFBQUlKLElBQUksR0FBR0ksSUFBSSxDQUFDRyxPQUFMLENBQWFDLEVBQXhCO0FBQ0EsUUFBSVAsTUFBTSxHQUFHRyxJQUFJLENBQUNHLE9BQUwsQ0FBYUUsSUFBMUI7QUFDRCxHQUxIOztBQU9DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM1QixTQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxXQUFLLEVBQUxBO0FBQUYsS0FBZDtBQUNELEdBRkY7O0FBSUMsU0FDRjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosQ0FKQSxFQVNBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUZKLENBVEEsRUFjQSxNQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBQyxrQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLGVBQVcsRUFBRVIsY0FGZjtBQUdFLFdBQU8sRUFBRU8sV0FIWDtBQUlFLGFBQVMsRUFBQyx3QkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFORixDQURKLENBZEEsRUF3QkosTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJJLENBREU7QUE0QkQsQ0F6Q0w7O0tBQU1SLEs7QUE2Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MDYzNzU2ZGRlYWIwY2UxNDNjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XHJcblxyXG5cclxuXHJcbnZhciBteUlEPW51bGw7XHJcbnZhciBteU5hbWUgPSBudWxsO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICB2YXIgbXlJRCA9IGRhdGEucHJvZmlsZS5pZDtcclxuICAgICAgICB2YXIgbXlOYW1lID0gZGF0YS5wcm9maWxlLm5hbWVcclxuICAgICAgfTtcclxuXHJcbiAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tcGFnZSc+XHJcbiAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWFjRXdhbiBCb29rIFRyYWRlPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS10aXRsZSc+XHJcbiAgICAgICAgPGgxPk1hY0V3YW48L2gxPlxyXG4gICAgICAgIDxoMT5Cb29rPC9oMT5cclxuICAgICAgICA8aDE+VHJhZGU8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J215LWludHJvJz5cclxuICAgICAgICA8cD5NYWtpbmcgaXQgZWFzaWVyIGZvciB0aG9zZSB3aG8gbmVlZCB0byBmaW5kIHRoZWlyIGJvb2tzPC9wPlxyXG4gICAgICAgIDxwPkFuZCB0aG9zZSBzZWxsaW5nIHRoZWlyIG9sZCBvbmVzLjwvcD5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCIxMzM4MjUyNjk2NTY0NDIxXCI+XHJcbiAgICAgICAgPExvZ2luQnV0dG9uXHJcbiAgICAgICAgICBzY29wZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ29tcGxldGVkPXtoYW5kbGVSZXNwb25zZX1cclxuICAgICAgICAgIG9uRXJyb3I9e2hhbmRsZUVycm9yfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1mYlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+TG9naW4gdmlhIEZhY2Vib29rPC9zcGFuPlxyXG4gICAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cclxuPExpbmsgaHJlZj0nL3Bvc3RzJz5HbyB0byBwb3N0czwvTGluaz5cclxuPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=