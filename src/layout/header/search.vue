<template>
  <div class="search">
    <el-input
      placeholder="搜索"
      prefix-icon="el-icon-search"
      @click.native="onClickInput"
    />
    <Toggle :show.sync = "searchPanelShow" v-show="searchPanelShow">
      <div class="search-panel"></div>
    </Toggle>
  </div>
</template>

<script>
import storage from "good-storage";
import { getSearchHot, getSearchSuggest } from "@/api";
import { createSong, getArtistsText, debounce } from "@/utils";
import { mapActions, mapMutations } from '@/store/music'

export default {
  data() {
    return {
      searchPanelShow: false
    }
  },
  methods:{
    onClickInput() {
      this.searchPanelShow = true;
    },
  },
  computed:{

  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 250px;

  .search-panel {
    position: fixed;
    top: $header-height;
    bottom: $mini-player-height;
    right: 0;
    width: 350px;
    background: var(--search-bgcolor);
    z-index: $search-panel-z-index;
    font-size: $font-size-sm;
    overflow-y: auto;

    .block {
      padding: 16px 24px;

      .title {
        color: var(--font-color-grey);
        margin-bottom: 16px;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;

        .button {
          margin-bottom: 12px;
          margin-right: 6px;
          font-size: $font-size-sm;
        }
      }

      .empty {
        @include flex-center();
        color: var(--font-color-grey);
        font-size: $font-size;
        height: 100px;
      }
    }

    .suggest-item {
      margin-bottom: 16px;

      .title {
        margin: 16px 8px 8px;
        color: var(--font-color-grey-shallow);
      }

      .list {
        .item {
          padding: 12px 24px;
          cursor: pointer;
          @include text-ellipsis();

          &:hover {
            background: var(--light-bgcolor);
          }
        }
      }
    }
  }
}
</style>