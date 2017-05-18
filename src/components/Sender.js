import React, {Component} from 'react'

class Sender extends Component {

  handleInputChange = () => {
    return
  }

  render() {
    return (
      <div>
        <input
          placeholder="Text here...."
          onChange={this.handleInputChange}
          style={styles.input}
          ref={(r) => {this.inputValue = r }}
        />
        <button
          style={styles.button}
        >
          Send
        </button>
      </div>
    )
  }
}

const styles = {
  input: {
    backgroundColor: '#fff',
    width: '80%'
  },
  button: {
    color: '#fff',
    backgroundColor: '#9C2626',
    border: '1px solid white',
    marginLeft: '1rem',
    cursor: 'pointer'
  }
}

export default Sender
