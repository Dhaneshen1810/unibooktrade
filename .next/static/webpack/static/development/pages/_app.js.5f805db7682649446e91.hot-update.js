webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/booktrade.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/booktrade.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/static/macEwanpic.jpg */ "./public/static/macEwanpic.jpg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  height: 100%; }\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover; }\n\n.my-title {\n  font-size: 24px;\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  margin-top: 40%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-left: 5%; }\n\n.my-intro {\n  width: 50%;\n  color: white;\n  margin-top: 5%;\n  margin-left: 5%;\n  align-self: left;\n  display: flex;\n  flex-direction: column;\n  text-align: left; }\n\n.btn-fb {\n  margin-top: 5%;\n  margin-left: 5%;\n  width: 200px; }\n", "",{"version":3,"sources":["C:/Users/danmo/book-trade/styles/booktrade.scss"],"names":[],"mappings":"AAAA;EACI,YAAY,EAAA;;AAMhB;EACI,aAAa;EACb,sBAAsB;EAE1B,aAAa;EACb,oCAAoC;EACpC,iFAAgF;EAIhF,sBAAsB,EAAA;;AAKtB;EACI,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,eAAe;EACf,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe,EAAA;;AAEnB;EACI,UAAU;EACV,YAAY;EACZ,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,gBAAgB,EAAA;;AAEpB;EACI,cAAc;EACd,eAAe;EACf,YACJ,EAAA","file":"booktrade.scss","sourcesContent":["body{\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.login-page{\r\n    display: flex;\r\n    flex-direction: column;\r\n \r\nheight: 100vh;\r\nbackground-color: rgba(0, 0, 0, 0.4);\r\nbackground: url('../public/static/macEwanpic.jpg') no-repeat center center fixed; \r\n-webkit-background-size: cover;\r\n-moz-background-size: cover;\r\n-o-background-size: cover;\r\nbackground-size: cover;\r\n\r\n\r\n}\r\n\r\n.my-title{\r\n    font-size: 24px;\r\n    color: white;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-top: 40%;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: left;\r\n    margin-left: 5%;\r\n}\r\n.my-intro{\r\n    width: 50%;\r\n    color: white;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    align-self: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n.btn-fb{\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    width: 200px\r\n}\r\n\r\n@media only screen and (min-width: 750px){\r\n    \r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/static/macEwanpic.jpg":
/*!**************************************!*\
  !*** ./public/static/macEwanpic.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/macEwanpic.20ea10ede0d37ce954b87a4e3dedb431.jpg");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvYm9va3RyYWRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL21hY0V3YW5waWMuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx1RUFBaUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMsaUJBQWlCLEVBQUUsaUJBQWlCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLHlDQUF5Qyw4RkFBOEYsMkJBQTJCLEVBQUUsZUFBZSxvQkFBb0IsaUJBQWlCLHVDQUF1QyxvQkFBb0IsZUFBZSxrQkFBa0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsRUFBRSxlQUFlLGVBQWUsaUJBQWlCLG1CQUFtQixvQkFBb0IscUJBQXFCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEVBQUUsYUFBYSxtQkFBbUIsb0JBQW9CLGlCQUFpQixFQUFFLFNBQVMsc0dBQXNHLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsZ0VBQWdFLHFCQUFxQixLQUFLLGdDQUFnQyxzQkFBc0IsK0JBQStCLHVCQUF1Qix5Q0FBeUMscUZBQXFGLG9DQUFvQyxnQ0FBZ0MsOEJBQThCLDJCQUEyQixhQUFhLGtCQUFrQix3QkFBd0IscUJBQXFCLDJDQUEyQyx3QkFBd0IsbUJBQW1CLHNCQUFzQiwrQkFBK0IsMEJBQTBCLHdCQUF3QixLQUFLLGNBQWMsbUJBQW1CLHFCQUFxQix1QkFBdUIsd0JBQXdCLHlCQUF5QixzQkFBc0IsK0JBQStCLHlCQUF5QixLQUFLLFlBQVksdUJBQXVCLHdCQUF3Qix5QkFBeUIsa0RBQWtELGFBQWEsR0FBRztBQUN6dUU7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQWUsb0ZBQXVCLGlFQUFpRSxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjVmODA1ZGI3NjgyNjQ5NDQ2ZTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL3B1YmxpYy9zdGF0aWMvbWFjRXdhbnBpYy5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ubG9naW4tcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcblxcbi5teS10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogNDAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogNSU7IH1cXG5cXG4ubXktaW50cm8ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgYWxpZ24tc2VsZjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5idG4tZmIge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9kYW5tby9ib29rLXRyYWRlL3N0eWxlcy9ib29rdHJhZGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFNaEI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBRTFCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsaUZBQWdGO0VBSWhGLHNCQUFzQixFQUFBOztBQUt0QjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQ0osRUFBQVwiLFwiZmlsZVwiOlwiYm9va3RyYWRlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubG9naW4tcGFnZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gXFxyXFxuaGVpZ2h0OiAxMDB2aDtcXHJcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvc3RhdGljL21hY0V3YW5waWMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcclxcbi13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4tbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubXktdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxufVxcclxcbi5teS1pbnRyb3tcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4uYnRuLWZie1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgICB3aWR0aDogMjAwcHhcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCl7XFxyXFxuICAgIFxcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL21hY0V3YW5waWMuMjBlYTEwZWRlMGQzN2NlOTU0Yjg3YTRlM2RlZGI0MzEuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==