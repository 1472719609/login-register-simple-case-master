import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRegister from '../views/loginRegister.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //     path:'/',
    //     name:'news',
    //     component: news
    // },

  {
	  path:'/',
	  name:'login',
	  component: loginRegister
  },
    // {
    //     path:'/',
    //     name:'news',
    //     component: news
    // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
