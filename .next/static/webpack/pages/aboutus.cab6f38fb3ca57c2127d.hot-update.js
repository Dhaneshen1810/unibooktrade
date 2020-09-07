webpackHotUpdate_N_E("pages/aboutus",{

/***/ "./pages/aboutus.js":
/*!**************************!*\
  !*** ./pages/aboutus.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/aboutus.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n //import mainImage from '../public/static/aboutUs.png'\n\nvar about = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(function (_ref) {\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      userEmail = _ref$router$query.userEmail;\n\n  // Redirect to myprofile\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname,\n        userEmail: userEmail\n      }\n    }, '/profile');\n  }; // Redirect to new\n\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname,\n        userEmail: userEmail\n      }\n    }, '/New');\n  }; // Redirect to posts\n\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname,\n        userEmail: userEmail\n      }\n    }, '/search');\n  };\n\n  var aboutUs = function aboutUs() {\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({\n      pathname: '/aboutus',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname,\n        userEmail: userEmail\n      }\n    }, '/aboutUs');\n  };\n\n  return __jsx(\"div\", {\n    className: \"about-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"About us\")), __jsx(\"div\", {\n    className: \"book-greeting\",\n    style: {\n      height: 'auto',\n      minHeight: '40px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 25\n    }\n  })), __jsx(\"img\", {\n    onClick: aboutUs,\n    src: \"/icons/info.svg\",\n    alt: \"About us\",\n    className: \"my-icon btn-aboutUs\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }))))), __jsx(\"div\", {\n    className: \"aboutus-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, \"About us\"), __jsx(\"div\", {\n    className: \"about-box1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"about-boxb\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/aboutPic.png\",\n    className: \"about-pic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"about-boxa\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    className: \"about-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 21\n    }\n  }, \"Our goal\"), __jsx(\"div\", {\n    className: \"about-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 25\n    }\n  }, \"We want to make trading your university used books as quick, easy and effortless as possible. This app combines the focused search radius of university facebook groups and the search ability of wider browsing systems to provide you with exactly what you need, finding your university books and selling your old ones.\")))), __jsx(\"div\", {\n    className: \"about-box2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"about-boxa\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    className: \"about-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }\n  }, \"Updates\"), __jsx(\"div\", {\n    className: \"about-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, \"This app is constantly being monitored and improved to deliver the best experience. We encourage users to drop feedbacks at \", __jsx(\"a\", {\n    href: \"mailto:booksexchangemessenger.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 32\n    }\n  }, \"booksexchangemessenger.com\"), \" as we actively listen and build on those.\")), \"                \"), __jsx(\"div\", {\n    className: \"about-boxa\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    className: \"about-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 17\n    }\n  }, \"How it works\"), __jsx(\"div\", {\n    className: \"about-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 25\n    }\n  }, \"No registration is required. Log in using facebook and you are all set. There are 3 page options: Search for a book, create a new post or take a look at your personal post collection.\")), \"                \")), __jsx(\"div\", {\n    className: \"feedback-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"feedback-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 17\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 21\n    }\n  }, \"Drop us a feedback!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 21\n    }\n  }, \"Help us provide a better experience for you.\")), __jsx(\"textarea\", {\n    className: \"about-textarea\",\n    placeholder: \"Type your feedback here\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 17\n    }\n  })));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy5qcz85ZTMzIl0sIm5hbWVzIjpbImFib3V0Iiwid2l0aFJvdXRlciIsInJvdXRlciIsInF1ZXJ5IiwibmFtZSIsImlkIiwiZmlyc3RuYW1lIiwidXNlckVtYWlsIiwibXlQcm9maWxlIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwibXl0aXRsZSIsImF1dGhvciIsIm15Qm9va3MiLCJTZWFyY2giLCJhYm91dFVzIiwiaGVpZ2h0IiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHQyw4REFBVSxDQUFDLGdCQUE0RDtBQUFBLCtCQUF6REMsTUFBeUQsQ0FBOUNDLEtBQThDO0FBQUEsTUFBdkNDLElBQXVDLHFCQUF2Q0EsSUFBdUM7QUFBQSxNQUFqQ0MsRUFBaUMscUJBQWpDQSxFQUFpQztBQUFBLE1BQTdCQyxTQUE2QixxQkFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLFNBQWtCLHFCQUFsQkEsU0FBa0I7O0FBR2pGO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxZQURGO0FBRVJSLFdBQUssRUFBRTtBQUNDUyxlQUFPLEVBQUUsRUFEVjtBQUVDQyxjQUFNLEVBQUUsRUFGVDtBQUdDVCxZQUFJLEVBQUVBLElBSFA7QUFJQ0MsVUFBRSxFQUFFQSxFQUpMO0FBS0NDLGlCQUFTLEVBQUVBLFNBTFo7QUFNQ0MsaUJBQVMsRUFBQ0E7QUFOWDtBQUZDLEtBQVosRUFXRSxVQVhGO0FBWUgsR0FiRCxDQUppRixDQW1CakY7OztBQUNBLE1BQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEJMLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsTUFERjtBQUVSUixXQUFLLEVBQUU7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U0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLEVBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTEFESixDQUZKLHFCQVRKLENBL0NKLEVBa0VJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQUZKLENBREosRUFLSTtBQUFVLGFBQVMsRUFBQyxnQkFBcEI7QUFBcUMsZUFBVyxFQUFDLHlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FsRUosQ0FESjtBQTRFSCxDQXpJdUIsQ0FBeEI7QUEySWVmLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXR1cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IG1haW5JbWFnZSBmcm9tICcuLi9wdWJsaWMvc3RhdGljL2Fib3V0VXMucG5nJ1xuXG5cbmNvbnN0IGFib3V0ID0gd2l0aFJvdXRlcigoeyByb3V0ZXI6ICB7IHF1ZXJ5OntuYW1lLCBpZCwgZmlyc3RuYW1lLCB1c2VyRW1haWx9fX0gKSA9PiB7XG5cblxuICAgIC8vIFJlZGlyZWN0IHRvIG15cHJvZmlsZVxuICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlsOnVzZXJFbWFpbFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwnL3Byb2ZpbGUnKTtcbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCB0byBuZXdcbiAgICBjb25zdCBteUJvb2tzID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9uZXcnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbDp1c2VyRW1haWxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sJy9OZXcnKTtcbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCB0byBwb3N0c1xuICAgIGNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxuICAgICAgICAgICAgcXVlcnk6IHsgXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbDp1c2VyRW1haWxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sJy9zZWFyY2gnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhYm91dFVzID0gKCkgPT4ge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9hYm91dHVzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWw6dXNlckVtYWlsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCcvYWJvdXRVcycpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtcGFnZSc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5BYm91dCB1czwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJyBzdHlsZT17eyBoZWlnaHQ6J2F1dG8nLCBtaW5IZWlnaHQ6JzQwcHgnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyZWV0aW5nLXRleHQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zaWduLW91dC5wbmdcIiBhbHQ9XCJteSBpbWFnZVwiIGNsYXNzTmFtZT0nbXktaWNvbicvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17YWJvdXRVc30gc3JjPVwiL2ljb25zL2luZm8uc3ZnXCIgYWx0PVwiQWJvdXQgdXNcIiBjbGFzc05hbWU9J215LWljb24gYnRuLWFib3V0VXMnLz5cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dHVzLWhlYWRlcic+QWJvdXQgdXM8L2Rpdj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtYm94MSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LWJveGInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9hYm91dFBpYy5wbmcnIGNsYXNzTmFtZT0nYWJvdXQtcGljJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LWJveGEnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdhYm91dC10aXRsZSc+T3VyIGdvYWw8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSB3YW50IHRvIG1ha2UgdHJhZGluZyB5b3VyIHVuaXZlcnNpdHkgdXNlZCBib29rcyBhcyBxdWljaywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzeSBhbmQgZWZmb3J0bGVzcyBhcyBwb3NzaWJsZS4gVGhpcyBhcHAgY29tYmluZXMgdGhlIGZvY3VzZWQgc2VhcmNoIHJhZGl1cyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB1bml2ZXJzaXR5IGZhY2Vib29rIGdyb3VwcyBhbmQgdGhlIHNlYXJjaCBhYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Ygd2lkZXIgYnJvd3Npbmcgc3lzdGVtcyB0byBwcm92aWRlIHlvdSB3aXRoIGV4YWN0bHkgd2hhdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgbmVlZCwgZmluZGluZyB5b3VyIHVuaXZlcnNpdHkgYm9va3MgYW5kIHNlbGxpbmcgeW91ciBvbGQgb25lcy4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1ib3gyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtYm94YSc+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYWJvdXQtdGl0bGUnPlVwZGF0ZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGFwcCBpcyBjb25zdGFudGx5IGJlaW5nIG1vbml0b3JlZCBhbmQgaW1wcm92ZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gZGVsaXZlciB0aGUgYmVzdCBleHBlcmllbmNlLiBXZSBlbmNvdXJhZ2UgdXNlcnMgdG8gZHJvcCBmZWVkYmFja3MgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXQgPGEgaHJlZj0nbWFpbHRvOmJvb2tzZXhjaGFuZ2VtZXNzZW5nZXIuY29tJz5ib29rc2V4Y2hhbmdlbWVzc2VuZ2VyLmNvbTwvYT4gYXMgd2UgYWN0aXZlbHkgbGlzdGVuIGFuZCBidWlsZCBvbiB0aG9zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1ib3hhJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdhYm91dC10aXRsZSc+SG93IGl0IHdvcmtzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcmVnaXN0cmF0aW9uIGlzIHJlcXVpcmVkLiBMb2cgaW4gdXNpbmcgZmFjZWJvb2sgYW5kIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSBhcmUgYWxsIHNldC4gVGhlcmUgYXJlIDMgcGFnZSBvcHRpb25zOiBTZWFyY2ggZm9yIGEgYm9vaywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlIGEgbmV3IHBvc3Qgb3IgdGFrZSBhIGxvb2sgYXQgeW91ciBwZXJzb25hbCBwb3N0IGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZGJhY2stc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdmZWVkYmFjay10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Ecm9wIHVzIGEgZmVlZGJhY2shPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGVscCB1cyBwcm92aWRlIGEgYmV0dGVyIGV4cGVyaWVuY2UgZm9yIHlvdS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0nYWJvdXQtdGV4dGFyZWEnIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgZmVlZGJhY2sgaGVyZSc+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aboutus.js\n");

/***/ })

})