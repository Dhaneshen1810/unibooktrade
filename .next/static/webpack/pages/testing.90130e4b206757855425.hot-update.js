webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n //Getting book data from database\n\n\n\n\nvar myprofile = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      mytitle = _ref$router$query.mytitle,\n      author = _ref$router$query.author,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isDeleting = _useState[0],\n      setIsDeleting = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('null'),\n      bookName = _useState2[0],\n      setBookName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      bookID = _useState3[0],\n      setBookID = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isDeleting) {\n      deleteBook();\n    }\n  }, [isDeleting]);\n\n  var deleteBook = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var deleted;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books/' + bookID, {\n                method: \"DELETE\"\n              });\n\n            case 3:\n              deleted = _context.sent;\n              _context.next = 8;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n\n            case 8:\n              window.location.reload(false);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function deleteBook(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // The user clicks on the delete button\n\n\n  var handleDelete = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log(e.target);\n              setBookName(e.target.name);\n              setBookID(e.target.id);\n              setIsDeleting(true);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleDelete(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }(); // The user clicks on the edit button\n  // The user is sent to the edit page\n  // The data about this particular book post is the to the page as well\n\n\n  var handleEdit = function handleEdit(myBookID, myTitle, myAuthor, imageData) {\n    //Update bookID\n    //setBookID(e.target.id);\n    //console.log('Book id: '+e.target.id);\n    console.log('Owner name: ' + name);\n    console.log('ownerID: ' + id);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/edit',\n      query: {\n        name: name,\n        id: id,\n        firstname: firstname,\n        bookID: myBookID,\n        bookTitle: myTitle,\n        bookAuthor: myAuthor\n      }\n    });\n  }; //Handle page switch for header icons\n\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  }; //Go to section to create new listing\n\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"profile-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 21\n    }\n  }))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    className: \"library-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    style: {\n      letterSpacing: '1px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 50\n    }\n  }, __jsx(\"u\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 53\n    }\n  }, firstname, \"'s Library\")))), __jsx(\"div\", {\n    className: \"book-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 13\n    }\n  }, books.map(function (book) {\n    //var imageBase64 = book.imageFront.contentType;\n    var imageData;\n    var base64data;\n\n    if (book.imageFront) {\n      imageData = book.imageFront.data;\n    } else {\n      console.log('no image');\n      imageData = '';\n    }\n\n    return __jsx(\"div\", {\n      key: book._id,\n      className: \"book-item-profile\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      className: \"section1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      className: \"section1-image\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 33\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '100px',\n        height: '100px',\n        borderRadius: '20px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 37\n      }\n    })), __jsx(\"div\", {\n      className: \"section1-info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 33\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 37\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 40\n      }\n    }, book.title)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 37\n      }\n    }, book.author), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 37\n      }\n    }, \"$50\"), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 184,\n        columnNumber: 37\n      }\n    }, \"Book id: \", book._id))), __jsx(\"div\", {\n      className: \"section2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      className: \"buttons-section\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 33\n      }\n    }, __jsx(\"button\", {\n      className: \"btn btn-success\",\n      style: {\n        width: '100px',\n        height: '45px'\n      },\n      onClick: function onClick() {\n        return handleEdit(book._id, book.title, book.author, imageData);\n      },\n      id: book._id,\n      name: book.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 33\n      }\n    }, \"Edit\"), __jsx(\"button\", {\n      className: \"btn btn-secondary\",\n      style: {\n        width: '100px',\n        height: '45px'\n      },\n      onClick: handleDelete,\n      id: book._id,\n      name: book.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 33\n      }\n    }, \"Delete\"))));\n  })));\n}, \"swoZANPLxJOEvfKzYj6Uw7hvTSE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n}));\n\nmyprofile.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(mytitle) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {\n              headers: {\n                title: mytitle.query.mytitle,\n                author: mytitle.query.author\n              }\n            });\n\n          case 2:\n            res = _context3.sent;\n            _context3.next = 5;\n            return res.json();\n\n          case 5:\n            _yield$res$json = _context3.sent;\n            data = _yield$res$json.data;\n            return _context3.abrupt(\"return\", {\n              books: data\n            });\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x3) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myprofile);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsInVzZVN0YXRlIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJib29rTmFtZSIsInNldEJvb2tOYW1lIiwiYm9va0lEIiwic2V0Qm9va0lEIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGVsZXRlQm9vayIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImRlbGV0ZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZURlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJoYW5kbGVFZGl0IiwibXlCb29rSUQiLCJteVRpdGxlIiwibXlBdXRob3IiLCJpbWFnZURhdGEiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJib29rVGl0bGUiLCJib29rQXV0aG9yIiwibXlQcm9maWxlIiwibXlCb29rcyIsIlNlYXJjaCIsImxldHRlclNwYWNpbmciLCJtYXAiLCJib29rIiwiYmFzZTY0ZGF0YSIsImltYWdlRnJvbnQiLCJkYXRhIiwiX2lkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImhlYWRlcnMiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsOERBQVUsSUFBQyxnQkFBeUU7QUFBQTs7QUFBQSwrQkFBdEVDLE1BQXNFLENBQTNEQyxLQUEyRDtBQUFBLE1BQXBEQyxJQUFvRCxxQkFBcERBLElBQW9EO0FBQUEsTUFBOUNDLEVBQThDLHFCQUE5Q0EsRUFBOEM7QUFBQSxNQUExQ0Ms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Q0FBQ0osS0FBUixDQUFjSSxPQURoQjtBQUVMQyxzQkFBTSxFQUFFRCxPQUFPLENBQUNKLEtBQVIsQ0FBY0s7QUFGakI7QUFEOEMsYUFBcEMsQ0FMQzs7QUFBQTtBQUtsQmlELGVBTGtCO0FBQUE7QUFBQSxtQkFXREEsR0FBRyxDQUFDQyxJQUFKLEVBWEM7O0FBQUE7QUFBQTtBQVdoQlQsZ0JBWGdCLG1CQVdoQkEsSUFYZ0I7QUFBQSw4Q0FhbEI7QUFBRXhDLG1CQUFLLEVBQUV3QztBQUFULGFBYmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlCZWpELHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBDb25maXJtLCBCdXR0bywgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuXG5jb25zdCBteXByb2ZpbGUgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWUsIG15dGl0bGUsIGF1dGhvcn19LCBib29rc30gKSA9PiB7XG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtib29rTmFtZSwgc2V0Qm9va05hbWVdID0gdXNlU3RhdGUoJ251bGwnKTtcbiAgICBjb25zdCBbYm9va0lELCBzZXRCb29rSURdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzRGVsZXRpbmcpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJvb2soKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0RlbGV0aW5nXSlcblxuXG4gICAgY29uc3QgZGVsZXRlQm9vayA9IGFzeW5jIChlKSA9PntcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9jb25zdCBkZWxldGVkID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzLycrYm9va0lELHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcy8nK2Jvb2tJRCx7XG4gICAgICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCJcblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XG5cbiAgICB9XG5cbiAgICAvLyBUaGUgdXNlciBjbGlja3Mgb24gdGhlIGRlbGV0ZSBidXR0b25cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIHNldEJvb2tOYW1lKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICBzZXRCb29rSUQoZS50YXJnZXQuaWQpO1xuICAgICAgICBzZXRJc0RlbGV0aW5nKHRydWUpO1xuICAgIH1cblxuICAgIC8vIFRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZWRpdCBidXR0b25cbiAgICAvLyBUaGUgdXNlciBpcyBzZW50IHRvIHRoZSBlZGl0IHBhZ2VcbiAgICAvLyBUaGUgZGF0YSBhYm91dCB0aGlzIHBhcnRpY3VsYXIgYm9vayBwb3N0IGlzIHRoZSB0byB0aGUgcGFnZSBhcyB3ZWxsXG4gICAgY29uc3QgaGFuZGxlRWRpdCA9IChteUJvb2tJRCwgbXlUaXRsZSwgbXlBdXRob3IsIGltYWdlRGF0YSkgPT4ge1xuICAgICAgICAvL1VwZGF0ZSBib29rSURcbiAgICAgICAgLy9zZXRCb29rSUQoZS50YXJnZXQuaWQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdCb29rIGlkOiAnK2UudGFyZ2V0LmlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ093bmVyIG5hbWU6ICcrIG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZygnb3duZXJJRDogJytpZCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvZWRpdCcsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICBib29rSUQ6IG15Qm9va0lELFxuICAgICAgICAgICAgICAgIGJvb2tUaXRsZTogbXlUaXRsZSxcbiAgICAgICAgICAgICAgICBib29rQXV0aG9yOiBteUF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAvL0hhbmRsZSBwYWdlIHN3aXRjaCBmb3IgaGVhZGVyIGljb25zXG4gICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0dvIHRvIHNlY3Rpb24gdG8gY3JlYXRlIG5ldyBsaXN0aW5nXG4gICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXG4gICAgICAgICAgICBxdWVyeTogeyBcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLXBhZ2UnPlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e1NlYXJjaH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlicmFyeS1oZWFkZXInPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGV0dGVyU3BhY2luZzonMXB4J319PjxiPjx1PntmaXJzdG5hbWV9J3MgTGlicmFyeTwvdT48L2I+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWxpc3QnPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy92YXIgaW1hZ2VCYXNlNjQgPSBib29rLmltYWdlRnJvbnQuY29udGVudFR5cGU7XG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhO1xuICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGE7XG5cbiAgICAgICAgICAgIGlmIChib29rLmltYWdlRnJvbnQpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IGJvb2suaW1hZ2VGcm9udC5kYXRhO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBpbWFnZScpO1xuICAgICAgICAgICAgICAgIGltYWdlRGF0YT0nJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtLXByb2ZpbGUnPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xLWltYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZURhdGF9ICBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzEwMHB4JywgYm9yZGVyUmFkaXVzOicyMHB4J319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMS1pbmZvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPntib29rLnRpdGxlfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9vay5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JDUwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm9vayBpZDoge2Jvb2suX2lkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucy1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2Vzcycgc3R5bGU9e3sgd2lkdGg6JzEwMHB4JywgaGVpZ2h0Oic0NXB4J319IG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoYm9vay5faWQsIGJvb2sudGl0bGUsIGJvb2suYXV0aG9yLCBpbWFnZURhdGEpfSBpZD17Ym9vay5faWR9IG5hbWU9e2Jvb2sudGl0bGV9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5JyBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzQ1cHgnfX0gb25DbGljaz17aGFuZGxlRGVsZXRlfSBpZD17Ym9vay5faWR9IG5hbWU9e2Jvb2sudGl0bGV9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuXG59KTtcblxuXG5teXByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKG15dGl0bGUpID0+e1xuXG4gICAgICAgICAgICBcblxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICB0aXRsZTogbXl0aXRsZS5xdWVyeS5teXRpdGxlLFxuICAgICAgICAgICAgYXV0aG9yOiBteXRpdGxlLnF1ZXJ5LmF1dGhvclxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJueyBib29rczogZGF0YSB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbXlwcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})