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
import { birthAPI } from '@/api'
export default {
    data() {
        return {
            isShow: false,
            date: this.$route.params.birth,
            currentDate: new Date(this.$route.params.birth),
            minDate: new Date(1922, 0, 1),
            maxDate: new Date(),
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        async submitFn() {
            // 以application/x-www-form-urlencoded格式发送数据
            const params = new URLSearchParams();
            params.append('birth', this.date);
            const res = await birthAPI(sessionStorage.getItem('token'), params)
            console.log(res);
            if (res.data.status != 0) {
                return Toast('修改失败')
            }
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