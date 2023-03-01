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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _src_Classes_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Classes/Board */ \"./src/Classes/Board.js\");\n/* harmony import */ var _src_Classes_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Classes/Controls */ \"./src/Classes/Controls.js\");\n\r\n\r\n\r\nconst newGameButton = document.querySelector('.new-game-button');\r\nconst newGamePopup = document.querySelector('.new-game-popup-container');\r\nconst controlButtons = document.querySelector('.control-buttons');\r\n\r\nnewGameButton.addEventListener('click', () => {\r\n  let board = new _src_Classes_Board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  board.createNewGame(20);\r\n  document.addEventListener('keyup', board.setNewCoordinatesForPlayer);\r\n  let controls = new _src_Classes_Controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"](board.movePlayer, board.player)\r\n  newGamePopup.classList.add('inactive');\r\n  controlButtons.classList.add('active');\r\n});\r\n\n\n//# sourceURL=webpack://simple-webpack/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  width: 100vh;\\r\\n  height: 100vh;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n.map {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  width: 850px;\\r\\n  height: 840px;\\r\\n}\\r\\n.one-tile {\\r\\n  display: flex;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border: 1px solid black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.one-tile img {\\r\\n  width: 35px;\\r\\n  height: 35px;\\r\\n}\\r\\n.one-tile:hover {\\r\\n  background-color: gray;\\r\\n}\\r\\n.player {\\r\\n  background-color: green;\\r\\n}\\r\\n.popup-container {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%) scale(0);\\r\\n  transition: 200ms ease-in-out;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 10px;\\r\\n  z-index: 10;\\r\\n  background-color: white;\\r\\n  width: 650px;\\r\\n  max-width: 80%;\\r\\n}\\r\\n.popup-container.active {\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n}\\r\\n.popup-header {\\r\\n  padding: 10px 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid black;\\r\\n}\\r\\n.popup-header .title {\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.popup-header .close-button {\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.organism-list {\\r\\n  padding: 10px 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n#overlay {\\r\\n  position: fixed;\\r\\n  opacity: 0;\\r\\n  transition: 200ms ease-in-out;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  pointer-events: none;\\r\\n}\\r\\n#overlay.active {\\r\\n  opacity: 1;\\r\\n  pointer-events: all;\\r\\n}\\r\\n.organism-tile {\\r\\n  width: 250px;\\r\\n  height: 110px;\\r\\n  cursor: pointer;\\r\\n  padding: 10px 15px;\\r\\n  display: flex;\\r\\n  background-color: #9aa397;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n.organism-row-wrap {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-direction: row;\\r\\n}\\r\\n.organism-list img {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n}\\r\\n.organism-description {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.new-game-popup-container {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n  transition: 200ms ease-in-out;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 10px;\\r\\n  z-index: 10;\\r\\n  background-color: white;\\r\\n  width: 650px;\\r\\n  max-width: 80%;\\r\\n}\\r\\n.new-game-popup-container.inactive {\\r\\n  transform: scale(0);\\r\\n}\\r\\n.new-game-header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 10px 15px;\\r\\n  border-bottom: 1px solid black;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.new-game-button {\\r\\n  background-color: #4caf50;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  padding: 15px 32px;\\r\\n  text-align: center;\\r\\n  font-size: 16px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.new-game-button-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n.text-style {\\r\\n  margin: 5px 5px 5px 5px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n.control-buttons {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 85%;\\r\\n  transform: translate(-50%, -50%) scale(0);\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  width: 170px;\\r\\n  height: 170px;\\r\\n}\\r\\n.control-buttons.active {\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n}\\r\\n\\r\\n.control-button {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://simple-webpack/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://simple-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://simple-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://simple-webpack/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://simple-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Classes/Animal/Animal.js":
/*!**************************************!*\
  !*** ./src/Classes/Animal/Animal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animal)\n/* harmony export */ });\n/* harmony import */ var _Organism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Organism */ \"./src/Classes/Organism.js\");\n/* harmony import */ var _functions_findEmptyFieldAroundTheOrganism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/findEmptyFieldAroundTheOrganism */ \"./src/functions/findEmptyFieldAroundTheOrganism.js\");\n/* harmony import */ var _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plants/HolyOrchid */ \"./src/Classes/plants/HolyOrchid.js\");\n/* harmony import */ var _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plants/BloodHerb */ \"./src/Classes/plants/BloodHerb.js\");\n\r\n\r\n\r\n\r\n\r\nclass Animal extends _Organism__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(grid, x, y) {\r\n    super(grid, x, y);\r\n  }\r\n\r\n  fight = (organismToFightWith) => {\r\n    if (this.strength > organismToFightWith.strength) {\r\n      this.destroy(organismToFightWith);\r\n    } else if (this.strength < organismToFightWith.strength) {\r\n      this.destroy(this);\r\n    }\r\n  };\r\n\r\n  interactWithPlant = (plantToEat) => {\r\n    if (plantToEat instanceof _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      this.strength += 3;\r\n    } else if (plantToEat instanceof _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n      this.destroy(this);\r\n      this.destroy(plantToEat);\r\n    }\r\n    this.destroy(plantToEat);\r\n  };\r\n\r\n  produceNewSpeciesMember = (x, y) => {};\r\n  mate = (organismToMateWith) => {\r\n    const emptyFieldAroundThisOrganism = (0,_functions_findEmptyFieldAroundTheOrganism__WEBPACK_IMPORTED_MODULE_1__.findEmptyFieldAroundOrganism)(\r\n      this.grid,\r\n      this.x,\r\n      this.y,\r\n    );\r\n    const emptyFieldAroundOrganismToMateWith = (0,_functions_findEmptyFieldAroundTheOrganism__WEBPACK_IMPORTED_MODULE_1__.findEmptyFieldAroundOrganism)(\r\n      this.grid,\r\n      organismToMateWith.x,\r\n      organismToMateWith.y,\r\n    );\r\n\r\n    if (!emptyFieldAroundThisOrganism && !emptyFieldAroundOrganismToMateWith) {\r\n      return;\r\n    }\r\n    if (emptyFieldAroundThisOrganism) {\r\n      this.grid[emptyFieldAroundThisOrganism.x][\r\n        emptyFieldAroundThisOrganism.y\r\n      ].currentOrganism = this.produceNewSpeciesMember(\r\n        emptyFieldAroundThisOrganism.x,\r\n        emptyFieldAroundThisOrganism.y,\r\n      );\r\n    } else if (emptyFieldAroundOrganismToMateWith) {\r\n      this.grid[emptyFieldAroundOrganismToMateWith.x][\r\n        emptyFieldAroundOrganismToMateWith.y\r\n      ].currentOrganism = organismToMateWith.produceNewSpeciesMember(\r\n        emptyFieldAroundOrganismToMateWith.x,\r\n        emptyFieldAroundOrganismToMateWith.y,\r\n      );\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Animal.js?");

