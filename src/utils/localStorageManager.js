export function setEnv (key = '') {
  window.localStorage.setItem('env', key)
}
export function loadEnv () {
  return window.localStorage.getItem('env') || ''
}
export function setLocalLoginInfo (loginInfo) {
  window.localStorage.setItem('token', loginInfo.token || '')
  window.localStorage.setItem('uid', loginInfo.uid || '')
}
export function loadLocalLoginInfo () {
  return {
    token: window.localStorage.getItem('token') || '',
    uid: window.localStorage.getItem('uid') || ''
  }
}
export function clearLoginInfo () {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('uid')
}
