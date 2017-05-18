import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import sampleData from './initialState.json'
import App from './containers/App';
import './index.css';
import storeCreator from './store'

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) : sampleData

const store = storeCreator(initialState)

window.store = store
window.React = React

store.subscribe(()=>{
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
  console.log(state)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
