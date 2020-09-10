import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import About from './components/About.vue'

export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/blog/:id",component:SingleBlog}, // 路由参数
    {path:"/about",component:About},

]