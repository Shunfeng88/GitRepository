(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************!*\
  !*** D:/demo/signalR/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 43));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** D:/demo/signalR/pages.json ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/index/index2', function () {return Vue.extend(__webpack_require__(/*! pages/index/index2.vue?mpType=page */ 38).default);});

/***/ }),
/* 2 */
/*!*********************************************************!*\
  !*** D:/demo/signalR/pages/index/index.vue?mpType=page ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************************************************!*\
  !*** D:/demo/signalR/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/signalR/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _vm._l(_vm._$s(1, "f", { forItems: _vm.content }), function(
        item,
        $10,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(1, "f", { forIndex: $20, key: item.id }),
            staticClass: _vm._$s("1-" + $30, "sc", "msg-item"),
            attrs: { _i: "1-" + $30 }
          },
          [
            _c(
              "view",
              {
                class: _vm._$s("2-" + $30, "c", item.isSelf ? "right" : "left"),
                attrs: { _i: "2-" + $30 }
              },
              [
                _vm._$s("3-" + $30, "i", item.messageType == 3)
                  ? _c(
                      "text",
                      {
                        staticClass: _vm._$s("3-" + $30, "sc", "card"),
                        attrs: { _i: "3-" + $30 }
                      },
                      [
                        _vm._v(
                          _vm._$s(
                            "3-" + $30,
                            "t0-0",
                            _vm._s(item.talkerContent)
                          )
                        )
                      ]
                    )
                  : _c(
                      "text",
                      {
                        staticClass: _vm._$s("4-" + $30, "sc", "msg"),
                        attrs: { _i: "4-" + $30 }
                      },
                      [
                        _vm._v(
                          _vm._$s(
                            "4-" + $30,
                            "t0-0",
                            _vm._s(item.talkerContent)
                          )
                        )
                      ]
                    )
              ]
            )
          ]
        )
      }),
      _c("button", { attrs: { _i: 5 }, on: { click: _vm.getConfig } }),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.msg,
            expression: "msg"
          }
        ],
        attrs: { _i: 6 },
        domProps: { value: _vm._$s(6, "v-model", _vm.msg) },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.msg = $event.target.value
          }
        }
      }),
      _c("button", { attrs: { _i: 7 }, on: { click: _vm.send } })
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*********************************************************************************!*\
  !*** D:/demo/signalR/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdsQixDQUFnQiwwbUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/signalR/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _signalrUtil = __webpack_require__(/*! @/js/signalrUtil.js */ 8); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { title: 'Hello', userId: 'mobile_13917527217', roleType: 0, // userId: 'cca725db-2236-438d-96f9-87d82d639578',\n      // roleType: 1,\n      askMainId: 'f62e44c2-a6af-4511-ad8b-662812b2cf95', content: [], msg: \"\" };}, onLoad: function onLoad() {var _this = this;\n    (0, _signalrUtil.start)();\n    _signalrUtil.connection.on(\"LoginCallBack\", function (res) {\n      if (res) {\n        var data = {\n          askMainId: _this.askMainId,\n          userId: _this.userId,\n          roleType: _this.roleType };\n\n        _signalrUtil.connection.invoke(\"JoinTalk\", data);\n      }\n    });\n\n    _signalrUtil.connection.on(\"JoinTalkCall\", function (res) {\n      __f__(\"log\", res, \" at pages/index/index.vue:50\");\n      _this.content = [];\n      _this.content = _this.content.concat(res.data.talkList);\n    });\n\n    _signalrUtil.connection.on(\"ToAppendTalk\", function (res) {\n      __f__(\"log\", res, \" at pages/index/index.vue:56\");\n      if (res.data.createUser == _this.userId) {\n        res.data.isSelf = true;\n      } else {\n        res.data.isSelf = false;\n      }\n\n      _this.content.push(res.data);\n    });\n\n    _signalrUtil.connection.on(\"LiveConfigCall\", function (res) {\n      __f__(\"log\", res, \" at pages/index/index.vue:67\");\n    });\n\n    // connection.on(\"ToAppendTalk\", res => {\n    // \tconsole.log(res);\n    // \tif (res.data.createUser == this.userId) {\n    // \t\tres.data.isSelf = true\n    // \t} else {\n    // \t\tres.data.isSelf = false\n    // \t}\n\n    // \tthis.content.push(res.data);\n    // });\n  },\n  methods: {\n    send: function send() {\n      var data = {\n        askMainId: this.askMainId,\n        userId: this.userId,\n        message: this.msg,\n        messageType: 0 };\n\n      _signalrUtil.connection.invoke(\"SendMessage\", data);\n\n      // var data = {\n      // \t\"content\": \"{\\\"CardId\\\":\\\"9357ec42-4585-4ffd-a4ec-591d85da64d9\\\",\\\"DocList\\\":[{\\\"DocID\\\":\\\"10c1aadb-e505-415a-93be-42115ec19705\\\",\\\"DocName\\\":\\\"韩朝\\\",\\\"DocImg\\\":\\\"/photo/202004/ff96a272d45c413abab1bfefcfb49477.jpg\\\",\\\"DocTitle\\\":\\\"高级专家\\\",\\\"CustomerName\\\":\\\"复旦大学附属眼耳鼻喉科医院\\\",\\\"DeptName\\\":\\\"耳鼻喉科互联网门诊\\\"}],\\\"IsCancel\\\":\\\"false\\\",\\\"IsAccept\\\":\\\"false\\\",\\\"CardType\\\":\\\"4\\\",\\\"Content\\\":\\\"\\\",\\\"Patient\\\":{\\\"Name\\\":\\\"Song\\\",\\\"Sex\\\":\\\"女\\\",\\\"Avator\\\":\\\"\\\"},\\\"txt\\\":\\\"视频咨询已经开始\\\",\\\"time\\\":\\\"\\\",\\\"isend\\\":1,\\\"isHasQrCode\\\":false,\\\"DocID\\\":[\\\"10c1aadb-e505-415a-93be-42115ec19705\\\"]}\",\n      // \t\"messageType\": 3,\n      // \t\"talkId\": \"f62e44c2-a6af-4511-ad8b-662812b2cf95\",\n      // \t\"LoginName\": \"wgk_hc\",\n      // \t\"userId\": \"mobile_13917527217\",\n      // \t\"connectionId\": \"6d7d1f98-59c8-4071-93ad-adebbee8a7e6\",\n      // \t\"messageId\": \"9357ec42-4585-4ffd-a4ec-591d85da64d9\"\n      // }\n\n      // connection.invoke(\"SendAToUser\", data);\n\n      this.msg = \"\";\n    },\n    getConfig: function getConfig() {\n      var data = {\n        askMainId: this.askMainId,\n        userId: this.userId,\n        callBackName: \"LiveConfigCall\" };\n\n      _signalrUtil.connection.invoke(\"GetLiveConfig\", data);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsInVzZXJJZCIsInJvbGVUeXBlIiwiYXNrTWFpbklkIiwiY29udGVudCIsIm1zZyIsIm9uTG9hZCIsImNvbm5lY3Rpb24iLCJvbiIsInJlcyIsImludm9rZSIsImNvbmNhdCIsInRhbGtMaXN0IiwiY3JlYXRlVXNlciIsImlzU2VsZiIsInB1c2giLCJtZXRob2RzIiwic2VuZCIsIm1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsImdldENvbmZpZyIsImNhbGxCYWNrTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEscUUsQ0FqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFPZSxFQUNkQSxJQURjLGtCQUNQLENBQ04sT0FBTyxFQUNOQyxLQUFLLEVBQUUsT0FERCxFQUVOQyxNQUFNLEVBQUUsb0JBRkYsRUFHTkMsUUFBUSxFQUFDLENBSEgsRUFJTjtBQUNBO0FBQ0FDLGVBQVMsRUFBRSxzQ0FOTCxFQU9OQyxPQUFPLEVBQUUsRUFQSCxFQVFOQyxHQUFHLEVBQUUsRUFSQyxFQUFQLENBVUEsQ0FaYSxFQWFkQyxNQWJjLG9CQWFMO0FBQ1I7QUFDQUMsNEJBQVdDLEVBQVgsQ0FBYyxlQUFkLEVBQStCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQyxVQUFJQSxHQUFKLEVBQVM7QUFDUixZQUFJVixJQUFJLEdBQUc7QUFDVkksbUJBQVMsRUFBRSxLQUFJLENBQUNBLFNBRE47QUFFVkYsZ0JBQU0sRUFBRSxLQUFJLENBQUNBLE1BRkg7QUFHVkMsa0JBQVEsRUFBRSxLQUFJLENBQUNBLFFBSEwsRUFBWDs7QUFLQUssZ0NBQVdHLE1BQVgsQ0FBa0IsVUFBbEIsRUFBOEJYLElBQTlCO0FBQ0E7QUFDRCxLQVREOztBQVdBUSw0QkFBV0MsRUFBWCxDQUFjLGNBQWQsRUFBOEIsVUFBQUMsR0FBRyxFQUFJO0FBQ3BDLG1CQUFZQSxHQUFaO0FBQ0EsV0FBSSxDQUFDTCxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUksQ0FBQ0EsT0FBTCxHQUFlLEtBQUksQ0FBQ0EsT0FBTCxDQUFhTyxNQUFiLENBQW9CRixHQUFHLENBQUNWLElBQUosQ0FBU2EsUUFBN0IsQ0FBZjtBQUNBLEtBSkQ7O0FBTUFMLDRCQUFXQyxFQUFYLENBQWMsY0FBZCxFQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDcEMsbUJBQVlBLEdBQVo7QUFDQSxVQUFJQSxHQUFHLENBQUNWLElBQUosQ0FBU2MsVUFBVCxJQUF1QixLQUFJLENBQUNaLE1BQWhDLEVBQXdDO0FBQ3ZDUSxXQUFHLENBQUNWLElBQUosQ0FBU2UsTUFBVCxHQUFrQixJQUFsQjtBQUNBLE9BRkQsTUFFTztBQUNOTCxXQUFHLENBQUNWLElBQUosQ0FBU2UsTUFBVCxHQUFrQixLQUFsQjtBQUNBOztBQUVELFdBQUksQ0FBQ1YsT0FBTCxDQUFhVyxJQUFiLENBQWtCTixHQUFHLENBQUNWLElBQXRCO0FBQ0EsS0FURDs7QUFXQVEsNEJBQVdDLEVBQVgsQ0FBYyxnQkFBZCxFQUFnQyxVQUFBQyxHQUFHLEVBQUk7QUFDdEMsbUJBQVlBLEdBQVo7QUFDQSxLQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQXpEYTtBQTBEZE8sU0FBTyxFQUFFO0FBQ1JDLFFBRFEsa0JBQ0Q7QUFDTixVQUFJbEIsSUFBSSxHQUFHO0FBQ1ZJLGlCQUFTLEVBQUUsS0FBS0EsU0FETjtBQUVWRixjQUFNLEVBQUUsS0FBS0EsTUFGSDtBQUdWaUIsZUFBTyxFQUFFLEtBQUtiLEdBSEo7QUFJVmMsbUJBQVcsRUFBRSxDQUpILEVBQVg7O0FBTUFaLDhCQUFXRyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDWCxJQUFqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBS00sR0FBTCxHQUFXLEVBQVg7QUFDQSxLQXZCTztBQXdCUmUsYUF4QlEsdUJBd0JJO0FBQ1gsVUFBSXJCLElBQUksR0FBRztBQUNWSSxpQkFBUyxFQUFFLEtBQUtBLFNBRE47QUFFVkYsY0FBTSxFQUFFLEtBQUtBLE1BRkg7QUFHVm9CLG9CQUFZLEVBQUUsZ0JBSEosRUFBWDs7QUFLQWQsOEJBQVdHLE1BQVgsQ0FBa0IsZUFBbEIsRUFBbUNYLElBQW5DO0FBQ0EsS0EvQk8sRUExREssRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IHtcblx0Y29ubmVjdGlvbixcblx0c3RhcnRcbn0gIGZyb20gJ0AvanMvc2lnbmFsclV0aWwuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHR1c2VySWQ6ICdtb2JpbGVfMTM5MTc1MjcyMTcnLFxuXHRcdFx0cm9sZVR5cGU6MCxcblx0XHRcdC8vIHVzZXJJZDogJ2NjYTcyNWRiLTIyMzYtNDM4ZC05NmY5LTg3ZDgyZDYzOTU3OCcsXG5cdFx0XHQvLyByb2xlVHlwZTogMSxcblx0XHRcdGFza01haW5JZDogJ2Y2MmU0NGMyLWE2YWYtNDUxMS1hZDhiLTY2MjgxMmIyY2Y5NScsXG5cdFx0XHRjb250ZW50OiBbXSxcblx0XHRcdG1zZzogXCJcIlxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHN0YXJ0KCk7XG5cdFx0Y29ubmVjdGlvbi5vbihcIkxvZ2luQ2FsbEJhY2tcIiwgcmVzID0+IHtcblx0XHRcdGlmIChyZXMpIHtcblx0XHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdFx0YXNrTWFpbklkOiB0aGlzLmFza01haW5JZCxcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxuXHRcdFx0XHRcdHJvbGVUeXBlOiB0aGlzLnJvbGVUeXBlXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29ubmVjdGlvbi5pbnZva2UoXCJKb2luVGFsa1wiLCBkYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbm5lY3Rpb24ub24oXCJKb2luVGFsa0NhbGxcIiwgcmVzID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdHRoaXMuY29udGVudCA9IFtdO1xuXHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmNvbmNhdChyZXMuZGF0YS50YWxrTGlzdCk7XG5cdFx0fSk7XG5cblx0XHRjb25uZWN0aW9uLm9uKFwiVG9BcHBlbmRUYWxrXCIsIHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0aWYgKHJlcy5kYXRhLmNyZWF0ZVVzZXIgPT0gdGhpcy51c2VySWQpIHtcblx0XHRcdFx0cmVzLmRhdGEuaXNTZWxmID0gdHJ1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzLmRhdGEuaXNTZWxmID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jb250ZW50LnB1c2gocmVzLmRhdGEpO1xuXHRcdH0pO1xuXG5cdFx0Y29ubmVjdGlvbi5vbihcIkxpdmVDb25maWdDYWxsXCIsIHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSk7XG5cblx0XHQvLyBjb25uZWN0aW9uLm9uKFwiVG9BcHBlbmRUYWxrXCIsIHJlcyA9PiB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdC8vIFx0aWYgKHJlcy5kYXRhLmNyZWF0ZVVzZXIgPT0gdGhpcy51c2VySWQpIHtcblx0XHQvLyBcdFx0cmVzLmRhdGEuaXNTZWxmID0gdHJ1ZVxuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0cmVzLmRhdGEuaXNTZWxmID0gZmFsc2Vcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0dGhpcy5jb250ZW50LnB1c2gocmVzLmRhdGEpO1xuXHRcdC8vIH0pO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c2VuZCgpIHtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRhc2tNYWluSWQ6IHRoaXMuYXNrTWFpbklkLFxuXHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxuXHRcdFx0XHRtZXNzYWdlOiB0aGlzLm1zZyxcblx0XHRcdFx0bWVzc2FnZVR5cGU6IDBcblx0XHRcdH1cblx0XHRcdGNvbm5lY3Rpb24uaW52b2tlKFwiU2VuZE1lc3NhZ2VcIiwgZGF0YSk7XG5cblx0XHRcdC8vIHZhciBkYXRhID0ge1xuXHRcdFx0Ly8gXHRcImNvbnRlbnRcIjogXCJ7XFxcIkNhcmRJZFxcXCI6XFxcIjkzNTdlYzQyLTQ1ODUtNGZmZC1hNGVjLTU5MWQ4NWRhNjRkOVxcXCIsXFxcIkRvY0xpc3RcXFwiOlt7XFxcIkRvY0lEXFxcIjpcXFwiMTBjMWFhZGItZTUwNS00MTVhLTkzYmUtNDIxMTVlYzE5NzA1XFxcIixcXFwiRG9jTmFtZVxcXCI6XFxcIumfqeacnVxcXCIsXFxcIkRvY0ltZ1xcXCI6XFxcIi9waG90by8yMDIwMDQvZmY5NmEyNzJkNDVjNDEzYWJhYjFiZmVmY2ZiNDk0NzcuanBnXFxcIixcXFwiRG9jVGl0bGVcXFwiOlxcXCLpq5jnuqfkuJPlrrZcXFwiLFxcXCJDdXN0b21lck5hbWVcXFwiOlxcXCLlpI3ml6blpKflrabpmYTlsZ7nnLzogLPpvLvllonnp5HljLvpmaJcXFwiLFxcXCJEZXB0TmFtZVxcXCI6XFxcIuiAs+m8u+WWieenkeS6kuiBlOe9kemXqOivilxcXCJ9XSxcXFwiSXNDYW5jZWxcXFwiOlxcXCJmYWxzZVxcXCIsXFxcIklzQWNjZXB0XFxcIjpcXFwiZmFsc2VcXFwiLFxcXCJDYXJkVHlwZVxcXCI6XFxcIjRcXFwiLFxcXCJDb250ZW50XFxcIjpcXFwiXFxcIixcXFwiUGF0aWVudFxcXCI6e1xcXCJOYW1lXFxcIjpcXFwiU29uZ1xcXCIsXFxcIlNleFxcXCI6XFxcIuWls1xcXCIsXFxcIkF2YXRvclxcXCI6XFxcIlxcXCJ9LFxcXCJ0eHRcXFwiOlxcXCLop4bpopHlkqjor6Llt7Lnu4/lvIDlp4tcXFwiLFxcXCJ0aW1lXFxcIjpcXFwiXFxcIixcXFwiaXNlbmRcXFwiOjEsXFxcImlzSGFzUXJDb2RlXFxcIjpmYWxzZSxcXFwiRG9jSURcXFwiOltcXFwiMTBjMWFhZGItZTUwNS00MTVhLTkzYmUtNDIxMTVlYzE5NzA1XFxcIl19XCIsXG5cdFx0XHQvLyBcdFwibWVzc2FnZVR5cGVcIjogMyxcblx0XHRcdC8vIFx0XCJ0YWxrSWRcIjogXCJmNjJlNDRjMi1hNmFmLTQ1MTEtYWQ4Yi02NjI4MTJiMmNmOTVcIixcblx0XHRcdC8vIFx0XCJMb2dpbk5hbWVcIjogXCJ3Z2tfaGNcIixcblx0XHRcdC8vIFx0XCJ1c2VySWRcIjogXCJtb2JpbGVfMTM5MTc1MjcyMTdcIixcblx0XHRcdC8vIFx0XCJjb25uZWN0aW9uSWRcIjogXCI2ZDdkMWY5OC01OWM4LTQwNzEtOTNhZC1hZGViYmVlOGE3ZTZcIixcblx0XHRcdC8vIFx0XCJtZXNzYWdlSWRcIjogXCI5MzU3ZWM0Mi00NTg1LTRmZmQtYTRlYy01OTFkODVkYTY0ZDlcIlxuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyBjb25uZWN0aW9uLmludm9rZShcIlNlbmRBVG9Vc2VyXCIsIGRhdGEpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLm1zZyA9IFwiXCI7XG5cdFx0fSxcblx0XHRnZXRDb25maWcoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0YXNrTWFpbklkOiB0aGlzLmFza01haW5JZCxcblx0XHRcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcblx0XHRcdFx0Y2FsbEJhY2tOYW1lOiBcIkxpdmVDb25maWdDYWxsXCJcblx0XHRcdH1cblx0XHRcdGNvbm5lY3Rpb24uaW52b2tlKFwiR2V0TGl2ZUNvbmZpZ1wiLCBkYXRhKTtcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!*****************************************!*\
  !*** D:/demo/signalR/js/signalrUtil.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {var signalR = __webpack_require__(/*! @microsoft/signalr */ 9);\n\nvar token = '';\n//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2NhNzI1ZGItMjIzNi00MzhkLTk2ZjktODdkODJkNjM5NTc4IiwiQ3VzdG9tZXJJRCI6IjA1ZGNjNGE1LTBkZDUtNDViNy1iYmZlLTliMzYzMzgwYTFlMCIsIkN1c3RvbWVyTmFtZSI6IuWkjeaXpuWkp-WtpumZhOWxnuecvOiAs-m8u-WWieenkeWMu-mZoiIsIkN1c3RvbWVyU2hvcnROYW1lIjoi5aSN5pem5aSn5a2m6ZmE5bGe55y86ICz6by75ZaJ56eR5Yy76ZmiIiwiRW1wbG95ZWVJRCI6ImNjYTcyNWRiLTIyMzYtNDM4ZC05NmY5LTg3ZDgyZDYzOTU3OCIsIkVtcGxveWVlQ29kZSI6IjAyXzAxXzM1NzciLCJFbXBsb3llZU5hbWUiOiLpn6nmnJ0iLCJMb2dpbklEIjoiMjAyMDEyMDkxNDQ1MzQxMzM2NTYyNjE0NTk2MDE0MDgwIiwic3ViIjoiY2NhNzI1ZGItMjIzNi00MzhkLTk2ZjktODdkODJkNjM5NTc4IiwidG9rZW5fdXNhZ2UiOiJhY2Nlc3NfdG9rZW4iLCJqdGkiOiJmN2Y0NjE2YS0yMGE4LTQ1MjAtYTU2ZS00NDRhOWM2NzFmNWEiLCJjZmRfbHZsIjoicHJpdmF0ZSIsInNjb3BlIjoib3BlbmlkIiwiYXVkIjpbInJlc291cmNlX3NlcnZlciIsInJlc291cmNlX3NlcnZlcl9jb3JlIiwicmVzb3VyY2VfaGlzYXBpIl0sImF6cCI6IjA1ZGNjNGE1LTBkZDUtNDViNy1iYmZlLTliMzYzMzgwYTFlMCIsIm5iZiI6MTYwNzQ5NjMzNCwiZXhwIjoxNjA3NDk5OTM0LCJpYXQiOjE2MDc0OTYzMzQsImlzcyI6Imh0dHBzOi8vbXBsdXMubGlua2luZ2Nsb3VkLmNuLyJ9.OHsqGD6p1slx67G-Eyz7vBotwWS2xJVHR_6PVh5gV_c';\n\nvar connection = new signalR.HubConnectionBuilder().\nwithUrl(\"https://mplustest.linkingcloud.cn/signalr/qahub\", { accessTokenFactory: function accessTokenFactory() {return token;} })\n//.withUrl(\"http://172.16.10.11:6028/qahub\", { accessTokenFactory: () => token })\n.build();\n\nvar start = function start() {\n  connection.start().catch(function () {\n    __f__(\"log\", \"服务连接异常,重试中...\", \" at js/signalrUtil.js:13\");\n    setTimeout(function () {return start();}, 5000);\n  });\n};\n\nconnection.onclose(function () {\n  start();\n});\n\nmodule.exports = {\n  connection: connection,\n  start: start };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanMvc2lnbmFsclV0aWwuanMiXSwibmFtZXMiOlsic2lnbmFsUiIsInJlcXVpcmUiLCJ0b2tlbiIsImNvbm5lY3Rpb24iLCJIdWJDb25uZWN0aW9uQnVpbGRlciIsIndpdGhVcmwiLCJhY2Nlc3NUb2tlbkZhY3RvcnkiLCJidWlsZCIsInN0YXJ0IiwiY2F0Y2giLCJzZXRUaW1lb3V0Iiwib25jbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsMkJBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsS0FBSyxHQUFDLEVBQVo7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUgsT0FBTyxDQUFDSSxvQkFBWjtBQUNqQkMsT0FEaUIsQ0FDVCxpREFEUyxFQUMwQyxFQUFFQyxrQkFBa0IsRUFBRSxzQ0FBTUosS0FBTixFQUF0QixFQUQxQztBQUVsQjtBQUZrQixDQUdqQkssS0FIaUIsRUFBbkI7O0FBS0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBVztBQUN4QkwsWUFBVSxDQUFDSyxLQUFYLEdBQW1CQyxLQUFuQixDQUF5QixZQUFJO0FBQzVCLGlCQUFZLGVBQVo7QUFDQUMsY0FBVSxDQUFDLG9CQUFNRixLQUFLLEVBQVgsRUFBRCxFQUFnQixJQUFoQixDQUFWO0FBQ0EsR0FIRDtBQUlBLENBTEQ7O0FBT0FMLFVBQVUsQ0FBQ1EsT0FBWCxDQUFtQixZQUFNO0FBQ3hCSCxPQUFLO0FBQ0wsQ0FGRDs7QUFJQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCVixZQUFVLEVBQUVBLFVBREk7QUFFaEJLLE9BQUssRUFBRUEsS0FGUyxFQUFqQixDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaWduYWxSID0gcmVxdWlyZSgnQG1pY3Jvc29mdC9zaWduYWxyJyk7XHJcblxyXG5jb25zdCB0b2tlbj0nJztcclxuLy9jb25zdCB0b2tlbj0nZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm9kSFJ3T2k4dmMyTm9aVzFoY3k1NGJXeHpiMkZ3TG05eVp5OTNjeTh5TURBMUx6QTFMMmxrWlc1MGFYUjVMMk5zWVdsdGN5OXVZVzFsSWpvaVkyTmhOekkxWkdJdE1qSXpOaTAwTXpoa0xUazJaamt0T0Rka09ESmtOak01TlRjNElpd2lRM1Z6ZEc5dFpYSkpSQ0k2SWpBMVpHTmpOR0UxTFRCa1pEVXRORFZpTnkxaVltWmxMVGxpTXpZek16Z3dZVEZsTUNJc0lrTjFjM1J2YldWeVRtRnRaU0k2SXVXa2plYVhwdVdrcC1XdHB1bVpoT1d4bnVlY3ZPaUFzLW04dS1XV2llZW5rZVdNdS1tWm9pSXNJa04xYzNSdmJXVnlVMmh2Y25ST1lXMWxJam9pNWFTTjVwZW01YVNuNWEybTZabUU1YkdlNTV5ODZJQ3o2Ynk3NVphSjU2ZVI1WXk3NlptaUlpd2lSVzF3Ykc5NVpXVkpSQ0k2SW1OallUY3lOV1JpTFRJeU16WXRORE00WkMwNU5tWTVMVGczWkRneVpEWXpPVFUzT0NJc0lrVnRjR3h2ZVdWbFEyOWtaU0k2SWpBeVh6QXhYek0xTnpjaUxDSkZiWEJzYjNsbFpVNWhiV1VpT2lMcG42bm1uSjBpTENKTWIyZHBia2xFSWpvaU1qQXlNREV5TURreE5EUTFNelF4TXpNMk5UWXlOakUwTlRrMk1ERTBNRGd3SWl3aWMzVmlJam9pWTJOaE56STFaR0l0TWpJek5pMDBNemhrTFRrMlpqa3RPRGRrT0RKa05qTTVOVGM0SWl3aWRHOXJaVzVmZFhOaFoyVWlPaUpoWTJObGMzTmZkRzlyWlc0aUxDSnFkR2tpT2lKbU4yWTBOakUyWVMweU1HRTRMVFExTWpBdFlUVTJaUzAwTkRSaE9XTTJOekZtTldFaUxDSmpabVJmYkhac0lqb2ljSEpwZG1GMFpTSXNJbk5qYjNCbElqb2liM0JsYm1sa0lpd2lZWFZrSWpwYkluSmxjMjkxY21ObFgzTmxjblpsY2lJc0luSmxjMjkxY21ObFgzTmxjblpsY2w5amIzSmxJaXdpY21WemIzVnlZMlZmYUdsellYQnBJbDBzSW1GNmNDSTZJakExWkdOak5HRTFMVEJrWkRVdE5EVmlOeTFpWW1abExUbGlNell6TXpnd1lURmxNQ0lzSW01aVppSTZNVFl3TnpRNU5qTXpOQ3dpWlhod0lqb3hOakEzTkRrNU9UTTBMQ0pwWVhRaU9qRTJNRGMwT1RZek16UXNJbWx6Y3lJNkltaDBkSEJ6T2k4dmJYQnNkWE11YkdsdWEybHVaMk5zYjNWa0xtTnVMeUo5Lk9Ic3FHRDZwMXNseDY3Ry1FeXo3dkJvdHdXUzJ4SlZIUl82UFZoNWdWX2MnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBzaWduYWxSLkh1YkNvbm5lY3Rpb25CdWlsZGVyKClcclxuXHQud2l0aFVybChcImh0dHBzOi8vbXBsdXN0ZXN0LmxpbmtpbmdjbG91ZC5jbi9zaWduYWxyL3FhaHViXCIsIHsgYWNjZXNzVG9rZW5GYWN0b3J5OiAoKSA9PiB0b2tlbiB9KVxyXG5cdC8vLndpdGhVcmwoXCJodHRwOi8vMTcyLjE2LjEwLjExOjYwMjgvcWFodWJcIiwgeyBhY2Nlc3NUb2tlbkZhY3Rvcnk6ICgpID0+IHRva2VuIH0pXHJcblx0LmJ1aWxkKCk7XHJcblxyXG5jb25zdCBzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbm5lY3Rpb24uc3RhcnQoKS5jYXRjaCgoKT0+e1xyXG5cdFx0Y29uc29sZS5sb2coXCLmnI3liqHov57mjqXlvILluLgs6YeN6K+V5LitLi4uXCIpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiBzdGFydCgpLCA1MDAwKTtcclxuXHR9KVxyXG59O1xyXG5cclxuY29ubmVjdGlvbi5vbmNsb3NlKCgpID0+IHtcclxuXHRzdGFydCgpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNvbm5lY3Rpb246IGNvbm5lY3Rpb24sXHJcblx0c3RhcnQ6IHN0YXJ0XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "AbortError", { enumerable: true, get: function get() {return _Errors.AbortError;} });Object.defineProperty(exports, "HttpError", { enumerable: true, get: function get() {return _Errors.HttpError;} });Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function get() {return _Errors.TimeoutError;} });Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function get() {return _HttpClient.HttpClient;} });Object.defineProperty(exports, "HttpResponse", { enumerable: true, get: function get() {return _HttpClient.HttpResponse;} });Object.defineProperty(exports, "DefaultHttpClient", { enumerable: true, get: function get() {return _DefaultHttpClient.DefaultHttpClient;} });Object.defineProperty(exports, "HubConnection", { enumerable: true, get: function get() {return _HubConnection.HubConnection;} });Object.defineProperty(exports, "HubConnectionState", { enumerable: true, get: function get() {return _HubConnection.HubConnectionState;} });Object.defineProperty(exports, "HubConnectionBuilder", { enumerable: true, get: function get() {return _HubConnectionBuilder.HubConnectionBuilder;} });Object.defineProperty(exports, "MessageType", { enumerable: true, get: function get() {return _IHubProtocol.MessageType;} });Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function get() {return _ILogger.LogLevel;} });Object.defineProperty(exports, "HttpTransportType", { enumerable: true, get: function get() {return _ITransport.HttpTransportType;} });Object.defineProperty(exports, "TransferFormat", { enumerable: true, get: function get() {return _ITransport.TransferFormat;} });Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function get() {return _Loggers.NullLogger;} });Object.defineProperty(exports, "JsonHubProtocol", { enumerable: true, get: function get() {return _JsonHubProtocol.JsonHubProtocol;} });Object.defineProperty(exports, "Subject", { enumerable: true, get: function get() {return _Subject.Subject;} });exports.VERSION = void 0;




var _Errors = __webpack_require__(/*! ./Errors */ 10);
var _HttpClient = __webpack_require__(/*! ./HttpClient */ 11);
var _DefaultHttpClient = __webpack_require__(/*! ./DefaultHttpClient */ 12);
var _HubConnection = __webpack_require__(/*! ./HubConnection */ 23);
var _HubConnectionBuilder = __webpack_require__(/*! ./HubConnectionBuilder */ 28);
var _IHubProtocol = __webpack_require__(/*! ./IHubProtocol */ 26);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _Loggers = __webpack_require__(/*! ./Loggers */ 21);
var _JsonHubProtocol = __webpack_require__(/*! ./JsonHubProtocol */ 36);
var _Subject = __webpack_require__(/*! ./Subject */ 27); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */var VERSION = "3.1.6";exports.VERSION = VERSION;

/***/ }),
/* 10 */
/*!**************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.AbortError = exports.TimeoutError = exports.HttpError = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf ||
  { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} ||
  function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};
  return function (d, b) {
    extendStatics(d, b);
    function __() {this.constructor = d;}
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */function (_super) {
  __extends(HttpError, _super);
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
                                 *
                                 * @param {string} errorMessage A descriptive error message.
                                 * @param {number} statusCode The HTTP status code represented by this error.
                                 */
  function HttpError(errorMessage, statusCode) {
    var _newTarget = this.constructor;
    var _this = this;
    var trueProto = _newTarget.prototype;
    _this = _super.call(this, errorMessage) || this;
    _this.statusCode = statusCode;
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    _this.__proto__ = trueProto;
    return _this;
  }
  return HttpError;
}(Error);exports.HttpError = HttpError;

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */function (_super) {
  __extends(TimeoutError, _super);
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
                                    *
                                    * @param {string} errorMessage A descriptive error message.
                                    */
  function TimeoutError(errorMessage) {
    var _newTarget = this.constructor;
    if (errorMessage === void 0) {errorMessage = "A timeout occurred.";}
    var _this = this;
    var trueProto = _newTarget.prototype;
    _this = _super.call(this, errorMessage) || this;
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    _this.__proto__ = trueProto;
    return _this;
  }
  return TimeoutError;
}(Error);exports.TimeoutError = TimeoutError;

