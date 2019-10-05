import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from '../page/login';
import Home from '../page/home';

export default class RouterPage extends Component {
  render () {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Router>
      </div>
    )
  }
}