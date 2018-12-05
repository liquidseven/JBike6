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
import { Typography } from '@material-ui/core';



class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Typography component="h2" variant="h2" gutterBottom> {/** This fixes appBar blocking text */}
          &nbsp; {/**Just a whitespace */}
        </Typography>
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