/** Error thrown when an action is aborted. */
var AbortError = /** @class */function (_super) {
  __extends(AbortError, _super);
  /** Constructs a new instance of {@link AbortError}.
                                  *
                                  * @param {string} errorMessage A descriptive error message.
                                  */
  function AbortError(errorMessage) {
    var _newTarget = this.constructor;
    if (errorMessage === void 0) {errorMessage = "An abort occurred.";}
    var _this = this;
    var trueProto = _newTarget.prototype;
    _this = _super.call(this, errorMessage) || this;
    // Workaround issue in Typescript compiler
    // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
    _this.__proto__ = trueProto;
    return _this;
  }
  return AbortError;
}(Error);exports.AbortError = AbortError;

/***/ }),
/* 11 */
/*!******************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.HttpClient = exports.HttpResponse = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = void 0 && (void 0).__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p))
      t[p] = s[p];}
  }
  return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */function () {
  function HttpResponse(statusCode, statusText, content) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.content = content;
  }
  return HttpResponse;
}();exports.HttpResponse = HttpResponse;

/** Abstraction over an HTTP client.
                                          *
                                          * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
                                          */
var HttpClient = /** @class */function () {
  function HttpClient() {
  }
  HttpClient.prototype.get = function (url, options) {
    return this.send(__assign({}, options, { method: "GET", url: url }));
  };
  HttpClient.prototype.post = function (url, options) {
    return this.send(__assign({}, options, { method: "POST", url: url }));
  };
  HttpClient.prototype.delete = function (url, options) {
    return this.send(__assign({}, options, { method: "DELETE", url: url }));
  };
  /** Gets all cookies that apply to the specified URL.
      *
      * @param url The URL that the cookies are valid for.
      * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
      */
  // @ts-ignore
  HttpClient.prototype.getCookieString = function (url) {
    return "";
  };
  return HttpClient;
}();exports.HttpClient = HttpClient;

