<template>
  <div class="mini-player" id="mini-player">
    <!-- 歌曲 -->
    <div class="song">
      <template v-if="hasCurrentSong">
        <div @click="togglePlayerShow" class="img-wrap">
          <div class="mask"></div>
          <img v-lazy="$utils.genImgUrl(currentSong.img, 80)" class="blur" />
          <div class="player-control">
            <Icon :size="24" :type="playControlIcon" color="white" />
          </div>
        </div>
        <div class="content">
          <div class="top">
            <p class="name">{{ currentSong.name }}</p>
            <p class="split">-</p>
            <p class="artists">{{ currentSong.artistsText }}</p>
          </div>
          <div class="time">
            <span class="played-time">
              {{ $utils.formatTime(currentTime) }}
            </span>
            <span class="split">/</span>
            <span class="total-time">
              {{ $utils.formatTime(currentSong.duration / 1000) }}
            </span>
          </div>
        </div>
      </template>
    </div>
    <!-- 控制 -->
    <div class="control">
      <Icon :size="24" @click="prev" class="icon" type="prev" />
      <el-popover
        :value="isPlayErrorPromptShow"
        placement="top"
        trigger="manual"
        width="160"
      >
        <p>请点击开始播放</p>
        <div @click="togglePlaying" slot="reference" class="play-icon">
          <Icon :size="24" :type="playIcon" />
        </div>
      </el-popover>
      <Icon :size="24" @click="next" class="icon" type="next" />
    </div>
    <!-- 模式 -->
    <div class="mode">
      <Share :shareUrl="shareUrl" class="mode-item" v-show="hasCurrentSong" />
      
      <el-popover placement="top" trigger="hover">
        <p class="pop-text">{{ playModeText }}</p>
        <Icon :size="20" :type="modeIcon" @click="onChangePlayMode" class="mode-item" slot="reference"/>
      </el-popover>

      <el-popover :value="isPlaylistPromptShow" placement="top" trigger="manual">
        <p class="pop-text">已更新歌单</p>
        <Icon :size="20" @click="togglePlaylistShow" class="mode-item" slot="reference" type="playlist"/>
      </el-popover>
      
      <Icon :size="20" @click="goGitHub" class="mode-item" type="github" />
    </div>
    <!-- 进度 -->
    <div class="progress-bar-wrap"></div>
    
    <!-- 媒体 -->
    <audio></audio>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions} from '@/store/music'
import Share from '@/components/share'
const playModeMap = {
  sequence: {
    code: 'sequence',
    icon: 'sequence',
    name: '顺序播放'
  },
  loop: {
    code: 'loop',
    icon: 'loop',
    name: '单曲循环'
  },
  random: {
    code: 'random',
    icon: 'random',
    name: '随机播放'
  },
}

export default {
  components: { Share },
  data() {
    return {
      isPlayErrorPromptShow:false,
      songReady: false,
    }
  },
  methods: {
    togglePlaying() {
      if (!this.currentSong.id) return
      this.setPlayingState(!this.playing)
    },
    togglePlayerShow() {
      this.setPlayerShow(!this.isPlayerShow)
    },
    prev() { if(this.songReady) this.startSong(this.prevSong) },
    next() { if(this.songReady) this.startSong(this.nextSong) },
    onChangePlayMode() {
      const modeKeys = Object.keys(playModeMap)
      const currentModeIndex = modeKeys.findIndex(
        (key) => playModeMap[key].code === this.playMode
      )
      const nextIndx = (currentModeIndex + 1) % modeKeys.length
      const nextModeKey = modeKeys[nextIndx]
      const nextMode = playModeMap[nextModeKey]
      this.setPlayMode(nextMode.code)
    },
    togglePlaylistShow() {
      this.setPlaylistShow(!this.isPlaylistShow)
    },
    goGitHub() {
      window.open('https://github.com/chen-zuo/notease-cloud-music')
    },
    ...mapMutations([
      'setCurrentTime',
      'setPlayingState',
      'setPlayMode',
      'setPlaylistShow',
      'setPlayerShow',
    ]),
    ...mapActions(['startSong']),
  },
  computed: {
    playIcon() {
      return this.playing ? 'pause' : 'play'
    },
    playControlIcon() {
      return this.isPlayerShow ? 'shrink' : 'open'
    },    
    shareUrl() {
      return `https://music.163.com/#/song?id=${this.currentSong.id}`
    },
    currentMode() {
      return playModeMap[this.playMode]
    },
    modeIcon() {
      return this.currentMode.icon
    },
    playModeText() {
      return this.currentMode.name
    },
    ...mapState([
      'currentSong',
      'currentTime',
      'playing',
      'playMode',
      'isPlaylistShow',
      'isPlaylistPromptShow',
      'isPlayerShow',
    ]),
    ...mapGetters(['hasCurrentSong', 'prevSong', 'nextSong']),
  }
}
</script>

<style lang="scss" scoped>
.mini-player {
  position: fixed;
  z-index: $mini-player-z-index;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  height: $mini-player-height;
  padding: 8px 16px;
  padding-right: 24px;
  background: var(--body-bgcolor);
  box-shadow: 0px 0px 1px 0px rgba($color: pink, $alpha: 0.5);

  .song {
    display: flex;
    flex: 4;
    overflow: hidden;

    .img-wrap {
      position: relative;
      margin-right: 8px;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      @include img-wrap(40px);

      img {
        &.blur {
          filter: blur(2px);
        }
      }

      .player-control {
        @include abs-center;
        opacity: 0;
        transition: all ease-in-out .3s;
      }
      .player-control:hover{
        opacity: 1;
      }

      .mask {
        @include abs-stretch;
        background: rgba(0, 0, 0, 0.2);
      }
    }

    .content {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .top {
        display: flex;
        align-items: flex-end;
        white-space: nowrap;

        .name {
          color: var(--font-color-white);
          @include text-ellipsis;
        }

        .split {
          font-size: $font-size-xs;
          margin: 0 4px;
        }

        .artists {
          font-size: $font-size-xs;
          @include text-ellipsis;
        }
      }

      .time {
        font-size: $font-size-xs;
        color: var(--font-color-grey);

        .split {
          margin: 0 4px;
        }
      }
    }
  }

  .control {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    @include flex-center();

    .play-icon {
      @include flex-center();
      position: relative;
      width: 45px;
      height: 45px;
      margin: 0 16px;
      border-radius: 50%;
      background: $theme-color;
      cursor: pointer;

      i {
        color: #fff;
      }
      .icon-play {
        transform: translateX(1px);
      }
    }

    .icon {
      color: $theme-color;
    }
  }

  .mode {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 6;

    .mode-item {
      display: block;
      margin-right: 16px;
      width: 22px;
    }

    .volume-item {
      margin-right: 22px;
    }
  }

  .progress-bar-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: -14px;
  }
}
.icon {
  color: var(--font-color);
  cursor: pointer;
}
.icon:active{
  transform: scale(.8);
  transition: all ease-in-out;
}
.pop-text{
  text-align: center;
}
</style>

