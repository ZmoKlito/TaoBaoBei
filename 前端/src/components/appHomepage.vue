<template>
  <div>
      <!-- 导航主体 -->
        <div class='nav'>
                <div class="nav-data">
                    <p style="
                         float:left;
                         font-size:36px;
                    ">淘宝呗</p>
                   
                      <div class="nav-left">   
                          <ul>
                              
                              <li><!-- 头像边框 -->
                                <div class="head">
                                  <img src="../assets/logo.png">
                                </div>
                                <span style="float:left">admin</span>
                               
                              </li>
                              <li >
                                免费开店铺
                              </li>
                              <li >
                                  关于我们
                              </li>
                              <li >
                                 我的收藏
                              </li>
                              <li >
                                 我的订单
                              </li>
                          </ul>
                      </div>


                </div>
        </div>
        
           
        
     



    <!-- 主体  搜索and轮播图 -->

        <div class="tophead">
            <div class="tophead-top">
                    <el-button 
                        icon="el-icon-shopping-cart-full"
                        style="
                            width:20%;
                            height:50px;
                            background-color:#
                        "
                    >购物车</el-button>
                    <el-input v-model="search" placeholder="请输入关键字" style="width:40%"></el-input>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="tophead-botton">
                    
                 <el-carousel indicator-position="outside"
                  style="
                      width:1300px;
                      height:600px;
                       border-radius:50px ">
                    <el-carousel-item v-for="item in lbt" :key="item.img" style="width:1300px;height:600px">
                        <img :src=item.img style="width:1300px;height:600px">
                    </el-carousel-item>
                 </el-carousel>

            </div>
        </div>

  </div>
</template>









<script>
export default {
name:'appHomepage',
 data() {
      return {
        search:'',
        drawer: false,
        direction: 'rtl',
        lbt:[
            {img:"https://img.alicdn.com/imgextra/i1/6000000007947/O1CN012DK7OF28ZmHiCDbzM_!!6000000007947-0-octopus.jpg"},
            {img:"https://img.alicdn.com/imgextra/i1/6000000007683/O1CN01pVBACn26criwaRvBC_!!6000000007683-2-octopus.png"},
            {img:"https://img.alicdn.com/imgextra/i2/6000000002264/O1CN01kR8bRn1SaxRLUUS37_!!6000000002264-0-octopus.jpg"},
            {img:"https://img.alicdn.com/imgextra/i4/6000000006249/O1CN01xz0jxu1w25lXJP5Fh_!!6000000006249-0-octopus.jpg"},
        ]
      };
    },
    methods: {
            
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
/* 导航条样式 */
.nav{
    width: 100%;
    height: 50px;
    min-width:1563px;
    background-color:#fff8dc;
}
.nav-data{
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid;
    background-color:#800000;

                         font-weight:border;
                         color:white;
}
.nav-left{
    width: 60%;
    height: 50px;
    margin: 0 auto;
    border: 1px solid;
    float: right;
    color: white;
    background-color:black;
    
    ;
}


.nav-left>ul li{
    width: 20%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    list-style: none;
    float:left;
    }


.head{
    width: 40px!important;
    height: 40px!important;
    background-color: aliceblue!important;
    border-radius:50% !important;
    line-height: 40px!important;
    margin:0 auto!important;
    float: left;
    margin-top:5px!important;
    margin-left:50px!important;
}
.head >img{
    width: 40px;
    height: 40px;
    border-radius:50% ;

}

.header{
    width: 60px;
    height: 60px;
    background-color: aliceblue;
    border-radius:50% ;
    margin: 0 auto;
}
.header >img{
    width: 60px;
    height: 60px;
    border-radius:50% ;

}
.search{
    width: 100%;
    height: 60px;
}
.tophead{
    width:80%!important;
    height:500px!important;
    margin: 0 auto!important;
    margin-top: 50px;
    min-width:1563px;
    border: 1px solid red !important;
}
.tophead-top{
    width:60%;
    height:60px;
    background-color:#f5f5f5 ;
    margin: 0 auto;
    margin-top:30px ;
    border-radius:50px ;
}
.tophead-botton{
    width:1400px;
    height:700px;
    margin: 0 auto;
    margin-top:50px ;
    border: 1px solid;
}


</style>