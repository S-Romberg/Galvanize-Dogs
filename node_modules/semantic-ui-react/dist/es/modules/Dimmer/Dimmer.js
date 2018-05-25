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
import React, { Component } from 'react';
import { childrenUtils, createShorthandFactory, customPropTypes, doesNodeContainClick, getElementType, getUnhandledProps, isBrowser, META, useKeyOnly } from '../../lib';
import Portal from '../../addons/Portal';
import DimmerDimmable from './DimmerDimmable';
/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer =
/*#__PURE__*/
function (_Component) {
  _inherits(Dimmer, _Component);

  function Dimmer() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Dimmer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dimmer)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePortalMount", function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.add('dimmed');
      document.body.classList.add('dimmable');
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePortalUnmount", function () {
      if (!isBrowser()) return; // Heads up, IE doesn't support second argument in add()

      document.body.classList.remove('dimmed');
      document.body.classList.remove('dimmable');
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onClickOutside = _this$props.onClickOutside;
      if (onClick) onClick(e, _this.props);
      if (_this.centerRef && _this.centerRef !== e.target && doesNodeContainClick(_this.centerRef, e)) return;
      if (onClickOutside) onClickOutside(e, _this.props);
    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCenterRef", function (c) {
      return _this.centerRef = c;
    }), _temp));
  }

  _createClass(Dimmer, [{
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
      var classes = cx('ui', useKeyOnly(active, 'active transition visible'), useKeyOnly(disabled, 'disabled'), useKeyOnly(inverted, 'inverted'), useKeyOnly(page, 'page'), useKeyOnly(simple, 'simple'), 'dimmer', className);
      var rest = getUnhandledProps(Dimmer, this.props);
      var ElementType = getElementType(Dimmer, this.props);
      var childrenContent = childrenUtils.isNil(children) ? content : children;
      var dimmerElement = React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), childrenContent && React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "center",
        ref: this.handleCenterRef
      }, childrenContent)));

      if (page) {
        return React.createElement(Portal, {
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
}(Component);

_defineProperty(Dimmer, "_meta", {
  name: 'Dimmer',
  type: META.TYPES.MODULE
});

_defineProperty(Dimmer, "Dimmable", DimmerDimmable);

_defineProperty(Dimmer, "handledProps", ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple"]);

export { Dimmer as default };
Dimmer.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An active dimmer will dim its parent container. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: PropTypes.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: PropTypes.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: PropTypes.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: PropTypes.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: PropTypes.bool
} : {};
Dimmer.create = createShorthandFactory(Dimmer, function (value) {
  return {
    content: value
  };
});