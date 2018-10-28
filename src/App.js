import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App=title">JBike6</h1>
        </header>
        <Catalog />
        <Main />
      </div>
    );
  }
}

export default App;
