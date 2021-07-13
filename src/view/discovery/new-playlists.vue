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
      list: [
        {
            "id": 437326740,
            "name": "我只是炸曲的搬运工！【精】",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/aKW94yMBrwaYNYiVHUIP9g==/109951163809833712.jpg",
        },
        {
            "id": 5212378620,
            "name": "“我会从你的世界慢慢消失.”",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/qb2gBjmC9-PYt-n5QFAsjw==/109951165781454309.jpg",
        },
        {
            "id": 2829733864,
            "name": "[睡眠伴侣]  选首最合适你的 然后单曲循环 ",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/CmbQ14DMvVKmUTR4UejdAw==/109951166035763769.jpg",
        },
        {
            "id": 3231649721,
            "name": "百万评论热歌全集丨时实更新中",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg",
        },
        {
            "id": 5382682753,
            "name": "你会对我第二次心动吗",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/GjpC4y21lxvh-wbvRZCPDQ==/109951165602360304.jpg",
        },
        {
            "id": 6728658542,
            "name": "我字字皆你，你却句句非我",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/11718fHt9zby9g4k93WY9w==/109951165922155641.jpg",
        },
        {
            "id": 5252086549,
            "name": "你觉得你和我有遗憾吗？",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/juM9DZlqZP-L_9oGBrkIuQ==/109951165341030471.jpg",
        },
        {
            "id": 3195558821,
            "name": "食我的枪吧（玩马超必备歌单）",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/qu52mTKiCdy1YSWkJ4W-JA==/109951165125531908.jpg",
        },
        {
            "id": 5129450678,
            "name": "你那满目温柔再不属于我（Cover）",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/C1HgiKpjgYt7RrxsAptWvw==/109951166111744559.jpg",
        },
        {
            "id": 4865548839,
            "name": "Chillhop丨深夜独享的静谧时光",
            "copywriter": "热门推荐",
            "picUrl": "https://p2.music.126.net/Vji3PQJAZ2C7gS_6X51NFQ==/109951164723650033.jpg",
        }
    ]
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