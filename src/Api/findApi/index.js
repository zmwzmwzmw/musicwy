import request from '@/request'
// 获取轮播图
export const getSwipeApi = () => request({
  method: 'get',
  url: '/banner?type=1'

})
// 获取推荐歌单
export const getSongsApi = () => request({
  method: 'get',
  url: '/personalized?limit=6'
})
