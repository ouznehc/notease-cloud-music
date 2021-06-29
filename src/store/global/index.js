import state from './state'
import mutations from './mutations'
import { createNamespacedHelpers } from 'vuex'

export default {
  namespaced: true,
  state,
  mutations
}

export const { mapState, mapMutations } = createNamespacedHelpers('global')