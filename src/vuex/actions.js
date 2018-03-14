import * as types from './mutations-type.js'

const actions = {

  //添加初始化第一台盒子id
  [types.ADDFIRSTID]:({commit},params)=>{
    commit(types.ADDFIRSTID,params);
  },


}

export default actions;
