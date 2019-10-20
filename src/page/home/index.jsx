import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './home.scss';
import Option from './option';
import HomeRouter from '../../router/HomeRouter'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Home extends Component {

  componentDidMount () {
    this.props.history.push({ pathname: 'home' });
  }

  jump (path) {
    this.props.history.push({ pathname: path });
  }

  render () {
    return (
      <Layout className="home-page">
        <Header className="header">
          <div className="logo"></div>
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