/***/ }),

/***/ "./src/Classes/Animal/Fox.js":
/*!***********************************!*\
  !*** ./src/Classes/Animal/Fox.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fox)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Classes/Animal/Player.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Wolf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wolf */ \"./src/Classes/Animal/Wolf.js\");\n/* harmony import */ var _functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/giveWaspChanceToFlee */ \"./src/functions/giveWaspChanceToFlee.js\");\n/* harmony import */ var _Wasp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _Scarab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Scarab */ \"./src/Classes/Animal/Scarab.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Fox extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 4;\r\n  initiative = 7;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/a/ad/Fox.gif';\r\n  }\r\n\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    }\r\n    if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (\r\n      organismToInteractWith instanceof _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ||\r\n      organismToInteractWith instanceof _Wolf__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ||\r\n      organismToInteractWith instanceof _Scarab__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\r\n    ) {\r\n      return;\r\n    } else if (organismToInteractWith instanceof _Wasp__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\r\n      if ((0,_functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()) {\r\n        this.fight(organismToInteractWith);\r\n      }\r\n    } else if (organismToInteractWith instanceof Fox) {\r\n      this.mate(organismToInteractWith);\r\n    } else {\r\n      this.fight(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Fox(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Fox.js?");

/***/ }),

/***/ "./src/Classes/Animal/Player.js":
/*!**************************************!*\
  !*** ./src/Classes/Animal/Player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Wasp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/giveWaspChanceToFlee */ \"./src/functions/giveWaspChanceToFlee.js\");\n\r\n\r\n\r\n\r\n\r\nclass Player extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  x = Math.floor(Math.random() * 19);\r\n  y = Math.floor(Math.random() * 19);\r\n  strength = 5;\r\n  initiative = 4;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png';\r\n  }\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    } else if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Wasp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      if ((0,_functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\r\n        this.fight(organismToInteractWith);\r\n      }\r\n    } else {\r\n      this.fight(organismToInteractWith);\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Player.js?");

/***/ }),

/***/ "./src/Classes/Animal/Scarab.js":
/*!**************************************!*\
  !*** ./src/Classes/Animal/Scarab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scarab)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Wasp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/giveWaspChanceToFlee */ \"./src/functions/giveWaspChanceToFlee.js\");\n\r\n\r\n\r\n\r\n\r\nclass Scarab extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 2;\r\n  initiative = 1;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src =\r\n      'https://www.tibia-wiki.net/images/9/9a/Burrowing_Beetle.gif';\r\n  }\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    } else if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Wasp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      if ((0,_functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\r\n        this.fight(organismToInteractWith);\r\n      }\r\n    } else if (organismToInteractWith instanceof Scarab) {\r\n      this.mate(organismToInteractWith);\r\n    } else {\r\n      this.fight(organismToInteractWith);\r\n    }\r\n  };\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Scarab(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Scarab.js?");

/***/ }),

/***/ "./src/Classes/Animal/Sheep.js":
/*!*************************************!*\
  !*** ./src/Classes/Animal/Sheep.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sheep)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Wasp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/giveWaspChanceToFlee */ \"./src/functions/giveWaspChanceToFlee.js\");\n\r\n\r\n\r\n\r\n\r\nclass Sheep extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 3;\r\n  initiative = 4;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/2/2b/Sheep.gif';\r\n  }\r\n\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    }\r\n    if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Wasp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      if ((0,_functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\r\n        this.fight(organismToInteractWith);\r\n      }\r\n    } else if (organismToInteractWith instanceof Sheep) {\r\n      this.mate(organismToInteractWith);\r\n    } else {\r\n      this.fight(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Sheep(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Sheep.js?");

/***/ }),

/***/ "./src/Classes/Animal/Wasp.js":
/*!************************************!*\
  !*** ./src/Classes/Animal/Wasp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wasp)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Scarab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scarab */ \"./src/Classes/Animal/Scarab.js\");\n\r\n\r\n\r\n\r\nclass Wasp extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 4;\r\n  initiative = 4;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/d/d7/Wasp.gif';\r\n  }\r\n\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    }\r\n    if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof Wasp) {\r\n      this.mate(organismToInteractWith);\r\n      return;\r\n    } else if (organismToInteractWith instanceof _Scarab__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      return;\r\n    }\r\n    this.fight(organismToInteractWith);\r\n  };\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Wasp(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Wasp.js?");

