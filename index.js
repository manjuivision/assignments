const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require("./routes/products");
const mysqlConnection = require("./connection")
 
var app = express();

app.use(bodyParser.json());

app.use(productRoutes);

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});



