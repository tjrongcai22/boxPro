import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import store from './vuex/index.js'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
