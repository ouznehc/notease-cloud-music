import storage from "good-storage";

export default {
  // 当前播放歌曲
  currentSong:{"id":1859401485,"name":"Monster","img":"http://p4.music.126.net/gqZriO5BoxyIWqyfIn0H5Q==/109951166156555622.jpg","artists":[{"name":"YOASOBI","id":33927412,"picId":0,"img1v1Id":0,"briefDesc":"","picUrl":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","img1v1Url":"http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg","albumSize":0,"alias":[],"trans":"","musicSize":0,"topicPerson":0}],"duration":205000,"albumName":"__vue_devtool_undefined__","url":"https://music.163.com/song/media/outer/url?id=1859401485.mp3","artistsText":"YOASOBI","durationSecond":205,"albumId":"__vue_devtool_undefined__","mvId":14303290},
  // 当前播放时长
  currentTime: 0,
  // 播放状态
  playing: false,
  // 播放模式
  playMode: "sequence",
  // 播放列表显示
  isPlaylistShow: false,
  // 歌曲详情页显示
  isPlayerShow: false,
  // 播放提示显示
  isPlaylistPromptShow: false,
  // 播放列表数据
  playlist: [],
  // 播放历史数据
  playHistory: storage.get('__play_history__', []),
  // 菜单显示
  isMenuShow: true,
}