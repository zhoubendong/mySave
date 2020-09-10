<template>
    <nav>
        <span>东羽的博客</span>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link><!-- 路由中跳转不使用a标签 -->
                <router-link to="/add" exact>添加博客</router-link>
                <router-link to="/about" exact>关于博主</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'blog-header'
}
</script>

<style scoped> /* scoped 只让当前的域有用  */

span{
    color: #fff;
    font-size:24px;
    font-weight: bolder;
    display: inline-block;
    margin-top:40px;
    margin-bottom: 13px;
}
ul{
    display: inline-block;
    list-style-type: none;
    text-align: center;
    margin: 0 auto;
}
li{
    display: inline-block;
    margin:0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav{
    background: #2c3e50;
    height:128px;
    text-align: center
    /* line-height:130px; */
    /* margin-bottom:40px; */
}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
}
</style>


