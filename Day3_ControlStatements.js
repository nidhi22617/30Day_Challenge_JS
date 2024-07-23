// Day 3: Control Structure
// Task/Activities:
// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positiv, negative or Zero, and the result to the console.
        // let num1 = 1

        // if (num1 == 0) {
        //     // console.log("The num1 is Zero");
        //     return
        // } 
        // if (num1 >= 0) {
        //     // console.log("The num1 is Positive");
        //     return
        // }
        // if (num1 <= 0){
        //     // console.log("The num1 is Negative");
        // }

//Task 2: Write a program to check if a person is eligible to vote(age>=18) and log the result to the console.

        // let age = 17;

        // if (age >= 18) {

        //     console.log("The person eligible for Vote");
            
        // } else {
        //     console.log("The person cann't eligible for Vote");
        // }

//Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

        // let num1 = 9;
        // let num2 = 15;
        // let num3 = 6;

        // if (num1>= num2) {
        //     console.log(`The number ${num1} is greater among three number ${num1}, ${num2}, ${num3}`);
        // }
        // else
        // if (num2 >= num3) {
        //     console.log(`The number ${num2} is greater among three number ${num1}, ${num2}, ${num3}`);
        // }
        // else {
        //     console.log(`The number ${num3} is greater among three number ${num1}, ${num2}, ${num3}`);
        // }

//Activity 3: Switch Case
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console

        // let day = 7;

        // switch (day) {
        //     case 1:
        //         console.log("Today is Sunday");
        //         break;
        //     case 2:
        //         console.log("Today is Monday");
        //         break;
        //     case 3:
        //         console.log("Today is Tuesday");
        //         break;
        //     case 4:
        //         console.log("Today is Wednesday");
        //         break;  
        //     case 5:
        //         console.log("Today is Thursday");
        //         break; 
        //     case 6:
        //         console.log("Today is Friday");
        //         break; 
        //     case 7:
        //         console.log("Today is Saturday");
        //         break;
        //     default:
        //         console.log("Sorry the value is not defined");
        // }

//Task 5: Write a program that uses a switch case to assign a grade('A','B', 'C', 'D', 'F') based on score and log the day name to the console

        // let mark = 90;
        // let grade;

        // switch (true) {
        //     case (mark <= 100 && mark>=90): 
        //         grade = "A+"
        //             console.log(grade);
        //         break;
        //     case (mark <= 90 && mark>=80): 
        //         grade = "A"
        //             console.log(grade);
        //         break;
        //     case (mark <= 80 && mark>=70): 
        //         grade = "B+"
        //             console.log(grade);
        //         break;
        //     case (mark <= 70 && mark>=60): 
        //         grade = "B"
        //             console.log(grade);
        //         break;
        //     case (mark <= 60 && mark>=50): 
        //         grade = "C+"
        //             console.log(grade);
        //         break;
        //     case (mark <= 50 && mark>=40): 
        //         grade = "C"
        //             console.log(grade);
        //         break;
        //     case (mark <= 40 && mark>=35): 
        //         grade = "D"
        //             console.log(grade);
        //         break;
        //     case (mark <= 35 ): 
        //         grade = "NG"
        //             console.log(grade);
        //         break;           
        // }

//Activity 4: Conditional(Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the resutl to the console.

    // const number = 7;
// check if the number is even
        // if (number % 2 == 0) {
        //     console.log("The number id even. ");
        // }
        // else {
        //     console.log("The number is odd");
        // }


// ternary operator
        // const result = (number % 2  == 0) ? "even" : "odd";

        // // display the result
        // console.log(`The number is ${result}.`);
//Activity 5: Combining Conditions
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the consle.

        // const year = 2015;

        // if (year % 4 == 0 && year != 100 && year % 4 == 0) {
        //     console.log("The year is leap Year");
        // }
        // else {
        //     console.log("The year is not leap year");
        // }

// Ternary Operator

        // const leapyear = (year % 4 == 0 && year != 100 && year % 4 == 0) ? "Leap Year": "Not Leap Year";
        // console.log(leapyear);



// program that checks if the number is positive, negative or zero
// input from the user
const prompt = require('prompt-sync')();

const aNumber = prompt("Type a number : ", "");

// check if number is greater than 0
if (aNumber > 0) {
    console.log("The number is positive")
}

// check if number is 0
else if (aNumber == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}



