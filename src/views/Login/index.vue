<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- logo -->
    <van-row type="flex" justify="center" class="logo">
      <van-col span="10">
        <img src="@/assets/icon.png" alt="" width="100%">
        <p class="title">饿了么外卖</p>
      </van-col>
    </van-row>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="phone" name="phone" label="手机号" placeholder="手机号"
        :rules="[{ validator:phoneValidator, message: '请正确填写11位手机号' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ validator:pswValidator, message: '8-16个字符，至少1个大写字母，1个小写字母和1个数字' }]" />
      <div style="margin: 16px;">
        <van-button round hairline size="large" native-type="submit" color="#00a0f0">登录</van-button>
        <van-button round hairline plain size="large" native-type="button" color="#00a0f0" to="/register"
          class="register">注册</van-button>
      </div>
    </van-form>


  </div>
</template>
<script>
import { loginAPI } from '@/api'
import { Toast } from 'vant';
export default {
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    async onSubmit(vals) {
      // console.log('submit', values);
      // 要以application/x-www-form-urlencoded格式发送数据
      const params = new URLSearchParams();
      params.append('phone', vals.phone);
      params.append('password', vals.password);
      const res = await loginAPI(params)
      // console.log(res);
      if (res.data.status == 0) {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('islogin', true)
        this.$router.go(-1)
        return Toast('登录成功')
      } else {
        return Toast('手机号或密码错误！请重试')
      }
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    phoneValidator(val) {
      return /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(val);
    },
    pswValidator(val) {
      //8-16个字符，至少1个大写字母，1个小写字母和1个数字
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(val)
    }
  },
};
</script>
<style scoped>
.logo {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.van-button {
  margin-bottom: 10px;
}
</style>