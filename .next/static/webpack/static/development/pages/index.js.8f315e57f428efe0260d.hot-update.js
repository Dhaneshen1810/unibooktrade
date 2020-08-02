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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\danmo\\book-trade\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var myID = null;
var myName = null;

var Index = function Index() {
  var handleResponse = function handleResponse(data) {
    console.log(data);
    var myID = data.profile.id;
    var myName = data.profile.name;
    var firstName = data.profile.first_name;
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
      pathname: '/posts',
      query: {
        name: myName,
        id: myID,
        firstname: firstName
      }
    });
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
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "MacEwan Book Trade")), __jsx("div", {
    className: "my-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }
  }, "MacEwan")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 14
    }
  }, "Used books")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 14
    }
  }, "Exchange"))), __jsx("div", {
    className: "my-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Trading used books made easier.")), __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_3__["FacebookProvider"], {
    appId: "2605624903036488",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Login via Facebook")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJteUlEIiwibXlOYW1lIiwiSW5kZXgiLCJoYW5kbGVSZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvZmlsZSIsImlkIiwibmFtZSIsImZpcnN0TmFtZSIsImZpcnN0X25hbWUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZpcnN0bmFtZSIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsSUFBSUEsSUFBSSxHQUFDLElBQVQ7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBRWhCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUlBLFFBQUlKLElBQUksR0FBR0ksSUFBSSxDQUFDRyxPQUFMLENBQWFDLEVBQXhCO0FBQ0EsUUFBSVAsTUFBTSxHQUFHRyxJQUFJLENBQUNHLE9BQUwsQ0FBYUUsSUFBMUI7QUFDQSxRQUFJQyxTQUFTLEdBQUdOLElBQUksQ0FBQ0csT0FBTCxDQUFhSSxVQUE3QjtBQUVBQyxzREFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsY0FBUSxFQUFFLFFBREY7QUFFUkMsV0FBSyxFQUFFO0FBQUVOLFlBQUksRUFBRVIsTUFBUjtBQUNDTyxVQUFFLEVBQUVSLElBREw7QUFFQ2dCLGlCQUFTLEVBQUVOO0FBRlo7QUFGQyxLQUFaO0FBT0QsR0FoQkg7O0FBa0JDLE1BQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM1QixTQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxXQUFLLEVBQUxBO0FBQUYsS0FBZDtBQUNELEdBRkY7O0FBSUMsU0FDRjtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFMLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTCxDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUwsQ0FISixDQUpBLEVBU0E7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FESixDQVRBLEVBZ0JBLE1BQUMsK0RBQUQ7QUFBa0IsU0FBSyxFQUFDLGtCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQywwREFBRDtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsZUFBVyxFQUFFZixjQUZmO0FBR0UsV0FBTyxFQUFFYyxXQUhYO0FBSUUsYUFBUyxFQUFDLHdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBTixDQU5GLENBRkosQ0FoQkEsQ0FERTtBQXFDRCxDQTdETDs7S0FBTWYsSztBQWlFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjhmMzE1ZTU3ZjQyOGVmZTAyNjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG52YXIgbXlJRD1udWxsO1xyXG52YXIgbXlOYW1lID0gbnVsbDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHZhciBteUlEID0gZGF0YS5wcm9maWxlLmlkO1xyXG4gICAgICAgIHZhciBteU5hbWUgPSBkYXRhLnByb2ZpbGUubmFtZTtcclxuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZGF0YS5wcm9maWxlLmZpcnN0X25hbWU7XHJcblxyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBuYW1lOiBteU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG15SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdE5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH07XHJcblxyXG4gICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luLXBhZ2UnPlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk1hY0V3YW4gQm9vayBUcmFkZTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktdGl0bGUnPlxyXG4gICAgICAgIDxkaXY+PHA+TWFjRXdhbjwvcD48L2Rpdj5cclxuICAgICAgICA8ZGl2PjxwPlVzZWQgYm9va3M8L3A+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48cD5FeGNoYW5nZTwvcD48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktaW50cm8nPlxyXG4gICAgICAgIDxwPlRyYWRpbmcgdXNlZCBib29rcyBtYWRlIGVhc2llci48L3A+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgXHJcblxyXG4gICAgXHJcbiAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjI2MDU2MjQ5MDMwMzY0ODhcIj5cclxuICAgIFxyXG4gICAgICAgIDxMb2dpbkJ1dHRvblxyXG4gICAgICAgICAgc2NvcGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNvbXBsZXRlZD17aGFuZGxlUmVzcG9uc2V9XHJcbiAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPjxiPkxvZ2luIHZpYSBGYWNlYm9vazwvYj48L3NwYW4+XHJcbiAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxyXG4gICAgICBcclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgKVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==