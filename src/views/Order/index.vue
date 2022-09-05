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
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
                <SingleOrder></SingleOrder>
            </van-tab>
            <van-tab title="待评价">
                <SingleOrder></SingleOrder>
            </van-tab>
            <van-tab title="退款">
                <SingleOrder></SingleOrder>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import SingleOrder from '@/components/SingleOrder.vue';
export default {
    data() {
        return {
            value: "",
            active: 0
        };
    },
    components: { SingleOrder },
    
};
</script>
<style scoped>
.comment {
    vertical-align: middle;
}
</style>