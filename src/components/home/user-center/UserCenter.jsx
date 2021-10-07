import React, { useEffect, useState } from "react";

import "./UserCenter.scss";

export default function UserCenter (props) {
  const { userInfo } = props
  const [paramsList, setParamsList] = useState([])
  const convert = (userInfo) => (
    Object.keys(userInfo).reduce((total, key) => (
      total.push(key + ':' + userInfo[key]), total
    ), [])
  )
  useEffect(() => {
    setParamsList(convert(userInfo))
  }, [userInfo])
  return (
    <div data-component-user-center>
      <div className="">
        <p>Component UserCenter</p>
        {paramsList.map((item, index) => (<p key={index}>{item}</p>))}
      </div>
    </div>
  )
}
