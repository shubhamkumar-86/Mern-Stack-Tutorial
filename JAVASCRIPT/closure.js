//Scope and Closure, HOF
// Global - koi bhi access kar sakta hai
//functional- function ke andar hi variable ko access kar sakte hai.
//Block level- block ke andar tak hi accesible kar sakte hai.
// NOTE :- let and const respect all the scope.

let a = 10;
const b = 20;

if(true){
    let d = 30;
}

console.log(a);

let global = 30;

function greet(){
    let global = 40;

    function meet(){
        let global = 10;
        console.log(global);
    }

    meet();
}

greet();