/***/ }),
/* 12 */
/*!*************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.DefaultHttpClient = void 0;











var _Errors = __webpack_require__(/*! ./Errors */ 10);
var _HttpClient = __webpack_require__(/*! ./HttpClient */ 11);
var _NodeHttpClient = __webpack_require__(/*! ./NodeHttpClient */ 13);
var _XhrHttpClient = __webpack_require__(/*! ./XhrHttpClient */ 22); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = void 0 && (void 0).__extends || function () {var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} || function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};return function (d, b) {extendStatics(d, b);function __() {this.constructor = d;}d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());};}(); /** Default implementation of {@link @microsoft/signalr.HttpClient}. */var DefaultHttpClient = /** @class */function (_super) {
  __extends(DefaultHttpClient, _super);
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  function DefaultHttpClient(logger) {
    var _this = _super.call(this) || this;
    if (typeof XMLHttpRequest !== "undefined") {
      _this.httpClient = new _XhrHttpClient.XhrHttpClient(logger);
    } else
    {
      _this.httpClient = new _NodeHttpClient.NodeHttpClient(logger);
    }
    return _this;
  }
  /** @inheritDoc */
  DefaultHttpClient.prototype.send = function (request) {
    // Check that abort was not signaled before calling send
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new _Errors.AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return this.httpClient.send(request);
  };
  DefaultHttpClient.prototype.getCookieString = function (url) {
    return this.httpClient.getCookieString(url);
  };
  return DefaultHttpClient;
}(_HttpClient.HttpClient);exports.DefaultHttpClient = DefaultHttpClient;

/***/ }),
/* 13 */
/*!**********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/NodeHttpClient.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.NodeHttpClient = void 0;



















var _Errors = __webpack_require__(/*! ./Errors */ 10);
var _HttpClient = __webpack_require__(/*! ./HttpClient */ 11);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = void 0 && (void 0).__extends || function () {var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} || function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};return function (d, b) {extendStatics(d, b);function __() {this.constructor = d;}d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());};}();var __assign = void 0 && (void 0).__assign || Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;};var requestModule;if (typeof XMLHttpRequest === "undefined") {
  // In order to ignore the dynamic require in webpack builds we need to do this magic
  // @ts-ignore: TS doesn't know about these names
  var requireFunc =  true ? require : undefined;
  requestModule = requireFunc("request");
}
/** @private */
var NodeHttpClient = /** @class */function (_super) {
  __extends(NodeHttpClient, _super);
  function NodeHttpClient(logger) {
    var _this = _super.call(this) || this;
    if (typeof requestModule === "undefined") {
      throw new Error("The 'request' module could not be loaded.");
    }
    _this.logger = logger;
    _this.cookieJar = requestModule.jar();
    _this.request = requestModule.defaults({ jar: _this.cookieJar });
    return _this;
  }
  NodeHttpClient.prototype.send = function (httpRequest) {
    var _this = this;
    // Check that abort was not signaled before calling send
    if (httpRequest.abortSignal) {
      if (httpRequest.abortSignal.aborted) {
        return Promise.reject(new _Errors.AbortError());
      }
    }
    return new Promise(function (resolve, reject) {
      var requestBody;
      if ((0, _Utils.isArrayBuffer)(httpRequest.content)) {
        requestBody = Buffer.from(httpRequest.content);
      } else
      {
        requestBody = httpRequest.content || "";
      }
      var currentRequest = _this.request(httpRequest.url, {
        body: requestBody,
        // If binary is expected 'null' should be used, otherwise for text 'utf8'
        encoding: httpRequest.responseType === "arraybuffer" ? null : "utf8",
        headers: __assign({
          // Tell auth middleware to 401 instead of redirecting
          "X-Requested-With": "XMLHttpRequest" }, httpRequest.headers),
        method: httpRequest.method,
        timeout: httpRequest.timeout },
      function (error, response, body) {
        if (httpRequest.abortSignal) {
          httpRequest.abortSignal.onabort = null;
        }
        if (error) {
          if (error.code === "ETIMEDOUT") {
            _this.logger.log(_ILogger.LogLevel.Warning, "Timeout from HTTP request.");
            reject(new _Errors.TimeoutError());
          }
          _this.logger.log(_ILogger.LogLevel.Warning, "Error from HTTP request. " + error);
          reject(error);
          return;
        }
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve(new _HttpClient.HttpResponse(response.statusCode, response.statusMessage || "", body));
        } else
        {
          reject(new _Errors.HttpError(response.statusMessage || "", response.statusCode || 0));
        }
      });
      if (httpRequest.abortSignal) {
        httpRequest.abortSignal.onabort = function () {
          currentRequest.abort();
          reject(new _Errors.AbortError());
        };
      }
    });
  };
  NodeHttpClient.prototype.getCookieString = function (url) {
    return this.cookieJar.getCookieString(url);
  };
  return NodeHttpClient;
}(_HttpClient.HttpClient);exports.NodeHttpClient = NodeHttpClient;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 14).Buffer))

/***/ }),
/* 14 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 16)
var ieee754 = __webpack_require__(/*! ieee754 */ 17)
var isArray = __webpack_require__(/*! isarray */ 18)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 15)))

/***/ }),
/* 15 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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
/* 16 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 17 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 18 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 19 */
/*!***************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.LogLevel = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;exports.LogLevel = LogLevel;
(function (LogLevel) {
  /** Log level for very low severity diagnostic messages. */
  LogLevel[LogLevel["Trace"] = 0] = "Trace";
  /** Log level for low severity diagnostic messages. */
  LogLevel[LogLevel["Debug"] = 1] = "Debug";
  /** Log level for informational diagnostic messages. */
  LogLevel[LogLevel["Information"] = 2] = "Information";
  /** Log level for diagnostic messages that indicate a non-fatal problem. */
  LogLevel[LogLevel["Warning"] = 3] = "Warning";
  /** Log level for diagnostic messages that indicate a failure in the current operation. */
  LogLevel[LogLevel["Error"] = 4] = "Error";
  /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
  LogLevel[LogLevel["Critical"] = 5] = "Critical";
  /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
  LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

/***/ }),
/* 20 */
/*!*************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getDataDetail = getDataDetail;exports.formatArrayBuffer = formatArrayBuffer;exports.isArrayBuffer = isArrayBuffer;exports.sendMessage = sendMessage;exports.createLogger = createLogger;exports.ConsoleLogger = exports.SubjectSubscription = exports.Platform = exports.Arg = void 0;




































var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _Loggers = __webpack_require__(/*! ./Loggers */ 21); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}}; /** @private */var Arg = /** @class */function () {
  function Arg() {
  }
  Arg.isRequired = function (val, name) {
    if (val === null || val === undefined) {
      throw new Error("The '" + name + "' argument is required.");
    }
  };
  Arg.isIn = function (val, values, name) {
    // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
    if (!(val in values)) {
      throw new Error("Unknown " + name + " value: " + val + ".");
    }
  };
  return Arg;
}();exports.Arg = Arg;

/** @private */
var Platform = /** @class */function () {
  function Platform() {
  }
  Object.defineProperty(Platform, "isBrowser", {
    get: function get() {
      return typeof window === "object";
    },
    enumerable: true,
    configurable: true });

  Object.defineProperty(Platform, "isWebWorker", {
    get: function get() {
      return typeof self === "object" && "importScripts" in self;
    },
    enumerable: true,
    configurable: true });

  Object.defineProperty(Platform, "isNode", {
    get: function get() {
      return !this.isBrowser && !this.isWebWorker;
    },
    enumerable: true,
    configurable: true });

  return Platform;
}();exports.Platform = Platform;

/** @private */
function getDataDetail(data, includeContent) {
  var detail = "";
  if (isArrayBuffer(data)) {
    detail = "Binary data of length " + data.byteLength;
    if (includeContent) {
      detail += ". Content: '" + formatArrayBuffer(data) + "'";
    }
  } else
  if (typeof data === "string") {
    detail = "String data of length " + data.length;
    if (includeContent) {
      detail += ". Content: '" + data + "'";
    }
  }
  return detail;
}
/** @private */
function formatArrayBuffer(data) {
  var view = new Uint8Array(data);
  // Uint8Array.map only supports returning another Uint8Array?
  var str = "";
  view.forEach(function (num) {
    var pad = num < 16 ? "0" : "";
    str += "0x" + pad + num.toString(16) + " ";
  });
  // Trim of trailing space.
  return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
  return val && typeof ArrayBuffer !== "undefined" && (
  val instanceof ArrayBuffer ||
  // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  val.constructor && val.constructor.name === "ArrayBuffer");
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
  return __awaiter(this, void 0, void 0, function () {
    var _a, headers, token, responseType, response;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          if (!accessTokenFactory) return [3 /*break*/, 2];
          return [4 /*yield*/, accessTokenFactory()];
        case 1:
          token = _b.sent();
          if (token) {
            headers = (_a = {},
            _a["Authorization"] = "Bearer " + token,
            _a);
          }
          _b.label = 2;
        case 2:
          logger.log(_ILogger.LogLevel.Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
          responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
          return [4 /*yield*/, httpClient.post(url, {
            content: content,
            headers: headers,
            responseType: responseType })];

        case 3:
          response = _b.sent();
          logger.log(_ILogger.LogLevel.Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
          return [2 /*return*/];}

    });
  });
}
/** @private */
function createLogger(logger) {
  if (logger === undefined) {
    return new ConsoleLogger(_ILogger.LogLevel.Information);
  }
  if (logger === null) {
    return _Loggers.NullLogger.instance;
  }
  if (logger.log) {
    return logger;
  }
  return new ConsoleLogger(logger);
}
/** @private */
var SubjectSubscription = /** @class */function () {
  function SubjectSubscription(subject, observer) {
    this.subject = subject;
    this.observer = observer;
  }
  SubjectSubscription.prototype.dispose = function () {
    var index = this.subject.observers.indexOf(this.observer);
    if (index > -1) {
      this.subject.observers.splice(index, 1);
    }
    if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
      this.subject.cancelCallback().catch(function (_) {});
    }
  };
  return SubjectSubscription;
}();exports.SubjectSubscription = SubjectSubscription;

/** @private */
var ConsoleLogger = /** @class */function () {
  function ConsoleLogger(minimumLogLevel) {
    this.minimumLogLevel = minimumLogLevel;
    this.outputConsole = console;
  }
  ConsoleLogger.prototype.log = function (logLevel, message) {
    if (logLevel >= this.minimumLogLevel) {
      switch (logLevel) {
        case _ILogger.LogLevel.Critical:
        case _ILogger.LogLevel.Error:
          this.outputConsole.error("[" + new Date().toISOString() + "] " + _ILogger.LogLevel[logLevel] + ": " + message);
          break;
        case _ILogger.LogLevel.Warning:
          this.outputConsole.warn("[" + new Date().toISOString() + "] " + _ILogger.LogLevel[logLevel] + ": " + message);
          break;
        case _ILogger.LogLevel.Information:
          this.outputConsole.info("[" + new Date().toISOString() + "] " + _ILogger.LogLevel[logLevel] + ": " + message);
          break;
        default:
          // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
          this.outputConsole.log("[" + new Date().toISOString() + "] " + _ILogger.LogLevel[logLevel] + ": " + message);
          break;}

    }
  };
  return ConsoleLogger;
}();exports.ConsoleLogger = ConsoleLogger;

/***/ }),
/* 21 */
/*!***************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.NullLogger = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */function () {
  function NullLogger() {
  }
  /** @inheritDoc */
  // tslint:disable-next-line
  NullLogger.prototype.log = function (_logLevel, _message) {
  };
  /** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
  NullLogger.instance = new NullLogger();
  return NullLogger;
}();exports.NullLogger = NullLogger;

/***/ }),
/* 22 */
/*!*********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.XhrHttpClient = void 0;











var _Errors = __webpack_require__(/*! ./Errors */ 10);
var _HttpClient = __webpack_require__(/*! ./HttpClient */ 11);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = void 0 && (void 0).__extends || function () {var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {d.__proto__ = b;} || function (d, b) {for (var p in b) {if (b.hasOwnProperty(p)) d[p] = b[p];}};return function (d, b) {extendStatics(d, b);function __() {this.constructor = d;}d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());};}();var XhrHttpClient = /** @class */function (_super) {__extends(XhrHttpClient, _super);
  function XhrHttpClient(logger) {
    var _this = _super.call(this) || this;
    _this.logger = logger;
    return _this;
  }
  /** @inheritDoc */
  XhrHttpClient.prototype.send = function (request) {
    var _this = this;
    // Check that abort was not signaled before calling send
    if (request.abortSignal && request.abortSignal.aborted) {
      return Promise.reject(new _Errors.AbortError());
    }
    if (!request.method) {
      return Promise.reject(new Error("No method defined."));
    }
    if (!request.url) {
      return Promise.reject(new Error("No url defined."));
    }
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(request.method, request.url, true);
      xhr.withCredentials = true;
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      // Explicitly setting the Content-Type header for React Native on Android platform.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      var headers = request.headers;
      if (headers) {
        Object.keys(headers).
        forEach(function (header) {
          xhr.setRequestHeader(header, headers[header]);
        });
      }
      if (request.responseType) {
        xhr.responseType = request.responseType;
      }
      if (request.abortSignal) {
        request.abortSignal.onabort = function () {
          xhr.abort();
          reject(new _Errors.AbortError());
        };
      }
      if (request.timeout) {
        xhr.timeout = request.timeout;
      }
      xhr.onload = function () {
        if (request.abortSignal) {
          request.abortSignal.onabort = null;
        }
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new _HttpClient.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
        } else
        {
          reject(new _Errors.HttpError(xhr.statusText, xhr.status));
        }
      };
      xhr.onerror = function () {
        _this.logger.log(_ILogger.LogLevel.Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
        reject(new _Errors.HttpError(xhr.statusText, xhr.status));
      };
      xhr.ontimeout = function () {
        _this.logger.log(_ILogger.LogLevel.Warning, "Timeout from HTTP request.");
        reject(new _Errors.TimeoutError());
      };
      xhr.send(request.content || "");
    });
  };
  return XhrHttpClient;
}(_HttpClient.HttpClient);exports.XhrHttpClient = XhrHttpClient;

