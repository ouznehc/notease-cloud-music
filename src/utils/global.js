// 全局引入
import {
  Input,
  Dialog,
  Button,
  Loading,
  Carousel,
  CarouselItem,
  Table,
  TableColumn,
  Popover,
  Pagination
} from "element-ui"
import * as utils from './index'
import VueLazyload from 'vue-lazyload'
const EMPTY_IMG = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"


export default {
  install(Vue){
    const requireComponent = require.context("@/base",true,/[a-z0-9]+\.(jsx?|vue)$/i)
    //批量注册base组件
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name
      if(componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    })
    Vue.prototype.$ELEMENT = { size: 'small' }
    Vue.prototype.$utils = utils
    Vue.use(Input)
    Vue.use(Dialog)
    Vue.use(Button)
    Vue.use(Loading)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
    Vue.use(Pagination)

    Vue.use(VueLazyload, {
      loading: EMPTY_IMG,
      error: EMPTY_IMG,
    })
  }
}