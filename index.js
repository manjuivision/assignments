const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./db/mongoose');
const User = require('./model/users');
const Task = require('./model/mytask');
// const conn = require('./db/connection');
// const crud = require('./model/mongo-crud');

const app = express();


let port = 3000;

app.use(express.json());

//Test rest api call through postman

app.post('/users',(req, res) => {
    console.log(req.body);
    res.send({'message' : 'API Testing'});
})

//Rest api for Task Collection

app.post('/mytask',(req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
         
        console.log(task);
        res.send(task);

    }).catch((error) => {
        res.status(400).send({error});
        //res.send({error});
       // console.log("Error!", error);
    })
})

//User Collection add records post

app.post('/add/users',(req, res) => {
    const data = new User(req.body);

    data.save().then(() => {
         
        console.log(data);
        res.send(data);

    }).catch((error) => {
        res.status(400).send({error});
        //res.send({error});
       // console.log("Error!", error);
    })
})

//User Update records in the collection patch

app.patch('/user',async (req, res)  => {
    //const data = new User(req.body);
    try{
        const users =  await User.findByIdAndUpdate(req.query.id, req.body,{ new: true ,runValidators: true});
        console.log(req.body);
        if (!users){
            return res.status(404).send();
        }
        res.status(404).send({'Users': users});
    }catch(e){
        res.status(500).send(e);
    }
})

//User Delete records in the collection Delete

app.delete('/user',async (req, res)  => {
    //const data = new User(req.body);
    try{
        const user =  await User.findByIdAndDelete(req.query.id);
        if (!user){
            return res.status(404).send();
        }
        res.status(200).send(user);
    }catch(e){
        res.status(500).send(e);
    }
})

//Get User all Collection records

app.get('/users',(req, res) => {
    User.find().then((users) => {
        res.send({"Users":users});
    }).catch(() =>{
        res.status(400).send({error});
    })
})


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});