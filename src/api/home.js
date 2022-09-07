// 导入 axios配置
import request from "@/utils/request"

// 首页- 分类图标
export const categories = params => request({
    url: '/api/categories',
    params
})

//首页- 店铺信息
export const stores = params => request({
    url: '/api/stores',
    params
})