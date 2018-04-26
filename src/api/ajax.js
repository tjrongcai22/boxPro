import $axios from './axios.js'

//获取盒子列表
export const getList = () => {
  return $axios.get('/index/list',null);
}

//搜索盒子
export const searchBox = (params)=>{
  return $axios.get('/index/list',params);

}

//获取盒子详细信息
export const selectBoxByPlcHalfNum = (params)=>{
  return $axios.get('/za/getZA',params);

}

//测试
export const test = ()=>{
  return $axios.get('/ze/getZE',null)
}

//获取历史数据记录
export const getHistory = (params)=>{
    return $axios.get('/hb/getHb',params);

}
