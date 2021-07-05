import { createNamespacedHelpers } from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namesapced: true,
  state,
  getters,
  mutations,
  actions
}

export const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('music')