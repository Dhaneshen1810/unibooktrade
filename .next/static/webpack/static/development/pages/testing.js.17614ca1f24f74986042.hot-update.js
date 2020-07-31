webpackHotUpdate("static\\development\\pages\\testing.js",{

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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\testing.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //Getting book data from database




var myprofile = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(_s(function (_ref) {
  _s();

  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstname = _ref$router$query.firstname,
      mytitle = _ref$router$query.mytitle,
      author = _ref$router$query.author,
      books = _ref.books;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDeleting = _useState[0],
      setIsDeleting = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('null'),
      bookName = _useState2[0],
      setBookName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      bookID = _useState3[0],
      setBookID = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isDeleting) {
      deleteBook();
    }
  }, [isDeleting]);

  var deleteBook = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var deleted;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Book to delete: ' + bookName + ' with id: ' + bookID);
              _context.prev = 1;
              _context.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books/' + bookID, {
                method: "DELETE"
              });

            case 4:
              deleted = _context.sent;
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function deleteBook(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(e.target);
              setBookName(e.target.name);
              setBookID(e.target.id);
              setIsDeleting(true);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); //Handle page switch for header icons


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
  }; //Go to section to create new listing


  var myBooks = function myBooks() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/new',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  };

  var Search = function Search() {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
      pathname: '/posts',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  };

  return __jsx("div", {
    className: "profile-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 109,
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
      lineNumber: 111,
      columnNumber: 21
    }
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "library-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      letterSpacing: '1px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 50
    }
  }, __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 53
    }
  }, firstname, "'s Library"))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, "Your personal book posts. You may edit or delete those that have been sold")), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, books.map(function (book) {
    //var imageBase64 = book.imageFront.contentType;
    var imageData;
    var base64data;
    console.log(book);

    if (book.imageFront) {
      console.log('image');
      console.log(book.imageFront.contentType);
      imageData = book.imageFront.data;
      console.log(imageData);
      console.log('length: ' + imageData.length);
    } else {
      console.log('no image');
      imageData = 'eweffwf';
    }

    console.log('hi');
    return __jsx("div", {
      className: "book-item-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, __jsx("div", {
      key: book._id,
      className: "book-item-profile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "section1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "section1-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: imageData,
      style: {
        width: '100px',
        height: '100px',
        borderRadius: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "section1-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 33
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 37
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 40
      }
    }, book.title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 37
      }
    }, book.author), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 37
      }
    }, "$50"))), __jsx("div", {
      className: "section2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "buttons-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 33
      }
    }, __jsx("button", {
      className: "btn btn-success",
      style: {
        width: '100px',
        height: '45px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 33
      }
    }, "Edit"), __jsx("button", {
      className: "btn btn-secondary",
      style: {
        width: '100px',
        height: '45px'
      },
      onClick: handleDelete,
      id: book._id,
      name: book.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 33
      }
    }, "Delete")))));
  })));
}, "swoZANPLxJOEvfKzYj6Uw7hvTSE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
}));

