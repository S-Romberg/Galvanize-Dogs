"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Portal = _interopRequireDefault(require("../../addons/Portal"));

var _DimmerDimmable = _interopRequireDefault(require("./DimmerDimmable"));

/**
 * A dimmer hides distractions to focus attention on particular content.
 */
var Dimmer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Dimmer, _Component);

  function Dimmer() {
    var _getPrototypeOf2;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Dimmer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Dimmer)).call.apply(_getPrototypeOf2, [this].concat(args))), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePortalMount", function () {
      if (!(0, _lib.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    }), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePortalUnmount", function () {
      if (!(0, _lib.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    }), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onClickOutside = _this$props.onClickOutside;
      if (onClick) onClick(e, _this.props);
      if (_this.centerRef && _this.centerRef !== e.target && (0, _lib.doesNodeContainClick)(_this.centerRef, e)) return;
      if (onClickOutside) onClickOutside(e, _this.props);
    }), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleCenterRef", function (c) {
      return _this.centerRef = c;
    }), _temp));
  }

  (0, _createClass2.default)(Dimmer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          disabled = _this$props2.disabled,
          inverted = _this$props2.inverted,
          page = _this$props2.page,
          simple = _this$props2.simple;
      var classes = (0, _classnames.default)('ui', (0, _lib.useKeyOnly)(active, 'active transition visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(page, 'page'), (0, _lib.useKeyOnly)(simple, 'simple'), 'dimmer', className);
      var rest = (0, _lib.getUnhandledProps)(Dimmer, this.props);
      var ElementType = (0, _lib.getElementType)(Dimmer, this.props);
      var childrenContent = _lib.childrenUtils.isNil(children) ? content : children;

      var dimmerElement = _react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), childrenContent && _react.default.createElement("div", {
        className: "content"
      }, _react.default.createElement("div", {
        className: "center",
        ref: this.handleCenterRef
      }, childrenContent)));

      if (page) {
        return _react.default.createElement(_Portal.default, {
          closeOnEscape: false,
          closeOnDocumentClick: false,
          onMount: this.handlePortalMount,
          onUnmount: this.handlePortalUnmount,
          open: active,
          openOnTriggerClick: false
        }, dimmerElement);
      }

      return dimmerElement;
    }
  }]);
  return Dimmer;
}(_react.Component);

exports.default = Dimmer;
(0, _defineProperty2.default)(Dimmer, "_meta", {
  name: 'Dimmer',
  type: _lib.META.TYPES.MODULE
});
(0, _defineProperty2.default)(Dimmer, "Dimmable", _DimmerDimmable.default);
(0, _defineProperty2.default)(Dimmer, "handledProps", ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple"]);
Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An active dimmer will dim its parent container. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: _propTypes.default.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: _propTypes.default.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: _propTypes.default.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: _propTypes.default.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: _propTypes.default.bool
} : {};
Dimmer.create = (0, _lib.createShorthandFactory)(Dimmer, function (value) {
  return {
    content: value
  };
});