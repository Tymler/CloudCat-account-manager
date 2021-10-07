import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom"

import "./Home.scss";

import UserCenter from "@/components/home/user-center/Container";
import MyBots from "@/components/home/my-bots/MyBots";
import Purchase from "@/components/home/purchase/Purchase";
import EnvSelector from "@/components/home/env-selector/Container";

export default function Home () {
  useEffect(() => {
  })
  return (
    <div data-component-home>
      <div className="home-wrapper">
        <Switch>
          <Route path="/home/user" component={UserCenter} />
          <Route path="/home/bots" component={MyBots} />
          <Route path="/home/purchase" component={Purchase} />
          <Route path="/home/env" component={EnvSelector} />
          <Redirect to="/home/env" />
        </Switch>
      </div>
    </div>
  )
}
