<template>
    <h1>Admin</h1>
</template>
<script>
export default{
    data() {
        return {
            name: "Henry"
        }
    },
    //            组件内守卫   
    // beforeRouteEnter: (to,from,next) => {        //   进入路由前
    //     // alert('hello' + this.name);  //   data 渲染前已经执行，找不到data属性
    //     // next();
    //     next(vm =>{              //    next 回调  ，当执行时data已渲染完
    //         alert('hello' + vm.name)
    //     })
    // },

    // beforeRouteLeave: ((to, from , next) =>{      //   离开路由后
    //     if(confirm('确定离开吗') == true) {
    //         next()
    //     }else{
    //         next(false);
    //     }
    // })
}
</script>
