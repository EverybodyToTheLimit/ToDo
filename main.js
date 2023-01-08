/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Concert+One&family=Tillana&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --salmon: #FFA69E;\n    --yellow: #FAF3DD;\n    --green: #B8F2E6;\n    --blue: #545a5c;\n    --grey: #e9e9e9;\n    --grey-highlight: #e9e9e970;\n    --black: #2D2D34;\n    --white: #ffffff;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Tillana', cursive;\n}\n\n.header {\n    background-color: var(--salmon);\n    height: 60px;\n    width: 100%;\n    padding-left: 30px;\n    font-size: 25px;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    height: 100vh;\n    background-color: var(--blue);\n}\n\n.static-list-item {\n    display: inline-flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 20px;\n    padding: 10px;\n    padding-left: 20px;\n    color: var(--grey);\n    font-size: 25px;\n    align-items: center;\n\n}\n\n.static-list-item:hover {\n    background-color: var(--grey-highlight);\n}\n\n.nav-static {\n    display: flex;\n    flex-direction: column;\n    padding-top: 30px;\n}\n\na {\n    text-decoration:none;\n    color: var(--grey);\n }\n\n.container {\n    display: flex;\n    width: 100%;\n}\n\n.main {\n    flex: 1;\n    min-width: 300px;\n    background-color: var(--grey);\n}\n\n.nav-project-header {\n    display:flex;\n    margin: 20px;\n    margin-top: 40px;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--grey);\n    font-size: 20px;\n    padding-bottom: 5px;\n    border-bottom: 2px solid var(--grey);\n}\n\n.active-project:hover{\n    background-color: var(--grey-highlight);\n}\n\n.active-project {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 20px 10px 20px;\n    font-size: 20px;\n    align-items: center\n}\n\n.modal-div {\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n    align-items: center\n}\n\n\n.modal-display {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    position: fixed;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #121e2281\n}\n\n.new-project-modal-container {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    margin-top: 180px;\n    height: auto;\n    background-color: var(--grey);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    color: var(--blue);\n}\n\n.modal-title-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    font-size: 20px;\n    background-color: var(--salmon);\n}\n\n.modal-body, .modal-submit{\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    background-color: var(--);\n}\n\ninput {\n    padding-top: 5px;\n    height: 45px;\n    padding: 0 12px;\n    border: solid 1px var(--black);\n    border-radius: 8px;\n    color: var(--black);\n    -webkit-transition: all .2s;\n    transition: all .2s;\n}\n\n.modal-submit {\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.cancel-button, .submit-button {\n    border: solid 1px rgba(0,0,0,.15);\n    padding: 8px 12px;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.submit-button {\n    background-color: var(--salmon);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,yBAAyB;IACzB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;CACrB;;AAED;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,eAAe;IACf;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;IACR;AACJ;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,6BAA6B;IAC7B,2CAA2C;IAC3C,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":[":root {\n    --salmon: #FFA69E;\n    --yellow: #FAF3DD;\n    --green: #B8F2E6;\n    --blue: #545a5c;\n    --grey: #e9e9e9;\n    --grey-highlight: #e9e9e970;\n    --black: #2D2D34;\n    --white: #ffffff;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Tillana', cursive;\n}\n\n.header {\n    background-color: var(--salmon);\n    height: 60px;\n    width: 100%;\n    padding-left: 30px;\n    font-size: 25px;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    height: 100vh;\n    background-color: var(--blue);\n}\n\n.static-list-item {\n    display: inline-flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 20px;\n    padding: 10px;\n    padding-left: 20px;\n    color: var(--grey);\n    font-size: 25px;\n    align-items: center;\n\n}\n\n.static-list-item:hover {\n    background-color: var(--grey-highlight);\n}\n\n.nav-static {\n    display: flex;\n    flex-direction: column;\n    padding-top: 30px;\n}\n\na {\n    text-decoration:none;\n    color: var(--grey);\n }\n\n.container {\n    display: flex;\n    width: 100%;\n}\n\n.main {\n    flex: 1;\n    min-width: 300px;\n    background-color: var(--grey);\n}\n\n.nav-project-header {\n    display:flex;\n    margin: 20px;\n    margin-top: 40px;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--grey);\n    font-size: 20px;\n    padding-bottom: 5px;\n    border-bottom: 2px solid var(--grey);\n}\n\n.active-project:hover{\n    background-color: var(--grey-highlight);\n}\n\n.active-project {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 20px 10px 20px;\n    font-size: 20px;\n    align-items: center\n}\n\n.modal-div {\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n    align-items: center\n}\n\n\n.modal-display {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    position: fixed;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #121e2281\n}\n\n.new-project-modal-container {\n    display: flex;\n    flex-direction: column;\n    min-width: 400px;\n    margin-top: 180px;\n    height: auto;\n    background-color: var(--grey);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    color: var(--blue);\n}\n\n.modal-title-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    font-size: 20px;\n    background-color: var(--salmon);\n}\n\n.modal-body, .modal-submit{\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    background-color: var(--);\n}\n\ninput {\n    padding-top: 5px;\n    height: 45px;\n    padding: 0 12px;\n    border: solid 1px var(--black);\n    border-radius: 8px;\n    color: var(--black);\n    -webkit-transition: all .2s;\n    transition: all .2s;\n}\n\n.modal-submit {\n    flex-direction: row;\n    justify-content: flex-end;\n}\n\n.cancel-button, .submit-button {\n    border: solid 1px rgba(0,0,0,.15);\n    padding: 8px 12px;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.submit-button {\n    background-color: var(--salmon);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Tillana&display=swap');"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-helper.js":
/*!***************************!*\
  !*** ./src/dom-helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNewProjectModal": () => (/* binding */ removeNewProjectModal),
