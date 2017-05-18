import React from 'react'

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

const Sender = ({ count, onButtonPress=f=>f }) => {

  let _inputValue = ""

  const handleInput = () => {
    console.log(_inputValue.value)
  }

  return ((count === 0) ? (
      <button
        onClick={()=>onButtonPress()}
        style={styles.button}
      >
        Chat Now
      </button>
    ) : (
      <div>
        <input
          placeholder="Text here...."
          style={styles.input}
          ref={r => _inputValue = r }
          onChange={handleInput}
        />
        <button
          onClick={()=>onButtonPress("Nicholas", _inputValue.value)}
          style={styles.button}
        >
          Send
        </button>
      </div>
    )
  )
}

export default Sender
