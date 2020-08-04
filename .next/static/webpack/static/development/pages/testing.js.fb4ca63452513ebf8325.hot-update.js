webpackHotUpdate("static\\development\\pages\\testing.js",{

/***/ "./pages/testing.js":
/*!**************************!*\
  !*** ./pages/testing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_9__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\testing.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 //Image resize



var fileUpload = __webpack_require__(/*! fuctbase64 */ "./node_modules/fuctbase64/index.js");

var EditBook = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_c = _s(function (_ref) {
  _s();

  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstname = _ref$router$query.firstname,
      bookID = _ref$router$query.bookID,
      books = _ref.books;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: books[0].title,
    author: '',
    ownerID: '',
    ownerName: '',
    imageFront: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      errors = _useState3[0],
      setErrors = _useState3[1]; //state of the preview image


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('/static/default-image.svg'),
      prevImage = _useState4[0],
      setPrevImage = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  console.log('Test');
  console.log(books[0].title);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        //bookmatch();
        //alert('New book created')
        createBook();
        /*
        Router.push({
            pathname: '/booklist',
            query: { 
                    mytitle: form.title,
                    author: form.author
                    
            }
        });*/
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]); //Create new book post

  var createBook = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books', {
                //const res = await fetch('https://unibooktrade.vercel.app/api/books', {
                method: 'POST',
                headers: {
                  "Accept": 'application/json',
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
              });

            case 3:
              res = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function createBook() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(form.imageFront);
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      ownerID: id,
      ownerName: name
    }));
    var errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  var handleChange = function handleChange(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var validate = function validate() {
    var err = {};
    return err;
  }; //Handle page switch for header icons


  var myProfile = function myProfile() {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
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
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
      pathname: '/new',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  };

  var Search = function Search() {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
      pathname: '/posts',
      query: {
        id: id,
        name: name,
        firstname: firstname
      }
    });
  }; //Handle image upload


  var image1Upload = function image1Upload(e) {
    var fileInput = false;

    if (e.target.files[0]) {
      fileInput = true;
    }

    if (fileInput) {
      react_image_file_resizer__WEBPACK_IMPORTED_MODULE_9___default.a.imageFileResizer(event.target.files[0], 300, 300, 'png', 100, 0, function (uri) {
        console.log(uri); //Update form with new image data

        setForm(_objectSpread(_objectSpread({}, form), {}, {
          imageFront: {
            data: uri,
            contentType: 'image/png'
          }
        })); //Update image preview

        setPrevImage(uri);
      }, 'base64');
    }
  };

  return __jsx("div", {
    className: "newBook-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
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
      lineNumber: 232,
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
      lineNumber: 234,
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
      lineNumber: 236,
      columnNumber: 21
    }
  }))), __jsx("div", {
    style: {
      marginTop: '65px',
      fontSize: '18px',
      textAlign: 'center',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 97
    }
  }, "Add a new book posting.")))), __jsx("form", {
    className: "create-book-form",
    onSubmit: handleSubmit,
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: prevImage,
    alt: "default-image",
    className: "image-preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "form-group my-group",
    style: {
      marginTop: '8%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control new-book-input",
    id: "exampleInputEmail1",
    placeholder: "Enter book title",
    name: "title",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control new-book-input",
    placeholder: "Enter Author",
    name: "author",
    onChange: handleChange,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "file",
    name: "file",
    id: "input-files",
    className: "input-file-btn",
    onChange: image1Upload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  })), __jsx("label", {
    htmlFor: "file-upload",
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, "POST"))));
}, "GtQ2xxN/yVcyJiI98HZQHIP3/v8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
})); //Get the specific book, using its id

_c2 = EditBook;

