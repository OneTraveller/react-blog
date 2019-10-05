import React, { Component } from 'react';
import { Icon, Input, Button, message } from 'antd';
import { post } from '../../server/api';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  };

  async handleSubmit () {
    const { username, password } = this.state;
    if (username && password) {
      const res = await post('/login', { username, password }) || {};
      if (!res.state) {
        if (res.msg === 'password err') {
          message.error('密码错误');
        } else if (res.msg === 'username err') {
          message.error('用户名不存在');
        }
      }
      if (res.state) this.props.history.push({ pathname: 'home' });
    } else {
      message.error('请填写用户名和密码');
    }
  };

  changeVal (e, type) {
    this.setState({ [type]: e.target.value })
  };

  render () {
    return (
      <div className="login-page">
        <div className="login-contaier">
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            onChange={e => this.changeVal(e, 'username')}
          />
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            onChange={e => this.changeVal(e, 'password')}
          />
          <Button type="primary" onClick={this.handleSubmit.bind(this)} className="login-form-button">
            登录
          </Button>
          {/* <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button> */}
        </div>
      </div>
    );
  }
}
