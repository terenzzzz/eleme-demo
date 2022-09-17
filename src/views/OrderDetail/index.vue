<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="orderDetail">
        <!-- 头部 -->
        <div class="top">
            <!-- navbar  -->
            <van-nav-bar left-arrow :border="false" @click-left="onClickLeft">
                <template #left>
                    <van-icon name="arrow-left" color="white" size="20" />
                </template>
                <template #right>
                    <van-icon name="service-o" color="white" size="20" />
                </template>
            </van-nav-bar>
            <!-- 订单状态 -->
            <p class="statu-text">{{statu}}</p>
            <div class="card">
                <van-cell title="订单已送达，祝您用餐愉快">
                    <template #label>
                        <van-row class="row">
                            <van-col span="6">
                                <IconText iconText="需要帮助">
                                    <template #icon>
                                        <van-icon name="question-o" color="black" size="20" />
                                    </template>
                                </IconText>
                            </van-col>
                            <van-col span="6">
                                <IconText iconText="订单反馈">
                                    <template #icon>
                                        <van-icon name="orders-o" color="black" size="20" />
                                    </template>
                                </IconText>
                            </van-col>
                            <van-col span="6">
                                <IconText iconText="去评价">
                                    <template #icon>
                                        <van-icon name="smile-comment-o" color="black" size="20" />
                                    </template>
                                </IconText>
                            </van-col>
                            <van-col span="6">
                                <IconText iconText="再来一单">
                                    <template #icon>
                                        <van-icon name="records" color="black" size="20" />
                                    </template>
                                </IconText>
                            </van-col>
                        </van-row>
                    </template>
                </van-cell>
            </div>

        </div>
        <!-- 订单详情 -->
        <div class="detail">
            <!-- 已下单列表 -->
            <div class="foodList">
                <p class="title">{{store.name}}</p>
                <OrderItem v-for="(obj,index) in productList" :key="index" :productId="obj.productId" :num="obj.num">
                </OrderItem>
            </div>
            <!-- 费用详情 -->
            <div class="fee">
                <van-cell title="平台服务费" :border="false">
                    <template #default>
                        <span>￥{{currency(order.service)}}</span>
                    </template>
                </van-cell>
                <van-cell title="打包费" value="￥1.00" :border="false">
                    <template #default>
                        <span>￥{{currency(order.pack)}}</span>
                    </template>
                </van-cell>
                <van-cell title="配送费" :border="false">
                    <template #default>
                        <span>￥{{currency(order.postage)}}</span>
                    </template>
                </van-cell>

            </div>
            <!-- 总计 -->
            <div class="total">
                <p>总计 ￥{{currency(order.total)}}</p>
            </div>
        </div>
        <!-- 收货信息 -->
        <div class="address">
            <p class="title">收货信息</p>
            <van-cell title="期望时间" value="尽快送达" :border="false" />
            <van-cell title="收件人" :value="buyer.nickName" :border="false" />
            <van-cell title="联系电话" :value="buyer.phone" :border="false" />
            <van-cell title="地址" value="广州" :border="false" />
            <van-cell title="备注" value="微辣" :border="false" />
            <van-cell title="支付方式" value="在线支付" :border="false" />
            <van-cell title="下单时间" :value="moment(order.createTime,'YYYY-MM-DD HH:MM:SS')" :border="false" />
        </div>
    </div>
</template>
<script>
import IconText from "../../components/IconText.vue";
import OrderItem from "@/components/OrderItem.vue";
import { orderAPI, orderDetailAPI, statuAPI, storeAPI, userAPI } from "@/api";
export default {
    components: { IconText, OrderItem },
    methods: {
        onClickLeft() {
            this.$router.push({
                path: '/layout/order'
            })
        }
    },
    data() {
        return {
            productList: [],
            order: {},
            store: {},
            statu: '',
            payment: '',
            remark: '',
            address: '',
            buyer: {}
        }
    },
    async created() {
        // 请求订单产品数据
        const res = await orderDetailAPI(sessionStorage.getItem('token'), { orderId: this.$route.params.id })
        // console.log(res);
        this.productList = res.data.data
        // 获取订单信息
        const res2 = await orderAPI(sessionStorage.getItem('token'), { orderId: this.$route.params.id })
        console.log(res2);
        this.order = res2.data.data[0]
        // 获取订单状态
        const res3 = await statuAPI(sessionStorage.getItem('token'), res2.data.data[0].status)
        this.statu = res3.data.data.statu
        // 获取订单店铺
        const res4 = await storeAPI({ storeId: res2.data.data[0].storeId })
        this.store = res4.data.data[0]
        // 获取用户联系方式
        const res5 = await userAPI({ userId: res2.data.data[0].userId })
        this.buyer = res5.data.data
    },
};
</script>
<style scoped>
.orderDetail {
    width: 100%;
}

.van-nav-bar {
    background-color: #0aafff;
}

.top {
    background-image: linear-gradient(#0aafff, 75%, #d0ecfc);
    padding-bottom: 30px;
}

.top .statu-text {
    color: white;
    margin-left: 15px;
}

.card {
    margin: 10px 10px;
    border-radius: 10px;
    overflow: hidden;
}

.top .status .row {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #f7f8f9;
}

.detail {
    background-color: white;
    position: relative;
    top: -25px;
    left: 0;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
}

.title {
    font-size: 16px;
    font-weight: bold;
    padding: 15px 0 5px 15px;
}

.detail .fee {
    margin-top: 10px;
    border-top: 1px solid #f7f8f9;
}

.detail .fee .feeItem {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 14px;
}

.detail .total {
    text-align: end;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 16px;
}

.address {
    position: relative;
    top: -15px;
    left: 0;
    background-color: white;
}
</style>