EditBook.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(myData) {
    var res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('hi world'); //const res = await fetch('https://unibooktrade.vercel.app/api/books', {

            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3000/api/books/bookbyid', {
              headers: {
                id: myData.query.id
              }
            });

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            _yield$res$json = _context2.sent;
            data = _yield$res$json.data;
            console.log('data here');
            console.log(myData.query.bookID);
            console.log(data);
            return _context2.abrupt("return", {
              books: data
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (EditBook);

var _c, _c2;

$RefreshReg$(_c, "EditBook$withRouter");
$RefreshReg$(_c2, "EditBook");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiRWRpdEJvb2siLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rcyIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJldkltYWdlIiwic2V0UHJldkltYWdlIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjcmVhdGVCb29rIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImdldEluaXRpYWxQcm9wcyIsIm15RGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNB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QUE2QixhQUFTLEVBQUMsZ0JBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkUsRUEwQkE7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsd0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkEsQ0FiUixDQS9CQSxDQURKO0FBNkVILENBNVIwQjtBQUFBLFVBU1IvQixxREFUUTtBQUFBLEdBQTNCLEMsQ0ErUkE7O01BL1JNdkIsUTs7QUFnU05BLFFBQVEsQ0FBQ21FLGVBQVQ7QUFBQSwrTEFBMkIsa0JBQU9DLE1BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV2QjVDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBRnVCLENBS3ZCOztBQUx1QjtBQUFBLG1CQU1ETSx5REFBSyxDQUFDLDBDQUFELEVBQTZDO0FBQ3BFRSxxQkFBTyxFQUFFO0FBQ0w1QixrQkFBRSxFQUFFK0QsTUFBTSxDQUFDakUsS0FBUCxDQUFhRTtBQURaO0FBRDJELGFBQTdDLENBTko7O0FBQUE7QUFNYmdDLGVBTmE7QUFBQTtBQUFBLG1CQVdBQSxHQUFHLENBQUNnQyxJQUFKLEVBWEE7O0FBQUE7QUFBQTtBQVdmUixnQkFYZSxtQkFXZkEsSUFYZTtBQWN2QnJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELG1CQUFPLENBQUNDLEdBQVIsQ0FBWTJDLE1BQU0sQ0FBQ2pFLEtBQVAsQ0FBYUksTUFBekI7QUFFQWlCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW9DLElBQVo7QUFqQnVCLDhDQW1CakI7QUFBRXJELG1CQUFLLEVBQUVxRDtBQUFULGFBbkJpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF5QmU3RCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdGluZy5qcy5mYjRjYTYzNDUyNTEzZWJmODMyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG4vL0ltYWdlIHJlc2l6ZVxyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXInO1xyXG5cclxuY29uc3QgZmlsZVVwbG9hZCA9IHJlcXVpcmUoJ2Z1Y3RiYXNlNjQnKTtcclxuXHJcbmNvbnN0IEVkaXRCb29rID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCBib29rSUR9fSwgYm9va3N9ICkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTpib29rc1swXS50aXRsZSwgYXV0aG9yOicnLCBvd25lcklEOicnLCBvd25lck5hbWU6JycsIGltYWdlRnJvbnQ6Jyd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgLy9zdGF0ZSBvZiB0aGUgcHJldmlldyBpbWFnZVxyXG4gICAgY29uc3QgW3ByZXZJbWFnZSwgc2V0UHJldkltYWdlXSA9IHVzZVN0YXRlKCcvc3RhdGljL2RlZmF1bHQtaW1hZ2Uuc3ZnJyk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdUZXN0Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhib29rc1swXS50aXRsZSk7XHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNTdWJtaXR0aW5nKXtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PTApe1xyXG4gICAgICAgICAgICAgICAgLy9ib29rbWF0Y2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdOZXcgYm9vayBjcmVhdGVkJylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQm9vaygpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9ib29rbGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiBmb3JtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBmb3JtLmF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlcnJvcnNdKVxyXG5cclxuXHJcbiAgICAvL0NyZWF0ZSBuZXcgYm9vayBwb3N0XHJcbiAgICBjb25zdCBjcmVhdGVCb29rID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xyXG5cclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gcHJvZmlsZVxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7IFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS5pbWFnZUZyb250KVxyXG5cclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICBvd25lcklEOiBpZCxcclxuICAgICAgICAgICAgICAgICBvd25lck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGxldCBlcnJzID0gdmFsaWRhdGUoKTtcclxuICAgICAgICBzZXRFcnJvcnMoZXJycyk7XHJcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4geyBcclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyID0ge307XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBhZ2Ugc3dpdGNoIGZvciBoZWFkZXIgaWNvbnNcclxuICAgICAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vR28gdG8gc2VjdGlvbiB0byBjcmVhdGUgbmV3IGxpc3RpbmdcclxuICAgICAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9uZXcnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0hhbmRsZSBpbWFnZSB1cGxvYWRcclxuICAgICAgICBjb25zdCBpbWFnZTFVcGxvYWQgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICB2YXIgZmlsZUlucHV0ID0gZmFsc2U7XHJcbiAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICAgICAgIGZpbGVJbnB1dCA9IHRydWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgUmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAncG5nJyxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB1cmkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vVXBkYXRlIGZvcm0gd2l0aCBuZXcgaW1hZ2UgZGF0YVxyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICBpbWFnZUZyb250OntcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YTogdXJpLCBcclxuICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vVXBkYXRlIGltYWdlIHByZXZpZXdcclxuICAgICAgICAgICAgc2V0UHJldkltYWdlKHVyaSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2Jhc2U2NCdcclxuXHJcbiAgICAgICAgICAgKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld0Jvb2stcGFnZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6JzY1cHgnLCBmb250U2l6ZTonMThweCcsIHRleHRBbGlnbjonY2VudGVyJywgd2lkdGg6JzEwMCUnIH19PjxwPkFkZCBhIG5ldyBib29rIHBvc3RpbmcuPC9wPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NyZWF0ZS1ib29rLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IG1hcmdpblRvcDonMyUnIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcmV2SW1hZ2V9IGFsdD0nZGVmYXVsdC1pbWFnZScgY2xhc3NOYW1lPSdpbWFnZS1wcmV2aWV3Jy8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG5ldy1ib29rLWlucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJvb2sgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG5ldy1ib29rLWlucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2F1dGhvcidcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naW5wdXQtZmlsZS1idG4nPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LWZpbGVzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtZmlsZS1idG4nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aW1hZ2UxVXBsb2FkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzTmFtZT1cImlucHV0LWZpbGUtYnRuXCIgPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlBPU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSk7XHJcblxyXG5cclxuLy9HZXQgdGhlIHNwZWNpZmljIGJvb2ssIHVzaW5nIGl0cyBpZFxyXG5FZGl0Qm9vay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAobXlEYXRhKSA9PntcclxuXHJcbiAgICBjb25zb2xlLmxvZygnaGkgd29ybGQnKTtcclxuXHJcblxyXG4gICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MvYm9va2J5aWQnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBpZDogbXlEYXRhLnF1ZXJ5LmlkLFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSBoZXJlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhteURhdGEucXVlcnkuYm9va0lEKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm57IGJvb2tzOiBkYXRhIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRCb29rOyJdLCJzb3VyY2VSb290IjoiIn0=