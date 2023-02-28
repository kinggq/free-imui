module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2dd8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2e03":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "31a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "327d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "34aa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "72cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c7f":
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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9c5a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9faf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FreeIM", function() { return /* reexport */ FreeIM; });
__webpack_require__.d(__webpack_exports__, "FreeAvatar", function() { return /* reexport */ packages_avatar; });
__webpack_require__.d(__webpack_exports__, "FreeButton", function() { return /* reexport */ packages_button_0; });
__webpack_require__.d(__webpack_exports__, "FreeContact", function() { return /* reexport */ FreeContact; });
__webpack_require__.d(__webpack_exports__, "FreeMessages", function() { return /* reexport */ FreeMessages; });
__webpack_require__.d(__webpack_exports__, "FreeEditor", function() { return /* reexport */ FreeEditor; });
__webpack_require__.d(__webpack_exports__, "FreeDialog", function() { return /* reexport */ FreeDialog; });
__webpack_require__.d(__webpack_exports__, "FreeMessageImage", function() { return /* reexport */ FreeMessageImage; });
__webpack_require__.d(__webpack_exports__, "FreeMessageTemplate", function() { return /* reexport */ FreeMessageTemplate; });
__webpack_require__.d(__webpack_exports__, "FreeMessageFile", function() { return /* reexport */ FreeMessageFile; });
__webpack_require__.d(__webpack_exports__, "FreeMessageText", function() { return /* reexport */ FreeMessageText; });
__webpack_require__.d(__webpack_exports__, "FreeMessageEvent", function() { return /* reexport */ FreeMessageEvent; });

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

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/utils/props.ts
var numericProp = [Number, String];
var makeNumericProp = function makeNumericProp(defaultVal) {
  return {
    type: numericProp,
    default: defaultVal
  };
};
var makeNumberProp = function makeNumberProp(defaultVal) {
  return {
    type: [Number],
    default: defaultVal
  };
};
var makeStringProp = function makeStringProp(defaultVal) {
  return {
    type: [String],
    default: defaultVal
  };
};
var makeBooleanProp = function makeBooleanProp(defaultVal) {
  return {
    type: [Boolean],
    default: defaultVal
  };
};
var makeObjectProp = function makeObjectProp() {
  return {
    type: Object,
    required: true
  };
};
var makeArrayProp = function makeArrayProp() {
  return {
    type: Array,
    default: function _default() {
      return [];
    }
  };
};
// CONCATENATED MODULE: ./packages/utils/validate.ts
var isArray = Array.isArray;
var isString = function isString(val) {
  return typeof val === 'string';
};
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var extend = Object.assign;
var camelize = function camelize(str) {
  return str.replace(/-(\w)/g, function (_, c) {
    return c.toUpperCase();
  });
};
// CONCATENATED MODULE: ./packages/utils/with-install.ts

function withInstall(options) {
  options.install = function (app) {
    var name = options.name;
    app.component(name, options);
    app.component(camelize("-".concat(name)), options);
  };

  return options;
}
// CONCATENATED MODULE: ./packages/utils/format.ts
var formatDay = function formatDay(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  return year + '/' + month + '/' + day;
};
var guid = function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
function formatByte(value) {
  if (!value) {
    return '0 Bytes';
  }

  var unitArr = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  var index = 0;
  index = Math.floor(Math.log(value) / Math.log(1024));
  var size = value / Math.pow(1024, index);
  size = parseFloat(size.toFixed(2));
  return size + unitArr[index];
}
function formatTime(value) {
  var date = new Date(value);
  var nDate = new Date();

  var getFullYear = function getFullYear(t) {
    return t.getFullYear();
  };

  var getMD = function getMD(t) {
    return "".concat(t.getMonth() + 1, "-").concat(t.getDay());
  };

  var dateYear = getFullYear(date);
  var nDateYear = getFullYear(nDate);
  var f;

  if (dateYear !== nDateYear) {
    f = 'Y年M月D日 h:m';
  } else if ("".concat(dateYear, "-").concat(getMD(date)) === "".concat(nDateYear, "-").concat(getMD(nDate))) {
    f = 'h:m';
  } else {
    f = 'M月D日 h:m';
  }

  return formatDate(value, f);
}
function formatDate(t, f) {
  if (!f) f = 'Y-M-D h:m:s';

  if (t) {
    t = new Date(t);
  } else {
    t = new Date();
  }

  var arr = [t.getFullYear().toString(), addZero(t.getMonth() + 1), addZero(t.getDate()), addZero(t.getHours()), addZero(t.getMinutes()), addZero(t.getSeconds())];
  var fs = 'YMDhms';

  for (var i = 0; i < arr.length; i++) {
    f = f.replace(fs.charAt(i), arr[i]);
  }

  return f;
}
function addZero(v) {
  return v < 10 ? "0".concat(v) : v.toString();
}
// CONCATENATED MODULE: ./packages/utils/index.ts




// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./packages/utils/constant.tsx

var defaultMenus = [{
  key: 'messages',
  title: '消息',
  unread: 0,
  click: null,
  bottom: false,
  render: function render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
      "class": "free-icon-messages"
    }, null);
  }
}, {
  key: 'contacts',
  title: '联系人',
  unread: 0,
  click: null,
  bottom: false,
  render: function render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
      "class": "free-icon-contacts"
    }, null);
  }
}, {
  key: 'settings',
  title: '联系人',
  unread: 0,
  click: null,
  bottom: true,
  render: function render() {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
      "class": "free-icon-menu"
    }, null);
  }
}];
var defaultContacts = [{
  id: 1,
  nickname: '猪小明',
  avatar: '猪小明',
  sort: 'Z',
  lastMessage: '今天几点下班？',
  lastMessageTime: 1655114917359,
  unread: 0
}, {
  id: 2,
  nickname: '茅台',
  avatar: '茅台',
  sort: 'M',
  lastMessage: '晚一点',
  lastMessageTime: 1655114917370,
  unread: 0
}, {
  id: 3,
  nickname: '冷檬',
  avatar: '冷檬',
  sort: 'L',
  lastMessage: '今晚一起看电影吗',
  lastMessageTime: 1655114917370,
  unread: 0
}, {
  id: 3,
  nickname: '米线',
  avatar: '米线',
  sort: 'M',
  lastMessage: '文件已经发给你了',
  lastMessageTime: 1655114917370,
  unread: 2
}];
// CONCATENATED MODULE: ./packages/hooks/useMenus.tsx


var defaultMenusIndex = {
  messages: 0,
  contacts: 1
};

function useMenus() {
  var customMenus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var menus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);

  if (Array.isArray(customMenus)) {
    menus.value = customMenus.map(function (menu) {
      if (Object.keys(defaultMenusIndex).includes(menu.key)) {
        return defaultMenus[defaultMenusIndex[menu.key]];
      }

      return menu;
    });
  } else {
    menus.value = defaultMenus;
  }

  return menus;
}


// CONCATENATED MODULE: ./packages/hooks/index.ts

// CONCATENATED MODULE: ./packages/hooks/use-expose.ts


function useExpose(apis) {
  var instance = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();

  if (instance) {
    extend(instance.proxy, apis);
  }
}
// CONCATENATED MODULE: ./packages/free/Free.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Object(external_commonjs_vue_commonjs2_vue_root_Vue_["isVNode"])(s);
}

