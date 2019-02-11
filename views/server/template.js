"use strict";

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var page = "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"utf-8\" />\n      <link rel=\"shortcut icon\" href=\"assets/favicon.ico\" />\n      <meta\n        name=\"viewport\"\n        content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\n      />\n      <meta name=\"theme-color\" content=\"#000000\" />\n      <link rel=\"manifest\" href=\"assets/manifest.json\" />\n      <title>React App</title>\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id=\"root\">".concat(content, "</div>\n      <script src=\"assets/client.js\"> </script>\n    </body>\n  </html>");
  return page;
}

module.exports = template;