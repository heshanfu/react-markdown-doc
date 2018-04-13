import React, { PureComponent, Fragment } from 'react'
import { Layout as LayoutAnt, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = LayoutAnt

import { Link } from 'react-router-dom'
import './style.scss'

class Layout extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  render = () => {
    return (
      <Fragment>
        <LayoutAnt>
          <Header className='header' style={{ padding: '0' }}>
            <div className='logo' />
            <Menu
              theme='light'
              mode='horizontal'
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', height: 'inherit', borderBottom: 'solid 1px #E8E8E8' }}
            >
              <Menu.Item key='109'>Home</Menu.Item>

              <Menu.Item key='1' style={{ float: 'right' }}>
                <Link to='/a'>Option 2</Link>
              </Menu.Item>
              <Menu.Item key='1098' style={{ float: 'right' }}>
                <Link to='/'>Applications</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <LayoutAnt>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={(collapsed) => this.setState({ collapsed })}
              style={{ marginTop: '0' }}
            >
              <div className='logo' />
              <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' style={{ minHeight: '100vh' }}>
                <Menu.Item key='option_test' style={{ marginTop: '0' }}>
                  <Icon type='desktop' />
                  <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                  key='sub1'
                  title={<span><Icon type='user' /><span>User</span></span>}
                >
                  <Menu.Item key='1'>
                    <Link to='/a'>Option 1</Link>
                  </Menu.Item>
                  <Menu.Item key='2'>
                    <Link to='/'>Option 2</Link>
                  </Menu.Item>
                  <Menu.Item key='4'>Bill</Menu.Item>
                  <Menu.Item key='5'>Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                  key='sub2'
                  title={<span><Icon type='team' /><span>Team</span></span>}
                >
                  <Menu.Item key='6'>Team 1</Menu.Item>
                  <Menu.Item key='8'>Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key='9'>
                  <Icon type='file' />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <LayoutAnt style={{ padding: '0' }}>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {this.props.children}
              </Content>
            </LayoutAnt>
          </LayoutAnt>
        </LayoutAnt>
      </Fragment>
    )
  }
}

export { Layout }
