import UserInfo from "@/classes/beans/UserInfo";

import * as userActionTypes from "@/redux/reducers/user/action-types"
const { SET_USERINFO, CLEAR_USERINFO } = userActionTypes

export default function (state = new UserInfo(), action) {
  console.log('getAction', action)
  switch (action.type) {
    case SET_USERINFO:
      return new UserInfo(Object.assign(state, action.payload))
    case CLEAR_USERINFO:
      return new UserInfo()
    default:
      return state
  }
}
