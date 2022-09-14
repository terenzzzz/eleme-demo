<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" />
        <div class="avatar">
            <img src="" alt="">
        </div>
        <van-cell-group>
            <van-cell title="昵称" is-link value="内容" to='/settingLayout/user/nickName' />
            <van-cell title="生日" is-link value="2000-12-24" to='/settingLayout/user/birth' />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="手机号" value="13538991133" />
            <van-cell title="密码" is-link value="********" to='/settingLayout/user/password' />
            <van-cell title="邮箱" is-link value="terence592592@gmail" to='/settingLayout/user/email' />
        </van-cell-group>
        <van-cell title="地址" is-link to='/settingLayout/user/address' />

    </div>
</template>
<script>

export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
};
</script>
<style scoped>
.van-cell-group {
    margin: 10px 0
}
</style>