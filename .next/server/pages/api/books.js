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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kYWxzL2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJjb250ZW50VHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJCb29rIiwibW9kZWwiLCJkYkNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwicmVxIiwicmVzIiwibWV0aG9kIiwibXlUaXRsZSIsImhlYWRlcnMiLCJteUF1dGhvciIsImJvZHkiLCJpZCIsIm15SUQiLCJib29rcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImVycm9yIiwiYm9vayIsImNyZWF0ZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwibmV3IiwicnVuVmFsaWRhdG9ycyIsImJvb2tpZCIsIl9pZCIsImRlbGV0ZWRCb29rIiwiZGVsZXRlT25lIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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OEZIO0FBSUosQ0F6UkQsRTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFFQWYsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFFQSxNQUFNeUIsVUFBVSxHQUFHLEVBQW5CLEMsQ0FDQTs7QUFHQTFCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaOztBQUNBLGVBQWVGLFNBQWYsR0FBMEI7QUFFdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaOztBQUVBLE1BQUl5QixVQUFVLENBQUNDLFdBQWYsRUFBNEI7QUFDeEIzQixXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLFdBQU8sQ0FBUDtBQUNIOztBQUdERCxTQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWjtBQUVELFFBQU0yQixFQUFFLEdBQUcsTUFBTW5ELCtDQUFRLENBQUNvRCxPQUFULENBQWlCQyxzR0FBakIsRUFBd0MsQ0FDeEQ7QUFDQTtBQUZ3RCxHQUF4QyxDQUFqQjs7QUFNSCxNQUFJRixFQUFFLENBQUNHLFdBQVAsRUFBbUI7QUFDZi9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0gsR0FGRCxNQUdJO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0g7O0FBS0d5QixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0csV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBQ0FoQyxTQUFPLENBQUNDLEdBQVIsQ0FBWXlCLFVBQVUsQ0FBQ0MsV0FBdkI7QUFDQTNCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7O0FBQ0EsTUFBSXlCLFVBQVUsQ0FBQ0MsV0FBZixFQUE0QjtBQUN4QjNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0EsV0FBTyxDQUFQO0FBQ0g7QUFHSjs7QUFFY0Ysd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoREEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2Jvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYm9va3MvaW5kZXguanNcIik7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBCb29rU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcclxuICAgICAgICB0cmltOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzEyMCwgJ1RpdGxlIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTIwLCAnYXV0aG9yIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG5cclxuICAgIG93bmVySUQ6e1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgIH0sXHJcbiAgICBvd25lck5hbWU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBpbWFnZUZyb250OiBcclxuICAgIHsgXHJcbiAgICAgICAgZGF0YTogU3RyaW5nLCBcclxuICAgICAgICBjb250ZW50VHlwZTogU3RyaW5nIFxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLkJvb2sgfHwgbW9uZ29vc2UubW9kZWwoJ0Jvb2snLFxyXG5Cb29rU2NoZW1hKTsiLCJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XHJcbmltcG9ydCBCb29rIGZyb20gJy4uLy4uLy4uL21vZGFscy9ib29rJztcclxuXHJcbmRiQ29ubmVjdCgpO1xyXG5cclxuY29uc29sZS5sb2coJ2luc2lkZSB0aGUgbWFpbiBib29rICcpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuIFxyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTsgXHJcblxyXG4gICAgY29uc29sZS5sb2coJ21ldGhvZCBpcyAnKyBtZXRob2QpXHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIHZhciBteVRpdGxlID0gcmVxLmhlYWRlcnMudGl0bGU7XHJcbiAgICB2YXIgbXlBdXRob3IgPSByZXEuaGVhZGVycy5hdXRob3I7XHJcblxyXG4gICAgaWYgKHJlcS5ib2R5LmlkKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQgcHJlc2VudC4nKVxyXG4gICAgICAgIGNvbnN0IG15SUQgPSByZXEuYm9keS5pZDtcclxuICAgICAgICBteVRpdGxlID0gcmVxLmJvZHkudGl0bGU7XHJcbiAgICAgICAgbXlBdXRob3IgPSByZXEuYm9keS5hdXRob3I7XHJcbiAgICAgICAgLy9jb25zdCBvd25lcklEID0gcmVxLmJvZHkub3duZXJJRDtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RpdGxlIGlzICcrbXlUaXRsZSk7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aG9yIGlzICcrIG15QXV0aG9yKTtcclxuICAgIC8vY29uc29sZS5sb2cocmVxLmJvZHkuaW1hZ2VGcm9udC5kYXRhWzBdKTtcclxuXHJcblxyXG4gICBcclxuICAgIC8vIEluIGNhc2Ugd2UgaGF2ZSBvbmx5IHRoZSBhdXRob3IgYXMgaW5wdXQsIHdlIHdpbGwgbG9va2luZ1xyXG4gICAgLy8gZm9yIGFsbCBib29rcyB3aXRoIHRoYXQgYXV0aG9yXHJcbiAgICBpZiAobXlUaXRsZT09JycgJiYgbXlBdXRob3IhPScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gdGl0bGUnKVxyXG5cclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NvcnQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyd0aXRsZSc6IG15VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcic6IG15QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9yIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bvc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSlcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkbid0IHBvc3QgMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vSW4gY2FzZSBvbmx5IHRoZSB0aXRsZSBpcyBnaXZlbiBhcyBpbnB1dCxcclxuICAgIC8vIExvb2sgZm9yIGFsbCBib29rcyB3aXRoIHRoYXQgdGl0bGVcclxuICAgIGVsc2UgaWYgKG15QXV0aG9yPT0nJyAmJiBteVRpdGxlIT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGF1dGhvcicpO1xyXG5cclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NvcnQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBteVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJ2F1dGhvcic6ICdSb2JlcnQgS2l5b3Nha2knXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaXRsZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlciBpbnB1dCBib3RoIHRoZSB0aXRsZSBhbmQgdGhlIGF1dGhvclxyXG4gICAgLy8gUmV0dXJuIGJvb2sgbWF0Y2hpbmcgYm90aFxyXG4gICAgZWxzZSBpZiAobXlUaXRsZSE9JycgJiYgbXlBdXRob3IhPScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbXkgdGl0bGUgaXM6ICcrIG15VGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdteSBhdXRob3IgaXM6ICcrIG15QXV0aG9yKTtcclxuICAgICAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb3J0IGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogbXlUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcic6IG15QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jvb2tzIGFyZSByZWFkeScpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suY3JlYXRlKHJlcS5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBzdHIgPSByZXEuYm9keS5pbWFnZUZyb250O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIHN0ciA9IHJlcS5ib2R5LmltYWdlRnJvbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0cilcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bGRuJ3QgcG9zdCAzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6ICcrbXlUaXRsZSsnICcrbXlBdXRob3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5ib2R5LmlkLCByZXEuYm9keSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFib29rKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogJyFib29rJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2sgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBUaGVyZSBpcyBubyBnaXZlbiB0aXRsZSBhbmQgYXV0aG9yXHJcbiAgICAvLyBXZSByZXR1cm4gYWxsIGJvb2tzIGF2YWlsYWJsZVxyXG4gICAgZWxzZSBpZiAobXlUaXRsZT09JycgJiYgbXlBdXRob3I9PScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gbnVtYmVyIDQnKVxyXG4gICAgICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzLmJvb2tpZClcclxuICAgICAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9va0lEIGhhcyBiZWVuIHByb3ZpZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugd2lsbCB1c2UgYm9va0lEIHRvIGZpbmQgYm9va1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcS5oZWFkZXJzLmJvb2tpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQm9vayBpZCBwcmVzZW50JylcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IHJlcS5oZWFkZXJzLmJvb2tpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGJvb2tzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGJvb2sgaWQgaXMgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYWxsIGJvb2tzIGZyb20gdGhlIG93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCb29rIGlkIG5vdCBwcmVzZW50JylcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgQm9vay5maW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcklEOiByZXEuaGVhZGVycy5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGJvb2tzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rcyA9IGF3YWl0IEJvb2suZmluZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJvb2tzIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VsZG4ndCBwb3N0IDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8vRGVsZXRpbmcgYm9vayBwb3N0IGhlcmUgaW5zdGVhZCBvZiBpbiBbaWRdLmpzXHJcbiAgICAgICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBkZWxldGU6ICcrIHJlcS5ib2R5LmlkKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZEJvb2sgPSBhd2FpdCBCb29rLmRlbGV0ZU9uZSh7IF9pZDogcmVxLmJvZHkuaWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVsZXRlZEJvb2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YToge30gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogJ3NvbWUgZXJyb3IgaGFwcGVubicgfSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc29sZS5sb2coJ2luc2lkZSBkYkNvbm5lY3QnKTtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuLy9tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ1RyeWluZyB0byBjb25uZWN0IHRvIGRiLicpO1xyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKXtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ0Fib3ZlIGlmIHN0YXRlbWVudC4nKVxyXG4gICAgXHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYiBvbiBmcm9tIGZpcnN0IGNhbGwnKVxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2F3YWl0aW5nIGZvciBkYiBjb25uZWN0aW9uJylcclxuICAgIFxyXG4gICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAvL3VzZU5ld1VybFBhcnNlcjogdHJ1ZVxyXG4gICAgLy91c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxufSlcclxuICAgXHJcblxyXG5pZiAoZGIuY29ubmVjdGlvbnMpe1xyXG4gICAgY29uc29sZS5sb2coJ1xcbkNvbm5lY3Rpb24gZXhpc3QnKVxyXG59XHJcbmVsc2V7XHJcbiAgICBjb25zb2xlLmxvZygnbm8gY29ubmVjdGlvbnMgZm91bmQnKVxyXG59XHJcblxyXG4gIFxyXG4gICAgXHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYiBpcyBvbi4nKVxyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZGIgb24gZnJvbSBzZWNvbmQgY2FsbCcpXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9