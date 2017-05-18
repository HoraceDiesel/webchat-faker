import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { allMessages, count } from './initialState.json'

console.log(count)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
