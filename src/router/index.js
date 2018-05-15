import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/pages/login/login')
const NotFound = () => import('@/pages/notFound/notFound')
const Recongnition = () => import('@/pages/recongnition/recongnition')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/notFound'
    }, {
      path: '/notFound',
      name: 'notFound',
      component: NotFound
    }, {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/recongnition',
      name: 'recongnition',
      meta: {
        requireAuth: true
      },
      component: Recongnition
    }
  ]
})
