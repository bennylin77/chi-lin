webpackHotUpdate(2,{

/***/ "./components/VideoAnnotationDemo.js":
/*!*******************************************!*\
  !*** ./components/VideoAnnotationDemo.js ***!
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








var _jsxFileName = "/home/production/chi-lin/components/VideoAnnotationDemo.js";





var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (result) {
      _this.setState({
        result: result
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event) {
      console.log(event.target.value);

      _this.setState({
        inputURL: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.setState(function (preState) {
        return {
          videoURL: preState.inputURL
        };
      });
    });

    var annotations = [{
      "id": "jswwe8vl",
      "name": "jswwe8vl",
      "label": "3-2",
      "color": "rgba(0,4,255,1)",
      "trajectories": [{
        "id": "jswwe8vj",
        "name": "jswwe8vj",
        "x": 110.5,
        "y": 266,
        "width": 60.5,
        "height": 62,
        "time": 0.202962662337662,
        "status": "Show"
      }, {
        "id": "jswwerd4",
        "name": "jswwerd4",
        "x": 117.5,
        "y": 273,
        "width": 67.5,
        "height": 60,
        "time": 0.3348269333333333,
        "status": "Show"
      }, {
        "id": "jswwfy46",
        "name": "jswwfy46",
        "x": 117.5,
        "y": 264,
        "width": 62.5,
        "height": 60,
        "time": 0.648538961038961,
        "status": "Show"
      }],
      "children": [],
      "parent": "jswwc3se"
    }, {
      "id": "jswwe8vk",
      "name": "jswwe8vk",
      "label": "3-1",
      "color": "rgba(0,4,255,1)",
      "trajectories": [{
        "id": "jswwe8vj",
        "name": "jswwe8vj",
        "x": 79,
        "y": 231,
        "width": 56.5,
        "height": 59,
        "time": 0.202962662337662,
        "status": "Show"
      }, {
        "id": "jswwetcn",
        "name": "jswwetcn",
        "x": 74,
        "y": 216,
        "width": 61.5,
        "height": 74,
        "time": 0.3348269333333333,
        "status": "Show"
      }, {
        "id": "jswwf0su",
        "name": "jswwf0su",
        "x": 79,
        "y": 224,
        "width": 56.5,
        "height": 60,
        "time": 0.4524497777777778,
        "status": "Show"
      }],
      "children": [],
      "parent": "jswwc3se"
    }, {
      "id": "jswwck44",
      "name": "jswwck44",
      "label": "4-2",
      "color": "rgba(0,4,255,1)",
      "trajectories": [{
        "id": "jswwck42",
        "name": "jswwck42",
        "x": 268,
        "y": 230.5,
        "width": 67,
        "height": 64.5,
        "time": 0.064448051948052,
        "status": "Show"
      }, {
        "id": "jswwcsx5",
        "name": "jswwcsx5",
        "x": 276,
        "y": 232.5,
        "width": 67,
        "height": 64.5,
        "time": 0.11937937777777778,
        "status": "Show"
      }, {
        "id": "jswwd49m",
        "name": "jswwd49m",
        "x": 276,
        "y": 226.5,
        "width": 68,
        "height": 70.5,
        "time": 0.1634536,
        "status": "Show"
      }, {
        "id": "jswwdvqn",
        "name": "jswwdvqn",
        "x": 276,
        "y": 214.5,
        "width": 82,
        "height": 82.5,
        "time": 0.237337662337662,
        "status": "Show"
      }, {
        "id": "jswwepmx",
        "name": "jswwepmx",
        "x": 276,
        "y": 211.5,
        "width": 68,
        "height": 85.5,
        "time": 0.3348269333333333,
        "status": "Show"
      }, {
        "id": "jswwf3uh",
        "name": "jswwf3uh",
        "x": 276,
        "y": 245.5,
        "width": 55,
        "height": 51.5,
        "time": 0.4524497777777778,
        "status": "Show"
      }, {
        "id": "jswwi0at",
        "name": "jswwi0at",
        "x": 286,
        "y": 252.5,
        "width": 45,
        "height": 44.5,
        "time": 0.607792207792208,
        "status": "Show"
      }, {
        "id": "jswwhh2e",
        "name": "jswwhh2e",
        "x": 276,
        "y": 245.5,
        "width": 55,
        "height": 51.5,
        "time": 0.6875,
        "status": "Hide"
      }],
      "children": [],
      "parent": "jswwc78h"
    }, {
      "id": "jswwck43",
      "name": "jswwck43",
      "label": "4-1",
      "color": "rgba(0,4,255,1)",
      "trajectories": [{
        "id": "jswwck42",
        "name": "jswwck42",
        "x": 239,
        "y": 275,
        "width": 56,
        "height": 52.5,
        "time": 0.064448051948052,
        "status": "Show"
      }, {
        "id": "jswwcton",
        "name": "jswwcton",
        "x": 243,
        "y": 276,
        "width": 56,
        "height": 52.5,
        "time": 0.11937937777777778,
        "status": "Show"
      }, {
        "id": "jswwd30l",
        "name": "jswwd30l",
        "x": 233,
        "y": 276,
        "width": 66,
        "height": 61.5,
        "time": 0.1634536,
        "status": "Show"
      }, {
        "id": "jswwdu7z",
        "name": "jswwdu7z",
        "x": 212,
        "y": 276,
        "width": 87,
        "height": 77.5,
        "time": 0.237337662337662,
        "status": "Show"
      }, {
        "id": "jswwegu1",
        "name": "jswwegu1",
        "x": 204,
        "y": 276,
        "width": 95,
        "height": 81.5,
        "time": 0.26695253333333335,
        "status": "Show"
      }, {
        "id": "jswwenyl",
        "name": "jswwenyl",
        "x": 213,
        "y": 278,
        "width": 86,
        "height": 79.5,
        "time": 0.3348269333333333,
        "status": "Show"
      }, {
        "id": "jswwglnf",
        "name": "jswwglnf",
        "x": 228,
        "y": 264.5852976277977,
        "width": 78.54577008436382,
        "height": 81.91470237220233,
        "time": 0.597849025974026,
        "status": "Show"
      }, {
        "id": "jswwfqig",
        "name": "jswwfqig",
        "x": 213,
        "y": 262,
        "width": 95,
        "height": 95.5,
        "time": 0.648538961038961,
        "status": "Show"
      }, {
        "id": "jswwhkq0",
        "name": "jswwhkq0",
        "x": 213,
        "y": 262,
        "width": 95,
        "height": 95.5,
        "time": 0.8460632888888889,
        "status": "Hide"
      }],
      "children": [],
      "parent": "jswwc78h"
    }, {
      "id": "jswwbsll",
      "name": "jswwbsll",
      "label": "1",
      "color": "rgba(0,4,255,1)",
      "trajectories": [{
        "id": "jswwbsll",
        "name": "jswwbsll",
        "x": 50,
        "y": 52,
        "width": 125,
        "height": 121,
        "time": 0,
        "status": "Show"
      }, {
        "id": "jswwcc88",
        "name": "jswwcc88",
        "x": 65,
        "y": 58,
        "width": 110,
        "height": 115,
        "time": 0.0640827922077922,
        "status": "Show"
      }, {
        "id": "jswwcxzy",
        "name": "jswwcxzy",
        "x": 65,
        "y": 64,
        "width": 104,
        "height": 96,
        "time": 0.11937937777777778,
        "status": "Show"
      }, {
        "id": "jswwda6q",
        "name": "jswwda6q",
        "x": 76,
        "y": 73,
        "width": 87,
        "height": 79,
        "time": 0.1634536,
        "status": "Show"
      }, {
        "id": "jswwdxbu",
        "name": "jswwdxbu",
        "x": 92,
        "y": 84,
        "width": 65,
        "height": 59,
        "time": 0.237337662337662,
        "status": "Show"
      }, {
        "id": "jswwex5k",
        "name": "jswwex5k",
        "x": 97,
        "y": 80,
        "width": 65,
        "height": 59,
        "time": 0.3348269333333333,
        "status": "Show"
      }],
      "children": [],
      "parent": ""
    }, {
      "id": "jswwc0xw",
      "name": "jswwc0xw",
      "label": "2",
      "color": "rgba(227,0,255,1)",
      "trajectories": [{
        "id": "jswwc0xw",
        "name": "jswwc0xw",
        "x": 235,
        "y": 82,
        "width": 92,
        "height": 86,
        "time": 0,
        "status": "Show"
      }, {
        "id": "jswwcvfg",
        "name": "jswwcvfg",
        "x": 239,
        "y": 86,
        "width": 77,
        "height": 76,
        "time": 0.11937937777777778,
        "status": "Show"
      }, {
        "id": "jswwd6lc",
        "name": "jswwd6lc",
        "x": 250,
        "y": 95,
        "width": 64,
        "height": 62,
        "time": 0.1634536,
        "status": "Show"
      }, {
        "id": "jswwe0cl",
        "name": "jswwe0cl",
        "x": 256,
        "y": 99,
        "width": 49,
        "height": 47,
        "time": 0.237337662337662,
        "status": "Show"
      }, {
        "id": "jswwekgo",
        "name": "jswwekgo",
        "x": 256,
        "y": 99,
        "width": 55,
        "height": 52,
        "time": 0.26695253333333335,
        "status": "Show"
      }, {
        "id": "jswwewez",
        "name": "jswwewez",
        "x": 264,
        "y": 94,
        "width": 55,
        "height": 52,
        "time": 0.3348269333333333,
        "status": "Show"
      }, {
        "id": "jswwfg26",
        "name": "jswwfg26",
        "x": 258,
        "y": 89,
        "width": 61,
        "height": 57,
        "time": 0.525852272727273,
        "status": "Show"
      }, {
        "id": "jswwhxtk",
        "name": "jswwhxtk",
        "x": 272.69335097585184,
        "y": 108.36850810453195,
        "width": 44.97088984452528,
        "height": 40.30301025471383,
        "time": 0.607792207792208,
        "status": "Hide"
      }, {
        "id": "jswwfua2",
        "name": "jswwfua2",
        "x": 280,
        "y": 118,
        "width": 37,
        "height": 32,
        "time": 0.648538961038961,
        "status": "Show"
      }, {
        "id": "jswwh89v",
        "name": "jswwh89v",
        "x": 280,
        "y": 118,
        "width": 37,
        "height": 32,
        "time": 0.672646103896104,
        "status": "Hide"
      }],
      "children": [],
      "parent": ""
    }, {
      "id": "jswwc3se",
      "name": "jswwc3se",
      "label": "3",
      "color": "rgba(227,0,255,1)",
      "trajectories": [{
        "id": "jswwc3se",
        "name": "jswwc3se",
        "x": 84,
        "y": 234,
        "width": 91,
        "height": 90,
        "time": 0,
        "status": "Show"
      }, {
        "id": "jswwe8vj",
        "name": "jswwe8vj",
        "x": 84,
        "y": 234,
        "width": 91,
        "height": 90,
        "time": 0.202962662337662,
        "status": "Split"
      }],
      "children": ["jswwe8vk", "jswwe8vl"],
      "parent": ""
    }, {
      "id": "jswwc78h",
      "name": "jswwc78h",
      "label": "4",
      "color": "rgba(255,219,0,1)",
      "trajectories": [{
        "id": "jswwc78h",
        "name": "jswwc78h",
        "x": 239,
        "y": 234,
        "width": 90,
        "height": 89,
        "time": 0,
        "status": "Show"
      }, {
        "id": "jswwck42",
        "name": "jswwck42",
        "x": 239,
        "y": 234,
        "width": 90,
        "height": 89,
        "time": 0.064448051948052,
        "status": "Split"
      }],
      "children": ["jswwck43", "jswwck44"],
      "parent": ""
    }];
    _this.state = {
      result: null,
      videoDemoInput: {
        url: "https://cildata.crbs.ucsd.edu/media/videos/15793/15793_web.mp4"
      },
      videoDemoProps: {
        annotations: annotations,
        url: "https://cildata.crbs.ucsd.edu/media/videos/15793/15793_web.mp4"
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          result = _this$state.result,
          inputURL = _this$state.inputURL,
          videoURL = _this$state.videoURL;
      var previewNotices = ["Cells' body range.", "The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>show up</u> (if applicable)."];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "display-4  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Video Tool"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        className: "mb-2",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "text",
        name: "url",
        placeholder: "Video Source URL",
        value: inputURL,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Change")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_annotation_tool__WEBPACK_IMPORTED_MODULE_9__["VideoTool"], {
        key: videoURL,
        onSubmit: this.handleSubmit,
        url: videoURL,
        annotations: annotations,
        previewNotices: previewNotices,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Output"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result, null, 2)))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=2.39133265b831ed7fc1f9.hot-update.js.map