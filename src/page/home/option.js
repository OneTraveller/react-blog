export default {
  menuData: [
    {
      title: '体育',
      icon: 'user',
      key: 'key1',
      children: [
        { title: 'NBA', path: '/home' },
        { title: 'CBA', path: '/home/cba' },
      ]
    },
    {
      title: '新闻',
      icon: 'laptop',
      key: 'key2',
      children: [
        { title: '国内新闻', path: '/home/inlandNews' },
        { title: '国外新闻', path: '/home/foreignNews' },
      ]
    },
  ],
}