webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar contact = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      bookID = _ref$router$query.bookID,\n      bookOwnerName = _ref$router$query.bookOwnerName,\n      ownerFirstName = _ref$router$query.ownerFirstName,\n      bookOwnerID = _ref$router$query.bookOwnerID,\n      bookTitle = _ref$router$query.bookTitle,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      defaultText = _useState[0],\n      setDefaultText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      booklist = _useState2[0],\n      setBooklist = _useState2[1]; // Assign constant names to values obtained from 'booklist' via withRouter\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userName = name;\n    var userID = id;\n    var userFirstname = firstname;\n    setBooklist(books);\n    console.log('booklist is');\n    console.log(booklist);\n  });\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  };\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"contact-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '4%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      fontSize: '18px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    style: {\n      fontSize: '16px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 22\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\"))))), __jsx(\"div\", {\n    className: \"book-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 1\n    }\n  }, booklist.map(function (book) {\n    //var imageBase64 = book.imageFront.contentType;\n    var imageData;\n    var base64data;\n\n    if (book.imageFront) {\n      imageData = book.imageFront.data;\n    } else {\n      console.log('no image');\n      imageData = '';\n    }\n\n    return __jsx(\"div\", {\n      key: book._id,\n      className: \"book-item-profile\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      className: \"section1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"section1-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 37\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '100px',\n        height: '100px',\n        borderRadius: '20px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 41\n      }\n    })), __jsx(\"div\", {\n      className: \"section1-info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 37\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 41\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 44\n      }\n    }, book.title)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 41\n      }\n    }, book.author), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 41\n      }\n    }, \"$50\"))));\n  })), __jsx(\"div\", {\n    className: \"bookInfo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }, \"Name: \", name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, \"Book id: \", bookID), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }, \"Owner name: \", bookOwnerName), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 13\n    }\n  }, \"Owner ID: \", bookOwnerID)), __jsx(\"form\", {\n    style: {\n      width: '90%',\n      marginTop: '7%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    value: 'Hi there ' + ownerFirstName + ', I am interested in your book, ' + bookTitle + '!',\n    className: \"contact-textBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    style: {\n      marginTop: '4%'\n    },\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 13\n    }\n  }, \"Send message\")));\n}, \"3TohRmVR5gTzjjByL3cdCxjR3EA=\"));\n\ncontact.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('ctx is');\n            console.log(ctx[0]);\n            console.log(ctx);\n            console.log(ctx.query);\n            _context.prev = 4;\n            _context.next = 7;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://unibooktrade.vercel.app/api/books', {\n              //const res = await fetch('http://localhost:3000/api/books', {\n              headers: {\n                title: 'Alexsh',\n                author: '' //id: ctx.query.ownerID\n\n              }\n            });\n\n          case 7:\n            res = _context.sent;\n            _context.next = 10;\n            return res.json();\n\n          case 10:\n            _yield$res$json = _context.sent;\n            data = _yield$res$json.data;\n            return _context.abrupt(\"return\", {\n              books: data\n            });\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](4);\n            return _context.abrupt(\"return\", {\n              books: []\n            });\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 15]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbImNvbnRhY3QiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwib3duZXJGaXJzdE5hbWUiLCJib29rT3duZXJJRCIsImJvb2tUaXRsZSIsImJvb2tzIiwidXNlU3RhdGUiLCJkZWZhdWx0VGV4dCIsInNldERlZmF1bHRUZXh0IiwiYm9va2xpc3QiLCJzZXRCb29rbGlzdCIsInVzZUVmZmVjdCIsInVzZXJOYW1lIiwidXNlcklEIiwidXNlckZpcnN0bmFtZSIsImNvbnNvbGUiLCJsb2ciLCJteVByb2ZpbGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJteXRpdGxlIiwiYXV0aG9yIiwibXlCb29rcyIsIlNlYXJjaCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcCIsImJvb2siLCJpbWFnZURhdGEiLCJiYXNlNjRkYXRhIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJfaWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLElBQUMsZ0JBQXNIO0FBQUE7O0FBQUEsK0JBQW5IQyxNQUFtSCxDQUF4R0MsS0FBd0c7QUFBQSxNQUFqR0MsSUFBaUcscUJBQWpHQSxJQUFpRztBQUFBLE1BQTNGQyxFQUEyRixxQkFBM0ZBLEVBQTJGO0FBQUEsTUFBdkZDLFNBQXVGLHFCQUF2RkEsU0FBdUY7QUFBQSxNQUE1RUMsTUFBNEUscUJBQTVFQSxNQUE0RTtBQUFBLE1BQXBFQyxhQUFv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QUE7QUFRWnFCLGVBUlk7QUFBQTtBQUFBLG1CQWdCU0EsR0FBRyxDQUFDQyxJQUFKLEVBaEJUOztBQUFBO0FBQUE7QUFnQk5YLGdCQWhCTSxtQkFnQk5BLElBaEJNO0FBQUEsNkNBbUJUO0FBQUU1QixtQkFBSyxFQUFDNEI7QUFBUixhQW5CUzs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0F1Qlg7QUFBRTVCLG1CQUFLLEVBQUU7QUFBVCxhQXZCVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE2QmVaLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cblxuY29uc3QgY29udGFjdCA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0bmFtZSwgYm9va0lELCBib29rT3duZXJOYW1lLCBvd25lckZpcnN0TmFtZSxib29rT3duZXJJRCwgYm9va1RpdGxlfX0sIGJvb2tzfSApID0+IHtcbiAgICBjb25zdCBbZGVmYXVsdFRleHQsIHNldERlZmF1bHRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYm9va2xpc3QsIHNldEJvb2tsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIEFzc2lnbiBjb25zdGFudCBuYW1lcyB0byB2YWx1ZXMgb2J0YWluZWQgZnJvbSAnYm9va2xpc3QnIHZpYSB3aXRoUm91dGVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBuYW1lO1xuICAgICAgICBjb25zdCB1c2VySUQgPSBpZDtcbiAgICAgICAgY29uc3QgdXNlckZpcnN0bmFtZSA9IGZpcnN0bmFtZTtcblxuICAgICAgICBzZXRCb29rbGlzdChib29rcylcbiAgICAgICAgY29uc29sZS5sb2coJ2Jvb2tsaXN0IGlzJylcbiAgICAgICAgY29uc29sZS5sb2coYm9va2xpc3QpXG5cbiAgICB9KVxuXG5cbiAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG15Qm9va3MgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdC1wYWdlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6JzQlJywgcGFkZGluZzonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOicxOHB4JyB9fT5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5PbmNlIHlvdSBmaW5kIHRoZSBvbmUgeW91IHdhbnQsIGdldCBpbiBjb250YWN0IHdpdGggdGhlIG93bmVyLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XG4gICAgICAgIHtib29rbGlzdC5tYXAoIGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdmFyIGltYWdlQmFzZTY0ID0gYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZURhdGE7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGE7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YT0nJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLl9pZH0gY2xhc3NOYW1lPSdib29rLWl0ZW0tcHJvZmlsZSc+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjEtaW1hZ2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZURhdGF9ICBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzEwMHB4JywgYm9yZGVyUmFkaXVzOicyMHB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xLWluZm8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPntib29rLnRpdGxlfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Jvb2suYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kNTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rSW5mbyc+XG4gICAgICAgICAgICA8cD5OYW1lOiB7bmFtZX08L3A+XG4gICAgICAgICAgICA8cD5Cb29rIGlkOiB7Ym9va0lEfTwvcD5cbiAgICAgICAgICAgIDxwPk93bmVyIG5hbWU6IHtib29rT3duZXJOYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPk93bmVyIElEOiB7Ym9va093bmVySUR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gc3R5bGU9e3sgd2lkdGg6JzkwJScsIG1hcmdpblRvcDonNyUnIH19PlxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgaWQ9XCJsbmFtZVwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsbmFtZVwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPSB7J0hpIHRoZXJlICcrb3duZXJGaXJzdE5hbWUrJywgSSBhbSBpbnRlcmVzdGVkIGluIHlvdXIgYm9vaywgJytib29rVGl0bGUrJyEnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29udGFjdC10ZXh0Qm94J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblRvcDogJzQlJyB9fSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+U2VuZCBtZXNzYWdlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0pO1xuXG5cbmNvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XG4gICAgY29uc29sZS5sb2coJ2N0eCBpcycpO1xuICAgIGNvbnNvbGUubG9nKGN0eFswXSlcbiAgICBjb25zb2xlLmxvZyhjdHgpXG4gICAgY29uc29sZS5sb2coY3R4LnF1ZXJ5KVxuXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XG4gICAgICAgICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbGV4c2gnLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvL2lkOiBjdHgucXVlcnkub3duZXJJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgIHJldHVybnsgYm9va3M6ZGF0YSB9XG4gICAgICAgICAgIFxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgXG4gICAgICAgIHJldHVybiB7IGJvb2tzOiBbXSB9XG4gICAgICAgICAgIFxuICAgICAgIH1cbiAgICAgXG4gfVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})