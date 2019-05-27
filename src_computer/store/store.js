/*
* 配置stare
* vuex 总结：action相当于vm实例上的methods
*            getters相当于vm计算属性
*            state相当于vm实例中的data
*            mutation相当于传输工具，把action的数据更新到state中
*            mutations_type 相当于包装数据的变量
* */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)


export default  new Vuex.Store( {
  state, //状态对象
  actions, // 包含多个对应事件的回调函数
  mutations, // 包含多个更新state函数对象
  getters // 包含多个getters的计算属性
})
