module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modals/book.js":
/*!************************!*\
  !*** ./modals/book.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [40, 'Title cannot be more than 40 characters']
  },
  author: {
    type: String,
    required: true,
    maxlength: [40, 'author cannot be more than 40 characters']
  },
  ownerID: {
    type: Number
  },
  ownerName: {
    type: String
  }
});
module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);

/***/ }),

/***/ "./pages/api/books/[id].js":
/*!*********************************!*\
  !*** ./pages/api/books/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ "./utils/dbConnect.js");
/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modals/book */ "./modals/book.js");
/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals_book__WEBPACK_IMPORTED_MODULE_1__);


Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    query: {
      id
    },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);

        if (!book) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: book
        });
      } catch (error) {
        return res.status(400).json({
          success: false
        });
      }

      break;

    case 'PUT':
      try {
        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!book) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: book
        });
      } catch (error) {
        return res.status(400).json({
          success: false
        });
      }

      break;

    case 'DELETE':
      try {
        const deletedBook = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({
          _id: id
        });

        if (!deletedBook) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: {}
        });
      } catch (error) {
        return res.status(400).json({
          success: false
        });
      }

      break;

    default:
      res.status(400).json({
        success: false
      });
      break;
  }
});

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://profiles:MongoPass@cluster0-f8o3q.gcp.mongodb.net/profiles?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ }),

/***/ 7:
/*!***************************************!*\
  !*** multi ./pages/api/books/[id].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danmo\book-trade\pages\api\books\[id].js */"./pages/api/books/[id].js");


/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzLy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJCb29rU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwibWF4bGVuZ3RoIiwiYXV0aG9yIiwib3duZXJJRCIsIk51bWJlciIsIm93bmVyTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJCb29rIiwibW9kZWwiLCJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiYm9vayIsImZpbmRCeUlkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImJvZHkiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlZEJvb2siLCJkZWxldGVPbmUiLCJfaWQiLCJjb25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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cEIsU0FBZixHQUEwQjtBQUN0QixNQUFJb0IsVUFBVSxDQUFDQyxXQUFmLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU16QywrQ0FBUSxDQUFDMEMsT0FBVCxDQUFpQkMsc0dBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBRTtBQUZpQyxHQUF4QyxDQUFqQjtBQUtBTixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFVLENBQUNDLFdBQXZCO0FBQ0g7O0FBRWNyQix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxib29rc1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IEJvb2tTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSB0aXRsZSddLFxyXG4gICAgICAgIHRyaW06IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbNDAsICdUaXRsZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGF1dGhvcjp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnYXV0aG9yIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG5cclxuICAgIG93bmVySUQ6e1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBvd25lck5hbWU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKCdCb29rJyxcclxuQm9va1NjaGVtYSk7IiwiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgQm9vayBmcm9tICcuLi8uLi8uLi9tb2RhbHMvYm9vayc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBtZXRob2RcclxuICB9PSByZXE7XHJcblxyXG4gIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgICAgIGlmICghYm9vayl7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KTtcclxuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XHJcbiAgICAgICAgICBuZXc6IHRydWUsXHJcbiAgICAgICAgICBydW5WYWxpZGF0b3JzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYm9vayl7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KTtcclxuXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZEJvb2sgPSBhd2FpdCBCb29rLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSk7XHJcblxyXG4gICAgICAgIGlmICghZGVsZXRlZEJvb2spe1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7fSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgYnJlYWs7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcblxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9