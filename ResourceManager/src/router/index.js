import Vue from 'vue'
import Router from 'vue-router'
import Resourcevm from '@/components/Resourcevm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resourcevm',
      component: Resourcevm
    }
  ]
})
