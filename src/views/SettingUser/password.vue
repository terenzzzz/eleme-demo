<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" right-text="完成" @click-right="submitFn" />
        <van-field v-model="oldPsw" label="原密码" type="password" placeholder="请输入原密码" right-icon="close"
            @click-right-icon="oldPsw=''" />
        <van-field v-model="newPsw" label="新密码" type="password" placeholder="请输入新密码" right-icon="close"
            @click-right-icon="newPsw=''" />

    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            oldPsw: '',
            newPsw: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        submitFn() {
            this.$router.go(-1)
            return Toast('修改成功')
        }
    },
};
</script>
<style scoped>
.van-cell-group {
    margin: 10px 0
}
</style>