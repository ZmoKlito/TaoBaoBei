let express = require('express');
let bodyParser=require('body-parser');
let mysql = require('mysql');
let config=require('./modules/mysql_coonfig');

let app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let pool=mysql.createPool(config);

let login=require('./routes/Login');

app.use("/",login);


app.listen(3333);