import { combineReducers } from "redux"

import User from "@/redux/reducers/user"
import Router from "@/redux/reducers/router"

export default combineReducers({
  User,
  Router
})
