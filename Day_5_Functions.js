// //Activity 1 : Function Declaration
// //Task 1: Write a fuction to check if a number is even or odd and log the result to the console.

// function isEvenorOdd(number) {
//     if (number % 2 === 0) {
//         return `The number ${number} is Even`
//     }else {
//         return `The number ${number} is Odd`
//     }
// }

// // console.log(isEvenorOdd(8));
// // console.log(isEvenorOdd(5));
// //Task 2: Write a function to calculate the square of a number and return the result

// function squareTheNumber(number) {
//     result = number * number
//     return `The square of number ${number} is ${result}`
// }
// // console.log(squareTheNumber(5));

// //===================================================//
// //Activity 2: Function Expression
// //Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// function maximumOfTwoNumber(number1, number2) {
//     if (number1 > number2) {
//         return (`The ${number1} is maximum between ${number1} and ${number2}`);
//     }else {
    
//         return(`The ${number2} is maximum between ${number1} and ${number2}`);
//     }
// }

// // console.log(maximumOfTwoNumber(25, 15));

// //Task 4: Write a function expression to concatenate two strings and return the result.

// function greatings(string1, string2) {
//     return `${string1} ${string2}`
// }

// // console.log(greatings('Hello','Premendra'));

// //================================================//
// //Activity 3: Arrow Functions
// // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// const total = (num1, num2) => {
//     return num1 + num2
// }

// console.log(total(8, 10));

// const sum = (a = 0, b = 0) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       return 'Invalid input: Both arguments must be numbers.';
//     }
//     return a + b;
//   };
  
//   // Usage
// //   console.log(sum(9, 7));   

// //Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// const isLogin = (string)=> {
//     if (string == 'true') {
//         return 'The user loged In'
//     }else {
//         return 'The user not loged In'
//     }
// }
// // console.log(isLogin('false'));


//====================================//
//Activity 4: Function Parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function sumWithDefaultParams(num1, num2 = 8) {
    return num1 + num2 
}

// console.log(sumWithDefaultParams(7, 2));

// Task 8: Write a function that takes a person's name and age and returns a greating message. Provide a default value for the age.

function greatings(name, age = 50) {
    return `Hello ${name}, you are ${age} old`
}
console.log(greatings('Premendra'));

//Activity 5: Higher-Order Functions
//Task 8: Write a higher-order function that takes a function and a number, and calls the function that many times.