/***/ }),
/* 23 */
/*!*********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.HubConnection = exports.HubConnectionState = void 0;




































var _HandshakeProtocol = __webpack_require__(/*! ./HandshakeProtocol */ 24);
var _IHubProtocol = __webpack_require__(/*! ./IHubProtocol */ 26);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _Subject = __webpack_require__(/*! ./Subject */ 27);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;exports.HubConnectionState = HubConnectionState;
(function (HubConnectionState) {
  /** The hub connection is disconnected. */
  HubConnectionState["Disconnected"] = "Disconnected";
  /** The hub connection is connecting. */
  HubConnectionState["Connecting"] = "Connecting";
  /** The hub connection is connected. */
  HubConnectionState["Connected"] = "Connected";
  /** The hub connection is disconnecting. */
  HubConnectionState["Disconnecting"] = "Disconnecting";
  /** The hub connection is reconnecting. */
  HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (exports.HubConnectionState = HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */function () {
  function HubConnection(connection, logger, protocol, reconnectPolicy) {
    var _this = this;
    _Utils.Arg.isRequired(connection, "connection");
    _Utils.Arg.isRequired(logger, "logger");
    _Utils.Arg.isRequired(protocol, "protocol");
    this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
    this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
    this.logger = logger;
    this.protocol = protocol;
    this.connection = connection;
    this.reconnectPolicy = reconnectPolicy;
    this.handshakeProtocol = new _HandshakeProtocol.HandshakeProtocol();
    this.connection.onreceive = function (data) {return _this.processIncomingData(data);};
    this.connection.onclose = function (error) {return _this.connectionClosed(error);};
    this.callbacks = {};
    this.methods = {};
    this.closedCallbacks = [];
    this.reconnectingCallbacks = [];
    this.reconnectedCallbacks = [];
    this.invocationId = 0;
    this.receivedHandshakeResponse = false;
    this.connectionState = HubConnectionState.Disconnected;
    this.connectionStarted = false;
    this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol.MessageType.Ping });
  }
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  HubConnection.create = function (connection, logger, protocol, reconnectPolicy) {
    return new HubConnection(connection, logger, protocol, reconnectPolicy);
  };
  Object.defineProperty(HubConnection.prototype, "state", {
    /** Indicates the state of the {@link HubConnection} to the server. */
    get: function get() {
      return this.connectionState;
    },
    enumerable: true,
    configurable: true });

  Object.defineProperty(HubConnection.prototype, "connectionId", {
    /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
                                                                    *  in the disconnected state or if the negotiation step was skipped.
                                                                    */
    get: function get() {
      return this.connection ? this.connection.connectionId || null : null;
    },
    enumerable: true,
    configurable: true });

  Object.defineProperty(HubConnection.prototype, "baseUrl", {
    /** Indicates the url of the {@link HubConnection} to the server. */
    get: function get() {
      return this.connection.baseUrl || "";
    },
    /**
        * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
        * Reconnecting states.
        * @param {string} url The url to connect to.
        */
    set: function set(url) {
      if (this.connectionState !== HubConnectionState.Disconnected && this.connectionState !== HubConnectionState.Reconnecting) {
        throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
      }
      if (!url) {
        throw new Error("The HubConnection url must be a valid url.");
      }
      this.connection.baseUrl = url;
    },
    enumerable: true,
    configurable: true });

  /** Starts the connection.
                            *
                            * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
                            */
  HubConnection.prototype.start = function () {
    this.startPromise = this.startWithStateTransitions();
    return this.startPromise;
  };
  HubConnection.prototype.startWithStateTransitions = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this.connectionState !== HubConnectionState.Disconnected) {
              return [2 /*return*/, Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];
            }
            this.connectionState = HubConnectionState.Connecting;
            this.logger.log(_ILogger.LogLevel.Debug, "Starting HubConnection.");
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.startInternal()];
          case 2:
            _a.sent();
            this.connectionState = HubConnectionState.Connected;
            this.connectionStarted = true;
            this.logger.log(_ILogger.LogLevel.Debug, "HubConnection connected successfully.");
            return [3 /*break*/, 4];
          case 3:
            e_1 = _a.sent();
            this.connectionState = HubConnectionState.Disconnected;
            this.logger.log(_ILogger.LogLevel.Debug, "HubConnection failed to start successfully because of error '" + e_1 + "'.");
            return [2 /*return*/, Promise.reject(e_1)];
          case 4:return [2 /*return*/];}

      });
    });
  };
  HubConnection.prototype.startInternal = function () {
    return __awaiter(this, void 0, void 0, function () {
      var handshakePromise, handshakeRequest, e_2;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.stopDuringStartError = undefined;
            this.receivedHandshakeResponse = false;
            handshakePromise = new Promise(function (resolve, reject) {
              _this.handshakeResolver = resolve;
              _this.handshakeRejecter = reject;
            });
            return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 7]);
            handshakeRequest = {
              protocol: this.protocol.name,
              version: this.protocol.version };

            this.logger.log(_ILogger.LogLevel.Debug, "Sending handshake request.");
            return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
          case 3:
            _a.sent();
            this.logger.log(_ILogger.LogLevel.Information, "Using HubProtocol '" + this.protocol.name + "'.");
            // defensively cleanup timeout in case we receive a message from the server before we finish start
            this.cleanupTimeout();
            this.resetTimeoutPeriod();
            this.resetKeepAliveInterval();
            return [4 /*yield*/, handshakePromise];
          case 4:
            _a.sent();
            // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
            // being rejected on close, because this continuation can run after both the handshake completed successfully
            // and the connection was closed.
            if (this.stopDuringStartError) {
              // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
              // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
              // will cause the calling continuation to get scheduled to run later.
              throw this.stopDuringStartError;
            }
            return [3 /*break*/, 7];
          case 5:
            e_2 = _a.sent();
            this.logger.log(_ILogger.LogLevel.Debug, "Hub handshake failed with error '" + e_2 + "' during start(). Stopping HubConnection.");
            this.cleanupTimeout();
            this.cleanupPingTimer();
            // HttpConnection.stop() should not complete until after the onclose callback is invoked.
            // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
            return [4 /*yield*/, this.connection.stop(e_2)];
          case 6:
            // HttpConnection.stop() should not complete until after the onclose callback is invoked.
            // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
            _a.sent();
            throw e_2;
          case 7:return [2 /*return*/];}

      });
    });
  };
  /** Stops the connection.
      *
      * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
      */
  HubConnection.prototype.stop = function () {
    return __awaiter(this, void 0, void 0, function () {
      var startPromise, e_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            startPromise = this.startPromise;
            this.stopPromise = this.stopInternal();
            return [4 /*yield*/, this.stopPromise];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4,, 5]);
            // Awaiting undefined continues immediately
            return [4 /*yield*/, startPromise];
          case 3:
            // Awaiting undefined continues immediately
            _a.sent();
            return [3 /*break*/, 5];
          case 4:
            e_3 = _a.sent();
            return [3 /*break*/, 5];
          case 5:return [2 /*return*/];}

      });
    });
  };
  HubConnection.prototype.stopInternal = function (error) {
    if (this.connectionState === HubConnectionState.Disconnected) {
      this.logger.log(_ILogger.LogLevel.Debug, "Call to HubConnection.stop(" + error + ") ignored because it is already in the disconnected state.");
      return Promise.resolve();
    }
    if (this.connectionState === HubConnectionState.Disconnecting) {
      this.logger.log(_ILogger.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
      return this.stopPromise;
    }
    this.connectionState = HubConnectionState.Disconnecting;
    this.logger.log(_ILogger.LogLevel.Debug, "Stopping HubConnection.");
    if (this.reconnectDelayHandle) {
      // We're in a reconnect delay which means the underlying connection is currently already stopped.
      // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
      // fire the onclose callbacks.
      this.logger.log(_ILogger.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
      clearTimeout(this.reconnectDelayHandle);
      this.reconnectDelayHandle = undefined;
      this.completeClose();
      return Promise.resolve();
    }
    this.cleanupTimeout();
    this.cleanupPingTimer();
    this.stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
    // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
    // or the onclose callback is invoked. The onclose callback will transition the HubConnection
    // to the disconnected state if need be before HttpConnection.stop() completes.
    return this.connection.stop(error);
  };
  /** Invokes a streaming hub method on the server using the specified name and arguments.
      *
      * @typeparam T The type of the items returned by the server.
      * @param {string} methodName The name of the server method to invoke.
      * @param {any[]} args The arguments used to invoke the server method.
      * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
      */
  HubConnection.prototype.stream = function (methodName) {
    var _this = this;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var _a = this.replaceStreamingParams(args),streams = _a[0],streamIds = _a[1];
    var invocationDescriptor = this.createStreamInvocation(methodName, args, streamIds);
    var promiseQueue;
    var subject = new _Subject.Subject();
    subject.cancelCallback = function () {
      var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
      delete _this.callbacks[invocationDescriptor.invocationId];
      return promiseQueue.then(function () {
        return _this.sendWithProtocol(cancelInvocation);
      });
    };
    this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
      if (error) {
        subject.error(error);
        return;
      } else
      if (invocationEvent) {
        // invocationEvent will not be null when an error is not passed to the callback
        if (invocationEvent.type === _IHubProtocol.MessageType.Completion) {
          if (invocationEvent.error) {
            subject.error(new Error(invocationEvent.error));
          } else
          {
            subject.complete();
          }
        } else
        {
          subject.next(invocationEvent.item);
        }
      }
    };
    promiseQueue = this.sendWithProtocol(invocationDescriptor).
    catch(function (e) {
      subject.error(e);
      delete _this.callbacks[invocationDescriptor.invocationId];
    });
    this.launchStreams(streams, promiseQueue);
    return subject;
  };
  HubConnection.prototype.sendMessage = function (message) {
    this.resetKeepAliveInterval();
    return this.connection.send(message);
  };
  /**
      * Sends a js object to the server.
      * @param message The js object to serialize and send.
      */
  HubConnection.prototype.sendWithProtocol = function (message) {
    return this.sendMessage(this.protocol.writeMessage(message));
  };
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
      *
      * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
      * be processing the invocation.
      *
      * @param {string} methodName The name of the server method to invoke.
      * @param {any[]} args The arguments used to invoke the server method.
      * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
      */
  HubConnection.prototype.send = function (methodName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var _a = this.replaceStreamingParams(args),streams = _a[0],streamIds = _a[1];
    var sendPromise = this.sendWithProtocol(this.createInvocation(methodName, args, true, streamIds));
    this.launchStreams(streams, sendPromise);
    return sendPromise;
  };
  /** Invokes a hub method on the server using the specified name and arguments.
      *
      * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
      * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
      * resolving the Promise.
      *
      * @typeparam T The expected return type.
      * @param {string} methodName The name of the server method to invoke.
      * @param {any[]} args The arguments used to invoke the server method.
      * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
      */
  HubConnection.prototype.invoke = function (methodName) {
    var _this = this;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var _a = this.replaceStreamingParams(args),streams = _a[0],streamIds = _a[1];
    var invocationDescriptor = this.createInvocation(methodName, args, false, streamIds);
    var p = new Promise(function (resolve, reject) {
      // invocationId will always have a value for a non-blocking invocation
      _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
        if (error) {
          reject(error);
          return;
        } else
        if (invocationEvent) {
          // invocationEvent will not be null when an error is not passed to the callback
          if (invocationEvent.type === _IHubProtocol.MessageType.Completion) {
            if (invocationEvent.error) {
              reject(new Error(invocationEvent.error));
            } else
            {
              resolve(invocationEvent.result);
            }
          } else
          {
            reject(new Error("Unexpected message type: " + invocationEvent.type));
          }
        }
      };
      var promiseQueue = _this.sendWithProtocol(invocationDescriptor).
      catch(function (e) {
        reject(e);
        // invocationId will always have a value for a non-blocking invocation
        delete _this.callbacks[invocationDescriptor.invocationId];
      });
      _this.launchStreams(streams, promiseQueue);
    });
    return p;
  };
  /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
      *
      * @param {string} methodName The name of the hub method to define.
      * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
      */
  HubConnection.prototype.on = function (methodName, newMethod) {
    if (!methodName || !newMethod) {
      return;
    }
    methodName = methodName.toLowerCase();
    if (!this.methods[methodName]) {
      this.methods[methodName] = [];
    }
    // Preventing adding the same handler multiple times.
    if (this.methods[methodName].indexOf(newMethod) !== -1) {
      return;
    }
    this.methods[methodName].push(newMethod);
  };
  HubConnection.prototype.off = function (methodName, method) {
    if (!methodName) {
      return;
    }
    methodName = methodName.toLowerCase();
    var handlers = this.methods[methodName];
    if (!handlers) {
      return;
    }
    if (method) {
      var removeIdx = handlers.indexOf(method);
      if (removeIdx !== -1) {
        handlers.splice(removeIdx, 1);
        if (handlers.length === 0) {
          delete this.methods[methodName];
        }
      }
    } else
    {
      delete this.methods[methodName];
    }
  };
  /** Registers a handler that will be invoked when the connection is closed.
      *
      * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
      */
  HubConnection.prototype.onclose = function (callback) {
    if (callback) {
      this.closedCallbacks.push(callback);
    }
  };
  /** Registers a handler that will be invoked when the connection starts reconnecting.
      *
      * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
      */
  HubConnection.prototype.onreconnecting = function (callback) {
    if (callback) {
      this.reconnectingCallbacks.push(callback);
    }
  };
  /** Registers a handler that will be invoked when the connection successfully reconnects.
      *
      * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
      */
  HubConnection.prototype.onreconnected = function (callback) {
    if (callback) {
      this.reconnectedCallbacks.push(callback);
    }
  };
  HubConnection.prototype.processIncomingData = function (data) {
    this.cleanupTimeout();
    if (!this.receivedHandshakeResponse) {
      data = this.processHandshakeResponse(data);
      this.receivedHandshakeResponse = true;
    }
    // Data may have all been read when processing handshake response
    if (data) {
      // Parse the messages
      var messages = this.protocol.parseMessages(data, this.logger);
      for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
        var message = messages_1[_i];
        switch (message.type) {
          case _IHubProtocol.MessageType.Invocation:
            this.invokeClientMethod(message);
            break;
          case _IHubProtocol.MessageType.StreamItem:
          case _IHubProtocol.MessageType.Completion:
            var callback = this.callbacks[message.invocationId];
            if (callback) {
              if (message.type === _IHubProtocol.MessageType.Completion) {
                delete this.callbacks[message.invocationId];
              }
              callback(message);
            }
            break;
          case _IHubProtocol.MessageType.Ping:
            // Don't care about pings
            break;
          case _IHubProtocol.MessageType.Close:
            this.logger.log(_ILogger.LogLevel.Information, "Close message received from server.");
            var error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
            if (message.allowReconnect === true) {
              // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
              // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
              // tslint:disable-next-line:no-floating-promises
              this.connection.stop(error);
            } else
            {
              // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
              this.stopPromise = this.stopInternal(error);
            }
            break;
          default:
            this.logger.log(_ILogger.LogLevel.Warning, "Invalid message type: " + message.type + ".");
            break;}

      }
    }
    this.resetTimeoutPeriod();
  };
  HubConnection.prototype.processHandshakeResponse = function (data) {
    var _a;
    var responseMessage;
    var remainingData;
    try {
      _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
    }
    catch (e) {
      var message = "Error parsing handshake response: " + e;
      this.logger.log(_ILogger.LogLevel.Error, message);
      var error = new Error(message);
      this.handshakeRejecter(error);
      throw error;
    }
    if (responseMessage.error) {
      var message = "Server returned handshake error: " + responseMessage.error;
      this.logger.log(_ILogger.LogLevel.Error, message);
      var error = new Error(message);
      this.handshakeRejecter(error);
      throw error;
    } else
    {
      this.logger.log(_ILogger.LogLevel.Debug, "Server handshake complete.");
    }
    this.handshakeResolver();
    return remainingData;
  };
  HubConnection.prototype.resetKeepAliveInterval = function () {
    var _this = this;
    this.cleanupPingTimer();
    this.pingServerHandle = setTimeout(function () {return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3,, 4]);
              return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
            case 2:
              _b.sent();
              return [3 /*break*/, 4];
            case 3:
              _a = _b.sent();
              // We don't care about the error. It should be seen elsewhere in the client.
              // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
              this.cleanupPingTimer();
              return [3 /*break*/, 4];
            case 4:return [2 /*return*/];}

        });
      });}, this.keepAliveIntervalInMilliseconds);
  };
  HubConnection.prototype.resetTimeoutPeriod = function () {
    var _this = this;
    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      // Set the timeout timer
      this.timeoutHandle = setTimeout(function () {return _this.serverTimeout();}, this.serverTimeoutInMilliseconds);
    }
  };
  HubConnection.prototype.serverTimeout = function () {
    // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
    // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
    // tslint:disable-next-line:no-floating-promises
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  };
  HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
    var _this = this;
    var methods = this.methods[invocationMessage.target.toLowerCase()];
    if (methods) {
      try {
        methods.forEach(function (m) {return m.apply(_this, invocationMessage.arguments);});
      }
      catch (e) {
        this.logger.log(_ILogger.LogLevel.Error, "A callback for the method " + invocationMessage.target.toLowerCase() + " threw error '" + e + "'.");
      }
      if (invocationMessage.invocationId) {
        // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
        var message = "Server requested a response, which is not supported in this version of the client.";
        this.logger.log(_ILogger.LogLevel.Error, message);
        // We don't want to wait on the stop itself.
        this.stopPromise = this.stopInternal(new Error(message));
      }
    } else
    {
      this.logger.log(_ILogger.LogLevel.Warning, "No client method with the name '" + invocationMessage.target + "' found.");
    }
  };
  HubConnection.prototype.connectionClosed = function (error) {
    this.logger.log(_ILogger.LogLevel.Debug, "HubConnection.connectionClosed(" + error + ") called while in state " + this.connectionState + ".");
    // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
    this.stopDuringStartError = this.stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
    // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
    // If it has already completed, this should just noop.
    if (this.handshakeResolver) {
      this.handshakeResolver();
    }
    this.cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
    this.cleanupTimeout();
    this.cleanupPingTimer();
    if (this.connectionState === HubConnectionState.Disconnecting) {
      this.completeClose(error);
    } else
    if (this.connectionState === HubConnectionState.Connected && this.reconnectPolicy) {
      // tslint:disable-next-line:no-floating-promises
      this.reconnect(error);
    } else
    if (this.connectionState === HubConnectionState.Connected) {
      this.completeClose(error);
    }
    // If none of the above if conditions were true were called the HubConnection must be in either:
    // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
    // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
    //    and potentially continue the reconnect() loop.
    // 3. The Disconnected state in which case we're already done.
  };
  HubConnection.prototype.completeClose = function (error) {
    var _this = this;
    if (this.connectionStarted) {
      this.connectionState = HubConnectionState.Disconnected;
      this.connectionStarted = false;
      try {
        this.closedCallbacks.forEach(function (c) {return c.apply(_this, [error]);});
      }
      catch (e) {
        this.logger.log(_ILogger.LogLevel.Error, "An onclose callback called with error '" + error + "' threw error '" + e + "'.");
      }
    }
  };
  HubConnection.prototype.reconnect = function (error) {
    return __awaiter(this, void 0, void 0, function () {
      var reconnectStartTime, previousReconnectAttempts, retryError, nextRetryDelay, e_4;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            reconnectStartTime = Date.now();
            previousReconnectAttempts = 0;
            retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
            nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
            if (nextRetryDelay === null) {
              this.logger.log(_ILogger.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
              this.completeClose(error);
              return [2 /*return*/];
            }
            this.connectionState = HubConnectionState.Reconnecting;
            if (error) {
              this.logger.log(_ILogger.LogLevel.Information, "Connection reconnecting because of error '" + error + "'.");
            } else
            {
              this.logger.log(_ILogger.LogLevel.Information, "Connection reconnecting.");
            }
            if (this.onreconnecting) {
              try {
                this.reconnectingCallbacks.forEach(function (c) {return c.apply(_this, [error]);});
              }
              catch (e) {
                this.logger.log(_ILogger.LogLevel.Error, "An onreconnecting callback called with error '" + error + "' threw error '" + e + "'.");
              }
              // Exit early if an onreconnecting callback called connection.stop().
              if (this.connectionState !== HubConnectionState.Reconnecting) {
                this.logger.log(_ILogger.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                return [2 /*return*/];
              }
            }
            _a.label = 1;
          case 1:
            if (!(nextRetryDelay !== null)) return [3 /*break*/, 7];
            this.logger.log(_ILogger.LogLevel.Information, "Reconnect attempt number " + previousReconnectAttempts + " will start in " + nextRetryDelay + " ms.");
            return [4 /*yield*/, new Promise(function (resolve) {
              _this.reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
            })];
          case 2:
            _a.sent();
            this.reconnectDelayHandle = undefined;
            if (this.connectionState !== HubConnectionState.Reconnecting) {
              this.logger.log(_ILogger.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
              return [2 /*return*/];
            }
            _a.label = 3;
          case 3:
            _a.trys.push([3, 5,, 6]);
            return [4 /*yield*/, this.startInternal()];
          case 4:
            _a.sent();
            this.connectionState = HubConnectionState.Connected;
            this.logger.log(_ILogger.LogLevel.Information, "HubConnection reconnected successfully.");
            if (this.onreconnected) {
              try {
                this.reconnectedCallbacks.forEach(function (c) {return c.apply(_this, [_this.connection.connectionId]);});
              }
              catch (e) {
                this.logger.log(_ILogger.LogLevel.Error, "An onreconnected callback called with connectionId '" + this.connection.connectionId + "; threw error '" + e + "'.");
              }
            }
            return [2 /*return*/];
          case 5:
            e_4 = _a.sent();
            this.logger.log(_ILogger.LogLevel.Information, "Reconnect attempt failed because of error '" + e_4 + "'.");
            if (this.connectionState !== HubConnectionState.Reconnecting) {
              this.logger.log(_ILogger.LogLevel.Debug, "Connection left the reconnecting state during reconnect attempt. Done reconnecting.");
              return [2 /*return*/];
            }
            retryError = e_4 instanceof Error ? e_4 : new Error(e_4.toString());
            nextRetryDelay = this.getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
            return [3 /*break*/, 6];
          case 6:return [3 /*break*/, 1];
          case 7:
            this.logger.log(_ILogger.LogLevel.Information, "Reconnect retries have been exhausted after " + (Date.now() - reconnectStartTime) + " ms and " + previousReconnectAttempts + " failed attempts. Connection disconnecting.");
            this.completeClose();
            return [2 /*return*/];}

      });
    });
  };
  HubConnection.prototype.getNextRetryDelay = function (previousRetryCount, elapsedMilliseconds, retryReason) {
    try {
      return this.reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: elapsedMilliseconds,
        previousRetryCount: previousRetryCount,
        retryReason: retryReason });

    }
    catch (e) {
      this.logger.log(_ILogger.LogLevel.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(" + previousRetryCount + ", " + elapsedMilliseconds + ") threw error '" + e + "'.");
      return null;
    }
  };
  HubConnection.prototype.cancelCallbacksWithError = function (error) {
    var callbacks = this.callbacks;
    this.callbacks = {};
    Object.keys(callbacks).
    forEach(function (key) {
      var callback = callbacks[key];
      callback(null, error);
    });
  };
  HubConnection.prototype.cleanupPingTimer = function () {
    if (this.pingServerHandle) {
      clearTimeout(this.pingServerHandle);
    }
  };
  HubConnection.prototype.cleanupTimeout = function () {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
  };
  HubConnection.prototype.createInvocation = function (methodName, args, nonblocking, streamIds) {
    if (nonblocking) {
      return {
        arguments: args,
        streamIds: streamIds,
        target: methodName,
        type: _IHubProtocol.MessageType.Invocation };

    } else
    {
      var invocationId = this.invocationId;
      this.invocationId++;
      return {
        arguments: args,
        invocationId: invocationId.toString(),
        streamIds: streamIds,
        target: methodName,
        type: _IHubProtocol.MessageType.Invocation };

    }
  };
  HubConnection.prototype.launchStreams = function (streams, promiseQueue) {
    var _this = this;
    if (streams.length === 0) {
      return;
    }
    // Synchronize stream data so they arrive in-order on the server
    if (!promiseQueue) {
      promiseQueue = Promise.resolve();
    }
    var _loop_1 = function _loop_1(streamId) {
      streams[streamId].subscribe({
        complete: function complete() {
          promiseQueue = promiseQueue.then(function () {return _this.sendWithProtocol(_this.createCompletionMessage(streamId));});
        },
        error: function error(err) {
          var message;
          if (err instanceof Error) {
            message = err.message;
          } else
          if (err && err.toString) {
            message = err.toString();
          } else
          {
            message = "Unknown error";
          }
          promiseQueue = promiseQueue.then(function () {return _this.sendWithProtocol(_this.createCompletionMessage(streamId, message));});
        },
        next: function next(item) {
          promiseQueue = promiseQueue.then(function () {return _this.sendWithProtocol(_this.createStreamItemMessage(streamId, item));});
        } });

    };
    // We want to iterate over the keys, since the keys are the stream ids
    // tslint:disable-next-line:forin
    for (var streamId in streams) {
      _loop_1(streamId);
    }
  };
  HubConnection.prototype.replaceStreamingParams = function (args) {
    var streams = [];
    var streamIds = [];
    for (var i = 0; i < args.length; i++) {
      var argument = args[i];
      if (this.isObservable(argument)) {
        var streamId = this.invocationId;
        this.invocationId++;
        // Store the stream for later use
        streams[streamId] = argument;
        streamIds.push(streamId.toString());
        // remove stream from args
        args.splice(i, 1);
      }
    }
    return [streams, streamIds];
  };
  HubConnection.prototype.isObservable = function (arg) {
    // This allows other stream implementations to just work (like rxjs)
    return arg && arg.subscribe && typeof arg.subscribe === "function";
  };
  HubConnection.prototype.createStreamInvocation = function (methodName, args, streamIds) {
    var invocationId = this.invocationId;
    this.invocationId++;
    return {
      arguments: args,
      invocationId: invocationId.toString(),
      streamIds: streamIds,
      target: methodName,
      type: _IHubProtocol.MessageType.StreamInvocation };

  };
  HubConnection.prototype.createCancelInvocation = function (id) {
    return {
      invocationId: id,
      type: _IHubProtocol.MessageType.CancelInvocation };

  };
  HubConnection.prototype.createStreamItemMessage = function (id, item) {
    return {
      invocationId: id,
      item: item,
      type: _IHubProtocol.MessageType.StreamItem };

  };
  HubConnection.prototype.createCompletionMessage = function (id, error, result) {
    if (error) {
      return {
        error: error,
        invocationId: id,
        type: _IHubProtocol.MessageType.Completion };

    }
    return {
      invocationId: id,
      result: result,
      type: _IHubProtocol.MessageType.Completion };

  };
  return HubConnection;
}();exports.HubConnection = HubConnection;

