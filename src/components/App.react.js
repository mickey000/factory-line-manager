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
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          I need to know what is under the hood (how it works inside)
        </p>
      </div>
    );
  }
}

export default App;
