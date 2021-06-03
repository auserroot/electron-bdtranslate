import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Translate from '@/components/Translate.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/translate',
      name:'Translate',
      component:Translate
    }
  ]
})
