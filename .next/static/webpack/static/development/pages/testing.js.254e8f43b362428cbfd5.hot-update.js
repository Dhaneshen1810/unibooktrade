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
      marginTop: '30px',
      fontSize: '16px'
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
      columnNumber: 63
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90ZXN0aW5nLmpzIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJyZXF1aXJlIiwiTmV3Qm9vayIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsIm5hbWUiLCJpZCIsImZpcnN0bmFtZSIsInVzZVN0YXRlIiwidGl0bGUiLCJhdXRob3IiLCJvd25lcklEIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJldkltYWdlIiwic2V0UHJldkltYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNyZWF0ZUJvb2siLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJzIiwidmFsaWRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVyciIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJteUJvb2tzIiwiU2VhcmNoIiwiaW1hZ2UxVXBsb2FkIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsImV2ZW50IiwidXJpIiwiZGF0YSIsImNvbnRlbnRUeXBlIiwibWFyZ2luVG9wIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUExQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUdDLDhE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QUFDLG9CQUhQO0FBSUksZUFBVyxFQUFDLGtCQUpoQjtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksWUFBUSxNQU5aO0FBT0ksWUFBUSxFQUFFcEIsWUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsQ0FGQSxFQWFRO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksYUFBUyxFQUFDLDZCQUZkO0FBR0ksZUFBVyxFQUFDLGNBSGhCO0FBSUksUUFBSSxFQUFDLFFBSlQ7QUFLSSxZQUFRLEVBQUVBLFlBTGQ7QUFNSSxZQUFRLE1BTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBVUE7QUFBTyxhQUFTLEVBQUMsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUNBLFFBQUksRUFBQyxNQURMO0FBRUEsUUFBSSxFQUFDLE1BRkw7QUFHQSxNQUFFLEVBQUMsYUFISDtBQUlBLGFBQVMsRUFBQyxnQkFKVjtBQUtBLFlBQVEsRUFBRVcsWUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FWQSxFQW9CRjtBQUFPLFdBQU8sRUFBQyxhQUFmO0FBQTZCLGFBQVMsRUFBQyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRSxFQTBCQTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyx3QkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCQSxDQWJSLENBL0JBLENBREo7QUE2RUgsQ0F0UnlCO0FBQUEsVUFTUC9CLHFEQVRPO0FBQUEsR0FBMUI7TUFBTXJCLE87QUF3UlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0ZXN0aW5nLmpzLjI1NGU4ZjQzYjM2MjQyOGNiZmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbi8vSW1hZ2UgcmVzaXplXHJcbmltcG9ydCBSZXNpemVyIGZyb20gJ3JlYWN0LWltYWdlLWZpbGUtcmVzaXplcic7XHJcblxyXG5jb25zdCBmaWxlVXBsb2FkID0gcmVxdWlyZSgnZnVjdGJhc2U2NCcpO1xyXG5cclxuY29uc3QgTmV3Qm9vayA9IHdpdGhSb3V0ZXIoKHsgcm91dGVyOiAgeyBxdWVyeTp7bmFtZSwgaWQsIGZpcnN0bmFtZX19fSApID0+IHtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdGl0bGU6JycsIGF1dGhvcjonJywgb3duZXJJRDonJywgb3duZXJOYW1lOicnLCBpbWFnZUZyb250OicnfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIC8vc3RhdGUgb2YgdGhlIHByZXZpZXcgaW1hZ2VcclxuICAgIGNvbnN0IFtwcmV2SW1hZ2UsIHNldFByZXZJbWFnZV0gPSB1c2VTdGF0ZSgnL3N0YXRpYy9kZWZhdWx0LWltYWdlLnN2ZycpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1N1Ym1pdHRpbmcpe1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09MCl7XHJcbiAgICAgICAgICAgICAgICAvL2Jvb2ttYXRjaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ05ldyBib29rIGNyZWF0ZWQnKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVCb29rKCk7XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2Jvb2tsaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15dGl0bGU6IGZvcm0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGZvcm0uYXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Vycm9yc10pXHJcblxyXG5cclxuICAgIC8vQ3JlYXRlIG5ldyBib29rIHBvc3RcclxuICAgIGNvbnN0IGNyZWF0ZUJvb2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib29rcycsIHtcclxuICAgICAgICAgICAgLy9jb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91bmlib29rdHJhZGUudmVyY2VsLmFwcC9hcGkvYm9va3MnLCB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9SZWRpcmVjdCB0byBwcm9maWxlXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL215cHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHsgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmltYWdlRnJvbnQpXHJcblxyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgIG93bmVySUQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgIG93bmVyTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgbGV0IGVycnMgPSB2YWxpZGF0ZSgpO1xyXG4gICAgICAgIHNldEVycm9ycyhlcnJzKTtcclxuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7IFxyXG4gICAgICAgIHNldEZvcm0oe1xyXG4gICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlcnIgPSB7fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy9IYW5kbGUgcGFnZSBzd2l0Y2ggZm9yIGhlYWRlciBpY29uc1xyXG4gICAgICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy9HbyB0byBzZWN0aW9uIHRvIGNyZWF0ZSBuZXcgbGlzdGluZ1xyXG4gICAgICAgIGNvbnN0IG15Qm9va3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL25ldycsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSGFuZGxlIGltYWdlIHVwbG9hZFxyXG4gICAgICAgIGNvbnN0IGltYWdlMVVwbG9hZCA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgIHZhciBmaWxlSW5wdXQgPSBmYWxzZTtcclxuICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgICAgICAgZmlsZUlucHV0ID0gdHJ1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGlmIChmaWxlSW5wdXQpIHtcclxuICAgICAgICAgICBSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoXHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICdwbmcnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHVyaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9VcGRhdGUgZm9ybSB3aXRoIG5ldyBpbWFnZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5mb3JtLFxyXG4gICAgICAgICAgICAgICAgIGltYWdlRnJvbnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICBkYXRhOiB1cmksIFxyXG4gICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy9VcGRhdGUgaW1hZ2UgcHJldmlld1xyXG4gICAgICAgICAgICBzZXRQcmV2SW1hZ2UodXJpKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnYmFzZTY0J1xyXG5cclxuICAgICAgICAgICApO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3Qm9vay1wYWdlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stZ3JlZXRpbmcnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JlZXRpbmctdGV4dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3NpZ24tb3V0LnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgY2xhc3NOYW1lPSdteS1pY29uJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pY29uLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL3BsdXMucG5nXCIgYWx0PVwiQWRkIGJvb2tcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215Qm9va3N9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDonMzBweCcsIGZvbnRTaXplOicxNnB4JyB9fT48cD5BZGQgYSBuZXcgYm9vayBwb3N0aW5nLjwvcD48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjcmVhdGUtYm9vay1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6JzMlJyB9fT5cclxuICAgICAgICA8aW1nIHNyYz17cHJldkltYWdlfSBhbHQ9J2RlZmF1bHQtaW1hZ2UnIGNsYXNzTmFtZT0naW1hZ2UtcHJldmlldycvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBteS1ncm91cFwiIHN0eWxlPXt7bWFyZ2luVG9wOic4JSd9fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBib29rIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBuZXctYm9vay1pbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdhdXRob3InXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC1maWxlc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LWZpbGUtYnRuJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2ltYWdlMVVwbG9hZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9XCJpbnB1dC1maWxlLWJ0blwiID5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteS1idG5cIj5QT1NUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Qm9vazsiXSwic291cmNlUm9vdCI6IiJ9