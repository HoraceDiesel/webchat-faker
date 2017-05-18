import C, { MARYS_REPLY, GREETINGS } from './constants'

export const chatting = (owner, body) => (dispatch, getState) =>
{
  dispatch(addMessage(owner, body))
  dispatch(isTyping())

  setTimeout(()=>{
    dispatch(endsTyping())
    dispatch(addMessage("Mary", MARYS_REPLY))
  }, 3000)
}

export const addMessage = (owner, body) => (
  {
    type: C.ADD_MESSAGE,
      payload: {
        owner: owner,
        body: body
      }
  }
)

export const isTyping = () => (
  {
    type: C.IS_TYPING
  }
)

export const endsTyping = () => (
  {
    type: C.ENDS_TYPING
  }
)

export const addCount = () =>
({
  type: C.ADD_COUNT
})

export const sayGreetings = () => (dispatch, getState) => {
  setTimeout(()=>{
    dispatch(addMessage("Mary", GREETINGS))
  },1000)
}
