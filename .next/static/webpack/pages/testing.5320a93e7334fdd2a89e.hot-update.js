webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar contact = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      bookID = _ref$router$query.bookID,\n      bookOwnerName = _ref$router$query.bookOwnerName,\n      ownerFirstName = _ref$router$query.ownerFirstName,\n      bookOwnerID = _ref$router$query.bookOwnerID,\n      bookTitle = _ref$router$query.bookTitle,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      defaultText = _useState[0],\n      setDefaultText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      booklist = _useState2[0],\n      setBooklist = _useState2[1]; // Assign constant names to values obtained from 'booklist' via withRouter\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var userName = name;\n    var userID = id;\n    var userFirstname = firstname;\n    setBooklist(books);\n    console.log('booklist is');\n    console.log(booklist);\n  }); // Redirect to myprofile\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  }; // Redirect to new for creating new post\n\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  }; // Redirect posts\n\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  }; // Display on screen\n\n\n  return __jsx(\"div\", {\n    className: \"contact-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '4%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      fontSize: '18px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    style: {\n      fontSize: '16px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 22\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\"))))), __jsx(\"div\", {\n    className: \"book-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 1\n    }\n  }, booklist.map(function (book) {\n    //var imageBase64 = book.imageFront.contentType;\n    var imageData;\n\n    if (book.imageFront) {\n      imageData = book.imageFront.data;\n    } else {\n      console.log('no image');\n      imageData = '';\n    }\n\n    return __jsx(\"div\", {\n      key: book._id,\n      className: \"contact-bookinfo\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      className: \"contact-bookinfo-pic\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 33\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '40px',\n        height: '40px',\n        borderRadius: '20px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 41\n      }\n    })), __jsx(\"div\", {\n      className: \"contact-bookinfo-text\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 37\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 41\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 44\n      }\n    }, book.title)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 41\n      }\n    }, book.author), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 41\n      }\n    }, book._id), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 41\n      }\n    }, \"BookID: \", bookID), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 41\n      }\n    }, \"$50\")));\n  })), __jsx(\"div\", {\n    className: \"bookInfo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }, \"Name: \", name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }, \"Book id: \", bookID), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, \"Owner name: \", bookOwnerName), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }, \"Owner ID: \", bookOwnerID)), __jsx(\"form\", {\n    style: {\n      width: '90%',\n      marginTop: '7%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    value: 'Hi there ' + ownerFirstName + ', I am interested in your book, ' + bookTitle + '!',\n    className: \"contact-textBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    style: {\n      marginTop: '4%'\n    },\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }\n  }, \"Send message\")));\n}, \"3TohRmVR5gTzjjByL3cdCxjR3EA=\")); // Get content from database \n\ncontact.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('ctx is');\n            console.log(ctx.query.bookOwnerID);\n            console.log(ctx.query.bookID);\n            _context.prev = 3;\n            _context.next = 6;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {\n              headers: {\n                title: '',\n                author: '',\n                id: ctx.query.bookOwnerID,\n                bookID: ctx.query.bookID\n              }\n            });\n\n          case 6:\n            res = _context.sent;\n            _context.next = 9;\n            return res.json();\n\n          case 9:\n            _yield$res$json = _context.sent;\n            data = _yield$res$json.data;\n            return _context.abrupt(\"return\", {\n              books: data\n            });\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](3);\n            return _context.abrupt(\"return\", {\n              books: []\n            });\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 14]]);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbImNvbnRhY3QiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwib3duZXJGaXJzdE5hbWUiLCJib29rT3duZXJJRCIsImJvb2tUaXRsZSIsImJvb2tzIiwidXNlU3RhdGUiLCJkZWZhdWx0VGV4dCIsInNldERlZmF1bHRUZXh0IiwiYm9va2xpc3QiLCJzZXRCb29rbGlzdCIsInVzZUVmZmVjdCIsInVzZXJOYW1lIiwidXNlcklEIiwidXNlckZpcnN0bmFtZSIsImNvbnNvbGUiLCJsb2ciLCJteVByb2ZpbGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJteXRpdGxlIiwiYXV0aG9yIiwibXlCb29rcyIsIlNlYXJjaCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcCIsImJvb2siLCJpbWFnZURhdGEiLCJpbWFnZUZyb250IiwiZGF0YSIsIl9pZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBR0MsOERBQVUsSUFBQyxnQkFBc0g7QUFBQTs7QUFBQSwrQkFBbkhDLE1BQW1ILENBQXhHQyxLQUF3RztBQUFBLE1BQWpHQyxJQUFpRyxxQkFBakdBLElBQWlHO0FBQUEsTUFBM0ZDLEVBQTJGLHFCQUEzRkEsRUFBMkY7QUFBQSxNQUF2RkMsU0FBdUYscUJBQXZGQSxTQUF1RjtBQUFBLE1BQTVFQyxNQUE0RSxxQkFBNUVBLE1BQTRFO0FBQUEsTUFBcEVDLGFBQW9FLHFCQUFwRUEsYUFB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Q0xKLHFCQUFLLEVBQUUsRUFERjtBQUVMZixzQkFBTSxFQUFFLEVBRkg7QUFHTHhCLGtCQUFFLEVBQUV5QyxHQUFHLENBQUMzQyxLQUFKLENBQVVPLFdBSFQ7QUFJTEgsc0JBQU0sRUFBRXVDLEdBQUcsQ0FBQzNDLEtBQUosQ0FBVUk7QUFKYjtBQUQ4QyxhQUFwQyxDQVJUOztBQUFBO0FBUVIwQyxlQVJRO0FBQUE7QUFBQSxtQkFnQlNBLEdBQUcsQ0FBQ0MsSUFBSixFQWhCVDs7QUFBQTtBQUFBO0FBZ0JOWCxnQkFoQk0sbUJBZ0JOQSxJQWhCTTtBQUFBLDZDQW1CVDtBQUFFM0IsbUJBQUssRUFBQzJCO0FBQVIsYUFuQlM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBdUJYO0FBQUUzQixtQkFBSyxFQUFFO0FBQVQsYUF2Qlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNkJlWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Rlc3RpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5cbmNvbnN0IGNvbnRhY3QgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWUsIGJvb2tJRCwgYm9va093bmVyTmFtZSwgb3duZXJGaXJzdE5hbWUsYm9va093bmVySUQsIGJvb2tUaXRsZX19LCBib29rc30gKSA9PiB7XG4gICAgY29uc3QgW2RlZmF1bHRUZXh0LCBzZXREZWZhdWx0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Jvb2tsaXN0LCBzZXRCb29rbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBBc3NpZ24gY29uc3RhbnQgbmFtZXMgdG8gdmFsdWVzIG9idGFpbmVkIGZyb20gJ2Jvb2tsaXN0JyB2aWEgd2l0aFJvdXRlclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gbmFtZTtcbiAgICAgICAgY29uc3QgdXNlcklEID0gaWQ7XG4gICAgICAgIGNvbnN0IHVzZXJGaXJzdG5hbWUgPSBmaXJzdG5hbWU7XG5cbiAgICAgICAgc2V0Qm9va2xpc3QoYm9va3MpXG4gICAgICAgIGNvbnNvbGUubG9nKCdib29rbGlzdCBpcycpXG4gICAgICAgIGNvbnNvbGUubG9nKGJvb2tsaXN0KVxuXG4gICAgfSlcblxuICAgIC8vIFJlZGlyZWN0IHRvIG15cHJvZmlsZVxuICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgdG8gbmV3IGZvciBjcmVhdGluZyBuZXcgcG9zdFxuICAgIGNvbnN0IG15Qm9va3MgPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgcG9zdHNcbiAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIERpc3BsYXkgb24gc2NyZWVuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdC1wYWdlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6JzQlJywgcGFkZGluZzonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOicxOHB4JyB9fT5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5PbmNlIHlvdSBmaW5kIHRoZSBvbmUgeW91IHdhbnQsIGdldCBpbiBjb250YWN0IHdpdGggdGhlIG93bmVyLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XG4gICAgICAgIHtib29rbGlzdC5tYXAoIGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vdmFyIGltYWdlQmFzZTY0ID0gYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZURhdGE7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YT0nJztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nY29udGFjdC1ib29raW5mbyc+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0LWJvb2tpbmZvLXBpYyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlRGF0YX0gIHN0eWxlPXt7IHdpZHRoOic0MHB4JywgaGVpZ2h0Oic0MHB4JywgYm9yZGVyUmFkaXVzOicyMHB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtYm9va2luZm8tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+e2Jvb2sudGl0bGV9PC9iPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9vay5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLl9pZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm9va0lEOiB7Ym9va0lEfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kNTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tJbmZvJz5cbiAgICAgICAgICAgIDxwPk5hbWU6IHtuYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPkJvb2sgaWQ6IHtib29rSUR9PC9wPlxuICAgICAgICAgICAgPHA+T3duZXIgbmFtZToge2Jvb2tPd25lck5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+T3duZXIgSUQ6IHtib29rT3duZXJJRH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBzdHlsZT17eyB3aWR0aDonOTAlJywgbWFyZ2luVG9wOic3JScgfX0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBpZD1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9IHsnSGkgdGhlcmUgJytvd25lckZpcnN0TmFtZSsnLCBJIGFtIGludGVyZXN0ZWQgaW4geW91ciBib29rLCAnK2Jvb2tUaXRsZSsnISd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0LXRleHRCb3gnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luVG9wOiAnNCUnIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSk7XG5cblxuLy8gR2V0IGNvbnRlbnQgZnJvbSBkYXRhYmFzZSBcbmNvbnRhY3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XG4gICAgY29uc29sZS5sb2coJ2N0eCBpcycpO1xuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5ib29rT3duZXJJRClcbiAgICBjb25zb2xlLmxvZyhjdHgucXVlcnkuYm9va0lEKVxuXG4gICAgdHJ5IHtcblxuICAgICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpZDogY3R4LnF1ZXJ5LmJvb2tPd25lcklELFxuICAgICAgICAgICAgICAgICAgICBib29rSUQ6IGN0eC5xdWVyeS5ib29rSURcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICByZXR1cm57IGJvb2tzOmRhdGEgfVxuICAgICAgICAgICBcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIFxuICAgICAgICByZXR1cm4geyBib29rczogW10gfVxuICAgICAgICAgICBcbiAgICAgICB9XG4gICAgIFxuIH1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})