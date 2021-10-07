import { connect } from "react-redux"

import { clearUserInfo } from "@/redux/actions"
import EnvSelector from "./EnvSelector";

export default connect(
  (state) => ({ userInfo: state.User }),
  { clearUserInfo }
)(EnvSelector)
