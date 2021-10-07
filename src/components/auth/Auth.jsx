import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Auth.scss";
import $api from "@/server";

import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";

export default function Auth (props) {
  // data
  const history = useHistory()
  const method = props.match.params.method
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
        {method === 'signin' ? <SignIn doSignIn={doSignIn} /> : ''}
        {method === 'signup' ? <SignUp doSignUp={doSignUp} /> : ''}
      </div>
    </div>
  )
}
