<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- logo -->
    <van-row type="flex" justify="center" class="logo">
      <van-col span="10">
        <img src="@/assets/icon.png" alt="" width="100%">
        <p>饿了么外卖</p>
      </van-col>
    </van-row>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round hairline size="large" native-type="submit" color="#00a0f0">登录</van-button>
        <van-button round hairline plain size="large" color="#00a0f0">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onClickLeft(){
      this.$router.push({
        path:"/layout/home"
      })
    }
  },
};
</script>
<style scoped>
.logo {
  width: 100%;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
}

.van-button {
  margin-bottom: 10px;
}
</style>