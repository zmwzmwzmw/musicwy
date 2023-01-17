<template>
  <div class="container">
    <div class="detail-box-container">
      <!-- 歌单详情封面 -->
      <div class="detail-box">
        <img :src="playList.coverImgUrl" alt="" class="imgbackground" />

        <div class="nav-box">
          <div class="nac-box-left">
            <van-icon name="arrow-left" size="1.5rem" @click="goback" />
            <span >歌单</span>
          </div>
          <div class="nac-box-right">
            <van-icon name="search" size="1.5rem" />
            <van-icon name="plus" size="1.5rem" />
          </div>
        </div>
        <!-- **************************** -->
        <div class="main-box">
          <div class="main-box-left">
            <img :src="playList.coverImgUrl" alt="" />
            <div class="playCount">
              <van-icon name="play-circle-o" size="1.2rem" />
              <span>{{ playList.playCount | playNum }}</span>
            </div>
          </div>
          <div class="main-box-right">
            <span>{{ playList.name }}</span>
            <div class="writer">
              <img :src="avatarUrl" />
              <span>淹死的鱼</span>
              <van-button icon="plus" round size="mini" class="btn">关注</van-button>
            </div>
          </div>
        </div>
        <div class="jieshao">介绍：无></div>
        <div class="btn-box">
          <van-button icon="share-o" round size="small">{{ playList.shareCount }}</van-button>
          <van-button icon="chat-o" round size="small">关注</van-button>
          <van-button icon="plus" round size="small" type="danger">{{ playList.trackCount }}</van-button>
        </div>
      </div>
    </div>

    <!-- 歌曲列表 -->
    <div class="sanglist-box">
      <div class="songlist">
        <SongList :songList="songList"></SongList>
      </div>
    </div>
  </div>
</template>

<script>
import playcount from '@/mixins/playcount'
import SongList from '@/components/songlist/index.vue'
export default {
  name: 'SongDetail',
  mixins: [playcount],
  components: { SongList },
  data () {
    return {
      playList: {},
      songList: {}
    }
  },
  created () {
    this.getSongDetail()
    this.getsongList()
  },
  computed: {
    avatarUrl () {
      // return this.playList.creator.avatarUrl || ''

      return JSON.parse(sessionStorage.getItem('plyList')).creator.avatarUrl || ''
    }
  },

  methods: {
    async getSongDetail () {
      const res = await this.$Api.SongDetail.getSongDetailApi('2084738832')
      this.playList = res.data.playlist
      sessionStorage.setItem('plyList', JSON.stringify(this.playList))
    },
    goback () {
      this.$router.back()
    },
    // 获取歌单详情列表
    async getsongList () {
      const result = await this.$Api.SongDetail.getsongListApi('2084738832')
      this.songList = result.data.songs
      console.log(result.data.songs)
    }

  }
}
</script>

<style lang="less" scoped>
.detail-box-container {
  height: 40vh;
  overflow: hidden;
  position: absolute;
}
.detail-box {
  height: 40vh;
  width: 100%;
  position: fixed;
  overflow: hidden;

  .imgbackground {
    filter: blur(50px);
    height: 40vh;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .nav-box {
    display: flex;
    justify-content: space-between;
    padding: 0 3vw;
    height: 5vh;
    align-items: center;
    color: white;
    font-size: 4vw;
    .nac-box-left :first-child {
      margin-right: 3vw;
    }
    .nac-box-right :first-child {
      margin-right: 3vw;
    }
  }
  .main-box {
    padding: 5vw 3vw;

    display: flex;
    .main-box-left {
      position: relative;
      height: 30vw;
      width: 30vw;
      img {
        width: 30vw;
        height: 30vw;
      }
      .playCount {
        position: absolute;
        top: 0;
        right: 2vw;
        color: white;
      }
    }
    .main-box-right {
      color: white;

      margin-left: 5vw;
      .writer {
        margin-top: 10vw;
        height: 5vh;
        line-height: 5vh;
        display: flex;
        align-items: center;
        img {
          width: 5vw;
          height: 5vw;
        }
        span {
          margin: 0 3vw 0 1vw;
        }
        .btn {
        }
      }
    }
  }
  .jieshao {
    padding: 0 3vw;
  }
  .btn-box {
    display: flex;
    height: 10vh;
    justify-content: space-around;
    align-items: center;
  }
}
// 歌曲列表
.sanglist-box {
  background-color: white;
  position: absolute;
  top: 38.5vh;
  height: 54vh;
  border-top-left-radius: 5vw;
  border-top-right-radius: 5vw;

  overflow-y: scroll;
  .songlist {
    margin-top: 5vw;
    width: 100vw;
  }
}
.container {
  height: 100vh;
  width: 100vw;
}
</style>
