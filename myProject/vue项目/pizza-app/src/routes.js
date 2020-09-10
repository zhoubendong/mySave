/*      
        路由管理的代码      

*/

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About.vue'
import Login from './components/Login'
import Register from './components/Register'

//   二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//  三级路由
import Phone from './components/about/Contact/Phone'
import PersonName from './components/about/Contact/PersonName'

//   export   公开  ，在 main.js 中使用  
export const routes = [        
    {path:'/',name:"homeLink",components:{
        default: Home,  //   进入时默认选择home组件
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    }},
    {path:'/menu',name:"menuLink",component: Menu},
    {path:'/admin',name:"adminLink",component: Admin,
      // beforeEnter: (to,from,next)=> {          //   独享路由守卫
      //   if(to.path == '/login' || to.path == '/register'){
      //     next();
      //   }else {
      //     alert('请先登录');
      //     next('/login');
      //   }
      // }
  },
    {path:'/about',name:"aboutLink",redirect: '/about/contact',component: About, children:[
      {path:'/about/contact',name: "contactLink",component: Contact,children:[
        {path:'/phone',name: "phoneNumber",component: Phone},
        {path:'/personname',name: "personName",component: PersonName},
      ]},
      {path:'/about/delivery',name: "deliveryLink",component: Delivery},
      {path:'/history',name: "historyLink",component: History},
      {path:'/about/orderingGuide',name: "orderingGuideLink",component: OrderingGuide},
    ]},
    {path:'/login',name:"loginLink",component: Login},
    {path:'/register',name:"registerLink",component: Register},
    {path:'*',redirect: '/'}                //    重定向，当用户输错地址时让它跳转到 Home 下
  ]