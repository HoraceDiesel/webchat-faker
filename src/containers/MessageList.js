import MessageList from '../components/MessageList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    messages: state.allMessages,
    count: state.count
  }
}

export default connect(mapStateToProps)(MessageList)
