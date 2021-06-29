<template>
  <div class="discovery">
    <div class="discovery-content">
      <Banner/>
      <NewPlaylists/>
    </div>
  </div>
</template>

<script>
import Banner from './banner.vue'
import NewPlaylists from './new-playlists.vue'
export default {
  components:{ Banner, NewPlaylists },
  data() {
    return {
      
    }
  },
  
}
</script>

<style lang="scss" scoped>
.discovery {
  padding: 18px 32px;
}
</style>