/***/ }),

/***/ "./src/Classes/Animal/Wolf.js":
/*!************************************!*\
  !*** ./src/Classes/Animal/Wolf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wolf)\n/* harmony export */ });\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ \"./src/Classes/Animal/Animal.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _Wasp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/giveWaspChanceToFlee */ \"./src/functions/giveWaspChanceToFlee.js\");\n\r\n\r\n\r\n\r\n\r\nclass Wolf extends _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 9;\r\n  initiative = 5;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.x = x;\r\n    this.y = y;\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/8/82/Wolf.gif';\r\n  }\r\n\r\n  interaction = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n      this.interactWithAnimal(organismToInteractWith);\r\n    }\r\n    if (organismToInteractWith instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n      this.interactWithPlant(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  interactWithAnimal = (organismToInteractWith) => {\r\n    if (organismToInteractWith instanceof _Wasp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      if ((0,_functions_giveWaspChanceToFlee__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()) {\r\n        this.fight(organismToInteractWith);\r\n      }\r\n    } else if (organismToInteractWith instanceof Wolf) {\r\n      this.mate(organismToInteractWith);\r\n    } else {\r\n      this.fight(organismToInteractWith);\r\n    }\r\n  };\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Wolf(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Animal/Wolf.js?");

/***/ }),

