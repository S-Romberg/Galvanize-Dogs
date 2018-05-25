"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _SidebarPushable = _interopRequireDefault(require("./SidebarPushable"));

var _SidebarPusher = _interopRequireDefault(require("./SidebarPusher"));

/**
 * A sidebar hides additional content beside a page.
 */
var Sidebar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Sidebar, _Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args))), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "startAnimating", function () {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
      clearTimeout(_this.stopAnimatingTimer);

      _this.setState({
        animating: true
      });

      _this.stopAnimatingTimer = setTimeout(function () {
        return _this.setState({
          animating: false
        });
      }, duration);
    }), _temp));
  }

  (0, _createClass2.default)(Sidebar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.startAnimating();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animation = _this$props.animation,
          className = _this$props.className,
          children = _this$props.children,
          content = _this$props.content,
          direction = _this$props.direction,
          visible = _this$props.visible,
          width = _this$props.width;
      var animating = this.state.animating;
      var classes = (0, _classnames.default)('ui', animation, direction, width, (0, _lib.useKeyOnly)(animating, 'animating'), (0, _lib.useKeyOnly)(visible, 'visible'), 'sidebar', className);
      var rest = (0, _lib.getUnhandledProps)(Sidebar, this.props);
      var ElementType = (0, _lib.getElementType)(Sidebar, this.props);
      return _react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes
      }), _lib.childrenUtils.isNil(children) ? content : children);
    }
  }]);
  return Sidebar;
}(_lib.AutoControlledComponent);

(0, _defineProperty2.default)(Sidebar, "defaultProps", {
  direction: 'left'
});
(0, _defineProperty2.default)(Sidebar, "autoControlledProps", ['visible']);
(0, _defineProperty2.default)(Sidebar, "_meta", {
  name: 'Sidebar',
  type: _lib.META.TYPES.MODULE
});
(0, _defineProperty2.default)(Sidebar, "Pushable", _SidebarPushable.default);
(0, _defineProperty2.default)(Sidebar, "Pusher", _SidebarPusher.default);
(0, _defineProperty2.default)(Sidebar, "handledProps", ["animation", "as", "children", "className", "content", "defaultVisible", "direction", "visible", "width"]);
Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Animation style. */
  animation: _propTypes.default.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Initial value of visible. */
  defaultVisible: _propTypes.default.bool,

  /** Direction the sidebar should appear on. */
  direction: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: _propTypes.default.bool,

  /** Sidebar width. */
  width: _propTypes.default.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
var _default = Sidebar;
exports.default = _default;