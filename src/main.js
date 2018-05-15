// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
// TODO: 按需加载所需要的图标
import 'font-awesome/css/font-awesome.min.css'

Vue.prototype.$ajax = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

// 路由拦截
router.beforeEach((to, from, next) => {
  if(to.matched.some(r => r.meta.requireAuth)) {
    if(false) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
