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

var PhoneInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(PhoneInfo, _Component);

  function PhoneInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PhoneInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PhoneInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
      // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
      // input 형태로 보여주게 됩니다.
      editing: false,
      // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
      // 설정합니다
      name: '',
      phone: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRemove", function () {
      // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
      var _this$props = _this.props,
          info = _this$props.info,
          onRemove = _this$props.onRemove;
      onRemove(info.id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleEdit", function () {
      var editing = _this.state.editing;

      _this.setState({
        editing: !editing
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    return _this;
  }

  _createClass(PhoneInfo, [{
    key: "shouldComponentUpdate",
    // file: src/components/PhoneInfo.js
    value: function shouldComponentUpdate(nextProps, nextState) {
      // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
      if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
        return false;
      } // 나머지 경우엔 리렌더링함


      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
      // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
      // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.
      var _this$props2 = this.props,
          info = _this$props2.info,
          onUpdate = _this$props2.onUpdate;

      if (!prevState.editing && this.state.editing) {
        // editing 값이 false -> true 로 전환 될 때
        // info 의 값을 state 에 넣어준다
        this.setState({
          name: info.name,
          phone: info.phone
        });
      }

      if (prevState.editing && !this.state.editing) {
        // editing 값이 true -> false 로 전환 될 때
        onUpdate(info.id, {
          name: this.state.name,
          phone: this.state.phone
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render PhoneInfo ' + this.props.info.id);
      var style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
      };
      var editing = this.state.editing;

      if (editing) {
        // 수정모드
        return _react.default.createElement("div", {
          style: style
        }, _react.default.createElement("div", null, _react.default.createElement("input", {
          value: this.state.name,
          name: "name",
          placeholder: "\uC774\uB984",
          onChange: this.handleChange
        })), _react.default.createElement("div", null, _react.default.createElement("input", {
          value: this.state.phone,
          name: "phone",
          placeholder: "\uC804\uD654\uBC88\uD638",
          onChange: this.handleChange
        })), _react.default.createElement("button", {
          onClick: this.handleToggleEdit
        }, "\uC801\uC6A9"), _react.default.createElement("button", {
          onClick: this.handleRemove
        }, "\uC0AD\uC81C"));
      } // 일반모드


      var _this$props$info = this.props.info,
          name = _this$props$info.name,
          phone = _this$props$info.phone;
      return _react.default.createElement("div", {
        style: style
      }, _react.default.createElement("div", null, _react.default.createElement("b", null, name)), _react.default.createElement("div", null, phone), _react.default.createElement("button", {
        onClick: this.handleToggleEdit
      }, "\uC218\uC815"), _react.default.createElement("button", {
        onClick: this.handleRemove
      }, "\uC0AD\uC81C"));
    }
  }]);

  return PhoneInfo;
}(_react.Component);

_defineProperty(PhoneInfo, "defaultProps", {
  info: {
    name: '이름',
    phone: '010-0000-0000',
    id: 0
  }
});

var _default = PhoneInfo;
exports.default = _default;