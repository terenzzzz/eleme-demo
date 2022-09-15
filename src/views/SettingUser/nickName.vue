<template>
    <div>
        <van-nav-bar title="修改昵称" left-arrow @click-left="onClickLeft" right-text="完成" @click-right="submitFn" />
        <van-cell-group>
            <van-field v-model="value" label="昵称" placeholder="请输入昵称" right-icon="close" @click-right-icon="clearFn" />
        </van-cell-group>
    </div>
</template>
<script>
import { Toast } from 'vant';
import { nickNameAPI } from '@/api'
export default {
    data() {
        return {
            value: this.$route.params.nickName,
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
            params.append('nickName', this.value);
            const res = await nickNameAPI(sessionStorage.getItem('token'), params)
            if (res.data.status != 0) {
                return Toast('请正确输入4-8个字符')
            }
            this.$router.go(-1)
            return Toast('修改成功')
        }
    },
};
</script>
<style lang='' scoped>
</style>