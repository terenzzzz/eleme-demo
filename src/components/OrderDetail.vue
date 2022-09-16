<template>
    <div>
        <!-- 订单详情 -->
        <div class="detail">
            <!-- 已下单列表 -->
            <div class="foodList">
                <p class="title">{{store.name}}</p>
                <OrderItem v-for="(obj,index) in cart" :key="index" :productId="obj.product" :num="obj.num"></OrderItem>
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
    </div>
</template>
<script>
import currency from 'currency.js';
import OrderItem from './OrderItem.vue';
// import { orderDetailAPI } from '@/api'

export default {
    props: {
        store: Object
    },
    data() {
        return {
            cart: JSON.parse(sessionStorage.getItem('cart'))
        }
    },
    components: { OrderItem },
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
<style  scoped>
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