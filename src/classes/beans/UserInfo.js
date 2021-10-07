class UserInfo {
  avatar_url = ''
  days_left = 0
  days_left_specific = ''
  donation = false
  expire_time = ''
  invitation_code = ''
  is_register = false
  is_subscribe = false
  nickname = ''
  register_time = 0
  seconds_left = 0
  uid = 0
  user_group = ''
  user_name = ''
  vip_type = ''
  token = ''
  constructor (userInfo = {}) {
    Object.assign(this, userInfo)
  }
  assign (data) {
    Object.assign(this, data)
  }
}

export default UserInfo
