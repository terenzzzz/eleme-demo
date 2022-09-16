<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- 搜索框 -->
        <van-search showAction v-model="value" shape="round" background="#00a0f0" placeholder="搜索我的订单">
            <template #action>
                <van-icon name="comment-o" size='25' class="comment" color="white" />
            </template>
        </van-search>
        <!-- 标签页 -->
        <van-tabs v-model="active" background="#f7f8f9">
            <van-tab title="全部订单">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleOrder v-for="obj in ordersList" :key="obj.id" :order="obj"></SingleOrder>
                </van-list>
            </van-tab>
            <van-tab title="待评价">
            </van-tab>
            <van-tab title="退款">
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import SingleOrder from '@/components/SingleOrder.vue';
import { ordersAPI } from '@/api';
export default {
    data() {
        return {
            value: "",
            active: 0,
            ordersList: [],
            loading: false,
            finished: false,
        };
    },
    components: { SingleOrder },
    async created() {
        // 请求订单数据
        const res = await ordersAPI(sessionStorage.getItem('token'))
        // console.log(res);
        this.ordersList = res.data.data
    },
    methods: {
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;
                this.finished = true;
            }, 1000);
        },
    }
};
</script>
<style scoped>
.comment {
    vertical-align: middle;
}
</style>