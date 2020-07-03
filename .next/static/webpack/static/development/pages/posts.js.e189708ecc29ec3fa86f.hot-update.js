webpackHotUpdate("static\\development\\pages\\posts.js",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        //bookmatch();
        alert('Sucees, gotta match books');
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var validate = function validate() {
    var err = {};
    return err;
  };

  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    "class": "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/booklist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "View all"))));
}, "3NFa2FhNS3bhjVtEqZdZ9zRb9Kw="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJycyIsInZhbGlkYXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsOERBQVUsSUFBQyxnQkFBd0Q7QUFBQTs7QUFBQSwrQkFBckRDLE1BQXFELENBQTFDQyxLQUEwQztBQUFBLE1BQW5DQyxJQUFtQyxxQkFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLEVBQTZCLHFCQUE3QkEsRUFBNkI7QUFBQSxNQUF6QkMsU0FBeUIscUJBQXpCQSxTQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFFakRDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBRCxDQUZ5QztBQUFBLE1BRWxFQyxJQUZrRTtBQUFBLE1BRTVEQyxPQUY0RDs7QUFBQSxtQkFHakNILHNEQUFRLENBQUMsS0FBRCxDQUh5QjtBQUFBLE1BR2xFSSxZQUhrRTtBQUFBLE1BR3BEQyxlQUhvRDs7QUFBQSxtQkFJN0NMLHNEQUFRLEVBSnFDO0FBQUEsTUFJbEVNLE1BSmtFO0FBQUEsTUFJMURDLFNBSjBEOztBQUt6RSxNQUFNYixNQUFNLEdBQUdjLHFEQUFm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cUNRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDUixFQXNDUSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0F0Q1IsQ0FGSixDQURBO0FBcURILENBNUZ1QixrQ0FBeEI7QUFrR2UzQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHMuanMuZTE4OTcwOGVjYzI5ZWMzZmE4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgcG9zdHMgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdE5hbWV9fSwgYm9va3N9ICkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJyB9KTtcclxuICAgICAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcjtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTdWJtaXR0aW5nKXtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2Jvb2ttYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdWNlZXMsIGdvdHRhIG1hdGNoIGJvb2tzJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtlcnJvcnNdKVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4geyBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIHNldEVycm9ycyhlcnJzKTtcclxuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4geyBcclxuICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlcnIgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uLXBhZ2UnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxoMj5IaSwge2ZpcnN0TmFtZX0hPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5GaW5kIHlvdXIgYm9vayBieSBlbnRlcmluZyBcclxuICAgICAgICAgICAgICAgICAgICB0aGUgPGI+QXV0aG9yPC9iPiBvciA8Yj5Cb29rIG5hbWU8L2I+IGJlbG93LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J215LWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG15LWZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGI+T1I8L2I+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkF1dGhvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Jvb2tsaXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIG15LWJ0bi12aWV3YWxsJz5WaWV3IGFsbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gICAgXHJcbn0pO1xyXG4gIFxyXG5cclxuXHJcblxyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=