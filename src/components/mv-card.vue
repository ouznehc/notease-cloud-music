<template>
  <div @click="goMv" class="mv-card">
    <div class="img-wrap">
      <img v-lazy="$utils.genImgUrl(img, 500, 260)" />
      <div class="play-count-wrap" v-if="playCount">
        {{ $utils.formatNumber(playCount) }}
      </div>
      <div class="play-icon-wrap">
        <PlayIcon :size="48" class="play-icon" />
      </div>
      <div class="duration-wrap" v-if="duration">
        {{ $utils.formatTime(duration / 1000 )}}
      </div>
    </div>
    <p class="name" v-if="name">{{ name }}</p>
    <p class="author" v-if="author">{{ author }}</p>
  </div>
</template>

<script>
import { isDef } from "@/utils"
export default {
  props: ["id", "img", "name", "author", "playCount", "duration"],
  methods: {
    goMv(){
      if(isDef(this.id)) {
        this.$router.push(`/mv/${this.id}`)
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
.mv-card {
  min-width: 140px;
  cursor: pointer;

  .img-wrap {
    position: relative;
    padding-top: 56%;

    img {
      @include abs-stretch();
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    .play-icon-wrap {
      @include abs-stretch;

      &:hover {
        .play-icon {
          opacity: 1;
        }
      }

      .play-icon {
        @include abs-center;
        opacity: 0;
        transition: opacity 0.3s;
      }
    }

    .play-count-wrap {
      display: flex;
      align-items: center;
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: $font-size-sm;
      color: $white;
    }
  }

  .duration-wrap {
    position: absolute;
    right: 2px;
    bottom: 2px;
    font-size: $font-size-sm;
    color: $white;
  }

  .name {
    margin-top: 8px;
    @include text-ellipsis;
    font-size: $font-size-sm;
  }

  .author {
    margin-top: 4px;
    @include text-ellipsis;
    font-size: $font-size-sm;
    color: var(--font-color-grey-shallow);
  }
}
</style>