var MainThread = (function (exports) {
  'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
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
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var OffscreenCanvasProcessor = function OffscreenCanvasProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(8 /* TransferrableMutationType.OFFSCREEN_CANVAS_INSTANCE */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* OffscreenCanvasMutationIndex.Target */];
          var target = nodeContext.getNode(targetIndex);
          if (target) {
            var offscreen = target.transferControlToOffscreen();
            workerContext.messageToWorker(_defineProperty(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 9), 13 /* TransferrableKeys.target */, [target._index_]), 38 /* TransferrableKeys.data */, offscreen), [offscreen]);
          } else {
            console.error("'OFFSCREEN_CANVAS_INSTANCE': getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 2 /* OffscreenCanvasMutationIndex.End */;
      },
      print: function print(mutations, startPosition, target) {
        return {
          type: 'OFFSCREEN_CANVAS_INSTANCE',
          target: target,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  /**
   * Returns true if the mutation type can cause a user-visible change to the DOM.
   * @param type
   */
  var isUserVisibleMutation = function isUserVisibleMutation(type) {
    switch (type) {
      case 4 /* TransferrableMutationType.EVENT_SUBSCRIPTION */:
      case 5 /* TransferrableMutationType.GET_BOUNDING_CLIENT_RECT */:
      case 6 /* TransferrableMutationType.LONG_TASK_START */:
      case 7 /* TransferrableMutationType.LONG_TASK_END */:
      case 12 /* TransferrableMutationType.STORAGE */:
      case 8 /* TransferrableMutationType.OFFSCREEN_CANVAS_INSTANCE */:
      case 13 /* TransferrableMutationType.FUNCTION_CALL */:
        return false;
      default:
        return true;
    }
  };
  var DefaultAllowedMutations = [0 /* TransferrableMutationType.ATTRIBUTES */, 1 /* TransferrableMutationType.CHARACTER_DATA */, 2 /* TransferrableMutationType.CHILD_LIST */, 3 /* TransferrableMutationType.PROPERTIES */, 4 /* TransferrableMutationType.EVENT_SUBSCRIPTION */, 5 /* TransferrableMutationType.GET_BOUNDING_CLIENT_RECT */, 6 /* TransferrableMutationType.LONG_TASK_START */, 7 /* TransferrableMutationType.LONG_TASK_END */, 8 /* TransferrableMutationType.OFFSCREEN_CANVAS_INSTANCE */, 9 /* TransferrableMutationType.OBJECT_MUTATION */, 10 /* TransferrableMutationType.OBJECT_CREATION */, 11 /* TransferrableMutationType.IMAGE_BITMAP_INSTANCE */, 12 /* TransferrableMutationType.STORAGE */, 13 /* TransferrableMutationType.FUNCTION_CALL */, 14 /* TransferrableMutationType.SCROLL_INTO_VIEW */];

  var ReadableMutationType = {
    0: 'ATTRIBUTES',
    1: 'CHARACTER_DATA',
    2: 'CHILD_LIST',
    3: 'PROPERTIES',
    4: 'EVENT_SUBSCRIPTION',
    5: 'GET_BOUNDING_CLIENT_RECT',
    6: 'LONG_TASK_START',
    7: 'LONG_TASK_END',
    8: 'OFFSCREEN_CANVAS_INSTANCE',
    9: 'OBJECT_MUTATION',
    10: 'OBJECT_CREATION',
    11: 'IMAGE_BITMAP_INSTANCE',
    12: 'STORAGE',
    13: 'FUNCTION_INVOCATION',
    14: 'SCROLL_INTO_VIEW'
  };

  var ADD_EVENT_SUBSCRIPTION_LENGTH = 6;
  var REMOVE_EVENT_SUBSCRIPTION_LENGTH = 2;

  /**
   * IE11 doesn't support NodeList.prototype.forEach
   * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
   * @param list NodeList to iterate over
   * @param callback method to call with each node
   */
  var nodeListEach = function nodeListEach(list, callback) {
    return Array.prototype.forEach.call(list, callback);
  };
  var BASE_ELEMENT_INDEX = 1;
  var NodeContext = /*#__PURE__*/function () {
    /**
     * Called when initializing a Worker, ensures the nodes in baseElement are
     * known for transmission into the Worker and future mutation events from the
     * Worker.
     * @param baseElement Element that will be controlled by a Worker
     */
    function NodeContext(stringContext, baseElement) {
      var _this = this;
      _classCallCheck(this, NodeContext);
      this.baseElement = void 0;
      this.stringContext = void 0;
      this.count = void 0;
      this.nodes = void 0;
      this.createNodes = function (buffer, sanitizer) {
        var nodeBuffer = new Uint16Array(buffer);
        var nodeBufferLength = nodeBuffer.length;
        for (var iterator = 0; iterator < nodeBufferLength; iterator += 5 /* TransferrableNodeIndex.End */) {
          var node = void 0;
          if (nodeBuffer[iterator + 1 /* TransferrableNodeIndex.NodeType */] === 3 /* NodeType.TEXT_NODE */) {
            node = document.createTextNode(_this.stringContext.get(nodeBuffer[iterator + 3 /* TransferrableNodeIndex.TextContent */]));
          } else if (nodeBuffer[iterator + 1 /* TransferrableNodeIndex.NodeType */] === 8 /* NodeType.COMMENT_NODE */) {
            node = document.createComment(_this.stringContext.get(nodeBuffer[iterator + 3 /* TransferrableNodeIndex.TextContent */]));
          } else if (nodeBuffer[iterator + 1 /* TransferrableNodeIndex.NodeType */] === 11 /* NodeType.DOCUMENT_FRAGMENT_NODE */) {
            node = document.createDocumentFragment();
          } else {
            var nodeName = _this.stringContext.get(nodeBuffer[iterator + 2 /* TransferrableNodeIndex.NodeName */]);
            node = nodeBuffer[iterator + 4 /* TransferrableNodeIndex.Namespace */] !== 0 ? document.createElementNS(_this.stringContext.get(nodeBuffer[iterator + 4 /* TransferrableNodeIndex.Namespace */]), nodeName) : document.createElement(nodeName);
            // TODO(KB): Restore Properties
            // skeleton.properties.forEach(property => {
            //   node[`${property.name}`] = property.value;
            // });
            // ((skeleton as TransferrableElement)[TransferrableKeys.childNodes] || []).forEach(childNode => {
            //   if (childNode[TransferrableKeys.transferred] === NumericBoolean.FALSE) {
            //     node.appendChild(this.createNode(childNode as TransferrableNode));
            //   }
            // });
            // If `node` is removed by the sanitizer, don't store it and return null.
            if (sanitizer && !sanitizer.sanitize(node)) {
              continue;
            }
          }
          _this.storeNode(node, nodeBuffer[iterator]);
        }
      };
      /**
       * Returns the real DOM Element corresponding to a serialized Element object.
       * @param id
       * @return RenderableElement | null
       */
      this.getNode = function (id) {
        var node = _this.nodes.get(id);
        if (node && node.nodeName === 'BODY') {
          // If the node requested is the "BODY"
          // Then we return the base node this specific <amp-script> comes from.
          // This encapsulates each <amp-script> node.
          return _this.baseElement;
        }
        return node;
      };
      /**
       * Store the requested node and all of its children.
       * @param node node to store.
       */
      this.storeNodes = function (node) {
        _this.storeNode(node, ++_this.count);
        nodeListEach(node.childNodes, function (n) {
          return _this.storeNodes(n);
        });
      };
      this.count = 2;
      this.stringContext = stringContext;
      // The nodes map is populated with two default values pointing to baseElement.
      // These are [document, document.body] from the worker.
      this.nodes = new Map([[BASE_ELEMENT_INDEX, baseElement], [2, baseElement]]);
      this.baseElement = baseElement;
      // To ensure a lookup works correctly from baseElement
      // add an index equal to the background thread document.body.
      baseElement._index_ = 2;
      // Lastly, it's important while initializing the document that we store
      // the default nodes present in the server rendered document.
      nodeListEach(baseElement.childNodes, function (n) {
        return _this.storeNodes(n);
      });
    }
    _createClass(NodeContext, [{
      key: "storeNode",
      value:
      /**
       * Establish link between DOM `node` and worker-generated identifier `id`.
       *
       * These _shouldn't_ collide between instances of <amp-script> since
       * each element creates it's own pool on both sides of the worker
       * communication bridge.
       * @param node
       * @param id
       */
      function storeNode(node, id) {
        node._index_ = id;
        this.nodes.set(id, node);
      }
    }]);
    return NodeContext;
  }();

  /**
   * Monitoring Nodes attribute changes requires a Mutation Observer.
   * We store the nodes being monitored to avoid creating more than one Observer
   * per Element.
   */
  var monitoredNodes = new Map();
  /**
   * Instead of a whitelist of elements that need their value tracked, use the existence
   * of a property called value to drive the decision.
   * @param node node to check if values should be tracked.
   * @return boolean if the node should have its value property tracked.
   */
  var shouldTrackChanges = function shouldTrackChanges(node) {
    return node && 'value' in node;
  };
  /**
   * When a node that has a value needing synced doesn't already have an event listener
   * listening for input values, ensure the value is synced with a default listener.
   * @param worker whom to dispatch value toward.
   * @param node node to listen to value changes on.
   */
  var applyDefaultInputListener = function applyDefaultInputListener(workerContext, node) {
    if (shouldTrackChanges(node) && node.oninput === null) {
      node.oninput = function () {
        return fireValueChange(workerContext, node);
      };
    }
  };
  /**
   * Use a MutationObserver to capture value changes based on Attribute modification (frequently used by frameworks).
   * @param worker whom to dispatch value toward.
   * @param node node to listen to value changes on.
   */
  var sendValueChangeOnAttributeMutation = function sendValueChangeOnAttributeMutation(workerContext, node) {
    if (shouldTrackChanges(node) && !monitoredNodes.get(node)) {
      new MutationObserver(function (mutations) {
        return mutations.map(function (mutation) {
          return fireValueChange(workerContext, mutation.target);
        });
      }).observe(node, {
        attributes: true
      });
      monitoredNodes.set(node, true);
    }
  };
  /**
   * Tell WorkerDOM what the value is for a Node.
   * @param worker whom to dispatch value toward.
   * @param node where to get the value from.
   */
  var fireValueChange = function fireValueChange(workerContext, node) {
    return workerContext.messageToWorker(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 4), 40 /* TransferrableKeys.sync */, _defineProperty(_defineProperty({}, 7 /* TransferrableKeys.index */, node._index_), 21 /* TransferrableKeys.value */, node.value)));
  };
  /**
   * Tell WorkerDOM what the window dimensions are.
   * @param workerContext
   * @param cachedWindowSize
   */
  var fireResizeChange = function fireResizeChange(workerContext, cachedWindowSize) {
    return workerContext.messageToWorker(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 5), 40 /* TransferrableKeys.sync */, cachedWindowSize));
  };
  /**
   * Convert a TouchList into a TransferrableTouchList
   * @param touchList
   */
  var createTransferrableTouchList = function createTransferrableTouchList(touchList) {
    return Object.values(touchList).map(function (touch) {
      return [touch.identifier, touch.screenX, touch.screenY, touch.clientX, touch.clientY, touch.pageX, touch.pageY, touch.target._index_];
    });
  };
  var EventSubscriptionProcessor = function EventSubscriptionProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var knownListeners = [];
    var allowedExecution = config.executorsAllowed.includes(4 /* TransferrableMutationType.EVENT_SUBSCRIPTION */);
    var cachedWindowSize = [window.innerWidth, window.innerHeight];
    /**
     * Register an event handler for dispatching events to worker thread
     * @param worker whom to dispatch events toward
     * @param index node index the event comes from (used to dispatchEvent in worker thread).
     * @return eventHandler function consuming event and dispatching to worker thread
     */
    var eventHandler = function eventHandler(index, preventDefault) {
      return function (event) {
        var _2;
        if (preventDefault) {
          event.preventDefault();
        }
        if (shouldTrackChanges(event.currentTarget)) {
          fireValueChange(workerContext, event.currentTarget);
        } else if (event.type === 'resize') {
          var _window = window,
            innerWidth = _window.innerWidth,
            innerHeight = _window.innerHeight;
          if (cachedWindowSize[0] === innerWidth && cachedWindowSize[1] === innerHeight) {
            return;
          }
          cachedWindowSize = [window.innerWidth, window.innerHeight];
          fireResizeChange(workerContext, cachedWindowSize);
        }
        workerContext.messageToWorker(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 1), 39 /* TransferrableKeys.event */, (_2 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_2, 7 /* TransferrableKeys.index */, index), 25 /* TransferrableKeys.bubbles */, event.bubbles), 26 /* TransferrableKeys.cancelable */, event.cancelable), 27 /* TransferrableKeys.cancelBubble */, event.cancelBubble), 28 /* TransferrableKeys.currentTarget */, [event.currentTarget._index_ || 0]), 29 /* TransferrableKeys.defaultPrevented */, event.defaultPrevented), 30 /* TransferrableKeys.eventPhase */, event.eventPhase), 31 /* TransferrableKeys.isTrusted */, event.isTrusted), 32 /* TransferrableKeys.returnValue */, event.returnValue), 13 /* TransferrableKeys.target */, [event.target._index_ || 0]), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_2, 33 /* TransferrableKeys.timeStamp */, event.timeStamp), 12 /* TransferrableKeys.type */, event.type), 35 /* TransferrableKeys.keyCode */, 'keyCode' in event ? event.keyCode : undefined), 60 /* TransferrableKeys.pageX */, 'pageX' in event ? event.pageX : undefined), 61 /* TransferrableKeys.pageY */, 'pageY' in event ? event.pageY : undefined), 65 /* TransferrableKeys.offsetX */, 'offsetX' in event ? event.offsetX : undefined), 66 /* TransferrableKeys.offsetY */, 'offsetY' in event ? event.offsetY : undefined), 62 /* TransferrableKeys.touches */, 'touches' in event ? createTransferrableTouchList(event.touches) : undefined), 63 /* TransferrableKeys.changedTouches */, 'changedTouches' in event ? createTransferrableTouchList(event.changedTouches) : undefined))));
      };
    };
    /**
     * If the worker requests to add an event listener to 'change' for something the foreground thread is already listening to,
     * ensure that only a single 'change' event is attached to prevent sending values multiple times.
     * @param target node to change listeners on
     * @param addEvent is this an 'addEvent' or 'removeEvent' change
     * @param mutations Uint16Array for this set of changes
     * @param iterator current location in array to perform this change on
     */
    var processListenerChange = function processListenerChange(target, addEvent, mutations, iterator) {
      var type = strings.get(mutations[iterator]);
      var eventIndex = mutations[iterator + 1 /* AddEventRegistrationIndex.Index */];
      if (target === nodeContext.baseElement) {
        if (addEvent) {
          var preventDefault = Boolean(mutations[iterator + 5 /* AddEventRegistrationIndex.WorkerDOMPreventDefault */]);
          addEventListener(type, knownListeners[eventIndex] = eventHandler(BASE_ELEMENT_INDEX, preventDefault));
        } else {
          removeEventListener(type, knownListeners[eventIndex]);
        }
        return;
      }
      var inputEventSubscribed = target.oninput !== null;
      var isChangeEvent = type === 'change';
      if (addEvent) {
        if (isChangeEvent) {
          inputEventSubscribed = true;
          target.onchange = null;
        }
        var _preventDefault = Boolean(mutations[iterator + 5 /* AddEventRegistrationIndex.WorkerDOMPreventDefault */]);
        target.addEventListener(type, knownListeners[eventIndex] = eventHandler(target._index_, _preventDefault));
      } else {
        if (isChangeEvent) {
          inputEventSubscribed = false;
        }
        target.removeEventListener(type, knownListeners[eventIndex]);
      }
      if (shouldTrackChanges(target)) {
        if (!inputEventSubscribed) applyDefaultInputListener(workerContext, target);
        sendValueChangeOnAttributeMutation(workerContext, target);
      }
    };
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        var addEventListenerCount = mutations[startPosition + 3 /* EventSubscriptionMutationIndex.AddEventListenerCount */];
        var removeEventListenerCount = mutations[startPosition + 2 /* EventSubscriptionMutationIndex.RemoveEventListenerCount */];
        var addEventListenersPosition = startPosition + 4 /* EventSubscriptionMutationIndex.Events */ + removeEventListenerCount * REMOVE_EVENT_SUBSCRIPTION_LENGTH;
        var endPosition = startPosition + 4 /* EventSubscriptionMutationIndex.Events */ + addEventListenerCount * ADD_EVENT_SUBSCRIPTION_LENGTH + removeEventListenerCount * REMOVE_EVENT_SUBSCRIPTION_LENGTH;
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* EventSubscriptionMutationIndex.Target */];
          var target = nodeContext.getNode(targetIndex);
          if (target) {
            var iterator = startPosition + 4 /* EventSubscriptionMutationIndex.Events */;
            while (iterator < endPosition) {
              var isRemoveEvent = iterator <= addEventListenersPosition;
              processListenerChange(target, isRemoveEvent, mutations, iterator);
              iterator += isRemoveEvent ? REMOVE_EVENT_SUBSCRIPTION_LENGTH : ADD_EVENT_SUBSCRIPTION_LENGTH;
            }
          } else {
            console.error("getNode(".concat(targetIndex, ") is null."));
          }
        }
        return endPosition;
      },
      print: function print(mutations, startPosition) {
        var addEventListenerCount = mutations[startPosition + 3 /* EventSubscriptionMutationIndex.AddEventListenerCount */];
        var removeEventListenerCount = mutations[startPosition + 2 /* EventSubscriptionMutationIndex.RemoveEventListenerCount */];
        var addEventListenersPosition = startPosition + 4 /* EventSubscriptionMutationIndex.Events */ + removeEventListenerCount * REMOVE_EVENT_SUBSCRIPTION_LENGTH;
        var endPosition = startPosition + 4 /* EventSubscriptionMutationIndex.Events */ + addEventListenerCount * ADD_EVENT_SUBSCRIPTION_LENGTH + removeEventListenerCount * REMOVE_EVENT_SUBSCRIPTION_LENGTH;
        var targetIndex = mutations[startPosition + 1 /* EventSubscriptionMutationIndex.Target */];
        var target = nodeContext.getNode(targetIndex);
        var removedEventListeners = [];
        var addedEventListeners = [];
        var iterator = startPosition + 4 /* EventSubscriptionMutationIndex.Events */;
        while (iterator < endPosition) {
          var isRemoveEvent = iterator <= addEventListenersPosition;
          var eventList = isRemoveEvent ? addedEventListeners : removedEventListeners;
          eventList.push({
            type: strings.get(mutations[iterator]),
            index: mutations[iterator + 1]
          });
          iterator += isRemoveEvent ? REMOVE_EVENT_SUBSCRIPTION_LENGTH : ADD_EVENT_SUBSCRIPTION_LENGTH;
        }
        return {
          target: target,
          allowedExecution: allowedExecution,
          removedEventListeners: removedEventListeners,
          addedEventListeners: addedEventListeners
        };
      }
    };
  };

  var BoundingClientRectProcessor = function BoundingClientRectProcessor(strings, nodes, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(5 /* TransferrableMutationType.GET_BOUNDING_CLIENT_RECT */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* BoundClientRectMutationIndex.Target */];
          var target = nodes.getNode(targetIndex);
          if (target) {
            var boundingRect = target.getBoundingClientRect();
            workerContext.messageToWorker(_defineProperty(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 6), 13 /* TransferrableKeys.target */, [target._index_]), 38 /* TransferrableKeys.data */, [boundingRect.top, boundingRect.right, boundingRect.bottom, boundingRect.left, boundingRect.width, boundingRect.height]));
          } else {
            console.error("GET_BOUNDING_CLIENT_RECT: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 2 /* BoundClientRectMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* BoundClientRectMutationIndex.Target */];
        var target = nodes.getNode(targetIndex);
        return {
          type: 'GET_BOUNDING_CLIENT_RECT',
          target: target,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var ChildListProcessor = function ChildListProcessor(strings, _ref, workerContext, objectContext, config) {
    var getNode = _ref.getNode;
    var allowedExecution = config.executorsAllowed.includes(2 /* TransferrableMutationType.CHILD_LIST */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        var appendNodeCount = mutations[startPosition + 4 /* ChildListMutationIndex.AppendedNodeCount */];
        var removeNodeCount = mutations[startPosition + 5 /* ChildListMutationIndex.RemovedNodeCount */];
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* ChildListMutationIndex.Target */];
          var target = getNode(targetIndex);
          if (target) {
            if (removeNodeCount > 0) {
              mutations.slice(startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount, startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount + removeNodeCount).forEach(function (removeId) {
                var node = getNode(removeId);
                if (node) {
                  node.remove();
                } else {
                  console.error("CHILD_LIST: getNode(".concat(removeId, ") is null."));
                }
              });
            }
            if (appendNodeCount > 0) {
              mutations.slice(startPosition + 6 /* ChildListMutationIndex.Nodes */, startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount).forEach(function (addId) {
                var nextSibling = mutations[startPosition + 2 /* ChildListMutationIndex.NextSibling */];
                var newNode = getNode(addId);
                if (newNode) {
                  // TODO: Handle this case ---
                  // Transferred nodes that are not stored were previously removed by the sanitizer.
                  target.insertBefore(newNode, nextSibling && getNode(nextSibling) || null);
                  applyDefaultInputListener(workerContext, newNode);
                  sendValueChangeOnAttributeMutation(workerContext, newNode);
                }
              });
            }
          } else {
            console.error("CHILD_LIST: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 6 /* ChildListMutationIndex.End */ + appendNodeCount + removeNodeCount;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* ChildListMutationIndex.Target */];
        var target = getNode(targetIndex);
        var appendNodeCount = mutations[startPosition + 4 /* ChildListMutationIndex.AppendedNodeCount */];
        var removeNodeCount = mutations[startPosition + 5 /* ChildListMutationIndex.RemovedNodeCount */];
        var removedNodes = Array.from(mutations.slice(startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount, startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount + removeNodeCount)).map(function (index) {
          return getNode(index) || index;
        });
        var addedNodes = Array.from(mutations.slice(startPosition + 6 /* ChildListMutationIndex.Nodes */, startPosition + 6 /* ChildListMutationIndex.Nodes */ + appendNodeCount)).map(function (index) {
          return getNode(index) || index;
        });
        return {
          target: target,
          allowedExecution: allowedExecution,
          nextSibling: getNode(mutations[startPosition + 2 /* ChildListMutationIndex.NextSibling */]) || null,
          previousSibling: getNode(mutations[startPosition + 3 /* ChildListMutationIndex.PreviousSibling */]) || null,
          addedNodes: addedNodes,
          removedNodes: removedNodes
        };
      }
    };
  };

  var AttributeProcessor = function AttributeProcessor(strings, nodes, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(0 /* TransferrableMutationType.ATTRIBUTES */);
    /**
     * @param mutations
     * @param startPosition
     */
    var getValue = function getValue(mutations, startPosition) {
      var value = mutations[startPosition + 4 /* AttributeMutationIndex.Value */];
      // Value is sent as 0 when it's the default value or removal.
      // Value is sent as index + 1 when it's a valid value.
      return value !== 0 ? strings.get(value - 1) : null;
    };
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* AttributeMutationIndex.Target */];
          var target = nodes.getNode(targetIndex);
          var attributeName = strings.get(mutations[startPosition + 2 /* AttributeMutationIndex.Name */]);
          var value = getValue(mutations, startPosition);
          if (target) {
            if (attributeName != null) {
              if (config.sanitizer) {
                config.sanitizer.setAttribute(target, attributeName, value);
              } else {
                if (value == null) {
                  target.removeAttribute(attributeName);
                } else {
                  target.setAttribute(attributeName, value);
                }
              }
            }
          } else {
            console.error("ATTR_LIST: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 5 /* AttributeMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* AttributeMutationIndex.Target */];
        var target = nodes.getNode(targetIndex);
        var attributeName = strings.get(mutations[startPosition + 2 /* AttributeMutationIndex.Name */]);
        var value = getValue(mutations, startPosition);
        return {
          target: target,
          allowedExecution: allowedExecution,
          attributeName: attributeName,
          value: value,
          remove: value == null
        };
      }
    };
  };

  var CharacterDataProcessor = function CharacterDataProcessor(strings, nodes, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(1 /* TransferrableMutationType.CHARACTER_DATA */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* CharacterDataMutationIndex.Target */];
          var target = nodes.getNode(targetIndex);
          var value = mutations[startPosition + 2 /* CharacterDataMutationIndex.Value */];
          if (target) {
            if (value) {
              // Sanitization not necessary for textContent.
              target.textContent = strings.get(value);
            }
          } else {
            console.error("CHAR_DATA: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 3 /* CharacterDataMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* CharacterDataMutationIndex.Target */];
        var target = nodes.getNode(targetIndex);
        return {
          target: target,
          allowedExecution: allowedExecution,
          value: strings.get(mutations[startPosition + 2 /* CharacterDataMutationIndex.Value */])
        };
      }
    };
  };

  var PropertyProcessor = function PropertyProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(3 /* TransferrableMutationType.PROPERTIES */);
    var getValue = function getValue(mutations, startPosition) {
      var value = mutations[startPosition + 4 /* PropertyMutationIndex.Value */];
      if (mutations[startPosition + 3 /* PropertyMutationIndex.IsBoolean */] === 1 /* NumericBoolean.TRUE */) {
        return value === 1 /* NumericBoolean.TRUE */;
      }

      if (value !== 0) {
        return strings.get(value);
      }
      return null;
    };
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* PropertyMutationIndex.Target */];
          var target = nodeContext.getNode(targetIndex);
          var name = strings.get(mutations[startPosition + 2 /* PropertyMutationIndex.Name */]);
          var value = getValue(mutations, startPosition);
          if (target) {
            if (name && value != null) {
              if (config.sanitizer) {
                config.sanitizer.setProperty(target, name, String(value));
              } else {
                target[name] = value;
              }
            }
          } else {
            console.error("PROPERTY: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 5 /* PropertyMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* PropertyMutationIndex.Target */];
        var target = nodeContext.getNode(targetIndex);
        var name = strings.get(mutations[startPosition + 2 /* PropertyMutationIndex.Name */]);
        var value = getValue(mutations, startPosition);
        return {
          target: target,
          name: name,
          value: value,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var LongTaskExecutor = function LongTaskExecutor(stringContext, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(6 /* TransferrableMutationType.LONG_TASK_START */);
    var index = 0;
    var currentResolver;
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation && config.longTask) {
          if (mutations[startPosition] === 6 /* TransferrableMutationType.LONG_TASK_START */) {
            index++;
            if (!currentResolver) {
              var newResolver = new Promise(function (resolve) {
                return currentResolver = resolve;
              });
              // One of the worker-dom contracts is that there should not be two
              // LONG_TASK_STARTs in a row without an END in between. In case both exist within
              // the same set of mutations, we need to guard against having a consumers 1st END
              // handler occur after the START handler. If we synchronously called longTask() here it
              // would likely occur due to scheduling of callbacks vs. promise.
              // See: worker-dom/pull/989.
              Promise.resolve().then(function () {
                return config.longTask && config.longTask(newResolver);
              });
            }
          } else if (mutations[startPosition] === 7 /* TransferrableMutationType.LONG_TASK_END */) {
            index--;
            if (currentResolver && index <= 0) {
              currentResolver();
              currentResolver = null;
              index = 0;
            }
          }
        }
        return startPosition + 2 /* LongTaskMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        return {
          type: ReadableMutationType[mutations[startPosition]],
          allowedExecution: allowedExecution
        };
      },
      get active() {
        return currentResolver !== null;
      }
    };
  };

  var f32 = new Float32Array(1);
  var u16 = new Uint16Array(f32.buffer);
  /**
   * Deserializes TransferrableObjectType arguments.
   * @param buffer Contains mutation with arguments to deserialize.
   * @param offset Start position of arguments in mutations buffer.
   * @param count Number of arguments to deserialize.
   * @param stringContext Strings context.
   * @param nodeContext Nodes context.
   * @param objectContext Objects context
   */
  function deserializeTransferrableObject(buffer, offset, count, stringContext, nodeContext, objectContext) {
    var args = [];
    for (var i = 0; i < count; i++) {
      switch (buffer[offset++]) {
        case 1 /* TransferrableObjectType.SmallInt */:
          args.push(buffer[offset++]);
          break;
        case 2 /* TransferrableObjectType.Float */:
          u16[0] = buffer[offset++];
          u16[1] = buffer[offset++];
          args.push(f32[0]);
          break;
        case 3 /* TransferrableObjectType.String */:
          args.push(stringContext.get(buffer[offset++]));
          break;
        case 4 /* TransferrableObjectType.Array */:
          var size = buffer[offset++];
          var des = deserializeTransferrableObject(buffer, offset, size, stringContext, nodeContext, objectContext);
          args.push(des.args);
          offset = des.offset;
          break;
        case 5 /* TransferrableObjectType.TransferObject */:
          if (!objectContext) {
            throw new Error('objectContext not provided.');
          }
          args.push(objectContext.get(buffer[offset++]));
          break;
        case 6 /* TransferrableObjectType.CanvasRenderingContext2D */:
          var canvas = nodeContext.getNode(buffer[offset++]);
          args.push(canvas.getContext('2d'));
          break;
        case 7 /* TransferrableObjectType.HTMLElement */:
          args.push(nodeContext.getNode(buffer[offset++]));
          break;
        default:
          throw new Error('Cannot deserialize argument.');
      }
    }
    return {
      args: args,
      offset: offset
    };
  }

  var ObjectMutationProcessor = function ObjectMutationProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(9 /* TransferrableMutationType.OBJECT_MUTATION */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        var functionName = strings.get(mutations[startPosition + 1 /* ObjectMutationIndex.FunctionName */]);
        var argCount = mutations[startPosition + 2 /* ObjectMutationIndex.ArgumentCount */];
        var _deserializeTransferr = deserializeTransferrableObject(mutations, startPosition + 3 /* ObjectMutationIndex.SerializedTarget */, 1, strings, nodeContext, objectContext),
          targetOffset = _deserializeTransferr.offset,
          deserializedTarget = _deserializeTransferr.args;
        var target = deserializedTarget[0];
        var _deserializeTransferr2 = deserializeTransferrableObject(mutations, targetOffset, argCount, strings, nodeContext, objectContext),
          argsOffset = _deserializeTransferr2.offset,
          args = _deserializeTransferr2.args;
        if (allowedExecution && allowedMutation) {
          if (isSetter(target, functionName)) {
            target[functionName] = args[0];
          } else {
            target[functionName].apply(target, _toConsumableArray(args));
          }
        }
        return argsOffset;
      },
      print: function print(mutations, startPosition) {
        var functionName = strings.get(mutations[startPosition + 1 /* ObjectMutationIndex.FunctionName */]);
        var _deserializeTransferr3 = deserializeTransferrableObject(mutations, startPosition + 3 /* ObjectMutationIndex.SerializedTarget */, 1, strings, nodeContext, objectContext),
          deserializedTarget = _deserializeTransferr3.args;
        var target = deserializedTarget[0];
        return {
          type: 'OBJECT_MUTATION',
          target: target,
          functionName: functionName,
          isSetter: isSetter(target, functionName),
          allowedExecution: allowedExecution
        };
      }
    };
  };
  function isSetter(object, name) {
    if (!object) {
      throw new Error("Property ".concat(name, " does not exist on ").concat(object, "."));
    }
    var descriptor = Object.getOwnPropertyDescriptor(object, name);
    if (descriptor !== undefined) {
      return 'set' in descriptor;
    }
    return isSetter(Object.getPrototypeOf(object), name);
  }

  var ObjectCreationProcessor = function ObjectCreationProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(10 /* TransferrableMutationType.OBJECT_CREATION */);
    if (!objectContext) {
      throw new Error('objectContext is not defined.');
    }
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        var functionName = strings.get(mutations[startPosition + 1 /* ObjectCreationIndex.FunctionName */]);
        var objectId = mutations[startPosition + 2 /* ObjectCreationIndex.ObjectId */];
        var argCount = mutations[startPosition + 3 /* ObjectCreationIndex.ArgumentCount */];
        var _deserializeTransferr = deserializeTransferrableObject(mutations, startPosition + 4 /* ObjectCreationIndex.SerializedTarget */, 1,
          // argCount
          strings, nodeContext, objectContext),
          targetOffset = _deserializeTransferr.offset,
          deserializedTarget = _deserializeTransferr.args;
        var target = deserializedTarget[0];
        var _deserializeTransferr2 = deserializeTransferrableObject(mutations, targetOffset, argCount, strings, nodeContext, objectContext),
          argsOffset = _deserializeTransferr2.offset,
          args = _deserializeTransferr2.args;
        if (allowedExecution && allowedMutation) {
          if (functionName === 'new') ; else {
            objectContext.store(objectId, target[functionName].apply(target, _toConsumableArray(args)));
          }
        }
        return argsOffset;
      },
      print: function print(mutations, startPosition) {
        var functionName = strings.get(mutations[startPosition + 1 /* ObjectCreationIndex.FunctionName */]);
        var objectId = mutations[startPosition + 2 /* ObjectCreationIndex.ObjectId */];
        var argCount = mutations[startPosition + 3 /* ObjectCreationIndex.ArgumentCount */];
        var _deserializeTransferr3 = deserializeTransferrableObject(mutations, startPosition + 4 /* ObjectCreationIndex.SerializedTarget */, 1,
          // argCount
          strings, nodeContext, objectContext),
          deserializedTarget = _deserializeTransferr3.args;
        var target = deserializedTarget[0];
        return {
          type: 'OBJECT_CREATION',
          target: target,
          functionName: functionName,
          objectId: objectId,
          argCount: argCount,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var ImageBitmapProcessor = function ImageBitmapProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(11 /* TransferrableMutationType.IMAGE_BITMAP_INSTANCE */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* ImageBitmapMutationIndex.Target */];
          var target = nodeContext.getNode(targetIndex);
          if (target) {
            self.createImageBitmap(target).then(function (imageBitmap) {
              workerContext.messageToWorker(_defineProperty(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 10), 73 /* TransferrableKeys.callIndex */, mutations[startPosition + 2 /* ImageBitmapMutationIndex.CallIndex */]), 38 /* TransferrableKeys.data */, imageBitmap), [imageBitmap]);
            });
          } else {
            console.error("IMAGE_BITMAP_INSTANCE: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 3 /* ImageBitmapMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* ImageBitmapMutationIndex.Target */];
        var target = nodeContext.getNode(targetIndex);
        return {
          type: 'IMAGE_BITMAP_INSTANCE',
          target: target,
          allowedExecution: allowedExecution,
          callIndex: mutations[startPosition + 2 /* ImageBitmapMutationIndex.CallIndex */]
        };
      }
    };
  };

  var StorageProcessor = function StorageProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(12 /* TransferrableMutationType.STORAGE */);
    var get = function get(location, key) {
      if (config.sanitizer && location === 2 /* StorageLocation.AmpState */) {
        config.sanitizer.getStorage(location, key).then(function (value) {
          var message = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 11), 74 /* TransferrableKeys.storageKey */, key), 75 /* TransferrableKeys.storageLocation */, location), 21 /* TransferrableKeys.value */, value);
          workerContext.messageToWorker(message);
        });
      } else {
        console.error("STORAGE: Sanitizer not found or unsupported location:", location);
      }
    };
    var set = function set(location, key, value) {
      if (config.sanitizer) {
        // TODO: Message worker so AMP.setState() can be Promise-able.
        config.sanitizer.setStorage(location, key, value);
      } else {
        var storage;
        if (location === 0 /* StorageLocation.Local */) {
          storage = window.localStorage;
        } else if (location === 1 /* StorageLocation.Session */) {
          storage = window.sessionStorage;
        }
        if (storage) {
          if (key == null) {
            if (value == null) {
              storage.clear();
            } else {
              throw new Error('Unexpected storage operation.');
            }
          } else {
            if (value == null) {
              storage.removeItem(key);
            } else {
              storage.setItem(key, value);
            }
          }
        } else {
          console.error("STORAGE: Unexpected location: \"".concat(location, "\"."));
        }
      }
    };
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var operation = mutations[startPosition + 1 /* StorageMutationIndex.Operation */];
          var location = mutations[startPosition + 2 /* StorageMutationIndex.Location */];
          var keyIndex = mutations[startPosition + 3 /* StorageMutationIndex.Key */];
          var valueIndex = mutations[startPosition + 4 /* StorageMutationIndex.Value */];
          // TODO(choumx): Clean up key/value strings (or don't store them in the first place)
          // to avoid leaking memory.
          var key = keyIndex > 0 ? strings.get(keyIndex - 1) : '';
          var value = valueIndex > 0 ? strings.get(valueIndex - 1) : null;
          if (operation === 1 /* GetOrSet.GET */) {
            get(location, key);
          } else if (operation === 2 /* GetOrSet.SET */) {
            set(location, key, value);
          }
        }
        return startPosition + 5 /* StorageMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var operation = mutations[startPosition + 1 /* StorageMutationIndex.Operation */];
        var location = mutations[startPosition + 2 /* StorageMutationIndex.Location */];
        var keyIndex = mutations[startPosition + 3 /* StorageMutationIndex.Key */];
        var valueIndex = mutations[startPosition + 4 /* StorageMutationIndex.Value */];
        var key = keyIndex > 0 ? strings.get(keyIndex - 1) : null;
        var value = valueIndex > 0 ? strings.get(valueIndex - 1) : null;
        return {
          type: 'STORAGE',
          operation: operation,
          location: location,
          key: key,
          value: value,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var fnCallCount = 0;
  /**
   * A mapping between each request to callFunction and its Promise.
   */
  var promiseMap = {};
  /**
   * Each invocation of `ExportedWorker.prototype.callFunction` needs to be registered with a unique index
   * and promise. The index is given to the underlying Worker and returned by it as well. That enables the main-thread to
   * correlate postMessage responses with their original requests and resolve/reject the correct Promise.
   */
  function registerPromise() {
    // TS won't realize that the constructor promise assigns the handlers, so we `any` them.
    var resolve;
    var reject;
    var promise = new Promise(function (res, rej) {
      resolve = res;
      reject = rej;
    });
    // Wraparound to 0 in case someone attempts to register over 9 quadrillion promises.
    if (fnCallCount >= Number.MAX_VALUE) {
      fnCallCount = 0;
    }
    var index = fnCallCount++;
    promiseMap[index] = {
      promise: promise,
      resolve: resolve,
      reject: reject
    };
    return {
      promise: promise,
      index: index
    };
  }
  var FunctionProcessor = function FunctionProcessor(strings, nodeContext, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(13 /* TransferrableMutationType.FUNCTION_CALL */);
    return {
      execute: function execute(mutations, startPosition) {
        if (allowedExecution) {
          var status = mutations[startPosition + 1 /* FunctionMutationIndex.Status */];
          var index = mutations[startPosition + 2 /* FunctionMutationIndex.Index */];
          var value = mutations[startPosition + 3 /* FunctionMutationIndex.Value */];
          var parsed = strings.hasIndex(value) ? JSON.parse(strings.get(value)) : undefined;
          if (status === 1 /* ResolveOrReject.RESOLVE */) {
            promiseMap[index].resolve(parsed);
          } else {
            promiseMap[index].reject(parsed);
          }
          delete promiseMap[index];
        }
        return startPosition + 4 /* FunctionMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var status = mutations[startPosition + 1 /* FunctionMutationIndex.Status */];
        var index = mutations[startPosition + 2 /* FunctionMutationIndex.Index */];
        var value = mutations[startPosition + 3 /* FunctionMutationIndex.Value */];
        return {
          type: 'FUNCTION_INVOCATION',
          status: status,
          index: index,
          value: strings.get(value),
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var ScrollIntoViewProcessor = function ScrollIntoViewProcessor(strings, nodes, workerContext, objectContext, config) {
    var allowedExecution = config.executorsAllowed.includes(14 /* TransferrableMutationType.SCROLL_INTO_VIEW */);
    return {
      execute: function execute(mutations, startPosition, allowedMutation) {
        if (allowedExecution && allowedMutation) {
          var targetIndex = mutations[startPosition + 1 /* ScrollIntoViewMutationIndex.Target */];
          var target = nodes.getNode(targetIndex);
          if (target) {
            target.scrollIntoView();
          } else {
            console.error("SCROLL_INTO_VIEW: getNode(".concat(targetIndex, ") is null."));
          }
        }
        return startPosition + 2 /* ScrollIntoViewMutationIndex.End */;
      },
      print: function print(mutations, startPosition) {
        var targetIndex = mutations[startPosition + 1 /* ScrollIntoViewMutationIndex.Target */];
        var target = nodes.getNode(targetIndex);
        return {
          type: 'SCROLL_INTO_VIEW',
          target: target,
          allowedExecution: allowedExecution
        };
      }
    };
  };

  var MutatorProcessor = /*#__PURE__*/function () {
    /**
     * @param stringContext
     * @param nodeContext
     * @param workerContext
     * @param sanitizer Sanitizer to apply to content if needed.
     */
    function MutatorProcessor(stringContext, nodeContext, workerContext, config, objectContext) {
      var _this = this,
        _this$executors;
      _classCallCheck(this, MutatorProcessor);
      this.stringContext = void 0;
      this.nodeContext = void 0;
      this.mutationQueue = [];
      this.pendingMutations = false;
      this.mutationPumpFunction = void 0;
      this.sanitizer = void 0;
      this.executors = void 0;
      /**
       * Apply all stored mutations syncronously. This method works well, but can cause jank if there are too many
       * mutations to apply in a single frame.
       *
       * Investigations in using asyncFlush to resolve are worth considering.
       *
       * @param allowVisibleMutations
       * @return Array of mutation types that were disallowed.
       */
      this.syncFlush = function () {
        var allowVisibleMutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var disallowedMutations = [];
        _this.mutationQueue.forEach(function (mutationArray) {
          var length = mutationArray.length;
          var operationStart = 0;
          while (operationStart < length) {
            // TransferrableMutationType is always at position 0.
            var mutationType = mutationArray[operationStart];
            // TODO(worker-dom): Hoist `allow` up to entry point (index.amp.ts) to avoid bundling `isUserVisibleMutation`.
            var allow = allowVisibleMutations || !isUserVisibleMutation(mutationType);
            if (!allow) {
              // TODO(worker-dom): Consider returning the strings from executor.print() for better error messaging.
              disallowedMutations.push(mutationType);
            }
            var executor = _this.executors[mutationType];
            {
              console.log(allow ? '' : '[disallowed]', ReadableMutationType[mutationType], executor.print(mutationArray, operationStart));
            }
            operationStart = executor.execute(mutationArray, operationStart, allow);
          }
        });
        _this.mutationQueue = [];
        _this.pendingMutations = false;
        return disallowedMutations;
      };
      this.stringContext = stringContext;
      this.nodeContext = nodeContext;
      this.sanitizer = config.sanitizer;
      this.mutationPumpFunction = config.mutationPump;
      var args = [stringContext, nodeContext, workerContext, objectContext, config];
      var sharedLongTaskProcessor = LongTaskExecutor.apply(null, args);
      this.executors = (_this$executors = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_this$executors, 2 /* TransferrableMutationType.CHILD_LIST */, ChildListProcessor.apply(null, args)), 0 /* TransferrableMutationType.ATTRIBUTES */, AttributeProcessor.apply(null, args)), 1 /* TransferrableMutationType.CHARACTER_DATA */, CharacterDataProcessor.apply(null, args)), 3 /* TransferrableMutationType.PROPERTIES */, PropertyProcessor.apply(null, args)), 4 /* TransferrableMutationType.EVENT_SUBSCRIPTION */, EventSubscriptionProcessor.apply(null, args)), 5 /* TransferrableMutationType.GET_BOUNDING_CLIENT_RECT */, BoundingClientRectProcessor.apply(null, args)), 6 /* TransferrableMutationType.LONG_TASK_START */, sharedLongTaskProcessor), 7 /* TransferrableMutationType.LONG_TASK_END */, sharedLongTaskProcessor), 8 /* TransferrableMutationType.OFFSCREEN_CANVAS_INSTANCE */, OffscreenCanvasProcessor.apply(null, args)), 9 /* TransferrableMutationType.OBJECT_MUTATION */, ObjectMutationProcessor.apply(null, args)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_this$executors, 10 /* TransferrableMutationType.OBJECT_CREATION */, ObjectCreationProcessor.apply(null, args)), 11 /* TransferrableMutationType.IMAGE_BITMAP_INSTANCE */, ImageBitmapProcessor.apply(null, args)), 12 /* TransferrableMutationType.STORAGE */, StorageProcessor.apply(null, args)), 13 /* TransferrableMutationType.FUNCTION_CALL */, FunctionProcessor.apply(null, args)), 14 /* TransferrableMutationType.SCROLL_INTO_VIEW */, ScrollIntoViewProcessor.apply(null, args)));
    }
    /**
     * Process MutationRecords from worker thread applying changes to the existing DOM.
     * @param phase Current Phase Worker Thread exists in.
     * @param nodes New nodes to add in the main thread with the incoming mutations.
     * @param stringValues Additional string values to use in decoding messages.
     * @param mutations Changes to apply in both graph shape and content of Elements.
     */
    _createClass(MutatorProcessor, [{
      key: "mutate",
      value: function mutate(phase, nodes, stringValues, mutations) {
        this.stringContext.storeValues(stringValues);
        this.nodeContext.createNodes(nodes, this.sanitizer);
        this.mutationQueue = this.mutationQueue.concat(mutations);
        if (!this.pendingMutations) {
          this.pendingMutations = true;
          this.mutationPumpFunction(this.syncFlush, phase);
        }
      }
    }]);
    return MutatorProcessor;
  }();

  /**
   * Stores indexed strings that are used in postMessage() calls from the worker.
   */
  var StringContext = /*#__PURE__*/function () {
    function StringContext() {
      _classCallCheck(this, StringContext);
      this.strings = void 0;
      this.strings = [];
    }
    /**
     * Return a string for the specified index.
     * @param index string index to retrieve.
     * @return string in map for the index.
     */
    _createClass(StringContext, [{
      key: "get",
      value: function get(index) {
        return this.strings[index] || '';
      }
    }, {
      key: "hasIndex",
      value: function hasIndex(index) {
        return this.strings[index] !== undefined;
      }
      /**
       * Stores a string in mapping and returns the index of the location.
       * @param value string to store
       * @return {number}
       */
    }, {
      key: "store",
      value: function store(value) {
        this.strings.push(value);
        return this.strings.length - 1;
      }
      /**
       * Stores a set of strings.
       * @param values
       */
    }, {
      key: "storeValues",
      value: function storeValues(values) {
        var _this = this;
        values.forEach(function (v) {
          return _this.store(v);
        });
      }
    }]);
    return StringContext;
  }();

  function normalizeConfiguration(config) {
    return Object.assign({}, {
      mutationPump: requestAnimationFrame.bind(null),
      executorsAllowed: DefaultAllowedMutations
    }, config);
  }

  var NODES_ALLOWED_TO_TRANSMIT_TEXT_CONTENT = [8 /* NodeType.COMMENT_NODE */, 3 /* NodeType.TEXT_NODE */];
  /**
   * Serializes a DOM element for transport to the worker.
   * @param element
   * @param minimizeString Function for minimizing strings for optimized ferrying across postMessage.
   */
  function createHydrateableNode(element, minimizeString, hydrateFilter, workerContext) {
    var filteredChildNodes = [].slice.call(element.childNodes).filter(hydrateFilter);
    var hydrated = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, 7 /* TransferrableKeys.index */, element._index_), 11 /* TransferrableKeys.transferred */, 0), 0 /* TransferrableKeys.nodeType */, element.nodeType), 1 /* TransferrableKeys.localOrNodeName */, minimizeString(element.localName || element.nodeName)), 4 /* TransferrableKeys.childNodes */, filteredChildNodes.map(function (child) {
      return createHydrateableNode(child, minimizeString, hydrateFilter, workerContext);
    })), 2 /* TransferrableKeys.attributes */, [].map.call(element.attributes || [], function (attribute) {
      return [minimizeString(attribute.namespaceURI || 'null'), minimizeString(attribute.name), minimizeString(attribute.value)];
    }));
    if (element.namespaceURI != null) {
      hydrated[6 /* TransferrableKeys.namespaceURI */] = minimizeString(element.namespaceURI);
    }
    if (NODES_ALLOWED_TO_TRANSMIT_TEXT_CONTENT.includes(element.nodeType) && element.textContent !== null) {
      hydrated[5 /* TransferrableKeys.textContent */] = minimizeString(element.textContent);
    }
    applyDefaultInputListener(workerContext, element);
    sendValueChangeOnAttributeMutation(workerContext, element);
    return hydrated;
  }
  /**
   * @param element
   */
  function createHydrateableRootNode(element, config, workerContext) {
    var hydrateFilter = config.hydrateFilter || function () {
      return true;
    };
    var strings = [];
    var stringMap = new Map();
    var storeString = function storeString(value) {
      if (stringMap.has(value)) {
        // Safe to cast since we verified the mapping contains the value.
        return stringMap.get(value);
      }
      var count = strings.length;
      stringMap.set(value, count);
      strings.push(value);
      return count;
    };
    var skeleton = createHydrateableNode(element, storeString, hydrateFilter, workerContext);
    return {
      skeleton: skeleton,
      strings: strings
    };
  }
  /**
   * @param element
   */
  function createReadableHydrateableRootNode(element, config, workerContext) {
    // "Readable" variant doesn't do any string minimization so we can output it for debugging purposes.
    // Note that this intentionally breaks the type contract of createHydrateableNode() and HydrateableNode.
    return createHydrateableNode(element, function (value) {
      return value;
    }, config.hydrateFilter || function () {
      return true;
    }, workerContext);
  }

  /**
   * @fileoverview Converts index-based worker messages to human-readable objects.
   *
   * Requires manual upkeep to keep consistency with messages and enums.
   * This allows us to continue using 'const enum' for enum inlining.
   * @see https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#9.4
   */
  /**
   * @param element
   */
  var readableHydrateableRootNode = function readableHydrateableRootNode(element, config, workerContext) {
    return readableHydrateableNode(createReadableHydrateableRootNode(element, config, workerContext));
  };
  /**
   * @param nodeContext {NodeContext}
   * @param node {TransferredNode}
   */
  var readableTransferredNode = function readableTransferredNode(nodeContext, node) {
    return node != null && nodeContext.getNode(node[0 /* TransferrableNodeIndex.Index */]) || node;
  };
  /**
   * @param node
   */
  function readableHydrateableNode(node) {
    var out = {
      nodeType: node[0 /* TransferrableKeys.nodeType */],
      name: node[1 /* TransferrableKeys.localOrNodeName */],
      attributes: null,
      childNodes: null
    };
    var attributes = node[2 /* TransferrableKeys.attributes */];
    if (attributes) {
      out.attributes = attributes.map(function (attr) {
        return {
          name: attr[1],
          value: attr[2]
        };
      });
    }
    var childNodes = node[4 /* TransferrableKeys.childNodes */];
    if (childNodes) {
      out.childNodes = childNodes.map(readableHydrateableNode);
    }
    return out;
  }
  /**
   * @param message {MessageToWorker}
   */
  var isEvent = function isEvent(message) {
    return message[12 /* TransferrableKeys.type */] == 1;
  } /* MessageType.EVENT */;
  var isValueSync = function isValueSync(message) {
    return message[12 /* TransferrableKeys.type */] == 4;
  } /* MessageType.SYNC */;
  var isBoundingClientRect = function isBoundingClientRect(message) {
    return message[12 /* TransferrableKeys.type */] === 6;
  } /* MessageType.GET_BOUNDING_CLIENT_RECT */;
  var isGetStorage = function isGetStorage(message) {
    return message[12 /* TransferrableKeys.type */] === 11;
  } /* MessageType.GET_STORAGE */;
  /**
   * @param nodeContext {NodeContext}
   * @param event {TransferrableEvent}
   */
  function readableTransferrableEvent(nodeContext, event) {
    var value = function value(item) {
      if (typeof item === 'number' || typeof item === 'boolean') {
        return item !== undefined ? item : null;
      }
      return item !== undefined && item !== null ? readableTransferredNode(nodeContext, item) : null;
    };
    return {
      type: event[12 /* TransferrableKeys.type */],
      bubbles: value(event[25 /* TransferrableKeys.bubbles */]),
      cancelable: value(event[26 /* TransferrableKeys.cancelable */]),
      cancelBubble: value(event[27 /* TransferrableKeys.cancelBubble */]),
      defaultPrevented: value(event[29 /* TransferrableKeys.defaultPrevented */]),
      eventPhase: value(event[30 /* TransferrableKeys.eventPhase */]),
      isTrusted: value(event[31 /* TransferrableKeys.isTrusted */]),
      returnValue: value(event[32 /* TransferrableKeys.returnValue */]),
      currentTarget: value(event[28 /* TransferrableKeys.currentTarget */]),
      target: value(event[13 /* TransferrableKeys.target */]),
      scoped: value(event[34 /* TransferrableKeys.scoped */]),
      keyCode: value(event[35 /* TransferrableKeys.keyCode */])
    };
  }
  /**
   * @param nodeContext {NodeContext}
   * @param value {TransferrableSyncValue}
   */
  function readableTransferrableSyncValue(nodeContext, value) {
    var index = value[7 /* TransferrableKeys.index */];
    return {
      target: nodeContext.getNode(index) || index,
      value: value[21 /* TransferrableKeys.value */]
    };
  }
  /**
   * @param message
   */
  function readableMessageToWorker(nodeContext, message) {
    if (isEvent(message)) {
      var event = message[39 /* TransferrableKeys.event */];
      return {
        type: 'EVENT',
        event: readableTransferrableEvent(nodeContext, event)
      };
    } else if (isValueSync(message)) {
      var sync = message[40 /* TransferrableKeys.sync */];
      return {
        type: 'SYNC',
        sync: readableTransferrableSyncValue(nodeContext, sync)
      };
    } else if (isBoundingClientRect(message)) {
      return {
        type: 'GET_BOUNDING_CLIENT_RECT',
        target: readableTransferredNode(nodeContext, message[13 /* TransferrableKeys.target */])
      };
    } else if (isGetStorage(message)) {
      return {
        type: 'GET_STORAGE',
        key: message[74 /* TransferrableKeys.storageKey */],
        location: message[75 /* TransferrableKeys.storageLocation */],
        value: message[21 /* TransferrableKeys.value */]
      };
    } else {
      return 'Unrecognized MessageToWorker type: ' + message[12 /* TransferrableKeys.type */];
    }
  }

  /**
   * An almost drop-in replacement for a standard Web Worker, although this one
   * within a sandboxed cross-origin iframe for a heightened security boundary.
   * For more details on Worker, see: https://developer.mozilla.org/en-US/docs/Web/API/Worker
   *
   * The iframe used for sandboxing must follow a specific contract. It:
   *   1. Must send a ready message to the main-thread.
   *   2. Must listen for a message from main-thread with the code to initialize a Worker with.
   *   3. Must send "worker-ready" once worker is initialized.
   *   4. Must proxy all messages between the Worker and Parent, including errors.
   */
  var IframeWorker = /*#__PURE__*/function () {
    /**
     * @param url The URL to initiate the worker from.
     * @param iframeUrl The URL of the iframe to use as the worker proxy.
     */
    function IframeWorker(url, iframeUrl) {
      var _this = this;
      _classCallCheck(this, IframeWorker);
      this.url = void 0;
      // Public Worker API
      this.onerror = void 0;
      this.onmessage = void 0;
      this.onmessageerror = void 0;
      this.readyPromise = void 0;
      // Internal variables.
      this.iframe = void 0;
      this.readyPromiseResolve = void 0;
      this.url = url;
      this.iframe = window.document.createElement('iframe');
      this.iframe.setAttribute('sandbox', 'allow-scripts');
      this.iframe.setAttribute('style', 'display:none');
      this.iframe.setAttribute('src', iframeUrl);
      this.url = url;
      this.readyPromise = new Promise(function (resolve) {
        _this.readyPromiseResolve = resolve;
      });
      this.setupInit();
      this.proxyFromWorker();
      window.document.body.appendChild(this.iframe);
    }
    _createClass(IframeWorker, [{
      key: "setupInit",
      value: function setupInit() {
        var _this2 = this;
        var listener = function listener(event) {
          if (event.source != _this2.iframe.contentWindow) {
            return;
          }
          fetch(_this2.url.toString()).then(function (res) {
            return res.text();
          }).then(function (code) {
            var data = event.data;
            if (data.type == 'iframe-ready') {
              var msg = {
                type: 'init-worker',
                code: code
              };
              _this2.iframe.contentWindow.postMessage(msg, '*');
            } else if (data.type === 'worker-ready') {
              _this2.readyPromiseResolve();
              window.removeEventListener('message', listener);
            }
          });
        };
        window.addEventListener('message', listener);
      }
    }, {
      key: "proxyFromWorker",
      value: function proxyFromWorker() {
        var _this3 = this;
        window.addEventListener('message', function (event) {
          if (event.source != _this3.iframe.contentWindow) {
            return;
          }
          var _event$data = event.data,
            type = _event$data.type,
            message = _event$data.message;
          if (type == 'onmessage' && _this3.onmessage) {
            _this3.onmessage(_objectSpread2(_objectSpread2({}, event), {}, {
              data: message
            }));
          } else if (type === 'onerror' && _this3.onerror) {
            _this3.onerror(message);
          } else if (type === 'onmessageerror' && _this3.onmessageerror) {
            _this3.onmessageerror(_objectSpread2(_objectSpread2({}, event), {}, {
              data: message
            }));
          }
        });
      }
      /**
       * See https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
       * @param message
       * @param transferables
       */
    }, {
      key: "postMessage",
      value: function postMessage(message, transferables) {
        var _this4 = this;
        var msg = {
          type: 'postMessage',
          message: message
        };
        this.readyPromise.then(function () {
          _this4.iframe.contentWindow.postMessage(msg, '*', transferables);
        });
      }
      /**
       * See https://developer.mozilla.org/en-US/docs/Web/API/Worker/terminate
       */
    }, {
      key: "terminate",
      value: function terminate() {
        var msg = {
          type: 'terminate'
        };
        this.iframe.contentWindow.postMessage(msg, '*');
        this.iframe.remove();
      }
    }]);
    return IframeWorker;
  }();

  var WorkerContext = /*#__PURE__*/function () {
    /**
     * @param baseElement
     * @param nodeContext
     * @param workerDOMScript
     * @param authorScript
     * @param config
     */
    function WorkerContext(baseElement, nodeContext, workerDOMScript, authorScript, config) {
      _classCallCheck(this, WorkerContext);
      this[55 /* TransferrableKeys.worker */] = void 0;
      this.nodeContext = void 0;
      this.config = void 0;
      this.nodeContext = nodeContext;
      this.config = config;
      var _createHydrateableRoo = createHydrateableRootNode(baseElement, config, this),
        skeleton = _createHydrateableRoo.skeleton,
        strings = _createHydrateableRoo.strings;
      var cssKeys = [];
      var globalEventHandlerKeys = [];
      // TODO(choumx): Sync read of all localStorage and sessionStorage a possible performance bottleneck?
      var localStorageInit = getStorageInit('localStorage');
      var sessionStorageInit = getStorageInit('sessionStorage');
      for (var key in baseElement.style) {
        cssKeys.push(key);
      }
      for (var _key in baseElement) {
        if (_key.startsWith('on')) {
          globalEventHandlerKeys.push(_key);
        }
      }
      // We skip assigning the globals for localStorage and sessionStorage because
      // We've already installed them. Also, accessing them can throw in incognito mode.
      var code = "\n'use strict';\n(function(){\n".concat(workerDOMScript, "\nself['window']=self;\nvar workerDOM=WorkerThread.workerDOM;\nWorkerThread.hydrate(\nworkerDOM.document,\n").concat(JSON.stringify(strings), ",\n").concat(JSON.stringify(skeleton), ",\n").concat(JSON.stringify(cssKeys), ",\n").concat(JSON.stringify(globalEventHandlerKeys), ",\n[").concat(window.innerWidth, ",").concat(window.innerHeight, "],\n").concat(JSON.stringify(localStorageInit), ",\n").concat(JSON.stringify(sessionStorageInit), "\n);\nworkerDOM.document[", 59 /* TransferrableKeys.observe */, "](this);\nObject.assign(self,workerDOM);\n}).call(self);\n").concat(authorScript, "\n//# sourceURL=").concat(encodeURI(config.authorURL));
      if (!config.sandbox) {
        this[55 /* TransferrableKeys.worker */] = new Worker(URL.createObjectURL(new Blob([code])));
      } else {
        this[55 /* TransferrableKeys.worker */] = new IframeWorker(URL.createObjectURL(new Blob([code])), config.sandbox.iframeUrl);
      }
      {
        console.info('debug', 'hydratedNode', readableHydrateableRootNode(baseElement, config, this));
      }
      if (config.onCreateWorker) {
        config.onCreateWorker(baseElement, strings, skeleton, cssKeys);
      }
    }
    /**
     * Returns a Promise that resolves when the Worker is ready to receive messages.
     * @returns {Promise<void>}
     */
    _createClass(WorkerContext, [{
      key: "ready",
      value: function ready() {
        return this.worker.readyPromise || Promise.resolve();
      }
      /**
       * Returns the private worker.
       */
    }, {
      key: "worker",
      get: function get() {
        return this[55 /* TransferrableKeys.worker */];
      }
      /**
       * @param message
       */
    }, {
      key: "messageToWorker",
      value: function messageToWorker(message, transferables) {
        {
          console.info('debug', 'messageToWorker', readableMessageToWorker(this.nodeContext, message));
        }
        if (this.config.onSendMessage) {
          this.config.onSendMessage(message);
        }
        this.worker.postMessage(message, transferables || []);
      }
    }]);
    return WorkerContext;
  }();
  function getStorageInit(type, sanitizer) {
    try {
      if (!sanitizer) {
        return {
          storage: window[type],
          errorMsg: null
        };
      }
      return {
        storage: sanitizer.getStorage(type == 'localStorage' ? 0 /* StorageLocation.Local */ : 1 /* StorageLocation.Session */),
        errorMsg: null
      };
    } catch (err) {
      return {
        errorMsg: err.message,
        storage: null
      };
    }
  }

  /**
   * Stores objects that have their behavior handled from the main-thread. Each object is associated to a unique ID.
   */
  var ObjectContext = /*#__PURE__*/function () {
    function ObjectContext() {
      _classCallCheck(this, ObjectContext);
      this.objects = void 0;
      this.objects = new Map();
    }
    _createClass(ObjectContext, [{
      key: "store",
      value: function store(id, obj) {
        this.objects.set(id, obj);
      }
    }, {
      key: "get",
      value: function get(id) {
        var obj = this.objects.get(id);
        if (obj) {
          return obj;
        } else {
          throw new Error('Object with id (' + id + ') does not exist.');
        }
      }
    }]);
    return ObjectContext;
  }();

  /**
   * An ExportedWorker is returned by the upgradeElement API.
   * For the most part, it delegates to the underlying Worker.
   *
   * It notably removes `postMessage` support and adds `callFunction`.
   */
  var ExportedWorker = /*#__PURE__*/function () {
    function ExportedWorker(workerContext, config) {
      _classCallCheck(this, ExportedWorker);
      this.workerContext_ = void 0;
      this.config = void 0;
      this.workerContext_ = workerContext;
      this.config = config;
    }
    /**
     * Calls a function in the worker and returns a promise with the result.
     * @param functionIdentifer
     * @param functionArguments
     */
    _createClass(ExportedWorker, [{
      key: "callFunction",
      value: function callFunction(functionIdentifer) {
        if (!this.config.executorsAllowed.includes(13 /* TransferrableMutationType.FUNCTION_CALL */)) {
          throw new Error("[worker-dom]: Error calling ".concat(functionIdentifer, ". You must enable the FUNCTION_CALL executor within the config."));
        }
        var _registerPromise = registerPromise(),
          promise = _registerPromise.promise,
          index = _registerPromise.index;
        for (var _len = arguments.length, functionArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          functionArguments[_key - 1] = arguments[_key];
        }
        var msg = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, 12 /* TransferrableKeys.type */, 12), 77 /* TransferrableKeys.functionIdentifier */, functionIdentifer), 78 /* TransferrableKeys.functionArguments */, JSON.stringify(functionArguments)), 7 /* TransferrableKeys.index */, index);
        this.workerContext_.messageToWorker(msg);
        return promise;
      }
    }, {
      key: "onerror",
      set: function set(handler) {
        this.workerContext_.worker.onerror = handler;
      }
    }, {
      key: "terminate",
      value: function terminate() {
        this.workerContext_.worker.terminate();
      }
    }]);
    return ExportedWorker;
  }();

  var ALLOWABLE_MESSAGE_TYPES = [3 /* MessageType.MUTATE */, 2 /* MessageType.HYDRATE */];
  /**
   * @param baseElement
   * @param authorScriptURL
   * @param workerDOMURL
   * @param callbacks
   * @param sanitizer
   * @param debug
   */
  function fetchAndInstall(baseElement, config) {
    var fetchPromise = Promise.all([
    // TODO(KB): Fetch Polyfill for IE11.
    fetch(config.domURL).then(function (response) {
      return response.text();
    }), fetch(config.authorURL).then(function (response) {
      return response.text();
    })]);
    return install(fetchPromise, baseElement, config);
  }
  /**
   * @param fetchPromise
   * @param baseElement
   * @param config
   */
  function install(fetchPromise, baseElement, config) {
    var mode = baseElement.dataset['shadowDom'];
    if (mode === 'open' || mode === 'closed') {
      var shadowRoot = baseElement.attachShadow({
        mode: mode
      });
      var clonedElement = baseElement.cloneNode(true);
      shadowRoot.appendChild(clonedElement);
      baseElement = clonedElement;
    }
    var stringContext = new StringContext();
    var objectContext = new ObjectContext();
    var nodeContext = new NodeContext(stringContext, baseElement);
    var normalizedConfig = normalizeConfiguration(config);
    return fetchPromise.then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        domScriptContent = _ref2[0],
        authorScriptContent = _ref2[1];
      if (domScriptContent && authorScriptContent && config.authorURL) {
        var workerContext = new WorkerContext(baseElement, nodeContext, domScriptContent, authorScriptContent, normalizedConfig);
        var mutatorContext = new MutatorProcessor(stringContext, nodeContext, workerContext, normalizedConfig, objectContext);
        workerContext.worker.onmessage = function (message) {
          var data = message.data;
          if (!ALLOWABLE_MESSAGE_TYPES.includes(data[12 /* TransferrableKeys.type */])) {
            return;
          }
          mutatorContext.mutate(data[54 /* TransferrableKeys.phase */], data[37 /* TransferrableKeys.nodes */], data[41 /* TransferrableKeys.strings */], new Uint16Array(data[36 /* TransferrableKeys.mutations */]));
          if (config.onReceiveMessage) {
            config.onReceiveMessage(message);
          }
        };
        return workerContext.ready().then(function () {
          return new ExportedWorker(workerContext, normalizedConfig);
        });
      }
      return null;
    });
  }

  function upgradeElement(baseElement, domURL) {
    var authorURL = baseElement.getAttribute('src');
    if (authorURL) {
      return fetchAndInstall(baseElement, {
        authorURL: authorURL,
        domURL: domURL
      });
    }
    return Promise.resolve(null);
  }

  exports.install = install;
  exports.upgradeElement = upgradeElement;

  return exports;

})({});
//# sourceMappingURL=main.js.map
