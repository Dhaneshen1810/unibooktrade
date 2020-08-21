webpackHotUpdate_N_E("pages/testing",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/cors/lib/index.js":
false,

/***/ "./node_modules/vary/index.js":
false,

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\testing.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //Getting book data from database



var posts = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstname = _ref$router$query.firstname,
      mytitle = _ref$router$query.mytitle,
      author = _ref$router$query.author,
      books = _ref.books;

  // User chooses to view all available books
  var viewAll = function viewAll() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/booklist',
      query: {
        name: name,
        id: id,
        firstname: firstname,
        mytitle: '',
        author: ''
      }
    });
  }; // Redirect to myprofile


  var myProfile = function myProfile() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/myprofile',
      query: {
        mytitle: '',
        author: '',
        name: name,
        id: id,
        firstname: firstname
      }
    });
  }; // Redirect to new


  var myBooks = function myBooks() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/new',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  }; // Redirect to posts


  var Search = function Search() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/posts',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  }; // Redirect to contact page
  // Information transferred are user, book and bookowner information


  var Contact = function Contact(bookID, bookOwnerName, bookTitle, bookOwnerID) {
    var splitFullName = bookOwnerName.split(" ");
    var ownerFirstName = splitFullName[0];
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/contact',
      query: {
        //User information
        id: id,
        name: name,
        firstname: firstname,
        //Book information
        bookID: bookID,
        bookTitle: bookTitle,
        //book owner information
        bookOwnerName: bookOwnerName,
        ownerFirstName: ownerFirstName,
        bookOwnerID: bookOwnerID
      }
    });
  };

  return __jsx("div", {
    className: "booklist-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/four-square.png",
    alt: "my books",
    className: "my-icon",
    onClick: myProfile,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/icons/plus.png",
    alt: "Add book",
    className: "my-icon",
    onClick: myBooks,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/icons/search.png",
    alt: "Search",
    className: "my-icon",
    onClick: Search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }))), __jsx("p", {
    className: "icon-box-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "This is a collection of all the books matching your search", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), "We currently have ", books.length, " available"))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, books.map(function (book) {
    //processing image data
    var imageData;

    if (book.imageFront) {
      console.log('image');
      console.log(book.imageFront.contentType);
      imageData = book.imageFront.data;
      console.log(imageData);
      console.log('length: ' + imageData.length);
    } else {
      console.log('no image'); //using dummy data if image data is not present

      imageData = 'eweffwf';
    }

    return __jsx("div", {
      key: book._id,
      className: "book-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "item-section1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: imageData,
      style: {
        width: '110px',
        height: '110px',
        borderRadius: '10px',
        marginTop: '10px',
        marginLeft: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "item-section2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    }, book.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 25
      }
    }, book.author), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, "$", book.price), __jsx("a", {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return Contact(book._id, book.ownerName, book.title, book.ownerID);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 133
      }
    }, "Contact ", book.ownerName))));
  })));
}); // Get content from database

