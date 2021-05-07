/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_PreloadScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/PreloadScene */ \"./src/scenes/PreloadScene.js\");\n/* harmony import */ var _scenes_PlayScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/PlayScene */ \"./src/scenes/PlayScene.js\");\n\n\n\nvar WIDTH = 800;\nvar HEIGHT = 600;\nvar BIRD_POSITION = {\n  x: WIDTH / 10,\n  y: HEIGHT / 2\n};\nvar SHARED_CONFIG = {\n  width: WIDTH,\n  height: HEIGHT,\n  startPosition: BIRD_POSITION\n};\nvar Scenes = [_scenes_PreloadScene__WEBPACK_IMPORTED_MODULE_1__.default, _scenes_PlayScene__WEBPACK_IMPORTED_MODULE_2__.default];\n\nvar createScene = function createScene(Scene) {\n  return new Scene(SHARED_CONFIG);\n};\n\nvar initScenes = Scenes.map(createScene);\nvar config = {\n  type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),\n  width: WIDTH,\n  height: HEIGHT,\n  pixelArt: true,\n  physics: {\n    \"default\": 'arcade',\n    arcade: {\n      debug: true\n    }\n  },\n  scene: initScenes\n};\nnew (phaser__WEBPACK_IMPORTED_MODULE_0___default().Game)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYXJ1bi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbIldJRFRIIiwiSEVJR0hUIiwiQklSRF9QT1NJVElPTiIsIngiLCJ5IiwiU0hBUkVEX0NPTkZJRyIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnRQb3NpdGlvbiIsIlNjZW5lcyIsIlByZWxvYWRTY2VuZSIsIlBsYXlTY2VuZSIsImNyZWF0ZVNjZW5lIiwiU2NlbmUiLCJpbml0U2NlbmVzIiwibWFwIiwiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsInBpeGVsQXJ0IiwicGh5c2ljcyIsImFyY2FkZSIsImRlYnVnIiwic2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLEdBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUNBLElBQU1DLGFBQWEsR0FBRztBQUFFQyxHQUFDLEVBQUVILEtBQUssR0FBRyxFQUFiO0FBQWlCSSxHQUFDLEVBQUVILE1BQU0sR0FBRztBQUE3QixDQUF0QjtBQUVBLElBQU1JLGFBQWEsR0FBRztBQUNwQkMsT0FBSyxFQUFFTixLQURhO0FBRXBCTyxRQUFNLEVBQUVOLE1BRlk7QUFHcEJPLGVBQWEsRUFBRU47QUFISyxDQUF0QjtBQU1BLElBQU1PLE1BQU0sR0FBRyxDQUFDQyx5REFBRCxFQUFlQyxzREFBZixDQUFmOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUFXLElBQUlBLEtBQUosQ0FBVVIsYUFBVixDQUFYO0FBQUEsQ0FBcEI7O0FBQ0EsSUFBTVMsVUFBVSxHQUFHTCxNQUFNLENBQUNNLEdBQVAsQ0FBV0gsV0FBWCxDQUFuQjtBQUVBLElBQU1JLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUVDLG9EQURPO0FBRWJaLE9BQUssRUFBRU4sS0FGTTtBQUdiTyxRQUFNLEVBQUVOLE1BSEs7QUFJYmtCLFVBQVEsRUFBRSxJQUpHO0FBS2JDLFNBQU8sRUFBRTtBQUNQLGVBQVMsUUFERjtBQUVQQyxVQUFNLEVBQUU7QUFDTkMsV0FBSyxFQUFFO0FBREQ7QUFGRCxHQUxJO0FBV2JDLE9BQUssRUFBRVQ7QUFYTSxDQUFmO0FBY0EsSUFBSUksb0RBQUosQ0FBZ0JGLE1BQWhCIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG5pbXBvcnQgUHJlbG9hZFNjZW5lIGZyb20gXCIuL3NjZW5lcy9QcmVsb2FkU2NlbmVcIjtcclxuaW1wb3J0IFBsYXlTY2VuZSBmcm9tIFwiLi9zY2VuZXMvUGxheVNjZW5lXCI7XHJcblxyXG5jb25zdCBXSURUSCA9IDgwMDtcclxuY29uc3QgSEVJR0hUID0gNjAwO1xyXG5jb25zdCBCSVJEX1BPU0lUSU9OID0geyB4OiBXSURUSCAvIDEwLCB5OiBIRUlHSFQgLyAyIH07XHJcblxyXG5jb25zdCBTSEFSRURfQ09ORklHID0ge1xyXG4gIHdpZHRoOiBXSURUSCxcclxuICBoZWlnaHQ6IEhFSUdIVCxcclxuICBzdGFydFBvc2l0aW9uOiBCSVJEX1BPU0lUSU9OXHJcbn07XHJcblxyXG5jb25zdCBTY2VuZXMgPSBbUHJlbG9hZFNjZW5lLCBQbGF5U2NlbmVdO1xyXG5jb25zdCBjcmVhdGVTY2VuZSA9IChTY2VuZSkgPT4gbmV3IFNjZW5lKFNIQVJFRF9DT05GSUcpO1xyXG5jb25zdCBpbml0U2NlbmVzID0gU2NlbmVzLm1hcChjcmVhdGVTY2VuZSk7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgd2lkdGg6IFdJRFRILFxyXG4gIGhlaWdodDogSEVJR0hULFxyXG4gIHBpeGVsQXJ0OiB0cnVlLFxyXG4gIHBoeXNpY3M6IHtcclxuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgYXJjYWRlOiB7XHJcbiAgICAgIGRlYnVnOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzY2VuZTogaW5pdFNjZW5lc1xyXG59O1xyXG5cclxubmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scenes/BaseScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BaseScene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar BaseScene = /*#__PURE__*/function (_Phaser$Scene) {\n  _inherits(BaseScene, _Phaser$Scene);\n\n  var _super = _createSuper(BaseScene);\n\n  function BaseScene(key, config) {\n    var _this;\n\n    _classCallCheck(this, BaseScene);\n\n    _this = _super.call(this, key);\n    _this.config = config;\n    _this.screenCenter = [config.width / 2, config.height / 2];\n    _this.fontSize = 34;\n    _this.lineHeight = 42;\n    _this.fontOptions = {\n      fontSize: \"\".concat(_this.fontSize, \"px\"),\n      fill: '#FFFFFF'\n    };\n    return _this;\n  }\n\n  _createClass(BaseScene, [{\n    key: \"create\",\n    value: function create() {\n      this.add.image(0, 0, 'background').setOrigin(0);\n    }\n  }]);\n\n  return BaseScene;\n}((phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseScene);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYXJ1bi8uL3NyYy9zY2VuZXMvQmFzZVNjZW5lLmpzPzhjYTYiXSwibmFtZXMiOlsiQmFzZVNjZW5lIiwia2V5IiwiY29uZmlnIiwic2NyZWVuQ2VudGVyIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250T3B0aW9ucyIsImZpbGwiLCJhZGQiLCJpbWFnZSIsInNldE9yaWdpbiIsIlBoYXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxTOzs7OztBQUNKLHFCQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUF5QjtBQUFBOztBQUFBOztBQUN2Qiw4QkFBTUQsR0FBTjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsQ0FBQ0QsTUFBTSxDQUFDRSxLQUFQLEdBQWUsQ0FBaEIsRUFBbUJGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixDQUFuQyxDQUFwQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQjtBQUFDRixjQUFRLFlBQU0sTUFBS0EsUUFBWCxPQUFUO0FBQWtDRyxVQUFJLEVBQUU7QUFBeEMsS0FBbkI7QUFOdUI7QUFPeEI7Ozs7V0FFRCxrQkFBUztBQUNQLFdBQUtDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsWUFBckIsRUFBbUNDLFNBQW5DLENBQTZDLENBQTdDO0FBQ0Q7Ozs7RUFacUJDLHFEOztBQWV4QixpRUFBZWIsU0FBZiIsImZpbGUiOiIuL3NyYy9zY2VuZXMvQmFzZVNjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY2xhc3MgQmFzZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihrZXksIGNvbmZpZykge1xyXG4gICAgc3VwZXIoa2V5KTtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5zY3JlZW5DZW50ZXIgPSBbY29uZmlnLndpZHRoIC8gMiwgY29uZmlnLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IDM0O1xyXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gNDI7XHJcbiAgICB0aGlzLmZvbnRPcHRpb25zID0ge2ZvbnRTaXplOiAgYCR7dGhpcy5mb250U2l6ZX1weGAsIGZpbGw6ICcjRkZGRkZGJyAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuYWRkLmltYWdlKDAsIDAsICdiYWNrZ3JvdW5kJykuc2V0T3JpZ2luKDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZVNjZW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scenes/BaseScene.js\n");

