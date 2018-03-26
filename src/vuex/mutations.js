import * as types from './mutations-type.js'
const mutations = {

  //添加盒子信息
  [types.ADDBOXNAV](state,params){
    state.navList = params;
  },

  //点击盒子路由状态
  [types.NAVINDEX](state,params){

    state.navList = state.navList.map( (item,index)=>{

      if(item.plcSnnum == params){
        item.active = true;
      }else{
        item.active = false;
      }
      return item;

    } );

  },


}

export default mutations;
