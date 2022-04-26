let express = require('express');
let router=express.Router();
let mysql = require('mysql');
let config=require('../modules/mysql_coonfig');
let pool=mysql.createPool(config);

router.post('/dologin',(req,res) => {
    pool.getConnection((error,connection)=>{
        if(error){
            console.log('连接错误');
            return;
        }
        let sql="select * from tab_seller where sel_account=? and sel_pwd=?";
        connection.query(sql,[req.body.user,req.body.pwd],(error,results,files)=>{
            if(error){
                console.log('查询错误');
                return;
            }
            res.send(results);
        })
        connection.release();
    })
})

module.exports=router;