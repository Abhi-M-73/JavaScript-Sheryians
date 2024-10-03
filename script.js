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
// let n = 2;
// let m = 11;
// let sum = n + m;
//  console.log(`The sum of ${n} and ${m} is ${sum}`);
// let div = n / m;
//  console.log(`The divison of ${n} and ${m} is ${div}`);
// let mul = n * m;
//  console.log(`The multiplication of ${n} and ${m} is ${mul}`);
// let sub = n - m;
//  console.log(`The substraction of ${n} and ${m} is ${sub}`);
// let mod = m % n;
//  console.log(`The modulas of ${m} and ${n} is ${mod}`);
// let pow = m ** n;
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




//1. wap to accept two integers from user and display the sum of them
// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter second number");
// alert(`sum = ${num1 + num2}`);


//2. wap to swap two number using third variable
// let a = 10;
// let b = 5;
// console.log(`before swaping a is ${a} and b is ${b}`);
// let temp = a; // 10
// a = b;  // 5
// b = temp;  //10
// console.log(`after swaping a is ${a} and b is ${b}`);



//2. wap to swap two number without using third variable
// let a = 10;
// let b = 5;
// console.log(`before swaping a is ${a} and b is ${b}`);
// a = a + b;    // 10 + 5 = 15
// b = a - b;    // 15 - 5 = 10
// a = a - b;    // 15 - 10 = 5
// console.log(`after swaping a is ${a} and b is ${b}`);


//3. wap to accept the lenght and width for the reactangle and display its area and parameter;
// let length = +prompt("Enter length");
// let width = +prompt("Enter width");
// alert(`Area of reactangle is ${length * width}`);
// alert(`Parameter of reactangle is ${2*(length + width)}`);

// 4. find simple interest
// let principle = +prompt("Enter principle");
// let rate = +prompt("Enter rate");
// let time = +prompt("Enter time");
// let simpleInterest = (principle * rate * time) / 100;
// console.log(`Simple Interest is ${simpleInterest} `);


//5.accept the 3 side of the triangle and find the area with herons formula
// let firstSide = +prompt("Enter first side of triangle");
// let secondSide = +prompt("Enter second side of triangle");
// let thirdSide = +prompt("Enter third side of triangle");
// let semiParameter = (firstSide + secondSide + thirdSide) / 2;    // s = (a + b + c)/2
// let areaOfTriangle = Math.sqrt(semiParameter * (semiParameter - firstSide) * (semiParameter - secondSide) * (semiParameter - thirdSide));   // A = underroot(s(s-1)(s-b)(s-c))
// console.log(`Area of triangle is ${areaOfTriangle.toFixed(2)}`);


//6. find the surface area of the sphere
// let radius = +prompt("Enter radius of sphere");
// const pi = 3.14;
// let areaOfSphere = 4*pi*(radius**2);              //A=4πrr
// console.log(`Surface Area of sphere is ${areaOfSphere}`);


//7. find the area and parameter of the circle      
// let radius = +prompt("Enter radius of cirle");
// const pi = 3.14;
// let parameterOfCirlcle = 2*pi*radius;              //C=2πr
// console.log(`Parameter of cirle is ${parameterOfCirlcle}`);     //A = A=πrr
// let areaOfCircle = pi*(radius**2);
// console.log(`Area of circle is ${areaOfCircle}`);



//Function in js 
//Function initialization / declaration
// function funcName() {
//     console.log("Function body");
//     return "hello";
// }

// funcName();        // function calling

// let x = funcName();
// console.log(x);

// function rules
//1. bydefault function return undefined
//2. return must be at least last line of the function 
//3. only single entity must be return by the function 
//4. function call is replaced by the return value
//5. code written after return in the function will not be reachable.


//note: if we want to use any value or operation out side of function then we use to return otherwise we use to console.log()
// if we use any function in a class that is called method 

//Function -> not compulsary to return somthing
//Method(Object) -> compulsary to return somthing

// function getName() {
//     console.log('jhon');
// }

//  getName();  //our function call (non parameterised function call)
//  console.log("jhon") ;  //js function call (parameterised function call)


// function getName(name) {      // parameter(s)
//     console.log(name);
// }
// getName("jhon");              //argument(s)



// function getName(name, city) {
//     console.log(name , city);
// }

// let t = "jhone";
// let c = "bhopal";
// getName(n, c);


// function getSum(x , y){
//     let sum = x + y;
//     return sum;
// }
// let res = getSum(2, 3);
// let multiple = 5;
// console.log(res * multiple);



