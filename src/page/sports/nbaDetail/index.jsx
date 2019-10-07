import React, { Component } from 'react';
import './nbaDetail.scss';
import { post, HTTP_ORIGIN } from '../../../server/api';

export default class NBADetail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  async componentWillMount () {
    const id = this.props.match.params.id;
    const res = await post('/home/nba/detail', { id });
    if (res && res.state) this.setState({ data: res.data });
  }

  render () {
    const data = this.state.data || {};
    return (
      <div className="nba-detail">
        <h1>{data.title}</h1>
        <div className="content">
          <div className="img">
            {data.img ? <img src={HTTP_ORIGIN + data.img} alt="" /> : <span></span>}
          </div>
          <div className="text">
            {data.content}
          </div>
        </div>
      </div>
    )
  }
}