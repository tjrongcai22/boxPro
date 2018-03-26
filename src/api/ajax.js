import $axios from './axios.js'

//获取盒子列表
export const getList = () => {
  return $axios.get('/index/list',null);
}

//搜索盒子
export const searchBox = (params)=>{
  return $axios.get('/index/list',params);

}
