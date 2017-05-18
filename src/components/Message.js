import React from 'react'

const Message = ({owner, body}) => {

  return (
    <p className="text-lg">
      {owner && <strong>{owner}: </strong> }
      {body}
    </p>
  )
}

export default Message
