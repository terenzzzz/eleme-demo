<template>
    <div class="singleItem">
        <van-cell center title="板烧鸡腿堡">
            <template #icon>
                <div class="foodPic">
                    <img src="@/assets/food/1.png" alt="">
                </div>
            </template>
            <template #label>
                <span class="sale">月售16 </span><span class="price"> ￥24</span>
            </template>
            <template #default>
                <van-icon name="add" color="#00a0f0" size="25" />
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
  
};
</script>
<style scoped>
.singleItem {
    text-align: center;
}

.foodPic {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.foodPic img {
    width: 100%;
}

.price {
    color: red;
    font-size: 16px;
}
</style>