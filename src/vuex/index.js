import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  navList:[] , //盒子

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
