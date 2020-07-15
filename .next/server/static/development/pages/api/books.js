module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  const myTitle = req.body.title;
  const myAuthor = req.body.author;
  console.log('title is ' + myTitle);
  console.log('author is ' + myAuthor); // In case we have only the author as input, we will looking
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
              const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
              console.log(req.body);
              res.status(201).json({
                success: true,
                data: book
              });
              console.log('succeeded, ' + myTitle + ' ' + myAuthor);
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
  /*
      switch(method){
          case 'GET':
              try {
                  
                  const books = await Book.find({
                      //Sort here
                      'title': myTitle
                      //'author': 'Robert Kiyosaki'
                  });
                  
  
                  res.status(200).json({ success: true, data: books })
              } catch (error) {
                  res.status(400).json({ success: false });
              }
              
              break;
          case 'POST':
              try {
                  const book = await Book.create(req.body);
  
                  res.status(201).json({ success: true, data: book })
              } catch (error) {
                  res.status(400).json({ success: false });
                  
              }
              break;
          default:
              res.status(400).json({ success: false });
              break;
      }
      */

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

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/api/books/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danmo\book-trade\pages\api\books\index.js */"./pages/api/books/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkJvb2siLCJtb2RlbCIsImRiQ29ubmVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm15VGl0bGUiLCJib2R5IiwibXlBdXRob3IiLCJjb25zb2xlIiwibG9nIiwiYm9va3MiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJib29rIiwiY3JlYXRlIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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SDtBQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNDLENBcE5ELEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUssVUFBVSxHQUFHLEVBQW5COztBQUVBLGVBQWVsQixTQUFmLEdBQTBCO0FBQ3RCLE1BQUlrQixVQUFVLENBQUNDLFdBQWYsRUFBNEI7QUFDeEI7QUFDSDs7QUFFRCxRQUFNQyxFQUFFLEdBQUcsTUFBTXZDLCtDQUFRLENBQUN3QyxPQUFULENBQWlCQyxzR0FBakIsRUFBd0M7QUFDckRDLG1CQUFlLEVBQUUsSUFEb0M7QUFFckRDLHNCQUFrQixFQUFFO0FBRmlDLEdBQXhDLENBQWpCO0FBS0FOLFlBQVUsQ0FBQ0MsV0FBWCxHQUF5QkMsRUFBRSxDQUFDSyxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDQW5CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVSxVQUFVLENBQUNDLFdBQXZCO0FBQ0g7O0FBRWNuQix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxxQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxib29rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IEJvb2tTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSB0aXRsZSddLFxyXG4gICAgICAgIHRyaW06IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbNDAsICdUaXRsZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGF1dGhvcjp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnYXV0aG9yIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG5cclxuICAgIG93bmVySUQ6e1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBvd25lck5hbWU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKCdCb29rJyxcclxuQm9va1NjaGVtYSk7IiwiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgQm9vayBmcm9tICcuLi8uLi8uLi9tb2RhbHMvYm9vayc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuIFxyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTsgXHJcblxyXG4gICAgY29uc3QgbXlUaXRsZSA9IHJlcS5ib2R5LnRpdGxlO1xyXG4gICAgY29uc3QgbXlBdXRob3IgPSByZXEuYm9keS5hdXRob3I7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RpdGxlIGlzICcrbXlUaXRsZSk7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aG9yIGlzICcrIG15QXV0aG9yKTtcclxuXHJcbiAgICAvLyBJbiBjYXNlIHdlIGhhdmUgb25seSB0aGUgYXV0aG9yIGFzIGlucHV0LCB3ZSB3aWxsIGxvb2tpbmdcclxuICAgIC8vIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IGF1dGhvclxyXG4gICAgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHRpdGxlJylcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRob3InOiBteUF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9yIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkbid0IHBvc3QgMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vSW4gY2FzZSBvbmx5IHRoZSB0aXRsZSBpcyBnaXZlbiBhcyBpbnB1dCxcclxuICAgIC8vIExvb2sgZm9yIGFsbCBib29rcyB3aXRoIHRoYXQgdGl0bGVcclxuICAgIGVsc2UgaWYgKG15QXV0aG9yPT0nJyAmJiBteVRpdGxlIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcicpO1xyXG5cclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NvcnQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJ2F1dGhvcic6ICdSb2JlcnQgS2l5b3Nha2knXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaXRsZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlciBpbnB1dCBib3RoIHRoZSB0aXRsZSBhbmQgdGhlIGF1dGhvclxyXG4gICAgLy8gUmV0dXJuIGJvb2sgbWF0Y2hpbmcgYm90aFxyXG4gICAgZWxzZSBpZiAobXlUaXRsZSE9JycgJiYgbXlBdXRob3IhPScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbXkgdGl0bGUgaXM6ICcrIG15VGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdteSBhdXRob3IgaXM6ICcrIG15QXV0aG9yKTtcclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NvcnQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBteVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXV0aG9yJzogbXlBdXRob3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9va3MgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZWVkZWQsICcrIG15VGl0bGUrJyAnK215QXV0aG9yKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6ICcrbXlUaXRsZSsnICcrbXlBdXRob3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gVGhlcmUgaXMgbm8gZ2l2ZW4gdGl0bGUgYW5kIGF1dGhvclxyXG4gICAgLy8gV2UgcmV0dXJuIGFsbCBib29rcyBhdmFpbGFibGVcclxuICAgIGVsc2UgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yPT0nJyl7XHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCA0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLypcclxuICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAvL1NvcnQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IG15VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAvLydhdXRob3InOiAnUm9iZXJ0IEtpeW9zYWtpJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmNyZWF0ZShyZXEuYm9keSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAqL1xyXG59XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKXtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==