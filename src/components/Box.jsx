import React, { Component } from 'react';

export default class Box extends Component {

  render () {
    const { bTitle, bClass = '', children } = this.props;
    return (
      <div>
        <h3>{bTitle}</h3>
        <div className={bClass}>
          {children}
        </div>
      </div>
    )
  }
}