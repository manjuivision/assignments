let mongoose = require('mongoose');
let validator = require('validator');
let bcryptjs = require('bcryptjs');


const userSchema = new mongoose.Schema({
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
    password:{
        type: String,
        required: true,
        minlength: 7
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
});

userSchema.pre('save',async function(next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcryptjs.hash(user.password,8)
    }
    next()
})

const User = mongoose.model('md-task', userSchema )

module.exports = User;