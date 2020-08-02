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

var NewBook = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(_c = _s(function (_ref) {
  _s();

  var _ref$router$query = _ref.router.query,
      name = _ref$router$query.name,
      id = _ref$router$query.id,
      firstname = _ref$router$query.firstname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    title: '',
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
      lineNumber: 217,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
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
      lineNumber: 226,
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
      lineNumber: 228,
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
      lineNumber: 230,
      columnNumber: 21
    }
  }))), __jsx("div", {
    style: {
      marginTop: '65px',
      fontSize: '18px',
      alignSelf: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 12
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 83
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
      lineNumber: 248,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: prevImage,
    alt: "default-image",
    className: "image-preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
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
      lineNumber: 250,
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
      lineNumber: 251,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
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
      lineNumber: 262,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
      lineNumber: 272,
      columnNumber: 17
    }
  })), __jsx("label", {
    htmlFor: "file-upload",
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }
  }, "POST"))));
}, "f+/KVJyFvrHYAVXZQAByHNgbt/I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
}));
_c2 = NewBook;
/* harmony default export */ __webpack_exports__["default"] = (NewBook);

var _c, _c2;

$RefreshReg$(_c, "NewBook$withRouter");
$RefreshReg$(_c2, "NewBook");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiTmV3Qm9vayIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJldkltYWdlIiwic2V0UHJldkltYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNyZWF0ZUJvb2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJhbGlnblNlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUExQjs7QUFFQSxJQUFNQyxP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ZXZlbG9wbWVudFxccGFnZXNcXHRlc3RpbmcuanMuMGQyN2RhOTljMDdlMjI2OTk5ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuLy9JbWFnZSByZXNpemVcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcclxuXHJcbmNvbnN0IGZpbGVVcGxvYWQgPSByZXF1aXJlKCdmdWN0YmFzZTY0Jyk7XHJcblxyXG5jb25zdCBOZXdCb29rID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lfX19ICkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTonJywgYXV0aG9yOicnLCBvd25lcklEOicnLCBvd25lck5hbWU6JycsIGltYWdlRnJvbnQ6Jyd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgLy9zdGF0ZSBvZiB0aGUgcHJldmlldyBpbWFnZVxyXG4gICAgY29uc3QgW3ByZXZJbWFnZSwgc2V0UHJldkltYWdlXSA9IHVzZVN0YXRlKCcvc3RhdGljL2RlZmF1bHQtaW1hZ2Uuc3ZnJyk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3VibWl0dGluZyl7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0wKXtcclxuICAgICAgICAgICAgICAgIC8vYm9va21hdGNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCgnTmV3IGJvb2sgY3JlYXRlZCcpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNyZWF0ZUJvb2soKTtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogZm9ybS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZm9ybS5hdXRob3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZXJyb3JzXSlcclxuXHJcblxyXG4gICAgLy9DcmVhdGUgbmV3IGJvb2sgcG9zdFxyXG4gICAgY29uc3QgY3JlYXRlQm9vayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xyXG4gICAgICAgICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL1JlZGlyZWN0IHRvIHByb2ZpbGVcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0uaW1hZ2VGcm9udClcclxuXHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgb3duZXJJRDogaWQsXHJcbiAgICAgICAgICAgICAgICAgb3duZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHsgXHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVyciA9IHt9O1xyXG5cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwYWdlIHN3aXRjaCBmb3IgaGVhZGVyIGljb25zXHJcbiAgICAgICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvL0dvIHRvIHNlY3Rpb24gdG8gY3JlYXRlIG5ldyBsaXN0aW5nXHJcbiAgICAgICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9IYW5kbGUgaW1hZ2UgdXBsb2FkXHJcbiAgICAgICAgY29uc3QgaW1hZ2UxVXBsb2FkID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgdmFyIGZpbGVJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgICAgICBmaWxlSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYgKGZpbGVJbnB1dCkge1xyXG4gICAgICAgICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgJ3BuZycsXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdXJpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVyaSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL1VwZGF0ZSBmb3JtIHdpdGggbmV3IGltYWdlIGRhdGFcclxuICAgICAgICAgICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgaW1hZ2VGcm9udDp7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHVyaSwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL1VwZGF0ZSBpbWFnZSBwcmV2aWV3XHJcbiAgICAgICAgICAgIHNldFByZXZJbWFnZSh1cmkpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdiYXNlNjQnXHJcblxyXG4gICAgICAgICAgICk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdCb29rLXBhZ2UnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9mb3VyLXNxdWFyZS5wbmdcIiBhbHQ9XCJteSBib29rc1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlQcm9maWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e1NlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOic2NXB4JywgZm9udFNpemU6JzE4cHgnLCBhbGlnblNlbGY6J2NlbnRlcicgfX0+PHA+QWRkIGEgbmV3IGJvb2sgcG9zdGluZy48L3A+PC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nY3JlYXRlLWJvb2stZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgbWFyZ2luVG9wOiczJScgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9e3ByZXZJbWFnZX0gYWx0PSdkZWZhdWx0LWltYWdlJyBjbGFzc05hbWU9J2ltYWdlLXByZXZpZXcnLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIiBzdHlsZT17e21hcmdpblRvcDonOCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbmV3LWJvb2staW5wdXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYm9vayB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbmV3LWJvb2staW5wdXRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nYXV0aG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1maWxlLWJ0bic+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbnB1dC1maWxlLWJ0bidcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtpbWFnZTFVcGxvYWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGUtdXBsb2FkXCIgY2xhc3NOYW1lPVwiaW5wdXQtZmlsZS1idG5cIiA+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXktYnRuXCI+UE9TVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0Jvb2s7Il0sInNvdXJjZVJvb3QiOiIifQ==