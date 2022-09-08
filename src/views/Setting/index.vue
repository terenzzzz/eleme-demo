<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
        <van-cell-group>
            <van-cell title="个人资料" is-link />
            <van-cell title="账号于安全" is-link />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="关于" value="1.0.0" is-link />
            <van-cell title="检测更新" is-link />
        </van-cell-group>
        <van-button type="default" block @click="logoutFn">退出登录</van-button>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    methods: {
        onClickLeft() {
            Toast('返回');
        },
        logoutFn() {
            sessionStorage.removeItem('token');
            Toast('账号已退出');
            this.$router.push({
                path: '/login'
            })
        }
    },
};
</script>
<style scoped>
.van-cell-group {
    margin: 10px 0;
}
</style>