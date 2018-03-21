import $axios from './axios.js'

//获取xxx
export const getList = () => {
  return $axios.get('/index/list',null);
}
