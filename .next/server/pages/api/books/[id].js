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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modals/book */ \"./modals/book.js\");\n/* harmony import */ var _modals_book__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modals_book__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\ntry {\n  Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  console.log('db connected');\n} catch (error) {\n  console.log('Could not connect to database.');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);\n\n        if (!book) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: book\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'PUT':\n      try {\n        const book = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n\n        if (!book) {\n          return res.status(400).json({\n            success: '!book'\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: book\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: id\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      console.log('Set to delete: ' + id);\n\n      try {\n        const deletedBook = await _modals_book__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({\n          _id: id\n        });\n\n        if (!deletedBook) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: {}\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: 'some error happenn'\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYm9va3MvLmpzPzRjMjMiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsImJvb2siLCJCb29rIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImJvZHkiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlZEJvb2siLCJkZWxldGVPbmUiLCJfaWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0ZBLGtFQUFTO0FBQ1RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFFRCxDQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2hCRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUVDOztBQUdjLHNFQUFPRSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRixLQURIO0FBRUpDO0FBRkksTUFHSEosR0FISDs7QUFRQSxVQUFPSSxNQUFQO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1DLElBQUksR0FBRyxNQUFNQyxtREFBSSxDQUFDQyxRQUFMLENBQWNKLEVBQWQsQ0FBbkI7O0FBRUEsWUFBSSxDQUFDRSxJQUFMLEVBQVU7QUFDUixpQkFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXJCLENBQVA7QUFDRDs7QUFFRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVOO0FBQXZCLFNBQXJCO0FBRUQsT0FURCxDQVNFLE9BQU9OLEtBQVAsRUFBYztBQUNkLGVBQU9FLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQixDQUFQO0FBRUQ7O0FBQ0Q7O0FBRUYsU0FBSyxLQUFMO0FBQ0UsVUFBSTtBQUNGLGNBQU1MLElBQUksR0FBRyxNQUFNQyxtREFBSSxDQUFDTSxpQkFBTCxDQUF1QlQsRUFBdkIsRUFBMkJILEdBQUcsQ0FBQ2EsSUFBL0IsRUFBcUM7QUFDdERDLGFBQUcsRUFBRSxJQURpRDtBQUV0REMsdUJBQWEsRUFBRTtBQUZ1QyxTQUFyQyxDQUFuQjs7QUFLQSxZQUFJLENBQUNWLElBQUwsRUFBVTtBQUNSLGlCQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUNEOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRU47QUFBdkIsU0FBckI7QUFHRCxPQWJELENBYUUsT0FBT04sS0FBUCxFQUFjO0FBQ2QsZUFBT0UsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRVA7QUFBWCxTQUFyQixDQUFQO0FBQ0Q7O0FBQ0Q7O0FBRUYsU0FBSyxRQUFMO0FBQ0VOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFrQkssRUFBOUI7O0FBQ0EsVUFBSTtBQUNGLGNBQU1hLFdBQVcsR0FBRyxNQUFNVixtREFBSSxDQUFDVyxTQUFMLENBQWU7QUFBRUMsYUFBRyxFQUFFZjtBQUFQLFNBQWYsQ0FBMUI7O0FBRUEsWUFBSSxDQUFDYSxXQUFMLEVBQWlCO0FBQ2YsaUJBQU9mLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQUFyQixDQUFQO0FBRUQ7O0FBRURULFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFO0FBQXZCLFNBQXJCO0FBQ0QsT0FURCxDQVNFLE9BQU9aLEtBQVAsRUFBYztBQUNkLGVBQU9FLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQixDQUFQO0FBRUQ7O0FBQ0Q7O0FBQ0Y7QUFDRVQsU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFFQTtBQXZESjtBQThERCxDQXZFRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ib29rcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xuaW1wb3J0IEJvb2sgZnJvbSAnLi4vLi4vLi4vbW9kYWxzL2Jvb2snO1xuXG50cnkge1xuICBkYkNvbm5lY3QoKTtcbiAgY29uc29sZS5sb2coJ2RiIGNvbm5lY3RlZCcpXG4gIFxufSBjYXRjaCAoZXJyb3IpIHtcbmNvbnNvbGUubG9nKCdDb3VsZCBub3QgY29ubmVjdCB0byBkYXRhYmFzZS4nKVxuICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgbWV0aG9kXG4gIH09IHJlcTtcblxuICBcblxuXG4gIHN3aXRjaChtZXRob2Qpe1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBib29rID0gYXdhaXQgQm9vay5maW5kQnlJZChpZCk7XG5cbiAgICAgICAgaWYgKCFib29rKXtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KTtcblxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG5cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvb2sgPSBhd2FpdCBCb29rLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCByZXEuYm9keSwge1xuICAgICAgICAgIG5ldzogdHJ1ZSxcbiAgICAgICAgICBydW5WYWxpZGF0b3JzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghYm9vayl7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogJyFib29rJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogYm9vayB9KTtcblxuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBpZCB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIGNvbnNvbGUubG9nKCdTZXQgdG8gZGVsZXRlOiAnK2lkKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRCb29rID0gYXdhaXQgQm9vay5kZWxldGVPbmUoeyBfaWQ6IGlkIH0pO1xuXG4gICAgICAgIGlmICghZGVsZXRlZEJvb2spe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHt9IH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogJ3NvbWUgZXJyb3IgaGFwcGVubicgfSk7XG5cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuXG4gICAgICBicmVhaztcblxuICB9XG5cbiAgXG4gIFxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/books/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {}; //mongoose.set('useFindAndModify', false);\n\nconsole.log('Trying to connect to db.');\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    console.log('db on from first call');\n    return;\n  }\n\n  console.log('awaiting for db connection');\n  /*\n  const db = await mongoose.connect(process.env.MONGO_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n  })\n  */\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://profiles:MongoPass@cluster0-f8o3q.gcp.mongodb.net/profiles?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  console.log('db connected');\n  console.log(db.connections);\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n  console.log('db is on.');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQixDLENBQ0E7O0FBR0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaOztBQUNBLGVBQWVDLFNBQWYsR0FBMEI7QUFDdEIsTUFBSUgsVUFBVSxDQUFDSSxXQUFmLEVBQTRCO0FBQ3hCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBO0FBQ0g7O0FBRURELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBSUk7Ozs7Ozs7QUFNTCxRQUFNRyxFQUFFLEdBQUcsTUFBTUMsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsc0dBQWpCLEVBQXdDO0FBQ3hEQyxtQkFBZSxFQUFFLElBRHVDO0FBRXhEQyxzQkFBa0IsRUFBRTtBQUZvQyxHQUF4QyxDQUFqQjtBQU1DVCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxFQUFFLENBQUNNLFdBQWY7QUFLQVgsWUFBVSxDQUFDSSxXQUFYLEdBQXlCQyxFQUFFLENBQUNNLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUEzQztBQUNBWCxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBVSxDQUFDSSxXQUF2QjtBQUNBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7O0FBRWNDLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvZGJDb25uZWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xuLy9tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSk7XG5cblxuY29uc29sZS5sb2coJ1RyeWluZyB0byBjb25uZWN0IHRvIGRiLicpO1xuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCl7XG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RiIG9uIGZyb20gZmlyc3QgY2FsbCcpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnYXdhaXRpbmcgZm9yIGRiIGNvbm5lY3Rpb24nKVxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9KVxuICAgICovXG4gICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxufSlcbiAgIFxuXG4gICAgY29uc29sZS5sb2coJ2RiIGNvbm5lY3RlZCcpXG4gICAgY29uc29sZS5sb2coZGIuY29ubmVjdGlvbnMpXG5cbiAgXG4gICAgXG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKTtcbiAgICBjb25zb2xlLmxvZygnZGIgaXMgb24uJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

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