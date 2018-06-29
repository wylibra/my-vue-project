import Vue from 'vue'
import App from '@/views'
import router from '@/router'
import store from '@/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './views/styles/index.less'
import * as myFilters from '@/filters'

// 全局注入 filters
Object.keys(myFilters).forEach(key => {
  Vue.filter(key, myFilters[key])
})

Vue.config.productionTip = true
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
 * render: h => h(root)
 * $mount('#app')
 * Vue.config.productionTip = true
 */
