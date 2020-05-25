/*
 * @description: 放大镜
 * @time: 2020-05-24
 */

import React, { Component } from 'react';
import './index.scss';

export default class Zoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbs: [{ active: true }, {}, {}, {}],
      normalImgUrl: '',
      show: false,
    };
    this.clickThumb = this.clickThumb.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  componentWillMount() {
    const thumbs = this.state.thumbs.map((item, index) => {
      const url = require(`./img/thumb/${index + 1}.jpg`);
      const imgUrl = `url("${url}")`;
      return { ...item, imgUrl };
    });
    const normalImgUrl = `url("${require('./img/big/1.jpg')}")`;
    this.setState({ thumbs, normalImgUrl });
  }

  clickThumb(index) {
    const thumbs = this.state.thumbs.map((item, i) => ({
      ...item,
      active: index === i,
    }));
    const normalImgUrl = `url("${require(`./img/big/${index + 1}.jpg`)}")`;
    this.setState({ thumbs, normalImgUrl });
  }

  onMouseMove({ pageX, pageY }) {
    this.setState({ show: true });
    const normalImg = this.refs.normalImg.getBoundingClientRect();
    const bigImg = this.refs.bigImg;
    const bigImgStyle = bigImg.getBoundingClientRect();
    // 设置滑块的位置
    const slidingBlock = this.refs.slidingBlock;
    const { width, height } = slidingBlock.getBoundingClientRect();
    let top = pageY - normalImg.top - height / 2;
    let left = pageX - normalImg.left - width / 2;
    top = Math.min(top, normalImg.height - height);
    left = Math.min(left, normalImg.width - width);
    slidingBlock.style.top = Math.max(top, 0) + 'px';
    slidingBlock.style.left = Math.max(left, 0) + 'px';
    // 设置放大区域
    const bigImgTop = top * (bigImgStyle.height / height);
    const bigImgLeft = left * (bigImgStyle.width / width);
    bigImg.style.backgroundPositionY = `-${bigImgTop}px`;
    bigImg.style.backgroundPositionX = `-${bigImgLeft}px`;
  }

  onMouseOut() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="zoom-content">
        <div className="left">
          <div
            ref="normalImg"
            className="normal-img"
            onMouseMove={this.onMouseMove}
            onMouseOut={this.onMouseOut}
            style={{ backgroundImage: this.state.normalImgUrl }}
          >
            <div
              ref="slidingBlock"
              className={`sliding-block ${this.state.show ? '' : 'hide'}`}
            ></div>
          </div>
          <div className="thumb-img">
            {this.state.thumbs.map((item, index) => (
              <div
                key={index}
                className={`thumb-item ${item.active ? 'active' : ''}`}
                style={{ backgroundImage: item.imgUrl }}
                onClick={() => this.clickThumb(index)}
              ></div>
            ))}
          </div>
        </div>
        <div
          ref="bigImg"
          className={`right ${this.state.show ? '' : 'hide'}`}
          style={{ backgroundImage: this.state.normalImgUrl }}
        ></div>
      </div>
    );
  }
}
