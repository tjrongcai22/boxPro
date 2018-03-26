import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  navList:[] , //盒子 1在线 0离线 唯一标识

}

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