/***/ "./src/Classes/Board.js":
/*!******************************!*\
  !*** ./src/Classes/Board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _NewOrganismPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewOrganismPopup */ \"./src/Classes/NewOrganismPopup.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ \"./src/Classes/Tile.js\");\n/* harmony import */ var _plants_Plant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plants/Plant */ \"./src/Classes/plants/Plant.js\");\n/* harmony import */ var _functions_generateNewCoordinate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/generateNewCoordinate */ \"./src/functions/generateNewCoordinate.js\");\n/* harmony import */ var _functions_checkIfOrganismIsOutsideOfMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/checkIfOrganismIsOutsideOfMap */ \"./src/functions/checkIfOrganismIsOutsideOfMap.js\");\n/* harmony import */ var _Organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Organism */ \"./src/Classes/Organism.js\");\n/* harmony import */ var _Animal_Wolf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Animal/Wolf */ \"./src/Classes/Animal/Wolf.js\");\n/* harmony import */ var _Animal_Scarab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Animal/Scarab */ \"./src/Classes/Animal/Scarab.js\");\n/* harmony import */ var _Animal_Sheep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Animal/Sheep */ \"./src/Classes/Animal/Sheep.js\");\n/* harmony import */ var _Animal_Fox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Animal/Fox */ \"./src/Classes/Animal/Fox.js\");\n/* harmony import */ var _Animal_Wasp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Animal/Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _plants_Grass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plants/Grass */ \"./src/Classes/plants/Grass.js\");\n/* harmony import */ var _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plants/HolyOrchid */ \"./src/Classes/plants/HolyOrchid.js\");\n/* harmony import */ var _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plants/BloodHerb */ \"./src/Classes/plants/BloodHerb.js\");\n/* harmony import */ var _plants_Mandrake__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plants/Mandrake */ \"./src/Classes/plants/Mandrake.js\");\n/* harmony import */ var _Animal_Player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Animal/Player */ \"./src/Classes/Animal/Player.js\");\n/* harmony import */ var _functions_getOrganismRotation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../functions/getOrganismRotation */ \"./src/functions/getOrganismRotation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Board {\r\n  map = document.querySelector('.map');\r\n  player = null;\r\n  grid = null;\r\n  constructor() {\r\n    this.initialize();\r\n  }\r\n\r\n  createGrid = (m, n) => {\r\n    return [...Array(m)].map((e) => Array(n));\r\n  };\r\n\r\n  initialize = () => {\r\n    this.newOrganismPopup = new _NewOrganismPopup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\r\n    this.grid = this.createGrid(20, 20);\r\n    for (let row = 0; row < this.grid.length; row++) {\r\n      for (let column = 0; column < this.grid[row].length; column++) {\r\n        const tile = new _Tile__WEBPACK_IMPORTED_MODULE_1__[\"default\"](row, column, this.newOrganismPopup, this);\r\n        this.grid[row][column] = tile;\r\n        this.map.append(tile.tileElement);\r\n      }\r\n    }\r\n  };\r\n  refresh = () => {\r\n    for (let row = 0; row < this.grid.length; row++) {\r\n      for (let column = 0; column < this.grid[row].length; column++) {\r\n        const tile = this.grid[row][column];\r\n        if (tile.currentOrganism !== null) {\r\n          const icon = tile.currentOrganism.icon;\r\n          tile.tileElement.innerHTML = '';\r\n          tile.tileElement.append(icon);\r\n        } else tile.tileElement.innerHTML = '';\r\n      }\r\n    }\r\n  };\r\n  setOrganism = (organism) => {\r\n    const tile = this.grid[organism.x][organism.y];\r\n    tile.currentOrganism = organism;\r\n  };\r\n\r\n  sortOtherOrganismsForRoundQueue = () => {\r\n    let queueArr = [];\r\n    for (let row = 0; row < this.grid.length; row++) {\r\n      for (let column = 0; column < this.grid[row].length; column++) {\r\n        const tile = this.grid[row][column];\r\n        const organismType = tile.currentOrganism;\r\n        if (organismType) {\r\n          queueArr.push(organismType);\r\n        }\r\n      }\r\n    }\r\n    return queueArr.sort((a, b) => b.initiative - a.initiative);\r\n  };\r\n\r\n  moveOrganismsBeforePlayerMovement = () => {\r\n    const queuedArr = this.sortOtherOrganismsForRoundQueue();\r\n    const queuedArrBeforePlayer = queuedArr.slice(\r\n      0,\r\n      queuedArr.indexOf(this.player),\r\n    );\r\n    this.moveAllOrganisms(queuedArrBeforePlayer);\r\n  };\r\n\r\n  moveOrganismsAfterPlayerMovement = () => {\r\n    const queuedArr = this.sortOtherOrganismsForRoundQueue();\r\n    const queuedArrAfterPlayer = queuedArr.slice(\r\n      queuedArr.indexOf(this.player) + 1,\r\n    );\r\n    this.moveAllOrganisms(queuedArrAfterPlayer);\r\n  };\r\n\r\n  moveAllOrganisms = (arrOfOrganisms) => {\r\n    arrOfOrganisms.forEach(this.moveOneOrganism);\r\n  };\r\n\r\n  moveOneOrganism = (organism) => {\r\n    if (organism instanceof _plants_Plant__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n      organism.spread();\r\n      return;\r\n    }\r\n    const currentX = organism.x;\r\n    const currentY = organism.y;\r\n    const currentTile = this.grid[currentX][currentY];\r\n    const changeXBy = (0,_functions_generateNewCoordinate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(organism);\r\n    const changeYBy = (0,_functions_generateNewCoordinate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(organism);\r\n    let newX = organism.x + changeXBy;\r\n    let newY = organism.y + changeYBy;\r\n    const checkOrganismCoordinates = (0,_functions_checkIfOrganismIsOutsideOfMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n      newX,\r\n      currentX,\r\n      newY,\r\n      currentY,\r\n    );\r\n    const newTile =\r\n      this.grid[checkOrganismCoordinates.newX][checkOrganismCoordinates.newY];\r\n    if (newTile === currentTile) {\r\n      return;\r\n    }\r\n    organism.interaction(newTile.currentOrganism);\r\n    if (\r\n      currentTile.currentOrganism !== null &&\r\n      newTile.currentOrganism === null\r\n    ) {\r\n      organism.x = checkOrganismCoordinates.newX;\r\n      organism.y = checkOrganismCoordinates.newY;\r\n      currentTile.currentOrganism = null;\r\n      newTile.currentOrganism = organism;\r\n      this.rotateOrganism(\r\n        checkOrganismCoordinates.newX,\r\n        currentX,\r\n        checkOrganismCoordinates.newY,\r\n        currentY,\r\n        organism,\r\n      );\r\n    }\r\n  };\r\n\r\n  rotateOrganism = (currentX, newX, currentY, newY, organism) => {\r\n    const icon = organism.icon;\r\n    const howXChanged = currentX - newX;\r\n    const howYChanged = currentY - newY;\r\n    const rotation = (0,_functions_getOrganismRotation__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(howXChanged, howYChanged)\r\n    icon.style.transform = rotation;\r\n  };\r\n  generateCoordinates = () => {\r\n    return Math.floor(Math.random() * 19);\r\n  };\r\n\r\n  randomizeOrganismForNewGame = () => {\r\n    let x = this.generateCoordinates();\r\n    let y = this.generateCoordinates();\r\n    while (this.grid[x][y].currentOrganism instanceof _Organism__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) {\r\n      x = this.generateCoordinates();\r\n      y = this.generateCoordinates();\r\n    }\r\n    const randomNumberToRollOrganism = Math.floor(Math.random() * 9);\r\n    switch (randomNumberToRollOrganism) {\r\n      case 0:\r\n        return new _Animal_Wolf__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.grid, x, y);\r\n      case 1:\r\n        return new _Animal_Scarab__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.grid, x, y);\r\n      case 2:\r\n        return new _Animal_Sheep__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.grid, x, y);\r\n      case 3:\r\n        return new _Animal_Fox__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this.grid, x, y);\r\n      case 4:\r\n        return new _Animal_Wasp__WEBPACK_IMPORTED_MODULE_10__[\"default\"](this.grid, x, y);\r\n      case 5:\r\n        return new _plants_Grass__WEBPACK_IMPORTED_MODULE_11__[\"default\"](this.grid, x, y);\r\n      case 6:\r\n        return new _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_12__[\"default\"](this.grid, x, y);\r\n      case 7:\r\n        return new _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_13__[\"default\"](this.grid, x, y);\r\n      case 8:\r\n        return new _plants_Mandrake__WEBPACK_IMPORTED_MODULE_14__[\"default\"](this.grid, x, y);\r\n    }\r\n  };\r\n\r\n  createNewGame = (amountOfOrganisms) => {\r\n    if (amountOfOrganisms > 400) {\r\n      alert('Too many organisms');\r\n      return;\r\n    }\r\n    this.player = new _Animal_Player__WEBPACK_IMPORTED_MODULE_15__[\"default\"](\r\n      this.grid,\r\n      this.generateCoordinates(),\r\n      this.generateCoordinates(),\r\n    );\r\n    this.setOrganism(this.player);\r\n    for (let i = 0; i <= amountOfOrganisms; i++) {\r\n      const organism = this.randomizeOrganismForNewGame();\r\n      this.setOrganism(organism);\r\n    }\r\n    this.refresh();\r\n  };\r\n\r\n  gameOver = () => {\r\n    this.player = null;\r\n    this.refresh();\r\n    document.removeEventListener('keyup', this.setNewCoordinatesForPlayer);\r\n    setInterval(this.gameAfterPlayerDied, 100);\r\n  };\r\n\r\n  gameAfterPlayerDied = () => {\r\n    const queuedArr = this.sortOtherOrganismsForRoundQueue();\r\n    this.moveAllOrganisms(queuedArr);\r\n    this.refresh();\r\n  };\r\n\r\n  setNewCoordinatesForPlayer = (e) => {\r\n    const currentX = this.player.x;\r\n    const currentY = this.player.y;\r\n    const tileBeforeMovement = this.grid[currentX][currentY];\r\n    if (tileBeforeMovement.currentOrganism === null) {\r\n      this.gameOver();\r\n      return;\r\n    }\r\n    switch (e.keyCode) {\r\n      case numPad.up:\r\n        this.movePlayer(this.player.x - 1, this.player.y);\r\n        break;\r\n      case numPad.left:\r\n        this.movePlayer(this.player.x, this.player.y - 1);\r\n        break;\r\n      case numPad.down:\r\n        this.movePlayer(this.player.x + 1, this.player.y);\r\n        break;\r\n      case numPad.right:\r\n        this.movePlayer(this.player.x, this.player.y + 1);\r\n        break;\r\n      case numPad.upLeft:\r\n        this.movePlayer(this.player.x - 1, this.player.y - 1);\r\n        break;\r\n      case numPad.upRight:\r\n        this.movePlayer(this.player.x - 1, this.player.y + 1);\r\n        break;\r\n      case numPad.downLeft:\r\n        this.movePlayer(this.player.x + 1, this.player.y - 1);\r\n        break;\r\n      case numPad.downRight:\r\n        this.movePlayer(this.player.x + 1, this.player.y + 1);\r\n        break;\r\n      case numPad.stay:\r\n        this.movePlayer(this.player.x, this.player.y);\r\n        break;\r\n    }\r\n  };\r\n  movePlayer = (newX, newY) => {\r\n    const currentX = this.player.x;\r\n    const currentY = this.player.y;\r\n    const tileBeforeMovement = this.grid[currentX][currentY];\r\n    this.moveOrganismsBeforePlayerMovement();\r\n    if (tileBeforeMovement.currentOrganism === null) {\r\n      this.gameOver();\r\n      return;\r\n    }\r\n    const checkOrganismCoordinates = (0,_functions_checkIfOrganismIsOutsideOfMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n      newX,\r\n      currentX,\r\n      newY,\r\n      currentY,\r\n    );\r\n    const newTile =\r\n      this.grid[checkOrganismCoordinates.newX][checkOrganismCoordinates.newY];\r\n    const currentTile = this.grid[currentX][currentY];\r\n    this.player.interaction(newTile.currentOrganism);\r\n    if (tileBeforeMovement.currentOrganism === null) {\r\n      this.gameOver();\r\n      return;\r\n    }\r\n    if (\r\n      newTile.currentOrganism === null &&\r\n      currentTile.currentOrganism !== null\r\n    ) {\r\n      this.player.x = checkOrganismCoordinates.newX;\r\n      this.player.y = checkOrganismCoordinates.newY;\r\n      tileBeforeMovement.currentOrganism = null;\r\n      this.setOrganism(this.player);\r\n      this.rotateOrganism(\r\n        checkOrganismCoordinates.newX,\r\n        currentX,\r\n        checkOrganismCoordinates.newY,\r\n        currentY,\r\n        this.player,\r\n      );\r\n    }\r\n    this.moveOrganismsAfterPlayerMovement();\r\n    this.refresh();\r\n  };\r\n\r\n}\r\nconst numPad = {\r\n  up: 104,\r\n  left: 100,\r\n  down: 98,\r\n  right: 102,\r\n  upLeft: 103,\r\n  upRight: 105,\r\n  downLeft: 97,\r\n  downRight: 99,\r\n  stay: 101,\r\n};\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Board.js?");

