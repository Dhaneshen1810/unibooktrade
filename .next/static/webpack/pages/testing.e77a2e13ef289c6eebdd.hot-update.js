webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar contact = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      bookID = _ref$router$query.bookID,\n      bookOwnerName = _ref$router$query.bookOwnerName,\n      ownerFirstName = _ref$router$query.ownerFirstName,\n      bookOwnerID = _ref$router$query.bookOwnerID,\n      bookTitle = _ref$router$query.bookTitle,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      defaultText = _useState[0],\n      setDefaultText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      booklist = _useState2[0],\n      setBooklist = _useState2[1]; // Assign constant names to values obtained from 'booklist' via withRouter\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userName = name;\n    var userID = id;\n    var userFirstname = firstname;\n    setBooklist(books);\n  });\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  };\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"contact-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '4%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      fontSize: '18px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    style: {\n      fontSize: '16px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 22\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\"))))), booklist.map(function (book) {\n    //var imageBase64 = book.imageFront.contentType;\n    var imageData;\n    var base64data;\n\n    if (book.imageFront) {\n      imageData = book.imageFront.data;\n    } else {\n      console.log('no image');\n      imageData = '';\n    }\n\n    return __jsx(\"div\", {\n      key: book._id,\n      className: \"book-item-profile\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      className: \"section1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      className: \"section1-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 37\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '100px',\n        height: '100px',\n        borderRadius: '20px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 41\n      }\n    })), __jsx(\"div\", {\n      className: \"section1-info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 37\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 41\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 44\n      }\n    }, book.title)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 41\n      }\n    }, book.author), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 41\n      }\n    }, \"$50\"))), __jsx(\"div\", {\n      className: \"section2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 33\n      }\n    }));\n  }), __jsx(\"div\", {\n    className: \"bookInfo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 13\n    }\n  }, \"Name: \", name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }, \"Book id: \", bookID), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }, \"Owner name: \", bookOwnerName), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, \"Owner ID: \", bookOwnerID)), __jsx(\"form\", {\n    style: {\n      width: '90%',\n      marginTop: '7%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    value: 'Hi there ' + ownerFirstName + ', I am interested in your book, ' + bookTitle + '!',\n    className: \"contact-textBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    style: {\n      marginTop: '4%'\n    },\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 13\n    }\n  }, \"Send message\")));\n}, \"3TohRmVR5gTzjjByL3cdCxjR3EA=\"));\n\ncontact.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch('http://localhost:3000/api/books', {\n              headers: {\n                title: '',\n                author: '',\n                id: ctx.query.ownerID\n              }\n            });\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            _yield$res$json = _context.sent;\n            data = _yield$res$json.data;\n            return _context.abrupt(\"return\", {\n              books: data\n            });\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", {\n              books: []\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbImNvbnRhY3QiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwib3duZXJGaXJzdE5hbWUiLCJib29rT3duZXJJRCIsImJvb2tUaXRsZSIsImJvb2tzIiwidXNlU3RhdGUiLCJkZWZhdWx0VGV4dCIsInNldERlZmF1bHRUZXh0IiwiYm9va2xpc3QiLCJzZXRCb29rbGlzdCIsInVzZUVmZmVjdCIsInVzZXJOYW1lIiwidXNlcklEIiwidXNlckZpcnN0bmFtZSIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJteUJvb2tzIiwiU2VhcmNoIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFwIiwiYm9vayIsImltYWdlRGF0YSIsImJhc2U2NGRhdGEiLCJpbWFnZUZyb250IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJoZWFkZXJzIiwib3duZXJJRCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLElBQUMsZ0JBQXNIO0FBQUE7O0FBQUEsK0JBQW5IQyxNQUFtSCxDQUF4R0MsS0FBd0c7QUFBQSxNQUFqR0MsSUFBaUcscUJBQWpHQSxJQUFpRztBQUFBLE1BQTNGQyxFQUEyRixxQkFBM0ZBLEVBQTJGO0FBQUEsTUFBdkZDLFNBQXVGLHFCQUF2RkEsU0FBdUY7QUFBQSxNQUE1RUMsTUFBNEUscUJBQTVFQSxNQUE0RTtBQUFBLE1BQXBFQyxh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QUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUJlWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rlc3RpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5jb25zdCBjb250YWN0ID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBib29rSUQsIGJvb2tPd25lck5hbWUsIG93bmVyRmlyc3ROYW1lLGJvb2tPd25lcklELCBib29rVGl0bGV9fSwgYm9va3N9ICkgPT4ge1xuICAgIGNvbnN0IFtkZWZhdWx0VGV4dCwgc2V0RGVmYXVsdFRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtib29rbGlzdCwgc2V0Qm9va2xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgLy8gQXNzaWduIGNvbnN0YW50IG5hbWVzIHRvIHZhbHVlcyBvYnRhaW5lZCBmcm9tICdib29rbGlzdCcgdmlhIHdpdGhSb3V0ZXJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IG5hbWU7XG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGlkO1xuICAgICAgICBjb25zdCB1c2VyRmlyc3RuYW1lID0gZmlyc3RuYW1lO1xuXG4gICAgICAgIHNldEJvb2tsaXN0KGJvb2tzKVxuXG4gICAgfSlcblxuXG4gICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9uZXcnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtcGFnZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JlZXRpbmctdGV4dCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOic0JScsIHBhZGRpbmc6JzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTonMThweCcgfX0+VGhpcyBpcyBhIGNvbGxlY3Rpb24gb2YgYWxsIHRoZSBib29rcyBtYXRjaGluZyB5b3VyIHNlYXJjaCBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnIvPjxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTZweCcgfX0+T25jZSB5b3UgZmluZCB0aGUgb25lIHlvdSB3YW50LCBnZXQgaW4gY29udGFjdCB3aXRoIHRoZSBvd25lci48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICBcblxuICAgICAgICB7Ym9va2xpc3QubWFwKCBib29rID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3ZhciBpbWFnZUJhc2U2NCA9IGJvb2suaW1hZ2VGcm9udC5jb250ZW50VHlwZTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VEYXRhO1xuICAgICAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChib29rLmltYWdlRnJvbnQpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gYm9vay5pbWFnZUZyb250LmRhdGE7XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBpbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGE9Jyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtLXByb2ZpbGUnPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xLWltYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VEYXRhfSAgc3R5bGU9e3sgd2lkdGg6JzEwMHB4JywgaGVpZ2h0OicxMDBweCcsIGJvcmRlclJhZGl1czonMjBweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMS1pbmZvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj57Ym9vay50aXRsZX08L2I+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JDUwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tJbmZvJz5cbiAgICAgICAgICAgIDxwPk5hbWU6IHtuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkJvb2sgaWQ6IHtib29rSUR9PC9wPlxuICAgICAgICAgICAgPHA+T3duZXIgbmFtZToge2Jvb2tPd25lck5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+T3duZXIgSUQ6IHtib29rT3duZXJJRH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBzdHlsZT17eyB3aWR0aDonOTAlJywgbWFyZ2luVG9wOic3JScgfX0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBpZD1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9IHsnSGkgdGhlcmUgJytvd25lckZpcnN0TmFtZSsnLCBJIGFtIGludGVyZXN0ZWQgaW4geW91ciBib29rLCAnK2Jvb2tUaXRsZSsnISd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0LXRleHRCb3gnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luVG9wOiAnNCUnIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSk7XG5cblxuY29udGFjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PntcblxuICAgIHRyeSB7XG5cbiAgICAgICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGN0eC5xdWVyeS5vd25lcklEXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgcmV0dXJueyBib29rczpkYXRhIH1cbiAgICAgICAgICAgXG4gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBcbiAgICAgICAgcmV0dXJuIHsgYm9va3M6IFtdIH1cbiAgICAgICAgICAgXG4gICAgICAgfVxuICAgICBcbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})