/* harmony export */   "removeProjectSidebar": () => (/* binding */ removeProjectSidebar),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader),
/* harmony export */   "renderNewProject": () => (/* binding */ renderNewProject),
/* harmony export */   "renderNewProjectModal": () => (/* binding */ renderNewProjectModal),
/* harmony export */   "renderStaticElements": () => (/* binding */ renderStaticElements)
/* harmony export */ });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");


let renderHeader = () => {
    let headerObject = document.createElement('div');
    headerObject.className = "header";
    headerObject.textContent = "ToDo App"
    document.body.appendChild(headerObject);
}

let renderStaticElements = () => {

    // Add static elements and define the properties

    let containerObject = document.createElement('div');
    containerObject.className = "container";
    let sidebarObject = document.createElement('nav');
    sidebarObject.className = "sidebar";
    let mainObject = document.createElement('div');
    mainObject.className = "main";
    let navStaticObject = document.createElement('div');
    navStaticObject.className = "nav-static";
    let navProjectsObject = document.createElement('div');
    navProjectsObject.className = "nav-projects";
    let navstaticToday = document.createElement('a');
    navstaticToday.className = "static-list-item"
    navstaticToday.textContent = "Today"
    navstaticToday.href = "#"
    let navstaticTodayIcon = document.createElement('i');
    navstaticTodayIcon.className = "material-symbols-outlined";
    navstaticTodayIcon.textContent = "today"
    let navstaticWeek = document.createElement('a');
    navstaticWeek.className = "static-list-item"
    navstaticWeek.textContent = "Week"
    navstaticWeek.href = "#"
    let navstaticWeekIcon = document.createElement('i');
    navstaticWeekIcon.className = "material-symbols-outlined";
    navstaticWeekIcon.textContent = "calendar_month"
    let navstaticImportant = document.createElement('a');
    navstaticImportant.className = "static-list-item"
    navstaticImportant.textContent = "Important"
    navstaticImportant.href = "#"
    let navstaticImportantIcon = document.createElement('i');
    navstaticImportantIcon.className = "material-symbols-outlined";
    navstaticImportantIcon.textContent = "assignment_late"
    let navstaticComplete = document.createElement('a');
    navstaticComplete.className = "static-list-item"
    navstaticComplete.textContent = "Completed"
    navstaticComplete.href = "#"
    let navstaticCompleteIcon = document.createElement('i');
    navstaticCompleteIcon.className = "material-symbols-outlined";
    navstaticCompleteIcon.textContent = "download_done"
    let navProjectsHeader = document.createElement("div");
    navProjectsHeader.className = "nav-project-header"
    let navProjectsTitle = document.createElement("div");
    navProjectsTitle.className = "nav-project-title"
    navProjectsTitle.textContent = "Projects"
    let navProjectsAdd = document.createElement("a");
    navProjectsAdd.href = '#'
    navProjectsAdd.className = "material-symbols-outlined"
    navProjectsAdd.textContent = "Add"

    // add event listeners and redirect to handler function

    navstaticToday.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("today")})
    navstaticWeek.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("week")})
    navstaticImportant.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("important")})
    navstaticComplete.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("complete")})
    navProjectsAdd.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("new-project")})

    //create objects in DOM

    navProjectsHeader.appendChild(navProjectsTitle);
    navProjectsHeader.appendChild(navProjectsAdd);
    navProjectsObject.appendChild(navProjectsHeader);
    navstaticToday.appendChild(navstaticTodayIcon);
    navStaticObject.appendChild(navstaticToday);
    navstaticWeek.appendChild(navstaticWeekIcon);
    navStaticObject.appendChild(navstaticWeek);
    navstaticImportant.appendChild(navstaticImportantIcon);
    navStaticObject.appendChild(navstaticImportant);
    navstaticComplete.appendChild(navstaticCompleteIcon);
    navStaticObject.appendChild(navstaticComplete);
    sidebarObject.appendChild(navStaticObject);
    sidebarObject.appendChild(navProjectsObject)
    containerObject.appendChild(sidebarObject);
    containerObject.appendChild(mainObject);
    document.body.appendChild(containerObject);
}

