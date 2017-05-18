import React from 'react'
import Message from './Message'
import { INIT_MESSAGE } from '../constants'

const MessageList = ({messages, count}) => {
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
    </div>
  )
}

export default MessageList
