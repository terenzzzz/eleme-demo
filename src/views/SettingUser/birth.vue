<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="修改生日" left-arrow @click-left="onClickLeft" right-text="完成" @click-right="submitFn" />
        <van-cell-group>
            <van-cell title="生日" is-link arrow-direction="down" :value="date" @click="isShow = true" />
            <van-datetime-picker v-model="currentDate" type="date" title="选择出生日期" :min-date="minDate"
                :max-date="maxDate" v-if="isShow" @confirm='confirmFn' @cancel="isShow = false" />
        </van-cell-group>
    </div>
</template>
<script>
import { Toast } from 'vant';
import moment from 'moment'
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        submitFn() {
            this.$router.go(-1)
            return Toast('修改成功')
        },
        confirmFn(value) {
            const date = moment(value).format('YYYY-MM-DD')
            // const date = moment.format(value)
            this.date = date
            this.isShow = false
        }
    },
    data() {
        return {
            isShow: false,
            date: '2000-01-01',
            currentDate: new Date(2021, 0, 17),
            minDate: new Date(1922, 0, 1),
            maxDate: new Date(),
        };
    },
};
</script>
<style scoped>
.van-datetime-picker {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>