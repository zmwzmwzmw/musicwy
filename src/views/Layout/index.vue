<template>
  <div>
    <!-- 头部区域 -->
    <!-- //展示弹出层 -->
    <div>

    </div>

    <router-view></router-view>
    <!-- 内容区域 -->
    <!-- 底部导航区域 -->
    <div>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/find">发现</van-tabbar-item>
        <van-tabbar-item icon="search" to="/boke">播客</van-tabbar-item>
        <van-tabbar-item icon="music-o" to="/my">我的</van-tabbar-item>
        <van-tabbar-item icon="like-o" to="/attention">关注</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/community">社区</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
