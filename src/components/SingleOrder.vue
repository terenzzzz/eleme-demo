<template>
    <div class="singleOrder">
        <van-cell value="内容" @click="goDetail(order.id)">
            <template #title>
                <span class="title">{{store.name}}</span>
                <van-icon name="arrow" />
            </template>
            <template #label>
                <img v-for="(obj,index) in picList" :key="index" :src="obj" alt="" width="35px" class="foodPic">
            </template>
            <template #default>
                <span>{{statu}}</span>
                <p class="price">￥{{order.total}}</p>
                <van-button type="default" round size="mini">再来一单</van-button>
                <van-button type="default" round size="mini" plain color="#00a0f0">去评价</van-button>
            </template>
        </van-cell>
    </div>
</template>
<script>
import { orderDetailAPI, productAPI, statuAPI, storeAPI } from '@/api'
export default {
    props: {
        order: Object,
    },
    data() {
        return {
            statu: '',
            store: {},
            productList: [],
            picList: []
        }
    },
    async created() {
        // 请求订单状态
        const res = await statuAPI(sessionStorage.getItem('token'), this.order.status)
        this.statu = res.data.data.statu
        // 查询店铺详情
        const res2 = await storeAPI({ storeId: this.order.storeId })
        // console.log(res2);
        this.store = res2.data.data[0]
        // 请求购买的产品
        const res3 = await orderDetailAPI(sessionStorage.getItem('token'), { orderId: this.order.id })
        const res3Result = res3.data.data
        // 获取对应产品信息
        res3Result.forEach((v) => {
            this.productList.push(v.productId)
        })
        // 获取对应产品照片
        this.productList.forEach(async (v) => {
            this.picList.push(await (await productAPI({ productId: v })).data.data[0].picUrl)
            if (this.picList.length >= 3) {
                this.picList = this.picList.slice(0, 3)
            }
        })

    },
    methods: {
        goDetail(orderId) {
            this.$router.push({
                path: '/orderDetail/' + orderId,
            })
        }
    }
};
</script>
<style scoped>
.title {
    font-weight: bold;
}

.foodPic {
    margin: 0 2px;
}

.singleOrder {
    border-radius: 10px;
    overflow: hidden;
    margin: 5px 10px;
}

.price {
    font-size: 16px;
    color: #00a0f0;
}

.van-button {
    width: 66px;
    margin: 0 5px;
}
</style>