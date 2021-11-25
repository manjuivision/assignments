let mongoose = require('mongoose');
let validator = require('validator');

const User = mongoose.model('md-task',{
    name:{
        type : String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    age:{
        type: Number,
        default :0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be in positive integer');
            }
        }
    }
})

module.exports = User;