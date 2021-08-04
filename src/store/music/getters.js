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

// 当前是否有歌曲在播放
export const hasCurrentSong = (state) => {
  let data = state.currentSong.id
  return data !== null && data!== undefined
}

export const nextSong = (state, getters) => {
  const { playlist, playMode } = state
  const nextStartMap = {
    [playModeMap.sequence.code]: getSequenceNextIndex,
    [playModeMap.loop.code]: getLoopNextIndex,
    [playModeMap.random.code]: getRandomNextIndex
  }
  const getNextStart = nextStartMap[playMode]
  const index = getNextStart()

  return playlist[index]

  // 顺序
  function getSequenceNextIndex () {
    let nextIndex = getters.currentIndex + 1
    if (nextIndex > playlist.length - 1) {
      nextIndex = 0
    }
    return nextIndex
  }

  // 随机
  function getRandomNextIndex () {
    return getRandomIndex(playlist, getters.currentIndex)
  }

  // 单曲
  function getLoopNextIndex () {
    return getters.currentIndex
  }
}

// 上一首歌
export const prevSong = (state, getters) => {
  const { playlist, playMode } = state
  const prevStratMap = {
    [playModeMap.sequence.code]: genSequencePrevIndex,
    [playModeMap.loop.code]: getLoopPrevIndex,
    [playModeMap.random.code]: getRandomPrevIndex
  }
  const getPrevStrat = prevStratMap[playMode]
  const index = getPrevStrat()

  return playlist[index]

  function genSequencePrevIndex () {
    let prevIndex = getters.currentIndex - 1
    if (prevIndex < 0) {
      prevIndex = playlist.length - 1
    }
    return prevIndex
  }

  function getLoopPrevIndex () {
    return getters.currentIndex
  }

  function getRandomPrevIndex () {
    return getRandomIndex(playlist, getters.currentIndex)
  }
}