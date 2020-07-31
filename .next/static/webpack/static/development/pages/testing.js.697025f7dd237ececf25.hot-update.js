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
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books' + bookID, {
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
              window.location.reload(false);

            case 10:
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
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 108,
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
      lineNumber: 110,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, "Firstname: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, "title: ", mytitle), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, "Author: ", author), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 46
    }
  }, "Book name below.")))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      console.log('length: ' + imageData.length); //var myURL = book.imageFront.data;
      //let buff = new Buffer(myURL)
      //base64data = buff.toString('base64');
      //console.log(base64data);
      //const myImage = 'data:image/png;base64,'+base64data;
      //console.log('str data: '+base64data.length);
      //console.log('type: '+ book.imageFront.contentType);
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
        lineNumber: 166,
        columnNumber: 25
      }
    }, __jsx("div", {
      key: book._id,
      className: "book-item-profile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "section1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "section1-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
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
        lineNumber: 172,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: "section1-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 33
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 37
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 40
      }
    }, book.title)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 37
      }
    }, book.author), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 37
      }
    }, "$50"))), __jsx("div", {
      className: "section2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "buttons-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 33
      }
    }, __jsx("button", {
      className: "btn btn-success",
      style: {
        width: '100px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 33
      }
    }, "Edit"), __jsx("button", {
      className: "btn btn-warning",
      style: {
        width: '100px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsInVzZVN0YXRlIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJib29rTmFtZSIsInNldEJvb2tOYW1lIiwiYm9va0lEIiwic2V0Qm9va0lEIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGVsZXRlQm9vayIsImUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJkZWxldGVkIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGUiLCJ0YXJnZXQiLCJteVByb2ZpbGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJteUJvb2tzIiwiU2VhcmNoIiwibWFwIiwiYm9vayIsImltYWdlRGF0YSIsImJhc2U2NGRhdGEiLCJpbWFnZUZyb250IiwiY29udGVudFR5cGUiLCJkYXRhIiwibGVuZ3RoIiwiX2lkIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImhlYWRlcnMiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLDhEQUFVLElBQUMsZ0JBQXlFO0FBQUE7O0FBQUEsK0JBQXRFQyxNQUFzRSxDQUEzREMsS0FBMkQ7QUFBQSxNQUFwREMsSUFBb0QscUJBQXBEQSxJQUFvRDtBQUFBLE1BQTlDQyxFQUE4QyxxQkFBOUNBLEVBQThDO0FBQUEsTUFBMUNDLFNBQTBDLHFCQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsT0FBK0IscUJBQS9CQSxPQUErQjtBQUFBLE1BQXRC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ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0aW5nLmpzLjY5NzAyNWY3ZGQyMzdlY2VjZjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vR2V0dGluZyBib29rIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgQ29uZmlybSwgQnV0dG8sIExvYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbXlwcm9maWxlID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBteXRpdGxlLCBhdXRob3J9fSwgYm9va3N9ICkgPT4ge1xyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Jvb2tOYW1lLCBzZXRCb29rTmFtZV0gPSB1c2VTdGF0ZSgnbnVsbCcpO1xyXG4gICAgY29uc3QgW2Jvb2tJRCwgc2V0Qm9va0lEXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0RlbGV0aW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJvb2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNEZWxldGluZ10pXHJcblxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJvb2sgPSBhc3luYyAoZSkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Jvb2sgdG8gZGVsZXRlOiAnK2Jvb2tOYW1lKycgd2l0aCBpZDogJytib29rSUQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IGRlbGV0ZWQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MvJytib29rSUQse1xyXG4gICAgICAgICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3NcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJytib29rSUQse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCJcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICBzZXRCb29rTmFtZShlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzZXRCb29rSUQoZS50YXJnZXQuaWQpO1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IYW5kbGUgcGFnZSBzd2l0Y2ggZm9yIGhlYWRlciBpY29uc1xyXG4gICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9HbyB0byBzZWN0aW9uIHRvIGNyZWF0ZSBuZXcgbGlzdGluZ1xyXG4gICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUtcGFnZSc+XHJcbiAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JlZXRpbmctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPklkOiB7aWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0bmFtZToge2ZpcnN0bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+dGl0bGU6IHtteXRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BdXRob3I6IHthdXRob3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZpbmQgeW91ciBib29rIGJ5IGVudGVyaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgPGI+QXV0aG9yPC9iPiBvciA8Yj5Cb29rIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlbG93LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7Ym9va3MubWFwKCBib29rID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3ZhciBpbWFnZUJhc2U2NCA9IGJvb2suaW1hZ2VGcm9udC5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgdmFyIGltYWdlRGF0YTtcclxuICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib29rKTtcclxuICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGg6ICcrIGltYWdlRGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFyIG15VVJMID0gYm9vay5pbWFnZUZyb250LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL2xldCBidWZmID0gbmV3IEJ1ZmZlcihteVVSTClcclxuICAgICAgICAgICAgICAgIC8vYmFzZTY0ZGF0YSA9IGJ1ZmYudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhiYXNlNjRkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgbXlJbWFnZSA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJytiYXNlNjRkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RyIGRhdGE6ICcrYmFzZTY0ZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndHlwZTogJysgYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGE9J2V3ZWZmd2YnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGknKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1pdGVtLXNlY3Rpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suX2lkfSBjbGFzc05hbWU9J2Jvb2staXRlbS1wcm9maWxlJz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMS1pbWFnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZURhdGF9ICBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzEwMHB4JywgYm9yZGVyUmFkaXVzOicyMHB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjEtaW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPntib29rLnRpdGxlfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQ1MDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9ucy1zZWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzJyBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzUwcHgnfX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXdhcm5pbmcnIHN0eWxlPXt7IHdpZHRoOicxMDBweCcsIGhlaWdodDonNTBweCd9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbm15cHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAobXl0aXRsZSkgPT57XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcclxuICAgICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3NcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBteXRpdGxlLnF1ZXJ5Lm15dGl0bGUsXHJcbiAgICAgICAgICAgIGF1dGhvcjogbXl0aXRsZS5xdWVyeS5hdXRob3JcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm57IGJvb2tzOiBkYXRhIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15cHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9