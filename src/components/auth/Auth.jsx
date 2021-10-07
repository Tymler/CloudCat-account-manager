import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import "./Auth.scss";
import $api from "@/server";

import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";

export default function Auth (props) {
  // data
  const history = useHistory()
  const { userChange } = props
  // created
  useEffect(() => {
  }, [])
  // methods
  const doSignIn = (username, password) => {
    $api.auth.signIn({
      username: username,
      password: password
    })
      .then((res) => {
        console.log(res)
        if (res.success) {
          userChange(res.data)
          history.push('/home/user')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const doSignUp = (username, password) => {
    $api.auth.signUp({
      // deviceId: '0000000000000-00000000-0000-0000-0000-000000000000',
      deviceId: 'cloudcat-account-manager',
      userName: username,
      password: password
    })
      .then((res) => {
        console.log(res)
        if (res.success) {
          userChange(res.data)
          history.push('/home/user')
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div data-component-auth>
      <div className="auth-wrapper">
        <Switch>
          <Route
            path="/auth/signin" render={
              () => (<SignIn doSignIn={doSignIn} />)
            }
          />
          <Route
            path="/auth/signup" render={
              () => (<SignUp doSignUp={doSignUp} />)
            }
          />
        </Switch>
      </div>
    </div>
  )
}
