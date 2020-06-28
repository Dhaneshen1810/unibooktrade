webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var myID = null;
var myName = null;

var Index = function Index() {
  var handleResponse = function handleResponse(data) {
    console.log(data.id); //var myID = data.id;
    //var myName = data.name
  };

  var handleError = function handleError(error) {
    _this.setState({
      error: error
    });
  };

  return __jsx("div", {
    className: "login-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "MacEwan Book Trade")), __jsx("div", {
    className: "my-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Macewan Book Exchange"), __jsx("div", {
    className: "my-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "Login via facebook and start trading your macEwan books!"), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "1338252696564421",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["LoginButton"], {
    scope: "email",
    onCompleted: handleResponse,
    onError: handleError,
    className: "btn btn-primary btn-fb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Login via Facebook"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 1
    }
  }, "Go to posts"));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteUlEIiwibXlOYW1lIiwiSW5kZXgiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJoYW5kbGVFcnJvciIsImVycm9yIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUlBLElBQUlBLElBQUksR0FBQyxJQUFUO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUVoQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBVTtBQUM3QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csRUFBakIsRUFENkIsQ0FHN0I7QUFDQTtBQUNELEdBTEg7O0FBT0MsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELFdBQUssRUFBTEE7QUFBRixLQUFkO0FBQ0QsR0FGRjs7QUFJQyxTQUNGO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FEQSxFQUlBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKQSxFQUtBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRUFMQSxFQU1BLE1BQUMsK0RBQUQ7QUFBa0IsU0FBSyxFQUFDLGtCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsZUFBVyxFQUFFTixjQUZmO0FBR0UsV0FBTyxFQUFFSyxXQUhYO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLENBREosQ0FOQSxFQWdCSixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkksQ0FERTtBQW9CRCxDQWpDTDs7S0FBTU4sSztBQXFDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ3OWYzZmJlZGY4Y2I3MzQ5MzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcclxuXHJcblxyXG5cclxudmFyIG15SUQ9bnVsbDtcclxudmFyIG15TmFtZSA9IG51bGw7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5pZCk7XHJcblxyXG4gICAgICAgIC8vdmFyIG15SUQgPSBkYXRhLmlkO1xyXG4gICAgICAgIC8vdmFyIG15TmFtZSA9IGRhdGEubmFtZVxyXG4gICAgICB9O1xyXG5cclxuICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1wYWdlJz5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NYWNFd2FuIEJvb2sgVHJhZGU8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J215LXRpdGxlJz5NYWNld2FuIEJvb2sgRXhjaGFuZ2U8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdteS1pbnRybyc+TG9naW4gdmlhIGZhY2Vib29rIGFuZCBzdGFydCB0cmFkaW5nIHlvdXIgbWFjRXdhbiBib29rcyE8L2Rpdj5cclxuICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiMTMzODI1MjY5NjU2NDQyMVwiPlxyXG4gICAgICAgIDxMb2dpbkJ1dHRvblxyXG4gICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNvbXBsZXRlZD17aGFuZGxlUmVzcG9uc2V9XHJcbiAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPkxvZ2luIHZpYSBGYWNlYm9vazwvc3Bhbj5cclxuICAgICAgICA8L0xvZ2luQnV0dG9uPlxyXG4gICAgICA8L0ZhY2Vib29rUHJvdmlkZXI+XHJcbjxMaW5rIGhyZWY9Jy9wb3N0cyc+R28gdG8gcG9zdHM8L0xpbms+XHJcbjwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9