<template>
  <div>
    <van-icon name="exchange" @click="showPopup" size="2rem"/>
      <van-popup v-model="show" position="left" :style="{ height: '100%' }" >
        <div class="tan-box">弹出内容</div>
      </van-popup>
  </div>
</template>
<script>
export default {
  name: 'Setting',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }

  }
}
</script>

<style lang="less" scoped>
.tan-box{
  width: 70vw;
  margin-top: 50vh;
  background-color: pink;
}
</style>
