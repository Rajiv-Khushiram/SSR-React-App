"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./Components/App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.querySelector('#root'));