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
                <template #title>
                    <p class="nav-title">确认订单</p>
                </template>
            </van-nav-bar>
            <!-- 订单状态 -->
            <van-tabs type="card" color="#9bdbfd">
                <!-- 外卖配送模块 -->
                <van-tab title="外卖配送" class="main">
                    <div class="card">
                        <!-- 配送选项 -->
                        <van-cell-group>
                            <!-- 地址选项 -->
                            <van-cell is-link :title="address" @click="addressShow = true" />
                            <van-action-sheet v-model="addressShow" title="请选择收货地址" :actions="addressList"
                                @select="addressSelect" close-on-click-action>
                                <van-button plain type="info" size="large">新增地址</van-button>
                            </van-action-sheet>
                            <!-- 送达时间选项 -->
                            <van-cell title="送达时间" value="尽快送达" />
                            <!-- 支付方式选项 -->
                            <van-cell is-link :title="payment" @click="paymentShow = true" />
                            <van-action-sheet v-model="paymentShow" :actions="paymentList" @select="paymentSelect"
                                cancel-text="取消" description="请选择支付方式">
                            </van-action-sheet>
                        </van-cell-group>
                    </div>
                    <!-- 订单详情 -->
                    <div class="detail">
                        <!-- 已下单列表 -->
                        <div class="foodList">
                            <p class="title">{{store.name}}</p>
                            <OrderItem v-for="(obj,index) in cart" :key="index" :productId="obj.product" :num="obj.num">
                            </OrderItem>
                        </div>
                        <!-- 费用详情 -->
                        <div class="fee">
                            <van-cell-group>
                                <van-cell title="平台服务费" value="1" :border="false">
                                    <template #default><span>￥</span>{{service}}</template>
                                </van-cell>
                                <van-cell title="打包费" :border="false">
                                    <template #default><span>￥</span>{{currency(cart.length)}}</template>
                                </van-cell>
                                <van-cell title="配送费" :border="false">
                                    <template #default><span>￥</span>{{currency(store.delivery)}}</template>
                                </van-cell>
                            </van-cell-group>
                        </div>
                        <!-- 总计 -->
                        <div class="total">
                            <p>总计 ￥{{total}}</p>
                        </div>
                        <!-- 备注 -->
                        <van-cell-group>
                            <van-cell title="订单备注" value="可备注无接触送餐" :border="false" />
                            <van-cell title="餐具份数" value="默认一份 >" :border="false" />
                        </van-cell-group>
                    </div>

                </van-tab>
                <!-- 到店自取模块 -->
                <van-tab title="到店自取" class="main">
                    <div class="card">
                        <!-- 配送选项 -->
                        <van-cell-group>
                            <!-- 地址选项 -->
                            <van-cell title="麦当劳&麦咖啡">
                                <template #label>
                                    <img src="@/assets/map.jpg" alt="" width="100%">
                                </template>
                            </van-cell>
                            <!-- 预留电话选项 -->
                            <van-cell title="预留电话" value="13538991133" />
                            <!-- 支付方式选项 -->
                            <van-cell is-link :title="payment" @click="paymentShow = true" />
                            <van-action-sheet v-model="paymentShow" :actions="paymentList" @select="paymentSelect"
                                cancel-text="取消" description="请选择支付方式">
                            </van-action-sheet>
                        </van-cell-group>
                    </div>
                    <OrderDetail></OrderDetail>
                </van-tab>
            </van-tabs>
            <van-submit-bar button-text="提交订单" button-color="#48c2fe" @submit="onSubmit" />
        </div>

    </div>
</template>
<script>

import { Toast } from 'vant';
import currency from 'currency.js';
import OrderItem from '@/components/OrderItem.vue';
import { storeAPI, submitOrderAPI, submitOrderDetailAPI } from '@/api';
export default {
    components: { OrderItem },
    data() {
        return {
            paymentShow: false,
            paymentList: [{ name: '微信支付' }, { name: '支付宝支付' }, { name: '钱包支付' }, { name: '现金支付' }],
            payment: '支付方式:',
            addressShow: false,
            addressList: [{ name: '战狼: 13538991133', subname: '广东省广州市增城区荔城街' }, { name: '战狼: 13538991133', subname: '广东省广州市增城区荔城街' }],
            address: '请选择收货地址',
            cart: JSON.parse(sessionStorage.getItem('cart')),
            storeId: this.$route.params.storeId,
            store: {}
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        paymentSelect(item) {
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.paymentShow = false;
            Toast(item.name);
            this.payment = item.name
        },
        onCancel() {
            Toast('取消');
        },
        addressSelect(item) {
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.paymentShow = false;
            Toast(item.subname);
            this.address = item.subname
        },
        async onSubmit() {
            // 要以application/x-www-form-urlencoded格式发送数据
            // 提交订单
            const params = new URLSearchParams();
            params.append('storeId', this.store.id);
            params.append('total', this.total);
            params.append('address', '1');
            params.append('paymentType', '1');
            params.append('status', '1');
            params.append('service', this.service);
            params.append('pack', this.cart.length);
            params.append('postage', this.store.delivery);
            const res = await submitOrderAPI(sessionStorage.getItem('token'), params)

            // 提交订单产品
            const params2 = new URLSearchParams();
            params2.append('orderId', res.data.orderId)
            params2.append('productList', sessionStorage.getItem('cart'))
            await submitOrderDetailAPI(sessionStorage.getItem('token'), params2)
            this.$router.push({
                path: '/layout/order'
            })
            Toast('下单成功');
        }
    },
    async created() {
        const res = await storeAPI({ storeId: this.storeId })
        this.store = res.data.data[0]
        console.log(res);
    },
    computed: {
        productTotal() {
            let total = 0
            this.cart.forEach((v) => {
                total = total + v.price
            });
            return currency(total)
        },
        service() {
            return currency(parseFloat(this.productTotal) * 0.1)
        },
        total() {
            let total = parseFloat(this.service) + this.cart.length + this.store.delivery
            return currency(total + parseFloat(this.productTotal))
        }
    }
};
</script>
<style scoped>
.nav-title {
    color: white;
}

.van-nav-bar {
    background-color: #0aafff;
}

.top {
    background-image: linear-gradient(#0aafff, 40%, #d0ecfc);
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

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    position: fixed;
    background-color: white;
    width: 100%;
}

.footer .left {
    display: flex;
}

.footer .left p {
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.footer .footer-icon {
    padding-left: 10px;
}

.main {
    padding-bottom: 44px;
}




.detail {
    background-color: white;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    color: red;
}
</style>