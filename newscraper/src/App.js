import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Banner />
          <Main>
            <Switch>
              <Route exact path='/' component={Form} />
              <Route exact path='/search' component={List} />
              <Route exact path='/save' component={Save} />
            </Switch>
          </Main>
        </div>
      </Router>

    );
  }
}

export default App;
