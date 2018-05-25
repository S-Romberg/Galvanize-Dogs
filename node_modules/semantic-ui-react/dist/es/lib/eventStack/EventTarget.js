import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _without from "lodash/without";
import _set from "lodash/set";
import _get from "lodash/get";
import _uniq from "lodash/uniq";
import _isEmpty from "lodash/isEmpty";
import _some from "lodash/some";
import _has from "lodash/has";
import _isArray from "lodash/isArray";
import _last from "lodash/last";
import _forEach from "lodash/forEach";

var EventTarget = function EventTarget(target) {
  var _this = this;

  _classCallCheck(this, EventTarget);

  _defineProperty(this, "_handlers", {});

  _defineProperty(this, "_pools", {});

  _defineProperty(this, "_emit", function (name) {
    return function (event) {
      _forEach(_this._pools, function (pool, poolName) {
        var handlers = pool[name];
        if (!handlers) return;

        if (poolName === 'default') {
          _forEach(handlers, function (handler) {
            return handler(event);
          });

          return;
        }

        _last(handlers)(event);
      });
    };
  });

  _defineProperty(this, "_normalize", function (handlers) {
    return _isArray(handlers) ? handlers : [handlers];
  });

  _defineProperty(this, "_listen", function (name) {
    if (_has(_this._handlers, name)) return;

    var handler = _this._emit(name);

    _this.target.addEventListener(name, handler);

    _this._handlers[name] = handler;
  });

  _defineProperty(this, "_unlisten", function (name) {
    if (_some(_this._pools, name)) return;
    var handler = _this._handlers[name];

    _this.target.removeEventListener(name, handler);

    delete _this._handlers[name];
  });

  _defineProperty(this, "empty", function () {
    return _isEmpty(_this._handlers);
  });

  _defineProperty(this, "sub", function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = _uniq(_toConsumableArray(_get(_this._pools, "".concat(pool, ".").concat(name), [])).concat(_toConsumableArray(_this._normalize(handlers))));

    _this._listen(name);

    _set(_this._pools, "".concat(pool, ".").concat(name), events);
  });

  _defineProperty(this, "unsub", function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = _without.apply(void 0, [_get(_this._pools, "".concat(pool, ".").concat(name), [])].concat(_toConsumableArray(_this._normalize(handlers))));

    if (events.length > 0) {
      _set(_this._pools, "".concat(pool, ".").concat(name), events);

      return;
    }

    _set(_this._pools, "".concat(pool, ".").concat(name), undefined);

    _this._unlisten(name);
  });

  this.target = target;
} // ------------------------------------
// Utils
// ------------------------------------
;

export { EventTarget as default };