var freeProps = {
  width: makeNumericProp(860),
  height: makeNumericProp(580),
  shape: makeStringProp('square'),
  showMenu: makeBooleanProp(true),
  userInfo: makeObjectProp(),
  messageName: makeBooleanProp(false),
  menuAvatar: makeBooleanProp(true)
};
/* harmony default export */ var Free = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-im',
  props: freeProps,
  provide: function provide() {
    return {
      userInfo: this.userInfo,
      freeIM: this
    };
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var width = props.width,
        height = props.height;
    var wrapper_style = {
      width: width + 'px',
      height: height + 'px'
    };
    var activeMenu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('messages');
    var contacts = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);
    var groups = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])([]);
    var curContact = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var currentContactId = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var messagesBucket = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(new Map());
    var messageLoadedBucket = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(new Map());
    var loadingBucket = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(new Map());
    var lockBucket = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(new Map());
    var menus = useMenus();
    var msgRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var currentContact = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return contacts.value.find(function (contact) {
        return contact.id === currentContactId.value;
      });
    });
    var getCurrentMessages = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (!currentContactId.value) return [];
      return messagesBucket.get(currentContactId.value) || [];
    });
    var lastMessages = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var data = contacts.value.filter(function (contact) {
        return contact.lastMessage;
      });
      data.sort(function (c1, c2) {
        return (c2.lastMessageTime ? c2.lastMessageTime : 0) - (c1.lastMessageTime ? c1.lastMessageTime : 0);
      });
      return data;
    });
    var allUnread = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var unread = 0;
      lastMessages.value.forEach(function (contact) {
        unread += contact.unread;
      });
      return unread;
    });

    function renderMenuItem() {
      var top = [];
      var bottom = [];
      menus.value.forEach(function (menu) {
        var _slot;

        var node = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
          "class": "free-menu-item ".concat(activeMenu.value === menu.key ? 'free-menu-active' : ''),
          "title": menu.title,
          "onClick": function onClick() {
            isFunction(menu.click) ? menu.click : changeMenuClick(menu);
          }
        }, [menu.key === 'messages' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-badge"), {
          "unread": allUnread.value
        }, _isSlot(_slot = menu.render()) ? _slot : {
          default: function _default() {
            return [_slot];
          }
        }) : menu.render()]);

        !menu.bottom ? top.push(node) : bottom.push(node);
      });

      function changeMenuClick(menu) {
        if (menu.bottom) return;
        changeMenu(menu.key);
      }

      return {
        top: top,
        bottom: bottom
      };
    }

    function renderMenu() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-menu"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-menu-top"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-avatar"), {
        "class": "free-menu-avatar",
        "avatar": props.userInfo.avatar
      }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.menuAvatar]]), renderMenuItem().top]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-menu-bottom"
      }, [renderMenuItem().bottom])]);
    }

    function renderSidebar() {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-sidebar free-sidebar-messages"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-messages-fiexd_top"
      }, [slots['messages-fixed-top'] ? slots['messages-fixed-top']() : '']), renderMessages()]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], activeMenu.value === 'messages']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-sidebar free-sidebar-messages"
      }, [renderContacts()]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], activeMenu.value === 'contacts']])]);
    }

    function initContacts(_contacts) {
      _contacts.forEach(function (contact) {
        if (contact.group) {
          groups.value.push(contact);
        } else {
          contacts.value.push(contact);
        }
      });

      sortContacts();
    }

    function changeMenu(menuName) {
      emit('change-menu', menuName);
      activeMenu.value = menuName;
    }

    function changeContact(contactId, menuName) {
      if (menuName) {
        changeMenu(menuName);
      } else {
        if (contactId === currentContactId.value) return;
      }

      currentContactId.value = contactId;
      emit('change-contact', currentContact.value);

      if (!messagesBucket.has(contactId)) {
        pullMessages(function () {
          if (msgRef.value) {
            msgRef.value.scrollToBottom();
          }
        });
      } else {
        loadingBucket.set(contactId, false);
      }
    }

    function scrollToBottom() {
      msgRef.value && msgRef.value.scrollToBottom();
    }

    function renderMessages() {
      var click = function click(contact) {
        updateUnread(contact);
        currentContactId.value = contact.id;

        if (!messagesBucket.has(contact.id)) {
          pullMessages(function () {
            if (msgRef.value) {
              msgRef.value.scrollToBottom();
            }
          });
        } else {
          var _msgRef$value;

          loadingBucket.set(contact.id, false);
          (_msgRef$value = msgRef.value) === null || _msgRef$value === void 0 ? void 0 : _msgRef$value.scrollToBottom();
        }
      };

      return lastMessages.value.map(function (contact) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-contact"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(activeClass(contact.id, currentContactId.value), {
          "onClick": function onClick() {
            click(contact);
          },
          "contact": contact,
          "is-message": true
        }), null);
      });
    }

    function updateUnread(contact) {
      var index = findContactById(contact.id);
      contacts.value[index].unread = 0;
    }

    function pullMessages(isEnd) {
      var _messagesBucket$get;

      var contact = currentContact.value;
      if (!messagesBucket.has(contact.id)) messagesBucket.set(contact.id, []);
      if (lockBucket.has(contact.id)) return;
      var len = messagesBucket.has(contact.id) ? (_messagesBucket$get = messagesBucket.get(contact.id)) === null || _messagesBucket$get === void 0 ? void 0 : _messagesBucket$get.length : 0;
      loadingBucket.set(contact.id, true);
      lockBucket.set(contact.id, true);
      emit('pull-messages', contact, /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(messages, end) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (messages.length === 0) {}

                  addMessage(messages, contact.id, 'unshift'); // messagesBucket.get(contact.id)?.unshift(...messages)

                  messageLoadedBucket.set(contact.id, end);
                  loadingBucket.set(contact.id, false);
                  lockBucket.delete(contact.id);
                  isEnd && isEnd(!!end);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(), len);
    }

    var activeClass = function activeClass(id, curCid) {
      return {
        class: curCid === id ? 'free-contact-active' : ''
      };
    };

    function renderContacts() {
      var click = function click(data) {
        curContact.value = data;
      };

      var curIndex = '';
      var contactNode = contacts.value.map(function (contact) {
        var _curContact$value;

        var node = [contact.sort !== curIndex ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
          "class": "free-index"
        }, [contact.sort]) : '', Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-contact"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(activeClass(contact.id, (_curContact$value = curContact.value) === null || _curContact$value === void 0 ? void 0 : _curContact$value.id), {
          "onClick": click,
          "contact": contact,
          "base": true
        }), null)];
        curIndex = contact.sort;
        return node;
      });
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-contact-category-label"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u7FA4\u804A")]), groups.value.map(function (group) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-contact"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])(activeClass(group.id), {
          "onClick": click,
          "contact": group,
          "base": true
        }), null);
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-contact-category-label"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u8054\u7CFB\u4EBA")]), contactNode];
    }

    function sortContacts() {
      contacts.value.sort(function (a, b) {
        if (a.group) {
          return a.sort.localeCompare(b.sort);
        }

        return a.sort.localeCompare(b.sort);
      });
    }

    var currentLoadend = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return messageLoadedBucket.has(currentContactId.value) ? messageLoadedBucket.get(currentContactId.value) : false;
    });
    var currentLoading = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (loadingBucket.has(currentContactId.value)) {
        return loadingBucket.get(currentContactId.value);
      }

      return true;
    });

    var lastMessageRender = function lastMessageRender(message) {
      if (message.type === 'file') {
        return '[文件]';
      } else if (message.type === 'image') {
        return '[图片]';
      }

      return message.content;
    };

    var handleSend = function handleSend(content) {
      console.log(content);
      var message = createMessage({
        content: content
      });
      appendMessage(message);
      if (!currentContact.value) return;

      _emitSend(currentContact.value, message, function (contact) {
        updateContact({
          id: contact.id,
          lastMessageTime: message.time,
          lastMessage: lastMessageRender(message),
          lastMessageStatus: message.status,
          unread: 0
        });
      });
    };

    function _emitSend(contact, message, next, file) {
      emit('send', contact, message, function (message, contact) {
        var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';
        next(contact);
        updateMessage(Object.assign(message, {
          status: status
        }));
      }, file);
    }

    function updateMessage(message) {
      if (messagesBucket.has(message.toContactId)) {
        var _messagesBucket$get2;

        var index = (_messagesBucket$get2 = messagesBucket.get(message.toContactId)) === null || _messagesBucket$get2 === void 0 ? void 0 : _messagesBucket$get2.findIndex(function (item) {
          return item.id === message.id;
        });

        if (index !== -1) {
          var findMessage = messagesBucket.get(message.toContactId)[index];
          messagesBucket.get(message.toContactId)[index] = _objectSpread(_objectSpread(_objectSpread({}, findMessage), message), {}, {
            toContactId: findMessage.toContactId
          });
        }
      }
    }

    function updateContact(data) {
      var id = data.id;
      delete data.id;
      var index = findContactById(id);

      if (index !== -1) {
        var unread = data.unread;

        if (isString(unread)) {
          if (unread.indexOf('+') === 0 || unread.indexOf('-') === 0) {
            data.unread = parseInt(unread) + contacts.value[index].unread;
          }
        } // if (data.unread) {
        //     data.unread = data.unread + contacts.value[index].unread
        // }


        contacts.value[index] = _objectSpread(_objectSpread({}, contacts.value[index]), data);
      }
    }

    function findContactById(id) {
      if (!id) return -1;
      return contacts.value.findIndex(function (item) {
        return item.id === id;
      });
    }
    /*
     */


    function appendMessage(message) {
      var scrollToBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      console.log(message);

      if (!messagesBucket.has(message.toContactId)) {
        updateContact({
          id: message.toContactId,
          unread: '+1',
          lastMessageTime: message.time,
          lastMessage: lastMessageRender(message)
        });
      } else {
        addMessage(message, message.toContactId, 'push');
        var updateContactData = {
          id: message.toContactId,
          lastMessageTime: message.time,
          lastMessage: lastMessageRender(message),
          lastMessageStatus: message.status,
          unread: ''
        };

        if (message.toContactId === currentContactId.value) {
          var _msgRef$value2;

          (_msgRef$value2 = msgRef.value) === null || _msgRef$value2 === void 0 ? void 0 : _msgRef$value2.scrollToBottom();
        } else {
          updateContactData.unread = '+1';
        }

        updateContact(updateContactData);
      } // if (scrollToBottom) {
      //     msgRef.value?.scrollToBottom()
      // }

    }

    function addMessage(message, contactId, type) {
      var _messagesBucket$get3;

      if (!isArray(message)) message = [message];
      messagesBucket.set(contactId, messagesBucket.get(contactId) || []);

      (_messagesBucket$get3 = messagesBucket.get(contactId))[type].apply(_messagesBucket$get3, _toConsumableArray(message));
    }

    function createMessage(message) {
      return _objectSpread(_objectSpread({}, {
        id: guid(),
        time: new Date().getTime(),
        type: 'text',
        status: 'uploading',
        toContactId: currentContactId.value,
        from: props.userInfo
      }), message);
    }

    var handleUpload = function handleUpload(file) {
      var imageTypes = ['image/png', 'image/jpeg', 'image/gif'];
      var image;

      if (imageTypes.includes(file.type)) {
        image = {
          content: URL.createObjectURL(file),
          type: 'image'
        };
      } else {
        image = {
          type: 'file',
          fileSize: file.size,
          fileName: file.name,
          content: ''
        };
      }

      var message = createMessage(image);
      appendMessage(message);
      if (!currentContact.value) return;

      _emitSend(currentContact.value, message, function (contact) {}, file);
    };

    function renderContent() {
      var click = function click() {
        var _curContact$value2, _curContact$value4;

        if (!((_curContact$value2 = curContact.value) !== null && _curContact$value2 !== void 0 && _curContact$value2.lastMessage)) {
          var _curContact$value3;

          updateContact({
            id: (_curContact$value3 = curContact.value) === null || _curContact$value3 === void 0 ? void 0 : _curContact$value3.id,
            lastMessage: ' '
          });
        }

        changeContact((_curContact$value4 = curContact.value) === null || _curContact$value4 === void 0 ? void 0 : _curContact$value4.id, 'messages');
      };

      var detailNode = function detailNode() {
        if (activeMenu.value === 'contacts' && curContact.value) {
          var _curContact$value5, _curContact$value6;

          if (slots['contact-detail']) {
            return slots['contact-detail']({
              contact: curContact.value
            });
          }

          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-main"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-detail_header"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-avatar"), {
            "avatar": (_curContact$value5 = curContact.value) === null || _curContact$value5 === void 0 ? void 0 : _curContact$value5.avatar
          }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-nickname"
          }, [(_curContact$value6 = curContact.value) === null || _curContact$value6 === void 0 ? void 0 : _curContact$value6.nickname])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-detail_body"
          }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-detail_footer"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-button"), {
            "type": "primary",
            "onClick": click
          }, {
            default: function _default() {
              return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u53D1\u9001")];
            }
          })])]);
        } else if (activeMenu.value === 'messages' && currentContact.value) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-main"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-messages_header"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, [currentContact.value.nickname]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
            "class": "free-icon-more"
          }, null)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-contact-messages_body"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-messages"), {
            "ref": msgRef,
            "onLoad": pullMessages,
            "messageName": props.messageName,
            "data": messagesBucket.get(currentContact.value.id),
            "is-end": currentLoadend.value,
            "loading": currentLoading.value
          }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-editor"), {
            "contact": currentContact.value,
            "onSend": handleSend,
            "onUpload": handleUpload
          }, null)])]);
        }

        return undefined;
      };

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-content"
      }, [detailNode()]);
    }

    useExpose({
      useMenus: useMenus,
      initContacts: initContacts,
      appendMessage: appendMessage,
      updateMessage: updateMessage,
      updateContact: updateContact,
      getCurrentMessages: getCurrentMessages,
      scrollToBottom: scrollToBottom
    });
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-wrapper free-theme-default",
        "style": wrapper_style
      }, [props.showMenu && renderMenu(), renderSidebar(), renderContent()]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/free/index.less
