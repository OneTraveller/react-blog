import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NBA from '../page/sports/nba';
import NBADetail from '../page/sports/nbaDetail';
import CBA from '../page/sports/cba';
import InlandNews from '../page/news/inlandNews';
import ForeignNews from '../page/news/foreignNews';

export default class MainContent extends Component {

  render () {
    return (
      <div>
        <Route exact path="/home" component={NBA}></Route>
        <Route path="/home/nba/nbaDetail" component={NBADetail}></Route>
        <Route path="/home/cba" component={CBA}></Route>
        <Route path="/home/inlandNews" component={InlandNews}></Route>
        <Route path="/home/foreignNews" component={ForeignNews}></Route>
      </div>
    )
  }
}