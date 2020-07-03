webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\posts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //Getting book data from database


var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstName = _ref$router$query.firstName;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Hello there, ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Hello there, ", firstName), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Your ID is: ", id));
});
posts.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, _yield$res$json, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          _yield$res$json = _context.sent;
          data = _yield$res$json.data;
          console.log('data is: ...');
          return _context.abrupt("return", {
            books: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (posts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYm9va3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLDhEQUFVLENBQUM7QUFBQSwrQkFBR0MsTUFBSCxDQUFjQyxLQUFkO0FBQUEsTUFBcUJDLElBQXJCLHFCQUFxQkEsSUFBckI7QUFBQSxNQUEyQkMsRUFBM0IscUJBQTJCQSxFQUEzQjtBQUFBLE1BQStCQyxTQUEvQixxQkFBK0JBLFNBQS9CO0FBQUEsU0FDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWlCRixJQUFqQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBaUJFLFNBQWpCLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnQkQsRUFBaEIsQ0FISixDQURxQjtBQUFBLENBQUQsQ0FBeEI7QUFVQUwsS0FBSyxDQUFDTyxlQUFOLGlNQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDRkMseURBQUssQ0FBQyxpQ0FBRCxDQURIOztBQUFBO0FBQ2RDLGFBRGM7QUFBQTtBQUFBLGlCQUVHQSxHQUFHLENBQUNDLElBQUosRUFGSDs7QUFBQTtBQUFBO0FBRVpDLGNBRlksbUJBRVpBLElBRlk7QUFJcEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBSm9CLDJDQUtkO0FBQUVDLGlCQUFLLEVBQUVIO0FBQVQsV0FMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVVlWCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHMuanMuMjE2NWUyYjVjZjVmNTZlNjcyYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0TmFtZX19fSApID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHA+SGVsbG8gdGhlcmUsIHtuYW1lfTwvcD5cclxuICAgICAgICA8cD5IZWxsbyB0aGVyZSwge2ZpcnN0TmFtZX08L3A+XHJcbiAgICAgICAgPHA+WW91ciBJRCBpczoge2lkfTwvcD5cclxuXHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuKSk7XHJcblxyXG5wb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJyk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgaXM6IC4uLicpXHJcbiAgICByZXR1cm57IGJvb2tzOiBkYXRhIH1cclxufVxyXG4gIFxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9