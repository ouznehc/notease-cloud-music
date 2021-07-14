<template>
  <div class="theme">
    <el-popover pacement="top" width="230" trigger="click" >
      <div class="themes">
        <div class="theme-item" v-for="(val, key, index) in themeMap" :key="index" @click="changeTheme(key)">
          <div class="theme-icon" :style="val.style"></div>
          <p>{{val.title}}</p>
        </div>
      </div>
      <Icon :backdrop="true" slot="reference" type="skin"/>
    </el-popover>
  </div>
</template>

<script>
import storage from "good-storage"
import variables from "@/style/themes/variables"
import variablesWhite from '@/style/themes/variables-white'
import variablesRed from '@/style/themes/variables-red'
export default {
  created(){
    this.themeMap = {
      dark: {
        title: '深色',
        file: variables,
        style:{ backgroundColor: '#202020' }
      },
      white: {
        title: '浅色',
        file: variablesWhite,
        style: {
          backgroundColor: '#F6F6F6',
          border: '1px solid #EBEAEA'
        }
      },
      red: {
        title: '红色',
        file: variablesRed,
        style: { backgroundColor: '#D33A31' }
      }
    }
    this.changeTheme(storage.get('__theme__', 'dark'))
  },
  data(){
    return { themeMap: {} }
  },
  methods:{
    changeTheme(themeKey){
      storage.set('__theme__', themeKey)
      const theme = this.themeMap[themeKey].file
      Object.keys(theme).forEach(key => {
        const val = theme[key]
        document.documentElement.style.setProperty(key, val)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.themes {
  @include flex-center();

  .theme-item {
    @include flex-center();
    flex-direction: column;
    margin: 0 8px;
    cursor: pointer;

    .theme-icon {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-bottom: 4px;
    }
  }
}
</style>