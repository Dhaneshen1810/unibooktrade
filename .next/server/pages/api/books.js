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
  },
  price: {
    type: Number
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
console.log('inside the main book ');
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method
  } = req;
  console.log('method is ' + method);
  var myTitle = req.headers.title;
  var myAuthor = req.headers.author;

  if (req.body.id) {
    console.log('id present.');
    const myID = req.body.id;
    myTitle = req.body.title;
    myAuthor = req.body.author; //const ownerID = req.body.ownerID;

    console.log(req.body);
  }

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
              console.log('books are ready');
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

          case 'PUT':
            try {
              const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(req.body.id, req.body, {
                new: true,
                runValidators: true
              });

              if (!book) {
                return res.status(400).json({
                  success: '!book'
                });
              }

              res.status(200).json({
                success: true,
                data: book
              });
            } catch (error) {
              res.status(400).json({
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
      } // There is no given title and author
      // We return all books available
      else if (myTitle == '' && myAuthor == '') {
          console.log('in number 4');

          switch (method) {
            case 'GET':
              console.log(req.headers.bookid);

              if (req.headers.id) {
                // bookID has been provided
                // We will use bookID to find book
                if (req.headers.bookid) {
                  try {
                    console.log('Book id present');
                    const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({
                      _id: req.headers.bookid
                    });
                    console.log('Got books');
                    res.status(200).json({
                      success: true,
                      data: books
                    });
                  } catch (error) {
                    res.status(400).json({
                      success: false
                    });
                  }
                } // No book id is provided
                // Get all books from the owner
                else {
                    try {
                      console.log('Book id not present');
                      const books = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.find({
                        ownerID: req.headers.id
                      });
                      console.log('Got books');
                      res.status(200).json({
                        success: true,
                        data: books
                      });
                    } catch (error) {
                      res.status(400).json({
                        success: false
                      });
                    }
                  }
              } else {
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
            //Deleting book post here instead of in [id].js

            case 'DELETE':
              console.log('Attempting to delete: ' + req.body.id);

              try {
                const deletedBook = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({
                  _id: req.body.id
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
                  success: 'some error happenn'
                });
              }

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

console.log('inside dbConnect');
const connection = {}; //mongoose.set('useFindAndModify', false);

console.log('Trying to connect to db.');

async function dbConnect() {
  console.log('Above if statement.');

  if (connection.isConnected) {
    console.log('db on from first call');
    return 1;
  }

  console.log('awaiting for db connection');
  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://profiles:MongoPass@cluster0-f8o3q.gcp.mongodb.net/profiles?retryWrites=true&w=majority", {//useNewUrlParser: true
    //useUnifiedTopology: true
  });

  if (db.connections) {
    console.log('\nConnection exist');
  } else {
    console.log('no connections found');
  }

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
  console.log('db is on.');

  if (connection.isConnected) {
    console.log('db on from second call');
    return 1;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJjb250ZW50VHlwZSIsInByaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkJvb2siLCJtb2RlbCIsImRiQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJteVRpdGxlIiwiaGVhZGVycyIsIm15QXV0aG9yIiwiYm9keSIsImlkIiwibXlJRCIsImJvb2tzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJib29rIiwiY3JlYXRlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiYm9va2lkIiwiX2lkIiwiZGVsZXRlZEJvb2siLCJkZWxldGVPbmUiLCJjb25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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cGkvYm9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9ib29rcy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IEJvb2tTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSB0aXRsZSddLFxyXG4gICAgICAgIHRyaW06IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTIwLCAnVGl0bGUgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBhdXRob3I6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsxMjAsICdhdXRob3IgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcblxyXG4gICAgb3duZXJJRDp7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgfSxcclxuICAgIG93bmVyTmFtZTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGltYWdlRnJvbnQ6IFxyXG4gICAgeyBcclxuICAgICAgICBkYXRhOiBTdHJpbmcsIFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBTdHJpbmcgXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6e1xyXG4gICAgICAgIHR5cGU6IE51bWJlclxyXG4gICAgfVxyXG5cclxuXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKCdCb29rJyxcclxuQm9va1NjaGVtYSk7IiwiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgQm9vayBmcm9tICcuLi8uLi8uLi9tb2RhbHMvYm9vayc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdpbnNpZGUgdGhlIG1haW4gYm9vayAnKVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiBcclxuICAgIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7IFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdtZXRob2QgaXMgJysgbWV0aG9kKVxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICB2YXIgbXlUaXRsZSA9IHJlcS5oZWFkZXJzLnRpdGxlO1xyXG4gICAgdmFyIG15QXV0aG9yID0gcmVxLmhlYWRlcnMuYXV0aG9yO1xyXG5cclxuICAgIGlmIChyZXEuYm9keS5pZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIHByZXNlbnQuJylcclxuICAgICAgICBjb25zdCBteUlEID0gcmVxLmJvZHkuaWQ7XHJcbiAgICAgICAgbXlUaXRsZSA9IHJlcS5ib2R5LnRpdGxlO1xyXG4gICAgICAgIG15QXV0aG9yID0gcmVxLmJvZHkuYXV0aG9yO1xyXG4gICAgICAgIC8vY29uc3Qgb3duZXJJRCA9IHJlcS5ib2R5Lm93bmVySUQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aXRsZSBpcyAnK215VGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2F1dGhvciBpcyAnKyBteUF1dGhvcik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlcS5ib2R5LmltYWdlRnJvbnQuZGF0YVswXSk7XHJcblxyXG5cclxuICAgXHJcbiAgICAvLyBJbiBjYXNlIHdlIGhhdmUgb25seSB0aGUgYXV0aG9yIGFzIGlucHV0LCB3ZSB3aWxsIGxvb2tpbmdcclxuICAgIC8vIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IGF1dGhvclxyXG4gICAgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHRpdGxlJylcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRob3InOiBteUF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pOyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhvciBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0luIGNhc2Ugb25seSB0aGUgdGl0bGUgaXMgZ2l2ZW4gYXMgaW5wdXQsXHJcbiAgICAvLyBMb29rIGZvciBhbGwgYm9va3Mgd2l0aCB0aGF0IHRpdGxlXHJcbiAgICBlbHNlIGlmIChteUF1dGhvcj09JycgJiYgbXlUaXRsZSE9Jycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBhdXRob3InKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLydhdXRob3InOiAnUm9iZXJ0IEtpeW9zYWtpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGl0bGUgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZXIgaW5wdXQgYm90aCB0aGUgdGl0bGUgYW5kIHRoZSBhdXRob3JcclxuICAgIC8vIFJldHVybiBib29rIG1hdGNoaW5nIGJvdGhcclxuICAgIGVsc2UgaWYgKG15VGl0bGUhPScnICYmIG15QXV0aG9yIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ215IHRpdGxlIGlzOiAnKyBteVRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbXkgYXV0aG9yIGlzOiAnKyBteUF1dGhvcik7XHJcbiAgICAgICAgc3dpdGNoKG1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU29ydCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IG15VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRob3InOiBteUF1dGhvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib29rcyBhcmUgcmVhZHknKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgc3RyID0gcmVxLmJvZHkuaW1hZ2VGcm9udDtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBzdHIgPSByZXEuYm9keS5pbWFnZUZyb250LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdHIpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkbid0IHBvc3QgM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkOiAnK215VGl0bGUrJyAnK215QXV0aG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5maW5kQnlJZEFuZFVwZGF0ZShyZXEuYm9keS5pZCwgcmVxLmJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3JzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICghYm9vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6ICchYm9vaycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gVGhlcmUgaXMgbm8gZ2l2ZW4gdGl0bGUgYW5kIGF1dGhvclxyXG4gICAgLy8gV2UgcmV0dXJuIGFsbCBib29rcyBhdmFpbGFibGVcclxuICAgIGVsc2UgaWYgKG15VGl0bGU9PScnICYmIG15QXV0aG9yPT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG51bWJlciA0JylcclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5ib29raWQpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxLmhlYWRlcnMuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvb2tJRCBoYXMgYmVlbiBwcm92aWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHdpbGwgdXNlIGJvb2tJRCB0byBmaW5kIGJvb2tcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXEuaGVhZGVycy5ib29raWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jvb2sgaWQgcHJlc2VudCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiByZXEuaGVhZGVycy5ib29raWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBib29rcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBib29rIGlkIGlzIHByb3ZpZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGFsbCBib29rcyBmcm9tIHRoZSBvd25lclxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQm9vayBpZCBub3QgcHJlc2VudCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJJRDogcmVxLmhlYWRlcnMuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBib29rcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rcyB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9zdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCA0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvL0RlbGV0aW5nIGJvb2sgcG9zdCBoZXJlIGluc3RlYWQgb2YgaW4gW2lkXS5qc1xyXG4gICAgICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gZGVsZXRlOiAnKyByZXEuYm9keS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRCb29rID0gYXdhaXQgQm9vay5kZWxldGVPbmUoeyBfaWQ6IHJlcS5ib2R5LmlkIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGV0ZWRCb29rKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHt9IH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6ICdzb21lIGVycm9yIGhhcHBlbm4nIH0pO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnNvbGUubG9nKCdpbnNpZGUgZGJDb25uZWN0Jyk7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcbi8vbW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdUcnlpbmcgdG8gY29ubmVjdCB0byBkYi4nKTtcclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdBYm92ZSBpZiBzdGF0ZW1lbnQuJylcclxuICAgIFxyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGIgb24gZnJvbSBmaXJzdCBjYWxsJylcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdhd2FpdGluZyBmb3IgZGIgY29ubmVjdGlvbicpXHJcbiAgICBcclxuICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgLy91c2VOZXdVcmxQYXJzZXI6IHRydWVcclxuICAgIC8vdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbn0pXHJcbiAgIFxyXG5cclxuaWYgKGRiLmNvbm5lY3Rpb25zKXtcclxuICAgIGNvbnNvbGUubG9nKCdcXG5Db25uZWN0aW9uIGV4aXN0JylcclxufVxyXG5lbHNle1xyXG4gICAgY29uc29sZS5sb2coJ25vIGNvbm5lY3Rpb25zIGZvdW5kJylcclxufVxyXG5cclxuICBcclxuICAgIFxyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCk7XHJcbiAgICBjb25zb2xlLmxvZygnZGIgaXMgb24uJylcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RiIG9uIGZyb20gc2Vjb25kIGNhbGwnKVxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==