var free = __webpack_require__("a9a5");

// CONCATENATED MODULE: ./packages/free/index.ts


 // FreeIM.install = (app: App) => {
//     app.component(FreeIM.name, FreeIM)
// }

var FreeIM = withInstall(Free);
/* harmony default export */ var packages_free = (FreeIM);
// CONCATENATED MODULE: ./packages/avatar/Avatar.tsx



var avatarProps = {
  avatar: makeStringProp('头像'),
  size: makeNumberProp(40)
};
/* harmony default export */ var Avatar = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: avatarProps,
  name: 'free-avatar',
  inject: ['freeIM'],
  setup: function setup(props) {
    var freeIM = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('freeIM');
    var shape = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return freeIM ? freeIM.shape : 'square';
    });
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-avatar free-avatar-".concat(shape.value),
        "style": "width: ".concat(props.size, "px;height: ").concat(props.size, "px;line-height: ").concat(props.size, "px;")
      }, [props.avatar ? props.avatar.substr(-2) : props.avatar]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/avatar/index.less
var avatar = __webpack_require__("9c5a");

// CONCATENATED MODULE: ./packages/avatar/index.ts



Avatar.install = function (app) {
  app.component(Avatar.name, Avatar);
};


/* harmony default export */ var packages_avatar = (Avatar);
// CONCATENATED MODULE: ./packages/button/Button.tsx



