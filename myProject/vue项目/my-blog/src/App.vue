<template>
  <div id="app">
    <!-- <addBlog></addBlog>
    <showBlogs></showBlogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import BlogFooter from './components/BlogFooter'
import About from './components/About'



export default {
  name: 'App',
  components: {
    AddBlog,ShowBlogs,BlogHeader,BlogFooter,About
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
  background:rgb(245, 244, 244);
  margin:0;
  padding:0;
}



</style>
