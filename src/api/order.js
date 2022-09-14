// 导入 axios配置
import request from "@/utils/request"


// 订单页- 用户订单
export const orders = (params) => request({
    url: `/my/orders`,
    headers: {
        'Authorization': params
    }
})

export const order = (token,params) => request({
    url: `/my/orders`,
    headers: {
        'Authorization': token
    },
    params
})

// 订单页- 订单详情
export const orderDetail = (token,params) => request({
    url: `/my/orderDetail`,
    headers: {
        'Authorization': token
    },
    params
})