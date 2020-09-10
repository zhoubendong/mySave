<template>
    <div class="menu">
        <!-- <Footer></Footer> -->
        <!-- <div class="tiao" :style="{background:`${background}`,color:`${color}`}"> -->
        <h2>调色板</h2>
        <div class="tiao" :style="{background,color}">
          调色板
        </div>
        <input type="range" max="255" min="0" v-model="r">
        <input type="range" max="255" min="0" v-model="g">+
        <input type="range" max="255" min="0" v-model="b">
        <div>
          rgb为：{{`r：${r},g：${g},b：${b}`}}
        </div>
        <div>
          十六进制为：#{{system}}
        </div>
    </div>
</template>

<script>
// import { MXSelectUsers } from '../core/mxApi'
export default {
  // name: "menu",
  data() {
    return {
      r: 0,
      g: 0,
      b: 0,   
    };
  },
  mounted() {

  },
  computed: {
    background() {
      return `rgb(${this.r},${this.g},${this.b})`;
    },
    color() {
      return `rgb(${this.g},${this.r},${this.b})`;
    },
    system() {
      let a = Number(this.r).toString(16);
      let b = Number(this.g).toString(16);
      let c = Number(this.b).toString(16);
      if(a.length < 2) {
        a = '0' + a
      }
      if(b.length < 2) {
        b = '0' + b
      }
      if(c.length < 2) {
        c = '0' + c
      }
      return a + b + c
    }
  },
  methods: {
  
    // selecet(){
    //   MXSelectUsers()
    //     .then(res => {
    //       console.log('select--->'+JSON.stringify(res))
    //     })
    // },
    // dispatch(){
    //   this.$store.dispatch('JIA')
    // }
  }
};
</script>


<style scoped >
.tiao {
  border-radius: 100%;
  width: 20vw;
  height: 20vw;
  border: 1px solid #aaa;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type="range"] {
  width: 60vw;
}
</style>