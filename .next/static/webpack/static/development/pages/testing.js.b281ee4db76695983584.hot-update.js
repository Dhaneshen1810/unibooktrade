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
      lineNumber: 230,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-greeting",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "greeting-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/icons/sign-out.png",
    alt: "my image",
    className: "my-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "my-icon-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
      lineNumber: 239,
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
      lineNumber: 241,
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
      lineNumber: 243,
      columnNumber: 21
    }
  }))), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  }, "Name: ", name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, "firstName: ", firstname), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, "Id: ", id), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/default-image.svg",
    alt: "default-image",
    className: "image-preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
      lineNumber: 266,
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
      lineNumber: 267,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "form-group my-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
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
      lineNumber: 278,
      columnNumber: 17
    }
  }), __jsx("label", {
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
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
      lineNumber: 288,
      columnNumber: 17
    }
  })), __jsx("label", {
    htmlFor: "file-upload",
    className: "input-file-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-primary my-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiTmV3Qm9vayIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJldkltYWdlIiwic2V0UHJldkltYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNyZWF0ZUJvb2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBMUI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHQyw4REFBVSxTQUFDLGdC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cGFnZXNcXHRlc3RpbmcuanMuYjI4MWVlNGRiNzY2OTU5ODM1ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuLy9JbWFnZSByZXNpemVcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcclxuXHJcbmNvbnN0IGZpbGVVcGxvYWQgPSByZXF1aXJlKCdmdWN0YmFzZTY0Jyk7XHJcblxyXG5jb25zdCBOZXdCb29rID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lfX19ICkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTonJywgYXV0aG9yOicnLCBvd25lcklEOicnLCBvd25lck5hbWU6JycsIGltYWdlRnJvbnQ6Jyd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgLy9zdGF0ZSBvZiB0aGUgcHJldmlldyBpbWFnZVxyXG4gICAgY29uc3QgW3ByZXZJbWFnZSwgc2V0UHJldkltYWdlXSA9IHVzZVN0YXRlKCcvc3RhdGljL2RlZmF1bHQtaW1hZ2Uuc3ZnJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1N1Ym1pdHRpbmcpe1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09MCl7XHJcbiAgICAgICAgICAgICAgICAvL2Jvb2ttYXRjaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ05ldyBib29rIGNyZWF0ZWQnKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVCb29rKCk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2Jvb2tsaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6IGZvcm0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGZvcm0uYXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Vycm9yc10pXHJcblxyXG5cclxuICAgIC8vQ3JlYXRlIG5ldyBib29rIHBvc3RcclxuICAgIGNvbnN0IGNyZWF0ZUJvb2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcclxuICAgICAgICAgICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBwcm9maWxlXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmltYWdlRnJvbnQpXHJcblxyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgIG93bmVySUQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgIG93bmVyTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGVycnMgPSB2YWxpZGF0ZSgpO1xyXG4gICAgICAgIHNldEVycm9ycyhlcnJzKTtcclxuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7IFxyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnIgPSB7fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy9IYW5kbGUgcGFnZSBzd2l0Y2ggZm9yIGhlYWRlciBpY29uc1xyXG4gICAgICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy9HbyB0byBzZWN0aW9uIHRvIGNyZWF0ZSBuZXcgbGlzdGluZ1xyXG4gICAgICAgIGNvbnN0IG15Qm9va3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSGFuZGxlIGltYWdlIHVwbG9hZFxyXG4gICAgICAgIGNvbnN0IGltYWdlMVVwbG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkJyk7XHJcblxyXG4gICAgICAgICAgICBmaWxlVXBsb2FkKGUpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2lkdGg6ICcrIGRhdGEud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0NvbnZlcnQgaW1hZ2UgdG8gYmFzZSA2NFxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGRhdGEuYmFzZTY0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBzaXplOiAnK2RhdGEubGVuZ3RoKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgaW1hZ2VGcm9udDp7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0ciwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuIH0pXHJcblxyXG4gICAgICAgICovXHJcbiAgICAgICB2YXIgZmlsZUlucHV0ID0gZmFsc2U7XHJcbiAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pe1xyXG4gICAgICAgICAgIGZpbGVJbnB1dCA9IHRydWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgUmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAncG5nJyxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB1cmkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJpKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgaW1hZ2VGcm9udDp7XHJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHVyaSwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdiYXNlNjQnXHJcblxyXG4gICAgICAgICAgICk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXdCb29rLXBhZ2UnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1ncmVldGluZyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9mb3VyLXNxdWFyZS5wbmdcIiBhbHQ9XCJteSBib29rc1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlQcm9maWxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e1NlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxwPk5hbWU6IHtuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+Zmlyc3ROYW1lOiB7Zmlyc3RuYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Qb3N0IGEgYm9vay5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjcmVhdGUtYm9vay1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6JzMlJyB9fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZGVmYXVsdC1pbWFnZS5zdmdcIiBhbHQ9J2RlZmF1bHQtaW1hZ2UnIGNsYXNzTmFtZT0naW1hZ2UtcHJldmlldycvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdXRob3InXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC1maWxlc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ltYWdlMVVwbG9hZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9XCJpbnB1dC1maWxlLWJ0blwiID5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteS1idG5cIj5QT1NUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Qm9vazsiXSwic291cmNlUm9vdCI6IiJ9