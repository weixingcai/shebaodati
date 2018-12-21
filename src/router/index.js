import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/list/:text',
      name:'List',
      component:List
    }
  ]
})
