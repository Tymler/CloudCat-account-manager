import React from "react";

import { Avatar } from "antd"

import "./UserCard.scss";

export default function UserCard (props) {
  const { avatar, title, description } = props
  return (
    <div data-component-user-card className="empty">
      <div className="user-card">
        <Avatar src={avatar} />
        <div className="user-card__details">
          <p className="title">{title}</p>
          <p className="desc">{description}</p>
        </div>
      </div>
    </div>
  )
}
