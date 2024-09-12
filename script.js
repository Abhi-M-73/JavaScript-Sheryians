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

var symbol1 = Symbol();
var symbol2 = Symbol('description');
console.log(symbol1);  // Symbol()
console.log(symbol2);  // Symbol(description)

var sym1 = Symbol(10);
var sym2 = Symbol(10);
console.log(sym1 === sym2);






