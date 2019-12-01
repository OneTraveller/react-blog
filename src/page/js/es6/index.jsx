import React, { Component } from 'react';
import { post } from '../../../server/api';

export default class ES6 extends Component {
  componentWillMount () {
    post('/login', { username: 'bear', password: '123' });
  }

  render () {
    return (
      <div>es6</div>
    )
  }
}