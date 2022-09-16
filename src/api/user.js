// 导入 axios配置
import request from "@/utils/request"

// 注册页- 注册用户
export const register = (params) => request({
    url: `/api/register`,
    method: 'post',
    data:params
})

// 注册页- 登录用户
export const login = (params) => request({
    url: `/api/login`,
    method: 'post',
    data:params
})

// 主页- 用户主页
export const userInfo = (params) => request({
    url: `/my/userinfo`,
    headers: {
        'Authorization': params
    }
})

// 获取用户基本联系方式
export const user = (params) => request({
    url: `/api/user`,
    params
})

//主页- 功能区
export const functions = () => request({
    url:`/api/functions`
})

