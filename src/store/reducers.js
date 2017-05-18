import C from '../constants'
import { combineReducers } from 'redux'

export const message = (state=null, action) =>
  (action.type === C.ADD_MESSAGE) ? action.payload : state

export const count = (state=0, action) =>
  (action.type === C.ADD_COUNT) ? state + 1 : state

export const allMessages = (state=[], action) => {
  switch (action.type) {
    case C.ADD_MESSAGE:
      return [
        ...state,
        message(null, action)
      ]
    default:
      return state
  }
}

export default combineReducers({
  count,
  allMessages
})
