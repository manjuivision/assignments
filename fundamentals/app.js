arr = [1,3,7,11,13];
arr1 = [1,3,6,4,8];

function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

var out = arr.filter(odd);
var out1 = arr1.filter(odd);

console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);