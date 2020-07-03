webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\posts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(_s(function (_ref) {
  _s();

  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstName = _ref$router$query.firstName,
      books = _ref.books;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var router = next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"];

  var handleSubmit = function handleSubmit() {};

  var handleChange = function handleChange() {
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    "class": "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMuanMiXSwibmFtZXMiOlsicG9zdHMiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdE5hbWUiLCJib29rcyIsInVzZVN0YXRlIiwidGl0bGUiLCJmb3JtIiwic2V0Rm9ybSIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImVycm9ycyIsInNldEVycm9ycyIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxJQUFDLGdCQUF3RDtBQUFBOztBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFELENBRnlDO0FBQUEsTUFFbEVDLElBRmtFO0FBQUEsTUFFNURDLE9BRjREOztBQUFBLG1CQUdqQ0gsc0RBQVEsQ0FBQyxLQUFELENBSHlCO0FBQUEsTUFHbEVJLFlBSGtFO0FBQUEsTUFHcERDLGVBSG9EOztBQUFBLG1CQUk3Q0wsc0RBQVEsRUFKcUM7QUFBQSxNQUlsRU0sTUFKa0U7QUFBQSxNQUkxREMsU0FKMEQ7O0FBS3pFLE1BQU1iLE1BQU0sR0FBR2MscURBQWY7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUFHLENBQTlCOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJQLFdBQU8saUNBQ0FELElBREEscUdBRUVTLENBQUMsQ0FBQ0MsTUFBRixDQUFTaEIsSUFGWCxFQUVrQmUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRjNCLEdBQVA7QUFLSCxHQU5EOztBQVFKLFNBQ0E7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTZixTQUFULE1BREosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixVQUN5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR6QixZQUhKLENBREosRUFTSTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUEwQixZQUFRLEVBQUVXLFlBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBRUE7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLGFBQVMsRUFBQyw4QkFGZDtBQUdJLE1BQUUsRUFBQyxvQkFIUDtBQUlJLGVBQVcsRUFBQyxrQkFKaEI7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLFlBQVEsRUFBRUMsWUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FESixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaSixFQWFJO0FBQUssYUFBTSxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBRUE7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLGFBQVMsRUFBQyxjQUZkO0FBR0ksZUFBVyxFQUFDLGNBSGhCO0FBSUksUUFBSSxFQUFDLFFBSlQ7QUFLSSxZQUFRLEVBQUVBLFlBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBV0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsd0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQSxDQWJKLENBVEosRUFxQ1E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNSLEVBc0NRO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdENSLENBRkosQ0FEQTtBQW9ESCxDQXBFdUIsa0NBQXhCO0FBMEVlbEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzLmpzLjBlMzNkZDUwNDJkODY1NjU5MDZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0TmFtZX19LCBib29rc30gKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnIH0pO1xyXG4gICAgICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7IH1cclxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdvcHRpb24tcGFnZSc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPkhpLCB7Zmlyc3ROYW1lfSE8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZTwvYj4gYmVsb3cuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXktZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJvb2sgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk9SPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkF1dGhvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCc+VmlldyBhbGw8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICAgIFxyXG59KTtcclxuICBcclxuXHJcblxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9