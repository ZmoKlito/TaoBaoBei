let express = require('express');
let router=express.Router();
let mysql = require('mysql');
let config=require('../modules/mysql_coonfig');
let pool=mysql.createPool(config);

let sheet =require('./Home/sheet');

router.use("/sheet",sheet);

module.exports=router;