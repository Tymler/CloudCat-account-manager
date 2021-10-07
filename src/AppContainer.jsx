import { withRouter } from "react-router-dom"
import { connect } from "react-redux"


import App from "@/App"

export default connect(
  (state) => ({
	  userInfo: state.User,
	  router: state.Router
  }),
  {}
)(withRouter(App))
