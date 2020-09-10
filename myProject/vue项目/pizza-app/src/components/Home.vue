<template>
<div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>欢迎大家品尝pizza!</h1>
            <h2>这里有你喜欢的pizza!</h2>
            <button @click="gotoMenu" class="btn btn-success">Let's order</button>            
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    methods:{
        gotoMenu() {
            //  跳转到上一次浏览的页面
            // this.$router.go(-1);

            // 指定跳转到某一个地址
            // this.$router.replace('/menu')

            //  指定跳转路由的名字下
            // this.$router.replace({name:'menuLink'});

            //  通过push跳转  , "  常用这种 "
            this.$router.push({name: 'menuLink'})
        }
    }
}
</script>
<style>
#home{
    background: url('../../src/assets/timg.jpg');
    height: 80vh;       /* 80vh 表示占用高度为80% */
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    background: #eee;
    opacity: 0.9;
    max-width: 70vw;  /*  在谷歌上支持，其他浏览器支持不太好  */
    margin: 0,auto;
    padding: 20px 0;
}
</style>
