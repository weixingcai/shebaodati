import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'

import Index from '@/page/Index'
import List from '@/page/List'
import Detail from '@/page/Detail'
import Message from '@/page/Message'

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
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    },
    {
      path:'/message',
      name:'Message',
      component:Message
    }
  ]
})
