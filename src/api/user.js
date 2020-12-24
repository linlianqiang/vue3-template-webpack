import request from '../utils/request'

// 用户登录
export const userLogin = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

