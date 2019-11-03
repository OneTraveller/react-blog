import React, { Component } from 'react';
import Box from '../../../components/Box';
import Code from '../../../components/Code';
import option from './option';
import './index.scss';

// 将用横杆连接的字符串转为驼峰字符串
const transump = (s) => s.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());
const transStyle = (list = []) => {
  const params = Object.create(null);
  list.forEach(item => {
    const [key, val = ''] = item.split(':');
    if (!val) return;
    params[transump(key)] = val.trim().replace(';', '');
  });
  return params;
}

export default class Grid extends Component {
  render () {
    const arr = Array.from(Array(6), (a, i) => (i + 1));
    return (
      <div className="grid-container">
        <h1>grid网格布局</h1>

        <Box bTitle="一、简介" bClass="box-1">
          网格布局（Grid）是强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。<br />
          Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。
          Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。
        </Box>

        <h3>二、容器</h3>

        <Box bTitle="1.display属性" bClass="box-2">
          display: grid指定一个容器采用网格布局。<br />
          display: inline-grid;指定div是一个行内元素，该元素内部采用网格布局。<br />
          容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。<br />
          行和列的交叉区域，称为"单元格"（cell）。<br />
          默认情况下，容器元素都是块级元素，但也可以设成行内元素。
          <div className="warn">注意: 设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。</div>
        </Box>

        <Box bTitle="2.grid-template-columns 属性，grid-template-rows 属性" bClass="box-3">
          <div>
            容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。
          </div>
          <div className="sub-title">(1) 绝对单位</div>
          <Code list={[...option.box_3_1]} />
          <div>上面代码指定了一个两行三列的网格，列宽和行高都是50px，效果如下：</div>
          <div style={{ ...transStyle(option.box_3_1) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(2) 百分比</div>
          <Code list={[...option.box_3_2]} />
          <div style={{ ...transStyle(option.box_3_2) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(3) repeat()</div>
          <div>使用repeat()函数，简化重复的值。repeat()接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。</div>
          <Code list={[...option.box_3_3]} />
          <div style={{ ...transStyle(option.box_3_3) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(4) fr 关键字</div>
          <div>为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。</div>
          <Code list={[...option.box_3_4]} />
          <div style={{ ...transStyle(option.box_3_4) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(5) minmax()</div>
          <div>minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。</div>
          <Code list={[...option.box_3_5]} />
          <div style={{ ...transStyle(option.box_3_5) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(6) auto-fill 关键字</div>
          <div>有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。</div>
          <Code list={[...option.box_3_6]} />
          <div style={{ ...transStyle(option.box_3_6) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(7) auto 关键字</div>
          <div>auto关键字表示由浏览器自己决定长度。</div>
          <Code list={[...option.box_3_7]} />
          <div>上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。</div>
          <div style={{ ...transStyle(option.box_3_7) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>

          <div className="sub-title">(8) 布局实例</div>
          <div>grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码。</div>
          <Code list={[...option.box_3_8]} />
          <div style={{ ...transStyle(option.box_3_8) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>
        </Box>

        <Box bTitle="3.grid-gap属性" bClass="box-4">
          grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式，语法如下：
          <Code list={[...option.box_4_1]} />
          grid-column-gap为行间距， grid-column-gap为列间距。如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。
          <Code list={[...option.box_4_2]} />
          <div className="border" style={{ ...transStyle(option.box_4_2) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>
          <div className="warn">提示：grid-column-gap、grid-row-gap、grid-gap可以去掉grid-前缀</div>
        </Box>

        <Box bTitle="4.grid-auto-flow 属性" bClass="box-5">
          顺序由grid-auto-flow属性决定，默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。
          <Code list={[...option.box_5]} />
          <div style={{ ...transStyle(option.box_5) }}>
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>
          grid-auto-flow属性除了设置成row和column，还可以设成row dense和column dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。
        </Box>

        <Box bTitle="5.justify-items 属性，align-items 属性，place-items 属性" bClass="box-6">
          justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。
          <Code list={[...option.box_6_1]}></Code>
          place-items属性是align-items属性和justify-items属性的合并简写形式。如果省略第二个值，则浏览器认为与第一个值相等。
          <Code list={[...option.box_6_2]}></Code>
          项目位于右上角的例子：
          <Code list={[...option.box_6_3]}></Code>
          <div style={{ ...transStyle(option.box_6_3) }} className="box-6-3">
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>
        </Box>

        <Box bTitle="6.justify-content 属性，align-content 属性，place-content 属性" bClass="box-7">
          justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）
          <Code list={[...option.box_7_1]}></Code>
          place-content属性是align-content属性和justify-content属性的合并简写形式。如果省略第二个值，浏览器就会假定第二个值等于第一个值。
          <Code list={[...option.box_7_2]}></Code>
          例子：
          <Code list={[...option.box_7_3]}></Code>
          <div style={{ ...transStyle(option.box_7_3) }} className="box-7-3">
            {arr.map(i => <div className={`item-${i}`} key={i}>{i}</div>)}
          </div>
        </Box>

        <h3>三、项目属性</h3>

        <Box bTitle="1.grid-column-start 属性，grid-column-end 属性，grid-row-start 属性，grid-row-end 属性" bClass="box-8">
          <div className="sub-title">(1) 项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。</div>
          <Code list={[...option.box_8_1]}></Code>
          设置第一个项目的例子, 除了1号项目以外，其他项目都没有指定位置，由浏览器自动布局：
          <Code list={[...option.box_8_2]} cClass="space"></Code>
          <div style={{ ...transStyle(option.box_3_1) }}>
            {
              arr.map(i => {
                if (i === 1) {
                  return <div className={`item-${i}`} key={i} style={{ ...transStyle(option.box_8_2) }}>{i}</div>
                }
                return <div className={`item-${i}`} key={i}>{i}</div>
              })
            }
          </div>
          <div className="sub-title">(2) 这四个属性的值还可以使用span关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。下面的例子1号项目的左边框距离右边框跨越2个网格</div>
          <Code list={[...option.box_8_3]} cClass="space"></Code>
          <div style={{ ...transStyle(option.box_3_1) }}>
            {
              arr.map(i => {
                if (i === 1) {
                  return <div className={`item-${i}`} key={i} style={{ ...transStyle(option.box_8_3) }}>{i}</div>
                }
                return <div className={`item-${i}`} key={i}>{i}</div>
              })
            }
          </div>
          使用这四个属性，如果产生了项目的重叠，则使用z-index属性指定项目的重叠顺序。<br />
          <div className="sub-title">(3) grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。</div>
          <Code list={[...option.box_8_4]} cClass="space"></Code>

          <div className="sub-title">(4) grid-area属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。</div>
          <Code list={[...option.box_8_5]} cClass="space"></Code>
        </Box>

        <Box bTitle="2.justify-self 属性，align-self 属性，place-self 属性" bClass="box-9">
          justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。<br />
          align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。
          <Code list={[...option.box_9_1]} cClass="space"></Code>
          取值如下：
          <Code list={[...option.box_9_2]}></Code>
          例子：
          <Code list={[...option.box_9_3]}></Code>
          <div style={{ ...transStyle(option.box_3_1) }} className="border">
            {
              arr.map(i => {
                if (i === 1) {
                  return <div className={`item-${i}`} key={i} style={{ ...transStyle(option.box_9_3) }}>{i}</div>
                }
                return <div className={`item-${i}`} key={i}>{i}</div>
              })
            }
          </div>
        </Box>

        <h2 style={{ 'marginTop': '100px' }}>
          参考链接：
          <a href="http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html" target="_blank" rel="noopener noreferrer">
            http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
          </a>
        </h2>

      </div>
    )
  }
}