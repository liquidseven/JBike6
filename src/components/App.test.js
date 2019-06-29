import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu'
import Bike from './Bike'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavMenu />
      <div className="Bike">
      <Bike />
      </div>
      <div className="Forward-speed">
      Forward Speed
      </div>
      </div>
    );
  }
}

export default App;
