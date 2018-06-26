<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App: child  click me" @poverMsg="poverMsg"/>
    <div>{{childWords}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/HelloWorld.vue'
/**
 * components: {} 引入子组件
 */
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      childWords: ''
    }
  },
  methods: {
    poverMsg (val) {
      this.childWords = val
    }
  }
}
</script>
