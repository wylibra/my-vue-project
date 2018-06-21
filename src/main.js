import Vue from 'vue'
import root from './views'
import router from './router'
import store from './store'

import './views/styles/index.less'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(root)
}).$mount('#app')

/**
 * render: h => h(root)
 * $mount('#app')
 * Vue.config.productionTip = true
 */
