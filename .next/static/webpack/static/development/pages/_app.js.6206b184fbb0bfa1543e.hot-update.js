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
exports.push([module.i, ".colorRed {\n  color: red; }\n\n.login-page {\n  display: flex;\n  flex-direction: column;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n  background-color: black; }\n\n.my-title {\n  font-size: 24px;\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  margin-top: 40%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  margin-left: 5%; }\n\n.my-intro {\n  width: 50%;\n  color: white;\n  margin-top: 5%;\n  margin-left: 5%;\n  align-self: left;\n  display: flex;\n  flex-direction: column;\n  text-align: left; }\n\n.btn-fb {\n  margin-top: 5%;\n  margin-left: 5%;\n  width: 200px; }\n", "",{"version":3,"sources":["C:/Users/danmo/book-trade/styles/booktrade.scss"],"names":[],"mappings":"AAAA;EACI,UAAU,EAAA;;AAGd;EACI,aAAa;EACb,sBAAsB;EACtB,iFAAgF;EAIpF,sBAAsB;EAEtB,uBAAkC,EAAA;;AAElC;EACI,eAAe;EACf,YAAY;EACZ,kCAAkC;EAClC,eAAe;EACf,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe,EAAA;;AAEnB;EACI,UAAU;EACV,YAAY;EACZ,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,gBAAgB,EAAA;;AAEpB;EACI,cAAc;EACd,eAAe;EACf,YACJ,EAAA","file":"booktrade.scss","sourcesContent":[".colorRed{\r\n    color: red;\r\n}\r\n\r\n.login-page{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: url('../public/static/macEwanpic.jpg') no-repeat center center fixed; \r\n-webkit-background-size: cover;\r\n-moz-background-size: cover;\r\n-o-background-size: cover;\r\nbackground-size: cover;\r\n\r\nbackground-color: rgba(0, 0, 0, 1);\r\n}\r\n.my-title{\r\n    font-size: 24px;\r\n    color: white;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-top: 40%;\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: left;\r\n    margin-left: 5%;\r\n}\r\n.my-intro{\r\n    width: 50%;\r\n    color: white;\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    align-self: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n.btn-fb{\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n    width: 200px\r\n}\r\n\r\n@media only screen and (min-width: 750px){\r\n    \r\n}"]}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvYm9va3RyYWRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL21hY0V3YW5waWMuanBnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLDJHQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyx1RUFBaUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGNBQWMsZUFBZSxFQUFFLGlCQUFpQixrQkFBa0IsMkJBQTJCLDhGQUE4RiwyQkFBMkIsNEJBQTRCLEVBQUUsZUFBZSxvQkFBb0IsaUJBQWlCLHVDQUF1QyxvQkFBb0IsZUFBZSxrQkFBa0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsRUFBRSxlQUFlLGVBQWUsaUJBQWlCLG1CQUFtQixvQkFBb0IscUJBQXFCLGtCQUFrQiwyQkFBMkIscUJBQXFCLEVBQUUsYUFBYSxtQkFBbUIsb0JBQW9CLGlCQUFpQixFQUFFLFNBQVMsc0dBQXNHLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLHFFQUFxRSxtQkFBbUIsS0FBSyxvQkFBb0Isc0JBQXNCLCtCQUErQix5RkFBeUYsb0NBQW9DLGdDQUFnQyw4QkFBOEIsMkJBQTJCLDJDQUEyQyxLQUFLLGNBQWMsd0JBQXdCLHFCQUFxQiwyQ0FBMkMsd0JBQXdCLG1CQUFtQixzQkFBc0IsK0JBQStCLDBCQUEwQix3QkFBd0IsS0FBSyxjQUFjLG1CQUFtQixxQkFBcUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLCtCQUErQix5QkFBeUIsS0FBSyxZQUFZLHVCQUF1Qix3QkFBd0IseUJBQXlCLGtEQUFrRCxhQUFhLEdBQUc7QUFDNXBFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFlLG9GQUF1QixpRUFBaUUsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42MjA2YjE4NGZiYjBiZmExNTQzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvc3RhdGljL21hY0V3YW5waWMuanBnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvclJlZCB7XFxuICBjb2xvcjogcmVkOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XFxuXFxuLm15LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tdG9wOiA0MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiA1JTsgfVxcblxcbi5teS1pbnRybyB7XFxuICB3aWR0aDogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBtYXJnaW4tbGVmdDogNSU7XFxuICBhbGlnbi1zZWxmOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmJ0bi1mYiB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIHdpZHRoOiAyMDBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL2Rhbm1vL2Jvb2stdHJhZGUvc3R5bGVzL2Jvb2t0cmFkZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpRkFBZ0Y7RUFJcEYsc0JBQXNCO0VBRXRCLHVCQUFrQyxFQUFBOztBQUVsQztFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQ0osRUFBQVwiLFwiZmlsZVwiOlwiYm9va3RyYWRlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbG9yUmVke1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tcGFnZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9wdWJsaWMvc3RhdGljL21hY0V3YW5waWMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcclxcbi13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4tbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcclxcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcbi5teS10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG59XFxyXFxuLm15LWludHJve1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5idG4tZmJ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICAgIHdpZHRoOiAyMDBweFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KXtcXHJcXG4gICAgXFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvbWFjRXdhbnBpYy4yMGVhMTBlZGUwZDM3Y2U5NTRiODdhNGUzZGVkYjQzMS5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9