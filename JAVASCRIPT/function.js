// Function in Javascript 

// function greeting() {
//     console.log("hello, welcome to learning function");
// }

// greeting();

// Rest operator (VVI)

// function addNumber(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// addNumber(47,58,12);

// Spread operator

// const arr =[10,20,40,50,60];
// const arr2 = [70,80,90];

// const [first,second, ...num] = arr;
// console.log(first,second, num);

// const ans = [arr,arr2];
// console.log(ans);

// function: expression

// const addNumber =function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,5));

// arrow function

// ()=>{

// }

// example ---
// const addNumber = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addNumber(5,8));

// if we have single parameter, no need of this ()
// const squareNumber=(num) => num*num;

// console.log(squareNumber(5));


// jab bhi object ko handle karna hoga to hum paranthesise () lgate HTMLDetailsElement.
// const greeting =()=> ({name:"Shubham", age:24});

// console.log(greeting());

//IIFE

// (function greeting(){
    // console.log("hello shubham");
// })();

// using arrow fncn 
// (()=>{
//     console.log("Hello everyone");
// })()

// Callback function

function greet(){
    console.log("hello kaise ho");
}

function dance(){
    console.log("i am dancing");
}

function meet(Callback){
    console.log("milne ja rha hoon kisi se");
    Callback();
    console.log("meeting khatam");
}

meet(greet);
meet(dance);