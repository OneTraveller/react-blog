import React, { Component } from 'react';

export default class Code extends Component {
  render () {
    const { list = '', cClass } = this.props;
    return (
      <ul className={`code ${cClass ? cClass : ''}`}>
        {list.map((li, key) => <li key={key}>{li}</li>)}
      </ul>
    )
  }
}