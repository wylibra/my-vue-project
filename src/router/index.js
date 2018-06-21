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
      path: '/about',
      name: 'about',
      component: require('@/views/pages/About/index.vue').default
    },
    {
      path: '/father',
      component: require('@/views/pages/father/index.vue').default,
      children: [
        {
          path: 'child1',
          name: 'child1',
          component: () => import('@/views/pages/father/child1.vue')
        },
        {
          path: 'child2',
          name: 'child2',
          component: () => import('@/views/pages/father/child2.vue')
        }
      ]
    }
  ]
})

// mode: 'hash', 默认使用“hash”,所以设置与否浏览器的URL显示像这样(http://localhost:8000/#/firsts/first ),
// mode: 'history'，浏览器URL显示为(http://localhost:8000/firsts/first),设置“history”后链接中没有#
