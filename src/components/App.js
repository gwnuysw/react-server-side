import React, { Component } from 'react'; //jsx 를 사용하려명 꼭 react를 임포트 해야헌다.
import Logo from '../../public/images/logo.svg';
import '../../public/stylesheets/App.css';
import MyName from './MyName.js';
import Counter from './counter.js';
import PhoneForm from './PhoneForm.js';
import PhoneInfoList from './PhoneInfoList.js';
class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 렌더링
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div className="App">
        <header className="App-header">
          <Logo className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*<MyName />
          <Counter />*/}
          <PhoneForm
            onCreate={this.handleCreate}
          />
          <p>
            <input
              placeholder="검색 할 이름을 입력하세요.."
              onChange={this.handleChange}
              value={keyword}
            />
          </p>
          <hr />
          <PhoneInfoList
            data={information}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}
          />
          {JSON.stringify(this.state.information)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
