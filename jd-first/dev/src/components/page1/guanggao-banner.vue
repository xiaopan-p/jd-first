<template>
    <div class="app">
      <!--<li v-for="(item,index) in list"><img :src="item"></li>-->
      <li><img src=              '../../../../vue项目素材/jd/f9b5ae4cfc93eac2.png' alt=""></li>
    </div>
</template>

<script>
    export default {
      name: "guanggao-banner",
      data(){
          return{
            list:[
              '../../../../vue项目素材/jd/f9b5ae4cfc93eac2.png'
            ]
          }
      }
    }
</script>

<style scoped>
  img{
    width: 1242px;
    height: 300px;
  }
</style>
