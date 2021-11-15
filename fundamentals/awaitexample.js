const fetch = require("node-fetch");

console.log('await example');

async function test(){
    console.log('Inside test function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('user resolved');

    return users;
}

console.log('Before calling manju');
let a =  test();
console.log('After calling manju');
console.log(a);
console.log('End of the file');

