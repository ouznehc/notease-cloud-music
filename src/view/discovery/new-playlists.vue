<template>
  <div class="recommend" v-if="list.length">
    <Title>推荐歌单</Title>
    <div class="list-wrap">
      <PlaylistCard
        :desc="item.copywriter"
        :id="item.id"
        :img="item.picUrl"
        :name="item.name"
        v-for="item in list"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import { newPlayLists } from '@/config'
import PlaylistCard from '@/components/playlist-card.vue'
import { getPersonalized } from "@/api"

export default {
  components: { PlaylistCard },
  async created(){
    const { result } = await getPersonalized({ limit: 10 })
    this.list = result
  },
  data() {
    return {
      list: newPlayLists
    }
  },
}
</script>

<style lang="scss" scoped>
.list-wrap {
  margin: 0 -4px;
  display: flex;
  flex-wrap: wrap;
}
</style>