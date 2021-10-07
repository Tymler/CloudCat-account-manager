import React, { useEffect, useState } from "react";

import { Card, Input, Button } from "antd"
import { MailOutlined, KeyOutlined } from "@ant-design/icons"

import "./SignIn.scss";

export default function SignIn (props) {
  // data
  const { doSignIn } = props
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
  const onUsernameEnter = () => {
    passwordRef.current.focus({
      cursor: 'end',
    });
  }
  const onPasswordEnter = () => {
    signInClickHandler()
  }
  const signInClickHandler = () => {
    doSignIn(username, password)
  }
  // component
  return (
    <div data-component-sign-in>
      <div className="">
        <Card title="Sign In">
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
            className="btn-sign-in"
            onClick={signInClickHandler}
          >
            Sign In
          </Button>
        </Card>
      </div>
    </div>
  )
}
