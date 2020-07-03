webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\posts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(_s(function (_ref) {
  _s();

  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstName = _ref$router$query.firstName,
      books = _ref.books;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var router = next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"];

  var handleSubmit = function handleSubmit() {};

  var handleChange = function handleChange() {};

  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Title"), __jsx("input", {
    type: "text",
    className: "form-control my-form-control",
    id: "exampleInputEmail1",
    placeholder: "Enter book title",
    name: "title",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    "class": "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Author"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter Author",
    name: "author",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    "class": "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "View all")));
}, "UZqfXGV5xp42Jy0C7/wlZ3oaVQA="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlUm91dGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxJQUFDLGdCQUF3RDtBQUFBOztBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFELENBRnlDO0FBQUEsTUFFbEVDLElBRmtFO0FBQUEsTUFFNURDLE9BRjREOztBQUFBLG1CQUdqQ0gsc0RBQVEsQ0FBQyxLQUFELENBSHlCO0FBQUEsTUFHbEVJLFlBSGtFO0FBQUEsTUFHcERDLGVBSG9EOztBQUFBLG1CQUk3Q0wsc0RBQVEsRUFKcUM7QUFBQSxNQUlsRU0sTUFKa0U7QUFBQSxNQUkxREMsU0FKMEQ7O0FBS3pFLE1BQU1iLE1BQU0sR0FBR2MscURBQWY7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUFFLENBQTdCOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FBRSxDQUE3Qjs7QUFFSixTQUNBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBU1osU0FBVCxNQURKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFIsVUFDeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEekIsWUFISixDQURKLEVBU0k7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBMEIsWUFBUSxFQUFFVyxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxFQUVBO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxhQUFTLEVBQUMsOEJBRmQ7QUFHSSxNQUFFLEVBQUMsb0JBSFA7QUFJSSxlQUFXLEVBQUMsa0JBSmhCO0FBS0ksUUFBSSxFQUFDLE9BTFQ7QUFNSSxZQUFRLEVBQUVDLFlBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBREosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBWkosRUFhSTtBQUFLLGFBQU0scUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQUVBO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxhQUFTLEVBQUMsY0FGZDtBQUdJLGVBQVcsRUFBQyxjQUhoQjtBQUlJLFFBQUksRUFBQyxRQUpUO0FBS0ksWUFBUSxFQUFFQSxZQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQVdBO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTSx3QkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhBLENBYkosQ0FUSixFQXFDUTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ1IsRUFzQ1E7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Q1IsQ0FGSixDQURBO0FBb0RILENBOUR1QixrQ0FBeEI7QUFvRWVsQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHMuanMuOThiNTcyY2VmZDAyYzBmNjJmNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHBvc3RzID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3ROYW1lfX0sIGJvb2tzfSApID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTogJycgfSk7XHJcbiAgICAgICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoKTtcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHt9XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge31cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uLXBhZ2UnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxoMj5IaSwge2ZpcnN0TmFtZX0hPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5GaW5kIHlvdXIgYm9vayBieSBlbnRlcmluZyBcclxuICAgICAgICAgICAgICAgICAgICB0aGUgPGI+QXV0aG9yPC9iPiBvciA8Yj5Cb29rIG5hbWU8L2I+IGJlbG93LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J215LWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG15LWZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5PUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BdXRob3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2F1dGhvcidcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCc+VmlldyBhbGw8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICAgIFxyXG59KTtcclxuICBcclxuXHJcblxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9