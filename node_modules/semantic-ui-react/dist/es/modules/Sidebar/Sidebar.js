import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AutoControlledComponent as Component, childrenUtils, customPropTypes, getUnhandledProps, getElementType, META, useKeyOnly } from '../../lib';
import SidebarPushable from './SidebarPushable';
import SidebarPusher from './SidebarPusher';
/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startAnimating", function () {
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

  _createClass(Sidebar, [{
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
      var classes = cx('ui', animation, direction, width, useKeyOnly(animating, 'animating'), useKeyOnly(visible, 'visible'), 'sidebar', className);
      var rest = getUnhandledProps(Sidebar, this.props);
      var ElementType = getElementType(Sidebar, this.props);
      return React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childrenUtils.isNil(children) ? content : children);
    }
  }]);

  return Sidebar;
}(Component);

_defineProperty(Sidebar, "defaultProps", {
  direction: 'left'
});

_defineProperty(Sidebar, "autoControlledProps", ['visible']);

_defineProperty(Sidebar, "_meta", {
  name: 'Sidebar',
  type: META.TYPES.MODULE
});

_defineProperty(Sidebar, "Pushable", SidebarPushable);

_defineProperty(Sidebar, "Pusher", SidebarPusher);

_defineProperty(Sidebar, "handledProps", ["animation", "as", "children", "className", "content", "defaultVisible", "direction", "visible", "width"]);

Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Animation style. */
  animation: PropTypes.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Initial value of visible. */
  defaultVisible: PropTypes.bool,

  /** Direction the sidebar should appear on. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: PropTypes.bool,

  /** Sidebar width. */
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
export default Sidebar;