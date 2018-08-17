import React, { Component } from 'react';
import logo from 'images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          Simple example of how Create React App works (CI by Travis and Heroku).
          <br />
          Add custom absolute path and folder structure. Next app will be done with yarn eject to add sass and have more control.
        </p>
      </div>
    );
  }
}

export default App;
