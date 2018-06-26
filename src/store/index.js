import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  }
})

// 将store分隔成模块（module），每个模块拥有自己的state，mutation，action，getter，甚至是嵌套子模块