var buttonProps = {
  type: makeStringProp('default'),
  size: makeStringProp('default')
};
/* harmony default export */ var Button = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-button',
  props: buttonProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var cls = props.type;
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        "class": "free-button free-button-".concat(cls, " free-button-size__").concat(props.size)
      }, [slots.default ? slots.default() : '']);
    };
  }
}));
// EXTERNAL MODULE: ./packages/button/index.less
var packages_button = __webpack_require__("34aa");

// CONCATENATED MODULE: ./packages/button/index.ts



Button.install = function (app) {
  app.component(Button.name, Button);
};


/* harmony default export */ var packages_button_0 = (Button);
// CONCATENATED MODULE: ./packages/contact/Contact.tsx



var contactProps = {
  contact: makeObjectProp(),
  isMessage: makeBooleanProp(false),
  base: makeBooleanProp(false)
};
/* harmony default export */ var Contact = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-contact',
  props: contactProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onClick = function onClick() {
      emit('click', props.contact);
    };

    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-contact",
        "onClick": onClick
      }, [props.base, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-badge"), {
        "unread": props.base ? undefined : props.contact.unread
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-avatar"), {
            "avatar": props.contact.avatar
          }, null)];
        }
      }), props.isMessage ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-content"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-info"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-nickname"
      }, [props.contact.nickname]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-lastmsg-time"
      }, [props.contact.lastMessageTime && formatDay(props.contact.lastMessageTime)]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.isMessage]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-action"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-content-inner"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-error"
      }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.contact.lastMessageStatus === 'error']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-lastmsg"
      }, [props.contact.lastMessage])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact-ban"
      }, null)]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.isMessage]])]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "contact--nickname"
      }, [props.contact.nickname])]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/contact/index.less
