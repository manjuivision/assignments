console.log('async example');

async function test(){
    console.log('Inside test function');
    return "manju";
}

console.log('Before calling manju');
let a = test();
console.log('After calling manju');
console.log(a);
console.log('End of the file');