//Default Parameter
// 1. Default parameter must be  the last parameter of the function 
// 2. there should only 1 default parameter in the function 

// function details(name, batchCode = "MERN-12"){
//     console.log(name , batchCode);
// }

// details("Jhon");
// details("Jhon1");
// details("Jhon2");
// details("Jhon3", "B6");
// details("Jhon4", "B25");


//Rest Operator (...) = it hold multiple value.   // (...varName)
// 1. Rest operator must be  the last parameter of the function 
// 2. there should only 1 rest parameter in the function 
// function hobbies(name, ...h){
//     console.log(name , h);
// }

// hobbies("john" , "swimming");
// hobbies("john1" , "swimming" , "reading");
// hobbies("john2" );
// hobbies("john3" , "swimming" , "singing", "running");
// hobbies("john4" , "drawing");



//Fat Arrow Function 
// const greet = () => {
//     return "hello";
// }
// let res = greet();
// console.log(res);

//non-parameterized fat arrow function 
// const greet = () => "hello";
// let res = greet();
// console.log(res);


//parameterized fat arrow function 
// const sum = (a, b) => a + b;
// let res = sum();
// console.log(res);



//temporal dead zone (in let and const ) = when variable is declared already by the compiler but it has no value initialized by the compiler so it is called temporal dead zone.
// let and const show the temporal dead zone and initialization error.
// var is partially hoisted so that it show undefine but let and const show the error of initialiozation. 
// function are fully hoisted because of it is declared and initialized togather. it do't show any error.




// add();                   // no error because of fully hoisted
//function add(a , b){
// console.log(a + b);
// }


// add(2, 3)                // it show error because of partially hoisted 
// var add = (a , b) => {
// console.log(a + b);
// } 


// 1 . variable with var keyword show partially hoisting
// 2 . variable with let and const keyword shows no hoisting (TDZ)
// 3. function with function keyword shows fully hoisting
// 4. function with arrow function shows no hoisting (TDZ) 



// immutable / non-reference / premitive 
// mutable / reference / non-primitive



//Object 
// create the object
// const profile = {
//     name : "john",
//     age : 28,
// }

// acccess the object 
// console.log(profile); 
// console.log(profile.name);      //john
// console.log(profile["name"]);    //john
// console.log(typeof profile);      //object



//add new property in object
// const profile = {
//     name: "john",
//     age: 28,
// }
// profile.city = "New York";
// profile["country"] = "USA";
// console.log(profile);


// Update exiting property of object
// const profile = {
//     name: "john",
//     age: 28,
// }
// profile.name = "alex";
// profile["age"] = 32;
// console.log(profile);


// Delete any property of object
// const profile = {
//     name: "john",
//     age: 28,
// }
// delete profile.name;
// console.log(profile);


// const profile = {
//     name : "john",
//     age : 28,
//     city : "Ney York",
//     isStudent : true,
// }

//traversing an object
// for in loop
// for (const key in profile) {
//     console.log(key);
// }

// for (const key in profile) {
//     console.log(key, ":" , profile[key]);
// }



// const profile = {
//     name : "john",
//     age : 28,
//     city : "Ney York",
//     isStudent : true,
// }
//Copying the object
// const profile2 = Object.assign({}, profile);
// const profile2 = {...profile};    // spread operator
// console.log(profile2);



 // (...)  => when it is used in function then it is called rest operator and when it is used in array and objects for copy properties then it is called spread operator.


 // this = this keyword is basically used for to take reference of parent object 
//  const profile = {
//     name : "john",
//     getName : function(){
//        console.log(this.name);
//     }
//  }

// profile.getName();



//pure function and impure function 
// pure function which do not use the data outside of the function is called pure function 
// pure function which uses the data outside of the function is called impure function

// we can use the the values or variables ligually by the passing parameter in the function  

// let d = "Hello";

// function greet(v){
//     console.log(v);
// }

// greet(d);



// normal function is hold extra data or method so it is use rarely. 
// we must always use arrow function because it do not hold extra data or methods
// different between pure function and impure function
function greet(){
    console.log(this);
    console.log(globalThis);
    console.log(arguments);
    console.log("Normal function");
}
greet();
console.log("----------------------------------------")
const greetArrow = () => {
    console.log(this);
    console.log(globalThis);
    console.log(arguments);
    console.log("Arrow function");
}

console.log(greetArrow());