var packages_contact = __webpack_require__("7c7f");

// CONCATENATED MODULE: ./packages/contact/index.ts



var FreeContact = withInstall(Contact);
/* harmony default export */ var packages_contact_0 = (FreeContact);
// CONCATENATED MODULE: ./packages/badge/Badge.tsx



var badgeProps = {
  unread: makeNumericProp(0)
};
/* harmony default export */ var Badge = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-badge',
  props: badgeProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-badge"
      }, [slots.default && slots.default(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-badge-dot"
      }, [props.unread > 99 ? '99+' : props.unread]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !!props.unread]])]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/badge/index.less
var badge = __webpack_require__("327d");

// CONCATENATED MODULE: ./packages/badge/index.ts



var FreeBadge = withInstall(Badge);
/* harmony default export */ var packages_badge = (FreeBadge);
// CONCATENATED MODULE: ./packages/dialog/Dialog.tsx



var DialogProps = {
  width: makeNumberProp(300),
  title: makeStringProp('Basic Modal'),
  header: makeBooleanProp(true),
  footer: makeBooleanProp(true),
  okText: makeStringProp('确定'),
  cancelText: makeStringProp('取消'),
  mask: makeBooleanProp(true),
  maskClosable: makeBooleanProp(true),
  show: makeBooleanProp(false)
};
/* harmony default export */ var Dialog = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-dialog',
  props: DialogProps,
  emits: ['update:show', 'ok', 'cancel'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _inject = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('freeIM'),
        width = _inject.width,
        height = _inject.height;

    var updateShow = function updateShow() {
      emit('update:show', false);
      emit('cancel');
    };

    var maskUpdateShow = function maskUpdateShow() {
      if (!props.maskClosable) return;
      emit('update:show', false);
    };

    var ok = function ok(e) {
      emit('ok', e);
    };

    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog",
        "style": "width:".concat(width, "px;height:").concat(height, "px;")
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-mask",
        "onClick": maskUpdateShow
      }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-content",
        "style": {
          width: "".concat(props.width, "px")
        }
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-header"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-header__title"
      }, [props.title]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-close",
        "onClick": updateShow
      }, null)]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.header]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-body"
      }, [slots.default ? slots.default() : '']), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-dialog-footer"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-button"), {
        "size": "mini",
        "onClick": updateShow
      }, {
        default: function _default() {
          return [props.cancelText];
        }
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-button"), {
        "type": "primary",
        "size": "mini",
        "style": "margin-left: 10px;",
        "onClick": ok
      }, {
        default: function _default() {
          return [props.okText];
        }
      })]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.footer]])])]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.show]]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/dialog/index.less
var dialog = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./packages/dialog/index.ts



var FreeDialog = withInstall(Dialog);
/* harmony default export */ var packages_dialog = (FreeDialog);
// CONCATENATED MODULE: ./packages/messages/Messages.tsx




var messagesProps = {
  data: makeArrayProp(),
  contactId: makeNumericProp(''),
  isEnd: makeBooleanProp(false),
  loading: makeBooleanProp(true),
  messageName: makeBooleanProp(false),
  timeRange: makeNumberProp(1)
};
/*
    1.首次进入
    2.滚动条到顶部，有消息的情况下
*/

