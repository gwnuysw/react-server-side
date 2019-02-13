"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Counter =
/*#__PURE__*/
function (_Component) {
  _inherits(Counter, _Component);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      number: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIncrease", function () {
      var number = _this.state.number;

      _this.setState({
        number: number + 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDecrease", function () {
      _this.setState(function (_ref) {
        var number = _ref.number;
        return {
          number: number - 1
        };
      });
    });

    console.log('constructor');
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // 5 의 배수라면 리렌더링 하지 않음
      console.log('shouldComponentUpdate');
      if (nextState.number % 5 === 0) return false;
      return true;
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(nextProps, nextState) {
      console.log('getSnapshotBeforeUpdate');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate');
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render');
      return _react.default.createElement("div", null, _react.default.createElement("h1", null, "\uCE74\uC6B4\uD130"), _react.default.createElement("div", null, "\uAC12: ", this.state.number), _react.default.createElement("button", {
        onClick: this.handleIncrease
      }, "+"), _react.default.createElement("button", {
        onClick: this.handleDecrease
      }, "-"));
    }
  }]);

  return Counter;
}(_react.Component);

var _default = Counter;
exports.default = _default;