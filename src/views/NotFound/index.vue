<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <img src="@/assets/404.png" alt="" width="100%">
        <p class="text">当前URL不正确，请返回主页面</p>
        <van-button round hairline size="large" color="#00a0f0" @click="backToHome">返回主页面</van-button>
    </div>
</template>
<script>
export default {
    methods:{
        backToHome(){
            this.$router.push({
                path:"/layout/home"
            })
        }
    }
};
</script>
<style scoped>
.text {
    text-align: center;
}
</style>