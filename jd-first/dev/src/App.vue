<template>
  <div id="app">
<router-view></router-view>
    <div class="footer">
      <li :class="{ orange : '/' === $route.path}"  @click="goTo('/')">{{muen[0]}}</li>
      <li :class="{ orange : '/serch' === $route.path}"  @click="goTo('/serch')">{{muen[1]}}</li>
      <li :class="{ orange : '/dingdan' === $route.path}"  @click="goTo('/dingdan')">{{muen[2]}}</li>
      <li :class="{ orange : '/shopping' === $route.path}"  @click="goTo('/shopping')">{{muen[3]}}</li>
      <li :class="{ orange : '/HelloWorld' === $route.path}" @click="goTo('/HelloWorld')">{{muen[4]}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      muen:['首页','发现','购物车','订单','我的']
    }
  },
  methods:{
      goTo(path){
          this.$router.push(path)
      }
  }
};
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .footer{
    width: 1240px;
    height: 135px;
    position: fixed;
    bottom: 0;
    background: antiquewhite;
  }
  li{
    width: 20%;
    float: left;
    list-style: none;
    font-size: 12px;
    text-align: center;
    line-height: 135px;
  }
  .orange{
    background: orange;
  }
</style>
