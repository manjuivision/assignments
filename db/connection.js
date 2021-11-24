const MongoClient = require('mongoose');
const express = require('express');

const url = "mongodb://localhost:27017/Employee";

MongoClient.connect(url, function(err, db) {
    try{
        if(!err){
            console.log("Database created!");
           
        }else{
            throw err;
        }
    }catch(err){
        console.log(err);
    }
});

module.exports = MongoClient;
module.exports = url;