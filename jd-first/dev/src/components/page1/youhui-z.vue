<template>
    <div class="app">
      <h3>优惠专区</h3>
      <div class="img">
        <span><img src="../../../../vue项目素材/jd/00eec061c085ed4f.png"/></span>
        <span><img src="../../../../vue项目素材/jd/00eec061c085ed4f.png"/></span>
      </div>
      <div class="img-bottom">
        <li><span>下单免运 </span> <span>爆品秒杀</span><img src="../../../../vue项目素材/jd/9ac48e482a2b8132.jpg"/></li>
        <li><span>下单免运 </span> <span>爆品秒杀</span><img src="../../../../vue项目素材/jd/9ac48e482a2b8132.jpg"/></li>
        <li><span>下单免运 </span> <span>爆品秒杀</span><img src="../../../../vue项目素材/jd/9ac48e482a2b8132.jpg"/></li>
        <li><span>下单免运 </span> <span>爆品秒杀</span><img src="../../../../vue项目素材/jd/9ac48e482a2b8132.jpg"/></li>

      </div>
    </div>
</template>

<script>
    export default {
        name: "youhui-z"
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin:0;
  }
.app{
  width: 1242px;
  height: 1050px;
  border-radius: 50px;
  background: white;
  margin-top: 20px;
}
h3{
  font-size: 6vw;
  text-align: left;
  padding-left: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.img{
  height: 400px;
}
  .img img{
    width: 90%;
    text-align: left;
  }
  .img span{
    display: inline-block;
    width: 50%;
    float: left;
  }
  .img-bottom{
    width: 1242px;
    height: 500px;
    margin-top: 50px;
  }
  .img-bottom li{
    width: 20%;
    font-size: 4vw;
    background:#cccccc70;
    margin-left: 50px;
    height: 370px;
  }
  .img-bottom img{
    width: 180px;
  }
  .img-bottom span{
    display: block;
    height: 80px;
    font-size: 12px;
    line-height: 80px;
  }
</style>
