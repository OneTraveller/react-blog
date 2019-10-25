import React, { Component } from 'react';
import './index.scss';
import imgUrl from '../../../static/img/ai.jpg';
import imgUrl2 from '../../../static/img/ai2.jpg';

export default class ZTeacherBlogNote extends Component {
  render () {
    return (
      <div className="blog-note">
        <h1>读张老师博客笔记</h1>

        <h3>1.饼图</h3>
        <div className="box-1">
          <div className="circle-1">
            <p>80%大小</p>
            <div className="pie-simple" style={{ '--percent': 80 }}>
              <div className="pie-left"></div>
              <div className="pie-right"></div>
            </div>
          </div>
          <div className="circle-2">
            <p>具有动画效果</p>
            <div className="pie-spin2">
              <div className="pie-spin2-left"></div>
              <div className="pie-spin2-right"></div>
            </div>
          </div>
        </div>

        <h3>2.流动</h3>
        <div className="box-2 flow-colorful"></div>

        <h3>3.滚动指示器</h3>
        <div className="box-3">
          <div className="outer">
            <div className="inner"></div>
          </div>
          <div className="mask"></div>
        </div>

        <h3>4.滤镜 filter</h3>
        <div className="box-4">
          原图：<img src={imgUrl} alt="" />
          处理后：<img src={imgUrl} alt="" />
        </div>

        <h3>5.波浪线</h3>
        <div className="box-5">
          滚动的波浪线，不停的滚呀
        </div>

        <h3>6.贪吃蛇边框</h3>
        <div className="box-6">
          <div className="box"></div>
        </div>

        <h3>7.滚动的边框</h3>
        <div className="box-7">
          <div className="content"></div>
        </div>

        <h3>8.透明方格的绘制</h3>
        <div className="box-8"></div>

        <h3>9.镂空</h3>
        <div className="box-9">
          <div className="clip-shape"></div>
          <div className="clip-img">
            <img src={imgUrl} alt="" />
          </div>
        </div>

        <h3>10.过场动效</h3>
        <div className="box-10">
          <img src={imgUrl2} className="shape-hollow" alt="" />
        </div>

        <h2 style={{ 'marginTop': '100px' }}>
          参考链接：
          <a href="https://www.zhangxinxu.com/wordpress/category/css/" target="_blank" rel="noopener noreferrer">
            https://www.zhangxinxu.com/wordpress/category/css/
          </a>
        </h2>

      </div>
    )
  }
}