/***/ }),

/***/ "./src/scenes/PlayScene.js":
/*!*********************************!*\
  !*** ./src/scenes/PlayScene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseScene */ \"./src/scenes/BaseScene.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar PlayScene = /*#__PURE__*/function (_BaseScene) {\n  _inherits(PlayScene, _BaseScene);\n\n  var _super = _createSuper(PlayScene);\n\n  function PlayScene(config) {\n    _classCallCheck(this, PlayScene);\n\n    return _super.call(this, 'PlayScene', config);\n  }\n\n  _createClass(PlayScene, [{\n    key: \"create\",\n    value: function create() {\n      _get(_getPrototypeOf(PlayScene.prototype), \"create\", this).call(this);\n    }\n  }]);\n\n  return PlayScene;\n}(_BaseScene__WEBPACK_IMPORTED_MODULE_0__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayScene);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYXJ1bi8uL3NyYy9zY2VuZXMvUGxheVNjZW5lLmpzPzhkZDYiXSwibmFtZXMiOlsiUGxheVNjZW5lIiwiY29uZmlnIiwiQmFzZVNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFM7Ozs7O0FBQ0oscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDWixXQURZLEVBQ0NBLE1BREQ7QUFFbkI7Ozs7V0FFRCxrQkFBUztBQUNQO0FBQ0Q7Ozs7RUFQcUJDLCtDOztBQVV4QixpRUFBZUYsU0FBZiIsImZpbGUiOiIuL3NyYy9zY2VuZXMvUGxheVNjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTY2VuZSBmcm9tIFwiLi9CYXNlU2NlbmVcIjtcclxuXHJcbmNsYXNzIFBsYXlTY2VuZSBleHRlbmRzIEJhc2VTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBzdXBlcignUGxheVNjZW5lJywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHN1cGVyLmNyZWF0ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheVNjZW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scenes/PlayScene.js\n");

