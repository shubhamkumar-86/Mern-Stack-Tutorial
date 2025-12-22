// Object in Javascript
// key, value pair
// const user = {
//     name: "Shubham",
//     age: 24,
//     emaiId: "shubhamkurtha@gmail.com",
//     amount: 6600
// }

// console.log(user["name"]);
// console.log(user.age);
// console.log(typeof user);
// CRUD operation: Create Read Update Delete 

// console.log(user.age);

// update
// user.aadhar = 12345;
// user.amount = 5000;

// console.log(user);

// delete
// delete user.emaiId;
// console.log(user);

// const user = {
//     name: "Shubham",
//     age: 24,
//     emaiId: "shubhamkurtha@gmail.com",
//     amount: 6600
// }

// const user2 = user;
// user2.age = 90;

// console.log(user2);

// sirf keys or values ko print karwane ke liye 

// Important //
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Looping in Object 

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// const user = {
//     name: "Shubham",
//     age: 24,
//     emaiId: "shubhamkurtha@gmail.com",
//     amount: 6600
// }

// for of loop array ke upar lga sakte hai

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);
// }

// const name = user.name;
// const age = user.age;

// Destructuring (object ko destructure karna)
// const{name,age} = user;

// const arr = [10, 20, 40, 65]; // array destructuring
// const [first,second] = arr;
// console.log(first,second);

// console.log(name, age);

// Kayi bar hum kuch alag name dena chahte hai to oo bhi de sakte hai jaise ki 

// const{name:userName,age:userAge} = user;
// console.log(userName,userAge);

// const user = {
//     name: "Shubham",
//     age: 24,
//     emaiId: "shubhamkurtha@gmail.com",
//     amount: 6600,
//     greeting: function(){
//         console.log(`${this.name} is intelligent`);
//         return 20;
//     }
// }

// const va = user.greeting();
// console.log(va);

// object ke andar object create karna