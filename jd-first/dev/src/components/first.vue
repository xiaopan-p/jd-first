<template>
<div class="app">
  <div class="header">
    <div class="header-top">
     <p> <span>❤湖北省文物总店驻北京联络处</span></p>
      <div class="herder-serch">
        <input type="text" class="serch1"  placeholder="女神的礼物">
      </div>
      <div class="muen-d"><span v-for="item in muen1" class="muen">{{item}}</span></div>
    </div>
    <div class="header-center">
      <img src="../../../vue项目素材/jd/447da17fefbb8ed5.gif" height="230" width="750"/>
    </div>
    <div class="header-bottom">
      <div class="header-b-img">
        <a><span><img src="./muen-img/2.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/3.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/4.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/5.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/12.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/7.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/8.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/9.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/10.png" alt=""></span><p>超市</p></a>
        <a><span><img src="./muen-img/11.png" alt=""></span><p>超市</p></a>
      </div>
      <p class="toutiao"><span>头条</span>{{toutiao}}</p>
    </div>
  </div>
  <div class="xinren">
    <img src="../../../vue项目素材/jd/c00dceee.png"/>
  </div>
  <div class="guanggao">
    <gaoguang></gaoguang>
  </div>
  <youhui></youhui>
</div>
</template>

<script>
  import gaoguang from './page1/guanggao-banner';
  import youhui from './page1/youhui-z';

  export default {
        name: "first",
        data(){
          return{
            muen1:['酸奶','面包','牛奶','鸡蛋','儿童湿巾','卫生巾','榨菜','鲜花'],
            shop:['超市','买菜','水果','鲜花礼品','送药上门','家具时尚','烘培蛋糕','签到','鲜豆庄园','领取现金'],
            toutiao:'24节气之惊蛰 复苏好食光，来领16元补贴'
          }
        },
      components:{gaoguang,youhui}
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .app{
    background: #ccc;
    margin-bottom: 135px;
  }
.header{
  width: 1242px;
  height: 1404px;
  background: white;
  border-radius: 0 0 60px 60px;
}
.header-top{
  width: 1242px;
  height: 400px;
  background: url("../../../vue项目素材/jd/490c8d7fcb8bbb0b.jpg") no-repeat;
  background-size: cover;
}
.header-top p{
  padding-top: 20px;
}
.header-top p span{
  font-size: 5vw;
  color: white;
  margin-left: -50px;
  margin-top:60px;
}
.muen-d{
  width: 1000px;
  margin-top: -20px;
  margin-left: 100px;
  height: 100px;
  line-height: 100px;
}
  .header-top div .muen{
    display: inline-block;
    font-size: 3vw;
    height: 10px;
    line-height:20px;
    color: white;
    padding-left: 30px;
}
  .herder-serch{
    height: 160px;
    line-height: 160px;
  }
.serch1{
  border: 0;
  width: 1100px;
  height: 100px;
  border-radius: 50px;
  text-align: center;
  line-height: 100px;
}
  .header-center{
    width: 1242px;
    height: 375px;
  }
  .header-center img{
    width: 1242px;
    height: 375px;
  }
  .header-bottom{
    width: 1242px;
    height: 340px;
    background: url("../../../vue项目素材/jd/f43f3e48a4ccc4e8.jpg");
    background-size: cover;
  }
  .header-bottom img{
    width: 100px;
    height: 100px;
  }
  .header-b-img{
    height: 400px;
    padding-top: 50px;
  }
  .header-b-img a{
    float: left;
    display: block;
    height: 200px;
    width: 20%;
  }
  .header-bottom a p {
    font-size: 3vw;
  }
  .toutiao{
    margin-top: 30px;
    font-size: 4vw;
  }
  .toutiao span{
    color: greenyellow;
    font-weight: bold;
    margin-right: 10px;
    font-size: 5vw;
  }
  .xinren{
    width: 1242px;
    height: 1250px;
  }
  .xinren img{
    width: 1242px;
  }
  .guanggao{
    width: 1220px;
    height: 300px;
    overflow: hidden;
    border-radius: 50px;
    margin: 0 auto;
  }
</style>
