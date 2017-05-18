import React from 'react'
import { connect } from 'react-redux'
import { clearAll } from '../actions'

const mapDispatchToProps = dispatch => {

  return {
    onButtonPress() {
      dispatch(clearAll())
    }
  }
}

const EndButton = ({onButtonPress}) =>
  <button onClick={onButtonPress}>End Chat</button>

export default connect(null, mapDispatchToProps)(EndButton)
