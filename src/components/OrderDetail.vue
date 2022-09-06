<template>
    <div>
        <!-- 订单详情 -->
        <div class="detail">
            <!-- 已下单列表 -->
            <div class="foodList">
                <p class="title">麦当劳&麦咖啡</p>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
                <OrderItem></OrderItem>
            </div>
            <!-- 费用详情 -->
            <div class="fee">
                <van-cell-group>
                    <van-cell title="平台服务费" value="￥5.88" :border="false" />
                    <van-cell title="打包费" value="￥1.00" :border="false" />
                    <van-cell title="配送费" value="￥8" :border="false" />
                </van-cell-group>
            </div>
            <!-- 总计 -->
            <div class="total">
                <p>总计 ￥68</p>
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
import OrderItem from './OrderItem.vue';
export default {
    components: { OrderItem }
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
}
</style>