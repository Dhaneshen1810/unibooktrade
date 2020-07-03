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
  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Title"), __jsx("input", {
    type: "text",
    className: "form-control my-form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter book title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    "class": "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Author"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Enter Author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    "class": "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxJQUFDLGdCQUF3RDtBQUFBOztBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFELENBRnlDO0FBQUEsTUFFbEVDLElBRmtFO0FBQUEsTUFFNURDLE9BRjREOztBQUFBLG1CQUdqQ0gsc0RBQVEsQ0FBQyxLQUFELENBSHlCO0FBQUEsTUFHbEVJLFlBSGtFO0FBQUEsTUFHcERDLGVBSG9EOztBQUFBLG1CQUk3Q0wsc0RBQVEsRUFKcUM7QUFBQSxNQUlsRU0sTUFKa0U7QUFBQSxNQUkxREMsU0FKMEQ7O0FBS3pFLE1BQU1iLE1BQU0sR0FBR2MscURBQWY7QUFFSixTQUNBO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBU1YsU0FBVCxNQURKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFIsVUFDeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEekIsWUFISixDQURKLEVBU0k7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyw4QkFBN0I7QUFBNEQsTUFBRSxFQUFDLG9CQUEvRDtBQUFvRix3QkFBaUIsV0FBckc7QUFBaUgsZUFBVyxFQUFDLGtCQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMSixFQU1JO0FBQUssYUFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBRUE7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBNEMsTUFBRSxFQUFDLHVCQUEvQztBQUF1RSxlQUFXLEVBQUMsY0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBS0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFNLHdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsQ0FOSixDQVRKLEVBd0JRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCUixFQXlCUTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCUixDQUZKLENBREE7QUF1Q0gsQ0E5Q3VCLGtDQUF4QjtBQW9EZU4sb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzLmpzLjRiYjYwYzY3YmEyMGQ3MmNkNjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0TmFtZX19LCBib29rc30gKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnIH0pO1xyXG4gICAgICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xyXG5cclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb24tcGFnZSc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPkhpLCB7Zmlyc3ROYW1lfSE8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZTwvYj4gYmVsb3cuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXktZm9ybSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk9SPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkF1dGhvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXV0aG9yXCIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS1idG5cIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1kaXZpZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgbXktYnRuLXZpZXdhbGwnPlZpZXcgYWxsPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgICBcclxufSk7XHJcbiAgXHJcblxyXG5cclxuXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==