let renderNewProject = (projectName, projectId) => {


    // add elements and define the properties

    let newProjectObject = document.createElement("a");
    newProjectObject.href = "#";
    newProjectObject.className = "active-project";
    newProjectObject.id = projectId;
    let newTitle = document.createElement("a");
    newTitle.textContent = projectName;
    let newProjectNav = document.createElement("div");
    newProjectNav.className = "modal-div"
    let newDeleteModal = document.createElement("btn");
    newDeleteModal.className = "material-symbols-outlined";
    newDeleteModal.textContent = "Delete";
    let newEditModal = document.createElement("btn");
    newEditModal.className = "material-symbols-outlined";
    newEditModal.textContent = "Edit"

    // add click listerners and pass to handler

    newTitle.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)(projectName, projectId)})
    newEditModal.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("edit", projectId)})
    newDeleteModal.addEventListener('click', () => {;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("delete", projectId)})

    // add elements to the DOM 

    newProjectObject.appendChild(newTitle);
    newProjectNav.appendChild(newEditModal);
    newProjectNav.appendChild(newDeleteModal);
    newProjectObject.appendChild(newProjectNav);

    let mainAppend = document.querySelector(".nav-projects");
    mainAppend.appendChild(newProjectObject)
}

let removeProjectSidebar = (projectName, projectId) => {
    
    let delElement = document.getElementById(projectId);
    delElement.remove();

}

let renderNewProjectModal = () => {

    //create elements and define properties

    let modalDisplay = document.createElement('div');
    modalDisplay.className = "modal-display"
    let newProjectModalDiv = document.createElement('div');
    newProjectModalDiv.className = "new-project-modal-container";
    let modalTitle = document.createElement('div');
    modalTitle.className = "modal-title-div";
    let modalTitleText = document.createElement('div');
    modalTitleText.className = "modal-title";
    modalTitleText.textContent = "New Project"
    let modalExit = document.createElement('btn');
    modalExit.href = "#"
    modalExit.className = "material-symbols-outlined";
    modalExit.textContent = "close"
    let mainAppend = document.body;

    let modalForm = document.createElement('form');
    modalForm.action = "#"

    let modalBody = document.createElement('div');
    modalBody.className = "modal-body"
    let modalFormProjectName = document.createElement('input')
    modalFormProjectName.id = "project-name"
    modalFormProjectName.name = "project-name"
    modalFormProjectName.type = "text"
    modalFormProjectName.placeholder = "e.g. Learn metallurgy"
    modalFormProjectName.required = true;
    let modalFormLabel = document.createElement('LABEL')
    modalFormLabel.htmlFor = "project-name"
    modalFormLabel.innerHTML = "Project title*"

    let modalSubmitDiv = document.createElement('div');
    modalSubmitDiv.className = "modal-submit"
    let modalCancell = document.createElement('btn');
    modalCancell.className= "cancel-button"
    modalCancell.textContent = "Cancel"
    let modalSubmit = document.createElement('btn');
    modalSubmit.className = "submit-button"
    modalSubmit.textContent = "Submit"
    modalSubmit.type = "submit"

    //add event listeners


    modalSubmit.addEventListener('click', (event) => {
        modalForm.submit();
        event.preventDefault();
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.clickHandler)("new-project-created",undefined,modalFormProjectName.value)
    })


    //create in DOM
    
    modalSubmitDiv.appendChild(modalCancell);
    modalSubmitDiv.appendChild(modalSubmit);
    modalBody.appendChild(modalFormLabel);
    modalBody.appendChild(modalFormProjectName);
    modalTitle.appendChild(modalTitleText);
    modalTitle.appendChild(modalExit);
    modalForm.appendChild(modalBody)
    modalForm.appendChild(modalSubmitDiv)
    newProjectModalDiv.appendChild(modalTitle);
    newProjectModalDiv.appendChild(modalForm);
    modalDisplay.appendChild(newProjectModalDiv);
    mainAppend.insertBefore(modalDisplay, mainAppend.firstChild)
}

let removeNewProjectModal = () => {
    let newProjectModal = document.querySelector('modal-display');
    newProjectModal.remove();
}



/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickHandler": () => (/* binding */ clickHandler)
/* harmony export */ });
/* harmony import */ var _dom_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper */ "./src/dom-helper.js");


let clickHandler = (clickOrigin, id, Projectname) => {
    alert(clickOrigin)
    if (id !== undefined) {
        alert(id)
    }
    else if (clickOrigin == "delete") {
        (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.removeProjectSidebar)(clickOrigin, id)
    }
    else if (clickOrigin == "new-project-created") {
        alert(Projectname);
        (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.renderNewProject)(Projectname, 999);
        (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.removeNewProjectModal)();
    }
    else if (clickOrigin == "new-project") {
        (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.renderNewProjectModal)();
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _dom_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-helper */ "./src/dom-helper.js");


(0,_dom_helper__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
(0,_dom_helper__WEBPACK_IMPORTED_MODULE_1__.renderStaticElements)();
(0,_dom_helper__WEBPACK_IMPORTED_MODULE_1__.renderNewProject)("someting", 12)
;(0,_dom_helper__WEBPACK_IMPORTED_MODULE_1__.renderNewProject)("someting-else", 1223)
;(0,_dom_helper__WEBPACK_IMPORTED_MODULE_1__.renderNewProject)("someting-else entirely", 1233)

})();

/******/ })()
;
//# sourceMappingURL=main.js.map