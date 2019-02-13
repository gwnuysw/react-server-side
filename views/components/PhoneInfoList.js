"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PhoneInfo = _interopRequireDefault(require("./PhoneInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhoneInfoList =
/*#__PURE__*/
function (_Component) {
  _inherits(PhoneInfoList, _Component);

  function PhoneInfoList() {
    _classCallCheck(this, PhoneInfoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(PhoneInfoList).apply(this, arguments));
  }

  _createClass(PhoneInfoList, [{
    key: "render",
    value: function render() {
      console.log('render PhoneInfoList');
      var _this$props = this.props,
          data = _this$props.data,
          onRemove = _this$props.onRemove,
          onUpdate = _this$props.onUpdate;
      var list = data.map(function (info) {
        return _react.default.createElement(_PhoneInfo.default, {
          key: info.id,
          info: info,
          onRemove: onRemove,
          onUpdate: onUpdate
        });
      });
      return _react.default.createElement("div", null, list);
    }
  }]);

  return PhoneInfoList;
}(_react.Component);

_defineProperty(PhoneInfoList, "defaultProps", {
  data: [],
  onRemove: function onRemove() {
    return console.warn('onRemove not defined');
  },
  onUpdate: function onUpdate() {
    return console.warn('onUpdate not defined');
  } // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.data !== this.props.data;
  // }

});

var _default = PhoneInfoList;
exports.default = _default;