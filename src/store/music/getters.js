// 当前是否有歌曲在播放
export const hasCurrentSong = (state) => {
  let data = state.currentSong.id
  return data !== null && data!== undefined
}