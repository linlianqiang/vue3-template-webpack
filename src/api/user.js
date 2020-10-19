import request from '../utils/request'

// 用户登录
export const userLogin = (data) => {
  return request({
    url: '/sina/api/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sina/api/user/info',
    method: 'post'
  })
}