/***/ }),

/***/ "./src/Classes/Controls.js":
/*!*********************************!*\
  !*** ./src/Classes/Controls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controls)\n/* harmony export */ });\nclass Controls {\r\n    constructor(onMove, player) {\r\n        this.upLeftButton = document.querySelector('.up-left-button');\r\n        this.upButton = document.querySelector('.up-button');\r\n        this.upRightButton = document.querySelector('.up-right-button');\r\n        this.leftButton = document.querySelector('.left-button');\r\n        this.stayButton = document.querySelector('.stay-button');\r\n        this.rightButton = document.querySelector('.right-button');\r\n        this.downLeftButton = document.querySelector('.down-left-button');\r\n        this.downButton = document.querySelector('.down-button');\r\n        this.downRightButton = document.querySelector('.down-right-button');\r\n        this.upLeftButton.addEventListener('click', () => {\r\n            onMove(player.x - 1, player.y - 1);\r\n        });\r\n        this.upButton.addEventListener('click', () => {\r\n            onMove(player.x - 1, player.y);\r\n        });\r\n        this.upRightButton.addEventListener('click', () => {\r\n            onMove(player.x - 1, player.y + 1);\r\n        });\r\n        this.leftButton.addEventListener('click', () => {\r\n            onMove(player.x, player.y - 1);\r\n        });\r\n        this.stayButton.addEventListener('click', () => {\r\n            onMove(player.x, player.y);\r\n        });\r\n        this.rightButton.addEventListener('click', () => {\r\n            onMove(player.x, player.y + 1);\r\n        });\r\n        this.downLeftButton.addEventListener('click', () => {\r\n            onMove(player.x + 1, player.y - 1);\r\n        });\r\n        this.downButton.addEventListener('click', () => {\r\n            onMove(player.x + 1, player.y);\r\n        });\r\n        this.downRightButton.addEventListener('click', () => {\r\n            onMove(player.x + 1, player.y + 1);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Controls.js?");

/***/ }),

/***/ "./src/Classes/NewOrganismPopup.js":
/*!*****************************************!*\
  !*** ./src/Classes/NewOrganismPopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewOrganismPopup)\n/* harmony export */ });\nclass NewOrganismPopup {\r\n  constructor(board) {\r\n    this.board = board;\r\n    this.popup = document.querySelector('.popup-container');\r\n    this.wolfTile = document.querySelector('.wolf-tile');\r\n    this.scarabTile = document.querySelector('.scarab-tile');\r\n    this.sheepTile = document.querySelector('.sheep-tile');\r\n    this.foxTile = document.querySelector('.fox-tile');\r\n    this.waspTile = document.querySelector('.wasp-tile');\r\n    this.grassTile = document.querySelector('.grass-tile');\r\n    this.holyOrchidTile = document.querySelector('.holy-orchid-tile');\r\n    this.bloodHerbTile = document.querySelector('.blood-herb-tile');\r\n    this.mandrakeTile = document.querySelector('.mandrake-tile');\r\n    this.wolfTile.addEventListener('click', this.createWolf);\r\n    this.scarabTile.addEventListener('click', this.createScarab);\r\n    this.sheepTile.addEventListener('click', this.createSheep);\r\n    this.foxTile.addEventListener('click', this.createFox);\r\n    this.waspTile.addEventListener('click', this.createWasp);\r\n    this.grassTile.addEventListener('click', this.createGrass);\r\n    this.holyOrchidTile.addEventListener('click', this.createHolyOrchid);\r\n    this.bloodHerbTile.addEventListener('click', this.createBloodHerb);\r\n    this.mandrakeTile.addEventListener('click', this.createMandrake);\r\n    this.overlay = document.getElementById('overlay');\r\n  }\r\n  addOrganismOnClick = (organism) => {\r\n    if (this.tile.currentOrganism) {\r\n      alert('This tile is occupied by another organism');\r\n      return;\r\n    }\r\n    this.tile.currentOrganism = organism;\r\n    this.closeOrganismList();\r\n    this.board.refresh();\r\n  };\r\n  createWolf = () => {\r\n    this.addOrganismOnClick(this.tile.createWolfOnClick());\r\n  };\r\n  createScarab = () => {\r\n    this.addOrganismOnClick(this.tile.createScarabOnClick());\r\n  };\r\n  createSheep = () => {\r\n    this.addOrganismOnClick(this.tile.createSheepOnClick());\r\n  };\r\n  createFox = () => {\r\n    this.addOrganismOnClick(this.tile.createFoxOnClick());\r\n  };\r\n  createWasp = () => {\r\n    this.addOrganismOnClick(this.tile.createWaspOnClick());\r\n  };\r\n  createGrass = () => {\r\n    this.addOrganismOnClick(this.tile.createGrassOnClick());\r\n  };\r\n  createHolyOrchid = () => {\r\n    this.addOrganismOnClick(this.tile.createHolyOrchidOnClick());\r\n  };\r\n  createBloodHerb = () => {\r\n    this.addOrganismOnClick(this.tile.createBloodHerbOnClick());\r\n  };\r\n  createMandrake = () => {\r\n    this.addOrganismOnClick(this.tile.createMandrakeOnClick());\r\n  };\r\n  openOrganismList(tile) {\r\n    this.tile = tile;\r\n    this.popup.classList.add('active');\r\n    this.overlay.classList.add('active');\r\n  }\r\n  closeOrganismList() {\r\n    this.popup.classList.remove('active');\r\n    this.overlay.classList.remove('active');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/NewOrganismPopup.js?");

/***/ }),

