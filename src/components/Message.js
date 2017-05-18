import React, {Component} from 'react'

class Message extends Component {

  state = {
    greeting: "Start Chatting by clicking \"Chat Now\""
  }

  render() {
    const { greeting } = this.state
    return <p className="text-lg">{greeting}</p>
  }
}

export default Message
