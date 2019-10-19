import React, { Component } from 'react';
import './css2.scss';

export default class Css2 extends Component {
  render () {
    return (
      <div className="css2-page">
        <h1>读css世界实用技巧</h1>

        <h3>1. border扩大点击区域</h3>
        <p>
          扩大点击区域可以使用padding或者透明border增加元素的点击区域大小。其中，首推透明border方法，原因很简单，假设我们的图标是使用工具生成的，那么
          background-position就是限定死的值，若再使用padding撑开间距，就会遇到定位不准的问题。但是，若是使用透明border增加点击区域，则无此问题，只要合并时留下足够的间距就可以了。
        </p>
        <button>click</button>

        <h3>2.max-width的权限比important大</h3>
        <div className="box-2">
          <p>max-width: 200px</p>
          <p>width: 500px!important</p>
          <p>最终width为200px</p>
        </div>

        <h3>3.max-height与任意高度元素滑动展开收起效果实例</h3>
        <div className="box-3">
          <input type="checkbox" id="check" />
          <div></div>
          <label htmlFor="check" className="check-in">更多↓</label>
          <label htmlFor="check" className="check-out">收起↑</label>
        </div>

        <h3>4.打点loading效果</h3>
        <div>原理：使用content换行生成三行点点，第一行三个点，第二行两个点，第三一个点，然后用动画上线滚动</div>
        <div className="box-4">
          正在加载中<i>...</i>
        </div>

        <h3>5.src缺省设置alt信息展示</h3>
        <div>原理：用content: attr(alt) 显示alt文字信息</div>
        <div className="box-5">
          <img alt="平安金融中心" />
        </div>

        <h3>6.模仿打字效果</h3>
        <div>原理：用动画使width逐渐增大，右边框用动画显示隐藏模拟鼠标</div>
        <div className="box-6">
          前端路慢慢其修远兮，吾将上下而求索
        </div>

        <h3>7.padding与图形生成实例页面</h3>
        <div>利用background-clip: content-box实现</div>
        <div className="box-7">
          <i className="icon-menu"></i>
          <i className="icon-dot"></i>
        </div>

        <h3>8.border实现等高</h3>
        <div className="box-8">
          <nav>
            <h3 className="nav-item">导航1</h3>
            <h3 className="nav-item">导航1</h3>
          </nav>
          <section>
            <div className="module">模块1</div>
            <div className="module">模块1</div>
            <div className="module">模块1</div>
          </section>
        </div>

        <h3>9.width的流动性</h3>
        <p>所谓流动性，并不是看上去的宽度100%显示这么简单，而是一种margin/border/padding和content内容区域自动分配水平空间的机制。</p>
        <div className="box-9">
          <h4>无宽度，借助流动性</h4>
          <div className="nav">
            <span className="nav-a">导航1</span>
            <span className="nav-a">导航2</span>
          </div>
          <h4>width:100%</h4>
          <div className="nav">
            <span className="nav-a width">导航1</span>
            <span className="nav-a width">导航2</span>
          </div>
        </div>

        <div className="box-10">

        </div>

      </div>
    )
  }
}