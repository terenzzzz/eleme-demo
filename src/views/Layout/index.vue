<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="header">
      <van-nav-bar :border="false">
        <template #left>
          <div>
            <span class="location">广州市</span>
            <van-icon name="arrow-down" color="black" />
          </div>
        </template>
        <template #right>
          <van-icon name="shopping-cart-o" size="22" color="black" />
          <van-icon name="comment-o" size="22" color="black" badge="99+" />
        </template>
      </van-nav-bar>
      <van-search v-model="value" placeholder="请输入搜索关键词" shape=round left-icon="scan" show-action>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <!-- 二级路由 -->
    <div class="main">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item>
        <template #icon>
          <img src="@/assets/icon.png" id="icon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="bag-o">全能超市</van-tabbar-item>
      <van-tabbar-item icon="records">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/login">我的</van-tabbar-item>
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
        value: '',
      };
    },
    methods:{
    onSearch(){

    }
  }
  };
</script>

<style scoped>
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
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>
  