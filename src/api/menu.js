// 导入 axios配置
import request from "@/utils/request"

// 菜单页- 产品信息
export const menu = params => request({
    url: `/api/menu/${params}`
})

// 菜单页- 店铺信息
export const store = params => request({
    url: `/api/store`,
    params
})
