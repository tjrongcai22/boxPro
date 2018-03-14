import * as types from './mutations-type.js'
const mutations = {
  //初始化添加第一台盒子id
  [types.ADDFIRSTID](state,params){
    state.initFirstId = params;
  },


}

export default mutations;
