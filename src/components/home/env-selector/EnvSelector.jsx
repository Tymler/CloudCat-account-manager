import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Card, Button } from "antd"

import "./EnvSelector.scss";

import EnvManager from "@/env/EnvManager";

function EnvCardList (props) {
  const { onSelect } = props
  const [env, setEnv] = useState(EnvManager.getList())
  const [envSelected, setEnvSelected] = useState(EnvManager.selected)
  const gridLabelStyle = {
    width: '25%',
    textAlign: 'left',
  }
  const gridContentStyle = {
    width: '75%',
    textAlign: 'left',
  }
  const envCardList = Object.keys(env).reduce((domList, key, index) => {
    const { name, WEBSITE_URL, SERVICE_URL, PAYMENT_URL } = env[key]
    domList.push((
      <Card
        className="env-card"
        key={key + index}
        title={name}
        extra={
          <Button
            disabled={key === envSelected}
            onClick={() => (onSelect(key))}
          >
            {key === envSelected ? 'Selected' : 'Select'}
          </Button>
        }
      >
        <Card.Grid hoverable={false} style={gridLabelStyle}>
          Website
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridContentStyle}>
          {WEBSITE_URL}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridLabelStyle}>
          App Service
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridContentStyle}>
          {SERVICE_URL}
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridLabelStyle}>
          Payment
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridContentStyle}>
          {PAYMENT_URL}
        </Card.Grid>
      </Card>
    ))
    return domList
  }, [])
  return (
    <div>
      {envCardList}
    </div>
  )
}

export default function EnvSelector (props) {
  // data
  const history = useHistory()
  const { clearUserInfo } = props
  // methods
  const afterChangeEnv = () => {
    clearUserInfo()
    history.push('/auth/signin')
  }
  const onSelect = (key) => {
    EnvManager.setEnv(key)
    afterChangeEnv()
  }
  return (
    <div data-component-env-selector>
      <div className="wrapper">
        <EnvCardList onSelect={onSelect} />
      </div>
    </div>
  )
}
