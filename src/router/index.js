import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../base/Login.vue'
import Container from '../base/Container.vue'
import Tabs from '../base/Tabs.vue'
import Welcome from '../components/Welcome.vue'


export default new Router({

  routes: [
    { path:'', component:Container ,redirect:'/container/welcome', },
    { path:'/login', component:Login },
    { path:'/container',
      component:Container,
      children:[
        { path:'tabs/:halfSn', component:Tabs, name:'selectById' },
        { path:'welcome' , component:Welcome },

      ]
    },

    { path:'*',redirect:'/container/welcome'}

  ]


})
