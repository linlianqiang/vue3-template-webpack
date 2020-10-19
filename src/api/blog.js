import request from '../utils/request'

// 获取博客列表，公共和个人
export const blogList = (params) => {
  return request({
    url: '/sina/api/blog/list',
    method: 'get',
    params
  })
}

//获取用户绑定的板块，不传代表所有
export const getTopic = () => {
  return request({
    url: '/sina/getTopic',
    method: 'get'
  })
} 
// 
