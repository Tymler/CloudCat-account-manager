import { notification } from "antd";

function code (AxiosResponse) {
  notification.error({
    message:
			'[ ' + AxiosResponse.data.code + ' ] ' + AxiosResponse.data.msg,
    description: AxiosResponse.request.responseURL
  })
}
function status (AxiosResponse) {
  notification.error({
    message:
			'[ ' + AxiosResponse.status + ' ] ' + AxiosResponse.statusText,
    description: AxiosResponse.request.responseURL
  })

}
function request (error) {
  notification.error({
    message: error.message,
    description: error.request.responseURL
  })
}

export default {
  code,
  status,
  request
}