/* harmony default export */ var Messages = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-messages',
  props: messagesProps,
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var root = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var userInfo = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('userInfo');
    var loading = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(true);

    var onScroll = function onScroll(event) {
      if (props.isEnd) {
        return;
      }

      loading.value = true;
      var target = event.target;

      if (target.scrollTop === 0) {
        console.log('触发加载...');
        emit('load');
      }
    };

    function scrollToBottom() {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        if (root.value) {
          root.value.scrollTop = root.value.scrollHeight;
        }
      });
    }

    var loadStatus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.isEnd) return false;
      return props.loading;
    });
    var intervalTime = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.timeRange * 1000 * 60;
    });
    useExpose({
      scrollToBottom: scrollToBottom
    });
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "ref": root,
        "class": "free-message",
        "onScroll": onScroll
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-messages-loading"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-loading"
      }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], loadStatus.value]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-messages-load_text"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u6682\u65E0\u66F4\u591A\u6D88\u606F")]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.isEnd]])]), props.data.map(function (message, index) {
        var node = [];
        var prev = props.data[index - 1];

        if (prev && message.time - prev.time > intervalTime.value) {
          node.push(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-event"), {
            message: {
              id: '__time__',
              type: 'event',
              content: formatTime(message.time)
            }
          }, null));
        }

        var tagName = "free-message-".concat(message.type);
        var attrs = {
          message: message,
          reverse: userInfo.id === message.from.id,
          messageName: props.messageName
        };
        node.push(message.type === 'image' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-image"), attrs, null) : message.type === 'file' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-file"), attrs, null) : message.type === 'event' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-event"), {
          message: {
            id: '__time__',
            type: 'event',
            content: formatTime(message.time)
          }
        }, null) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-text"), attrs, null));
        return node;
      })]);
    };
  }
}));
// CONCATENATED MODULE: ./packages/messages/Image.tsx


/* harmony default export */ var Image = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-message-image',
  setup: function setup(_, _ref) {
    var attrs = _ref.attrs;
    var slots = {
      content: function content(props) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", {
          "src": props.content
        }, null);
      }
    };
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-template"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        "class": "free-message-image"
      }, attrs), slots);
    };
  }
}));
// CONCATENATED MODULE: ./packages/messages/File.tsx



/* harmony default export */ var File = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-message-file',
  setup: function setup(_, _ref) {
    var attrs = _ref.attrs;
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-template"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        "class": "free-message-file"
      }, attrs), {
        content: function content(props) {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-message-file__content"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-message-file__inner"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", {
            "class": "free-message-file__name"
          }, [props.fileName]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", {
            "class": "free-message-file__size"
          }, [props.fileSize && formatByte(props.fileSize)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
            "class": "free-icon-file"
          }, null)])];
        }
      });
    };
  }
}));
// CONCATENATED MODULE: ./packages/messages/Text.tsx


/* harmony default export */ var Text = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-message-text',
  setup: function setup(_, _ref) {
    var attrs = _ref.attrs;
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-message-template"), attrs, {
        content: function content(props) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
            "innerHTML": props.content
          }, null);
        }
      });
    };
  }
}));
// CONCATENATED MODULE: ./packages/messages/Event.tsx



var eventProps = {
  message: makeObjectProp()
};
/* harmony default export */ var Event = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: eventProps,
  name: 'free-message-event',
  setup: function setup(props) {
    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-content free-message-event"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
        "class": "free-message-event__content"
      }, [props.message.content])]);
    };
  }
}));
// CONCATENATED MODULE: ./packages/messages/Template.tsx



var templateProps = {
  message: makeObjectProp(),
  reverse: makeBooleanProp(false),
  messageName: makeBooleanProp(false)
};
/* harmony default export */ var Template = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-message-template',
  props: templateProps,
  emits: ['message-click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var freeIM = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('freeIM');

    var _emit = function _emit(e, key) {
      freeIM.$emit('message-click', e, key, props.message, freeIM);
    };

    var handleError = function handleError(e) {
      _emit(e, 'status');
    };

    var handleClickContent = function handleClickContent(e) {
      _emit(e, 'content');
    };

    var handleClickAvatar = function handleClickAvatar(e) {
      _emit(e, 'avatar');
    };

    return function () {
      var _slots$content;

      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-content free-message-".concat(props.reverse ? 'right' : 'left'),
        "key": props.message.id
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-avatar"), {
        "onClick": handleClickAvatar,
        "avatar": props.message.from.avatar,
        "size": 36
      }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-info"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-username"
      }, [props.message.from.nickname]), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.messageName]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-content__wrap"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-content__text",
        "onClick": handleClickContent
      }, [(_slots$content = slots['content']) === null || _slots$content === void 0 ? void 0 : _slots$content.call(slots, props.message)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "style": "padding-left: 10px;"
      }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-message-content__status"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-loading"
      }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.message.status === 'uploading']]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-error",
        "onClick": handleError
      }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], props.message.status === 'error']])])])])]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/messages/index.less
var messages = __webpack_require__("31a0");

// CONCATENATED MODULE: ./packages/messages/index.ts








var FreeMessages = withInstall(Messages);
var FreeMessageImage = withInstall(Image);
var FreeMessageFile = withInstall(File);
var FreeMessageText = withInstall(Text);
var FreeMessageEvent = withInstall(Event);
var FreeMessageTemplate = withInstall(Template);
/* harmony default export */ var packages_messages = (FreeMessages);
// CONCATENATED MODULE: ./packages/editor/Editor.tsx




