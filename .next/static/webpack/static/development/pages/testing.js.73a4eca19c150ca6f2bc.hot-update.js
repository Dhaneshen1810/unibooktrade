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
    //Update image preview
    setPrevImage(e.target.files[0]);
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
      lineNumber: 214,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 223,
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
      lineNumber: 225,
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
      lineNumber: 227,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, "firstName: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiTmV3Qm9vayIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJldkltYWdlIiwic2V0UHJldkltYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNyZWF0ZUJvb2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZXMiLCJmaWxlSW5wdXQiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBMUI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHQyw4REFBVSxTQUFDLGdC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RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGVzdGluZy5qcy43M2E0ZWNhMTljMTUwY2E2ZjJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG4vL0ltYWdlIHJlc2l6ZVxyXG5pbXBvcnQgUmVzaXplciBmcm9tICdyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXInO1xyXG5cclxuY29uc3QgZmlsZVVwbG9hZCA9IHJlcXVpcmUoJ2Z1Y3RiYXNlNjQnKTtcclxuXHJcbmNvbnN0IE5ld0Jvb2sgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWV9fX0gKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IHRpdGxlOicnLCBhdXRob3I6JycsIG93bmVySUQ6JycsIG93bmVyTmFtZTonJywgaW1hZ2VGcm9udDonJ31cclxuICAgICk7XHJcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICAvL3N0YXRlIG9mIHRoZSBwcmV2aWV3IGltYWdlXHJcbiAgICBjb25zdCBbcHJldkltYWdlLCBzZXRQcmV2SW1hZ2VdID0gdXNlU3RhdGUoJy9zdGF0aWMvZGVmYXVsdC1pbWFnZS5zdmcnKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNTdWJtaXR0aW5nKXtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PTApe1xyXG4gICAgICAgICAgICAgICAgLy9ib29rbWF0Y2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdOZXcgYm9vayBjcmVhdGVkJylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQm9vaygpO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9ib29rbGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiBmb3JtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBmb3JtLmF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtlcnJvcnNdKVxyXG5cclxuXHJcbiAgICAvL0NyZWF0ZSBuZXcgYm9vayBwb3N0XHJcbiAgICBjb25zdCBjcmVhdGVCb29rID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9va3MnLCB7XHJcbiAgICAgICAgICAgIC8vY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdW5pYm9va3RyYWRlLnZlcmNlbC5hcHAvYXBpL2Jvb2tzJywge1xyXG5cclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vUmVkaXJlY3QgdG8gcHJvZmlsZVxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9teXByb2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7IFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS5pbWFnZUZyb250KVxyXG5cclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgICBvd25lcklEOiBpZCxcclxuICAgICAgICAgICAgICAgICBvd25lck5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGxldCBlcnJzID0gdmFsaWRhdGUoKTtcclxuICAgICAgICBzZXRFcnJvcnMoZXJycyk7XHJcbiAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4geyBcclxuICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgLi4uZm9ybSxcclxuICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZXJyID0ge307XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vSGFuZGxlIHBhZ2Ugc3dpdGNoIGZvciBoZWFkZXIgaWNvbnNcclxuICAgICAgICBjb25zdCBteVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXl0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vR28gdG8gc2VjdGlvbiB0byBjcmVhdGUgbmV3IGxpc3RpbmdcclxuICAgICAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9uZXcnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wb3N0cycsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0hhbmRsZSBpbWFnZSB1cGxvYWRcclxuICAgICAgICBjb25zdCBpbWFnZTFVcGxvYWQgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy9VcGRhdGUgaW1hZ2UgcHJldmlld1xyXG4gICAgICAgICAgICBzZXRQcmV2SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgdmFyIGZpbGVJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgICAgICBmaWxlSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYgKGZpbGVJbnB1dCkge1xyXG4gICAgICAgICAgIFJlc2l6ZXIuaW1hZ2VGaWxlUmVzaXplcihcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgJ3BuZycsXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdXJpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVyaSlcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgIGltYWdlRnJvbnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICBkYXRhOiB1cmksIFxyXG4gICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdiYXNlNjQnXHJcblxyXG4gICAgICAgICAgICk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdCb29rLXBhZ2UnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9mb3VyLXNxdWFyZS5wbmdcIiBhbHQ9XCJteSBib29rc1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlQcm9maWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e1NlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxwPk5hbWU6IHtuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+Zmlyc3ROYW1lOiB7Zmlyc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Qb3N0IGEgYm9vay5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjcmVhdGUtYm9vay1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6JzMlJyB9fT5cclxuICAgICAgICA8aW1nIHNyYz17cHJldkltYWdlfSBhbHQ9J2RlZmF1bHQtaW1hZ2UnIGNsYXNzTmFtZT0naW1hZ2UtcHJldmlldycvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdXRob3InXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC1maWxlc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ltYWdlMVVwbG9hZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9XCJpbnB1dC1maWxlLWJ0blwiID5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteS1idG5cIj5QT1NUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Qm9vazsiXSwic291cmNlUm9vdCI6IiJ9