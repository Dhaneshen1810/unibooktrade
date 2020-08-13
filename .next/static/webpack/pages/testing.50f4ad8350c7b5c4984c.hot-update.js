webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar posts = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    title: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isSubmitting = _useState2[0],\n      setIsSubmitting = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      errors = _useState3[0],\n      setErrors = _useState3[1];\n\n  var router = next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]; // Initializing the cors middleware\n\n  var cors = cors__WEBPACK_IMPORTED_MODULE_5___default()({\n    methods: ['GET', 'HEAD']\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // We are directed to the booklist page\n    // Forwarding the following data to booklist\n    // Fullname, firstname, id, book author and book title\n    if (isSubmitting) {\n      if (Object.keys(errors).length === 0) {\n        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n          pathname: '/booklist',\n          query: {\n            mytitle: form.title,\n            author: form.author,\n            name: name,\n            id: id,\n            firstname: firstname\n          }\n        });\n      } else {\n        setIsSubmitting(false);\n      }\n    }\n  }, [errors]); // When th user submits\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var errs = validate();\n    setErrors(errs);\n    setIsSubmitting(true);\n  }; // Handle changes made to the input box\n  // That is, when the user types in the box\n\n\n  var handleChange = function handleChange(e) {\n    setForm(_objectSpread(_objectSpread({}, form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var validate = function validate() {\n    var err = {};\n    return err;\n  }; // User chooses to view all available books\n\n\n  var viewAll = function viewAll() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/booklist',\n      query: {\n        name: name,\n        id: id,\n        firstname: firstname,\n        mytitle: '',\n        author: ''\n      }\n    });\n  };\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  };\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"option-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 21\n    }\n  }))), __jsx(\"h2\", {\n    style: {\n      marginTop: '5%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 17\n    }\n  }, \"Hi, \", firstname, \"!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 17\n    }\n  }, \"Find your book by entering the \", __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 25\n    }\n  }, \"Author\"), \" or/and \", __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 46\n    }\n  }, \"Book name\"), \" below.\")), __jsx(\"form\", {\n    className: \"my-form\",\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group my-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 17\n    }\n  }, \"Title\"), __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control my-form-control\",\n    id: \"exampleInputEmail1\",\n    placeholder: \"Enter book title\",\n    name: \"title\",\n    onChange: handleChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: \"form-group my-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 17\n    }\n  }, \"Author\"), __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Enter Author\",\n    name: \"author\",\n    onChange: handleChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 17\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary my-btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 17\n    }\n  }, \"Search\"))), __jsx(\"div\", {\n    className: \"my-divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 17\n    }\n  }), __jsx(\"div\", {\n    className: \"btn btn-success my-btn-viewall\",\n    onClick: viewAll,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 21\n    }\n  }, \"View all\")));\n}, \"3NFa2FhNS3bhjVtEqZdZ9zRb9Kw=\"));\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbInBvc3RzIiwid2l0aFJvdXRlciIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsImlkIiwiZmlyc3RuYW1lIiwiYm9va3MiLCJ1c2VTdGF0ZSIsInRpdGxlIiwiZm9ybSIsInNldEZvcm0iLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VSb3V0ZXIiLCJjb3JzIiwiQ29ycyIsIm1ldGhvZHMiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibXl0aXRsZSIsImF1dGhvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycnMiLCJ2YWxpZGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZXJyIiwidmlld0FsbCIsIm15UHJvZmlsZSIsIm15Qm9va3MiLCJTZWFyY2giLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUEsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxJQUFDLGdCQUF3RDtBQUFBOztBQUFBLCtCQUFyREMsTUFBcUQsQ0FBMUNDLEtBQTBDO0FBQUEsTUFBbkNDLElBQW1DLHFCQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkMsRUFBNkIscUJBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxTQUF5QixxQkFBekJBLFNBQXlCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUVqREMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUFELENBRnlDO0FBQUEsTUFFbEVDLElBRmtFO0FBQUEsTUFFNURDLE9BRjREOztBQUFBLG1CQUdqQ0gsc0RBQVEsQ0FBQyxLQUFELENBSHlC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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLEVBRUE7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLGFBQVMsRUFBQyxjQUZkO0FBR0ksZUFBVyxFQUFDLGNBSGhCO0FBSUksUUFBSSxFQUFDLFFBSlQ7QUFLSSxZQUFRLEVBQUVBLFlBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLEVBV0E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsd0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQSxDQWJKLENBekJKLEVBcURRO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJEUixFQXNEWTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFnRCxXQUFPLEVBQUVJLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdERaLENBRkosQ0FEQTtBQW1FSCxDQS9MdUIsa0NBQXhCO0FBcU1ldEMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy90ZXN0aW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuXG5cblxuY29uc3QgcG9zdHMgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWV9fSwgYm9va3N9ICkgPT4ge1xuXG4gICAgICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6ICcnIH0pO1xuICAgICAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgICAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoKTtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemluZyB0aGUgY29ycyBtaWRkbGV3YXJlXG4gICAgICAgIGNvbnN0IGNvcnMgPSBDb3JzKHtcbiAgICAgICAgbWV0aG9kczogWydHRVQnLCAnSEVBRCddLFxuICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFdlIGFyZSBkaXJlY3RlZCB0byB0aGUgYm9va2xpc3QgcGFnZVxuICAgICAgICAgICAgLy8gRm9yd2FyZGluZyB0aGUgZm9sbG93aW5nIGRhdGEgdG8gYm9va2xpc3RcbiAgICAgICAgICAgIC8vIEZ1bGxuYW1lLCBmaXJzdG5hbWUsIGlkLCBib29rIGF1dGhvciBhbmQgYm9vayB0aXRsZVxuICAgICAgICAgICAgaWYgKGlzU3VibWl0dGluZyl7XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09MCl7XG5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6IGZvcm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZm9ybS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbZXJyb3JzXSlcblxuXG4gICAgICAgIC8vIFdoZW4gdGggdXNlciBzdWJtaXRzXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7IFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGVycnMgPSB2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIGlucHV0IGJveFxuICAgICAgICAvLyBUaGF0IGlzLCB3aGVuIHRoZSB1c2VyIHR5cGVzIGluIHRoZSBib3hcbiAgICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHsgXG4gICAgICAgICAgICBzZXRGb3JtKHtcbiAgICAgICAgICAgICAgICAuLi5mb3JtLFxuICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXJyID0ge307XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXNlciBjaG9vc2VzIHRvIHZpZXcgYWxsIGF2YWlsYWJsZSBib29rc1xuICAgICAgICBjb25zdCB2aWV3QWxsID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uLXBhZ2UnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOic1JScgfX0+SGksIHtmaXJzdG5hbWV9ITwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5GaW5kIHlvdXIgYm9vayBieSBlbnRlcmluZyBcbiAgICAgICAgICAgICAgICAgICAgdGhlIDxiPkF1dGhvcjwvYj4gb3IvYW5kIDxiPkJvb2sgbmFtZTwvYj4gYmVsb3cuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J215LWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYm9vayB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+QXV0aG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2F1dGhvcidcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1kaXZpZGVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBteS1idG4tdmlld2FsbCcgb25DbGljaz17dmlld0FsbH0+VmlldyBhbGw8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIFxuICAgIDwvZGl2PlxuXG4gICAgKVxuICAgIFxufSk7XG4gIFxuXG5cblxuICAgIFxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})