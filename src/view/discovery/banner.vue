<template>
  <el-carousel class="banner-carousel" type="card" :interval="4000">
    <el-carousel-item :key="banner.scm" v-for="banner in banners">
      <img  v-lazy="$utils.genImgUrl(banner.imageUrl, 1000, 400)" class="banner-img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from '@/api'
export default {
  async created(){
    let {banners} = await getBanner()
    this.banners = banners
  },  
  data() {
    return {
      banners: [
        {
            "imageUrl": "http://p1.music.126.net/S22Khy7j8-psRjxDD5Zmmg==/109951166172407313.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.2991979.1659877592.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/ycSr_rJ6ts1a5HRuJKnp5A==/109951166172445357.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.2996971.1659826684.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/9zjPTvC3vTiqCd4kZcs0NA==/109951166172428914.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.3005986.1659734460.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/efx5WPm0Q8wKW61mSXNuhg==/109951166172209616.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.3003974.1659974682.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/KYCQwRSxtLaykIXxGzYzUg==/109951166172268656.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.2998984.1659729662.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/ZdvXwu-NErOc11fMZIRQtw==/109951166172143007.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.2994977.1659849626.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/S3NNgzIhE6jnt2oN0qwQQw==/109951166172033514.jpg",
            "scm": "1.music-homepage.homepage_banner_force.banner.2981001.1659730500.null"
        }
    ]
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