webpackHotUpdate_N_E("pages/testing",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/testing.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n //Getting book data from database\n\n\n\nvar posts = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(function (_ref) {\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      mytitle = _ref$router$query.mytitle,\n      author = _ref$router$query.author,\n      books = _ref.books;\n\n  // User chooses to view all available books\n  var viewAll = function viewAll() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/booklist',\n      query: {\n        name: name,\n        id: id,\n        firstname: firstname,\n        mytitle: '',\n        author: ''\n      }\n    });\n  };\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  };\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"booklist-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '5%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\")))), __jsx(\"div\", {\n    className: \"book-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, books.map(function (book) {\n    //processing image data\n    var imageData;\n\n    if (book.imageFront) {\n      console.log('image');\n      console.log(book.imageFront.contentType);\n      imageData = book.imageFront.data;\n      console.log(imageData);\n      console.log('length: ' + imageData.length);\n    } else {\n      console.log('no image'); //using dummy data if image data is not present\n\n      imageData = 'eweffwf';\n    }\n\n    return __jsx(\"div\", {\n      key: book._id,\n      className: \"book-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"item-section1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: imageData,\n      style: {\n        width: '110px',\n        height: '110px',\n        borderRadius: '10px',\n        marginTop: '10px',\n        marginLeft: '10px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 25\n      }\n    })), __jsx(\"div\", {\n      className: \"item-section2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 25\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 25\n      }\n    }, book.title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 25\n      }\n    }, book.author), __jsx(\"a\", {\n      href: \"#\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 25\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 37\n      }\n    }, \"Contact \", book.ownerName))));\n  })));\n});\n\nposts.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var res, _yield$res$json, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {\n              headers: {\n                title: ctx.query.mytitle,\n                author: ctx.query.author\n              }\n            });\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            _yield$res$json = _context.sent;\n            data = _yield$res$json.data;\n            return _context.abrupt(\"return\", {\n              books: data\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGluZy5qcz9iMjcwIl0sIm5hbWVzIjpbInBvc3RzIiwid2l0aFJvdXRlciIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsImlkIiwiZmlyc3RuYW1lIiwibXl0aXRsZSIsImF1dGhvciIsImJvb2tzIiwidmlld0FsbCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15UHJvZmlsZSIsIm15Qm9va3MiLCJTZWFyY2giLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwibWFwIiwiYm9vayIsImltYWdlRGF0YSIsImltYWdlRnJvbnQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudFR5cGUiLCJkYXRhIiwibGVuZ3RoIiwiX2lkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0IiwidGl0bGUiLCJvd25lck5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImhlYWRlcnMiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBO0FBS0EsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxDQUFDLGdCQUF5RTtBQUFBLCtCQUF0RUMsTUFBc0UsQ0FBM0RDLEtBQTJEO0FBQUEsTUFBcERDLElBQW9ELHFCQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q0MsRUFBOEMscUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxTQUEwQyxxQkFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLE9BQStCLHFCQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsTUFBc0IscUJBQXRCQSxNQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFHOUY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRWxCQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFdBREY7QUFFUlYsV0FBSyxFQUFFO0FBQ0hDLFlB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QyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlaLElBQUksQ0FBQ2EsS0FBVCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJYixJQUFJLENBQUNaLE1BQVQsQ0FGQSxFQUdBO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlZLElBQUksQ0FBQ2MsU0FBakIsQ0FBWixDQUhBLENBSkosQ0FGSjtBQWdCUCxHQW5DQSxDQUhELENBOUJKLENBRkE7QUFnRkgsQ0ExSXVCLENBQXhCOztBQTZJQWxDLEtBQUssQ0FBQ21DLGVBQU47QUFBQSwrTEFBd0IsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0VDLHlEQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDM0RDLHFCQUFPLEVBQUU7QUFDTEwscUJBQUssRUFBRUcsR0FBRyxDQUFDakMsS0FBSixDQUFVSSxPQURaO0FBRUxDLHNCQUFNLEVBQUU0QixHQUFHLENBQUNqQyxLQUFKLENBQVVLO0FBRmI7QUFEa0QsYUFBcEMsQ0FIUDs7QUFBQTtBQUdWK0IsZUFIVTtBQUFBO0FBQUEsbUJBWU9BLEdBQUcsQ0FBQ0MsSUFBSixFQVpQOztBQUFBO0FBQUE7QUFZUmQsZ0JBWlEsbUJBWVJBLElBWlE7QUFBQSw2Q0FnQlY7QUFBRWpCLG1CQUFLLEVBQUVpQjtBQUFULGFBaEJVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCZTFCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vL0dldHRpbmcgYm9vayBkYXRhIGZyb20gZGF0YWJhc2VcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5cbmNvbnN0IHBvc3RzID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBteXRpdGxlLCBhdXRob3J9fSwgYm9va3N9ICkgPT4ge1xuICAgIFxuXG4gICAgLy8gVXNlciBjaG9vc2VzIHRvIHZpZXcgYWxsIGF2YWlsYWJsZSBib29rc1xuICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XG5cbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgYXV0aG9yOiAnJ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9uZXcnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tsaXN0LXBhZ2UnPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9mb3VyLXNxdWFyZS5wbmdcIiBhbHQ9XCJteSBib29rc1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlQcm9maWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e1NlYXJjaH0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDonNSUnLCBwYWRkaW5nOicxMHB4JyB9fT5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5PbmNlIHlvdSBmaW5kIHRoZSBvbmUgeW91IHdhbnQsIGdldCBpbiBjb250YWN0IHdpdGggdGhlIG93bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XG4gICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xuICAgICAgICAgICAgLy9wcm9jZXNzaW5nIGltYWdlIGRhdGFcbiAgICAgICAgICAgIHZhciBpbWFnZURhdGE7XG5cbiAgICAgICAgICAgIGlmIChib29rLmltYWdlRnJvbnQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IGJvb2suaW1hZ2VGcm9udC5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGVuZ3RoOiAnKyBpbWFnZURhdGEubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGltYWdlJyk7XG4gICAgICAgICAgICAgICAgLy91c2luZyBkdW1teSBkYXRhIGlmIGltYWdlIGRhdGEgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpbWFnZURhdGE9J2V3ZWZmd2YnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLXNlY3Rpb24xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZURhdGF9ICBzdHlsZT17eyB3aWR0aDonMTEwcHgnLCBoZWlnaHQ6JzExMHB4JywgYm9yZGVyUmFkaXVzOicxMHB4JywgbWFyZ2luVG9wOicxMHB4JywgbWFyZ2luTGVmdDonMTBweCd9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLXNlY3Rpb24yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz48Yj5Db250YWN0IHtib29rLm93bmVyTmFtZX08L2I+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KX1cblxuICAgIFxuICAgIFxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgIDwvZGl2PlxuKVxuXG5cblxufSk7XG5cblxucG9zdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XG4gICAgXG4gICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgdGl0bGU6IGN0eC5xdWVyeS5teXRpdGxlLFxuICAgICAgICAgICAgYXV0aG9yOiBjdHgucXVlcnkuYXV0aG9yXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuICBcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybnsgYm9va3M6IGRhdGEgfVxuICAgXG4gICAgXG59XG5cbiAgICBcbmV4cG9ydCBkZWZhdWx0IHBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testing.js\n");

/***/ })

})