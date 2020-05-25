import React, { Component } from 'react';
import './index.scss';
import './button.scss';

export default class CssOtherNote extends Component {
  render() {
    return (
      <div className="other-note">
        <h3>1.加载动画</h3>
        <div className="box-1">
          <div className="loading">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" />
            </svg>
          </div>
        </div>

        <h3>2.button</h3>
        <div className="box-2">
          <span className="button">Button</span>
          <span data-icon="♚" className="button orange shield glossy">
            King
          </span>
          <span data-icon="♛" className="button pink serif round glass">
            Queen
          </span>
          <span data-icon="♞" className="button blue skew">
            Horse
          </span>
          <span className="button blue transparent">transparent</span>
          <span className="button blue oval">oval</span>
          <span className="button blue brackets">brackets</span>
          <span className="button blue knife">knife</span>
          <span className="button blue drop">drop</span>
          <span className="button blue morph">morph</span>
          <span className="button blue back">back</span>
          <span className="button blue back xl">back xl</span>
          <span disabled className="button blue skew">
            disabled
          </span>
          <span className="button green">Tab2</span>
          <span className="button orange icon xl" data-icon="✂"></span>
        </div>
      </div>
    );
  }
}
