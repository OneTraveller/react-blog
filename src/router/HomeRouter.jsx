import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssWorldNote from '../page/css/cssWorldNote';
import ZTeacherBlogNote from '../page/css/ZTeacherBlogNote';
import Grid from '../page/css/grid';
import CssOtherNote from '../page/css/cssOtherNote';

export default class HomeRouter extends Component {

  render () {
    return (
      <div>
        <Route exact path="/home" component={CssWorldNote}></Route>
        <Route path="/home/ZTeacherBlogNote" component={ZTeacherBlogNote}></Route>
        <Route path="/home/grid" component={Grid}></Route>
        <Route path="/home/cssOtherNote" component={CssOtherNote}></Route>
      </div>
    )
  }
}