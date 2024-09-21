// Words vs Keywords

// words = word is basically simple word which is not define in our programming language.
//keywords = keyword is basically spacific word which is already define in our programming language.

// These are a printing functions which is basically used to display a message in brouser's console.
// console.log("hey");
// console.warn("hey");
// console.error("hey");


// Variables = variable are like a container which is basically used to hold a value. it is created first and used after in a program.
// var = var is a keyword which is used to create a variable.

// here id is a word
// var id = "Siddharth";
// here id is a reserved keyword(variable)
// console.log(id);


// Naming convention of the variable
// 1. must start with small/capital/ and must not start with number.
// 2. variable name must not include any spacial character other than _ 
// 3. variable name is a single word,
// 4. camelCase = helloWord
//   snake_case = hello_word
//   PaskalCase = HelloWord


//DataTypes
// onject = null
// array


// Number = NaN , Infinity, -Infinity , decimal value, non-decimal value, positive number, negative number
// var age = 12;
// console.log(age);
// console.log(typeof age);

// String = '', " ", ` `
// var address = "Bhopal";
// console.log(address);
// console.log(typeof address);

//string + number = string  
// var address = "Bhopal" + 21;
// console.log(address);
// console.log(typeof address);

// number + string = string
// var address =  21 + "Bhopal" ;
// console.log(address);
// console.log(typeof address);

// single line string = '' / " "
// multi line string = ` ` (template literals)

// var user = "jhon";
// var age = 25;
// console.log("Username is ", user , "and the age is", age);
// console.log(`Username is ${user} and the age is ${age}`);

// boolean = true / false
// var isValid = true;
// console.log(isValid);
// console.log(typeof isValid);

// null = when the programmer show the value of variables is empty then its datatype is onject
// var age = 25;
// console.log(age);
// console.log(typeof age);
// var age = null;
// console.log(age);
// console.log(typeof age);

// undefined = 
// var a;                declaration   
// console.log(a);
// console.log(typeof a);

// a = 5;                initialization
// console.log(a);

// a = 10;                reinitialization/updation
// console.log(a);


// symbol = Symbol is a primitive data type introduced in ECMAScript6 (ES6). It is used to create unique and immutable identifiers.

// var symbol1 = Symbol();
// var symbol2 = Symbol('description');
// console.log(symbol1);  // Symbol()
// console.log(symbol2);  // Symbol(description)

// var sym1 = Symbol(10);
// var sym2 = Symbol(10);
// console.log(sym1 === sym2);

//Output
// alert("Hello");
// console.log("Hello");



// Input = prompt function always return string type value.
// var num1 = prompt("Enter a number");
// var num2 = prompt("Enter second number")
// console.log(num1 + num2);
// console.log(typeof num1);/

// Input
// var res = confirm("Are you ready?");
// console.log(res);
// console.log(typeof res);




// Type Conversion
// 1. Implicit type conversion
//  12 + "hello" = "12hello";           //computer(PL) does that

// 2. Explicit type conversion          //developers does that ( + / Number() )
// var num1 = Number(prompt("Enter a number"));
// var num2 = +prompt("Enter second number");
// console.log(num1 + num2);
// console.log(typeof num1);


// Variable Scope
// 1. Local Variable
// 2. Global Variable


// var age = 15;      //  Global Variable

// {
//     let city = "Bhopal";    //Mutable Loacal Variable
//     city = "Indore";
//     console.log(city);

//     const name = "Sid";    // Immutable Local Variable
//     name = abhi;
//     console.log(name); //error because can't change the value of const.

// }  
// console.log(city);  // error (because access is out of scope)
// console.log(name);  //

// JIT Compiler in JS =






//Oprators 

// 1. Arithmatic Operator = + , - , * , / , % , **
let n = 2;
let m = 11;
let sum = n + m;
//  console.log(`The sum of ${n} and ${m} is ${sum}`);
let div = n / m;
//  console.log(`The divison of ${n} and ${m} is ${div}`);
let mul = n * m;
//  console.log(`The multiplication of ${n} and ${m} is ${mul}`);
let sub = n - m;
//  console.log(`The substraction of ${n} and ${m} is ${sub}`);
let mod = m % n;
//  console.log(`The modulas of ${m} and ${n} is ${mod}`);
let pow = m ** n;
//  console.log(`The power of ${m} of ${n} is ${pow}`);



// shorthand operators = += , -=, *=, /= , %= , **=
//  let a = 5;
//  a += 5;
// //  console.log(a);
//  a -= 5;
// //  console.log(a);
//  a *= 5;
// //  console.log(a);
//  a /= 5;
// //  console.log(a);
//  a %= 5;
// //  console.log(a);
//  a **= 5;
// //  console.log(a);



// unarary operators  = ++increment , --increment ,increment++ , decrement--