posts.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {
              headers: {
                title: ctx.query.mytitle,
                author: ctx.query.author
              }
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            _yield$res$json = _context.sent;
            data = _yield$res$json.data;
            return _context.abrupt("return", {
              books: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (posts);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RpbmcuanMiXSwibmFtZXMiOlsicG9zdHMiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJteXRpdGxlIiwiYXV0aG9yIiwiYm9va3MiLCJ2aWV3QWxsIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibXlQcm9maWxlIiwibXlCb29rcyIsIlNlYXJjaCIsIkNvbnRhY3QiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwiYm9va1RpdGxlIiwiYm9va093bmVySUQiLCJzcGxpdEZ1bGxOYW1lIiwic3BsaXQiLCJvd25lckZpcnN0TmFtZSIsImxlbmd0aCIsIm1hcCIsImJvb2siLCJpbWFnZURhdGEiLCJpbWFnZUZyb250IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwiZGF0YSIsIl9pZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInRpdGxlIiwicHJpY2UiLCJjdXJzb3IiLCJvd25lck5hbWUiLCJvd25lcklEIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0NBR0E7O0FBQ0E7QUFFQTtBQUtBLElBQU1BLEtBQUssR0FBR0MsOERBQVUsQ0FBQyxnQkFBeUU7QUFBQSwrQkFBdEVDLE1BQXNFLENBQTNEQyxLQUEyRDtBQUFBLE1BQXBEQyxJQUFvRCxxQkFBcERBLElBQW9EO0FBQUEsTUFBOUNDLEVBQThDLHFCQUE5Q0EsRUFBOEM7QUFBQSxNQUExQ0MsU0FBMEMscUJBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxPQUErQixxQkFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLE1BQXNCLHFCQUF0QkEsTUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBRzlGO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUVsQkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxXQURGO0FBRVJWLFdBQUssRUFBRTtBQUNIQyxZQUFJLEVBQUVBLElBREg7QUFFSEMsVUFBRSxFQUFFQSxFQUZEO0FBR0hDLGlCQUFTLEVBQUVBLFNBSFI7QUFJSEMsZUFBTyxFQUFFLEVBSk47QUFLSEMsY0FBTSxFQUFFO0FBTEw7QUFGQyxLQUFaO0FBV0gsR0FiRCxDQUo4RixDQW1COUY7OztBQUNBLE1BQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJILHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsWUFERjtBQUVSVixXQUFLLEVBQUU7QUFDQ0ksZUFBTyxFQUFFLEVBRFY7QUFFQ0MsY0FBTSxFQUFFLEVBRlQ7QUFHQ0osWUFBSSxFQUFFQSxJQUhQO0FBSUNDLFVBQUUsRUFBRUEsRUFKTDtBQUtDQyxpQkFBUyxFQUFFQTtBQUxaO0FBRkMsS0FBWjtBQVdILEdBWkQsQ0FwQjhGLENBa0M5Rjs7O0FBQ0EsTUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkosc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxNQURGO0FBRVJWLFdBQUssRUFBRTtBQUNDRSxVQUFFLEVBQUVBLEVBREw7QUFFQ0QsWUFBSSxFQUFFQSxJQUZQO0FBR0NFLGlCQUFTLEVBQUVBO0FBSFo7QUFGQyxLQUFaO0FBU0gsR0FWRCxDQW5DOEYsQ0ErQzlGOzs7QUFDQSxNQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCTCxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUlYsV0FBSyxFQUFFO0FBQ0NFLFVBQUUsRUFBRUEsRUFETDtBQUVDRCxZQUFJLEVBQUVBLElBRlA7QUFHQ0UsaUJBQVMsRUFBRUE7QUFIWjtBQUZDLEtBQVo7QUFTSCxHQVZELENBaEQ4RixDQTREOUY7QUFDQTs7O0FBQ0EsTUFBTVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUFTQyxhQUFULEVBQXdCQyxTQUF4QixFQUFtQ0MsV0FBbkMsRUFBbUQ7QUFDL0QsUUFBSUMsYUFBYSxHQUFHSCxhQUFhLENBQUNJLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBcEI7QUFDQSxRQUFJQyxjQUFjLEdBQUdGLGFBQWEsQ0FBQyxDQUFELENBQWxDO0FBRUFYLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsVUFERjtBQUVSVixXQUFLLEVBQUU7QUFDQztBQUNBRSxVQUFFLEVBQUVBLEVBRkw7QUFHQ0QsWUFBSSxFQUFFQSxJQUhQO0FBSUNFLGlCQUFTLEVBQUVBLFNBSlo7QUFLQztBQUNBWSxjQUFNLEVBQUVBLE1BTlQ7QUFPQ0UsaUJBQVMsRUFBRUEsU0FQWjtBQVFDO0FBQ0FELHFCQUFhLEVBQUVBLGFBVGhCO0FBVUNLLHNCQUFjLEVBQUVBLGNBVmpCO0FBV0NILG1CQUFXLEVBQUVBO0FBWGQ7QUFGQyxLQUFaO0FBZ0JILEdBcEJEOztBQXVCQSxTQUVBO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFBK0IsT0FBRyxFQUFDLFVBQW5DO0FBQThDLGFBQVMsRUFBQyxTQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FEUixFQUtRO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssT0FBRyxFQUFDLHdCQUFUO0FBQWtDLE9BQUcsRUFBQyxVQUF0QztBQUFpRCxhQUFTLEVBQUMsU0FBM0Q7QUFBcUUsV0FBTyxFQUFFUCxTQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQTtBQUFLLE9BQUcsRUFBQyxpQkFBVDtBQUEyQixPQUFHLEVBQUMsVUFBL0I7QUFBMEMsYUFBUyxFQUFDLFNBQXBEO0FBQThELFdBQU8sRUFBRUMsT0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLEVBSUE7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLFFBQWpDO0FBQTBDLGFBQVMsRUFBQyxTQUFwRDtBQUE4RCxXQUFPLEVBQUVDLE1BQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKQSxDQUxSLENBREEsRUFrQkk7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSx3QkFFd0JQLEtBQUssQ0FBQ2dCLE1BRjlCLGVBbEJKLENBREosQ0FISixFQThCSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQ2hCLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVyxVQUFBQyxJQUFJLEVBQUk7QUFDaEI7QUFDQSxRQUFJQyxTQUFKOztBQUVBLFFBQUlELElBQUksQ0FBQ0UsVUFBVCxFQUFvQjtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBSSxDQUFDRSxVQUFMLENBQWdCRyxXQUE1QjtBQUVBSixlQUFTLEdBQUdELElBQUksQ0FBQ0UsVUFBTCxDQUFnQkksSUFBNUI7QUFDQUgsYUFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWUgsU0FBUyxDQUFDSCxNQUFsQztBQUNILEtBUEQsTUFRSTtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBREEsQ0FFQTs7QUFDQUgsZUFBUyxHQUFDLFNBQVY7QUFDSDs7QUFHRyxXQUVJO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNPLEdBQWY7QUFBb0IsZUFBUyxFQUFDLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFLLFNBQUcsRUFBRU4sU0FBVjtBQUFzQixXQUFLLEVBQUU7QUFBRU8sYUFBSyxFQUFDLE9BQVI7QUFBaUJDLGNBQU0sRUFBQyxPQUF4QjtBQUFpQ0Msb0JBQVksRUFBQyxNQUE5QztBQUFzREMsaUJBQVMsRUFBQyxNQUFoRTtBQUF3RUMsa0JBQVUsRUFBQztBQUFuRixPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREEsQ0FESixFQUlJO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVosSUFBSSxDQUFDYSxLQUFULENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUliLElBQUksQ0FBQ25CLE1BQVQsQ0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBS21CLElBQUksQ0FBQ2MsS0FBVixDQUhBLEVBSUE7QUFBRyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFDO0FBQVQsT0FBVjtBQUFnQyxhQUFPLEVBQUU7QUFBQSxlQUFNekIsT0FBTyxDQUFDVSxJQUFJLENBQUNPLEdBQU4sRUFBV1AsSUFBSSxDQUFDZ0IsU0FBaEIsRUFBMkJoQixJQUFJLENBQUNhLEtBQWhDLEVBQXVDYixJQUFJLENBQUNpQixPQUE1QyxDQUFiO0FBQUEsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZakIsSUFBSSxDQUFDZ0IsU0FBakIsQ0FBNUcsQ0FKQSxDQUpKLENBRko7QUFpQlAsR0FwQ0EsQ0FIRCxDQTlCSixDQUZBO0FBaUZILENBdEt1QixDQUF4QixDLENBd0tBOztBQUNBM0MsS0FBSyxDQUFDNkMsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHRUMseURBQUssQ0FBQyxpQ0FBRCxFQUFvQztBQUUzREMscUJBQU8sRUFBRTtBQUNMUixxQkFBSyxFQUFFTSxHQUFHLENBQUMzQyxLQUFKLENBQVVJLE9BRFo7QUFFTEMsc0JBQU0sRUFBRXNDLEdBQUcsQ0FBQzNDLEtBQUosQ0FBVUs7QUFGYjtBQUZrRCxhQUFwQyxDQUhQOztBQUFBO0FBR1Z5QyxlQUhVO0FBQUE7QUFBQSxtQkFhT0EsR0FBRyxDQUFDQyxJQUFKLEVBYlA7O0FBQUE7QUFBQTtBQWFSakIsZ0JBYlEsbUJBYVJBLElBYlE7QUFBQSw2Q0FpQlY7QUFBRXhCLG1CQUFLLEVBQUV3QjtBQUFULGFBakJVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCZWpDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3RpbmcuMGJkYjZiMDkwY2ZkY2U2NzZhMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHBvc3RzID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBteXRpdGxlLCBhdXRob3J9fSwgYm9va3N9ICkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgLy8gVXNlciBjaG9vc2VzIHRvIHZpZXcgYWxsIGF2YWlsYWJsZSBib29rc1xyXG4gICAgY29uc3Qgdmlld0FsbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9ib29rbGlzdCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBhdXRob3I6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWRpcmVjdCB0byBteXByb2ZpbGVcclxuICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZGlyZWN0IHRvIG5ld1xyXG4gICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWRpcmVjdCB0byBwb3N0c1xyXG4gICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVkaXJlY3QgdG8gY29udGFjdCBwYWdlXHJcbiAgICAvLyBJbmZvcm1hdGlvbiB0cmFuc2ZlcnJlZCBhcmUgdXNlciwgYm9vayBhbmQgYm9va293bmVyIGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBDb250YWN0ID0gKGJvb2tJRCwgYm9va093bmVyTmFtZSwgYm9va1RpdGxlLCBib29rT3duZXJJRCkgPT4ge1xyXG4gICAgICAgIHZhciBzcGxpdEZ1bGxOYW1lID0gYm9va093bmVyTmFtZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdmFyIG93bmVyRmlyc3ROYW1lID0gc3BsaXRGdWxsTmFtZVswXTtcclxuXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9jb250YWN0JyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9Vc2VyIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9Cb29rIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYm9va0lEOiBib29rSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9va1RpdGxlOiBib29rVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ib29rIG93bmVyIGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYm9va093bmVyTmFtZTogYm9va093bmVyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBvd25lckZpcnN0TmFtZTogb3duZXJGaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9va093bmVySUQ6IGJvb2tPd25lcklEXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib29rbGlzdC1wYWdlJz5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpY29uLWJveC10ZXh0Jz5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPldlIGN1cnJlbnRseSBoYXZlIHtib29rcy5sZW5ndGh9IGF2YWlsYWJsZTwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xyXG4gICAgICAgICAgICAvL3Byb2Nlc3NpbmcgaW1hZ2UgZGF0YVxyXG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGg6ICcrIGltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIC8vdXNpbmcgZHVtbXkgZGF0YSBpZiBpbWFnZSBkYXRhIGlzIG5vdCBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGE9J2V3ZWZmd2YnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tc2VjdGlvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VEYXRhfSAgc3R5bGU9e3sgd2lkdGg6JzExMHB4JywgaGVpZ2h0OicxMTBweCcsIGJvcmRlclJhZGl1czonMTBweCcsIG1hcmdpblRvcDonMTBweCcsIG1hcmdpbkxlZnQ6JzEwcHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tc2VjdGlvbjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9vay50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Ym9vay5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGN1cnNvcjoncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gQ29udGFjdChib29rLl9pZCwgYm9vay5vd25lck5hbWUsIGJvb2sudGl0bGUsIGJvb2sub3duZXJJRCl9PjxiPkNvbnRhY3Qge2Jvb2sub3duZXJOYW1lfTwvYj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vLyBHZXQgY29udGVudCBmcm9tIGRhdGFiYXNlXHJcbnBvc3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+e1xyXG4gICAgXHJcbiAgICAgICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IGN0eC5xdWVyeS5teXRpdGxlLFxyXG4gICAgICAgICAgICBhdXRob3I6IGN0eC5xdWVyeS5hdXRob3JcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICBcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm57IGJvb2tzOiBkYXRhIH1cclxuICAgXHJcbiAgICBcclxufVxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBwb3N0czsiXSwic291cmNlUm9vdCI6IiJ9