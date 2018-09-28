import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
    	path:'/',
    	redirect: '/home',
    },
    {
      path:'/home',
      name:'home',
      component:(resolve) => require(['@/page/home'],resolve)
    },
    {
      path:'/about',
      name:'about',
      component:(resolve) =>require(['@/page/about'],resolve)
    },
    {
      path:'/appert',
      name:'appert',
      component:(resolve) =>require(['@/page/appert'],resolve)
    },
    {
      path:'/navs',
      name:'name',
      component:(resolve)=>require(['@/components/navs'],resolve)
    }
  ]
})
