import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../base/Login.vue'
import Container from '../base/Container.vue'


export default new Router({

  routes: [
    { path:'', component:Container },
    { path:'/login', component:Login },
    { path:'/container',component:Container},
    { path:'*',redirect:'/container'}

  ]


})
