import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core'
import './App.css';
import MusicPanel from './MusicPanel.js'
import NewAppBar from './NewAppBar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      loggedIn: false,
    };
  }

  checkLoggedIn = (e) => {
    this.setState({
        loggedIn: !this.state.loggedIn,
        
    })
    alert('You Have Logged In!')
  }

  render() {
    return this.state.loggedIn ? <MusicPanel /> : (
      <div className="App">
         <NewAppBar />
         <TextField label="Username: " />
         <TextField label="Password: " />
         <Button loggedIn={this.state.loggedIn} onClick={this.checkLoggedIn} variant="contained">Submit</Button> 
      </div>
    )
  }
}  


export default App;
