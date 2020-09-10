import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'   //  引入 routes 文件，没有default时要加{}

Vue.use(VueRouter)       //   路由


const router = new VueRouter({
  routes,
  mode:'history',    //   去掉路由地址中的  #  符号
  scrollBehavior(to,from,savePosition){    
    // return { x: 0, y: 100}
    // return { selector: '.btn'}
    if(savePosition) {    //    只有在浏览器里触发 前进后退按钮时才会触发,保存页面的位置，返回时还在该位置。
      return savePosition;    
    }else{
       return{x: 0, y: 0}
    }
  }
})

//  全局守卫
// router.beforeEach((to,from,next) =>{
//   // alert('还没有登录，请先登录！');
//   // next();
  
//   // 判断store.gettes.isLogin === false;
//   // console.log(to)
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还没有登录，请先登录！');
//     next('/login');
//   }
// })

 //后置钩子  ，每切换一次页面（组件）都会弹出   ,不太使用，一般使用全局守卫
// router.afterEach((to,from) =>{
//   alert('after each');
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)     //   h  是   creatElement
})
