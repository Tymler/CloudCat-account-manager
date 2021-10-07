import { connect } from "react-redux"

import UserCenter from "./UserCenter";

export default connect(
  (state) => ({ userInfo: state.User })
)(UserCenter)
