import { connect } from "react-redux"

import { clearUserInfo } from "@/redux/actions";

import AuthButton from "./AuthButton"

export default connect(
  (state) => ({ userInfo: state.User }),
  { clearUserInfo }
)(AuthButton)
