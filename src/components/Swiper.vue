<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="80">
            <van-swipe-item>
                <img src="@/assets/poster/1.png" alt="" width="100%">
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/poster/2.png" alt="" width="100%">
            </van-swipe-item>
            <van-swipe-item>
                <img src="@/assets/poster/3.png" alt="" width="100%">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.swiper {
    width: 90%;
    height: 80px;
    margin: 10px auto;
    border-radius: 10px;
    overflow: hidden;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 80px;
    text-align: center;
    background-color: #39a9ed;
}
</style>