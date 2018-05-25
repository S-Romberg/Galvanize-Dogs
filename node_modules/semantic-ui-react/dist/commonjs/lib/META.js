"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrivate = exports.isChild = exports.isParent = exports.isModule = exports.isView = exports.isElement = exports.isCollection = exports.isAddon = exports.isType = exports.isMeta = exports.TYPES = void 0;

var _startsWith2 = _interopRequireDefault(require("lodash/fp/startsWith"));

var _has2 = _interopRequireDefault(require("lodash/fp/has"));

var _eq2 = _interopRequireDefault(require("lodash/fp/eq"));

var _flow2 = _interopRequireDefault(require("lodash/fp/flow"));

var _curry2 = _interopRequireDefault(require("lodash/fp/curry"));

var _get2 = _interopRequireDefault(require("lodash/fp/get"));

var _includes2 = _interopRequireDefault(require("lodash/fp/includes"));

var _values2 = _interopRequireDefault(require("lodash/fp/values"));

var TYPES = {
  ADDON: 'addon',
  BEHAVIOR: 'behavior',
  COLLECTION: 'collection',
  ELEMENT: 'element',
  VIEW: 'view',
  MODULE: 'module'
};
exports.TYPES = TYPES;
var TYPE_VALUES = (0, _values2.default)(TYPES);
/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed component _meta object.
 * @returns {Boolean}
 */

var isMeta = function isMeta(_meta) {
  return (0, _includes2.default)((0, _get2.default)('type', _meta), TYPE_VALUES);
};
/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @private
 * @param {function|object} metaArg A class, a component instance, or meta object..
 * @returns {object|string|undefined}
 */


exports.isMeta = isMeta;

var getMeta = function getMeta(metaArg) {
  // literal
  if (isMeta(metaArg)) return metaArg; // from prop
  else if (isMeta((0, _get2.default)('_meta', metaArg))) return metaArg._meta; // from class
    else if (isMeta((0, _get2.default)('constructor._meta', metaArg))) return metaArg.constructor._meta;
};

var metaHasKeyValue = (0, _curry2.default)(function (key, val, metaArg) {
  return (0, _flow2.default)(getMeta, (0, _get2.default)(key), (0, _eq2.default)(val))(metaArg);
});
var isType = metaHasKeyValue('type'); // ----------------------------------------
// Export
// ----------------------------------------
// type

exports.isType = isType;
var isAddon = isType(TYPES.ADDON);
exports.isAddon = isAddon;
var isCollection = isType(TYPES.COLLECTION);
exports.isCollection = isCollection;
var isElement = isType(TYPES.ELEMENT);
exports.isElement = isElement;
var isView = isType(TYPES.VIEW);
exports.isView = isView;
var isModule = isType(TYPES.MODULE); // parent

exports.isModule = isModule;
var isParent = (0, _flow2.default)(getMeta, (0, _has2.default)('parent'), (0, _eq2.default)(false));
exports.isParent = isParent;
var isChild = (0, _flow2.default)(getMeta, (0, _has2.default)('parent')); // other

exports.isChild = isChild;
var isPrivate = (0, _flow2.default)(getMeta, (0, _get2.default)('name'), (0, _startsWith2.default)('_'));
exports.isPrivate = isPrivate;