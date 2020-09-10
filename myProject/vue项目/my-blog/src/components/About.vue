<template>
    <div class="about-blog">
        <div class="header">
            <h2>关于博主</h2>
            <img src="../assets/狼.png" alt="">
        </div>
        <h3>Blog</h3>
        <p>本博客用于记录平时工作和学习中的知识点，总结经验，用于分享，如有错误地方烦请指正。</p>
        <p>博客重点在于分享web前端开发知识，或涉其它。</p>
        <h3>Contact</h3>
        <p>Name：东羽</p>
        <p>QQ：1418307779</p>
        <p>Email：13920438325@163.com</p>
        <p>Github：https://github.com/zhoubendong/zhoubendong.github.io</p>
        <h3>Donate</h3>
        <p>如果您觉得有文章能帮助到你，那就请作者喝杯咖啡吧！</p>
        <div class="wapper">
            <img src="../assets/my二维码.png">
        </div>
    </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
.about-blog{
    margin:20px auto;
    max-width: 700px;
    padding: 20px;
}
.about-blog .header{
    text-align: center;
}
.header img{
    width: 170px;
    height:220px;
    /* border-radius: 100%; */
}
h3{
    color: #444;
    font-size: 22px;
}
p{
    font-size: 18px;
    color: #666;
}
.wapper{
    text-align: center;
}
.wapper img{
    width: 200px;
    height: 200px;
}
</style>
