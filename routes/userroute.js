const express = require('express');
const User = require('../model/users');

const router = new express.Router();

router.post('/users',(req, res) => {
    console.log(req.body);
    res.send({'message' : 'API Testing'});
})

//User Collection add records post

router.post('/add/users',(req, res) => {
    const data = new User(req.body);

    data.save().then(() => {
        console.log(data)         
        res.send(data);

    }).catch((error) => {
        res.status(400).send({error});
        //res.send({error});
       // console.log("Error!", error);
    })
})

//User Update records in the collection patch

router.patch('/user/modify',async (req, res)  => {
    //const data = new User(req.body);
    try{
        const users =  await User.findByIdAndUpdate(req.query.id, req.body,{ new: true ,runValidators: true});
        if (!users){
            return res.status(404).send();
        }
        res.status(200).send({'Users': users});
    }catch(e){
        res.status(500).send(e);
    }
})

//User Delete records in the collection Delete

router.delete('/user',async (req, res)  => {
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

router.get('/users',(req, res) => {

    User.find().then((users) => {

        res.send({"Users":users});

    }).catch(() =>{

        res.status(400).send({error});
    })
})
// find with condition
router.get('/get/records',(req, res) => {

    User.find({ age:{$gt:24}}).then((users) => {

        res.send({"Users":users});

    }).catch(() =>{

        res.status(400).send({error});
    })
})

// sort ascending
router.get('/get/sort/asc',(req, res) => {

    var mysort = { name: 1 };

    User.find().sort(mysort).then((users) => {

        res.send({"Users":users});

    }).catch(() =>{

        res.status(400).send({error});
    })
})
// sort decending
router.get('/get/sort/desc',(req, res) => {

    var mysort = { name: -1 };

    User.find().sort(mysort).then((users) => {

        res.send({"Users":users});

    }).catch(() =>{

        res.status(400).send({error});
    })
})

// match aggregation
router.get('/get/records/agge',(req, res) => {

    User.aggregate([

        { $match: { name: 'manju dalai' } },

        { $group: { _id: "$name", sumQuantity: { $sum: 1 } } }

        ]).then((users) => {

            res.send({"Users":users});

        }).catch(() =>{

            res.status(400).send({error});
    })
})

router.get('/get/aggregation',(req, res) => {
    
    User.aggregate([
        
    ])
})
module.exports = router;