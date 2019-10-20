import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../page/home';

export default class MainRouter extends Component {
  render () {
    return (
      <div>
        <Router>
          <Route path="/" component={Home}></Route>
        </Router>
      </div>
    )
  }
}