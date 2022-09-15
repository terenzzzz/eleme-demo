<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft" right-text="完成" @click-right="submitFn" />
        <van-field v-model="oldPsw" label="原密码" type="password" placeholder="请输入原密码" right-icon="close"
            @click-right-icon="oldPsw=''" />
        <van-field v-model="newPsw" label="新密码" type="password" placeholder="请输入新密码" right-icon="close"
            @click-right-icon="newPsw=''" />

    </div>
</template>
<script>
import { Toast } from 'vant';
import { passwordAPI } from '@/api'
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
        async submitFn() {
            // 以application/x-www-form-urlencoded格式发送数据
            const params = new URLSearchParams();
            params.append('oldPwd', this.oldPsw);
            params.append('newPwd', this.newPsw);
            const res = await passwordAPI(sessionStorage.getItem('token'), params)
            if (res.data.status != 0) {
                return Toast('请检查输入的密码是否正确')
            }
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