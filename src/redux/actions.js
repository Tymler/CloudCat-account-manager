import * as userActionTypes from "@/redux/reducers/user/action-types"
const { SET_USERINFO, CLEAR_USERINFO } = userActionTypes
import * as routerActionTypes from "@/redux/reducers/router/action-types"
const { ROUTER_PUSH } = routerActionTypes

// import store from "@/redux/store";
import $api from "@/server";
import { setLocalLoginInfo, clearLoginInfo } from "../utils/localStorageManager"

// user actions
export const userChange = (loginInfo) => (dispatch) => {
  setLocalLoginInfo(loginInfo)
  dispatch(setUserInfo(loginInfo))
  if (loginInfo.token) {
    dispatch(getUserInfo())
  }
}
export const setUserInfo = (data) => ({
  type: SET_USERINFO,
  payload: data
})
export const getUserInfo = () => (dispatch) => (
  $api.auth.getUserInfo().then((res) => {
    dispatch(setUserInfo(res.data))
  })
)
export const clearUserInfo = () => (dispatch) => {
  clearLoginInfo()
  dispatch({ type: CLEAR_USERINFO })
}
// router actions
export const routerPush = () => ({
  type: ROUTER_PUSH
})
