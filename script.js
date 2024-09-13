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
 let a = 5;
 a += 5;
 console.log(a);
 a -= 5;
 console.log(a);
 a *= 5;
 console.log(a);
 a /= 5;
 console.log(a);
 a %= 5;
 console.log(a);
 a **= 5;
 console.log(a);


// 2. Comparison Oprator
// 3. Assignment Operator
// 4. 
// unarary operators  = ++increment , --increment ,increment++ , decrement--
// binary operators = + , - , * , / , % , ** 


