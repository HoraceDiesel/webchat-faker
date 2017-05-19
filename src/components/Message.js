import React from 'react'

const Message = ({owner, body}) => {

  return (
    <div className={`wrapper-inner-msg ${owner==='Nicholas' && 'bg-lighter'}`}>
      <p className={owner ? "" : "text-lg text-bold"}>
        {owner && <strong className="text-black">{owner}: </strong> }
        {body}
      </p>
    </div>
  )
}

export default Message
