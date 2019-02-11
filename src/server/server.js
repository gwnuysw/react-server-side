import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/stylesheets/index.css';
import { renderToString } from 'react-dom/server'
import App from '../components/App'
module.exports = function render() {
  // Model the initial state
  let content = renderToString(<App />);
  return content;
}
