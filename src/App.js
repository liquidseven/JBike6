import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleMenu from './components/SimpleMenu'
import PersistentDrawerLeft from './components/PersistentDrawerLeft'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        {/*<header className="App-header">
          <h1 className="App=title">JBike6</h1>
          </header> */}
        <CssBaseline />
        <Catalog />
        <Main />
      </div>
    );
  }
}

export default App;
