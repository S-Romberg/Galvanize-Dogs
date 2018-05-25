import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _without from "lodash/without";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, META, shallowEqual, SUI, useKeyOnly, useValueAndKey } from '../../lib';
import IconGroup from './IconGroup';
/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowEqual(this.props, nextProps);
    }
  }, {
    key: "getIconAriaOptions",
    value: function getIconAriaOptions() {
      var ariaOptions = {};
      var ariaLabel = this.props['aria-label'];

      if (!ariaLabel) {
        ariaOptions['aria-hidden'] = 'true';
      }

      return ariaOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bordered = _this$props.bordered,
          circular = _this$props.circular,
          className = _this$props.className,
          color = _this$props.color,
          corner = _this$props.corner,
          disabled = _this$props.disabled,
          fitted = _this$props.fitted,
          flipped = _this$props.flipped,
          inverted = _this$props.inverted,
          link = _this$props.link,
          loading = _this$props.loading,
          name = _this$props.name,
          rotated = _this$props.rotated,
          size = _this$props.size;
      var classes = cx(color, name, size, useKeyOnly(bordered, 'bordered'), useKeyOnly(circular, 'circular'), useKeyOnly(corner, 'corner'), useKeyOnly(disabled, 'disabled'), useKeyOnly(fitted, 'fitted'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(loading, 'loading'), useValueAndKey(flipped, 'flipped'), useValueAndKey(rotated, 'rotated'), 'icon', className);
      var rest = getUnhandledProps(Icon, this.props);
      var ElementType = getElementType(Icon, this.props);
      var ariaOptions = this.getIconAriaOptions();
      return React.createElement(ElementType, _extends({}, rest, ariaOptions, {
        className: classes
      }));
    }
  }]);

  return Icon;
}(Component);

_defineProperty(Icon, "defaultProps", {
  as: 'i'
});

_defineProperty(Icon, "_meta", {
  name: 'Icon',
  type: META.TYPES.ELEMENT
});

_defineProperty(Icon, "Group", IconGroup);

_defineProperty(Icon, "handledProps", ["aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"]);

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the icon. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.bool,

  /** Show that the icon is inactive. */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can flipped. */
  flipped: PropTypes.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be formatted as a link. */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Name of the icon. */
  name: customPropTypes.suggest(SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-label': PropTypes.string
} : {};
Icon.create = createShorthandFactory(Icon, function (value) {
  return {
    name: value
  };
});
export default Icon;