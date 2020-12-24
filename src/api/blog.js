import request from '../utils/request'

/**
 * @description 获取博客列表，公共和个人
 *  */
export const getBlogList = (params) => {
    return request({
        url: '/blog/list',
        method: 'get',
        params
    })
}
/**
 * @description 上传图片
 */

export const imageUpload = () => {
    return request({
        url: '/blog/image',
        method: 'get',
        params
    })
}



