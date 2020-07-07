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
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, mytitle), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 42
    }
  }, "Book name below.")))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, books.map(function (book) {
    //if (mytitle=='' && author==''){
    return __jsx("div", {
      key: book._id,
      className: "book-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, "Title: ", book.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, "Author: ", book.author));
  })));
});

posts.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(mytitle) {
    var res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('book is');
            console.log(mytitle.query.mytitle);
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {
              headers: {
                title: 'Fine'
              }
            });

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            _yield$res$json = _context.sent;
            data = _yield$res$json.data;
            return _context.abrupt("return", {
              books: data
            });

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rbGlzdC5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsIm1hcCIsImJvb2siLCJfaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUlBLElBQU1BLEtBQUssR0FBR0MsOERBQVUsQ0FBQyxnQkFBb0Q7QUFBQSwrQkFBakRDLE1BQWlELENBQXRDQyxLQUFzQztBQUFBLE1BQS9CQyxPQUErQixxQkFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLE1BQXNCLHFCQUF0QkEsTUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFHekUsU0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixPQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixVQUN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUR6QixDQUZKLENBREosQ0FOSixFQWtCSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQ0UsS0FBSyxDQUFDQyxHQUFOLENBQVcsVUFBQUMsSUFBSSxFQUFJO0FBR2hCO0FBQ0ksV0FDSTtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxHQUFmO0FBQW9CLGVBQVMsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBV0QsSUFBSSxDQUFDRSxLQUFoQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWUYsSUFBSSxDQUFDSCxNQUFqQixDQUZKLENBREo7QUFRUCxHQVpBLENBSEQsQ0FsQkosQ0FGQTtBQXdDRixDQTNDc0IsQ0FBeEI7O0FBK0NBTCxLQUFLLENBQUNXLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9QLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQlEsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFPLENBQUNELEtBQVIsQ0FBY0MsT0FBMUI7QUFGb0I7QUFBQSxtQkFHRlUseURBQUssQ0FBQyxpQ0FBRCxFQUFvQztBQUN2REMscUJBQU8sRUFBRTtBQUNMTCxxQkFBSyxFQUFFO0FBREY7QUFEOEMsYUFBcEMsQ0FISDs7QUFBQTtBQUdkTSxlQUhjO0FBQUE7QUFBQSxtQkFRR0EsR0FBRyxDQUFDQyxJQUFKLEVBUkg7O0FBQUE7QUFBQTtBQVFaQyxnQkFSWSxtQkFRWkEsSUFSWTtBQUFBLDZDQVVkO0FBQUVaLG1CQUFLLEVBQUVZO0FBQVQsYUFWYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjZWxCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxib29rbGlzdC5qcy40YmFjZTljNTNlZmRhZjUwZDMwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy9HZXR0aW5nIGJvb2sgZGF0YSBmcm9tIGRhdGFiYXNlXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuXHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bXl0aXRsZSwgYXV0aG9yfX0sIGJvb2tzfSApID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgIDxkaXY+XHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxwPntteXRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWxvdy5cclxuICAgICAgICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB7Ym9va3MubWFwKCBib29rID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vaWYgKG15dGl0bGU9PScnICYmIGF1dGhvcj09Jycpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGl0bGU6IHtib29rLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXV0aG9yOiB7Ym9vay5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuKX0pO1xyXG5cclxuXHJcblxyXG5wb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAobXl0aXRsZSkgPT57XHJcbiAgICBjb25zb2xlLmxvZygnYm9vayBpcycpO1xyXG4gICAgY29uc29sZS5sb2cobXl0aXRsZS5xdWVyeS5teXRpdGxlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZpbmUnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJueyBib29rczogZGF0YSB9XHJcbn1cclxuXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==