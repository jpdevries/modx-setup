(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialDesireState = [];

function desires() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialDesireState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.FETCH_DESIRES_SUCCESS:
      console.log('actions.FETCH_DESIRES_SUCCESS', _actions2.default.FETCH_DESIRES_SUCCESS);
      console.log(action.desires);
      return Object.keys(action.desires).map(function (desire) {
        return Object.assign({ key: desire }, action.desires[desire], {});
      });

      return action.desires;
      break;
  }

  return state;
}

var initialPresetsState = [];

function presets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPresetsState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.FETCH_PRESETS_SUCCESS:
      return action.presets;
      break;
  }

  return state;
}

var initialProvidersState = [];

function providers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialProvidersState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.FETCH_PROVIDERS_SUCCESS:
      return action.providers;
      break;
  }

  return state;
}

var initialCategoriesState = [];

function categories() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCategoriesState;
  var action = arguments[1];

  console.log(action.type);
  switch (action.type) {
    case _actions2.default.FETCH_CATEGORIES_SUCCESS:
      console.log('yo', action.categories);
      return action.categories;
      break;

    case _actions2.default.FETCH_CATEGORIES_ERROR:
      console.error(action.error);
  }

  return state;
}

var initialExtrasState = [];

function extras() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialExtrasState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.FETCH_EXTRAS_SUCCESS:
      console.log(action, action.provider);

      var _extras = Object.keys(action.extras).map(function (key) {
        return Object.assign({ "key": key, "provider": action.provider }, action.extras[key], {});
      });

      console.log(_extras);

      return Object.assign({}, state, _defineProperty({}, action.provider, _extras));
      break;

    case _actions2.default.FETCH_CATEGORIES_ERROR:
      console.error(action.error);
  }

  return state;
}

var initialExemptionsState = [];

function exemptions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialExemptionsState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.FETCH_EXEMPTIONS_SUCCESS:
      return action.exemptions;
      break;

    case _actions2.default.FETCH_EXEMPTIONS_ERROR:
      console.error(action.error);
  }

  return state;
}

var SetupReducer = (0, _redux.combineReducers)({
  desires: desires,
  presets: presets,
  providers: providers,
  categories: categories,
  extras: extras,
  exemptions: exemptions
});

exports.default = SetupReducer;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var FETCH_DESIRES_SUCCESS = 'fetch_desires_success';
var fetchDesiresSuccess = function fetchDesiresSuccess(desires) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_DESIRES_SUCCESS,
    desires: desires
  };
};

exports.FETCH_DESIRES_SUCCESS = FETCH_DESIRES_SUCCESS;
exports.fetchDesiresSuccess = fetchDesiresSuccess;

var FETCH_DESIRES_ERROR = 'fetch_desires_error';
var fetchDesiresError = function fetchDesiresError(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_DESIRES_ERROR,
    error: error
  };
};

exports.FETCH_DESIRES_ERROR = FETCH_DESIRES_ERROR;
exports.fetchDesiresError = fetchDesiresError;

var fetchDesires = function fetchDesires() {
  console.log('fetchDesires');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/desires`, {
      fetch('assets/fakepi/desires.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (desires) {
        return dispatch(fetchDesiresSuccess(desires));
      }).catch(function (error) {
        return dispatch(fetchDesiresError(error));
      })
    );
  };
};

exports.fetchDesires = fetchDesires;

var FETCH_PRESETS_SUCCESS = 'fetch_presets_success';
var fetchPresetsSuccess = function fetchPresetsSuccess(presets) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PRESETS_SUCCESS,
    presets: presets
  };
};

exports.FETCH_PRESETS_SUCCESS = FETCH_PRESETS_SUCCESS;
exports.fetchPresetsSuccess = fetchPresetsSuccess;

var FETCH_PRESETS_ERROR = 'fetch_presets_error';
var fetchPresetsError = function fetchPresetsError(error) {
  console.log('fetchPresetsError', error);
  return {
    type: FETCH_PRESETS_ERROR,
    error: error
  };
};

exports.FETCH_PRESETS_ERROR = FETCH_PRESETS_ERROR;
exports.fetchPresetsError = fetchPresetsError;

var fetchPresets = function fetchPresets() {
  console.log('fetchPresets');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/presets`, {
      fetch('assets/fakepi/presets.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (presets) {
        return dispatch(fetchPresetsSuccess(presets));
      }).catch(function (error) {
        return dispatch(fetchPresetsError(error));
      })
    );
  };
};

exports.fetchPresets = fetchPresets;

var FETCH_PROVIDERS_SUCCESS = 'fetch_providers_success';
var fetchProvidersSuccess = function fetchProvidersSuccess(providers) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PROVIDERS_SUCCESS,
    providers: providers
  };
};

