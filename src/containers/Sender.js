import { connect } from 'react-redux'
import Sender from '../components/Sender'
import { chatting, sayGreetings } from '../actions'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onButtonPress(owner, body) {
      owner ?
        dispatch(chatting(owner, body))
        : dispatch(sayGreetings())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender)
