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
    // We are directed to the booklist page
    // Forwarding the following data to booklist
    // Fullname, firstname, id, book author and book title
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: '/booklist',
          query: {
            mytitle: form.title,
            author: form.author,
            name: name,
            id: id,
            firstname: firstName
          }
        });
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]); // When th user submits

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  }; // Handle changes made to the input box
  // That is, when the user types in the box


  var handleChange = function handleChange(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var validate = function validate() {
    var err = {};
    return err;
  }; // User chooses to view all available books


  var viewAll = function viewAll() {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: '/booklist',
      query: {
        mytitle: '',
        author: ''
      }
    });
  };

  return __jsx("div", {
    className: "option-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/four-square.png",
    alt: "my books",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "./new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/plus.png",
    alt: "Add book",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  })))), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Hi, ", firstName, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 42
    }
  }, "Book name"), " below.")), __jsx("form", {
    className: "my-form",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 17
    }
  })), __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "OR"), __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 17
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Search"))), __jsx("div", {
    className: "my-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "btn btn-success my-btn-viewall",
    onClick: viewAll,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "View all")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy5qcyJdLCJuYW1lcyI6WyJwb3N0cyIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImJvb2tzIiwidXNlU3RhdGUiLCJ0aXRsZSIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJmaXJzdG5hbWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsInZpZXdBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxJQUFDLGdCQUF3RDtBQUFBOztBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFELENBRnlDO0FBQUEsTUFFbEVDLElBRmtFO0FBQUEsTUFFNURDLE9BRjREOztBQUFBLG1CQUdqQ0gsc0RBQVEsQ0FBQyxLQUFELENBSHlCO0FBQUEsTUFHbEVJLFlBSGtFO0FBQUEsTUFHcERDLGVBSG9EOztBQUFBLG1CQUk3Q0wsc0RBQVEsRUFKcUM7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RUFBQyxjQUZkO0FBR0ksZUFBVyxFQUFDLGNBSGhCO0FBSUksUUFBSSxFQUFDLFFBSlQ7QUFLSSxZQUFRLEVBQUVBLFlBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBV0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsd0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQSxDQWJKLENBNUJKLEVBd0RRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhEUixFQXlEWTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFnRCxXQUFPLEVBQUVJLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekRaLENBRkosQ0FEQTtBQXNFSCxDQXJKdUIsa0NBQXhCO0FBMkplcEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzLmpzLjc1ZDIzN2RhZjIyYjk1MWViNWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgcG9zdHMgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdE5hbWV9fSwgYm9va3N9ICkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IHRpdGxlOiAnJyB9KTtcclxuICAgICAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcjtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBhcmUgZGlyZWN0ZWQgdG8gdGhlIGJvb2tsaXN0IHBhZ2VcclxuICAgICAgICAgICAgLy8gRm9yd2FyZGluZyB0aGUgZm9sbG93aW5nIGRhdGEgdG8gYm9va2xpc3RcclxuICAgICAgICAgICAgLy8gRnVsbG5hbWUsIGZpcnN0bmFtZSwgaWQsIGJvb2sgYXV0aG9yIGFuZCBib29rIHRpdGxlXHJcbiAgICAgICAgICAgIGlmIChpc1N1Ym1pdHRpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0wKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9ib29rbGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6IGZvcm0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBmb3JtLmF1dGhvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2Vycm9yc10pXHJcblxyXG5cclxuICAgICAgICAvLyBXaGVuIHRoIHVzZXIgc3VibWl0c1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7IFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBlcnJzID0gdmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xyXG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIGlucHV0IGJveFxyXG4gICAgICAgIC8vIFRoYXQgaXMsIHdoZW4gdGhlIHVzZXIgdHlwZXMgaW4gdGhlIGJveFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7IFxyXG4gICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVyciA9IHt9O1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXNlciBjaG9vc2VzIHRvIHZpZXcgYWxsIGF2YWlsYWJsZSBib29rc1xyXG4gICAgICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2Jvb2tsaXN0JyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uLXBhZ2UnPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL25ldyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDI+SGksIHtmaXJzdE5hbWV9ITwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+RmluZCB5b3VyIGJvb2sgYnkgZW50ZXJpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlIDxiPkF1dGhvcjwvYj4gb3IgPGI+Qm9vayBuYW1lPC9iPiBiZWxvdy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdteS1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBteS1mb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYm9vayB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiPk9SPC9iPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+QXV0aG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdXRob3InXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXktYnRuXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktZGl2aWRlcic+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCcgb25DbGljaz17dmlld0FsbH0+VmlldyBhbGw8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICAgIFxyXG59KTtcclxuICBcclxuXHJcblxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9