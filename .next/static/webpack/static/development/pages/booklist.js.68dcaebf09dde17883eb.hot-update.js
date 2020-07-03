webpackHotUpdate("static\\development\\pages\\booklist.js",{

/***/ "./pages/booklist.js":
/*!***************************!*\
  !*** ./pages/booklist.js ***!
  \***************************/
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
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\booklist.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 //Getting book data from database


var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var _ref$router$query = _ref.router.query,
      mytitle = _ref$router$query.mytitle,
      author = _ref$router$query.author,
      books = _ref.books;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "the title is ", mytitle), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 42
    }
  }, "Book name below.")))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, books.map(function (book) {
    var check = 0;

    if (book.title == 'my new title') {
      return __jsx("div", {
        key: book._id,
        className: "book-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, book.title);
    } else {}
  })));
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
          return _context.abrupt("return", {
            books: data
          });

        case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rbGlzdC5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsIm1hcCIsImJvb2siLCJjaGVjayIsInRpdGxlIiwiX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBR0MsOERBQVUsQ0FBQztBQUFBLCtCQUFHQyxNQUFILENBQWNDLEtBQWQ7QUFBQSxNQUFxQkMsT0FBckIscUJBQXFCQSxPQUFyQjtBQUFBLE1BQThCQyxNQUE5QixxQkFBOEJBLE1BQTlCO0FBQUEsTUFBd0NDLEtBQXhDLFFBQXdDQSxLQUF4QztBQUFBLFNBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpQkYsT0FBakIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSLFVBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRHpCLENBRkosQ0FESixDQUZKLEVBaUJJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDRSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZixRQUFJQyxLQUFLLEdBQUMsQ0FBVjs7QUFDQSxRQUFJRCxJQUFJLENBQUNFLEtBQUwsSUFBYyxjQUFsQixFQUFpQztBQUdqQyxhQUNJO0FBQUssV0FBRyxFQUFFRixJQUFJLENBQUNHLEdBQWY7QUFBb0IsaUJBQVMsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tILElBQUksQ0FBQ0UsS0FEVixDQURKO0FBS0MsS0FSRCxNQVNJLENBRUg7QUFDSixHQWRBLENBREQsQ0FqQkosQ0FEcUI7QUFBQSxDQUFELENBQXhCO0FBMENBVixLQUFLLENBQUNZLGVBQU4saU1BQXdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNGQyx5REFBSyxDQUFDLGlDQUFELENBREg7O0FBQUE7QUFDZEMsYUFEYztBQUFBO0FBQUEsaUJBRUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUZIOztBQUFBO0FBQUE7QUFFWkMsY0FGWSxtQkFFWkEsSUFGWTtBQUFBLDJDQUlkO0FBQUVWLGlCQUFLLEVBQUVVO0FBQVQsV0FKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQVNlaEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJvb2tsaXN0LmpzLjY4ZGNhZWJmMDlkZGUxNzg4M2ViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vL0dldHRpbmcgYm9vayBkYXRhIGZyb20gZGF0YWJhc2VcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5cclxuY29uc3QgcG9zdHMgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e215dGl0bGUsIGF1dGhvcn19LCBib29rc30gKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxwPnRoZSB0aXRsZSBpcyB7bXl0aXRsZX08L3A+IFxyXG4gICAgICAgICAgICAgICAgPHA+RmluZCB5b3VyIGJvb2sgYnkgZW50ZXJpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlIDxiPkF1dGhvcjwvYj4gb3IgPGI+Qm9vayBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgICB7Ym9va3MubWFwKGJvb2sgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY2hlY2s9MDtcclxuICAgICAgICAgICAgaWYgKGJvb2sudGl0bGUgPT0gJ215IG5ldyB0aXRsZScpe1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICB7Ym9vay50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4pKTtcclxuXHJcbnBvc3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm57IGJvb2tzOiBkYXRhIH1cclxufVxyXG4gIFxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9