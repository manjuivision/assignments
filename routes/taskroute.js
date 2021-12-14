const express = require('express');
const Task = require('../model/mytask');

const router = new express.Router();

router.post('/mytask',(req, res) => {
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

router.get('/mytask',(req, res) => {
    Task.find().then((task) => {
        res.send({"Task":task});
    }).catch(() =>{
        res.status(400).send({error});
    })
})

module.exports = router;