/***/ "./src/Classes/Organism.js":
/*!*********************************!*\
  !*** ./src/Classes/Organism.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Organism)\n/* harmony export */ });\nclass Organism {\r\n  constructor(grid, x, y) {\r\n    this.grid = grid;\r\n    this.x = x;\r\n    this.y = y;\r\n  }\r\n\r\n  destroy = (organismToDestroy) => {\r\n    const organismGrid = organismToDestroy.grid;\r\n    const tile = organismGrid[organismToDestroy.x][organismToDestroy.y];\r\n    tile.currentOrganism = null;\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Organism.js?");

/***/ }),

/***/ "./src/Classes/Tile.js":
/*!*****************************!*\
  !*** ./src/Classes/Tile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tile)\n/* harmony export */ });\n/* harmony import */ var _Animal_Wolf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal/Wolf */ \"./src/Classes/Animal/Wolf.js\");\n/* harmony import */ var _Animal_Scarab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animal/Scarab */ \"./src/Classes/Animal/Scarab.js\");\n/* harmony import */ var _Animal_Sheep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animal/Sheep */ \"./src/Classes/Animal/Sheep.js\");\n/* harmony import */ var _Animal_Fox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animal/Fox */ \"./src/Classes/Animal/Fox.js\");\n/* harmony import */ var _Animal_Wasp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Animal/Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _plants_Grass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plants/Grass */ \"./src/Classes/plants/Grass.js\");\n/* harmony import */ var _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plants/HolyOrchid */ \"./src/Classes/plants/HolyOrchid.js\");\n/* harmony import */ var _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plants/BloodHerb */ \"./src/Classes/plants/BloodHerb.js\");\n/* harmony import */ var _plants_Mandrake__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plants/Mandrake */ \"./src/Classes/plants/Mandrake.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Tile {\r\n  currentOrganism = null;\r\n  constructor(x, y, newOrganismPopup, board) {\r\n    this.board = board;\r\n    this.newOrganismPopup = newOrganismPopup;\r\n    this.x = x;\r\n    this.y = y;\r\n    this.tileElement = document.createElement('div');\r\n    this.tileElement.classList.add('one-tile');\r\n    this.tileElement.addEventListener('click', () => {\r\n      this.newOrganismPopup.openOrganismList(this);\r\n    });\r\n    this.closeOrganismListButton = document.querySelector('.close-button');\r\n    this.closeOrganismListButton.addEventListener('click', () => {\r\n      this.newOrganismPopup.closeOrganismList();\r\n    });\r\n  }\r\n  createWolfOnClick = () => {\r\n    return new _Animal_Wolf__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createScarabOnClick = () => {\r\n    return new _Animal_Scarab__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createSheepOnClick = () => {\r\n    return new _Animal_Sheep__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createFoxOnClick = () => {\r\n    return new _Animal_Fox__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createWaspOnClick = () => {\r\n    return new _Animal_Wasp__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createGrassOnClick = () => {\r\n    return new _plants_Grass__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createHolyOrchidOnClick = () => {\r\n    return new _plants_HolyOrchid__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createBloodHerbOnClick = () => {\r\n    return new _plants_BloodHerb__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n  createMandrakeOnClick = () => {\r\n    return new _plants_Mandrake__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.board.grid, this.x, this.y);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/Tile.js?");