myprofile.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(mytitle) {
    var res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {
              headers: {
                title: mytitle.query.mytitle,
                author: mytitle.query.author
              }
            });

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            _yield$res$json = _context3.sent;
            data = _yield$res$json.data;
            return _context3.abrupt("return", {
              books: data
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (myprofile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsInVzZVN0YXRlIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJib29rTmFtZSIsInNldEJvb2tOYW1lIiwiYm9va0lEIiwic2V0Qm9va0lEIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGVsZXRlQm9vayIsImUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJkZWxldGVkIiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0IiwibXlQcm9maWxlIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibXlCb29rcyIsIlNlYXJjaCIsImxldHRlclNwYWNpbmciLCJtYXAiLCJib29rIiwiaW1hZ2VEYXRhIiwiYmFzZTY0ZGF0YSIsImltYWdlRnJvbnQiLCJjb250ZW50VHlwZSIsImRhdGEiLCJsZW5ndGgiLCJfaWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiaGVhZGVycyIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBR0MsOERBQVUsSUFBQyxnQkFBeUU7QUFBQTs7QUFBQSwrQkFBdEVDLE1BQXNFLENBQTNEQyxLQUEyRDtBQUFBLE1BQXBEQyxJQUFvRCxxQkFBcERBLElBQW9EO0FBQUEsTUFBOUNDLEVBQThDLHFCQUE5Q0EsRUFBOEM7QUFBQSxNQUExQ0MsU0FBMEMscUJBQTFDQSxTQUEwQztBQUFBLE1BQS9CQyxPQUErQixxQkFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLE1BQXNCLHFCQUF0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QVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFDLE9BQVI7QUFBaUJDLGNBQU0sRUFBQztBQUF4QixPQUE3QztBQUE4RSxhQUFPLEVBQUVuQixZQUF2RjtBQUFxRyxRQUFFLEVBQUVVLElBQUksQ0FBQ08sR0FBOUc7QUFBbUgsVUFBSSxFQUFFUCxJQUFJLENBQUNXLEtBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsQ0FESixDQWRKLENBRkEsQ0FESjtBQWdDUCxHQXREQSxDQUhELENBL0JKLENBRko7QUFrR0gsQ0FsTDJCO0FBQUEsVUFJVDlCLHFEQUpTO0FBQUEsR0FBNUI7O0FBcUxBakIsU0FBUyxDQUFDZ0QsZUFBVjtBQUFBLCtMQUE0QixrQkFBT3pDLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTUZnQix5REFBSyxDQUFDLGlDQUFELEVBQW9DO0FBQzNEMEIscUJBQU8sRUFBRTtBQUNMRixxQkFBSyxFQUFFeEMsT0FBTyxDQUFDSixLQUFSLENBQWNJLE9BRGhCO0FBRUxDLHNCQUFNLEVBQUVELE9BQU8sQ0FBQ0osS0FBUixDQUFjSztBQUZqQjtBQURrRCxhQUFwQyxDQU5IOztBQUFBO0FBTWQwQyxlQU5jO0FBQUE7QUFBQSxtQkFZREEsR0FBRyxDQUFDQyxJQUFKLEVBWkM7O0FBQUE7QUFBQTtBQVloQlYsZ0JBWmdCLG1CQVloQkEsSUFaZ0I7QUFBQSw4Q0FjbEI7QUFBRWhDLG1CQUFLLEVBQUVnQztBQUFULGFBZGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCZXpDLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0aW5nLmpzLjE3NjE0Y2ExZjI0Zjc0OTg2MDQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgQ29uZmlybSwgQnV0dG8sIExvYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbXlwcm9maWxlID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBteXRpdGxlLCBhdXRob3J9fSwgYm9va3N9ICkgPT4ge1xyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Jvb2tOYW1lLCBzZXRCb29rTmFtZV0gPSB1c2VTdGF0ZSgnbnVsbCcpO1xyXG4gICAgY29uc3QgW2Jvb2tJRCwgc2V0Qm9va0lEXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0RlbGV0aW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJvb2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNEZWxldGluZ10pXHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJvb2sgPSBhc3luYyAoZSkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb2sgdG8gZGVsZXRlOiAnK2Jvb2tOYW1lKycgd2l0aCBpZDogJytib29rSUQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IGRlbGV0ZWQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MvJytib29rSUQse1xyXG4gICAgICAgICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3NcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzLycrYm9va0lELHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDpcIkRFTEVURVwiXHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICBzZXRCb29rTmFtZShlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzZXRCb29rSUQoZS50YXJnZXQuaWQpO1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IYW5kbGUgcGFnZSBzd2l0Y2ggZm9yIGhlYWRlciBpY29uc1xyXG4gICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HbyB0byBzZWN0aW9uIHRvIGNyZWF0ZSBuZXcgbGlzdGluZ1xyXG4gICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUtcGFnZSc+XHJcblxyXG4gICAgICAgICAgICB7LyogTmF2IGJhciAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JlZXRpbmctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpYnJhcnktaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGV0dGVyU3BhY2luZzonMXB4J319PjxiPjx1PntmaXJzdG5hbWV9J3MgTGlicmFyeTwvdT48L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+WW91ciBwZXJzb25hbCBib29rIHBvc3RzLiBZb3UgbWF5IGVkaXQgb3IgZGVsZXRlIHRob3NlIHRoYXQgaGF2ZSBiZWVuIHNvbGQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2Jvb2tzLm1hcCggYm9vayA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy92YXIgaW1hZ2VCYXNlNjQgPSBib29rLmltYWdlRnJvbnQuY29udGVudFR5cGU7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZURhdGE7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9vayk7XHJcbiAgICAgICAgICAgIGlmIChib29rLmltYWdlRnJvbnQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2suaW1hZ2VGcm9udC5jb250ZW50VHlwZSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gYm9vay5pbWFnZUZyb250LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWFnZURhdGEpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGVuZ3RoOiAnKyBpbWFnZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhPSdld2VmZndmJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2staXRlbS1zZWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLl9pZH0gY2xhc3NOYW1lPSdib29rLWl0ZW0tcHJvZmlsZSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjEtaW1hZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VEYXRhfSAgc3R5bGU9e3sgd2lkdGg6JzEwMHB4JywgaGVpZ2h0OicxMDBweCcsIGJvcmRlclJhZGl1czonMjBweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xLWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj57Ym9vay50aXRsZX08L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9vay5hdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kNTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMtc2VjdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2Vzcycgc3R5bGU9e3sgd2lkdGg6JzEwMHB4JywgaGVpZ2h0Oic0NXB4J319PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zZWNvbmRhcnknIHN0eWxlPXt7IHdpZHRoOicxMDBweCcsIGhlaWdodDonNDVweCd9fSBvbkNsaWNrPXtoYW5kbGVEZWxldGV9IGlkPXtib29rLl9pZH0gbmFtZT17Ym9vay50aXRsZX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5teXByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKG15dGl0bGUpID0+e1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgLy9odHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB0aXRsZTogbXl0aXRsZS5xdWVyeS5teXRpdGxlLFxyXG4gICAgICAgICAgICBhdXRob3I6IG15dGl0bGUucXVlcnkuYXV0aG9yXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJueyBib29rczogZGF0YSB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBteXByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==