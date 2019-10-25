import React, { Component } from 'react';
import './index.scss';

export default class CssOtherNote extends Component {
  render () {
    return (
      <div className="other-note">

        <h3>1.修改单选框样式</h3>
        <div className="box-1">
          性别：
          <input type="radio" name="sex" id="man" defaultChecked />
          <label htmlFor="man">男</label>
          <input type="radio" name="sex" id="lady" />
          <label htmlFor="lady">女</label>
        </div>

        <h3>2.修改复选框的样式</h3>
        <div className="box-2">
          爱好：
          <input type="checkbox" id="read" defaultChecked />
          <label htmlFor="read">跑步</label>
          <input type="checkbox" id="swiming" />
          <label htmlFor="swiming">打球</label>
          <input type="checkbox" id="basketball" />
          <label htmlFor="basketball">读书</label>
        </div>

      </div>
    )
  }
}