const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager-api',{
    useNewUrlParser : true
   
}).then(()=>{
    console.log('Database connected')

}).catch((err)=>{
    console.log('Database Disconnect')
    console.log(err);
})

// const User = mongoose.model('task-api',{
//     name: {
//         type: String
//     },
//     email : {
//         type : String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'manju',
//     age : 'dalai'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// })