/***/ }),
/* 24 */
/*!*************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.HandshakeProtocol = void 0;

var _TextMessageFormat = __webpack_require__(/*! ./TextMessageFormat */ 25);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** @private */var HandshakeProtocol = /** @class */function () {
  function HandshakeProtocol() {
  }
  // Handshake request is always JSON
  HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
    return _TextMessageFormat.TextMessageFormat.write(JSON.stringify(handshakeRequest));
  };
  HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
    var responseMessage;
    var messageData;
    var remainingData;
    if ((0, _Utils.isArrayBuffer)(data) || typeof Buffer !== "undefined" && data instanceof Buffer) {
      // Format is binary but still need to read JSON text from handshake response
      var binaryData = new Uint8Array(data);
      var separatorIndex = binaryData.indexOf(_TextMessageFormat.TextMessageFormat.RecordSeparatorCode);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      // content before separator is handshake response
      // optional content after is additional messages
      var responseLength = separatorIndex + 1;
      messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
      remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
    } else
    {
      var textData = data;
      var separatorIndex = textData.indexOf(_TextMessageFormat.TextMessageFormat.RecordSeparator);
      if (separatorIndex === -1) {
        throw new Error("Message is incomplete.");
      }
      // content before separator is handshake response
      // optional content after is additional messages
      var responseLength = separatorIndex + 1;
      messageData = textData.substring(0, responseLength);
      remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
    }
    // At this point we should have just the single handshake message
    var messages = _TextMessageFormat.TextMessageFormat.parse(messageData);
    var response = JSON.parse(messages[0]);
    if (response.type) {
      throw new Error("Expected a handshake response from the server.");
    }
    responseMessage = response;
    // multiple messages could have arrived with handshake
    // return additional data to be parsed as usual, or null if all parsed
    return [remainingData, responseMessage];
  };
  return HandshakeProtocol;
}();exports.HandshakeProtocol = HandshakeProtocol;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 14).Buffer))

/***/ }),
/* 25 */
/*!*************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TextMessageFormat = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */function () {
  function TextMessageFormat() {
  }
  TextMessageFormat.write = function (output) {
    return "" + output + TextMessageFormat.RecordSeparator;
  };
  TextMessageFormat.parse = function (input) {
    if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
      throw new Error("Message is incomplete.");
    }
    var messages = input.split(TextMessageFormat.RecordSeparator);
    messages.pop();
    return messages;
  };
  TextMessageFormat.RecordSeparatorCode = 0x1e;
  TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
  return TextMessageFormat;
}();exports.TextMessageFormat = TextMessageFormat;

/***/ }),
/* 26 */
/*!********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.MessageType = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;exports.MessageType = MessageType;
(function (MessageType) {
  /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
  MessageType[MessageType["Invocation"] = 1] = "Invocation";
  /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
  MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
  /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
  MessageType[MessageType["Completion"] = 3] = "Completion";
  /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
  MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
  /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
  MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
  /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
  MessageType[MessageType["Ping"] = 6] = "Ping";
  /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
  MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (exports.MessageType = MessageType = {}));

/***/ }),
/* 27 */
/*!***************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Subject = void 0;

var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Stream implementation to stream items to the server. */var Subject = /** @class */function () {
  function Subject() {
    this.observers = [];
  }
  Subject.prototype.next = function (item) {
    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
      var observer = _a[_i];
      observer.next(item);
    }
  };
  Subject.prototype.error = function (err) {
    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
      var observer = _a[_i];
      if (observer.error) {
        observer.error(err);
      }
    }
  };
  Subject.prototype.complete = function () {
    for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
      var observer = _a[_i];
      if (observer.complete) {
        observer.complete();
      }
    }
  };
  Subject.prototype.subscribe = function (observer) {
    this.observers.push(observer);
    return new _Utils.SubjectSubscription(this, observer);
  };
  return Subject;
}();exports.Subject = Subject;

/***/ }),
/* 28 */
/*!****************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.HubConnectionBuilder = void 0;









var _DefaultReconnectPolicy = __webpack_require__(/*! ./DefaultReconnectPolicy */ 29);
var _HttpConnection = __webpack_require__(/*! ./HttpConnection */ 30);
var _HubConnection = __webpack_require__(/*! ./HubConnection */ 23);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _JsonHubProtocol = __webpack_require__(/*! ./JsonHubProtocol */ 36);
var _Loggers = __webpack_require__(/*! ./Loggers */ 21);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = void 0 && (void 0).__assign || Object.assign || function (t) {for (var s, i = 1, n = arguments.length; i < n; i++) {s = arguments[i];for (var p in s) {if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];}}return t;}; // tslint:disable:object-literal-sort-keys
var LogLevelNameMapping = { trace: _ILogger.LogLevel.Trace,
  debug: _ILogger.LogLevel.Debug,
  info: _ILogger.LogLevel.Information,
  information: _ILogger.LogLevel.Information,
  warn: _ILogger.LogLevel.Warning,
  warning: _ILogger.LogLevel.Warning,
  error: _ILogger.LogLevel.Error,
  critical: _ILogger.LogLevel.Critical,
  none: _ILogger.LogLevel.None };

