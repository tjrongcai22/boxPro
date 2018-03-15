import * as types from './mutations-type.js'

const actions = {

  //添加盒子信息
  [types.ADDBOXNAV]:({commit},params)=>{
    commit(types.ADDBOXNAV,params);
  },

  //点击盒子路由状态
  [types.NAVINDEX]:({commit},params)=>{
    commit(types.NAVINDEX,params);
  },




}

export default actions;
