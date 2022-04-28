<template>
<!-- 主体 -->
  <div class="body">
      <!-- 导航 nav -->
      <div class="nav">
            <div class="nav-data">
                <div class="nav-data-left">
                    <span>亲，请登录</span><span style="color:red;">免费注册</span>
                </div>
                <div class="nav-data-right">
                    <li> <span class="glyphicon glyphicon-user"></span>个人中心</li>
                    <li> <img src="../assets/shoping.png"/>购物车</li>
                    <li> <span class="glyphicon glyphicon-heart"></span>我的收藏</li>
                </div>
            </div>
      </div>


      <!-- 搜索 search -->
      <div class="search">
          <div class="search-data">
              <img src="../assets/logo.png" alt="">
              <div class="search-sear">
                  <input type="text" class="form-control" placeholder="请输入关键字搜索商品">
                  <el-button><span class="el-icon-search"></span>搜索</el-button>
              </div>
          </div>
      </div>



      <!-- 分类  classification-->
      <div class="classification">
          <div class="classification-data">
                <div class="classification-data-top">
                    <div class="cfdt-left">商品分类</div>
                    <el-breadcrumb separator="|">
                    <!-- 添加路由跳转界面 -->
                            <el-breadcrumb-item :to="{ path: '' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '' }">期待更多</el-breadcrumb-item>
                           
                    </el-breadcrumb>
                    <div class="cfdt-right"> <button><img src="../assets/fl.png"></button></div>
                </div>
                <div class="classification-data-bottom">
                    <div class="cdb-left">
                        <ul>
                         <li class="cdb-left_li" >1 <div class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></div></li>
                         <li class="cdb-left_li">2 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">3 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">4 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">5 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">6 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">7 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">8 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">7 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">8 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">7 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">9 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                         <li class="cdb-left_li">10 <span class="el-icon-arrow-right"style='margin-right:20px;float:right; margin-top:25px;'></span></li>
                        </ul>
                    </div>
                    <div class="cdb-right">
                        <div class="cdb-right-top">
                            <div class="lbt">
                                 <el-carousel trigger="click" height="450px">
                                 <el-carousel-item v-for="item in iteme" :key="item.img">
                                    <h3 class="small" >
                                        <img :src=item.img  alt="" style="width:900px;height:400px;border-radius:40px">
                                    </h3>
                                 </el-carousel-item>
                                 </el-carousel>
                            </div>
                            <div class="notice">
                                <h3> <span class="el-icon-message-solid"></span> 新闻头条 <span class="el-icon-d-arrow-right"></span></h3>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                                <li>撒打发撒旦是的</li>
                            </div>
                        </div>
                        <div class="cdb-right-button">
                            <div class="crb1">
                                <div style="width:135;height:110px;float:left;margin:25px ">
                                    <p style="color:#ff1493;"> <span style="font-weight:bolder;font-size:20px;">个人护理蝴蝶节 </span> <br> 最高满199减100</p>
                                    <br>
                                    <button style="width:70px;height:30px;border:none;border-radius:50PX;background:#ff1493;color:white ">立即抢购</button>
                                </div>
                                <img src="../assets/row1.png">
                            </div>
                            <div class="crb2">
                                <div style="width:135;height:110px;float:left;margin:25px ">
                                    <p style="color:#2e8b57;;"> <span style="font-weight:bolder;font-size:20px;">个人护理蝴蝶节 </span> <br> 最高满199减100</p>
                                    <br>
                                    <button style="width:70px;height:30px;border:none;border-radius:50PX;background:#2e8b57;;color:white ">立即抢购</button>
                                </div>
                                <img src="../assets/row2.png">
                            </div>
                            <div class="crb3">
                                <div style="width:135;height:110px;float:left;margin:25px ">
                                    <p style="color:#7b68ee;"> <span style="font-weight:bolder;font-size:20px;">个人护理蝴蝶节 </span> <br> 最高满199减100</p>
                                    <br>
                                    <button style="width:70px;height:30px;border:none;border-radius:50PX;background:#7b68ee;color:white ">立即抢购</button>
                                </div>
                                <img src="../assets/row3.png">
                            </div>
                            <div class="crb4">
                                <div style="width:135;height:110px;float:left;margin:25px ">
                                    <p style="color:#ffb6c1;;"> <span style="font-weight:bolder;font-size:20px;">个人护理蝴蝶节 </span> <br> 最高满199减100</p>
                                    <br>
                                    <button style="width:70px;height:30px;border:none;border-radius:50PX;background:#ffb6c1;color:white ">立即抢购</button>
                                </div>
                                <img src="../assets/row4.png">
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
      <!--  爆款秒杀Explosive spike-->
      <div class="Explosive">
          <div class="Explosive-data">
              <div class="Explosive-data-top">
                <img src="../assets/9D9.png" style="float:left">
              <div ref="time" class="countdown" style="float:right;margin-top:20px;margin-right:52px;">
                <span>{{hour}}</span>:<span>{{minute}}</span>:<span>{{second}}</span>
            </div>
              </div>
              <div  class="Explosive-data-bottom">
                  <li>
                      <div class="Edbimg">

                      </div>
                      <div class="Edbmoney">
                          <div style="float:left">
                              <p>ZEK原味海苔 <br><span>￥99.9</span></p>
                          </div>
                          <button>秒杀</button>
                      </div>
                  </li>
                  <li>
                      <div class="Edbimg">

                      </div>
                      <div class="Edbmoney">
                          <div style="float:left">
                              <p>ZEK原味海苔 <br><span>￥99.9</span></p>
                          </div>
                          <button>秒杀</button>
                      </div>
                  </li>
                  <li>
                      <div class="Edbimg">

                      </div>
                      <div class="Edbmoney">
                          <div style="float:left">
                              <p>ZEK原味海苔 <br><span>￥99.9</span></p>
                          </div>
                          <button>秒杀</button>
                      </div>
                  </li>
                  <li>
                      <div class="Edbimg">

                      </div>
                      <div class="Edbmoney">
                          <div style="float:left">
                              <p>ZEK原味海苔 <br><span>￥99.9</span></p>
                          </div>
                          <button>秒杀</button>
                      </div>
                  </li>
              </div>
          </div>
      </div>


      <!--精准分类 Precise classification  -->
      <div class="Precise"></div>
      <!-- 合作伙伴 cooperative partner -->
  </div>
