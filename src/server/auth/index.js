import creator from "./decorator";

export default {
  signIn (data) {
    return creator({
	    url: '/auth/login/password',
	    method: 'post',
	    data: data
    })
  },
  signUp (data) {
    return creator({
		  url: '/auth/register/pwd',
		  method: 'post',
		  data: data
	  })
  },
  getUserInfo (data) {
    return creator({
      url: '/v2/userinfo',
      method: 'get',
      params: data
    })
  }
}
