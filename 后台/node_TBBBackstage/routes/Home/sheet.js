let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let config = require('../../modules/mysql_coonfig');
let pool = mysql.createPool(config);

router.get('/getCommodity', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) {
            console.log('连接错误');
            return;
        }
        let sql = "SELECT * FROM tab_goods tg INNER JOIN tab_goodsDetail tgd ON tg.goods_id=tgd.goods_id WHERE tg.sel_id=?";
        connection.query(sql, [req.query.selId], (error, results, files) => {
            if (error) {
                console.log("查询错误");
            }
            res.send(results);
        })
        connection.release();
    })
})

router.get('/takeDown', (req, res) => {
    pool.getConnection((error,connection) => {
        if(error){
            console.log('连接错误');
            return;
        }
        let sql="delete tg,tgd from tab_goods tg inner join tab_goodsdetail tgd on tg.goods_id=tgd.goods_id where tg.goods_name=? and tg.sel_id=?";
        connection.query(sql,[req.query.goodsName,req.query.selId],(error,results,files)=>{
            if(error){
                console.log(error);
                return;
            }
        })
        connection.release();
    })
})

module.exports = router;