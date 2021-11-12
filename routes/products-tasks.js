const express = require('express');
const mysqlConnection = require('../connection');


//define router

const Router = express.Router();

//GET opration using JOIN

Router.get("/tasks/join",(req,res)=>{
    mysqlConnection.query('SELECT products.product_name AS name,products.sku AS sku,tasks.task AS task, tasks.created_at AS time FROM products JOIN tasks ON products.id = tasks.id', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        res.status(200).send(rows);
      });
})

//GET operation LEFT JOIN

Router.get("/tasks/left-join",(req,res)=>{
  mysqlConnection.query('SELECT * FROM products LEFT JOIN tasks ON products.id = tasks.id', (err,rows) => {
      if(err) throw err;
      console.log('Data received from Db:');
      console.log(rows);
      res.status(200).send(rows);
    });
})

//GET operation RIGHT JOIN

Router.get("/tasks/right-join",(req,res)=>{
  mysqlConnection.query('SELECT * FROM products RIGHT JOIN tasks ON products.id = tasks.id', (err,rows) => {
      if(err) throw err;
      console.log('Data received from Db:');
      console.log(rows);
      res.status(200).send(rows);
    });
})

module.exports = Router;