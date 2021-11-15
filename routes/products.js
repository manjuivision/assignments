const express = require('express');
const mysqlConnection = require('../connection');


//define router

const Router = express.Router();

//Create table 
Router.post("/create/customers",(req,res)=>{
  const sql = "CREATE TABLE employee (id INT, name VARCHAR(255), email VARCHAR(255))";  
  mysqlConnection.query(sql, function (err, result) 
    { 
      try{
        if (err) throw err;  
        console.log("Table created");  
        res.status(200).send({"message":"Table created"});
        }catch(e){
          res.status(400).send({"message":err});
        }
    });
})

//Get single record
Router.get("/single/product/:id",(req,res)=>{
  const query = "Select * FROM products where id = ?";
  mysqlConnection.query(query, req.params.id,(err,rows) => {
    try {
        console.log('Data received from Db');
          if(rows.length>0){
            console.log(rows);
            res.status(200).send({
            "productdata" :rows
          });
        }
        else{
          res.status(400).send({"message":"no record found"});
          //throw new Error("no record found")
        }

    } catch (e) {
      console.log(e);
      console.log(err);
      res.status(400).send({"message":err.message});
    }
  });
})

//GET opration

// Router.get("/products",(req,res)=>{
//     mysqlConnection.query('SELECT * FROM products', (err,rows) => {
//         if(err) throw err;
//         console.log('Data received from Db:');
//         console.log(rows);
//         res.status(200).send(rows);
//       });
// })

Router.get("/products",(req,res)=>{
  mysqlConnection.query('SELECT * FROM products', (err,rows) => {
      try {
          console.log('Data received from Db:');
            if(rows.length>0){
              console.log(rows);
            res.status(200).send({
              "productdata" :rows
            });
          }
          else{
           // res.status(400).send({"message":"no record found"});
            throw new Error("no record found")
          }

      } catch (e) {
        console.log(e);
        console.log(err);
        res.status(400).send({"message":err.message});
      }
    });
})

//Post operation

Router.post("/add/products",(req,res)=>{
  const insertQuery = "INSERT INTO products SET ?";
  mysqlConnection.query(insertQuery, req.body, (err, result) => {
    try{
      console.log(result);
      res.status(200).send({
        "productdata" :result
      });
    }catch (e){
        console.log(err);
    }
  });
})

//Put (Update) operation

Router.put("/modify/product",(req,res)=>{
  const updateQuery = "UPDATE products SET sku = ?, product_name = ? WHERE id = ?";
  mysqlConnection.query(updateQuery,[req.body.sku, req.body.product_name, req.body.id], (err, result) => {
    try{
      console.log(result);
      res.status(200).send(result);
    }catch (e){
      res.status(400).send({"message":err});
    }
  });
})

//Delete operation
Router.delete("/remove/:id",(req,res)=>{
  const deletequery = "DELETE FROM products WHERE id = ?";
  mysqlConnection.query(deletequery,req.params.id,(err, result) => {
    try{
      if(result.length){
        console.log("Found");

      }
      else{
        console.log("id not found");
      }
      console.log(result);
      res.status(200).send(result);
    }catch (e){
        console.log(err);
    }
  });
})

module.exports = Router;