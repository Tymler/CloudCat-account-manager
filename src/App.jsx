import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom"

import { Col, Layout, Menu, Row } from "antd"
const { Header, Sider, Content } = Layout
import {
  DollarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  AndroidOutlined
} from "@ant-design/icons";

import '@/App.scss';

import AuthButton from '@/components/auth-button/Container';
import Auth from "@/components/auth/Container";
import Home from "@/components/home/Home";

function App (props) {
  // data
  const history = useHistory()
  const { userInfo, location } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState('user')
  // watch
  useEffect(() => {
    if (location.pathname.includes('/home/')) {
      setSelectedKeys(location.pathname.replace('/home/', ''))
    } else {
      setSelectedKeys('')
    }
  }, [location])
  // methods
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const onMenuSelect = (item) => {
    setSelectedKeys(item.key)
    history.push('/home/' + item.key)
  }
  // components
  const sideMenu = (
    <Menu
      defaultSelectedKeys={['']}
      mode="inline"
      selectedKeys={selectedKeys}
      onSelect={onMenuSelect}
    >
      <Menu.Item key="user" icon={<UserOutlined />}>
        User
      </Menu.Item>
      <Menu.Item key="bots" icon={<AndroidOutlined />}>
        Bots
      </Menu.Item>
      <Menu.Item key="purchase" icon={<DollarOutlined />}>
        Purchase
      </Menu.Item>
      <Menu.Item key="env" icon={<SettingOutlined />}>
        Environment
      </Menu.Item>
    </Menu>
  )
  return (
    <div data-component-app className="app-container">
      <Layout className="full-container">
        <Sider
          className="side-bar"
          theme="light"
          collapsed={collapsed}
        >
          <div className={'logo' + (collapsed ? ' folded' : ' unfold')}>
            <div className="logo__icon">
              <img
                src={require('@/assets/images/logo_blue.svg').default}
              />
            </div>
            <div className="logo__name">
              <p className="title">CloudCat</p>
              <p className="sub-title">Account Manager</p>
            </div>
          </div>
          {sideMenu}
        </Sider>
        <Layout className="full-container">
          <Header className="header">
            <Row
              className="content-options-bar"
              justify="space-between"
              align="middle">
              <Col flex="40px">
                {
                  collapsed
                    ? (<MenuUnfoldOutlined className="icon-fold" onClick={toggle} />)
                    : (<MenuFoldOutlined className="icon-fold" onClick={toggle}/>)
                }
              </Col>
              <Col flex="40px">
                <AuthButton />
              </Col>
            </Row>
          </Header>
          <Content className="content-wrapper">
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/home" component={Home} />
              <Redirect to="/home" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
