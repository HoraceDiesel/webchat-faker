import React from 'react'
import Message from './Message'
import { INIT_MESSAGE } from '../constants'
import '../styles.css'

const MessageList = ({messages, count, typing}) => {
  return (
    <div className="wrapper-message">
      {
        (count === 0) ?
        <Message key='init'
          body={INIT_MESSAGE}
        />
        :
        messages.map((message, i)=>(
          <Message
            key={i}
            owner={message.owner}
            body={message.body}
          />
        ))
      }
      {
        typing && (
          <span className="typing">
            Mary is typing...
          </span>)
      }
    </div>
  )
}

export default MessageList
