import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"

import { Space, Button, Menu, Dropdown } from "antd";

import UserCard from "@/widget/user-card/UserCard";

export default function User (props) {
  // data
  const history = useHistory()
  const { userInfo } = props
  const { clearUserInfo } = props
  const [isLogin, setIsLogin] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [userName, setUserName] = useState('')
  const [nickname, setNickname] = useState('')
  const [uid, setUid] = useState(0)
  // watch
  useEffect(() => {
    setIsLogin(userInfo.token)
    setAvatar(userInfo.avatar_url)
    setNickname(userInfo.nickname)
    setUserName(userInfo.user_name)
    setUid(userInfo.uid)
  }, [userInfo])
  // methods
  const goSignUp = () => {
    history.push('/auth/signup')
  }
  const goSignIn = () => {
    history.push('/auth/signin')
  }
  const doSignOut = () => {
    console.log('doSignOut')
    clearUserInfo()
    goSignIn()
  }
  const onDropdownSelect = (item) => {
    console.log(item)
    switch (item.key) {
      case 'signOut':
        doSignOut()
        break
      default:
        console.log(item)
    }
  }
  // component
  const userDropdown = (
    <Menu onClick={onDropdownSelect}>
      <Menu.Item key="signOut">
        <p>Sign Out</p>
      </Menu.Item>
    </Menu>
  )
  return (
    <div data-component-auth-button>
      {
        isLogin
          ? (
            <Dropdown overlay={userDropdown} placement="bottomRight">
              <div>
                <UserCard
                  avatar={avatar}
                  title={nickname || userName}
                  description={"UID:" + uid}
                />
              </div>
            </Dropdown>
          )
          : (
            <Space>
              <Button onClick={goSignUp} type="primary">Sign Up</Button>
              <Button onClick={goSignIn}>Sign In</Button>
            </Space>
          )
      }
    </div>
  )
}