</template>

<script>
export default {
name:'appHomepage',
  data() {
    return {
      input: '',
      active: "",
      time: '24:00:00',
      timer: undefined,
      hour:0,
      minute:0,
      second:0,
      iteme:[
      {img:'https://img.alicdn.com/imgextra/i1/6000000007947/O1CN012DK7OF28ZmHiCDbzM_!!6000000007947-0-octopus.jpg'},
      {img:'https://img.alicdn.com/imgextra/i2/6000000003957/O1CN01lT2Y101f6LyxgSa2s_!!6000000003957-2-octopus.png'},
      {img:"https://img.alicdn.com/imgextra/i1/6000000002341/O1CN01btTbHB1TADwVk0gv0_!!6000000002341-0-octopus.jpg"},
      {img:"https://img.alicdn.com/imgextra/i4/6000000006249/O1CN01xz0jxu1w25lXJP5Fh_!!6000000006249-0-octopus.jpg"}]
    }
  },
  mounted() {
    this.start();
  },
  methods: {
      countDown() {
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let result = '';

        let h = 24 - hour;
        if (min > 0 || sec > 0) {
            h -= 1
        }
        let m = 60 - min;
        if (sec > 0) {
            m -= 1
        }
        if (m == 60) {
            m = 0
        }
        let s = 60 - sec;
        if (s == 60) {
            s = 0
        }
        
        h = h.toString();
        m = m.toString();
        s = s.toString();
        if (h.length == 1) {
            h = '0' + h
        }
        if (m.length == 1) {
            m = '0' + m
        }
        if (s.length == 1)
            s = '0' + s
        result = h + ':' + m + ':' + s
        return result
      },
      start() {
        setInterval(() => {
          this.time = this.countDown();
          
          this.hour=this.time.slice(0,2);
          this.minute=this.time.slice(3,5);
          this.second=this.time.slice(6,8);
        }, 1000)
      },

    },
    destroyed() {
      clearInterval(this.timer);
    },

}
</script>

<style>
*{
    padding: 0px;
    margin: 0px;
    list-style: none;
}



/* 导航样式 */
.nav{
    width: 100%;
    height:30px;
    min-width:1400px;
    background-color:#dcdcdc ;
}

.nav-data{
    width: 90%;
    height:30px;
    margin: 0 auto ;
}
.nav-data-left{
    width:300px;
    height:30px;
    float: left;
    line-height: 30px;
    margin: 0 auto ;
}
.nav-data-right{
    width:400px;
    height:30px;
    float: right;
    line-height: 30px;
    margin: 0 auto ;
    
}
.nav-data-right li{
    float: left;
    margin-left:33px ;
}


/* 搜索栏样式 */
.search{
     width: 100%;
    height:180px;
    padding: 30px;
    min-width:1400px;
}
.search-data{
     width: 80%;
    height:100px;
    margin: 0 auto ;
}
.search-data img{
    width: 120px;
    height:100px;
    float: left;
    margin-left: 10%;
}
.search-sear{
    width: 700px;
    height:100px;
    float: right;
    margin-right: 10%;
}
.search-sear input{
    width: 400px;
    height:50px;
    float: left;
    border:3px solid #b0c4de;
    border-radius: 10px 0px 0px 10px ;
    margin-top: 20px;
}
.search-sear button{
    width: 130px;
    height:50px;
    color: aliceblue;
    font-size: 18px;
    float: left;
    background-color: #b0c4de;
    border:3px solid #b0c4de;
    border-radius: 0px 10px 10px 0px ;
    margin-top: 20px;
}

