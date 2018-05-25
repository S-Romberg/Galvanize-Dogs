"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _isBrowser = _interopRequireDefault(require("../isBrowser"));

var _EventTarget = _interopRequireDefault(require("./EventTarget"));

var _normalizeTarget = _interopRequireDefault(require("./normalizeTarget"));

var EventStack = function EventStack() {
  var _this = this;

  (0, _classCallCheck2.default)(this, EventStack);
  (0, _defineProperty2.default)(this, "_find", function (target) {
    var autoCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var normalized = (0, _normalizeTarget.default)(target);
    if (_this._targets.has(normalized)) return _this._targets.get(normalized);
    if (!autoCreate) return;
    var eventTarget = new _EventTarget.default(normalized);

    _this._targets.set(normalized, eventTarget);

    return eventTarget;
  });
  (0, _defineProperty2.default)(this, "_remove", function (target) {
    var normalized = (0, _normalizeTarget.default)(target);

    _this._targets.delete(normalized);
  });
  (0, _defineProperty2.default)(this, "sub", function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!(0, _isBrowser.default)()) return;
    var _options$target = options.target,
        target = _options$target === void 0 ? document : _options$target,
        _options$pool = options.pool,
        pool = _options$pool === void 0 ? 'default' : _options$pool;

    var eventTarget = _this._find(target);

    eventTarget.sub(name, handlers, pool);
  });
  (0, _defineProperty2.default)(this, "unsub", function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!(0, _isBrowser.default)()) return;
    var _options$target2 = options.target,
        target = _options$target2 === void 0 ? document : _options$target2,
        _options$pool2 = options.pool,
        pool = _options$pool2 === void 0 ? 'default' : _options$pool2;

    var eventTarget = _this._find(target, false);

    if (eventTarget) {
      eventTarget.unsub(name, handlers, pool);
      if (eventTarget.empty()) _this._remove(target);
    }
  });
  this._targets = new Map();
} // ------------------------------------
// Target utils
// ------------------------------------
;

var instance = new EventStack();
var _default = instance;
exports.default = _default;