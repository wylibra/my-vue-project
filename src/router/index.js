import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/views/pages/Home/index.vue').default
    },
    {
      path: '/demo',
      component: require('@/views/pages/demo/index.vue').default,
      children: [
        {
          path: 'demoDebounce',
          name: 'demoDebounce',
          component: () => import('@/views/pages/demo/demoDebounce/index.vue')
        }
      ]
    }
  ]
})

// mode: 'hash', 默认使用“hash”,所以设置与否浏览器的URL显示像这样(http://localhost:8000/#/firsts/first ),
// mode: 'history'，浏览器URL显示为(http://localhost:8000/firsts/first),设置“history”后链接中没有#
