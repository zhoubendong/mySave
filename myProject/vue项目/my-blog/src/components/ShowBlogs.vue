<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h2>博客总览</h2>
    <hr>
    <!-- 请搜索标题关键字查询：<input type="text" v-model="search" placeholder="搜索"> -->
    <div class="search-pal">
      <div class="sear-sousuo">
        <img src="../assets/搜索.png">
      </div>                      
      <div class="sear-inp">
        <input type="text"  v-model="search" placeholder="请搜索标题关键字查询">        
      </div>
      <div class="sear-camera">
        <img src="../assets/照相机.png">       
      </div>
		</div>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <div class="wapper"> 
        <img src="../assets/时间.png">
        <span>创建时间：{{blog.createdate}}</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <img src="../assets/icon_principal.png">
        <span>作者：{{blog.author}}</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <img src="../assets/icon_workfile_line.png">
        <span>分类：</span>
        <ul>
                <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
        
      </div>
      <article>
        {{blog.content | snippet}}
      </article>
      <div class="read">
        <router-link v-bind:to="'/blog/'+blog.id">阅读全文&nbsp;»</router-link>
      </div>     
    </div>
  </div>
</template>

<script>
import axios from '../axios-auth.js'
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    axios.get("/posts.json") //本地的json文件只能放在static文件夹下
        .then(function(data) {
          // console.log(data.json());
          // this.blogs = data.body.slice(0,10);// 只展示第0至10条
          // console.log(this.blogs);
          // return data.json();
          //console.log(data.data)
          return data.data
        })
        .then((data) =>{
          let blogsArray = [];
          for (let key in data) {
            // console.log(data[key]);
            data[key].id = key;
            blogsArray.push(data[key]);
          }
          // console.log(blogsArray);
          this.blogs = blogsArray.reverse();
          // console.log(this.blogs);
        });
  },
  //    搜索功能
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  //  当前组件下的局部过滤器
  filters: {
    toUppercase: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1,40) //  首字母大写， 让标题最多展示的长度
    },
    // 'snippet':function(value){
    //     return value.slice(0,200) + ' ...';
    // }
    snippet(value) {
      return value.slice(0, 160) + " ...";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  color: #666;
}
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #777;
}
.single-blog h2 {
  margin: 15px 0 10px 0;
}
.wapper {
  margin: 5px 0 16px 0;
}
.wapper img {
  width: 20px;
  height: 20px;
  vertical-align: -3px;
}
ul,
li {
  text-decoration: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #666;
}
ul {
  margin-bottom: 15px;
}
li {
  margin: 0 8px;
}
.single-blog article {
  font-size: 20px;
  color: #444;
}
/* 搜索 */
.search-pal {
  width: 70%;
  height: 40px;
  border: 2px solid #50667c;
  border-radius: 17px;
}

.sear-sousuo{
  width: 12%;
  display: inline-block;
  text-align: center;
}
.sear-sousuo img{
  display: inline-block;
  width:30px;
  height: 30px;
  margin-bottom:4px;
}
.sear-camera{
  width: 12%;
  display: inline-block;
  text-align: center;
}
.sear-camera img{
  display: inline-block;
  width:30px;
  height: 30px;
  margin-bottom:4px;

}
.sear-inp { 
  width:71%;
  height: 36px;
  margin-top:2px;
  overflow: hidden;
  display: inline-block;
}
.sear-inp input {
  font-size:16px;
  padding: 7px 1px;
  text-indent: 10px;
  height: 24px;
  line-height: 24px;
  width:100%;
  border: none;
  outline: 0;
  background:#fff;
}


.read {
  margin-top: 15px;
  width: 80px;
  height: 35px;
  background: #2c3e50;
  text-align: center;
  line-height: 35px;
  padding: 3px 10px;
  border-radius: 7px;
}
.read a {
  text-decoration: none;
  color: #fff;
  display: inline-block;
}
.read:hover {
  background: #3f576e;
}
hr {
  margin-bottom: 30px;
  border: 2px solid gray;
}
</style>
