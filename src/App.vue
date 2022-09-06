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
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}

.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(20px);
  opacity: 0;
}
</style>
