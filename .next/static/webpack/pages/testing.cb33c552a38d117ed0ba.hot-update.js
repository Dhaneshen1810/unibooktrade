webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar contact = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      bookID = _ref$router$query.bookID,\n      bookOwnerName = _ref$router$query.bookOwnerName,\n      ownerFirstName = _ref$router$query.ownerFirstName,\n      bookOwnerID = _ref$router$query.bookOwnerID,\n      bookTitle = _ref$router$query.bookTitle,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      defaultText = _useState[0],\n      setDefaultText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      booklist = _useState2[0],\n      setBooklist = _useState2[1]; // Assign constant names to values obtained from 'booklist' via withRouter\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userName = name;\n    var userID = id;\n    var userFirstname = firstname;\n    setBooklist(books);\n    console.log('booklist is');\n    console.log(booklist);\n  }); // Redirect to myprofile\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  }; // Redirect to new for creating new post\n\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  }; // Redirect posts\n\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  }; // Display on screen\n\n\n  return __jsx(\"div\", {\n    className: \"contact-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '4%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      fontSize: '18px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    style: {\n      fontSize: '16px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 22\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\"))))), __jsx(\"div\", {\n    className: \"book-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 1\n    }\n  }, booklist.map(function (book) {\n    //var imageBase64 = book.imageFront.contentType;\n    var imageData;\n    var base64data;\n\n    if (book.imageFront) {\n      imageData = book.imageFront.data;\n    } else {\n      console.log('no image');\n      imageData = '';\n    }\n\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 32\n      }\n    }, __jsx(\"div\", {\n      key: book._id,\n      className: \"bookInfo\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 29\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '200px',\n        height: '200px',\n        borderRadius: '20px',\n        alignSelf: 'center'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 33\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 33\n      }\n    }, \"Title: \", book.title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 33\n      }\n    }, \"Author: \", book.author), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 33\n      }\n    }, \"Owned by \", bookOwnerName)));\n  })), __jsx(\"form\", {\n    style: {\n      width: '90%',\n      marginTop: '7%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    value: 'Hi there ' + ownerFirstName + ', I am interested in your book, ' + bookTitle + '!',\n    className: \"contact-textBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    style: {\n      marginTop: '4%'\n    },\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }\n  }, \"Send message\")));\n}, \"3TohRmVR5gTzjjByL3cdCxjR3EA=\")); // Get content from database \n\ncontact.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('ctx is');\n            console.log(ctx.query.bookOwnerID);\n            console.log(ctx.query.bookID);\n            _context.prev = 3;\n            _context.next = 6;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {\n              headers: {\n                title: '',\n                author: '',\n                id: ctx.query.bookOwnerID,\n                bookID: ctx.query.bookID\n              }\n            });\n\n          case 6:\n            res = _context.sent;\n            _context.next = 9;\n            return res.json();\n\n          case 9:\n            _yield$res$json = _context.sent;\n            data = _yield$res$json.data;\n            return _context.abrupt(\"return\", {\n              books: data\n            });\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](3);\n            return _context.abrupt(\"return\", {\n              books: []\n            });\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 14]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbImNvbnRhY3QiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwib3duZXJGaXJzdE5hbWUiLCJib29rT3duZXJJRCIsImJvb2tUaXRsZSIsImJvb2tzIiwidXNlU3RhdGUiLCJkZWZhdWx0VGV4dCIsInNldERlZmF1bHRUZXh0IiwiYm9va2xpc3QiLCJzZXRCb29rbGlzdCIsInVzZUVmZmVjdCIsInVzZXJOYW1lIiwidXNlcklEIiwidXNlckZpcnN0bmFtZSIsImNvbnNvbGUiLCJsb2ciLCJteVByb2ZpbGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJteXRpdGxlIiwiYXV0aG9yIiwibXlCb29rcyIsIlNlYXJjaCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcCIsImJvb2siLCJpbWFnZURhdGEiLCJiYXNlNjRkYXRhIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJfaWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduU2VsZiIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLElBQUMsZ0JBQXNIO0FBQUE7O0FBQUEsK0JBQW5IQyxNQUFtSCxDQUF4R0MsS0FBd0c7QUFBQSxNQUFqR0MsSUFBaUcscUJBQWpHQSxJQUFpRztBQUFBLE1BQTNGQyxFQUEyRixxQkFBM0ZBLEVBQTJGO0FBQUEsTUFBdkZDLFNBQXVGLHFCQUF2RkEsU0FBdUY7QUFBQSxNQUE1RUMsTUFBNEUscUJBQTVFQSxNQUE0RTtBQUFB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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5cbmNvbnN0IGNvbnRhY3QgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWUsIGJvb2tJRCwgYm9va093bmVyTmFtZSwgb3duZXJGaXJzdE5hbWUsYm9va093bmVySUQsIGJvb2tUaXRsZX19LCBib29rc30gKSA9PiB7XG4gICAgY29uc3QgW2RlZmF1bHRUZXh0LCBzZXREZWZhdWx0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Jvb2tsaXN0LCBzZXRCb29rbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBBc3NpZ24gY29uc3RhbnQgbmFtZXMgdG8gdmFsdWVzIG9idGFpbmVkIGZyb20gJ2Jvb2tsaXN0JyB2aWEgd2l0aFJvdXRlclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gbmFtZTtcbiAgICAgICAgY29uc3QgdXNlcklEID0gaWQ7XG4gICAgICAgIGNvbnN0IHVzZXJGaXJzdG5hbWUgPSBmaXJzdG5hbWU7XG5cbiAgICAgICAgc2V0Qm9va2xpc3QoYm9va3MpXG4gICAgICAgIGNvbnNvbGUubG9nKCdib29rbGlzdCBpcycpXG4gICAgICAgIGNvbnNvbGUubG9nKGJvb2tsaXN0KVxuXG4gICAgfSlcblxuICAgIC8vIFJlZGlyZWN0IHRvIG15cHJvZmlsZVxuICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgdG8gbmV3IGZvciBjcmVhdGluZyBuZXcgcG9zdFxuICAgIGNvbnN0IG15Qm9va3MgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgcG9zdHNcbiAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIERpc3BsYXkgb24gc2NyZWVuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdC1wYWdlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6JzQlJywgcGFkZGluZzonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOicxOHB4JyB9fT5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5PbmNlIHlvdSBmaW5kIHRoZSBvbmUgeW91IHdhbnQsIGdldCBpbiBjb250YWN0IHdpdGggdGhlIG93bmVyLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XG4gICAgICAgIHtib29rbGlzdC5tYXAoIGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdmFyIGltYWdlQmFzZTY0ID0gYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZURhdGE7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGE7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YT0nJztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLl9pZH0gY2xhc3NOYW1lPSdib29rSW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZURhdGF9ICBzdHlsZT17eyB3aWR0aDonMjAwcHgnLCBoZWlnaHQ6JzIwMHB4JywgYm9yZGVyUmFkaXVzOicyMHB4JywgYWxpZ25TZWxmOidjZW50ZXInfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaXRsZToge2Jvb2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdXRob3I6IHtib29rLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk93bmVkIGJ5IHtib29rT3duZXJOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7IHdpZHRoOic5MCUnLCBtYXJnaW5Ub3A6JzclJyB9fT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGlkPVwibG5hbWVcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwibG5hbWVcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT0geydIaSB0aGVyZSAnK293bmVyRmlyc3ROYW1lKycsIEkgYW0gaW50ZXJlc3RlZCBpbiB5b3VyIGJvb2ssICcrYm9va1RpdGxlKychJ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRhY3QtdGV4dEJveCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0JScgfX0gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59KTtcblxuXG4vLyBHZXQgY29udGVudCBmcm9tIGRhdGFiYXNlIFxuY29udGFjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PntcbiAgICBjb25zb2xlLmxvZygnY3R4IGlzJyk7XG4gICAgY29uc29sZS5sb2coY3R4LnF1ZXJ5LmJvb2tPd25lcklEKVxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5ib29rSUQpXG5cbiAgICB0cnkge1xuXG4gICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjdHgucXVlcnkuYm9va093bmVySUQsXG4gICAgICAgICAgICAgICAgICAgIGJvb2tJRDogY3R4LnF1ZXJ5LmJvb2tJRFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgIHJldHVybnsgYm9va3M6ZGF0YSB9XG4gICAgICAgICAgIFxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgXG4gICAgICAgIHJldHVybiB7IGJvb2tzOiBbXSB9XG4gICAgICAgICAgIFxuICAgICAgIH1cbiAgICAgXG4gfVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})