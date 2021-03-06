import C from '../constants'
import { combineReducers } from 'redux'

export const message = (state=null, action) =>
  (action.type === C.ADD_MESSAGE) ? action.payload : state

export const count = (state=0, action) => {
  switch (action.type) {
    case C.ADD_COUNT:
      return state + 1
    case C.RESET:
      return 0
    default:
      return state
  }
}

export const allMessages = (state=[], action) => {
  switch (action.type) {
    case C.ADD_MESSAGE:
      return [
        ...state,
        message(null, action)
      ]
    case C.RESET:
      return []
    default:
      return state
  }
}


export const typing = (state=false, action) => {
  switch (action.type) {
    case C.IS_TYPING:
      return true
    case C.ENDS_TYPING:
      return false
    default:
      return state
  }
}

export default combineReducers({
  count,
  typing,
  allMessages
})
