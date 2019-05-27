webpackHotUpdate(1,{

/***/ "./components/videoAnnotationDemo/VideoAnnotationDemo.js":
/*!***************************************************************!*\
  !*** ./components/videoAnnotationDemo/VideoAnnotationDemo.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-annotation-tool */ "./node_modules/react-annotation-tool/dist/bundle.js");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../videoInstruction/VideoInstruction */ "./components/videoInstruction/VideoInstruction.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");










var _jsxFileName = "/home/production/chi-lin/components/videoAnnotationDemo/VideoAnnotationDemo.js";






var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Demo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleResultSubmit", function (result) {
      _this.setState({
        result: result
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (event) {
      var target = event.target;
      var name = target.name;
      var value = target.type === "checkbox" ? target.checked : target.value;

      _this.setState(function (preState) {
        var input = preState.input;
        return {
          input: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, name, value))
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleFileChange", function (event) {
      console.log(event);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.setState(function (preState) {
        var input = preState.input;
        var annotations = _this.isJsonString(input.annotations) ? input.annotations : "[]";
        return {
          params: {
            annotations: JSON.parse(annotations),
            url: input.url,
            annotationWidth: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(input.annotationWidth, 10)
          }
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "isJsonString", function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    });

    var _annotations = [{
      "id": "jt192wyd",
      "name": "jt192wyd",
      "label": "1-2",
      "color": "rgba(255,0,0,1)",
      "trajectories": [{
        "id": "jt192wyb",
        "name": "jt192wyb",
        "x": 295.00402335586875,
        "y": 193.3689649661968,
        "width": 40.75402335586878,
        "height": 41.63103503380317,
        "time": 0.0308226495726496,
        "status": "Show"
      }, {
        "id": "jt1930nb",
        "name": "jt1930nb",
        "x": 304.00402335586875,
        "y": 202.3689649661968,
        "width": 58.75402335586875,
        "height": 60.63103503380319,
        "time": 0.03178472222222222,
        "status": "Show"
      }, {
        "id": "jt193fim",
        "name": "jt193fim",
        "x": 309.00402335586875,
        "y": 213.3689649661968,
        "width": 58.75402335586875,
        "height": 60.63103503380319,
        "time": 0.06388611111111112,
        "status": "Show"
      }, {
        "id": "jt193ijo",
        "name": "jt193ijo",
        "x": 320.00402335586875,
        "y": 220.3689649661968,
        "width": 58.75402335586875,
        "height": 74.63103503380319,
        "time": 0.08677242063492063,
        "status": "Show"
      }, {
        "id": "jt19484m",
        "name": "jt19484m",
        "x": 320.48992156587633,
        "y": 218.42537212616642,
        "width": 60.697616195899116,
        "height": 78.17334040378043,
        "time": 0.0966718253968254,
        "status": "Show"
      }, {
        "id": "jt193o4y",
        "name": "jt193o4y",
        "x": 321.00402335586875,
        "y": 216.3689649661968,
        "width": 62.75402335586875,
        "height": 71.63103503380319,
        "time": 0.10714583333333334,
        "status": "Show"
      }, {
        "id": "jt194dom",
        "name": "jt194dom",
        "x": 321.00402335586875,
        "y": 218.8083044640243,
        "width": 62.75402335586875,
        "height": 69.1916955359757,
        "time": 0.1195857142857143,
        "status": "Show"
      }, {
        "id": "jt193taw",
        "name": "jt193taw",
        "x": 321.00402335586875,
        "y": 228.3689649661968,
        "width": 62.75402335586875,
        "height": 59.63103503380319,
        "time": 0.13459007936507936,
        "status": "Show"
      }, {
        "id": "jt193zb4",
        "name": "jt193zb4",
        "x": 318.00402335586875,
        "y": 228.3689649661968,
        "width": 81.75402335586875,
        "height": 59.63103503380319,
        "time": 0.1693952380952381,
        "status": "Show"
      }, {
        "id": "jt195ltz",
        "name": "jt195ltz",
        "x": 328.2874098641244,
        "y": 230.6523514744525,
        "width": 70.85164231813906,
        "height": 56.631035033803215,
        "time": 0.1985523622047244,
        "status": "Show"
      }, {
        "id": "jt194trg",
        "name": "jt194trg",
        "x": 322.00402335586875,
        "y": 232.3689649661968,
        "width": 76.66967862975952,
        "height": 59.63103503380319,
        "time": 0.22047222222222224,
        "status": "Show"
      }, {
        "id": "jt194lgm",
        "name": "jt194lgm",
        "x": 318.00402335586875,
        "y": 228.3689649661968,
        "width": 75.75402335586875,
        "height": 59.63103503380319,
        "time": 0.22967083333333332,
        "status": "Show"
      }, {
        "id": "jt195p7m",
        "name": "jt195p7m",
        "x": 318.00402335586875,
        "y": 228.3689649661968,
        "width": 68.75402335586875,
        "height": 58.19684946385905,
        "time": 0.25359350393700786,
        "status": "Show"
      }, {
        "id": "jt1951r9",
        "name": "jt1951r9",
        "x": 318.00402335586875,
        "y": 228.3689649661968,
        "width": 75.75402335586875,
        "height": 54.63103503380319,
        "time": 0.31307242063492063,
        "status": "Show"
      }, {
        "id": "jt195v9l",
        "name": "jt195v9l",
        "x": 318.00402335586875,
        "y": 228.3689649661968,
        "width": 75.75402335586875,
        "height": 54.63103503380319,
        "time": 0.34623937007874017,
        "status": "Hide"
      }],
      "children": [],
      "parent": "jt1922xu"
    }, {
      "id": "jt192wyc",
      "name": "jt192wyc",
      "label": "1-1",
      "color": "rgba(255,0,0,1)",
      "trajectories": [{
        "id": "jt192wyb",
        "name": "jt192wyb",
        "x": 274.25,
        "y": 171.73792993239366,
        "width": 40.75402335586878,
        "height": 41.63103503380317,
        "time": 0.0308226495726496,
        "status": "Show"
      }, {
        "id": "jt19349x",
        "name": "jt19349x",
        "x": 271.25,
        "y": 167.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.03178472222222222,
        "status": "Show"
      }, {
        "id": "jt193ekd",
        "name": "jt193ekd",
        "x": 274.25,
        "y": 160.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.06388611111111112,
        "status": "Show"
      }, {
        "id": "jt193hp1",
        "name": "jt193hp1",
        "x": 280.25,
        "y": 160.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.08677242063492063,
        "status": "Show"
      }, {
        "id": "jt194cbv",
        "name": "jt194cbv",
        "x": 280.1326975821677,
        "y": 158.62062751456136,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.1195857142857143,
        "status": "Show"
      }, {
        "id": "jt193umg",
        "name": "jt193umg",
        "x": 274.25,
        "y": 154.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.13459007936507936,
        "status": "Show"
      }, {
        "id": "jt193y7q",
        "name": "jt193y7q",
        "x": 268.25,
        "y": 155.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.1693952380952381,
        "status": "Show"
      }, {
        "id": "jt194hxg",
        "name": "jt194hxg",
        "x": 260.25,
        "y": 157.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.20233392857142857,
        "status": "Show"
      }, {
        "id": "jt194mj1",
        "name": "jt194mj1",
        "x": 253.25,
        "y": 156.73792993239366,
        "width": 60.75402335586875,
        "height": 58.63103503380316,
        "time": 0.22967083333333332,
        "status": "Show"
      }, {
        "id": "jt195qgw",
        "name": "jt195qgw",
        "x": 246.25,
        "y": 156.73792993239366,
        "width": 63.66047805713703,
        "height": 58.63103503380316,
        "time": 0.25359350393700786,
        "status": "Show"
      }, {
        "id": "jt194xqh",
        "name": "jt194xqh",
        "x": 253.25,
        "y": 156.73792993239366,
        "width": 52.75402335586875,
        "height": 58.63103503380316,
        "time": 0.27642281746031744,
        "status": "Show"
      }, {
        "id": "jt1955u1",
        "name": "jt1955u1",
        "x": 265.25,
        "y": 159.73792993239366,
        "width": 40.75402335586875,
        "height": 49.63103503380316,
        "time": 0.3564833333333333,
        "status": "Show"
      }, {
        "id": "jt195b3i",
        "name": "jt195b3i",
        "x": 265.25,
        "y": 141.73792993239366,
        "width": 40.75402335586875,
        "height": 49.63103503380316,
        "time": 0.45984980158730154,
        "status": "Show"
      }, {
        "id": "jt1961v6",
        "name": "jt1961v6",
        "x": 269.25,
        "y": 144.73792993239366,
        "width": 40.75402335586875,
        "height": 49.63103503380316,
        "time": 0.47851751968503936,
        "status": "Show"
      }, {
        "id": "jt1965az",
        "name": "jt1965az",
        "x": 262.25,
        "y": 144.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.5342496062992126,
        "status": "Show"
      }, {
        "id": "jt1968nk",
        "name": "jt1968nk",
        "x": 262.25,
        "y": 149.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.5904106299212598,
        "status": "Show"
      }, {
        "id": "jt196ax3",
        "name": "jt196ax3",
        "x": 270.25,
        "y": 158.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.6662596456692913,
        "status": "Show"
      }, {
        "id": "jt196dys",
        "name": "jt196dys",
        "x": 268.25,
        "y": 164.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.7368370078740157,
        "status": "Show"
      }, {
        "id": "jt196guu",
        "name": "jt196guu",
        "x": 272.25,
        "y": 154.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.801053937007874,
        "status": "Show"
      }, {
        "id": "jt196k7h",
        "name": "jt196k7h",
        "x": 273.25,
        "y": 157.73792993239366,
        "width": 47.75402335586875,
        "height": 49.63103503380316,
        "time": 0.8626350393700787,
        "status": "Show"
      }],
      "children": [],
      "parent": "jt1922xu"
    }, {
      "id": "jt1922xu",
      "name": "jt1922xu",
      "label": "1",
      "color": "rgba(255,219,0,1)",
      "trajectories": [{
        "id": "jt1922xu",
        "name": "jt1922xu",
        "x": 274.25,
        "y": 174,
        "width": 80,
        "height": 81,
        "time": 0,
        "status": "Show"
      }, {
        "id": "jt192wyb",
        "name": "jt192wyb",
        "x": 274.25,
        "y": 171.73792993239366,
        "width": 81.50804671173756,
        "height": 83.26207006760634,
        "time": 0.0308226495726496,
        "status": "Split"
      }],
      "children": ["jt192wyc", "jt192wyd"],
      "parent": ""
    }];
    var previewNotices = ["Cells' body range.", "The time that cells <u>split</u>, <u>leave</u>, <u>obscured</u> and <u>show up</u> (if applicable)."];
    var url = 'https://cildata.crbs.ucsd.edu/media/videos/50507/50507_web.mp4';
    var annotationWidth = 600;
    _this.state = {
      result: null,
      input: {
        annotations: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_annotations),
        url: url,
        annotationWidth: annotationWidth,
        uploadedData: null
      },
      params: {
        annotations: _annotations,
        url: url,
        previewNotices: previewNotices,
        annotationWidth: annotationWidth
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          result = _this$state.result,
          input = _this$state.input,
          params = _this$state.params;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        fluid: true,
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "display-4  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Video Tool"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        className: "mb-2 col-xs-12 col-lg-10 offset-lg-1",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        for: "URL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Video Source URL"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "text",
        name: "url",
        placeholder: "http://...",
        value: input.url,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        for: "Annotation Width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Annotation Width"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "text",
        name: "annotationWidth",
        placeholder: "number",
        value: input.annotationWidth,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        for: "exampleText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Default Annotations"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "textarea",
        name: "annotations",
        placeholder: "[{id: .., name: .., label: .., color: .., trajectories: ..}, ..]",
        value: input.annotations,
        onChange: this.handleChange,
        rows: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        for: "exampleFile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "or Upload Default Annotations"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        type: "file",
        name: "file",
        id: "exampleFile",
        onChange: this.handleFileChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_videoInstruction_VideoInstruction__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_annotation_tool__WEBPACK_IMPORTED_MODULE_11__["VideoTool"], {
        key: "".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.url), "\n\t\t\t\t\t\t\t\t ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.annotations), "\n\t\t\t\t\t\t\t\t ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.annotationWidth), "\n\t\t\t\t\t\t\t\t ").concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params.previewNotices)),
        onSubmit: this.handleResultSubmit,
        url: params.url,
        annotations: params.annotations,
        annotationWidth: params.annotationWidth,
        previewNotices: params.previewNotices,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        className: "my-3 col-xs-12 col-lg-10 offset-lg-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Result"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(result, null, 2)))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=1.0ba4ee1324fac7622d3a.hot-update.js.map