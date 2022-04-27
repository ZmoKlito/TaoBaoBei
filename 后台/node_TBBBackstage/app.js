let express = require('express');
let bodyParser=require('body-parser');
let mysql = require('mysql');
let config=require('./modules/mysql_coonfig');

let app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let pool=mysql.createPool(config);

let login=require('./routes/Login');
let home=require('./routes/Home');

app.use("/",login);
app.use("/home",home);


app.listen(3333);