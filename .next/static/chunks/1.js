(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/ImageAnnotationDemo.js":
/*!*******************************************!*\
  !*** ./components/ImageAnnotationDemo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-annotation-tool */ "./node_modules/react-annotation-tool/dist/bundle.js");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var _jsxFileName = "/home/production/chi-lin/components/ImageAnnotationDemo.js";




var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (r) {
      _this.setState({
        result: r
      });
    });

    _this.state = {
      result: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var result = this.state.result;
      var annotations = [{
        "id": "jlvnw6az",
        "name": "jlvnw6az",
        "closed": true,
        "color": "rgba(227,0,255,1)",
        "vertices": [{
          "id": "jlvnw6az",
          "name": "jlvnw6az",
          "x": 189.5625,
          "y": 201
        }, {
          "id": "jlvnw8qs",
          "name": "jlvnw8qs",
          "x": 309.25,
          "y": 200
        }, {
          "id": "jlvnw9vp",
          "name": "jlvnw9vp",
          "x": 313.25,
          "y": 203
        }, {
          "id": "jlvnwbvk",
          "name": "jlvnwbvk",
          "x": 316.25,
          "y": 288
        }, {
          "id": "jlvnwczb",
          "name": "jlvnwczb",
          "x": 310.25,
          "y": 292
        }, {
          "id": "jlvnwfhm",
          "name": "jlvnwfhm",
          "x": 187.25,
          "y": 294
        }, {
          "id": "jlvnwgoe",
          "name": "jlvnwgoe",
          "x": 181.25,
          "y": 290
        }, {
          "id": "jlvnwidd",
          "name": "jlvnwidd",
          "x": 183.25,
          "y": 205
        }],
        "selected": [{
          "id": "0",
          "value": "root"
        }, {
          "id": "1",
          "value": "Electronic"
        }, {
          "id": "1-1",
          "value": "Laptop"
        }, {
          "id": "1-1-1",
          "value": "Apple"
        }]
      }, {
        "id": "jlvnxa79",
        "name": "jlvnxa79",
        "color": "rgba(0,255,81,1)",
        "closed": true,
        "vertices": [{
          "id": "jlvnxa79",
          "name": "jlvnxa79",
          "x": 369.25,
          "y": 350.5
        }, {
          "id": "jlvnxbct",
          "name": "jlvnxbct",
          "x": 372.25,
          "y": 343.5
        }, {
          "id": "jlvnxcg6",
          "name": "jlvnxcg6",
          "x": 387.25,
          "y": 341
        }, {
          "id": "jlvnxdic",
          "name": "jlvnxdic",
          "x": 393.25,
          "y": 343
        }, {
          "id": "jlvnxfp2",
          "name": "jlvnxfp2",
          "x": 424.25,
          "y": 342
        }, {
          "id": "jlvnxgfx",
          "name": "jlvnxgfx",
          "x": 426.25,
          "y": 347
        }, {
          "id": "jlvnxjd8",
          "name": "jlvnxjd8",
          "x": 381.25,
          "y": 350
        }],
        "selected": [{
          "id": "0",
          "value": "root"
        }, {
          "id": "2",
          "value": "Stationery"
        }, {
          "id": "2-1",
          "value": "Pen"
        }]
      }];
      var menu = {
        id: "0",
        value: "root",
        options: [{
          id: "1",
          value: "Electronic",
          options: [{
            id: "1-1",
            value: "Laptop",
            options: [{
              id: "1-1-1",
              value: "Apple",
              options: []
            }, {
              id: "1-1-2",
              value: "Asus",
              options: []
            }]
          }, {
            id: "1-2",
            value: "Charger",
            options: []
          }, {
            id: "1-3",
            value: "Wire",
            options: []
          }, {
            id: "1-4",
            value: "Watch",
            options: []
          }]
        }, {
          id: "2",
          value: "Stationery",
          options: [{
            id: "2-1",
            value: "Pen",
            options: []
          }, {
            id: "2-2",
            value: "Eraser",
            options: []
          }]
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        class: "display-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Image Tool"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__["ImageTool"], {
        annotationWidth: 500,
        onNextClick: this.handleSubmit,
        onPreviousClick: this.handleSubmit,
        onSkipClick: this.handleSubmit,
        menu: menu,
        category: "Others",
        categoryOptions: ["No Objects", "No Image"],
        dynamicOptions: true,
        annotations: annotations,
        disabledOptionLevels: [1],
        url: "https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Output"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result, null, 2)))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/lodash.isfunction/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash.isfunction/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
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
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
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
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isobject/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
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
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash.tonumber/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.tonumber/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

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

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

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

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

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





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-annotation-tool/dist/bundle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-annotation-tool/dist/bundle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/",a(a.s=54)}([function(t,e,a){t.exports=a(57)()},function(t,e,a){"use strict";t.exports=a(56)},function(t,e,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},a=0;a<10;a++)e["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var a,c,i=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))r.call(a,s)&&(i[s]=a[s]);if(n){c=n(a);for(var d=0;d<c.length;d++)o.call(a,c[d])&&(i[c[d]]=a[c[d]])}}return i}},function(t,e,a){"use strict";t.exports=a(60)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.YouTube=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h="YT",p=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/,u=e.YouTube=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.onStateChange=function(t){var e=t.data,a=n.props,r=a.onPlay,o=a.onPause,c=a.onBuffer,i=a.onEnded,l=a.onReady,s=window[h].PlayerState,d=s.PLAYING,p=s.PAUSED,u=s.BUFFERING,v=s.ENDED,g=s.CUED;e===d&&r(),e===p&&o(),e===u&&c(),e===v&&i(),e===g&&l()},n.mute=function(){n.callPlayer("mute")},n.unmute=function(){n.callPlayer("unMute")},n.ref=function(t){n.container=t},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"load",value:function(t,e){var a=this,r=this.props,o=r.playing,c=r.muted,l=r.playsinline,s=r.controls,d=r.config,u=r.onError,v=d.youtube.playerVars,g=t&&t.match(p)[1];e?this.player.cueVideoById({videoId:g,startSeconds:(0,i.parseStartTime)(t)||v.start,endSeconds:(0,i.parseEndTime)(t)||v.end}):(0,i.getSDK)("https://www.youtube.com/iframe_api",h,"onYouTubeIframeAPIReady",function(t){return t.loaded}).then(function(e){a.container&&(a.player=new e.Player(a.container,{width:"100%",height:"100%",videoId:g,playerVars:n({autoplay:o?1:0,mute:c?1:0,controls:s?1:0,start:(0,i.parseStartTime)(t),end:(0,i.parseEndTime)(t),origin:window.location.origin,playsinline:l},v),events:{onReady:a.props.onReady,onStateChange:a.onStateChange,onError:function(t){return u(t.data)}}}))},u)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(t){this.callPlayer("seekTo",t),this.props.playing||this.pause()}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",100*t)}},{key:"setPlaybackRate",value:function(t){this.callPlayer("setPlaybackRate",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var t=n({width:"100%",height:"100%"},this.props.style);return c.default.createElement("div",{style:t},c.default.createElement("div",{ref:this.ref}))}}]),e}();u.displayName="YouTube",u.canPlay=function(t){return p.test(t)},u.loopOnEnded=!0,e.default=(0,l.default)(u)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),c=a(1),i=(n=c)&&n.__esModule?n:{default:n},l=a(15),s=a(3);function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.mounted=!1,n.isReady=!1,n.isPlaying=!1,n.isLoading=!0,n.loadOnReady=null,n.startOnPlay=!0,n.seekOnPlay=null,n.onDurationCalled=!1,n.getInternalPlayer=function(t){return n.player?n.player[t]:null},n.progress=function(){if(n.props.url&&n.player&&n.isReady){var t=n.getCurrentTime()||0,e=n.getSecondsLoaded(),a=n.getDuration();if(a){var r={playedSeconds:t,played:t/a};null!==e&&(r.loadedSeconds=e,r.loaded=e/a),r.played===n.prevPlayed&&r.loaded===n.prevLoaded||n.props.onProgress(r),n.prevPlayed=r.played,n.prevLoaded=r.loaded}}n.progressTimeout=setTimeout(n.progress,n.props.progressFrequency||n.props.progressInterval)},n.onReady=function(){if(n.mounted){n.isReady=!0,n.isLoading=!1;var t=n.props,e=t.onReady,a=t.playing,r=t.volume,o=t.muted;e(),o||null===r||n.player.setVolume(r),n.loadOnReady?(n.player.load(n.loadOnReady,!0),n.loadOnReady=null):a&&n.player.play(),n.onDurationCheck()}},n.onPlay=function(){n.isPlaying=!0,n.isLoading=!1;var t=n.props,e=t.onStart,a=t.onPlay,r=t.playbackRate;n.startOnPlay&&(n.player.setPlaybackRate&&n.player.setPlaybackRate(r),e(),n.startOnPlay=!1),a(),n.seekOnPlay&&(n.seekTo(n.seekOnPlay),n.seekOnPlay=null),n.onDurationCheck()},n.onPause=function(t){n.isPlaying=!1,n.isLoading||n.props.onPause(t)},n.onEnded=function(){var t=n.props,e=t.activePlayer,a=t.loop,r=t.onEnded;e.loopOnEnded&&a&&n.seekTo(0),a||(n.isPlaying=!1,r())},n.onDurationCheck=function(){clearTimeout(n.durationCheckTimeout);var t=n.getDuration();t?n.onDurationCalled||(n.props.onDuration(t),n.onDurationCalled=!0):n.durationCheckTimeout=setTimeout(n.onDurationCheck,100)},n.onLoaded=function(){n.isLoading=!1},n.ref=function(t){t&&(n.player=t)},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,c.Component),o(e,[{key:"componentDidMount",value:function(){this.mounted=!0,this.player.load(this.props.url),this.progress()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.player.stop(),this.player.disablePIP&&this.player.disablePIP(),this.mounted=!1}},{key:"componentWillReceiveProps",value:function(t){var e=this,a=this.props,n=a.url,r=a.playing,o=a.volume,c=a.muted,i=a.playbackRate,l=a.pip;if(!(0,s.isEqual)(n,t.url)){if(this.isLoading)return console.warn("ReactPlayer: the attempt to load "+t.url+" is being deferred until the player has loaded"),void(this.loadOnReady=t.url);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t.url,this.isReady)}r||!t.playing||this.isPlaying||this.player.play(),r&&!t.playing&&this.isPlaying&&this.player.pause(),!l&&t.pip&&this.player.enablePIP?this.player.enablePIP():l&&!t.pip&&this.player.disablePIP&&this.player.disablePIP(),o!==t.volume&&null!==t.volume&&this.player.setVolume(t.volume),c!==t.muted&&(t.muted?this.player.mute():(this.player.unmute(),null!==t.volume&&setTimeout(function(){return e.player.setVolume(t.volume)}))),i!==t.playbackRate&&this.player.setPlaybackRate&&this.player.setPlaybackRate(t.playbackRate)}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(t){var e=this;if(!this.isReady&&0!==t)return this.seekOnPlay=t,void setTimeout(function(){e.seekOnPlay=null},5e3);if(t>0&&t<1){var a=this.player.getDuration();return a?void this.player.seekTo(a*t):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(t)}},{key:"render",value:function(){var t=this.props.activePlayer;return t?i.default.createElement(t,r({},this.props,{ref:this.ref,onReady:this.onReady,onPlay:this.onPlay,onPause:this.onPause,onEnded:this.onEnded,onLoaded:this.onLoaded})):null}}]),e}();h.displayName="Player",h.propTypes=l.propTypes,h.defaultProps=l.defaultProps,e.default=h},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SoundCloud=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/(soundcloud\.com|snd\.sc)\/.+$/,p=e.SoundCloud=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.duration=null,n.currentTime=null,n.fractionLoaded=null,n.mute=function(){n.setVolume(0)},n.unmute=function(){null!==n.props.volume&&n.setVolume(n.props.volume)},n.ref=function(t){n.iframe=t},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"load",value:function(t,e){var a=this;(0,i.getSDK)("https://w.soundcloud.com/player/api.js","SC").then(function(r){if(a.iframe){var o=r.Widget.Events,c=o.PLAY,i=o.PLAY_PROGRESS,l=o.PAUSE,s=o.FINISH,d=o.ERROR;e||(a.player=r.Widget(a.iframe),a.player.bind(c,a.props.onPlay),a.player.bind(l,a.props.onPause),a.player.bind(i,function(t){a.currentTime=t.currentPosition/1e3,a.fractionLoaded=t.loadedProgress}),a.player.bind(s,function(){return a.props.onEnded()}),a.player.bind(d,function(t){return a.props.onError(t)})),a.player.load(t,n({},a.props.config.soundcloud.options,{callback:function(){a.player.getDuration(function(t){a.duration=t/1e3,a.props.onReady()})}}))}})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seekTo",1e3*t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",100*t)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var t=n({width:"100%",height:"100%"},this.props.style);return c.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url="+encodeURIComponent(this.props.url),style:t,frameBorder:0})}}]),e}();p.displayName="SoundCloud",p.canPlay=function(t){return h.test(t)},p.loopOnEnded=!0,e.default=(0,l.default)(p)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vimeo=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/vimeo\.com\/.+/,p=/vimeo\.com\/external\/.+\.mp4/,u=e.Vimeo=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.duration=null,n.currentTime=null,n.secondsLoaded=null,n.mute=function(){n.setVolume(0)},n.unmute=function(){null!==n.props.volume&&n.setVolume(n.props.volume)},n.ref=function(t){n.container=t},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"load",value:function(t){var e=this;this.duration=null,(0,i.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(function(a){e.container&&(e.player=new a.Player(e.container,n({},e.props.config.vimeo.playerOptions,{url:t,autoplay:e.props.playing,muted:e.props.muted,loop:e.props.loop})),e.player.ready().then(function(){var t=e.container.querySelector("iframe");t.style.width="100%",t.style.height="100%"}).catch(e.props.onError),e.player.on("loaded",function(){e.props.onReady(),e.refreshDuration()}),e.player.on("play",function(){e.props.onPlay(),e.refreshDuration()}),e.player.on("pause",e.props.onPause),e.player.on("seeked",function(t){return e.props.onSeek(t.seconds)}),e.player.on("ended",e.props.onEnded),e.player.on("error",e.props.onError),e.player.on("timeupdate",function(t){var a=t.seconds;e.currentTime=a}),e.player.on("progress",function(t){var a=t.seconds;e.secondsLoaded=a}))},this.props.onError)}},{key:"refreshDuration",value:function(){var t=this;this.player.getDuration().then(function(e){t.duration=e})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(t){this.callPlayer("setCurrentTime",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var t=n({width:"100%",height:"100%",overflow:"hidden",backgroundColor:"black"},this.props.style);return c.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}]),e}();u.displayName="Vimeo",u.canPlay=function(t){return!p.test(t)&&h.test(t)},e.default=(0,l.default)(u)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DailyMotion=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),c=a(1),i=d(c),l=a(3),s=d(a(6));function d(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var p=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,u=e.DailyMotion=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=l.callPlayer,n.onDurationChange=function(){var t=n.getDuration();n.props.onDuration(t)},n.mute=function(){n.callPlayer("setMuted",!0)},n.unmute=function(){n.callPlayer("setMuted",!1)},n.ref=function(t){n.container=t},h(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,c.Component),o(e,[{key:"load",value:function(t){var e=this,a=this.props,o=a.controls,c=a.config,i=a.onError,s=a.playing,d=t.match(p),h=r(d,2)[1];this.player?this.player.load(h,{start:(0,l.parseStartTime)(t),autoplay:s}):(0,l.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",function(t){return t.player}).then(function(a){if(e.container){var r=a.player;e.player=new r(e.container,{width:"100%",height:"100%",video:h,params:n({controls:o,autoplay:e.props.playing,mute:e.props.muted,start:(0,l.parseStartTime)(t),origin:window.location.origin},c.dailymotion.params),events:{apiready:e.props.onReady,seeked:function(){return e.props.onSeek(e.player.currentTime)},video_end:e.props.onEnded,durationchange:e.onDurationChange,pause:e.props.onPause,playing:e.props.onPlay,waiting:e.props.onBuffer,error:function(t){return i(t)}}})}},i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var t=n({width:"100%",height:"100%",backgroundColor:"black"},this.props.style);return i.default.createElement("div",{style:t},i.default.createElement("div",{ref:this.ref}))}}]),e}();u.displayName="DailyMotion",u.canPlay=function(t){return p.test(t)},u.loopOnEnded=!0,e.default=(0,s.default)(u)},function(t,e,a){"use strict";var n=function(t){if(void 0===t)throw new Error("invariant(...): Second argument must be a string.")};t.exports=function(t,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),o=2;o<a;o++)r[o-2]=arguments[o];if(n(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=0;(c=new Error(e.replace(/%s/g,function(){return String(r[i++])}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=d(a(1)),c=(d(a(7)),d(a(12)),d(a(28))),i=d(a(17)),l=d(a(0)),s=d(a(48));function d(t){return t&&t.__esModule?t:{default:t}}var h={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,spy:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool};e.default=function(t,e){var a=e||i.default,l=function(e){function i(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t));return d.call(e),e.state={active:!1},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,o.default.PureComponent),r(i,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();c.default.isMounted(t)||c.default.mount(t),this.props.hashSpy&&(s.default.isMounted()||s.default.mount(a),s.default.mapContainer(this.props.to,t)),c.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){c.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var a=n({},this.props);for(var r in h)a.hasOwnProperty(r)&&delete a[r];return a.className=e,a.onClick=this.handleClick,o.default.createElement(t,a)}}]),i}(),d=function(){var t=this;this.scrollTo=function(e,r){a.scrollTo(e,n({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e){var n=t.getScrollSpyContainer();if(!s.default.isMounted()||s.default.isInitialized()){var r=t.props.to,o=null,c=0,i=0,l=0;if(n.getBoundingClientRect)l=n.getBoundingClientRect().top;if(!o||t.props.isDynamic){if(!(o=a.get(r)))return;var d=o.getBoundingClientRect();i=(c=d.top-l+e)+d.height}var h=e-t.props.offset,p=h>=Math.floor(c)&&h<Math.floor(i),u=h<Math.floor(c)||h>=Math.floor(i),v=a.getActiveLink();u&&(r===v&&a.setActiveLink(void 0),t.props.hashSpy&&s.default.getHash()===r&&s.default.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(r,o))),!p||v===r&&!1!==t.state.active||(a.setActiveLink(r),t.props.hashSpy&&s.default.changeHash(r),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(r,o)))}}};return l.propTypes=h,l.defaultProps={offset:0},l}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a(88),o=(n=r)&&n.__esModule?n:{default:n},c=a(29);var i={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t){if(t){var e=function(t){return(0,o.default)(t,66)}(function(e){i.scrollHandler(t)});i.scrollSpyContainers.push(t),(0,c.addPassiveEventListener)(t,"scroll",e)}},isMounted:function(t){return-1!==i.scrollSpyContainers.indexOf(t)},currentPositionY:function(t){if(t===document){var e=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(i.scrollSpyContainers[i.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach(function(e){return e(i.currentPositionY(t))})},addStateHandler:function(t){i.spySetState.push(t)},addSpyHandler:function(t,e){var a=i.scrollSpyContainers[i.scrollSpyContainers.indexOf(e)];a.spyCallbacks||(a.spyCallbacks=[]),a.spyCallbacks.push(t),t(i.currentPositionY(e))},updateStates:function(){i.spySetState.forEach(function(t){return t()})},unmount:function(t,e){i.scrollSpyContainers.forEach(function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)}),i.spySetState&&i.spySetState.length&&i.spySetState.splice(i.spySetState.indexOf(t),1),document.removeEventListener("scroll",i.scrollHandler)},update:function(){return i.scrollSpyContainers.forEach(function(t){return i.scrollHandler(t)})}};e.default=i},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=function(t,e,a){var n=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}();t.addEventListener(e,a,!!n&&{passive:!0})},e.removePassiveEventListener=function(t,e,a){t.removeEventListener(e,a)}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(t,e){n.registered[t]=e},remove:function(t){n.registered[t]=null}}};e.default=n},function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}},function(t,e,a){"use strict";(function(t){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var a="undefined"!=typeof window&&"undefined"!=typeof document,n=["Edge","Trident","Firefox"],r=0,o=0;o<n.length;o+=1)if(a&&navigator.userAgent.indexOf(n[o])>=0){r=1;break}var c=a&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},r))}};function i(t){return t&&"[object Function]"==={}.toString.call(t)}function l(t,e){if(1!==t.nodeType)return[];var a=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?a[e]:a}function s(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function d(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=l(t),a=e.overflow,n=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(a+r+n)?t:d(s(t))}var h=a&&!(!window.MSInputMethodContext||!document.documentMode),p=a&&/MSIE 10/.test(navigator.userAgent);function u(t){return 11===t?h:10===t?p:h||p}function v(t){if(!t)return document.documentElement;for(var e=u(10)?document.body:null,a=t.offsetParent||null;a===e&&t.nextElementSibling;)a=(t=t.nextElementSibling).offsetParent;var n=a&&a.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(a.nodeName)&&"static"===l(a,"position")?v(a):a:t?t.ownerDocument.documentElement:document.documentElement}function g(t){return null!==t.parentNode?g(t.parentNode):t}function m(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var a=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=a?t:e,r=a?e:t,o=document.createRange();o.setStart(n,0),o.setEnd(r,0);var c,i,l=o.commonAncestorContainer;if(t!==l&&e!==l||n.contains(r))return"BODY"===(i=(c=l).nodeName)||"HTML"!==i&&v(c.firstElementChild)!==c?v(l):l;var s=g(t);return s.host?m(s.host,e):m(t,g(e).host)}function f(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",a=t.nodeName;if("BODY"===a||"HTML"===a){var n=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||n)[e]}return t[e]}function x(t,e){var a="x"===e?"Left":"Top",n="Left"===a?"Right":"Bottom";return parseFloat(t["border"+a+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}function M(t,e,a,n){return Math.max(e["offset"+t],e["scroll"+t],a["client"+t],a["offset"+t],a["scroll"+t],u(10)?parseInt(a["offset"+t])+parseInt(n["margin"+("Height"===t?"Top":"Left")])+parseInt(n["margin"+("Height"===t?"Bottom":"Right")]):0)}function z(t){var e=t.body,a=t.documentElement,n=u(10)&&getComputedStyle(a);return{height:M("Height",e,a,n),width:M("Width",e,a,n)}}var y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},b=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),w=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};function H(t){return C({},t,{right:t.left+t.width,bottom:t.top+t.height})}function F(t){var e={};try{if(u(10)){e=t.getBoundingClientRect();var a=f(t,"top"),n=f(t,"left");e.top+=a,e.left+=n,e.bottom+=a,e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?z(t.ownerDocument):{},c=o.width||t.clientWidth||r.right-r.left,i=o.height||t.clientHeight||r.bottom-r.top,s=t.offsetWidth-c,d=t.offsetHeight-i;if(s||d){var h=l(t);s-=x(h,"x"),d-=x(h,"y"),r.width-=s,r.height-=d}return H(r)}function V(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=u(10),r="HTML"===e.nodeName,o=F(t),c=F(e),i=d(t),s=l(e),h=parseFloat(s.borderTopWidth,10),p=parseFloat(s.borderLeftWidth,10);a&&r&&(c.top=Math.max(c.top,0),c.left=Math.max(c.left,0));var v=H({top:o.top-c.top-h,left:o.left-c.left-p,width:o.width,height:o.height});if(v.marginTop=0,v.marginLeft=0,!n&&r){var g=parseFloat(s.marginTop,10),m=parseFloat(s.marginLeft,10);v.top-=h-g,v.bottom-=h-g,v.left-=p-m,v.right-=p-m,v.marginTop=g,v.marginLeft=m}return(n&&!a?e.contains(i):e===i&&"BODY"!==i.nodeName)&&(v=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=f(e,"top"),r=f(e,"left"),o=a?-1:1;return t.top+=n*o,t.bottom+=n*o,t.left+=r*o,t.right+=r*o,t}(v,e)),v}function L(t){if(!t||!t.parentElement||u())return document.documentElement;for(var e=t.parentElement;e&&"none"===l(e,"transform");)e=e.parentElement;return e||document.documentElement}function N(t,e,a,n){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},c=r?L(t):m(t,e);if("viewport"===n)o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t.ownerDocument.documentElement,n=V(t,a),r=Math.max(a.clientWidth,window.innerWidth||0),o=Math.max(a.clientHeight,window.innerHeight||0),c=e?0:f(a),i=e?0:f(a,"left");return H({top:c-n.top+n.marginTop,left:i-n.left+n.marginLeft,width:r,height:o})}(c,r);else{var i=void 0;"scrollParent"===n?"BODY"===(i=d(s(e))).nodeName&&(i=t.ownerDocument.documentElement):i="window"===n?t.ownerDocument.documentElement:n;var h=V(i,c,r);if("HTML"!==i.nodeName||function t(e){var a=e.nodeName;return"BODY"!==a&&"HTML"!==a&&("fixed"===l(e,"position")||t(s(e)))}(c))o=h;else{var p=z(t.ownerDocument),u=p.height,v=p.width;o.top+=h.top-h.marginTop,o.bottom=u+h.top,o.left+=h.left-h.marginLeft,o.right=v+h.left}}var g="number"==typeof(a=a||0);return o.left+=g?a:a.left||0,o.top+=g?a:a.top||0,o.right-=g?a:a.right||0,o.bottom-=g?a:a.bottom||0,o}function B(t,e,a,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var c=N(a,n,o,r),i={top:{width:c.width,height:e.top-c.top},right:{width:c.right-e.right,height:c.height},bottom:{width:c.width,height:c.bottom-e.bottom},left:{width:e.left-c.left,height:c.height}},l=Object.keys(i).map(function(t){return C({key:t},i[t],{area:(e=i[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),s=l.filter(function(t){var e=t.width,n=t.height;return e>=a.clientWidth&&n>=a.clientHeight}),d=s.length>0?s[0].key:l[0].key,h=t.split("-")[1];return d+(h?"-"+h:"")}function S(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return V(a,n?L(e):m(e,a),n)}function I(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),a=parseFloat(e.marginTop)+parseFloat(e.marginBottom),n=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+n,height:t.offsetHeight+a}}function k(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function P(t,e,a){a=a.split("-")[0];var n=I(t),r={width:n.width,height:n.height},o=-1!==["right","left"].indexOf(a),c=o?"top":"left",i=o?"left":"top",l=o?"height":"width",s=o?"width":"height";return r[c]=e[c]+e[l]/2-n[l]/2,r[i]=a===i?e[i]-n[s]:e[k(i)],r}function T(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function A(t,e,a){return(void 0===a?t:t.slice(0,function(t,e,a){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===a});var n=T(t,function(t){return t[e]===a});return t.indexOf(n)}(t,"name",a))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var a=t.function||t.fn;t.enabled&&i(a)&&(e.offsets.popper=H(e.offsets.popper),e.offsets.reference=H(e.offsets.reference),e=a(e,t))}),e}function _(t,e){return t.some(function(t){var a=t.name;return t.enabled&&a===e})}function E(t){for(var e=[!1,"ms","Webkit","Moz","O"],a=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var r=e[n],o=r?""+r+a:t;if(void 0!==document.body.style[o])return o}return null}function R(t){var e=t.ownerDocument;return e?e.defaultView:window}function O(t,e,a,n){a.updateBound=n,R(t).addEventListener("resize",a.updateBound,{passive:!0});var r=d(t);return function t(e,a,n,r){var o="BODY"===e.nodeName,c=o?e.ownerDocument.defaultView:e;c.addEventListener(a,n,{passive:!0}),o||t(d(c.parentNode),a,n,r),r.push(c)}(r,"scroll",a.updateBound,a.scrollParents),a.scrollElement=r,a.eventsEnabled=!0,a}function D(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,R(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function G(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function j(t,e){Object.keys(e).forEach(function(a){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(a)&&G(e[a])&&(n="px"),t.style[a]=e[a]+n})}function U(t,e,a){var n=T(t,function(t){return t.name===e}),r=!!n&&t.some(function(t){return t.name===a&&t.enabled&&t.order<n.order});if(!r){var o="`"+e+"`",c="`"+a+"`";console.warn(c+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var K=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],W=K.slice(3);function q(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=W.indexOf(t),n=W.slice(a+1).concat(W.slice(0,a));return e?n.reverse():n}var Y={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function Q(t,e,a,n){var r=[0,0],o=-1!==["right","left"].indexOf(n),c=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=c.indexOf(T(c,function(t){return-1!==t.search(/,|\s/)}));c[i]&&-1===c[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,s=-1!==i?[c.slice(0,i).concat([c[i].split(l)[0]]),[c[i].split(l)[1]].concat(c.slice(i+1))]:[c];return(s=s.map(function(t,n){var r=(1===n?!o:o)?"height":"width",c=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,c=!0,t):c?(t[t.length-1]+=e,c=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,a,n){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],c=r[2];if(!o)return t;if(0===c.indexOf("%")){var i=void 0;switch(c){case"%p":i=a;break;case"%":case"%r":default:i=n}return H(i)[e]/100*o}if("vh"===c||"vw"===c)return("vh"===c?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,r,e,a)})})).forEach(function(t,e){t.forEach(function(a,n){G(a)&&(r[e]+=a*("-"===t[n-1]?-1:1))})}),r}var X={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,a=e.split("-")[0],n=e.split("-")[1];if(n){var r=t.offsets,o=r.reference,c=r.popper,i=-1!==["bottom","top"].indexOf(a),l=i?"left":"top",s=i?"width":"height",d={start:w({},l,o[l]),end:w({},l,o[l]+o[s]-c[s])};t.offsets.popper=C({},c,d[n])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var a=e.offset,n=t.placement,r=t.offsets,o=r.popper,c=r.reference,i=n.split("-")[0],l=void 0;return l=G(+a)?[+a,0]:Q(a,o,c,i),"left"===i?(o.top+=l[0],o.left-=l[1]):"right"===i?(o.top+=l[0],o.left+=l[1]):"top"===i?(o.left+=l[0],o.top-=l[1]):"bottom"===i&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var a=e.boundariesElement||v(t.instance.popper);t.instance.reference===a&&(a=v(a));var n=E("transform"),r=t.instance.popper.style,o=r.top,c=r.left,i=r[n];r.top="",r.left="",r[n]="";var l=N(t.instance.popper,t.instance.reference,e.padding,a,t.positionFixed);r.top=o,r.left=c,r[n]=i,e.boundaries=l;var s=e.priority,d=t.offsets.popper,h={primary:function(t){var a=d[t];return d[t]<l[t]&&!e.escapeWithReference&&(a=Math.max(d[t],l[t])),w({},t,a)},secondary:function(t){var a="right"===t?"left":"top",n=d[a];return d[t]>l[t]&&!e.escapeWithReference&&(n=Math.min(d[a],l[t]-("right"===t?d.width:d.height))),w({},a,n)}};return s.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";d=C({},d,h[e](t))}),t.offsets.popper=d,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,a=e.popper,n=e.reference,r=t.placement.split("-")[0],o=Math.floor,c=-1!==["top","bottom"].indexOf(r),i=c?"right":"bottom",l=c?"left":"top",s=c?"width":"height";return a[i]<o(n[l])&&(t.offsets.popper[l]=o(n[l])-a[s]),a[l]>o(n[i])&&(t.offsets.popper[l]=o(n[i])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var a;if(!U(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,c=o.popper,i=o.reference,s=-1!==["left","right"].indexOf(r),d=s?"height":"width",h=s?"Top":"Left",p=h.toLowerCase(),u=s?"left":"top",v=s?"bottom":"right",g=I(n)[d];i[v]-g<c[p]&&(t.offsets.popper[p]-=c[p]-(i[v]-g)),i[p]+g>c[v]&&(t.offsets.popper[p]+=i[p]+g-c[v]),t.offsets.popper=H(t.offsets.popper);var m=i[p]+i[d]/2-g/2,f=l(t.instance.popper),x=parseFloat(f["margin"+h],10),M=parseFloat(f["border"+h+"Width"],10),z=m-t.offsets.popper[p]-x-M;return z=Math.max(Math.min(c[d]-g,z),0),t.arrowElement=n,t.offsets.arrow=(w(a={},p,Math.round(z)),w(a,u,""),a),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(_(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var a=N(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),n=t.placement.split("-")[0],r=k(n),o=t.placement.split("-")[1]||"",c=[];switch(e.behavior){case Y.FLIP:c=[n,r];break;case Y.CLOCKWISE:c=q(n);break;case Y.COUNTERCLOCKWISE:c=q(n,!0);break;default:c=e.behavior}return c.forEach(function(i,l){if(n!==i||c.length===l+1)return t;n=t.placement.split("-")[0],r=k(n);var s=t.offsets.popper,d=t.offsets.reference,h=Math.floor,p="left"===n&&h(s.right)>h(d.left)||"right"===n&&h(s.left)<h(d.right)||"top"===n&&h(s.bottom)>h(d.top)||"bottom"===n&&h(s.top)<h(d.bottom),u=h(s.left)<h(a.left),v=h(s.right)>h(a.right),g=h(s.top)<h(a.top),m=h(s.bottom)>h(a.bottom),f="left"===n&&u||"right"===n&&v||"top"===n&&g||"bottom"===n&&m,x=-1!==["top","bottom"].indexOf(n),M=!!e.flipVariations&&(x&&"start"===o&&u||x&&"end"===o&&v||!x&&"start"===o&&g||!x&&"end"===o&&m);(p||f||M)&&(t.flipped=!0,(p||f)&&(n=c[l+1]),M&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=n+(o?"-"+o:""),t.offsets.popper=C({},t.offsets.popper,P(t.instance.popper,t.offsets.reference,t.placement)),t=A(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,a=e.split("-")[0],n=t.offsets,r=n.popper,o=n.reference,c=-1!==["left","right"].indexOf(a),i=-1===["top","left"].indexOf(a);return r[c?"left":"top"]=o[a]-(i?r[c?"width":"height"]:0),t.placement=k(e),t.offsets.popper=H(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!U(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,a=T(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<a.top||e.left>a.right||e.top>a.bottom||e.right<a.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var a=e.x,n=e.y,r=t.offsets.popper,o=T(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var c=void 0!==o?o:e.gpuAcceleration,i=v(t.instance.popper),l=F(i),s={position:r.position},d={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},h="bottom"===a?"top":"bottom",p="right"===n?"left":"right",u=E("transform"),g=void 0,m=void 0;if(m="bottom"===h?"HTML"===i.nodeName?-i.clientHeight+d.bottom:-l.height+d.bottom:d.top,g="right"===p?"HTML"===i.nodeName?-i.clientWidth+d.right:-l.width+d.right:d.left,c&&u)s[u]="translate3d("+g+"px, "+m+"px, 0)",s[h]=0,s[p]=0,s.willChange="transform";else{var f="bottom"===h?-1:1,x="right"===p?-1:1;s[h]=m*f,s[p]=g*x,s.willChange=h+", "+p}var M={"x-placement":t.placement};return t.attributes=C({},M,t.attributes),t.styles=C({},s,t.styles),t.arrowStyles=C({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,a;return j(t.instance.popper,t.styles),e=t.instance.popper,a=t.attributes,Object.keys(a).forEach(function(t){!1!==a[t]?e.setAttribute(t,a[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&j(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,a,n,r){var o=S(r,e,t,a.positionFixed),c=B(a.placement,o,e,t,a.modifiers.flip.boundariesElement,a.modifiers.flip.padding);return e.setAttribute("x-placement",c),j(e,{position:a.positionFixed?"fixed":"absolute"}),a},gpuAcceleration:void 0}}},J=function(){function t(e,a){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=c(this.update.bind(this)),this.options=C({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=a&&a.jquery?a[0]:a,this.options.modifiers={},Object.keys(C({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=C({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return C({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&i(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return b(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=S(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=B(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=P(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=A(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,_(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[E("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=O(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return D.call(this)}}]),t}();J.Utils=("undefined"!=typeof window?window:t).PopperUtils,J.placements=K,J.Defaults=X,e.a=J}).call(this,a(13))},function(t,e){var a=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,s=Object.prototype.toString;function d(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&s.call(t)==n}(t))return a;if(d(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=d(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var h=c.test(t);return h||i.test(t)?l(t.slice(2),h?2:8):o.test(t)?a:+t}},function(t,e,a){"use strict";function n(t){return!(!t||"function"!=typeof t.hasOwnProperty||!(t.hasOwnProperty("__ownerID")||t._map&&t._map.hasOwnProperty("__ownerID")))}function r(t,e,a){return Object.keys(t).reduce(function(e,n){var r=""+n;return e.has(r)?e.set(r,a(e.get(r),t[r])):e},e)}a.r(e),a.d(e,"schema",function(){return C}),a.d(e,"normalize",function(){return H}),a.d(e,"denormalize",function(){return L});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t){return function(e){return n(e)?e.get(t):e[t]}},p=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(c(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var r=n.idAttribute,o=void 0===r?"id":r,i=n.mergeStrategy,s=void 0===i?function(t,e){return l({},t,e)}:i,d=n.processStrategy,p=void 0===d?function(t){return l({},t)}:d;this._key=e,this._getId="function"==typeof o?o:h(o),this._idAttribute=o,this._mergeStrategy=s,this._processStrategy=p,this.define(a)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var n,r=t[a];return l({},e,((n={})[a]=r,n))},this.schema||{})},t.prototype.getId=function(t,e,a){return this._getId(t,e,a)},t.prototype.merge=function(t,e){return this._mergeStrategy(t,e)},t.prototype.normalize=function(t,e,a,n,r){var c=this,i=this._processStrategy(t,e,a);return Object.keys(this.schema).forEach(function(t){if(i.hasOwnProperty(t)&&"object"===o(i[t])){var e=c.schema[t];i[t]=n(i[t],i,t,e,r)}}),r(this,i,t,e,a),this.getId(t,e,a)},t.prototype.denormalize=function(t,e){var a=this;return n(t)?r(this.schema,t,e):(Object.keys(this.schema).forEach(function(n){if(t.hasOwnProperty(n)){var r=a.schema[n];t[n]=e(t[n],r)}}),t)},i(t,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}(),u=function(){function t(e,a){c(this,t),a&&(this._schemaAttribute="string"==typeof a?function(t){return t[a]}:a),this.define(e)}return t.prototype.define=function(t){this.schema=t},t.prototype.getSchemaAttribute=function(t,e,a){return!this.isSingleSchema&&this._schemaAttribute(t,e,a)},t.prototype.inferSchema=function(t,e,a){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(t,e,a);return this.schema[n]},t.prototype.normalizeValue=function(t,e,a,n,r){var o=this.inferSchema(t,e,a);if(!o)return t;var c=n(t,e,a,o,r);return this.isSingleSchema||null==c?c:{id:c,schema:this.getSchemaAttribute(t,e,a)}},t.prototype.denormalizeValue=function(t,e){var a=n(t)?t.get("schema"):t.schema;return this.isSingleSchema||a?e((n(t)?t.get("id"):t.id)||t,this.isSingleSchema?this.schema:this.schema[a]):t},i(t,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),t}(),v=function(t){function e(a,n){if(c(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return d(this,t.call(this,a,n))}return s(e,t),e.prototype.normalize=function(t,e,a,n,r){return this.normalizeValue(t,e,a,n,r)},e.prototype.denormalize=function(t,e){return this.denormalizeValue(t,e)},e}(u),g=function(t){function e(){return c(this,e),d(this,t.apply(this,arguments))}return s(e,t),e.prototype.normalize=function(t,e,a,n,r){var o=this;return Object.keys(t).reduce(function(e,a,c){var i,s=t[a];return null!=s?l({},e,((i={})[a]=o.normalizeValue(s,t,a,n,r),i)):e},{})},e.prototype.denormalize=function(t,e){var a=this;return Object.keys(t).reduce(function(n,r){var o,c=t[r];return l({},n,((o={})[r]=a.denormalizeValue(c,e),o))},{})},e}(u),m=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},f=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},x=function(t,e,a,n,r,o){return t=m(t),f(e).map(function(e,c){return r(e,a,n,t,o)})},M=function(t,e,a){return t=m(t),e&&e.map?e.map(function(e){return a(e,t)}):e},z=function(t){function e(){return c(this,e),d(this,t.apply(this,arguments))}return s(e,t),e.prototype.normalize=function(t,e,a,n,r){var o=this;return f(t).map(function(t,c){return o.normalizeValue(t,e,a,n,r)}).filter(function(t){return null!=t})},e.prototype.denormalize=function(t,e){var a=this;return t&&t.map?t.map(function(t){return a.denormalizeValue(t,e)}):t},e}(u),y=function(t,e,a,n,r,o){var c=l({},e);return Object.keys(t).forEach(function(a){var n=t[a],i=r(e[a],e,a,n,o);null==i?delete c[a]:c[a]=i}),c},b=function(t,e,a){if(n(e))return r(t,e,a);var o=l({},e);return Object.keys(t).forEach(function(e){o[e]&&(o[e]=a(o[e],t[e]))}),o},w=function(){function t(e){c(this,t),this.define(e)}return t.prototype.define=function(t){this.schema=Object.keys(t).reduce(function(e,a){var n,r=t[a];return l({},e,((n={})[a]=r,n))},this.schema||{})},t.prototype.normalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return y.apply(void 0,[this.schema].concat(e))},t.prototype.denormalize=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];return b.apply(void 0,[this.schema].concat(e))},t}(),C={Array:z,Entity:p,Object:w,Union:v,Values:g},H=function(t,e){if(!t||"object"!==(void 0===t?"undefined":o(t)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===t?"undefined":o(t))+'".');var a={},n=function(t){return function(e,a,n,r,o){var c=e.key,i=e.getId(n,r,o);c in t||(t[c]={});var l=t[c][i];t[c][i]=l?e.merge(l,a):a}}(a);return{entities:a,result:function t(e,a,n,r,c){return"object"===(void 0===e?"undefined":o(e))&&e?"object"!==(void 0===r?"undefined":o(r))||r.normalize&&"function"==typeof r.normalize?r.normalize(e,a,n,t,c):(Array.isArray(r)?x:y)(r,e,a,n,t,c):e}(t,t,null,e,n)}},F=function(t){var e={},a=V(t);return function t(r,c){return"object"!==(void 0===c?"undefined":o(c))||c.denormalize&&"function"==typeof c.denormalize?null==r?r:c instanceof p?function(t,e,a,r,c){var i=r(t,e);if("object"!==(void 0===i?"undefined":o(i))||null===i)return i;if(c[e.key]||(c[e.key]={}),!c[e.key][t]){var s=n(i)?i:l({},i);c[e.key][t]=s,c[e.key][t]=e.denormalize(s,a)}return c[e.key][t]}(r,c,t,a,e):c.denormalize(r,t):(Array.isArray(c)?M:b)(c,r,t)}},V=function(t){var e=n(t);return function(a,n){var r=n.key;return"object"===(void 0===a?"undefined":o(a))?a:e?t.getIn([r,a.toString()]):t[r][a]}},L=function(t,e,a){if(void 0!==t)return F(a)(t,e)}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FilePlayer=e.Mixcloud=e.DailyMotion=e.Twitch=e.Wistia=e.Streamable=e.Facebook=e.Vimeo=e.SoundCloud=e.YouTube=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(21);Object.defineProperty(e,"YouTube",{enumerable:!0,get:function(){return b(o).default}});var c=a(23);Object.defineProperty(e,"SoundCloud",{enumerable:!0,get:function(){return b(c).default}});var i=a(24);Object.defineProperty(e,"Vimeo",{enumerable:!0,get:function(){return b(i).default}});var l=a(36);Object.defineProperty(e,"Facebook",{enumerable:!0,get:function(){return b(l).default}});var s=a(37);Object.defineProperty(e,"Streamable",{enumerable:!0,get:function(){return b(s).default}});var d=a(38);Object.defineProperty(e,"Wistia",{enumerable:!0,get:function(){return b(d).default}});var h=a(39);Object.defineProperty(e,"Twitch",{enumerable:!0,get:function(){return b(h).default}});var p=a(25);Object.defineProperty(e,"DailyMotion",{enumerable:!0,get:function(){return b(p).default}});var u=a(40);Object.defineProperty(e,"Mixcloud",{enumerable:!0,get:function(){return b(u).default}});var v=a(41);Object.defineProperty(e,"FilePlayer",{enumerable:!0,get:function(){return b(v).default}});var g=a(1),m=b(g),f=a(15),x=a(3),M=b(a(67)),z=b(a(22)),y=b(a(68));function b(t){return t&&t.__esModule?t:{default:t}}function w(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function C(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var H=Object.keys(f.propTypes),F=[],V=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=C(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.config=(0,x.getConfig)(n.props,f.defaultProps,!0),n.getDuration=function(){return n.player?n.player.getDuration():null},n.getCurrentTime=function(){return n.player?n.player.getCurrentTime():null},n.getSecondsLoaded=function(){return n.player?n.player.getSecondsLoaded():null},n.getInternalPlayer=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return n.player?n.player.getInternalPlayer(t):null},n.seekTo=function(t){if(!n.player)return null;n.player.seekTo(t)},n.onReady=function(){n.props.onReady(n)},n.wrapperRef=function(t){n.wrapper=t},n.activePlayerRef=function(t){n.player=t},C(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,g.Component),r(e,[{key:"componentDidMount",value:function(){if(this.props.progressFrequency){console.warn("ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead","font-weight: bold","","font-weight: bold","")}}},{key:"shouldComponentUpdate",value:function(t){return!(0,x.isEqual)(this.props,t)}},{key:"componentWillUpdate",value:function(t){this.config=(0,x.getConfig)(t,f.defaultProps)}},{key:"getActivePlayer",value:function(t){for(var e=[].concat(w(F),w(M.default)),a=0;a<e.length;a++){var n=e[a];if(n.canPlay(t))return n}return v.FilePlayer}},{key:"renderActivePlayer",value:function(t){if(!t)return null;var e=this.getActivePlayer(t);return m.default.createElement(z.default,n({},this.props,{key:e.displayName,ref:this.activePlayerRef,config:this.config,activePlayer:e,onReady:this.onReady}))}},{key:"sortPlayers",value:function(t,e){return t&&e?t.key<e.key?-1:1:0}},{key:"render",value:function(){var t=this.props,e=t.url,a=t.style,r=t.width,o=t.height,c=t.wrapper,i=(0,x.omit)(this.props,H,f.DEPRECATED_CONFIG_PROPS),l=this.renderActivePlayer(e),s=(0,y.default)(e,this.config),d=[l].concat(w(s)).sort(this.sortPlayers);return m.default.createElement(c,n({ref:this.wrapperRef,style:n({},a,{width:r,height:o})},i),d)}}]),e}();V.addCustomPlayer=function(t){F.push(t)},V.removeCustomPlayers=function(){F=[]},V.displayName="ReactPlayer",V.propTypes=f.propTypes,V.defaultProps=f.defaultProps,V.canPlay=function(t){for(var e=[].concat(w(F),w(M.default)),a=0;a<e.length;a++){if(e[a].canPlay(t))return!0}return!1},V.canEnablePIP=function(t){for(var e=[].concat(w(F),w(M.default)),a=0;a<e.length;a++){var n=e[a];if(n.canEnablePIP&&n.canEnablePIP(t))return!0}return!1},e.default=V},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(1),o=l(r),c=a(3),i=l(a(6));function l(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d="//connect.facebook.net/en_US/sdk.js",h=/facebook\.com\/([^\/?].+\/)?video(s|\.php)[\/?].*$/,p="facebook-player-",u=e.Facebook=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=c.callPlayer,n.playerID=p+(0,c.randomString)(),n.mute=function(){n.callPlayer("mute")},n.unmute=function(){n.callPlayer("unmute")},s(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),n(e,[{key:"load",value:function(t,e){var a=this;e?(0,c.getSDK)(d,"FB","fbAsyncInit").then(function(t){return t.XFBML.parse()}):(0,c.getSDK)(d,"FB","fbAsyncInit").then(function(t){t.init({appId:a.props.config.facebook.appId,xfbml:!0,version:"v2.5"}),t.Event.subscribe("xfbml.render",function(t){a.props.onLoaded()}),t.Event.subscribe("xfbml.ready",function(t){"video"===t.type&&t.id===a.playerID&&(a.player=t.instance,a.player.subscribe("startedPlaying",a.props.onPlay),a.player.subscribe("paused",a.props.onPause),a.player.subscribe("finishedPlaying",a.props.onEnded),a.player.subscribe("startedBuffering",a.props.onBuffer),a.player.subscribe("error",a.props.onError),a.props.muted||a.callPlayer("unmute"),a.props.onReady(),document.getElementById(a.playerID).querySelector("iframe").style.visibility="visible")})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"black"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"})}}]),e}();u.displayName="Facebook",u.canPlay=function(t){return h.test(t)},u.loopOnEnded=!0,e.default=(0,i.default)(u)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Streamable=void 0;var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(1),o=l(r),c=a(3),i=l(a(6));function l(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=/streamable\.com\/([a-z0-9]+)$/,h=e.Streamable=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=c.callPlayer,n.duration=null,n.currentTime=null,n.secondsLoaded=null,n.mute=function(){n.callPlayer("mute")},n.unmute=function(){n.callPlayer("unmute")},n.ref=function(t){n.iframe=t},s(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),n(e,[{key:"load",value:function(t){var e=this;(0,c.getSDK)("//cdn.embed.ly/player-0.1.0.min.js","playerjs").then(function(t){e.iframe&&(e.player=new t.Player(e.iframe),e.player.setLoop(e.props.loop),e.player.on("ready",e.props.onReady),e.player.on("play",e.props.onPlay),e.player.on("pause",e.props.onPause),e.player.on("seeked",e.props.onSeek),e.player.on("ended",e.props.onEnded),e.player.on("error",e.props.onError),e.player.on("timeupdate",function(t){var a=t.duration,n=t.seconds;e.duration=a,e.currentTime=n}),e.player.on("buffered",function(t){var a=t.percent;e.duration&&(e.secondsLoaded=e.duration*a)}),e.props.muted&&e.player.mute())},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("setCurrentTime",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",100*t)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var t=this.props.url.match(d)[1];return o.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/"+t,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allowFullScreen:!0})}}]),e}();h.displayName="Streamable",h.canPlay=function(t){return d.test(t)},e.default=(0,i.default)(h)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Wistia=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,p=e.Wistia=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.mute=function(){n.callPlayer("mute")},n.unmute=function(){n.callPlayer("unmute")},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"getID",value:function(t){return t&&t.match(h)[1]}},{key:"load",value:function(t){var e=this,a=this.props,r=a.playing,o=a.muted,c=a.controls,l=a.onReady,s=a.onPlay,d=a.onPause,h=a.onSeek,p=a.onEnded,u=a.config;(0,i.getSDK)("//fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(){window._wq=window._wq||[],window._wq.push({id:e.getID(t),options:n({autoPlay:r,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:c},u.wistia.options),onReady:function(t){e.player=t,e.player.bind("play",s),e.player.bind("pause",d),e.player.bind("seek",h),e.player.bind("end",p),l()}})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("remove")}},{key:"seekTo",value:function(t){this.callPlayer("time",t)}},{key:"setVolume",value:function(t){this.callPlayer("volume",t)}},{key:"setPlaybackRate",value:function(t){this.callPlayer("playbackRate",t)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var t=this.getID(this.props.url),e="wistia_embed wistia_async_"+t;return c.default.createElement("div",{key:t,className:e,style:{width:"100%",height:"100%"}})}}]),e}();p.displayName="Wistia",p.canPlay=function(t){return h.test(t)},p.loopOnEnded=!0,e.default=(0,l.default)(p)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Twitch=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,p=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,u="twitch-player-",v=e.Twitch=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.playerID=u+(0,i.randomString)(),n.mute=function(){n.callPlayer("setMuted",!0)},n.unmute=function(){n.callPlayer("setMuted",!1)},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"load",value:function(t,e){var a=this,r=this.props,o=r.playsinline,c=r.onError,l=r.config,s=p.test(t),d=s?t.match(p)[1]:t.match(h)[1];e?s?this.player.setChannel(d):this.player.setVideo("v"+d):(0,i.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(function(t){a.player=new t.Player(a.playerID,n({video:s?"":d,channel:s?d:"",height:"100%",width:"100%",playsinline:o,autoplay:a.props.playing,muted:a.props.muted},l.twitch.options));var e=t.Player,r=e.READY,c=e.PLAYING,i=e.PAUSE,h=e.ENDED;a.player.addEventListener(r,a.props.onReady),a.player.addEventListener(c,a.props.onPlay),a.player.addEventListener(i,a.props.onPause),a.player.addEventListener(h,a.props.onEnded)},c)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return c.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}]),e}();v.displayName="Twitch",v.canPlay=function(t){return h.test(t)||p.test(t)},v.loopOnEnded=!0,e.default=(0,l.default)(v)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Mixcloud=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/mixcloud\.com\/([^\/]+\/[^\/]+)/,p=e.Mixcloud=function(t){function e(){var t,a,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=n=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),n.callPlayer=i.callPlayer,n.duration=null,n.currentTime=null,n.secondsLoaded=null,n.mute=function(){},n.unmute=function(){},n.ref=function(t){n.iframe=t},d(n,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"load",value:function(t){var e=this;(0,i.getSDK)("//widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(function(t){e.player=t.PlayerWidget(e.iframe),e.player.ready.then(function(){e.player.events.play.on(e.props.onPlay),e.player.events.pause.on(e.props.onPause),e.player.events.ended.on(e.props.onEnded),e.player.events.error.on(e.props.error),e.player.events.progress.on(function(t,a){e.currentTime=t,e.duration=a}),e.props.onReady()})},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var t=this.props,e=t.url,a=t.config,r=e.match(h)[1],o=(0,i.queryString)(n({},a.mixcloud.options,{feed:"/"+r+"/"}));return c.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?"+o,frameBorder:"0"})}}]),e}();p.displayName="Mixcloud",p.canPlay=function(t){return h.test(t)},e.default=(0,l.default)(p)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FilePlayer=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),c=s(o),i=a(3),l=s(a(6));function s(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,p=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,u=/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,v=/\.(m3u8)($|\?)/i,g=/\.(mpd)($|\?)/i,m=/www\.dropbox\.com\/.+/;function f(t){if(t instanceof Array){var e=!0,a=!1,n=void 0;try{for(var r,o=t[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var c=r.value;if("string"==typeof c&&f(c))return!0;if(f(c.src))return!0}}catch(t){a=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw n}}return!1}return!!(0,i.isMediaStream)(t)||(p.test(t)||u.test(t)||v.test(t)||g.test(t))}var x=e.FilePlayer=function(t){function e(){var t,a,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=r=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),r.onDisablePIP=function(t){var e=r.props,a=e.onDisablePIP,n=e.playing;a(t),n&&r.play()},r.onSeek=function(t){r.props.onSeek(t.target.currentTime)},r.mute=function(){r.player.muted=!0},r.unmute=function(){r.player.muted=!1},r.renderSourceElement=function(t,e){return"string"==typeof t?c.default.createElement("source",{key:e,src:t}):c.default.createElement("source",n({key:e},t))},r.renderTrack=function(t,e){return c.default.createElement("track",n({key:e},t))},r.ref=function(t){r.player=t},d(r,a)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),r(e,[{key:"componentDidMount",value:function(){this.addListeners(),h&&this.player.load()}},{key:"componentWillReceiveProps",value:function(t){this.shouldUseAudio(this.props)!==this.shouldUseAudio(t)&&this.removeListeners()}},{key:"componentDidUpdate",value:function(t){this.shouldUseAudio(this.props)!==this.shouldUseAudio(t)&&this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"addListeners",value:function(){var t=this.props,e=t.onReady,a=t.onPlay,n=t.onPause,r=t.onEnded,o=t.onError,c=t.playsinline,i=t.onEnablePIP;this.player.addEventListener("canplay",e),this.player.addEventListener("play",a),this.player.addEventListener("pause",n),this.player.addEventListener("seeked",this.onSeek),this.player.addEventListener("ended",r),this.player.addEventListener("error",o),this.player.addEventListener("enterpictureinpicture",i),this.player.addEventListener("leavepictureinpicture",this.onDisablePIP),c&&(this.player.setAttribute("playsinline",""),this.player.setAttribute("webkit-playsinline",""))}},{key:"removeListeners",value:function(){var t=this.props,e=t.onReady,a=t.onPlay,n=t.onPause,r=t.onEnded,o=t.onError,c=t.onEnablePIP;this.player.removeEventListener("canplay",e),this.player.removeEventListener("play",a),this.player.removeEventListener("pause",n),this.player.removeEventListener("seeked",this.onSeek),this.player.removeEventListener("ended",r),this.player.removeEventListener("error",o),this.player.removeEventListener("enterpictureinpicture",c),this.player.removeEventListener("leavepictureinpicture",this.onDisablePIP)}},{key:"shouldUseAudio",value:function(t){return!t.config.file.forceVideo&&(!t.config.file.attributes.poster&&(p.test(t.url)||t.config.file.forceAudio))}},{key:"shouldUseHLS",value:function(t){return v.test(t)&&!h||this.props.config.file.forceHLS}},{key:"shouldUseDASH",value:function(t){return g.test(t)||this.props.config.file.forceDASH}},{key:"load",value:function(t){var e=this,a=this.props.config.file,n=a.hlsVersion,r=a.dashVersion;if(this.shouldUseHLS(t)&&(0,i.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/hls.js/VERSION/hls.min.js".replace("VERSION",n),"Hls").then(function(a){e.hls=new a(e.props.config.file.hlsOptions),e.hls.on(a.Events.ERROR,function(t,n){e.props.onError(t,n,e.hls,a)}),e.hls.loadSource(t),e.hls.attachMedia(e.player)}),this.shouldUseDASH(t)&&(0,i.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then(function(a){e.dash=a.MediaPlayer().create(),e.dash.initialize(e.player,t,e.props.playing),e.dash.getDebug().setLogToBrowserConsole(!1)}),t instanceof Array)this.player.load();else if((0,i.isMediaStream)(t))try{this.player.srcObject=t}catch(e){this.player.src=window.URL.createObjectURL(t)}}},{key:"play",value:function(){var t=this.player.play();t&&t.catch(this.props.onError)}},{key:"pause",value:function(){this.player.pause()}},{key:"stop",value:function(){this.player.removeAttribute("src"),this.hls&&this.hls.destroy(),this.dash&&this.dash.reset()}},{key:"seekTo",value:function(t){this.player.currentTime=t}},{key:"setVolume",value:function(t){this.player.volume=t}},{key:"enablePIP",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}},{key:"disablePIP",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}},{key:"setPlaybackRate",value:function(t){this.player.playbackRate=t}},{key:"getDuration",value:function(){if(!this.player)return null;var t=this.player,e=t.duration,a=t.seekable;return e===1/0&&a.length>0?a.end(a.length-1):e}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){if(!this.player)return null;var t=this.player.buffered;if(0===t.length)return 0;var e=t.end(t.length-1),a=this.getDuration();return e>a?a:e}},{key:"getSource",value:function(t){var e=this.shouldUseHLS(t),a=this.shouldUseDASH(t);if(!(t instanceof Array||(0,i.isMediaStream)(t)||e||a))return m.test(t)?t.replace("www.dropbox.com","dl.dropboxusercontent.com"):t}},{key:"render",value:function(){var t=this.props,e=t.url,a=t.playing,r=t.loop,o=t.controls,i=t.muted,l=t.config,s=t.width,d=t.height,h=this.shouldUseAudio(this.props)?"audio":"video",p={width:"auto"===s?s:"100%",height:"auto"===d?d:"100%"};return c.default.createElement(h,n({ref:this.ref,src:this.getSource(e),style:p,preload:"auto",autoPlay:a||void 0,controls:o,muted:i,loop:r},l.file.attributes),e instanceof Array&&e.map(this.renderSourceElement),l.file.tracks.map(this.renderTrack))}}]),e}();x.displayName="FilePlayer",x.canPlay=f,x.canEnablePIP=function(t){return f(t)&&!!document.pictureInPictureEnabled&&!p.test(t)},e.default=(0,l.default)(x)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.className,a=t.seconds;return o.default.createElement("time",{dateTime:"P"+Math.round(a)+"S",className:e,style:{fontFamily:"Courier"}},c(a))};var n,r=a(1),o=(n=r)&&n.__esModule?n:{default:n};var c=function(t){var e=new Date(1e3*t),a=e.getUTCHours(),n=i(e.getUTCMinutes(),2),r=i(e.getUTCSeconds(),2),o=i(e.getUTCMilliseconds(),3);return a?a+":"+n+":"+r+":"+o:n+":"+r+":"+o},i=function(t,e){return("0".repeat(e-1)+t).slice(-e)}},function(t,e,a){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};var r=a(1),o=a(44),c=a(80),i=a(82),l=a(83),s=a(45),d=s.applyNodeProps,h=s.toggleStrictMode;"16.6.3"!==r.version&&console.error("Version mismatch detected for react-konva and react. react-konva expects to have react version 16.6.3, but it has version "+r.version+". Make sure versions are matched, otherwise, react-konva work is not guaranteed.");var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){o.isBrowser&&(this._stage=new o.Stage({width:this.props.width,height:this.props.height,container:this._tagRef}),this._setRef(this._stage),d(this._stage,this.props),this._mountNode=v.createContainer(this._stage),v.updateContainer(this.props.children,this._mountNode,this))},e.prototype._setRef=function(t){var e=this.props.forwardedRef;e&&("function"==typeof e?e(t):e.current=t)},e.prototype.componentDidUpdate=function(t){o.isBrowser&&(this._setRef(this._stage),d(this._stage,this.props,t),v.updateContainer(this.props.children,this._mountNode,this))},e.prototype.componentWillUnmount=function(){o.isBrowser&&(this._setRef(null),v.updateContainer(null,this._mountNode,this),this._stage.destroy())},e.prototype.getStage=function(){return this._stage},e.prototype.render=function(){var t=this,e=this.props;return r.createElement("div",{ref:function(e){return t._tagRef=e},accessKey:e.accessKey,className:e.className,role:e.role,style:e.style,tabIndex:e.tabIndex,title:e.title})},e}(r.Component),u={};["Layer","FastLayer","Group","Label","Rect","Circle","Ellipse","Wedge","Line","Sprite","Image","Text","TextPath","Star","Ring","Arc","Tag","Path","RegularPolygon","Arrow","Shape","Transformer"].forEach(function(t){u[t]=t});var v=c(l);v.injectIntoDevTools({findFiberByHostInstance:i.getClosestInstanceFromNode,bundleType:0,version:r.version,rendererPackageName:"react-konva",getInspectorDataForViewTag:function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];console.log(e)}});var g=r.forwardRef(function(t,e){return r.createElement(p,n({},t,{forwardedRef:e}))});t.exports=n({},u,{Stage:g,useStrictMode:h})},function(t,e,a){(function(e){
/*
 * Konva JavaScript Framework v2.5.1
 * http://konvajs.github.io/
 * Licensed under the MIT
 * Date: Thu Nov 08 2018
 *
 * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
 * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
 *
 * @license
 */
!function(){"use strict";var a=Math.PI/180,n={version:"2.5.1",stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,isBrowser:"undefined"!=typeof window&&("[object Window]"==={}.toString.call(window)||"[object global]"==={}.toString.call(window)),isUnminified:/comment/.test(function(){}),enableTrace:!1,traceArrMax:100,dblClickWindow:400,pixelRatio:void 0,dragDistance:3,angleDeg:!0,showWarnings:!0,Filters:{},isDragging:function(){var t=n.DD;return!!t&&t.isDragging},isDragReady:function(){var t=n.DD;return!!t&&!!t.node},_addId:function(t,e){e&&(this.ids[e]=t)},_removeId:function(t){void 0!==t&&delete this.ids[t]},_addName:function(t,e){e&&(this.names[e]||(this.names[e]=[]),this.names[e].push(t))},_removeName:function(t,e){if(t){var a=this.names[t];if(a){for(var n=0;n<a.length;n++){a[n]._id===e&&a.splice(n,1)}0===a.length&&delete this.names[t]}}},getAngle:function(t){return this.angleDeg?t*a:t},_detectIE:function(t){var e=t.indexOf("msie ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("trident/")>0){var a=t.indexOf("rv:");return parseInt(t.substring(a+3,t.indexOf(".",a)),10)}var n=t.indexOf("edge/");return n>0&&parseInt(t.substring(n+5,t.indexOf(".",n)),10)},_parseUA:function(t){var e=t.toLowerCase(),a=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],r=!!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),o=!!t.match(/IEMobile/i);return{browser:a[1]||"",version:a[2]||"0",isIE:n._detectIE(e),mobile:r,ieMobile:o}},UA:void 0},r=void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:{};n.UA=n._parseUA(r.navigator&&r.navigator.userAgent||""),r.Konva&&console.error("Konva instance is already exist in current eviroment. Please use only one instance."),r.Konva=n,n.global=r,n.window=r,n.document=r.document,t.exports=n}(),function(){"use strict";Konva.Collection=function(){var t=[].slice.call(arguments),e=t.length,a=0;for(this.length=e;a<e;a++)this[a]=t[a];return this},Konva.Collection.prototype=[],Konva.Collection.prototype.each=function(t){for(var e=0;e<this.length;e++)t(this[e],e)},Konva.Collection.prototype.toArray=function(){var t,e=[],a=this.length;for(t=0;t<a;t++)e.push(this[t]);return e},Konva.Collection.toCollection=function(t){var e,a=new Konva.Collection,n=t.length;for(e=0;e<n;e++)a.push(t[e]);return a},Konva.Collection._mapMethod=function(t){Konva.Collection.prototype[t]=function(){var e,a=this.length,n=[].slice.call(arguments);for(e=0;e<a;e++)this[e][t].apply(this[e],n);return this}},Konva.Collection.mapMethods=function(t){var e=t.prototype;for(var a in e)Konva.Collection._mapMethod(a)},Konva.Transform=function(t){this.m=t&&t.slice()||[1,0,0,1,0,0]},Konva.Transform.prototype={copy:function(){return new Konva.Transform(this.m)},point:function(t){var e=this.m;return{x:e[0]*t.x+e[2]*t.y+e[4],y:e[1]*t.x+e[3]*t.y+e[5]}},translate:function(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this},scale:function(t,e){return this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e,this},rotate:function(t){var e=Math.cos(t),a=Math.sin(t),n=this.m[0]*e+this.m[2]*a,r=this.m[1]*e+this.m[3]*a,o=this.m[0]*-a+this.m[2]*e,c=this.m[1]*-a+this.m[3]*e;return this.m[0]=n,this.m[1]=r,this.m[2]=o,this.m[3]=c,this},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(t,e){var a=this.m[0]+this.m[2]*e,n=this.m[1]+this.m[3]*e,r=this.m[2]+this.m[0]*t,o=this.m[3]+this.m[1]*t;return this.m[0]=a,this.m[1]=n,this.m[2]=r,this.m[3]=o,this},multiply:function(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],a=this.m[1]*t.m[0]+this.m[3]*t.m[1],n=this.m[0]*t.m[2]+this.m[2]*t.m[3],r=this.m[1]*t.m[2]+this.m[3]*t.m[3],o=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],c=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];return this.m[0]=e,this.m[1]=a,this.m[2]=n,this.m[3]=r,this.m[4]=o,this.m[5]=c,this},invert:function(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,a=-this.m[1]*t,n=-this.m[2]*t,r=this.m[0]*t,o=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),c=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=e,this.m[1]=a,this.m[2]=n,this.m[3]=r,this.m[4]=o,this.m[5]=c,this},getMatrix:function(){return this.m},setAbsolutePosition:function(t,e){var a=this.m[0],n=this.m[1],r=this.m[2],o=this.m[3],c=this.m[4],i=(a*(e-this.m[5])-n*(t-c))/(a*o-n*r),l=(t-c-r*i)/a;return this.translate(l,i)}};var t=Math.PI/180,e=180/Math.PI,a={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},n=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Konva.Util={_isElement:function(t){return!(!t||1!=t.nodeType)},_isFunction:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},_isObject:function(t){return!!t&&t.constructor===Object},_isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},_isNumber:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)&&isFinite(t)},_isString:function(t){return"[object String]"===Object.prototype.toString.call(t)},_isBoolean:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},isObject:function(t){return t instanceof Object},isValidSelector:function(t){if("string"!=typeof t)return!1;var e=t[0];return"#"===e||"."===e||e===e.toUpperCase()},_sign:function(t){return 0===t?0:t>0?1:-1},createCanvasElement:function(){var t=Konva.isBrowser?Konva.document.createElement("canvas"):new Konva._nodeCanvas;try{t.style=t.style||{}}catch(t){}return t},_isInDocument:function(t){for(;t=t.parentNode;)if(t==Konva.document)return!0;return!1},_simplifyArray:function(t){var e,a,n=[],r=t.length,o=Konva.Util;for(e=0;e<r;e++)a=t[e],o._isNumber(a)?a=Math.round(1e3*a)/1e3:o._isString(a)||(a=a.toString()),n.push(a);return n},_getImage:function(t,e){var a,n;if(t)if(this._isElement(t))e(t);else if(this._isString(t))(a=new Konva.window.Image).onload=function(){e(a)},a.src=t;else if(t.data){(n=Konva.Util.createCanvasElement()).width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),this._getImage(n.toDataURL(),e)}else e(null);else e(null)},_getRGBAString:function(t){return["rgba(",t.red||0,",",t.green||0,",",t.blue||0,",",t.alpha||1,")"].join("")},_rgbToHex:function(t,e,a){return((1<<24)+(t<<16)+(e<<8)+a).toString(16).slice(1)},_hexToRgb:function(t){t=t.replace("#","");var e=parseInt(t,16);return{r:e>>16&255,g:e>>8&255,b:255&e}},getRandomColor:function(){for(var t=(16777215*Math.random()<<0).toString(16);t.length<6;)t="0"+t;return"#"+t},get:function(t,e){return void 0===t?e:t},getRGB:function(t){var e;return t in a?{r:(e=a[t])[0],g:e[1],b:e[2]}:"#"===t[0]?this._hexToRgb(t.substring(1)):"rgb("===t.substr(0,4)?(e=n.exec(t.replace(/ /g,"")),{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10)}):{r:0,g:0,b:0}},colorToRGBA:function(t){return t=t||"black",Konva.Util._namedColorToRBA(t)||Konva.Util._hex3ColorToRGBA(t)||Konva.Util._hex6ColorToRGBA(t)||Konva.Util._rgbColorToRGBA(t)||Konva.Util._rgbaColorToRGBA(t)},_namedColorToRBA:function(t){var e=a[t.toLowerCase()];return e?{r:e[0],g:e[1],b:e[2],a:1}:null},_rgbColorToRGBA:function(t){if(0===t.indexOf("rgb(")){var e=(t=t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:1}}},_rgbaColorToRGBA:function(t){if(0===t.indexOf("rgba(")){var e=(t=t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:e[3]}}},_hex6ColorToRGBA:function(t){if("#"===t[0]&&7===t.length)return{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16),a:1}},_hex3ColorToRGBA:function(t){if("#"===t[0]&&4===t.length)return{r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16),a:1}},_merge:function(t,e){var a=this._clone(e);for(var n in t)this._isObject(t[n])?a[n]=this._merge(t[n],a[n]):a[n]=t[n];return a},trimRight:function(t){return t.replace(/\s+$/,"")},trimLeft:function(t){return t.replace(/^\s+/,"")},haveIntersection:function(t,e){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y)},cloneObject:function(t){var e={};for(var a in t)this._isObject(t[a])?e[a]=this.cloneObject(t[a]):this._isArray(t[a])?e[a]=this.cloneArray(t[a]):e[a]=t[a];return e},cloneArray:function(t){return t.slice(0)},_degToRad:function(e){return e*t},_radToDeg:function(t){return t*e},_capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},throw:function(t){throw new Error("Konva error: "+t)},error:function(t){console.error("Konva error: "+t)},warn:function(t){Konva.global.console&&console.warn&&Konva.showWarnings&&console.warn("Konva warning: "+t)},extend:function(t,e){function a(){this.constructor=t}a.prototype=e.prototype;var n=t.prototype;for(var r in t.prototype=new a,n)n.hasOwnProperty(r)&&(t.prototype[r]=n[r]);t.__super__=e.prototype,t.super=e},addMethods:function(t,e){var a;for(a in e)t.prototype[a]=e[a]},_getControlPoints:function(t,e,a,n,r,o,c){var i=Math.sqrt(Math.pow(a-t,2)+Math.pow(n-e,2)),l=Math.sqrt(Math.pow(r-a,2)+Math.pow(o-n,2)),s=c*i/(i+l),d=c*l/(i+l);return[a-s*(r-t),n-s*(o-e),a+d*(r-t),n+d*(o-e)]},_expandPoints:function(t,e){var a,n,r=t.length,o=[];for(a=2;a<r-2;a+=2)n=Konva.Util._getControlPoints(t[a-2],t[a-1],t[a],t[a+1],t[a+2],t[a+3],e),o.push(n[0]),o.push(n[1]),o.push(t[a]),o.push(t[a+1]),o.push(n[2]),o.push(n[3]);return o},_removeLastLetter:function(t){return t.substring(0,t.length-1)},each:function(t,e){for(var a in t)e(a,t[a])},_inRange:function(t,e,a){return e<=t&&t<a},_getProjectionToSegment:function(t,e,a,n,r,o){var c,i,l,s=(t-a)*(t-a)+(e-n)*(e-n);if(0==s)c=t,i=e,l=(r-a)*(r-a)+(o-n)*(o-n);else{var d=((r-t)*(a-t)+(o-e)*(n-e))/s;d<0?(c=t,i=e,l=(t-r)*(t-r)+(e-o)*(e-o)):d>1?(c=a,i=n,l=(a-r)*(a-r)+(n-o)*(n-o)):l=((c=t+d*(a-t))-r)*(c-r)+((i=e+d*(n-e))-o)*(i-o)}return[c,i,l]},_getProjectionToLine:function(t,e,a){var n=Konva.Util.cloneObject(t),r=Number.MAX_VALUE;return e.forEach(function(o,c){if(a||c!==e.length-1){var i=e[(c+1)%e.length],l=Konva.Util._getProjectionToSegment(o.x,o.y,i.x,i.y,t.x,t.y),s=l[0],d=l[1],h=l[2];h<r&&(n.x=s,n.y=d,r=h)}}),n},_prepareArrayForTween:function(t,e,a){var n,r=[],o=[];if(t.length>e.length){var c=e;e=t,t=c}for(n=0;n<t.length;n+=2)r.push({x:t[n],y:t[n+1]});for(n=0;n<e.length;n+=2)o.push({x:e[n],y:e[n+1]});var i=[];return o.forEach(function(t){var e=Konva.Util._getProjectionToLine(t,r,a);i.push(e.x),i.push(e.y)}),i},_prepareToStringify:function(t){var e;for(var a in t.visitedByCircularReferenceRemoval=!0,t)if(t.hasOwnProperty(a)&&t[a]&&"object"==typeof t[a])if(e=Object.getOwnPropertyDescriptor(t,a),t[a].visitedByCircularReferenceRemoval||Konva.Util._isElement(t[a])){if(!e.configurable)return null;delete t[a]}else if(null===Konva.Util._prepareToStringify(t[a])){if(!e.configurable)return null;delete t[a]}return delete t.visitedByCircularReferenceRemoval,t}}}(),function(){"use strict";var t;Konva.Canvas=function(t){this.init(t)},Konva.Canvas.prototype={init:function(e){var a=(e||{}).pixelRatio||Konva.pixelRatio||function(){if(t)return t;var e=Konva.Util.createCanvasElement().getContext("2d");return t=(Konva.window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}();this.pixelRatio=a,this._canvas=Konva.Util.createCanvasElement(),this._canvas.style.padding=0,this._canvas.style.margin=0,this._canvas.style.border=0,this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top=0,this._canvas.style.left=0},getContext:function(){return this.context},getPixelRatio:function(){return this.pixelRatio},setPixelRatio:function(t){var e=this.pixelRatio;this.pixelRatio=t,this.setSize(this.getWidth()/e,this.getHeight()/e)},setWidth:function(t){this.width=this._canvas.width=t*this.pixelRatio,this._canvas.style.width=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)},setHeight:function(t){this.height=this._canvas.height=t*this.pixelRatio,this._canvas.style.height=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(t,e){this.setWidth(t),this.setHeight(e)},toDataURL:function(t,e){try{return this._canvas.toDataURL(t,e)}catch(t){try{return this._canvas.toDataURL()}catch(t){return Konva.Util.warn("Unable to get data URL. "+t.message),""}}}},Konva.SceneCanvas=function(t){var e=t||{},a=e.width||0,n=e.height||0;Konva.Canvas.call(this,e),this.context=new Konva.SceneContext(this),this.setSize(a,n)},Konva.Util.extend(Konva.SceneCanvas,Konva.Canvas),Konva.HitCanvas=function(t){var e=t||{},a=e.width||0,n=e.height||0;Konva.Canvas.call(this,e),this.context=new Konva.HitContext(this),this.setSize(a,n),this.hitCanvas=!0},Konva.Util.extend(Konva.HitCanvas,Konva.Canvas)}(),function(){"use strict";var t=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];Konva.Context=function(t){this.init(t)},Konva.Context.prototype={init:function(t){this.canvas=t,this._context=t._canvas.getContext("2d"),Konva.enableTrace&&(this.traceArr=[],this._enableTrace())},fillShape:function(t){t.getFillEnabled()&&this._fill(t)},strokeShape:function(t){t.getStrokeEnabled()&&this._stroke(t)},fillStrokeShape:function(t){t.getFillEnabled()&&this._fill(t),t.getStrokeEnabled()&&this._stroke(t)},getTrace:function(t){var e,a,n,r,o=this.traceArr,c=o.length,i="";for(e=0;e<c;e++)(n=(a=o[e]).method)?(r=a.args,i+=n,t?i+="()":Konva.Util._isArray(r[0])?i+="(["+r.join(",")+"])":i+="("+r.join(",")+")"):(i+=a.property,t||(i+="="+a.val)),i+=";";return i},clearTrace:function(){this.traceArr=[]},_trace:function(t){var e=this.traceArr;e.push(t),e.length>=Konva.traceArrMax&&e.shift()},reset:function(){var t=this.getCanvas().getPixelRatio();this.setTransform(1*t,0,0,1*t,0,0)},getCanvas:function(){return this.canvas},clear:function(t){var e=this.getCanvas();t?this.clearRect(t.x||0,t.y||0,t.width||0,t.height||0):this.clearRect(0,0,e.getWidth()/e.pixelRatio,e.getHeight()/e.pixelRatio)},_applyLineCap:function(t){var e=t.getLineCap();e&&this.setAttr("lineCap",e)},_applyOpacity:function(t){var e=t.getAbsoluteOpacity();1!==e&&this.setAttr("globalAlpha",e)},_applyLineJoin:function(t){var e=t.getLineJoin();e&&this.setAttr("lineJoin",e)},setAttr:function(t,e){this._context[t]=e},arc:function(){var t=arguments;this._context.arc(t[0],t[1],t[2],t[3],t[4],t[5])},beginPath:function(){this._context.beginPath()},bezierCurveTo:function(){var t=arguments;this._context.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5])},clearRect:function(){var t=arguments;this._context.clearRect(t[0],t[1],t[2],t[3])},clip:function(){this._context.clip()},closePath:function(){this._context.closePath()},createImageData:function(){var t=arguments;return 2===t.length?this._context.createImageData(t[0],t[1]):1===t.length?this._context.createImageData(t[0]):void 0},createLinearGradient:function(){var t=arguments;return this._context.createLinearGradient(t[0],t[1],t[2],t[3])},createPattern:function(){var t=arguments;return this._context.createPattern(t[0],t[1])},createRadialGradient:function(){var t=arguments;return this._context.createRadialGradient(t[0],t[1],t[2],t[3],t[4],t[5])},drawImage:function(){var t=arguments,e=this._context;3===t.length?e.drawImage(t[0],t[1],t[2]):5===t.length?e.drawImage(t[0],t[1],t[2],t[3],t[4]):9===t.length&&e.drawImage(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},isPointInPath:function(t,e){return this._context.isPointInPath(t,e)},fill:function(){this._context.fill()},fillRect:function(t,e,a,n){this._context.fillRect(t,e,a,n)},strokeRect:function(t,e,a,n){this._context.strokeRect(t,e,a,n)},fillText:function(){var t=arguments;this._context.fillText(t[0],t[1],t[2])},measureText:function(t){return this._context.measureText(t)},getImageData:function(){var t=arguments;return this._context.getImageData(t[0],t[1],t[2],t[3])},lineTo:function(){var t=arguments;this._context.lineTo(t[0],t[1])},moveTo:function(){var t=arguments;this._context.moveTo(t[0],t[1])},rect:function(){var t=arguments;this._context.rect(t[0],t[1],t[2],t[3])},putImageData:function(){var t=arguments;this._context.putImageData(t[0],t[1],t[2])},quadraticCurveTo:function(){var t=arguments;this._context.quadraticCurveTo(t[0],t[1],t[2],t[3])},restore:function(){this._context.restore()},rotate:function(){var t=arguments;this._context.rotate(t[0])},save:function(){this._context.save()},scale:function(){var t=arguments;this._context.scale(t[0],t[1])},setLineDash:function(){var t=arguments,e=this._context;this._context.setLineDash?e.setLineDash(t[0]):"mozDash"in e?e.mozDash=t[0]:"webkitLineDash"in e&&(e.webkitLineDash=t[0])},getLineDash:function(){return this._context.getLineDash()},setTransform:function(){var t=arguments;this._context.setTransform(t[0],t[1],t[2],t[3],t[4],t[5])},stroke:function(){this._context.stroke()},strokeText:function(){var t=arguments;this._context.strokeText(t[0],t[1],t[2])},transform:function(){var t=arguments;this._context.transform(t[0],t[1],t[2],t[3],t[4],t[5])},translate:function(){var t=arguments;this._context.translate(t[0],t[1])},_enableTrace:function(){var e,a,n=this,r=t.length,o=Konva.Util._simplifyArray,c=this.setAttr,i=function(t){var e,r=n[t];n[t]=function(){return a=o(Array.prototype.slice.call(arguments,0)),e=r.apply(n,arguments),n._trace({method:t,args:a}),e}};for(e=0;e<r;e++)i(t[e]);n.setAttr=function(){c.apply(n,arguments);var t=arguments[0],e=arguments[1];"shadowOffsetX"!==t&&"shadowOffsetY"!==t&&"shadowBlur"!==t||(e/=this.canvas.getPixelRatio()),n._trace({property:t,val:e})}}},["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation"].forEach(function(t){Object.defineProperty(Konva.Context.prototype,t,{get:function(){return this._context[t]},set:function(e){this._context[t]=e}})}),Konva.SceneContext=function(t){Konva.Context.call(this,t)},Konva.SceneContext.prototype={_fillColor:function(t){var e=t.fill();this.setAttr("fillStyle",e),t._fillFunc(this)},_fillPattern:function(t){var e=t.getFillPatternX(),a=t.getFillPatternY(),n=t.getFillPatternScale(),r=Konva.getAngle(t.getFillPatternRotation()),o=t.getFillPatternOffset();(e||a)&&this.translate(e||0,a||0),r&&this.rotate(r),n&&this.scale(n.x,n.y),o&&this.translate(-1*o.x,-1*o.y),this.setAttr("fillStyle",this.createPattern(t.getFillPatternImage(),t.getFillPatternRepeat()||"repeat")),this.fill()},_fillLinearGradient:function(t){var e=t.getFillLinearGradientStartPoint(),a=t.getFillLinearGradientEndPoint(),n=t.getFillLinearGradientColorStops(),r=this.createLinearGradient(e.x,e.y,a.x,a.y);if(n){for(var o=0;o<n.length;o+=2)r.addColorStop(n[o],n[o+1]);this.setAttr("fillStyle",r),t._fillFunc(this)}},_fillRadialGradient:function(t){for(var e=t.getFillRadialGradientStartPoint(),a=t.getFillRadialGradientEndPoint(),n=t.getFillRadialGradientStartRadius(),r=t.getFillRadialGradientEndRadius(),o=t.getFillRadialGradientColorStops(),c=this.createRadialGradient(e.x,e.y,n,a.x,a.y,r),i=0;i<o.length;i+=2)c.addColorStop(o[i],o[i+1]);this.setAttr("fillStyle",c),this.fill()},_fill:function(t){var e=t.fill(),a=t.getFillPriority();if(e&&"color"===a)this._fillColor(t);else{var n=t.getFillPatternImage();if(n&&"pattern"===a)this._fillPattern(t);else{var r=t.getFillLinearGradientColorStops();if(r&&"linear-gradient"===a)this._fillLinearGradient(t);else{var o=t.getFillRadialGradientColorStops();o&&"radial-gradient"===a?this._fillRadialGradient(t):e?this._fillColor(t):n?this._fillPattern(t):r?this._fillLinearGradient(t):o&&this._fillRadialGradient(t)}}}},_strokeLinearGradient:function(t){var e=t.getStrokeLinearGradientStartPoint(),a=t.getStrokeLinearGradientEndPoint(),n=t.getStrokeLinearGradientColorStops(),r=this.createLinearGradient(e.x,e.y,a.x,a.y);if(n){for(var o=0;o<n.length;o+=2)r.addColorStop(n[o],n[o+1]);this.setAttr("strokeStyle",r)}},_stroke:function(t){var e=t.dash(),a=t.getStrokeScaleEnabled()||t instanceof Konva.Text;t.hasStroke()&&(a||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(t),e&&t.dashEnabled()&&(this.setLineDash(e),this.setAttr("lineDashOffset",t.dashOffset())),this.setAttr("lineWidth",t.strokeWidth()),t.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),t.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(t):this.setAttr("strokeStyle",t.stroke()),t._strokeFunc(this),a||this.restore())},_applyShadow:function(t){var e=Konva.Util,a=e.get(t.getShadowRGBA(),"black"),n=e.get(t.getShadowBlur(),5),r=e.get(t.getShadowOffset(),{x:0,y:0}),o=t.getAbsoluteScale(),c=this.canvas.getPixelRatio(),i=o.x*c,l=o.y*c;this.setAttr("shadowColor",a),this.setAttr("shadowBlur",n*Math.min(Math.abs(i),Math.abs(l))),this.setAttr("shadowOffsetX",r.x*i),this.setAttr("shadowOffsetY",r.y*l)},_applyGlobalCompositeOperation:function(t){var e=t.getGlobalCompositeOperation();"source-over"!==e&&this.setAttr("globalCompositeOperation",e)}},Konva.Util.extend(Konva.SceneContext,Konva.Context),Konva.HitContext=function(t){Konva.Context.call(this,t)},Konva.HitContext.prototype={_fill:function(t){this.save(),this.setAttr("fillStyle",t.colorKey),t._fillFuncHit(this),this.restore()},_stroke:function(t){if(t.hasStroke()&&t.strokeHitEnabled()){var e=t.getStrokeScaleEnabled()||t instanceof Konva.Text;e||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(t),this.setAttr("lineWidth",t.strokeWidth()),this.setAttr("strokeStyle",t.colorKey),t._strokeFuncHit(this),e||this.restore()}}},Konva.Util.extend(Konva.HitContext,Konva.Context)}(),function(){"use strict";Konva.Factory={addGetterSetter:function(t,e,a,n,r){this.addGetter(t,e,a),this.addSetter(t,e,n,r),this.addOverloadedGetterSetter(t,e)},addGetter:function(t,e,a){var n="get"+Konva.Util._capitalize(e);t.prototype[n]=function(){var t=this.attrs[e];return void 0===t?a:t}},addSetter:function(t,e,a,n){var r="set"+Konva.Util._capitalize(e);t.prototype[r]=function(t){return a&&null!=t&&(t=a.call(this,t,e)),this._setAttr(e,t),n&&n.call(this),this}},addComponentsGetterSetter:function(t,e,a,n,r){var o,c,i=a.length,l=Konva.Util._capitalize,s="get"+l(e),d="set"+l(e);t.prototype[s]=function(){var t={};for(o=0;o<i;o++)t[c=a[o]]=this.getAttr(e+l(c));return t},t.prototype[d]=function(t){var a,o=this.attrs[e];for(a in n&&(t=n.call(this,t)),t)t.hasOwnProperty(a)&&this._setAttr(e+l(a),t[a]);return this._fireChangeEvent(e,o,t),r&&r.call(this),this},this.addOverloadedGetterSetter(t,e)},addOverloadedGetterSetter:function(t,e){var a=Konva.Util._capitalize(e),n="set"+a,r="get"+a;t.prototype[e]=function(){return arguments.length?(this[n](arguments[0]),this):this[r]()}},addDeprecatedGetterSetter:function(t,e,a,n){Konva.Util.error("Adding deprecated "+e);var r="get"+Konva.Util._capitalize(e),o=e+" property is deprecated and will be removed soon. Look at Konva change log for more information.";t.prototype[r]=function(){Konva.Util.error(o);var t=this.attrs[e];return void 0===t?a:t},this.addSetter(t,e,n,function(){Konva.Util.error(o)}),this.addOverloadedGetterSetter(t,e)},backCompat:function(t,e){Konva.Util.each(e,function(e,a){var n=t.prototype[a],r="get"+Konva.Util._capitalize(e),o="set"+Konva.Util._capitalize(e);function c(){n.apply(this,arguments),Konva.Util.error('"'+e+'" method is deprecated and will be removed soon. Use ""'+a+'" instead.')}t.prototype[e]=c,t.prototype[r]=c,t.prototype[o]=c})},afterSetFilter:function(){this._filterUpToDate=!1}},Konva.Validators={RGBComponent:function(t){return t>255?255:t<0?0:Math.round(t)},alphaComponent:function(t){return t>1?1:t<1e-4?1e-4:t},_formatValue:function(t){return Konva.Util._isString(t)?'"'+t+'"':"[object Number]"===Object.prototype.toString.call(t)?t:Konva.Util._isBoolean(t)?t:Object.prototype.toString.call(t)},getNumberValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isNumber(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a number.'),t}},getNumberOrAutoValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isNumber(t)||"auto"===t||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a number or "auto".'),t}},getStringValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isString(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a string.'),t}},getFunctionValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isFunction(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a function.'),t}},getNumberArrayValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isArray(t)?t.forEach(function(t){Konva.Util._isNumber(t)||Konva.Util.warn('"'+e+'" attribute has non numeric element '+t+". Make sure that all elements are numbers.")}):Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a array of numbers.'),t}},getBooleanValidator:function(){if(Konva.isUnminified)return function(t,e){return!0===t||!1===t||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a boolean.'),t}}}}(),function(t){"use strict";var e="Shape",a=["id"],n=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(" "),r=["scaleXChange.konva","scaleYChange.konva"].join(" ");t.Node=function(t){this._init(t)},t.Util.addMethods(t.Node,{_init:function(e){this._id=t.idCounter++,this.eventListeners={},this.attrs={},this._cache={},this._filterUpToDate=!1,this._isUnderCache=!1,this.setAttrs(e),this.on(n,function(){this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")}),this.on(r,function(){this._clearSelfAndDescendantCache("absoluteScale")}),this.on("visibleChange.konva",function(){this._clearSelfAndDescendantCache("visible")}),this.on("listeningChange.konva",function(){this._clearSelfAndDescendantCache("listening")}),this.on("opacityChange.konva",function(){this._clearSelfAndDescendantCache("absoluteOpacity")})},_clearCache:function(t){t?delete this._cache[t]:this._cache={}},_getCache:function(t,e){return void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},_clearSelfAndDescendantCache:function(t){this._clearCache(t),this.children&&this.getChildren().each(function(e){e._clearSelfAndDescendantCache(t)})},clearCache:function(){return delete this._cache.canvas,this._filterUpToDate=!1,this},cache:function(e){var a=e||{},n={};void 0!==a.x&&void 0!==a.y&&void 0!==a.width&&void 0!==a.height||(n=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()}));var r=a.width||n.width,o=a.height||n.height,c=a.pixelRatio,i=void 0===a.x?n.x:a.x,l=void 0===a.y?n.y:a.y,s=a.offset||0,d=a.drawBorder||!1;if(r&&o){r+=2*s,o+=2*s,i-=s,l-=s;var h=new t.SceneCanvas({pixelRatio:c,width:r,height:o}),p=new t.SceneCanvas({pixelRatio:c,width:r,height:o}),u=new t.HitCanvas({pixelRatio:1,width:r,height:o}),v=h.getContext(),g=u.getContext();return u.isCache=!0,this.clearCache(),v.save(),g.save(),v.translate(-i,-l),g.translate(-i,-l),this._isUnderCache=!0,this._clearSelfAndDescendantCache("absoluteOpacity"),this._clearSelfAndDescendantCache("absoluteScale"),this.drawScene(h,this,!0),this.drawHit(u,this,!0),this._isUnderCache=!1,v.restore(),g.restore(),d&&(v.save(),v.beginPath(),v.rect(0,0,r,o),v.closePath(),v.setAttr("strokeStyle","red"),v.setAttr("lineWidth",5),v.stroke(),v.restore()),this._cache.canvas={scene:h,filter:p,hit:u,x:i,y:l},this}t.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")},getClientRect:function(){throw new Error('abstract "getClientRect" method call')},_transformedRect:function(t,e){var a,n,r,o,c=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],i=this.getAbsoluteTransform(e);return c.forEach(function(t){var e=i.point(t);void 0===a&&(a=r=e.x,n=o=e.y),a=Math.min(a,e.x),n=Math.min(n,e.y),r=Math.max(r,e.x),o=Math.max(o,e.y)}),{x:a,y:n,width:r-a,height:o-n}},_drawCachedSceneCanvas:function(t){t.save(),t._applyOpacity(this),t._applyGlobalCompositeOperation(this),t.translate(this._cache.canvas.x,this._cache.canvas.y);var e=this._getCachedSceneCanvas(),a=e.pixelRatio;t.drawImage(e._canvas,0,0,e.width/a,e.height/a),t.restore()},_drawCachedHitCanvas:function(t){var e=this._cache.canvas.hit;t.save(),t.translate(this._cache.canvas.x,this._cache.canvas.y),t.drawImage(e._canvas,0,0),t.restore()},_getCachedSceneCanvas:function(){var e,a,n,r,o=this.filters(),c=this._cache.canvas,i=c.scene,l=c.filter,s=l.getContext();if(o){if(!this._filterUpToDate){var d=i.pixelRatio;try{for(e=o.length,s.clear(),s.drawImage(i._canvas,0,0,i.getWidth()/d,i.getHeight()/d),a=s.getImageData(0,0,l.getWidth(),l.getHeight()),n=0;n<e;n++)"function"==typeof(r=o[n])?(r.call(this,a),s.putImageData(a,0,0)):t.Util.error("Filter should be type of function, but got "+typeof r+" insted. Please check correct filters")}catch(e){t.Util.error("Unable to apply filter. "+e.message)}this._filterUpToDate=!0}return l}return i},on:function(t,e){if(3===arguments.length)return this._delegate.apply(this,arguments);var a,n,r,o,c=t.split(" "),i=c.length;for(a=0;a<i;a++)r=(n=c[a].split("."))[0],o=n[1]||"",this.eventListeners[r]||(this.eventListeners[r]=[]),this.eventListeners[r].push({name:o,handler:e});return this},off:function(t,e){var a,n,r,o,c,i=(t||"").split(" "),l=i.length;if(!t)for(n in this.eventListeners)this._off(n);for(a=0;a<l;a++)if(o=(r=i[a].split("."))[0],c=r[1],o)this.eventListeners[o]&&this._off(o,c,e);else for(n in this.eventListeners)this._off(n,c,e);return this},dispatchEvent:function(t){var e={target:this,type:t.type,evt:t};return this.fire(t.type,e),this},addEventListener:function(t,e){return this.on(t,function(t){e.call(this,t.evt)}),this},removeEventListener:function(t){return this.off(t),this},_delegate:function(e,a,n){var r=this;this.on(e,function(e){for(var o=e.target.findAncestors(a,!0,r),c=0;c<o.length;c++)(e=t.Util.cloneObject(e)).currentTarget=o[c],n.call(o[c],e)})},remove:function(){var t=this.getParent();return t&&t.children&&(t.children.splice(this.index,1),t._setChildrenIndices(),delete this.parent),this._clearSelfAndDescendantCache("stage"),this._clearSelfAndDescendantCache("absoluteTransform"),this._clearSelfAndDescendantCache("visible"),this._clearSelfAndDescendantCache("listening"),this._clearSelfAndDescendantCache("absoluteOpacity"),this},destroy:function(){t._removeId(this.getId());for(var e=(this.getName()||"").split(/\s/g),a=0;a<e.length;a++){var n=e[a];t._removeName(n,this._id)}return this.remove(),this},getAttr:function(e){var a="get"+t.Util._capitalize(e);return t.Util._isFunction(this[a])?this[a]():this.attrs[e]},getAncestors:function(){for(var e=this.getParent(),a=new t.Collection;e;)a.push(e),e=e.getParent();return a},getAttrs:function(){return this.attrs||{}},setAttrs:function(e){var a,n;if(!e)return this;for(a in e)"children"!==a&&(n="set"+t.Util._capitalize(a),t.Util._isFunction(this[n])?this[n](e[a]):this._setAttr(a,e[a]));return this},isListening:function(){return this._getCache("listening",this._isListening)},_isListening:function(){var t=this.getListening(),e=this.getParent();return"inherit"===t?!e||e.isListening():t},isVisible:function(){return this._getCache("visible",this._isVisible)},_isVisible:function(t){var e=this.getVisible(),a=this.getParent();return t===a&&"inherit"===e||(t===a?e:"inherit"===e?!a||a._isVisible(t):e)},shouldDrawHit:function(){var t=this.getLayer();return!t&&this.isListening()&&this.isVisible()||t&&t.hitGraphEnabled()&&this.isListening()&&this.isVisible()},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){var t,a,n,r,o=this.getDepth(),c=this,i=0;return"Stage"!==c.nodeType&&function l(s){for(t=[],a=s.length,n=0;n<a;n++)r=s[n],i++,r.nodeType!==e&&(t=t.concat(r.getChildren().toArray())),r._id===c._id&&(n=a);t.length>0&&t[0].getDepth()<=o&&l(t)}(c.getStage().getChildren()),i},getDepth:function(){for(var t=0,e=this.parent;e;)t++,e=e.parent;return t},setPosition:function(t){return this.setX(t.x),this.setY(t.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(e){var a=this.getAbsoluteTransform(e).getMatrix(),n=new t.Transform,r=this.offset();return n.m=a.slice(),n.translate(r.x,r.y),n.getTranslation()},setAbsolutePosition:function(t){var e,a=this._clearTransform();return this.attrs.x=a.x,this.attrs.y=a.y,delete a.x,delete a.y,(e=this.getAbsoluteTransform()).invert(),e.translate(t.x,t.y),t={x:this.attrs.x+e.getTranslation().x,y:this.attrs.y+e.getTranslation().y},this.setPosition({x:t.x,y:t.y}),this._setTransform(a),this},_setTransform:function(t){var e;for(e in t)this.attrs[e]=t[e];this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")},_clearTransform:function(){var t={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform"),t},move:function(t){var e=t.x,a=t.y,n=this.getX(),r=this.getY();return void 0!==e&&(n+=e),void 0!==a&&(r+=a),this.setPosition({x:n,y:r}),this},_eachAncestorReverse:function(t,e){var a,n,r=[],o=this.getParent();if(e&&e._id===this._id)t(this);else{for(r.unshift(this);o&&(!e||o._id!==e._id);)r.unshift(o),o=o.parent;for(a=r.length,n=0;n<a;n++)t(r[n])}},rotate:function(t){return this.setRotation(this.getRotation()+t),this},moveToTop:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveToTop function is ignored."),!1;var e=this.index;return this.parent.children.splice(e,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveUp function is ignored."),!1;var e=this.index;return e<this.parent.getChildren().length-1&&(this.parent.children.splice(e,1),this.parent.children.splice(e+1,0,this),this.parent._setChildrenIndices(),!0)},moveDown:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveDown function is ignored."),!1;var e=this.index;return e>0&&(this.parent.children.splice(e,1),this.parent.children.splice(e-1,0,this),this.parent._setChildrenIndices(),!0)},moveToBottom:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveToBottom function is ignored."),!1;var e=this.index;return e>0&&(this.parent.children.splice(e,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0)},setZIndex:function(e){if(!this.parent)return t.Util.warn("Node has no parent. zIndex parameter is ignored."),!1;var a=this.index;return this.parent.children.splice(a,1),this.parent.children.splice(e,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){return this._getCache("absoluteOpacity",this._getAbsoluteOpacity)},_getAbsoluteOpacity:function(){var t=this.getOpacity(),e=this.getParent();return e&&!e._isUnderCache&&(t*=this.getParent().getAbsoluteOpacity()),t},moveTo:function(t){return this.getParent()!==t&&((this.__originalRemove||this.remove).call(this),t.add(this)),this},toObject:function(){var e,a,n,r,o={},c=this.getAttrs();for(e in o.attrs={},c)a=c[e],n="function"==typeof this[e]&&this[e],delete c[e],r=n?n.call(this):null,c[e]=a,r!==a&&(o.attrs[e]=a);return o.className=this.getClassName(),t.Util._prepareToStringify(o)},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},findAncestors:function(t,e,a){var n=[];e&&this._isMatch(t)&&n.push(this);for(var r=this.parent;r;){if(r===a)return n;r._isMatch(t)&&n.push(r),r=r.parent}return n},findAncestor:function(t,e,a){return this.findAncestors(t,e,a)[0]},_isMatch:function(e){if(!e)return!1;var a,n,r=e.replace(/ /g,"").split(","),o=r.length;for(a=0;a<o;a++)if(n=r[a],t.Util.isValidSelector(n)||(t.Util.warn('Selector "'+n+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),t.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),t.Util.warn("Konva is awesome, right?")),"#"===n.charAt(0)){if(this.id()===n.slice(1))return!0}else if("."===n.charAt(0)){if(this.hasName(n.slice(1)))return!0}else if(0!==this._get(n).length)return!0;return!1},getLayer:function(){var t=this.getParent();return t?t.getLayer():null},getStage:function(){return this._getCache("stage",this._getStage)},_getStage:function(){var t=this.getParent();return t?t.getStage():void 0},fire:function(t,e,a){return(e=e||{}).target=e.target||this,a?this._fireAndBubble(t,e):this._fire(t,e),this},getAbsoluteTransform:function(t){return t?this._getAbsoluteTransform(t):this._getCache("absoluteTransform",this._getAbsoluteTransform)},_getAbsoluteTransform:function(e){var a=new t.Transform;return this._eachAncestorReverse(function(t){var e=t.transformsEnabled();"all"===e?a.multiply(t.getTransform()):"position"===e&&a.translate(t.getX()-t.getOffsetX(),t.getY()-t.getOffsetY())},e),a},getAbsoluteScale:function(t){return t?this._getAbsoluteScale(t):this._getCache("absoluteScale",this._getAbsoluteScale)},_getAbsoluteScale:function(t){for(var e=this;e;)e._isUnderCache&&(t=e),e=e.getParent();var a=1,n=1;return this._eachAncestorReverse(function(t){a*=t.scaleX(),n*=t.scaleY()},t),{x:a,y:n}},getTransform:function(){return this._getCache("transform",this._getTransform)},_getTransform:function(){var e=new t.Transform,a=this.getX(),n=this.getY(),r=t.getAngle(this.getRotation()),o=this.getScaleX(),c=this.getScaleY(),i=this.getSkewX(),l=this.getSkewY(),s=this.getOffsetX(),d=this.getOffsetY();return 0===a&&0===n||e.translate(a,n),0!==r&&e.rotate(r),0===i&&0===l||e.skew(i,l),1===o&&1===c||e.scale(o,c),0===s&&0===d||e.translate(-1*s,-1*d),e},clone:function(e){var n,r,o,c,i,l=t.Util.cloneObject(this.attrs);for(var s in a){delete l[a[s]]}for(n in e)l[n]=e[n];var d=new this.constructor(l);for(n in this.eventListeners)for(o=(r=this.eventListeners[n]).length,c=0;c<o;c++)(i=r[c]).name.indexOf("konva")<0&&(d.eventListeners[n]||(d.eventListeners[n]=[]),d.eventListeners[n].push(i));return d},_toKonvaCanvas:function(e){e=e||{};var a=this.getClientRect(),n=this.getStage(),r=void 0!==e.x?e.x:a.x,o=void 0!==e.y?e.y:a.y,c=e.pixelRatio||1,i=new t.SceneCanvas({width:e.width||a.width||(n?n.getWidth():0),height:e.height||a.height||(n?n.getHeight():0),pixelRatio:c}),l=i.getContext();return l.save(),(r||o)&&l.translate(-1*r,-1*o),this.drawScene(i),l.restore(),i},toCanvas:function(t){return this._toKonvaCanvas(t)._canvas},toDataURL:function(t){var e=(t=t||{}).mimeType||null,a=t.quality||null,n=this._toKonvaCanvas(t).toDataURL(e,a);return t.callback&&t.callback(n),n},toImage:function(e){if(!e||!e.callback)throw"callback required for toImage method config argument";var a=e.callback;delete e.callback,t.Util._getImage(this.toDataURL(e),function(t){a(t)})},setSize:function(t){return this.setWidth(t.width),this.setHeight(t.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},getDragDistance:function(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():t.dragDistance},_get:function(t){return this.className===t||this.nodeType===t?[this]:[]},_off:function(t,e,a){var n,r,o,c=this.eventListeners[t];for(n=0;n<c.length;n++)if(r=c[n].name,o=c[n].handler,!("konva"===r&&"konva"!==e||e&&r!==e||a&&a!==o)){if(c.splice(n,1),0===c.length){delete this.eventListeners[t];break}n--}},_fireChangeEvent:function(t,e,a){this._fire(t+"Change",{oldVal:e,newVal:a})},setId:function(e){var a=this.getId();return t._removeId(a),t._addId(this,e),this._setAttr("id",e),this},setName:function(e){var a,n,r=(this.getName()||"").split(/\s/g),o=(e||"").split(/\s/g);for(n=0;n<r.length;n++)a=r[n],-1===o.indexOf(a)&&a&&t._removeName(a,this._id);for(n=0;n<o.length;n++)a=o[n],-1===r.indexOf(a)&&a&&t._addName(this,a);return this._setAttr("name",e),this},addName:function(t){if(!this.hasName(t)){var e=this.name(),a=e?e+" "+t:t;this.setName(a)}return this},hasName:function(t){return-1!==(this.name()||"").split(/\s/g).indexOf(t)},removeName:function(t){var e=(this.name()||"").split(/\s/g),a=e.indexOf(t);return-1!==a&&(e.splice(a,1),this.setName(e.join(" "))),this},setAttr:function(e,a){var n=this["set"+t.Util._capitalize(e)];return t.Util._isFunction(n)?n.call(this,a):this._setAttr(e,a),this},_setAttr:function(e,a){var n;(n=this.attrs[e])===a&&!t.Util.isObject(a)||(null==a?delete this.attrs[e]:this.attrs[e]=a,this._fireChangeEvent(e,n,a))},_setComponentAttr:function(t,e,a){var n;void 0!==a&&((n=this.attrs[t])||(this.attrs[t]=this.getAttr(t)),this.attrs[t][e]=a,this._fireChangeEvent(t,n,a))},_fireAndBubble:function(t,a,n){var r=!0;if(a&&this.nodeType===e&&(a.target=this),"mouseenter"===t&&n&&(this._id===n._id||this.isAncestorOf&&this.isAncestorOf(n))?r=!1:"mouseleave"===t&&n&&(this._id===n._id||this.isAncestorOf&&this.isAncestorOf(n))&&(r=!1),r){this._fire(t,a);var o=("mouseenter"===t||"mouseleave"===t)&&n&&n.isAncestorOf&&n.isAncestorOf(this)&&!n.isAncestorOf(this.parent);(a&&!a.cancelBubble||!a)&&this.parent&&this.parent.isListening()&&!o&&(n&&n.parent?this._fireAndBubble.call(this.parent,t,a,n.parent):this._fireAndBubble.call(this.parent,t,a))}},_fire:function(t,e){var a,n=this.eventListeners[t];if((e=e||{}).currentTarget=this,e.type=t,n)for(a=0;a<n.length;a++)n[a].handler.call(this,e)},draw:function(){return this.drawScene(),this.drawHit(),this}}),t.Node.create=function(e,a){return t.Util._isString(e)&&(e=JSON.parse(e)),this._createNode(e,a)},t.Node._createNode=function(e,a){var n,r,o,c=t.Node.prototype.getClassName.call(e),i=e.children;if(a&&(e.attrs.container=a),n=new t[c](e.attrs),i)for(r=i.length,o=0;o<r;o++)n.add(this._createNode(i[o]));return n},t.Factory.addOverloadedGetterSetter(t.Node,"position"),t.Factory.addGetterSetter(t.Node,"x",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"y",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"globalCompositeOperation","source-over",t.Validators.getStringValidator()),t.Factory.addGetterSetter(t.Node,"opacity",1,t.Validators.getNumberValidator()),t.Factory.addGetter(t.Node,"name"),t.Factory.addOverloadedGetterSetter(t.Node,"name"),t.Factory.addGetter(t.Node,"id"),t.Factory.addOverloadedGetterSetter(t.Node,"id"),t.Factory.addGetterSetter(t.Node,"rotation",0,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"scale",["x","y"]),t.Factory.addGetterSetter(t.Node,"scaleX",1,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"scaleY",1,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"skew",["x","y"]),t.Factory.addGetterSetter(t.Node,"skewX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"skewY",0,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"offset",["x","y"]),t.Factory.addGetterSetter(t.Node,"offsetX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"offsetY",0,t.Validators.getNumberValidator()),t.Factory.addSetter(t.Node,"dragDistance",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"dragDistance"),t.Factory.addSetter(t.Node,"width",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"width"),t.Factory.addSetter(t.Node,"height",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"height"),t.Factory.addGetterSetter(t.Node,"listening","inherit",function(e){return!0===e||!1===e||"inherit"===e||t.Util.warn(e+' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'),e}),t.Factory.addGetterSetter(t.Node,"preventDefault",!0,t.Validators.getBooleanValidator()),t.Factory.addGetterSetter(t.Node,"filters",null,function(t){return this._filterUpToDate=!1,t}),t.Factory.addGetterSetter(t.Node,"visible","inherit",function(e){return!0===e||!1===e||"inherit"===e||t.Util.warn(e+' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'),e}),t.Factory.addGetterSetter(t.Node,"transformsEnabled","all",t.Validators.getStringValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"size"),t.Factory.backCompat(t.Node,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),t.Collection.mapMethods(t.Node)}(Konva),function(){"use strict";Konva.Filters.Grayscale=function(t){var e,a,n=t.data,r=n.length;for(e=0;e<r;e+=4)a=.34*n[e]+.5*n[e+1]+.16*n[e+2],n[e]=a,n[e+1]=a,n[e+2]=a}}(),function(t){"use strict";t.Filters.Brighten=function(t){var e,a=255*this.brightness(),n=t.data,r=n.length;for(e=0;e<r;e+=4)n[e]+=a,n[e+1]+=a,n[e+2]+=a},t.Factory.addGetterSetter(t.Node,"brightness",0,t.Validators.getNumberValidator(),t.Factory.afterSetFilter)}(Konva),function(){"use strict";Konva.Filters.Invert=function(t){var e,a=t.data,n=a.length;for(e=0;e<n;e+=4)a[e]=255-a[e],a[e+1]=255-a[e+1],a[e+2]=255-a[e+2]}}(),function(t){"use strict";function e(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}var a=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],n=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];t.Filters.Blur=function(t){var r=Math.round(this.blurRadius());r>0&&function(t,r){var o,c,i,l,s,d,h,p,u,v,g,m,f,x,M,z,y,b,w,C,H,F,V,L,N=t.data,B=t.width,S=t.height,I=r+r+1,k=B-1,P=S-1,T=r+1,A=T*(T+1)/2,_=new e,E=null,R=_,O=null,D=null,G=a[r],j=n[r];for(i=1;i<I;i++)R=R.next=new e,i===T&&(E=R);for(R.next=_,h=d=0,c=0;c<S;c++){for(z=y=b=w=p=u=v=g=0,m=T*(C=N[d]),f=T*(H=N[d+1]),x=T*(F=N[d+2]),M=T*(V=N[d+3]),p+=A*C,u+=A*H,v+=A*F,g+=A*V,R=_,i=0;i<T;i++)R.r=C,R.g=H,R.b=F,R.a=V,R=R.next;for(i=1;i<T;i++)l=d+((k<i?k:i)<<2),p+=(R.r=C=N[l])*(L=T-i),u+=(R.g=H=N[l+1])*L,v+=(R.b=F=N[l+2])*L,g+=(R.a=V=N[l+3])*L,z+=C,y+=H,b+=F,w+=V,R=R.next;for(O=_,D=E,o=0;o<B;o++)N[d+3]=V=g*G>>j,0!==V?(V=255/V,N[d]=(p*G>>j)*V,N[d+1]=(u*G>>j)*V,N[d+2]=(v*G>>j)*V):N[d]=N[d+1]=N[d+2]=0,p-=m,u-=f,v-=x,g-=M,m-=O.r,f-=O.g,x-=O.b,M-=O.a,l=h+((l=o+r+1)<k?l:k)<<2,p+=z+=O.r=N[l],u+=y+=O.g=N[l+1],v+=b+=O.b=N[l+2],g+=w+=O.a=N[l+3],O=O.next,m+=C=D.r,f+=H=D.g,x+=F=D.b,M+=V=D.a,z-=C,y-=H,b-=F,w-=V,D=D.next,d+=4;h+=B}for(o=0;o<B;o++){for(y=b=w=z=u=v=g=p=0,m=T*(C=N[d=o<<2]),f=T*(H=N[d+1]),x=T*(F=N[d+2]),M=T*(V=N[d+3]),p+=A*C,u+=A*H,v+=A*F,g+=A*V,R=_,i=0;i<T;i++)R.r=C,R.g=H,R.b=F,R.a=V,R=R.next;for(s=B,i=1;i<=r;i++)d=s+o<<2,p+=(R.r=C=N[d])*(L=T-i),u+=(R.g=H=N[d+1])*L,v+=(R.b=F=N[d+2])*L,g+=(R.a=V=N[d+3])*L,z+=C,y+=H,b+=F,w+=V,R=R.next,i<P&&(s+=B);for(d=o,O=_,D=E,c=0;c<S;c++)N[3+(l=d<<2)]=V=g*G>>j,V>0?(V=255/V,N[l]=(p*G>>j)*V,N[l+1]=(u*G>>j)*V,N[l+2]=(v*G>>j)*V):N[l]=N[l+1]=N[l+2]=0,p-=m,u-=f,v-=x,g-=M,m-=O.r,f-=O.g,x-=O.b,M-=O.a,l=o+((l=c+T)<P?l:P)*B<<2,p+=z+=O.r=N[l],u+=y+=O.g=N[l+1],v+=b+=O.b=N[l+2],g+=w+=O.a=N[l+3],O=O.next,m+=C=D.r,f+=H=D.g,x+=F=D.b,M+=V=D.a,z-=C,y-=H,b-=F,w-=V,D=D.next,d+=B}}(t,r)},t.Factory.addGetterSetter(t.Node,"blurRadius",0,t.Validators.getNumberValidator(),t.Factory.afterSetFilter)}(Konva),function(){"use strict";function t(t,e,a){var n=4*(a*t.width+e),r=[];return r.push(t.data[n++],t.data[n++],t.data[n++],t.data[n++]),r}function e(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2))}Konva.Filters.Mask=function(a){var n=function(a,n){var r=t(a,0,0),o=t(a,a.width-1,0),c=t(a,0,a.height-1),i=t(a,a.width-1,a.height-1),l=n||10;if(e(r,o)<l&&e(o,i)<l&&e(i,c)<l&&e(c,r)<l){for(var s=function(t){for(var e=[0,0,0],a=0;a<t.length;a++)e[0]+=t[a][0],e[1]+=t[a][1],e[2]+=t[a][2];return e[0]/=t.length,e[1]/=t.length,e[2]/=t.length,e}([o,r,i,c]),d=[],h=0;h<a.width*a.height;h++){var p=e(s,[a.data[4*h],a.data[4*h+1],a.data[4*h+2]]);d[h]=p<l?0:255}return d}}(a,this.threshold());return n&&function(t,e){for(var a=0;a<t.width*t.height;a++)t.data[4*a+3]=e[a]}(a,n=function(t,e,a){for(var n=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],r=Math.round(Math.sqrt(n.length)),o=Math.floor(r/2),c=[],i=0;i<a;i++)for(var l=0;l<e;l++){for(var s=i*e+l,d=0,h=0;h<r;h++)for(var p=0;p<r;p++){var u=i+h-o,v=l+p-o;if(u>=0&&u<a&&v>=0&&v<e){var g=n[h*r+p];d+=t[u*e+v]*g}}c[s]=d}return c}(n=function(t,e,a){for(var n=[1,1,1,1,1,1,1,1,1],r=Math.round(Math.sqrt(n.length)),o=Math.floor(r/2),c=[],i=0;i<a;i++)for(var l=0;l<e;l++){for(var s=i*e+l,d=0,h=0;h<r;h++)for(var p=0;p<r;p++){var u=i+h-o,v=l+p-o;if(u>=0&&u<a&&v>=0&&v<e){var g=n[h*r+p];d+=t[u*e+v]*g}}c[s]=d>=1020?255:0}return c}(n=function(t,e,a){for(var n=[1,1,1,1,0,1,1,1,1],r=Math.round(Math.sqrt(n.length)),o=Math.floor(r/2),c=[],i=0;i<a;i++)for(var l=0;l<e;l++){for(var s=i*e+l,d=0,h=0;h<r;h++)for(var p=0;p<r;p++){var u=i+h-o,v=l+p-o;if(u>=0&&u<a&&v>=0&&v<e){var g=n[h*r+p];d+=t[u*e+v]*g}}c[s]=2040===d?255:0}return c}(n,a.width,a.height),a.width,a.height),a.width,a.height)),a},Konva.Factory.addGetterSetter(Konva.Node,"threshold",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.RGB=function(t){var e,a,n=t.data,r=n.length,o=this.red(),c=this.green(),i=this.blue();for(e=0;e<r;e+=4)a=(.34*n[e]+.5*n[e+1]+.16*n[e+2])/255,n[e]=a*o,n[e+1]=a*c,n[e+2]=a*i,n[e+3]=n[e+3]},Konva.Factory.addGetterSetter(Konva.Node,"red",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"green",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"blue",0,Konva.Validators.RGBComponent,Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.RGBA=function(t){var e,a,n=t.data,r=n.length,o=this.red(),c=this.green(),i=this.blue(),l=this.alpha();for(e=0;e<r;e+=4)a=1-l,n[e]=o*l+n[e]*a,n[e+1]=c*l+n[e+1]*a,n[e+2]=i*l+n[e+2]*a},Konva.Factory.addGetterSetter(Konva.Node,"red",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"green",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"blue",0,Konva.Validators.RGBComponent,Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"alpha",1,function(t){return this._filterUpToDate=!1,t>1?1:t<0?0:t})}(),function(){"use strict";Konva.Filters.HSV=function(t){var e,a,n,r,o,c=t.data,i=c.length,l=Math.pow(2,this.value()),s=Math.pow(2,this.saturation()),d=Math.abs(this.hue()+360)%360,h=l*s*Math.cos(d*Math.PI/180),p=l*s*Math.sin(d*Math.PI/180),u=.299*l+.701*h+.167*p,v=.587*l-.587*h+.33*p,g=.114*l-.114*h-.497*p,m=.299*l-.299*h-.328*p,f=.587*l+.413*h+.035*p,x=.114*l-.114*h+.293*p,M=.299*l-.3*h+1.25*p,z=.587*l-.586*h-1.05*p,y=.114*l+.886*h-.2*p;for(e=0;e<i;e+=4)a=c[e+0],n=c[e+1],r=c[e+2],o=c[e+3],c[e+0]=u*a+v*n+g*r,c[e+1]=m*a+f*n+x*r,c[e+2]=M*a+z*n+y*r,c[e+3]=o},Konva.Factory.addGetterSetter(Konva.Node,"hue",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"saturation",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"value",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Factory.addGetterSetter(Konva.Node,"hue",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"saturation",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"luminance",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Filters.HSL=function(t){var e,a,n,r,o,c=t.data,i=c.length,l=Math.pow(2,this.saturation()),s=Math.abs(this.hue()+360)%360,d=127*this.luminance(),h=1*l*Math.cos(s*Math.PI/180),p=1*l*Math.sin(s*Math.PI/180),u=.299+.701*h+.167*p,v=.587-.587*h+.33*p,g=.114-.114*h-.497*p,m=.299-.299*h-.328*p,f=.587+.413*h+.035*p,x=.114-.114*h+.293*p,M=.299-.3*h+1.25*p,z=.587-.586*h-1.05*p,y=.114+.886*h-.2*p;for(e=0;e<i;e+=4)a=c[e+0],n=c[e+1],r=c[e+2],o=c[e+3],c[e+0]=u*a+v*n+g*r+d,c[e+1]=m*a+f*n+x*r+d,c[e+2]=M*a+z*n+y*r+d,c[e+3]=o}}(),function(){"use strict";Konva.Filters.Emboss=function(t){var e=10*this.embossStrength(),a=255*this.embossWhiteLevel(),n=this.embossDirection(),r=this.embossBlend(),o=0,c=0,i=t.data,l=t.width,s=t.height,d=4*l,h=s;switch(n){case"top-left":o=-1,c=-1;break;case"top":o=-1,c=0;break;case"top-right":o=-1,c=1;break;case"right":o=0,c=1;break;case"bottom-right":o=1,c=1;break;case"bottom":o=1,c=0;break;case"bottom-left":o=1,c=-1;break;case"left":o=0,c=-1;break;default:Konva.Util.error("Unknown emboss direction: "+n)}do{var p=(h-1)*d,u=o;h+u<1&&(u=0),h+u>s&&(u=0);var v=(h-1+u)*l*4,g=l;do{var m=p+4*(g-1),f=c;g+f<1&&(f=0),g+f>l&&(f=0);var x=v+4*(g-1+f),M=i[m]-i[x],z=i[m+1]-i[x+1],y=i[m+2]-i[x+2],b=M,w=b>0?b:-b;if((z>0?z:-z)>w&&(b=z),(y>0?y:-y)>w&&(b=y),b*=e,r){var C=i[m]+b,H=i[m+1]+b,F=i[m+2]+b;i[m]=C>255?255:C<0?0:C,i[m+1]=H>255?255:H<0?0:H,i[m+2]=F>255?255:F<0?0:F}else{var V=a-b;V<0?V=0:V>255&&(V=255),i[m]=i[m+1]=i[m+2]=V}}while(--g)}while(--h)},Konva.Factory.addGetterSetter(Konva.Node,"embossStrength",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossWhiteLevel",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossDirection","top-left",null,Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossBlend",!1,null,Konva.Factory.afterSetFilter)}(),function(){"use strict";function t(t,e,a,n,r){var o=a-e,c=r-n;return 0===o?n+c/2:0===c?n:c*((t-e)/o)+n}Konva.Filters.Enhance=function(e){var a,n,r,o,c=e.data,i=c.length,l=c[0],s=l,d=c[1],h=d,p=c[2],u=p,v=this.enhance();if(0!==v){for(o=0;o<i;o+=4)(a=c[o+0])<l?l=a:a>s&&(s=a),(n=c[o+1])<d?d=n:n>h&&(h=n),(r=c[o+2])<p?p=r:r>u&&(u=r);var g,m,f,x,M,z,y,b,w;for(s===l&&(s=255,l=0),h===d&&(h=255,d=0),u===p&&(u=255,p=0),v>0?(m=s+v*(255-s),f=l-v*(l-0),M=h+v*(255-h),z=d-v*(d-0),b=u+v*(255-u),w=p-v*(p-0)):(m=s+v*(s-(g=.5*(s+l))),f=l+v*(l-g),M=h+v*(h-(x=.5*(h+d))),z=d+v*(d-x),b=u+v*(u-(y=.5*(u+p))),w=p+v*(p-y)),o=0;o<i;o+=4)c[o+0]=t(c[o+0],l,s,f,m),c[o+1]=t(c[o+1],d,h,z,M),c[o+2]=t(c[o+2],p,u,w,b)}},Konva.Factory.addGetterSetter(Konva.Node,"enhance",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Posterize=function(t){var e,a=Math.round(254*this.levels())+1,n=t.data,r=n.length,o=255/a;for(e=0;e<r;e+=1)n[e]=Math.floor(n[e]/o)*o},Konva.Factory.addGetterSetter(Konva.Node,"levels",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Noise=function(t){var e,a=255*this.noise(),n=t.data,r=n.length,o=a/2;for(e=0;e<r;e+=4)n[e+0]+=o-2*o*Math.random(),n[e+1]+=o-2*o*Math.random(),n[e+2]+=o-2*o*Math.random()},Konva.Factory.addGetterSetter(Konva.Node,"noise",.2,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Pixelate=function(t){var e,a,n,r,o,c,i,l,s,d,h,p,u,v,g=Math.ceil(this.pixelSize()),m=t.width,f=t.height,x=Math.ceil(m/g),M=Math.ceil(f/g);if(t=t.data,g<=0)Konva.Util.error("pixelSize value can not be <= 0");else for(p=0;p<x;p+=1)for(u=0;u<M;u+=1){for(r=0,o=0,c=0,i=0,s=(l=p*g)+g,h=(d=u*g)+g,v=0,e=l;e<s;e+=1)if(!(e>=m))for(a=d;a<h;a+=1)a>=f||(r+=t[(n=4*(m*a+e))+0],o+=t[n+1],c+=t[n+2],i+=t[n+3],v+=1);for(r/=v,o/=v,c/=v,i/=v,e=l;e<s;e+=1)if(!(e>=m))for(a=d;a<h;a+=1)a>=f||(t[(n=4*(m*a+e))+0]=r,t[n+1]=o,t[n+2]=c,t[n+3]=i)}},Konva.Factory.addGetterSetter(Konva.Node,"pixelSize",8,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Threshold=function(t){var e,a=255*this.threshold(),n=t.data,r=n.length;for(e=0;e<r;e+=1)n[e]=n[e]<a?0:255},Konva.Factory.addGetterSetter(Konva.Node,"threshold",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";
/**
   * Sepia Filter
   * Based on: Pixastic Lib - Sepia filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * @function
   * @name Sepia
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author Jacob Seidelin <jseidelin@nihilogic.dk>
   * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Sepia]);
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a(19),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,f="function"==typeof Symbol&&Symbol.iterator;function x(t){for(var e=arguments.length-1,a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=0;n<e;n++)a+="&args[]="+encodeURIComponent(arguments[n+1]);!function(t,e,a,n,r,o,c,i){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,n,r,o,c,i],s=0;(t=Error(e.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",a)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z={};function y(t,e,a){this.props=t,this.context=e,this.refs=z,this.updater=a||M}function b(){}function w(t,e,a){this.props=t,this.context=e,this.refs=z,this.updater=a||M}y.prototype.isReactComponent={},y.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&x("85"),this.updater.enqueueSetState(this,t,e,"setState")},y.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},b.prototype=y.prototype;var C=w.prototype=new b;C.constructor=w,n(C,y.prototype),C.isPureReactComponent=!0;var H={current:null,currentDispatcher:null},F=Object.prototype.hasOwnProperty,V={key:!0,ref:!0,__self:!0,__source:!0};function L(t,e,a){var n=void 0,r={},c=null,i=null;if(null!=e)for(n in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(c=""+e.key),e)F.call(e,n)&&!V.hasOwnProperty(n)&&(r[n]=e[n]);var l=arguments.length-2;if(1===l)r.children=a;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}if(t&&t.defaultProps)for(n in l=t.defaultProps)void 0===r[n]&&(r[n]=l[n]);return{$$typeof:o,type:t,key:c,ref:i,props:r,_owner:H.current}}function N(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var B=/\/+/g,S=[];function I(t,e,a,n){if(S.length){var r=S.pop();return r.result=t,r.keyPrefix=e,r.func=a,r.context=n,r.count=0,r}return{result:t,keyPrefix:e,func:a,context:n,count:0}}function k(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>S.length&&S.push(t)}function P(t,e,a){return null==t?0:function t(e,a,n,r){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return n(r,e,""===a?"."+T(e,0):a),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var s=0;s<e.length;s++){var d=a+T(i=e[s],s);l+=t(i,d,n,r)}else if(d=null===e||"object"!=typeof e?null:"function"==typeof(d=f&&e[f]||e["@@iterator"])?d:null,"function"==typeof d)for(e=d.call(e),s=0;!(i=e.next()).done;)l+=t(i=i.value,d=a+T(i,s++),n,r);else"object"===i&&x("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}(t,"",e,a)}function T(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function A(t,e){t.func.call(t.context,e,t.count++)}function _(t,e,a){var n=t.result,r=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?E(t,n,a,function(t){return t}):null!=t&&(N(t)&&(t=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,r+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(B,"$&/")+"/")+a)),n.push(t))}function E(t,e,a,n,r){var o="";null!=a&&(o=(""+a).replace(B,"$&/")+"/"),P(t,_,e=I(e,o,n,r)),k(e)}var R={Children:{map:function(t,e,a){if(null==t)return t;var n=[];return E(t,n,null,e,a),n},forEach:function(t,e,a){if(null==t)return t;P(t,A,e=I(null,null,e,a)),k(e)},count:function(t){return P(t,function(){return null},null)},toArray:function(t){var e=[];return E(t,e,null,function(t){return t}),e},only:function(t){return N(t)||x("143"),t}},createRef:function(){return{current:null}},Component:y,PureComponent:w,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:h,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:u,render:t}},lazy:function(t){return{$$typeof:m,_ctor:t,_status:-1,_result:null}},memo:function(t,e){return{$$typeof:g,type:t,compare:void 0===e?null:e}},Fragment:i,StrictMode:l,Suspense:v,createElement:L,cloneElement:function(t,e,a){null==t&&x("267",t);var r=void 0,c=n({},t.props),i=t.key,l=t.ref,s=t._owner;if(null!=e){void 0!==e.ref&&(l=e.ref,s=H.current),void 0!==e.key&&(i=""+e.key);var d=void 0;for(r in t.type&&t.type.defaultProps&&(d=t.type.defaultProps),e)F.call(e,r)&&!V.hasOwnProperty(r)&&(c[r]=void 0===e[r]&&void 0!==d?d[r]:e[r])}if(1===(r=arguments.length-2))c.children=a;else if(1<r){d=Array(r);for(var h=0;h<r;h++)d[h]=arguments[h+2];c.children=d}return{$$typeof:o,type:t.type,key:i,ref:l,props:c,_owner:s}},createFactory:function(t){var e=L.bind(null,t);return e.type=t,e},isValidElement:N,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:H,assign:n}};R.unstable_ConcurrentMode=p,R.unstable_Profiler=s;var O={default:R},D=O&&R||O;t.exports=D.default||D},function(t,e,a){"use strict";var n=a(58);function r(){}t.exports=function(){function t(t,e,a,r,o,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var a={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return a.checkPropTypes=r,a.PropTypes=a,a}},function(t,e,a){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,a){"use strict";
/** @license React v16.6.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=a(1),r=a(19),o=a(20);function c(t){for(var e=arguments.length-1,a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=0;n<e;n++)a+="&args[]="+encodeURIComponent(arguments[n+1]);!function(t,e,a,n,r,o,c,i){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,n,r,o,c,i],s=0;(t=Error(e.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",a)}n||c("227");var i=!1,l=null,s=!1,d=null,h={onError:function(t){i=!0,l=t}};function p(t,e,a,n,r,o,c,s,d){i=!1,l=null,function(t,e,a,n,r,o,c,i,l){var s=Array.prototype.slice.call(arguments,3);try{e.apply(a,s)}catch(t){this.onError(t)}}.apply(h,arguments)}var u=null,v={};function g(){if(u)for(var t in v){var e=v[t],a=u.indexOf(t);if(-1<a||c("96",t),!f[a])for(var n in e.extractEvents||c("97",t),f[a]=e,a=e.eventTypes){var r=void 0,o=a[n],i=e,l=n;x.hasOwnProperty(l)&&c("99",l),x[l]=o;var s=o.phasedRegistrationNames;if(s){for(r in s)s.hasOwnProperty(r)&&m(s[r],i,l);r=!0}else o.registrationName?(m(o.registrationName,i,l),r=!0):r=!1;r||c("98",n,t)}}}function m(t,e,a){M[t]&&c("100",t),M[t]=e,z[t]=e.eventTypes[a].dependencies}var f=[],x={},M={},z={},y=null,b=null,w=null;function C(t,e,a){var n=t.type||"unknown-event";t.currentTarget=w(a),function(t,e,a,n,r,o,h,u,v){if(p.apply(this,arguments),i){if(i){var g=l;i=!1,l=null}else c("198"),g=void 0;s||(s=!0,d=g)}}(n,e,void 0,t),t.currentTarget=null}function H(t,e){return null==e&&c("30"),null==t?e:Array.isArray(t)?Array.isArray(e)?(t.push.apply(t,e),t):(t.push(e),t):Array.isArray(e)?[t].concat(e):[t,e]}function F(t,e,a){Array.isArray(t)?t.forEach(e,a):t&&e.call(a,t)}var V=null;function L(t){if(t){var e=t._dispatchListeners,a=t._dispatchInstances;if(Array.isArray(e))for(var n=0;n<e.length&&!t.isPropagationStopped();n++)C(t,e[n],a[n]);else e&&C(t,e,a);t._dispatchListeners=null,t._dispatchInstances=null,t.isPersistent()||t.constructor.release(t)}}var N={injectEventPluginOrder:function(t){u&&c("101"),u=Array.prototype.slice.call(t),g()},injectEventPluginsByName:function(t){var e,a=!1;for(e in t)if(t.hasOwnProperty(e)){var n=t[e];v.hasOwnProperty(e)&&v[e]===n||(v[e]&&c("102",e),v[e]=n,a=!0)}a&&g()}};function B(t,e){var a=t.stateNode;if(!a)return null;var n=y(a);if(!n)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(n=!n.disabled)||(n=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!n;break t;default:t=!1}return t?null:(a&&"function"!=typeof a&&c("231",e,typeof a),a)}function S(t){if(null!==t&&(V=H(V,t)),t=V,V=null,t&&(F(t,L),V&&c("95"),s))throw t=d,s=!1,d=null,t}var I=Math.random().toString(36).slice(2),k="__reactInternalInstance$"+I,P="__reactEventHandlers$"+I;function T(t){if(t[k])return t[k];for(;!t[k];){if(!t.parentNode)return null;t=t.parentNode}return 5===(t=t[k]).tag||6===t.tag?t:null}function A(t){return!(t=t[k])||5!==t.tag&&6!==t.tag?null:t}function _(t){if(5===t.tag||6===t.tag)return t.stateNode;c("33")}function E(t){return t[P]||null}function R(t){do{t=t.return}while(t&&5!==t.tag);return t||null}function O(t,e,a){(e=B(t,a.dispatchConfig.phasedRegistrationNames[e]))&&(a._dispatchListeners=H(a._dispatchListeners,e),a._dispatchInstances=H(a._dispatchInstances,t))}function D(t){if(t&&t.dispatchConfig.phasedRegistrationNames){for(var e=t._targetInst,a=[];e;)a.push(e),e=R(e);for(e=a.length;0<e--;)O(a[e],"captured",t);for(e=0;e<a.length;e++)O(a[e],"bubbled",t)}}function G(t,e,a){t&&a&&a.dispatchConfig.registrationName&&(e=B(t,a.dispatchConfig.registrationName))&&(a._dispatchListeners=H(a._dispatchListeners,e),a._dispatchInstances=H(a._dispatchInstances,t))}function j(t){t&&t.dispatchConfig.registrationName&&G(t._targetInst,null,t)}function U(t){F(t,D)}var K=!("undefined"==typeof window||!window.document||!window.document.createElement);function W(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var q={animationend:W("Animation","AnimationEnd"),animationiteration:W("Animation","AnimationIteration"),animationstart:W("Animation","AnimationStart"),transitionend:W("Transition","TransitionEnd")},Y={},Q={};function X(t){if(Y[t])return Y[t];if(!q[t])return t;var e,a=q[t];for(e in a)if(a.hasOwnProperty(e)&&e in Q)return Y[t]=a[e];return t}K&&(Q=document.createElement("div").style,"AnimationEvent"in window||(delete q.animationend.animation,delete q.animationiteration.animation,delete q.animationstart.animation),"TransitionEvent"in window||delete q.transitionend.transition);var J=X("animationend"),$=X("animationiteration"),Z=X("animationstart"),tt=X("transitionend"),et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),at=null,nt=null,rt=null;function ot(){if(rt)return rt;var t,e,a=nt,n=a.length,r="value"in at?at.value:at.textContent,o=r.length;for(t=0;t<n&&a[t]===r[t];t++);var c=n-t;for(e=1;e<=c&&a[n-e]===r[o-e];e++);return rt=r.slice(t,1<e?1-e:void 0)}function ct(){return!0}function it(){return!1}function lt(t,e,a,n){for(var r in this.dispatchConfig=t,this._targetInst=e,this.nativeEvent=a,t=this.constructor.Interface)t.hasOwnProperty(r)&&((e=t[r])?this[r]=e(a):"target"===r?this.target=n:this[r]=a[r]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?ct:it,this.isPropagationStopped=it,this}function st(t,e,a,n){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,t,e,a,n),r}return new this(t,e,a,n)}function dt(t){t instanceof this||c("279"),t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function ht(t){t.eventPool=[],t.getPooled=st,t.release=dt}r(lt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():"unknown"!=typeof t.returnValue&&(t.returnValue=!1),this.isDefaultPrevented=ct)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():"unknown"!=typeof t.cancelBubble&&(t.cancelBubble=!0),this.isPropagationStopped=ct)},persist:function(){this.isPersistent=ct},isPersistent:it,destructor:function(){var t,e=this.constructor.Interface;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=it,this._dispatchInstances=this._dispatchListeners=null}}),lt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},lt.extend=function(t){function e(){}function a(){return n.apply(this,arguments)}var n=this;e.prototype=n.prototype;var o=new e;return r(o,a.prototype),a.prototype=o,a.prototype.constructor=a,a.Interface=r({},n.Interface,t),a.extend=n.extend,ht(a),a},ht(lt);var pt=lt.extend({data:null}),ut=lt.extend({data:null}),vt=[9,13,27,32],gt=K&&"CompositionEvent"in window,mt=null;K&&"documentMode"in document&&(mt=document.documentMode);var ft=K&&"TextEvent"in window&&!mt,xt=K&&(!gt||mt&&8<mt&&11>=mt),Mt=String.fromCharCode(32),zt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yt=!1;function bt(t,e){switch(t){case"keyup":return-1!==vt.indexOf(e.keyCode);case"keydown":return 229!==e.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function wt(t){return"object"==typeof(t=t.detail)&&"data"in t?t.data:null}var Ct=!1;var Ht={eventTypes:zt,extractEvents:function(t,e,a,n){var r=void 0,o=void 0;if(gt)t:{switch(t){case"compositionstart":r=zt.compositionStart;break t;case"compositionend":r=zt.compositionEnd;break t;case"compositionupdate":r=zt.compositionUpdate;break t}r=void 0}else Ct?bt(t,a)&&(r=zt.compositionEnd):"keydown"===t&&229===a.keyCode&&(r=zt.compositionStart);return r?(xt&&"ko"!==a.locale&&(Ct||r!==zt.compositionStart?r===zt.compositionEnd&&Ct&&(o=ot()):(nt="value"in(at=n)?at.value:at.textContent,Ct=!0)),r=pt.getPooled(r,e,a,n),o?r.data=o:null!==(o=wt(a))&&(r.data=o),U(r),o=r):o=null,(t=ft?function(t,e){switch(t){case"compositionend":return wt(e);case"keypress":return 32!==e.which?null:(yt=!0,Mt);case"textInput":return(t=e.data)===Mt&&yt?null:t;default:return null}}(t,a):function(t,e){if(Ct)return"compositionend"===t||!gt&&bt(t,e)?(t=ot(),rt=nt=at=null,Ct=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xt&&"ko"!==e.locale?null:e.data;default:return null}}(t,a))?((e=ut.getPooled(zt.beforeInput,e,a,n)).data=t,U(e)):e=null,null===o?e:null===e?o:[o,e]}},Ft=null,Vt=null,Lt=null;function Nt(t){if(t=b(t)){"function"!=typeof Ft&&c("280");var e=y(t.stateNode);Ft(t.stateNode,t.type,e)}}function Bt(t){Vt?Lt?Lt.push(t):Lt=[t]:Vt=t}function St(){if(Vt){var t=Vt,e=Lt;if(Lt=Vt=null,Nt(t),e)for(t=0;t<e.length;t++)Nt(e[t])}}function It(t,e){return t(e)}function kt(t,e,a){return t(e,a)}function Pt(){}var Tt=!1;function At(t,e){if(Tt)return t(e);Tt=!0;try{return It(t,e)}finally{Tt=!1,(null!==Vt||null!==Lt)&&(Pt(),St())}}var _t={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Et(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return"input"===e?!!_t[t.type]:"textarea"===e}function Rt(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}function Ot(t){if(!K)return!1;var e=(t="on"+t)in document;return e||((e=document.createElement("div")).setAttribute(t,"return;"),e="function"==typeof e[t]),e}function Dt(t){var e=t.type;return(t=t.nodeName)&&"input"===t.toLowerCase()&&("checkbox"===e||"radio"===e)}function Gt(t){t._valueTracker||(t._valueTracker=function(t){var e=Dt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&void 0!==a&&"function"==typeof a.get&&"function"==typeof a.set){var r=a.get,o=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(t){n=""+t,o.call(this,t)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(t){n=""+t},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}(t))}function jt(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Dt(t)?t.checked?"true":"false":t.value),(t=n)!==a&&(e.setValue(t),!0)}var Ut=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kt=/^(.*)[\\\/]/,Wt="function"==typeof Symbol&&Symbol.for,qt=Wt?Symbol.for("react.element"):60103,Yt=Wt?Symbol.for("react.portal"):60106,Qt=Wt?Symbol.for("react.fragment"):60107,Xt=Wt?Symbol.for("react.strict_mode"):60108,Jt=Wt?Symbol.for("react.profiler"):60114,$t=Wt?Symbol.for("react.provider"):60109,Zt=Wt?Symbol.for("react.context"):60110,te=Wt?Symbol.for("react.concurrent_mode"):60111,ee=Wt?Symbol.for("react.forward_ref"):60112,ae=Wt?Symbol.for("react.suspense"):60113,ne=Wt?Symbol.for("react.memo"):60115,re=Wt?Symbol.for("react.lazy"):60116,oe="function"==typeof Symbol&&Symbol.iterator;function ce(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=oe&&t[oe]||t["@@iterator"])?t:null}function ie(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case te:return"ConcurrentMode";case Qt:return"Fragment";case Yt:return"Portal";case Jt:return"Profiler";case Xt:return"StrictMode";case ae:return"Suspense"}if("object"==typeof t)switch(t.$$typeof){case Zt:return"Context.Consumer";case $t:return"Context.Provider";case ee:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case ne:return ie(t.type);case re:if(t=1===t._status?t._result:null)return ie(t)}return null}function le(t){var e="";do{t:switch(t.tag){case 2:case 16:case 0:case 1:case 5:case 8:case 13:var a=t._debugOwner,n=t._debugSource,r=ie(t.type),o=null;a&&(o=ie(a.type)),a=r,r="",n?r=" (at "+n.fileName.replace(Kt,"")+":"+n.lineNumber+")":o&&(r=" (created by "+o+")"),o="\n    in "+(a||"Unknown")+r;break t;default:o=""}e+=o,t=t.return}while(t);return e}var se=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,de=Object.prototype.hasOwnProperty,he={},pe={};function ue(t,e,a,n,r){this.acceptsBooleans=2===e||3===e||4===e,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=t,this.type=e}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new ue(t,0,!1,t,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new ue(e,1,!1,t[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new ue(t,2,!1,t.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new ue(t,2,!1,t,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new ue(t,3,!1,t.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new ue(t,3,!0,t,null)}),["capture","download"].forEach(function(t){ve[t]=new ue(t,4,!1,t,null)}),["cols","rows","size","span"].forEach(function(t){ve[t]=new ue(t,6,!1,t,null)}),["rowSpan","start"].forEach(function(t){ve[t]=new ue(t,5,!1,t.toLowerCase(),null)});var ge=/[\-:]([a-z])/g;function me(t){return t[1].toUpperCase()}function fe(t,e,a,n){var r=ve.hasOwnProperty(e)?ve[e]:null;(null!==r?0===r.type:!n&&(2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])))||(function(t,e,a,n){if(null==e||function(t,e,a,n){if(null!==a&&0===a.type)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==a?!a.acceptsBooleans:"data-"!==(t=t.toLowerCase().slice(0,5))&&"aria-"!==t);default:return!1}}(t,e,a,n))return!0;if(n)return!1;if(null!==a)switch(a.type){case 3:return!e;case 4:return!1===e;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}(e,a,r,n)&&(a=null),n||null===r?function(t){return!!de.call(pe,t)||!de.call(he,t)&&(se.test(t)?pe[t]=!0:(he[t]=!0,!1))}(e)&&(null===a?t.removeAttribute(e):t.setAttribute(e,""+a)):r.mustUseProperty?t[r.propertyName]=null===a?3!==r.type&&"":a:(e=r.attributeName,n=r.attributeNamespace,null===a?t.removeAttribute(e):(a=3===(r=r.type)||4===r&&!0===a?"":""+a,n?t.setAttributeNS(n,e,a):t.setAttribute(e,a))))}function xe(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Me(t,e){var a=e.checked;return r({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=a?a:t._wrapperState.initialChecked})}function ze(t,e){var a=null==e.defaultValue?"":e.defaultValue,n=null!=e.checked?e.checked:e.defaultChecked;a=xe(null!=e.value?e.value:a),t._wrapperState={initialChecked:n,initialValue:a,controlled:"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}}function ye(t,e){null!=(e=e.checked)&&fe(t,"checked",e,!1)}function be(t,e){ye(t,e);var a=xe(e.value),n=e.type;if(null!=a)"number"===n?(0===a&&""===t.value||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if("submit"===n||"reset"===n)return void t.removeAttribute("value");e.hasOwnProperty("value")?Ce(t,e.type,a):e.hasOwnProperty("defaultValue")&&Ce(t,e.type,xe(e.defaultValue)),null==e.checked&&null!=e.defaultChecked&&(t.defaultChecked=!!e.defaultChecked)}function we(t,e,a){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!("submit"!==n&&"reset"!==n||void 0!==e.value&&null!==e.value))return;e=""+t._wrapperState.initialValue,a||e===t.value||(t.value=e),t.defaultValue=e}""!==(a=t.name)&&(t.name=""),t.defaultChecked=!t.defaultChecked,t.defaultChecked=!!t._wrapperState.initialChecked,""!==a&&(t.name=a)}function Ce(t,e,a){"number"===e&&t.ownerDocument.activeElement===t||(null==a?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ge,me);ve[e]=new ue(e,1,!1,t,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ge,me);ve[e]=new ue(e,1,!1,t,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ge,me);ve[e]=new ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace")}),ve.tabIndex=new ue("tabIndex",1,!1,"tabindex",null);var He={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Fe(t,e,a){return(t=lt.getPooled(He.change,t,e,a)).type="change",Bt(a),U(t),t}var Ve=null,Le=null;function Ne(t){S(t)}function Be(t){if(jt(_(t)))return t}function Se(t,e){if("change"===t)return e}var Ie=!1;function ke(){Ve&&(Ve.detachEvent("onpropertychange",Pe),Le=Ve=null)}function Pe(t){"value"===t.propertyName&&Be(Le)&&At(Ne,t=Fe(Le,t,Rt(t)))}function Te(t,e,a){"focus"===t?(ke(),Le=a,(Ve=e).attachEvent("onpropertychange",Pe)):"blur"===t&&ke()}function Ae(t){if("selectionchange"===t||"keyup"===t||"keydown"===t)return Be(Le)}function _e(t,e){if("click"===t)return Be(e)}function Ee(t,e){if("input"===t||"change"===t)return Be(e)}K&&(Ie=Ot("input")&&(!document.documentMode||9<document.documentMode));var Re={eventTypes:He,_isInputEventSupported:Ie,extractEvents:function(t,e,a,n){var r=e?_(e):window,o=void 0,c=void 0,i=r.nodeName&&r.nodeName.toLowerCase();if("select"===i||"input"===i&&"file"===r.type?o=Se:Et(r)?Ie?o=Ee:(o=Ae,c=Te):(i=r.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(o=_e),o&&(o=o(t,e)))return Fe(o,a,n);c&&c(t,r,e),"blur"===t&&(t=r._wrapperState)&&t.controlled&&"number"===r.type&&Ce(r,"number",r.value)}},Oe=lt.extend({view:null,detail:null}),De={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ge(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):!!(t=De[t])&&!!e[t]}function je(){return Ge}var Ue=0,Ke=0,We=!1,qe=!1,Ye=Oe.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:je,button:null,buttons:null,relatedTarget:function(t){return t.relatedTarget||(t.fromElement===t.srcElement?t.toElement:t.fromElement)},movementX:function(t){if("movementX"in t)return t.movementX;var e=Ue;return Ue=t.screenX,We?"mousemove"===t.type?t.screenX-e:0:(We=!0,0)},movementY:function(t){if("movementY"in t)return t.movementY;var e=Ke;return Ke=t.screenY,qe?"mousemove"===t.type?t.screenY-e:0:(qe=!0,0)}}),Qe=Ye.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Je={eventTypes:Xe,extractEvents:function(t,e,a,n){var r="mouseover"===t||"pointerover"===t,o="mouseout"===t||"pointerout"===t;if(r&&(a.relatedTarget||a.fromElement)||!o&&!r)return null;if(r=n.window===n?n:(r=n.ownerDocument)?r.defaultView||r.parentWindow:window,o?(o=e,e=(e=a.relatedTarget||a.toElement)?T(e):null):o=null,o===e)return null;var c=void 0,i=void 0,l=void 0,s=void 0;"mouseout"===t||"mouseover"===t?(c=Ye,i=Xe.mouseLeave,l=Xe.mouseEnter,s="mouse"):"pointerout"!==t&&"pointerover"!==t||(c=Qe,i=Xe.pointerLeave,l=Xe.pointerEnter,s="pointer");var d=null==o?r:_(o);if(r=null==e?r:_(e),(t=c.getPooled(i,o,a,n)).type=s+"leave",t.target=d,t.relatedTarget=r,(a=c.getPooled(l,e,a,n)).type=s+"enter",a.target=r,a.relatedTarget=d,n=e,o&&n)t:{for(r=n,s=0,c=e=o;c;c=R(c))s++;for(c=0,l=r;l;l=R(l))c++;for(;0<s-c;)e=R(e),s--;for(;0<c-s;)r=R(r),c--;for(;s--;){if(e===r||e===r.alternate)break t;e=R(e),r=R(r)}e=null}else e=null;for(r=e,e=[];o&&o!==r&&(null===(s=o.alternate)||s!==r);)e.push(o),o=R(o);for(o=[];n&&n!==r&&(null===(s=n.alternate)||s!==r);)o.push(n),n=R(n);for(n=0;n<e.length;n++)G(e[n],"bubbled",t);for(n=o.length;0<n--;)G(o[n],"captured",a);return[t,a]}},$e=Object.prototype.hasOwnProperty;function Ze(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function ta(t,e){if(Ze(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++)if(!$e.call(e,a[n])||!Ze(t[a[n]],e[a[n]]))return!1;return!0}function ea(t){var e=t;if(t.alternate)for(;e.return;)e=e.return;else{if(0!=(2&e.effectTag))return 1;for(;e.return;)if(0!=(2&(e=e.return).effectTag))return 1}return 3===e.tag?2:3}function aa(t){2!==ea(t)&&c("188")}function na(t){if(!(t=function(t){var e=t.alternate;if(!e)return 3===(e=ea(t))&&c("188"),1===e?null:t;for(var a=t,n=e;;){var r=a.return,o=r?r.alternate:null;if(!r||!o)break;if(r.child===o.child){for(var i=r.child;i;){if(i===a)return aa(r),t;if(i===n)return aa(r),e;i=i.sibling}c("188")}if(a.return!==n.return)a=r,n=o;else{i=!1;for(var l=r.child;l;){if(l===a){i=!0,a=r,n=o;break}if(l===n){i=!0,n=r,a=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===a){i=!0,a=o,n=r;break}if(l===n){i=!0,n=o,a=r;break}l=l.sibling}i||c("189")}}a.alternate!==n&&c("190")}return 3!==a.tag&&c("188"),a.stateNode.current===a?t:e}(t)))return null;for(var e=t;;){if(5===e.tag||6===e.tag)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}var ra=lt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),oa=lt.extend({clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ca=Oe.extend({relatedTarget:null});function ia(t){var e=t.keyCode;return"charCode"in t?0===(t=t.charCode)&&13===e&&(t=13):t=e,10===t&&(t=13),32<=t||13===t?t:0}var la={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sa={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},da=Oe.extend({key:function(t){if(t.key){var e=la[t.key]||t.key;if("Unidentified"!==e)return e}return"keypress"===t.type?13===(t=ia(t))?"Enter":String.fromCharCode(t):"keydown"===t.type||"keyup"===t.type?sa[t.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:je,charCode:function(t){return"keypress"===t.type?ia(t):0},keyCode:function(t){return"keydown"===t.type||"keyup"===t.type?t.keyCode:0},which:function(t){return"keypress"===t.type?ia(t):"keydown"===t.type||"keyup"===t.type?t.keyCode:0}}),ha=Ye.extend({dataTransfer:null}),pa=Oe.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:je}),ua=lt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),va=Ye.extend({deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:null,deltaMode:null}),ga=[["abort","abort"],[J,"animationEnd"],[$,"animationIteration"],[Z,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[tt,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ma={},fa={};function xa(t,e){var a=t[0],n="on"+((t=t[1])[0].toUpperCase()+t.slice(1));e={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[a],isInteractive:e},ma[t]=e,fa[a]=e}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(t){xa(t,!0)}),ga.forEach(function(t){xa(t,!1)});var Ma={eventTypes:ma,isInteractiveTopLevelEventType:function(t){return void 0!==(t=fa[t])&&!0===t.isInteractive},extractEvents:function(t,e,a,n){var r=fa[t];if(!r)return null;switch(t){case"keypress":if(0===ia(a))return null;case"keydown":case"keyup":t=da;break;case"blur":case"focus":t=ca;break;case"click":if(2===a.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":t=Ye;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":t=ha;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":t=pa;break;case J:case $:case Z:t=ra;break;case tt:t=ua;break;case"scroll":t=Oe;break;case"wheel":t=va;break;case"copy":case"cut":case"paste":t=oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":t=Qe;break;default:t=lt}return U(e=t.getPooled(r,e,a,n)),e}},za=Ma.isInteractiveTopLevelEventType,ya=[];function ba(t){var e=t.targetInst,a=e;do{if(!a){t.ancestors.push(a);break}var n;for(n=a;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;t.ancestors.push(a),a=T(n)}while(a);for(a=0;a<t.ancestors.length;a++){e=t.ancestors[a];var r=Rt(t.nativeEvent);n=t.topLevelType;for(var o=t.nativeEvent,c=null,i=0;i<f.length;i++){var l=f[i];l&&(l=l.extractEvents(n,e,o,r))&&(c=H(c,l))}S(c)}}var wa=!0;function Ca(t,e){if(!e)return null;var a=(za(t)?Fa:Va).bind(null,t);e.addEventListener(t,a,!1)}function Ha(t,e){if(!e)return null;var a=(za(t)?Fa:Va).bind(null,t);e.addEventListener(t,a,!0)}function Fa(t,e){kt(Va,t,e)}function Va(t,e){if(wa){var a=Rt(e);if(null===(a=T(a))||"number"!=typeof a.tag||2===ea(a)||(a=null),ya.length){var n=ya.pop();n.topLevelType=t,n.nativeEvent=e,n.targetInst=a,t=n}else t={topLevelType:t,nativeEvent:e,targetInst:a,ancestors:[]};try{At(ba,t)}finally{t.topLevelType=null,t.nativeEvent=null,t.targetInst=null,t.ancestors.length=0,10>ya.length&&ya.push(t)}}}var La={},Na=0,Ba="_reactListenersID"+(""+Math.random()).slice(2);function Sa(t){return Object.prototype.hasOwnProperty.call(t,Ba)||(t[Ba]=Na++,La[t[Ba]]={}),La[t[Ba]]}function Ia(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}function ka(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pa(t,e){var a,n=ka(t);for(t=0;n;){if(3===n.nodeType){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ka(n)}}function Ta(){for(var t=window,e=Ia();e instanceof t.HTMLIFrameElement;){try{t=e.contentDocument.defaultView}catch(t){break}e=Ia(t.document)}return e}function Aa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&("input"===e&&("text"===t.type||"search"===t.type||"tel"===t.type||"url"===t.type||"password"===t.type)||"textarea"===e||"true"===t.contentEditable)}var _a=K&&"documentMode"in document&&11>=document.documentMode,Ea={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Ra=null,Oa=null,Da=null,Ga=!1;function ja(t,e){var a=e.window===e?e.document:9===e.nodeType?e:e.ownerDocument;return Ga||null==Ra||Ra!==Ia(a)?null:("selectionStart"in(a=Ra)&&Aa(a)?a={start:a.selectionStart,end:a.selectionEnd}:a={anchorNode:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset},Da&&ta(Da,a)?null:(Da=a,(t=lt.getPooled(Ea.select,Oa,t,e)).type="select",t.target=Ra,U(t),t))}var Ua={eventTypes:Ea,extractEvents:function(t,e,a,n){var r,o=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;if(!(r=!o)){t:{o=Sa(o),r=z.onSelect;for(var c=0;c<r.length;c++){var i=r[c];if(!o.hasOwnProperty(i)||!o[i]){o=!1;break t}}o=!0}r=!o}if(r)return null;switch(o=e?_(e):window,t){case"focus":(Et(o)||"true"===o.contentEditable)&&(Ra=o,Oa=e,Da=null);break;case"blur":Da=Oa=Ra=null;break;case"mousedown":Ga=!0;break;case"contextmenu":case"mouseup":case"dragend":return Ga=!1,ja(a,n);case"selectionchange":if(_a)break;case"keydown":case"keyup":return ja(a,n)}return null}};function Ka(t,e){return t=r({children:void 0},e),(e=function(t){var e="";return n.Children.forEach(t,function(t){null!=t&&(e+=t)}),e}(e.children))&&(t.children=e),t}function Wa(t,e,a,n){if(t=t.options,e){e={};for(var r=0;r<a.length;r++)e["$"+a[r]]=!0;for(a=0;a<t.length;a++)r=e.hasOwnProperty("$"+t[a].value),t[a].selected!==r&&(t[a].selected=r),r&&n&&(t[a].defaultSelected=!0)}else{for(a=""+xe(a),e=null,r=0;r<t.length;r++){if(t[r].value===a)return t[r].selected=!0,void(n&&(t[r].defaultSelected=!0));null!==e||t[r].disabled||(e=t[r])}null!==e&&(e.selected=!0)}}function qa(t,e){return null!=e.dangerouslySetInnerHTML&&c("91"),r({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ya(t,e){var a=e.value;null==a&&(a=e.defaultValue,null!=(e=e.children)&&(null!=a&&c("92"),Array.isArray(e)&&(1>=e.length||c("93"),e=e[0]),a=e),null==a&&(a="")),t._wrapperState={initialValue:xe(a)}}function Qa(t,e){var a=xe(e.value),n=xe(e.defaultValue);null!=a&&((a=""+a)!==t.value&&(t.value=a),null==e.defaultValue&&t.defaultValue!==a&&(t.defaultValue=a)),null!=n&&(t.defaultValue=""+n)}function Xa(t){var e=t.textContent;e===t._wrapperState.initialValue&&(t.value=e)}N.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),y=E,b=A,w=_,N.injectEventPluginsByName({SimpleEventPlugin:Ma,EnterLeaveEventPlugin:Je,ChangeEventPlugin:Re,SelectEventPlugin:Ua,BeforeInputEventPlugin:Ht});var Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function $a(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(t,e){return null==t||"http://www.w3.org/1999/xhtml"===t?$a(e):"http://www.w3.org/2000/svg"===t&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":t}var tn,en=void 0,an=(tn=function(t,e){if(t.namespaceURI!==Ja.svg||"innerHTML"in t)t.innerHTML=e;else{for((en=en||document.createElement("div")).innerHTML="<svg>"+e+"</svg>",e=en.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,e,a,n){MSApp.execUnsafeLocalFunction(function(){return tn(t,e)})}:tn);function nn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&3===a.nodeType)return void(a.nodeValue=e)}t.textContent=e}var rn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},on=["Webkit","ms","Moz","O"];function cn(t,e,a){return null==e||"boolean"==typeof e||""===e?"":a||"number"!=typeof e||0===e||rn.hasOwnProperty(t)&&rn[t]?(""+e).trim():e+"px"}function ln(t,e){for(var a in t=t.style,e)if(e.hasOwnProperty(a)){var n=0===a.indexOf("--"),r=cn(a,e[a],n);"float"===a&&(a="cssFloat"),n?t.setProperty(a,r):t[a]=r}}Object.keys(rn).forEach(function(t){on.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),rn[e]=rn[t]})});var sn=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dn(t,e){e&&(sn[t]&&(null!=e.children||null!=e.dangerouslySetInnerHTML)&&c("137",t,""),null!=e.dangerouslySetInnerHTML&&(null!=e.children&&c("60"),"object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML||c("61")),null!=e.style&&"object"!=typeof e.style&&c("62",""))}function hn(t,e){if(-1===t.indexOf("-"))return"string"==typeof e.is;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function pn(t,e){var a=Sa(t=9===t.nodeType||11===t.nodeType?t:t.ownerDocument);e=z[e];for(var n=0;n<e.length;n++){var r=e[n];if(!a.hasOwnProperty(r)||!a[r]){switch(r){case"scroll":Ha("scroll",t);break;case"focus":case"blur":Ha("focus",t),Ha("blur",t),a.blur=!0,a.focus=!0;break;case"cancel":case"close":Ot(r)&&Ha(r,t);break;case"invalid":case"submit":case"reset":break;default:-1===et.indexOf(r)&&Ca(r,t)}a[r]=!0}}}function un(){}var vn=null,gn=null;function mn(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function fn(t,e){return"textarea"===t||"option"===t||"noscript"===t||"string"==typeof e.children||"number"==typeof e.children||"object"==typeof e.dangerouslySetInnerHTML&&null!==e.dangerouslySetInnerHTML&&null!=e.dangerouslySetInnerHTML.__html}var xn="function"==typeof setTimeout?setTimeout:void 0,Mn="function"==typeof clearTimeout?clearTimeout:void 0;function zn(t){for(t=t.nextSibling;t&&1!==t.nodeType&&3!==t.nodeType;)t=t.nextSibling;return t}function yn(t){for(t=t.firstChild;t&&1!==t.nodeType&&3!==t.nodeType;)t=t.nextSibling;return t}new Set;var bn=[],wn=-1;function Cn(t){0>wn||(t.current=bn[wn],bn[wn]=null,wn--)}function Hn(t,e){bn[++wn]=t.current,t.current=e}var Fn={},Vn={current:Fn},Ln={current:!1},Nn=Fn;function Bn(t,e){var a=t.type.contextTypes;if(!a)return Fn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r,o={};for(r in a)o[r]=e[r];return n&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Sn(t){return null!=(t=t.childContextTypes)}function In(t){Cn(Ln),Cn(Vn)}function kn(t){Cn(Ln),Cn(Vn)}function Pn(t,e,a){Vn.current!==Fn&&c("168"),Hn(Vn,e),Hn(Ln,a)}function Tn(t,e,a){var n=t.stateNode;if(t=e.childContextTypes,"function"!=typeof n.getChildContext)return a;for(var o in n=n.getChildContext())o in t||c("108",ie(e)||"Unknown",o);return r({},a,n)}function An(t){var e=t.stateNode;return e=e&&e.__reactInternalMemoizedMergedChildContext||Fn,Nn=Vn.current,Hn(Vn,e),Hn(Ln,Ln.current),!0}function _n(t,e,a){var n=t.stateNode;n||c("169"),a?(e=Tn(t,e,Nn),n.__reactInternalMemoizedMergedChildContext=e,Cn(Ln),Cn(Vn),Hn(Vn,e)):Cn(Ln),Hn(Ln,a)}var En=null,Rn=null;function On(t){return function(e){try{return t(e)}catch(t){}}}function Dn(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Gn(t,e,a,n){return new Dn(t,e,a,n)}function jn(t){return!(!(t=t.prototype)||!t.isReactComponent)}function Un(t,e){var a=t.alternate;return null===a?((a=Gn(t.tag,e,t.key,t.mode)).elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.effectTag=0,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null),a.childExpirationTime=t.childExpirationTime,a.expirationTime=t.expirationTime,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,a.firstContextDependency=t.firstContextDependency,a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Kn(t,e,a,n,r,o){var i=2;if(n=t,"function"==typeof t)jn(t)&&(i=1);else if("string"==typeof t)i=5;else t:switch(t){case Qt:return Wn(a.children,r,o,e);case te:return qn(a,3|r,o,e);case Xt:return qn(a,2|r,o,e);case Jt:return(t=Gn(12,a,e,4|r)).elementType=Jt,t.type=Jt,t.expirationTime=o,t;case ae:return(t=Gn(13,a,e,r)).elementType=ae,t.type=ae,t.expirationTime=o,t;default:if("object"==typeof t&&null!==t)switch(t.$$typeof){case $t:i=10;break t;case Zt:i=9;break t;case ee:i=11;break t;case ne:i=14;break t;case re:i=16,n=null;break t}c("130",null==t?t:typeof t,"")}return(e=Gn(i,a,e,r)).elementType=t,e.type=n,e.expirationTime=o,e}function Wn(t,e,a,n){return(t=Gn(7,t,n,e)).expirationTime=a,t}function qn(t,e,a,n){return t=Gn(8,t,n,e),e=0==(1&e)?Xt:te,t.elementType=e,t.type=e,t.expirationTime=a,t}function Yn(t,e,a){return(t=Gn(6,t,null,e)).expirationTime=a,t}function Qn(t,e,a){return(e=Gn(4,null!==t.children?t.children:[],t.key,e)).expirationTime=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xn(t,e){t.didError=!1;var a=t.earliestPendingTime;0===a?t.earliestPendingTime=t.latestPendingTime=e:a<e?t.earliestPendingTime=e:t.latestPendingTime>e&&(t.latestPendingTime=e),Zn(e,t)}function Jn(t,e){t.didError=!1;var a=t.latestPingedTime;0!==a&&a>=e&&(t.latestPingedTime=0),a=t.earliestPendingTime;var n=t.latestPendingTime;a===e?t.earliestPendingTime=n===e?t.latestPendingTime=0:n:n===e&&(t.latestPendingTime=a),a=t.earliestSuspendedTime,n=t.latestSuspendedTime,0===a?t.earliestSuspendedTime=t.latestSuspendedTime=e:a<e?t.earliestSuspendedTime=e:n>e&&(t.latestSuspendedTime=e),Zn(e,t)}function $n(t,e){var a=t.earliestPendingTime;return a>e&&(e=a),(t=t.earliestSuspendedTime)>e&&(e=t),e}function Zn(t,e){var a=e.earliestSuspendedTime,n=e.latestSuspendedTime,r=e.earliestPendingTime,o=e.latestPingedTime;0===(r=0!==r?r:o)&&(0===t||n<t)&&(r=n),0!==(t=r)&&a>t&&(t=a),e.nextExpirationTimeToWorkOn=r,e.expirationTime=t}var tr=!1;function er(t){return{baseState:t,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function ar(t){return{baseState:t.baseState,firstUpdate:t.firstUpdate,lastUpdate:t.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nr(t){return{expirationTime:t,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function rr(t,e){null===t.lastUpdate?t.firstUpdate=t.lastUpdate=e:(t.lastUpdate.next=e,t.lastUpdate=e)}function or(t,e){var a=t.alternate;if(null===a){var n=t.updateQueue,r=null;null===n&&(n=t.updateQueue=er(t.memoizedState))}else n=t.updateQueue,r=a.updateQueue,null===n?null===r?(n=t.updateQueue=er(t.memoizedState),r=a.updateQueue=er(a.memoizedState)):n=t.updateQueue=ar(r):null===r&&(r=a.updateQueue=ar(n));null===r||n===r?rr(n,e):null===n.lastUpdate||null===r.lastUpdate?(rr(n,e),rr(r,e)):(rr(n,e),r.lastUpdate=e)}function cr(t,e){var a=t.updateQueue;null===(a=null===a?t.updateQueue=er(t.memoizedState):ir(t,a)).lastCapturedUpdate?a.firstCapturedUpdate=a.lastCapturedUpdate=e:(a.lastCapturedUpdate.next=e,a.lastCapturedUpdate=e)}function ir(t,e){var a=t.alternate;return null!==a&&e===a.updateQueue&&(e=t.updateQueue=ar(e)),e}function lr(t,e,a,n,o,c){switch(a.tag){case 1:return"function"==typeof(t=a.payload)?t.call(c,n,o):t;case 3:t.effectTag=-2049&t.effectTag|64;case 0:if(null==(o="function"==typeof(t=a.payload)?t.call(c,n,o):t))break;return r({},n,o);case 2:tr=!0}return n}function sr(t,e,a,n,r){tr=!1;for(var o=(e=ir(t,e)).baseState,c=null,i=0,l=e.firstUpdate,s=o;null!==l;){var d=l.expirationTime;d<r?(null===c&&(c=l,o=s),i<d&&(i=d)):(s=lr(t,0,l,s,a,n),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastEffect?e.firstEffect=e.lastEffect=l:(e.lastEffect.nextEffect=l,e.lastEffect=l))),l=l.next}for(d=null,l=e.firstCapturedUpdate;null!==l;){var h=l.expirationTime;h<r?(null===d&&(d=l,null===c&&(o=s)),i<h&&(i=h)):(s=lr(t,0,l,s,a,n),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastCapturedEffect?e.firstCapturedEffect=e.lastCapturedEffect=l:(e.lastCapturedEffect.nextEffect=l,e.lastCapturedEffect=l))),l=l.next}null===c&&(e.lastUpdate=null),null===d?e.lastCapturedUpdate=null:t.effectTag|=32,null===c&&null===d&&(o=s),e.baseState=o,e.firstUpdate=c,e.firstCapturedUpdate=d,t.expirationTime=i,t.memoizedState=s}function dr(t,e,a){null!==e.firstCapturedUpdate&&(null!==e.lastUpdate&&(e.lastUpdate.next=e.firstCapturedUpdate,e.lastUpdate=e.lastCapturedUpdate),e.firstCapturedUpdate=e.lastCapturedUpdate=null),hr(e.firstEffect,a),e.firstEffect=e.lastEffect=null,hr(e.firstCapturedEffect,a),e.firstCapturedEffect=e.lastCapturedEffect=null}function hr(t,e){for(;null!==t;){var a=t.callback;if(null!==a){t.callback=null;var n=e;"function"!=typeof a&&c("191",a),a.call(n)}t=t.nextEffect}}function pr(t,e){return{value:t,source:e,stack:le(e)}}var ur={current:null},vr=null,gr=null,mr=null;function fr(t,e){var a=t.type._context;Hn(ur,a._currentValue),a._currentValue=e}function xr(t){var e=ur.current;Cn(ur),t.type._context._currentValue=e}function Mr(t){vr=t,mr=gr=null,t.firstContextDependency=null}function zr(t,e){return mr!==t&&!1!==e&&0!==e&&("number"==typeof e&&1073741823!==e||(mr=t,e=1073741823),e={context:t,observedBits:e,next:null},null===gr?(null===vr&&c("293"),vr.firstContextDependency=gr=e):gr=gr.next=e),t._currentValue}var yr={},br={current:yr},wr={current:yr},Cr={current:yr};function Hr(t){return t===yr&&c("174"),t}function Fr(t,e){Hn(Cr,e),Hn(wr,t),Hn(br,yr);var a=e.nodeType;switch(a){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Za(null,"");break;default:e=Za(e=(a=8===a?e.parentNode:e).namespaceURI||null,a=a.tagName)}Cn(br),Hn(br,e)}function Vr(t){Cn(br),Cn(wr),Cn(Cr)}function Lr(t){Hr(Cr.current);var e=Hr(br.current),a=Za(e,t.type);e!==a&&(Hn(wr,t),Hn(br,a))}function Nr(t){wr.current===t&&(Cn(br),Cn(wr))}function Br(t,e){if(t&&t.defaultProps)for(var a in e=r({},e),t=t.defaultProps)void 0===e[a]&&(e[a]=t[a]);return e}var Sr=Ut.ReactCurrentOwner,Ir=(new n.Component).refs;function kr(t,e,a,n){a=null==(a=a(n,e=t.memoizedState))?e:r({},e,a),t.memoizedState=a,null!==(n=t.updateQueue)&&0===t.expirationTime&&(n.baseState=a)}var Pr={isMounted:function(t){return!!(t=t._reactInternalFiber)&&2===ea(t)},enqueueSetState:function(t,e,a){t=t._reactInternalFiber;var n=Cc(),r=nr(n=Xo(n,t));r.payload=e,null!=a&&(r.callback=a),Ko(),or(t,r),Zo(t,n)},enqueueReplaceState:function(t,e,a){t=t._reactInternalFiber;var n=Cc(),r=nr(n=Xo(n,t));r.tag=1,r.payload=e,null!=a&&(r.callback=a),Ko(),or(t,r),Zo(t,n)},enqueueForceUpdate:function(t,e){t=t._reactInternalFiber;var a=Cc(),n=nr(a=Xo(a,t));n.tag=2,null!=e&&(n.callback=e),Ko(),or(t,n),Zo(t,a)}};function Tr(t,e,a,n,r,o,c){return"function"==typeof(t=t.stateNode).shouldComponentUpdate?t.shouldComponentUpdate(n,o,c):!e.prototype||!e.prototype.isPureReactComponent||(!ta(a,n)||!ta(r,o))}function Ar(t,e,a){var n=!1,r=Fn,o=e.contextType;return"object"==typeof o&&null!==o?o=Sr.currentDispatcher.readContext(o):(r=Sn(e)?Nn:Vn.current,o=(n=null!=(n=e.contextTypes))?Bn(t,r):Fn),e=new e(a,o),t.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,e.updater=Pr,t.stateNode=e,e._reactInternalFiber=t,n&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function _r(t,e,a,n){t=e.state,"function"==typeof e.componentWillReceiveProps&&e.componentWillReceiveProps(a,n),"function"==typeof e.UNSAFE_componentWillReceiveProps&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Pr.enqueueReplaceState(e,e.state,null)}function Er(t,e,a,n){var r=t.stateNode;r.props=a,r.state=t.memoizedState,r.refs=Ir;var o=e.contextType;"object"==typeof o&&null!==o?r.context=Sr.currentDispatcher.readContext(o):(o=Sn(e)?Nn:Vn.current,r.context=Bn(t,o)),null!==(o=t.updateQueue)&&(sr(t,o,a,r,n),r.state=t.memoizedState),"function"==typeof(o=e.getDerivedStateFromProps)&&(kr(t,e,o,a),r.state=t.memoizedState),"function"==typeof e.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(e=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),e!==r.state&&Pr.enqueueReplaceState(r,r.state,null),null!==(o=t.updateQueue)&&(sr(t,o,a,r,n),r.state=t.memoizedState)),"function"==typeof r.componentDidMount&&(t.effectTag|=4)}var Rr=Array.isArray;function Or(t,e,a){if(null!==(t=a.ref)&&"function"!=typeof t&&"object"!=typeof t){if(a._owner){a=a._owner;var n=void 0;a&&(1!==a.tag&&c("289"),n=a.stateNode),n||c("147",t);var r=""+t;return null!==e&&null!==e.ref&&"function"==typeof e.ref&&e.ref._stringRef===r?e.ref:((e=function(t){var e=n.refs;e===Ir&&(e=n.refs={}),null===t?delete e[r]:e[r]=t})._stringRef=r,e)}"string"!=typeof t&&c("284"),a._owner||c("290",t)}return t}function Dr(t,e){"textarea"!==t.type&&c("31","[object Object]"===Object.prototype.toString.call(e)?"object with keys {"+Object.keys(e).join(", ")+"}":e,"")}function Gr(t){function e(e,a){if(t){var n=e.lastEffect;null!==n?(n.nextEffect=a,e.lastEffect=a):e.firstEffect=e.lastEffect=a,a.nextEffect=null,a.effectTag=8}}function a(a,n){if(!t)return null;for(;null!==n;)e(a,n),n=n.sibling;return null}function n(t,e){for(t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function r(t,e,a){return(t=Un(t,e)).index=0,t.sibling=null,t}function o(e,a,n){return e.index=n,t?null!==(n=e.alternate)?(n=n.index)<a?(e.effectTag=2,a):n:(e.effectTag=2,a):a}function i(e){return t&&null===e.alternate&&(e.effectTag=2),e}function l(t,e,a,n){return null===e||6!==e.tag?((e=Yn(a,t.mode,n)).return=t,e):((e=r(e,a)).return=t,e)}function s(t,e,a,n){return null!==e&&e.elementType===a.type?((n=r(e,a.props)).ref=Or(t,e,a),n.return=t,n):((n=Kn(a.type,a.key,a.props,null,t.mode,n)).ref=Or(t,e,a),n.return=t,n)}function d(t,e,a,n){return null===e||4!==e.tag||e.stateNode.containerInfo!==a.containerInfo||e.stateNode.implementation!==a.implementation?((e=Qn(a,t.mode,n)).return=t,e):((e=r(e,a.children||[])).return=t,e)}function h(t,e,a,n,o){return null===e||7!==e.tag?((e=Wn(a,t.mode,n,o)).return=t,e):((e=r(e,a)).return=t,e)}function p(t,e,a){if("string"==typeof e||"number"==typeof e)return(e=Yn(""+e,t.mode,a)).return=t,e;if("object"==typeof e&&null!==e){switch(e.$$typeof){case qt:return(a=Kn(e.type,e.key,e.props,null,t.mode,a)).ref=Or(t,null,e),a.return=t,a;case Yt:return(e=Qn(e,t.mode,a)).return=t,e}if(Rr(e)||ce(e))return(e=Wn(e,t.mode,a,null)).return=t,e;Dr(t,e)}return null}function u(t,e,a,n){var r=null!==e?e.key:null;if("string"==typeof a||"number"==typeof a)return null!==r?null:l(t,e,""+a,n);if("object"==typeof a&&null!==a){switch(a.$$typeof){case qt:return a.key===r?a.type===Qt?h(t,e,a.props.children,n,r):s(t,e,a,n):null;case Yt:return a.key===r?d(t,e,a,n):null}if(Rr(a)||ce(a))return null!==r?null:h(t,e,a,n,null);Dr(t,a)}return null}function v(t,e,a,n,r){if("string"==typeof n||"number"==typeof n)return l(e,t=t.get(a)||null,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case qt:return t=t.get(null===n.key?a:n.key)||null,n.type===Qt?h(e,t,n.props.children,r,n.key):s(e,t,n,r);case Yt:return d(e,t=t.get(null===n.key?a:n.key)||null,n,r)}if(Rr(n)||ce(n))return h(e,t=t.get(a)||null,n,r,null);Dr(e,n)}return null}function g(r,c,i,l){for(var s=null,d=null,h=c,g=c=0,m=null;null!==h&&g<i.length;g++){h.index>g?(m=h,h=null):m=h.sibling;var f=u(r,h,i[g],l);if(null===f){null===h&&(h=m);break}t&&h&&null===f.alternate&&e(r,h),c=o(f,c,g),null===d?s=f:d.sibling=f,d=f,h=m}if(g===i.length)return a(r,h),s;if(null===h){for(;g<i.length;g++)(h=p(r,i[g],l))&&(c=o(h,c,g),null===d?s=h:d.sibling=h,d=h);return s}for(h=n(r,h);g<i.length;g++)(m=v(h,r,g,i[g],l))&&(t&&null!==m.alternate&&h.delete(null===m.key?g:m.key),c=o(m,c,g),null===d?s=m:d.sibling=m,d=m);return t&&h.forEach(function(t){return e(r,t)}),s}function m(r,i,l,s){var d=ce(l);"function"!=typeof d&&c("150"),null==(l=d.call(l))&&c("151");for(var h=d=null,g=i,m=i=0,f=null,x=l.next();null!==g&&!x.done;m++,x=l.next()){g.index>m?(f=g,g=null):f=g.sibling;var M=u(r,g,x.value,s);if(null===M){g||(g=f);break}t&&g&&null===M.alternate&&e(r,g),i=o(M,i,m),null===h?d=M:h.sibling=M,h=M,g=f}if(x.done)return a(r,g),d;if(null===g){for(;!x.done;m++,x=l.next())null!==(x=p(r,x.value,s))&&(i=o(x,i,m),null===h?d=x:h.sibling=x,h=x);return d}for(g=n(r,g);!x.done;m++,x=l.next())null!==(x=v(g,r,m,x.value,s))&&(t&&null!==x.alternate&&g.delete(null===x.key?m:x.key),i=o(x,i,m),null===h?d=x:h.sibling=x,h=x);return t&&g.forEach(function(t){return e(r,t)}),d}return function(t,n,o,l){var s="object"==typeof o&&null!==o&&o.type===Qt&&null===o.key;s&&(o=o.props.children);var d="object"==typeof o&&null!==o;if(d)switch(o.$$typeof){case qt:t:{for(d=o.key,s=n;null!==s;){if(s.key===d){if(7===s.tag?o.type===Qt:s.elementType===o.type){a(t,s.sibling),(n=r(s,o.type===Qt?o.props.children:o.props)).ref=Or(t,s,o),n.return=t,t=n;break t}a(t,s);break}e(t,s),s=s.sibling}o.type===Qt?((n=Wn(o.props.children,t.mode,l,o.key)).return=t,t=n):((l=Kn(o.type,o.key,o.props,null,t.mode,l)).ref=Or(t,n,o),l.return=t,t=l)}return i(t);case Yt:t:{for(s=o.key;null!==n;){if(n.key===s){if(4===n.tag&&n.stateNode.containerInfo===o.containerInfo&&n.stateNode.implementation===o.implementation){a(t,n.sibling),(n=r(n,o.children||[])).return=t,t=n;break t}a(t,n);break}e(t,n),n=n.sibling}(n=Qn(o,t.mode,l)).return=t,t=n}return i(t)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==n&&6===n.tag?(a(t,n.sibling),(n=r(n,o)).return=t,t=n):(a(t,n),(n=Yn(o,t.mode,l)).return=t,t=n),i(t);if(Rr(o))return g(t,n,o,l);if(ce(o))return m(t,n,o,l);if(d&&Dr(t,o),void 0===o&&!s)switch(t.tag){case 1:case 0:c("152",(l=t.type).displayName||l.name||"Component")}return a(t,n)}}var jr=Gr(!0),Ur=Gr(!1),Kr=null,Wr=null,qr=!1;function Yr(t,e){var a=Gn(5,null,null,0);a.elementType="DELETED",a.type="DELETED",a.stateNode=e,a.return=t,a.effectTag=8,null!==t.lastEffect?(t.lastEffect.nextEffect=a,t.lastEffect=a):t.firstEffect=t.lastEffect=a}function Qr(t,e){switch(t.tag){case 5:var a=t.type;return null!==(e=1!==e.nodeType||a.toLowerCase()!==e.nodeName.toLowerCase()?null:e)&&(t.stateNode=e,!0);case 6:return null!==(e=""===t.pendingProps||3!==e.nodeType?null:e)&&(t.stateNode=e,!0);default:return!1}}function Xr(t){if(qr){var e=Wr;if(e){var a=e;if(!Qr(t,e)){if(!(e=zn(a))||!Qr(t,e))return t.effectTag|=2,qr=!1,void(Kr=t);Yr(Kr,a)}Kr=t,Wr=yn(e)}else t.effectTag|=2,qr=!1,Kr=t}}function Jr(t){for(t=t.return;null!==t&&5!==t.tag&&3!==t.tag;)t=t.return;Kr=t}function $r(t){if(t!==Kr)return!1;if(!qr)return Jr(t),qr=!0,!1;var e=t.type;if(5!==t.tag||"head"!==e&&"body"!==e&&!fn(e,t.memoizedProps))for(e=Wr;e;)Yr(t,e),e=zn(e);return Jr(t),Wr=Kr?zn(t.stateNode):null,!0}function Zr(){Wr=Kr=null,qr=!1}var to=Ut.ReactCurrentOwner;function eo(t,e,a,n){e.child=null===t?Ur(e,null,a,n):jr(e,t.child,a,n)}function ao(t,e,a,n,r){a=a.render;var o=e.ref;return Mr(e),n=a(n,o),e.effectTag|=1,eo(t,e,n,r),e.child}function no(t,e,a,n,r,o){if(null===t){var c=a.type;return"function"!=typeof c||jn(c)||void 0!==c.defaultProps||null!==a.compare?((t=Kn(a.type,null,n,null,e.mode,o)).ref=e.ref,t.return=e,e.child=t):(e.tag=15,e.type=c,ro(t,e,c,n,r,o))}return c=t.child,r<o&&(r=c.memoizedProps,(a=null!==(a=a.compare)?a:ta)(r,n)&&t.ref===e.ref)?po(t,e,o):(e.effectTag|=1,(t=Un(c,n)).ref=e.ref,t.return=e,e.child=t)}function ro(t,e,a,n,r,o){return null!==t&&r<o&&ta(t.memoizedProps,n)&&t.ref===e.ref?po(t,e,o):co(t,e,a,n,o)}function oo(t,e){var a=e.ref;(null===t&&null!==a||null!==t&&t.ref!==a)&&(e.effectTag|=128)}function co(t,e,a,n,r){var o=Sn(a)?Nn:Vn.current;return o=Bn(e,o),Mr(e),a=a(n,o),e.effectTag|=1,eo(t,e,a,r),e.child}function io(t,e,a,n,r){if(Sn(a)){var o=!0;An(e)}else o=!1;if(Mr(e),null===e.stateNode)null!==t&&(t.alternate=null,e.alternate=null,e.effectTag|=2),Ar(e,a,n),Er(e,a,n,r),n=!0;else if(null===t){var c=e.stateNode,i=e.memoizedProps;c.props=i;var l=c.context,s=a.contextType;"object"==typeof s&&null!==s?s=Sr.currentDispatcher.readContext(s):s=Bn(e,s=Sn(a)?Nn:Vn.current);var d=a.getDerivedStateFromProps,h="function"==typeof d||"function"==typeof c.getSnapshotBeforeUpdate;h||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==n||l!==s)&&_r(e,c,n,s),tr=!1;var p=e.memoizedState;l=c.state=p;var u=e.updateQueue;null!==u&&(sr(e,u,n,c,r),l=e.memoizedState),i!==n||p!==l||Ln.current||tr?("function"==typeof d&&(kr(e,a,d,n),l=e.memoizedState),(i=tr||Tr(e,a,i,n,p,l,s))?(h||"function"!=typeof c.UNSAFE_componentWillMount&&"function"!=typeof c.componentWillMount||("function"==typeof c.componentWillMount&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&c.UNSAFE_componentWillMount()),"function"==typeof c.componentDidMount&&(e.effectTag|=4)):("function"==typeof c.componentDidMount&&(e.effectTag|=4),e.memoizedProps=n,e.memoizedState=l),c.props=n,c.state=l,c.context=s,n=i):("function"==typeof c.componentDidMount&&(e.effectTag|=4),n=!1)}else c=e.stateNode,i=e.memoizedProps,c.props=e.type===e.elementType?i:Br(e.type,i),l=c.context,"object"==typeof(s=a.contextType)&&null!==s?s=Sr.currentDispatcher.readContext(s):s=Bn(e,s=Sn(a)?Nn:Vn.current),(h="function"==typeof(d=a.getDerivedStateFromProps)||"function"==typeof c.getSnapshotBeforeUpdate)||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==n||l!==s)&&_r(e,c,n,s),tr=!1,l=e.memoizedState,p=c.state=l,null!==(u=e.updateQueue)&&(sr(e,u,n,c,r),p=e.memoizedState),i!==n||l!==p||Ln.current||tr?("function"==typeof d&&(kr(e,a,d,n),p=e.memoizedState),(d=tr||Tr(e,a,i,n,l,p,s))?(h||"function"!=typeof c.UNSAFE_componentWillUpdate&&"function"!=typeof c.componentWillUpdate||("function"==typeof c.componentWillUpdate&&c.componentWillUpdate(n,p,s),"function"==typeof c.UNSAFE_componentWillUpdate&&c.UNSAFE_componentWillUpdate(n,p,s)),"function"==typeof c.componentDidUpdate&&(e.effectTag|=4),"function"==typeof c.getSnapshotBeforeUpdate&&(e.effectTag|=256)):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=256),e.memoizedProps=n,e.memoizedState=p),c.props=n,c.state=p,c.context=s,n=d):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=256),n=!1);return lo(t,e,a,n,o,r)}function lo(t,e,a,n,r,o){oo(t,e);var c=0!=(64&e.effectTag);if(!n&&!c)return r&&_n(e,a,!1),po(t,e,o);n=e.stateNode,to.current=e;var i=c&&"function"!=typeof a.getDerivedStateFromError?null:n.render();return e.effectTag|=1,null!==t&&c?(e.child=jr(e,t.child,null,o),e.child=jr(e,null,i,o)):eo(t,e,i,o),e.memoizedState=n.state,r&&_n(e,a,!0),e.child}function so(t){var e=t.stateNode;e.pendingContext?Pn(0,e.pendingContext,e.pendingContext!==e.context):e.context&&Pn(0,e.context,!1),Fr(t,e.containerInfo)}function ho(t,e,a){var n=e.mode,r=e.pendingProps,o=e.memoizedState;if(0==(64&e.effectTag)){o=null;var c=!1}else o={timedOutAt:null!==o?o.timedOutAt:0},c=!0,e.effectTag&=-65;return null===t?c?(c=r.fallback,r=Wn(null,n,0,null),0==(1&e.mode)&&(r.child=null!==e.memoizedState?e.child.child:e.child),n=Wn(c,n,a,null),r.sibling=n,(a=r).return=n.return=e):a=n=Ur(e,null,r.children,a):null!==t.memoizedState?(t=(n=t.child).sibling,c?(a=r.fallback,r=Un(n,n.pendingProps),0==(1&e.mode)&&((c=null!==e.memoizedState?e.child.child:e.child)!==n.child&&(r.child=c)),n=r.sibling=Un(t,a,t.expirationTime),a=r,r.childExpirationTime=0,a.return=n.return=e):a=n=jr(e,n.child,r.children,a)):(t=t.child,c?(c=r.fallback,(r=Wn(null,n,0,null)).child=t,0==(1&e.mode)&&(r.child=null!==e.memoizedState?e.child.child:e.child),(n=r.sibling=Wn(c,n,a,null)).effectTag|=2,a=r,r.childExpirationTime=0,a.return=n.return=e):n=a=jr(e,t,r.children,a)),e.memoizedState=o,e.child=a,n}function po(t,e,a){if(null!==t&&(e.firstContextDependency=t.firstContextDependency),e.childExpirationTime<a)return null;if(null!==t&&e.child!==t.child&&c("153"),null!==e.child){for(a=Un(t=e.child,t.pendingProps,t.expirationTime),e.child=a,a.return=e;null!==t.sibling;)t=t.sibling,(a=a.sibling=Un(t,t.pendingProps,t.expirationTime)).return=e;a.sibling=null}return e.child}function uo(t,e,a){var n=e.expirationTime;if(null!==t&&t.memoizedProps===e.pendingProps&&!Ln.current&&n<a){switch(e.tag){case 3:so(e),Zr();break;case 5:Lr(e);break;case 1:Sn(e.type)&&An(e);break;case 4:Fr(e,e.stateNode.containerInfo);break;case 10:fr(e,e.memoizedProps.value);break;case 13:if(null!==e.memoizedState)return 0!==(n=e.child.childExpirationTime)&&n>=a?ho(t,e,a):null!==(e=po(t,e,a))?e.sibling:null}return po(t,e,a)}switch(e.expirationTime=0,e.tag){case 2:n=e.elementType,null!==t&&(t.alternate=null,e.alternate=null,e.effectTag|=2),t=e.pendingProps;var r=Bn(e,Vn.current);if(Mr(e),r=n(t,r),e.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(e.tag=1,Sn(n)){var o=!0;An(e)}else o=!1;e.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var i=n.getDerivedStateFromProps;"function"==typeof i&&kr(e,n,i,t),r.updater=Pr,e.stateNode=r,r._reactInternalFiber=e,Er(e,n,t,a),e=lo(null,e,n,!0,o,a)}else e.tag=0,eo(null,e,r,a),e=e.child;return e;case 16:switch(r=e.elementType,null!==t&&(t.alternate=null,e.alternate=null,e.effectTag|=2),o=e.pendingProps,t=function(t){var e=t._result;switch(t._status){case 1:return e;case 2:case 0:throw e;default:throw t._status=0,(e=(e=t._ctor)()).then(function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)},function(e){0===t._status&&(t._status=2,t._result=e)}),t._result=e,e}}(r),e.type=t,r=e.tag=function(t){if("function"==typeof t)return jn(t)?1:0;if(null!=t){if((t=t.$$typeof)===ee)return 11;if(t===ne)return 14}return 2}(t),o=Br(t,o),i=void 0,r){case 0:i=co(null,e,t,o,a);break;case 1:i=io(null,e,t,o,a);break;case 11:i=ao(null,e,t,o,a);break;case 14:i=no(null,e,t,Br(t.type,o),n,a);break;default:c("283",t)}return i;case 0:return n=e.type,r=e.pendingProps,co(t,e,n,r=e.elementType===n?r:Br(n,r),a);case 1:return n=e.type,r=e.pendingProps,io(t,e,n,r=e.elementType===n?r:Br(n,r),a);case 3:return so(e),null===(n=e.updateQueue)&&c("282"),r=null!==(r=e.memoizedState)?r.element:null,sr(e,n,e.pendingProps,null,a),(n=e.memoizedState.element)===r?(Zr(),e=po(t,e,a)):(r=e.stateNode,(r=(null===t||null===t.child)&&r.hydrate)&&(Wr=yn(e.stateNode.containerInfo),Kr=e,r=qr=!0),r?(e.effectTag|=2,e.child=Ur(e,null,n,a)):(eo(t,e,n,a),Zr()),e=e.child),e;case 5:return Lr(e),null===t&&Xr(e),n=e.type,r=e.pendingProps,o=null!==t?t.memoizedProps:null,i=r.children,fn(n,r)?i=null:null!==o&&fn(n,o)&&(e.effectTag|=16),oo(t,e),1!==a&&1&e.mode&&r.hidden?(e.expirationTime=1,e=null):(eo(t,e,i,a),e=e.child),e;case 6:return null===t&&Xr(e),null;case 13:return ho(t,e,a);case 4:return Fr(e,e.stateNode.containerInfo),n=e.pendingProps,null===t?e.child=jr(e,null,n,a):eo(t,e,n,a),e.child;case 11:return n=e.type,r=e.pendingProps,ao(t,e,n,r=e.elementType===n?r:Br(n,r),a);case 7:return eo(t,e,e.pendingProps,a),e.child;case 8:case 12:return eo(t,e,e.pendingProps.children,a),e.child;case 10:t:{if(n=e.type._context,r=e.pendingProps,i=e.memoizedProps,fr(e,o=r.value),null!==i){var l=i.value;if(0===(o=l===o&&(0!==l||1/l==1/o)||l!=l&&o!=o?0:0|("function"==typeof n._calculateChangedBits?n._calculateChangedBits(l,o):1073741823))){if(i.children===r.children&&!Ln.current){e=po(t,e,a);break t}}else for(null!==(i=e.child)&&(i.return=e);null!==i;){if(null!==(l=i.firstContextDependency))do{if(l.context===n&&0!=(l.observedBits&o)){if(1===i.tag){var s=nr(a);s.tag=2,or(i,s)}i.expirationTime<a&&(i.expirationTime=a),null!==(s=i.alternate)&&s.expirationTime<a&&(s.expirationTime=a);for(var d=i.return;null!==d;){if(s=d.alternate,d.childExpirationTime<a)d.childExpirationTime=a,null!==s&&s.childExpirationTime<a&&(s.childExpirationTime=a);else{if(!(null!==s&&s.childExpirationTime<a))break;s.childExpirationTime=a}d=d.return}}s=i.child,l=l.next}while(null!==l);else s=10===i.tag&&i.type===e.type?null:i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}eo(t,e,r.children,a),e=e.child}return e;case 9:return r=e.type,n=(o=e.pendingProps).children,Mr(e),n=n(r=zr(r,o.unstable_observedBits)),e.effectTag|=1,eo(t,e,n,a),e.child;case 14:return no(t,e,r=e.type,o=Br(r.type,e.pendingProps),n,a);case 15:return ro(t,e,e.type,e.pendingProps,n,a);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:Br(n,r),null!==t&&(t.alternate=null,e.alternate=null,e.effectTag|=2),e.tag=1,Sn(n)?(t=!0,An(e)):t=!1,Mr(e),Ar(e,n,r),Er(e,n,r,a),lo(null,e,n,!0,t,a);default:c("156")}}function vo(t){t.effectTag|=4}var go=void 0,mo=void 0,fo=void 0,xo=void 0;function Mo(t,e){var a=e.source,n=e.stack;null===n&&null!==a&&(n=le(a)),null!==a&&ie(a.type),e=e.value,null!==t&&1===t.tag&&ie(t.type);try{console.error(e)}catch(t){setTimeout(function(){throw t})}}function zo(t){var e=t.ref;if(null!==e)if("function"==typeof e)try{e(null)}catch(e){Qo(t,e)}else e.current=null}function yo(t){switch("function"==typeof Rn&&Rn(t),t.tag){case 0:case 11:case 14:case 15:var e=t.updateQueue;if(null!==e&&null!==(e=e.lastEffect)){var a=e=e.next;do{var n=a.destroy;if(null!==n){var r=t;try{n()}catch(t){Qo(r,t)}}a=a.next}while(a!==e)}break;case 1:if(zo(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Qo(t,e)}break;case 5:zo(t);break;case 4:Co(t)}}function bo(t){return 5===t.tag||3===t.tag||4===t.tag}function wo(t){t:{for(var e=t.return;null!==e;){if(bo(e)){var a=e;break t}e=e.return}c("160"),a=void 0}var n=e=void 0;switch(a.tag){case 5:e=a.stateNode,n=!1;break;case 3:case 4:e=a.stateNode.containerInfo,n=!0;break;default:c("161")}16&a.effectTag&&(nn(e,""),a.effectTag&=-17);t:e:for(a=t;;){for(;null===a.sibling;){if(null===a.return||bo(a.return)){a=null;break t}a=a.return}for(a.sibling.return=a.return,a=a.sibling;5!==a.tag&&6!==a.tag;){if(2&a.effectTag)continue e;if(null===a.child||4===a.tag)continue e;a.child.return=a,a=a.child}if(!(2&a.effectTag)){a=a.stateNode;break t}}for(var r=t;;){if(5===r.tag||6===r.tag)if(a)if(n){var o=e,i=r.stateNode,l=a;8===o.nodeType?o.parentNode.insertBefore(i,l):o.insertBefore(i,l)}else e.insertBefore(r.stateNode,a);else n?(i=e,l=r.stateNode,8===i.nodeType?(o=i.parentNode).insertBefore(l,i):(o=i).appendChild(l),null!=(i=i._reactRootContainer)||null!==o.onclick||(o.onclick=un)):e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function Co(t){for(var e=t,a=!1,n=void 0,r=void 0;;){if(!a){a=e.return;t:for(;;){switch(null===a&&c("160"),a.tag){case 5:n=a.stateNode,r=!1;break t;case 3:case 4:n=a.stateNode.containerInfo,r=!0;break t}a=a.return}a=!0}if(5===e.tag||6===e.tag){t:for(var o=e,i=o;;)if(yo(i),null!==i.child&&4!==i.tag)i.child.return=i,i=i.child;else{if(i===o)break;for(;null===i.sibling;){if(null===i.return||i.return===o)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}r?(o=n,i=e.stateNode,8===o.nodeType?o.parentNode.removeChild(i):o.removeChild(i)):n.removeChild(e.stateNode)}else if(4===e.tag?(n=e.stateNode.containerInfo,r=!0):yo(e),null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return;4===(e=e.return).tag&&(a=!1)}e.sibling.return=e.return,e=e.sibling}}function Ho(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 1:break;case 5:var a=e.stateNode;if(null!=a){var n=e.memoizedProps,r=null!==t?t.memoizedProps:n;t=e.type;var o=e.updateQueue;if(e.updateQueue=null,null!==o){for(a[P]=n,"input"===t&&"radio"===n.type&&null!=n.name&&ye(a,n),hn(t,r),e=hn(t,n),r=0;r<o.length;r+=2){var i=o[r],l=o[r+1];"style"===i?ln(a,l):"dangerouslySetInnerHTML"===i?an(a,l):"children"===i?nn(a,l):fe(a,i,l,e)}switch(t){case"input":be(a,n);break;case"textarea":Qa(a,n);break;case"select":e=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!n.multiple,null!=(t=n.value)?Wa(a,!!n.multiple,t,!1):e!==!!n.multiple&&(null!=n.defaultValue?Wa(a,!!n.multiple,n.defaultValue,!0):Wa(a,!!n.multiple,n.multiple?[]:"",!1))}}}break;case 6:null===e.stateNode&&c("162"),e.stateNode.nodeValue=e.memoizedProps;break;case 3:case 12:break;case 13:if(t=e,null===(a=e.memoizedState)?n=!1:(n=!0,t=e.child,0===a.timedOutAt&&(a.timedOutAt=Cc())),null!==t)t:for(e=a=t;;){if(5===e.tag)t=e.stateNode,n?t.style.display="none":(t=e.stateNode,o=null!=(o=e.memoizedProps.style)&&o.hasOwnProperty("display")?o.display:null,t.style.display=cn("display",o));else if(6===e.tag)e.stateNode.nodeValue=n?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState){(t=e.child.sibling).return=e,e=t;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===a)break t;for(;null===e.sibling;){if(null===e.return||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}break;case 17:break;default:c("163")}}function Fo(t,e,a){(a=nr(a)).tag=3,a.payload={element:null};var n=e.value;return a.callback=function(){Pc(n),Mo(t,e)},a}function Vo(t,e,a){(a=nr(a)).tag=3;var n=t.type.getDerivedStateFromError;if("function"==typeof n){var r=e.value;a.payload=function(){return n(r)}}var o=t.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(a.callback=function(){"function"!=typeof n&&(null===jo?jo=new Set([this]):jo.add(this));var a=e.value,r=e.stack;Mo(t,e),this.componentDidCatch(a,{componentStack:null!==r?r:""})}),a}function Lo(t){switch(t.tag){case 1:Sn(t.type)&&In();var e=t.effectTag;return 2048&e?(t.effectTag=-2049&e|64,t):null;case 3:return Vr(),kn(),0!=(64&(e=t.effectTag))&&c("285"),t.effectTag=-2049&e|64,t;case 5:return Nr(t),null;case 13:return 2048&(e=t.effectTag)?(t.effectTag=-2049&e|64,t):null;case 4:return Vr(),null;case 10:return xr(t),null;default:return null}}go=function(t,e){for(var a=e.child;null!==a;){if(5===a.tag||6===a.tag)t.appendChild(a.stateNode);else if(4!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mo=function(){},fo=function(t,e,a,n,o){var c=t.memoizedProps;if(c!==n){var i=e.stateNode;switch(Hr(br.current),t=null,a){case"input":c=Me(i,c),n=Me(i,n),t=[];break;case"option":c=Ka(i,c),n=Ka(i,n),t=[];break;case"select":c=r({},c,{value:void 0}),n=r({},n,{value:void 0}),t=[];break;case"textarea":c=qa(i,c),n=qa(i,n),t=[];break;default:"function"!=typeof c.onClick&&"function"==typeof n.onClick&&(i.onclick=un)}dn(a,n),i=a=void 0;var l=null;for(a in c)if(!n.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var s=c[a];for(i in s)s.hasOwnProperty(i)&&(l||(l={}),l[i]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(M.hasOwnProperty(a)?t||(t=[]):(t=t||[]).push(a,null));for(a in n){var d=n[a];if(s=null!=c?c[a]:void 0,n.hasOwnProperty(a)&&d!==s&&(null!=d||null!=s))if("style"===a)if(s){for(i in s)!s.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(l||(l={}),l[i]="");for(i in d)d.hasOwnProperty(i)&&s[i]!==d[i]&&(l||(l={}),l[i]=d[i])}else l||(t||(t=[]),t.push(a,l)),l=d;else"dangerouslySetInnerHTML"===a?(d=d?d.__html:void 0,s=s?s.__html:void 0,null!=d&&s!==d&&(t=t||[]).push(a,""+d)):"children"===a?s===d||"string"!=typeof d&&"number"!=typeof d||(t=t||[]).push(a,""+d):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(M.hasOwnProperty(a)?(null!=d&&pn(o,a),t||s===d||(t=[])):(t=t||[]).push(a,d))}l&&(t=t||[]).push("style",l),o=t,(e.updateQueue=o)&&vo(e)}},xo=function(t,e,a,n){a!==n&&vo(e)};var No={readContext:zr},Bo=Ut.ReactCurrentOwner,So=1073741822,Io=0,ko=!1,Po=null,To=null,Ao=0,_o=-1,Eo=!1,Ro=null,Oo=!1,Do=null,Go=null,jo=null;function Uo(){if(null!==Po)for(var t=Po.return;null!==t;){var e=t;switch(e.tag){case 1:var a=e.type.childContextTypes;null!=a&&In();break;case 3:Vr(),kn();break;case 5:Nr(e);break;case 4:Vr();break;case 10:xr(e)}t=t.return}To=null,Ao=0,_o=-1,Eo=!1,Po=null}function Ko(){null!==Go&&(o.unstable_cancelCallback(Do),Go())}function Wo(t){for(;;){var e=t.alternate,a=t.return,n=t.sibling;if(0==(1024&t.effectTag)){Po=t;t:{var o=e,i=Ao,l=(e=t).pendingProps;switch(e.tag){case 2:case 16:break;case 15:case 0:break;case 1:Sn(e.type)&&In();break;case 3:Vr(),kn(),(l=e.stateNode).pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==o&&null!==o.child||($r(e),e.effectTag&=-3),mo(e);break;case 5:Nr(e);var s=Hr(Cr.current);if(i=e.type,null!==o&&null!=e.stateNode)fo(o,e,i,l,s),o.ref!==e.ref&&(e.effectTag|=128);else if(l){var d=Hr(br.current);if($r(e)){o=(l=e).stateNode;var h=l.type,p=l.memoizedProps,u=s;switch(o[k]=l,o[P]=p,i=void 0,s=h){case"iframe":case"object":Ca("load",o);break;case"video":case"audio":for(h=0;h<et.length;h++)Ca(et[h],o);break;case"source":Ca("error",o);break;case"img":case"image":case"link":Ca("error",o),Ca("load",o);break;case"form":Ca("reset",o),Ca("submit",o);break;case"details":Ca("toggle",o);break;case"input":ze(o,p),Ca("invalid",o),pn(u,"onChange");break;case"select":o._wrapperState={wasMultiple:!!p.multiple},Ca("invalid",o),pn(u,"onChange");break;case"textarea":Ya(o,p),Ca("invalid",o),pn(u,"onChange")}for(i in dn(s,p),h=null,p)p.hasOwnProperty(i)&&(d=p[i],"children"===i?"string"==typeof d?o.textContent!==d&&(h=["children",d]):"number"==typeof d&&o.textContent!==""+d&&(h=["children",""+d]):M.hasOwnProperty(i)&&null!=d&&pn(u,i));switch(s){case"input":Gt(o),we(o,p,!0);break;case"textarea":Gt(o),Xa(o);break;case"select":case"option":break;default:"function"==typeof p.onClick&&(o.onclick=un)}i=h,l.updateQueue=i,(l=null!==i)&&vo(e)}else{p=e,o=i,u=l,h=9===s.nodeType?s:s.ownerDocument,d===Ja.html&&(d=$a(o)),d===Ja.html?"script"===o?((o=h.createElement("div")).innerHTML="<script><\/script>",h=o.removeChild(o.firstChild)):"string"==typeof u.is?h=h.createElement(o,{is:u.is}):(h=h.createElement(o),"select"===o&&u.multiple&&(h.multiple=!0)):h=h.createElementNS(d,o),(o=h)[k]=p,o[P]=l,go(o,e,!1,!1),u=o;var v=s,g=hn(h=i,p=l);switch(h){case"iframe":case"object":Ca("load",u),s=p;break;case"video":case"audio":for(s=0;s<et.length;s++)Ca(et[s],u);s=p;break;case"source":Ca("error",u),s=p;break;case"img":case"image":case"link":Ca("error",u),Ca("load",u),s=p;break;case"form":Ca("reset",u),Ca("submit",u),s=p;break;case"details":Ca("toggle",u),s=p;break;case"input":ze(u,p),s=Me(u,p),Ca("invalid",u),pn(v,"onChange");break;case"option":s=Ka(u,p);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},s=r({},p,{value:void 0}),Ca("invalid",u),pn(v,"onChange");break;case"textarea":Ya(u,p),s=qa(u,p),Ca("invalid",u),pn(v,"onChange");break;default:s=p}dn(h,s),d=void 0;var m=h,f=u,x=s;for(d in x)if(x.hasOwnProperty(d)){var z=x[d];"style"===d?ln(f,z):"dangerouslySetInnerHTML"===d?null!=(z=z?z.__html:void 0)&&an(f,z):"children"===d?"string"==typeof z?("textarea"!==m||""!==z)&&nn(f,z):"number"==typeof z&&nn(f,""+z):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(M.hasOwnProperty(d)?null!=z&&pn(v,d):null!=z&&fe(f,d,z,g))}switch(h){case"input":Gt(u),we(u,p,!1);break;case"textarea":Gt(u),Xa(u);break;case"option":null!=p.value&&u.setAttribute("value",""+xe(p.value));break;case"select":(s=u).multiple=!!p.multiple,null!=(u=p.value)?Wa(s,!!p.multiple,u,!1):null!=p.defaultValue&&Wa(s,!!p.multiple,p.defaultValue,!0);break;default:"function"==typeof s.onClick&&(u.onclick=un)}(l=mn(i,l))&&vo(e),e.stateNode=o}null!==e.ref&&(e.effectTag|=128)}else null===e.stateNode&&c("166");break;case 6:o&&null!=e.stateNode?xo(o,e,o.memoizedProps,l):("string"!=typeof l&&(null===e.stateNode&&c("166")),o=Hr(Cr.current),Hr(br.current),$r(e)?(i=(l=e).stateNode,o=l.memoizedProps,i[k]=l,(l=i.nodeValue!==o)&&vo(e)):(i=e,(l=(9===o.nodeType?o:o.ownerDocument).createTextNode(l))[k]=e,i.stateNode=l));break;case 11:break;case 13:if(l=e.memoizedState,0!=(64&e.effectTag)){e.expirationTime=i,Po=e;break t}l=null!==l,i=null!==o&&null!==o.memoizedState,null!==o&&!l&&i&&(null!==(o=o.child.sibling)&&(null!==(s=e.firstEffect)?(e.firstEffect=o,o.nextEffect=s):(e.firstEffect=e.lastEffect=o,o.nextEffect=null),o.effectTag=8)),(l!==i||0==(1&e.effectTag)&&l)&&(e.effectTag|=4);break;case 7:case 8:case 12:break;case 4:Vr(),mo(e);break;case 10:xr(e);break;case 9:case 14:break;case 17:Sn(e.type)&&In();break;default:c("156")}Po=null}if(e=t,1===Ao||1!==e.childExpirationTime){for(l=0,i=e.child;null!==i;)(o=i.expirationTime)>l&&(l=o),(s=i.childExpirationTime)>l&&(l=s),i=i.sibling;e.childExpirationTime=l}if(null!==Po)return Po;null!==a&&0==(1024&a.effectTag)&&(null===a.firstEffect&&(a.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=t.firstEffect),a.lastEffect=t.lastEffect),1<t.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=t:a.firstEffect=t,a.lastEffect=t))}else{if(null!==(t=Lo(t)))return t.effectTag&=1023,t;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}if(null!==n)return n;if(null===a)break;t=a}return null}function qo(t){var e=uo(t.alternate,t,Ao);return t.memoizedProps=t.pendingProps,null===e&&(e=Wo(t)),Bo.current=null,e}function Yo(t,e){ko&&c("243"),Ko(),ko=!0,Bo.currentDispatcher=No;var a=t.nextExpirationTimeToWorkOn;a===Ao&&t===To&&null!==Po||(Uo(),Ao=a,Po=Un((To=t).current,null),t.pendingCommitExpirationTime=0);for(var n=!1;;){try{if(e)for(;null!==Po&&!Lc();)Po=qo(Po);else for(;null!==Po;)Po=qo(Po)}catch(e){if(mr=gr=vr=null,null===Po)n=!0,Pc(e);else{null===Po&&c("271");var r=Po,o=r.return;if(null!==o){t:{var i=t,l=o,s=r,d=e;if(o=Ao,s.effectTag|=1024,s.firstEffect=s.lastEffect=null,null!==d&&"object"==typeof d&&"function"==typeof d.then){var h=d;d=l;var p=-1,u=-1;do{if(13===d.tag){var v=d.alternate;if(null!==v&&null!==(v=v.memoizedState)){u=10*(1073741822-v.timedOutAt);break}"number"==typeof(v=d.pendingProps.maxDuration)&&(0>=v?p=0:(-1===p||v<p)&&(p=v))}d=d.return}while(null!==d);d=l;do{if((v=13===d.tag)&&(v=void 0!==d.memoizedProps.fallback&&null===d.memoizedState),v){if(l=Jo.bind(null,i,d,s,0==(1&d.mode)?1073741823:o),h.then(l,l),0==(1&d.mode)){d.effectTag|=64,s.effectTag&=-1957,1===s.tag&&null===s.alternate&&(s.tag=17),s.expirationTime=o;break t}-1===p?i=1073741823:(-1===u&&(u=10*(1073741822-$n(i,o))-5e3),i=u+p),0<=i&&_o<i&&(_o=i),d.effectTag|=2048,d.expirationTime=o;break t}d=d.return}while(null!==d);d=Error((ie(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+le(s))}Eo=!0,d=pr(d,s),i=l;do{switch(i.tag){case 3:s=d,i.effectTag|=2048,i.expirationTime=o,cr(i,o=Fo(i,s,o));break t;case 1:if(s=d,l=i.type,h=i.stateNode,0==(64&i.effectTag)&&("function"==typeof l.getDerivedStateFromError||null!==h&&"function"==typeof h.componentDidCatch&&(null===jo||!jo.has(h)))){i.effectTag|=2048,i.expirationTime=o,cr(i,o=Vo(i,s,o));break t}}i=i.return}while(null!==i)}Po=Wo(r);continue}n=!0,Pc(e)}}break}if(ko=!1,mr=gr=vr=Bo.currentDispatcher=null,n)To=null,t.finishedWork=null;else if(null!==Po)t.finishedWork=null;else{if(null===(n=t.current.alternate)&&c("281"),To=null,Eo){if(r=t.latestPendingTime,o=t.latestSuspendedTime,i=t.latestPingedTime,0!==r&&r<a||0!==o&&o<a||0!==i&&i<a)return Jn(t,a),void wc(t,n,a,t.expirationTime,-1);if(!t.didError&&e)return t.didError=!0,a=t.nextExpirationTimeToWorkOn=a,e=t.expirationTime=1073741823,void wc(t,n,a,e,-1)}e&&-1!==_o?(Jn(t,a),(e=10*(1073741822-$n(t,a)))<_o&&(_o=e),e=10*(1073741822-Cc()),e=_o-e,wc(t,n,a,t.expirationTime,0>e?0:e)):(t.pendingCommitExpirationTime=a,t.finishedWork=n)}}function Qo(t,e){for(var a=t.return;null!==a;){switch(a.tag){case 1:var n=a.stateNode;if("function"==typeof a.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===jo||!jo.has(n)))return or(a,t=Vo(a,t=pr(e,t),1073741823)),void Zo(a,1073741823);break;case 3:return or(a,t=Fo(a,t=pr(e,t),1073741823)),void Zo(a,1073741823)}a=a.return}3===t.tag&&(or(t,a=Fo(t,a=pr(e,t),1073741823)),Zo(t,1073741823))}function Xo(t,e){return 0!==Io?t=Io:ko?t=Oo?1073741823:Ao:1&e.mode?(t=uc?1073741822-10*(1+((1073741822-t+15)/10|0)):1073741822-25*(1+((1073741822-t+500)/25|0)),null!==To&&t===Ao&&--t):t=1073741823,uc&&(0===lc||t<lc)&&(lc=t),t}function Jo(t,e,a,n){var r=t.earliestSuspendedTime,o=t.latestSuspendedTime;if(0!==r&&n<=r&&n>=o){o=r=n,t.didError=!1;var c=t.latestPingedTime;(0===c||c>o)&&(t.latestPingedTime=o),Zn(o,t)}else Xn(t,r=Xo(r=Cc(),e));0!=(1&e.mode)&&t===To&&Ao===n&&(To=null),$o(e,r),0==(1&e.mode)&&($o(a,r),1===a.tag&&null!==a.stateNode&&((e=nr(r)).tag=2,or(a,e))),0!==(a=t.expirationTime)&&Hc(t,a)}function $o(t,e){t.expirationTime<e&&(t.expirationTime=e);var a=t.alternate;null!==a&&a.expirationTime<e&&(a.expirationTime=e);var n=t.return,r=null;if(null===n&&3===t.tag)r=t.stateNode;else for(;null!==n;){if(a=n.alternate,n.childExpirationTime<e&&(n.childExpirationTime=e),null!==a&&a.childExpirationTime<e&&(a.childExpirationTime=e),null===n.return&&3===n.tag){r=n.stateNode;break}n=n.return}return r}function Zo(t,e){null!==(t=$o(t,e))&&(!ko&&0!==Ao&&e>Ao&&Uo(),Xn(t,e),ko&&!Oo&&To===t||Hc(t,t.expirationTime),Mc>xc&&(Mc=0,c("185")))}function tc(t,e,a,n,r){var o=Io;Io=1073741823;try{return t(e,a,n,r)}finally{Io=o}}var ec=null,ac=null,nc=0,rc=void 0,oc=!1,cc=null,ic=0,lc=0,sc=!1,dc=null,hc=!1,pc=!1,uc=!1,vc=null,gc=o.unstable_now(),mc=1073741822-(gc/10|0),fc=mc,xc=50,Mc=0,zc=null;function yc(){mc=1073741822-((o.unstable_now()-gc)/10|0)}function bc(t,e){if(0!==nc){if(e<nc)return;null!==rc&&o.unstable_cancelCallback(rc)}nc=e,t=o.unstable_now()-gc,rc=o.unstable_scheduleCallback(Nc,{timeout:10*(1073741822-e)-t})}function wc(t,e,a,n,r){t.expirationTime=n,0!==r||Lc()?0<r&&(t.timeoutHandle=xn(function(t,e,a){t.pendingCommitExpirationTime=a,t.finishedWork=e,yc(),fc=mc,Sc(t,a)}.bind(null,t,e,a),r)):(t.pendingCommitExpirationTime=a,t.finishedWork=e)}function Cc(){return oc?fc:(Fc(),0!==ic&&1!==ic||(yc(),fc=mc),fc)}function Hc(t,e){null===t.nextScheduledRoot?(t.expirationTime=e,null===ac?(ec=ac=t,t.nextScheduledRoot=t):(ac=ac.nextScheduledRoot=t).nextScheduledRoot=ec):e>t.expirationTime&&(t.expirationTime=e),oc||(hc?pc&&(cc=t,ic=1073741823,Ic(t,1073741823,!1)):1073741823===e?Bc(1073741823,!1):bc(t,e))}function Fc(){var t=0,e=null;if(null!==ac)for(var a=ac,n=ec;null!==n;){var r=n.expirationTime;if(0===r){if((null===a||null===ac)&&c("244"),n===n.nextScheduledRoot){ec=ac=n.nextScheduledRoot=null;break}if(n===ec)ec=r=n.nextScheduledRoot,ac.nextScheduledRoot=r,n.nextScheduledRoot=null;else{if(n===ac){(ac=a).nextScheduledRoot=ec,n.nextScheduledRoot=null;break}a.nextScheduledRoot=n.nextScheduledRoot,n.nextScheduledRoot=null}n=a.nextScheduledRoot}else{if(r>t&&(t=r,e=n),n===ac)break;if(1073741823===t)break;a=n,n=n.nextScheduledRoot}}cc=e,ic=t}var Vc=!1;function Lc(){return!!Vc||!!o.unstable_shouldYield()&&(Vc=!0)}function Nc(){try{if(!Lc()&&null!==ec){yc();var t=ec;do{var e=t.expirationTime;0!==e&&mc<=e&&(t.nextExpirationTimeToWorkOn=mc),t=t.nextScheduledRoot}while(t!==ec)}Bc(0,!0)}finally{Vc=!1}}function Bc(t,e){if(Fc(),e)for(yc(),fc=mc;null!==cc&&0!==ic&&t<=ic&&!(Vc&&mc>ic);)Ic(cc,ic,mc>ic),Fc(),yc(),fc=mc;else for(;null!==cc&&0!==ic&&t<=ic;)Ic(cc,ic,!1),Fc();if(e&&(nc=0,rc=null),0!==ic&&bc(cc,ic),Mc=0,zc=null,null!==vc)for(t=vc,vc=null,e=0;e<t.length;e++){var a=t[e];try{a._onComplete()}catch(t){sc||(sc=!0,dc=t)}}if(sc)throw t=dc,dc=null,sc=!1,t}function Sc(t,e){oc&&c("253"),cc=t,ic=e,Ic(t,e,!1),Bc(1073741823,!1)}function Ic(t,e,a){if(oc&&c("245"),oc=!0,a){var n=t.finishedWork;null!==n?kc(t,n,e):(t.finishedWork=null,-1!==(n=t.timeoutHandle)&&(t.timeoutHandle=-1,Mn(n)),Yo(t,a),null!==(n=t.finishedWork)&&(Lc()?t.finishedWork=n:kc(t,n,e)))}else null!==(n=t.finishedWork)?kc(t,n,e):(t.finishedWork=null,-1!==(n=t.timeoutHandle)&&(t.timeoutHandle=-1,Mn(n)),Yo(t,a),null!==(n=t.finishedWork)&&kc(t,n,e));oc=!1}function kc(t,e,a){var n=t.firstBatch;if(null!==n&&n._expirationTime>=a&&(null===vc?vc=[n]:vc.push(n),n._defer))return t.finishedWork=e,void(t.expirationTime=0);t.finishedWork=null,t===zc?Mc++:(zc=t,Mc=0),Oo=ko=!0,t.current===e&&c("177"),0===(a=t.pendingCommitExpirationTime)&&c("261"),t.pendingCommitExpirationTime=0,n=e.expirationTime;var r=e.childExpirationTime;if(n=r>n?r:n,t.didError=!1,0===n?(t.earliestPendingTime=0,t.latestPendingTime=0,t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0):(0!==(r=t.latestPendingTime)&&(r>n?t.earliestPendingTime=t.latestPendingTime=0:t.earliestPendingTime>n&&(t.earliestPendingTime=t.latestPendingTime)),0===(r=t.earliestSuspendedTime)?Xn(t,n):n<t.latestSuspendedTime?(t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0,Xn(t,n)):n>r&&Xn(t,n)),Zn(0,t),Bo.current=null,1<e.effectTag?null!==e.lastEffect?(e.lastEffect.nextEffect=e,n=e.firstEffect):n=e:n=e.firstEffect,vn=wa,Aa(r=Ta())){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else t:{var i=(o=(o=r.ownerDocument)&&o.defaultView||window).getSelection&&o.getSelection();if(i&&0!==i.rangeCount){o=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{o.nodeType,s.nodeType}catch(t){o=null;break t}var d=0,h=-1,p=-1,u=0,v=0,g=r,m=null;e:for(;;){for(var f;g!==o||0!==l&&3!==g.nodeType||(h=d+l),g!==s||0!==i&&3!==g.nodeType||(p=d+i),3===g.nodeType&&(d+=g.nodeValue.length),null!==(f=g.firstChild);)m=g,g=f;for(;;){if(g===r)break e;if(m===o&&++u===l&&(h=d),m===s&&++v===i&&(p=d),null!==(f=g.nextSibling))break;m=(g=m).parentNode}g=f}o=-1===h||-1===p?null:{start:h,end:p}}else o=null}o=o||{start:0,end:0}}else o=null;for(gn={focusedElem:r,selectionRange:o},wa=!1,Ro=n;null!==Ro;){r=!1,o=void 0;try{for(;null!==Ro;){if(256&Ro.effectTag)t:{var x=Ro.alternate;switch((l=Ro).tag){case 0:case 11:case 15:break t;case 1:if(256&l.effectTag&&null!==x){var M=x.memoizedProps,z=x.memoizedState,y=l.stateNode,b=y.getSnapshotBeforeUpdate(l.elementType===l.type?M:Br(l.type,M),z);y.__reactInternalSnapshotBeforeUpdate=b}break t;case 3:case 5:case 6:case 4:case 17:break t;default:c("163")}}Ro=Ro.nextEffect}}catch(t){r=!0,o=t}r&&(null===Ro&&c("178"),Qo(Ro,o),null!==Ro&&(Ro=Ro.nextEffect))}for(Ro=n;null!==Ro;){x=!1,M=void 0;try{for(;null!==Ro;){var w=Ro.effectTag;if(16&w&&nn(Ro.stateNode,""),128&w){var C=Ro.alternate;if(null!==C){var H=C.ref;null!==H&&("function"==typeof H?H(null):H.current=null)}}switch(14&w){case 2:wo(Ro),Ro.effectTag&=-3;break;case 6:wo(Ro),Ro.effectTag&=-3,Ho(Ro.alternate,Ro);break;case 4:Ho(Ro.alternate,Ro);break;case 8:Co(z=Ro),z.return=null,z.child=null,z.alternate&&(z.alternate.child=null,z.alternate.return=null)}Ro=Ro.nextEffect}}catch(t){x=!0,M=t}x&&(null===Ro&&c("178"),Qo(Ro,M),null!==Ro&&(Ro=Ro.nextEffect))}if(H=gn,C=Ta(),w=H.focusedElem,M=H.selectionRange,C!==w&&w&&w.ownerDocument&&function t(e,a){return!(!e||!a)&&(e===a||(!e||3!==e.nodeType)&&(a&&3===a.nodeType?t(e,a.parentNode):"contains"in e?e.contains(a):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(a))))}(w.ownerDocument.documentElement,w)){null!==M&&Aa(w)&&(C=M.start,void 0===(H=M.end)&&(H=C),"selectionStart"in w?(w.selectionStart=C,w.selectionEnd=Math.min(H,w.value.length)):(H=(C=w.ownerDocument||document)&&C.defaultView||window).getSelection&&(H=H.getSelection(),z=w.textContent.length,x=Math.min(M.start,z),M=void 0===M.end?x:Math.min(M.end,z),!H.extend&&x>M&&(z=M,M=x,x=z),z=Pa(w,x),y=Pa(w,M),z&&y&&(1!==H.rangeCount||H.anchorNode!==z.node||H.anchorOffset!==z.offset||H.focusNode!==y.node||H.focusOffset!==y.offset)&&((C=C.createRange()).setStart(z.node,z.offset),H.removeAllRanges(),x>M?(H.addRange(C),H.extend(y.node,y.offset)):(C.setEnd(y.node,y.offset),H.addRange(C))))),C=[];for(H=w;H=H.parentNode;)1===H.nodeType&&C.push({element:H,left:H.scrollLeft,top:H.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<C.length;w++)(H=C[w]).element.scrollLeft=H.left,H.element.scrollTop=H.top}for(gn=null,wa=!!vn,vn=null,t.current=e,Ro=n;null!==Ro;){n=!1,w=void 0;try{for(C=a;null!==Ro;){var F=Ro.effectTag;if(36&F){var V=Ro.alternate;switch(x=C,(H=Ro).tag){case 0:case 11:case 15:break;case 1:var L=H.stateNode;if(4&H.effectTag)if(null===V)L.componentDidMount();else{var N=H.elementType===H.type?V.memoizedProps:Br(H.type,V.memoizedProps);L.componentDidUpdate(N,V.memoizedState,L.__reactInternalSnapshotBeforeUpdate)}var B=H.updateQueue;null!==B&&dr(0,B,L);break;case 3:var S=H.updateQueue;if(null!==S){if(M=null,null!==H.child)switch(H.child.tag){case 5:M=H.child.stateNode;break;case 1:M=H.child.stateNode}dr(0,S,M)}break;case 5:var I=H.stateNode;null===V&&4&H.effectTag&&mn(H.type,H.memoizedProps)&&I.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:c("163")}}if(128&F){var k=Ro.ref;if(null!==k){var P=Ro.stateNode;switch(Ro.tag){case 5:var T=P;break;default:T=P}"function"==typeof k?k(T):k.current=T}}Ro=Ro.nextEffect}}catch(t){n=!0,w=t}n&&(null===Ro&&c("178"),Qo(Ro,w),null!==Ro&&(Ro=Ro.nextEffect))}ko=Oo=!1,"function"==typeof En&&En(e.stateNode),F=e.expirationTime,0===(e=(e=e.childExpirationTime)>F?e:F)&&(jo=null),t.expirationTime=e,t.finishedWork=null}function Pc(t){null===cc&&c("246"),cc.expirationTime=0,sc||(sc=!0,dc=t)}function Tc(t,e){var a=hc;hc=!0;try{return t(e)}finally{(hc=a)||oc||Bc(1073741823,!1)}}function Ac(t,e){if(hc&&!pc){pc=!0;try{return t(e)}finally{pc=!1}}return t(e)}function _c(t,e,a){if(uc)return t(e,a);hc||oc||0===lc||(Bc(lc,!1),lc=0);var n=uc,r=hc;hc=uc=!0;try{return t(e,a)}finally{uc=n,(hc=r)||oc||Bc(1073741823,!1)}}function Ec(t,e,a,n,r){var o=e.current;t:if(a){e:{2===ea(a=a._reactInternalFiber)&&1===a.tag||c("170");var i=a;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(null!==i);c("171"),i=void 0}if(1===a.tag){var l=a.type;if(Sn(l)){a=Tn(a,l,i);break t}}a=i}else a=Fn;return null===e.context?e.context=a:e.pendingContext=a,e=r,(r=nr(n)).payload={element:t},null!==(e=void 0===e?null:e)&&(r.callback=e),Ko(),or(o,r),Zo(o,n),n}function Rc(t,e,a,n){var r=e.current;return Ec(t,e,a,r=Xo(Cc(),r),n)}function Oc(t){if(!(t=t.current).child)return null;switch(t.child.tag){case 5:default:return t.child.stateNode}}function Dc(t){var e=1073741822-25*(1+((1073741822-Cc()+500)/25|0));e>=So&&(e=So-1),this._expirationTime=So=e,this._root=t,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function Gc(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function jc(t,e,a){t={current:e=Gn(3,null,null,e?3:0),containerInfo:t,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:a,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=e.stateNode=t}function Uc(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType&&(8!==t.nodeType||" react-mount-point-unstable "!==t.nodeValue))}function Kc(t,e,a,n,r){Uc(a)||c("200");var o=a._reactRootContainer;if(o){if("function"==typeof r){var i=r;r=function(){var t=Oc(o._internalRoot);i.call(t)}}null!=t?o.legacy_renderSubtreeIntoContainer(t,e,r):o.render(e,r)}else{if(o=a._reactRootContainer=function(t,e){if(e||(e=!(!(e=t?9===t.nodeType?t.documentElement:t.firstChild:null)||1!==e.nodeType||!e.hasAttribute("data-reactroot"))),!e)for(var a;a=t.lastChild;)t.removeChild(a);return new jc(t,!1,e)}(a,n),"function"==typeof r){var l=r;r=function(){var t=Oc(o._internalRoot);l.call(t)}}Ac(function(){null!=t?o.legacy_renderSubtreeIntoContainer(t,e,r):o.render(e,r)})}return Oc(o._internalRoot)}function Wc(t,e){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Uc(e)||c("200"),function(t,e,a){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Yt,key:null==n?null:""+n,children:t,containerInfo:e,implementation:a}}(t,e,null,a)}Ft=function(t,e,a){switch(e){case"input":if(be(t,a),e=a.name,"radio"===a.type&&null!=e){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var r=E(n);r||c("90"),jt(n),be(n,r)}}}break;case"textarea":Qa(t,a);break;case"select":null!=(e=a.value)&&Wa(t,!!a.multiple,e,!1)}},Dc.prototype.render=function(t){this._defer||c("250"),this._hasChildren=!0,this._children=t;var e=this._root._internalRoot,a=this._expirationTime,n=new Gc;return Ec(t,e,null,a,n._onCommit),n},Dc.prototype.then=function(t){if(this._didComplete)t();else{var e=this._callbacks;null===e&&(e=this._callbacks=[]),e.push(t)}},Dc.prototype.commit=function(){var t=this._root._internalRoot,e=t.firstBatch;if(this._defer&&null!==e||c("251"),this._hasChildren){var a=this._expirationTime;if(e!==this){this._hasChildren&&(a=this._expirationTime=e._expirationTime,this.render(this._children));for(var n=null,r=e;r!==this;)n=r,r=r._next;null===n&&c("251"),n._next=r._next,this._next=e,t.firstBatch=this}this._defer=!1,Sc(t,a),e=this._next,this._next=null,null!==(e=t.firstBatch=e)&&e._hasChildren&&e.render(e._children)}else this._next=null,this._defer=!1},Dc.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var t=this._callbacks;if(null!==t)for(var e=0;e<t.length;e++)(0,t[e])()}},Gc.prototype.then=function(t){if(this._didCommit)t();else{var e=this._callbacks;null===e&&(e=this._callbacks=[]),e.push(t)}},Gc.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var t=this._callbacks;if(null!==t)for(var e=0;e<t.length;e++){var a=t[e];"function"!=typeof a&&c("191",a),a()}}},jc.prototype.render=function(t,e){var a=this._internalRoot,n=new Gc;return null!==(e=void 0===e?null:e)&&n.then(e),Rc(t,a,null,n._onCommit),n},jc.prototype.unmount=function(t){var e=this._internalRoot,a=new Gc;return null!==(t=void 0===t?null:t)&&a.then(t),Rc(null,e,null,a._onCommit),a},jc.prototype.legacy_renderSubtreeIntoContainer=function(t,e,a){var n=this._internalRoot,r=new Gc;return null!==(a=void 0===a?null:a)&&r.then(a),Rc(e,n,t,r._onCommit),r},jc.prototype.createBatch=function(){var t=new Dc(this),e=t._expirationTime,a=this._internalRoot,n=a.firstBatch;if(null===n)a.firstBatch=t,t._next=null;else{for(a=null;null!==n&&n._expirationTime>=e;)a=n,n=n._next;t._next=n,null!==a&&(a._next=t)}return t},It=Tc,kt=_c,Pt=function(){oc||0===lc||(Bc(lc,!1),lc=0)};var qc={createPortal:Wc,findDOMNode:function(t){if(null==t)return null;if(1===t.nodeType)return t;var e=t._reactInternalFiber;return void 0===e&&("function"==typeof t.render?c("188"):c("268",Object.keys(t))),t=null===(t=na(e))?null:t.stateNode},hydrate:function(t,e,a){return Kc(null,t,e,!0,a)},render:function(t,e,a){return Kc(null,t,e,!1,a)},unstable_renderSubtreeIntoContainer:function(t,e,a,n){return(null==t||void 0===t._reactInternalFiber)&&c("38"),Kc(t,e,a,!1,n)},unmountComponentAtNode:function(t){return Uc(t)||c("40"),!!t._reactRootContainer&&(Ac(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return Wc.apply(void 0,arguments)},unstable_batchedUpdates:Tc,unstable_interactiveUpdates:_c,flushSync:function(t,e){oc&&c("187");var a=hc;hc=!0;try{return tc(t,e)}finally{hc=a,Bc(1073741823,!1)}},unstable_flushControlled:function(t){var e=hc;hc=!0;try{tc(t)}finally{(hc=e)||oc||Bc(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[A,_,E,N.injectEventPluginsByName,x,U,function(t){F(t,j)},Bt,St,Va,S]},unstable_createRoot:function(t,e){return Uc(t)||c("299","unstable_createRoot"),new jc(t,!0,null!=e&&!0===e.hydrate)}};!function(t){var e=t.findFiberByHostInstance;(function(t){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)return!0;try{var a=e.inject(t);En=On(function(t){return e.onCommitFiberRoot(a,t)}),Rn=On(function(t){return e.onCommitFiberUnmount(a,t)})}catch(t){}})(r({},t,{findHostInstanceByFiber:function(t){return null===(t=na(t))?null:t.stateNode},findFiberByHostInstance:function(t){return e?e(t):null}}))}({findFiberByHostInstance:T,bundleType:0,version:"16.6.3",rendererPackageName:"react-dom"});var Yc={default:qc},Qc=Yc&&qc||Yc;t.exports=Qc.default||Qc},function(t,e,a){"use strict";
/** @license React v16.6.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
/** @license React v16.6.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_55dc4e2ecf7824085104 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_55dc4e2ecf7824085104 */ "dll-reference dll_55dc4e2ecf7824085104"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-popper/lib/Arrow.js":
/*!************************************************!*\
  !*** ./node_modules/react-popper/lib/Arrow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

Arrow.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./node_modules/react-popper/lib/Manager.js":
/*!**************************************************!*\
  !*** ./node_modules/react-popper/lib/Manager.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Manager.childContextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Manager.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Manager.defaultProps = {
  tag: 'div'
};


/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./node_modules/react-popper/lib/Popper.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popper/lib/Popper.js ***!
  \*************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });







