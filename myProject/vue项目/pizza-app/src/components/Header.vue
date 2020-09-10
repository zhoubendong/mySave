<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="py-2" href="#">                 <!--矢量图 -->
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
            <a href="/" class="navbar-brand">Pizza点餐系统</a>
            <ul class="navbar-nav">
                <!-- <li><router-link tag="div" to="/" class="nav-link"></router-link>主页</li>           tag="div" 修改默认标签，，默认标签是a标签   -->
                <!-- <li><router-link class="nav-link" :to="homeLink" >主页</router-link></li>   第一种跳转方式-->
                <!-- <li><router-link class="nav-link" to="/" >主页</router-link></li>    第二种-->
                <li><router-link class="nav-link" :to="{name:'homeLink'}" >主页</router-link></li><!--   第三种  -->
                <li><router-link class="nav-link" :to="{name:'menuLink'}" >菜单</router-link></li>
                <li><router-link class="nav-link" :to="{name:'adminLink'}" >管理</router-link></li>
                <li><router-link class="nav-link" :to="{name:'aboutLink'}" >关于我们</router-link></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li><router-link class="nav-link" :to="{name:'loginLink'}" >登录</router-link></li>
                <li><router-link class="nav-link" :to="{name:'registerLink'}" >注册</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            homeLink:'/'
        }
    }
}
</script>
<style scoped>

</style>

