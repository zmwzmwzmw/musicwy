<template>
  <div class="songlist-box">
    <div class="title">
      <div class="title-left">
        <van-icon name="play-circle-o" size="1.5rem" />
        <span>播放全部</span>
        <i>({{ songList.length }})</i>
      </div>
      <div class="title-right">
        <van-icon name="play-circle-o" size="1.5rem" />
        <van-icon name="play-circle-o" size="1.5rem" />
      </div>
    </div>
    <div class="item-box">
      <div class="item" v-for="(item, i) in songList" :key="i">
        <div class="num">{{ i + 1 }}</div>
        <div class="name">
          <span>{{ item.name }}</span>
          <i>{{ item.al.name }}</i>
        </div>
        <div class="btn">
          <div class="play-btn">
            <van-icon name="play-circle-o" size="1.5rem" />
          </div>
          <div>
            <van-icon name="play-circle-o" size="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nsme: 'songList',
  props: ['songList']
}
</script>

<style lang="less" scoped>
.songlist-box {
  .title {
    padding: 0 3vw;

    display: flex;

    background-color: white;
    justify-content: space-between;
    align-items: center;
    height: 5vh;

    margin-bottom: 5vw;
    .title-left {
      span {
        margin-left: 3vw;
        font-size: 4.3vw;
      }
    }
    .title-right :first-child {
      margin-right: 3vw;
    }
  }
  .item-box {

  }
  .item {
    display: flex;
    height: 8vh;
    align-items: center;
    justify-content: space-between;

    padding: 0 3vw;
    .num {
      width: 5vw;
      text-align: center;
      font-size: 4vw;
    }
    .name {
      width: 66vw;
      display: flex;
      flex-direction: column;
      span {
        font-size: 5vw;
      }
    }
    .btn {
      width: 15vw;
      display: flex;
      justify-content: end;
      .play-btn {
        margin-right: 3vw;
      }
    }
  }
}
</style>
