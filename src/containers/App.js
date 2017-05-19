import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Spacer from '../styled/Spacer'
import '../styles.css';
import MessageList from './MessageList'
import Sender from './Sender'
import EndButton from './EndButton'

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h3 className="my-0">WebChat <EndButton /> </h3>
          </div>
          <MessageList />
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