function parseLogLevel(name) {
  // Case-insensitive matching via lower-casing
  // Yes, I know case-folding is a complicated problem in Unicode, but we only support
  // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
  var mapping = LogLevelNameMapping[name.toLowerCase()];
  if (typeof mapping !== "undefined") {
    return mapping;
  } else
  {
    throw new Error("Unknown log level: " + name);
  }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */function () {
  function HubConnectionBuilder() {
  }
  HubConnectionBuilder.prototype.configureLogging = function (logging) {
    _Utils.Arg.isRequired(logging, "logging");
    if (isLogger(logging)) {
      this.logger = logging;
    } else
    if (typeof logging === "string") {
      var logLevel = parseLogLevel(logging);
      this.logger = new _Utils.ConsoleLogger(logLevel);
    } else
    {
      this.logger = new _Utils.ConsoleLogger(logging);
    }
    return this;
  };
  HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
    _Utils.Arg.isRequired(url, "url");
    this.url = url;
    // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
    // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
    if (typeof transportTypeOrOptions === "object") {
      this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, transportTypeOrOptions);
    } else
    {
      this.httpConnectionOptions = __assign({}, this.httpConnectionOptions, { transport: transportTypeOrOptions });
    }
    return this;
  };
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
      *
      * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
      */
  HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
    _Utils.Arg.isRequired(protocol, "protocol");
    this.protocol = protocol;
    return this;
  };
  HubConnectionBuilder.prototype.withAutomaticReconnect = function (retryDelaysOrReconnectPolicy) {
    if (this.reconnectPolicy) {
      throw new Error("A reconnectPolicy has already been set.");
    }
    if (!retryDelaysOrReconnectPolicy) {
      this.reconnectPolicy = new _DefaultReconnectPolicy.DefaultReconnectPolicy();
    } else
    if (Array.isArray(retryDelaysOrReconnectPolicy)) {
      this.reconnectPolicy = new _DefaultReconnectPolicy.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
    } else
    {
      this.reconnectPolicy = retryDelaysOrReconnectPolicy;
    }
    return this;
  };
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
      *
      * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
      */
  HubConnectionBuilder.prototype.build = function () {
    // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
    // provided to configureLogger
    var httpConnectionOptions = this.httpConnectionOptions || {};
    // If it's 'null', the user **explicitly** asked for null, don't mess with it.
    if (httpConnectionOptions.logger === undefined) {
      // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
      httpConnectionOptions.logger = this.logger;
    }
    // Now create the connection
    if (!this.url) {
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    }
    var connection = new _HttpConnection.HttpConnection(this.url, httpConnectionOptions);
    return _HubConnection.HubConnection.create(connection, this.logger || _Loggers.NullLogger.instance, this.protocol || new _JsonHubProtocol.JsonHubProtocol(), this.reconnectPolicy);
  };
  return HubConnectionBuilder;
}();exports.HubConnectionBuilder = HubConnectionBuilder;

function isLogger(logger) {
  return logger.log !== undefined;
}

/***/ }),
/* 29 */
/*!******************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.DefaultReconnectPolicy = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// 0, 2, 10, 30 second delays before reconnect attempts.
var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
var DefaultReconnectPolicy = /** @class */function () {
  function DefaultReconnectPolicy(retryDelays) {
    this.retryDelays = retryDelays !== undefined ? retryDelays.concat([null]) : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
  }
  DefaultReconnectPolicy.prototype.nextRetryDelayInMilliseconds = function (retryContext) {
    return this.retryDelays[retryContext.previousRetryCount];
  };
  return DefaultReconnectPolicy;
}();exports.DefaultReconnectPolicy = DefaultReconnectPolicy;

/***/ }),
/* 30 */
/*!**********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TransportSendQueue = exports.HttpConnection = void 0;




































var _DefaultHttpClient = __webpack_require__(/*! ./DefaultHttpClient */ 12);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _LongPollingTransport = __webpack_require__(/*! ./LongPollingTransport */ 32);
var _ServerSentEventsTransport = __webpack_require__(/*! ./ServerSentEventsTransport */ 34);
var _Utils = __webpack_require__(/*! ./Utils */ 20);
var _WebSocketTransport = __webpack_require__(/*! ./WebSocketTransport */ 35); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}};var MAX_REDIRECTS = 100;var WebSocketModule = null;
var EventSourceModule = null;
if (_Utils.Platform.isNode && "function" !== "undefined") {
  // In order to ignore the dynamic require in webpack builds we need to do this magic
  // @ts-ignore: TS doesn't know about these names
  var requireFunc =  true ? require : undefined;
  WebSocketModule = requireFunc("ws");
  EventSourceModule = requireFunc("eventsource");
}
/** @private */
var HttpConnection = /** @class */function () {
  function HttpConnection(url, options) {
    if (options === void 0) {options = {};}
    this.features = {};
    this.negotiateVersion = 1;
    _Utils.Arg.isRequired(url, "url");
    this.logger = (0, _Utils.createLogger)(options.logger);
    this.baseUrl = this.resolveUrl(url);
    options = options || {};
    options.logMessageContent = options.logMessageContent || false;
    if (!_Utils.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
      options.WebSocket = WebSocket;
    } else
    if (_Utils.Platform.isNode && !options.WebSocket) {
      if (WebSocketModule) {
        options.WebSocket = WebSocketModule;
      }
    }
    if (!_Utils.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
      options.EventSource = EventSource;
    } else
    if (_Utils.Platform.isNode && !options.EventSource) {
      if (typeof EventSourceModule !== "undefined") {
        options.EventSource = EventSourceModule;
      }
    }
    this.httpClient = options.httpClient || new _DefaultHttpClient.DefaultHttpClient(this.logger);
    this.connectionState = "Disconnected" /* Disconnected */;
    this.connectionStarted = false;
    this.options = options;
    this.onreceive = null;
    this.onclose = null;
  }
  HttpConnection.prototype.start = function (transferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var message, message;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            transferFormat = transferFormat || _ITransport.TransferFormat.Binary;
            _Utils.Arg.isIn(transferFormat, _ITransport.TransferFormat, "transferFormat");
            this.logger.log(_ILogger.LogLevel.Debug, "Starting connection with transfer format '" + _ITransport.TransferFormat[transferFormat] + "'.");
            if (this.connectionState !== "Disconnected" /* Disconnected */) {
                return [2 /*return*/, Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."))];
              }
            this.connectionState = "Connecting " /* Connecting */;
            this.startInternalPromise = this.startInternal(transferFormat);
            return [4 /*yield*/, this.startInternalPromise];
          case 1:
            _a.sent();
            if (!(this.connectionState === "Disconnecting" /* Disconnecting */)) return [3 /*break*/, 3];
            message = "Failed to start the HttpConnection before stop() was called.";
            this.logger.log(_ILogger.LogLevel.Error, message);
            // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
            return [4 /*yield*/, this.stopPromise];
          case 2:
            // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
            _a.sent();
            return [2 /*return*/, Promise.reject(new Error(message))];
          case 3:
            if (this.connectionState !== "Connected" /* Connected */) {
                message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                this.logger.log(_ILogger.LogLevel.Error, message);
                return [2 /*return*/, Promise.reject(new Error(message))];
              }
            _a.label = 4;
          case 4:
            this.connectionStarted = true;
            return [2 /*return*/];}

      });
    });
  };
  HttpConnection.prototype.send = function (data) {
    if (this.connectionState !== "Connected" /* Connected */) {
        return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
      }
    if (!this.sendQueue) {
      this.sendQueue = new TransportSendQueue(this.transport);
    }
    // Transport will not be null if state is connected
    return this.sendQueue.send(data);
  };
  HttpConnection.prototype.stop = function (error) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (this.connectionState === "Disconnected" /* Disconnected */) {
                this.logger.log(_ILogger.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnected state.");
                return [2 /*return*/, Promise.resolve()];
              }
            if (this.connectionState === "Disconnecting" /* Disconnecting */) {
                this.logger.log(_ILogger.LogLevel.Debug, "Call to HttpConnection.stop(" + error + ") ignored because the connection is already in the disconnecting state.");
                return [2 /*return*/, this.stopPromise];
              }
            this.connectionState = "Disconnecting" /* Disconnecting */;
            this.stopPromise = new Promise(function (resolve) {
              // Don't complete stop() until stopConnection() completes.
              _this.stopPromiseResolver = resolve;
            });
            // stopInternal should never throw so just observe it.
            return [4 /*yield*/, this.stopInternal(error)];
          case 1:
            // stopInternal should never throw so just observe it.
            _a.sent();
            return [4 /*yield*/, this.stopPromise];
          case 2:
            _a.sent();
            return [2 /*return*/];}

      });
    });
  };
  HttpConnection.prototype.stopInternal = function (error) {
    return __awaiter(this, void 0, void 0, function () {
      var e_1, e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            // Set error as soon as possible otherwise there is a race between
            // the transport closing and providing an error and the error from a close message
            // We would prefer the close message error.
            this.stopError = error;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, this.startInternalPromise];
          case 2:
            _a.sent();
            return [3 /*break*/, 4];
          case 3:
            e_1 = _a.sent();
            return [3 /*break*/, 4];
          case 4:
            if (!this.transport) return [3 /*break*/, 9];
            _a.label = 5;
          case 5:
            _a.trys.push([5, 7,, 8]);
            return [4 /*yield*/, this.transport.stop()];
          case 6:
            _a.sent();
            return [3 /*break*/, 8];
          case 7:
            e_2 = _a.sent();
            this.logger.log(_ILogger.LogLevel.Error, "HttpConnection.transport.stop() threw error '" + e_2 + "'.");
            this.stopConnection();
            return [3 /*break*/, 8];
          case 8:
            this.transport = undefined;
            return [3 /*break*/, 10];
          case 9:
            this.logger.log(_ILogger.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
            this.stopConnection();
            _a.label = 10;
          case 10:return [2 /*return*/];}

      });
    });
  };
  HttpConnection.prototype.startInternal = function (transferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var url, negotiateResponse, redirects, _loop_1, this_1, e_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            url = this.baseUrl;
            this.accessTokenFactory = this.options.accessTokenFactory;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 12,, 13]);
            if (!this.options.skipNegotiation) return [3 /*break*/, 5];
            if (!(this.options.transport === _ITransport.HttpTransportType.WebSockets)) return [3 /*break*/, 3];
            // No need to add a connection ID in this case
            this.transport = this.constructTransport(_ITransport.HttpTransportType.WebSockets);
            // We should just call connect directly in this case.
            // No fallback or negotiate in this case.
            return [4 /*yield*/, this.startTransport(url, transferFormat)];
          case 2:
            // We should just call connect directly in this case.
            // No fallback or negotiate in this case.
            _a.sent();
            return [3 /*break*/, 4];
          case 3:throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
          case 4:return [3 /*break*/, 11];
          case 5:
            negotiateResponse = null;
            redirects = 0;
            _loop_1 = function _loop_1() {
              var accessToken_1;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                  case 1:
                    negotiateResponse = _a.sent();
                    // the user tries to stop the connection when it is being started
                    if (this_1.connectionState === "Disconnecting" /* Disconnecting */ || this_1.connectionState === "Disconnected" /* Disconnected */) {
                        throw new Error("The connection was stopped during negotiation.");
                      }
                    if (negotiateResponse.error) {
                      throw new Error(negotiateResponse.error);
                    }
                    if (negotiateResponse.ProtocolVersion) {
                      throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                    }
                    if (negotiateResponse.url) {
                      url = negotiateResponse.url;
                    }
                    if (negotiateResponse.accessToken) {
                      accessToken_1 = negotiateResponse.accessToken;
                      this_1.accessTokenFactory = function () {return accessToken_1;};
                    }
                    redirects++;
                    return [2 /*return*/];}

              });
            };
            this_1 = this;
            _a.label = 6;
          case 6:return [5 /*yield**/, _loop_1()];
          case 7:
            _a.sent();
            _a.label = 8;
          case 8:
            if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
            _a.label = 9;
          case 9:
            if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
              throw new Error("Negotiate redirection limit exceeded.");
            }
            return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
          case 10:
            _a.sent();
            _a.label = 11;
          case 11:
            if (this.transport instanceof _LongPollingTransport.LongPollingTransport) {
              this.features.inherentKeepAlive = true;
            }
            if (this.connectionState === "Connecting " /* Connecting */) {
                // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                this.logger.log(_ILogger.LogLevel.Debug, "The HttpConnection connected successfully.");
                this.connectionState = "Connected" /* Connected */;
              }
            return [3 /*break*/, 13];
          case 12:
            e_3 = _a.sent();
            this.logger.log(_ILogger.LogLevel.Error, "Failed to start the connection: " + e_3);
            this.connectionState = "Disconnected" /* Disconnected */;
            this.transport = undefined;
            return [2 /*return*/, Promise.reject(e_3)];
          case 13:return [2 /*return*/];}

      });
    });
  };
  HttpConnection.prototype.getNegotiationResponse = function (url) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, headers, token, negotiateUrl, response, negotiateResponse, e_4;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!this.accessTokenFactory) return [3 /*break*/, 2];
            return [4 /*yield*/, this.accessTokenFactory()];
          case 1:
            token = _b.sent();
            if (token) {
              headers = (_a = {},
              _a["Authorization"] = "Bearer " + token,
              _a);
            }
            _b.label = 2;
          case 2:
            negotiateUrl = this.resolveNegotiateUrl(url);
            this.logger.log(_ILogger.LogLevel.Debug, "Sending negotiation request: " + negotiateUrl + ".");
            _b.label = 3;
          case 3:
            _b.trys.push([3, 5,, 6]);
            return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
              content: "",
              headers: headers })];

          case 4:
            response = _b.sent();
            if (response.statusCode !== 200) {
              return [2 /*return*/, Promise.reject(new Error("Unexpected status code returned from negotiate " + response.statusCode))];
            }
            negotiateResponse = JSON.parse(response.content);
            if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
              // Negotiate version 0 doesn't use connectionToken
              // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
              negotiateResponse.connectionToken = negotiateResponse.connectionId;
            }
            return [2 /*return*/, negotiateResponse];
          case 5:
            e_4 = _b.sent();
            this.logger.log(_ILogger.LogLevel.Error, "Failed to complete negotiation with the server: " + e_4);
            return [2 /*return*/, Promise.reject(e_4)];
          case 6:return [2 /*return*/];}

      });
    });
  };
  HttpConnection.prototype.createConnectUrl = function (url, connectionToken) {
    if (!connectionToken) {
      return url;
    }
    return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionToken);
  };
  HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var connectUrl, transportExceptions, transports, negotiate, _i, transports_1, endpoint, transportOrError, ex_1, ex_2, message;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            connectUrl = this.createConnectUrl(url, negotiateResponse.connectionToken);
            if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
            this.logger.log(_ILogger.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
            this.transport = requestedTransport;
            return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
          case 1:
            _a.sent();
            this.connectionId = negotiateResponse.connectionId;
            return [2 /*return*/];
          case 2:
            transportExceptions = [];
            transports = negotiateResponse.availableTransports || [];
            negotiate = negotiateResponse;
            _i = 0, transports_1 = transports;
            _a.label = 3;
          case 3:
            if (!(_i < transports_1.length)) return [3 /*break*/, 13];
            endpoint = transports_1[_i];
            transportOrError = this.resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
            if (!(transportOrError instanceof Error)) return [3 /*break*/, 4];
            // Store the error and continue, we don't want to cause a re-negotiate in these cases
            transportExceptions.push(endpoint.transport + " failed: " + transportOrError);
            return [3 /*break*/, 12];
          case 4:
            if (!this.isITransport(transportOrError)) return [3 /*break*/, 12];
            this.transport = transportOrError;
            if (!!negotiate) return [3 /*break*/, 9];
            _a.label = 5;
          case 5:
            _a.trys.push([5, 7,, 8]);
            return [4 /*yield*/, this.getNegotiationResponse(url)];
          case 6:
            negotiate = _a.sent();
            return [3 /*break*/, 8];
          case 7:
            ex_1 = _a.sent();
            return [2 /*return*/, Promise.reject(ex_1)];
          case 8:
            connectUrl = this.createConnectUrl(url, negotiate.connectionToken);
            _a.label = 9;
          case 9:
            _a.trys.push([9, 11,, 12]);
            return [4 /*yield*/, this.startTransport(connectUrl, requestedTransferFormat)];
          case 10:
            _a.sent();
            this.connectionId = negotiate.connectionId;
            return [2 /*return*/];
          case 11:
            ex_2 = _a.sent();
            this.logger.log(_ILogger.LogLevel.Error, "Failed to start the transport '" + endpoint.transport + "': " + ex_2);
            negotiate = undefined;
            transportExceptions.push(endpoint.transport + " failed: " + ex_2);
            if (this.connectionState !== "Connecting " /* Connecting */) {
                message = "Failed to select transport before stop() was called.";
                this.logger.log(_ILogger.LogLevel.Debug, message);
                return [2 /*return*/, Promise.reject(new Error(message))];
              }
            return [3 /*break*/, 12];
          case 12:
            _i++;
            return [3 /*break*/, 3];
          case 13:
            if (transportExceptions.length > 0) {
              return [2 /*return*/, Promise.reject(new Error("Unable to connect to the server with any of the available transports. " + transportExceptions.join(" ")))];
            }
            return [2 /*return*/, Promise.reject(new Error("None of the transports supported by the client are supported by the server."))];}

      });
    });
  };
  HttpConnection.prototype.constructTransport = function (transport) {
    switch (transport) {
      case _ITransport.HttpTransportType.WebSockets:
        if (!this.options.WebSocket) {
          throw new Error("'WebSocket' is not supported in your environment.");
        }
        return new _WebSocketTransport.WebSocketTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
      case _ITransport.HttpTransportType.ServerSentEvents:
        if (!this.options.EventSource) {
          throw new Error("'EventSource' is not supported in your environment.");
        }
        return new _ServerSentEventsTransport.ServerSentEventsTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
      case _ITransport.HttpTransportType.LongPolling:
        return new _LongPollingTransport.LongPollingTransport(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
      default:
        throw new Error("Unknown transport: " + transport + ".");}

  };
  HttpConnection.prototype.startTransport = function (url, transferFormat) {
    var _this = this;
    this.transport.onreceive = this.onreceive;
    this.transport.onclose = function (e) {return _this.stopConnection(e);};
    return this.transport.connect(url, transferFormat);
  };
  HttpConnection.prototype.resolveTransportOrError = function (endpoint, requestedTransport, requestedTransferFormat) {
    var transport = _ITransport.HttpTransportType[endpoint.transport];
    if (transport === null || transport === undefined) {
      this.logger.log(_ILogger.LogLevel.Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
      return new Error("Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
    } else
    {
      if (transportMatches(requestedTransport, transport)) {
        var transferFormats = endpoint.transferFormats.map(function (s) {return _ITransport.TransferFormat[s];});
        if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
          if (transport === _ITransport.HttpTransportType.WebSockets && !this.options.WebSocket ||
          transport === _ITransport.HttpTransportType.ServerSentEvents && !this.options.EventSource) {
            this.logger.log(_ILogger.LogLevel.Debug, "Skipping transport '" + _ITransport.HttpTransportType[transport] + "' because it is not supported in your environment.'");
            return new Error("'" + _ITransport.HttpTransportType[transport] + "' is not supported in your environment.");
          } else
          {
            this.logger.log(_ILogger.LogLevel.Debug, "Selecting transport '" + _ITransport.HttpTransportType[transport] + "'.");
            try {
              return this.constructTransport(transport);
            }
            catch (ex) {
              return ex;
            }
          }
        } else
        {
          this.logger.log(_ILogger.LogLevel.Debug, "Skipping transport '" + _ITransport.HttpTransportType[transport] + "' because it does not support the requested transfer format '" + _ITransport.TransferFormat[requestedTransferFormat] + "'.");
          return new Error("'" + _ITransport.HttpTransportType[transport] + "' does not support " + _ITransport.TransferFormat[requestedTransferFormat] + ".");
        }
      } else
      {
        this.logger.log(_ILogger.LogLevel.Debug, "Skipping transport '" + _ITransport.HttpTransportType[transport] + "' because it was disabled by the client.");
        return new Error("'" + _ITransport.HttpTransportType[transport] + "' is disabled by the client.");
      }
    }
  };
  HttpConnection.prototype.isITransport = function (transport) {
    return transport && typeof transport === "object" && "connect" in transport;
  };
  HttpConnection.prototype.stopConnection = function (error) {
    var _this = this;
    this.logger.log(_ILogger.LogLevel.Debug, "HttpConnection.stopConnection(" + error + ") called while in state " + this.connectionState + ".");
    this.transport = undefined;
    // If we have a stopError, it takes precedence over the error from the transport
    error = this.stopError || error;
    this.stopError = undefined;
    if (this.connectionState === "Disconnected" /* Disconnected */) {
        this.logger.log(_ILogger.LogLevel.Debug, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection is already in the disconnected state.");
        return;
      }
    if (this.connectionState === "Connecting " /* Connecting */) {
        this.logger.log(_ILogger.LogLevel.Warning, "Call to HttpConnection.stopConnection(" + error + ") was ignored because the connection hasn't yet left the in the connecting state.");
        return;
      }
    if (this.connectionState === "Disconnecting" /* Disconnecting */) {
        // A call to stop() induced this call to stopConnection and needs to be completed.
        // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
        this.stopPromiseResolver();
      }
    if (error) {
      this.logger.log(_ILogger.LogLevel.Error, "Connection disconnected with error '" + error + "'.");
    } else
    {
      this.logger.log(_ILogger.LogLevel.Information, "Connection disconnected.");
    }
    if (this.sendQueue) {
      this.sendQueue.stop().catch(function (e) {
        _this.logger.log(_ILogger.LogLevel.Error, "TransportSendQueue.stop() threw error '" + e + "'.");
      });
      this.sendQueue = undefined;
    }
    this.connectionId = undefined;
    this.connectionState = "Disconnected" /* Disconnected */;
    if (this.connectionStarted) {
      this.connectionStarted = false;
      try {
        if (this.onclose) {
          this.onclose(error);
        }
      }
      catch (e) {
        this.logger.log(_ILogger.LogLevel.Error, "HttpConnection.onclose(" + error + ") threw error '" + e + "'.");
      }
    }
  };
  HttpConnection.prototype.resolveUrl = function (url) {
    // startsWith is not supported in IE
    if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
      return url;
    }
    if (!_Utils.Platform.isBrowser || !window.document) {
      throw new Error("Cannot resolve '" + url + "'.");
    }
    // Setting the url to the href propery of an anchor tag handles normalization
    // for us. There are 3 main cases.
    // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
    // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
    // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
    var aTag = window.document.createElement("a");
    aTag.href = url;
    this.logger.log(_ILogger.LogLevel.Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
    return aTag.href;
  };
  HttpConnection.prototype.resolveNegotiateUrl = function (url) {
    var index = url.indexOf("?");
    var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
    if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
      negotiateUrl += "/";
    }
    negotiateUrl += "negotiate";
    negotiateUrl += index === -1 ? "" : url.substring(index);
    if (negotiateUrl.indexOf("negotiateVersion") === -1) {
      negotiateUrl += index === -1 ? "?" : "&";
      negotiateUrl += "negotiateVersion=" + this.negotiateVersion;
    }
    return negotiateUrl;
  };
  return HttpConnection;
}();exports.HttpConnection = HttpConnection;

function transportMatches(requestedTransport, actualTransport) {
  return !requestedTransport || (actualTransport & requestedTransport) !== 0;
}
/** @private */
var TransportSendQueue = /** @class */function () {
  function TransportSendQueue(transport) {
    this.transport = transport;
    this.buffer = [];
    this.executing = true;
    this.sendBufferedData = new PromiseSource();
    this.transportResult = new PromiseSource();
    this.sendLoopPromise = this.sendLoop();
  }
  TransportSendQueue.prototype.send = function (data) {
    this.bufferData(data);
    if (!this.transportResult) {
      this.transportResult = new PromiseSource();
    }
    return this.transportResult.promise;
  };
  TransportSendQueue.prototype.stop = function () {
    this.executing = false;
    this.sendBufferedData.resolve();
    return this.sendLoopPromise;
  };
  TransportSendQueue.prototype.bufferData = function (data) {
    if (this.buffer.length && typeof this.buffer[0] !== typeof data) {
      throw new Error("Expected data to be of type " + typeof this.buffer + " but was of type " + typeof data);
    }
    this.buffer.push(data);
    this.sendBufferedData.resolve();
  };
  TransportSendQueue.prototype.sendLoop = function () {
    return __awaiter(this, void 0, void 0, function () {
      var transportResult, data, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (false) {}
            return [4 /*yield*/, this.sendBufferedData.promise];
          case 1:
            _a.sent();
            if (!this.executing) {
              if (this.transportResult) {
                this.transportResult.reject("Connection stopped.");
              }
              return [3 /*break*/, 6];
            }
            this.sendBufferedData = new PromiseSource();
            transportResult = this.transportResult;
            this.transportResult = undefined;
            data = typeof this.buffer[0] === "string" ?
            this.buffer.join("") :
            TransportSendQueue.concatBuffers(this.buffer);
            this.buffer.length = 0;
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4,, 5]);
            return [4 /*yield*/, this.transport.send(data)];
          case 3:
            _a.sent();
            transportResult.resolve();
            return [3 /*break*/, 5];
          case 4:
            error_1 = _a.sent();
            transportResult.reject(error_1);
            return [3 /*break*/, 5];
          case 5:return [3 /*break*/, 0];
          case 6:return [2 /*return*/];}

      });
    });
  };
  TransportSendQueue.concatBuffers = function (arrayBuffers) {
    var totalLength = arrayBuffers.map(function (b) {return b.byteLength;}).reduce(function (a, b) {return a + b;});
    var result = new Uint8Array(totalLength);
    var offset = 0;
    for (var _i = 0, arrayBuffers_1 = arrayBuffers; _i < arrayBuffers_1.length; _i++) {
      var item = arrayBuffers_1[_i];
      result.set(new Uint8Array(item), offset);
      offset += item.byteLength;
    }
    return result;
  };
  return TransportSendQueue;
}();exports.TransportSendQueue = TransportSendQueue;

