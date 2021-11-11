const express = require('express');
const mysqlConnection = require('../connection');


//define router

const Router = express.Router();

//GET opration

Router.get("/products",(req,res)=>{
    mysqlConnection.query('SELECT * FROM products', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        res.status(200).send(rows);
      });
})

//Post operation

Router.post("/add/products",(req,res)=>{
  const insertQuery = "INSERT INTO products SET ?";
  mysqlConnection.query(insertQuery, req.body, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      //res.send("Product Added to Database");
      //res.status(200).send("<h1>Welcome to nodejs portal.</h1>");
      res.status(200).send(result);

    }
  });
})

//Put (Update) operation

Router.put("/modify/product",(req,res)=>{
  const updateQuery = "UPDATE products SET sku = ?, product_name = ? WHERE id = ?";
  mysqlConnection.query(updateQuery,[req.body.sku, req.body.product_name, req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      //res.send("Product updated to Database");
     // res.status(200).send("<h1>Welcome to nodejs portal.</h1>");
      res.status(200).send(result);

    }
  });
})

//Delete operation
Router.delete("/remove/:id",(req,res)=>{
  const deletequery = "DELETE FROM products WHERE id = ?";
  mysqlConnection.query(deletequery,req.params.id,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      //res.send("Product delete from Database");
     // res.status(200).send("<h1>Welcome to nodejs portal.</h1>");
      res.status(200).send(result);

    }
  });
})


module.exports = Router;