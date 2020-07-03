webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(function (_ref) {
  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstName = _ref$router$query.firstName,
      books = _ref.books;
  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    "class": "form-group my-group",
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
  }, "Author"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Enter Author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    "class": "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "View all")));
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxDQUFDLGdCQUF3RDtBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRzdFLFNBQ0E7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTRCxTQUFULE1BREosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixVQUN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR6QixZQUhKLENBREosRUFTSTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFNLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFFQTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyw4QkFBN0I7QUFBNEQsTUFBRSxFQUFDLG9CQUEvRDtBQUFvRix3QkFBaUIsV0FBckc7QUFBaUgsZUFBVyxFQUFDLGtCQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMSixFQU1JO0FBQUssYUFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBRUE7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBNEMsTUFBRSxFQUFDLHVCQUEvQztBQUF1RSxlQUFXLEVBQUMsY0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBS0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFNLHdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsQ0FOSixDQVRKLEVBd0JRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCUixFQXlCUTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCUixDQUZKLENBREE7QUF1Q0gsQ0ExQ3VCLENBQXhCO0FBZ0RlTixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHMuanMuYjAyZmQ2YjE0NzY2NjMxOWViZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0TmFtZX19LCBib29rc30gKSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb24tcGFnZSc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPkhpLCB7Zmlyc3ROYW1lfSE8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZTwvYj4gYmVsb3cuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXktZm9ybSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS1mb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGJvb2sgdGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T1I8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QXV0aG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBdXRob3JcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCc+VmlldyBhbGw8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICAgIFxyXG59KTtcclxuICBcclxuXHJcblxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9