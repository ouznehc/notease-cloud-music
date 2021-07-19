<template>
  <div id="app">
    <div class="layout">
      <LayoutHeader/>
      <div class="layout-body">
        <div class="layout-menu"><LayoutMenu/></div>
        <div class="content">
          <router-view :class="routerViewCls" />
        </div>
      </div>
    </div>
    <Player />
    <MiniPlayer />
    <Playlist />
  </div>
</template>

<script>
import LayoutHeader from './layout/header'
import LayoutMenu from './layout/menu'
import Player from './layout/player'
import MiniPlayer from './layout/miniPlayer'
import Playlist from './layout/playlist'
const LayoutCenterNames = ['discovery', 'songs', 'mvs']


export default{
  name: 'APP',
  components:{ LayoutHeader, LayoutMenu, Player, MiniPlayer, Playlist },
  computed:{
    routerViewCls() {
      return LayoutCenterNames.find((name) => name === this.$route.name)
        ? "router-view-center"
        : "";
    },
  }
}
</script>


<style lang="scss" scoped>
#app {
  height: 100%;
  background-color: var(--body-bgcolor);
  font-size: $font-size;
}
.layout {
  height: 100%;

  .layout-body {
    display: flex;
    position: relative;
    z-index: 9;
    height: calc(100% - #{$header-height});

    .layout-menu {
      // 这个100%已经减去了头部height
      height: calc(100% - #{$mini-player-height});
    }

    .content {
      flex: 1;
      overflow-y: auto;
      min-width: $layout-content-min-width;
      margin-bottom: $mini-player-height;

      .router-view-center {
        max-width: $center-content-max-width;
        margin: auto;
      }
    }
  }
}
</style>