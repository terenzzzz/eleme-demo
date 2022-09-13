// 导入 axios配置
import request from "@/utils/request"


// 状态码查询订单状态
export const statu = (token,statuId) => request({
    url: `/my/statu`,
    headers: {
        'Authorization': token
    },
    params:{statuId:statuId}
})