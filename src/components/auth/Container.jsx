import { connect } from "react-redux"

import { userChange, setUserInfo, getUserInfo } from "@/redux/actions"
import Auth from "./Auth";

export default connect(
  (state) => ({ userInfo: state.User }),
  {
	  userChange,
    setUserInfo,
	  getUserInfo
  }
)(Auth)