// let b =12;
// let res = ++b + ++b + ++b + b--;       //  13 + 14 + 15 + 15 = 57
// console.log(res); // 57
// console.log(b);  //15-1 = 14



// 2. Comparison Oprator =   == , != , <= , >= , > , < , === , !==      (it is always return to boolean result = true/false)

// let x = 5;
// let y = 10;
// let res1 = x == y;
// console.log(res1);

// let res2 = x != y;
// console.log(res2);

// let a = "Helllo";
// let b = "Hi";
// let res3 = a > b;      // e > i = i(on the base of ascii value)
// It compares between non equal character
// console.log(res3); //false


// 4. Logical operators && || ! result(a/c to the data which is logically compared)
// falsy value = 0, '' , null, undefined , NaN , false

//comparison b/w boolean values
// true && true && true = true
// true && false && true = false
// true || false || true = true
// false || false || false = false



// camprison b/w values
// console.log(0 || 8 || true || undefined );
// console.log(1 && -0.8 && true && null && 12 );





// 3. Assignment Operator =

// binary operators = + , - , * , / , % , ** 





// Control flow

// 1.Conditional Statements




// simple if
// if (condition) {
//     // true statement
// }


// let num = 10;
// if (num >= 0) {
//     console.log("Number is Positive");
// }


// simple if-else
// if (condition) {
//     //true statement
// } else {
//     //do any thing
// }

// num = -10;
// if (num > 0) {
//     console.log("Number is Positive");
// }else{
//     console.log("Number is Negative");  
// }



// ladder if-else
// if (condition) {
//     // true condition
// } else if (condition) {
//     //other true condition
// } else {
//     // do any thing
// }


// let num = -1
// if (num > 0) {
//     console.log("Number is positive"); 
// } else if (num == 0) {
//     console.log("Number is Zero");
// } else {
//     console.log("Number is Negative");
// }



//nested if-else
// if (condition) {
//     if (condition) {
//         // true condition
//     } else {
//         // do other thing
//     }
// } else {
//     // do any thing
// }



// let num = -1;
// if (num > 0) {
//     console.log("Number is positive");
//     if (num % 2 == 0) {
//         console.log("Even Number");
//     } else {
//         console.log("Odd Number");
//     }
// } else if(num < 0){
//     console.log("Number is negative");
// }else{
//     console.log("Number is Zero");   
// }



//using multiple operator in if-else

// let num = -10;

// if (num > 0 && num % 2 == 0) {
//     console.log("Positive Even");
    
// } else if(num > 0 && num % 2 != 0){
//     console.log("Positive Odd");
    
// } else if(num < 0 && num % 2 == 0) {
//     console.log("Negative Even");
    
// } else if(num < 0 && num % 2 != 0){
//     console.log("Negative Odd");
    
// }else{
//     console.log("Zero Number");
    
// }




// Switch Case , fall throw, print 1 to 10 using without loop , recursion      (important for interview)
// let num = 10;
// switch (num > 0) {
//     case 1:
//         console.log("Positive Number");
//         break;

//     default:
//         console.log("Negative Number");
//         break;
// }




// wap to take input name and age from user and print on console
// a. print on console
// let name = prompt("Enter your name");
// let age = +prompt("Enter your age");
// console.log(`Name is ${name} and age is ${age}`);

//b. check if user eligible for vote or not and give suitable message and check how many years to take to eligible for vote
// let age = +prompt("Enter your age");
// if( age >= 18){
//     console.log(`You are eligible for vote`);
// }
// else{
//     console.log(`You are not eligible for vote and you have to wait for ${18-age} years.`);
// }



// Ternary Oprator
// const varname = condition ? true statement : false statement



// wap to take 3 numeric input from the user
// a. check if all three numbers are equal or any two are eqaul or no one is equal
// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// let c = +prompt("Enter third number");

// if (a == b && b == c) {
//     alert("Three side are equal"); 
// } else if(a == b || b == c || c==a ){
//     alert("Two side are equal");
// }else {
//     alert("No side are eqaul");
// }





// Iterative Statements / Loops 
// 1. Entry Control LOop     =   for loop and while loop
// 2. Exit control Loop      =   do while loop


//when we know the iteration count of a loop then we should use for loop.
//when we don't know the iteration count of a loop then we should use while loop.
//when we want the loop execute at least one time theb we should use do while loop.


//process
// 1. Loop variable
// 2. Condition Exp
// 3. Body of loop
// 4. Updation Exp

// var varname;
// while (condition) {
//     //loop statement
//     //updation
// }

//while loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// do while 
// let i = 1;
//  do{
//     console.log(i);
//     i++;
// }while (i <= 10);


//for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }array.


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 != 0) {
//         console.log("skip and continue")                     // got to updation exp and skip the below code
//         continue;
//     }
//     console.log(i);
// }



// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         console.log("Loop breaked")                     // got to updation exp and skip the below code
//         break ;
//     }
//     console.log(i);
// }