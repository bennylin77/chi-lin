exports.ids = [0];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);








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

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ })

};;
//# sourceMappingURL=0.js.map