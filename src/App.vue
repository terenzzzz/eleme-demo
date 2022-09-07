<template>
  <div id="app">
    <!-- 一级路由 -->
    <Transition name="slide-fade">
      <router-view></router-view>
    </Transition>

  </div>
</template>
<script>

export default {

};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-enter {
  transform: translateX(15px);
  opacity: 0;
}
</style>
