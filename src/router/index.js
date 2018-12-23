import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      // alias:'/'
    },
    {
      path:'/list',
      name:'List',
      component:List
    }
  ]
})
