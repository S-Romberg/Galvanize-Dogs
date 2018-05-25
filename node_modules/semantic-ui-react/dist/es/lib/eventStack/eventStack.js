import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import isBrowser from '../isBrowser';
import EventTarget from './EventTarget';
import normalizeTarget from './normalizeTarget';

var EventStack = function EventStack() {
  var _this = this;

  _classCallCheck(this, EventStack);

  _defineProperty(this, "_find", function (target) {
    var autoCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var normalized = normalizeTarget(target);
    if (_this._targets.has(normalized)) return _this._targets.get(normalized);
    if (!autoCreate) return;
    var eventTarget = new EventTarget(normalized);

    _this._targets.set(normalized, eventTarget);

    return eventTarget;
  });

  _defineProperty(this, "_remove", function (target) {
    var normalized = normalizeTarget(target);

    _this._targets.delete(normalized);
  });

  _defineProperty(this, "sub", function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isBrowser()) return;
    var _options$target = options.target,
        target = _options$target === void 0 ? document : _options$target,
        _options$pool = options.pool,
        pool = _options$pool === void 0 ? 'default' : _options$pool;

    var eventTarget = _this._find(target);

    eventTarget.sub(name, handlers, pool);
  });

  _defineProperty(this, "unsub", function (name, handlers) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!isBrowser()) return;
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
export default instance;