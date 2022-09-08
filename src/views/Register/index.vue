<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- logo -->
    <van-row type="flex" justify="center" class="logo">
      <van-col span="4">
        <img src="@/assets/icon.png" alt="" width="100%">
      </van-col>
    </van-row>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <!-- 手机号 -->
      <van-field v-model="phone" name="phone" label="手机号" placeholder="手机号"
        :rules="[{ validator:phoneValidator, message: '请正确填写11位手机号' }]" />
      <!-- 密码 -->
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ validator:pswValidator, message: '8-16个字符，至少1个大写字母，1个小写字母和1个数字' }]" />
      <!-- 确认密码 -->
      <van-field v-model="pswconfirm" type="password" name="pswconfirm" label="确认密码" placeholder="确认密码"
        :rules="[{ validator:pswConfirm, message: '两次输入的密码不一致' }]" />
      <div style="margin: 16px;">
        <van-button round hairline plain size="large" color="#00a0f0" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { registerAPI } from '@/api'
import { Toast } from 'vant';
export default {
  data() {
    return {
      phone: '',
      password: '',
      pswconfirm: ''
    };
  },
  methods: {
    async onSubmit(vals) {
      // console.log(vals);
      // 要以application/x-www-form-urlencoded格式发送数据
      const params = new URLSearchParams();
      params.append('phone', vals.phone);
      params.append('password', vals.password);
      const res = await registerAPI(params)
      if (res.data.status === 0) {
        this.$router.push({
          path: '/login'
        })
        return Toast('注册成功,请登录');
      } else {
        this.phone = ''
        this.password = ''
        this.pswconfirm = ''
        return Toast('手机已被注册，请登录或更换手机号');
      }
    },
    onClickLeft() {
      this.$router.push({
        path: "/layout/home"
      })
    },
    phoneValidator(val) {
      return /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(val);
    },
    pswValidator(val) {
      //8-16个字符，至少1个大写字母，1个小写字母和1个数字
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(val)
    },
    pswConfirm(val) {
      return val == this.password
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