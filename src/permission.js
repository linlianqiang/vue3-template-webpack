import Store from './store'
// 登录用户
const openId = 123456
const nickName = "测试"
Store.dispatch('getUserInfo', { openId, nickName })

