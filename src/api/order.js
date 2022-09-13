// 导入 axios配置
import request from "@/utils/request"


// 订单页- 用户订单
export const orders = (params) => request({
    url: `/my/orders`,
    headers: {
        'Authorization': params
    }
})