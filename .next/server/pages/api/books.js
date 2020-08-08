module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/books/index.js");
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
    maxlength: [120, 'Title cannot be more than 40 characters']
  },
  author: {
    type: String,
    required: true,
    maxlength: [120, 'author cannot be more than 40 characters']
  },
  ownerID: {
    type: Number
  },
  ownerName: {
    type: String
  },
  imageFront: {
    data: String,
    contentType: String
  }
});
module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);

/***/ }),

/***/ "./pages/api/books/index.js":
/*!**********************************!*\
  !*** ./pages/api/books/index.js ***!
  \**********************************/
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
    method
  } = req;
  const myTitle = req.headers.title;
  const myAuthor = req.headers.author;
  console.log('title is ' + myTitle);
  console.log('author is ' + myAuthor); //console.log(req.body.imageFront.data[0]);
  // In case we have only the author as input, we will looking
  // for all books with that author

  if (myTitle == '' && myAuthor != '') {
    console.log('No title');

    switch (method) {
      case 'GET':
        try {
          const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({
            //Sort here
            //'title': myTitle
            'author': myAuthor
          });
          res.status(200).json({
            success: true,
            data: books
          });
        } catch (error) {
          res.status(400).json({
            success: false
          });
          console.log('Author not found');
        }

        break;

      case 'POST':
        try {
          const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
          console.log('post');
          console.log(req.body);
          res.status(201).json({
            success: true,
            data: book
          });
        } catch (error) {
          res.status(400).json({
            success: false
          });
          console.log("couldn't post 1");
        }

        break;

      default:
        res.status(400).json({
          success: false
        });
        break;
    }
  } //In case only the title is given as input,
  // Look for all books with that title
  else if (myAuthor == '' && myTitle != '') {
      console.log('No author');

      switch (method) {
        case 'GET':
          try {
            const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({
              //Sort here
              'title': myTitle //'author': 'Robert Kiyosaki'

            });
            res.status(200).json({
              success: true,
              data: books
            });
          } catch (error) {
            res.status(400).json({
              success: false
            });
            console.log('Title not found');
          }

          break;

        case 'POST':
          try {
            const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
            console.log('post');
            console.log(req.body);
            res.status(201).json({
              success: true,
              data: book
            });
          } catch (error) {
            res.status(400).json({
              success: false
            });
            console.log("couldn't post 2");
          }

          break;

        default:
          res.status(400).json({
            success: false
          });
          break;
      }
    } // User input both the title and the author
    // Return book matching both
    else if (myTitle != '' && myAuthor != '') {
        console.log('my title is: ' + myTitle);
        console.log('my author is: ' + myAuthor);

        switch (method) {
          case 'GET':
            try {
              const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({
                //Sort here
                'title': myTitle,
                'author': myAuthor
              });
              res.status(200).json({
                success: true,
                data: books
              });
            } catch (error) {
              res.status(400).json({
                success: false
              });
            }

            break;

          case 'POST':
            try {
              const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body); //var str = req.body.imageFront;
              //var str = req.body.imageFront.data;
              //console.log(str)

              res.status(201).json({
                success: true,
                data: book
              });
            } catch (error) {
              res.status(400).json({
                success: false
              });
              console.log("couldn't post 3");
              console.log('Failed: ' + myTitle + ' ' + myAuthor);
            }

            break;

          default:
            res.status(400).json({
              success: false
            });
            break;
        }
      } // There is no given title and author
      // We return all books available
      else if (myTitle == '' && myAuthor == '') {
          switch (method) {
            case 'GET':
              try {
                const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({});
                res.status(200).json({
                  success: true,
                  data: books
                });
              } catch (error) {
                res.status(400).json({
                  success: false
                });
              }

              break;

            case 'POST':
              try {
                const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
                console.log('post');
                console.log(req.body);
                res.status(201).json({
                  success: true,
                  data: book
                });
              } catch (error) {
                res.status(400).json({
                  success: false
                });
                console.log("couldn't post 4");
              }

              break;

            default:
              res.status(400).json({
                success: false
              });
              break;
          }
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
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useFindAndModify', false);

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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJjb250ZW50VHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJCb29rIiwibW9kZWwiLCJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJteVRpdGxlIiwiaGVhZGVycyIsIm15QXV0aG9yIiwiY29uc29sZSIsImxvZyIsImJvb2tzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJib29rIiwiY3JlYXRlIiwiYm9keSIsImNvbm5lY3Rpb24iLCJzZXQiLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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Q0FBcUI7QUFBRUMsdUJBQU8sRUFBRTtBQUFYLGVBQXJCO0FBQ0E7QUE5QlI7QUFnQ0g7QUFJSixDQTFMRCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1LLFVBQVUsR0FBRyxFQUFuQjtBQUNBeEMsK0NBQVEsQ0FBQ3lDLEdBQVQsQ0FBYSxrQkFBYixFQUFpQyxLQUFqQzs7QUFFQSxlQUFlbkIsU0FBZixHQUEwQjtBQUN0QixNQUFJa0IsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU0zQywrQ0FBUSxDQUFDNEMsT0FBVCxDQUFpQkMsc0dBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBRTtBQUZpQyxHQUF4QyxDQUFqQjtBQUtBUCxZQUFVLENBQUNFLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0FwQixTQUFPLENBQUNDLEdBQVIsQ0FBWVUsVUFBVSxDQUFDRSxXQUF2QjtBQUNIOztBQUVjcEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2Jvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYm9va3MvaW5kZXguanNcIik7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBCb29rU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcclxuICAgICAgICB0cmltOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzEyMCwgJ1RpdGxlIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTIwLCAnYXV0aG9yIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG5cclxuICAgIG93bmVySUQ6e1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBvd25lck5hbWU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUZyb250OiBcclxuICAgIHsgXHJcbiAgICAgICAgZGF0YTogU3RyaW5nLCBcclxuICAgICAgICBjb250ZW50VHlwZTogU3RyaW5nIFxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLkJvb2sgfHwgbW9uZ29vc2UubW9kZWwoJ0Jvb2snLFxyXG5Cb29rU2NoZW1hKTsiLCJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XHJcbmltcG9ydCBCb29rIGZyb20gJy4uLy4uLy4uL21vZGFscy9ib29rJztcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gXHJcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxOyBcclxuXHJcbiAgICBjb25zdCBteVRpdGxlID0gcmVxLmhlYWRlcnMudGl0bGU7XHJcbiAgICBjb25zdCBteUF1dGhvciA9IHJlcS5oZWFkZXJzLmF1dGhvcjtcclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aXRsZSBpcyAnK215VGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGhvciBpcyAnKyBteUF1dGhvcik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcS5ib2R5LmltYWdlRnJvbnQuZGF0YVswXSk7XHJcblxyXG5cclxuICAgXHJcbiAgICAvLyBJbiBjYXNlIHdlIGhhdmUgb25seSB0aGUgYXV0aG9yIGFzIGlucHV0LCB3ZSB3aWxsIGxvb2tpbmdcclxuICAgIC8vIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IGF1dGhvclxyXG4gICAgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHRpdGxlJylcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRob3InOiBteUF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvciBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0luIGNhc2Ugb25seSB0aGUgdGl0bGUgaXMgZ2l2ZW4gYXMgaW5wdXQsXHJcbiAgICAvLyBMb29rIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IHRpdGxlXHJcbiAgICBlbHNlIGlmIChteUF1dGhvcj09JycgJiYgbXlUaXRsZSE9Jycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3InKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydhdXRob3InOiAnUm9iZXJ0IEtpeW9zYWtpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGl0bGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZXIgaW5wdXQgYm90aCB0aGUgdGl0bGUgYW5kIHRoZSBhdXRob3JcclxuICAgIC8vIFJldHVybiBib29rIG1hdGNoaW5nIGJvdGhcclxuICAgIGVsc2UgaWYgKG15VGl0bGUhPScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ215IHRpdGxlIGlzOiAnKyBteVRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbXkgYXV0aG9yIGlzOiAnKyBteUF1dGhvcik7XHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcic6IG15QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBzdHIgPSByZXEuYm9keS5pbWFnZUZyb250O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIHN0ciA9IHJlcS5ib2R5LmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6ICcrbXlUaXRsZSsnICcrbXlBdXRob3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gVGhlcmUgaXMgbm8gZ2l2ZW4gdGl0bGUgYW5kIGF1dGhvclxyXG4gICAgLy8gV2UgcmV0dXJuIGFsbCBib29rcyBhdmFpbGFibGVcclxuICAgIGVsc2UgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yPT0nJyl7XHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCA0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9