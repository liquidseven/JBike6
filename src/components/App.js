import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom'
import PersistentDrawerLeft from './PersistentDrawerLeft'
import Eigenvalues from './Eigenvalues'
import Video from './Video'
import ProgramHelp from './ProgramHelp'
import Credit from './Credit'
import ProgramMath from './ProgramMath'



class App extends Component {
  constructor(props) {
    super(props)
    this.shift.bind(this)
  }

  shift() {

  }
  render() {
    return (
      <div className="App">
        <PersistentDrawerLeft />
        <CssBaseline />
        <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/program" component={Main} />
        <Route path="/eigenvalues" component={Eigenvalues}/>
        <Route path="/Video" component={Video} />
        <Route path="/Math" component={ProgramMath} />
        <Route path="/programhelp" component={ProgramHelp} />
        <Route path="/credit" component={Credit} />
        </Switch>
      </div>
    );
  }
}

export default App;
