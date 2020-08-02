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
      setErrors = _useState3[1];

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
    /*
    console.log('changed');
      fileUpload(e)
    .then((data) => {
        console.log('width: '+ data.width);
        
        //Convert image to base 64
        var str = data.base64;
          console.log('image size: '+data.length)
          setForm({
            ...form,
         imageFront:{
             data: str, 
             contentType: 'image/png'
         }
    })
    })
    */
    var fileInput = false;

    if (e.target.files[0]) {
      fileInput = true;
    }

    if (fileInput) {
      react_image_file_resizer__WEBPACK_IMPORTED_MODULE_9___default.a.imageFileResizer(event.target.files[0], 300, 300, 'png', 100, 0, function (uri) {
        console.log(uri);
        setForm(_objectSpread(_objectSpread({}, form), {}, {
          imageFront: {
            data: uri,
            contentType: 'image/png'
          }
        }));
      }, 'base64');
    }
  };

  return __jsx("div", {
    className: "newBook-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 235,
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
      lineNumber: 237,
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
      lineNumber: 239,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, "firstName: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, "Post a book."))), __jsx("form", {
    className: "create-book-form",
    onSubmit: handleSubmit,
    style: {
      marginTop: '3%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/default-image.svg",
    alt: "default-image",
    className: "image-preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
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
      lineNumber: 262,
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
      lineNumber: 263,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
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
      lineNumber: 274,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
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
      lineNumber: 284,
      columnNumber: 17
    }
  })), __jsx("label", {
    htmlFor: "file-upload",
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }, "Custom Upload"), __jsx("input", {
    id: "file-upload",
    type: "file",
    onChange: image1Upload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, "POST"))));
}, "VR5D+S3OGRrO+RLilG3EaiBAlpQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiTmV3Qm9vayIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNyZWF0ZUJvb2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBMUI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHQyw4REFBVSxTQUFDLGdCQUFpRDtBQUFBOztBQUFBLCtCQUE5Q0MsTUFB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bnRcXHBhZ2VzXFx0ZXN0aW5nLmpzLmJjYzFhNDgxMGRmMWNiNDNiMGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbi8vSW1hZ2UgcmVzaXplXHJcbmltcG9ydCBSZXNpemVyIGZyb20gJ3JlYWN0LWltYWdlLWZpbGUtcmVzaXplcic7XHJcblxyXG5jb25zdCBmaWxlVXBsb2FkID0gcmVxdWlyZSgnZnVjdGJhc2U2NCcpO1xyXG5cclxuY29uc3QgTmV3Qm9vayA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0bmFtZX19fSApID0+IHtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6JycsIGF1dGhvcjonJywgb3duZXJJRDonJywgb3duZXJOYW1lOicnLCBpbWFnZUZyb250OicnfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3VibWl0dGluZyl7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0wKXtcclxuICAgICAgICAgICAgICAgIC8vYm9va21hdGNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCgnTmV3IGJvb2sgY3JlYXRlZCcpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNyZWF0ZUJvb2soKTtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvYm9va2xpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogZm9ybS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZm9ybS5hdXRob3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbZXJyb3JzXSlcclxuXHJcblxyXG4gICAgLy9DcmVhdGUgbmV3IGJvb2sgcG9zdFxyXG4gICAgY29uc3QgY3JlYXRlQm9vayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jvb2tzJywge1xyXG4gICAgICAgICAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3VuaWJvb2t0cmFkZS52ZXJjZWwuYXBwL2FwaS9ib29rcycsIHtcclxuXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL1JlZGlyZWN0IHRvIHByb2ZpbGVcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4geyBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0uaW1hZ2VGcm9udClcclxuXHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgb3duZXJJRDogaWQsXHJcbiAgICAgICAgICAgICAgICAgb3duZXJOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBsZXQgZXJycyA9IHZhbGlkYXRlKCk7XHJcbiAgICAgICAgc2V0RXJyb3JzKGVycnMpO1xyXG4gICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHsgXHJcbiAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVyciA9IHt9O1xyXG5cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAvL0hhbmRsZSBwYWdlIHN3aXRjaCBmb3IgaGVhZGVyIGljb25zXHJcbiAgICAgICAgY29uc3QgbXlQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvL0dvIHRvIHNlY3Rpb24gdG8gY3JlYXRlIG5ldyBsaXN0aW5nXHJcbiAgICAgICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9IYW5kbGUgaW1hZ2UgdXBsb2FkXHJcbiAgICAgICAgY29uc3QgaW1hZ2UxVXBsb2FkID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGZpbGVVcGxvYWQoZSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aWR0aDogJysgZGF0YS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vQ29udmVydCBpbWFnZSB0byBiYXNlIDY0XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gZGF0YS5iYXNlNjQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIHNpemU6ICcrZGF0YS5sZW5ndGgpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICBpbWFnZUZyb250OntcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RyLCBcclxuICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gfSlcclxuXHJcbiAgICAgICAgKi9cclxuICAgICAgIHZhciBmaWxlSW5wdXQgPSBmYWxzZTtcclxuICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgICAgICAgZmlsZUlucHV0ID0gdHJ1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGlmIChmaWxlSW5wdXQpIHtcclxuICAgICAgICAgICBSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoXHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICdwbmcnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHVyaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmkpXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICBpbWFnZUZyb250OntcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YTogdXJpLCBcclxuICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2Jhc2U2NCdcclxuXHJcbiAgICAgICAgICAgKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ld0Jvb2stcGFnZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbi1ib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaWNvbi1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2ZvdXItc3F1YXJlLnBuZ1wiIGFsdD1cIm15IGJvb2tzXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteVByb2ZpbGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9wbHVzLnBuZ1wiIGFsdD1cIkFkZCBib29rXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtteUJvb2tzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlNlYXJjaFwiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17U2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5maXJzdE5hbWU6IHtmaXJzdG5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5JZDoge2lkfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBvc3QgYSBib29rLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NyZWF0ZS1ib29rLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IG1hcmdpblRvcDonMyUnIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9kZWZhdWx0LWltYWdlLnN2Z1wiIGFsdD0nZGVmYXVsdC1pbWFnZScgY2xhc3NOYW1lPSdpbWFnZS1wcmV2aWV3Jy8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG15LWdyb3VwXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzglJ319PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG5ldy1ib29rLWlucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGJvb2sgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG5ldy1ib29rLWlucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2F1dGhvcidcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naW5wdXQtZmlsZS1idG4nPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LWZpbGVzXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtZmlsZS1idG4nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aW1hZ2UxVXBsb2FkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzTmFtZT1cImlucHV0LWZpbGUtYnRuXCIgPlxyXG4gICAgICAgICAgICAgICAgQ3VzdG9tIFVwbG9hZFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlsZS11cGxvYWRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtpbWFnZTFVcGxvYWR9Lz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG15LWJ0blwiPlBPU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdCb29rOyJdLCJzb3VyY2VSb290IjoiIn0=