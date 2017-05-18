import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) : {}

const store = createStore(appReducer, initialState)

window.store = store

store.subscribe(()=>{
  const state = store.getState()
  localStorage['redux-store'] = JSON.stringify(state)
})

const action = {
  type: C.ADD_MESSAGE,
  payload: {
    owner: "System: ",
    body: "Start Chatting by clicking \"Chat Now\""
  }
}

const action2 = {
  type: C.ADD_COUNT,
  payload: 0
}

store.dispatch(action)
store.dispatch(action2)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
