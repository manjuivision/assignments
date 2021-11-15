const fetch = require("node-fetch");
console.log('async example');

 function test(){
    console.log('Inside test function');
    const response =  fetch('https://api.github.com/users');
    console.log('before response');
    //const users =  response.json();
    console.log('user resolved');

    return true;
}

console.log('Before calling manju');
let a = test();
console.log('After calling manju');
console.log(a);
console.log('End of the file');

