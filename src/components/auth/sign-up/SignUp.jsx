import React, { useEffect, useState } from "react";

import { Card, Input, Button, message } from "antd"
import { MailOutlined, KeyOutlined } from "@ant-design/icons"

import "./SignUp.scss";

export default function SignUp (props) {
  // data
  const { doSignUp } = props
  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // watch
  // created
  useEffect(() => {
    console.log('created')
    usernameRef.current.focus({
      cursor: 'end',
    });
  }, [])
  // methods
  const checkEmail = (username) => {
    console.log(username)
    return username.includes('@')
  }
  const onUsernameEnter = () => {
    passwordRef.current.focus({
      cursor: 'end',
    });
  }
  const onPasswordEnter = () => {
    signUpClickHandler()
  }
  const signUpClickHandler = () => {
    if (checkEmail(username)) {
      doSignUp(username, password)
    } else {
      message.error('Username must contains "@"')
    }
  }
  // component
  return (
    <div data-component-sign-up>
      <div className="">
        <Card title="Sign Up">
          <Input
            ref={usernameRef}
            className="input"
            placeholder="Username"
            prefix={<MailOutlined />}
            value={username}
            onChange={
              ((event) => setUsername(event.target.value))
            }
            onPressEnter={onUsernameEnter}
          />
          <Input
            ref={passwordRef}
            className="input"
            placeholder="Password"
            type="password"
            prefix={<KeyOutlined />}
            value={password}
            onChange={
              ((event) => setPassword(event.target.value))
            }
            onPressEnter={onPasswordEnter}
          />
          <Button
            className="btn-sign-up"
            type="primary"
            onClick={signUpClickHandler}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  )
}
