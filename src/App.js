import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'rubenamaro'
  };
  
  modifyUsernameHandler = (event) => this.setState({username: event.target.value});
  render() {
    return (
      <div className="App">
        <UserInput change={this.modifyUsernameHandler} username={this.state.username} />
        <UserOutput username="amaroruben">Username hardcoded via props</UserOutput>
        <UserOutput username={this.state.username}>Username modifiable via input</UserOutput>
      </div>
    );
  }
}

export default App;
