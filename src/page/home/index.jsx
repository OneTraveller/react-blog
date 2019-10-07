import React, { Component } from 'react';
import { Layout, Menu, Icon, Modal } from 'antd';
import HomeRouter from '../../router/HomeRouter';
import './home.scss';
import Option from './option';
import { store } from '../../store';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Home extends Component {
  /* constructor(props) {
    super(props);
    this.state = { Option };
  } */

  quit () {
    const _this = this;
    Modal.confirm({
      title: '消息提示',
      content: '确定要退出吗？',
      onOk () {
        _this.props.history.push({ pathname: '/' })
      },
      okText: "确认",
      cancelText: "取消"
    });
  };

  jump (path) {
    this.props.history.push({ pathname: path });
  }

  render () {
    return (
      <Layout className="home-page">
        <Header className="header">
          <div className="logo"></div>
          <div className="username">
            <span>{(store.getState().userInfo || {}).name}</span>
            <span onClick={this.quit.bind(this)}>退出</span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['key1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {Option.menuData.map((item, index) => {
                return (
                  <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon} />{item.title}</span>}
                  >
                    {item.children.map((menuItem, key) => {
                      return <Menu.Item key={key + index++} onClick={() => this.jump(menuItem.path)}>
                        {menuItem.title}
                      </Menu.Item>
                    })}
                  </SubMenu>
                )
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <HomeRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
