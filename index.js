const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./db/mongoose');
const User = require('./model/users')
// const conn = require('./db/connection');
// const crud = require('./model/mongo-crud');

const app = express();


let port = 3000;

app.use(express.json());

app.post('/users',(req, res) => {
    console.log(req.body);
    res.send({'message' : 'API Testing'});
})

app.post('/add/users',(req, res) => {
    const data = new User(req.body);

    data.save().then(() => {
         
        console.log(data);
        res.send({'message' : 'Record Inserted'});

    }).catch((error) => {
        res.send({error});
        console.log("Error!", error);
    })
})

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});