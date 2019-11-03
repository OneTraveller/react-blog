export default {
  box_3_1: [
    'display: grid;',
    'grid-template-columns: 50px 50px 50px;',
    'grid-template-rows: 50px 50px;'
  ],
  box_3_2: [
    'display: grid;',
    'grid-template-columns: 33.33% 33.33% 33.33%;',
  ],
  box_3_3: [
    'display: grid;',
    'grid-template-columns: repeat(3, 33.33%);',
  ],
  box_3_4: [
    'display: grid;',
    'grid-template-columns: 1fr 2fr;',
  ],
  box_3_5: [
    'display: grid;',
    'grid-template-columns: 1fr 1fr minmax(100px, 1fr);',
  ],
  box_3_6: [
    'display: grid;',
    'grid-template-columns: repeat(auto-fill, 200px);',
  ],
  box_3_7: [
    'display: grid;',
    'grid-template-columns: 100px auto 200px;',
  ],
  box_3_8: [
    'display: grid;',
    'grid-template-columns: 20% 80%;',
  ],
  box_4_1: [
    'grid-gap: <grid-row-gap> <grid-column-gap>;'
  ],
  box_4_2: [
    'display: grid;',
    'grid-template-columns: repeat(3, 1fr)',
    'grid-gap: 20px 30px;',
  ],
  box_5: [
    'display: grid;',
    'grid-template-columns: repeat(3, 50px)',
    'grid-template-rows: repeat(3, 50px)',
    'grid-auto-flow: column;',
  ],
  box_6_1: [
    'justify-items: start | end | center | stretch;',
    'align-items: start | end | center | stretch;',
    'start：对齐单元格的起始边缘',
    'end：对齐单元格的结束边缘',
    'center：单元格内部居中',
    'stretch：拉伸，占满单元格的整个宽度（默认值）',
  ],
  box_6_2: [
    'place-items: <align-items> <justify-items>;'
  ],
  box_6_3: [
    'display: grid;',
    'grid-template-columns: repeat(3, 1fr)',
    'grid-template-rows: repeat(2, 50px)',
    'place-items: start end;',
  ],
  box_7_1: [
    'justify-content: start | end | center | stretch | space-around | space-between | space-evenly;',
    'align-content: start | end | center | stretch | space-around | space-between | space-evenly;',
    'start - 对齐容器的起始边框',
    'end - 对齐容器的结束边框',
    'center - 容器内部居中',
    'stretch - 项目大小没有指定时，拉伸占据整个网格容器',
    'space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍',
    'space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔',
    'space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔',
  ],
  box_7_2: [
    'place-content: <align-content> <justify-content>'
  ],
  box_7_3: [
    'display: grid;',
    'grid-template-columns: repeat(3, 200px)',
    'grid-template-rows: repeat(2, 50px)',
    'place-content: space-around space-evenly;'
  ],
  box_8_1: [
    'grid-column-start属性：左边框所在的垂直网格线',
    'grid-column-end属性：右边框所在的垂直网格线',
    'grid-row-start属性：上边框所在的水平网格线',
    'grid-row-end属性：下边框所在的水平网格线',
  ],
  box_8_2: [
    '.item-1 {',
    'grid-column-start: 1;',
    'grid-column-end: 3;',
    'grid-row-start: 2;',
    'grid-row-end: 4;',
    '}'
  ],
  box_8_3: [
    '.item-1 {',
    'grid-column-start: span 2;',
    '}',
  ],
  box_8_4: [
    '.item-1 {',
    'grid-column: 1 / 3;',
    'grid-row: 1 / 2;',
    '}',
    '/* 等同于 */',
    '.item-1 {',
    'grid-column-start: 1;',
    'grid-column-end: 3;',
    'grid-row-start: 1;',
    'grid-row-end: 2;',
    '}',
  ],
  box_8_5: [
    '.item {',
    'grid-area: <row-start> / <column-start> / <row-end> / <column-end>;',
    '}',
  ],
  box_9_1: [
    '.item {',
    'justify-self: start | end | center | stretch;',
    'align-self: start | end | center | stretch;',
    '}',
  ],
  box_9_2: [
    'start：对齐单元格的起始边缘。',
    'end：对齐单元格的结束边缘。',
    'center：单元格内部居中。',
    'stretch：拉伸，占满单元格的整个宽度（默认值）。',
  ],
  box_9_3: [
    '.item-1  {',
    'justify-self: end;',
    '}',
  ],
};
