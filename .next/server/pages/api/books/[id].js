module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/books/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modals/book.js":
/*!************************!*\
  !*** ./modals/book.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst BookSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, 'Please add a title'],\n    trim: true,\n    maxlength: [120, 'Title cannot be more than 40 characters']\n  },\n  author: {\n    type: String,\n    required: true,\n    maxlength: [120, 'author cannot be more than 40 characters']\n  },\n  ownerID: {\n    type: Number\n  },\n  ownerName: {\n    type: String\n  },\n  imageFront: {\n    data: String,\n    contentType: String\n  }\n});\nmodule.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RhbHMvYm9vay5qcz9mZDc5Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkJvb2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJhdXRob3IiLCJvd25lcklEIiwiTnVtYmVyIiwib3duZXJOYW1lIiwiaW1hZ2VGcm9udCIsImRhdGEiLCJjb250ZW50VHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJCb29rIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ25DQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxvQkFBUCxDQUZQO0FBR0hDLFFBQUksRUFBRSxJQUhIO0FBSUhDLGFBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSx5Q0FBTjtBQUpSLEdBRDRCO0FBT25DQyxRQUFNLEVBQUM7QUFDSEwsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxJQUZQO0FBR0hFLGFBQVMsRUFBRSxDQUFDLEdBQUQsRUFBTSwwQ0FBTjtBQUhSLEdBUDRCO0FBYW5DRSxTQUFPLEVBQUM7QUFDSk4sUUFBSSxFQUFFTztBQURGLEdBYjJCO0FBZ0JuQ0MsV0FBUyxFQUFDO0FBQ05SLFFBQUksRUFBRUM7QUFEQSxHQWhCeUI7QUFtQm5DUSxZQUFVLEVBQ1Y7QUFDSUMsUUFBSSxFQUFFVCxNQURWO0FBRUlVLGVBQVcsRUFBRVY7QUFGakI7QUFwQm1DLENBQXBCLENBQW5CO0FBMkJBVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixRQUFRLENBQUNtQixNQUFULENBQWdCQyxJQUFoQixJQUF3QnBCLFFBQVEsQ0FBQ3FCLEtBQVQsQ0FBZSxNQUFmLEVBQ3pDbkIsVUFEeUMsQ0FBekMiLCJmaWxlIjoiLi9tb2RhbHMvYm9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuY29uc3QgQm9va1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIHRpdGxlJ10sXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIG1heGxlbmd0aDogWzEyMCwgJ1RpdGxlIGNhbm5vdCBiZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVycyddXG4gICAgfSxcbiAgICBhdXRob3I6e1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBtYXhsZW5ndGg6IFsxMjAsICdhdXRob3IgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzJ11cbiAgICB9LFxuXG4gICAgb3duZXJJRDp7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICAgIG93bmVyTmFtZTp7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGltYWdlRnJvbnQ6IFxuICAgIHsgXG4gICAgICAgIGRhdGE6IFN0cmluZywgXG4gICAgICAgIGNvbnRlbnRUeXBlOiBTdHJpbmcgXG4gICAgfVxuXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKCdCb29rJyxcbkJvb2tTY2hlbWEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modals/book.js\n");

/***/ }),

