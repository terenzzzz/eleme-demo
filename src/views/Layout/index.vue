<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 二级路由 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/layout/home">
        <template #icon>
          <img src="@/assets/icon.png" id="icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="records" replace to="/layout/order">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/layout/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data() {
      return {
        active: 0,
        icon: {
          active: './assets/icon.png',
        },
        
      };
    },
    
  };
</script>

<style scoped>
.van-picker-column .van-picker-column__wrapper {
  padding-left: 0 !important;
}

#icon {
  width: 30px;
  height: 30px;
}

.location {
  font-size: 16px;
  font-weight: bold;
}

.van-icon {
  margin-right: 20px;
}

#header {
  border-bottom: 1px solid #f7f8f9;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.main {
  padding-bottom: 50px;
}

ol,
ul {
  padding-left: 0 !important;
}
</style>
  