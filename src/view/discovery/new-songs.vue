<template>
  <div class="new-songs" v-if="list.length">
    <Title>最新音乐</Title>
    <div class="list-wrap">
      <div class="list" v-for="(list,listIndex) in thunkedList" :key="listIndex">
        <SongCard
          class="song-card"
          v-for="(item,index) in list"
          :key="item.id"
          @click.native="onClickSong(listIndex, index)"
          :order="getSongOrder(listIndex, index)"
          v-bind="nomalizeSong(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { newSongsList } from '@/config'
import { getNewSongs } from '@/api'
import SongCard from '@/components/song-card'
import { createSong } from "@/utils"
import { mapActions, mapMutations } from "@/store/music"
const songsLimit = 10

export default {
  components: { SongCard },
  async created () {
    const { result } = await getNewSongs()
    this.list = result
  },
  data(){
    return{
      chunkLimit: Math.ceil(songsLimit /2 ),
      list: newSongsList
    }
  },
  computed: {
    thunkedList(){
    return [
        this.list.slice(0, this.chunkLimit),
        this.list.slice(this.chunkLimit, this.list.length)
      ]
    },
    normalizedSongs() {
      return this.list.map(song => this.nomalizeSong(song))
    }
  },
  methods:{
    getSongOrder(listIndex, index) {
      return listIndex * this.chunkLimit + index + 1
    },
    nomalizeSong(song) {
      const {
        id,
        name,
        song: {
          mvid,
          artists,
          album: { blurPicUrl },
          duration
        }
      } = song
      return createSong({
        id,
        name,
        mvId: mvid,
        artists,
        img: blurPicUrl,
        duration
      })
    },
    onClickSong(listIndex, index) {
      // 这里因为getSongOrder是从1开始显示，所以当做数组下标需要减一
      const nomalizeSongIndex = this.getSongOrder(listIndex, index) - 1
      const nomalizeSong = this.normalizedSongs[nomalizeSongIndex]
      this.startSong(nomalizeSong)
      this.setPlaylist(this.normalizedSongs)
    },
    ...mapActions(["startSong"]),
    ...mapMutations(["setPlaylist"])
  },

}
</script>

<style lang="scss" scoped>
.new-songs {
  margin-bottom: 36px;
  .list-wrap {
    display: flex;

    .list {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>