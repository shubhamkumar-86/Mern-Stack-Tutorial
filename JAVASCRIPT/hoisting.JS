// Jab bhi hum code run karte hai to uska Execution Context create hota hai.

// phir usme memory allocate hota hai
// a = undefined
// b = undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined

// Execution phase


console.log(a);
var a = 10;
var b = 20;
console.log(a);

function addNumber(num1,num2){
    var sum = num1+num2;
    return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1,sumResult2);


// let const

// Memory allocation
// a = <uninitiliazed> (Temporal dead zone)
// b = <uninitiliazed> (Temporal Dead zone)
// Execution phase

// console.log(a);

let a = 10;
const b = 20;

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}

const result = addNumber(a,b);
console.log(result);


// Hoisting

// Hoisting is javascript behavior of knowing about a variable or function's existence before executing the code. How it treats that knowledge depends on the keyword (function, var, let or const).

// function: Hoisted completely (name and body).
// var: Hoisted and initialized with undefined. 
// let/const: hoisted, but not initialized. they are put in a Temporal Dead zone. 