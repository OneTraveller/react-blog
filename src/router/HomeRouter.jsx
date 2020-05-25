import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssWorldNote from '../page/css/cssWorldNote';
import ZTeacherBlogNote from '../page/css/ZTeacherBlogNote';
import Grid from '../page/css/grid';
import CssOtherNote from '../page/css/cssOtherNote';
import ES6 from '../page/js/es6';
import OOP from '../page/js/oop';
import WebSocket from '../page/js/webSocket';
import Zoom from '../page/js/zoom';

export default class HomeRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={CssWorldNote}></Route>
        <Route
          path="/home/ZTeacherBlogNote"
          component={ZTeacherBlogNote}
        ></Route>
        <Route path="/home/grid" component={Grid}></Route>
        <Route path="/home/cssOtherNote" component={CssOtherNote}></Route>

        <Route path="/home/es6" component={ES6}></Route>
        <Route path="/home/oop" component={OOP}></Route>
        <Route path="/home/webSocket" component={WebSocket}></Route>
        <Route path="/home/zoom" component={Zoom}></Route>
      </div>
    );
  }
}
