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
        height: '45px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbIm15cHJvZmlsZSIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJib29rcyIsInVzZVN0YXRlIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJib29rTmFtZSIsInNldEJvb2tOYW1lIiwiYm9va0lEIiwic2V0Qm9va0lEIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZGVsZXRlQm9vayIsImUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJkZWxldGVkIiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0IiwibXlQcm9maWxlIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibXlCb29rcyIsIlNlYXJjaCIsIm1hcCIsImJvb2siLCJpbWFnZURhdGEiLCJiYXNlNjRkYXRhIiwiaW1hZ2VGcm9udCIsImNvbnRlbnRUeXBlIiwiZGF0YSIsImxlbmd0aCIsIl9pZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJoZWFkZXJzIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyw4REFBVSxJQUFDLGdCQUF5RTtBQUFBOztBQUFBLCtCQUF0RUMsTUFBc0UsQ0FBM0RDLEtBQTJEO0FBQUEsTUFBcERDLElBQW9ELHFCQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q0MsRUFBOEMscUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxTQUEwQyxxQkFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLE9BQStCLHFCQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsTUFBc0IscUJBQXRCQSxNQUFzQjtBQUFBLE1B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YnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRlc3RpbmcuanMuNzBhNDk0NTI4ZjdmZDdlNjU2ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy9HZXR0aW5nIGJvb2sgZGF0YSBmcm9tIGRhdGFiYXNlXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyBDb25maXJtLCBCdXR0bywgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBteXByb2ZpbGUgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWUsIG15dGl0bGUsIGF1dGhvcn19LCBib29rc30gKSA9PiB7XHJcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYm9va05hbWUsIHNldEJvb2tOYW1lXSA9IHVzZVN0YXRlKCdudWxsJyk7XHJcbiAgICBjb25zdCBbYm9va0lELCBzZXRCb29rSURdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRGVsZXRpbmcpIHtcclxuICAgICAgICAgICAgZGVsZXRlQm9vaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0RlbGV0aW5nXSlcclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlQm9vayA9IGFzeW5jIChlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9vayB0byBkZWxldGU6ICcrYm9va05hbWUrJyB3aXRoIGlkOiAnK2Jvb2tJRCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vY29uc3QgZGVsZXRlZCA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcy8nK2Jvb2tJRCx7XHJcbiAgICAgICAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rc1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MvJytib29rSUQse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCJcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgICAgIHNldEJvb2tOYW1lKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHNldEJvb2tJRChlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0hhbmRsZSBwYWdlIHN3aXRjaCBmb3IgaGVhZGVyIGljb25zXHJcbiAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dvIHRvIHNlY3Rpb24gdG8gY3JlYXRlIG5ldyBsaXN0aW5nXHJcbiAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZS1wYWdlJz5cclxuICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cD5OYW1lOiB7bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3RuYW1lOiB7Zmlyc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD50aXRsZToge215dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkF1dGhvcjoge2F1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RmluZCB5b3VyIGJvb2sgYnkgZW50ZXJpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZSA8Yj5BdXRob3I8L2I+IG9yIDxiPkJvb2sgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3cuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vdmFyIGltYWdlQmFzZTY0ID0gYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2spO1xyXG4gICAgICAgICAgICBpZiAoYm9vay5pbWFnZUZyb250KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib29rLmltYWdlRnJvbnQuY29udGVudFR5cGUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IGJvb2suaW1hZ2VGcm9udC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VEYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlbmd0aDogJysgaW1hZ2VEYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy92YXIgbXlVUkwgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vbGV0IGJ1ZmYgPSBuZXcgQnVmZmVyKG15VVJMKVxyXG4gICAgICAgICAgICAgICAgLy9iYXNlNjRkYXRhID0gYnVmZi50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJhc2U2NGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBteUltYWdlID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnK2Jhc2U2NGRhdGE7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdHIgZGF0YTogJytiYXNlNjRkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0eXBlOiAnKyBib29rLmltYWdlRnJvbnQuY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YT0nZXdlZmZ3Zic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWl0ZW0tc2VjdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtLXByb2ZpbGUnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24xLWltYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlRGF0YX0gIHN0eWxlPXt7IHdpZHRoOicxMDBweCcsIGhlaWdodDonMTAwcHgnLCBib3JkZXJSYWRpdXM6JzIwcHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uMS1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+e2Jvb2sudGl0bGV9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Jvb2suYXV0aG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JDUwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zLXNlY3Rpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MnIHN0eWxlPXt7IHdpZHRoOicxMDBweCcsIGhlaWdodDonNDVweCd9fT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc2Vjb25kYXJ5JyBzdHlsZT17eyB3aWR0aDonMTAwcHgnLCBoZWlnaHQ6JzQ1cHgnfX0gb25DbGljaz17aGFuZGxlRGVsZXRlfSBpZD17Ym9vay5faWR9IG5hbWU9e2Jvb2sudGl0bGV9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxubXlwcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChteXRpdGxlKSA9PntcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xyXG4gICAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rc1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IG15dGl0bGUucXVlcnkubXl0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yOiBteXRpdGxlLnF1ZXJ5LmF1dGhvclxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybnsgYm9va3M6IGRhdGEgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlwcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=