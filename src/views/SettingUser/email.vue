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
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        clearFn() {
            this.value = ''
        },
        submitFn() {
            this.$router.go(-1)
            return Toast('修改成功')
        }
    },
    data() {
        return {
            value: '',
        };
    },
};
</script>
<style lang='' scoped>
</style>