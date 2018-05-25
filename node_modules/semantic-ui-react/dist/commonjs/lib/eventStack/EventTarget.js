"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _some2 = _interopRequireDefault(require("lodash/some"));

var _has2 = _interopRequireDefault(require("lodash/has"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var EventTarget = function EventTarget(target) {
  var _this = this;

  (0, _classCallCheck2.default)(this, EventTarget);
  (0, _defineProperty2.default)(this, "_handlers", {});
  (0, _defineProperty2.default)(this, "_pools", {});
  (0, _defineProperty2.default)(this, "_emit", function (name) {
    return function (event) {
      (0, _forEach2.default)(_this._pools, function (pool, poolName) {
        var handlers = pool[name];
        if (!handlers) return;

        if (poolName === 'default') {
          (0, _forEach2.default)(handlers, function (handler) {
            return handler(event);
          });
          return;
        }

        (0, _last2.default)(handlers)(event);
      });
    };
  });
  (0, _defineProperty2.default)(this, "_normalize", function (handlers) {
    return (0, _isArray2.default)(handlers) ? handlers : [handlers];
  });
  (0, _defineProperty2.default)(this, "_listen", function (name) {
    if ((0, _has2.default)(_this._handlers, name)) return;

    var handler = _this._emit(name);

    _this.target.addEventListener(name, handler);

    _this._handlers[name] = handler;
  });
  (0, _defineProperty2.default)(this, "_unlisten", function (name) {
    if ((0, _some2.default)(_this._pools, name)) return;
    var handler = _this._handlers[name];

    _this.target.removeEventListener(name, handler);

    delete _this._handlers[name];
  });
  (0, _defineProperty2.default)(this, "empty", function () {
    return (0, _isEmpty2.default)(_this._handlers);
  });
  (0, _defineProperty2.default)(this, "sub", function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
    var events = (0, _uniq2.default)((0, _toConsumableArray2.default)((0, _get2.default)(_this._pools, "".concat(pool, ".").concat(name), [])).concat((0, _toConsumableArray2.default)(_this._normalize(handlers))));

    _this._listen(name);

    (0, _set2.default)(_this._pools, "".concat(pool, ".").concat(name), events);
  });
  (0, _defineProperty2.default)(this, "unsub", function (name, handlers) {
    var pool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';

    var events = _without2.default.apply(void 0, [(0, _get2.default)(_this._pools, "".concat(pool, ".").concat(name), [])].concat((0, _toConsumableArray2.default)(_this._normalize(handlers))));

    if (events.length > 0) {
      (0, _set2.default)(_this._pools, "".concat(pool, ".").concat(name), events);
      return;
    }

    (0, _set2.default)(_this._pools, "".concat(pool, ".").concat(name), undefined);

    _this._unlisten(name);
  });
  this.target = target;
} // ------------------------------------
// Utils
// ------------------------------------
;

exports.default = EventTarget;