var PromiseSource = /** @class */function () {
  function PromiseSource() {
    var _this = this;
    this.promise = new Promise(function (resolve, reject) {
      var _a;
      return _a = [resolve, reject], _this.resolver = _a[0], _this.rejecter = _a[1], _a;
    });
  }
  PromiseSource.prototype.resolve = function () {
    this.resolver();
  };
  PromiseSource.prototype.reject = function (reason) {
    this.rejecter(reason);
  };
  return PromiseSource;
}();

/***/ }),
/* 31 */
/*!******************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.TransferFormat = exports.HttpTransportType = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;exports.HttpTransportType = HttpTransportType;
(function (HttpTransportType) {
  /** Specifies no transport preference. */
  HttpTransportType[HttpTransportType["None"] = 0] = "None";
  /** Specifies the WebSockets transport. */
  HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
  /** Specifies the Server-Sent Events transport. */
  HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
  /** Specifies the Long Polling transport. */
  HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (exports.HttpTransportType = HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;exports.TransferFormat = TransferFormat;
(function (TransferFormat) {
  /** Specifies that only text data will be transmitted over the connection. */
  TransferFormat[TransferFormat["Text"] = 1] = "Text";
  /** Specifies that binary data will be transmitted over the connection. */
  TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (exports.TransferFormat = TransferFormat = {}));

/***/ }),
/* 32 */
/*!****************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.LongPollingTransport = void 0;




































var _AbortController = __webpack_require__(/*! ./AbortController */ 33);
var _Errors = __webpack_require__(/*! ./Errors */ 10);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}}; // Not exported from 'index', this type is internal.
/** @private */var LongPollingTransport = /** @class */function () {
  function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
    this.httpClient = httpClient;
    this.accessTokenFactory = accessTokenFactory;
    this.logger = logger;
    this.pollAbort = new _AbortController.AbortController();
    this.logMessageContent = logMessageContent;
    this.running = false;
    this.onreceive = null;
    this.onclose = null;
  }
  Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
    // This is an internal type, not exported from 'index' so this is really just internal.
    get: function get() {
      return this.pollAbort.aborted;
    },
    enumerable: true,
    configurable: true });

  LongPollingTransport.prototype.connect = function (url, transferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var pollOptions, token, pollUrl, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _Utils.Arg.isRequired(url, "url");
            _Utils.Arg.isRequired(transferFormat, "transferFormat");
            _Utils.Arg.isIn(transferFormat, _ITransport.TransferFormat, "transferFormat");
            this.url = url;
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Connecting.");
            // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
            if (transferFormat === _ITransport.TransferFormat.Binary &&
            typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string") {
              throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
            }
            pollOptions = {
              abortSignal: this.pollAbort.signal,
              headers: {},
              timeout: 100000 };

            if (transferFormat === _ITransport.TransferFormat.Binary) {
              pollOptions.responseType = "arraybuffer";
            }
            return [4 /*yield*/, this.getAccessToken()];
          case 1:
            token = _a.sent();
            this.updateHeaderToken(pollOptions, token);
            pollUrl = url + "&_=" + Date.now();
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
            return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
          case 2:
            response = _a.sent();
            if (response.statusCode !== 200) {
              this.logger.log(_ILogger.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
              // Mark running as false so that the poll immediately ends and runs the close logic
              this.closeError = new _Errors.HttpError(response.statusText || "", response.statusCode);
              this.running = false;
            } else
            {
              this.running = true;
            }
            this.receiving = this.poll(this.url, pollOptions);
            return [2 /*return*/];}

      });
    });
  };
  LongPollingTransport.prototype.getAccessToken = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.accessTokenFactory) return [3 /*break*/, 2];
            return [4 /*yield*/, this.accessTokenFactory()];
          case 1:return [2 /*return*/, _a.sent()];
          case 2:return [2 /*return*/, null];}

      });
    });
  };
  LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
    if (!request.headers) {
      request.headers = {};
    }
    if (token) {
      // tslint:disable-next-line:no-string-literal
      request.headers["Authorization"] = "Bearer " + token;
      return;
    }
    // tslint:disable-next-line:no-string-literal
    if (request.headers["Authorization"]) {
      // tslint:disable-next-line:no-string-literal
      delete request.headers["Authorization"];
    }
  };
  LongPollingTransport.prototype.poll = function (url, pollOptions) {
    return __awaiter(this, void 0, void 0, function () {
      var token, pollUrl, response, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0,, 8, 9]);
            _a.label = 1;
          case 1:
            if (!this.running) return [3 /*break*/, 7];
            return [4 /*yield*/, this.getAccessToken()];
          case 2:
            token = _a.sent();
            this.updateHeaderToken(pollOptions, token);
            _a.label = 3;
          case 3:
            _a.trys.push([3, 5,, 6]);
            pollUrl = url + "&_=" + Date.now();
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) polling: " + pollUrl + ".");
            return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
          case 4:
            response = _a.sent();
            if (response.statusCode === 204) {
              this.logger.log(_ILogger.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
              this.running = false;
            } else
            if (response.statusCode !== 200) {
              this.logger.log(_ILogger.LogLevel.Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
              // Unexpected status code
              this.closeError = new _Errors.HttpError(response.statusText || "", response.statusCode);
              this.running = false;
            } else
            {
              // Process the response
              if (response.content) {
                this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) data received. " + (0, _Utils.getDataDetail)(response.content, this.logMessageContent) + ".");
                if (this.onreceive) {
                  this.onreceive(response.content);
                }
              } else
              {
                // This is another way timeout manifest.
                this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              }
            }
            return [3 /*break*/, 6];
          case 5:
            e_1 = _a.sent();
            if (!this.running) {
              // Log but disregard errors that occur after stopping
              this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
            } else
            {
              if (e_1 instanceof _Errors.TimeoutError) {
                // Ignore timeouts and reissue the poll.
                this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
              } else
              {
                // Close the connection with the error as the result.
                this.closeError = e_1;
                this.running = false;
              }
            }
            return [3 /*break*/, 6];
          case 6:return [3 /*break*/, 1];
          case 7:return [3 /*break*/, 9];
          case 8:
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Polling complete.");
            // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
            // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
            if (!this.pollAborted) {
              this.raiseOnClose();
            }
            return [7 /*endfinally*/];
          case 9:return [2 /*return*/];}

      });
    });
  };
  LongPollingTransport.prototype.send = function (data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (!this.running) {
          return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
        }
        return [2 /*return*/, (0, _Utils.sendMessage)(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
      });
    });
  };
  LongPollingTransport.prototype.stop = function () {
    return __awaiter(this, void 0, void 0, function () {
      var deleteOptions, token;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
            // Tell receiving loop to stop, abort any current request, and then wait for it to finish
            this.running = false;
            this.pollAbort.abort();
            _a.label = 1;
          case 1:
            _a.trys.push([1,, 5, 6]);
            return [4 /*yield*/, this.receiving];
          case 2:
            _a.sent();
            // Send DELETE to clean up long polling on the server
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
            deleteOptions = {
              headers: {} };

            return [4 /*yield*/, this.getAccessToken()];
          case 3:
            token = _a.sent();
            this.updateHeaderToken(deleteOptions, token);
            return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
          case 4:
            _a.sent();
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
            return [3 /*break*/, 6];
          case 5:
            this.logger.log(_ILogger.LogLevel.Trace, "(LongPolling transport) Stop finished.");
            // Raise close event here instead of in polling
            // It needs to happen after the DELETE request is sent
            this.raiseOnClose();
            return [7 /*endfinally*/];
          case 6:return [2 /*return*/];}

      });
    });
  };
  LongPollingTransport.prototype.raiseOnClose = function () {
    if (this.onclose) {
      var logMessage = "(LongPolling transport) Firing onclose event.";
      if (this.closeError) {
        logMessage += " Error: " + this.closeError;
      }
      this.logger.log(_ILogger.LogLevel.Trace, logMessage);
      this.onclose(this.closeError);
    }
  };
  return LongPollingTransport;
}();exports.LongPollingTransport = LongPollingTransport;

/***/ }),
/* 33 */
/*!***********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.AbortController = void 0; // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */function () {
  function AbortController() {
    this.isAborted = false;
    this.onabort = null;
  }
  AbortController.prototype.abort = function () {
    if (!this.isAborted) {
      this.isAborted = true;
      if (this.onabort) {
        this.onabort();
      }
    }
  };
  Object.defineProperty(AbortController.prototype, "signal", {
    get: function get() {
      return this;
    },
    enumerable: true,
    configurable: true });

  Object.defineProperty(AbortController.prototype, "aborted", {
    get: function get() {
      return this.isAborted;
    },
    enumerable: true,
    configurable: true });

  return AbortController;
}();exports.AbortController = AbortController;

