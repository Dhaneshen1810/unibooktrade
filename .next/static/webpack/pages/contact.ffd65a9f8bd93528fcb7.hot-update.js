webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/dhaneshen/Documents/booktrade/unibooktrade/pages/contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar contact = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(_s(function (_ref) {\n  _s();\n\n  var _ref$router$query = _ref.router.query,\n      name = _ref$router$query.name,\n      id = _ref$router$query.id,\n      firstname = _ref$router$query.firstname,\n      bookID = _ref$router$query.bookID,\n      bookOwnerName = _ref$router$query.bookOwnerName,\n      ownerFirstName = _ref$router$query.ownerFirstName,\n      books = _ref.books;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      defaultText = _useState[0],\n      setDefaultText = _useState[1]; // Assign constant names to values obtained from 'booklist' via withRouter\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var userName = name;\n    var userID = id;\n    var userFirstname = firstname;\n  });\n\n  var myProfile = function myProfile() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n      pathname: '/myprofile',\n      query: {\n        mytitle: '',\n        author: '',\n        name: name,\n        id: id,\n        firstname: firstname\n      }\n    });\n  };\n\n  var myBooks = function myBooks() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n      pathname: '/new',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  var Search = function Search() {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n      pathname: '/posts',\n      query: {\n        id: id,\n        name: name,\n        firstname: firstname\n      }\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: \"contact-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"book-greeting\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"greeting-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/sign-out.png\",\n    alt: \"my image\",\n    className: \"my-icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"my-icon-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"/icons/four-square.png\",\n    alt: \"my books\",\n    className: \"my-icon\",\n    onClick: myProfile,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/plus.png\",\n    alt: \"Add book\",\n    className: \"my-icon\",\n    onClick: myBooks,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }), __jsx(\"img\", {\n    src: \"/icons/search.png\",\n    alt: \"Search\",\n    className: \"my-icon\",\n    onClick: Search,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    style: {\n      marginTop: '4%',\n      padding: '10px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    style: {\n      fontSize: '18px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"This is a collection of all the books matching your search\", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }), __jsx(\"span\", {\n    style: {\n      fontSize: '16px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 22\n    }\n  }, \"Once you find the one you want, get in contact with the owner.\"))))), __jsx(\"div\", {\n    className: \"bookInfo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, \"Name: \", name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"Book id: \", bookID), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Owner name: \", bookOwnerName)), __jsx(\"form\", {\n    style: {\n      width: '90%',\n      marginTop: '7%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"textarea\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    value: 'Hi there ' + ownerFirstName + ', I am interested in your book!',\n    className: \"contact-textBox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    style: {\n      marginTop: '4%'\n    },\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, \"Send message\")));\n}, \"0g8GcnMfBbY3bgTQYEpU8YmOgx8=\"));\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcz8wMGI3Il0sIm5hbWVzIjpbImNvbnRhY3QiLCJ3aXRoUm91dGVyIiwicm91dGVyIiwicXVlcnkiLCJuYW1lIiwiaWQiLCJmaXJzdG5hbWUiLCJib29rSUQiLCJib29rT3duZXJOYW1lIiwib3duZXJGaXJzdE5hbWUiLCJib29rcyIsInVzZVN0YXRlIiwiZGVmYXVsdFRleHQiLCJzZXREZWZhdWx0VGV4dCIsInVzZUVmZmVjdCIsInVzZXJOYW1lIiwidXNlcklEIiwidXNlckZpcnN0bmFtZSIsIm15UHJvZmlsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsIm15dGl0bGUiLCJhdXRob3IiLCJteUJvb2tzIiwiU2VhcmNoIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImZvbnRTaXplIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLDhEQUFVLElBQUMsZ0JBQStGO0FBQUE7O0FBQUEsK0JBQTVGQyxNQUE0RixDQUFqRkMsS0FBaUY7QUFBQSxNQUExRUMsSUFBMEUscUJBQTFFQSxJQUEwRTtBQUFBLE1BQXBFQyxFQUFvRSxxQkFBcEVBLEVBQW9FO0FBQUEsTUFBaEVDLFNBQWdFLHFCQUFoRUEsU0FBZ0U7QUFBQSxNQUFyREMsTUFBcUQscUJBQXJEQSxNQUFxRDtBQUFBLE1BQTdDQyxhQUE2QyxxQkFBN0NBLGFBQTZDO0FBQUEsTUFBOUJDLGNBQThCLHFCQUE5QkEsY0FBOEI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ2hGQyxzREFBUSxDQUFDLEVBQUQsQ0FEd0U7QUFBQSxNQUMvR0MsV0FEK0c7QUFBQSxNQUNsR0MsY0FEa0csaUJBR3RIOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsUUFBUSxHQUFHWCxJQUFqQjtBQUNBLFFBQU1ZLE1BQU0sR0FBR1gsRUFBZjtBQUNBLFFBQU1ZLGFBQWEsR0FBR1gsU0FBdEI7QUFDSCxHQUpRLENBQVQ7O0FBT0EsTUFBTVksU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxZQURGO0FBRVJsQixXQUFLLEVBQUU7QUFDQ21CLGVBQU8sRUFBRSxFQURWO0FBRUNDLGNBQU0sRUFBRSxFQUZUO0FBR0NuQixZQUFJLEVBQUVBLElBSFA7QUFJQ0MsVUFBRSxFQUFFQSxFQUpMO0FBS0NDLGlCQUFTLEVBQUVBO0FBTFo7QUFGQyxLQUFaO0FBV0gsR0FaRDs7QUFjQSxNQUFNa0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkwsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBRSxNQURGO0FBRVJsQixXQUFLLEVBQUU7QUFDQ0UsVUFBRSxFQUFFQSxFQURMO0FBRUNELFlBQUksRUFBRUEsSUFGUDtBQUdDRSxpQkFBUyxFQUFFQTtBQUhaO0FBRkMsS0FBWjtBQVNILEdBVkQ7O0FBWUEsTUFBTW1CLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJOLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNSQyxjQUFRLEVBQUUsUUFERjtBQUVSbEIsV0FBSyxFQUFFO0FBQ0NFLFVBQUUsRUFBRUEsRUFETDtBQUVDRCxZQUFJLEVBQUVBLElBRlA7QUFHQ0UsaUJBQVMsRUFBRUE7QUFIWjtBQUZDLEtBQVo7QUFTSCxHQVZEOztBQWNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsVUFBbkM7QUFBOEMsYUFBUyxFQUFDLFNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURSLEVBS1E7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBa0MsT0FBRyxFQUFDLFVBQXRDO0FBQWlELGFBQVMsRUFBQyxTQUEzRDtBQUFxRSxXQUFPLEVBQUVZLFNBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUdBO0FBQUssT0FBRyxFQUFDLGlCQUFUO0FBQTJCLE9BQUcsRUFBQyxVQUEvQjtBQUEwQyxhQUFTLEVBQUMsU0FBcEQ7QUFBOEQsV0FBTyxFQUFFTSxPQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsRUFJQTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsUUFBakM7QUFBMEMsYUFBUyxFQUFDLFNBQXBEO0FBQThELFdBQU8sRUFBRUMsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpBLENBTFIsQ0FEQSxFQWlCSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUMsSUFBWjtBQUFrQkMsYUFBTyxFQUFDO0FBQTFCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBQztBQUFYLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFFSztBQUFNLFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBRkwsQ0FGQSxDQWpCSixDQURBLENBREosRUE4QkE7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVeEIsSUFBVixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUcsTUFBYixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0JDLGFBQWhCLENBSEosQ0E5QkEsRUFtQ0E7QUFBTSxTQUFLLEVBQUU7QUFBRXFCLFdBQUssRUFBQyxLQUFSO0FBQWVILGVBQVMsRUFBQztBQUF6QixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFVLFFBQUksRUFBQyxNQUFmO0FBQ0ksTUFBRSxFQUFDLE9BRFA7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFNBQUssRUFBRyxjQUFZakIsY0FBWixHQUEyQixpQ0FIdkM7QUFJSSxhQUFTLEVBQUMsaUJBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBT0k7QUFBUSxTQUFLLEVBQUU7QUFBRWlCLGVBQVMsRUFBRTtBQUFiLEtBQWY7QUFBb0MsYUFBUyxFQUFDLGlCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKLENBbkNBLENBREo7QUFpREgsQ0FwR3lCLGtDQUExQjtBQXNHZTFCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29udGFjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmNvbnN0IGNvbnRhY3QgPSB3aXRoUm91dGVyKCh7IHJvdXRlcjogIHsgcXVlcnk6e25hbWUsIGlkLCBmaXJzdG5hbWUsIGJvb2tJRCwgYm9va093bmVyTmFtZSwgb3duZXJGaXJzdE5hbWV9fSwgYm9va3N9ICkgPT4ge1xuICAgIGNvbnN0IFtkZWZhdWx0VGV4dCwgc2V0RGVmYXVsdFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy8gQXNzaWduIGNvbnN0YW50IG5hbWVzIHRvIHZhbHVlcyBvYnRhaW5lZCBmcm9tICdib29rbGlzdCcgdmlhIHdpdGhSb3V0ZXJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IG5hbWU7XG4gICAgICAgIGNvbnN0IHVzZXJJRCA9IGlkO1xuICAgICAgICBjb25zdCB1c2VyRmlyc3RuYW1lID0gZmlyc3RuYW1lO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IG15UHJvZmlsZSA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbXlwcm9maWxlJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBteXRpdGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbXlCb29rcyA9ICgpID0+IHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbmV3JyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgIHF1ZXJ5OiB7IFxuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdC1wYWdlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWdyZWV0aW5nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmVldGluZy10ZXh0Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uLWJveCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvc2lnbi1vdXQucG5nXCIgYWx0PVwibXkgaW1hZ2VcIiBjbGFzc05hbWU9J215LWljb24nLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LWljb24tZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvZm91ci1zcXVhcmUucG5nXCIgYWx0PVwibXkgYm9va3NcIiBjbGFzc05hbWU9J215LWljb24nIG9uQ2xpY2s9e215UHJvZmlsZX0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaWNvbnMvcGx1cy5wbmdcIiBhbHQ9XCJBZGQgYm9va1wiIGNsYXNzTmFtZT0nbXktaWNvbicgb25DbGljaz17bXlCb29rc30vPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9zZWFyY2gucG5nXCIgYWx0PVwiU2VhcmNoXCIgY2xhc3NOYW1lPSdteS1pY29uJyBvbkNsaWNrPXtTZWFyY2h9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6JzQlJywgcGFkZGluZzonMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOicxOHB4JyB9fT5UaGlzIGlzIGEgY29sbGVjdGlvbiBvZiBhbGwgdGhlIGJvb2tzIG1hdGNoaW5nIHlvdXIgc2VhcmNoIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT5PbmNlIHlvdSBmaW5kIHRoZSBvbmUgeW91IHdhbnQsIGdldCBpbiBjb250YWN0IHdpdGggdGhlIG93bmVyLjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9va0luZm8nPlxuICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxuICAgICAgICAgICAgPHA+Qm9vayBpZDoge2Jvb2tJRH08L3A+XG4gICAgICAgICAgICA8cD5Pd25lciBuYW1lOiB7Ym9va093bmVyTmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBzdHlsZT17eyB3aWR0aDonOTAlJywgbWFyZ2luVG9wOic3JScgfX0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBpZD1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImxuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9IHsnSGkgdGhlcmUgJytvd25lckZpcnN0TmFtZSsnLCBJIGFtIGludGVyZXN0ZWQgaW4geW91ciBib29rISd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb250YWN0LXRleHRCb3gnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luVG9wOiAnNCUnIH19IGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})