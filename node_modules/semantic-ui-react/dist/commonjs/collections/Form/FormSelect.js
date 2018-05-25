"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _Select = _interopRequireDefault(require("../../addons/Select"));

var _FormField = _interopRequireDefault(require("./FormField"));

/**
 * Sugar for <Form.Field control={Select} />.
 * @see Form
 * @see Select
 */
function FormSelect(props) {
  var control = props.control;
  var rest = (0, _lib.getUnhandledProps)(FormSelect, props);
  var ElementType = (0, _lib.getElementType)(FormSelect, props);
  return _react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
    control: control
  }));
}

FormSelect.handledProps = ["as", "control"];
FormSelect._meta = {
  name: 'FormSelect',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION
};
FormSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A FormField control prop. */
  control: _FormField.default.propTypes.control
} : {};
FormSelect.defaultProps = {
  as: _FormField.default,
  control: _Select.default
};
var _default = FormSelect;
exports.default = _default;