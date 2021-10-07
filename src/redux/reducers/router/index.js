import * as routerActionTypes from "@/redux/reducers/router/action-types"
const { ROUTER_PUSH } = routerActionTypes

export default function (state = '', action) {
  switch (action.type) {
    case ROUTER_PUSH:
      return action.payload
    default:
      return state
  }
}
