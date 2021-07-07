module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "storefront-ui.common." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"31d6cfe0","2":"f32eaac2","3":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpstorefront_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpstorefront_ui"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77a8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDivider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0312":
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "090f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de8c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1017");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordionItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0dc8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasArithmeticExpression; });
/* harmony import */ var _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("539b");
/* harmony import */ var _constants_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("59b3");


var OPERATORS_REGEX = "((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))";
var mapArithmeticExpression = function (orgExpression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return orgExpression.replace(regex, function (match) { return _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__[/* ArithmeticExpression */ "b"][match]; });
};
var mapPredefinedVariables = function (orgExpression) {
    var regex = new RegExp(_constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__[/* PreDefinedPatterns */ "c"], 'g');
    return orgExpression.replace(regex, function (match, p, index) { return orgExpression[index - 1] === _constants_variable__WEBPACK_IMPORTED_MODULE_1__[/* Prefix */ "b"] ? match : _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__[/* PredefinedVariables */ "d"][match]; });
};
var formatValue = function (value) { return isNaN(value) ? convert(value) : value; };
var convert = function (expression) {
    if (!expression)
        return '';
    var mappedArithmetic = mapArithmeticExpression(expression);
    var converted = mapPredefinedVariables(mappedArithmetic);
    return converted.replace(/[ _]+/g, '_');
};
var hasArithmeticExpression = function (expression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return regex.test(expression);
};


/***/ }),

/***/ "0f8e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5679");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1017":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "10d1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("da84");
var redefineAll = __webpack_require__("e2cc");
var InternalMetadataModule = __webpack_require__("f183");
var collection = __webpack_require__("6d61");
var collectionWeak = __webpack_require__("acac");
var isObject = __webpack_require__("861d");
var enforceIternalState = __webpack_require__("69f3").enforce;
var NATIVE_WEAK_MAP = __webpack_require__("7f9a");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "124c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65b1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "13df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "14ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "1620":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa57");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1a03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCimage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6bc3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCimage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCimage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d31":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1f80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSlidingSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d6c0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSlidingSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSlidingSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "293b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa38");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfQuantitySelector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2977":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a102");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5b37");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFooter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2a77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5841");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a90":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2edb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "332e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fc4a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "368d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "36e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGroupedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("332e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGroupedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGroupedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "36f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0dc8");

var resize = function (_a) {
    var type = _a.type, width = _a.width, height = _a.height, aspectRatio = _a.aspectRatio;
    var w = width ? "w_" + Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* formatValue */ "b"])(width) : '';
    var h = height ? "h_" + Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* formatValue */ "b"])(height) : '';
    var crop = type ? "c_" + type : '';
    var ar = aspectRatio ? "ar_" + Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* formatValue */ "b"])(aspectRatio) : '';
    return [crop, w, h, ar].filter(Boolean).join();
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "398e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2edb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3992":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "39f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f271");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProperty_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3d1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfContentPages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4fd4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfContentPages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfContentPages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "406f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "4182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a635");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "445f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var res = maybeCallNative(nativeMatch, this, string);
      if (res.done) return res.value;

      var rx = anObject(this);
      var S = String(string);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "46dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae78");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfReview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4a81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("368d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4afd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4c25":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4fd4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "5264":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "52b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, this, string, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(this);
      var S = String(string);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "532b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d082");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5371":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfComponentSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8860");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfComponentSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfComponentSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "539b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArithmeticExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PredefinedVariables; });
/* unused harmony export Prefix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PreDefinedPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptNumbericVars; });
var ArithmeticExpression = {
    "=": 'eq',
    "!=": 'ne',
    "<": 'lt',
    ">": 'gt',
    "<=": 'lte',
    ">=": 'gte',
    "&&": 'and',
    "||": 'or',
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow",
};
var PredefinedVariables = {
    width: 'w',
    height: 'h',
    x: 'x',
    y: 'y',
    quality: 'q',
    if: 'if',
    aspectRatio: 'ar',
    rotate: 'a',
    opacity: 'o',
    radius: 'r',
    dpr: 'dpr',
    effect: 'e',
    border: 'bo',
    currentPage: 'cp',
    preview: 'preview:duration',
    duration: 'du',
    faceCount: 'fc',
    initialAspectRatio: 'iar',
    initialDuration: 'idu',
    initialHeight: 'ih',
    initialWidth: 'iw',
    pageCount: 'pc',
    pageX: 'px',
    pageY: 'py',
    tags: 'tags',
};
var Prefix = '$';
var PreDefinedPatterns = "(" + Object.keys(PredefinedVariables).join('|') + ")";
var AcceptNumbericVars = ['quality', 'if', 'rotate', 'zoom', 'opacity', 'radius', 'effect', 'dpr'];


/***/ }),

/***/ "53b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ecd7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5463":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7d6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "54d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a123");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfArrow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5679":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "573b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "574c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5841":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "58ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e59");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "59b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Prefix; });
/* unused harmony export StringBound */
/* unused harmony export ValueAssignable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formats; });
var Prefix = '$';
var StringBound = '!';
var ValueAssignable = {
    context: "ctx",
    structureMetadata: "md"
};
var Formats = {
    integer: 'to_i',
    float: 'to_f'
};


/***/ }),

/***/ "59f4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5b37":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "625c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4c25");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLoader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "674a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7bb6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "68cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6980":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6b8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5264");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6bc3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6df4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ed7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6fdd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70ad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "745e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "75dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c99e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfNotification_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "77a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "77bf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "77fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("70ad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBreadcrumbs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7814":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9a5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7a03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ed7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7bb6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7ca0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0dc8");

var position = function (_a) {
    var x = _a.x, y = _a.y;
    var xAxis = x ? "x_" + Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* formatValue */ "b"])(x) : '';
    var yAxis = y ? "y_" + Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* formatValue */ "b"])(y) : '';
    return [xAxis, yAxis].filter(Boolean).join();
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "80ce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bf06");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "8324":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "84a2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "85a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductOption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d31");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductOption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductOption_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8860":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8884":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("573b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "888f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8ac8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("090f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8cc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c965");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBullets_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8e59":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8f2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("574c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfChevron_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3992");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "96c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("13df");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "98be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c0c9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfGallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9c5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd3b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9ee3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
var RE = function (s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a082":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a102":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a123":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a25d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("445f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHero_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a3dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4afd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfColorPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a44b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a483":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("745e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCheckbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a4ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a635":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a72c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a7f2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a941":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77bf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aa38":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aa57":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "acac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__("e2cc");
var getWeakData = __webpack_require__("f183").getWeakData;
var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var ArrayIterationModule = __webpack_require__("b727");
var $has = __webpack_require__("5135");
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae78":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b1a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "b7b5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCategoryCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCategoryCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCategoryCard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bb21":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bc83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59f4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfDropdown_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bd3b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bf06":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c0c9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c20d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var trim = __webpack_require__("58a8").trim;
var whitespaces = __webpack_require__("5899");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "c2f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCollectedProduct_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c4c3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c4e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("406f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPrice_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c510":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSFORMERS; });
var SEO_TYPES = {
    "image/upload": "images",
    "image/private": "private_images",
    "image/authenticated": "authenticated_images",
    "raw/upload": "files",
    "video/upload": "videos"
};
var TRANSFORMERS = {
    angle: 'a',
    rotate: 'a',
    background: 'b',
    color: 'co',
    colorSpace: 'cs',
    customFunction: 'fn',
    defaultImage: 'd',
    density: 'dn',
    dpr: 'dpr',
    opacity: 'o',
    format: 'f',
    gravity: 'g',
    overlay: 'l',
    page: 'pg',
    prefix: 'p',
    quality: 'q',
    radius: 'r',
    bitRate: 'br',
    keyframeInterval: 'ki',
    audioCodec: 'ac',
    audioFrequency: 'af',
    delay: 'dl',
    ocr: 'ocr',
    streamingProfile: 'sp',
    transformation: 't',
    underlay: 'u',
    videoCodec: 'vc',
    videoSampling: 'vs',
    zoom: 'z'
};


/***/ }),

/***/ "c5fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ee3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c772":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db3a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c787":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getResize", function() { return /* binding */ getResize; });
__webpack_require__.d(__webpack_exports__, "getBorder", function() { return /* binding */ getBorder; });
__webpack_require__.d(__webpack_exports__, "getPosition", function() { return /* binding */ getPosition; });
__webpack_require__.d(__webpack_exports__, "getTransformations", function() { return /* binding */ getTransformations; });
__webpack_require__.d(__webpack_exports__, "transform", function() { return /* binding */ transform; });
__webpack_require__.d(__webpack_exports__, "toTransformationStr", function() { return /* binding */ toTransformationStr; });

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/constants/index.js
var constants = __webpack_require__("c510");

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/constants/arithmetic.js
var arithmetic = __webpack_require__("539b");

// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/condition.js
var ConditionOperators = {
    equal: "eq",
    notEqual: "ne",
    lessThan: "lt",
    greaterThan: "gt",
    lessOrEqual: "lte",
    greaterOrEqual: "gte",
    include: "in",
    notInclude: "nin",
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/constants/condition.js
var ConditionalParams = {
    width: 'w',
    initialWidth: 'iw',
    height: 'h',
    initialHeight: 'ih',
    aspectRatio: 'ar',
    intialAspectRatio: 'iar',
    context: 'ctx',
    metadata: 'md',
    tags: 'tags',
    trimmedAspectRatio: 'tar',
    currentPage: 'cp',
    faceCount: 'fc',
    pageCount: 'pc',
    pageXOffset: 'px',
    pageYOffset: 'py',
    initialDensity: 'idn',
    illustration: 'ils',
    pageNames: 'pgnames'
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/utils.js
var utils_toString = function (arr, separation) {
    if (separation === void 0) { separation = ':'; }
    return arr.filter(Boolean).join(separation);
};
var cleanText = function (text) { return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1'); };

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/condition.js




var computeCondition = function (conditionObj) {
    var expression = conditionObj.expression ? utils_toString(conditionObj.expression.map(function (exp) { return computeConditionExpression(exp); }), '_and_') : '';
    var transformations = conditionObj.transformations.map(function (transformation) { return toTransformationStr(transformers(transformation)); });
    return {
        expression: expression,
        transformations: utils_toString(transformations, '/')
    };
};
var mapCharacteristic = function (expression) { return ConditionalParams[expression] || expression; };
var computeConditionExpression = function (expression) {
    var characteristic = Array.isArray(expression.characteristic) ? utils_toString(expression.characteristic.map(mapCharacteristic)) : mapCharacteristic(expression.characteristic);
    var operator = ConditionOperators[expression.operator];
    var value = isNaN(expression.value) ? "!" + expression.value + "!" : expression.value;
    return utils_toString([characteristic, operator, value], '_');
};
var condition = function (conditionObj) {
    if (!conditionObj || !conditionObj.if || !conditionObj.if.expression)
        return '';
    var ifCondition = computeCondition(conditionObj.if);
    var elseCondition = conditionObj.else ? computeCondition(conditionObj.else) : null;
    var formattedIf = utils_toString(["if_" + ifCondition.expression, ifCondition.transformations], '/');
    var formattedElse = elseCondition ? utils_toString(['if_else', elseCondition.transformations], '/') : '';
    return [utils_toString([formattedIf, formattedElse, 'if_end'], '/')];
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/effect.js

var effect = function (obj) {
    var isString = typeof obj === 'string';
    if (!obj || (!isString && !obj.name))
        return '';
    if (isString || !obj.value)
        return "e_" + (obj.name || obj);
    var value = Array.isArray(obj.value) ? obj.value.join(':') : obj.value;
    var effectValue = utils_toString([obj.name, value]);
    return "e_" + effectValue;
};

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js
var transformers_expression = __webpack_require__("0dc8");

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/flags.js
var flags = function (value) {
    if (!value || value.length === 0)
        return '';
    var flagValue = typeof value === 'string' ? value : value.join(':');
    return "fl_" + flagValue;
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/rawTransformation.js
var rawTransformation = function (value) { return value; };

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/constants/variable.js
var constants_variable = __webpack_require__("59b3");

// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/variable.js
var ValueAssignable = {
    context: "ctx",
    structureMetadata: "md"
};
var VariableFormats = {
    integer: 'integer',
    float: 'float'
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/variables.js




var convertStringValueType = function (value) {
    if (!value || !value.expression)
        return '';
    var expression = Array.isArray(value.expression) ? utils_toString(value.expression) : value.expression;
    var isArithmetic = Object(transformers_expression["c" /* hasArithmeticExpression */])(expression);
    var convertedExpression = Object(transformers_expression["a" /* convert */])(expression);
    var format = constants_variable["a" /* Formats */][value.formatAs] || '';
    var mappedExpression = convertedExpression && !isArithmetic ? "!" + convertedExpression + "!" : convertedExpression;
    return utils_toString([mappedExpression, format], '_');
};
var computeVariable = function (variable) {
    var name = "" + constants_variable["b" /* Prefix */] + variable.name;
    var value = variable.value;
    if (isNaN(variable.value)) {
        if (Array.isArray(variable.value)) {
            value = utils_toString(variable.value);
        }
        else {
            value = convertStringValueType(variable.value);
        }
    }
    var varValue = utils_toString([ValueAssignable[variable.assignFrom], value], ':');
    return varValue ? utils_toString([name, varValue], '_') : '';
};
var variables = function (value) {
    if (!value)
        return '';
    if (!Array.isArray(value))
        return computeVariable(value);
    return utils_toString(value.map(function (variable) { return computeVariable(variable); }), ',');
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/video/fps.js

var fps = function (value) {
    var isObj = typeof value === 'object';
    if (!value || (isObj && !value.min))
        return '';
    var range = isObj ? utils_toString([value.min, value.max], '-') : value;
    return "fps_" + range;
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/video/offset.js
var offset = function (obj) {
    if (!obj)
        return '';
    var start = obj.start ? "so_" + obj.start : '';
    var end = obj.end ? "eo_" + obj.end : '';
    var duration = obj.duration ? "du_" + obj.duration : '';
    return [start, end, duration].filter(Boolean).join(',');
};

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/index.js










var getResize = function (options) {
    var hasResize = options.resize || options.width || options.height || options.aspectRatio;
    if (!hasResize)
        return '';
    var resize = __webpack_require__("36f1").resize;
    return resize(options.resize || { width: options.width, height: options.height, type: options.crop, aspectRatio: options.aspectRatio });
};
var getBorder = function (options) {
    if (!options.border)
        return '';
    var border = __webpack_require__("f2d0").border;
    var borderModification = (typeof options.border === 'string') ? "bo_" + options.border : border(options.border);
    return borderModification;
};
var getPosition = function (options) {
    if (!options.x && !options.y && !options.position)
        return '';
    var position = __webpack_require__("7ca0").position;
    return position(options.position || { x: options.x, y: options.y });
};
var getTransformations = function (options) {
    var result = [];
    result.push(variables(options.variables));
    result.push(getResize(options));
    result.push(getBorder(options));
    result.push(getPosition(options));
    result.push(fps(options.fps));
    result.push(offset(options.offset));
    for (var modifier in options) {
        var value = options[modifier];
        var mapping = constants["b" /* TRANSFORMERS */][modifier];
        if (!mapping || !value)
            continue;
        var isAcceptedNumberic = arithmetic["a" /* AcceptNumbericVars */].includes(modifier);
        result.push(mapping + "_" + (isAcceptedNumberic ? Object(transformers_expression["b" /* formatValue */])(value) : value));
    }
    result.push(effect(options.effect));
    result.push(flags(options.flags));
    result.push(rawTransformation(options.rawTransformation));
    result.push(condition(options.condition));
    return result.filter(Boolean);
};
var transform = function (options) {
    var transformations = getTransformations(options);
    var chainedTransformations = options.transformation || options.chaining;
    if (chainedTransformations && Array.isArray(chainedTransformations)) {
        chainedTransformations.forEach(function (chained) {
            var chainedTransformation = getTransformations(chained);
            chainedTransformation.length > 0 && transformations.push(chainedTransformation);
        });
    }
    return transformations.filter(Boolean);
};
var toTransformationStr = function (transformations) { return transformations.reduce(function (str, transformation) {
    var isChained = Array.isArray(transformation);
    var separation = isChained ? '/' : ',';
    return "" + str + (str ? separation : '') + transformation.toString();
}, ''); };
/* harmony default export */ var transformers = __webpack_exports__["default"] = (transform);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c965":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c99e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c9fa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce7d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4c3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6fdd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a72c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfCharacteristic_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ce13":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce7d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d082":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d168":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d6c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da1c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a7f2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAlert_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "db3a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "de2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("888f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "de8c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e25e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var parseIntImplementation = __webpack_require__("c20d");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e2e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a90");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e596":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0a8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e6a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e7d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e878":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6df4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfMegaMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "eb32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a44b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAddToCart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ec3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4ef");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfAccordion_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ecd7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eee5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a082");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f0a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f167":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfStoreLocator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d1f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfStoreLocator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfStoreLocator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f271":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f2d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0dc8");

var border = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'solid' : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, width = _a.width;
    if (!width)
        return '';
    var formattedValue = isNaN(width) ? Object(_expression__WEBPACK_IMPORTED_MODULE_0__[/* convert */ "a"])(width) : width + "px";
    return "bo_" + formattedValue + "_" + type + "_" + color;
};


/***/ }),

/***/ "f52f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("14ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfProductCardHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f7fe":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f86c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d168");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f996":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce13");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SfArrow", function() { return /* reexport */ SfArrow; });
__webpack_require__.d(__webpack_exports__, "SfBadge", function() { return /* reexport */ SfBadge; });
__webpack_require__.d(__webpack_exports__, "SfBreadcrumbs", function() { return /* reexport */ SfBreadcrumbs; });
__webpack_require__.d(__webpack_exports__, "SfBullets", function() { return /* reexport */ SfBullets; });
__webpack_require__.d(__webpack_exports__, "SfButton", function() { return /* reexport */ SfButton; });
__webpack_require__.d(__webpack_exports__, "SfChevron", function() { return /* reexport */ SfChevron; });
__webpack_require__.d(__webpack_exports__, "SfCimage", function() { return /* reexport */ SfCimage; });
__webpack_require__.d(__webpack_exports__, "SfCircleIcon", function() { return /* reexport */ SfCircleIcon; });
__webpack_require__.d(__webpack_exports__, "SfColor", function() { return /* reexport */ SfColor; });
__webpack_require__.d(__webpack_exports__, "SfDivider", function() { return /* reexport */ SfDivider; });
__webpack_require__.d(__webpack_exports__, "SfHeading", function() { return /* reexport */ SfHeading; });
__webpack_require__.d(__webpack_exports__, "SfIcon", function() { return /* reexport */ SfIcon; });
__webpack_require__.d(__webpack_exports__, "SfImage", function() { return /* reexport */ SfImage; });
__webpack_require__.d(__webpack_exports__, "SfInput", function() { return /* reexport */ SfInput; });
__webpack_require__.d(__webpack_exports__, "SfLink", function() { return /* reexport */ SfLink; });
__webpack_require__.d(__webpack_exports__, "SfLoader", function() { return /* reexport */ SfLoader; });
__webpack_require__.d(__webpack_exports__, "SfOverlay", function() { return /* reexport */ SfOverlay; });
__webpack_require__.d(__webpack_exports__, "SfPrice", function() { return /* reexport */ SfPrice; });
__webpack_require__.d(__webpack_exports__, "SfProperty", function() { return /* reexport */ SfProperty; });
__webpack_require__.d(__webpack_exports__, "SfQuantitySelector", function() { return /* reexport */ SfQuantitySelector; });
__webpack_require__.d(__webpack_exports__, "SfRating", function() { return /* reexport */ SfRating; });
__webpack_require__.d(__webpack_exports__, "SfTextarea", function() { return /* reexport */ SfTextarea; });
__webpack_require__.d(__webpack_exports__, "SfAddToCart", function() { return /* reexport */ SfAddToCart; });
__webpack_require__.d(__webpack_exports__, "SfAlert", function() { return /* reexport */ SfAlert; });
__webpack_require__.d(__webpack_exports__, "SfBanner", function() { return /* reexport */ SfBanner; });
__webpack_require__.d(__webpack_exports__, "SfBar", function() { return /* reexport */ SfBar; });
__webpack_require__.d(__webpack_exports__, "SfBottomModal", function() { return /* reexport */ SfBottomModal; });
__webpack_require__.d(__webpack_exports__, "SfCallToAction", function() { return /* reexport */ SfCallToAction; });
__webpack_require__.d(__webpack_exports__, "SfCard", function() { return /* reexport */ SfCard; });
__webpack_require__.d(__webpack_exports__, "SfCategoryCard", function() { return /* reexport */ SfCategoryCard; });
__webpack_require__.d(__webpack_exports__, "SfCharacteristic", function() { return /* reexport */ SfCharacteristic; });
__webpack_require__.d(__webpack_exports__, "SfCheckbox", function() { return /* reexport */ SfCheckbox; });
__webpack_require__.d(__webpack_exports__, "SfColorPicker", function() { return /* reexport */ SfColorPicker; });
__webpack_require__.d(__webpack_exports__, "SfComponentSelect", function() { return /* reexport */ SfComponentSelect; });
__webpack_require__.d(__webpack_exports__, "SfDropdown", function() { return /* reexport */ SfDropdown; });
__webpack_require__.d(__webpack_exports__, "SfFilter", function() { return /* reexport */ SfFilter; });
__webpack_require__.d(__webpack_exports__, "SfGallery", function() { return /* reexport */ SfGallery; });
__webpack_require__.d(__webpack_exports__, "SfMenuItem", function() { return /* reexport */ SfMenuItem; });
__webpack_require__.d(__webpack_exports__, "SfModal", function() { return /* reexport */ SfModal; });
__webpack_require__.d(__webpack_exports__, "SfNotification", function() { return /* reexport */ SfNotification; });
__webpack_require__.d(__webpack_exports__, "SfPagination", function() { return /* reexport */ SfPagination; });
__webpack_require__.d(__webpack_exports__, "SfProductOption", function() { return /* reexport */ SfProductOption; });
__webpack_require__.d(__webpack_exports__, "SfRadio", function() { return /* reexport */ SfRadio; });
__webpack_require__.d(__webpack_exports__, "SfReview", function() { return /* reexport */ SfReview; });
__webpack_require__.d(__webpack_exports__, "SfScrollable", function() { return /* reexport */ SfScrollable; });
__webpack_require__.d(__webpack_exports__, "SfSearchBar", function() { return /* reexport */ SfSearchBar; });
__webpack_require__.d(__webpack_exports__, "SfSection", function() { return /* reexport */ SfSection; });
__webpack_require__.d(__webpack_exports__, "SfSelect", function() { return /* reexport */ SfSelect; });
__webpack_require__.d(__webpack_exports__, "SfSlidingSection", function() { return /* reexport */ SfSlidingSection; });
__webpack_require__.d(__webpack_exports__, "SfSteps", function() { return /* reexport */ SfSteps; });
__webpack_require__.d(__webpack_exports__, "SfSticky", function() { return /* reexport */ SfSticky; });
__webpack_require__.d(__webpack_exports__, "SfTile", function() { return /* reexport */ SfTile; });
__webpack_require__.d(__webpack_exports__, "SfAccordion", function() { return /* reexport */ SfAccordion; });
__webpack_require__.d(__webpack_exports__, "SfBannerGrid", function() { return /* reexport */ SfBannerGrid; });
__webpack_require__.d(__webpack_exports__, "SfBottomNavigation", function() { return /* reexport */ SfBottomNavigation; });
__webpack_require__.d(__webpack_exports__, "SfCarousel", function() { return /* reexport */ SfCarousel; });
__webpack_require__.d(__webpack_exports__, "SfCollectedProduct", function() { return /* reexport */ SfCollectedProduct; });
__webpack_require__.d(__webpack_exports__, "SfContentPages", function() { return /* reexport */ SfContentPages; });
__webpack_require__.d(__webpack_exports__, "SfFooter", function() { return /* reexport */ SfFooter; });
__webpack_require__.d(__webpack_exports__, "SfGroupedProduct", function() { return /* reexport */ SfGroupedProduct; });
__webpack_require__.d(__webpack_exports__, "SfHeader", function() { return /* reexport */ SfHeader; });
__webpack_require__.d(__webpack_exports__, "SfHero", function() { return /* reexport */ SfHero; });
__webpack_require__.d(__webpack_exports__, "SfList", function() { return /* reexport */ SfList; });
__webpack_require__.d(__webpack_exports__, "SfMegaMenu", function() { return /* reexport */ SfMegaMenu; });
__webpack_require__.d(__webpack_exports__, "SfProductCard", function() { return /* reexport */ SfProductCard; });
__webpack_require__.d(__webpack_exports__, "SfProductCardHorizontal", function() { return /* reexport */ SfProductCardHorizontal; });
__webpack_require__.d(__webpack_exports__, "SfSidebar", function() { return /* reexport */ SfSidebar; });
__webpack_require__.d(__webpack_exports__, "SfStoreLocator", function() { return /* reexport */ SfStoreLocator; });
__webpack_require__.d(__webpack_exports__, "SfTable", function() { return /* reexport */ SfTable; });
__webpack_require__.d(__webpack_exports__, "SfTabs", function() { return /* reexport */ SfTabs; });
__webpack_require__.d(__webpack_exports__, "SfTopBar", function() { return /* reexport */ SfTopBar; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfArrow/SfArrow.vue?vue&type=template&id=73630549&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[_vm.data.class, _vm.data.staticClass, 'sf-arrow'],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"type":"button"}},'component',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c(_vm.injections.components.SfIcon,_vm._b({tag:"component",class:[_vm.data.class, _vm.data.staticClass, 'sf-arrow__icon'],attrs:{"size":"1.5rem","icon":"arrow_left","aria-hidden":"true"}},'component',_vm.data.attrs,false))]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfArrow/SfArrow.vue?vue&type=template&id=73630549&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=35744e2e&functional=true&
var SfButtonvue_type_template_id_35744e2e_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.props.link ? _vm.injections.components.SfLink : 'button',_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button',
    {
      'is-disabled--button': _vm.$options.buttonActive(
        _vm.props.link,
        _vm.props.disabled
      ),
      'is-disabled--link': _vm.$options.linkActive(_vm.props.link, _vm.props.disabled),
    } ],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"disabled":_vm.props.disabled,"link":_vm.props.link}},'component',_vm.data.attrs,false),_vm.listeners),[_vm._t("default")],2)}
var SfButtonvue_type_template_id_35744e2e_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=35744e2e&functional=true&

// CONCATENATED MODULE: ./src/utilities/directives/focus/focus-directive.js
const focus_directive_focus = {
  bind(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };

    el._keyHandler = function () {
      el.style.outline = "";
      el.focus();
    };

    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },

  unbind(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  }

};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=6c7956ec&
var SfLinkvue_type_template_id_6c7956ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkComponentTag,_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],tag:"component",staticClass:"sf-link"},'component',_vm.urlTag,false),_vm.$listeners),[_vm._t("default")],2)}
var SfLinkvue_type_template_id_6c7956ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=6c7956ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfLinkvue_type_script_lang_js_ = ({
  name: "SfLink",
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Page route
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    isExternal() {
      return typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1;
    },

    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },

    urlTag() {
      return this.isNativeLinkTag ? {
        href: this.link
      } : {
        to: this.link
      };
    },

    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    }

  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLink_SfLinkvue_type_script_lang_js_ = (SfLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfLink/SfLink.vue?vue&type=style&index=0&lang=scss&
var SfLinkvue_type_style_index_0_lang_scss_ = __webpack_require__("c772");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/atoms/SfLink/SfLink.vue






/* normalize component */

var component = normalizeComponent(
  SfLink_SfLinkvue_type_script_lang_js_,
  SfLinkvue_type_template_id_6c7956ec_render,
  SfLinkvue_type_template_id_6c7956ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfLink = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfButtonvue_type_script_lang_js_ = ({
  name: "SfButton",
  inject: {
    components: {
      default: {
        SfLink: SfLink
      }
    }
  },
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Link for "a" tag, when empty it is button.
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },

  linkActive(link, disabled) {
    return link && disabled;
  },

  buttonActive(link, disabled) {
    return !link && disabled;
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfButton_SfButtonvue_type_script_lang_js_ = (SfButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfButton/SfButton.vue?vue&type=style&index=0&lang=scss&
var SfButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("674a");

// CONCATENATED MODULE: ./src/components/atoms/SfButton/SfButton.vue






/* normalize component */

var SfButton_component = normalizeComponent(
  SfButton_SfButtonvue_type_script_lang_js_,
  SfButtonvue_type_template_id_35744e2e_functional_true_render,
  SfButtonvue_type_template_id_35744e2e_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfButton = (SfButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=0fbff0e2&functional=true&
var SfIconvue_type_template_id_0fbff0e2_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g(_vm._b({ref:"icon",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-icon',
    _vm.$options.iconColorClass(_vm.props.color),
    _vm.$options.iconSizeClass(_vm.props.size) ],style:([
    _vm.data.style,
    _vm.data.staticStyle,
    _vm.$options.iconCustomStyle(_vm.props.color, _vm.props.size) ])},'span',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c('svg',{staticClass:"sf-icon-path",attrs:{"viewBox":_vm.$options.iconViewBox(_vm.props.icon, _vm.props.viewBox),"preserveAspectRatio":"none"}},[(_vm.props.coverage < 1)?_c('defs',[_c('linearGradient',{attrs:{"id":_vm.props.coverage,"x1":"0","y1":"0","x2":"1","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.props.coverage,"stop-color":"var(--icon-color)"}}),_c('stop',{attrs:{"offset":"0","stop-color":"var(--icon-color-negative, var(--c-gray-variant))"}})],1)],1):_vm._e(),_vm._l((_vm.$options.iconPaths(_vm.props.icon)),function(path,index){return _c('path',{key:index,staticStyle:{"height":"100%"},attrs:{"d":path,"fill":_vm.$options.fillPath(_vm.props.coverage)}})})],2)]},null,{ props: _vm.props })],2)}
var SfIconvue_type_template_id_0fbff0e2_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=0fbff0e2&functional=true&

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/icons/icons.js
const icons = {
  add_to_cart: {
    viewBox: "0 0 24 24",
    paths: [
      "M10.281 17.165c-1.177 0-2.147.97-2.147 2.147 0 1.177.97 2.147 2.147 2.147 1.177 0 2.147-.97 2.147-2.146a2.16 2.16 0 00-2.147-2.148zm0 2.994a.838.838 0 01-.847-.847c0-.475.372-.847.847-.847s.847.372.847.847a.865.865 0 01-.847.847zM17.386 17.165c-1.177 0-2.148.97-2.148 2.147 0 1.177.97 2.147 2.148 2.147 1.176 0 2.147-.97 2.147-2.147-.02-1.176-.97-2.147-2.147-2.147zm0 2.994a.838.838 0 01-.847-.847c0-.475.371-.847.847-.847.475 0 .847.372.847.847a.864.864 0 01-.847.847zM14.132 11.834a.66.66 0 01-.206-.033c-.007-.002-.012-.003-.017-.006a.598.598 0 01-.198-.117l-2.14-1.827a.499.499 0 01-.175-.375c0-.142.062-.276.175-.376a.627.627 0 01.42-.156c.158 0 .309.055.42.156l1.126.92V4.21c0-.293.266-.532.595-.532.328 0 .595.238.595.532v5.807l1.126-.92a.628.628 0 01.42-.155c.158 0 .308.055.42.156.112.1.174.234.174.375a.499.499 0 01-.174.376l-2.141 1.827a.62.62 0 01-.195.116l-.02.007a.62.62 0 01-.205.034z",
      "M19.634 6.035c.599 0 1.177.29 1.55.764.392.475.515 1.095.371 1.674l-1.549 6.36a1.968 1.968 0 01-1.92 1.508h-8.24c-.908 0-1.692-.62-1.92-1.508L5.407 4.797a.682.682 0 00-.66-.516H2.64A.644.644 0 012 3.64C2 3.288 2.29 3 2.64 3h2.107c.909 0 1.693.62 1.92 1.508l.392 1.527h4.524v1.302H7.39l1.796 7.206c.083.31.351.516.66.516h8.24c.31 0 .579-.206.661-.516l1.549-6.36a.65.65 0 00-.123-.578.686.686 0 00-.538-.268H16.68V6.035h2.955z"
    ]
  },
  added_to_cart: {
    viewBox: "0 0 24 24",
    paths: [
      "M10.547 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056a2.066 2.066 0 002.056-2.055c0-1.128-.93-2.058-2.056-2.058zM17.35 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056 1.127 0 2.056-.929 2.056-2.056-.02-1.126-.93-2.057-2.056-2.057z",
      "M19.506 5.908c.573 0 1.127.276 1.483.731.376.456.494 1.049.356 1.604l-1.483 6.091a1.885 1.885 0 01-1.84 1.444h-7.89c-.871 0-1.622-.593-1.84-1.444L5.879 4.722a.653.653 0 00-.632-.494H3.229a.616.616 0 01-.613-.614c0-.337.277-.613.613-.613h2.018c.87 0 1.621.593 1.839 1.444l.375 1.463h12.045zm-6.908 8.19a.971.971 0 00.695.293h.018a.951.951 0 00.704-.321l4.352-4.84c.37-.405.342-1.039-.056-1.407a.956.956 0 00-1.38.057l-3.666 4.082-1.76-1.795a.964.964 0 00-1.38 0c-.379.387-.379 1.02 0 1.407l2.473 2.524z"
    ]
  },
  empty_cart: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.561 6.874a2.026 2.026 0 00-1.579-.779H7.16l-.4-1.558A2.024 2.024 0 004.801 3H2.653A.656.656 0 002 3.653c0 .358.294.653.653.653h2.148c.316 0 .59.21.673.527l2.57 10.234a2.024 2.024 0 001.958 1.537h8.4c.927 0 1.749-.632 1.96-1.537L21.94 8.58a1.931 1.931 0 00-.38-1.707zm-.904 1.41l-1.58 6.487a.695.695 0 01-.673.526h-8.402a.695.695 0 01-.674-.526L7.496 7.422h12.487a.7.7 0 01.548.274.662.662 0 01.126.589zM10.445 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189a2.2 2.2 0 002.19-2.189c0-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863s.863.379.863.863c0 .464-.4.864-.863.864zM17.688 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189 2.19-.99 2.19-2.19c-.021-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863.485 0 .864.379.864.863 0 .464-.4.864-.864.864z"
    ]
  },
  clock: {
    viewBox: "0 0 24 24",
    paths: [
      "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.463A8.525 8.525 0 0120.537 12 8.525 8.525 0 0112 20.537 8.525 8.525 0 013.463 12 8.525 8.525 0 0112 3.463zm0 1.22a.732.732 0 00-.732.732V12c0 .27.148.506.366.633l5.282 3.048a.73.73 0 10.732-1.265l-4.916-2.835V5.415A.732.732 0 0012 4.683z"
    ]
  },
  arrow_left: {
    viewBox: "0 0 24 24",
    paths: [
      "M24 13L2 13L2 11L24 11L24 13Z",
      "M6.61667 6L8 7.25423L2.76478 12L8 16.7458L6.61667 18L-5.24538e-07 12L6.61667 6Z"
    ]
  },
  arrow_right: {
    viewBox: "0 0 24 24",
    paths: [
      "M0 11L22 11L22 13L-3.49691e-07 13L0 11Z",
      "M17.3833 18L16 16.7458L21.2352 12L16 7.25423L17.3833 6L24 12L17.3833 18Z"
    ]
  },
  arrow_top: {
    viewBox: "0 0 24 24",
    paths: [
      "M11 24L11 2L13 2L13 24L11 24Z",
      "M18 6.61667L16.7458 8L12 2.76478L7.25423 8L6 6.61667L12 -2.62269e-07L18 6.61667Z"
    ]
  },
  arrow_down: {
    viewBox: "0 0 24 24",
    paths: [
      "M13 0L13 22L11 22L11 -8.74228e-08L13 0Z",
      "M6 17.3833L7.25423 16L12 21.2352L16.7458 16L18 17.3833L12 24L6 17.3833Z"
    ]
  },
  check: {
    viewBox: "0 0 24 24",
    paths: [
      "M10.7136 17C10.3594 17 10.0181 16.8476 9.76516 16.5711L6.38899 12.8793C5.87034 12.3122 5.87034 11.3859 6.38899 10.8194C6.90765 10.2522 7.75481 10.2522 8.27289 10.8194L10.6755 13.4465L15.6833 7.47328C16.1762 6.87859 17.0239 6.837 17.5672 7.3901C18.111 7.92914 18.1491 8.85607 17.6432 9.45009L11.7 16.5301C11.4599 16.8207 11.1057 17 10.7387 17L10.7136 17Z"
    ]
  },
  chevron_down: {
    viewBox: "0 0 24 24",
    paths: [
      "M2 8.364L3.6 7l8.4 7.254L20.4 7 22 8.364 12 17z"
    ]
  },
  chevron_up: {
    viewBox: "0 0 24 24",
    paths: [
      "M22 15.636L20.4 17 12 9.746 3.6 17 2 15.636 12 7z"
    ]
  },
  chevron_left: {
    viewBox: "0 0 24 24",
    paths: [
      "M15.636 2L17 3.6 9.746 12 17 20.4 15.636 22 7 12z"
    ]
  },
  chevron_right: {
    viewBox: "0 0 24 24",
    paths: [
      "M8.364 22L7 20.4l7.254-8.4L7 3.6 8.364 2 17 12z"
    ]
  },
  cross: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.261 2.22a.748.748 0 00-1.057 0l-8.464 8.463-8.463-8.464a.748.748 0 10-1.058 1.058l8.464 8.463-8.464 8.464a.748.748 0 101.058 1.057l8.463-8.463 8.464 8.463a.748.748 0 101.057-1.057l-8.463-8.464 8.463-8.463a.748.748 0 000-1.058z"
    ]
  },
  heart: {
    viewBox: "0 0 24 24",
    paths: [
      "M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"
    ]
  },
  heart_fill: {
    viewBox: "0 0 24 24",
    paths: [
      "M12 20.429a.878.878 0 01-.52-.168l-.442-.325c-4.064-2.976-6.517-4.773-7.945-7.17-1.369-2.291-1.204-4.1-.827-5.215.46-1.353 1.496-2.443 2.918-3.067A5.85 5.85 0 017.544 4c1.764 0 3.394.711 4.456 1.883C13.06 4.711 14.69 4 16.455 4c.835 0 1.628.162 2.36.483 1.422.624 2.458 1.713 2.918 3.067.379 1.113.542 2.923-.827 5.215-1.429 2.397-3.885 4.196-7.954 7.176l-.432.32a.884.884 0 01-.52.168z"
    ]
  },
  home: {
    viewBox: "0 0 24 24",
    paths: [
      "M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z",
      "M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z",
    ]
  },
  home_fill: {
    viewBox: "0 0 24 24",
    paths: [
      "M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149z",
      "M19.355 9.45V20.738a.159.159 0 01-.002.025c0 .053.025-.074.002-.026a.133.133 0 00-.012.035.406.406 0 00-.003.018c-.008.05.04-.061.008-.024a.237.237 0 00-.026.045c-.02.045.056-.05.015-.02a.274.274 0 00-.036.034l-.001.002c-.02.026.07-.049.001-.002l-.003.002a.086.086 0 00-.011.006c-.032.017-.032.017-.001.002l.024-.01-.023.008a.562.562 0 01-.039.011H15.313l-.378-.009V12.49H9.14v8.358l-1.66-.004H5.65c-.28 0-.556.002-.835 0H4.77c-.076 0 .02-.004.026.004l-.01-.004-.037-.009-.007-.001c-.077-.018.027.004.023.01l-.016-.009-.028-.016a.089.089 0 00-.002-.002c-.071-.034.042.053.002.002l-.002-.003a.227.227 0 01-.037-.04c.011.005.018.017.022.026.007.013.009.02-.006-.008a.438.438 0 01-.026-.047c.008.002.013.017.015.029.004.017.003.028-.005-.006a.162.162 0 01-.007-.023l-.001-.004-.007-.026c.002 0 .003.002.004.005a.08.08 0 01.003.02l-.003-.02V9.429c-.067.119-.135.236-.203.354l.203-.15 1.292-.953.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.337-.248.685-.487 1.02-.742a11.164 11.164 0 00.202-.156H11.8l.211.156c.264.193.525.387.79.58l.173.128c.654.48 1.307.961 1.96 1.443l1.97 1.45c.256.19.512.378.77.567l.034.026c.548.404 1.097.81 1.647 1.214l.154.113c.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562-.564-.414-1.128-.83-1.691-1.247a217.81 217.81 0 00-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H9.14V12.49h5.794l-.07 9.172h4.172c.24 0 .47-.002.686-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41",
      "M19.355 10.256v-.61l-1.647-1.214-.035-.026-.77-.566-1.968-1.45c-.654-.483-1.307-.963-1.961-1.444L12.8 4.82c-.264-.195-.525-.388-.789-.581-.334.255-.682.494-1.02.742l-2.173 1.6c-.621.46-1.245.916-1.866 1.374l-.989.726-1.292.953v11.081l.003.029c.006.006.01.02.013.033a.099.099 0 01.017.026c.008.009.015.015.015.014l.03.02c.01.001.027.005.038.008h.028c.279.002.556 0 .835 0h3.49v-7.06a1 1 0 011-1h3.731a1 1 0 011 1v7.06H19.248a.313.313 0 01.039-.01.086.086 0 01.011-.007.29.29 0 01.03-.03.218.218 0 01.015-.025.133.133 0 01.011-.034v-.036c.002-.33 0-.66 0-.989V10.256z"
    ]
  },
  store: {
    viewBox: "0 0 24 24",
    paths: [
      "M5.21602 10.7781C5.15525 11.0027 5.16536 11.1843 5.2323 11.3176L5.21602 10.7781ZM5.21602 10.7781C5.27661 10.5541 5.40553 10.2963 5.60276 10.0206M5.21602 10.7781L5.60276 10.0206M5.60276 10.0206L7.05524 7.99014M5.60276 10.0206L7.05524 7.99014M7.05524 7.99014H8.53621L6.42279 11.7745C6.11281 11.7695 5.85211 11.7245 5.65108 11.6474C5.43734 11.5655 5.29917 11.4508 5.2323 11.3176L7.05524 7.99014ZM6.67908 12.5614H17.321V18.6798C17.321 18.7553 17.2612 18.8137 17.1908 18.8137H14.3905V13.758C14.3905 13.5096 14.1925 13.3061 13.9442 13.3061H10.254C10.0057 13.3061 9.80771 13.5096 9.80771 13.758V18.8143L6.80939 18.8137H6.80937C6.73877 18.8137 6.67851 18.7551 6.67851 18.6792L6.67908 12.5614ZM18.7678 11.3176L18.8572 11.3625L18.7678 11.3176C18.7009 11.4508 18.5628 11.5655 18.349 11.6475C18.1358 11.7293 17.8553 11.775 17.5201 11.775H17.4299L15.3157 7.99072H16.9443L18.3973 10.0212L18.3973 10.0212C18.5945 10.2966 18.7235 10.5543 18.7841 10.7781C18.8448 11.0027 18.8347 11.1843 18.7678 11.3176ZM19.0263 9.56002L17.6364 7.61814V5.3203C17.6364 4.81296 17.2322 4.4 16.729 4.4H7.27097C6.76777 4.4 6.36356 4.81296 6.36356 5.3203V7.61754L4.9737 9.56003C4.97369 9.56004 4.97368 9.56005 4.97367 9.56006C4.45214 10.2884 4.28666 10.9765 4.47509 11.5198C4.6581 12.0474 5.16129 12.4013 5.90186 12.5182V18.6797C5.90186 19.187 6.30606 19.6 6.80926 19.6H17.1901C17.6933 19.6 18.0975 19.187 18.0975 18.6797L18.0981 12.5177C18.8387 12.401 19.3419 12.0473 19.5249 11.5197C19.7134 10.9765 19.5479 10.2884 19.0263 9.56005C19.0263 9.56004 19.0263 9.56003 19.0263 9.56002ZM7.14018 5.3203C7.14018 5.24468 7.20019 5.18575 7.27104 5.18575H16.7291C16.7995 5.18575 16.86 5.24485 16.86 5.3203V7.20492H7.14021L7.14018 5.3203ZM10.0243 7.99072L9.01761 11.775H7.31494L9.42916 7.99072H10.0243ZM9.82215 11.775L10.8289 7.99072H11.538V11.775H9.82215ZM12.3145 7.99072H13.0236L14.0303 11.775H12.3145L12.3145 7.99072ZM14.8349 11.775L13.8282 7.99072H14.424L16.5382 11.775H14.8349ZM13.6139 18.8137H10.5843V14.0919H13.6139V18.8137Z"
    ]
  },
  menu: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.883 17.628l-3.27-3.407a5.694 5.694 0 001.301-3.64C19.914 7.502 17.51 5 14.557 5 11.604 5 9.2 7.504 9.2 10.58c0 3.077 2.404 5.58 5.357 5.58a5.212 5.212 0 003.495-1.355l3.27 3.407c.078.08.18.121.28.121.102 0 .203-.04.28-.121a.423.423 0 00.001-.584zm-7.326-2.293c-2.516 0-4.564-2.133-4.564-4.755 0-2.62 2.047-4.754 4.564-4.754 2.516 0 4.564 2.133 4.564 4.754 0 2.622-2.048 4.755-4.564 4.755zM2.417 5.833h5.566a.417.417 0 110 .834H2.417a.417.417 0 110-.834zM2.417 11.667h4.766a.417.417 0 110 .833H2.417a.417.417 0 110-.833zM2.417 16.667H10.383a.417.417 0 110 .833H2.417a.417.417 0 110-.833z"
    ]
  },
  message: {
    viewBox: "0 0 24 24",
    paths: [
      "M4.26182 20.3996C4.047 20.4006 3.84561 20.2963 3.72166 20.1216C3.59772 19.9459 3.56571 19.7217 3.63697 19.5191L4.7813 16.2814H4.78233C3.38704 13.9241 3.22798 11.0346 4.35578 8.53875C5.48462 6.04298 7.75777 4.25417 10.4483 3.74569C13.1377 3.23826 15.9067 4.07432 17.867 5.98724C19.8262 7.90015 20.7309 10.6491 20.2899 13.3526C19.8489 16.0562 18.119 18.3751 15.6537 19.5656C13.1874 20.7561 10.2965 20.6683 7.90771 19.331L4.45205 20.3738C4.39008 20.3913 4.32605 20.4006 4.26202 20.3996L4.26182 20.3996ZM7.99214 17.9524C8.11297 17.9535 8.23175 17.9865 8.33503 18.0506C10.3428 19.2732 12.8245 19.423 14.9645 18.4516C17.1045 17.4801 18.6269 15.5136 19.0307 13.1976C19.4345 10.8817 18.6681 8.51516 16.9826 6.87593C15.2981 5.23689 12.9122 4.53726 10.6101 5.00746C8.30701 5.47664 6.38508 7.05472 5.47609 9.22299C4.5662 11.3912 4.78617 13.8684 6.06376 15.8423C6.18873 16.0304 6.20939 16.2691 6.11953 16.4769L5.32635 18.7442L7.80919 17.996V17.995C7.86806 17.9733 7.92899 17.9588 7.99199 17.9526L7.99214 17.9524Z"
    ]
  },
  search: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z"
    ]
  },
  profile: {
    viewBox: "0 0 24 24",
    paths: [
      "M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"
    ]
  },
  profile_fill: {
    viewBox: "0 0 24 24",
    paths: [
      "M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-9.268c-2.707 0-4.901-2.184-4.901-4.878S9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878z"
    ]
  },
  newsletter: {
    viewBox: "0 0 24 24",
    paths: [
      "M18.508 7.365v-4a.956.956 0 00-.953-.952H5.492a.956.956 0 00-.953.953v4c-1.904 1.936-2.031 1.968-2 2.127v11.079c0 .318.127.603.317.794.191.19.477.317.794.317h15.683c.317 0 .603-.126.794-.317.19-.19.317-.476.317-.794V9.492c.064-.222.032-.127-1.936-2.127zm1.365 13.175v.032l-5.174-5.143 5.174-5.175V20.54zm-.127-11.047l-1.238 1.206V8.254l1.238 1.239zM5.492 3.048h12.063c.19 0 .317.159.317.318v7.968l-3.84 3.872-2.508 2.476-6.35-6.35V3.366c0-.158.128-.317.318-.317zM3.207 20.603V10.254l5.142 5.175-5.142 5.174zM4.54 8.254v2.445L3.334 9.492 4.54 8.254zm-.858 12.793H3.65l5.175-5.174L11.3 18.35a.307.307 0 00.445 0l2.475-2.476 5.176 5.174H3.682z",
      "M7.333 6.286h8.381M7.333 8.381h8.381M7.333 10.477h8.381"
    ]
  },
  info: {
    viewBox: "0 0 24 24",
    paths: [
      "M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z",
      "M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z"
    ]
  },
  info_circle: {
    viewBox: "0 0 24 24",
    paths: [
      "M12 2.4A9.588 9.588 0 002.4 12c0 5.311 4.288 9.6 9.6 9.6 5.311 0 9.6-4.289 9.6-9.6 0-5.312-4.289-9.6-9.6-9.6zm1.515 14.933c0 .47-.405.875-.875.875h-1.323a.893.893 0 01-.875-.875v-5.59c0-.49.405-.874.875-.874h1.323c.469 0 .875.405.875.875v5.59zm-1.537-7.915c-.982 0-1.792-.81-1.792-1.813s.811-1.814 1.792-1.814c1.003 0 1.813.811 1.813 1.814 0 1.003-.81 1.813-1.813 1.813z"
    ]
  },
  info_shield: {
    viewBox: "0 0 24 24",
    paths: [
      "M11.945 2L4 5.46c0 10.662 1.34 12.014 7.945 16.402 6.605-4.388 7.945-5.74 7.945-16.402L11.945 2zm0 4.469c.685 0 1.241.556 1.241 1.241l-.248 4.47a.993.993 0 11-1.986 0l-.249-4.47c0-.685.556-1.241 1.242-1.241zm0 7.448a1.49 1.49 0 110 2.98 1.49 1.49 0 010-2.98z"
    ]
  },
  error: {
    viewBox: "0 0 24 24",
    paths: [
      "M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z",
      "M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z"
    ]
  },
  question_mark: {
    viewBox: "0 0 24 24",
    paths: [
      "M12 19.5C13.9894 19.5 15.8971 18.7098 17.3035 17.3035C18.7098 15.8971 19.5 13.9894 19.5 12C19.5 10.0106 18.7098 8.10287 17.3035 6.69653C15.8971 5.29021 13.9894 4.5 12 4.5C10.0106 4.5 8.10287 5.29022 6.69653 6.69653C5.29021 8.10285 4.5 10.0106 4.5 12C4.50245 13.9881 5.29328 15.8946 6.69967 17.3003C8.10538 18.7067 10.0119 19.4975 12 19.5ZM12 5.96394C13.6 5.96394 15.1352 6.59967 16.2669 7.73139C17.3986 8.86307 18.0343 10.3975 18.0343 11.9983C18.0343 13.5983 17.3992 15.1335 16.2675 16.2652C15.1358 17.3968 13.6014 18.0326 12.0013 18.0332C10.4006 18.0332 8.86607 17.3981 7.7339 16.2664C6.60223 15.1353 5.96582 13.6003 5.96582 12.0002C5.96766 10.4002 6.60339 8.86622 7.735 7.73516C8.86607 6.60348 10.3998 5.9677 12 5.96598V5.96394ZM12.6829 15.6752V15.6758C12.6829 15.9891 12.4935 16.2717 12.2041 16.3919C11.9142 16.512 11.5807 16.4452 11.3594 16.2239C11.1374 16.002 11.0712 15.6685 11.1914 15.3791C11.3109 15.0891 11.5936 14.9003 11.9074 14.9003C12.1134 14.9003 12.3108 14.9819 12.4561 15.1278C12.6014 15.2737 12.6829 15.4711 12.6829 15.6771V15.6752ZM9.4889 9.63366C9.42085 9.44055 9.43311 9.22905 9.522 9.04514C9.73412 8.59946 10.0676 8.22304 10.4839 7.9582C10.9001 7.69398 11.3826 7.55176 11.8761 7.54929H11.892H11.8914C12.5799 7.55175 13.2408 7.82088 13.7355 8.29904C14.2302 8.77784 14.5214 9.42889 14.5471 10.1167C14.5649 10.6813 14.4 11.2361 14.0776 11.6996C13.7551 12.1637 13.2916 12.5107 12.7564 12.6903C12.7564 12.6903 12.6798 12.7173 12.6798 12.7626V13.3781H12.6792C12.6792 13.8042 12.334 14.1494 11.908 14.1494C11.4819 14.1494 11.1368 13.8042 11.1368 13.3781V12.7626C11.1441 12.0638 11.5959 11.447 12.2605 11.2294C12.7184 11.0743 13.0213 10.6378 13.0059 10.1541C12.9747 9.56315 12.4904 9.09723 11.8982 9.08865C11.4776 9.09355 11.0969 9.33693 10.9173 9.71641C10.783 10.0015 10.4894 10.1762 10.1749 10.1578C9.86039 10.14 9.58881 9.9322 9.48888 9.63365L9.4889 9.63366Z"
    ]
  },
  mail: {
    viewBox: "0 0 24 24",
    paths: [
      "M19.713 19.587H4.126A2.126 2.126 0 012 17.462V6.126C2 4.952 2.952 4 4.126 4h15.587c1.173 0 2.125.952 2.125 2.126v11.336a2.126 2.126 0 01-2.125 2.125zM4.126 5.417a.708.708 0 00-.709.709v11.336a.71.71 0 00.708.708h15.588a.709.709 0 00.708-.708V6.126a.709.709 0 00-.708-.709H4.126z",
      "M11.919 12.134a2.125 2.125 0 01-1.297-.44L2.751 5.638a.71.71 0 11.864-1.126l7.872 6.057a.71.71 0 00.864 0l7.872-6.057a.71.71 0 11.864 1.126l-7.872 6.058c-.372.285-.828.44-1.296.44z"
    ]
  },
  marker: {
    viewBox: "0 0 24 24",
    paths: [
      "M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z",
      "M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z"
    ]
  },
  marker_fill: {
    viewBox: "0 0 24 24",
    paths: [
      "M12.438 22c2.597-2.948 7.509-8.491 7.509-12.562 0-4.07-3.369-7.438-7.509-7.438C8.368 2 5 5.369 5 9.438c0 4.07 4.912 9.614 7.438 12.562zm0-15.65c1.755 0 3.158 1.404 3.158 3.088a3.144 3.144 0 01-3.158 3.158c-1.684 0-3.087-1.403-3.087-3.158 0-1.684 1.403-3.087 3.087-3.087z"
    ]
  },
  minus: {
    viewBox: "0 0 24 24",
    paths: [
      "M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",
    ]
  },
  plus: {
    viewBox: "0 0 24 24",
    paths: [
      "M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z",
      "M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z"
    ]
  },
  more: {
    viewBox: "0 0 24 24",
    paths: [
      "M13.907 11.813c0 1.354-1.1 2.454-2.454 2.454A2.455 2.455 0 019 11.813c0-1.353 1.1-2.453 2.453-2.453 1.354 0 2.454 1.1 2.454 2.453zm-2.454-4.906c1.354 0 2.454-1.1 2.454-2.454C13.907 3.1 12.807 2 11.453 2A2.455 2.455 0 009 4.453c0 1.354 1.1 2.454 2.453 2.454zm0 9.813A2.455 2.455 0 009 19.173c0 1.354 1.1 2.454 2.453 2.454 1.354 0 2.454-1.1 2.454-2.454 0-1.353-1.1-2.453-2.454-2.453z"
    ]
  },
  credits: {
    viewBox: "0 0 24 24",
    paths: [
      "M8.462 3c-1.722 0-3.282.338-4.45.922C2.845 4.506 2 5.377 2 6.452v10.34c0 1.065.835 1.932 2.006 2.517 1.17.585 2.733.929 4.456.929 1.448 0 2.78-.248 3.863-.674.847.43 1.802.674 2.814.674a6.253 6.253 0 006.246-6.247 6.253 6.253 0 00-6.246-6.246c-.075 0-.15.005-.223.007v-1.3c0-1.075-.838-1.946-2.005-2.53C11.743 3.338 10.183 3 8.46 3zm0 .868c1.61 0 3.064.334 4.078.842 1.015.507 1.528 1.153 1.528 1.743-.2.914-.87 1.418-1.528 1.736-1.014.508-2.469.842-4.078.842-1.61 0-3.065-.334-4.08-.842-.752-.39-1.436-.983-1.527-1.736 0-.59.513-1.236 1.528-1.743 1.014-.508 2.469-.842 4.079-.842zm-5.6 4.335c.318.293.713.555 1.15.774 1.168.584 2.728.922 4.45.922.746 0 1.46-.069 2.126-.188a6.276 6.276 0 00-1.211 1.864c-.298.026-.603.047-.916.047-1.607 0-3.059-.335-4.072-.841-1.013-.507-1.527-1.144-1.527-1.743v-.835zm12.276.404a5.378 5.378 0 015.385 5.384 5.378 5.378 0 01-5.385 5.385 5.378 5.378 0 01-5.384-5.385 5.378 5.378 0 015.384-5.384zm-12.276 2.18c.317.292.708.55 1.144.768 1.17.585 2.732.929 4.456.929.21 0 .414-.01.619-.02a6.27 6.27 0 00-.189 1.527c0 .07.005.14.007.209-.145.006-.29.007-.437.007-1.607 0-3.06-.335-4.072-.842-1.013-.506-1.528-1.143-1.528-1.743v-.834zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.93 4.456.93.176 0 .352-.006.525-.014.102.593.287 1.158.545 1.683a10.81 10.81 0 01-1.07.053c-1.607 0-3.06-.335-4.072-.841-1.013-.506-1.528-1.143-1.528-1.743v-.835zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.929 4.456.929.536 0 1.057-.03 1.554-.094a6.245 6.245 0 001.367 1.413c-.85.25-1.85.404-2.921.404-1.607 0-3.058-.335-4.072-.841-1.014-.507-1.528-1.144-1.528-1.744v-.834z"
    ]
  },
  rewards: {
    viewBox: "0 0 24 24",
    paths: [
      "M10.663 15.912a.3.3 0 00-.299-.299H3.605a5.602 5.602 0 015.587-5.297c1.078 0 2.125.307 3.027.89a.299.299 0 00.324-.503 6.17 6.17 0 00-3.35-.984A6.2 6.2 0 003 15.911a.3.3 0 00.3.3h7.065a.3.3 0 00.298-.3h0zM9.09 9.163a3.587 3.587 0 003.582-3.583A3.585 3.585 0 009.09 2a3.584 3.584 0 00-3.58 3.58 3.585 3.585 0 003.58 3.583zm0-6.565a2.987 2.987 0 012.984 2.982 2.988 2.988 0 01-2.985 2.986A2.987 2.987 0 016.107 5.58 2.986 2.986 0 019.09 2.598z",
      "M18.945 19.427l-2.071-3.013c.395-.52.614-1.148.619-1.812a3.05 3.05 0 00-3.023-3.068 3.057 3.057 0 00-3.067 3.025c-.005.681.219 1.31.595 1.82L9.88 19.363a.299.299 0 00.306.465l1.675-.357.294 1.573a.3.3 0 00.556.087l1.712-3.168 1.667 3.192a.299.299 0 00.558-.08l.317-1.567 1.667.381a.299.299 0 00.312-.462h0zm-4.495-7.295h.015a2.45 2.45 0 012.43 2.466 2.425 2.425 0 01-.73 1.724 2.431 2.431 0 01-1.717.704h-.019A2.449 2.449 0 0112 14.562a2.453 2.453 0 012.45-2.43h0zm-1.863 7.97l-.195-1.044a.298.298 0 00-.356-.238l-1.225.262 1.596-2.25c.423.385.954.65 1.543.747l-1.363 2.523zm4.213-1.247a.3.3 0 00-.36.232l-.21 1.041-1.328-2.542a3.016 3.016 0 001.554-.724l1.562 2.27-1.219-.277z"
    ]
  },
  shipping: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.998 7.324L17.845 2H7.154L3 7.324V22h19l-.002-14.676zm-1.643-.357h-7.31V3.103h4.284l3.026 3.864zM7.668 3.103h4.283v3.864h-7.31l3.027-3.864zM4.062 20.895V8.037h16.873v12.858H4.063zm8.436-10.486l2.802 2.824-.772.78-1.514-1.527v5.78h-1.063v-5.78l-1.513 1.526-.772-.779 2.832-2.824z"
    ]
  },
  return: {
    viewBox: "0 0 24 24",
    paths: [
      "M21.218 7.18L17.017 2H6.202L2 7.18v14.278h19.22L21.218 7.18zm-1.662-.348h-7.394V3.074h4.333l3.062 3.758zM6.723 3.074h4.333v3.758H3.661l3.061-3.758zm-3.648 17.31V7.873h17.07v12.51H3.073z",
      "M12.584 14.034l.44-.435h-2.543c-.339 0-.643.034-.882.201-.474.334-.576.87-.441 1.237.102.4.407.835 1.017.87.509.033 1.018.033 1.56.033h1.154c.34 0 .577.268.577.568-.002.3-.272.534-.578.534H10.99c-.305 0-.577 0-.883-.034a2.225 2.225 0 01-2.034-1.705c-.272-.969.102-1.939.95-2.507.508-.334 1.051-.4 1.525-.4h2.544l-.543-.436a.612.612 0 01-.17-.4c0-.134.068-.3.17-.401.103-.1.273-.134.408-.134a.63.63 0 01.406.168l1.459 1.437c.102.1.17.268.135.401 0 .133-.068.3-.17.4l-1.39 1.439a.63.63 0 01-.407.167.564.564 0 01-.407-.167.612.612 0 01-.17-.401.434.434 0 01.171-.435z"

    ]
  },
  safety: {
    viewBox: "0 0 24 24",
    paths: [
      "M11.667 2a4.62 4.62 0 00-4.598 4.644V9.24h-1.61a.46.46 0 00-.459.46v9.196a.46.46 0 00.253.414l4.828 2.321c1.008.49 2.187.49 3.195 0l4.804-2.321a.46.46 0 00.253-.414V9.7a.46.46 0 00-.46-.46h-1.609V6.644A4.62 4.62 0 0011.666 2zM7.989 6.644a3.679 3.679 0 017.356 0V9.24H7.989V6.644zm9.425 11.954l-4.552 2.207a2.737 2.737 0 01-2.39 0L5.92 18.621v-8.46h11.494v8.437z",
      "M11.681 17.652a.563.563 0 00.563-.563v-2.252a.563.563 0 10-1.126 0v2.252a.563.563 0 00.563.563z"
    ]
  },
  star: {
    viewBox: "0 0 11 10",
    paths: [
      "M5.5 0l1.235 3.8h3.996L7.498 6.15l1.235 3.8L5.5 7.6 2.267 9.95l1.235-3.8L.269 3.8h3.996L5.5 0z"
    ]
  },
  show_password: {
    viewBox: "0 0 24 24",
    paths: [
      "M11.974 17.727c3.815 0 7.425-2.052 9.903-5.63a.41.41 0 000-.466C19.399 8.051 15.789 6 11.974 6 8.16 6 4.55 8.053 2.073 11.631a.409.409 0 000 .466c2.477 3.577 6.086 5.63 9.901 5.63zm0-10.909c3.46 0 6.749 1.836 9.065 5.046-2.316 3.21-5.606 5.045-9.065 5.045-3.46 0-6.749-1.834-9.064-5.045 2.314-3.211 5.604-5.046 9.064-5.046z",
      "M11.974 16.257a4.399 4.399 0 004.395-4.394 4.399 4.399 0 00-4.395-4.394 4.399 4.399 0 00-4.394 4.395 4.399 4.399 0 004.394 4.393zm0-7.97a3.58 3.58 0 013.576 3.576 3.58 3.58 0 01-3.576 3.576 3.58 3.58 0 01-3.576-3.576 3.58 3.58 0 013.576-3.576z",
      "M11.974 14.43a2.57 2.57 0 002.568-2.567 2.57 2.57 0 00-3.734-2.285.41.41 0 00-.21.468l.265 1.005-.876-.188a.41.41 0 00-.478.287 2.57 2.57 0 002.465 3.28z"
    ]
  },
  phone: {
    viewBox: "0 0 24 24",
    paths: [
      "M16.028 20.747a7.54 7.54 0 01-1.845-.232c-4.461-1.124-10.827-7.49-11.95-11.95-.454-1.8-.241-3.611.614-5.236a2.466 2.466 0 011.825-1.301c.78-.116 1.55.134 2.11.694l1.825 1.825c.719.718.926 1.817.518 2.732-.214.482-.488.89-.813 1.214-.222.223-.267.592-.132 1.096.492 1.834 3.143 4.487 4.978 4.979.505.135.874.09 1.097-.133a4.01 4.01 0 011.214-.812c.915-.41 2.014-.201 2.732.517l1.825 1.825c.56.56.813 1.329.694 2.11a2.46 2.46 0 01-1.301 1.824 7.22 7.22 0 01-3.391.848zM5.044 3.25a1.224 1.224 0 00-1.092.662c-.72 1.367-.89 2.83-.508 4.348 1.017 4.04 7.003 10.027 11.043 11.043 1.517.383 2.98.211 4.348-.509.352-.186.588-.515.648-.906a1.2 1.2 0 00-.343-1.038l-1.825-1.825a1.215 1.215 0 00-1.34-.26c-.34.152-.623.338-.84.554-.385.386-1.098.779-2.302.457-2.29-.614-5.249-3.573-5.863-5.863-.323-1.204.07-1.918.456-2.303a2.77 2.77 0 00.554-.838c.2-.447.095-.985-.26-1.34L5.897 3.604a1.202 1.202 0 00-.853-.355z"
    ]
  },
  drag: {
    viewBox: "0 0 24 24",
    paths: [
      "M13.836 9.603c-.234.17-.4.398-.493.65a1.404 1.404 0 00-2.08.584l-1.76-2.423a1.403 1.403 0 10-2.272 1.65l4.026 5.54-1.295-.576a1.403 1.403 0 00-1.141 2.564l.921.41c1 .449 2.101 1.641 3.104 2.09 1.4.624 3.467 1.286 3.584 1.325a.35.35 0 00.22-.666c-.116-.038-2.364-.782-3.52-1.302-.786-.353-2.012-1.607-3.102-2.087l-.922-.41a.702.702 0 01.571-1.283l2.4 1.069c.25.135.713-.218.466-.558L7.8 9.651a.702.702 0 111.135-.825l3.506 4.826a.351.351 0 10.568-.412l-1.032-1.42a.702.702 0 011.136-.824l1.031 1.42a.352.352 0 00.568-.414l-.619-.852a.701.701 0 111.136-.824l1.03 1.419a.351.351 0 00.569-.412l-.62-.852a.702.702 0 011.136-.825l1.444 1.987c1.35 1.86 1.503 4.456 2.577 5.935a.352.352 0 00.568-.413c-.926-1.275-1.221-4.068-2.577-5.934l-1.444-1.988a1.404 1.404 0 00-2.453.34 1.404 1.404 0 00-1.623.02zM5.085 7.892a.35.35 0 11.496.496L4.178 9.792a.35.35 0 01-.496 0L2.278 8.388a.351.351 0 01.497-.496l.804.805v-6.17a.351.351 0 11.701 0v6.172l.805-.807z"
    ]
  },
  list: {
    viewBox: "0 0 24 24",
    paths: [
      "M2 3h20v3.636H2zM2 17.545h20v3.636H2zM2 10.273h12.727v3.636H2z"
    ]
  },
  tiles: {
    viewBox: "0 0 24 24",
    paths: [
      "M2 2h4v4H2zM2 10h4v4H2zM2 18h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4zM10 18h4v4h-4zM18 2h4v4h-4zM18 10h4v4h-4zM18 18h4v4h-4z"
    ]
  },
  filter: {
    viewBox: "0 0 24 24",
    paths: [
      "M4.44 2H4.24A2.246 2.246 0 002 4.242v.199a2.247 2.247 0 002.241 2.252h.199a2.249 2.249 0 002.253-2.252v-.199A2.249 2.249 0 004.44 2zm1.613 2.44A1.605 1.605 0 014.44 6.054H4.24A1.606 1.606 0 012.64 4.441v-.199c0-.884.718-1.6 1.601-1.602h.199a1.603 1.603 0 011.613 1.602v.199zM11.811 2h-.214a2.246 2.246 0 00-2.235 2.242v.199a2.247 2.247 0 002.235 2.252h.214a2.247 2.247 0 002.236-2.252v-.199A2.246 2.246 0 0011.81 2zm1.603 2.44h-.001a1.604 1.604 0 01-1.602 1.613h-.214a1.604 1.604 0 01-1.601-1.602v-.199a1.604 1.604 0 011.601-1.612h.214c.884.001 1.601.718 1.602 1.602v.199zM19.17 2h-.199a2.249 2.249 0 00-2.253 2.242v.199a2.247 2.247 0 002.253 2.252h.198a2.247 2.247 0 002.242-2.252v-.199A2.246 2.246 0 0019.169 2zm1.601 2.44a1.607 1.607 0 01-1.602 1.613h-.198a1.604 1.604 0 01-1.613-1.612v-.199A1.602 1.602 0 0118.97 2.64h.198c.884.001 1.601.718 1.602 1.602v.199zM4.44 9.657H4.24A2.246 2.246 0 002 11.901v.199a2.246 2.246 0 002.241 2.242h.199a2.247 2.247 0 002.253-2.244V11.9A2.249 2.249 0 004.44 9.658zm1.613 2.44A1.604 1.604 0 014.451 13.7h-.199a1.605 1.605 0 01-1.612-1.601v-.199c0-.884.718-1.6 1.601-1.602h.199a1.602 1.602 0 011.613 1.604v.197zM11.813 9.657h-.215a2.247 2.247 0 00-2.235 2.244v.199a2.246 2.246 0 002.235 2.242h.215a2.247 2.247 0 002.235-2.244V11.9a2.246 2.246 0 00-2.235-2.243zm1.602 2.44c0 .886-.718 1.603-1.602 1.605h-.215a1.605 1.605 0 01-1.601-1.603v-.198c0-.885.717-1.602 1.601-1.604h.215c.883.002 1.6.718 1.601 1.602v.199zM19.17 9.657h-.199a2.247 2.247 0 00-2.253 2.244v.199a2.249 2.249 0 002.253 2.242h.198a2.246 2.246 0 002.242-2.244V11.9a2.246 2.246 0 00-2.242-2.243zm1.601 2.441c0 .884-.718 1.6-1.602 1.602h-.198a1.606 1.606 0 01-1.613-1.602V11.9c.001-.885.718-1.601 1.602-1.603h.198a1.604 1.604 0 011.613 1.604v.197zM11.813 17.318h-.215a2.246 2.246 0 00-2.235 2.241v.199A2.246 2.246 0 0011.598 22h.215a2.247 2.247 0 002.235-2.242v-.199a2.246 2.246 0 00-2.235-2.241zm1.602 2.44c-.002.884-.719 1.6-1.602 1.602h-.215a1.604 1.604 0 01-1.601-1.602v-.199c0-.883.718-1.6 1.601-1.601h.215c.883 0 1.6.718 1.601 1.601v.2z"
    ]
  },
  filter2: {
    viewBox: "0 0 24 24",
    paths: [
      "M18.3998 11.5631H17.4398C17.2402 10.793 16.5452 10.2555 15.7493 10.2555C14.9534 10.2555 14.2584 10.793 14.0589 11.5631H5.44176C5.19805 11.5631 5 11.7611 5 12.0048C5 12.2486 5.19805 12.4466 5.44176 12.4466H14.0589C14.2584 13.2167 14.9534 13.7542 15.7493 13.7542C16.5452 13.7542 17.2402 13.2167 17.4398 12.4466H18.3998C18.6435 12.4466 18.8416 12.2486 18.8416 12.0048C18.8416 11.7611 18.6435 11.5631 18.3998 11.5631ZM15.7494 12.8707C15.399 12.8707 15.0839 12.6594 14.9499 12.3362C14.8151 12.013 14.8895 11.6404 15.1369 11.3923C15.385 11.1449 15.7575 11.0706 16.0807 11.2053C16.4039 11.3393 16.6152 11.6544 16.6152 12.0048C16.6152 12.4827 16.2272 12.8707 15.7494 12.8707L15.7494 12.8707ZM18.3998 15.8157H13.6113C13.4118 15.0456 12.7168 14.5081 11.9209 14.5081C11.125 14.5081 10.43 15.0456 10.2304 15.8157H5.44191C5.19821 15.8157 5.00015 16.0137 5.00015 16.2574C5.00015 16.5011 5.19821 16.6992 5.44191 16.6992H10.2304C10.43 17.4693 11.125 18.0068 11.9209 18.0068C12.7168 18.0068 13.4118 17.4693 13.6113 16.6992H18.3998C18.6435 16.6992 18.8416 16.5011 18.8416 16.2574C18.8416 16.0137 18.6435 15.8157 18.3998 15.8157ZM11.9208 17.1262C11.5704 17.1262 11.2553 16.9149 11.1213 16.5917C10.9865 16.2685 11.0609 15.8959 11.3083 15.6478C11.5564 15.4004 11.9289 15.3261 12.2521 15.4608C12.5753 15.5948 12.7867 15.9099 12.7867 16.2604C12.7867 16.7382 12.3986 17.1262 11.9208 17.1262L11.9208 17.1262ZM5.44183 8.1911H6.40191C6.60144 8.96121 7.29646 9.49868 8.09235 9.49868C8.88825 9.49868 9.58327 8.96121 9.78279 8.1911H18.3999C18.6436 8.1911 18.8417 7.99305 18.8417 7.74934C18.8417 7.50564 18.6436 7.30758 18.3999 7.30758H9.78279C9.58327 6.53747 8.88825 6 8.09235 6C7.29646 6 6.60144 6.53747 6.40191 7.30758H5.44183C5.19813 7.30758 5.00008 7.50564 5.00008 7.74934C5.00008 7.99305 5.19813 8.1911 5.44183 8.1911ZM8.09224 6.88352C8.4427 6.88352 8.7578 7.09483 8.89181 7.41803C9.02654 7.74124 8.95218 8.11379 8.7048 8.3619C8.45669 8.60928 8.08414 8.68364 7.76093 8.54891C7.43773 8.41491 7.22642 8.0998 7.22642 7.74934C7.22642 7.51962 7.31772 7.29949 7.4797 7.13678C7.64241 6.9748 7.86254 6.8835 8.09226 6.8835L8.09224 6.88352Z"
    ]
  },
  sort: {
    viewBox: "0 0 24 24",
    paths: [
      "M7.08539 6.39352C6.96919 6.62961 6.96919 6.91304 7.10012 7.14912C7.10012 7.16511 7.11486 7.16511 7.11486 7.18048L10.5973 12.4844V18.4491C10.5973 18.6692 10.7135 18.8586 10.8875 18.9527C10.9601 18.984 11.0326 19 11.1052 19C11.2214 19 11.3376 18.9527 11.4243 18.874L13.2092 17.2527C13.3254 17.1426 13.3979 17.0006 13.3979 16.8279L13.3974 12.4689L16.8798 7.16505C16.8798 7.14907 16.8945 7.14907 16.8945 7.1337C17.0249 6.89761 17.0396 6.61418 16.9093 6.3781C16.7931 6.14201 16.5613 6.00061 16.3141 6.00061L7.67998 6C7.43342 6 7.20102 6.15739 7.08539 6.39348L7.08539 6.39352ZM15.6895 7.10178L12.483 11.9809C12.4252 12.0756 12.3816 12.1856 12.3816 12.2957V16.5612L11.6124 17.2535V12.2957C11.6124 12.1857 11.5835 12.0756 11.511 11.9809L8.31872 7.10184L15.6895 7.10178Z"
    ]
  },
  account: {
    viewBox: "0 0 24 24",
    paths: [
      "M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z"
    ]
  },
  login: {
    viewBox: "0 0 24 24",
    paths: [
      "M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z",
      "M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z"
    ]
  },
  logout: {
    viewBox: "0 0 24 24",
    paths: [
      "M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z",
      "M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z"
    ]
  },
  gift: {
    viewBox: "0 0 24 24",
    paths: [
      "M18.6 8.40005H15.8734C16.0794 8.04639 16.1997 7.63715 16.1997 7.19981C16.1997 5.88005 15.1204 4.80005 13.7999 4.80005C13.0841 4.80005 12.4407 5.11926 11.9999 5.6206C11.559 5.11926 10.9157 4.80005 10.1999 4.80005C8.87942 4.80005 7.80012 5.88005 7.80012 7.19981C7.80012 7.63645 7.92036 8.04567 8.12637 8.40005H5.40027C5.03956 8.40005 4.7998 8.63981 4.7998 8.99981V11.4003C4.7998 11.7603 5.03956 12 5.39957 12V18.6003C5.39957 18.9596 5.63933 19.2 5.99933 19.2H17.9996C18.3596 19.2 18.6 18.9596 18.6 18.6003V12C18.9593 12 19.1998 11.7603 19.1998 11.4003V8.99981C19.1998 8.63981 18.9593 8.40005 18.6 8.40005ZM17.9996 10.7998H12.5996V9.60028H17.9996V10.7998ZM13.7999 6.0003C14.4594 6.0003 15.0001 6.5403 15.0001 7.20054C15.0001 7.86008 14.4594 8.40007 13.7999 8.40007H12.5996V7.19984C12.5996 6.5403 13.1403 6.0003 13.7999 6.0003ZM8.99961 7.19983C8.99961 6.53959 9.53961 5.99959 10.1999 5.99959C10.8601 5.99959 11.4001 6.53959 11.4001 7.19983V8.40007H10.1999C9.53961 8.40007 8.99961 7.86007 8.99961 7.19983ZM6.00001 9.60031H11.4V10.7999H6.00001V9.60031ZM6.59981 12.0001H11.4001V17.9998H6.59981V12.0001ZM17.3999 17.9998H12.5996V12.0001H17.3999V17.9998Z"
    ]
  },
};
/* harmony default export */ var icons_icons = (icons);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
const iconColors = {
  greenPrimary: "green-primary",
  greenSecondary: "green-secondary",
  black: 'black',
  darkSecondary: 'dark-secondary',
  grayPrimary: "gray-primary",
  graySecondary: "gray-secondary",
  lightPrimary: "light-primary",
  white: "white",
  redPrimary: "red-primary",
  redSecondary: "red-secondary",
  yellowPrimary: "yellow-primary",
  yellowSecondary: "yellow-secondary",
  bluePrimary: "blue-primary",
  blueSecondary: "blue-secondary",
};
const colors = {
  primary: "color-primary",
  secondary: "color-secondary",
  light: "color-light",
  dark: "color-dark",
  info: "color-info",
  success: "color-success",
  warning: 'color-warning',
  danger: 'color-danger'
};
const colorsValues = Object.values(colors);
const iconColorsValues = Object.values(iconColors);
/* harmony default export */ var variables_colors = (colors);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/variables/sizes.js
// Icon sizes
const sizes = {
  xxs: "xxs", 
  xs: "xs", 
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  xl3: "xl3",
  xl4: "xl4"
};
// Typography sizes
const typographySizes = {
  "extra-small": "extra-small",
  "small": "small",
  "regular": "regular",
  "big": "big",
};
const sizesValues = Object.values(sizes);
/* harmony default export */ var variables_sizes = (sizes);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const SF_ICONS = Object.keys(icons_icons);
/* harmony default export */ var SfIconvue_type_script_lang_js_ = ({
  name: "SfIcon",
  inject: {
    components: {
      default: {
        icons: icons_icons,
        SF_COLORS: iconColorsValues,
        SF_SIZES: sizesValues,
        SF_ICONS
      }
    }
  },
  props: {
    /**
     * Icon SVG path(s)
     * It can be single SVG path (string) or array of SVG paths or icon name
     * from our icons list (such as 'added_to_cart`)
     */
    icon: {
      type: [String, Array],
      default: ""
    },

    /**
     * Custom size of the icon
     * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
     * Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
     */
    size: {
      type: String,
      default: ""
    },

    /**
     * Custom color of the icon
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`.
     */
    color: {
      type: String,
      default: ""
    },

    /**
     * Custom viewBox size of the icon
     * It should be according to the standard `"min-x min-y width height"`.
     * By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all.
     * Recommendations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.
     */
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },

    /**
     * The fraction in which the icon is partially collored with --icon-color value and the rest with --icon-color-negative.
     * To be used in SfRating.
     * */
    coverage: {
      type: [String, Number],
      default: 1
    }
  },

  iconColorClass(color) {
    const isSFColors = iconColorsValues.includes(color.trim());
    return isSFColors ? `color-${color.trim()}` : "";
  },

  iconSizeClass(size) {
    const isSFSizes = sizesValues.includes(size.trim());
    return isSFSizes ? `size-${size.trim()}` : "";
  },

  iconCustomStyle(color, size) {
    const isSFColors = iconColorsValues.includes(color.trim());
    const isSFSizes = sizesValues.includes(size.trim());
    return {
      "--icon-color": !isSFColors ? color : "",
      "--icon-size": !isSFSizes ? size : ""
    };
  },

  iconViewBox(icon, viewBox) {
    const isSFIcons = () => {
      if (typeof icon === "string") {
        return SF_ICONS.includes(icon.trim());
      } else return null;
    };

    return isSFIcons() ? icons_icons[icon].viewBox || viewBox : viewBox;
  },

  iconPaths(icon) {
    const isSFIcons = () => {
      if (typeof icon === "string") {
        return SF_ICONS.includes(icon.trim());
      } else return null;
    };

    if (isSFIcons()) {
      return icons_icons[icon].paths;
    } else {
      return Array.isArray(icon) ? icon : [icon];
    }
  },

  fillPath(coverage) {
    const fillPathUrl = index => `url(#${index})`;

    return coverage === 1 ? "var(--icon-color)" : fillPathUrl(coverage);
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfIcon_SfIconvue_type_script_lang_js_ = (SfIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfIcon/SfIcon.vue?vue&type=style&index=0&lang=scss&
var SfIconvue_type_style_index_0_lang_scss_ = __webpack_require__("cca0");

// CONCATENATED MODULE: ./src/components/atoms/SfIcon/SfIcon.vue






/* normalize component */

var SfIcon_component = normalizeComponent(
  SfIcon_SfIconvue_type_script_lang_js_,
  SfIconvue_type_template_id_0fbff0e2_functional_true_render,
  SfIconvue_type_template_id_0fbff0e2_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfIcon = (SfIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfArrow/SfArrow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfArrowvue_type_script_lang_js_ = ({
  name: "SfArrow",
  inject: {
    components: {
      default: {
        SfButton: SfButton,
        SfIcon: SfIcon
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfArrow/SfArrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfArrow_SfArrowvue_type_script_lang_js_ = (SfArrowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfArrow/SfArrow.vue?vue&type=style&index=0&lang=scss&
var SfArrowvue_type_style_index_0_lang_scss_ = __webpack_require__("54d1");

// CONCATENATED MODULE: ./src/components/atoms/SfArrow/SfArrow.vue






/* normalize component */

var SfArrow_component = normalizeComponent(
  SfArrow_SfArrowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfArrow = (SfArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=235c95a6&functional=true&
var SfBadgevue_type_template_id_235c95a6_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-badge'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("default")],2)}
var SfBadgevue_type_template_id_235c95a6_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=235c95a6&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfBadgevue_type_script_lang_js_ = ({
  name: "SfBadge"
});
// CONCATENATED MODULE: ./src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBadge_SfBadgevue_type_script_lang_js_ = (SfBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfBadge/SfBadge.vue?vue&type=style&index=0&lang=scss&
var SfBadgevue_type_style_index_0_lang_scss_ = __webpack_require__("4a81");

// CONCATENATED MODULE: ./src/components/atoms/SfBadge/SfBadge.vue






/* normalize component */

var SfBadge_component = normalizeComponent(
  SfBadge_SfBadgevue_type_script_lang_js_,
  SfBadgevue_type_template_id_235c95a6_functional_true_render,
  SfBadgevue_type_template_id_235c95a6_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBadge = (SfBadge_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=6a2f7a2e&functional=true&
var SfBreadcrumbsvue_type_template_id_6a2f7a2e_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('nav',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-breadcrumbs'],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"aria-label":"breadcrumb"}},'nav',_vm.data.attrs,false),_vm.listeners),[_c('ol',{staticClass:"sf-breadcrumbs__list"},_vm._l((_vm.props.breadcrumbs),function(breadcrumb,i){return _c('li',{key:i,staticClass:"sf-breadcrumbs__list-item",attrs:{"aria-current":_vm.$options.breadcrumbLast(_vm.props.breadcrumbs) === i && 'page'}},[(_vm.$options.breadcrumbLast(_vm.props.breadcrumbs) !== i)?[_vm._t("link",function(){return [_c(_vm.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb",attrs:{"link":breadcrumb.link,"data-testid":breadcrumb.text}},[_vm._v(" "+_vm._s(breadcrumb.text)+" ")])]},null,{ breadcrumb: breadcrumb })]:[_vm._t("current",function(){return [_c(_vm.injections.components.SfLink,{tag:"component",staticClass:"sf-breadcrumbs__breadcrumb current",attrs:{"link":breadcrumb.link}},[_vm._v(" "+_vm._s(breadcrumb.text)+" ")])]},null,{ breadcrumb: breadcrumb })]],2)}),0)])}
var SfBreadcrumbsvue_type_template_id_6a2f7a2e_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=template&id=6a2f7a2e&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBreadcrumbsvue_type_script_lang_js_ = ({
  name: "SfBreadcrumbs",
  inject: {
    components: {
      default: {
        SfLink: SfLink
      }
    }
  },
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },

  breadcrumbLast(breadcrumbs) {
    return breadcrumbs.length - 1;
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_ = (SfBreadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue?vue&type=style&index=0&lang=scss&
var SfBreadcrumbsvue_type_style_index_0_lang_scss_ = __webpack_require__("77fa");

// CONCATENATED MODULE: ./src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue






/* normalize component */

var SfBreadcrumbs_component = normalizeComponent(
  SfBreadcrumbs_SfBreadcrumbsvue_type_script_lang_js_,
  SfBreadcrumbsvue_type_template_id_6a2f7a2e_functional_true_render,
  SfBreadcrumbsvue_type_template_id_6a2f7a2e_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBreadcrumbs = (SfBreadcrumbs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBullets/SfBullets.vue?vue&type=template&id=4c2c19f4&functional=true&
var SfBulletsvue_type_template_id_4c2c19f4_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('ol',_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-bullets'],style:([_vm.data.style, _vm.data.staticStyle])},'ol',_vm.data.attrs,false),[_vm._l((_vm.$options.inactiveLeft(_vm.props.total, _vm.props.current)),function(_,index){return [_vm._t("inactive",function(){return [_c('li',{key:index},[_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-bullet",attrs:{"type":"button","aria-label":'Go to slide ' + (index + 1),"data-testid":index + 1},on:{"click":function($event){_vm.listeners.click && _vm.listeners.click(index)}}})],1)]},null,{ index: index, $options: _vm.$options })]}),_vm._t("active",function(){return [_c('li',[_c(_vm.injections.components.SfButton,_vm._b({tag:"component",staticClass:"sf-button--pure sf-bullet is-active",attrs:{"aria-label":"Current slide"}},'component',_vm.data.attrs,false))],1)]}),_vm._l((_vm.$options.inactiveRight(_vm.props.total, _vm.props.current)),function(_,index){return [_vm._t("inactive",function(){return [_c('li',{key:_vm.$options.inactiveLeft(_vm.props.total, _vm.props.current) + 1 + index},[_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-bullet",attrs:{"aria-label":'Go to slide ' +
            (_vm.$options.inactiveLeft(_vm.props.total, _vm.props.current) + 2 + index),"data-testid":_vm.$options.inactiveLeft(_vm.props.total, _vm.props.current) + 1 + index},on:{"click":function($event){_vm.listeners.click &&
              _vm.listeners.click(
                _vm.$options.inactiveLeft(_vm.props.total, _vm.props.current) + 1 + index
              )}}})],1)]},null,{
        index: _vm.$options.inactiveLeft(_vm.props.total, _vm.props.current) + 1 + index,
        $options: _vm.$options,
      })]})],2)}
var SfBulletsvue_type_template_id_4c2c19f4_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfBullets/SfBullets.vue?vue&type=template&id=4c2c19f4&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfBullets/SfBullets.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBulletsvue_type_script_lang_js_ = ({
  name: "SfBullets",
  inject: {
    components: {
      default: {
        SfButton: SfButton
      }
    }
  },
  props: {
    /**
     * Number of bullets in total (active + inactive)
     */
    total: {
      type: Number,
      default: 0
    },

    /**
     * Index of the currently active bullet (0-indexed)
     */
    current: {
      type: Number,
      default: 0
    }
  },

  inactiveRight(total, current) {
    return total - 1 - current;
  },

  inactiveLeft(total, current) {
    return total - (total - 1 - current) - 1;
  },

  go(listeners, index) {
    listeners.click && listeners.click(index);
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfBullets/SfBullets.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBullets_SfBulletsvue_type_script_lang_js_ = (SfBulletsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfBullets/SfBullets.vue?vue&type=style&index=0&lang=scss&
var SfBulletsvue_type_style_index_0_lang_scss_ = __webpack_require__("8cc9");

// CONCATENATED MODULE: ./src/components/atoms/SfBullets/SfBullets.vue






/* normalize component */

var SfBullets_component = normalizeComponent(
  SfBullets_SfBulletsvue_type_script_lang_js_,
  SfBulletsvue_type_template_id_4c2c19f4_functional_true_render,
  SfBulletsvue_type_template_id_4c2c19f4_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBullets = (SfBullets_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=5fa15e5c&functional=true&
var SfChevronvue_type_template_id_5fa15e5c_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-chevron'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--left"}),_c('span',{staticClass:"sf-chevron__bar sf-chevron__bar--right"})]})],2)}
var SfChevronvue_type_template_id_5fa15e5c_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfChevron/SfChevron.vue?vue&type=template&id=5fa15e5c&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfChevronvue_type_script_lang_js_ = ({
  name: "SfChevron",
  directives: {
    focus: focus_directive_focus
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfChevron/SfChevron.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfChevron_SfChevronvue_type_script_lang_js_ = (SfChevronvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfChevron/SfChevron.vue?vue&type=style&index=0&lang=scss&
var SfChevronvue_type_style_index_0_lang_scss_ = __webpack_require__("8f2a");

// CONCATENATED MODULE: ./src/components/atoms/SfChevron/SfChevron.vue






/* normalize component */

var SfChevron_component = normalizeComponent(
  SfChevron_SfChevronvue_type_script_lang_js_,
  SfChevronvue_type_template_id_5fa15e5c_functional_true_render,
  SfChevronvue_type_template_id_5fa15e5c_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfChevron = (SfChevron_component.exports);
// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/delivery.js
var STORAGE_TYPES = {
    UPLOAD: 'upload',
    FETCH: 'fetch',
    PRIVATE: 'private',
    AUTHENTICATED: 'authenticated',
    SPRITE: 'sprite',
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    YOUTUBE: 'youtube',
    VIMEO: 'vimeo',
    MULTI: 'multi',
    INSTAGRAM: 'instagram',
    HULU: 'hulu',
    ANIMOTO: 'animoto',
    DAILYMOTION: 'dailymotion'
};
var RESOURCE_TYPES = {
    IMAGE: 'image',
    VIDEO: 'video',
    RAW: 'raw'
};
var VIDEO_SOURCE_TYPES = {
    WEBM: 'webm',
    MP4: 'mp4',
    OGV: 'ogv',
    FLV: 'flv',
    M3U8: 'm3u8',
    TS: 'ts',
    MOV: 'mov',
    MKV: 'mkv',
    MPD: 'mpd'
};
var ImageFormats = {
    GIF: "gif",
    PNG: "png",
    JPG: "jpg",
    BMP: "bmp",
    ICO: "ico",
    PDF: "pdf",
    TIFF: "tiff",
    EPS: "eps",
    JPC: "jpc",
    JP2: "jp2",
    PSD: "psd",
    WEBP: "webp",
    ZIP: "zip",
    SVG: "svg",
    WDP: "wdp",
    HDX: "hpx",
    DJVU: "djvu",
    AI: "ai",
    FLIF: "flif",
    BPG: "bpg",
    MIFF: "miff",
    TGA: "tga",
    HEIC: "heic",
};

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/constants/index.js
var constants = __webpack_require__("c510");

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/url.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var SHARED_CDNS = ["cloudinary-a.akamaihd.net", "res.cloudinary.com"];
var CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video|raw)\/)?(?:(upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;
var extractPublicId = function (link) {
    if (!link)
        return '';
    var parts = CLOUDINARY_REGEX.exec(link);
    return parts && parts.length > 2 ? parts[parts.length - 2] : link;
};
var getSignature = function (signature) {
    if (!signature)
        return '';
    var isFormatted = signature.indexOf('s--') === 0 && signature.endsWith('--');
    return isFormatted ? signature : "s--" + signature + "--";
};
var doesPathNeedVersion = function (publicId) { return !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//); };
var encodePublicId = function (publicId) { return encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/'); };
var getVersion = function (publicId, _a) {
    var _b = _a.forceVersion, forceVersion = _b === void 0 ? false : _b, _c = _a.version, version = _c === void 0 ? 1 : _c;
    var needVersion = doesPathNeedVersion(publicId) && forceVersion;
    return needVersion ? "v" + version : '';
};
var getSubDomain = function (publicId, _a) {
    var _b = _a.cdnSubdomain, cdnSubdomain = _b === void 0 ? false : _b, cname = _a.cname;
    if (!cname)
        return "res" + (cdnSubdomain ? "-" + publicId : '');
    return cdnSubdomain ? "a" + publicId + "." : '';
};
var getPrefix = function (publicId, _a) {
    var cloudName = _a.cloudName, _b = _a.privateCdn, privateCdn = _b === void 0 ? false : _b, _c = _a.cdnSubdomain, cdnSubdomain = _c === void 0 ? false : _c, secureDistribution = _a.secureDistribution, cname = _a.cname, _d = _a.secure, secure = _d === void 0 ? true : _d;
    var hasSecureDistribution = secure && secureDistribution && !SHARED_CDNS.includes(secureDistribution);
    var protocol = "http" + (secure ? 's' : '') + "://";
    var cdn = privateCdn && !hasSecureDistribution ? cloudName + "-" : '';
    var accountPath = privateCdn ? '' : "/" + cloudName;
    var subDomain = hasSecureDistribution ? '' : getSubDomain(publicId, { cdnSubdomain: cdnSubdomain, cname: cname });
    var host = hasSecureDistribution ? secureDistribution : (cname || '.cloudinary.com');
    return "" + protocol + cdn + subDomain + host + accountPath;
};
var getResourceType = function (_a) {
    var _b = _a.resourceType, resourceType = _b === void 0 ? RESOURCE_TYPES.IMAGE : _b, _c = _a.storageType, storageType = _c === void 0 ? STORAGE_TYPES.UPLOAD : _c, urlSuffix = _a.urlSuffix, useRootPath = _a.useRootPath, shortern = _a.shortern;
    var isUploadImage = resourceType === RESOURCE_TYPES.IMAGE && storageType === STORAGE_TYPES.UPLOAD;
    var useRootForNonUploadedImages = useRootPath && !isUploadImage;
    var shortenForUploadedImages = shortern && isUploadImage;
    var typePath = resourceType + "/" + storageType;
    if (useRootForNonUploadedImages) {
        throw new Error("Root path only supported for image/upload");
    }
    if (useRootPath)
        return "" + (shortenForUploadedImages ? 'iu' : '');
    if (urlSuffix) {
        var seo = constants["a" /* SEO_TYPES */][typePath];
        if (seo) {
            return seo;
        }
        throw new Error("URL Suffix only supported for " + Object.keys(constants["a" /* SEO_TYPES */]).join(', '));
    }
    return typePath;
};
var isUrl = function (str) { return str && !!str.match(/^https?:\//); };
var getPathToAsset = function (publicId, _a) {
    var _b = _a.urlSuffix, urlSuffix = _b === void 0 ? '' : _b, _c = _a.format, format = _c === void 0 ? '' : _c;
    if (isUrl(publicId))
        return encodePublicId(publicId);
    var publicIdWithFormat = publicId.replace(/\.[^/.]+$/, format || '');
    var path = [publicIdWithFormat, urlSuffix].filter(Boolean).join('/');
    return encodePublicId(path);
};
var url = function (publicId, cloud, options) {
    if (cloud === void 0) { cloud = { cloudName: '' }; }
    if (!cloud.cloudName) {
        throw Error('cloudName is required!');
    }
    var _publicId = isUrl(publicId) ? extractPublicId(publicId) : publicId;
    var version = getVersion(_publicId, cloud);
    var prefix = getPrefix(_publicId, cloud);
    var signature = getSignature(cloud.signature);
    var typePath = getResourceType(cloud);
    var pathToAsset = getPathToAsset(_publicId, { format: options.format, urlSuffix: cloud.urlSuffix });
    var format = options.fetchFormat || options.format || 'auto';
    var $options = __assign(__assign({ quality: 'auto' }, options), { format: format });
    var _a = __webpack_require__("c787"), toTransformationStr = _a.toTransformationStr, transform = _a.transform;
    var trans = toTransformationStr(transform($options));
    return [prefix, typePath, signature, trans, version, pathToAsset].filter(Boolean).join('/').replace(' ', '%20');
};
/* harmony default export */ var esm_url = (url);

// EXTERNAL MODULE: ./node_modules/cloudinary-build-url/dist/esm/transformers/index.js + 11 modules
var transformers = __webpack_require__("c787");

// CONCATENATED MODULE: ./node_modules/cloudinary-build-url/dist/esm/index.js
var esm_assign = (undefined && undefined.__assign) || function () {
    esm_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return esm_assign.apply(this, arguments);
};



var config = {};
var getConfig = function () { return Object.freeze(config); };
var setConfig = function (options) { return config = esm_assign(esm_assign({}, config), options); };
var buildUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    var cloudConfig = esm_assign(esm_assign({}, config), cloud);
    return url(publicId, cloudConfig, transformations);
};
var buildImageUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: esm_assign(esm_assign({}, cloud), { resourceType: RESOURCE_TYPES.IMAGE }),
        transformations: transformations
    });
};
var buildVideoUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: esm_assign(esm_assign({}, cloud), { resourceType: RESOURCE_TYPES.VIDEO }),
        transformations: transformations
    });
};
var Transformer = { transform: transformers["transform"], toString: transformers["toTransformationStr"] };

/* harmony default export */ var esm = (buildUrl);

// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/effects.js
var Brightness = {
    Auto: 'auto_brightness',
    Default: 'brightness',
    Hsb: 'hsb'
};
var Contrast = {
    Default: 'contrast',
    Auto: 'auto_contrast'
};
var ColorChannel = {
    Red: 'red',
    Green: 'green',
    Blue: 'blue',
};
var ColorFilter = {
    Negate: 'negate',
    Sepia: 'sepia',
    Grayscale: 'grayscale',
    Blackwhite: 'blackwhite',
    Tint: 'tint',
};
var ColorAdjustment = {
    Hue: 'hue',
    Saturation: 'saturation',
    Colorize: 'colorize',
    ReplaceColor: 'replace_color',
    Recolor: 'recolor',
    Theme: 'theme',
    Vibrance: "vibrance",
    AutoColor: 'auto_color',
    Vectorize: 'vectorize',
    Improve: 'improve',
    FillLight: 'fill_light',
    Outline: 'outline',
    CutOut: 'cut_out',
    Cartoonify: 'cartoonify',
    Fade: 'fade',
    StyleTransfer: 'style_transfer',
    Lightroom: 'lightroom',
    Art: 'art',
    ViesusCorrect: 'viesus_correct',
    Gamma: 'gamma',
    Screen: 'screen',
    Multiply: 'multiply',
    Overlay: 'overlay',
    AntiRemoval: 'anti_removal',
    Bgremoval: 'bgremoval',
    MakeTransparent: 'make_transparent',
    OpacityThreshold: 'opacity_threshold',
    Trim: 'trim',
    Shadow: 'shadow',
    Distort: 'distort',
    Shear: 'shear',
    Displace: 'displace',
    OilPaint: 'oil_paint',
    Redeye: 'redeye',
    AdvRedeye: 'adv_redeye',
    Vignette: 'vignette',
    Gradient_fade: 'gradient_fade',
    Sharpen: 'sharpen',
    UnsharpMask: 'unsharp_mask',
    OrderedDither: 'ordered_dither',
    Loop: 'loop',
};
var Colorblind = {
    Assist: 'assist_colorblind',
    Simulate: 'simulate_colorblind'
};
var PixelateEffects = {
    Default: 'pixelate',
    Region: 'pixelate_region',
    Faces: 'pixelate_faces'
};
var BlurEffects = {
    Default: 'blur',
    Region: 'blur_region',
    Faces: 'blur_faces'
};
var VideoEffects = {
    Accelerate: 'accelerate',
    Reverse: 'reverse',
    Boomerang: 'boomerang',
    Loop: 'loop',
    ProgressBar: 'progressbar',
    Transparent: 'transparent',
    Preview: 'preview',
    Transition: 'transition',
    Noise: 'noise',
    Deshake: 'deshake',
    Volume: 'volume'
};
var ArtisticFilters = {
    AlDente: 'al_dente',
    Athena: 'athena',
    Audrey: 'audrey',
    Aurora: 'aurora',
    Daguerre: 'daguerre',
    Eucalyptus: 'eucalyptus',
    Fes: 'fes',
    Frost: 'frost',
    Hairspray: 'hairspray',
    Hokusai: 'hokusai',
    Incognito: 'incognito',
    Linen: 'linen',
    Peacock: 'peacock',
    Primavera: 'primavera',
    quartz: 'quartz',
    RedRock: 'red_rock',
    Refresh: 'refresh',
    Sizzle: 'sizzle',
    Sonnet: 'sonnet',
    Ukulele: 'ukulele',
    Zorro: 'zorro'
};

// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/resize.js
var RESIZE_TYPES = {
    IMAGGA_SCALE: 'imaggaScale',
    IMAGGA_CROP: 'imaggaCrop',
    CROP: 'crop',
    FILL: 'fill',
    SCALE: 'scale',
    MIN_PAD: 'minimumPad',
    FIT: 'fit',
    PAD: 'pad',
    LIMIT_FIT: 'limitFit',
    THUMBNAIL: 'thumb',
    LIMIT_FILL: 'limitFill',
    MIN_FIT: 'minimumFit',
    LIMIT_PAD: 'limitPad',
    FILL_PAD: 'fillPad'
};

// CONCATENATED MODULE: ./node_modules/@cld-apis/utils/dist/esm/constants/gravity.js
var gravity_assign = (undefined && undefined.__assign) || function () {
    gravity_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return gravity_assign.apply(this, arguments);
};
var Compass = {
    North: "north",
    NorthEast: "north_east",
    NorthWest: "north_west",
    West: "west",
    SouthWest: "south_west",
    South: "south",
    SouthEast: "south_east",
    East: "east",
    Center: "center",
};
var Gravity = gravity_assign({ Auto: 'auto', Subject: "auto:subject", Face: "face", Sink: "sink", FaceCenter: "face:center", MultipleFaces: "faces", MultipleFacesCenter: "faces:center" }, Compass);

// CONCATENATED MODULE: ./src/components/atoms/SfCimage/helpers.js

const placeholderTypes = {
  blur: [{
    effect: {
      name: BlurEffects.Default,
      value: "2000"
    }
  }],
  pixelate: [{
    effect: {
      name: PixelateEffects.Default
    }
  }],
  vectorize: [{
    effect: {
      name: ColorAdjustment.Vectorize,
      value: "3:0.1"
    },
    format: "svg"
  }],
  predominant: [{
    resize: {
      width: "iw_div_2",
      type: RESIZE_TYPES.PAD
    },
    aspectRatio: 1,
    background: "auto"
  }, {
    resize: {
      type: RESIZE_TYPES.CROP,
      width: 1,
      height: 1
    },
    gravity: Gravity.NorthEast
  }]
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfCimage/SfCimage.vue?vue&type=script&lang=js&


/* harmony default export */ var SfCimagevue_type_script_lang_js_ = ({
  name: "SfCimg",
  functional: true,
  props: {
    publicId: {
      type: String,
      required: true
    },
    progressive: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "",
      validator: value => !value || placeholderTypes[value]
    },
    cloud: {
      type: Object,
      required: true,
      validator: value => !!value.cloudName
    },
    transformations: {
      type: Array,
      default: () => []
    },
    loading: {
      type: String,
      default: "lazy",
      validator: value => ["", "lazy", "eager"].includes(value)
    },
    alt: {
      type: String,
      required: true
    }
  },

  render(createElement, context) {
    const props = context.props;

    if (!props.publicId) {
      throw Error("PublicId is required to use this component.");
      return;
    }

    if ((!props.cloud || !props.cloud.cloudName) && !getConfig().cloudName) {
      throw Error("cloudName is required to use this component.");
      return;
    }

    const progressiveEffect = props.progressive ? [{
      flags: "progressive"
    }] : [];
    const chaining = progressiveEffect.concat(props.transformations);
    const options = {
      cloud: props.cloud,
      transformations: {
        format: props.format || "auto",
        chaining
      }
    };
    const placeholderEffects = placeholderTypes[props.placeholder];
    let src = buildImageUrl(props.publicId, options);

    if (typeof window !== "undefined" && placeholderEffects) {
      const image = new Image();

      image.onload = () => {
        context.parent.$refs.cimage.setAttribute("src", image.src);
      };

      image.src = src;
      src = buildImageUrl(props.publicId, {
        cloud: props.cloud,
        transformations: {
          chaining: chaining.concat(placeholderEffects)
        }
      });
    }

    return createElement("img", { ...context,
      attrs: { ...context.attrs,
        src,
        loading: props.loading,
        alt: props.alt
      },
      ref: "cimage",
      class: { ...context.class,
        "sf-cimage": true
      }
    }, context.children);
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfCimage/SfCimage.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCimage_SfCimagevue_type_script_lang_js_ = (SfCimagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfCimage/SfCimage.vue?vue&type=style&index=0&lang=scss&
var SfCimagevue_type_style_index_0_lang_scss_ = __webpack_require__("1a03");

// CONCATENATED MODULE: ./src/components/atoms/SfCimage/SfCimage.vue
var SfCimage_render, SfCimage_staticRenderFns





/* normalize component */

var SfCimage_component = normalizeComponent(
  SfCimage_SfCimagevue_type_script_lang_js_,
  SfCimage_render,
  SfCimage_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCimage = (SfCimage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=ccdb7bcc&functional=true&
var SfCircleIconvue_type_template_id_ccdb7bcc_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[_vm.data.class, _vm.data.staticClass, 'sf-circle-icon'],attrs:{"disabled":_vm.props.disabled}},'component',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c(_vm.injections.components.SfIcon,{tag:"component",staticClass:"sf-circle-icon__icon",attrs:{"aria-hidden":"true","icon":_vm.props.icon,"color":_vm.props.iconColor,"size":_vm.props.iconSize,"badge-label":_vm.props.badgeLabel,"has-badge":_vm.props.hasBadge}})]})],2)}
var SfCircleIconvue_type_template_id_ccdb7bcc_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=ccdb7bcc&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCircleIconvue_type_script_lang_js_ = ({
  name: "SfCircleIcon",
  inject: {
    components: {
      default: {
        SfButton: SfButton,
        SfIcon: SfIcon
      }
    }
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home"
    },
    iconColor: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCircleIcon_SfCircleIconvue_type_script_lang_js_ = (SfCircleIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=style&index=0&lang=scss&
var SfCircleIconvue_type_style_index_0_lang_scss_ = __webpack_require__("9c5a");

// CONCATENATED MODULE: ./src/components/atoms/SfCircleIcon/SfCircleIcon.vue






/* normalize component */

var SfCircleIcon_component = normalizeComponent(
  SfCircleIcon_SfCircleIconvue_type_script_lang_js_,
  SfCircleIconvue_type_template_id_ccdb7bcc_functional_true_render,
  SfCircleIconvue_type_template_id_ccdb7bcc_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCircleIcon = (SfCircleIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=3b9b75b9&functional=true&
var SfColorvue_type_template_id_3b9b75b9_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button--pure sf-color',
    { 'is-active': _vm.props.selected } ],style:(Object.assign({}, _vm.data.style,
    _vm.data.staticStyle,
    {'--color-background': _vm.props.color})),attrs:{"aria-pressed":_vm.props.selected.toString(),"data-testid":_vm.props.color}},'component',_vm.data.attrs,false),_vm.listeners),[_c('transition',{attrs:{"name":"sf-bounce"}},[_vm._t("badge",function(){return [(_vm.props.selected && _vm.props.hasBadge)?_c(_vm.injections.components.SfBadge,{tag:"component",staticClass:"sf-color__badge smartphone-only"},[_c(_vm.injections.components.SfIcon,{tag:"component",attrs:{"size":"16px","color":"white","icon":"check","aria-hidden":"true"}})],1):_vm._e()]},null,{ props: _vm.props })],2)],1)}
var SfColorvue_type_template_id_3b9b75b9_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfColor/SfColor.vue?vue&type=template&id=3b9b75b9&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorvue_type_script_lang_js_ = ({
  name: "SfColor",
  inject: {
    components: {
      default: {
        SfBadge: SfBadge,
        SfIcon: SfIcon,
        SfButton: SfButton
      }
    }
  },
  props: {
    color: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    hasBadge: {
      type: Boolean,
      default: true
    }
  },

  style(color) {
    return color;
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfColor/SfColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColor_SfColorvue_type_script_lang_js_ = (SfColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfColor/SfColor.vue?vue&type=style&index=0&lang=scss&
var SfColorvue_type_style_index_0_lang_scss_ = __webpack_require__("80ce");

// CONCATENATED MODULE: ./src/components/atoms/SfColor/SfColor.vue






/* normalize component */

var SfColor_component = normalizeComponent(
  SfColor_SfColorvue_type_script_lang_js_,
  SfColorvue_type_template_id_3b9b75b9_functional_true_render,
  SfColorvue_type_template_id_3b9b75b9_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfColor = (SfColor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfDivider/SfDivider.vue?vue&type=template&id=aee4bcd8&functional=true&
var SfDividervue_type_template_id_aee4bcd8_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('hr',{class:[_vm.data.class, _vm.data.staticClass, 'sf-divider'],style:([_vm.data.style, _vm.data.staticStyle])})}
var SfDividervue_type_template_id_aee4bcd8_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfDivider/SfDivider.vue?vue&type=template&id=aee4bcd8&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfDivider/SfDivider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfDividervue_type_script_lang_js_ = ({
  name: "SfDivider"
});
// CONCATENATED MODULE: ./src/components/atoms/SfDivider/SfDivider.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfDivider_SfDividervue_type_script_lang_js_ = (SfDividervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfDivider/SfDivider.vue?vue&type=style&index=0&lang=scss&
var SfDividervue_type_style_index_0_lang_scss_ = __webpack_require__("00aa");

// CONCATENATED MODULE: ./src/components/atoms/SfDivider/SfDivider.vue






/* normalize component */

var SfDivider_component = normalizeComponent(
  SfDivider_SfDividervue_type_script_lang_js_,
  SfDividervue_type_template_id_aee4bcd8_functional_true_render,
  SfDividervue_type_template_id_aee4bcd8_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfDivider = (SfDivider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=9f8a4538&functional=true&
var SfHeadingvue_type_template_id_9f8a4538_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-heading'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("title",function(){return [_c(("h" + (_vm.props.level)),{tag:"component",staticClass:"sf-heading__title",class:_vm.props.level > 1 && ("h" + (_vm.props.level))},[_vm._v(" "+_vm._s(_vm.props.title)+" ")])]},null,{ props: _vm.props }),_vm._t("description",function(){return [(_vm.$options.hasDescription(_vm.props.description, _vm.slots))?_c('div',{staticClass:"sf-heading__description"},[_vm._v(" "+_vm._s(_vm.props.description)+" ")]):_vm._e()]},null,{ props: _vm.props })],2)}
var SfHeadingvue_type_template_id_9f8a4538_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=9f8a4538&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfHeadingvue_type_script_lang_js_ = ({
  name: "SfHeading",
  props: {
    /**
     * Heading level
     */
    level: {
      type: Number,
      default: 2
    },

    /**
     * Heading title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Heading description
     */
    description: {
      type: String,
      default: ""
    }
  },

  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeading_SfHeadingvue_type_script_lang_js_ = (SfHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfHeading/SfHeading.vue?vue&type=style&index=0&lang=scss&
var SfHeadingvue_type_style_index_0_lang_scss_ = __webpack_require__("e2e2");

// CONCATENATED MODULE: ./src/components/atoms/SfHeading/SfHeading.vue






/* normalize component */

var SfHeading_component = normalizeComponent(
  SfHeading_SfHeadingvue_type_script_lang_js_,
  SfHeadingvue_type_template_id_9f8a4538_functional_true_render,
  SfHeadingvue_type_template_id_9f8a4538_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHeading = (SfHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=05c3bfc2&
var SfImagevue_type_template_id_05c3bfc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-image--wrapper",style:(_vm.variables),attrs:{"data-testid":"image-wrapper"}},[_c('img',_vm._g(_vm._b({class:_vm.classes,attrs:{"loading":_vm.loading,"src":_vm.src,"srcset":_vm.srcset,"sizes":_vm.sizes,"width":_vm.width,"height":_vm.height,"alt":_vm.alt},on:{"load":_vm.onLoad}},'img',_vm.$attrs,false),_vm.$listeners)),(!_vm.loaded && _vm.placeholder)?_c('img',{staticClass:"sf-image--placeholder",attrs:{"src":_vm.placeholder,"alt":"Placeholder"}}):_vm._e(),(_vm.$slots.default)?_c('div',{staticClass:"sf-image--overlay"},[_vm._t("default")],2):_vm._e(),_c('noscript',{inlineTemplate:{render:function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._b({staticClass:"sf-image sf-image-loaded",attrs:{"src":_vm.src,"alt":_vm.alt,"width":_vm.width,"height":_vm.height}},'img',_vm.$attrs,false))},staticRenderFns:[]}})])}
var SfImagevue_type_template_id_05c3bfc2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=05c3bfc2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfImagevue_type_script_lang_js_ = ({
  name: "SfImage",
  props: {
    /**
     * Main source url for the image
     */
    src: {
      type: String,
      required: true
    },

    /**
     * Array of images' source, dimension and breakpoints to generate srcset attribute
     */
    srcsets: {
      type: Array,
      default: () => [],
      validator: value => value.length === 0 || value.every(item => item.resolution && item.src) || value.every(item => item.src && item.width)
    },

    /**
     * Alternative text in case image is not loaded. Use empty string " " for decorative-only image and full text otherwise
     */
    alt: {
      type: String,
      required: true
    },

    /**
     * Width of the image
     */
    width: {
      type: [String, Number],
      default: ""
    },

    /**
     * Height of the image
     */
    height: {
      type: [String, Number],
      default: ""
    },

    /**
     * Url source of the image's placeholder while it is loading.
     */
    placeholder: {
      type: String,
      default: ""
    },

    /**
     * Native loading attribute supported, either "eager", "lazy" or none.
     */
    loading: {
      type: String,
      default: "lazy",
      validator: value => ["", "lazy", "eager"].includes(value)
    }
  },

  data() {
    return {
      loaded: false
    };
  },

  computed: {
    sortedSrcsets() {
      const arr = [...this.srcsets];
      arr.sort((setA, setB) => setA.width && setB.width ? Number.parseInt(setA.width) - Number.parseInt(setB.width) : Number.parseInt(setA.resolution) - Number.parseInt(setB.resolution));
      return arr;
    },

    srcset() {
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${set.src} ${this.srcsetDescriptor(set)}`, "");
    },

    sizes() {
      const hasBreakpoints = this.sortedSrcsets.every(set => set.breakpoint && set.width);
      if (!hasBreakpoints) return null;
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${this.formatBreakpoint(set.breakpoint)}${this.formatDimension(set.width)}`, "");
    },

    classes() {
      return `sf-image ${this.loaded && "sf-image-loaded"}`;
    },

    variables() {
      const width = this.width && `--image-width: ${this.formatDimension(this.width)}`;
      const height = this.width && `--image-height: ${this.formatDimension(this.height)}`;
      return [width, height].filter(Boolean).join(";");
    }

  },
  methods: {
    onLoad() {
      this.loaded = true;
    },

    formatResolution(resolution) {
      return ("" + resolution).endsWith("x") ? resolution : `${resolution}x`;
    },

    formatDimension(width) {
      return ["em", "px", "vw"].includes(`${width}`.slice(-2)) ? width : `${width}px`;
    },

    formatBreakpoint(breakpoint) {
      return breakpoint ? `(max-width: ${breakpoint}px) ` : "";
    },

    prefix(str) {
      return str ? `${str}, ` : "";
    },

    srcsetDescriptor(srcset) {
      return srcset.width ? `${Number.parseInt(srcset.width) || ""}w` : this.formatResolution(srcset.resolution);
    }

  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfImage_SfImagevue_type_script_lang_js_ = (SfImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfImage/SfImage.vue?vue&type=style&index=0&lang=scss&
var SfImagevue_type_style_index_0_lang_scss_ = __webpack_require__("f86c");

// CONCATENATED MODULE: ./src/components/atoms/SfImage/SfImage.vue






/* normalize component */

var SfImage_component = normalizeComponent(
  SfImage_SfImagevue_type_script_lang_js_,
  SfImagevue_type_template_id_05c3bfc2_render,
  SfImagevue_type_template_id_05c3bfc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfImage = (SfImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=04f8e5f9&
var SfInputvue_type_template_id_04f8e5f9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-input",class:{
    'has-text': !!_vm.value,
    invalid: !_vm.valid,
  },attrs:{"data-testid":_vm.name}},[_c('div',{staticClass:"sf-input__wrapper"},[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],class:{ 'sf-input--is-password': _vm.isPassword },attrs:{"id":_vm.name,"required":_vm.required,"disabled":_vm.disabled,"name":_vm.name,"type":_vm.inputType},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_c('span',{staticClass:"sf-input__bar"}),_c('label',{staticClass:"sf-input__label",attrs:{"for":_vm.name}},[_vm._t("label",function(){return [_vm._v(_vm._s(_vm.label))]},null,{ label: _vm.label })],2),(_vm.isPassword)?_vm._t("show-password",function(){return [_c('SfButton',{staticClass:"sf-input__password-button",attrs:{"type":"button","aria-label":"switch-visibility-password","aria-pressed":_vm.isPasswordVisible.toString()},on:{"click":_vm.switchVisibilityPassword}},[_c('SfIcon',{staticClass:"sf-input__password-icon",class:{
            hidden: !_vm.isPasswordVisible,
          },attrs:{"icon":"show_password","size":"1.5rem"}})],1)]},null,{
        isPasswordVisible: _vm.isPasswordVisible,
        switchVisibilityPassword: _vm.switchVisibilityPassword,
      }):_vm._e()],2),_c('div',{staticClass:"sf-input__error-message"},[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.valid)?_vm._t("error-message",function(){return [_c('div',[_vm._v(_vm._s(_vm.errorMessage))])]},null,{ errorMessage: _vm.errorMessage }):_vm._e()],2)],1)])}
var SfInputvue_type_template_id_04f8e5f9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=04f8e5f9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfInputvue_type_script_lang_js_ = ({
  name: "SfInput",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  inheritAttrs: false,
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Number],
      default: ""
    },

    /**
     * Form input label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Form input name
     */
    name: {
      type: String,
      default: ""
    },

    /**
     * Form input type
     */
    type: {
      type: String,
      default: "text"
    },

    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Error message value of form input. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: ""
    },

    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },

    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    },

    /**
     * Status of show password icon display
     */
    hasShowPassword: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false
    };
  },

  computed: {
    listeners() {
      return { ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },

    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    }

  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type; // Safari has bug for number input

        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();

          if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1 && type === "number") {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }

        this.inputType = inputType;
      }
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;

        if (isNaN(value)) {
          this.$emit("input");
        }
      }
    }
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    }

  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfInput_SfInputvue_type_script_lang_js_ = (SfInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfInput/SfInput.vue?vue&type=style&index=0&lang=scss&
var SfInputvue_type_style_index_0_lang_scss_ = __webpack_require__("e596");

// CONCATENATED MODULE: ./src/components/atoms/SfInput/SfInput.vue






/* normalize component */

var SfInput_component = normalizeComponent(
  SfInput_SfInputvue_type_script_lang_js_,
  SfInputvue_type_template_id_04f8e5f9_render,
  SfInputvue_type_template_id_04f8e5f9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfInput = (SfInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfLoader/SfLoader.vue?vue&type=template&id=09641360&functional=true&
var SfLoadervue_type_template_id_09641360_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({ref:_vm.data.ref,class:[_vm.data.class, _vm.data.staticClass, 'sf-loader'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_c('transition',{attrs:{"name":"sf-fade","mode":"out-in"}},[(!_vm.props.loading)?_vm._t("default"):_c('div',{staticClass:"sf-loader__overlay"},[_vm._t("loader",function(){return [_c('svg',{staticClass:"sf-loader__spinner",attrs:{"role":"img","width":"38","height":"38","viewBox":"0 0 38 38","xmlns":"http://www.w3.org/2000/svg"}},[_c('title',[_vm._v("Loading...")]),_c('g',{attrs:{"fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(1 1)","stroke-width":"2"}},[_c('circle',{attrs:{"stroke-opacity":".5","cx":"18","cy":"18","r":"18"}}),_c('path',{attrs:{"d":"M36 18c0-9.94-8.06-18-18-18"}},[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","from":"0 18 18","to":"360 18 18","dur":"1s","repeatCount":"indefinite"}})],1)])])])]})],2)],2)],1)}
var SfLoadervue_type_template_id_09641360_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfLoader/SfLoader.vue?vue&type=template&id=09641360&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfLoader/SfLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfLoadervue_type_script_lang_js_ = ({
  name: "SfLoader",
  props: {
    /**
     * Shows the loader on top of the existing content
     */
    loading: {
      default: true,
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfLoader/SfLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLoader_SfLoadervue_type_script_lang_js_ = (SfLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfLoader/SfLoader.vue?vue&type=style&index=0&lang=scss&
var SfLoadervue_type_style_index_0_lang_scss_ = __webpack_require__("625c");

// CONCATENATED MODULE: ./src/components/atoms/SfLoader/SfLoader.vue






/* normalize component */

var SfLoader_component = normalizeComponent(
  SfLoader_SfLoadervue_type_script_lang_js_,
  SfLoadervue_type_template_id_09641360_functional_true_render,
  SfLoadervue_type_template_id_09641360_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfLoader = (SfLoader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=bf01bb44&functional=true&
var SfOverlayvue_type_template_id_bf01bb44_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('transition',{attrs:{"name":_vm.props.transition}},[(_vm.props.visible)?_c('div',{ref:"overlay",class:[_vm.data.class, _vm.data.staticClass, 'sf-overlay'],on:{"click":function($event){_vm.listeners.click || (function () {})}}}):_vm._e()])}
var SfOverlayvue_type_template_id_bf01bb44_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=bf01bb44&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfOverlayvue_type_script_lang_js_ = ({
  name: "SfOverlay",
  props: {
    /**
     * Transition effect to apply when overlay visibility is changed
     */
    transition: {
      type: String,
      default: "sf-fade"
    },

    /**
     * Visibility state
     */
    visible: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfOverlay_SfOverlayvue_type_script_lang_js_ = (SfOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=style&index=0&lang=scss&
var SfOverlayvue_type_style_index_0_lang_scss_ = __webpack_require__("c9fa");

// CONCATENATED MODULE: ./src/components/atoms/SfOverlay/SfOverlay.vue






/* normalize component */

var SfOverlay_component = normalizeComponent(
  SfOverlay_SfOverlayvue_type_script_lang_js_,
  SfOverlayvue_type_template_id_bf01bb44_functional_true_render,
  SfOverlayvue_type_template_id_bf01bb44_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfOverlay = (SfOverlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=4c5d943d&functional=true&
var SfPricevue_type_template_id_4c5d943d_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-price'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("regular",function(){return [(!_vm.props.special)?_c('span',{staticClass:"sf-price__regular"},[_vm._v(" "+_vm._s(_vm.props.regular)+" ")]):_vm._e()]},null,{ props: _vm.props }),_vm._t("old",function(){return [(_vm.props.special)?_c('del',{staticClass:"sf-price__old"},[_vm._v(" "+_vm._s(_vm.props.regular)+" ")]):_vm._e()]},null,{ props: _vm.props }),_vm._t("special",function(){return [(_vm.props.special)?_c('ins',{staticClass:"sf-price__special"},[_vm._v(" "+_vm._s(_vm.props.special)+" ")]):_vm._e()]},null,{ props: _vm.props })],2)}
var SfPricevue_type_template_id_4c5d943d_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfPrice/SfPrice.vue?vue&type=template&id=4c5d943d&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPricevue_type_script_lang_js_ = ({
  name: "SfPrice",
  props: {
    /**
     * Regular/old price value. Crossed out if `special` is provided
     */
    regular: {
      type: [String, Number],
      default: null
    },

    /**
     * Special price value
     */
    special: {
      type: [String, Number],
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfPrice/SfPrice.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfPrice_SfPricevue_type_script_lang_js_ = (SfPricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfPrice/SfPrice.vue?vue&type=style&index=0&lang=scss&
var SfPricevue_type_style_index_0_lang_scss_ = __webpack_require__("c4e3");

// CONCATENATED MODULE: ./src/components/atoms/SfPrice/SfPrice.vue






/* normalize component */

var SfPrice_component = normalizeComponent(
  SfPrice_SfPricevue_type_script_lang_js_,
  SfPricevue_type_template_id_4c5d943d_functional_true_render,
  SfPricevue_type_template_id_4c5d943d_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfPrice = (SfPrice_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=b47e4028&functional=true&
var SfPropertyvue_type_template_id_b47e4028_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-property'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("name",function(){return [_c('span',{staticClass:"sf-property__name"},[_vm._v(" "+_vm._s(_vm.props.name)+" ")])]},null,{ props: _vm.props }),_vm._t("value",function(){return [_c('span',{staticClass:"sf-property__value"},[_vm._v(" "+_vm._s(_vm.props.value)+" ")])]},null,{ props: _vm.props })],2)}
var SfPropertyvue_type_template_id_b47e4028_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfProperty/SfProperty.vue?vue&type=template&id=b47e4028&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfPropertyvue_type_script_lang_js_ = ({
  name: "SfProperty",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/atoms/SfProperty/SfProperty.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProperty_SfPropertyvue_type_script_lang_js_ = (SfPropertyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfProperty/SfProperty.vue?vue&type=style&index=0&lang=scss&
var SfPropertyvue_type_style_index_0_lang_scss_ = __webpack_require__("39f9");

// CONCATENATED MODULE: ./src/components/atoms/SfProperty/SfProperty.vue






/* normalize component */

var SfProperty_component = normalizeComponent(
  SfProperty_SfPropertyvue_type_script_lang_js_,
  SfPropertyvue_type_template_id_b47e4028_functional_true_render,
  SfPropertyvue_type_template_id_b47e4028_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfProperty = (SfProperty_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=4f8808aa&functional=true&
var SfQuantitySelectorvue_type_template_id_4f8808aa_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{class:[_vm.data.class, _vm.data.staticClass, 'sf-quantity-selector'],style:([_vm.data.style, _vm.data.staticStyle])},[_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.props.disabled,"data-testid":"+"},on:{"click":function($event){return _vm.$options.handleInput(_vm.props.qty - 1, _vm.listeners)}}},[_vm._v(" − ")]),_c(_vm.injections.components.SfInput,{tag:"component",staticClass:"sf-quantity-selector__input",attrs:{"type":"number","value":_vm.props.qty,"disabled":_vm.props.disabled,"data-testid":"sf-quantity-selector input"},on:{"input":function($event){return _vm.$options.handleInput($event, _vm.listeners)}}}),_c(_vm.injections.components.SfButton,{tag:"component",staticClass:"sf-button--pure sf-quantity-selector__button",attrs:{"disabled":_vm.props.disabled,"data-testid":"-"},on:{"click":function($event){return _vm.$options.handleInput(_vm.props.qty + 1, _vm.listeners)}}},[_vm._v(" + ")])],1)}
var SfQuantitySelectorvue_type_template_id_4f8808aa_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=template&id=4f8808aa&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfQuantitySelectorvue_type_script_lang_js_ = ({
  name: "SfQuantitySelector",
  inject: {
    components: {
      default: {
        SfInput: SfInput,
        SfButton: SfButton
      }
    }
  },
  model: {
    prop: "qty"
  },
  props: {
    /** Quantity */
    qty: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  handleInput(qty, listeners) {
    return listeners.input && listeners.input(qty < 1 || isNaN(qty) ? 1 : qty);
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_ = (SfQuantitySelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue?vue&type=style&index=0&lang=scss&
var SfQuantitySelectorvue_type_style_index_0_lang_scss_ = __webpack_require__("293b");

// CONCATENATED MODULE: ./src/components/atoms/SfQuantitySelector/SfQuantitySelector.vue






/* normalize component */

var SfQuantitySelector_component = normalizeComponent(
  SfQuantitySelector_SfQuantitySelectorvue_type_script_lang_js_,
  SfQuantitySelectorvue_type_template_id_4f8808aa_functional_true_render,
  SfQuantitySelectorvue_type_template_id_4f8808aa_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfQuantitySelector = (SfQuantitySelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=5b624f80&functional=true&
var SfRatingvue_type_template_id_5b624f80_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-rating'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._l((Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-positive",function(){return [_c(_vm.injections.components.SfIcon,{key:("p" + index),tag:"component",staticClass:"sf-rating__icon",attrs:{"size":"0.875rem","icon":_vm.props.icon,"coverage":index === Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max)) &&
        _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1 > 0
          ? _vm.$options.finalScore(_vm.props.score, _vm.props.max) % 1
          : 1}})]})}),_vm._l((parseInt(_vm.$options.finalMax(_vm.props.max), 10) -
    Math.ceil(_vm.$options.finalScore(_vm.props.score, _vm.props.max))),function(index){return _vm._t("icon-negative",function(){return [_c(_vm.injections.components.SfIcon,{key:("n" + index),tag:"component",staticClass:"sf-rating__icon sf-rating__icon--negative",attrs:{"icon":_vm.props.icon}})]})})],2)}
var SfRatingvue_type_template_id_5b624f80_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfRating/SfRating.vue?vue&type=template&id=5b624f80&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRatingvue_type_script_lang_js_ = ({
  name: "SfRating",
  inject: {
    components: {
      default: {
        SfIcon: SfIcon
      }
    }
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5
    },

    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: "star"
    }
  },

  finalScore(score, max) {
    if (!score) {
      return 0;
    } else if (score < 0) {
      return 0;
    } else if (score > max && max > 0) {
      return max;
    } else if (max <= 0) {
      return 0;
    } else {
      return score;
    }
  },

  finalMax(max) {
    return !max || max <= 0 ? 1 : max;
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfRating/SfRating.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRating_SfRatingvue_type_script_lang_js_ = (SfRatingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfRating/SfRating.vue?vue&type=style&index=0&lang=scss&
var SfRatingvue_type_style_index_0_lang_scss_ = __webpack_require__("58ff");

// CONCATENATED MODULE: ./src/components/atoms/SfRating/SfRating.vue






/* normalize component */

var SfRating_component = normalizeComponent(
  SfRating_SfRatingvue_type_script_lang_js_,
  SfRatingvue_type_template_id_5b624f80_functional_true_render,
  SfRatingvue_type_template_id_5b624f80_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfRating = (SfRating_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfTexarea/SfTextarea.vue?vue&type=template&id=44f3ece6&functional=true&
var SfTextareavue_type_template_id_44f3ece6_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._b({class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-textarea',
    {
      'sf-textarea--has-text': !!_vm.props.value,
      'sf-textarea--invalid': !_vm.props.valid,
    } ],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),[_c('textarea',_vm._g({attrs:{"id":_vm.props.name,"name":_vm.props.name,"placeholder":_vm.props.placeholder,"cols":_vm.props.cols,"rows":_vm.props.rows,"wrap":_vm.props.wrap,"disabled":_vm.props.disabled,"required":_vm.props.required,"maxlength":_vm.props.maxlength,"minlength":_vm.props.minlength},domProps:{"value":_vm.props.value}},_vm.$options.handleInput(_vm.listeners))),_vm._v(" "),_c('label',{staticClass:"sf-textarea__label",attrs:{"for":_vm.props.name}},[_vm._t("label",function(){return [_vm._v(_vm._s(_vm.props.label))]},null,{ props: _vm.props })],2),_c('div',{staticClass:"sf-textarea__error-message"},[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.props.valid)?_vm._t("error-message",function(){return [_c('div',[_vm._v(_vm._s(_vm.props.errorMessage))])]},null,{ props: _vm.props }):_vm._e()],2)],1)])}
var SfTextareavue_type_template_id_44f3ece6_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/SfTexarea/SfTextarea.vue?vue&type=template&id=44f3ece6&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/SfTexarea/SfTextarea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfTextareavue_type_script_lang_js_ = ({
  name: "SfTextarea",
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Current textarea value (`v-model`).
     */
    value: {
      type: [String, Number],
      default: ""
    },

    /**
     * Textarea label.
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Textarea name.
     */
    name: {
      type: String,
      default: ""
    },

    /**
     * The visible width of the text control. It must be a positive integer.
     * If it is not specified, the default value is 20.
     */
    cols: {
      type: [String, Number],
      default: "20"
    },

    /**
     * The number of visible text lines for the control.
     */
    rows: {
      type: [String, Number],
      default: ""
    },

    /**
     * The maximum number of characters that the user can enter.
     * If this value isn't specified, the user can enter an unlimited number of characters.
     */
    maxlength: {
      type: [String, Number],
      default: ""
    },

    /**
     * The minimum number of characters required that the user should enter.
     */
    minlength: {
      type: [String, Number],
      default: ""
    },

    /**
     * Indicates how the control wraps text. Possible values are soft, hard, off.
     * Default value is soft.
     */
    wrap: {
      type: String,
      default: "soft",
      validator: value => {
        return ["soft", "hard", "off"].includes(value);
      }
    },

    /**
     *  With default false value the textarea is editable.
     */
    readonly: {
      type: Boolean,
      default: false
    },

    /**
     * Validate value of textarea.
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Error message for textarea. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: ""
    },

    /**
     * Native textarea required attribute.
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native textarea required attribute"
    },

    /**
     * Placeholder for textarea.
     */
    placeholder: {
      type: String,
      default: ""
    },

    /**
     * Native textarea disabled attribute.
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    }
  },

  handleInput(listeners) {
    return { ...listeners,
      input: $event => listeners.input && listeners.input($event.target.value)
    };
  }

});
// CONCATENATED MODULE: ./src/components/atoms/SfTexarea/SfTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTexarea_SfTextareavue_type_script_lang_js_ = (SfTextareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/atoms/SfTexarea/SfTextarea.vue?vue&type=style&index=0&lang=scss&
var SfTextareavue_type_style_index_0_lang_scss_ = __webpack_require__("2a77");

// CONCATENATED MODULE: ./src/components/atoms/SfTexarea/SfTextarea.vue






/* normalize component */

var SfTextarea_component = normalizeComponent(
  SfTexarea_SfTextareavue_type_script_lang_js_,
  SfTextareavue_type_template_id_44f3ece6_functional_true_render,
  SfTextareavue_type_template_id_44f3ece6_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTextarea = (SfTextarea_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=9ce51de6&
var SfAddToCartvue_type_template_id_9ce51de6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-add-to-cart"},[_vm._t("quantity-select-input",function(){return [_c('SfQuantitySelector',{staticClass:"sf-add-to-cart__select-quantity",attrs:{"qty":_vm.qty,"aria-label":"Quantity","disabled":_vm.disabled},on:{"input":function($event){return _vm.$emit('input', $event)}}})]},null,{ qty: _vm.qty }),_vm._t("add-to-cart-btn",function(){return [_c('SfButton',_vm._g({staticClass:"sf-add-to-cart__button",attrs:{"disabled":_vm.disabled}},_vm.$listeners),[_vm._v(" Add to cart ")])]})],2)}
var SfAddToCartvue_type_template_id_9ce51de6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=template&id=9ce51de6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfAddToCartvue_type_script_lang_js_ = ({
  name: "SfAddToCart",
  components: {
    SfButton: SfButton,
    SfQuantitySelector: SfQuantitySelector
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Boolean to indicate whether product
     * can be added to cart
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAddToCart_SfAddToCartvue_type_script_lang_js_ = (SfAddToCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfAddToCart/SfAddToCart.vue?vue&type=style&index=0&lang=scss&
var SfAddToCartvue_type_style_index_0_lang_scss_ = __webpack_require__("eb32");

// CONCATENATED MODULE: ./src/components/molecules/SfAddToCart/SfAddToCart.vue






/* normalize component */

var SfAddToCart_component = normalizeComponent(
  SfAddToCart_SfAddToCartvue_type_script_lang_js_,
  SfAddToCartvue_type_template_id_9ce51de6_render,
  SfAddToCartvue_type_template_id_9ce51de6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfAddToCart = (SfAddToCart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfAlert/SfAlert.vue?vue&type=template&id=564a110a&
var SfAlertvue_type_template_id_564a110a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-alert",class:("color-" + _vm.type)},[_vm._t("icon",function(){return [_c('SfIcon',{staticClass:"sf-alert__icon",attrs:{"aria-hidden":"true","icon":_vm.icon}})]},null,{ icon: _vm.icon }),_vm._t("message",function(){return [(_vm.message)?_c('span',{staticClass:"sf-alert__message"},[_vm._v(_vm._s(_vm.message))]):_vm._e()]},null,{ message: _vm.message })],2)}
var SfAlertvue_type_template_id_564a110a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfAlert/SfAlert.vue?vue&type=template&id=564a110a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfAlert/SfAlert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfAlertvue_type_script_lang_js_ = ({
  name: "SfAlert",
  components: {
    SfIcon: SfIcon
  },
  props: {
    /**
     * Message that will be displayed in Alert.
     */
    message: {
      type: String,
      default: ""
    },

    /**
     * Alert type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";

        case "danger":
          return "info_shield";

        default:
          return "info_circle";
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfAlert/SfAlert.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAlert_SfAlertvue_type_script_lang_js_ = (SfAlertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfAlert/SfAlert.vue?vue&type=style&index=0&lang=scss&
var SfAlertvue_type_style_index_0_lang_scss_ = __webpack_require__("da1c");

// CONCATENATED MODULE: ./src/components/molecules/SfAlert/SfAlert.vue






/* normalize component */

var SfAlert_component = normalizeComponent(
  SfAlert_SfAlertvue_type_script_lang_js_,
  SfAlertvue_type_template_id_564a110a_render,
  SfAlertvue_type_template_id_564a110a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfAlert = (SfAlert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=5f63d921&
var SfBannervue_type_template_id_5f63d921_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',_vm._g({staticClass:"sf-banner",style:(_vm.style)},_vm.isMobileView ? _vm.$listeners : {}),[_c(_vm.wrapper,{tag:"component",staticClass:"sf-banner__wrapper",attrs:{"link":_vm.link}},[_vm._t("subtitle",function(){return [(_vm.subtitle)?_c('h2',{staticClass:"sf-banner__subtitle"},[_vm._v(" "+_vm._s(_vm.subtitle)+" ")]):_vm._e()]},null,{ subtitle: _vm.subtitle }),_vm._t("title",function(){return [(_vm.title)?_c('h1',{staticClass:"sf-banner__title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_vm._e()]},null,{ title: _vm.title }),_vm._t("description",function(){return [(_vm.description)?_c('p',{staticClass:"sf-banner__description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()]},null,{ description: _vm.description }),_vm._t("call-to-action",function(){return [(_vm.buttonText && !_vm.isMobileView)?_c('SfButton',_vm._g({staticClass:"sf-banner__call-to-action color-secondary",attrs:{"link":_vm.link,"data-testid":"banner-cta-button"}},!_vm.isMobileView ? _vm.$listeners : {}),[_vm._v(" "+_vm._s(_vm.buttonText)+" ")]):_vm._e()]},null,{ buttonText: _vm.buttonText })],2)],1)}
var SfBannervue_type_template_id_5f63d921_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=5f63d921&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/utilities/mobile-observer.js

let observer;
const isMobileMax = 1023;
const onMediaMatch = e => {
  if (typeof e.matches === null) return;
  observer.isMobile = !!e.matches;
};
const setupListener = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !window.matchMedia) {
    return;
  }

  observer.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth) <= isMobileMax;
  window.matchMedia(`(max-width: ${isMobileMax}px)`).addListener(onMediaMatch);
  observer.isInitialized = true;
};
const tearDownListener = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined" && window.matchMedia) {
    window.matchMedia(`(max-width: ${isMobileMax}px)`).removeListener(onMediaMatch);
  }
};
const mapMobileObserver = () => {
  if (!observer) {
    observer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.observable({
      isMobile: false,
      clients: 0,
      isInitialized: false
    });
  }

  observer.clients += 1;
  return {
    isMobile: {
      get() {
        if (observer && !observer.isInitialized) {
          setupListener();
        }

        return observer ? observer.isMobile : false;
      }

    },
    mobileObserverClients: {
      get() {
        return observer ? observer.clients : 0;
      }

    },
    mobileObserverIsInitialized: {
      get() {
        return observer ? observer.isInitialized : false;
      }

    }
  };
};
const unMapMobileObserver = () => {
  if (observer) {
    observer.clients -= 1;

    if (observer.clients === 0) {
      observer = null;
      tearDownListener();
    }
  } else {
    tearDownListener();
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfBannervue_type_script_lang_js_ = ({
  name: "SfBanner",
  components: {
    SfButton: SfButton,
    SfLink: SfLink
  },
  props: {
    /**
     * Banner title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Banner subtitle (at the top)
     */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },

    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },

    /** link to be used in call to action button if necessary */
    link: {
      type: String,
      default: ""
    },

    /** Background color in HEX (eg #FFFFFF) */
    background: {
      type: String,
      default: ""
    },

    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
    image: {
      type: [String, Object],
      default: ""
    }
  },

  data() {
    return {
      isMobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_banner-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_banner-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_banner-background-color": background
      };
    },

    wrapper() {
      return !this.isMobileView ? "div" : this.link ? "SfLink" : "SfButton";
    }

  },

  mounted() {
    this.isMobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBanner_SfBannervue_type_script_lang_js_ = (SfBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfBanner/SfBanner.vue?vue&type=style&index=0&lang=scss&
var SfBannervue_type_style_index_0_lang_scss_ = __webpack_require__("c5fc");

// CONCATENATED MODULE: ./src/components/molecules/SfBanner/SfBanner.vue






/* normalize component */

var SfBanner_component = normalizeComponent(
  SfBanner_SfBannervue_type_script_lang_js_,
  SfBannervue_type_template_id_5f63d921_render,
  SfBannervue_type_template_id_5f63d921_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBanner = (SfBanner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=55609532&
var SfBarvue_type_template_id_55609532_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bar"},[_c('div',[_vm._t("back",function(){return [(_vm.back)?_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",attrs:{"aria-label":"back","type":"button"},on:{"click":function($event){return _vm.$emit('click:back')}}},[_c('SfIcon',{attrs:{"icon":"chevron_left","size":"0.875rem"}})],1):_vm._e()]})],2),_c('div',[_vm._t("title",function(){return [_c('div',{staticClass:"sf-bar__title"},[_vm._v(_vm._s(_vm.title))])]},null,{ title: _vm.title })],2),_c('div',[_vm._t("close",function(){return [(_vm.close)?_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",attrs:{"aria-label":"close","type":"button"},on:{"click":function($event){return _vm.$emit('click:close')}}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px"}})],1):_vm._e()]})],2)])}
var SfBarvue_type_template_id_55609532_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=55609532&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfBarvue_type_script_lang_js_ = ({
  name: "SfBar",
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBar_SfBarvue_type_script_lang_js_ = (SfBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfBar/SfBar.vue?vue&type=style&index=0&lang=scss&
var SfBarvue_type_style_index_0_lang_scss_ = __webpack_require__("8ac8");

// CONCATENATED MODULE: ./src/components/molecules/SfBar/SfBar.vue






/* normalize component */

var SfBar_component = normalizeComponent(
  SfBar_SfBarvue_type_script_lang_js_,
  SfBarvue_type_template_id_55609532_render,
  SfBarvue_type_template_id_55609532_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBar = (SfBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=3f4f2fa4&
var SfBottomModalvue_type_template_id_3f4f2fa4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-modal"},[_c('SfOverlay',{staticClass:"sf-bottom-modal__overlay",attrs:{"visible":_vm.isOpen},on:{"click":_vm.close}}),_c('SfTransition',{attrs:{"transition":_vm.transition}},[_c('nav',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"}],staticClass:"sf-bottom-modal__container",attrs:{"role":"dialog","aria-modal":"true"}},[_vm._t("title",function(){return [(_vm.title)?_c('SfHeading',{staticClass:"sf-bottom-modal__title",attrs:{"level":3,"title":_vm.title}}):_vm._e()]}),_vm._t("close-desktop",function(){return [_c('SfCircleIcon',{staticClass:"sf-circle-icon--small sf-bottom-modal__close",attrs:{"aria-label":"Close","icon":"cross"},on:{"click":_vm.close}})]}),_vm._t("default"),_vm._t("close-mobile",function(){return [_c('SfButton',{staticClass:"sf-button--full-width sf-bottom-modal__cancel",attrs:{"aria-label":"Close"},on:{"click":_vm.close}},[_vm._v("Cancel")])]})],2)])],1)}
var SfBottomModalvue_type_template_id_3f4f2fa4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=template&id=3f4f2fa4&

// CONCATENATED MODULE: ./src/utilities/transitions/component/SfTransition.js
/* harmony default export */ var SfTransition = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "fade"
    },
    group: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    data,
    children,
    props
  }) {
    const isOff = props.transition === false;
    const tag = props.group ? "transition-group" : "transition";
    return createElement(tag, { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      }
    }, children);
  }

});
// CONCATENATED MODULE: ./src/utilities/helpers/check-environment.js
const isClient = (() => typeof window !== "undefined" || typeof document !== "undefined")();
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SfBottomModalvue_type_script_lang_js_ = ({
  name: "SfBottomModal",
  components: {
    SfOverlay: SfOverlay,
    SfButton: SfButton,
    SfCircleIcon: SfCircleIcon,
    SfHeading: SfHeading,
    SfTransition: SfTransition
  },
  props: {
    /**
     * Bottom Modal is open
     */
    isOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Bottom Modal title
     */
    title: {
      type: String,
      default: ""
    },
    transition: {
      type: [String, Boolean],
      default: ""
    }
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!isClient) return;

        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("click:close");
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomModal_SfBottomModalvue_type_script_lang_js_ = (SfBottomModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfBottomModal/SfBottomModal.vue?vue&type=style&index=0&lang=scss&
var SfBottomModalvue_type_style_index_0_lang_scss_ = __webpack_require__("398e");

// CONCATENATED MODULE: ./src/components/molecules/SfBottomModal/SfBottomModal.vue






/* normalize component */

var SfBottomModal_component = normalizeComponent(
  SfBottomModal_SfBottomModalvue_type_script_lang_js_,
  SfBottomModalvue_type_template_id_3f4f2fa4_render,
  SfBottomModalvue_type_template_id_3f4f2fa4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBottomModal = (SfBottomModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=7b958132&
var SfCallToActionvue_type_template_id_7b958132_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-call-to-action",style:(_vm.style)},[_c('div',{staticClass:"sf-call-to-action__text-container"},[_vm._t("title",function(){return [(_vm.title)?_c('h2',{staticClass:"sf-call-to-action__title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_vm._e()]},null,{ title: _vm.title }),_vm._t("description",function(){return [(_vm.description)?_c('p',{staticClass:"sf-call-to-action__description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()]},null,{ description: _vm.description })],2),_vm._t("button",function(){return [(_vm.buttonText)?_c('SfButton',{staticClass:"sf-call-to-action__button",attrs:{"link":_vm.link,"data-testid":"cta-button"}},[_vm._v(" "+_vm._s(_vm.buttonText)+" ")]):_vm._e()]},null,{ buttonText: _vm.buttonText })],2)}
var SfCallToActionvue_type_template_id_7b958132_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=7b958132&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfCallToActionvue_type_script_lang_js_ = ({
  name: "SfCallToAction",
  components: {
    SfButton: SfButton
  },
  props: {
    /**
     * CallToAction title.
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Text that will be displayed inside the button.
     */
    buttonText: {
      type: String,
      default: ""
    },

    /**
     *  CallToAction link. If it's filled in, changes button tag on a tag.
     */
    link: {
      type: String,
      default: ""
    },

    /**
     * CallToAction description.
     */
    description: {
      type: String,
      default: ""
    },

    /**
     * Background color.
     */
    background: {
      type: String,
      default: ""
    },

    /**
     * Background image.
     */
    image: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_call-to-action-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_call-to-action-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_call-to-action-background-color": background
      };
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCallToAction_SfCallToActionvue_type_script_lang_js_ = (SfCallToActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=style&index=0&lang=scss&
var SfCallToActionvue_type_style_index_0_lang_scss_ = __webpack_require__("532b");

// CONCATENATED MODULE: ./src/components/molecules/SfCallToAction/SfCallToAction.vue






/* normalize component */

var SfCallToAction_component = normalizeComponent(
  SfCallToAction_SfCallToActionvue_type_script_lang_js_,
  SfCallToActionvue_type_template_id_7b958132_render,
  SfCallToActionvue_type_template_id_7b958132_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCallToAction = (SfCallToAction_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCard/SfCard.vue?vue&type=template&id=6a16621f&
var SfCardvue_type_template_id_6a16621f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-card"},[_c('SfImage',{staticClass:"sf-card__image",attrs:{"src":_vm.image,"alt":_vm.title}}),_vm._t("details",function(){return [_c('div',{staticClass:"sf-card__details"},[_c('SfHeading',{staticClass:"sf-card__title",attrs:{"title-level":_vm.titleLevel,"title":_vm.title}}),_c('p',{staticClass:"sf-card__description"},[_vm._v(" "+_vm._s(_vm.description)+" ")])],1)]},null,{ title: _vm.title, description: _vm.description, titleLevel: _vm.titleLevel }),_vm._t("action",function(){return [_c('SfButton',_vm._g({staticClass:"sf-card__action",attrs:{"link":_vm.link}},_vm.$listeners),[_vm._v(" "+_vm._s(_vm.buttonText)+" ")])]})],2)}
var SfCardvue_type_template_id_6a16621f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfCard/SfCard.vue?vue&type=template&id=6a16621f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCard/SfCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfCardvue_type_script_lang_js_ = ({
  name: "SfCard",
  components: {
    SfButton: SfButton,
    SfHeading: SfHeading,
    SfImage: SfImage
  },
  props: {
    /**
     * Card image
     */
    image: {
      type: String,
      default: ""
    },

    /**
     * Card title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Card title level of heading (form 1 as h1 tag to 6 as h6 tag)
     */
    titleLevel: {
      type: Number,
      default: 3
    },

    /**
     * Card description
     */
    description: {
      type: String,
      default: ""
    },

    /**
     * Card link
     */
    link: {
      type: String,
      default: ""
    },

    /**
     * Text displayed on button
     */
    buttonText: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfCard/SfCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCard_SfCardvue_type_script_lang_js_ = (SfCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfCard/SfCard.vue?vue&type=style&index=0&lang=scss&
var SfCardvue_type_style_index_0_lang_scss_ = __webpack_require__("1f80");

// CONCATENATED MODULE: ./src/components/molecules/SfCard/SfCard.vue






/* normalize component */

var SfCard_component = normalizeComponent(
  SfCard_SfCardvue_type_script_lang_js_,
  SfCardvue_type_template_id_6a16621f_render,
  SfCardvue_type_template_id_6a16621f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCard = (SfCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCategoryCard/SfCategoryCard.vue?vue&type=template&id=737a85d0&
var SfCategoryCardvue_type_template_id_737a85d0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfLink',{staticClass:"sf-category-card",style:(_vm.style),attrs:{"link":_vm.link}},[_vm._t("default",function(){return [_c('div',{staticClass:"sf-category-card__details"},[(_vm.label)?_c('span',{staticClass:"sf-category-card__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),(_vm.count)?_c('span',{staticClass:"sf-category-card__count"},[_vm._v(_vm._s(_vm.count))]):_vm._e()])]},null,{ label: _vm.label, count: _vm.count })],2)}
var SfCategoryCardvue_type_template_id_737a85d0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfCategoryCard/SfCategoryCard.vue?vue&type=template&id=737a85d0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCategoryCard/SfCategoryCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCategoryCardvue_type_script_lang_js_ = ({
  name: "SfCategoryCard",
  components: {
    SfLink: SfLink
  },
  props: {
    /**
     * Label for card
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Count for card
     */
    count: {
      type: [String, Number],
      default: ""
    },

    /**
     * Defines background of card.
     * Can be a string or object with strings to display images for desktop and mobile
     */
    background: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link for category
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },

  data() {
    return {
      isMobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    style() {
      const background = this.background;

      if (typeof background === "string") {
        return {
          background: `url('${background}')`
        };
      } else {
        return {
          background: this.isMobileView ? `url('${background.mobile}')` : `url('${background.desktop}')`
        };
      }
    }

  },

  mounted() {
    this.isMobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/molecules/SfCategoryCard/SfCategoryCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCategoryCard_SfCategoryCardvue_type_script_lang_js_ = (SfCategoryCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfCategoryCard/SfCategoryCard.vue?vue&type=style&index=0&lang=scss&
var SfCategoryCardvue_type_style_index_0_lang_scss_ = __webpack_require__("b7b5");

// CONCATENATED MODULE: ./src/components/molecules/SfCategoryCard/SfCategoryCard.vue






/* normalize component */

var SfCategoryCard_component = normalizeComponent(
  SfCategoryCard_SfCategoryCardvue_type_script_lang_js_,
  SfCategoryCardvue_type_template_id_737a85d0_render,
  SfCategoryCardvue_type_template_id_737a85d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCategoryCard = (SfCategoryCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=3d61232e&
var SfCharacteristicvue_type_template_id_3d61232e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-characteristic"},[_vm._t("icon",function(){return [_c('div',{staticClass:"sf-characteristic__icon"},[_c('SfIcon',{attrs:{"aria-hidden":"true","color":_vm.colorIcon,"size":_vm.sizeIcon,"icon":_vm.icon}})],1)]},null,{ colorIcon: _vm.colorIcon, sizeIcon: _vm.sizeIcon, icon: _vm.icon }),_vm._t("text",function(){return [_c('div',{staticClass:"sf-characteristic__text"},[_vm._t("title",function(){return [_c('div',{staticClass:"sf-characteristic__title"},[_vm._v(_vm._s(_vm.title))])]},null,{ title: _vm.title }),_vm._t("description",function(){return [_c('div',{staticClass:"sf-characteristic__description"},[_vm._v(_vm._s(_vm.description))])]},null,{ description: _vm.description })],2)]},null,{ title: _vm.title, description: _vm.description })],2)}
var SfCharacteristicvue_type_template_id_3d61232e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=template&id=3d61232e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfCharacteristicvue_type_script_lang_js_ = ({
  name: "SfCharacteristic",
  components: {
    SfIcon: SfIcon
  },
  props: {
    /** One of predefined SfIcon colors, default is black.  */
    colorIcon: {
      type: String,
      default: ""
    },

    /** One of predefined SfIcon sizes.  */
    sizeIcon: {
      type: String,
      default: ""
    },

    /** Svg file iconPath  */
    icon: {
      type: [String, Array],
      default: ""
    },

    /** Characteristic title  */
    title: {
      type: String,
      default: ""
    },

    /** Characteristic description  */
    description: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCharacteristic_SfCharacteristicvue_type_script_lang_js_ = (SfCharacteristicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfCharacteristic/SfCharacteristic.vue?vue&type=style&index=0&lang=scss&
var SfCharacteristicvue_type_style_index_0_lang_scss_ = __webpack_require__("cdf1");

// CONCATENATED MODULE: ./src/components/molecules/SfCharacteristic/SfCharacteristic.vue






/* normalize component */

var SfCharacteristic_component = normalizeComponent(
  SfCharacteristic_SfCharacteristicvue_type_script_lang_js_,
  SfCharacteristicvue_type_template_id_3d61232e_render,
  SfCharacteristicvue_type_template_id_3d61232e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCharacteristic = (SfCharacteristic_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=template&id=6b6d8310&
var SfCheckboxvue_type_template_id_6b6d8310_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-checkbox",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
    'has-error': !_vm.valid,
    'is-required': _vm.required,
  },attrs:{"data-testid":_vm.name}},[_c('label',{staticClass:"sf-checkbox__container"},[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-checkbox__input",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.inputHandler}}),_vm._t("checkmark",function(){return [_c('div',{staticClass:"sf-checkbox__checkmark",class:{ 'sf-checkbox__checkmark is-active': _vm.isChecked }},[(_vm.isChecked)?_c('SfIcon',{attrs:{"icon":"check","color":"white"}}):_vm._e()],1)]},null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._t("label",function(){return [(_vm.label)?_c('div',{staticClass:"sf-checkbox__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()]},null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled })],2),_c('div',{staticClass:"sf-checkbox__message"},[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.disabled)?_vm._t(_vm.computedMessageSlotName,function(){return [_c('div',{class:_vm.computedMessageClass},[_vm._v(_vm._s(_vm.computedMessage))])]},null,{ computedMessage: _vm.computedMessage }):_vm._e()],2)],1)])}
var SfCheckboxvue_type_template_id_6b6d8310_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=template&id=6b6d8310&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCheckboxvue_type_script_lang_js_ = ({
  name: "SfCheckbox",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfIcon: SfIcon
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },

    /**
     *  Hint/Required message value of checkbox.
     */
    hintMessage: {
      type: String,
      default: "Required."
    },
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Info/success message value of select.
     */
    infoMessage: {
      type: String,
      default: ""
    },

    /**
     * Error message value of select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },
    valid: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, Boolean],
      default: () => []
    }
  },
  computed: {
    isChecked() {
      if (typeof this.selected === "boolean") {
        return this.selected;
      } else {
        return this.selected.includes(this.value);
      }
    },

    computedMessageSlotName() {
      return this.messagesHandler("show-error-message", "show-info-message", this.required ? "show-hint-message" : "");
    },

    computedMessage() {
      return this.messagesHandler(this.errorMessage, this.infoMessage, this.required ? this.hintMessage : "");
    },

    computedMessageClass() {
      return this.messagesHandler("sf-checkbox__message--error", "sf-checkbox__message--info", this.required ? "sf-checkbox__message--hint" : "");
    }

  },
  methods: {
    inputHandler() {
      if (typeof this.selected === "boolean") {
        this.$emit("change", !this.selected);
      } else {
        let selected = [...this.selected];

        if (selected.includes(this.value)) {
          selected = selected.filter(value => value !== this.value);
        } else {
          selected.push(this.value);
        }

        this.$emit("change", selected);
      }
    },

    messagesHandler(error, info, hint) {
      if (this.errorMessage && !this.valid) {
        return error;
      } else if (this.infoMessage && this.valid) {
        return info;
      } else if (this.hintMessage) {
        return hint;
      } else {
        return "";
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCheckbox_SfCheckboxvue_type_script_lang_js_ = (SfCheckboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfCheckbox/SfCheckbox.vue?vue&type=style&index=0&lang=scss&
var SfCheckboxvue_type_style_index_0_lang_scss_ = __webpack_require__("a483");

// CONCATENATED MODULE: ./src/components/molecules/SfCheckbox/SfCheckbox.vue






/* normalize component */

var SfCheckbox_component = normalizeComponent(
  SfCheckbox_SfCheckboxvue_type_script_lang_js_,
  SfCheckboxvue_type_template_id_6b6d8310_render,
  SfCheckboxvue_type_template_id_6b6d8310_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCheckbox = (SfCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=template&id=340dcd46&
var SfColorPickervue_type_template_id_340dcd46_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-color-picker",class:{ 'sf-color-picker--active': _vm.isOpen }},[_c('transition',{attrs:{"name":"sf-color-picker","mode":"out-in"}},[(!_vm.isOpen)?_c('div',{key:"color-picker-button",staticClass:"sf-color-picker__button smartphone-only"},[_vm._t("open",function(){return [_c('SfButton',{staticClass:"color-secondary sf-color-picker__button-open",on:{"click":_vm.toggle}},[_vm._v("+ Colors")])]},null,{ toggle: _vm.toggle })],2):_c('div',{key:"color-picker-colors",staticClass:"sf-color-picker__colors"},[_c('SfOverlay',{staticClass:"sf-color-picker__colors__overlay smartphone-only",attrs:{"visible":_vm.isOpen}}),_vm._t("label",function(){return [(_vm.label)?_c('div',{staticClass:"sf-color-picker__label smartphone-only"},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()]},null,{ label: _vm.label }),_vm._t("default"),_vm._t("close",function(){return [(_vm.hasClose)?_c('SfButton',{staticClass:"sf-button--text sf-color-picker__close smartphone-only",attrs:{"aria-label":"Close button","aria-pressed":!_vm.isOpen},on:{"click":_vm.toggle}},[_c('SfIcon',{attrs:{"icon":"cross"}})],1):_vm._e()]},null,{ hasClose: _vm.hasClose, toggle: _vm.toggle, isOpen: _vm.isOpen })],2)])],1)}
var SfColorPickervue_type_template_id_340dcd46_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=template&id=340dcd46&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfColorPickervue_type_script_lang_js_ = ({
  name: "SfColorPicker",
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton,
    SfOverlay: SfOverlay
  },
  props: {
    /**
     * ColorPicker is open
     */
    isOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Label for ColorPicker
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Close button state whether show it or not
     */
    hasClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit("click:toggle");
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfColorPicker_SfColorPickervue_type_script_lang_js_ = (SfColorPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfColorPicker/SfColorPicker.vue?vue&type=style&index=0&lang=scss&
var SfColorPickervue_type_style_index_0_lang_scss_ = __webpack_require__("a3dc");

// CONCATENATED MODULE: ./src/components/molecules/SfColorPicker/SfColorPicker.vue






/* normalize component */

var SfColorPicker_component = normalizeComponent(
  SfColorPicker_SfColorPickervue_type_script_lang_js_,
  SfColorPickervue_type_template_id_340dcd46_render,
  SfColorPickervue_type_template_id_340dcd46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfColorPicker = (SfColorPicker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfComponentSelect/SfComponentSelect.vue?vue&type=template&id=5ace7476&
var SfComponentSelectvue_type_template_id_5ace7476_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-component-select",class:{
    'is-active': _vm.isActive,
    'is-selected': _vm.isSelected,
    'is-required': _vm.required,
    'is-disabled': _vm.disabled,
    'is-invalid': !_vm.valid,
  },attrs:{"aria-expanded":_vm.open.toString(),"aria-owns":'lbox_' + _vm._uid,"aria-label":_vm.label,"role":"listbox"},on:{"click":function($event){return _vm.toggle($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeHandler.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.openHandler.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.move(-1)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.move(1)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.enter($event)}]}},[_c('div',{staticStyle:{"position":"relative"}},[_c('div',_vm._g({directives:[{name:"focus",rawName:"v-focus"}],ref:"sfComponentSelect",staticClass:"sf-component-select__selected sf-component-select-option",attrs:{"tabindex":"0"},domProps:{"innerHTML":_vm._s(_vm.html)}},_vm.$listeners)),_vm._t("label",function(){return [(_vm.label)?_c('div',{staticClass:"sf-component-select__label"},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()]}),_vm._t("icon",function(){return [_c('SfChevron',{staticClass:"sf-component-select__chevron"})]}),_c('SfOverlay',{ref:"overlay",staticClass:"sf-component-select__overlay smartphone-only",attrs:{"visible":_vm.open}}),_c('transition',{attrs:{"name":"sf-component-select"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],staticClass:"sf-component-select__dropdown"},[_c('ul',{staticClass:"sf-component-select__options",style:({ maxHeight: _vm.maxHeight }),attrs:{"aria-expanded":_vm.open.toString()}},[_vm._t("default")],2),_vm._t("cancel",function(){return [_c('SfButton',{ref:"cancel",staticClass:"\n              sf-component-select__cancel\n              sf-button--full-width\n              smartphone-only\n            ",on:{"click":_vm.closeHandler}},[_vm._v(" Cancel ")])]})],2)])],2),_c('div',{staticClass:"sf-component-select__error-message"},[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.valid)?_vm._t("error-message",function(){return [_c('span',[_vm._v(" "+_vm._s(_vm.errorMessage)+" ")])]},null,{ errorMessage: _vm.errorMessage }):_vm._e()],2)],1)])}
var SfComponentSelectvue_type_template_id_5ace7476_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/SfComponentSelect.vue?vue&type=template&id=5ace7476&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfComponentSelect/_internal/SfComponentSelectOption.vue?vue&type=template&id=638a66bc&
var SfComponentSelectOptionvue_type_template_id_638a66bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-component-select-option",class:{ 'sf-component-select-option--is-active': _vm.selected === _vm.value },attrs:{"id":_vm.value,"role":"option","tabindex":"0","aria-selected":_vm.selected === _vm.value ? 'true' : 'false'},on:{"click":_vm.clicked,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.clicked.apply(null, arguments)}}},[_vm._t("default")],2)}
var SfComponentSelectOptionvue_type_template_id_638a66bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/_internal/SfComponentSelectOption.vue?vue&type=template&id=638a66bc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfComponentSelect/_internal/SfComponentSelectOption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfComponentSelectOptionvue_type_script_lang_js_ = ({
  name: "SfComponentSelectOption",
  directives: {
    focus: focus_directive_focus
  },
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    }
  },
  computed: {
    selected() {
      return this.$parent.selected;
    },

    indexes() {
      return this.$parent.indexes;
    }

  },
  methods: {
    clicked() {
      this.$parent.$emit("update", this.indexes[JSON.stringify(this.value)]);
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/_internal/SfComponentSelectOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfComponentSelectOptionvue_type_script_lang_js_ = (SfComponentSelectOptionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/_internal/SfComponentSelectOption.vue





/* normalize component */

var SfComponentSelectOption_component = normalizeComponent(
  _internal_SfComponentSelectOptionvue_type_script_lang_js_,
  SfComponentSelectOptionvue_type_template_id_638a66bc_render,
  SfComponentSelectOptionvue_type_template_id_638a66bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfComponentSelectOption = (SfComponentSelectOption_component.exports);
// CONCATENATED MODULE: ./src/utilities/directives/click-outside/click-outside-directive.js
const clickOutside = {
  bind(el, binding) {
    binding.name = "click-outside";
    const closeHandler = binding.value;

    el._outsideClickHandler = function (event) {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler();
      }
    };

    document.addEventListener("mousedown", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },

  unbind(el) {
    document.removeEventListener("mousedown", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
    el._outsideClickHandler = null;
  }

};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfComponentSelect/SfComponentSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfComponentSelectOption", SfComponentSelectOption);
/* harmony default export */ var SfComponentSelectvue_type_script_lang_js_ = ({
  name: "SfComponentSelect",
  directives: {
    focus: focus_directive_focus,
    clickOutside: clickOutside
  },
  components: {
    SfButton: SfButton,
    SfChevron: SfChevron,
    SfOverlay: SfOverlay
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Selected item value
     */
    selected: {
      type: [String, Number, Object],
      default: ""
    },

    /**
     * Dropdown list size
     */
    size: {
      type: Number,
      default: 5
    },

    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },

    /**
     * If true clicking outside will not dismiss the select
     */
    persistent: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      open: false,
      options: [],
      indexes: {},
      optionHeight: 0,
      focusedOption: ""
    };
  },

  computed: {
    index: {
      get() {
        const stringified = this.indexes[JSON.stringify(this.selected)];

        if (typeof stringified === "undefined") {
          return -1;
        }

        return stringified;
      },

      set(index) {
        this.focusedOption = this.options[index].value;
        this.$emit("change", this.options[index].value);
      }

    },

    html() {
      if (this.index < 0) return;
      return this.options[this.index].html;
    },

    maxHeight() {
      if (!this.options.length) return;
      return `${this.optionHeight * (this.size + 0.5)}px`;
    },

    isActive() {
      return this.open;
    },

    isSelected() {
      return this.selected;
    }

  },
  watch: {
    open: {
      immediate: true,
      handler: function (visible) {
        if (visible) {
          this.$nextTick(() => {
            if (this.$slots.default) {
              this.optionHeight = this.$slots.default[0].elm.offsetHeight;
            }
          });
        }
      }
    }
  },
  mounted: function () {
    this.addOptionsAndIndexes();
  },

  updated() {
    if (this.$slots.default && this.$slots.default.length > this.options.length) {
      this.addOptionsAndIndexes();
    }
  },

  beforeDestroy: function () {
    this.$off("update", this.update);
  },
  methods: {
    update(index) {
      this.index = index;
    },

    addOptionsAndIndexes() {
      const options = [];
      const indexes = {};
      if (!this.$slots.default) return;
      this.$on("update", this.update);
      this.$slots.default.forEach(({
        tag,
        componentOptions,
        elm
      }, index) => {
        if (!tag) return;
        options.push({ ...componentOptions.propsData,
          html: elm.innerHTML
        });
        indexes[JSON.stringify(componentOptions.propsData.value)] = index;
      });
      this.options = options;
      this.indexes = indexes;
    },

    move(payload) {
      const optionsLength = this.options.length;
      let index = this.index;
      index += payload;
      if (index < 0) index = 0;
      if (index >= optionsLength) index = optionsLength - 1;
      this.index = index;
      this.$refs.sfComponentSelect.blur();
      document.getElementById(this.focusedOption).focus();
    },

    enter() {
      this.toggle();
    },

    toggle(event) {
      if (this.$refs.cancel && event && event.target.contains(this.$refs.cancel.$el) || this.$refs.overlay && event && this.persistent && event.target.contains(this.$refs.overlay.$el) || this.disabled) return;
      this.open = !this.open;
    },

    checkPersistence() {
      if (!this.persistent) {
        this.closeHandler();
      }
    },

    openHandler() {
      this.open = true;
    },

    closeHandler() {
      this.open = false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/SfComponentSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfComponentSelect_SfComponentSelectvue_type_script_lang_js_ = (SfComponentSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfComponentSelect/SfComponentSelect.vue?vue&type=style&index=0&lang=scss&
var SfComponentSelectvue_type_style_index_0_lang_scss_ = __webpack_require__("5371");

// CONCATENATED MODULE: ./src/components/molecules/SfComponentSelect/SfComponentSelect.vue






/* normalize component */

var SfComponentSelect_component = normalizeComponent(
  SfComponentSelect_SfComponentSelectvue_type_script_lang_js_,
  SfComponentSelectvue_type_template_id_5ace7476_render,
  SfComponentSelectvue_type_template_id_5ace7476_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfComponentSelect = (SfComponentSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfDropdown/SfDropdown.vue?vue&type=template&id=9b511ff0&
var SfDropdownvue_type_template_id_9b511ff0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-dropdown"},[_c('SfOverlay',{staticClass:"sf-dropdown__overlay",attrs:{"visible":_vm.isOpen}}),_vm._t("opener",function(){return [_c('SfButton',{staticClass:"sf-button--full-width sf-dropdown__opener",on:{"click":function($event){$event.stopPropagation();return _vm.open.apply(null, arguments)}}},[_vm._v("Choose your action")])]}),_c('transition',{attrs:{"name":"sf-dropdown"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOpen),expression:"isOpen"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-dropdown__container"},[_vm._t("title",function(){return [(_vm.title)?_c('div',{staticClass:"sf-dropdown__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()]},null,{ title: _vm.title }),_vm._t("default"),_vm._t("cancel",function(){return [_c('SfButton',{staticClass:"sf-button--full-width sf-dropdown__cancel",on:{"click":function($event){$event.stopPropagation();return _vm.close.apply(null, arguments)}}},[_vm._v("Cancel")])]})],2)])],2)}
var SfDropdownvue_type_template_id_9b511ff0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfDropdown/SfDropdown.vue?vue&type=template&id=9b511ff0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfDropdown/SfDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfDropdownvue_type_script_lang_js_ = ({
  name: "SfDropdown",
  components: {
    SfOverlay: SfOverlay,
    SfButton: SfButton
  },
  directives: {
    clickOutside: clickOutside
  },
  props: {
    /**
     * Dropdown is open
     */
    isOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Title for dropdown content, visible on mobile.
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * If true clicking outside will not dismiss the dropdown
     */
    persistent: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!isClient) return;

        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },
  methods: {
    open() {
      this.$emit("click:open");
    },

    close() {
      this.$emit("click:close");
    },

    checkPersistence() {
      if (!this.persistent) return this.close();
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfDropdown/SfDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfDropdown_SfDropdownvue_type_script_lang_js_ = (SfDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfDropdown/SfDropdown.vue?vue&type=style&index=0&lang=scss&
var SfDropdownvue_type_style_index_0_lang_scss_ = __webpack_require__("bc83");

// CONCATENATED MODULE: ./src/components/molecules/SfDropdown/SfDropdown.vue






/* normalize component */

var SfDropdown_component = normalizeComponent(
  SfDropdown_SfDropdownvue_type_script_lang_js_,
  SfDropdownvue_type_template_id_9b511ff0_render,
  SfDropdownvue_type_template_id_9b511ff0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfDropdown = (SfDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfFilter/SfFilter.vue?vue&type=template&id=17a556de&
var SfFiltervue_type_template_id_17a556de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfCheckbox',_vm._g({staticClass:"sf-filter",class:{ 'is-active': _vm.selected, 'is-color': _vm.color },attrs:{"name":_vm.label,"selected":_vm.selected},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("color",function(){return [(_vm.color)?_c('SfColor',{staticClass:"sf-filter__color",attrs:{"color":_vm.color,"has-badge":false,"selected":_vm.selected},on:{"click":function($event){return _vm.$emit('change', !_vm.selected)}}}):_vm._e()]},null,{ color: _vm.color, selected: _vm.selected }),_vm._t("label",function(){return [_c('div',{staticClass:"sf-filter__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label }),_vm._t("count",function(){return [_c('div',{staticClass:"sf-filter__count"},[_vm._v(_vm._s(_vm.count))])]},null,{ count: _vm.count })]},proxy:true}],null,true)},_vm.$listeners))}
var SfFiltervue_type_template_id_17a556de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfFilter/SfFilter.vue?vue&type=template&id=17a556de&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfFilter/SfFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfFiltervue_type_script_lang_js_ = ({
  name: "SfFilter",
  components: {
    SfCheckbox: SfCheckbox,
    SfColor: SfColor
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    count: {
      type: [String, Number],
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfFilter/SfFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfFilter_SfFiltervue_type_script_lang_js_ = (SfFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfFilter/SfFilter.vue?vue&type=style&index=0&lang=scss&
var SfFiltervue_type_style_index_0_lang_scss_ = __webpack_require__("6980");

// CONCATENATED MODULE: ./src/components/molecules/SfFilter/SfFilter.vue






/* normalize component */

var SfFilter_component = normalizeComponent(
  SfFilter_SfFiltervue_type_script_lang_js_,
  SfFiltervue_type_template_id_17a556de_render,
  SfFiltervue_type_template_id_17a556de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfFilter = (SfFilter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfGallery/SfGallery.vue?vue&type=template&id=e5e9f4d2&
var SfGalleryvue_type_template_id_e5e9f4d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-gallery"},[_c('div',{staticClass:"sf-gallery__stage"},[_c('div',{ref:"glide",staticClass:"glide"},[_c('div',{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[_c('ul',{staticClass:"glide__slides"},_vm._l((_vm.images),function(picture,index){return _c('li',{key:'slide-' + index,staticClass:"glide__slide",on:{"mouseover":function($event){return _vm.startZoom(picture)},"mousemove":function($event){return _vm.moveZoom($event, index)},"mouseout":function($event){return _vm.removeZoom(index)}}},[_c('SfImage',{ref:"sfGalleryBigImage",refInFor:true,staticClass:"sf-gallery__big-image",class:{ 'sf-gallery__big-image--has-zoom': _vm.enableZoom },attrs:{"src":picture.desktop.url,"alt":picture.alt,"width":_vm.imageWidth,"height":_vm.imageHeight},on:{"click":function($event){return _vm.$emit('click:stage', { picture: picture, index: index })}}})],1)}),0)])]),_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.outsideZoom && _vm.pictureSelected)?_c('div',{ref:"outSide",style:({ width: (_vm.imageWidth + "px"), height: (_vm.imageHeight + "px") })},[_c('SfImage',{ref:"imgZoom",staticClass:"sf-gallery__zoom",attrs:{"src":_vm.pictureSelected,"width":_vm.imageWidth,"height":_vm.imageHeight,"lazy":false}})],1):_vm._e()])],1),_c('div',{staticClass:"sf-gallery__thumbs"},[_vm._t("thumbs",function(){return _vm._l((_vm.images),function(image,index){return _c('SfButton',{key:'img-' + index,staticClass:"sf-button--pure sf-gallery__item",class:{ 'sf-gallery__item--selected': index === _vm.activeIndex },on:{"click":function($event){return _vm.go(index)}}},[_c('SfImage',{staticClass:"sf-gallery__thumb",attrs:{"src":image.mobile.url,"alt":image.alt,"width":_vm.thumbWidth,"height":_vm.thumbHeight}})],1)})},null,{ images: _vm.images, active: _vm.activeIndex, go: _vm.go })],2)])}
var SfGalleryvue_type_template_id_e5e9f4d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfGallery/SfGallery.vue?vue&type=template&id=e5e9f4d2&

// CONCATENATED MODULE: ./node_modules/@glidejs/glide/dist/glide.esm.js
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('<' + steps));
        } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -toInt(settings.perTouch));
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps;
          }

          Components.Run.make(Components.Direction.resolve('>' + steps));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.activeNav);
        });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

/* harmony default export */ var glide_esm = (Glide$1);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfGallery/SfGallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfGalleryvue_type_script_lang_js_ = ({
  name: "SfGallery",
  components: {
    SfImage: SfImage,
    SfButton: SfButton
  },
  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => []
    },

    /**
     * Images width, without unit
     */
    imageWidth: {
      type: [Number, String],
      default: 422
    },

    /**
     * Images height, without unit
     */
    imageHeight: {
      type: [Number, String],
      default: 664
    },

    /**
     * Thumb width, without unit
     */
    thumbWidth: {
      type: [Number, String],
      default: 160
    },

    /**
     * Thumb height, without unit
     */
    thumbHeight: {
      type: [Number, String],
      default: 160
    },

    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1
    },

    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,

      default() {
        return {
          type: "slider",
          autoplay: false,
          rewind: false,
          gap: 0
        };
      }

    },

    /**
     * Image zoom inside or overlap the stage
     */
    outsideZoom: {
      type: Boolean,
      default: false
    },

    /**
     * Toogle for image zoom or overlap the stage
     */
    enableZoom: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      positionStatic: {},
      eventHover: {},
      pictureSelected: "",
      glide: null,
      activeIndex: this.current - 1,
      style: ""
    };
  },

  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({
        desktop,
        big
      }) => ({
        mobile: desktop,
        desktop: big
      }));
    },

    updatedSliderOptions() {
      return { ...this.sliderOptions,
        startAt: this.activeIndex
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      if (this.images.length < 1) return;
      const glide = new glide_esm(this.$refs.glide, this.updatedSliderOptions);
      glide.on("run", () => {
        this.go(glide.index);
      });
      glide.mount();
      this.glide = glide;
    });
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  },

  methods: {
    positionObject(index) {
      if (this.$refs.sfGalleryBigImage) {
        if (this.outsideZoom) {
          return this.$refs.glide.getBoundingClientRect();
        } else {
          return this.$refs.sfGalleryBigImage[index].$el.getBoundingClientRect();
        }
      }

      return "";
    },

    go(index) {
      if (!this.glide) return;
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */

      this.$emit("click", index + 1);

      if (this.glide) {
        this.glide.go(`=${index}`);
      }
    },

    startZoom(picture) {
      if (this.enableZoom) {
        const {
          zoom,
          big,
          desktop
        } = picture;
        this.pictureSelected = (zoom || big || desktop).url;
      }
    },

    moveZoom($event, index) {
      if (this.enableZoom) {
        this.eventHover = $event;

        if (this.outsideZoom) {
          this.positionStatic = this.positionObject(index);
          this.$refs.imgZoom.$el.children[0].style.cssText = "top: 0; transform: scale(2);";
          this.$refs.imgZoom.$el.children[0].style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y}px`;
        } else {
          this.positionStatic = this.positionObject(index);
          this.$refs.sfGalleryBigImage[index].$el.children[0].style.cssText = "top: 0; transform: scale(2);";
          this.$refs.sfGalleryBigImage[index].$el.children[0].style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y}px`;
        }
      }
    },

    removeZoom(index) {
      if (this.enableZoom) {
        this.pictureSelected = "";
        if (this.outsideZoom) return;
        this.$refs.sfGalleryBigImage[index].$el.children[0].style.transform = "scale(1)";
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfGallery/SfGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfGallery_SfGalleryvue_type_script_lang_js_ = (SfGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfGallery/SfGallery.vue?vue&type=style&index=0&lang=scss&
var SfGalleryvue_type_style_index_0_lang_scss_ = __webpack_require__("98be");

// CONCATENATED MODULE: ./src/components/molecules/SfGallery/SfGallery.vue






/* normalize component */

var SfGallery_component = normalizeComponent(
  SfGallery_SfGalleryvue_type_script_lang_js_,
  SfGalleryvue_type_template_id_e5e9f4d2_render,
  SfGalleryvue_type_template_id_e5e9f4d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfGallery = (SfGallery_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=0f02870f&
var SfMenuItemvue_type_template_id_0f02870f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentIs,_vm._g(_vm._b({tag:"component",staticClass:"sf-menu-item",attrs:{"data-testid":_vm.label}},'component',_vm.bind,false),_vm.$listeners),[_vm._t("icon"),_vm._t("label",function(){return [_c('span',{staticClass:"sf-menu-item__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label }),_vm._t("count",function(){return [_c('span',{staticClass:"sf-menu-item__count"},[_vm._v(_vm._s(_vm.count))])]},null,{ count: _vm.count }),_vm._t("mobile-nav-icon",function(){return [(_vm.icon)?_c('SfIcon',{staticClass:"sf-menu-item__mobile-nav-icon smartphone-only",attrs:{"icon":_vm.icon,"size":"14px"}}):_vm._e()]},null,{ icon: _vm.icon })],2)}
var SfMenuItemvue_type_template_id_0f02870f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=0f02870f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfMenuItemvue_type_script_lang_js_ = ({
  name: "SfMenuItem",
  components: {
    SfIcon: SfIcon,
    SfLink: SfLink,
    SfButton: SfButton
  },
  props: {
    /**
     * Menu-item label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Menu-item icon (visible on mobile)
     */
    icon: {
      type: [String, Array],
      default: "chevron_right"
    },

    /**
     * Menu-item count of items
     */
    count: {
      type: [String, Number],
      default: ""
    },

    /**
     * Menu-item link (if is empty then SfMenuItem is SfButton)
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    bind() {
      const bind = {};

      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }

      return bind;
    },

    componentIs() {
      return this.link ? "SfLink" : "SfButton";
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMenuItem_SfMenuItemvue_type_script_lang_js_ = (SfMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=style&index=0&lang=scss&
var SfMenuItemvue_type_style_index_0_lang_scss_ = __webpack_require__("cb32");

// CONCATENATED MODULE: ./src/components/molecules/SfMenuItem/SfMenuItem.vue






/* normalize component */

var SfMenuItem_component = normalizeComponent(
  SfMenuItem_SfMenuItemvue_type_script_lang_js_,
  SfMenuItemvue_type_template_id_0f02870f_render,
  SfMenuItemvue_type_template_id_0f02870f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfMenuItem = (SfMenuItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=9efc3296&
var SfModalvue_type_template_id_9efc3296_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-modal",class:[_vm.staticClass, _vm.className]},[(_vm.overlay)?_c('SfOverlay',{staticClass:"sf-modal__overlay",attrs:{"transition":_vm.transitionOverlay,"visible":_vm.visible}}):_vm._e(),_c('transition',{attrs:{"name":_vm.transitionModal}},[(_vm.visible)?_c('div',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],staticClass:"sf-modal__container"},[_vm._t("modal-bar",function(){return [_c('SfBar',{staticClass:"sf-modal__bar smartphone-only",attrs:{"close":_vm.cross,"title":_vm.title},on:{"click:close":_vm.close}})]}),(_vm.cross)?_c('SfButton',{staticClass:"sf-button--pure sf-modal__close desktop-only",attrs:{"aria-label":"Close modal","type":"button","data-testid":"close-button"},on:{"click":_vm.close}},[_vm._t("close",function(){return [_c('SfIcon',{attrs:{"icon":"cross","size":"0.875rem","color":"gray-secondary"}})]})],2):_vm._e(),_c('div',{ref:"content",staticClass:"sf-modal__content"},[_vm._t("default")],2)],2):_vm._e()])],1)}
var SfModalvue_type_template_id_9efc3296_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfModal/SfModal.vue?vue&type=template&id=9efc3296&

// CONCATENATED MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};


// CONCATENATED MODULE: ./src/utilities/directives/focus-trap/focus-trap.js
const focusableElements = ["a[href]", "button:not([disabled])", "button:not([hidden])", "[tabindex]:not([disabled])", "input:not([disabled])", "select", "textarea"];

const isHidden = selector => selector.offsetParent === null;

const getFocusableChildren = el => {
  return Array.from(el.querySelectorAll(focusableElements)).filter(selector => !isHidden(selector)) || [];
};
const isFocusable = (e, focusableChildrenElements) => Array.from(focusableChildrenElements).some(el => el === e.target);
const moveFocus = (e, focusableChildrenElements) => {
  if (!focusableChildrenElements.length || e.key !== "Tab") return;

  if (!isFocusable(e, focusableChildrenElements)) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  }

  if (focusableChildrenElements.length === 1) {
    e.preventDefault();
    return;
  }

  const lastElementIndex = focusableChildrenElements.length - 1;
  const isLastElement = e.target === focusableChildrenElements[lastElementIndex];
  const isFirstElement = e.target === focusableChildrenElements[0];
  const isGoingForward = e.shiftKey === false;

  if (isGoingForward && isLastElement) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  } else if (!isGoingForward && isFirstElement) {
    e.preventDefault();
    focusableChildrenElements[lastElementIndex].focus();
  }
};
// CONCATENATED MODULE: ./src/utilities/directives/focus-trap/focus-trap-directive.js


const focusTrap = {
  bind(el) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });

    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, el._focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }

      moveFocus(e, el._focusableChildrenElements);
    };

    document.addEventListener("keydown", el._keyHandler);
  },

  componentUpdated(el) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },

  unbind(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  }

};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfModalvue_type_script_lang_js_ = ({
  name: "SfModal",
  directives: {
    focusTrap: focusTrap,
    clickOutside: clickOutside
  },
  components: {
    SfBar: SfBar,
    SfOverlay: SfOverlay,
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  model: {
    prop: "visible",
    event: "close"
  },
  props: {
    /**
     * Heading title of the modal
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },

    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true
    },

    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false
    },

    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "sf-fade"
    },

    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "sf-fade"
    }
  },

  data() {
    return {
      staticClass: null,
      className: null
    };
  },

  watch: {
    visible: {
      handler: function (value) {
        if (!isClient) return;

        if (value) {
          this.$nextTick(() => {
            disableBodyScroll(this.$refs.content);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          clearAllBodyScrollLocks();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },

  beforeDestroy() {
    clearAllBodyScrollLocks();
  },

  methods: {
    close() {
      this.$emit("close", false);
    },

    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfModal/SfModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfModal_SfModalvue_type_script_lang_js_ = (SfModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfModal/SfModal.vue?vue&type=style&index=0&lang=scss&
var SfModalvue_type_style_index_0_lang_scss_ = __webpack_require__("8324");

// CONCATENATED MODULE: ./src/components/molecules/SfModal/SfModal.vue






/* normalize component */

var SfModal_component = normalizeComponent(
  SfModal_SfModalvue_type_script_lang_js_,
  SfModalvue_type_template_id_9efc3296_render,
  SfModalvue_type_template_id_9efc3296_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfModal = (SfModal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfNotification/SfNotification.vue?vue&type=template&id=2a2e74f4&
var SfNotificationvue_type_template_id_2a2e74f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sf-fade"}},[(_vm.visible)?_c('div',{staticClass:"sf-notification",class:("color-" + _vm.type)},[_vm._t("icon",function(){return [(!!_vm.icon)?_c('SfIcon',{staticClass:"sf-notification__icon",attrs:{"icon":_vm.icon,"size":"lg","color":"white"}}):_vm._e()]},null,{ icon: _vm.icon }),_c('div',[_vm._t("title",function(){return [(_vm.title)?_c('div',{staticClass:"sf-notification__title smartphone-only"},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_vm._e()]},null,{ title: _vm.title }),_vm._t("message",function(){return [(_vm.message)?_c('span',{staticClass:"sf-notification__message"},[_vm._v(_vm._s(_vm.message))]):_vm._e()]},null,{ message: _vm.message }),_vm._t("action",function(){return [(_vm.action)?_c('SfButton',{staticClass:"sf-button--pure sf-notification__action",on:{"click":_vm.actionHandler}},[_vm._v(" "+_vm._s(_vm.action)+" ")]):_vm._e()]},null,{ action: _vm.action, actionHandler: _vm.actionHandler })],2),_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-notification__close",attrs:{"aria-label":"Close notification"},on:{"click":_vm.closeHandler}},[_c('SfIcon',{attrs:{"icon":"cross","color":"white"}})],1)]},null,{ closeHandler: _vm.closeHandler })],2):_vm._e()])}
var SfNotificationvue_type_template_id_2a2e74f4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfNotification/SfNotification.vue?vue&type=template&id=2a2e74f4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfNotification/SfNotification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfNotificationvue_type_script_lang_js_ = ({
  name: "SfNotification",
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  props: {
    /**
     * Visibility of the Notification. Default value is false.
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * Title that will be displayed in Notification.
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Message that will be displayed in Notification.
     */
    message: {
      type: String,
      default: ""
    },

    /**
     * Action that will be displayed in Notification.
     */
    action: {
      type: String,
      default: ""
    },

    /**
     * Notification type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(value);
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";

        case "danger":
          return "info_shield";

        default:
          return "info_circle";
      }
    }

  },
  methods: {
    actionHandler() {
      /**
       * Event for action button
       * @type {Event}
       */
      this.$emit("click:action");
    },

    closeHandler() {
      /**
       * Event for close icon
       * @type {Event}
       */
      this.$emit("click:close");
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfNotification/SfNotification.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfNotification_SfNotificationvue_type_script_lang_js_ = (SfNotificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfNotification/SfNotification.vue?vue&type=style&index=0&lang=scss&
var SfNotificationvue_type_style_index_0_lang_scss_ = __webpack_require__("75dd");

// CONCATENATED MODULE: ./src/components/molecules/SfNotification/SfNotification.vue






/* normalize component */

var SfNotification_component = normalizeComponent(
  SfNotification_SfNotificationvue_type_script_lang_js_,
  SfNotificationvue_type_template_id_2a2e74f4_render,
  SfNotificationvue_type_template_id_2a2e74f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfNotification = (SfNotification_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfPagination/SfPagination.vue?vue&type=template&id=6430111b&
var SfPaginationvue_type_template_id_6430111b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sf-pagination"},[_vm._t("prev",function(){return [(_vm.hasArrows)?_c('div',{staticClass:"sf-pagination__item prev"},[_c(_vm.componentIs,{tag:"component",class:{
          'sf-button--pure': !_vm.hasRouter,
          'sf-arrow--transparent': !_vm.hasRouter && !_vm.canGoPrev,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.getPrev) : null,"disabled":!_vm.hasRouter && !_vm.canGoPrev ? true : false,"aria-label":"Go to previous page"},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.getPrev)}}},[_c('SfIcon',{attrs:{"icon":"arrow_left","size":"1.125rem"}})],1)],1):_vm._e()]},null,{ isDisabled: !_vm.canGoPrev, go: _vm.go, prev: _vm.getPrev }),(_vm.showFirst)?[_vm._t("number",function(){return [_c(_vm.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(1) : null},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(1)}}},[_vm._v(" 1 ")])]},null,{ page: 1 }),(_vm.firstVisiblePageNumber > 2)?_vm._t("points",function(){return [_c('div',{staticClass:"sf-pagination__item"},[_vm._v("...")])]}):_vm._e()]:_vm._e(),_vm._l((_vm.limitedPageNumbers),function(page){return [_vm._t("number",function(){return [_c(_vm.currentPage === page ? 'span' : _vm.componentIs,{key:page,tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter && _vm.currentPage !== page,
          current: _vm.currentPage === page,
        },attrs:{"link":_vm.hasRouter && _vm.currentPage !== page ? _vm.getLinkTo(page) : null},on:{"click":function($event){!_vm.hasRouter && _vm.currentPage !== page ? _vm.go(page) : null}}},[_vm._v(" "+_vm._s(page)+" ")])]},null,{ page: page, currentPage: _vm.currentPage })]}),(_vm.showLast)?[(_vm.lastVisiblePageNumber < _vm.total - 1)?_vm._t("points",function(){return [_c('div',{staticClass:"sf-pagination__item"},[_vm._v("...")])]}):_vm._e(),_vm._t("number",function(){return [_c(_vm.componentIs,{tag:"component",staticClass:"sf-pagination__item",class:{
          'sf-button--pure': !_vm.hasRouter,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.total) : null},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.total)}}},[_vm._v(" "+_vm._s(_vm.total)+" ")])]},null,{ page: _vm.total })]:_vm._e(),_vm._t("next",function(){return [(_vm.hasArrows)?_c('div',{staticClass:"sf-pagination__item next"},[_c(_vm.componentIs,{tag:"component",class:{
          'sf-button--pure': !_vm.hasRouter,
          'sf-arrow--transparent': !_vm.hasRouter && !_vm.canGoNext,
        },attrs:{"link":_vm.hasRouter ? _vm.getLinkTo(_vm.getNext) : null,"disabled":!_vm.hasRouter && !_vm.canGoNext ? true : false,"aria-label":"Go to previous next"},on:{"click":function($event){_vm.hasRouter ? null : _vm.go(_vm.getNext)}}},[_c('SfIcon',{attrs:{"icon":"arrow_right","size":"1.125rem"}})],1)],1):_vm._e()]},null,{ isDisabled: !_vm.canGoNext, go: _vm.go, next: _vm.getNext })],2)}
var SfPaginationvue_type_template_id_6430111b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfPagination/SfPagination.vue?vue&type=template&id=6430111b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfPagination/SfPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfPaginationvue_type_script_lang_js_ = ({
  name: "SfPagination",
  components: {
    SfIcon: SfIcon,
    SfLink: SfLink,
    SfButton: SfButton
  },
  props: {
    /**
     * Total number of pages
     */
    total: {
      type: Number,
      default: 0
    },

    /**
     * Maximum visible pagination items
     */
    visible: {
      type: Number,
      default: 5
    },

    /**
     * Status of arrows display
     */
    hasArrows: {
      type: Boolean,
      default: true
    },

    /**
     * Current page number, for non router
     */
    current: {
      type: Number,
      default: 1
    },

    /**
     * Name of page query param for router
     */
    pageParamName: {
      type: String,
      default: "page"
    }
  },
  computed: {
    hasRouter() {
      return this.$route;
    },

    componentIs() {
      return this.hasRouter ? "SfLink" : "SfButton";
    },

    currentPage() {
      return this.hasRouter ? this.$route.query[this.pageParamName] ? parseInt(this.$route.query[this.pageParamName], 10) : 1 : this.current;
    },

    getPrev() {
      return this.currentPage === this.firstVisiblePageNumber ? this.currentPage : this.currentPage - 1;
    },

    canGoPrev() {
      return this.currentPage !== this.firstVisiblePageNumber;
    },

    getNext() {
      return this.currentPage === this.lastVisiblePageNumber ? this.currentPage : this.currentPage + 1;
    },

    canGoNext() {
      return this.currentPage !== this.lastVisiblePageNumber;
    },

    showFirst() {
      return this.firstVisiblePageNumber > 1;
    },

    showLast() {
      return this.lastVisiblePageNumber < this.total;
    },

    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },

    limitedPageNumbers() {
      if (this.total <= this.visible) {
        return this.listOfPageNumbers;
      }

      if (this.currentPage < this.visible - Math.floor(this.visible / 2) + 1) {
        return this.listOfPageNumbers.slice(0, this.visible);
      }

      if (this.total - this.currentPage < this.visible - Math.ceil(this.visible / 2) + 1) {
        return this.listOfPageNumbers.slice(this.total - this.visible);
      }

      return this.listOfPageNumbers.slice(this.currentPage - Math.ceil(this.visible / 2), this.currentPage + Math.floor(this.visible / 2));
    },

    firstVisiblePageNumber() {
      return this.limitedPageNumbers[0];
    },

    lastVisiblePageNumber() {
      return this.limitedPageNumbers[this.limitedPageNumbers.length - 1];
    }

  },
  methods: {
    go(page) {
      this.$emit("click", page);
    },

    getLinkTo(page) {
      const pageNumber = page.toString();

      if (this.hasRouter) {
        return { ...this.$route,
          query: { ...this.$route.query,
            [this.pageParamName]: page
          }
        };
      } else {
        return pageNumber;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfPagination/SfPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfPagination_SfPaginationvue_type_script_lang_js_ = (SfPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfPagination/SfPagination.vue?vue&type=style&index=0&lang=scss&
var SfPaginationvue_type_style_index_0_lang_scss_ = __webpack_require__("eee5");

// CONCATENATED MODULE: ./src/components/molecules/SfPagination/SfPagination.vue






/* normalize component */

var SfPagination_component = normalizeComponent(
  SfPagination_SfPaginationvue_type_script_lang_js_,
  SfPaginationvue_type_template_id_6430111b_render,
  SfPaginationvue_type_template_id_6430111b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfPagination = (SfPagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfProductOption/SfProductOption.vue?vue&type=template&id=087cd4f2&
var SfProductOptionvue_type_template_id_087cd4f2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-option"},[_vm._t("color",function(){return [(_vm.color)?_c('div',{staticClass:"sf-product-option__color",style:({ background: _vm.color })}):_vm._e()]},null,{ color: _vm.color }),_vm._t("label",function(){return [_c('div',{staticClass:"sf-product-option__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label })],2)}
var SfProductOptionvue_type_template_id_087cd4f2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfProductOption/SfProductOption.vue?vue&type=template&id=087cd4f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfProductOption/SfProductOption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfProductOptionvue_type_script_lang_js_ = ({
  name: "SfProductOption",
  props: {
    label: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfProductOption/SfProductOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductOption_SfProductOptionvue_type_script_lang_js_ = (SfProductOptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfProductOption/SfProductOption.vue?vue&type=style&index=0&lang=scss&
var SfProductOptionvue_type_style_index_0_lang_scss_ = __webpack_require__("85a0");

// CONCATENATED MODULE: ./src/components/molecules/SfProductOption/SfProductOption.vue






/* normalize component */

var SfProductOption_component = normalizeComponent(
  SfProductOption_SfProductOptionvue_type_script_lang_js_,
  SfProductOptionvue_type_template_id_087cd4f2_render,
  SfProductOptionvue_type_template_id_087cd4f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfProductOption = (SfProductOption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=3284d94c&
var SfRadiovue_type_template_id_3284d94c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-radio",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
  }},[_c('label',{staticClass:"sf-radio__container"},[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.changeHandler,"input":_vm.inputHandler}}),_vm._t("checkmark",function(){return [_c('div',{staticClass:"sf-radio__checkmark",class:{ 'sf-radio__checkmark is-active': _vm.isChecked }})]},null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_c('div',{staticClass:"sf-radio__content"},[_vm._t("label",function(){return [(_vm.label)?_c('div',{staticClass:"sf-radio__label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()]},null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._t("details",function(){return [(_vm.details)?_c('p',{staticClass:"sf-radio__details"},[_vm._v(" "+_vm._s(_vm.details)+" ")]):_vm._e()]},null,{ details: _vm.details }),_vm._t("description",function(){return [(_vm.description)?_c('p',{staticClass:"sf-radio__description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()]},null,{ description: _vm.description })],2)],2)])}
var SfRadiovue_type_template_id_3284d94c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=3284d94c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfRadiovue_type_script_lang_js_ = ({
  name: "SfRadio",
  directives: {
    focus: focus_directive_focus
  },
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }

  },
  methods: {
    changeHandler() {
      this.$emit("change", this.value);
    },

    inputHandler() {
      this.$emit("input", this.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRadio_SfRadiovue_type_script_lang_js_ = (SfRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfRadio/SfRadio.vue?vue&type=style&index=0&lang=scss&
var SfRadiovue_type_style_index_0_lang_scss_ = __webpack_require__("96aa");

// CONCATENATED MODULE: ./src/components/molecules/SfRadio/SfRadio.vue






/* normalize component */

var SfRadio_component = normalizeComponent(
  SfRadio_SfRadiovue_type_script_lang_js_,
  SfRadiovue_type_template_id_3284d94c_render,
  SfRadiovue_type_template_id_3284d94c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfRadio = (SfRadio_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfReview/SfReview.vue?vue&type=template&id=f0394c46&
var SfReviewvue_type_template_id_f0394c46_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-review"},[_vm._t("author",function(){return [_c('div',{staticClass:"sf-review__author"},[_vm._t("icon",function(){return [_c('SfIcon',{staticClass:"sf-review__icon"},[_c('svg',{attrs:{"viewbox":"0 0 20 20","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.4544 1.14319L12.7481 2.62068L14.6831 1.79943C14.9962 1.66724 15.3581 1.83786 15.4575 2.1613L16.0481 4.06536L18.1472 4.10286C18.4866 4.10849 18.7518 4.40941 18.7097 4.74693L18.4762 6.7288L20.3794 7.61661C20.6672 7.75161 20.7919 8.09474 20.6569 8.38254C20.3972 8.91974 19.9275 9.61254 19.6097 10.146L20.9878 11.7332C21.21 11.9901 21.1603 12.3876 20.8837 12.5826L19.2553 13.7329L19.8684 15.742C19.9678 16.0701 19.7615 16.4085 19.4278 16.4741L17.475 16.8632L17.2191 18.9473C17.175 19.3045 16.8178 19.5351 16.4765 19.4301L14.5725 18.9979L13.4906 20.797C13.3153 21.0895 12.9234 21.1673 12.6506 20.9629L11.0512 19.7694L9.3309 20.9732C9.04871 21.1701 8.66528 21.0782 8.49745 20.781L7.52432 19.0429L5.45994 19.4441C5.10932 19.5107 4.78681 19.2482 4.77462 18.8947L4.59649 16.9447L2.55088 16.4722C2.2162 16.3954 2.02494 16.0476 2.13275 15.7241L2.77401 13.836L1.09681 12.5713C0.80807 12.3529 0.789326 11.9282 1.05369 11.6854L2.37556 10.2557L1.35743 8.41819C1.19056 8.11819 1.32181 7.74225 1.63588 7.60725L3.46494 6.82164L3.28307 4.72819C3.25213 4.36725 3.56056 4.06819 3.91681 4.10287L5.85933 4.12912L6.54371 2.14257C6.65996 1.80508 7.04809 1.65508 7.3612 1.81912L9.14245 2.64131L10.575 1.10663C10.8178 0.846016 11.2322 0.866632 11.4515 1.14319H11.4544ZM6.27084 11.2194C5.5049 10.4534 6.66929 9.2881 7.43616 10.054L10.0162 12.634L14.5339 7.62596C15.2567 6.82251 16.4792 7.92315 15.7564 8.72657L10.6845 14.3479C10.377 14.7257 9.8089 14.7566 9.46296 14.4107L6.26976 11.2184L6.27084 11.2194Z"}})])])]}),_vm._v(" "+_vm._s(_vm.author)+" ")],2)]},null,{ author: _vm.author }),_vm._t("info",function(){return [_c('div',{staticClass:"sf-review__info"},[_c('div',{class:{ 'sf-review__rating': _vm.rating > 0 && _vm.maxRating > 0 }},[(_vm.rating)?_c('SfRating',{attrs:{"max":_vm.maxRating,"score":_vm.rating}}):_vm._e()],1),_c('div',{staticClass:"sf-review__date"},[_vm._v(" "+_vm._s(_vm.date)+" ")])])]},null,{ rating: _vm.rating, maxRating: _vm.maxRating, date: _vm.date }),_vm._t("message",function(){return [(_vm.message)?_c('div',[_c('p',{staticClass:"sf-review__message"},[_vm._v(_vm._s(_vm.finalMessage))]),(_vm.showButton)?_c('SfButton',{staticClass:"sf-button--text sf-review__read-more",on:{"click":_vm.toggleMessage}},[_vm._v(" "+_vm._s(_vm.buttonText)+" ")]):_vm._e()],1):_vm._e()]},null,{ finalMessage: _vm.finalMessage, buttonText: _vm.buttonText })],2)}
var SfReviewvue_type_template_id_f0394c46_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfReview/SfReview.vue?vue&type=template&id=f0394c46&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfReview/SfReview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfReviewvue_type_script_lang_js_ = ({
  name: "SfReview",
  components: {
    SfRating: SfRating,
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  props: {
    /**
     * Author of the review
     */
    author: {
      type: String,
      default: ""
    },

    /**
     * Date of the review
     */
    date: {
      type: String,
      default: ""
    },

    /**
     * Message from the reviewer
     */
    message: {
      type: String,
      default: ""
    },

    /**
     * Rating from the reviewer
     */
    rating: {
      type: [Number, String, Boolean],
      default: false
    },

    /**
     * Max rating for the review
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Char limit for the review
     */
    charLimit: {
      type: [Number, String],
      default: 250
    },

    /**
     * Read more text for the review
     */
    readMoreText: {
      type: String,
      default: "Read more"
    },

    /**
     * Hide full text message for the review
     */
    hideFullText: {
      type: String,
      default: "Read less"
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    showButton() {
      return this.message.length > this.charLimit;
    },

    buttonText() {
      let buttonText = this.readMoreText;

      if (this.isOpen) {
        buttonText = this.hideFullText;
      }

      return buttonText;
    },

    finalMessage() {
      return this.message.length > this.charLimit && !this.isOpen ? this.message.slice(0, this.charLimit) + "..." : this.message;
    }

  },
  methods: {
    toggleMessage() {
      this.isOpen = !this.isOpen;
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfReview/SfReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfReview_SfReviewvue_type_script_lang_js_ = (SfReviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfReview/SfReview.vue?vue&type=style&index=0&lang=scss&
var SfReviewvue_type_style_index_0_lang_scss_ = __webpack_require__("46dd");

// CONCATENATED MODULE: ./src/components/molecules/SfReview/SfReview.vue






/* normalize component */

var SfReview_component = normalizeComponent(
  SfReview_SfReviewvue_type_script_lang_js_,
  SfReviewvue_type_template_id_f0394c46_render,
  SfReviewvue_type_template_id_f0394c46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfReview = (SfReview_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6e41d90c&
var SfScrollablevue_type_template_id_6e41d90c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_c('Simplebar',{ref:"content",staticClass:"sf-scrollable__content",style:(_vm.style)},[_vm._t("default")],2),_vm._t("view-all",function(){return [_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])]},null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var SfScrollablevue_type_template_id_6e41d90c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=6e41d90c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/can-use-dom/index.js
var can_use_dom = __webpack_require__("0312");
var can_use_dom_default = /*#__PURE__*/__webpack_require__.n(can_use_dom);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("e25e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.weak-map.js
var es_weak_map = __webpack_require__("10d1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__("84a2");
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__("f7fe");
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// EXTERNAL MODULE: ./node_modules/lodash.memoize/index.js
var lodash_memoize = __webpack_require__("bb21");
var lodash_memoize_default = /*#__PURE__*/__webpack_require__.n(lodash_memoize);

// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze = function (obj) { return Object.freeze(obj); };

// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js

var ResizeObserverSize_ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js

var DOMRectReadOnly_DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var element_isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/global.js
var global = typeof window !== 'undefined' ? window : {};

// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js






var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var calculateBoxSize_size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize_ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: calculateBoxSize_size(),
    borderBoxSize: calculateBoxSize_size(),
    contentBoxSize: calculateBoxSize_size(),
    contentRect: new DOMRectReadOnly_DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (element_isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: calculateBoxSize_size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: calculateBoxSize_size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: calculateBoxSize_size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly_DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js


var ResizeObserverEntry_ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js

var calculateDepthForNode = function (node) {
    if (element_isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js




var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry_ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js


var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/process.js





var process = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var queueMicroTask_callbacks = [];
var notify = function () { return queueMicroTask_callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    queueMicroTask_callbacks.push(callback);
    trigger();
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js



var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var scheduler_Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new scheduler_Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js



var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation_ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js




var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController_ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation_ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js


var ResizeObserver_ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController_ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController_ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController_ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController_ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());


// CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js




// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/simplebar/dist/simplebar.esm.js
/**
 * SimpleBar.js - v5.3.4
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */






















// Helper function to retrieve options from element attributes
var getOptions = function getOptions(obj) {
  var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);

    if (option) {
      var key = option[1].replace(/\W+(.)/g, function (x, chr) {
        return chr.toUpperCase();
      });

      switch (attribute.value) {
        case 'true':
          acc[key] = true;
          break;

        case 'false':
          acc[key] = false;
          break;

        case undefined:
          acc[key] = true;
          break;

        default:
          acc[key] = attribute.value;
      }
    }

    return acc;
  }, {});
  return options;
};
function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }

  return element.ownerDocument.defaultView;
}
function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }

  return element.ownerDocument;
}

var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;

if (can_use_dom_default.a) {
  window.addEventListener('resize', function () {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}

function scrollbarWidth(el) {
  if (cachedScrollbarWidth === null) {
    var document = getElementDocument(el);

    if (typeof document === 'undefined') {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }

    var body = document.body;
    var box = document.createElement('div');
    box.classList.add('simplebar-hide-scrollbar');
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }

  return cachedScrollbarWidth;
}

var simplebar_esm_SimpleBar =
/*#__PURE__*/
function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      var elWindow = getElementWindow(_this.el);

      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = _this.getScrollbarWidth();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e, 'x');
            } else {
              _this.onTrackClick(e, 'x');
            }
          }

          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e, 'y');
            } else {
              _this.onTrackClick(e, 'y');
            }
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

      var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      elDocument.removeEventListener('mousemove', _this.drag, true);
      elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function () {
        // Remove these asynchronously so we still suppress click events
        // generated simultaneously with mouseup.
        elDocument.removeEventListener('click', _this.preventClick, true);
        elDocument.removeEventListener('dblclick', _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };

    this.preventClick = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    this.el = element;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, {}, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, {}, this.options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetSizeAttr: 'offsetWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetSizeAttr: 'offsetHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null; // Don't re-instantiate over an existing one

    if (SimpleBar.instances.has(this.el)) {
      return;
    }

    this.recalculate = lodash_throttle_default()(this.recalculate.bind(this), 64);
    this.onMouseMove = lodash_throttle_default()(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = lodash_debounce_default()(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = lodash_debounce_default()(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = lodash_memoize_default()(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var elDocument = getElementDocument(el);
    var elWindow = getElementWindow(el);
    return {
      top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
      left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    SimpleBar.instances.set(this.el, this); // We stop here on server-side

    if (can_use_dom_default.a) {
      this.initDOM();
      this.scrollbarWidth = this.getScrollbarWidth();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
      this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

    var resizeObserverStarted = false;
    var resizeObserver = elWindow.ResizeObserver || ResizeObserver_ResizeObserver;
    this.resizeObserver = new resizeObserver(function () {
      if (!resizeObserverStarted) return;

      _this3.recalculate();
    });
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
    elWindow.requestAnimationFrame(function () {
      resizeObserverStarted = true;
    }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

    this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: true
    });
  };

  _proto.recalculate = function recalculate() {
    var elWindow = getElementWindow(this.el);
    this.elStyles = elWindow.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    var contentElOffsetWidth = this.contentEl.offsetWidth;
    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
    var elOverflowX = this.elStyles.overflowX;
    var elOverflowY = this.elStyles.overflowY;
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    var contentElScrollHeight = this.contentEl.scrollHeight;
    var contentElScrollWidth = this.contentEl.scrollWidth;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = contentElScrollHeight + "px";
    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
    this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return 0;
    }

    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var scrollbarSize;
    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var elDocument = getElementDocument(this.el);
    var elWindow = getElementWindow(this.el);
    var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    elDocument.addEventListener('mousemove', this.drag, true);
    elDocument.addEventListener('mouseup', this.onEndDrag, true);

    if (this.removePreventClickId === null) {
      elDocument.addEventListener('click', this.preventClick, true);
      elDocument.addEventListener('dblclick', this.preventClick, true);
    } else {
      elWindow.clearTimeout(this.removePreventClickId);
      this.removePreventClickId = null;
    }
  }
  /**
   * Drag scrollbar handle
   */
  ;

  _proto.onTrackClick = function onTrackClick(e, axis) {
    var _this4 = this;

    if (axis === void 0) {
      axis = 'y';
    }

    if (!this.options.clickOnTrack) return;
    var elWindow = getElementWindow(this.el);
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var scrollbar = this.axis[axis].scrollbar;
    var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
    var dir = t < 0 ? -1 : 1;
    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

    var scrollTo = function scrollTo() {
      if (dir === -1) {
        if (scrolled > scrollSize) {
          var _this4$contentWrapper;

          scrolled -= _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

          elWindow.requestAnimationFrame(scrollTo);
        }
      } else {
        if (scrolled < scrollSize) {
          var _this4$contentWrapper2;

          scrolled += _this4.options.clickOnTrackSpeed;

          _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

          elWindow.requestAnimationFrame(scrollTo);
        }
      }
    };

    scrollTo();
  }
  /**
   * Getter for content element
   */
  ;

  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.getScrollbarWidth = function getScrollbarWidth() {
    // Try/catch for FF 56 throwing on undefined computedStyles
    try {
      // Detect browsers supporting CSS scrollbar styling and do not calculate
      if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
        return 0;
      } else {
        return scrollbarWidth(this.el);
      }
    } catch (e) {
      return scrollbarWidth(this.el);
    }
  };

  _proto.removeListeners = function removeListeners() {
    var _this5 = this;

    var elWindow = getElementWindow(this.el); // Event listeners

    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
    });
    ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this5.el.removeEventListener(e, _this5.onPointerEvent, {
        capture: true,
        passive: true
      });
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);

    if (this.contentWrapperEl) {
      this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    }

    elWindow.removeEventListener('resize', this.onWindowResize);

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    } // Cancel all debounced functions


    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    SimpleBar.instances.delete(this.el);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  }
  /**
   * Find element children matches query
   */
  ;

  _proto.findChild = function findChild(el, query) {
    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    return Array.prototype.filter.call(el.children, function (child) {
      return matches.call(child, query);
    })[0];
  };

  return SimpleBar;
}();

simplebar_esm_SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  clickOnTrackSpeed: 40,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};
simplebar_esm_SimpleBar.instances = new WeakMap();

simplebar_esm_SimpleBar.initDOMLoadedElements = function () {
  document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
  window.removeEventListener('load', this.initDOMLoadedElements);
  Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
    if (el.getAttribute('data-simplebar') !== 'init' && !simplebar_esm_SimpleBar.instances.has(el)) new simplebar_esm_SimpleBar(el, getOptions(el.attributes));
  });
};

simplebar_esm_SimpleBar.removeObserver = function () {
  this.globalObserver.disconnect();
};

simplebar_esm_SimpleBar.initHtmlApi = function () {
  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

  if (typeof MutationObserver !== 'undefined') {
    // Mutation observer to observe dynamically added elements
    this.globalObserver = new MutationObserver(simplebar_esm_SimpleBar.handleMutations);
    this.globalObserver.observe(document, {
      childList: true,
      subtree: true
    });
  } // Taken from jQuery `ready` function
  // Instantiate elements already present on the page


  if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay init
    window.setTimeout(this.initDOMLoadedElements);
  } else {
    document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.addEventListener('load', this.initDOMLoadedElements);
  }
};

simplebar_esm_SimpleBar.handleMutations = function (mutations) {
  mutations.forEach(function (mutation) {
    Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
      if (addedNode.nodeType === 1) {
        if (addedNode.hasAttribute('data-simplebar')) {
          !simplebar_esm_SimpleBar.instances.has(addedNode) && new simplebar_esm_SimpleBar(addedNode, getOptions(addedNode.attributes));
        } else {
          Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
            if (el.getAttribute('data-simplebar') !== 'init' && !simplebar_esm_SimpleBar.instances.has(el)) new simplebar_esm_SimpleBar(el, getOptions(el.attributes));
          });
        }
      }
    });
    Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
      if (removedNode.nodeType === 1) {
        if (removedNode.hasAttribute('[data-simplebar="init"]')) {
          simplebar_esm_SimpleBar.instances.has(removedNode) && simplebar_esm_SimpleBar.instances.get(removedNode).unMount();
        } else {
          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
            simplebar_esm_SimpleBar.instances.has(el) && simplebar_esm_SimpleBar.instances.get(el).unMount();
          });
        }
      }
    });
  });
};

simplebar_esm_SimpleBar.getOptions = getOptions;
/**
 * HTML API
 * Called only in a browser env.
 */

if (can_use_dom_default.a) {
  simplebar_esm_SimpleBar.initHtmlApi();
}

/* harmony default export */ var simplebar_esm = (simplebar_esm_SimpleBar);
//# sourceMappingURL=simplebar.esm.js.map

// CONCATENATED MODULE: ./node_modules/simplebar-vue/dist/simplebar-vue.esm.js
/**
 * simplebar-vue - v1.6.5
 * Vue component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Piers Olenski
 * Under MIT License
 */




//
var script = {
  name: 'simplebar-vue',
  mounted: function mounted() {
    var options = simplebar_esm.getOptions(this.$refs.element.attributes);
    this.SimpleBar = new simplebar_esm(this.$refs.element, options);
  },
  computed: {
    scrollElement: function scrollElement() {
      return this.$refs.scrollElement;
    },
    contentElement: function contentElement() {
      return this.$refs.contentElement;
    }
  }
};

var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    ref: "element"
  }, [_c("div", {
    staticClass: "simplebar-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "simplebar-mask"
  }, [_c("div", {
    staticClass: "simplebar-offset"
  }, [_c("div", {
    ref: "scrollElement",
    staticClass: "simplebar-content-wrapper",
    on: {
      scroll: _vm.$listeners.scroll
    }
  }, [_c("div", {
    ref: "contentElement",
    staticClass: "simplebar-content"
  }, [_vm._t("default")], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "simplebar-placeholder"
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]);
};

var __vue_staticRenderFns__ = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-height-auto-observer-wrapper"
  }, [_c("div", {
    staticClass: "simplebar-height-auto-observer"
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-track simplebar-horizontal"
  }, [_c("div", {
    staticClass: "simplebar-scrollbar"
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "simplebar-track simplebar-vertical"
  }, [_c("div", {
    staticClass: "simplebar-scrollbar"
  })]);
}];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "/Users/adriendenat/Sites/simplebar/packages/simplebar-vue/index.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var simplebar = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

/* harmony default export */ var simplebar_vue_esm = (simplebar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    SfButton: SfButton,
    Simplebar: simplebar_vue_esm
  },
  props: {
    /*
     * Maximum height of visible content
     */
    maxContentHeight: {
      type: String,
      default: ""
    },

    /*
     * Text for button showing content
     */
    showText: {
      type: String,
      default: "Show"
    },

    /*
     * Text for button hiding content
     */
    hideText: {
      type: String,
      default: "Hide"
    }
  },

  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined
    };
  },

  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(".simplebar-content");
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, {
        childList: true
      });
    });
  },

  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=style&index=0&lang=scss&
var SfScrollablevue_type_style_index_0_lang_scss_ = __webpack_require__("7a03");

// CONCATENATED MODULE: ./src/components/molecules/SfScrollable/SfScrollable.vue






/* normalize component */

var SfScrollable_component = normalizeComponent(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  SfScrollablevue_type_template_id_6e41d90c_render,
  SfScrollablevue_type_template_id_6e41d90c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfScrollable = (SfScrollable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=6f9254e2&
var SfSearchBarvue_type_template_id_6f9254e2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-search-bar"},[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-search-bar__input",attrs:{"type":"search","placeholder":_vm.placeholder},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners)),_vm._t("icon",function(){return [_c('SfButton',{staticClass:"sf-search-bar__button sf-button--pure",on:{"click":function($event){return _vm.$emit('click', _vm.value)}}},[(_vm.icon)?_c('span',{staticClass:"sf-search-bar__icon"},[_c('SfIcon',{attrs:{"color":_vm.icon.color,"size":_vm.icon.size,"icon":"search"}})],1):_vm._e()])]})],2)}
var SfSearchBarvue_type_template_id_6f9254e2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=6f9254e2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfSearchBarvue_type_script_lang_js_ = ({
  name: "SfSearchBar",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  inheritAttrs: false,
  props: {
    /**
     * Text for placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },

    /**
     * Value that will be displayed in search bar
     */
    value: {
      type: [Number, String],
      default: null
    },

    /**
     * Object to define icon look. Should have values for color and size
     */
    icon: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    listeners() {
      return { ...this.$listeners,
        input: event => this.$emit("input", event.target.value),
        "keyup.enter": event => this.$emit("input", event.target.value),
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur")
      };
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSearchBar_SfSearchBarvue_type_script_lang_js_ = (SfSearchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=style&index=0&lang=scss&
var SfSearchBarvue_type_style_index_0_lang_scss_ = __webpack_require__("5463");

// CONCATENATED MODULE: ./src/components/molecules/SfSearchBar/SfSearchBar.vue






/* normalize component */

var SfSearchBar_component = normalizeComponent(
  SfSearchBar_SfSearchBarvue_type_script_lang_js_,
  SfSearchBarvue_type_template_id_6f9254e2_render,
  SfSearchBarvue_type_template_id_6f9254e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSearchBar = (SfSearchBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSection/SfSection.vue?vue&type=template&id=2148e9ef&
var SfSectionvue_type_template_id_2148e9ef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-section"},[_vm._t("heading",function(){return [_c('SfHeading',{attrs:{"level":_vm.levelHeading,"title":_vm.titleHeading,"description":_vm.subtitleHeading}})]},null,{ levelHeading: _vm.levelHeading, titleHeading: _vm.titleHeading, subtitleHeading: _vm.subtitleHeading }),_c('div',{staticClass:"sf-section__content"},[_vm._t("default")],2)],2)}
var SfSectionvue_type_template_id_2148e9ef_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSection/SfSection.vue?vue&type=template&id=2148e9ef&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSection/SfSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfSectionvue_type_script_lang_js_ = ({
  name: "SfSection",
  components: {
    SfHeading: SfHeading
  },
  props: {
    /**
     * Heading title
     */
    titleHeading: {
      type: String,
      default: ""
    },

    /**
     * Heading subtitle
     */
    subtitleHeading: {
      type: String,
      default: ""
    },

    /**
     * Heading tag level
     */
    levelHeading: {
      type: Number,
      default: 2
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSection/SfSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSection_SfSectionvue_type_script_lang_js_ = (SfSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSection/SfSection.vue?vue&type=style&index=0&lang=scss&
var SfSectionvue_type_style_index_0_lang_scss_ = __webpack_require__("53b2");

// CONCATENATED MODULE: ./src/components/molecules/SfSection/SfSection.vue






/* normalize component */

var SfSection_component = normalizeComponent(
  SfSection_SfSectionvue_type_script_lang_js_,
  SfSectionvue_type_template_id_2148e9ef_render,
  SfSectionvue_type_template_id_2148e9ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSection = (SfSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=38f5252b&
var SfSelectvue_type_template_id_38f5252b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-select",class:{
    'is-selected': _vm.value || _vm.placeholder,
    'is-required': _vm.required,
    'is-disabled': _vm.disabled,
    'is-invalid': !_vm.valid,
  }},[_c('label',{staticClass:"sf-select__label",attrs:{"for":_vm.label}},[_vm._t("label",function(){return [_vm._v(" "+_vm._s(_vm.label)+" ")]},{"label":_vm.label})],2),_c('select',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-select__dropdown",attrs:{"id":_vm.label,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"change":_vm.changeHandler}},[(_vm.placeholder)?_c('option',{staticClass:"sf-select__placeholder sf-select__option",attrs:{"disabled":"","value":""},domProps:{"selected":!!_vm.placeholder}},[_vm._t("placeholder",null,null,{ placeholder: _vm.placeholder }),_vm._v(" "+_vm._s(_vm.placeholder)+" ")],2):_vm._e(),_vm._t("default")],2),_c('div',{staticClass:"sf-select__error-message"},[_c('transition',{attrs:{"name":"sf-fade"}},[(!_vm.valid)?_vm._t("errorMessage",function(){return [_c('span',[_vm._v(" "+_vm._s(_vm.errorMessage)+" ")])]},null,{ errorMessage: _vm.errorMessage }):_vm._e()],2)],1)])}
var SfSelectvue_type_template_id_38f5252b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSelect/SfSelect.vue?vue&type=template&id=38f5252b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=3926c75f&
var SfSelectOptionvue_type_template_id_3926c75f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('option',{staticClass:"sf-select__option",attrs:{"tabindex":"0"},domProps:{"value":_vm.value}},[_vm._t("default")],2)}
var SfSelectOptionvue_type_template_id_3926c75f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=template&id=3926c75f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfSelectOptionvue_type_script_lang_js_ = ({
  name: "SfSelectOption",
  props: {
    value: {
      type: [String, Number, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSelect/_internal/SfSelectOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfSelectOptionvue_type_script_lang_js_ = (SfSelectOptionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/molecules/SfSelect/_internal/SfSelectOption.vue





/* normalize component */

var SfSelectOption_component = normalizeComponent(
  _internal_SfSelectOptionvue_type_script_lang_js_,
  SfSelectOptionvue_type_template_id_3926c75f_render,
  SfSelectOptionvue_type_template_id_3926c75f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSelectOption = (SfSelectOption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfSelectOption", SfSelectOption);
/* harmony default export */ var SfSelectvue_type_script_lang_js_ = ({
  name: "SfSelect",
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: ""
    },

    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false
    },

    /**
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true
    },

    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    },

    /**
     * Value selected.
     */
    value: {
      type: String,
      default: ""
    },

    /**
     * Adds placeholder
     */
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSelect/SfSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSelect_SfSelectvue_type_script_lang_js_ = (SfSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSelect/SfSelect.vue?vue&type=style&index=0&lang=scss&
var SfSelectvue_type_style_index_0_lang_scss_ = __webpack_require__("4182");

// CONCATENATED MODULE: ./src/components/molecules/SfSelect/SfSelect.vue






/* normalize component */

var SfSelect_component = normalizeComponent(
  SfSelect_SfSelectvue_type_script_lang_js_,
  SfSelectvue_type_template_id_38f5252b_render,
  SfSelectvue_type_template_id_38f5252b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSelect = (SfSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSlidingSection/SfSlidingSection.vue?vue&type=template&id=a76c3968&
var SfSlidingSectionvue_type_template_id_a76c3968_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-sliding-section",class:{ 'is-active': _vm.isActive }},[_c('div',{ref:"static",staticClass:"sf-sliding-section__static"},[_vm._t("static")],2),_c('div',{staticClass:"sf-sliding-section__sliding"},[_c('div',{staticClass:"sf-sliding-section__mobile-bar"},[_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-sliding-section__close",on:{"click":_vm.closeHandler}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px"}})],1)]},null,{ closeHandler: _vm.closeHandler })],2),_vm._t("sliding",null,null,{ isActive: _vm.isActive })],2)])}
var SfSlidingSectionvue_type_template_id_a76c3968_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSlidingSection/SfSlidingSection.vue?vue&type=template&id=a76c3968&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSlidingSection/SfSlidingSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfSlidingSectionvue_type_script_lang_js_ = ({
  name: "SfSlidingSection",
  components: {
    SfIcon: SfIcon,
    SfButton: SfButton
  },

  data() {
    return {
      isActive: false,
      hasScrollLock: false,
      hammer: undefined,
      hasStaticHeight: false
    };
  },

  computed: { ...mapMobileObserver()
  },
  watch: {
    isMobile(mobile) {
      if (!isClient) return;

      if (!mobile) {
        this.isActive = false;
        this.hasScrollLock = false;
        this.hammer.set({
          enable: false
        });
        return;
      }

      this.hasScrollLock = true;
      this.hammer.set({
        enable: true
      });
    },

    isActive(active) {
      if (!isClient) return;

      if (!active) {
        this.hasStaticHeight = false;

        if (!this.isMobile) {
          this.hasScrollLock = false;
          return;
        }

        this.hasScrollLock = true;
        return;
      }

      this.hasScrollLock = false;
    },

    hasScrollLock(scrollLock) {
      if (!isClient) return;

      if (!scrollLock) {
        this.scrollUnlock();
        return;
      }

      this.scrollLock();
    }

  },

  mounted() {
    __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, "c8b5", 7)).then(h => {
      const Hammer = h.default;
      this.hammer = new Hammer(document, {
        enable: false
      }).on("pan", this.touchHandler);
    });
  },

  beforeDestroy() {
    this.scrollUnlock();
    unMapMobileObserver();
    this.hammer.destroy();
  },

  methods: {
    touchPreventDefault(e) {
      e.preventDefault();
    },

    scrollLock() {
      window.scrollTo(0, 0);
      document.body.classList.add("sf-sliding-section--has-scroll-lock");
      window.addEventListener("touchmove", this.touchPreventDefault, {
        passive: false
      });
    },

    scrollUnlock() {
      document.body.classList.remove("sf-sliding-section--has-scroll-lock");
      window.removeEventListener("touchmove", this.touchPreventDefault, {
        passive: false
      });
    },

    touchHandler(event) {
      const {
        direction,
        isFinal
      } = event;

      if (!this.hasStaticHeight && this.$refs.static.offsetHeight > 0) {
        this.hasStaticHeight = true;
        this.$refs.static.style.setProperty("height", `${this.$refs.static.offsetHeight}px`);
      }

      if (!this.isActive && isFinal && direction === 8) {
        this.isActive = true;
      }

      if (this.isActive && isFinal && direction === 16) {
        this.isActive = false;
      }
    },

    closeHandler() {
      this.isActive = false;
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSlidingSection/SfSlidingSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSlidingSection_SfSlidingSectionvue_type_script_lang_js_ = (SfSlidingSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSlidingSection/SfSlidingSection.vue?vue&type=style&index=0&lang=scss&
var SfSlidingSectionvue_type_style_index_0_lang_scss_ = __webpack_require__("23ad");

// CONCATENATED MODULE: ./src/components/molecules/SfSlidingSection/SfSlidingSection.vue






/* normalize component */

var SfSlidingSection_component = normalizeComponent(
  SfSlidingSection_SfSlidingSectionvue_type_script_lang_js_,
  SfSlidingSectionvue_type_template_id_a76c3968_render,
  SfSlidingSectionvue_type_template_id_a76c3968_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSlidingSection = (SfSlidingSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSteps/SfSteps.vue?vue&type=template&id=c5130d30&
var SfStepsvue_type_template_id_c5130d30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-steps"},[_c('div',{staticClass:"sf-steps__header"},[_vm._l((_vm.parsedSteps),function(step){return _vm._t("steps",function(){return [_c('SfButton',{key:step.index,staticClass:"sf-button--pure",class:{
          'sf-steps__step': true,
          'is-done': step.done,
          current: step.current,
          'is-disabled': step.disabled,
        },attrs:{"data-testid":"steps-button"},on:{"click":function($event){return _vm.stepClick(step)}}},[_c('span',{staticClass:"sf-steps__title"},[_vm._v(_vm._s(step.step))])])]},{"stepClick":_vm.stepClick},{ step: step })}),_c('div',{staticClass:"sf-steps__progress",style:(_vm.progress),attrs:{"data-testid":"steps-progress"}})],2),_c('div',{staticClass:"sf-steps__content"},[_vm._t("default")],2)])}
var SfStepsvue_type_template_id_c5130d30_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSteps/SfSteps.vue?vue&type=template&id=c5130d30&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=template&id=8f100102&
var SfStepvue_type_template_id_8f100102_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-step"},[(_vm.active)?_vm._t("default",null,{"index":_vm.index}):_vm._e()],2)}
var SfStepvue_type_template_id_8f100102_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=template&id=8f100102&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfStepvue_type_script_lang_js_ = ({
  name: "SfStep",
  inject: ["stepsData"],
  props: {
    /**
     * Name of the step
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    internalName() {
      if (this.stepsData) {
        return this.stepsData.name;
      }

      return null;
    },

    index() {
      if (this.stepsData) {
        return this.stepsData.index;
      }

      return null;
    },

    active() {
      return this.internalName === this.name;
    }

  },

  created() {
    this.stepsData.updateSteps(this.name);
  }

});
// CONCATENATED MODULE: ./src/components/molecules/SfSteps/_internal/SfStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfStepvue_type_script_lang_js_ = (SfStepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/molecules/SfSteps/_internal/SfStep.vue





/* normalize component */

var SfStep_component = normalizeComponent(
  _internal_SfStepvue_type_script_lang_js_,
  SfStepvue_type_template_id_8f100102_render,
  SfStepvue_type_template_id_8f100102_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfStep = (SfStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSteps/SfSteps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfStep", SfStep);
/* harmony default export */ var SfStepsvue_type_script_lang_js_ = ({
  name: "SfSteps",
  components: {
    SfButton: SfButton
  },
  model: {
    prop: "active",
    event: "change"
  },

  provide() {
    const stepsData = {};
    Object.defineProperty(stepsData, "index", {
      enumerable: false,
      get: () => this.active
    });
    Object.defineProperty(stepsData, "name", {
      enumerable: false,
      get: () => this.steps[this.active]
    });
    Object.defineProperty(stepsData, "updateSteps", {
      enumerable: false,
      value: this.updateSteps
    });
    return {
      stepsData
    };
  },

  props: {
    /**
     * Current active step
     */
    active: {
      type: Number,
      default: 0
    },

    /**
     * Disable clicking on  a past step
     */
    canGoBack: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      steps: []
    };
  },

  computed: {
    parsedSteps() {
      if (this.steps) {
        return this.steps.map((step, index) => ({
          index,
          step,
          done: index < this.active,
          disabled: !this.canGoBack && index < this.active,
          current: index === this.active
        }));
      }

      return [];
    },

    progress() {
      return {
        "--_steps-progress-width": `${100 / this.steps.length}%`,
        "--_steps-progress-active-step": this.active + 1
      };
    }

  },
  methods: {
    updateSteps(step) {
      if (this.steps.includes(step)) return;
      this.steps.push(step);
    },

    stepClick({
      index,
      disabled
    }) {
      if (!disabled) {
        /**
         * Active step changed event
         *
         * @event 'change'
         * @type {Number}
         */
        this.$emit("change", index);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSteps/SfSteps.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSteps_SfStepsvue_type_script_lang_js_ = (SfStepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSteps/SfSteps.vue?vue&type=style&index=0&lang=scss&
var SfStepsvue_type_style_index_0_lang_scss_ = __webpack_require__("de2c");

// CONCATENATED MODULE: ./src/components/molecules/SfSteps/SfSteps.vue






/* normalize component */

var SfSteps_component = normalizeComponent(
  SfSteps_SfStepsvue_type_script_lang_js_,
  SfStepsvue_type_template_id_c5130d30_render,
  SfStepsvue_type_template_id_c5130d30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSteps = (SfSteps_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSticky/SfSticky.vue?vue&type=template&id=1744a2ed&
var SfStickyvue_type_template_id_1744a2ed_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sticky",class:{
    'sf-sticky--sticky': _vm.isSticky,
    'sf-sticky--bound': _vm.isBound,
  }},[_vm._t("default")],2)}
var SfStickyvue_type_template_id_1744a2ed_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfSticky/SfSticky.vue?vue&type=template&id=1744a2ed&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfSticky/SfSticky.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfStickyvue_type_script_lang_js_ = ({
  name: "SfSticky",

  data() {
    return {
      top: 0,
      height: 0,
      width: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      parentTop: 0,
      parentHeight: 0,
      scrollY: 0,
      isSticky: false,
      isBound: false
    };
  },

  computed: {
    isIE() {
      if (typeof window === "undefined") return;
      const ua = window.navigator.userAgent;
      return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/ ") > -1;
    },

    maxWidth() {
      return this.width - (this.padding.right + this.padding.left);
    },

    scrollBegin() {
      return this.parentTop + this.top;
    },

    scrollEnd() {
      return this.parentHeight + this.parentTop - this.height - this.padding.bottom;
    }

  },
  watch: {
    scrollY() {
      this.toggleSticky();
      this.toggleBound();
    },

    parentTop() {
      this.$el.style.bottom = "";
      this.$el.parentElement.style.paddingTop = "";
      this.isSticky = false;
      this.isBound = false;
      this.computedPadding();
      this.parentHeight = this.$el.parentElement.offsetHeight;
    },

    width(value) {
      this.$el.style.maxWidth = `${value}px`;
    },

    isSticky(state) {
      if (state) {
        if (this.$el.nextSibling) {
          this.$el.parentElement.style.paddingTop = `${this.height + this.padding.top}px`;
        }
      } else {
        if (this.$el.nextSibling && this.scrollY <= this.parentTop + this.top) {
          this.$el.parentElement.style.paddingTop = "";
        }
      }
    },

    isBound(state) {
      if (state) {
        this.$el.style.bottom = `${this.padding.bottom}px`; //if parent have padding
      } else {
        this.$el.style.bottom = "";
      }
    }

  },
  mounted: function () {
    if (!this.isIE) return;
    this.$el.parentElement.style.position = "relative";
    this.padding = this.computedPadding();
    this.parentTop = this.$el.parentElement.offsetTop;
    this.top = this.$el.offsetTop;
    this.parentHeight = this.$el.parentElement.offsetHeight;
    this.height = this.$el.offsetHeight;
    this.width = this.$el.parentElement.offsetWidth;
    window.addEventListener("scroll", this.scrollHandler, {
      passive: true
    });
    window.addEventListener("resize", this.resizeHandler, {
      passive: true
    });
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    scrollHandler() {
      this.scrollY = Math.ceil(window.pageYOffset);
    },

    resizeHandler() {
      this.width = this.$el.parentElement.offsetWidth;
      this.parentTop = this.$el.parentElement.offsetTop;
    },

    toggleSticky() {
      if (this.scrollY >= this.parentTop + this.top && this.scrollY < this.scrollEnd) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },

    toggleBound() {
      if (this.scrollY >= this.scrollEnd && this.scrollBegin < this.scrollEnd) {
        this.isBound = true;
      } else {
        this.isBound = false;
      }
    },

    computedPadding() {
      const computed = window.getComputedStyle(this.$el.parentElement);
      return {
        top: parseInt(computed["padding-top"], 10),
        right: parseInt(computed["padding-right"], 10),
        bottom: parseInt(computed["padding-bottom"], 10),
        left: parseInt(computed["padding-left"], 10)
      };
    }

  }
});
// CONCATENATED MODULE: ./src/components/molecules/SfSticky/SfSticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSticky_SfStickyvue_type_script_lang_js_ = (SfStickyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfSticky/SfSticky.vue?vue&type=style&index=0&lang=scss&
var SfStickyvue_type_style_index_0_lang_scss_ = __webpack_require__("2977");

// CONCATENATED MODULE: ./src/components/molecules/SfSticky/SfSticky.vue






/* normalize component */

var SfSticky_component = normalizeComponent(
  SfSticky_SfStickyvue_type_script_lang_js_,
  SfStickyvue_type_template_id_1744a2ed_render,
  SfStickyvue_type_template_id_1744a2ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSticky = (SfSticky_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfTile/SfTile.vue?vue&type=template&id=01feb7d6&
var SfTilevue_type_template_id_01feb7d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfLink',{staticClass:"sf-tile",style:(_vm.style),attrs:{"link":_vm.link}},[_vm._t("title",function(){return [(_vm.title)?_c('SfHeading',{staticClass:"sf-tile__title",attrs:{"level":3,"title":_vm.title}}):_vm._e()]},null,{ title: _vm.title })],2)}
var SfTilevue_type_template_id_01feb7d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/molecules/SfTile/SfTile.vue?vue&type=template&id=01feb7d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/molecules/SfTile/SfTile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfTilevue_type_script_lang_js_ = ({
  name: "SfTile",
  components: {
    SfHeading: SfHeading,
    SfLink: SfLink
  },
  props: {
    /**
     * Tile title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Tile background image
     */
    background: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link title
     */
    link: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isMobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    style() {
      if (typeof this.background === String) {
        return {
          background: `url('${this.background}')`
        };
      } else {
        return {
          background: `url(${this.background[this.isMobileView ? "mobile" : "desktop"]})`
        };
      }
    }

  },

  mounted() {
    this.isMobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/molecules/SfTile/SfTile.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTile_SfTilevue_type_script_lang_js_ = (SfTilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/molecules/SfTile/SfTile.vue?vue&type=style&index=0&lang=scss&
var SfTilevue_type_style_index_0_lang_scss_ = __webpack_require__("8884");

// CONCATENATED MODULE: ./src/components/molecules/SfTile/SfTile.vue






/* normalize component */

var SfTile_component = normalizeComponent(
  SfTile_SfTilevue_type_script_lang_js_,
  SfTilevue_type_template_id_01feb7d6_render,
  SfTilevue_type_template_id_01feb7d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTile = (SfTile_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5cc5bf07&
var SfAccordionvue_type_template_id_5cc5bf07_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion",class:{ 'has-chevron': _vm.showChevron }},[_vm._t("default")],2)}
var SfAccordionvue_type_template_id_5cc5bf07_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=template&id=5cc5bf07&

// CONCATENATED MODULE: ./src/utilities/helpers/deprecation-warning.js
const deprecationWarning = (componentName, msg) => {
   false && false;
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=087ca45b&
var SfAccordionItemvue_type_template_id_087ca45b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-accordion-item"},[_vm._t("header",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-accordion-item__header",class:{ 'is-open': _vm.isOpen },attrs:{"aria-pressed":_vm.isOpen.toString(),"aria-expanded":_vm.isOpen.toString()},on:{"click":_vm.accordionClick}},[_vm._v(" "+_vm._s(_vm.header)+" "),_vm._t("additional-info"),_c('SfChevron',{staticClass:"sf-accordion-item__chevron",class:{ 'sf-chevron--right': !_vm.isOpen },attrs:{"tabindex":"0"}})],2)]},null,{
      header: _vm.header,
      isOpen: _vm.isOpen,
      accordionClick: _vm.accordionClick,
      showChevron: _vm.$parent.showChevron,
    }),_c('SfExpand',{attrs:{"transition":_vm.$parent.transition}},[(_vm.isOpen)?_c('div',[_c('div',{staticClass:"sf-accordion-item__content"},[_vm._t("default")],2)]):_vm._e()])],2)}
var SfAccordionItemvue_type_template_id_087ca45b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=template&id=087ca45b&

// CONCATENATED MODULE: ./src/utilities/transitions/component/SfExpand.js
/* harmony default export */ var SfExpand = ({
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "sf-expand"
    },
    group: {
      type: Boolean,
      default: false
    }
  },

  render(createElement, {
    data,
    children,
    props
  }) {
    const isOff = props.transition === false;
    const listeners = {
      beforeEnter: function (el) {
        el.style.setProperty("height", "auto");
      },
      enter: function (el) {
        el.style.setProperty("height", "auto");
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", "0");
        requestAnimationFrame(() => {
          el.style.setProperty("height", height);
        });
      },
      leave: function (el) {
        const height = getComputedStyle(el).height;
        el.style.setProperty("height", height);
        requestAnimationFrame(() => {
          el.style.setProperty("height", "0");
        });
      }
    };
    return createElement("transition", { ...data,
      attrs: {
        name: isOff ? "" : props.transition
      },
      on: props.transition === "sf-expand" && listeners
    }, children);
  }

});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfAccordionItemvue_type_script_lang_js_ = ({
  name: "SfAccordionItem",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfChevron: SfChevron,
    SfButton: SfButton,
    SfExpand: SfExpand
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfAccordionItemvue_type_script_lang_js_ = (SfAccordionItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue?vue&type=style&index=0&lang=scss&
var SfAccordionItemvue_type_style_index_0_lang_scss_ = __webpack_require__("0d40");

// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/_internal/SfAccordionItem.vue






/* normalize component */

var SfAccordionItem_component = normalizeComponent(
  _internal_SfAccordionItemvue_type_script_lang_js_,
  SfAccordionItemvue_type_template_id_087ca45b_render,
  SfAccordionItemvue_type_template_id_087ca45b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfAccordionItem = (SfAccordionItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfAccordionItem", SfAccordionItem);
/* harmony default export */ var SfAccordionvue_type_script_lang_js_ = ({
  name: "SfAccordion",
  props: {
    /**
     * Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.
     */
    open: {
      type: [String, Array],
      default: ""
    },

    /**
     * Opens the first accordion item if set to "true"
     * @deprecated will be removed in 1.0.0 use open prop instead
     */
    firstOpen: {
      type: Boolean,
      default: false
    },

    /**
     * Allows to open multiple accordion items if set to "true"
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Overlay transition effect
     */
    transition: {
      type: String,
      default: "sf-expand"
    },
    showChevron: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      openHeader: this.open
    };
  },

  mounted() {
    this.$on("toggle", this.toggleHandler);
    this.setAsOpen();
  },

  updated() {
    this.setAsOpen();
  },

  methods: {
    setAsOpen() {
      if (this.$children && this.$children.length) {
        // TODO remove in 1.0.0 ->
        if (this.firstOpen) {
          this.$children[0].isOpen = this.firstOpen;
          deprecationWarning(this.$options.name, "Prop 'firstOpen' has been deprecated and will be removed in v1.0.0. Use 'open' instead.");
          return;
        } // <- TODO remove in 1.0.0


        if (this.open === "all") {
          this.multiple = true;
          this.openHeader = this.$children.map(child => child.header);
        }

        this.$children.forEach(child => {
          child.isOpen = Array.isArray(this.openHeader) ? this.openHeader.includes(child.header) : this.openHeader === child.header;
        });
      }
    },

    toggleHandler(slotId) {
      if (!this.multiple && !Array.isArray(this.openHeader)) {
        this.$children.forEach(child => {
          if (child._uid === slotId) {
            child.isOpen = !child.isOpen;
            this.openHeader = child.header;
          } else {
            child.isOpen = false;
          }
        });
      } else {
        const clickedHeader = this.$children.find(child => {
          return child._uid === slotId;
        });
        clickedHeader.isOpen = !clickedHeader.isOpen;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAccordion_SfAccordionvue_type_script_lang_js_ = (SfAccordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfAccordion/SfAccordion.vue?vue&type=style&index=0&lang=scss&
var SfAccordionvue_type_style_index_0_lang_scss_ = __webpack_require__("ec3e");

// CONCATENATED MODULE: ./src/components/organisms/SfAccordion/SfAccordion.vue






/* normalize component */

var SfAccordion_component = normalizeComponent(
  SfAccordion_SfAccordionvue_type_script_lang_js_,
  SfAccordionvue_type_template_id_5cc5bf07_render,
  SfAccordionvue_type_template_id_5cc5bf07_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfAccordion = (SfAccordion_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=19f917d2&
var SfBannerGridvue_type_template_id_19f917d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-banner-grid"},[(_vm.bannerGrid === 1)?[_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col"},[_vm._t("banner-A")],2),_c('div',{staticClass:"sf-banner-grid__col sf-banner-grid__col--medium"},[_vm._t("banner-B")],2),_c('div',{staticClass:"sf-banner-grid__col"},[_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col"},[_vm._t("banner-C")],2)]),_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col"},[_vm._t("banner-D")],2)])])])]:_vm._e(),(_vm.bannerGrid === 2)?[_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col sf-banner-grid__col--small"},[_vm._t("banner-A")],2),_c('div',{staticClass:"sf-banner-grid__col"},[_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[_vm._t("banner-B")],2),_c('div',{staticClass:"sf-banner-grid__col sf-banner-grid__col--higher"},[_vm._t("banner-C")],2)]),_c('div',{staticClass:"sf-banner-grid__row"},[_c('div',{staticClass:"sf-banner-grid__col"},[_vm._t("banner-D")],2)])])])]:_vm._e()],2)}
var SfBannerGridvue_type_template_id_19f917d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=19f917d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfBannerGridvue_type_script_lang_js_ = ({
  name: "SfBannerGrid",
  props: {
    bannerGrid: {
      type: Number,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBannerGrid_SfBannerGridvue_type_script_lang_js_ = (SfBannerGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=style&index=0&lang=scss&
var SfBannerGridvue_type_style_index_0_lang_scss_ = __webpack_require__("7814");

// CONCATENATED MODULE: ./src/components/organisms/SfBannerGrid/SfBannerGrid.vue






/* normalize component */

var SfBannerGrid_component = normalizeComponent(
  SfBannerGrid_SfBannerGridvue_type_script_lang_js_,
  SfBannerGridvue_type_template_id_19f917d2_render,
  SfBannerGridvue_type_template_id_19f917d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBannerGrid = (SfBannerGrid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=11055614&
var SfBottomNavigationvue_type_template_id_11055614_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-navigation"},[_vm._t("default")],2)}
var SfBottomNavigationvue_type_template_id_11055614_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=11055614&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=bb5c57da&
var SfBottomNavigationItemvue_type_template_id_bb5c57da_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-bottom-navigation-item",class:{
    'is-active': _vm.isActive,
    'is-floating': _vm.isFloating,
    center: !_vm.icon || !_vm.label,
  }},_vm.$listeners),[_vm._t("icon",function(){return [(_vm.isFloating)?_c('SfCircleIcon',{attrs:{"icon":_vm.icon,"icon-color":"white","icon-size":"28px","aria-label":_vm.label}}):(_vm.icon)?_c('SfButton',{staticClass:"sf-button--pure sf-bottom-navigation-item__icon",attrs:{"aria-label":_vm.label}},[_c('SfIcon',{attrs:{"icon":_vm.currentIcon,"size":_vm.iconSize}})],1):_vm._e()]},null,{ icon: _vm.icon, iconActive: _vm.iconActive, iconSize: _vm.iconSize, isFloating: _vm.isFloating }),_vm._t("label",function(){return [(_vm.label)?_c('div',{staticClass:"sf-bottom-navigation-item__label",class:{
        'has-margin': _vm.icon,
      }},[_vm._v(" "+_vm._s(_vm.label)+" ")]):_vm._e()]},null,{ label: _vm.label })],2)}
var SfBottomNavigationItemvue_type_template_id_bb5c57da_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=bb5c57da&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfBottomNavigationItemvue_type_script_lang_js_ = ({
  name: "SfBottomNavigationItem",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfCircleIcon: SfCircleIcon,
    SfIcon: SfIcon,
    SfButton: SfButton
  },
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconActive: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "20px"
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfBottomNavigationItemvue_type_script_lang_js_ = (SfBottomNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue





/* normalize component */

var SfBottomNavigationItem_component = normalizeComponent(
  _internal_SfBottomNavigationItemvue_type_script_lang_js_,
  SfBottomNavigationItemvue_type_template_id_bb5c57da_render,
  SfBottomNavigationItemvue_type_template_id_bb5c57da_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBottomNavigationItem = (SfBottomNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfBottomNavigationItem", SfBottomNavigationItem);
/* harmony default export */ var SfBottomNavigationvue_type_script_lang_js_ = ({
  name: "SfBottomNavigation"
});
// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_ = (SfBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=style&index=0&lang=scss&
var SfBottomNavigationvue_type_style_index_0_lang_scss_ = __webpack_require__("96c5");

// CONCATENATED MODULE: ./src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue






/* normalize component */

var SfBottomNavigation_component = normalizeComponent(
  SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_,
  SfBottomNavigationvue_type_template_id_11055614_render,
  SfBottomNavigationvue_type_template_id_11055614_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfBottomNavigation = (SfBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=template&id=7fc3bf7f&
var SfCarouselvue_type_template_id_7fc3bf7f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-carousel"},[_c('div',{ref:"controls",staticClass:"sf-carousel__controls"},[_vm._t("prev",function(){return [_c('SfArrow',{attrs:{"aria-label":"previous","data-testid":"carousel-prev-button"},on:{"click":function($event){return _vm.go('prev')}}})]},null,{ go: function () { return _vm.go('prev'); } }),_vm._t("next",function(){return [_c('SfArrow',{staticClass:"sf-arrow--right",attrs:{"aria-label":"next","data-testid":"carousel-next-button"},on:{"click":function($event){return _vm.go('next')}}})]},null,{ go: function () { return _vm.go('next'); } })],2),_c('div',{staticClass:"sf-carousel__wrapper"},[_c('div',{ref:"glide",staticClass:"glide"},[_c('div',{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[_c('ul',{staticClass:"glide__slides sf-carousel__slides"},[_vm._t("default")],2)])])])])}
var SfCarouselvue_type_template_id_7fc3bf7f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=template&id=7fc3bf7f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=template&id=7a50370a&
var SfCarouselItemvue_type_template_id_7a50370a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-carousel-item glide__slide"},[_vm._t("default")],2)}
var SfCarouselItemvue_type_template_id_7a50370a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=template&id=7a50370a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfCarouselItemvue_type_script_lang_js_ = ({
  name: "SfCarouselItem"
});
// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfCarouselItemvue_type_script_lang_js_ = (SfCarouselItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/_internal/SfCarouselItem.vue





/* normalize component */

var SfCarouselItem_component = normalizeComponent(
  _internal_SfCarouselItemvue_type_script_lang_js_,
  SfCarouselItemvue_type_template_id_7a50370a_render,
  SfCarouselItemvue_type_template_id_7a50370a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCarouselItem = (SfCarouselItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfCarouselItem", SfCarouselItem);
/* harmony default export */ var SfCarouselvue_type_script_lang_js_ = ({
  name: "SfCarousel",
  components: {
    SfArrow: SfArrow
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    settings: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      glide: null,
      defaultSettings: {
        type: "carousel",
        rewind: true,
        perView: 4,
        slidePerPage: true,
        gap: 0,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50
            }
          }
        }
      }
    };
  },

  computed: {
    mergedOptions() {
      let breakpoints = { ...this.defaultSettings.breakpoints
      };

      if (this.settings.breakpoints) {
        breakpoints = { ...breakpoints,
          ...this.settings.breakpoints
        };
      }

      return { ...this.defaultSettings,
        ...this.settings,
        breakpoints: breakpoints
      };
    }

  },
  mounted: function () {
    this.$nextTick(() => {
      if (!this.$slots.default) return;
      const glide = new glide_esm(this.$refs.glide, this.mergedOptions);
      const size = this.$slots.default.filter(slot => slot.tag).length;

      if (size <= glide.settings.perView) {
        glide.settings.perView = size;
        glide.settings.rewind = false;
        this.$refs.controls.style.display = "none";
      }

      glide.mount();
      glide.on("run.before", move => {
        const {
          slidePerPage,
          rewind,
          type
        } = this.mergedOptions;
        if (!slidePerPage) return;
        const {
          perView
        } = glide.settings;
        if (!perView > 1) return;
        const {
          direction
        } = move;
        let page, newIndex;

        switch (direction) {
          case ">":
          case "<":
            page = Math.ceil(glide.index / perView);
            newIndex = page * perView + (direction === ">" ? perView : -perView);

            if (newIndex >= size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = 0;
              }
            } else if (newIndex < 0 || newIndex + perView > size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = size - perView;
              }
            }

            move.direction = "=";
            move.steps = newIndex;
        }
      });
      this.glide = glide;
    });
  },
  methods: {
    go(direct) {
      if (!this.glide) return;

      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;

        case "next":
          this.glide.go(">");
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCarousel_SfCarouselvue_type_script_lang_js_ = (SfCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfCarousel/SfCarousel.vue?vue&type=style&index=0&lang=scss&
var SfCarouselvue_type_style_index_0_lang_scss_ = __webpack_require__("6b8d");

// CONCATENATED MODULE: ./src/components/organisms/SfCarousel/SfCarousel.vue






/* normalize component */

var SfCarousel_component = normalizeComponent(
  SfCarousel_SfCarouselvue_type_script_lang_js_,
  SfCarouselvue_type_template_id_7fc3bf7f_render,
  SfCarouselvue_type_template_id_7fc3bf7f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCarousel = (SfCarousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=31d9c80a&
var SfCollectedProductvue_type_template_id_31d9c80a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-collected-product"},[_c('div',{staticClass:"sf-collected-product__main"},[_c('div',{staticClass:"sf-collected-product__details"},[_vm._t("title",function(){return [_c('div',{staticClass:"sf-collected-product__title-wraper"},[_c(_vm.componentIs,{tag:"component",staticClass:"sf-collected-product__title",attrs:{"link":_vm.link ? _vm.link : ''}},[_vm._v(" "+_vm._s(_vm.title)+" ")])],1)]},null,{ title: _vm.title }),_vm._t("price",function(){return [(_vm.regularPrice)?_c('SfPrice',{attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_c('div',{staticClass:"sf-collected-product__configuration"},[_vm._t("configuration",function(){return [_c('SfProperty',{attrs:{"name":"Size","value":"XS"}}),_c('SfProperty',{attrs:{"name":"Color","value":"white"}})]})],2)],2),_c('div',{staticClass:"sf-collected-product__actions"},[_vm._t("actions",function(){return [_c('SfButton',{staticClass:"sf-button--text desktop-only"},[_vm._v("Save for later")])]})],2)]),_c('div',{staticClass:"sf-collected-product__aside"},[_vm._t("image",function(){return [_c('SfImage',{staticClass:"sf-collected-product__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})]},null,{ image: _vm.image, title: _vm.title }),_vm._t("input",function(){return [_c('div',{staticClass:"sf-collected-product__quantity-wrapper"},[_c('SfQuantitySelector',{staticClass:"sf-collected-product__quantity-selector",attrs:{"qty":_vm.qty},on:{"input":function($event){return _vm.$emit('input', $event)}}})],1)]})],2),_vm._t("remove",function(){return [_c('SfCircleIcon',{staticClass:"sf-circle-icon--small sf-collected-product__remove sf-collected-product__remove--circle-icon",attrs:{"icon":"cross","aria-label":"Remove"},on:{"click":_vm.removeHandler}}),_c('SfButton',{staticClass:"sf-button--text sf-collected-product__remove sf-collected-product__remove--text",on:{"click":_vm.removeHandler}},[_vm._v("Remove")])]},null,{ removeHandler: _vm.removeHandler }),_vm._t("more-actions",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-collected-product__more-actions smartphone-only",attrs:{"aria-label":"More actions"}},[_c('SfIcon',{attrs:{"icon":"more","size":"18px"}})],1)]})],2)}
var SfCollectedProductvue_type_template_id_31d9c80a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=template&id=31d9c80a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfCollectedProductvue_type_script_lang_js_ = ({
  name: "SfCollectedProduct",
  components: {
    SfButton: SfButton,
    SfIcon: SfIcon,
    SfImage: SfImage,
    SfCircleIcon: SfCircleIcon,
    SfPrice: SfPrice,
    SfQuantitySelector: SfQuantitySelector,
    SfLink: SfLink,
    SfProperty: SfProperty
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    },

    /**
     * Link to product
     */
    link: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    componentIs() {
      return this.link ? "SfLink" : "div";
    }

  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_ = (SfCollectedProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue?vue&type=style&index=0&lang=scss&
var SfCollectedProductvue_type_style_index_0_lang_scss_ = __webpack_require__("c2f9");

// CONCATENATED MODULE: ./src/components/organisms/SfCollectedProduct/SfCollectedProduct.vue






/* normalize component */

var SfCollectedProduct_component = normalizeComponent(
  SfCollectedProduct_SfCollectedProductvue_type_script_lang_js_,
  SfCollectedProductvue_type_template_id_31d9c80a_render,
  SfCollectedProductvue_type_template_id_31d9c80a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfCollectedProduct = (SfCollectedProduct_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/SfContentPages.vue?vue&type=template&id=9f16d224&
var SfContentPagesvue_type_template_id_9f16d224_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-content-pages"},[_c('SfBar',{staticClass:"smartphone-only",attrs:{"back":_vm.isActive,"title":_vm.active ? _vm.active : _vm.title},on:{"click:back":function($event){return _vm.updatePage()}}}),_c('section',{staticClass:"sf-content-pages__section",class:{ 'is-active': _vm.isActive }},[_c('div',{staticClass:"sf-content-pages__sidebar"},[_c('h1',{staticClass:"sf-content-pages__title desktop-only"},[_vm._v(_vm._s(_vm.title))]),_vm._l((_vm.categories),function(category,key){return _c('div',{key:((category.title) + "-" + key)},[(category.title)?_c('h2',{staticClass:"sf-content-pages__category-title"},[_vm._v(" "+_vm._s(category.title)+" ")]):_vm._e(),_c('SfList',{staticClass:"sf-content-pages__list"},_vm._l((category.items),function(page,itemKey){return _c('SfListItem',{key:((page.title) + "-" + itemKey),staticClass:"sf-content-pages__list-item"},[_vm._t("menu-item",function(){return [_c('SfMenuItem',{staticClass:"sf-content-pages__menu",class:{ 'is-active': page.title === _vm.active },attrs:{"label":page.title},on:{"click":function($event){return _vm.updatePage(page.title)}},scopedSlots:_vm._u([{key:"icon",fn:function(){return [(page.icon)?_c('SfIcon',{staticClass:"sf-menu-item__icon",attrs:{"icon":page.icon,"color":"#686d7d","size":"xxs"}}):_vm._e()]},proxy:true}],null,true)})]},null,{ updatePage: _vm.updatePage, page: page, active: _vm.active })],2)}),1)],1)})],2),_c('div',{staticClass:"sf-content-pages__content"},[_vm._t("default")],2)])],1)}
var SfContentPagesvue_type_template_id_9f16d224_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/SfContentPages.vue?vue&type=template&id=9f16d224&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/_internal/SfContentPage.vue?vue&type=template&id=701e6d7e&
var SfContentPagevue_type_template_id_701e6d7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isActive)?_c('div',{staticClass:"sf-content-page"},[_vm._t("default")],2):_vm._e()}
var SfContentPagevue_type_template_id_701e6d7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentPage.vue?vue&type=template&id=701e6d7e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/_internal/SfContentPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfContentPagevue_type_script_lang_js_ = ({
  name: "SfContentPage",
  props: {
    /**
     * Page title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Page nav icon
     */
    icon: {
      type: [String, Array],
      default: ""
    }
  },
  inject: ["provided"],
  computed: {
    isActive() {
      return this.provided.active === this.title;
    }

  },

  mounted() {
    const item = {
      title: this.title,
      icon: this.icon
    };
    this.$parent.items.push(item);
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfContentPagevue_type_script_lang_js_ = (SfContentPagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentPage.vue





/* normalize component */

var SfContentPage_component = normalizeComponent(
  _internal_SfContentPagevue_type_script_lang_js_,
  SfContentPagevue_type_template_id_701e6d7e_render,
  SfContentPagevue_type_template_id_701e6d7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfContentPage = (SfContentPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/_internal/SfContentCategory.vue?vue&type=template&id=29e15790&
var SfContentCategoryvue_type_template_id_29e15790_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-content-category"},[_vm._t("default")],2)}
var SfContentCategoryvue_type_template_id_29e15790_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentCategory.vue?vue&type=template&id=29e15790&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/_internal/SfContentCategory.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfContentCategoryvue_type_script_lang_js_ = ({
  name: "SfContentCategory",
  props: {
    /**
     * Category title
     */
    title: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      items: []
    };
  },

  mounted() {
    const item = {
      title: this.title,
      items: this.items
    };
    this.$parent.items.push(item);
  },

  methods: {}
});
// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfContentCategoryvue_type_script_lang_js_ = (SfContentCategoryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/_internal/SfContentCategory.vue





/* normalize component */

var SfContentCategory_component = normalizeComponent(
  _internal_SfContentCategoryvue_type_script_lang_js_,
  SfContentCategoryvue_type_template_id_29e15790_render,
  SfContentCategoryvue_type_template_id_29e15790_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfContentCategory = (SfContentCategory_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfList/SfList.vue?vue&type=template&id=6ec0fbb5&
var SfListvue_type_template_id_6ec0fbb5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"sf-list"},[_vm._t("default")],2)}
var SfListvue_type_template_id_6ec0fbb5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfList/SfList.vue?vue&type=template&id=6ec0fbb5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=11c10ce9&
var SfListItemvue_type_template_id_11c10ce9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"sf-list__item"},[_vm._t("default")],2)}
var SfListItemvue_type_template_id_11c10ce9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=template&id=11c10ce9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SfListItemvue_type_script_lang_js_ = ({
  name: "SfListItem"
});
// CONCATENATED MODULE: ./src/components/organisms/SfList/_internal/SfListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfListItemvue_type_script_lang_js_ = (SfListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfList/_internal/SfListItem.vue





/* normalize component */

var SfListItem_component = normalizeComponent(
  _internal_SfListItemvue_type_script_lang_js_,
  SfListItemvue_type_template_id_11c10ce9_render,
  SfListItemvue_type_template_id_11c10ce9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfListItem = (SfListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfListItem", SfListItem);
/* harmony default export */ var SfListvue_type_script_lang_js_ = ({
  name: "SfList"
});
// CONCATENATED MODULE: ./src/components/organisms/SfList/SfList.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfList_SfListvue_type_script_lang_js_ = (SfListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfList/SfList.vue?vue&type=style&index=0&lang=scss&
var SfListvue_type_style_index_0_lang_scss_ = __webpack_require__("33be");

// CONCATENATED MODULE: ./src/components/organisms/SfList/SfList.vue






/* normalize component */

var SfList_component = normalizeComponent(
  SfList_SfListvue_type_script_lang_js_,
  SfListvue_type_template_id_6ec0fbb5_render,
  SfListvue_type_template_id_6ec0fbb5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfList = (SfList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfContentPages/SfContentPages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfContentPage", SfContentPage);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfContentCategory", SfContentCategory);





/* harmony default export */ var SfContentPagesvue_type_script_lang_js_ = ({
  name: "SfContentPages",
  components: {
    SfList: SfList,
    SfMenuItem: SfMenuItem,
    SfIcon: SfIcon,
    SfBar: SfBar
  },
  props: {
    /**
     * Pages title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Active page
     */
    active: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      items: []
    };
  },

  computed: { ...mapMobileObserver(),

    categories() {
      const items = [];
      const orphans = {
        items: []
      };

      const reduceOrphans = () => {
        if (orphans.items.length > 0) {
          const category = { ...orphans
          };
          items.push(category);
          orphans.items = [];
        }
      };

      this.items.forEach(item => {
        if (item.items) {
          reduceOrphans();
          const category = { ...item
          };
          items.push(category);
          return;
        }

        orphans.items.push(item);
      });
      reduceOrphans();
      return items;
    },

    isActive() {
      return this.active.length > 0;
    }

  },

  provide() {
    const provided = {};
    Object.defineProperty(provided, "active", {
      get: () => this.active
    });
    return {
      provided
    };
  },

  watch: {
    isMobile(mobile) {
      if (mobile) {
        this.$emit("click:change", "");
        return;
      }

      this.$emit("click:change", this.categories[0].items[0].title);
    }

  },

  beforeDestroy() {
    unMapMobileObserver();
  },

  methods: {
    updatePage(title) {
      /**
       * Active page updated event
       *
       * @event click:change
       * @type String
       */
      this.$emit("click:change", title);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/SfContentPages.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfContentPages_SfContentPagesvue_type_script_lang_js_ = (SfContentPagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfContentPages/SfContentPages.vue?vue&type=style&index=0&lang=scss&
var SfContentPagesvue_type_style_index_0_lang_scss_ = __webpack_require__("3f24");

// CONCATENATED MODULE: ./src/components/organisms/SfContentPages/SfContentPages.vue






/* normalize component */

var SfContentPages_component = normalizeComponent(
  SfContentPages_SfContentPagesvue_type_script_lang_js_,
  SfContentPagesvue_type_template_id_9f16d224_render,
  SfContentPagesvue_type_template_id_9f16d224_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfContentPages = (SfContentPages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=53c75cee&
var SfFootervue_type_template_id_53c75cee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"sf-footer"},[_c('div',{staticClass:"sf-footer__container",style:({ 'grid-template-columns': ' 1fr'.repeat(_vm.column) })},[_vm._t("default")],2)])}
var SfFootervue_type_template_id_53c75cee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfFooter/SfFooter.vue?vue&type=template&id=53c75cee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=300df76e&
var SfFooterColumnvue_type_template_id_300df76e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-footer-column"},[_c('button',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-footer-column__title",on:{"click":function($event){return _vm.toggle(_vm.title)}}},[_vm._v(" "+_vm._s(_vm.title)+" "),_c('div',{staticClass:"sf-footer-column__chevron"},[_c('SfChevron',{class:{ 'sf-chevron--top': _vm.open }})],1)]),_c('transition',{attrs:{"name":"sf-fade"}},[(_vm.open)?_c('div',{staticClass:"sf-footer-column__content"},[_vm._t("default")],2):_vm._e()])],1)}
var SfFooterColumnvue_type_template_id_300df76e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=template&id=300df76e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfFooterColumnvue_type_script_lang_js_ = ({
  name: "SfFooterColumn",
  directives: {
    focus: focus_directive_focus
  },
  components: {
    SfChevron: SfChevron
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    open() {
      return this.$parent.isOpen.includes(this.title);
    }

  },

  mounted() {
    this.$parent.items.push(this.title);
  },

  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfFooter/_internal/SfFooterColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfFooterColumnvue_type_script_lang_js_ = (SfFooterColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfFooter/_internal/SfFooterColumn.vue





/* normalize component */

var SfFooterColumn_component = normalizeComponent(
  _internal_SfFooterColumnvue_type_script_lang_js_,
  SfFooterColumnvue_type_template_id_300df76e_render,
  SfFooterColumnvue_type_template_id_300df76e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfFooterColumn = (SfFooterColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfFooterColumn", SfFooterColumn);
/* harmony default export */ var SfFootervue_type_script_lang_js_ = ({
  name: "SfFooter",
  props: {
    /**
     * Number of footer columns
     */
    column: {
      type: Number,
      default: 4
    },

    /**
     * Multiple footer columns open at the same time on mobile
     */
    multiple: {
      type: Boolean,
      default: true
    },

    /**
     * Footer columns open on mobile
     */
    open: {
      type: [String, Array],
      default: () => []
    }
  },

  data() {
    return {
      isOpen: [],
      items: []
    };
  },

  computed: { ...mapMobileObserver()
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.isOpen = mobile ? [...this.open] : [...this.items];
        });
      },

      immediate: true
    }
  },

  beforeDestroy() {
    unMapMobileObserver();
  },

  methods: {
    toggle(payload) {
      if (!this.isMobile) return;

      if (!this.multiple) {
        this.isOpen = [payload];
      } else if (this.isOpen.includes(payload)) {
        this.isOpen = this.isOpen.filter(item => item !== payload);
      } else {
        this.isOpen.push(payload);
      }

      this.$emit("change", this.isOpen);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfFooter/SfFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfFooter_SfFootervue_type_script_lang_js_ = (SfFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfFooter/SfFooter.vue?vue&type=style&index=0&lang=scss&
var SfFootervue_type_style_index_0_lang_scss_ = __webpack_require__("2a1d");

// CONCATENATED MODULE: ./src/components/organisms/SfFooter/SfFooter.vue






/* normalize component */

var SfFooter_component = normalizeComponent(
  SfFooter_SfFootervue_type_script_lang_js_,
  SfFootervue_type_template_id_53c75cee_render,
  SfFootervue_type_template_id_53c75cee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfFooter = (SfFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue?vue&type=template&id=c9c5ab8a&
var SfGroupedProductvue_type_template_id_c9c5ab8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"glide",staticClass:"sf-grouped-product",class:{
    glide: _vm.hasCarousel,
    'without-carousel': !_vm.hasCarousel,
  }},[_c('div',{class:{ glide__track: true },attrs:{"data-glide-el":"track"}},[_c('ul',{ref:"slides",class:{
        glide__slides: true,
      }},[_vm._t("default")],2)])])}
var SfGroupedProductvue_type_template_id_c9c5ab8a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue?vue&type=template&id=c9c5ab8a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue?vue&type=template&id=69e6b82e&
var SfGroupedProductItemvue_type_template_id_69e6b82e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"glide__slide sf-grouped-product-item"},[_c('div',{staticClass:"sf-grouped-product-item__aside"},[_vm._t("image",function(){return [_c('SfImage',{staticClass:"sf-grouped-product-item__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight,"placeholder":_vm.imagePlaceholder,"image-picture-breakpoint":_vm.imagePictureBreakpoint}})]},null,{
        image: _vm.image,
        title: _vm.title,
        imagePlaceholder: _vm.imagePlaceholder,
        imagePictureBreakpoint: _vm.imagePictureBreakpoint,
      })],2),_c('div',{staticClass:"sf-grouped-product-item__description"},[_vm._t("title",function(){return [_c('div',{staticClass:"sf-grouped-product-item__title-wraper"},[_c('SfLink',{staticClass:"sf-grouped-product-item__title",attrs:{"link":_vm.link}},[_vm._v(_vm._s(_vm.title))])],1)]},null,{ title: _vm.title }),_vm._t("details")],2),_vm._t("configuration"),_c('div',{staticClass:"sf-grouped-product-item__info"},[_vm._t("price",function(){return [_c('SfPrice',{staticClass:"sf-grouped-product-item__price",attrs:{"regular":_vm.priceRegular,"special":_vm.priceSpecial}})]},null,{ priceSpecial: _vm.priceSpecial, priceRegular: _vm.priceRegular })],2),_vm._t("input",function(){return [_c('SfQuantitySelector',{staticClass:"sf-grouped-product-item__quantity-selector",attrs:{"qty":_vm.qty,"aria-label":"Quantity"},on:{"input":function($event){return _vm.$emit('input', $event)}}})]},null,{ qty: _vm.qty })],2)}
var SfGroupedProductItemvue_type_template_id_69e6b82e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue?vue&type=template&id=69e6b82e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfGroupedProductItemvue_type_script_lang_js_ = ({
  name: "SfGroupedProductItem",
  components: {
    SfImage: SfImage,
    SfPrice: SfPrice,
    SfQuantitySelector: SfQuantitySelector,
    SfLink: SfLink
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product image
     */
    image: {
      type: String,
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 328
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 448
    },

    /**
     * Product image placeholder
     */
    imagePlaceholder: {
      type: String,
      default: ""
    },

    /**
     * Product image picture breakpoint
     */
    imagePictureBreakpoint: {
      type: Number,
      default: 576
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Product regular price
     */
    priceRegular: {
      type: [Number, String],
      default: ""
    },

    /**
     * Product special price
     */
    priceSpecial: {
      type: [Number, String],
      default: ""
    },

    /** Product quantity */
    qty: {
      type: [Number, String],
      default: 1
    },

    /**
     * Link to product
     */
    link: {
      type: [String, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfGroupedProductItemvue_type_script_lang_js_ = (SfGroupedProductItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/_internal/SfGroupedProductItem.vue





/* normalize component */

var SfGroupedProductItem_component = normalizeComponent(
  _internal_SfGroupedProductItemvue_type_script_lang_js_,
  SfGroupedProductItemvue_type_template_id_69e6b82e_render,
  SfGroupedProductItemvue_type_template_id_69e6b82e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfGroupedProductItem = (SfGroupedProductItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfGroupedProductItem", SfGroupedProductItem);
/* harmony default export */ var SfGroupedProductvue_type_script_lang_js_ = ({
  name: "SfGroupedProduct",
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
    hasCarousel: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      glide: undefined,
      defaultSettings: {
        type: "slider",
        rewind: true,
        gap: 0,
        slidePerPage: true,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50
            }
          }
        }
      }
    };
  },

  computed: {
    glideSettings() {
      let breakpoints = { ...this.defaultSettings.breakpoints
      };

      if (this.settings.breakpoints) {
        breakpoints = { ...breakpoints,
          ...this.settings.breakpoints
        };
      }

      return { ...this.defaultSettings,
        ...this.settings,
        breakpoints
      };
    }

  },
  watch: {
    hasCarousel(state) {
      if (!state && this.glide) {
        this.glide.destroy();
        this.glide = undefined;
      }

      this.glideMount();
    }

  },

  mounted() {
    this.$nextTick(this.glideMount);
  },

  methods: {
    glideMount() {
      if (!this.$slots.default || !this.hasCarousel) return;
      const glide = new glide_esm(this.$refs.glide, this.glideSettings);
      glide.mount();
      glide.on("run.before", move => {
        const {
          perView,
          slidePerPage,
          rewind
        } = this.glide.settings,
              {
          index
        } = this.glide,
              {
          direction
        } = move,
              length = this.glide._c.Sizes.length;
        let page, steps;
        if (direction === "=" || !slidePerPage || perView <= 1) return;
        page = Math.ceil(index / perView);
        steps = page * perView + (direction === ">" ? perView : -perView);

        if (steps === length - 1) {
          steps = steps - 1;
        } else if (steps >= length) {
          steps = rewind ? 0 : index;
        } else if (steps < 0) {
          steps = 0;
        }

        move.direction = "=";
        move.steps = steps;
      });
      this.glide = glide;
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfGroupedProduct_SfGroupedProductvue_type_script_lang_js_ = (SfGroupedProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue?vue&type=style&index=0&lang=scss&
var SfGroupedProductvue_type_style_index_0_lang_scss_ = __webpack_require__("36e1");

// CONCATENATED MODULE: ./src/components/organisms/SfGroupedProduct/SfGroupedProduct.vue






/* normalize component */

var SfGroupedProduct_component = normalizeComponent(
  SfGroupedProduct_SfGroupedProductvue_type_script_lang_js_,
  SfGroupedProductvue_type_template_id_c9c5ab8a_render,
  SfGroupedProductvue_type_template_id_c9c5ab8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfGroupedProduct = (SfGroupedProduct_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=0afdae8a&
var SfHeadervue_type_template_id_0afdae8a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-header",class:{ 'is-sticky': _vm.sticky, 'is-hidden': _vm.hidden }},[_c('div',{staticClass:"sf-header__wrapper"},[_c('header',{ref:"header",staticClass:"sf-header__header"},[_vm._t("logo",function(){return [_c('SfLink',{attrs:{"link":"/"}},[(_vm.logo)?_c('SfImage',{staticClass:"sf-header__logo",attrs:{"src":_vm.logo,"alt":_vm.title,"width":_vm.logoWidth,"height":_vm.logoHeight}}):_c('h1',{staticClass:"sf-header__title"},[_vm._v(_vm._s(_vm.title))])],1)]},null,{ logo: _vm.logo, title: _vm.title }),_c('div',{staticClass:"sf-header__aside"},[_vm._t("aside")],2),_c('div',{staticClass:"sf-header__actions"},[_c('nav',{staticClass:"sf-header__navigation",class:{ 'is-visible': _vm.isNavVisible }},[_vm._t("navigation")],2),_vm._t("search",function(){return [_c('SfSearchBar',{staticClass:"sf-header__search",attrs:{"value":_vm.searchValue,"placeholder":_vm.searchPlaceholder,"aria-label":"Search"},on:{"input":function($event){return _vm.$emit('change:search', $event)},"enter":function($event){return _vm.$emit('enter:search', $event)}}})]},null,{ searchValue: _vm.searchValue, searchPlaceholder: _vm.searchPlaceholder }),_vm._t("header-icons",function(){return [_c('div',{staticClass:"sf-header__icons"},[(_vm.accountIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"accountIcon"},on:{"click":function($event){return _vm.$emit('click:account')}}},[_c('SfIcon',{class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'account',
                },attrs:{"icon":_vm.accountIcon,"size":"1.25rem"}})],1):_vm._e(),(_vm.wishlistIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"wishlistIcon"},on:{"click":function($event){return _vm.$emit('click:wishlist')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'wishlist',
                },attrs:{"icon":_vm.wishlistIcon,"has-badge":_vm.wishlistHasProducts,"badge-label":_vm.wishlistItemsQty,"size":"1.25rem"}})],1):_vm._e(),(_vm.cartIcon)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"cartIcon"},on:{"click":function($event){return _vm.$emit('click:cart')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'cart',
                },attrs:{"icon":_vm.cartIcon,"has-badge":_vm.cartHasProducts,"badge-label":_vm.cartItemsQty,"size":"1.25rem"}})],1):_vm._e()],1)]},null,{
            activeIcon: _vm.activeIcon,
            cartHasProducts: _vm.cartHasProducts,
            cartItemsQty: _vm.cartItemsQty,
            cartIcon: _vm.cartIcon,
            wishlistIcon: _vm.wishlistIcon,
            accountIcon: _vm.accountIcon,
          })],2)],2)])])}
var SfHeadervue_type_template_id_0afdae8a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=0afdae8a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=7764dcb4&
var SfHeaderNavigationItemvue_type_template_id_7764dcb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation-item"},_vm.$listeners),[(!_vm.isVisibleOnMobile)?_c('div',{staticClass:"\n      sf-header-navigation-item__item sf-header-navigation-item__item--desktop\n    "},[_vm._t("desktop-navigation-item",function(){return [_c('SfLink',{staticClass:"sf-header-navigation-item__link",attrs:{"link":_vm.link}},[_vm._v(_vm._s(_vm.label))])]}),_vm._t("default")],2):_c('div',{staticClass:"\n      sf-header-navigation-item__item sf-header-navigation-item__item--mobile\n    "},[_vm._t("mobile-navigation-item",function(){return [_c('SfMenuItem',{staticClass:"sf-header-navigation-item__menu-item",attrs:{"label":_vm.label}},[_vm._v(" "+_vm._s(_vm.label)+" ")])]}),_c('div',{staticClass:"sf-header-navigation-item__content"},[_vm._t("default")],2)],2)])}
var SfHeaderNavigationItemvue_type_template_id_7764dcb4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=7764dcb4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfHeaderNavigationItemvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigationItem",
  components: {
    SfLink: SfLink,
    SfMenuItem: SfMenuItem
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: [String, Object],
      default: ""
    }
  },

  data() {
    return {
      isMobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    isVisibleOnMobile() {
      return this.isMobileView;
    }

  },

  mounted() {
    this.isMobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationItemvue_type_script_lang_js_ = (SfHeaderNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue





/* normalize component */

var SfHeaderNavigationItem_component = normalizeComponent(
  _internal_SfHeaderNavigationItemvue_type_script_lang_js_,
  SfHeaderNavigationItemvue_type_template_id_7764dcb4_render,
  SfHeaderNavigationItemvue_type_template_id_7764dcb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHeaderNavigationItem = (SfHeaderNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=afaa0430&
var SfHeaderNavigationvue_type_template_id_afaa0430_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation"},_vm.$listeners),[(!_vm.isVisibleOnMobile)?_c('div',{staticClass:"sf-header-navigation__menu"},[_vm._t("default")],2):_vm._e(),_c('SfSidebar',{staticClass:"sf-header-navigation__sidebar",attrs:{"visible":_vm.isVisibleOnMobile,"persistent":true},on:{"close":function($event){return _vm.$emit('close')}}},[_vm._t("default")],2)],1)}
var SfHeaderNavigationvue_type_template_id_afaa0430_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=afaa0430&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=62b0fff0&
var SfSidebarvue_type_template_id_62b0fff0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sidebar",class:[_vm.staticClass, _vm.className]},[_c('SfOverlay',{attrs:{"visible":_vm.visibleOverlay}}),_c('transition',{attrs:{"name":_vm.transitionName}},[(_vm.visible)?_c('aside',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],ref:"asideContent",staticClass:"sf-sidebar__aside"},[_vm._t("bar",function(){return [_c('SfBar',{staticClass:"smartphone-only",attrs:{"title":_vm.title,"back":true},on:{"click:back":_vm.close}})]}),_vm._t("circle-icon",function(){return [(_vm.button)?_c('SfCircleIcon',{staticClass:"sf-sidebar__circle-icon desktop-only",attrs:{"icon-size":"12px","aria-label":"Close sidebar","icon":"cross"},on:{"click":_vm.close}}):_vm._e()]},null,{ close: _vm.close, button: _vm.button }),(_vm.title || _vm.hasTop)?_c('div',{staticClass:"sf-sidebar__top"},[_vm._t("title",function(){return [(_vm.title)?_c('SfHeading',{staticClass:"\n              sf-heading--left sf-heading--no-underline\n              sf-sidebar__title\n              desktop-only\n            ",attrs:{"title":_vm.title,"description":_vm.subtitle,"level":_vm.headingLevel}}):_vm._e()]},null,{ title: _vm.title, subtitle: _vm.subtitle, headingLevel: _vm.headingLevel }),_vm._t("content-top")],2):_vm._e(),_c('div',{staticClass:"sf-sidebar__content"},[_vm._t("default")],2),(_vm.hasBottom)?_c('div',{staticClass:"sf-sidebar__bottom"},[_vm._t("content-bottom")],2):_vm._e()],2):_vm._e()])],1)}
var SfSidebarvue_type_template_id_62b0fff0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=62b0fff0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfSidebarvue_type_script_lang_js_ = ({
  name: "SfSidebar",
  directives: {
    focusTrap: focusTrap,
    clickOutside: clickOutside
  },
  components: {
    SfBar: SfBar,
    SfCircleIcon: SfCircleIcon,
    SfOverlay: SfOverlay,
    SfHeading: SfHeading
  },
  props: {
    /**
     * The sidebar's title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * The sidebar's subtitle
     */
    subtitle: {
      type: String,
      default: ""
    },

    /**
     * The heading's level
     */
    headingLevel: {
      type: Number,
      default: 3
    },

    /**
     * The close button
     */
    button: {
      type: Boolean,
      default: true
    },

    /**
     * The sidebar's visibility
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * The overlay's visibility
     */
    overlay: {
      type: Boolean,
      default: true
    },

    /**
     * If true clicking outside will not dismiss the sidebar
     */
    persistent: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      position: "left",
      staticClass: null,
      className: null
    };
  },

  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },

    transitionName() {
      return "sf-slide-" + this.position;
    },

    hasTop() {
      return this.$slots.hasOwnProperty("content-top");
    },

    hasBottom() {
      return this.$slots.hasOwnProperty("content-bottom");
    }

  },
  watch: {
    visible: {
      handler(value) {
        if (!isClient) return;

        if (value) {
          this.$nextTick(() => {
            disableBodyScroll(this.$refs.asideContent);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          clearAllBodyScrollLocks();
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },

      immediate: true
    }
  },

  mounted() {
    this.classHandler();
  },

  updated() {
    this.classHandler();
  },

  beforeDestroy() {
    clearAllBodyScrollLocks();
  },

  methods: {
    close() {
      this.$emit("close");
    },

    checkPersistence() {
      if (!this.persistent) this.close();
    },

    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },

    classHandler() {
      let update = false;

      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
        update = true;
      }

      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
        update = true;
      }

      if (update) {
        this.position = [this.staticClass, this.className].toString().search("--right") > -1 ? "right" : "left";
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSidebar_SfSidebarvue_type_script_lang_js_ = (SfSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=style&index=0&lang=scss&
var SfSidebarvue_type_style_index_0_lang_scss_ = __webpack_require__("1620");

// CONCATENATED MODULE: ./src/components/organisms/SfSidebar/SfSidebar.vue






/* normalize component */

var SfSidebar_component = normalizeComponent(
  SfSidebar_SfSidebarvue_type_script_lang_js_,
  SfSidebarvue_type_template_id_62b0fff0_render,
  SfSidebarvue_type_template_id_62b0fff0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfSidebar = (SfSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfHeaderNavigationvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigation",
  components: {
    SfSidebar: SfSidebar
  },

  data() {
    return {
      isMobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    isVisibleOnMobile() {
      return this.isMobileView;
    }

  },

  mounted() {
    this.isMobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationvue_type_script_lang_js_ = (SfHeaderNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue





/* normalize component */

var SfHeaderNavigation_component = normalizeComponent(
  _internal_SfHeaderNavigationvue_type_script_lang_js_,
  SfHeaderNavigationvue_type_template_id_afaa0430_render,
  SfHeaderNavigationvue_type_template_id_afaa0430_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHeaderNavigation = (SfHeaderNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfHeaderNavigation", SfHeaderNavigation);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfHeaderNavigationItem", SfHeaderNavigationItem);







/* harmony default export */ var SfHeadervue_type_script_lang_js_ = ({
  name: "SfHeader",
  components: {
    SfImage: SfImage,
    SfSearchBar: SfSearchBar,
    SfButton: SfButton,
    SfIcon: SfIcon,
    SfLink: SfLink
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: ""
    },

    /**
     * Header logo height
     */
    logoHeight: {
      type: Number,
      default: 35
    },

    /**
     * Header logo width
     */
    logoWidth: {
      type: Number,
      default: 34
    },

    /**
     * Header title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean, Array],
      default: "empty_cart"
    },

    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart"
    },

    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean, Array],
      default: "profile"
    },

    /**
     * Header activeIcon (accepts account, wishlist and cart)
     */
    activeIcon: {
      type: String,
      default: "",

      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }

    },

    /**
     * Header search placeholder
     */
    searchPlaceholder: {
      type: String,
      default: "Search for items"
    },

    /**
     * Header search phrase
     */
    searchValue: {
      type: String,
      default: ""
    },

    /**
     * Header wishlist items quantity
     */
    wishlistItemsQty: {
      type: [String, Number],
      default: "0"
    },

    /**
     * Header cart items quantity
     */
    cartItemsQty: {
      type: [String, Number],
      default: "0"
    },

    /**
     * Header sticky to top
     */
    isSticky: {
      type: Boolean,
      default: false
    },

    /**
     * Is nav slot visible on mobile view
     */
    isNavVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300
    };
  },

  computed: { ...mapMobileObserver(),

    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },

    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    }

  },
  watch: {
    scrollDirection: {
      handler() {
        if (!isClient) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
      }

    },
    isSticky: {
      handler(isSticky) {
        if (!isClient) return;
        this.sticky = isSticky;
      },

      immediate: true
    }
  },

  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  beforeDestroy() {
    unMapMobileObserver();

    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },

  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;

      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
        return;
      }

      this.hidden = this.scrollDirection === "down";
    },

    scrollHandler() {
      if (!isClient) return;
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection = currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeader_SfHeadervue_type_script_lang_js_ = (SfHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfHeader/SfHeader.vue?vue&type=style&index=0&lang=scss&
var SfHeadervue_type_style_index_0_lang_scss_ = __webpack_require__("a941");

// CONCATENATED MODULE: ./src/components/organisms/SfHeader/SfHeader.vue






/* normalize component */

var SfHeader_component = normalizeComponent(
  SfHeader_SfHeadervue_type_script_lang_js_,
  SfHeadervue_type_template_id_0afdae8a_render,
  SfHeadervue_type_template_id_0afdae8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHeader = (SfHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHero/SfHero.vue?vue&type=template&id=50b3bb61&
var SfHerovue_type_template_id_50b3bb61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-hero"},[_c('div',{ref:"glide",staticClass:"glide"},[_c('div',{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[_c('ul',{staticClass:"glide__slides sf-hero__slides"},[_vm._t("default")],2)])]),(_vm.numberOfPages > 1)?_c('div',{staticClass:"sf-hero__control--left"},[_vm._t("prev",function(){return [_c('SfArrow',{staticClass:"sf-arrow sf-arrow--transparent",attrs:{"aria-label":"previous","data-testid":"hero-prev-button"},on:{"click":function($event){$event.stopPropagation();return _vm.go('prev')}}})]},null,{ go: function () { return _vm.go('prev'); } })],2):_vm._e(),(_vm.numberOfPages > 1)?_c('div',{staticClass:"sf-hero__control--right"},[_vm._t("next",function(){return [_c('SfArrow',{staticClass:"sf-arrow sf-arrow--right sf-arrow--transparent",attrs:{"aria-label":"next","data-testid":"hero-next-button"},on:{"click":function($event){$event.stopPropagation();return _vm.go('next')}}})]},null,{ go: function () { return _vm.go('next'); } })],2):_vm._e(),(_vm.numberOfPages > 1)?_c('div',{staticClass:"sf-hero__bullets"},[_vm._t("bullets",function(){return [_c('SfBullets',{attrs:{"total":_vm.numberOfPages,"current":_vm.page - 1,"data-testid":"hero-bullets"},on:{"click":function($event){return _vm.go($event)}}})]},null,{ numberOfPages: _vm.numberOfPages, page: _vm.page, go: _vm.go })],2):_vm._e()])}
var SfHerovue_type_template_id_50b3bb61_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfHero/SfHero.vue?vue&type=template&id=50b3bb61&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=template&id=3d0bdd48&
var SfHeroItemvue_type_template_id_3d0bdd48_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"glide__slide sf-hero-item",style:(_vm.style),attrs:{"data-testid":"hero-item"}},[_c(_vm.wrapper,{tag:"component",staticClass:"sf-hero-item__wrapper",attrs:{"link":_vm.link}},[_vm._t("subtitle",function(){return [(_vm.subtitle)?_c('div',{staticClass:"sf-hero-item__subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()]},null,{ subtitle: _vm.subtitle }),_vm._t("title",function(){return [(_vm.title)?_c('h1',{staticClass:"sf-hero-item__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e()]},null,{ title: _vm.title }),_vm._t("call-to-action",function(){return [(_vm.buttonText && !_vm.mobileView)?_c('div',{staticClass:"sf-hero-item__button"},[_c('SfButton',{attrs:{"link":_vm.link,"data-testid":"hero-cta-button"}},[_vm._v(" "+_vm._s(_vm.buttonText)+" ")])],1):_vm._e()]},null,{ buttonText: _vm.buttonText, link: _vm.link })],2)],1)}
var SfHeroItemvue_type_template_id_3d0bdd48_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=template&id=3d0bdd48&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfHeroItemvue_type_script_lang_js_ = ({
  name: "SfHeroItem",
  components: {
    SfButton: SfButton,
    SfLink: SfLink
  },
  props: {
    /** Hero item title */
    title: {
      type: String,
      default: ""
    },

    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: ""
    },

    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },

    /** Background color */
    background: {
      type: String,
      default: ""
    },

    /** Background image path */
    image: {
      type: [Object, String],
      default: ""
    },

    /** link to be used in button if necessary */
    link: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      mobileView: false
    };
  },

  computed: { ...mapMobileObserver(),

    style() {
      const image = this.image;
      const isImageString = typeof image === "string";
      const background = this.background;
      return {
        "background-image": isImageString ? `url(${image})` : `url(${this.mobileView ? image.mobile : image.desktop})`,
        "background-color": background
      };
    },

    wrapper() {
      return !this.mobileView ? "div" : this.link ? "SfLink" : "SfButton";
    }

  },

  mounted() {
    this.mobileView = this.isMobile;
  },

  beforeDestroy() {
    unMapMobileObserver();
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfHero/_internal/SfHeroItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeroItemvue_type_script_lang_js_ = (SfHeroItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfHero/_internal/SfHeroItem.vue





/* normalize component */

var SfHeroItem_component = normalizeComponent(
  _internal_SfHeroItemvue_type_script_lang_js_,
  SfHeroItemvue_type_template_id_3d0bdd48_render,
  SfHeroItemvue_type_template_id_3d0bdd48_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHeroItem = (SfHeroItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfHero/SfHero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfHeroItem", SfHeroItem);
/* harmony default export */ var SfHerovue_type_script_lang_js_ = ({
  name: "SfHero",
  components: {
    SfArrow: SfArrow,
    SfBullets: SfBullets
  },
  props: {
    /**
     * Slider options like glide.js (https://glidejs.com/docs/)
     */
    sliderOptions: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0
      }
    };
  },

  computed: {
    mergedOptions() {
      return { ...this.defaultOptions,
        ...this.sliderOptions
      };
    },

    numberOfPages() {
      return this.$slots.default ? this.$slots.default.filter(slot => slot.tag).length : 0;
    },

    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }

      return 1;
    }

  },

  mounted() {
    if (this.numberOfPages > 1) {
      this.$nextTick(() => {
        if (!this.$slots.default) return;
        const glide = new glide_esm(this.$refs.glide, this.mergedOptions);
        glide.mount();
        this.glide = glide;
      });
    }
  },

  methods: {
    go(direct) {
      if (!this.glide) return;

      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;

        case "next":
          this.glide.go(">");
          break;

        default:
          this.glide.go(`=${direct}`);
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfHero/SfHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHero_SfHerovue_type_script_lang_js_ = (SfHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfHero/SfHero.vue?vue&type=style&index=0&lang=scss&
var SfHerovue_type_style_index_0_lang_scss_ = __webpack_require__("a25d");

// CONCATENATED MODULE: ./src/components/organisms/SfHero/SfHero.vue






/* normalize component */

var SfHero_component = normalizeComponent(
  SfHero_SfHerovue_type_script_lang_js_,
  SfHerovue_type_template_id_50b3bb61_render,
  SfHerovue_type_template_id_50b3bb61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfHero = (SfHero_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=template&id=3d8e98b6&
var SfMegaMenuvue_type_template_id_3d8e98b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"sf-mega-menu",class:[{ 'is-active': _vm.active }, { 'is-absolute': _vm.isAbsolute }]},[_c('SfBar',{staticClass:"sf-mega-menu__bar",attrs:{"title":_vm.active || _vm.title,"back":true},on:{"click:back":function($event){return _vm.back()}}}),_c('div',{staticClass:"sf-mega-menu__content"},[_c('div',{staticClass:"sf-mega-menu__menu"},[_vm._t("default")],2),(_vm.$slots.aside)?_c('div',{staticClass:"sf-mega-menu__aside"},[_c('SfMenuItem',{staticClass:"sf-mega-menu__aside-header desktop-only",attrs:{"label":_vm.asideTitle}}),_vm._t("aside")],2):_vm._e()])],1)])}
var SfMegaMenuvue_type_template_id_3d8e98b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=template&id=3d8e98b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=template&id=5ff5a400&
var SfMegaMenuColumnvue_type_template_id_5ff5a400_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-mega-menu-column",class:{ 'is-active': _vm.active === _vm.title }},[_vm._t("title",function(){return [_c('SfMenuItem',{staticClass:"sf-mega-menu-column__header",attrs:{"label":_vm.title},on:{"click":function($event){return _vm.megaMenu.changeActive(_vm.title)}}})]},null,{ title: _vm.title, changeActive: _vm.megaMenu.changeActive }),_c('div',{staticClass:"sf-mega-menu-column__content"},[_vm._t("default")],2)],2)}
var SfMegaMenuColumnvue_type_template_id_5ff5a400_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=template&id=5ff5a400&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfMegaMenuColumnvue_type_script_lang_js_ = ({
  name: "SfMegaMenuColumn",
  components: {
    SfMenuItem: SfMenuItem
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  inject: ["megaMenu"],
  computed: {
    active() {
      return this.megaMenu.active;
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfMegaMenuColumnvue_type_script_lang_js_ = (SfMegaMenuColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/_internal/SfMegaMenuColumn.vue





/* normalize component */

var SfMegaMenuColumn_component = normalizeComponent(
  _internal_SfMegaMenuColumnvue_type_script_lang_js_,
  SfMegaMenuColumnvue_type_template_id_5ff5a400_render,
  SfMegaMenuColumnvue_type_template_id_5ff5a400_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfMegaMenuColumn = (SfMegaMenuColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfMegaMenuColumn", SfMegaMenuColumn);



/* harmony default export */ var SfMegaMenuvue_type_script_lang_js_ = ({
  name: "SfMegaMenu",
  components: {
    SfBar: SfBar,
    SfMenuItem: SfMenuItem
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    isAbsolute: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String,
      default: "sf-fade"
    },

    /**
     * @deprecated will be removed in 1.0.0
     */
    asideTitle: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      active: ""
    };
  },

  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active
    });
    Object.defineProperty(megaMenu, "changeActive", {
      value: this.changeActive
    });
    return {
      megaMenu
    };
  },

  computed: { ...mapMobileObserver()
  },
  watch: {
    isMobile: {
      handler() {
        this.active = "";
      },

      immediate: true
    }
  },

  beforeDestroy() {
    unMapMobileObserver();
  },

  methods: {
    changeActive(payload) {
      this.active = payload;
      this.$emit("change", payload);
    },

    back() {
      if (!this.active) {
        this.$emit("close");
      }

      this.active = "";
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMegaMenu_SfMegaMenuvue_type_script_lang_js_ = (SfMegaMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfMegaMenu/SfMegaMenu.vue?vue&type=style&index=0&lang=scss&
var SfMegaMenuvue_type_style_index_0_lang_scss_ = __webpack_require__("e878");

// CONCATENATED MODULE: ./src/components/organisms/SfMegaMenu/SfMegaMenu.vue






/* normalize component */

var SfMegaMenu_component = normalizeComponent(
  SfMegaMenu_SfMegaMenuvue_type_script_lang_js_,
  SfMegaMenuvue_type_template_id_3d8e98b6_render,
  SfMegaMenuvue_type_template_id_3d8e98b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfMegaMenu = (SfMegaMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=9768f1ee&
var SfProductCardvue_type_template_id_9768f1ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card",attrs:{"data-testid":"product-card"}},[_c('div',{staticClass:"sf-product-card__image-wrapper"},[_vm._t("image",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link"}},_vm.$listeners),[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})}):_c('SfImage',{staticClass:"sf-product-card__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],2)]},null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth }),_vm._t("badge",function(){return [(_vm.badgeLabel)?_c('SfBadge',{staticClass:"sf-product-card__badge",class:_vm.badgeColorClass},[_vm._v(_vm._s(_vm.badgeLabel))]):_vm._e()]},null,{ badgeLabel: _vm.badgeLabel, badgeColor: _vm.badgeColor }),(_vm.wishlistIcon !== false)?_c('SfButton',{class:_vm.wishlistIconClasses,attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title),"data-testid":"product-wishlist-button"},on:{"click":_vm.toggleIsOnWishlist}},[_vm._t("wishlist-icon",function(){return [_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"22px","data-test":"sf-wishlist-icon"}})]},null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2):_vm._e(),(_vm.showAddToCartButton)?[_vm._t("add-to-cart",function(){return [_c('SfCircleIcon',{staticClass:"sf-product-card__add-button",attrs:{"aria-label":("Add to Cart " + _vm.title),"has-badge":_vm.showAddedToCartBadge,"disabled":_vm.addToCartDisabled,"data-testid":"product-add-icon"},on:{"click":_vm.onAddToCart}},[_c('div',{staticClass:"sf-product-card__add-button--icons"},[(!_vm.isAddingToCart && !_vm.isAddedToCart)?_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("add-to-cart-icon",function(){return [_c('SfIcon',{key:"add_to_cart",attrs:{"icon":"add_to_cart","size":"20px","color":"white"}})]})],2):_c('transition',{attrs:{"name":"sf-pulse","mode":"out-in"}},[_vm._t("adding-to-cart-icon",function(){return [_c('SfIcon',{key:"added_to_cart",attrs:{"icon":"added_to_cart","size":"20px","color":"white"}})]})],2)],1)])]},null,{
          isAddedToCart: _vm.isAddedToCart,
          showAddedToCartBadge: _vm.showAddedToCartBadge,
          isAddingToCart: _vm.isAddingToCart,
          title: _vm.title,
        })]:_vm._e()],2),_vm._t("title",function(){return [_c('SfButton',_vm._g({staticClass:"sf-button--pure sf-product-card__link",attrs:{"link":_vm.link,"data-testid":"product-link"}},_vm.$listeners),[_c('h3',{staticClass:"sf-product-card__title"},[_vm._v(" "+_vm._s(_vm.title)+" ")])])]},null,{ title: _vm.title, link: _vm.link }),_vm._t("price",function(){return [(_vm.regularPrice)?_c('SfPrice',{staticClass:"sf-product-card__price",attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._t("reviews",function(){return [(typeof _vm.scoreRating === 'number')?_c('div',{staticClass:"sf-product-card__reviews"},[_c('SfRating',{staticClass:"sf-product-card__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}),(_vm.reviewsCount)?_c('SfButton',{staticClass:"sf-button--pure sf-product-card__reviews-count",attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title),"data-testid":"product-review-button"},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v(" ("+_vm._s(_vm.reviewsCount)+") ")]):_vm._e()],1):_vm._e()]},null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating })],2)}
var SfProductCardvue_type_template_id_9768f1ee_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=template&id=9768f1ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SfProductCardvue_type_script_lang_js_ = ({
  name: "SfProductCard",
  components: {
    SfPrice: SfPrice,
    SfRating: SfRating,
    SfIcon: SfIcon,
    SfImage: SfImage,
    SfCircleIcon: SfCircleIcon,
    SfBadge: SfBadge,
    SfButton: SfButton
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 216
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 326
    },

    /**
     * Badge label
     */
    badgeLabel: {
      type: String,
      default: ""
    },

    /**
     * Badge color
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
     */
    badgeColor: {
      type: String,
      default: ""
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },

    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },

    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },

    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },

    /**
     * Status of showing add to cart button
     */
    showAddToCartButton: {
      type: Boolean,
      default: false
    },

    /**
     * isAddedToCart status of whether button is showed, product is added or not
     */
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },

    /**
     * addToCartDisabled status of whether button is disabled when out of stock
     */
    addToCartDisabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isAddingToCart: false
    };
  },

  computed: {
    isSFColors() {
      return colorsValues.includes(this.badgeColor.trim());
    },

    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },

    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },

    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },

    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isOnWishlist ? "on-wishlist" : ""}`;
    }

  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    },

    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCard_SfProductCardvue_type_script_lang_js_ = (SfProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfProductCard/SfProductCard.vue?vue&type=style&index=0&lang=scss&
var SfProductCardvue_type_style_index_0_lang_scss_ = __webpack_require__("0b80");

// CONCATENATED MODULE: ./src/components/organisms/SfProductCard/SfProductCard.vue






/* normalize component */

var SfProductCard_component = normalizeComponent(
  SfProductCard_SfProductCardvue_type_script_lang_js_,
  SfProductCardvue_type_template_id_9768f1ee_render,
  SfProductCardvue_type_template_id_9768f1ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfProductCard = (SfProductCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=template&id=36325d05&
var SfProductCardHorizontalvue_type_template_id_36325d05_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-product-card-horizontal"},[_c('div',{staticClass:"sf-product-card-horizontal__image-wrapper"},[_vm._t("image",function(){return [_c('SfLink',{staticClass:"sf-product-card-horizontal__link sf-product-card-horizontal__link--image",attrs:{"link":_vm.link}},[(Array.isArray(_vm.image))?_vm._l((_vm.image.slice(0, 2)),function(picture,key){return _c('SfImage',{key:key,staticClass:"sf-product-card-horizontal__picture",attrs:{"src":picture,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})}):_c('SfImage',{staticClass:"sf-product-card-horizontal__image",attrs:{"src":_vm.image,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight}})],2)]},null,{ image: _vm.image, title: _vm.title, link: _vm.link, imageHeight: _vm.imageHeight, imageWidth: _vm.imageWidth })],2),_c('div',{staticClass:"sf-product-card-horizontal__main"},[_c('div',{staticClass:"sf-product-card-horizontal__details"},[_vm._t("title",function(){return [_c('SfLink',{staticClass:"sf-product-card-horizontal__link",attrs:{"link":_vm.link}},[_c('h3',{staticClass:"sf-product-card-horizontal__title"},[_vm._v(" "+_vm._s(_vm.title)+" ")])])]},null,{ title: _vm.title, link: _vm.link }),_vm._t("description",function(){return [_c('p',{staticClass:"sf-product-card-horizontal__description desktop-only"},[_vm._v(" "+_vm._s(_vm.description)+" ")])]}),_c('div',{staticClass:"sf-product-card-horizontal__configuration"},[_vm._t("configuration")],2)],2),_c('div',{staticClass:"sf-product-card-horizontal__actions-wrapper"},[_vm._t("price",function(){return [(_vm.regularPrice)?_c('SfPrice',{staticClass:"sf-product-card-horizontal__price",attrs:{"regular":_vm.regularPrice,"special":_vm.specialPrice}}):_vm._e()]},null,{ specialPrice: _vm.specialPrice, regularPrice: _vm.regularPrice }),_vm._t("reviews",function(){return [(typeof _vm.scoreRating === 'number')?_c('div',{staticClass:"sf-product-card-horizontal__reviews"},[_c('SfRating',{staticClass:"sf-product-card-horizontal__rating",attrs:{"max":_vm.maxRating,"score":_vm.scoreRating}}),(_vm.reviewsCount)?_c('SfButton',{staticClass:"sf-button--pure sf-product-card-horizontal__reviews-count",attrs:{"aria-label":("Read " + _vm.reviewsCount + " reviews about " + _vm.title),"href":"#"},on:{"click":function($event){return _vm.$emit('click:reviews')}}},[_vm._v(" ("+_vm._s(_vm.reviewsCount)+") ")]):_vm._e()],1):_vm._e()]},null,{ maxRating: _vm.maxRating, scoreRating: _vm.scoreRating }),_c('div',{staticClass:"sf-product-card-horizontal__actions"},[_vm._t("actions")],2),_c('div',{staticClass:"sf-product-card-horizontal__add-to-cart"},[_vm._t("add-to-cart",function(){return [_c('SfAddToCart',{staticClass:"sf-product-card-horizontal__add-to-cart desktop-only",attrs:{"qty":_vm.qty},on:{"input":function($event){return _vm.$emit('input', $event)},"click":function($event){return _vm.$emit('click:add-to-cart')}}})]})],2)],2),(_vm.wishlistIcon !== false)?_c('SfButton',{staticClass:"sf-button--pure smartphone-only",class:_vm.wishlistIconClasses,attrs:{"aria-label":(_vm.ariaLabel + " " + _vm.title)},on:{"click":_vm.toggleIsOnWishlist}},[_vm._t("wishlist-icon",function(){return [_c('SfIcon',{attrs:{"icon":_vm.currentWishlistIcon,"size":"19px","data-test":"sf-wishlist-icon"}})]},null,{ currentWishlistIcon: _vm.currentWishlistIcon })],2):_vm._e()],1)])}
var SfProductCardHorizontalvue_type_template_id_36325d05_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=template&id=36325d05&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SfProductCardHorizontalvue_type_script_lang_js_ = ({
  name: "SfProductCardHorizontal",
  components: {
    SfPrice: SfPrice,
    SfRating: SfRating,
    SfImage: SfImage,
    SfIcon: SfIcon,
    SfLink: SfLink,
    SfButton: SfButton,
    SfAddToCart: SfAddToCart
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product description
     */
    description: {
      type: String,
      default: ""
    },

    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },

    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140
    },

    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200
    },

    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },

    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },

    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined
    },

    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },

    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
    },

    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },

    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },

    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },

    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },

    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },

    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },

    wishlistIconClasses() {
      const defaultClass = "sf-product-card-horizontal__wishlist-icon";
      return `${defaultClass} ${this.isOnWishlist ? "sf-product-card-horizontal--on-wishlist" : ""}`;
    }

  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfProductCardHorizontal_SfProductCardHorizontalvue_type_script_lang_js_ = (SfProductCardHorizontalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue?vue&type=style&index=0&lang=scss&
var SfProductCardHorizontalvue_type_style_index_0_lang_scss_ = __webpack_require__("f52f");

// CONCATENATED MODULE: ./src/components/organisms/SfProductCardHorizontal/SfProductCardHorizontal.vue






/* normalize component */

var SfProductCardHorizontal_component = normalizeComponent(
  SfProductCardHorizontal_SfProductCardHorizontalvue_type_script_lang_js_,
  SfProductCardHorizontalvue_type_template_id_36325d05_render,
  SfProductCardHorizontalvue_type_template_id_36325d05_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfProductCardHorizontal = (SfProductCardHorizontal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfStoreLocator/SfStoreLocator.vue?vue&type=template&id=f9d8c45a&
var SfStoreLocatorvue_type_template_id_f9d8c45a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-store-locator"},[_c('div',{staticClass:"sf-store-locator__wrapper"},[_c('div',{staticClass:"sf-store-locator__list"},[_c('div',{staticClass:"sf-store-locator__stores"},[_vm._v(" Stores found: "),_c('span',[_vm._v(_vm._s(_vm.stores.length))])]),_vm._t("default",null,null,{
          centerOn: _vm.centerOn,
          registerStore: _vm.registerStore,
          removeStore: _vm.removeStore,
          userPosition: _vm.userPosition,
          getGeoDistance: _vm.getGeoDistance,
          locateUser: _vm.locateUser,
        })],2),_c('div',{staticClass:"sf-store-locator__map-wrapper"},[(_vm.loaded)?_c('LMap',{ref:"map",staticClass:"sf-store-locator__map",attrs:{"options":_vm.computedMapOptions,"center":_vm.internalCenter,"zoom":_vm.internalZoom,"max-zoom":_vm.maxZoom},on:{"update:center":function($event){_vm.internalCenter=$event},"update:zoom":function($event){_vm.internalZoom=$event},"ready":_vm.onMapReady,"locationfound":_vm.locationFound,"locationerror":_vm.locationError}},[_c('LTileLayer',_vm._b({attrs:{"url":_vm.tileServerUrl,"attribution":_vm.tileServerAttribution}},'LTileLayer',_vm.tileLayerOptions,false)),_c('LControlZoom',{attrs:{"position":"topleft"}}),_vm._l((_vm.stores),function(store,index){return _c('LMarker',_vm._b({key:index,attrs:{"lat-lng":store.latlng}},'LMarker',_vm.markerOptions,false),[_c('LIcon',{attrs:{"icon-size":_vm.markerIconSize,"icon-anchor":_vm.markerIconAnchor}},[_vm._t("marker-icon",function(){return [_c('SfIcon',{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"aria-label":((store.name) + " located at " + (store.address)),"icon":"marker","tabindex":"0"}})]})],2)],1)})],2):_vm._e(),(!_vm.mapReady)?_vm._t("map-loading",function(){return [_c('SfLoader',{staticClass:"sf-store-locator__loader"})]}):_vm._e()],2)])])}
var SfStoreLocatorvue_type_template_id_f9d8c45a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/SfStoreLocator.vue?vue&type=template&id=f9d8c45a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfStoreLocator/_internal/SfStore.vue?vue&type=template&id=3b6070e6&
var SfStorevue_type_template_id_3b6070e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-store"},[_vm._t("distance",function(){return [(_vm.distance)?_c('div',{staticClass:"sf-store__distance"},[_c('span',[_vm._v(_vm._s(_vm.distance)+"km")]),_vm._v(" away from you ")]):_vm._e()]}),_c('div',{class:{ 'sf-store__media': _vm.picture },on:{"click":function($event){return _vm.centerOn(_vm.latlng)}}},[_vm._t("media",function(){return [(_vm.picture)?_c('SfImage',{attrs:{"src":_vm.picture,"alt":(_vm.name + " picture")}}):_c('SfIcon',{staticClass:"sf-store__icon",attrs:{"icon":"marker"}})]})],2),_c('div',{staticClass:"sf-store__info"},[_c('div',{staticClass:"sf-store__heading"},[_vm._t("heading",function(){return [_c('div',{staticClass:"sf-store__name"},[_vm._v(" "+_vm._s(_vm.name)+" ")])]})],2),_vm._t("default",function(){return [(_vm.address)?_c('div',{staticClass:"sf-store__address"},[_vm._v(" "+_vm._s(_vm.address)+" ")]):_vm._e(),(_vm.phone)?_c('SfCharacteristic',{staticClass:"sf-store__property",attrs:{"icon":"phone","size-icon":"16px"},scopedSlots:_vm._u([{key:"text",fn:function(){return [_c('a',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-store__property-link",attrs:{"href":("tel:" + _vm.phone),"tabindex":"0"}},[_vm._v(_vm._s(_vm.phone))])]},proxy:true}],null,false,4241360872)}):_vm._e(),(_vm.email)?_c('SfCharacteristic',{staticClass:"sf-store__property",attrs:{"icon":"mail","size-icon":"16px"},scopedSlots:_vm._u([{key:"text",fn:function(){return [_c('a',{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-store__property-link",attrs:{"href":("mailto:" + _vm.email),"tabindex":"0"}},[_vm._v(_vm._s(_vm.email))])]},proxy:true}],null,false,1991607207)}):_vm._e()]})],2)],2)}
var SfStorevue_type_template_id_3b6070e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/_internal/SfStore.vue?vue&type=template&id=3b6070e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfStoreLocator/_internal/SfStore.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SfStorevue_type_script_lang_js_ = ({
  name: "SfStore",
  inject: ["registerStore", "removeStore", "centerOn", "locatorData", "getGeoDistance"],
  components: {
    SfImage: SfImage,
    SfCharacteristic: SfCharacteristic,
    SfIcon: SfIcon
  },
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Name of the store
     */
    latlng: {
      type: Array,
      default: () => []
    },

    /**
     * Name of the store
     */
    name: {
      type: String,
      default: ""
    },

    /**
     * Url of the picture of the store
     */
    picture: {
      type: String,
      default: null
    },

    /**
     * Address of the store
     */
    address: {
      type: String,
      default: ""
    },

    /**
     * Phone number of the store
     */
    phone: {
      type: String,
      default: null
    },

    /**
     * Email of the store
     */
    email: {
      type: String,
      default: null
    }
  },
  computed: {
    distance() {
      if (this.locatorData && this.locatorData.userPosition) {
        const dictLatLng = {
          lat: this.latlng[0],
          lng: this.latlng[1]
        };
        return this.getGeoDistance(this.locatorData.userPosition, dictLatLng);
      }

      return null;
    }

  },

  created() {
    if (this.registerStore) {
      this.registerStore(this.$props);
    }
  },

  beforeDestroy() {
    if (this.removeStore) {
      this.removeStore(this.$props);
    }
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/_internal/SfStore.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfStorevue_type_script_lang_js_ = (SfStorevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/_internal/SfStore.vue





/* normalize component */

var SfStore_component = normalizeComponent(
  _internal_SfStorevue_type_script_lang_js_,
  SfStorevue_type_template_id_3b6070e6_render,
  SfStorevue_type_template_id_3b6070e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfStore = (SfStore_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfStoreLocator/SfStoreLocator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfStore", SfStore);
/* harmony default export */ var SfStoreLocatorvue_type_script_lang_js_ = ({
  name: "SfStoreLocator",

  provide() {
    const locatorData = {};
    Object.defineProperty(locatorData, "userPosition", {
      enumerable: true,
      get: () => this.userPosition
    });
    return {
      registerStore: this.registerStore,
      removeStore: this.removeStore,
      centerOn: this.centerOn,
      getGeoDistance: this.getGeoDistance,
      locateUser: this.locateUser,
      locatorData
    };
  },

  components: {
    SfIcon: SfIcon,
    SfLoader: SfLoader
  },
  directives: {
    focus: focus_directive_focus
  },
  props: {
    /**
     * Url of selected tileserver
     */
    tileServerUrl: {
      type: String,
      default: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
    },

    /**
     * Attribution line of selected tileserver
     */
    tileServerAttribution: {
      type: String,
      default: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
    },

    /**
     * Initial center of the map, overridden when the user position is captured, supports sync modifier
     */
    center: {
      type: [Array, Object],
      default: () => [0, 0]
    },

    /**
     * Initial zoom of the map
     */
    zoom: {
      type: Number,
      default: 6
    },

    /**
     * Max zoom allowed, consider tileserver limitation when setting this
     */
    maxZoom: {
      type: Number,
      default: 16
    },

    /**
     * Size of the icon [width, height]
     */
    markerIconSize: {
      type: Array,
      default: () => [21, 28]
    },

    /**
     *  Position of the anchor in the icon [x, y]
     */
    markerIconAnchor: {
      type: Array,
      default: () => [10.5, 0]
    },

    /**
     * Options to pass to leaflet map
     */
    mapOptions: {
      type: Object,
      default: () => ({})
    },

    /**
     * Options to pass to leaflet tile-layer
     */
    tileLayerOptions: {
      type: Object,
      default: () => ({})
    },

    /**
     * Options to pass to leaflet marker
     */
    markerOptions: {
      type: Object,
      default: () => ({})
    },

    /**
     * Zoom to be set when centering map on clicked store
     */
    flyToStoreZoom: {
      type: Number,
      default: 15
    }
  },

  data() {
    return {
      loaded: false,
      userPosition: null,
      mapReady: false,
      stores: []
    };
  },

  computed: {
    computedMapOptions() {
      return {
        zoomControl: false,
        ...this.mapOptions
      };
    },

    internalCenter: {
      get() {
        return this.center;
      },

      set(value) {
        this.updateCenter(value);
      }

    },
    internalZoom: {
      get() {
        return this.zoom;
      },

      set(value) {
        this.$emit("update:zoom", value);
      }

    }
  },

  mounted() {
    __webpack_require__.e(/* import() */ 2).then(__webpack_require__.t.bind(null, "6cc5", 7));
    __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "bb3f")).then(({
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
      LControl,
      LControlZoom
    }) => {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LMap", LMap);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LTileLayer", LTileLayer);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LMarker", LMarker);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LIcon", LIcon);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LControl", LControl);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LControlZoom", LControlZoom);
      this.loaded = true;
      /**
       * Library loaded event, the library is ready and the map is initialising
       *
       * @event 'library:loaded'
       * @type null
       */

      this.$emit("library:loaded");
    });
  },

  methods: {
    latLngEquality(a, b) {
      return a.latlng[0] === b.latlng[0] && a.latlng[1] === b.latlng[1];
    },

    registerStore(store) {
      if (!this.stores.some(s => this.latLngEquality(store, s))) {
        this.stores = [...this.stores, store];
      }
    },

    removeStore(store) {
      this.stores = this.stores.filter(s => !this.latLngEquality(s, store));
    },

    onMapReady(mapObject) {
      /**
       * Map ready and displayed event
       *
       * @event 'map:ready'
       * @type {object}
       */
      this.mapReady = true;
      this.$emit("map:ready", mapObject);
      this.locateUser();
    },

    locateUser() {
      this.$refs.map.mapObject.locate({
        timeout: 20000
      });
    },

    locationFound(location) {
      this.userPosition = { ...location.latlng
      };
      /**
       * Update center with user position event,
       *
       * @event 'update:center'
       * @type {object}
       */

      this.updateCenter({ ...location.latlng
      });
    },

    locationError(error) {
      /**
       * Location error event.
       *
       * @event 'location:errors'
       * @type {object}
       */
      this.$emit("location:error", error);
    },

    updateCenter(latlng) {
      this.$emit("update:center", { ...latlng
      });
    },

    centerOn(latlng) {
      this.$refs.map.mapObject.flyTo(latlng, this.flyToStoreZoom);
    },

    getGeoDistance(start, end) {
      const deg2rad = deg => deg * (Math.PI / 180);

      const R = 6371;
      const dLat = deg2rad(end.lat - start.lat);
      const dLng = deg2rad(end.lng - start.lng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(start.lat)) * Math.cos(deg2rad(end.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let distance = R * c * 1000;
      distance = distance / 1000;
      return Math.round(distance * 100) / 100;
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/SfStoreLocator.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfStoreLocator_SfStoreLocatorvue_type_script_lang_js_ = (SfStoreLocatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfStoreLocator/SfStoreLocator.vue?vue&type=style&index=0&lang=scss&
var SfStoreLocatorvue_type_style_index_0_lang_scss_ = __webpack_require__("f167");

// CONCATENATED MODULE: ./src/components/organisms/SfStoreLocator/SfStoreLocator.vue






/* normalize component */

var SfStoreLocator_component = normalizeComponent(
  SfStoreLocator_SfStoreLocatorvue_type_script_lang_js_,
  SfStoreLocatorvue_type_template_id_f9d8c45a_render,
  SfStoreLocatorvue_type_template_id_f9d8c45a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfStoreLocator = (SfStoreLocator_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=333758a0&
var SfTablevue_type_template_id_333758a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"sf-table"},[_vm._t("default")],2)}
var SfTablevue_type_template_id_333758a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTable/SfTable.vue?vue&type=template&id=333758a0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=7b815c28&
var SfTableRowvue_type_template_id_7b815c28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tbody',[_c('tr',{staticClass:"sf-table__row"},[_vm._t("default")],2)])}
var SfTableRowvue_type_template_id_7b815c28_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=template&id=7b815c28&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableRowvue_type_script_lang_js_ = ({
  name: "SfTableRow",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableRowvue_type_script_lang_js_ = (SfTableRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableRow.vue





/* normalize component */

var SfTableRow_component = normalizeComponent(
  _internal_SfTableRowvue_type_script_lang_js_,
  SfTableRowvue_type_template_id_7b815c28_render,
  SfTableRowvue_type_template_id_7b815c28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTableRow = (SfTableRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=1566b5c2&
var SfTableDatavue_type_template_id_1566b5c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"sf-table__data"},[_vm._t("default")],2)}
var SfTableDatavue_type_template_id_1566b5c2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=template&id=1566b5c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableDatavue_type_script_lang_js_ = ({
  name: "SfTableData"
});
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableData.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableDatavue_type_script_lang_js_ = (SfTableDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableData.vue





/* normalize component */

var SfTableData_component = normalizeComponent(
  _internal_SfTableDatavue_type_script_lang_js_,
  SfTableDatavue_type_template_id_1566b5c2_render,
  SfTableDatavue_type_template_id_1566b5c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTableData = (SfTableData_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=f90b1f2c&
var SfTableHeadervue_type_template_id_f90b1f2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{staticClass:"sf-table__header"},[_vm._t("default")],2)}
var SfTableHeadervue_type_template_id_f90b1f2c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=template&id=f90b1f2c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var SfTableHeadervue_type_script_lang_js_ = ({
  name: "SfTableHeader"
});
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadervue_type_script_lang_js_ = (SfTableHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeader.vue





/* normalize component */

var SfTableHeader_component = normalizeComponent(
  _internal_SfTableHeadervue_type_script_lang_js_,
  SfTableHeadervue_type_template_id_f90b1f2c_render,
  SfTableHeadervue_type_template_id_f90b1f2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTableHeader = (SfTableHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=da5030b8&
var SfTableHeadingvue_type_template_id_da5030b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',{staticClass:"sf-table__heading"},[_vm._t("default")],2)])}
var SfTableHeadingvue_type_template_id_da5030b8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=template&id=da5030b8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var SfTableHeadingvue_type_script_lang_js_ = ({
  name: "SfTableHeading",
  inject: ["table"],

  mounted() {
    if (!this.$slots.default) return;
    this.table.updateColumnsCount(this.$slots.default.filter(node => node.tag).length);
  }

});
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTableHeadingvue_type_script_lang_js_ = (SfTableHeadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfTable/_internal/SfTableHeading.vue





/* normalize component */

var SfTableHeading_component = normalizeComponent(
  _internal_SfTableHeadingvue_type_script_lang_js_,
  SfTableHeadingvue_type_template_id_da5030b8_render,
  SfTableHeadingvue_type_template_id_da5030b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTableHeading = (SfTableHeading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
//
//
//
//
//





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfTableRow", SfTableRow);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfTableData", SfTableData);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfTableHeader", SfTableHeader);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfTableHeading", SfTableHeading);
/* harmony default export */ var SfTablevue_type_script_lang_js_ = ({
  name: "SfTable",

  provide() {
    const table = {};
    Object.defineProperty(table, "updateColumnsCount", {
      value: this.updateColumnsCount
    });
    return {
      table
    };
  },

  methods: {
    updateColumnsCount(columnsCount) {
      this.$el.style.setProperty("--_table-column-width", Math.ceil(columnsCount / 2));
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfTable/SfTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTable_SfTablevue_type_script_lang_js_ = (SfTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfTable/SfTable.vue?vue&type=style&index=0&lang=scss&
var SfTablevue_type_style_index_0_lang_scss_ = __webpack_require__("0f8e");

// CONCATENATED MODULE: ./src/components/organisms/SfTable/SfTable.vue






/* normalize component */

var SfTable_component = normalizeComponent(
  SfTable_SfTablevue_type_script_lang_js_,
  SfTablevue_type_template_id_333758a0_render,
  SfTablevue_type_template_id_333758a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTable = (SfTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=1d12c36a&
var SfTabsvue_type_template_id_1d12c36a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.initialTabActivated),expression:"initialTabActivated"}],staticClass:"sf-tabs"},[_vm._t("default")],2)}
var SfTabsvue_type_template_id_1d12c36a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTabs/SfTabs.vue?vue&type=template&id=1d12c36a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=bfdbc318&
var SfTabvue_type_template_id_bfdbc318_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-tabs__tab"},[_vm._t("title",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-tabs__title",class:{ 'is-active': _vm.isActive },attrs:{"aria-pressed":_vm.isActive.toString()},on:{"click":_vm.tabClick}},[_vm._v(" "+_vm._s(_vm.title)+" "),_c('SfChevron',{staticClass:"sf-tabs__chevron",class:{ 'sf-chevron--right': !_vm.isActive }})],1)]},null,{ tabClick: _vm.tabClick, isActive: _vm.isActive, title: _vm.title }),_c('div',{staticClass:"sf-tabs__content"},[(_vm.isActive)?_c('div',{staticClass:"sf-tabs__content__tab"},[(_vm.tabMaxContentHeight)?_c('SfScrollable',{attrs:{"max-content-height":_vm.tabMaxContentHeight,"show-text":_vm.tabShowText,"hide-text":_vm.tabHideText}},[_vm._t("default")],2):_vm._t("default")],2):_vm._e()])],2)}
var SfTabvue_type_template_id_bfdbc318_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=template&id=bfdbc318&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfTabvue_type_script_lang_js_ = ({
  name: "SfTab",
  components: {
    SfChevron: SfChevron,
    SfScrollable: SfScrollable,
    SfButton: SfButton
  },
  inject: ["tabConfig"],
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      isActive: false,
      desktopMin: 1024
    };
  },

  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },

    tabShowText() {
      return this.tabConfig.tabShowText;
    },

    tabHideText() {
      return this.tabConfig.tabHideText;
    }

  },
  methods: {
    tabClick() {
      if (!isClient) return;
      const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }

  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfTabs/_internal/SfTab.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfTabvue_type_script_lang_js_ = (SfTabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/organisms/SfTabs/_internal/SfTab.vue





/* normalize component */

var SfTab_component = normalizeComponent(
  _internal_SfTabvue_type_script_lang_js_,
  SfTabvue_type_template_id_bfdbc318_render,
  SfTabvue_type_template_id_bfdbc318_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTab = (SfTab_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SfTab", SfTab);
/* harmony default export */ var SfTabsvue_type_script_lang_js_ = ({
  name: "SfTabs",
  props: {
    /** Which tab should be open  */
    openTab: {
      type: Number,
      default: 1
    },

    /** Max height of visible content  */
    tabMaxContentHeight: {
      type: String,
      default: ""
    },

    /** Text for button showing content  */
    tabShowText: {
      type: String,
      default: "show"
    },

    /** Text for button hiding content  */
    tabHideText: {
      type: String,
      default: "hide"
    }
  },

  data() {
    return {
      initialTabActivated: false
    };
  },

  watch: {
    openTab(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.toggle(this.$children[newValue - 1]._uid);
    }

  },

  mounted() {
    this.$on("toggle", this.toggle);
    if (this.openTab) this.openChild();
  },

  methods: {
    toggle(id) {
      this.$children.forEach(child => {
        child.isActive = child._uid === id;
      });
      const activeTab = this.$children.findIndex(child => child.isActive === true) + 1;
      this.$emit("click:tab", activeTab);
    },

    openChild() {
      if (this.openTab < this.$children.length + 1) {
        this.$children[this.openTab - 1].isActive = true;
        this.initialTabActivated = true;
      }
    }

  },
  provide: function () {
    const tabConfig = {};
    Object.defineProperty(tabConfig, "tabMaxContentHeight", {
      get: () => this.tabMaxContentHeight
    });
    Object.defineProperty(tabConfig, "tabShowText", {
      get: () => this.tabShowText
    });
    Object.defineProperty(tabConfig, "tabHideText", {
      get: () => this.tabHideText
    });
    return {
      tabConfig
    };
  }
});
// CONCATENATED MODULE: ./src/components/organisms/SfTabs/SfTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTabs_SfTabsvue_type_script_lang_js_ = (SfTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfTabs/SfTabs.vue?vue&type=style&index=0&lang=scss&
var SfTabsvue_type_style_index_0_lang_scss_ = __webpack_require__("124c");

// CONCATENATED MODULE: ./src/components/organisms/SfTabs/SfTabs.vue






/* normalize component */

var SfTabs_component = normalizeComponent(
  SfTabs_SfTabsvue_type_script_lang_js_,
  SfTabsvue_type_template_id_1d12c36a_render,
  SfTabsvue_type_template_id_1d12c36a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTabs = (SfTabs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3da9332-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=12869744&
var SfTopBarvue_type_template_id_12869744_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-top-bar"},[_c('div',{staticClass:"sf-top-bar__container"},[_c('div',{staticClass:"sf-top-bar__left"},[_vm._t("left")],2),_c('div',{staticClass:"sf-top-bar__center"},[_vm._t("center")],2),_c('div',{staticClass:"sf-top-bar__right"},[_vm._t("right")],2)])])}
var SfTopBarvue_type_template_id_12869744_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=12869744&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SfTopBarvue_type_script_lang_js_ = ({
  name: "SFTopBar"
});
// CONCATENATED MODULE: ./src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTopBar_SfTopBarvue_type_script_lang_js_ = (SfTopBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=style&index=0&lang=scss&
var SfTopBarvue_type_style_index_0_lang_scss_ = __webpack_require__("f996");

// CONCATENATED MODULE: ./src/components/organisms/SfTopBar/SfTopBar.vue






/* normalize component */

var SfTopBar_component = normalizeComponent(
  SfTopBar_SfTopBarvue_type_script_lang_js_,
  SfTopBarvue_type_template_id_12869744_render,
  SfTopBarvue_type_template_id_12869744_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SfTopBar = (SfTopBar_component.exports);
// CONCATENATED MODULE: ./index.js
// Auto-generated file by create-index-files.js. Do not edit manually








































































// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fbad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc4a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=storefront-ui.common.js.map