const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require("./routes/products");
const producttasksRoutes = require("./routes/products-tasks");
const authroutes = require('./routes/authroutes');
const mysqlConnection = require("./connection")
 
var app = express();

app.use(bodyParser.json());

app.use(productRoutes);
app.use(producttasksRoutes);
app.use(authroutes);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});


app.listen(3000, () => {
    console.log('Server is running at port 3000');
});



