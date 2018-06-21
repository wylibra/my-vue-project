const state = () => {

}

const getters = {

}

const actions = {

}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

/**
 * 命名空间
 * 默认情况下，模块内部的action ,mutation，getter是注册在全局命名空间的,–这样使得多个模块能够对同一mutation或者action做出响应；
 * 如果希望你的模块更加自包含或者提高可重用性，你可以通过添加namespaced:true 的方式使其成为命名空间模块，当模块被注册后，他的所有getter,action，mutation都会自动根据模块注册的路径调整命名；
 */
