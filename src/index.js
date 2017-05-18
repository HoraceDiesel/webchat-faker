import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import storeCreator from './store'
import { chatting, addCount, sayGreetings } from './actions'

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) : {}

const store = storeCreator(initialState)

window.store = store

store.subscribe(()=>{
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
  console.log(state)
})

store.dispatch(sayGreetings())

store.dispatch(chatting("Nicholas", "dsada"))


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