exports.FETCH_PROVIDERS_SUCCESS = FETCH_PROVIDERS_SUCCESS;
exports.fetchProvidersSuccess = fetchProvidersSuccess;

var FETCH_PROVIDERS_ERROR = 'fetch_providers_error';
var fetchProvidersError = function fetchProvidersError(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PROVIDERS_ERROR,
    error: error
  };
};

exports.FETCH_PROVIDERS_ERROR = FETCH_PROVIDERS_ERROR;
exports.fetchProvidersError = fetchProvidersError;

var fetchProviders = function fetchProviders() {
  console.log('fetchPresets');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/providers`, {
      fetch('assets/fakepi/providers.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (providers) {
        return dispatch(fetchProvidersSuccess(providers));
      }).catch(function (error) {
        return dispatch(fetchProvidersError(error));
      })
    );
  };
};

exports.fetchProviders = fetchProviders;

var FETCH_CATEGORIES_SUCCESS = 'fetch_categories_success';
var fetchCategoriesSuccess = function fetchCategoriesSuccess(categories) {
  console.log('fetchCategoriesSuccess', categories);
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories: categories
  };
};

exports.FETCH_CATEGORIES_SUCCESS = FETCH_CATEGORIES_SUCCESS;
exports.fetchCategoriesSuccess = fetchCategoriesSuccess;

var FETCH_CATEGORIES_ERROR = 'fetch_categories_error';
var fetchCategoriesError = function fetchCategoriesError(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_CATEGORIES_ERROR,
    error: error
  };
};

exports.FETCH_CATEGORIES_ERROR = FETCH_CATEGORIES_ERROR;
exports.fetchCategoriesError = fetchCategoriesError;

var fetchCategories = function fetchCategories() {
  console.log('fetchCategories');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/categories`, {
      fetch('assets/fakepi/categories.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        console.log(response);
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          console.error(error);
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (categories) {
        return dispatch(fetchCategoriesSuccess(categories));
      }).catch(function (error) {
        return dispatch(fetchCategoriesError(error));
      })
    );
  };
};

exports.fetchCategories = fetchCategories;

var FETCH_EXTRAS_SUCCESS = 'fetch_extras_success';
var fetchExtrasSuccess = function fetchExtrasSuccess(extras, provider) {
  console.log('fetchExtrasSuccess', extras);
  return {
    type: FETCH_EXTRAS_SUCCESS,
    extras: extras,
    provider: provider
  };
};

exports.FETCH_EXTRAS_SUCCESS = FETCH_EXTRAS_SUCCESS;
exports.fetchExtrasSuccess = fetchExtrasSuccess;

var FETCH_EXTRAS_ERROR = 'fetch_extras_error';
var fetchExtrasError = function fetchExtrasError(error) {
  console.log('fetchExtrasError', error);
  return {
    type: FETCH_EXTRAS_ERROR,
    error: error
  };
};

exports.FETCH_EXTRAS_ERROR = FETCH_EXTRAS_ERROR;
exports.fetchExtrasError = fetchExtrasError;

