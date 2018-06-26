<template>
  <div class="hello">
    <h3 @click="childClick">{{ msg }}</h3>
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
    msg: String
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    childClick () {
      this.$emit('poverMsg', 'child‘s content.')
    }
  },
  created () {
    this.getUsers()
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
