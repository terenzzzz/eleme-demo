<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" />
        <div class="avatar">
            <img src="" alt="">
        </div>
        <van-cell-group>
            <van-cell title="昵称" is-link :value="userInfo.nickName"
                :to="{ name: 'nickName', params: { nickName: userInfo.nickName }}" />
            <van-cell title="生日" is-link :value="birth" :to="{ name: 'birth', params: { birth: birth }}" />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="手机号" :value="userInfo.phone" />
            <van-cell title="密码" is-link value="********" to='/settingLayout/user/password' />
            <van-cell title="邮箱" is-link :value="userInfo.email"
                :to="{ name: 'email', params: { email: userInfo.email }}" />
        </van-cell-group>
        <van-cell title="地址" is-link to='/settingLayout/user/address' />

    </div>
</template>
<script>
import { userInfoAPI } from '@/api'
import { Toast } from 'vant';
import moment from 'moment'
export default {
    data() {
        return {
            userInfo: {},
            birth: ''
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    async created() {
        const res = await userInfoAPI(sessionStorage.getItem('token'))
        if (res.data.status == 401) {
            this.$router.push({
                path: '/'
            })
            return Toast('登录已过期,请重新登录');
        } else {
            this.userInfo = res.data.data
            this.birth = moment(this.userInfo.birth).format('YYYY-MM-DD')
        }
    }
};
</script>
<style scoped>
.van-cell-group {
    margin: 10px 0
}
</style>