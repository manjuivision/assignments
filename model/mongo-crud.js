const express = require('express');
const MongoClient = require('mongoose');
const conn = require('../db/connection');

const url = "mongodb://localhost:27017/Employee";

MongoClient.connect(url, function(err, db) {
    try{
        if(!err){
          db.collection('Employeew').insertOne({
            Employeeid: 9,
            EmployeeName: "Admin"
        });
      }
    } catch(err){
      console.log("message : " , err);
    }
    
  });

module.exports = MongoClient;