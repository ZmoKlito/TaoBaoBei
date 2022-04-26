let express = require('express');
let router=express.Router();
let mysql = require('mysql');
let config=require('../modules/mysql_coonfig');
let pool=mysql.createPool(config);

router.get('/getCommodity',(req,res) => {
   pool.getConnection((error,connection) => {
       if(error){
            console.log('连接错误');
            return;
       }
       let sql="select * from "
   })
})

module.exports=router;