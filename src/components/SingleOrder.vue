<template>
    <div class="singleOrder">
        <van-cell value="内容" @click="goDetail">
            <template #title>
                <span class="title">麦当劳&麦咖啡</span>
                <van-icon name="arrow" />
            </template>
            <template #label>
                <img src="@/assets/food/1.png" alt="" width="35px" class="foodPic">
                <img src="@/assets/food/1.png" alt="" width="35px" class="foodPic">
                <img src="@/assets/food/1.png" alt="" width="35px" class="foodPic">
            </template>
            <template #default>
                <span>已完成</span>
                <p class="price">￥68</p>
                <van-button type="default" round size="mini">再来一单</van-button>
                <van-button type="default" round size="mini" plain color="#00a0f0">去评价</van-button>
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
    methods:{
        goDetail(){
            console.log(1);
            this.$router.push({
                path:'/orderDetail'
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