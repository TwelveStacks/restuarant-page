/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Anton&family=PT+Sans+Narrow&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --main-bg-color: #14213d;\n    --text-color: #fca311;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Anton', sans-serif;\n    font-family: 'PT Sans Narrow', sans-serif;\n}\n\nh1 {\n    margin: 0;\n}\n\n.notSelected {\n    list-style: none;\n    font-size: 30px;\n    font-weight: bold;\n    letter-spacing: 2px;\n    color: #ffffff;\n    padding: 0.5em 1em;\n    transition: all 0.5s ease;\n    border-radius: 10px;\n}\n\nnav li:hover {\n    background-color: #e5e5e5;\n    color: var(--main-bg-color);\n    transition: all 0.5s ease;\n    transform: translateY(-2px);\n}\n\nnav li:active {\n    transform: scale(0.95);\n    transition: all 0.5s ease;\n}\n\n.currentSelected {\n    background-color: var(--text-color);\n    color: #ffffff;\n    box-shadow: rgba(166, 134, 47, 0.522) 0 1px 30px;\n}\n\nheader {\n    display: flex;\n    background-color: rgba(0,0,0,0.5);\n    /* background-color: #14213d; */\n    /* background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */\n    align-items: center;\n    justify-content: space-around;\n    padding: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    position: fixed;\n    width: 100%;\n}\n\nnav {\n    display: flex;\n    gap: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.headerText {\n    justify-content: center;\n    font-size: 50px;\n    padding-left: 30px;\n    padding-right: 30px;\n    border: 5px solid var(--text-color);\n    border-radius: 8px;\n    background-color: var(--text-color);\n    color: #ffffff;\n    transition: all 0.5s ease;\n}\n\n.headerText:hover {\n    border-color: #ffffff;\n    background-color: #ffffff;\n    color: var(--text-color);\n    transition: all 0.5s ease;\n    transform: translateY(-2px);\n}\n\n.headerText, nav li {\n    user-select: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url('https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');\n    background-size: cover;\n    background-position: center;\n    min-height: 100vh;\n}\n\n.title {\n    color: var(--text-color);\n    margin: 0;\n    padding: 10px;\n    text-align: center;\n    font-size: 50px;\n    margin-bottom: 30px;\n    border-bottom: 4px solid #fca311;\n}\n\n.desc {\n    font-size: 25px;\n    border-radius: 8px;\n    padding: 10px;\n    margin: 0;\n    color: white;\n}\n\n.contentBody {\n    width: 500px;\n    background-color: rgba(0,0,0,0.5);\n    padding: 30px;\n    border-radius: 8px;\n    margin-top: 100px;\n}\n\n.menuItem {\n    color: white;\n}\n\n.itemDesc {\n    color: white;\n}\n\n/* Dropdown menu */\n.dropdown-menu {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    right: 0;\n    top: 115px;\n    width: 300px;\n    background: rgba(0,0,0,0.5);\n    backdrop-filter: blur(15px);\n    overflow: hidden;\n    display: none;\n}\n\n.dropdown-menu.open {\n    display: flex;\n}\n\n.dropdown-menu li {\n    padding: 30px;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-size: 40px;\n    font-weight: bold;\n    border-bottom: 4px solid var(--main-bg-color);\n    user-select: none;\n}\n\n.dropdown-menu li:last-child {\n    border-bottom: none;\n}\n\n.dropdown-menu li:hover {\n    background-color: rgba(198, 133, 5, 0.745);\n}\n\n.dropdown-menu li:active {\n    transform: scale(0.95);\n    transition: all 0.5s ease;\n}\n\n.toggle-btn {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-right: 15px;\n    position: absolute;\n    right: 3rem;\n    align-self: center;\n    display: none;\n}\n\n.toggle-btn:hover {\n    transition: all 0.5s ease;\n    transform: translateY(-2px);\n}\n\n.toggle-btn:active {\n    transform: scale(0.95);\n    transition: all 0.5s ease;\n}\n\n.toggle-btn > div {\n    width: 80px;\n    height: 10px;\n    background-color: var(--text-color);\n}\n\n.toggle-btn.open div {\n    background-color: white;\n}\n\n@media screen and (max-width: 1000px) {\n    nav {\n        display: none;\n    }\n\n    header {\n        justify-content: flex-start;\n        margin-left: 15px;\n    }\n\n    .toggle-btn {\n        display: flex;\n    }\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n    const contentDiv = document.getElementById(\"content\");\n    const newDiv = document.createElement('div');\n    const description = document.createElement('p');\n    const pageHeader = document.createElement(\"h1\");\n    pageHeader.classList.add('title');\n    pageHeader.innerText = \"Contact\";\n    contentDiv.appendChild(pageHeader);\n    \n    pageHeader.classList.add('title');\n    description.classList.add('desc');\n    newDiv.classList.add('contentBody');\n    pageHeader.innerText = \"Contact\";\n    description.innerText = \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsam. Quos, enim distinctio necessitatibus assumenda tempore explicabo! Dignissimos, placeat amet, deleniti tempora pariatur sint nemo quam dolore, reprehenderit consequatur suscipit!\"\n    newDiv.appendChild(pageHeader);\n    newDiv.appendChild(description);\n    contentDiv.appendChild(newDiv);\n}\n\n//# sourceURL=webpack://package.json/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    const contentDiv = document.getElementById(\"content\");\n    const newDiv = document.createElement('div');\n    const pageHeader = document.createElement(\"h1\");\n    const description = document.createElement('p');\n    pageHeader.classList.add('title');\n    description.classList.add('desc');\n    newDiv.classList.add('contentBody');\n    pageHeader.innerText = \"Quality Food On The Go\";\n    description.innerText = \"At Quick Bites, we're redefining the fast food experience by bringing you mouthwatering flavors, lightning-fast service, and a dash of innovation with every bite. Our mission is simple: to deliver quick, delicious, and quality meals that keep up with your on-the-go lifestyle without compromising on taste or nutrition.\"\n    newDiv.appendChild(pageHeader);\n    newDiv.appendChild(description);\n    contentDiv.appendChild(newDiv);\n}\n\n\n//# sourceURL=webpack://package.json/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _meunPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meunPage */ \"./src/meunPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n// Add navbar options to DOM\nconst contentDiv = document.getElementById(\"content\")\nconst header = document.createElement('header');\nconst nav = document.createElement('nav');\nconst homeTab = document.createElement('li');\nconst menuTab = document.createElement('li');\nconst contactTab = document.createElement('li');\nconst headerText = document.createElement('h1');\nlet tabs = [homeTab, menuTab, contactTab]\n\nheaderText.innerText = \"Quick Bites\"\nhomeTab.innerText = \"Home\";\nmenuTab.innerText = \"Menu\";\ncontactTab.innerText = \"Contact\";\n\nheaderText.classList.add('headerText');\n\ntabs.forEach((e)=> {\n    e.classList.add('notSelected')\n    nav.appendChild(e);\n})\n\nheader.appendChild(headerText)\nheader.appendChild(nav);\n\ndocument.body.insertBefore(header, contentDiv);\n\n// Create dropdown menu\nconst dropdownMenu = document.createElement('div');\n\ndropdownMenu.classList.add('toggle-btn');\n\nfor (let i = 0; i <= 3; i++) {\n    const div = document.createElement('div');\n    dropdownMenu.appendChild(div);\n}\n\n// Create dropdown display\nconst dropdownDisplay = document.createElement('div');\ndropdownDisplay.classList.add('dropdown-menu');\nconst dropDownItems = ['Home', 'Menu', 'Contact'];\n\ndropDownItems.forEach((item)=> {\n    let li = document.createElement('li');\n    li.innerText = item;\n    li.addEventListener('click', function() {\n        resetPage();\n        loadPage(li);\n    });\n    dropdownDisplay.appendChild(li);\n});\n\ndocument.body.insertBefore(dropdownDisplay, header);\n\n// Check if drop down button is clicked\n\ndropdownMenu.addEventListener(\"click\", function() {\n    dropdownDisplay.classList.toggle('open');\n\n    dropdownMenu.classList.toggle('open');\n});\n\nwindow.addEventListener(\"resize\", function() {\n    dropdownDisplay.classList.remove('open');\n    console.log('Resize event read')\n})\n\nheader.appendChild(dropdownMenu);\n\n// Set initial selected tab as home tab\nlet currentSelected = homeTab;\n(0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ncurrentSelected.classList.add('currentSelected')\n\ntabs.forEach(function(i){\n    i.addEventListener(\"click\", function() {\n        resetPage();\n        currentSelected = i;\n        const notSelectedArr = tabs.filter((e)=> {\n            return e !== currentSelected;\n        })\n        styleButtons(i, notSelectedArr);\n        console.log(currentSelected)\n        loadPage(currentSelected)\n    });\n})\n\nfunction resetPage() {\n    contentDiv.innerHTML = \"\";\n}\n\nfunction styleButtons(selected, arr) {\n    selected.classList.add('currentSelected');\n\n    arr.forEach(element => {\n        element.classList.remove('currentSelected');\n        element.classList.add('notSelected');\n    });\n}\n\nfunction loadPage(selected) {\n    if(selected.innerText == 'Home') {\n        (0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if(selected.innerText == 'Menu') {\n        (0,_meunPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else {\n        (0,_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n}\n\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/meunPage.js":
/*!*************************!*\
  !*** ./src/meunPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\n    const contentDiv = document.getElementById(\"content\");\n    const newDiv = document.createElement('div');\n    const pageHeader = document.createElement(\"h1\");\n    pageHeader.classList.add('title');\n    pageHeader.innerText = \"Menu\";\n    contentDiv.appendChild(pageHeader);\n    const menuDiv = document.createElement('div');\n\n    let menuItems = ['Burger', 'Fries', 'Pizza'];\n    menuItems.forEach(function(e) {\n        const itemDiv = document.createElement('div');\n        const h2 = document.createElement('h2');\n        const itemDesc = document.createElement('p');\n        h2.classList.add('menuItem'); \n        h2.innerText = e;\n        itemDesc.classList.add('itemDesc');\n        itemDesc.textContent = \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ipsam. Quos, enim distinctio necessitatibus assumenda tempore explicabo! Dignissimos, placeat amet, deleniti tempora pariatur sint nemo quam dolore, reprehenderit consequatur suscipit!\"\n        itemDiv.appendChild(h2);\n        itemDiv.appendChild(itemDesc);\n        menuDiv.appendChild(itemDiv);\n    });\n\n    pageHeader.classList.add('title');\n    newDiv.classList.add('contentBody');\n    pageHeader.innerText = \"Menu\";\n    newDiv.appendChild(pageHeader);\n    newDiv.appendChild(menuDiv)\n    contentDiv.appendChild(newDiv);\n}\n\n//# sourceURL=webpack://package.json/./src/meunPage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;