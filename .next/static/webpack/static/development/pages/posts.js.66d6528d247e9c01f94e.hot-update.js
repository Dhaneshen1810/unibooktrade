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
var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(function (_ref) {
  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstName = _ref$router$query.firstName,
      books = _ref.books;
  return (//Declare 3 new state variables, Title and Author
    __jsx("div", {
      className: "option-page",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "book-greeting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "greeting-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
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
    }, "View all")))
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDhEQUFVLENBQUM7QUFBQSwrQkFBR0MsTUFBSCxDQUFjQyxLQUFkO0FBQUEsTUFBcUJDLElBQXJCLHFCQUFxQkEsSUFBckI7QUFBQSxNQUEyQkMsRUFBM0IscUJBQTJCQSxFQUEzQjtBQUFBLE1BQStCQyxTQUEvQixxQkFBK0JBLFNBQS9CO0FBQUEsTUFBNENDLEtBQTVDLFFBQTRDQSxLQUE1QztBQUFBLFNBRXJCO0FBSUE7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFTRCxTQUFULE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFIsVUFDeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEekIsWUFGSixDQURKLEVBUUk7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLEVBRUE7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFTLEVBQUMsOEJBQTdCO0FBQTRELFFBQUUsRUFBQyxvQkFBL0Q7QUFBb0YsMEJBQWlCLFdBQXJHO0FBQWlILGlCQUFXLEVBQUMsa0JBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGQSxDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUk7QUFBSyxlQUFNLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUE7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFTLEVBQUMsY0FBN0I7QUFBNEMsUUFBRSxFQUFDLHVCQUEvQztBQUF1RSxpQkFBVyxFQUFDLGNBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGQSxFQUtBO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTSx3QkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMQSxDQU5KLENBUkosRUF1QlE7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkJSLEVBd0JRO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJSLENBRko7QUFOcUI7QUFBQSxDQUFELENBQXhCO0FBNENlTixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHMuanMuNjZkNjUyOGQyNDdlOWMwMWY5NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHBvc3RzID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3ROYW1lfX0sIGJvb2tzfSApID0+IChcclxuXHJcbiAgICAvL0RlY2xhcmUgMyBuZXcgc3RhdGUgdmFyaWFibGVzLCBUaXRsZSBhbmQgQXV0aG9yXHJcblxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uLXBhZ2UnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxoMj5IaSwge2ZpcnN0TmFtZX0hPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZTwvYj4gYmVsb3cuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXktZm9ybSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS1mb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGJvb2sgdGl0bGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T1I8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QXV0aG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBBdXRob3JcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCc+VmlldyBhbGw8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4pKTtcclxuICBcclxuXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==