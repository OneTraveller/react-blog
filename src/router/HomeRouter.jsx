import React, { Component } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Css2 from '../page/css/css2';

export default class MainContent extends Component {

  render () {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Css2}></Route>
        </Router>
      </div>
    )
  }
}