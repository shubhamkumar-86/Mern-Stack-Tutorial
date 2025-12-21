// array in javascript

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 75;

// let marks = [100, 50, 75, 80];
// console.log(marks);

// console.log(marks.length);

// contain heterogenous data
// let arr = [100, 30, "shubham", true];

// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

//push-operation = insert element at end
// arr.push(50);
// arr.push("shivam");
// console.log(arr);

// pop operation = delete element from end

// arr.pop();
// console.log(arr);

// starting add kar sakta hun, delete te element at first place

// arr.unshift(10);
// console.log(arr);

// delete bhi kar sakta hoon
// arr.shift();
// console.log(arr);

// let arr = [10, 30, 49, 84, 95];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//for-of-loop
// for(let num of arr){
//     console.log(num);
// }

// NOTE:- In primitive data, data is CSPViolationReportBody, while in non primitive their reference is copied 

// let arr = [10, 30, 49, 84, 95];
// let arr2 = arr;

// arr2.push(40);

// console.log(arr);

// Object(non primitive) : copy by reference hote hai.
// Primitive : copy by value

// let arr = [10, 30, 49, 84, 95];

// let arr2 = arr.slice(2,4);

// slice original array me koi chnage nahi karta hai.

// console.log(arr2);
// console.log(arr);

// splice me original array se part trim karte hai, yani original array me change kerte hai.

// let arr3 = arr.splice(1,3, "shubham", 24);
// console.log(arr3);


// spread operator
// let arr = [10, 30, 49, 84, 95];
// let arr2 = ["shubham", 24, true];
// let arr4 = ["shivam", 4, "vanshika"];

// arr.push(arr2);
// let arr3 = arr.concat(arr2,arr4);
// let arr3 = [arr,arr2,arr4];

// spread operator 

// let arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);

// converting & Searching
// const names = ["Shubham", "Shivam", "Vanshika", "Bob", "Rahul"];

// console.log(names.toString()); // tostiring ek new array create karke dega jiska type string hoga.

// console.log(names.join("-"));
// console.log(names.indexOf("Shivam"));
// console.log(names.lastIndexOf("Shivam"));
// console.log(names.includes("Shubham"));

// names.sort();
// names.reverse();

// console.log(names);

// const a = [101,90,80,24,28];
// a.sort(); // sort treat number as character(string) like "101","90"
// console.log(a);

// const arr = [10, 45, 24, 28, 29];
// arr.sort((a,b)=> a-b);
// // ascending order

// arr.sort((a,b)=> b-a);
// // descending order
// console.log(arr);

// agar -ve aaya: to pahle a aayega phir b aayega
// agar +ve aaya: to pahle b aayega phir a aayega

// flattening array

// const arr = [10,30,40,[55,24,[86,4,28],11], 95];
// const a = arr.flat(Infinity); // we define leval to flat
// console.log(a);