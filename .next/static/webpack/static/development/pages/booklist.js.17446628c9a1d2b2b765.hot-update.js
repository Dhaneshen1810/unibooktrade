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
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstname = _ref$router$query.firstname,
      mytitle = _ref$router$query.mytitle,
      author = _ref$router$query.author,
      books = _ref.books;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Firstname: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "title: ", mytitle), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Author: ", author), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 42
    }
  }, "Book name below.")))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, books.map(function (book) {
    return __jsx("div", {
      key: book._id,
      className: "book-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, "Title: ", book.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, "Author: ", book.author), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, "Owner: ", book.ownerID), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "Book id: ", book._id));
  })));
});

posts.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://unibooktrade.vercel.app/api/books', {
              headers: {
                title: ctx.query.mytitle,
                author: ctx.query.author
              }
            });

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

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rbGlzdC5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsIm1hcCIsImJvb2siLCJfaWQiLCJ0aXRsZSIsIm93bmVySUQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBRUE7QUFLQSxJQUFNQSxLQUFLLEdBQUdDLDhEQUFVLENBQUMsZ0JBQXlFO0FBQUEsK0JBQXRFQyxNQUFzRSxDQUEzREMsS0FBMkQ7QUFBQSxNQUFwREMsSUFBb0QscUJBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxFQUE4QyxxQkFBOUNBLEVBQThDO0FBQUEsTUFBMUNDLFNBQTBDLHFCQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsT0FBK0IscUJBQS9CQSxPQUErQjtBQUFBLE1BQXRCQyxNQUFzQixxQkFBdEJBLE1BQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBSzlGLFNBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVUwsSUFBVixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFRQyxFQUFSLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFlQyxTQUFmLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFXQyxPQUFYLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFZQyxNQUFaLENBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixVQUN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUR6QixDQU5KLENBREosQ0FISixFQW1CSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQ0MsS0FBSyxDQUFDQyxHQUFOLENBQVcsVUFBQUMsSUFBSSxFQUFJO0FBR1osV0FDSTtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxHQUFmO0FBQW9CLGVBQVMsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV0QsSUFBSSxDQUFDRSxLQUFoQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWUYsSUFBSSxDQUFDSCxNQUFqQixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV0csSUFBSSxDQUFDRyxPQUFoQixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBYUgsSUFBSSxDQUFDQyxHQUFsQixDQUpKLENBREo7QUFXUCxHQWRBLENBSEQsQ0FuQkosQ0FGQTtBQWdESCxDQXJEdUIsQ0FBeEI7O0FBd0RBWixLQUFLLENBQUNlLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUVDLHlEQUFLLENBQUMsMkNBQUQsRUFBOEM7QUFDckVDLHFCQUFPLEVBQUU7QUFDTEwscUJBQUssRUFBRUcsR0FBRyxDQUFDYixLQUFKLENBQVVJLE9BRFo7QUFFTEMsc0JBQU0sRUFBRVEsR0FBRyxDQUFDYixLQUFKLENBQVVLO0FBRmI7QUFENEQsYUFBOUMsQ0FGUDs7QUFBQTtBQUVWVyxlQUZVO0FBQUE7QUFBQSxtQkFXT0EsR0FBRyxDQUFDQyxJQUFKLEVBWFA7O0FBQUE7QUFBQTtBQVdSQyxnQkFYUSxtQkFXUkEsSUFYUTtBQUFBLDZDQWVWO0FBQUVaLG1CQUFLLEVBQUVZO0FBQVQsYUFmVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQmVyQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYm9va2xpc3QuanMuMTc0NDY2MjhjOWExZDJiMmI3NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHBvc3RzID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBteXRpdGxlLCBhdXRob3J9fSwgYm9va3N9ICkgPT4ge1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgPGRpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5GaXJzdG5hbWU6IHtmaXJzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+dGl0bGU6IHtteXRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkF1dGhvcjoge2F1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5GaW5kIHlvdXIgYm9vayBieSBlbnRlcmluZyBcclxuICAgICAgICAgICAgICAgICAgICB0aGUgPGI+QXV0aG9yPC9iPiBvciA8Yj5Cb29rIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3cuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGl0bGU6IHtib29rLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXV0aG9yOiB7Ym9vay5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Pd25lcjoge2Jvb2sub3duZXJJRH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgaWQ6IHtib29rLl9pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KX1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5wb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PntcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjdHgucXVlcnkubXl0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yOiBjdHgucXVlcnkuYXV0aG9yXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJueyBib29rczogZGF0YSB9XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==