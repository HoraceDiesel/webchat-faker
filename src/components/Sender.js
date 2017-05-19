import React, {Component} from 'react'
import '../styles.css'

const styles = {
  input: {
    backgroundColor: '#fff',
    width: '70%',
    padding: '3px'
  }
}

class Sender extends Component {

  state = {
    inputs: ''
  }

  handleInput = (e) => {
    this.setState({
      inputs: e.target.value
    })
  }

  emptyInput = () => {
    this.setState({
      inputs: ''
    }, this._inputValue.value='')
  }

  render() {
    const { count, onButtonPress } = this.props

    return ((count === 0) ? (
      <div className="button-send">
        <button
          onClick={()=>onButtonPress()}
          className="sender link"
        >
          Chat now
        </button>
      </div>
      ) : (
        <div className="chat-box">
          <input
            placeholder="Text here...."
            style={styles.input}
            ref={r => this._inputValue = r }
            onChange={this.handleInput}
          />
          <button
            type='button'
            disabled={!this.state.inputs}
            onClick={()=>{
              onButtonPress("Nicholas", this._inputValue.value)
              this.emptyInput()
            }}
            className="sender button"
          >
            send
          </button>
        </div>
      )
    )
  }
}

export default Sender
