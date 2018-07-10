<template>
  <div class="hello-container">
    <h3 @click="childClick">{{ msg }}</h3>
    <div>过滤器使用(千分符)：{{val | localeString}}</div>
    <div v-for="(user, index) in users" :key="index">
      {{user}}
    </div>
  </div>
</template>

<script>
/**
 * props: {} 子组件获取父组件的参数值
 */
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      val: '123450670'
    }
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    ...mapActions('user', ['getUsers']), // 将 `this.getUsers()` 映射为 `this.$store.dispatch('user/getUsers')`
    async childClick () {
      await this.getUsers()
      this.$emit('poverMsg', 'child‘s content.')
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
  cursor: pointer;
}
</style>