var command = function command(_command, val) {
  document.execCommand(_command, false, val);
};

var editorProps = {
  contact: makeObjectProp()
};
/* harmony default export */ var Editor = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'free-editor',
  props: editorProps,
  emits: ['send', 'upload'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var textarea = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(); // 上传文件留言

    var value = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');

    var onKeydown = function onKeydown(event) {
      if (event.code === 'Enter' && !event.ctrlKey && !event.shiftKey) {
        event.preventDefault();
        command("insertLineBreak");
      }

      if (event.code === 'Enter') {
        if (event.ctrlKey) {
          handleSend();
        }
      }
    };

    function handleSend() {
      var _textarea$value;

      console.log('发送');
      emit('send', (_textarea$value = textarea.value) === null || _textarea$value === void 0 ? void 0 : _textarea$value.innerHTML);
      clear();
    }

    function clear() {
      textarea.value.innerHTML = '';
    }

    var fileRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var fileList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();

    var changeFile = function changeFile(event) {
      var files = event.target.files;
      if (!files || !files.length) return;
      fileList.value = files;
      console.log(files);
      show.value = true;
    };

    var resetInput = function resetInput() {
      if (fileRef.value) {
        fileRef.value.value = '';
      }
    };

    var handleClickFile = function handleClickFile() {
      var _fileRef$value;

      (_fileRef$value = fileRef.value) === null || _fileRef$value === void 0 ? void 0 : _fileRef$value.click();
    };

    var show = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var emojiClick = function emojiClick() {
      show.value = true;
    };

    var ok = function ok() {
      if (!fileList.value || !fileList.value.length) return;
      Array.from(fileList.value).forEach(function (file) {
        emit('upload', file);
      });

      if (value.value) {
        emit('send', value.value);
      }

      show.value = false;
      resetInput();
    };

    var cancel = function cancel() {
      resetInput();
    };

    return function () {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-dialog"), {
        'show': show.value,
        "onUpdate:show": function onUpdateShow($event) {
          return show.value = $event;
        },
        "width": 260,
        "header": false,
        "onOk": ok,
        "onCancel": cancel
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__title"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u53D1\u9001\u7ED9\uFF1A")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__info"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-avatar"), {
            "avatar": props.contact.avatar
          }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__nickname"
          }, [props.contact.nickname])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__content"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__list"
          }, [fileList.value ? Array.from(fileList.value).map(function (file) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              "class": "free-editor-files__item"
            }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
              "class": "free-icon-files"
            }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              "class": "free-editor-files__right"
            }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              "class": "free-editor-filename"
            }, [file.name]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
              "class": "free-editor-filesize"
            }, [formatByte(file.size)])])]);
          }) : []]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
            "class": "free-editor-files__footer"
          }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return value.value = $event;
            },
            "class": "free-editor-files__input",
            "type": "text",
            "placeholder": "给朋友留言"
          }, null), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], value.value]])])])])];
        }
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
        "type": "file",
        "ref": fileRef,
        "multiple": true,
        "style": "display: none;",
        "onChange": changeFile
      }, null), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-tool"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-tool__item",
        "onClick": emojiClick
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-emoji"
      }, null)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-tool__item"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        "class": "free-icon-file",
        "onClick": handleClickFile
      }, null)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-content"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "ref": textarea,
        "class": "free-editor-textarea",
        "contenteditable": true,
        "spellcheck": "false",
        "onKeydown": onKeydown
      }, null)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-footer"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-footer__inner"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        "class": "free-editor-footer__text"
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("ctrl + enter \u5FEB\u6377\u53D1\u9001\u6D88\u606F")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("free-button"), {
        "onClick": handleSend
      }, {
        default: function _default() {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("\u53D1\u9001")];
        }
      })])])]);
    };
  }
}));
// EXTERNAL MODULE: ./packages/editor/index.less
var editor = __webpack_require__("72cb");

// CONCATENATED MODULE: ./packages/editor/index.ts



var FreeEditor = withInstall(Editor);
/* harmony default export */ var packages_editor = (FreeEditor);
// EXTERNAL MODULE: ./packages/styles/reset.less
var styles_reset = __webpack_require__("2e03");

// EXTERNAL MODULE: ./packages/styles/theme.less
var theme = __webpack_require__("9faf");

// CONCATENATED MODULE: ./packages/styles/index.ts


// CONCATENATED MODULE: ./packages/index.ts









var components = [FreeIM, packages_avatar, FreeContact, packages_button_0, FreeMessages, FreeEditor, FreeBadge, FreeDialog, FreeMessageImage, FreeMessageTemplate, FreeMessageFile, FreeMessageText, FreeMessageEvent];

var install = function install(app) {
  components.map(function (component) {
    return app.component(component.name, component);
  });
};


/* harmony default export */ var packages_0 = ({
  install: install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map