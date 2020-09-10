// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  模块化的引入时不用加文件后缀
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'//使用get、post方法
import VueRouter from 'vue-router'
import Routes from './routes'
// import axios from './axios-auth'



// 全局配置
// axios.defaults.baseURL = 'https://wd7869756315ozmdzd.wilddogio.com'
// axios.defaults.headers.common['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'


// Vue.use(axios)
Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)
         //  自定义指令

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(9).slice(2, 8);
    el.style.fontSize = '30px'
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1000px'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '500px';
    }
    if(binding.arg == 'column'){
      // el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
})
       //  全局api 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase().slice(0,30);
// })
// Vue.filter('snippet',function(value){
//   return value.slice(0,200) + ' ...';
// })

      //  创建路由；
const router = new VueRouter({
  routes: Routes,
  mode:"history",// 去掉网址中的 #
})









/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
