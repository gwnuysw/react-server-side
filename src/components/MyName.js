import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '이석원'
  }
  render() {
    return (
      <div>
        {/*props는 부모가 자식 태그안에 넣어준 변수*/}
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
