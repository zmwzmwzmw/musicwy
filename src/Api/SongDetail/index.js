import request from '@/request'
// 获取歌单详情
export const getSongDetailApi = (id) => request({
  url: `/playlist/detail/?id=${id}`,
  method: 'get'

})
// 获取歌单列表
export const getsongListApi = (id) => request({
  url: `/playlist/track/all?id=${id}&limit=10&offset=1`,
  method: 'get'
})
