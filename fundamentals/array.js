arr = [1,3,7,11,13];
arr1 = [1,3,6,4,8];

function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}
// Array push function
arr.push(10);

//Array unshift function
var nums = [ 1, 2, 3, 5, 8 ];
nums.unshift(24);
console.log(nums);

//Array shift function
nums.shift();
console.log(nums);

//Array join 
var s = nums.join(", ");
console.log(s);

//Array sort

var nums1 = [ 3, 1, 8, 5, 2, 1];
nums1.sort();
console.log("Sorted : ",nums1);

var out = arr.filter(odd);
var out1 = arr1.filter(odd);

console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);

function sayHello(name)
{
    console.log("Hello", name);
}

sayHello("manju");