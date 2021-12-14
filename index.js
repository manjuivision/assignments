const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./db/mongoose');
const User = require('./model/users');
const Task = require('./model/mytask');

const bcryptjs = require('bcryptjs');

const userRouter = require('./routes/userroute');
const taskRouter = require('./routes/taskroute');
// const conn = require('./db/connection');
// const crud = require('./model/mongo-crud');

const app = express();


let port = 3000;

app.use(express.json());

//Test rest api call through postman

app.use(userRouter);
app.use(taskRouter);

//Rest api for Task Collection


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

const myFunction = async () => {
    console.log('hello');
    const password = "manju123";
    const hashpassword = await bcryptjs.hash(password,8)
    console.log(password);
    console.log(hashpassword);

    const isMatch = await bcryptjs.compare('manju123', hashpassword)

    console.log(isMatch);
}

myFunction()