/***/ }),
/* 34 */
/*!*********************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.ServerSentEventsTransport = void 0;




































var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}}; /** @private */var ServerSentEventsTransport = /** @class */function () {
  function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
    this.httpClient = httpClient;
    this.accessTokenFactory = accessTokenFactory;
    this.logger = logger;
    this.logMessageContent = logMessageContent;
    this.eventSourceConstructor = eventSourceConstructor;
    this.onreceive = null;
    this.onclose = null;
  }
  ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var token;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _Utils.Arg.isRequired(url, "url");
            _Utils.Arg.isRequired(transferFormat, "transferFormat");
            _Utils.Arg.isIn(transferFormat, _ITransport.TransferFormat, "transferFormat");
            this.logger.log(_ILogger.LogLevel.Trace, "(SSE transport) Connecting.");
            // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
            this.url = url;
            if (!this.accessTokenFactory) return [3 /*break*/, 2];
            return [4 /*yield*/, this.accessTokenFactory()];
          case 1:
            token = _a.sent();
            if (token) {
              url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
            }
            _a.label = 2;
          case 2:return [2 /*return*/, new Promise(function (resolve, reject) {
              var opened = false;
              if (transferFormat !== _ITransport.TransferFormat.Text) {
                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                return;
              }
              var eventSource;
              if (_Utils.Platform.isBrowser || _Utils.Platform.isWebWorker) {
                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
              } else
              {
                // Non-browser passes cookies via the dictionary
                var cookies = _this.httpClient.getCookieString(url);
                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
              }
              try {
                eventSource.onmessage = function (e) {
                  if (_this.onreceive) {
                    try {
                      _this.logger.log(_ILogger.LogLevel.Trace, "(SSE transport) data received. " + (0, _Utils.getDataDetail)(e.data, _this.logMessageContent) + ".");
                      _this.onreceive(e.data);
                    }
                    catch (error) {
                      _this.close(error);
                      return;
                    }
                  }
                };
                eventSource.onerror = function (e) {
                  var error = new Error(e.data || "Error occurred");
                  if (opened) {
                    _this.close(error);
                  } else
                  {
                    reject(error);
                  }
                };
                eventSource.onopen = function () {
                  _this.logger.log(_ILogger.LogLevel.Information, "SSE connected to " + _this.url);
                  _this.eventSource = eventSource;
                  opened = true;
                  resolve();
                };
              }
              catch (e) {
                reject(e);
                return;
              }
            })];}

      });
    });
  };
  ServerSentEventsTransport.prototype.send = function (data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (!this.eventSource) {
          return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
        }
        return [2 /*return*/, (0, _Utils.sendMessage)(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
      });
    });
  };
  ServerSentEventsTransport.prototype.stop = function () {
    this.close();
    return Promise.resolve();
  };
  ServerSentEventsTransport.prototype.close = function (e) {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = undefined;
      if (this.onclose) {
        this.onclose(e);
      }
    }
  };
  return ServerSentEventsTransport;
}();exports.ServerSentEventsTransport = ServerSentEventsTransport;

/***/ }),
/* 35 */
/*!**************************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.WebSocketTransport = void 0;




































var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _Utils = __webpack_require__(/*! ./Utils */ 20); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {return new (P || (P = Promise))(function (resolve, reject) {function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}function step(result) {result.done ? resolve(result.value) : new P(function (resolve) {resolve(result.value);}).then(fulfilled, rejected);}step((generator = generator.apply(thisArg, _arguments || [])).next());});};var __generator = void 0 && (void 0).__generator || function (thisArg, body) {var _ = { label: 0, sent: function sent() {if (t[0] & 1) throw t[1];return t[1];}, trys: [], ops: [] },f,y,t,g;return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {return this;}), g;function verb(n) {return function (v) {return step([n, v]);};}function step(op) {if (f) throw new TypeError("Generator is already executing.");while (_) {try {if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;if (y = 0, t) op = [op[0] & 2, t.value];switch (op[0]) {case 0:case 1:t = op;break;case 4:_.label++;return { value: op[1], done: false };case 5:_.label++;y = op[1];op = [0];continue;case 7:op = _.ops.pop();_.trys.pop();continue;default:if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {_ = 0;continue;}if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {_.label = op[1];break;}if (op[0] === 6 && _.label < t[1]) {_.label = t[1];t = op;break;}if (t && _.label < t[2]) {_.label = t[2];_.ops.push(op);break;}if (t[2]) _.ops.pop();_.trys.pop();continue;}op = body.call(thisArg, _);} catch (e) {op = [6, e];y = 0;} finally {f = t = 0;}}if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };}}; /** @private */var WebSocketTransport = /** @class */function () {
  function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
    this.logger = logger;
    this.accessTokenFactory = accessTokenFactory;
    this.logMessageContent = logMessageContent;
    this.webSocketConstructor = webSocketConstructor;
    this.httpClient = httpClient;
    this.onreceive = null;
    this.onclose = null;
  }
  WebSocketTransport.prototype.connect = function (url, transferFormat) {
    return __awaiter(this, void 0, void 0, function () {
      var token;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _Utils.Arg.isRequired(url, "url");
            _Utils.Arg.isRequired(transferFormat, "transferFormat");
            _Utils.Arg.isIn(transferFormat, _ITransport.TransferFormat, "transferFormat");
            this.logger.log(_ILogger.LogLevel.Trace, "(WebSockets transport) Connecting.");
            if (!this.accessTokenFactory) return [3 /*break*/, 2];
            return [4 /*yield*/, this.accessTokenFactory()];
          case 1:
            token = _a.sent();
            if (token) {
              url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
            }
            _a.label = 2;
          case 2:return [2 /*return*/, new Promise(function (resolve, reject) {
              url = url.replace(/^http/, "ws");
              var webSocket;
              var cookies = _this.httpClient.getCookieString(url);
              var opened = false;
              if (_Utils.Platform.isNode && cookies) {
                // Only pass cookies when in non-browser environments
                webSocket = new _this.webSocketConstructor(url, undefined, {
                  headers: {
                    Cookie: "" + cookies } });


              }
              if (!webSocket) {
                // Chrome is not happy with passing 'undefined' as protocol
                webSocket = new _this.webSocketConstructor(url);
              }
              if (transferFormat === _ITransport.TransferFormat.Binary) {
                webSocket.binaryType = "arraybuffer";
              }
              // tslint:disable-next-line:variable-name
              webSocket.onopen = function (_event) {
                _this.logger.log(_ILogger.LogLevel.Information, "WebSocket connected to " + url + ".");
                _this.webSocket = webSocket;
                opened = true;
                resolve();
              };
              webSocket.onerror = function (event) {
                var error = null;
                // ErrorEvent is a browser only type we need to check if the type exists before using it
                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                  error = event.error;
                } else
                {
                  error = new Error("There was an error with the transport.");
                }
                reject(error);
              };
              webSocket.onmessage = function (message) {
                _this.logger.log(_ILogger.LogLevel.Trace, "(WebSockets transport) data received. " + (0, _Utils.getDataDetail)(message.data, _this.logMessageContent) + ".");
                if (_this.onreceive) {
                  _this.onreceive(message.data);
                }
              };
              webSocket.onclose = function (event) {
                // Don't call close handler if connection was never established
                // We'll reject the connect call instead
                if (opened) {
                  _this.close(event);
                } else
                {
                  var error = null;
                  // ErrorEvent is a browser only type we need to check if the type exists before using it
                  if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                    error = event.error;
                  } else
                  {
                    error = new Error("There was an error with the transport.");
                  }
                  reject(error);
                }
              };
            })];}

      });
    });
  };
  WebSocketTransport.prototype.send = function (data) {
    if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
      this.logger.log(_ILogger.LogLevel.Trace, "(WebSockets transport) sending data. " + (0, _Utils.getDataDetail)(data, this.logMessageContent) + ".");
      this.webSocket.send(data);
      return Promise.resolve();
    }
    return Promise.reject("WebSocket is not in the OPEN state");
  };
  WebSocketTransport.prototype.stop = function () {
    if (this.webSocket) {
      // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
      // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
      this.close(undefined);
    }
    return Promise.resolve();
  };
  WebSocketTransport.prototype.close = function (event) {
    // webSocket will be null if the transport did not start successfully
    if (this.webSocket) {
      // Clear websocket handlers because we are considering the socket closed now
      this.webSocket.onclose = function () {};
      this.webSocket.onmessage = function () {};
      this.webSocket.onerror = function () {};
      this.webSocket.close();
      this.webSocket = undefined;
    }
    this.logger.log(_ILogger.LogLevel.Trace, "(WebSockets transport) socket closed.");
    if (this.onclose) {
      if (event && (event.wasClean === false || event.code !== 1000)) {
        this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
      } else
      {
        this.onclose();
      }
    }
  };
  return WebSocketTransport;
}();exports.WebSocketTransport = WebSocketTransport;

/***/ }),
/* 36 */
/*!***********************************************************************************!*\
  !*** D:/demo/signalR/node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.JsonHubProtocol = void 0;

var _IHubProtocol = __webpack_require__(/*! ./IHubProtocol */ 26);
var _ILogger = __webpack_require__(/*! ./ILogger */ 19);
var _ITransport = __webpack_require__(/*! ./ITransport */ 31);
var _Loggers = __webpack_require__(/*! ./Loggers */ 21);
var _TextMessageFormat = __webpack_require__(/*! ./TextMessageFormat */ 25); // Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var JSON_HUB_PROTOCOL_NAME = "json"; /** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */function () {
  function JsonHubProtocol() {
    /** @inheritDoc */
    this.name = JSON_HUB_PROTOCOL_NAME;
    /** @inheritDoc */
    this.version = 1;
    /** @inheritDoc */
    this.transferFormat = _ITransport.TransferFormat.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
  JsonHubProtocol.prototype.parseMessages = function (input, logger) {
    // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
    if (typeof input !== "string") {
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    }
    if (!input) {
      return [];
    }
    if (logger === null) {
      logger = _Loggers.NullLogger.instance;
    }
    // Parse the messages
    var messages = _TextMessageFormat.TextMessageFormat.parse(input);
    var hubMessages = [];
    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
      var message = messages_1[_i];
      var parsedMessage = JSON.parse(message);
      if (typeof parsedMessage.type !== "number") {
        throw new Error("Invalid payload.");
      }
      switch (parsedMessage.type) {
        case _IHubProtocol.MessageType.Invocation:
          this.isInvocationMessage(parsedMessage);
          break;
        case _IHubProtocol.MessageType.StreamItem:
          this.isStreamItemMessage(parsedMessage);
          break;
        case _IHubProtocol.MessageType.Completion:
          this.isCompletionMessage(parsedMessage);
          break;
        case _IHubProtocol.MessageType.Ping:
          // Single value, no need to validate
          break;
        case _IHubProtocol.MessageType.Close:
          // All optional values, no need to validate
          break;
        default:
          // Future protocol changes can add message types, old clients can ignore them
          logger.log(_ILogger.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
          continue;}

      hubMessages.push(parsedMessage);
    }
    return hubMessages;
  };
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
      *
      * @param {HubMessage} message The message to write.
      * @returns {string} A string containing the serialized representation of the message.
      */
  JsonHubProtocol.prototype.writeMessage = function (message) {
    return _TextMessageFormat.TextMessageFormat.write(JSON.stringify(message));
  };
  JsonHubProtocol.prototype.isInvocationMessage = function (message) {
    this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
    if (message.invocationId !== undefined) {
      this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
    }
  };
  JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
    this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
    if (message.item === undefined) {
      throw new Error("Invalid payload for StreamItem message.");
    }
  };
  JsonHubProtocol.prototype.isCompletionMessage = function (message) {
    if (message.result && message.error) {
      throw new Error("Invalid payload for Completion message.");
    }
    if (!message.result && message.error) {
      this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
    }
    this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
  };
  JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
    if (typeof value !== "string" || value === "") {
      throw new Error(errorMessage);
    }
  };
  return JsonHubProtocol;
}();exports.JsonHubProtocol = JsonHubProtocol;

/***/ }),
/* 37 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),
/* 38 */
/*!**********************************************************!*\
  !*** D:/demo/signalR/pages/index/index2.vue?mpType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.vue?vue&type=template&id=59c09446&mpType=page */ 39);\n/* harmony import */ var _index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index2.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index2.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQzRLO0FBQzVLLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Mi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTljMDk0NDYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Mi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4Mi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!****************************************************************************************!*\
  !*** D:/demo/signalR/pages/index/index2.vue?vue&type=template&id=59c09446&mpType=page ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=template&id=59c09446&mpType=page */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_59c09446_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/signalR/pages/index/index2.vue?vue&type=template&id=59c09446&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view")
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!**********************************************************************************!*\
  !*** D:/demo/signalR/pages/index/index2.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlsQixDQUFnQiwybUJBQUcsRUFBQyIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Mi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/signalR/pages/index/index2.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\nvar _default =\n\n\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      askMainId: '286a6874-0e09-4b3f-b45f-b43426d87ca8',\n      content: [] };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  onShow: function onShow() {\n    uni.request({\n      url: \"http://localhost:6028/WeatherForecast\",\n      method: \"POST\",\n      header: {},\n\n\n      success: function success(res) {\n        __f__(\"log\", res, \" at pages/index/index2.vue:30\");\n      },\n      fail: function fail(err) {\n        __f__(\"log\", err, \" at pages/index/index2.vue:33\");\n      } });\n\n\n  },\n  methods: {\n    send: function send() {\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgyLnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwidGl0bGUiLCJhc2tNYWluSWQiLCJjb250ZW50Iiwib25Mb2FkIiwib25TaG93IiwidW5pIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiZXJyIiwibWV0aG9kcyIsInNlbmQiXSwibWFwcGluZ3MiOiJxSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUllO0FBQ2RBLE1BRGMsa0JBQ1A7QUFDTixXQUFPO0FBQ05DLFdBQUssRUFBRSxPQUREO0FBRU5DLGVBQVMsRUFBRSxzQ0FGTDtBQUdOQyxhQUFPLEVBQUUsRUFISCxFQUFQOztBQUtBLEdBUGE7QUFRZEMsUUFSYyxvQkFRTDs7QUFFUixHQVZhO0FBV2RDLFFBWGMsb0JBV0w7QUFDUkMsT0FBRyxDQUFDQyxPQUFKLENBQVk7QUFDWEMsU0FBRyxFQUFDLHVDQURPO0FBRVhDLFlBQU0sRUFBQyxNQUZJO0FBR1hDLFlBQU0sRUFBQyxFQUhJOzs7QUFNWEMsYUFBTyxFQUFDLGlCQUFTQyxHQUFULEVBQWE7QUFDcEIscUJBQVlBLEdBQVo7QUFDQSxPQVJVO0FBU1hDLFVBQUksRUFBRSxjQUFDQyxHQUFELEVBQVM7QUFDZCxxQkFBWUEsR0FBWjtBQUNBLE9BWFUsRUFBWjs7O0FBY0EsR0ExQmE7QUEyQmRDLFNBQU8sRUFBRTtBQUNSQyxRQURRLGtCQUNEOztBQUVOLEtBSE8sRUEzQkssRSIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnSGVsbG8nLFxuXHRcdFx0YXNrTWFpbklkOiAnMjg2YTY4NzQtMGUwOS00YjNmLWI0NWYtYjQzNDI2ZDg3Y2E4Jyxcblx0XHRcdGNvbnRlbnQ6IFtdXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cblx0fSxcblx0b25TaG93KCkge1xuXHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdHVybDpcImh0dHA6Ly9sb2NhbGhvc3Q6NjAyOC9XZWF0aGVyRm9yZWNhc3RcIixcblx0XHRcdG1ldGhvZDpcIlBPU1RcIixcblx0XHRcdGhlYWRlcjp7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHNlbmQoKSB7XG5cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 44 */
/*!*******************************!*\
  !*** D:/demo/signalR/App.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 45);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDc0s7QUFDdEssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!********************************************************!*\
  !*** D:/demo/signalR/App.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../sofeware/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 46);\n/* harmony import */ var _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_sofeware_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiI0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vc29mZXdhcmUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9zb2Zld2FyZS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL3NvZmV3YXJlL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/signalR/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n  },\n  onShow: function onShow() {\n  },\n  onHide: function onHide() {\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixHQUZhO0FBR2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixHQUphO0FBS2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixHQU5hLEUiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ })
],[[0,"app-config"]]]);