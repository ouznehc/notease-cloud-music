<template>
  <el-dialog class="confirm-dialog" :modal="false" :width="$utils.toRem(320)" :visible.sync="visible" v-if="visible">
    <div class="title">{{ title || '提示' }}</div>
    <div class="confirm-body">{{ text }}</div>
    <span class="dialog-footer" slot="footer">
      <el-button 
        @click="confirmAndClose" 
        class="confirm-btn" 
        type="primary">
        确认
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
const Confirm = {
  name: 'Confirm',
  props: ['visible', 'text', 'title', 'onConfirm'],
  methods: {
    confirmAndClose() {
      this.onConfirm && this.onConfirm()
      this.visible = false
    }
  }
}
export default Confirm

import Vue from 'vue'
export const confirm = function(text, title, onConfirm=()=>{}){
  if (typeof title === 'function') {
    onConfirm = title
    title = undefined
  }
  const ConfirmConstructor = Vue.extend(Confirm)
  let instance =  new ConfirmConstructor({
    propsData:{text, title, onConfirm}
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })
}
Vue.prototype.$confirm = confirm;

</script>

<style lang="scss" scoped>
.confirm-dialog {
  /deep/.el-dialog__body {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .confirm-body {
    line-height: 20px;
  }
  .confirm-btn {
    width: 100%;
  }
}
</style>