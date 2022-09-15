// 导入 axios配置
import request from "@/utils/request"


// 设置页面 - 修改昵称
export const nickName = (token,nickname) => request({
    url: `/my/editNickname`,
    method:"POST",
    headers: {
        'Authorization': token
    },
    data:nickname
})

// 设置页面 - 修改生日
export const birth = (token,birth) => request({
    url: `/my/editBirth`,
    method:"POST",
    headers: {
        'Authorization': token
    },
    data:birth
})

// 设置页面 - 修改邮箱
export const email = (token,email) => request({
    url: `/my/editEmail`,
    method:"POST",
    headers: {
        'Authorization': token
    },
    data:email
})

// 设置页面 - 修改密码
export const password = (token,params) => request({
    url: `/my/editPassword`,
    method:"POST",
    headers: {
        'Authorization': token
    },
    data: params
})