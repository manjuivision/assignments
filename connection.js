const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "nodedb",
    multipleStatements:true
});

mysqlConnection.connect(function (err){
    if(err){
        console.log("connected filed",err);
    }
    else{
        console.log('connected');
    }
})

module.exports = mysqlConnection;