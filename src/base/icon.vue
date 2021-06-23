<script>
  import { toRem } from '@/utils'
  export default {
    name: 'Icon',
    props:{
      size: {
        type: Number,
        default: 16
      },
      type: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: ''
      },
      backdrop: {
        typeof: Boolean,
        default: false
      }
    },
    methods: {
      getIconCls(){
        const { type, color } = this
        let cls = color ? `icon-${type} icon-color-${color}` : `icon-${type}`
        return cls
      },
      getIconStyle(){
        let {size} = this
        return { fontSize: toRem(size) }
      },
      click(e){
        this.$emit('click',e)
      }
    },
    render(){
      const { backdrop, size } = this
      const Icon = (
        <i class={`iconfont icon-component ${this.getIconCls()}`} style={this.getIconStyle()} onClick={this.click}/>
      )
      if(backdrop){
        const backDropSizeRatio = 1.56
        const backDropSize = toRem(backDropSizeRatio * size)
        return(
          <span class="backdrop" style={{ width: backDropSize, height: backDropSize }}>{Icon}</span>
        )
      }
      return Icon
    }
  }

</script>
<style lang="scss" scoped>
.backdrop {
  display: inline-block;
  @include flex-center;
  border-radius: 50%;

  &:hover {
    background: var(--round-hover-bgcolor);
  }
}

.icon-component {
  cursor: pointer;
}

.icon-color {
  // 通过prop传入这几个字段
  // 可以使用默认的几个颜色
  &-theme {
    color: $theme-color;
  }
  &-white {
    color: $white;
  }
  &-shallow {
    color: var(--font-color-shallow-grey);
  }
}
</style>