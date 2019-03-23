<template>
  <div class="app">
    <!--<img src="./assets/logo.png">-->

    <!--header-->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      :z-index= 999
    />

    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view style="width:100%"></router-view>
    </transition>
    <!--footer-->
    <!--添加内容的区的四个子组件-->
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/index"
      >标签</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        dot
        to="/second"
      >标签</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        info="5"
        to="/third"
      >标签</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        info="20"
        to="/fourth"
      >标签</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    active: 0
  })
};
</script>

<style lang="less">
 
.app {
  padding-top: 46px;
  overflow-x: hidden;
  padding-bottom: 50px;
}

.van-nav-bar {
  position: fixed;
  width: 100%;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  left: -200%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
