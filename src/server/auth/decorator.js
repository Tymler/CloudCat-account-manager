import axios from "axios";

import errorHandler from "../errorHandler";

import EnvManager from "../../env/EnvManager"
import Drawer from "../../classes/tools/Drawer";
import store from "@/redux/store";

function getAuthUrl () {
  return EnvManager.current.SERVICE_URL
}
// eslint-disable-next-line no-unused-vars
function getPaymentUrl () {
  return EnvManager.current.PAYMENT_URL
}

function getToken () {
  return store.getState().User.token
}

function getAgent () {
  return 'pc-web'
}

const authDrawer = new Drawer()
const authAxios = axios.create({
  timeout: 8000
})
authAxios.interceptors.request.use(
  (configs) => (
	  configs.baseURL = getAuthUrl(),
    configs.headers = {
      token: getToken(),
      ApiVersion: 'v1',
      language: 'en-US',
      agent: getAgent()
    }
    , configs
  )
  ,
  (error) => {
    console.log('axios request,', error)
    return Promise.reject({
      failed: true,
      reason: 'error in request',
      error
    })
  }
)
authAxios.interceptors.response.use(
  (AxiosResponse) => {
    if (AxiosResponse.status === 200) {
      AxiosResponse.data['success'] = AxiosResponse.data.code === 0
      if (!AxiosResponse.data.success) {
        console.log(AxiosResponse)
        errorHandler.code(AxiosResponse)
      }
      return AxiosResponse.data
    } else {
      errorHandler.status(AxiosResponse)
      return Promise.reject({
		    failed: true,
		    reason: 'status:' + AxiosResponse.status,
		    response: AxiosResponse.data
	    })
    }
  },
  (error) => {
    console.log('axios response,', error)
    errorHandler.request(error)
    return Promise.reject({
      failed: true,
      reason: 'error in response',
      error
    })
  }
)

export default function authRequestCreator (axiosParams, config) {
  // eslint-disable-next-line no-unused-vars
  config = Object.assign({}, { force: false }, config)
  if (authDrawer.has(axiosParams.url)) {
    return authDrawer.get(axiosParams.url)
  }
  let authRequest = authDrawer.add(axiosParams.url, authAxios(axiosParams))
  authRequest
	  .then(() => authDrawer.delete(axiosParams.url))
	  .catch(() => authDrawer.delete(axiosParams.url))
  return authRequest
}
