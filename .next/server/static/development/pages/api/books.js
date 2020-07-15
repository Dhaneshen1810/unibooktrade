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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
  const myTitle = req.headers.title;
  const myAuthor = req.headers.author;
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

/***/ 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkJvb2siLCJtb2RlbCIsImRiQ29ubmVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm15VGl0bGUiLCJoZWFkZXJzIiwibXlBdXRob3IiLCJjb25zb2xlIiwibG9nIiwiYm9va3MiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJib29rIiwiY3JlYXRlIiwiYm9keSIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNB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LGVBQXJCO0FBQ0E7QUE5QlI7QUFnQ0g7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQyxDQXBORCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1NLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlbkIsU0FBZixHQUEwQjtBQUN0QixNQUFJbUIsVUFBVSxDQUFDQyxXQUFmLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU14QywrQ0FBUSxDQUFDeUMsT0FBVCxDQUFpQkMsc0dBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBRTtBQUZpQyxHQUF4QyxDQUFqQjtBQUtBTixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0FwQixTQUFPLENBQUNDLEdBQVIsQ0FBWVcsVUFBVSxDQUFDQyxXQUF2QjtBQUNIOztBQUVjcEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEscUMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcYm9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBCb29rU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcclxuICAgICAgICB0cmltOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnVGl0bGUgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBhdXRob3I6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFs0MCwgJ2F1dGhvciBjYW5ub3QgYmUgbW9yZSB0aGFuIDQwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuXHJcbiAgICBvd25lcklEOntcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICB9LFxyXG4gICAgb3duZXJOYW1lOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuQm9vayB8fCBtb25nb29zZS5tb2RlbCgnQm9vaycsXHJcbkJvb2tTY2hlbWEpOyIsImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcclxuaW1wb3J0IEJvb2sgZnJvbSAnLi4vLi4vLi4vbW9kYWxzL2Jvb2snO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiBcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7IFxyXG5cclxuICAgIGNvbnN0IG15VGl0bGUgPSByZXEuaGVhZGVycy50aXRsZTtcclxuICAgIGNvbnN0IG15QXV0aG9yID0gcmVxLmhlYWRlcnMuYXV0aG9yO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aXRsZSBpcyAnK215VGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGhvciBpcyAnKyBteUF1dGhvcik7XHJcblxyXG4gICAgLy8gSW4gY2FzZSB3ZSBoYXZlIG9ubHkgdGhlIGF1dGhvciBhcyBpbnB1dCwgd2Ugd2lsbCBsb29raW5nXHJcbiAgICAvLyBmb3IgYWxsIGJvb2tzIHdpdGggdGhhdCBhdXRob3JcclxuICAgIGlmIChteVRpdGxlPT0nJyAmJiBteUF1dGhvciE9Jycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0aXRsZScpXHJcblxyXG4gICAgICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU29ydCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJ3RpdGxlJzogbXlUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXV0aG9yJzogbXlBdXRob3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9va3MgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvciBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0luIGNhc2Ugb25seSB0aGUgdGl0bGUgaXMgZ2l2ZW4gYXMgaW5wdXQsXHJcbiAgICAvLyBMb29rIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IHRpdGxlXHJcbiAgICBlbHNlIGlmIChteUF1dGhvcj09JycgJiYgbXlUaXRsZSE9Jycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3InKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydhdXRob3InOiAnUm9iZXJ0IEtpeW9zYWtpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGl0bGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZXIgaW5wdXQgYm90aCB0aGUgdGl0bGUgYW5kIHRoZSBhdXRob3JcclxuICAgIC8vIFJldHVybiBib29rIG1hdGNoaW5nIGJvdGhcclxuICAgIGVsc2UgaWYgKG15VGl0bGUhPScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ215IHRpdGxlIGlzOiAnKyBteVRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbXkgYXV0aG9yIGlzOiAnKyBteUF1dGhvcik7XHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcic6IG15QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VlZGVkLCAnKyBteVRpdGxlKycgJytteUF1dGhvcilcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkbid0IHBvc3QgM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkOiAnK215VGl0bGUrJyAnK215QXV0aG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIFRoZXJlIGlzIG5vIGdpdmVuIHRpdGxlIGFuZCBhdXRob3JcclxuICAgIC8vIFdlIHJldHVybiBhbGwgYm9va3MgYXZhaWxhYmxlXHJcbiAgICBlbHNlIGlmIChteVRpdGxlPT0nJyAmJiBteUF1dGhvcj09Jycpe1xyXG4gICAgICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkbid0IHBvc3QgNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8qXHJcbiAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8nYXV0aG9yJzogJ1JvYmVydCBLaXlvc2FraSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgKi9cclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCl7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=