/***/ }),

/***/ "./src/scenes/PreloadScene.js":
/*!************************************!*\
  !*** ./src/scenes/PreloadScene.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar PreloadScene = /*#__PURE__*/function (_Phaser$Scene) {\n  _inherits(PreloadScene, _Phaser$Scene);\n\n  var _super = _createSuper(PreloadScene);\n\n  function PreloadScene() {\n    _classCallCheck(this, PreloadScene);\n\n    return _super.call(this, 'PreloadScene');\n  }\n\n  _createClass(PreloadScene, [{\n    key: \"preload\",\n    value: function preload() {\n      this.load.image('background', 'assets/images/ForestBG.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.scene.start(\"PlayScene\");\n    }\n  }]);\n\n  return PreloadScene;\n}((phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreloadScene);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYXJ1bi8uL3NyYy9zY2VuZXMvUHJlbG9hZFNjZW5lLmpzPzlkZjkiXSwibmFtZXMiOlsiUHJlbG9hZFNjZW5lIiwibG9hZCIsImltYWdlIiwic2NlbmUiLCJzdGFydCIsIlBoYXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxZOzs7OztBQUNKLDBCQUFjO0FBQUE7O0FBQUEsNkJBQ04sY0FETTtBQUViOzs7O1dBRUQsbUJBQVU7QUFDUixXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsWUFBaEIsRUFBOEIsNEJBQTlCO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsV0FBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCLFdBQWpCO0FBQ0Q7Ozs7RUFYd0JDLHFEOztBQWUzQixpRUFBZUwsWUFBZiIsImZpbGUiOiIuL3NyYy9zY2VuZXMvUHJlbG9hZFNjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY2xhc3MgUHJlbG9hZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdQcmVsb2FkU2NlbmUnKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9Gb3Jlc3RCRy5wbmcnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJQbGF5U2NlbmVcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZFNjZW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scenes/PreloadScene.js\n");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkninjarun"] = self["webpackChunkninjarun"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;