/***/ }),

/***/ "./src/Classes/plants/BloodHerb.js":
/*!*****************************************!*\
  !*** ./src/Classes/plants/BloodHerb.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BloodHerb)\n/* harmony export */ });\n/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ \"./src/Classes/plants/Plant.js\");\n\r\n\r\nclass BloodHerb extends _Plant__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 0;\r\n  initiative = 0;\r\n  chanceToSpread = 1;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/d/d9/Blood_Herb.gif';\r\n  }\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new BloodHerb(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/plants/BloodHerb.js?");

/***/ }),

/***/ "./src/Classes/plants/Grass.js":
/*!*************************************!*\
  !*** ./src/Classes/plants/Grass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grass)\n/* harmony export */ });\n/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ \"./src/Classes/plants/Plant.js\");\n\r\n\r\nclass Grass extends _Plant__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 0;\r\n  initiative = 0;\r\n  chanceToSpread = 1;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/8/86/Goat_Grass.gif';\r\n  }\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Grass(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/plants/Grass.js?");

/***/ }),

/***/ "./src/Classes/plants/HolyOrchid.js":
/*!******************************************!*\
  !*** ./src/Classes/plants/HolyOrchid.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HolyOrchid)\n/* harmony export */ });\n/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ \"./src/Classes/plants/Plant.js\");\n\r\n\r\nclass HolyOrchid extends _Plant__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 0;\r\n  initiative = 0;\r\n  chanceToSpread = 1;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/c/cb/Holy_Orchid.gif';\r\n  }\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new HolyOrchid(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/plants/HolyOrchid.js?");

/***/ }),

/***/ "./src/Classes/plants/Mandrake.js":
/*!****************************************!*\
  !*** ./src/Classes/plants/Mandrake.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mandrake)\n/* harmony export */ });\n/* harmony import */ var _Plant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plant */ \"./src/Classes/plants/Plant.js\");\n\r\n\r\nclass Mandrake extends _Plant__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  strength = 0;\r\n  initiative = 0;\r\n  chanceToSpread = 3;\r\n  constructor(grid, x, y, icon) {\r\n    super(grid, x, y);\r\n    this.icon = document.createElement('IMG');\r\n    this.icon.src = 'https://www.tibia-wiki.net/images/1/12/Mandrake.gif';\r\n  }\r\n\r\n  produceNewSpeciesMember = (x, y) => {\r\n    return new Mandrake(this.grid, x, y, this.icon);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/plants/Mandrake.js?");

/***/ }),

/***/ "./src/Classes/plants/Plant.js":
/*!*************************************!*\
  !*** ./src/Classes/plants/Plant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Plant)\n/* harmony export */ });\n/* harmony import */ var _functions_findEmptyFieldAroundTheOrganism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/findEmptyFieldAroundTheOrganism */ \"./src/functions/findEmptyFieldAroundTheOrganism.js\");\n/* harmony import */ var _Organism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Organism */ \"./src/Classes/Organism.js\");\n/* harmony import */ var _functions_generateRandomNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/generateRandomNumber */ \"./src/functions/generateRandomNumber.js\");\n\r\n\r\n\r\n\r\nfunction randomizeIfPlantWillSpread(plantToSpread) {\r\n  const randomNumber = (0,_functions_generateRandomNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1, 10);\r\n  if (plantToSpread.chanceToSpread === 3) {\r\n    return randomNumber <= 3;\r\n  }\r\n  return randomNumber <= 1;\r\n}\r\n\r\nclass Plant extends _Organism__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n  constructor(grid, x, y) {\r\n    super(grid, x, y);\r\n  }\r\n  spread = () => {\r\n    if (randomizeIfPlantWillSpread(this)) {\r\n      const emptyFieldAroundOrganism = (0,_functions_findEmptyFieldAroundTheOrganism__WEBPACK_IMPORTED_MODULE_0__.findEmptyFieldAroundOrganism)(\r\n        this.grid,\r\n        this.x,\r\n        this.y,\r\n      );\r\n      if (!emptyFieldAroundOrganism) {\r\n        return;\r\n      }\r\n      this.grid[emptyFieldAroundOrganism.x][\r\n        emptyFieldAroundOrganism.y\r\n      ].currentOrganism = this.produceNewSpeciesMember(\r\n        emptyFieldAroundOrganism.x,\r\n        emptyFieldAroundOrganism.y,\r\n      );\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/Classes/plants/Plant.js?");

/***/ }),

