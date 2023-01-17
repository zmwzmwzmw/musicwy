<template>
  <div>
    <!-- //顶部搜索框 -->
    <div class="top-box">
      <Setting></Setting>
      <div class="search-box">
        <van-search v-model="searchValue" placeholder="搜索音乐、视频、博客、歌词" shape="round" />
      </div>

      <van-icon name="music-o" size="2rem" />
    </div>
    <!-- 轮播图区域 -->
    <div class="swipe-box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 每日推荐 -->
    <div class="nav-box">
      <div class="nav-box-item">
        <van-icon name="thumb-circle-o" size="2rem" />
        <span>每日推荐</span>
      </div>
      <div class="nav-box-item">
        <van-icon name="smile-o" size="2rem" />
        <span>私人FM</span>
      </div>
      <div class="nav-box-item">
        <van-icon name="service-o" size="2rem" />
        <span>歌单</span>
      </div>
      <div class="nav-box-item">
        <van-icon name="font-o" size="2rem" />
        <span>排行榜</span>
      </div>
      <div class="nav-box-item">
        <van-icon name="volume-o" size="2rem" />
        <span>有声书</span>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="songs">
      <div class="title-box">
        <h2>推荐歌单<van-icon name="arrow" size="1.3rem" /></h2>
        <van-icon name="plus" size="1.5rem" />
      </div>
      <div class="songs-box">
        <div class="songs-box-item" v-for="(song, i) in songs" :key="i" @click="toSongDetail(song.id)">
          <van-image width="30vw" height="100" :src="song.picUrl" />
          <div class="playCount">
            <van-icon name="play-circle-o" size="1.2rem" />
            <span>{{ song.playCount |playNum}}</span>
          </div>

          <span>{{ song.name }}</span>
        </div>
      </div>
    </div>
    <!-- //欧美流行精选 -->
    <div class="songs">
      <div class="title-box">
        <h2>欧美流行精选<van-icon name="arrow" size="1.3rem" /></h2>
        <van-icon name="plus" size="1.5rem" />
      </div>
      <div class="songs-box">
        <div class="songs-box-item" v-for="(song, i) in songs" :key="i">
          <van-image width="30vw" height="100" :src="song.picUrl" />
          <span>{{ song.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playcount from '@/mixins/playcount'

export default {
  name: 'Find',
  mixins: [playcount],
  data () {
    return {
      searchValue: '',
      images: '',
      songs: []
    }
  },
  created () {
    this.getSwipe()
    this.getSongs()
  },
  methods: {
    async getSwipe () {
      const { data: res } = await this.$Api.findApi.getSwipeApi()
      this.images = res.banners
    },
    async getSongs () {
      const { data: res } = await this.$Api.findApi.getSongsApi()

      this.songs = res.result
    },
    toSongDetail (id) {
      this.$router.push({ path: '/songdetail', query: { id } })
    }
  }

}
</script>

<style lang="less" scoped>
.top-box {
  display: flex;
  padding: 0 3vw;

  justify-content: space-between;
  align-items: center;
  .search-box {
    width: 80vw;
  }
}
.swipe-box {
  height: 20vh;
  padding: 0 3vw;
  img {
    width: 100%;
    height: 20vh;
  }
}
.nav-box {
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-around;
  .nav-box-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    .van-icon:before {
      color: red;
      margin-bottom: 0.5vh;
    }
  }
}
.songs {
  padding: 0 3vw;
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .songs-box {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 0 !important;
      width: 0px !important;
    }
    .songs-box-item {
      position: relative;
      margin-right: 2vw;
      span {
        width: 30vw;
        word-break: break-all;
      }
      .playCount {
        position: absolute;

        top: 0;
        right: 1vw;
        line-height: 5vh;
        color: white;
        span{
          margin-left: 1vw;
        }
      }
    }
  }
}
</style>
