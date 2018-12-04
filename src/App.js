import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom'
import PersistentDrawerLeft from './components/PersistentDrawerLeft'
import Eigenvalues from './Eigenvalues'
import SelfStability from './SelfStability'
import ProgramHelp from './ProgramHelp'
import Credit from './Credit'



class App extends Component {
  constructor(props) {
    super(props);

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
        <Route path="/selfstability" component={SelfStability} />
        <Route path="/programhelp" component={ProgramHelp} />
        <Route path="/credit" component={Credit} />
        </Switch>
      </div>
    );
  }
}

export default App;