/***/ "./pages/api/books/[id].js":
/*!*********************************!*\
  !*** ./pages/api/books/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modals/book */ \"./modals/book.js\");\n/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals_book__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);\n\n        if (!book) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: book\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'PUT':\n      try {\n        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n\n        if (!book) {\n          return res.status(400).json({\n            success: '!book'\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: book\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: id\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      console.log('Set to delete: ' + id);\n\n      try {\n        const deletedBook = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({\n          _id: id\n        });\n\n        if (!deletedBook) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: {}\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: 'some error happenn'\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYm9va3MvLmpzPzRjMjMiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsImJvb2siLCJCb29rIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlZEJvb2siLCJkZWxldGVPbmUiLCJfaWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxnRUFBUztBQUVNLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRixLQURIO0FBRUpDO0FBRkksTUFHSEosR0FISDs7QUFRQSxVQUFPSSxNQUFQO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1DLElBQUksR0FBRyxNQUFNQyxtREFBSSxDQUFDQyxRQUFMLENBQWNKLEVBQWQsQ0FBbkI7O0FBRUEsWUFBSSxDQUFDRSxJQUFMLEVBQVU7QUFDUixpQkFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXJCLENBQVA7QUFDRDs7QUFFRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVOO0FBQXZCLFNBQXJCO0FBRUQsT0FURCxDQVNFLE9BQU9PLEtBQVAsRUFBYztBQUNkLGVBQU9YLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQixDQUFQO0FBRUQ7O0FBQ0Q7O0FBRUYsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1MLElBQUksR0FBRyxNQUFNQyxtREFBSSxDQUFDTyxpQkFBTCxDQUF1QlYsRUFBdkIsRUFBMkJILEdBQUcsQ0FBQ2MsSUFBL0IsRUFBcUM7QUFDdERDLGFBQUcsRUFBRSxJQURpRDtBQUV0REMsdUJBQWEsRUFBRTtBQUZ1QyxTQUFyQyxDQUFuQjs7QUFLQSxZQUFJLENBQUNYLElBQUwsRUFBVTtBQUNSLGlCQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUNEOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRU47QUFBdkIsU0FBckI7QUFHRCxPQWJELENBYUUsT0FBT08sS0FBUCxFQUFjO0FBQ2QsZUFBT1gsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRVA7QUFBWCxTQUFyQixDQUFQO0FBQ0Q7O0FBQ0Q7O0FBRUYsU0FBSyxRQUFMO0FBQ0VjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFrQmYsRUFBOUI7O0FBQ0EsVUFBSTtBQUNGLGNBQU1nQixXQUFXLEdBQUcsTUFBTWIsbURBQUksQ0FBQ2MsU0FBTCxDQUFlO0FBQUVDLGFBQUcsRUFBRWxCO0FBQVAsU0FBZixDQUExQjs7QUFFQSxZQUFJLENBQUNnQixXQUFMLEVBQWlCO0FBQ2YsaUJBQU9sQixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUVEOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRTtBQUF2QixTQUFyQjtBQUNELE9BVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxlQUFPWCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckIsQ0FBUDtBQUVEOztBQUNEOztBQUNGO0FBQ0VULFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBRUE7QUF2REo7QUE4REQsQ0F2RUQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYm9va3MvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcbmltcG9ydCBCb29rIGZyb20gJy4uLy4uLy4uL21vZGFscy9ib29rJztcblxuZGJDb25uZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgICBtZXRob2RcbiAgfT0gcmVxO1xuXG4gIFxuXG5cbiAgc3dpdGNoKG1ldGhvZCl7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmZpbmRCeUlkKGlkKTtcblxuICAgICAgICBpZiAoIWJvb2spe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pO1xuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQVVQnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9vayA9IGF3YWl0IEJvb2suZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XG4gICAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFib29rKXtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiAnIWJvb2snIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBib29rIH0pO1xuXG5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGlkIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgY29uc29sZS5sb2coJ1NldCB0byBkZWxldGU6ICcraWQpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVsZXRlZEJvb2sgPSBhd2FpdCBCb29rLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSk7XG5cbiAgICAgICAgaWYgKCFkZWxldGVkQm9vayl7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YToge30gfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiAnc29tZSBlcnJvciBoYXBwZW5uJyB9KTtcblxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gIH1cblxuICBcbiAgXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/books/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useFindAndModify', false);\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://profiles:MongoPass@cluster0-f8o3q.gcp.mongodb.net/profiles?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  /*\n  mongoose.connect(process.env.MONGODB_URI).catch(function (reason) {\n  console.log('Unable to connect to the mongodb instance. Error: ', reason);\n  });\n  */\n\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwibW9uZ29vc2UiLCJzZXQiLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjtBQUNBQywrQ0FBUSxDQUFDQyxHQUFULENBQWEsa0JBQWIsRUFBaUMsS0FBakM7O0FBRUEsZUFBZUMsU0FBZixHQUEwQjtBQUN0QixNQUFJSCxVQUFVLENBQUNJLFdBQWYsRUFBNEI7QUFDeEI7QUFDSDs7QUFHRCxRQUFNQyxFQUFFLEdBQUcsTUFBTUosK0NBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsc0dBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBRTtBQUZpQyxHQUF4QyxDQUFqQjtBQU1BOzs7Ozs7QUFPQVQsWUFBVSxDQUFDSSxXQUFYLEdBQXlCQyxFQUFFLENBQUNLLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUEzQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWIsVUFBVSxDQUFDSSxXQUF2QjtBQUNIOztBQUVjRCx3RUFBZiIsImZpbGUiOiIuL3V0aWxzL2RiQ29ubmVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKTtcblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCl7XG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9KTtcbiAgICBcblxuICAgIC8qXG4gICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKS5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBtb25nb2RiIGluc3RhbmNlLiBFcnJvcjogJywgcmVhc29uKTtcbn0pO1xuKi9cbiAgICBcblxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });