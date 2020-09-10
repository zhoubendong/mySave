<template>
    <div id="single-blog">
        <h1>博客详情</h1>
        <hr>
        <div class="con">
            <h2>{{blog.title}}</h2>
            <span>作者：{{blog.author}}</span>
            <span>分类：</span>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <article>{{blog.content}}</article>
            <!-- <div class="like">
                <div class="like-btn" v-on:click:prevent="postLike">
                    <span class="like-text"></span>
                    <span class="number"></span>
                </div>
            </div>
            <div class="comment">
                <input type="text" v-model="blogLike.likeText">
            </div> -->
        </div>

    </div>
</template>
<script>
import axios from '../axios-auth.js'

export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      blogLike: {
          likeNumber: "20",
          likeText:"",
      }
    };
  },
//    methods: {
    
//       postLike: function() {//将数据发送出去
//          axios.post("/posts.json",this.blogLike)
//               .then((data)=>{
//                 console.log(this.blogLike);
//               })
            
//       }
//   },
  created() {
    axios.get("/posts/" + this.id + ".json")
      .then(function(data) {
        // return data.json();
        return data.data;
      })
      .then((data) =>{
        this.blog = data;

      });
  }
};
</script>
<style scoped>
#single-blog {
    min-height: 540px;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}
hr{    
    border: 2px dotted gray;
}
.con{
    width:100%;
    height: 100%;
    margin:0 auto;
    text-align: center;
}
span{
    margin: 0 0 40px 40px;
}
ul,li{
    text-decoration: none;
    display: inline-block;
    margin:0;
    padding: 0;
}
ul{
    margin-bottom: 40px;
}
li{
    margin: 0 8px
}
article{
    font-size: 20px;
}
h2{
    font-size: 32px
}
</style>

