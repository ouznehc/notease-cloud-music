<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { hasParent } from "@/utils"
export default {
  name: 'Toggle',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    reserveDoms: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickEvent(e){
      const triggerElement = e.target //点击对象
      const firstChildElm = this.$slots.default[0].elm
      const defaultReserveDoms = Array.from(
        document.querySelectorAll('.el-loading-mask, .el-loading-spinner')
      )
      const reserve = defaultReserveDoms.concat(firstChildElm, this.reserveDoms)
      if(hasParent(triggerElement, reserve)) return 
      this.$emit('update:show', false)
    },
    bindClick(){
      document.addEventListener('mousedown', this.clickEvent)
    },
    removeClick(){
      document.removeEventListener('mousedown', this.clickEvent)
    }
  },
  watch: {
    show(val){
      val ? this.bindClick() : this.removeClick()
    }
  }
}
</script>