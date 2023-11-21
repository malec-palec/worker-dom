var WorkerThread = (function (exports) {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
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
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var count = 0;
  var transfer$2 = [];
  var mapping = new Map();
  /**
   * Stores a string in mapping and returns the index of the location.
   * @param value string to store
   * @return location in map
   */
  function store(value) {
    if (mapping.has(value)) {
      // Safe to cast since we verified the mapping contains the value
      return mapping.get(value);
    }
    mapping.set(value, count);
    transfer$2.push(value);
    return count++;
  }
  /**
   * Returns strings registered but not yet transferred.
   * Side effect: Resets the transfer array to default value, to prevent passing the same values multiple times.
   */
  function consume$1() {
    var strings = transfer$2;
    transfer$2 = [];
    return strings;
  }

  var phase = 0 /* Phase.Initializing */;
  var set = function set(newPhase) {
    return phase = newPhase;
  };

  var transfer$1 = [];
  /**
   * Returns nodes registered but not yet transferred.
   * Side effect: Resets the transfer array to default value, to prevent passing the same values multiple times.
   */
  function consume() {
    var copy = transfer$1;
    transfer$1 = [];
    return copy;
  }

  var pending = false;
  var pendingMutations = [];
  // TODO(choumx): Change `mutation` to Array<Uint16> to prevent casting errors e.g. integer underflow, precision loss.
  function transfer(document, mutation) {
    if (phase > 0 /* Phase.Initializing */ && document[58 /* TransferrableKeys.allowTransfer */]) {
      pending = true;
      pendingMutations = pendingMutations.concat(mutation);
      Promise.resolve().then(function (_) {
        if (pending) {
          var nodes = new Uint16Array(consume().reduce(function (acc, node) {
            return acc.concat(node[8 /* TransferrableKeys.creationFormat */]);
          }, [])).buffer;
          var mutations = new Uint16Array(pendingMutations).buffer;
          document.postMessage(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, 54 /* TransferrableKeys.phase */, phase), 12 /* TransferrableKeys.type */, phase === 2 /* Phase.Mutating */ ? 3 /* MessageType.MUTATE */ : 2), 37 /* TransferrableKeys.nodes */, nodes), 41 /* TransferrableKeys.strings */, consume$1()), 36 /* TransferrableKeys.mutations */, mutations), [nodes, mutations]);
          pendingMutations = [];
          pending = false;
          set(2 /* Phase.Mutating */);
        }
      });
    }
  }

  var AMP = /*#__PURE__*/function () {
    function AMP(document) {
      _classCallCheck(this, AMP);
      this.document = void 0;
      this.document = document;
    }
    /**
     * Returns a promise that resolves with the value of `key`.
     * @param key
     */
    _createClass(AMP, [{
      key: "getState",
      value: function getState() {
        var _this = this;
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return new Promise(function (resolve) {
          var messageHandler = function messageHandler(event) {
            var message = event.data;
            if (message[12 /* TransferrableKeys.type */] !== 11 /* MessageType.GET_STORAGE */) {
              return;
            }
            // TODO: There is a race condition here if there are multiple concurrent
            // getState(k) messages in flight, where k is the same value.
            var storageMessage = message;
            if (storageMessage[74 /* TransferrableKeys.storageKey */] !== key) {
              return;
            }
            _this.document.removeGlobalEventListener('message', messageHandler);
            var value = storageMessage[21 /* TransferrableKeys.value */];
            resolve(value);
          };
          _this.document.addGlobalEventListener('message', messageHandler);
          transfer(_this.document, [12 /* TransferrableMutationType.STORAGE */, 1 /* GetOrSet.GET */, 2 /* StorageLocation.AmpState */, /* key */store(key) + 1, /* value */0]);
          setTimeout(resolve, 500, null); // TODO: Why a magical constant, define and explain.
        });
      }
      /**
       * Deep-merges `state` into the existing state.
       * @param state
       */
    }, {
      key: "setState",
      value: function setState(state) {
        // Stringify `state` so it can be post-messaged as a transferrable.
        var stringified;
        try {
          stringified = JSON.stringify(state);
        } catch (e) {
          throw new Error("AMP.setState only accepts valid JSON as input.");
        }
        transfer(this.document, [12 /* TransferrableMutationType.STORAGE */, 2 /* GetOrSet.SET */, 2 /* StorageLocation.AmpState */, /* key */0, /* value */store(stringified) + 1]);
      }
    }]);
    return AMP;
  }();

  var exportedFunctions = {};
  function callFunctionMessageHandler(event, document) {
    var msg = event.data;
    if (msg[12 /* TransferrableKeys.type */] !== 12 /* MessageType.FUNCTION */) {
      return;
    }
    var functionMessage = msg;
    var fnIdentifier = functionMessage[77 /* TransferrableKeys.functionIdentifier */];
    var fnArguments = JSON.parse(functionMessage[78 /* TransferrableKeys.functionArguments */]);
    var index = functionMessage[7 /* TransferrableKeys.index */];
    var fn = exportedFunctions[fnIdentifier];
    if (!fn) {
      transfer(document, [13 /* TransferrableMutationType.FUNCTION_CALL */, 2 /* ResolveOrReject.REJECT */, index, store(JSON.stringify("[worker-dom]: Exported function \"".concat(fnIdentifier, "\" could not be found.")))]);
      return;
    }
    Promise.resolve(fn) // Forcing promise flows allows us to skip a try/catch block.
    .then(function (f) {
      return f.apply(null, fnArguments);
    }).then(function (value) {
      transfer(document, [13 /* TransferrableMutationType.FUNCTION_CALL */, 1 /* ResolveOrReject.RESOLVE */, index, store(JSON.stringify(value))]);
    }, function (err) {
      var errorMessage = JSON.stringify(err.message || err);
      transfer(document, [13 /* TransferrableMutationType.FUNCTION_CALL */, 2 /* ResolveOrReject.REJECT */, index, store(JSON.stringify("[worker-dom]: Function \"".concat(fnIdentifier, "\" threw: \"").concat(errorMessage, "\"")))]);
    });
  }
  function exportFunction(name, fn) {
    if (!name || name === '') {
      throw new Error("[worker-dom]: Attempt to export function was missing an identifier.");
    }
    if (typeof fn !== 'function') {
      throw new Error("[worker-dom]: Attempt to export non-function failed: (\"".concat(name, "\", ").concat(_typeof(fn), ")."));
    }
    if (name in exportedFunctions) {
      throw new Error("[worker-dom]: Attempt to re-export function failed: \"".concat(name, "\"."));
    }
    exportedFunctions[name] = fn;
  }

  /**
   * A lightweight Document stub for the no-dom amp binary.
   */
  var DocumentStub = /*#__PURE__*/function () {
    function DocumentStub() {
      _classCallCheck(this, DocumentStub);
      // Internal variables.
      this.defaultView = void 0;
      this.postMessage = void 0;
      this.addGlobalEventListener = void 0;
      this.removeGlobalEventListener = void 0;
      this[58 /* TransferrableKeys.allowTransfer */] = true;
      this[7 /* TransferrableKeys.index */] = -1;
      this.defaultView = {
        document: this
      };
    }
    _createClass(DocumentStub, [{
      key: "59",
      value: function _() {
        set(2 /* Phase.Mutating */);
      }
    }]);
    return DocumentStub;
  }();

  var ALLOWLISTED_GLOBALS = {
    Array: true,
    ArrayBuffer: true,
    BigInt: true,
    BigInt64Array: true,
    BigUint64Array: true,
    Boolean: true,
    Cache: true,
    CustomEvent: true,
    DataView: true,
    Date: true,
    Error: true,
    EvalError: true,
    Event: true,
    EventTarget: true,
    Float32Array: true,
    Float64Array: true,
    Function: true,
    Infinity: true,
    Int16Array: true,
    Int32Array: true,
    Int8Array: true,
    Intl: true,
    JSON: true,
    Map: true,
    Math: true,
    NaN: true,
    Number: true,
    Object: true,
    Promise: true,
    Proxy: true,
    RangeError: true,
    ReferenceError: true,
    Reflect: true,
    RegExp: true,
    Set: true,
    String: true,
    Symbol: true,
    SyntaxError: true,
    TextDecoder: true,
    TextEncoder: true,
    TypeError: true,
    URIError: true,
    URL: true,
    Uint16Array: true,
    Uint32Array: true,
    Uint8Array: true,
    Uint8ClampedArray: true,
    WeakMap: true,
    WeakSet: true,
    WebAssembly: true,
    WebSocket: true,
    XMLHttpRequest: true,
    atob: true,
    addEventListener: true,
    removeEventListener: true,
    btoa: true,
    caches: true,
    clearInterval: true,
    clearTimeout: true,
    console: true,
    decodeURI: true,
    decodeURIComponent: true,
    document: true,
    encodeURI: true,
    encodeURIComponent: true,
    escape: true,
    fetch: true,
    indexedDB: true,
    isFinite: true,
    isNaN: true,
    location: true,
    navigator: true,
    onerror: true,
    onrejectionhandled: true,
    onunhandledrejection: true,
    parseFloat: true,
    parseInt: true,
    performance: true,
    requestAnimationFrame: true,
    cancelAnimationFrame: true,
    self: true,
    setTimeout: true,
    setInterval: true,
    unescape: true
  };
  // Modify global scope by removing disallowed properties.
  function deleteGlobals(global) {
    /**
     * @param object
     * @param property
     * @return True if property was deleted from object. Otherwise, false.
     */
    var deleteUnsafe = function deleteUnsafe(object, property) {
      if (!ALLOWLISTED_GLOBALS.hasOwnProperty(property)) {
        try {
          delete object[property];
          return true;
        } catch (e) {}
      }
      return false;
    };
    // Walk up global's prototype chain and dereference non-allowlisted properties
    // until EventTarget is reached.
    var current = global;
    var _loop = function _loop() {
      var deleted = [];
      var failedToDelete = [];
      Object.getOwnPropertyNames(current).forEach(function (prop) {
        if (deleteUnsafe(current, prop)) {
          deleted.push(prop);
        } else {
          failedToDelete.push(prop);
        }
      });
      console.info("Removed ".concat(deleted.length, " references from"), current, ':', deleted);
      if (failedToDelete.length) {
        console.info("Failed to remove ".concat(failedToDelete.length, " references from"), current, ':', failedToDelete);
      }
      current = Object.getPrototypeOf(current);
    };
    while (current && current.constructor !== EventTarget) {
      _loop();
    }
  }

  /**
   * @param document
   * @param location
   * @param data
   */
  function createStorage(document, location, data) {
    var storage = Object.assign(Object.create(null), data);
    // Define properties on a prototype-less object instead of a class so that
    // it behaves more like normal objects, e.g. bracket notation and JSON.stringify.
    var define = Object.defineProperty;
    define(storage, 'length', {
      get: function get() {
        return Object.keys(this).length;
      }
    });
    define(storage, 'key', {
      value: function value(n) {
        var keys = Object.keys(this);
        return n >= 0 && n < keys.length ? keys[n] : null;
      }
    });
    define(storage, 'getItem', {
      value: function value(key) {
        var value = this[key];
        return value ? value : null;
      }
    });
    define(storage, 'setItem', {
      value: function value(key, _value) {
        var stringValue = String(_value);
        this[key] = stringValue;
        transfer(document, [12 /* TransferrableMutationType.STORAGE */, 2 /* GetOrSet.SET */, location, store(key) + 1, store(stringValue) + 1]);
      }
    });
    define(storage, 'removeItem', {
      value: function value(key) {
        delete this[key];
        transfer(document, [12 /* TransferrableMutationType.STORAGE */, 2 /* GetOrSet.SET */, location, store(key) + 1, 0 // value == 0 represents deletion.
        ]);
      }
    });

    define(storage, 'clear', {
      value: function value() {
        var _this = this;
        Object.keys(this).forEach(function (key) {
          delete _this[key];
        });
        transfer(document, [12 /* TransferrableMutationType.STORAGE */, 2 /* GetOrSet.SET */, location, 0, 0 // value == 0 represents deletion.
        ]);
      }
    });

    return storage;
  }

  function initializeStorage(document, localStorageInit, sessionStorageInit) {
    var window = document.defaultView;
    if (localStorageInit.storage) {
      window.localStorage = createStorage(document, 0 /* StorageLocation.Local */, localStorageInit.storage);
    } else {
      console.warn(localStorageInit.errorMsg);
    }
    if (sessionStorageInit.storage) {
      window.sessionStorage = createStorage(document, 1 /* StorageLocation.Session */, sessionStorageInit.storage);
    } else {
      console.warn(sessionStorageInit.errorMsg);
    }
  }

  var noop = function noop() {
    return void 0;
  };
  var workerDOM = function (postMessage, addEventListener, removeEventListener) {
    var document = new DocumentStub();
    // TODO(choumx): Avoid polluting Document's public API.
    document.postMessage = postMessage;
    document.addGlobalEventListener = addEventListener;
    document.removeGlobalEventListener = removeEventListener;
    return document.defaultView;
  }(postMessage.bind(self) || noop, addEventListener.bind(self) || noop, removeEventListener.bind(self) || noop);
  // Modify global scope by removing disallowed properties.
  deleteGlobals(self);
  // Offer APIs like AMP.setState() on the global scope.
  self.AMP = new AMP(workerDOM.document);
  // Allows for function invocation
  self.exportFunction = exportFunction;
  addEventListener('message', function (evt) {
    return callFunctionMessageHandler(evt, workerDOM.document);
  });
  var hydrate = function hydrate(document, strings, hydrateableNode, cssKeys, globalEventHandlerKeys, size, localStorageInit, sessionStorageInit) {
    initializeStorage(document, localStorageInit, sessionStorageInit);
  };

  exports.hydrate = hydrate;
  exports.workerDOM = workerDOM;

  return exports;

})({});
//# sourceMappingURL=worker.nodom.js.map
