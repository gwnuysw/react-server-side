"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render() {
  // Model the initial state
  var content = (0, _server.renderToString)(_react.default.createElement(_App.default, null));
  return content;
};