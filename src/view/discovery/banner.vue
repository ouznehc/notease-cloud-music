<template>
  <el-carousel class="banner-carousel" type="card" :interval="4000">
    <el-carousel-item :key="banner.scm" v-for="banner in banners">
      <img  v-lazy="$utils.genImgUrl(banner.imageUrl, 1000, 400)" class="banner-img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { bannerList } from '@/config'
import { getBanner } from '@/api'
export default {
  async created(){
    let {banners} = await getBanner()
    this.banners = banners
  },  
  data() {
    return {
      banners: bannerList
    }
  },
}
</script>

<style lang="scss" scoped>
.banner-carousel {
  /deep/.el-carousel__container {
    height: 200px;
  }

  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
</style>