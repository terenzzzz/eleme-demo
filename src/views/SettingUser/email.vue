<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="修改邮箱" left-arrow @click-left="onClickLeft" right-text="完成" @click-right="submitFn" />
        <van-cell-group>
            <van-field v-model="value" label="邮箱" placeholder="请输入邮箱" right-icon="close" @click-right-icon="clearFn" />
        </van-cell-group>
    </div>
</template>
<script>
import { Toast } from 'vant';
import { emailAPI } from '@/api'
export default {
    data() {
        return {
            value: this.$route.params.email,
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        clearFn() {
            this.value = ''
        },
        async submitFn() {
            // 以application/x-www-form-urlencoded格式发送数据
            const params = new URLSearchParams();
            params.append('email', this.value);
            const res = await emailAPI(sessionStorage.getItem('token'), params)
            if (res.data.status != 0) {
                return Toast('请输入正确的邮箱号')
            }
            this.$router.go(-1)
            return Toast('修改成功')
        },
    },
};
</script>
<style scoped>

</style>