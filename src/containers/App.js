import React, { Component } from 'react';
import '../styles.css';
import Message from '../components/Message'
import Sender from '../components/Sender'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3 className="my-0">WebChat</h3>
        </div>
        <div className="wrapper-message">
          <Message

          />
        </div>
        <div>
          <Sender />
        </div>
      </div>
    );
  }
}

export default App;