/***/ "./src/functions/checkIfOrganismIsOutsideOfMap.js":
/*!********************************************************!*\
  !*** ./src/functions/checkIfOrganismIsOutsideOfMap.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfOrganismIsOutsideOfMap)\n/* harmony export */ });\nfunction checkIfOrganismIsOutsideOfMap(\r\n  newX,\r\n  currentX,\r\n  newY,\r\n  currentY,\r\n) {\r\n  if (newX > 19 || newX < 0) {\r\n    newX = currentX;\r\n  }\r\n  if (newY > 19 || newY < 0) {\r\n    newY = currentY;\r\n  }\r\n  return {\r\n    newX,\r\n    newY,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/functions/checkIfOrganismIsOutsideOfMap.js?");

/***/ }),

/***/ "./src/functions/findEmptyFieldAroundTheOrganism.js":
/*!**********************************************************!*\
  !*** ./src/functions/findEmptyFieldAroundTheOrganism.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findEmptyFieldAroundOrganism\": () => (/* binding */ findEmptyFieldAroundOrganism)\n/* harmony export */ });\nfunction findEmptyFieldAroundOrganism(grid, x, y) {\r\n  if (x + 1 <= 19 && grid[x + 1][y].currentOrganism === null) {\r\n    return {\r\n      x: x + 1,\r\n      y,\r\n    };\r\n  } else if (x - 1 >= 0 && grid[x - 1][y].currentOrganism === null) {\r\n    return {\r\n      x: x - 1,\r\n      y,\r\n    };\r\n  } else if (y + 1 <= 19 && grid[x][y + 1].currentOrganism === null) {\r\n    return {\r\n      x,\r\n      y: y + 1,\r\n    };\r\n  } else if (y - 1 >= 0 && grid[x][y - 1].currentOrganism === null) {\r\n    return {\r\n      x,\r\n      y: y - 1,\r\n    };\r\n  }\r\n  return null;\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/functions/findEmptyFieldAroundTheOrganism.js?");

/***/ }),

/***/ "./src/functions/generateNewCoordinate.js":
/*!************************************************!*\
  !*** ./src/functions/generateNewCoordinate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateNewCoordinate)\n/* harmony export */ });\n/* harmony import */ var _generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRandomNumber */ \"./src/functions/generateRandomNumber.js\");\n/* harmony import */ var _Classes_Animal_Wasp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Classes/Animal/Wasp */ \"./src/Classes/Animal/Wasp.js\");\n/* harmony import */ var _Classes_Animal_Scarab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Classes/Animal/Scarab */ \"./src/Classes/Animal/Scarab.js\");\n\r\n\r\n\r\n\r\nfunction willTortoiseMoveOrNot() {\r\n  const randomNumber = (0,_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 3);\r\n  return randomNumber > 2;\r\n}\r\n\r\nfunction generateNewCoordinate(organism) {\r\n  if (organism instanceof _Classes_Animal_Wasp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n    return (0,_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-2, 2);\r\n  } else if (organism instanceof _Classes_Animal_Scarab__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n    if (willTortoiseMoveOrNot()) {\r\n      return (0,_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1, 1);\r\n    }\r\n    return 0;\r\n  }\r\n  return (0,_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(-1, 1);\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/functions/generateNewCoordinate.js?");

/***/ }),

/***/ "./src/functions/generateRandomNumber.js":
/*!***********************************************!*\
  !*** ./src/functions/generateRandomNumber.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateRandomNumber)\n/* harmony export */ });\nfunction generateRandomNumber(min, max) {\r\n  min = Math.ceil(min);\r\n  max = Math.floor(max);\r\n  return Math.floor(Math.random() * (max - min + 1) + min);\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/functions/generateRandomNumber.js?");

/***/ }),

/***/ "./src/functions/getOrganismRotation.js":
/*!**********************************************!*\
  !*** ./src/functions/getOrganismRotation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOrganismRotation)\n/* harmony export */ });\nfunction getOrganismRotation (howXChanged, howYChanged) {\r\n    if (howXChanged === -1 && howYChanged === 0) {\r\n        return 'rotate(-0.5turn)';\r\n    } else if (howXChanged === 0 && howYChanged <= -1) {\r\n        return 'rotate(0.25turn)';\r\n    } else if (howXChanged >= 1 && howYChanged === 0) {\r\n        return 'rotate(0turn)';\r\n    } else if (howXChanged === 0 && howYChanged >= 1) {\r\n        return 'rotate(0.75turn)';\r\n    } else if (howXChanged <= -1 && howYChanged <= -1) {\r\n        return 'rotate(0.375turn)';\r\n    } else if (howXChanged <= -1 && howYChanged >= 1) {\r\n        return 'rotate(-0.375turn)';\r\n    } else if (howXChanged >= 1 && howYChanged <= -1) {\r\n        return 'rotate(0.125turn)';\r\n    } else if (howXChanged >= 1 && howYChanged >= 1) {\r\n        return 'rotate(-0.125turn)';\r\n    }\r\n}\n\n//# sourceURL=webpack://simple-webpack/./src/functions/getOrganismRotation.js?");

/***/ }),

/***/ "./src/functions/giveWaspChanceToFlee.js":
/*!***********************************************!*\
  !*** ./src/functions/giveWaspChanceToFlee.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ giveWaspChanceToFlee)\n/* harmony export */ });\n/* harmony import */ var _generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRandomNumber */ \"./src/functions/generateRandomNumber.js\");\n\r\n\r\nfunction giveWaspChanceToFlee() {\r\n  const randomNumber = (0,_generateRandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 1);\r\n  return randomNumber < 1;\r\n}\r\n\n\n//# sourceURL=webpack://simple-webpack/./src/functions/giveWaspChanceToFlee.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;