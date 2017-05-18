import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Spacer from '../styled/Spacer'
import '../styles.css';
import Message from '../components/Message'
import Sender from '../components/Sender'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h3 className="my-0">WebChat</h3>
          </div>
          <div className="wrapper-message">
            <Message

            />
          </div>
          <Spacer size='lg' />
          <div>
            <Sender />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