var fetchExtras = function fetchExtras(provider) {
  console.log('fetchExtras');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/${provider}/extras`, {
      fetch('assets/fakepi/providers/' + provider + '.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        console.log(response);
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          console.error(error);
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (extras) {
        return dispatch(fetchExtrasSuccess(extras.extras, provider));
      }).catch(function (error) {
        return dispatch(fetchExtrasError(error));
      })
    );
  };
};

exports.fetchExtras = fetchExtras;

var FETCH_EXEMPTIONS_SUCCESS = 'fetch_exemptions_success';
var fetchExemptionsSuccess = function fetchExemptionsSuccess(exemptions) {
  return {
    type: FETCH_EXEMPTIONS_SUCCESS,
    exemptions: exemptions
  };
};

exports.FETCH_EXEMPTIONS_SUCCESS = FETCH_EXEMPTIONS_SUCCESS;
exports.fetchExemptionsSuccess = fetchExemptionsSuccess;

var FETCH_EXEMPTIONS_ERROR = 'fetch_exemptions_error';
var fetchExemptionsError = function fetchExemptionsError(error) {
  return {
    type: FETCH_EXEMPTIONS_ERROR,
    error: error
  };
};

exports.FETCH_EXEMPTIONS_ERROR = FETCH_EXEMPTIONS_ERROR;
exports.fetchExemptionsError = fetchExemptionsError;

var fetchExemptions = function fetchExemptions(provider) {
  console.log('fetchExtras');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return function (dispatch) {
    return (
      //fetch(`/api/${provider}/extras/exemptions`, {
      fetch('assets/fakepi/exemptions.json', {
        method: 'GET',
        headers: Object.assign({}, {
          'Accept': 'application/json'
        }, {})
      }).then(function (response) {
        console.log(response);
        if (response.state < 200 || response.state >= 300) {
          var error = new Error(response.statusText);
          error.response = response;
          console.error(error);
          throw error;
        }
        return response;
      }).then(function (response) {
        return response.json();
      }).then(function (exemptions) {
        return dispatch(fetchExemptionsSuccess(exemptions));
      }).catch(function (error) {
        return dispatch(fetchExemptionsError(error));
      })
    );
  };
};

exports.fetchExemptions = fetchExemptions;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(21);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(22);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reducers = __webpack_require__(0);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redux = __webpack_require__(1),
    createStore = redux.createStore,
    applyMiddleware = redux.applyMiddleware,
    thunk = __webpack_require__(23).default,
    reducers = __webpack_require__(0),
    store = createStore(_reducers2.default, applyMiddleware(thunk));

module.exports = store;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.1
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return Mousetrap;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reducers = __webpack_require__(0);

var _reducers2 = _interopRequireDefault(_reducers);

var _path = __webpack_require__(12);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Mousetrap = __webpack_require__(11);

var emsp = ' ';
var ensp = ' ';

var removeChildren = function removeChildren(node) {
  var last = void 0;
  while (last = node.lastChild) {
    node.removeChild(last);
  }
};

//import lazyLoadScript from 'lazyLoadScript';

/*
function getJSON(endpoint) {
  return new Promise(function(resolve, reject) {

    var request = new Request(endpoint, {
    	method: 'GET',
    	//mode: 'cors',
    	//redirect: 'follow',
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    });

    fetch(endpoint).then((response) => response.json()).then((json) => {
      resolve(json)
    })
  })
}

getJSON('/api/extras/desires').then((json) => {
  //console.log(json);
});
*/

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var store = __webpack_require__(10);

// fetch the providers (ex: ["modx.com", "modmore"])
store.dispatch(_actions2.default.fetchProviders()).then(function (action) {
  Promise.all([// then get the presets, desires and categories
  store.dispatch(_actions2.default.fetchPresets()), store.dispatch(_actions2.default.fetchDesires()), store.dispatch(_actions2.default.fetchCategories()), store.dispatch(_actions2.default.fetchExemptions())]).then(function () {
    var extraPromises = action.providers.map(function (provider) {
      return (// then for each provider
        store.dispatch(_actions2.default.fetchExtras(provider)) // get the Extras

      );
    });
    Promise.all(extraPromises).then(function () {
      console.log('extras loaded');
      document.body.classList.remove('no-packages-loaded');
      document.body.classList.add('packages-loaded');
    });
  });
});

document.getElementById('packages-to-install').addEventListener('change', function (event) {
  console.log(event);
  showOrHidePremiumYouveChosen();

  if (event.target.getAttribute('name') !== 'show-package-descriptions') return;

  //console.log('show-package-descriptions', event.target);

  var descriptions = document.getElementById('packages-to-install').querySelectorAll('.extra-description');
  for (var i = 0; i < descriptions.length; i++) {
    var description = descriptions[i];
    if (event.target.checked) {
      description.removeAttribute('hidden');
    } else {
      description.setAttribute('hidden', true);
    }
  }

  var showPackageDescriptionInputs = document.querySelectorAll('input[name="show-package-descriptions"]:not(#' + event.target.getAttribute('id') + ')');
  for (var _i = 0; _i < showPackageDescriptionInputs.length; _i++) {
    showPackageDescriptionInputs[_i].checked = event.target.checked;
  }
});

function showOrHidePremiumYouveChosen() {
  var chosenPremium = function () {
    try {
      return document.getElementById('packages-to-install').querySelectorAll('label[data-price] input:checked').length;
    } catch (e) {
      return 0;
    }
  }(),
      youveChosenPremium = document.getElementById('youve-chosen-premium');

  if (chosenPremium) {
    youveChosenPremium.removeAttribute('aria-hidden');
  } else {
    youveChosenPremium.setAttribute('aria-hidden', true);
  }

  setTimeout(function () {
    youveChosenPremium.querySelector('.num-extras').innerHTML = chosenPremium ? chosenPremium + ' ' : 'no ';
    youveChosenPremium.querySelector('.premium-packages').innerHTML = 'premium package' + (chosenPremium > 1 ? 's' : '');
  }, !chosenPremium ? 500 : 0);
}

var actionTables = document.querySelectorAll('table.action-row');
for (var i = 0; i < actionTables.length; i++) {
  var actionTable = actionTables[i];
  actionTable.addEventListener('click', function (event) {
    if (event.target.getAttribute('name') == 'remove') {
      event.target.closest('tr').remove();
    }
  });

  actionTable.addEventListener('focusin', function (event) {
    if (event.target.matches('tr')) {
      var trs = event.target.closest('tbody').querySelectorAll('tr');
      //console.log('trs', trs);
      for (var _i2 = 0; _i2 < trs.length; _i2++) {
        var tr = trs[_i2];
        if (tr !== event.target) tr.classList.remove('focused');
      }
      //console.log('adding focused class', event.target);
      event.target.classList.add('focused');
    }
  });
}

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(function () {
  var state = store.getState();
  console.log(state);

  var numExtras = 0;
  Object.keys(state.extras).forEach(function (provider) {
    //console.log(state.extras[provider]);
    numExtras += state.extras[provider].length;
  });

  if (!numExtras) {
    //console.log('returning');
    return;
  }

  var managingWrapper = document.getElementById('what-ill-be-managing-fields');
  removeChildren(managingWrapper);

  state.presets.forEach(function (preset) {
    managingWrapper.appendChild(function () {
      var div = document.createElement('div');
      div.classList.add('field');

      div.appendChild(function () {
        var label = document.createElement('label');
        label.setAttribute('for', 'want-' + preset.key);

        label.appendChild(function () {
          var input = document.createElement('input');
          input.setAttribute('type', 'radio');
          input.setAttribute('id', 'want-' + preset.key);
          input.setAttribute('name', 'i-want');
          input.dataset.preset = preset.key;
          input.dataset.dependent = function () {
            try {
              return preset.dependent.map(function (dep) {
                return 'pkg-' + dep;
              }).join(' ');
            } catch (e) {
              console.error(e);
              return undefined;
            }
          }();
          input.checked = preset.checked;

          return input;
        }());

        label.appendChild(function () {
          return document.createTextNode('' + ensp + preset.title);
        }());

        return label;
      }());

      return div;
    }());
  });

  /*
  <div class="field">
      <label for="want-custom-site">
      <input checked type="radio" id="want-custom-site" name="i-want" data-dependent="">&nbsp;Custom Site</label>
  </div>
  */

  var desiresWrapper = document.getElementById('i-would-like-to-desires');
  removeChildren(desiresWrapper);
  state.desires.forEach(function (desire) {
    desiresWrapper.appendChild(function () {
      var label = document.createElement('label');
      label.classList.add('field');
      label.setAttribute('for', 'i-like-' + desire.key);

      label.appendChild(function () {
        var input = document.createElement('input');

        input.setAttribute('type', desire.type || 'checkbox');
        input.setAttribute('name', desire.name ? 'i-like-' + desire.name : 'i-like-' + desire.key);
        input.setAttribute('id', 'i-like-' + desire.key);
        input.dataset.dependent = desire.dependencies.map(function (dep) {
          return 'pkg-' + dep;
        }).join(' ');
        if (desire.default) input.dataset.default = desire.default;

        return input;
      }());

      label.appendChild(document.createTextNode(ensp));
      label.appendChild(document.createTextNode(desire.title));

      return label;
      //<label class="field" for="i-like-versionx"><input type="checkbox" name="i-like-versionx" id="i-like-versionx" data-dependent="pkg-versionx">&ensp;Create versioned backups of my content</label>
    }());
  });

  var showPackageDescriptions = document.getElementById('show-package-descriptions').checked;

  var presets = state.presets;
  /*presets.forEach((preset) => (
    console.log(preset)
  ))*/

  var desires = state.desires;
  //console.log(desires, desires.length);

  var categories = state.categories;
  categories.forEach(function (category) {
    var key = category.key,
        title = category.title;

    var extras = filterExtrasByCategory(category.key);

    //const foo = document.getElementById('foo');
    //removeChildren(foo);
    if (document.querySelector('[data-category="' + category.key + '"]')) {
      //console.log('should not recreate ', category.key, extras, document.querySelector(`[data-category="${category.key}"]`).outerHTML);
      addExtrasToCategory(category, extras);
    } else {
      foo.appendChild(getCategoryDetail(category, extras));
    }
  });

  function addExtrasToCategory(category, extras) {
    //  console.log('addExtrasToCategory', category, extras);
    var wrapper = document.querySelector('[data-category="' + category.key + '"]');
    extras.forEach(function (extra) {
      //console.log(extra);
      if (!wrapper.querySelector('label[data-pkg-key="' + extra.key + '"]')) {
        addExtras(extras, document.querySelector('[data-category="' + category.key + '"]').querySelector('fieldset'));
        /*wrapper.appendChild(
          document.createTextNode('YOLO')
        )*/
      }
    });

    sortIt();
    function sortIt() {
      var fieldset = wrapper.querySelector('fieldset');
      var fields = [].concat(_toConsumableArray(fieldset.querySelectorAll('.field')));

      //console.log(fields);

      var sortedFields = fields.sort(function (a, b) {
        if (a.querySelector('input').getAttribute('name') == b.querySelector('input').getAttribute('name')) {
          return a.querySelector('label').dataset.pkgKey > b.querySelector('label').dataset.pkgKey ? '1' : '-1';
        }
        return a.querySelector('input').getAttribute('name') > b.querySelector('input').getAttribute('name') ? '1' : '-1';
      });

      console.log(sortedFields);

      for (var _i3 = 0; _i3 < fields.length; _i3++) {
        fieldset.removeChild(fields[_i3]);
      }

      for (var _i4 = 0; _i4 < sortedFields.length; _i4++) {
        fieldset.appendChild(sortedFields[_i4]);
      }
    }
  }

  function filterExtrasByCategory(category) {
    var extras = [];

    console.log('filterExtrasByCategory', Object.keys(state.extras));

    Object.keys(state.extras).forEach(function (provider) {
      var filtered = state.extras[provider].filter(function (extra) {
        return extra.category == category;
      });
      extras = [].concat(_toConsumableArray(filtered), _toConsumableArray(extras));
    });

    return extras;
  }

  function addExtras(extras, appendTo) {
    extras.forEach(function (extra) {
      var pkgKey = 'pkg-' + extra.key;
      if (document.getElementById(pkgKey)) return;

      var div = document.createElement('div');
      div.classList.add('field');

      var labelWrapper = document.createElement('div');
      labelWrapper.classList.add('always');
      labelWrapper.classList.add('flexible');
      labelWrapper.classList.add('start');
      var label = document.createElement('label');
      label.setAttribute('aria-label', extra.title);
      label.setAttribute('aria-describedby', pkgKey + '-description');
      label.dataset.pkgKey = extra.key;
      if (extra.price) label.dataset.price = extra.price;

      label.setAttribute('for', pkgKey);

      function getExemptionsByExtra(extra) {
        //console.log('getExemptionsByExtra', Object.keys(state.exemptions));

        var returns = [];

        Object.keys(state.exemptions).forEach(function (exemption) {
          console.log(exemption, state.exemptions[exemption]);

          var pkgs = state.exemptions[exemption];
          pkgs.forEach(function (pkg) {
            if (pkg == extra.key) returns.push(exemption);
          });
        });

        return returns;
      }

      label.appendChild(function () {
        var input = document.createElement('input');
        input.setAttribute('type', extra.type || 'checkbox');
        input.setAttribute('name', extra.name ? 'pkg-' + extra.name : pkgKey);
        input.setAttribute('id', pkgKey);
        //input.dataset.preset = 'foo';
        if (extra.default) input.dataset.default = extra.default;

        var pkgExemptions = getExemptionsByExtra(extra).map(function (exemption) {
          return 'pkg-' + exemption;
        }).join(' ').trim();
        if (pkgExemptions) input.dataset.pkgExempt = pkgExemptions;

        return input;
      }());

      label.appendChild(document.createTextNode(' ' + extra.title));

      label.appendChild(document.createTextNode(emsp));

      labelWrapper.appendChild(label);
      labelWrapper.appendChild(function () {
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        if (extra.price) a.setAttribute('aria-describedby', 'premium-extras-trial');
        a.appendChild(function () {
          var small = document.createElement('small');
          small.innerHTML = extra.price ? 'premium' : 'more info';
          small.appendChild(function () {
            var span = document.createElement('span');

            span.classList.add('visually-hidden');
            span.innerHTML = ' about ' + extra.title;

            return span;
          }());

          return small;
        }());

        return a;
      }());

      div.appendChild(labelWrapper);
      div.appendChild(function () {
        var p = document.createElement('p');
        p.classList.add('extra-description');
        var price = extra.price ? extra.price + ' ' : '';
        p.setAttribute('id', pkgKey + '-description');
        if (!showPackageDescriptions) p.setAttribute('hidden', true);

        /*p.appendChild((() => {
          const img = document.createElement('img');
          img.setAttribute('src', './assets/img/modmore.svg');
          img.setAttribute('alt', 'modmore logo');
          return img;
          //<img src="./assets/img/modmore.svg" alt="modmore logo">
        })());*/

        p.appendChild(document.createTextNode('' + price + extra.description));
        return p;
      }());
      appendTo.appendChild(div);
    });
  }

  function getCategoryDetail(category, extras) {
    console.log('getCategoryDetail', category, extras);

    var details = document.createElement('details');
    details.setAttribute('open', true);
    details.dataset.category = category.key;

    details.appendChild(function () {
      var summary = document.createElement('summary');
      summary.innerHTML = category.title;
      return summary;
    }());

    details.appendChild(function () {
      var fieldset = document.createElement('fieldset');

      var legend = document.createElement('legend');
      legend.classList.add('visually-hidden');
      legend.innerHTML = category.title;

      fieldset.appendChild(legend);

      addExtras(extras, fieldset);

      return fieldset;
    }());

    //console.log('details', details);

    return details;

    /*
    <details open="">
        <summary>Editing Packages</summary>
        <fieldset>
          <legend class="visually-hidden">Editing Packages</legend>
          <label for="pkg-redactor" class="field">
            <input type="radio" name="pkg-redactor-tinymce" id="pkg-redactor" data-preset="blog"> Redactor by modmore <a href="#"><small>more info<span class="visually-hidden"> about Redactor by modmore</span></small></a>
          </label>
          <label for="pkg-tinymce" class="field">
            <input type="radio" name="pkg-redactor-tinymce" id="pkg-tinymce"> TinyMCE <a href="#"><small>more info<span class="visually-hidden"> about TinyMCE</span></small></a>
          </label>
          <label for="pkg-ace" class="field">
            <input type="radio" name="pkg-ace-codemirror" id="pkg-ace"> Ace <a href="#"><small>more info<span class="visually-hidden"> about Ace</span></small></a>
          </label>
          <label for="pkg-codemirror" class="field">
            <input type="radio" name="pkg-ace-codemirror" id="pkg-codemirror"> CodeMirror <a href="#"><small>more info<span class="visually-hidden"> about CodeMirror</span></small></a>
          </label>
          <label for="pkg-blockdown" class="field">
            <input type="checkbox" name="pkg-blockdown" id="pkg-blockdown"> Blockdown <a href="#"><small>more info<span class="visually-hidden"> about Blockdown</span></small></a>
          </label>
        </fieldset>
    </details>
    */
  }
});

document.addEventListener('DOMContentLoaded', function (event) {

  (function () {
    document.getElementById('i-want-to-create-a').addEventListener('change', function (event) {
      var inputs = document.querySelectorAll('#i-would-like-to input, #install-these-packages input');
      for (var _i5 = 0; _i5 < inputs.length; _i5++) {
        var input = inputs[_i5];
        if (input.dataset.dirty !== 'false') input.checked = false;
        //input.checked = false;
      }
    });
  })();

  (function () {
    var primaryBtns = document.querySelectorAll('section footer .primary');
    var breadcrumb = document.getElementById('breadcrumb'),
        breadcrumbRect = breadcrumb.getBoundingClientRect();
    for (var _i6 = 0; _i6 < primaryBtns.length; _i6++) {
      var primaryBtn = primaryBtns[_i6];
      primaryBtn.addEventListener('click', function (event) {

        console.log(event.target.closest('section'));
        try {
          scrollTo(event.target.closest('section').nextElementSibling.getBoundingClientRect().top - breadcrumbRect.height);
        } catch (e) {
          return;
        }
        event.preventDefault();
      });
    }
  })();

  listenDirty();
  document.getElementById('continue').addEventListener('click', function (event) {
    console.log('continue');

    var breadcrumb = document.getElementById('breadcrumb'),
        breadcrumbRect = breadcrumb.getBoundingClientRect();

    try {
      scrollTo(document.getElementById('installation-options').getBoundingClientRect().top - breadcrumbRect.height);
    } catch (e) {
      return;
    }
    event.preventDefault();
  });
  document.querySelector('#a11y-prefs-btn a').addEventListener('click', function (event) {

    window.location.hash = 'a11y-prefs';
    document.getElementById('a11y-prefs').removeAttribute('hidden');

    var breadcrumb = document.getElementById('breadcrumb'),
        breadcrumbRect = breadcrumb.getBoundingClientRect();

    try {
      scrollTo(document.getElementById('a11y-prefs').getBoundingClientRect().top - breadcrumbRect.height);
    } catch (e) {
      return;
    } finally {
      event.preventDefault();
    }
  });

  document.getElementById('hit-areas').addEventListener('change', function (event) {
    if (event.target.checked) {
      document.body.classList.add('wa-exaggerate-tap-areas');
    } else {
      document.body.classList.remove('wa-exaggerate-tap-areas');
    }
  });

  if (window.location.hash === '#a11y-prefs') {
    setTimeout(function () {
      document.querySelector('#a11y-prefs-btn a').click();
    }, 120);
  }

  var octalTables = document.querySelectorAll('.wa-octal-table');

  var _loop = function _loop(_i7) {
    var octalTable = octalTables[_i7];
    octalTable.addEventListener('change', function (event) {
      console.log(event.target);
      updateOctalTable(octalTable, event);
    });
    var octalTarget = document.getElementById(octalTable.dataset.octalTarget);
    octalTarget.addEventListener('change', function (event) {
      handleOctalTargetChange(octalTable, event);
    });
    octalTarget.addEventListener('input', function (event) {
      handleOctalTargetChange(octalTable, event);
    });
  };

  for (var _i7 = 0; _i7 < octalTables.length; _i7++) {
    _loop(_i7);
  }

  function clearInputChecked(octalTable) {
    var inputs = octalTable.querySelectorAll('input[type="checkbox"]');
    for (var _i8 = 0; _i8 < inputs.length; _i8++) {
      inputs[_i8].checked = false;
    }
  }

  function listenDirty() {
    var inputs = document.querySelectorAll('input');

    var _loop2 = function _loop2(_i9) {
      var input = inputs[_i9];
      input.addEventListener('change', function (event) {
        input.dataset.dirty = 'false';
      });
    };

    for (var _i9 = 0; _i9 < inputs.length; _i9++) {
      _loop2(_i9);
    }
  }

  function showHideOctalMessage(octalTable, octal) {
    if (octal === 777) {
      octalTable.closest('.wa-octal-table-wrapper').querySelector('.dangerous.balanced.message').removeAttribute('hidden');
    } else {
      octalTable.closest('.wa-octal-table-wrapper').querySelector('.dangerous.balanced.message').setAttribute('hidden', 'true');
    }
  }

  function handleOctalTargetChange(octalTable, event) {
    var octal = parseInt(event.target.value);

    showHideOctalMessage(octalTable, octal);

    var hundredths = Math.floor(octal / 100) * 100;
    var tenths = Math.floor(octal / 10) * 10 - hundredths;
    var digit = octal - hundredths - tenths;
    //console.log(hundredths, tenths, digit);


    var hundredthCells = octalTable.querySelectorAll('tbody > tr:first-of-type > td:not(:first-child)'),
        tenthsCells = octalTable.querySelectorAll('tbody > tr:nth-of-type(2) > td:not(:first-child)'),
        digitCells = octalTable.querySelectorAll('tbody > tr:nth-of-type(3) > td:not(:first-child)');

    clearInputChecked(octalTable);
    checkCellRow(hundredths, hundredthCells);
    checkCellRow(tenths, tenthsCells);
    checkCellRow(digit, digitCells);

    function checkCellRow(t, cells) {
      for (var _i10 = 0; _i10 < cells.length; _i10++) {
        var cell = cells[_i10];
        var int = parseInt(cell.querySelector('input').dataset.octal);
        console.log(t, int);
        if (int <= t) {
          cell.querySelector('input').checked = true;
          t -= int;
        }
      }
    }
  }

  function updateOctalTable(octalTable, event) {
    var inputs = octalTable.querySelectorAll('input[type="checkbox"]');
    var octal = [].concat(_toConsumableArray(inputs)).map(function (input) {
      return input.checked ? parseInt(input.getAttribute('data-octal')) : 0;
    }).reduce(function (a, b) {
      return a + b;
    });
    document.getElementById(octalTable.dataset.octalTarget).value = octal;

    showHideOctalMessage(octalTable, octal);
  }

  function checkWhatIWantDependent(event, dependent) {
    console.log(event.target.checked, event.target.dataset);
    if (event.target.checked) {

      var inputs = document.getElementById('i-would-like-to').querySelectorAll('input[data-dependent*="' + event.target.getAttribute('id') + '"]');
      console.log(inputs);
      for (var _i11 = 0; _i11 < inputs.length; _i11++) {
        var _input = inputs[_i11];
        if (_input.dataset.dirty !== 'false') {
          console.log('checking!!! ', dependent);
          if (!shouldExempt(_input)) {
            _input.checked = true;
          }
        }
      }
    }
  }

  function shouldExempt(element) {
    try {
      return element.dataset.pkgExempt && document.getElementById(element.dataset.pkgExempt).checked;
    } catch (e) {
      return false;
    }
  }

  function exemptInputs(input) {
    console.log('exemptInputs', input.getAttribute('id'));
    var inputs = document.getElementById('packages-to-install').querySelectorAll('input[data-pkg-exempt*="' + input.getAttribute('id') + '"]');
    console.log(inputs);
    for (var _i12 = 0; _i12 < inputs.length; _i12++) {
      var _input2 = inputs[_i12];
      _input2.checked = false;
    }
  }

  function handleContextInstallationInputChange(event) {
    console.log(event);

    if (event.target.getAttribute('type') == 'checkbox') {
      var msg = document.getElementById(event.target.dataset.message);
      if (event.target.checked) {} else {
        if (msg) {
          msg.innerHTML = msg.dataset.original;
        }
      }
    }

    try {
      if (document.getElementById(event.target.dataset.check).checked) document.querySelector('[mx-bind="' + event.target.getAttribute('id') + '"]').innerHTML = event.target.dataset.preface ? _path2.default.join(event.target.dataset.preface, event.target.value) : event.target.value;
    } catch (e) {
      console.error(e);
    }

    try {
      console.log(event.target.dataset.check);
      if (event.target.value) document.getElementById(event.target.dataset.check).checked = true;
    } catch (e) {
      console.error(e);
    }
  }

  document.getElementById('context-installation').addEventListener('change', handleContextInstallationInputChange);
  document.getElementById('context-installation').addEventListener('input', handleContextInstallationInputChange);

  document.getElementById('packages-to-install').addEventListener('change', function (event) {
    //console.log(event);

    function checkAll() {
      console.log('checkAll');
      var inputs = document.querySelectorAll('#packages-to-install input[type="checkbox"]:not(#i-like-it-all)');
      for (var _i13 = 0; _i13 < inputs.length; _i13++) {
        var _input3 = inputs[_i13];
        var wasChecked = _input3.checked;
        _input3.disabled = false;
        _input3.checked = true;
        if (wasChecked !== _input3.checked) _input3.dispatchEvent(new Event('change', { bubbles: true }));
      }

      var notCheckedRadios = document.querySelectorAll('input[data-default]:not(:checked)');
      for (var _i14 = 0; _i14 < notCheckedRadios.length; _i14++) {
        notCheckedRadios[_i14].checked = true;
      }

      //if(!document.getElementById('pkg-ace').checked && !document.getElementById('pkg-codemirror').checked) document.getElementById('pkg-ace').checked = true;
      //if(!document.getElementById('pkg-getresources').checked && !document.getElementById('pkg-pdotools').checked) document.getElementById('pkg-getresources').checked = true;
      //if(!document.getElementById('i-like-redactor').checked && !document.getElementById('i-like-tinymce').checked) document.getElementById('i-like-redactor').checked = true;
      //if(!document.getElementById('pkg-redactor').checked && !document.getElementById('pkg-tinymce').checked) document.getElementById('pkg-redactor').checked = true;
    }

    if (event.target.checked) {
      if (event.target.dataset.dependent) {
        /*if(event.target.dataset.dependent.trim() == "*") {
         }*/
        var dependents = event.target.dataset.dependent.trim().split(' ');
        console.log(dependents);
        dependents.map(function (dependent) {
          return '' + dependent;
        }).forEach(function (dependent) {
          checkWhatIWantDependent(event, dependent);

          if (dependent.trim().replace('pkg-', '') == "*") {
            checkAll();
            //return;
          }

          try {
            var element = document.getElementById(dependent.trim());
            console.log(dependent.trim());
            //if(element.dataset.dirty !== 'false') element.checked = true;
            //console.log(element, element.dataset);
            if (!shouldExempt(element)) {
              console.log('checking', dependent);
              element.checked = true;
            }
          } catch (e) {
            console.log(event.target.dataset.dependent.trim());
            console.error(e);
          }
        });
      }
      //if(event.target.)
      exemptInputs(event.target);
    }
  });

  /*
  document.getElementById('i-want-it-all').addEventListener('change', (event) => {
    if(event.target.checked) {
      const inputs = document.querySelectorAll('#packages-to-install input[type="checkbox"]');
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = false;
        input.checked = true;
      }
       if(!document.getElementById('pkg-ace').checked && !document.getElementById('pkg-codemirror').checked) document.getElementById('pkg-ace').checked = true;
      if(!document.getElementById('pkg-getresources').checked && !document.getElementById('pkg-pdotools').checked) document.getElementById('pkg-getresources').checked = true;
      if(!document.getElementById('i-like-redactor').checked && !document.getElementById('i-like-tinymce').checked) document.getElementById('i-like-redactor').checked = true;
      if(!document.getElementById('pkg-redactor').checked && !document.getElementById('pkg-tinymce').checked) document.getElementById('pkg-redactor').checked = true;
    }
  });
   document.getElementById('i-like-commerce').addEventListener('change', (event) => {
    const inputs = document.querySelectorAll('fieldset.commerce input.default');
    if(event.target.checked) {
       for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = false;
        if(input.dataset.dirty == 'true') input.checked = true;
      }
    } else {
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = true;
        if(input.dataset.dirty == 'true') input.checked = false;
      }
    }
  });
  */

  Mousetrap.bind('alt+d', function (e) {
    var input = document.getElementById('show-package-descriptions');
    input.checked = !input.checked;

    input.dispatchEvent(new Event('change', { bubbles: true }));
    //input.dispatchEvent(new Event('input',{bubbles:true}));
  });

  function scrollTo(to) {
    window.scrollBy({
      top: to,
      //left: 0,
      behavior: 'smooth'
    });
  }
}); // end onDOMContentLoaded

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(31);
module.exports = self.fetch.bind(self);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(19);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(20);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);


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
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

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

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

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

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(16);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(8);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(29);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(30)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ })
/******/ ]);
});
//# sourceMappingURL=modx-setup.js.map