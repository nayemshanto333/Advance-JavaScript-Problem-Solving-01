// Problem solving 01


function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}
  
scopeTest();


// 01. Answer is:
//     I am var
//     global-scoped variable

//     ReferenceError.
//     block-scoped variable.

//     ReferenceError.
//     block-scoped variable.



// Problem solving 02


// function greet(name,greeting= "Hello"){
//         return `${name} ${greeting}`
// }

// console.log(greet("Alice"));
// console.log(greet("Bob!", "Good morning"))



// Problem solving 03


// function sum(...args){
//     let total = 0;
//     for(let x of args){
//         total += x;
//     }
//     return total;

// }
// console.log(sum(1, 2, 3));
// console.log(sum(10, 20, 30, 40)); 
// console.log(sum(5)); 


// Problem solving 04

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const mergedArray =[...array1, ...array2, ...array3]
// console.log(mergedArray);



// Problem solving 05


// const name = "John";
// const age = 30;

// let person = {
//     name,
//     age,
//     greet(){
//         return `"Hi, I'm ${this.name} and I'm ${this.age} years old`
//     }
// };

// console.log(person.greet());



// Problem solving 06

// const fruits = ["apple", "banana", "cherry"];

// for(let x of fruits){
//     console.log(x)
// }



// Problem solving 07


// const name = "Alice";
// const age = 25;

// const message = `My name is ${name} and I am ${age} years old`;
// console.log(message); 


// Problem solving 08

// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 92 }
//   ];
  
// for (let x of students){
//     console.log(`${x.name}: ${x.grade}`)
// }


// Problem solving 09

// const nestedArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
  
// for(let x of nestedArrays){
//     let sum = 0; 
//     for(let y of x){
//      sum += y;
//     }
//     console.log(sum)
// }



// Problem solving 10

// const a = 5;
// const b = 10;

// const result = `The sum of ${a} and ${b} is ${a+b}.`;
// console.log(result); 

