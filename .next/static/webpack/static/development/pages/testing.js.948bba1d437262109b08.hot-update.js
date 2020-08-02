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
        mytitle: '',
        author: ''
      }
    });
  };

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
  };

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
    className: "booklist-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
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
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Firstname: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "title: ", mytitle), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Author: ", author), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Find your book by entering the ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, "Author"), " or ", __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 42
    }
  }, "Book name below.")))), __jsx("div", {
    className: "book-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 130,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "item-section1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
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
        lineNumber: 132,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "item-section2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 25
      }
    }, book.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, book.author), __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 37
      }
    }, "Contact ", book.ownerName))));
  })));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbInBvc3RzIiwid2l0aFJvdXRlciIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsImlkIiwiZmlyc3RuYW1lIiwibXl0aXRsZSIsImF1dGhvciIsImJvb2tzIiwidmlld0FsbCIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15UHJvZmlsZSIsIm15Qm9va3MiLCJTZWFyY2giLCJtYXAiLCJib29rIiwiaW1hZ2VEYXRhIiwiaW1hZ2VGcm9udCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50VHlwZSIsImRhdGEiLCJsZW5ndGgiLCJfaWQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0aXRsZSIsIm93bmVyTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwiaGVhZGVycyIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBO0FBS0EsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxDQUFDLGdCQUF5RTtBQUFBLCtCQUF0RUMsTUFBc0UsQ0FBM0RDLEtBQTJEO0FBQUEsTUFBcERDLElBQW9ELHFCQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q0MsRUFBOEMscUJBQTlDQSxFQUE4QztBQUFBLE1BQTFDQyxTQUEwQyxxQkFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLE9BQStCLHFCQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsTUFBc0IscUJBQXRCQSxNQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFHOUY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRWxCQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFdBREY7QUFFUlYsV0FBSyxFQUFFO0FBQ0NJLGVBQU8sRUFBRSxF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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCZXhCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0aW5nLmpzLjk0OGJiYTFkNDM3MjYyMTA5YjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vL0dldHRpbmcgYm9vayBkYXRhIGZyb20gZGF0YWJhc2VcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBwb3N0cyA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0bmFtZSwgbXl0aXRsZSwgYXV0aG9yfX0sIGJvb2tzfSApID0+IHtcclxuICAgIFxyXG5cclxuICAgIC8vIFVzZXIgY2hvb3NlcyB0byB2aWV3IGFsbCBhdmFpbGFibGUgYm9va3NcclxuICAgIGNvbnN0IHZpZXdBbGwgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tsaXN0LXBhZ2UnPlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JlZXRpbmctdGV4dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5GaXJzdG5hbWU6IHtmaXJzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+dGl0bGU6IHtteXRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkF1dGhvcjoge2F1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5GaW5kIHlvdXIgYm9vayBieSBlbnRlcmluZyBcclxuICAgICAgICAgICAgICAgICAgICB0aGUgPGI+QXV0aG9yPC9iPiBvciA8Yj5Cb29rIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb3cuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIHtib29rcy5tYXAoIGJvb2sgPT4ge1xyXG4gICAgICAgICAgICAvL3Byb2Nlc3NpbmcgaW1hZ2UgZGF0YVxyXG4gICAgICAgICAgICB2YXIgaW1hZ2VEYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJvb2suaW1hZ2VGcm9udCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9vay5pbWFnZUZyb250LmNvbnRlbnRUeXBlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBib29rLmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZW5ndGg6ICcrIGltYWdlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIC8vdXNpbmcgZHVtbXkgZGF0YSBpZiBpbWFnZSBkYXRhIGlzIG5vdCBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICBpbWFnZURhdGE9J2V3ZWZmd2YnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5faWR9IGNsYXNzTmFtZT0nYm9vay1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tc2VjdGlvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VEYXRhfSAgc3R5bGU9e3sgd2lkdGg6JzExMHB4JywgaGVpZ2h0OicxMTBweCcsIGJvcmRlclJhZGl1czonMTBweCcsIG1hcmdpblRvcDonMTBweCcsIG1hcmdpbkxlZnQ6JzEwcHgnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tc2VjdGlvbjInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9vay50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib29rLmF1dGhvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPjxiPkNvbnRhY3Qge2Jvb2sub3duZXJOYW1lfTwvYj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxucG9zdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT57XHJcbiAgICBcclxuICAgICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjdHgucXVlcnkubXl0aXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yOiBjdHgucXVlcnkuYXV0aG9yXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJueyBib29rczogZGF0YSB9XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==