import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import LoginPage from "@/components/LoginPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WelcomePage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