/* 分类样式 */
.classification{
    width: 100%;
    height:800px;
    min-width:1400px;
}
.classification-data{
    width: 1500px;
    height:800px;
    margin: 0 auto;
}
.classification-data-top{
    width: 1500px;
    height:50px;
    margin: 0 auto;
}
.cfdt-left{
    width: 200px;
    height:50px;
    float: left;
    color: white;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    background-color:#d32f2f ;
}
.el-breadcrumb{
    width: 700px;
    float: left;
    height:50px;
}
.el-breadcrumb__inner{
    margin: 15px;
    font-size: 16px;
    line-height: 50px;
}
.cfdt-right{
    width: 200px;
    height:50px;
    float: right;
    font-size: 18px;
    margin-right: 40px;
    font-weight: bold;
}
.cfdt-right>button{
    
    width: 200px;
    height:50px;
    border: none ;
    background-color: white;
}
.cfdt-right>button>img{
    
    width: 200px;
    height:40px;
    border: none ;
    background-color: white;
}

.classification-data-bottom{
    width: 1500px;
    height:523px;
    background-color: white;
    margin: 0 auto;
}
/* 左边菜单 */
.cdb-left{
     width: 200px;
    height:700px;
    float: left;
}
.cdb-left_li{
     width: 200px;
    height:52px;
    line-height: 52px;
    background-color: black;
    color: white;
}



/* 轮播图 与  其他 */
.cdb-right{
     width: 1300x;
    height:400px;
    float:left;;
}
.cdb-right-top{
    width: 1300px;
    height:475px;
    float: top;
}
.lbt{
    width: 900px;
    height:400px;
    margin-left: 50px;
    float: left;
}
.notice{
     width: 250px;
    height:400px;
    float: right;
    margin-right: 40px;
    margin-top: 20px;
    background-color: #FDF5E6;
}
.notice li{ 
     width: 250px;
    height:25px;
    float: right;
    margin-top: 5px;
}


.cdb-right-button{
    
     width: 1300px;
    height:0px;
    float: top;
}
.crb1{
    width:280px;
    height: 200px;
    color:#ff1493;
    font-size: 16px;
    float: left;
    margin-left: 35px;
    background-color: #FDF5E6;
}
.crb1 img{
    float: right;
    margin-top: 70px;
    position:relative;
    right: 20px;
}
.crb2{
    width:280px;
    height: 200px;
    color:darkturquoise;
    font-size: 16px;
    float: left;
    margin-left: 35px;
    background-color:bisque;
}
.crb2 img{
    width: 90px;
    height: 125px;
    float: right;
    position:relative;
    right: 20px;
    margin-top: 70px;
}
.crb3{
    width:280px;
    height: 200px;
    color:darkturquoise;
    font-size: 16px;
    float: left;
    margin-left: 35px;
    background-color:aquamarine;
}
.crb3 img{
    width: 90px;
    height: 90px;
    float: right;
    position:relative;
    right: 20px;
    margin-top: 90px;
}
.crb4{
    width:280px;
    height: 200px;
    color:#ff1493;
    font-size: 16px;
    float: left;
    margin-left: 35px;
    background-color:cornflowerblue;
}
.crb4 img{
    width: 90px;
    height: 105px;
    float: right;
    position:relative;
    right: 20px;
    margin-top: 70px;
}

/* 图片放大效果 */
.cdb-right-button img:hover{

    transform: scale(1.1);
}
.cdb-right-button img{
transition: all .3s;
}



/* 秒杀抢购爆款样式 */
.Explosive{
    width: 100%;
    height: 500px;
    background-color: aqua;
}
.Explosive-data{
    width: 1500px;
    height: 500px;
    margin: 0 auto;
    border-radius: 80px 0px 0px 0px ;
    background-color: #ffd800;
}
.Explosive-data-top{
    width: 1500px;
    height: 80px;
    float:right;
}
.countdown{
      color:rgb(117, 81, 33);
      font-size: 30px;
  }
  .countdown span{
      display: inline-block;
      text-align:center;
      line-height: 50px;
      color: white;
      font-weight: bold;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgb(117, 81, 33);
      margin-left: 10px;
      margin-right: 10px;
  }
.Explosive-data-bottom{
    width: 1500px;
    height: 400px;
    margin: 0 auto;
    float:right;
    margin-top: 10px;
}
.Explosive-data-bottom li{
    width: 300px;
    height: 400px;
    float: left;
    margin-left: 60px;
    background-color: white;
}
.Edbimg{
    width: 300px;
    height: 330px;
    background-color: red;
    
}
.Edbmoney{
    width: 300px;
    height: 70px;
}
.Edbmoney div{
    margin-top: 15px;
    margin-left: 20px;
}
.Edbmoney p{
    font-size:18px;
}
.Edbmoney span{
    font-size:24px;
    margin-right: 50px;
    color: #d32f2f;
}
.Edbmoney button{
    width: 100px;
    height: 40px;
    border: none;
    float: right;
    margin-top: 20px;
    margin-right: 10px;
    font-size:18px;
    color: white;
    border-radius:30px ;
    background-color: #d32f2f;
}
</style>