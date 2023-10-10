// Variable - store, access, Modify === Value
// Declare, Assignment, Operator, Assign value
// -----------------------------------------------
// let name = "John";
// let address, zip, state;
// address = "101 main street";
// console.log(address);

// ###### ------------------------------------------------
// let vs var vs const(CONSTANT) - can't re-assign
// ---- using var
// var value1 = "some value";
// value1 = "some other value";
// console.log(value1);

// ---- using let
// let value2 = "John";  
// value2 = "Peter";
// console.log(value2);

// ------- using const
// const value3 = "Jordan";
// value3 = "Abraham";
// console.log(value3);
// const value3; /* Missing initializer */

// #### -------  Cotation ------' ' , " " -----------------
// const name = 'john\'s courses are the best';
// const name = "john's courses are the best";
// console.log(name);

// ---------- String concatenation
// ` ` - backticks(template strings) easier option
//--------------------------
// const name = 'john';
// const lastname = 'shakeandbake';
// let fullname = name + ' ' + lastname;
// console.log('Hello there your fullname is: ' + fullname);
//-----------------------------
// const website = 'google';
// const url = 'https://www.' + website + '.com';
// console.log(url);

//------------ Numbers --------------
// Loosely typed = don't declare type
// const number = 34;
// let pants = 2.4455;
// pants = 'are great';
// const number2 = 2.456;
// const number3 = '2.345';

// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);

// ---------------- Numbers -------------------
// +=, -=, /=, *=, ++, -- , %
// Modulas (%) operator returns the ramainder after integer division

// let number = 40;
// number += 5;
// number += 5;
// number ++;
// number --;
// console.log(number);

// ------ Modulus ----------------------------------------
// const slices = 10;
// const children = 4;
// const amount = slices % children;

// const random = 4 + 5 + 10 * 10;
// const random2 = (4 + 5 + 10) * 10;
// console.log(random);
// console.log(random2);
// console.log(amount);

// ------------ Implicit Type conversion ---------------
// const name = 'john';
// const lastname = 'jordan';
// const fullname = name + ' ' + lastname;
// console.log(fullname);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastname;
//console.log(value); /* NaN = Not a Number */

// ------------------------------------------
// let number3 = 10 /* '10' */;
// let number4 = '23';

// let number3 = 10;
// let number4 = 23;
//number4 = '23'; /* Details in DOM Module */
// ------------------------------------------
// const result2 = number3 + number4;
/*
    With [+] operator it makes all the difference..
*/
// console.log(result2);
// -------------------------------------------

/*
In console, the blue color is type-defined. If it is in
black color it is a string.
*/
// -------------------------------------------
// const randomNumber = 13;
// document.querySelector('.form').addEventListener('submit',
// function(e){
//     e.preventDefault();
//     let value = document.getElementById('amount').value;
//     value = parseInt(value);
//     console.log('Input value type');
//     console.log(value);
//     console.log('Sum of two values');
//     console.log(randomNumber + value);
// });

// -------------------------------------------------------

// typeof - operator (typeof variable) (typeof value)


// String
// const text = 'some text';
// console.log(typeof text);
// console.log(typeof 'some text');

// Number
// const number = 45;
// console.log(typeof number);

// Boolean
// let value1 = true;
// let value2 = false;
// console.log(typeof value1);

// Null
/*
    Here in JS has a bug. null is not an object
    But null is null.
    -- Read about Null and Undefined
    
*/
// const result = null;
// console.log(typeof result);    
// console.log(typeof null);    

// Undefined - Nothing is inside a variable
// let name;
// console.log(name);

// Symbol (ES6)
// -----------------------------------

// -----------------------------------
// Arrays, Functions and Objects
// -----------------------------------

// Arrays - [], 0 index based
// const friend1 = 'anna';
// const friend2 = 'anna';
// const friend3 = 'anna';
// const friend4 = 'anna';

// const friends = ['john','bob', 45, undefined,null];

// let bestfriend = friends[0];

// console.log(bestfriend);   
// --------------------------------------

// Functions Basics [ {Declare} and then {Invoke} ]


// function hello(){
//     console.log('Hello there Bob');
//     console.log('Hello there John');
//     console.log('Hello there Susy');
// }

// hello();     /* Invoking here */


// come code here...

// come code here...

// come code here...

// ------------------------------------------------
// Arrays, Functions and Objects
// params - when declare/define [placeholders, local vars]
// arguments - when [invoke/call/run]
// use vars/values, multiple params, undefined

// ---------------------------------------------
// function helloBob(){
//     console.log('Hello there Bob');
// }

// function helloAnna(){
//     console.log('Hello there Anna');
// }

// function helloSusy(){
//     console.log('Hello there Susy');
// }

// helloBob();
// helloAnna();
// helloSusy();
// ---------------------------------------------
// const bob = 'Bob';
// const susy = 'Susy';
// const anna = 'Anna';


// // local variables
// function greet(name,second){
//     console.log(second);
//     console.log('Hello there ' + name);
// }
// // console.log(name); // gives mirror image

// greet(4); // number can also sent
// greet(bob);
// greet(anna,'Susy');
// greet(susy);
// ------------------------------------------------
// Arrays, Functions and Objects
// return 
// default undefined, shortcuts,ignores after [return] 
// 1 inch = 2.54 cm
// const wallHeight = 80;
// function calculate(value){
    // -----------------------------------------
    // console.log('The value is: ' + value * 2.54 + ' cm');
    // return 'hello world';
    // -----------------------------------------
//     const newValue = value * 2.54;
//     return newValue;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width,height];
// console.log(dimensions);

// --------------------------------------------------
// Expressions - Another way define
// Create a variable, assign to FUNCTION(not value), user var
// diff - hoisting, use - arrow func, libraries,

// function definition/declaration
// function addValues(num1, num2){
//     return num1+num2;
// }
// const firstValue = addValues(3,4);
// const secondValue = addValues(12,34);

// function expression
// const add = function (num1, num2){
    // does not have name
    // this is called anonymous function
//     return num1+num2; 
// };
// const thirdValue = add(5,6);
// in array we can store all kinds of values.
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);
// -----------------------------
// Arrow Functions  
// const multiply = (num1, num2) => num1 * num2;
// ----------------------------------------------
// Arrays, Functions and Objects
// Objects - key/value pairs methods
// dot notation

// const person = {
//      name: 'john',
//      lastName: 'peters',
//      age: 40,
//      education: false,
//      married: true,
//      siblings:['anna','susan','peter'],
//      greeting: function (){
//         console.log('Hello my name is John');
//      }
// }
// const age = person.age;
// console.log(age);
// person.name = 'bob';
// console.log(person.name);
// console.log(person.siblings[2]);
// person.greeting(); 

// ------------------------------------------------
// Conditional Statements
// Comparison Operators
// >,<,>=,<=,==,===,!=,!==
// else if and !
// == checks only value
// === checks value and type
// const num1 = 6;
// const num2 = '6';
// const num2 = 10;

// const result = num1 >= num2;
// -------------------------------------
// const value = false;
// if(!value){
    //     console.log('value is false');
    // }
// -------------------------------------------------
// if(num1 > num2){
//     console.log('first number is bigger than second');
// } else if(result) {
//     console.log('first number equal to a second');
// } else {
//     console.log('second number is bigger than first');
// }
// -------------------------------------
// const value = num1 == num2;
// const value2 = num1 === num2;
// const value = num1 != num2;
// const value2 = num1 !== num2;
// console.log(value);
// console.log(value2);

// -------------------------------------------------
// Logical Operators
// || - OR , && - AND, !
// const name = 'bob';
// const age = 26;
// if(name === 'bob' && age === 24){
//     console.log('hello there user');
// } else {
//     console.log('wrong values');
// }

// ----------------------------------------
// Switch - if else
// dice values - 1-6

// const dice = 3;
// switch(dice){
//     case 1:
//         console.log('you got one');
//         break;
//     case 2:
//         console.log('you got two');
//         break;
//     case 3:
//         console.log('you got three');
//         break;
//     default:
//         console.log('you did not roll the dice');
// }
// -------------------------------------------------
// Loops
// repeatedly run a block of code while conditon is true
// -----------------------------------------------------
// while loop 
// let /*const*/ amount = 10;
// while(amount > 0){
//     console.log('I have ' + amount + ` dollars and I'm going 
//     to the mall`);
//     amount--;
//     /* Uncaught TypeError: Assignment to constant variable.*/
// }

// -----------------------------------------------------
// do-while loop
// code block first, condition second
// runs at least

// let money = 0;
// do{
//     console.log('You have ' + money + ' dollars');
//     money++;
// } while(money< 10);
    
// -----------------------------------------------------
// for loop
// let i;                                                                                                         
// for(i=0; i<10; i++){
//  console.log('and the number is: ' + i);
// }
// -------------------------------------------------
// ===================================================
/*-----------------  PART 2  -------------------------*/
// ===================================================
// Connecting the Dots
// String Methods
// Global/ Local scope
// Array Iterators - (map, filter, reduce)
// Global Objects - Math, Date
// -------------------------------------------------
// String properties and methods
// wrapper String Object, don't memorize methods
// ----------------------------------------------
// let text = 'Peter Jordan';

// const person = {
//     name: 'peter', // property
    // greeting(){
        // method
//         console.log("Hey, I'm Peter");
//     },
// };
// console.log(person);
// console.log(person.name);
// person.greeting();
// ----------------------------------------------
// let text = ' Peter Jordan';
// let result = text.length;
// console.log(result);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charAt(text.length-1));
// console.log(text.indexOf('p')); 
// if not there then -1
// console.log(text.indexOf('e')); 
// console.log(text); 
// console.log(text.trim()); 
// console.log(text.startsWith(' Peter')); 
// console.log(text.trim().toLocaleLowerCase().startsWith('peter')); 
// console.log(text.includes('eter'));
// searches and gives back boolean
// console.log(text.slice(0,2));
// letter from 0 to 2 
// console.log(text.slice(-1));
// -----------------------------------------------------
// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression (value)
// const name = 'john';
// const age = 25;
// const sentence = "Hey it's " + name + ' and he is ' + age + 
//                  ' years old';  
// const value = `Hey it's ${name} and he is ${age} years old.
// And here is some simple math ${4+4}`;
// console.log(value);
// console.log(sentence);
// -----------------------------------------------
// Array Properties and Methods
// let names = ['john','bobo','barry','olga','ben'];

// length 
// console.log(names.length);
// console.log(names[names.length - 1]);

// concat
// const lastNames = ['pepper', 'onion', 'banana'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// reverse
// console.log(allNames.reverse());

//unshift // added at the beginning of the array
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

//shift
// allNames.shift();
// allNames.shift();
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// push
// allNames.push('susy');
// console.log(allNames);

// pop
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// splice - mutates original array
// const specificNames = allNames.splice(2,1);
// console.log(specificNames);
// console.log(allNames); // herel also removes one 

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// Arrays and for-loop
// const names = ['anna', 'susy', 'bob','john'];
// const lastName = 'shakeandbake';
// let newArray = [];
// console.log( newArray);
// //for loop
// for(let i=0; i<names.length; i++){
//     console.log(i);
//     console.log(names[i]);
//     // newArray.push(names[i]);  
//     const fullName = `${names[i]} ${lastName}`;                                                                                                                                                                                                                                                                                                                                                   
//     newArray.push(fullName);

// }
// console.log(names);
// console.log(newArray);
// --------------------------------------------------------
// *********** ---------- OBJECT --------- ****************
// --------------------------------------------------------
// Functions, return, if , arrays, for loop
// const gas = [20,40,100];
// const food = [10,40,50];
// function calculateTotal(arr){
//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//         total += arr[i];
//     }
//     if(total > 100){
//         console.log(`whoa! You are spending way too much`);
//         return total;
//     }
//     console.log(`You are good, total is less than 100`);
//     console.log(total); 
//     return total;
// }
// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 40000, 500, 1]);

// console.log({
//     gas:gasTotal,
//     food: foodTotal,
//     random: randomTotal
// });
// -----------------------------------------------------
// -----------------------------------------------------
// Reference vs Value
// Primitive Data Types
// String , Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = Object
// typeof
/* When assigning primitive data type value to a variable any
changes are made directly to that value, without affecting
originial value */

/* When assigning non-primtive data type {such as object} value to a variable
is done by reference, so any changes will affect all the 
references */
// let number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = {name:'bob'};
// let person2 = person;
// let person2 = {...person}; // spread operator
// person2.name = 'susy';
// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);

// -------------------------------------------------------------------
// Null and Undefined
// both represent "no value"

// undefined - "javascript can not find value for this"

// variable without value
// missing function arguments
// missing object properties

// null - "developer sets value"

// let number = 20 + null; // 20 + 0
// console.log(number);
// let number2 = 20 + undefined;
// console.log(number2);

// --------------------------------------------------------------------
// Truthy and Falsy
// "", '', ``, 0, -0, Nan, null, undefined

// const bool1 = true;
// const bool2 = 2 > 1;
// -------------------------------------------
// if(bool1){
//     console.log(`Hey it works!`);
// }
// if(bool2){
//     console.log(`Hey it also works`);
// }
// -------------------------------------------
// const text = '';
// if(text){
//     console.log('hey the value is truthy');
// } else {
//     console.log('hey the value is falsy');
// }
// ---------------------------------------------
// unary operator - typeof
// let text = 'some text';
// console.log(typeof text);

// binary operator - assignment
// let number = 3;
// let number2 = 2+5;

// ternary operator - 
// condition ? (runs if true) : (runs if false)
// const value = 2>1;
// if(value){
//     console.log('value is true');
// } else{
//     console.log('value is false');
// }
// ----------------------
// value ? console.log('value is true'): console.log('value is false');
// -------------------------------------------
// ---------------------------------------------------------
// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas: name collisions, modify by mistake

// let name = 'bobo';
// name = 'peter';
// // const name1 = 'john';
// console.log(`my name is ${name} and I'm a student`);

// function calculate(){
//     // some other code...
//     console.log(name);
//     name = 'orange';
//     function inner(){
//         name = 'inner name value';
//         console.log(`this is from inner function ${name}`);
//     }
//     inner();
// }
// calculate();
// console.log(`my name is ${name} and I'm a student`);

// if(true){
//     // some other code...
//     console.log(name);
//     name = 'Inside if';
// }

// console.log(`my name is ${name} and I'm a student`);

// -------------------------------------------------------
// Local Scope
// can not be access from outside code blocks
// if - NOT VAR
// let name = 'bobo';
// function calculate(){
//     const name = 'john';
//     const age = 25;
//     // code goes here
//     becomesGlobal = 'global variable';
// }
// calculate();
// console.log(name);
// // console.log(age);
// console.log(becomesGlobal);

// if(true){
    //     const name = 'john';
    // }
    
    // {
//     const name = 'john';
//     const special = 'special'
// }
// console.log(special);

// console.log(`my name is ${name} and I'm a student`);
// -------------------------------------------------------
// Variable lookup
// {} - code block

// const globalNumber = 5;
// function add(num1, num2){
//     // const globalNumber = 20;
//     const result = num1 + num2 + globalNumber;
//     function multiply(){
//         // const globalNumber = 100;
//         const multiplyResult = result * globalNumber;
//         console.log(multiplyResult);
//     }
//     console.log(multiplyResult); 
//     // multiplyResult is a local variable to the multiply
//     // doesn't work the opossite way
//     // JS always goona hop outside to look for the variable
//     // but can't do lookup from the outside in the local scope of the function
//     // console -  multiplyResult is not defined 
//     multiply();
//     // console.log(globalNumber);
//     return result;
// }
// console.log(add(3,4));
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// Callback Functions, Higher Order Functions, 
// Functions as First Class Objects/Citizens

// Functions are first class objects - stored in a variable (expression), 
// passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument or 
// returns another function as a result

// Callback Function - passed to a another function as an argument  
// and executed inside that function
// -------------------------------------------------------------------------
// function greetMorning(name){
//     const myName = 'john';
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name){
//     const myName = 'john';
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// greetMorning('bobo');
// greetAfternoon('peter');
// -------------------------------------------------------------------

// --- Call Back Function --- Below
// function morning(name){
//     // console.log('Good morning Bob');
//     return `Good morning ${name.toUpperCase()}`;
// }

// function afternoon(name){
//     return `Good morning ${name.repeat(3)}`;
// }

// // --- Higher Order Function --- Below
// function greet(name,cb){
//     const myName = 'john';
//     console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet('bobo',morning);
// greet('peter ',afternoon);

// -----------------------------------------------------------------------------
// Powerful Array Mehtods
// forEach, map, filter, reduce
// Iterate over array - no for loop required
/* Accept CALLBACK function as an argument, 
   call Callback against each item in a array.
   Reference Item in the Callback Parameter. */

// const numbers = [0,1,2,3,4];
// // show all numbers
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// ---------------------------------------------------------------------------
// To understand forEach read carefully Higher Order and Callback Function
// forEach
// does not return new array

// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:24, position: 'designer'},
//     {name: 'susy', age:23, position: 'engineer'},
// ];
// function showPerson(person){
//     console.log(person.name.toUpperCase());
// }

// // people.forEach(showPerson);
// people.forEach(function(item){
//     console.log(item.name.toUpperCase());
// });
// ----------------------------------------------------------------------------------

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:24, position: 'designer'},
//     {name: 'susy', age:23, position: 'engineer'},
// ];

// // const ages = people.map(function(){});
// const ages = people.map(function(person){
//     // console.log(person);
//     return person.age + 20;
// });
// ----------------------------
// const newPeople = people.map(function(person){
//     return{
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20,
//     };
// });
// ----------------------------
// const names = people.map(function(person){
//     return `<h1>${person.name}</h1>`;
// });
// document.body.innerHTML = names.join('');

// console.log(ages);
// console.log(newPeople);
// console.log(names);

// -----------------------------------------------------------------------
// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

// const people = [
//     {name: 'bob', age:20, position: 'developer'},
//     {name: 'peter', age:24, position: 'designer'},
//     {name: 'susy', age:23, position: 'engineer'},
// ];

// const youngPeople = people.filter(function(person){
//     return person.age <= 25;
// });

// const developers = people.filter(function(person){
//     // return person.position === 'developer';
//     return person.position === 'senior developer';
// });

// // console.log(youngPeople);
// console.log(developers);

// ---------------------------------------------------------
// find 
// returns single instance - (in this case object)
// returns first match, if no match then undefined
// great for getting unique value

// const people = [
//     {name: 'bob', age:20, position: 'developer', id:1},
//     {name: 'peter', age:24, position: 'designer', id:2},
//     {name: 'susy', age:23, position: 'engineer', id:3},
// ];

// const names = ['bob','peter','susy'];

// const person = people.find(function(person){
//     return person.id === 3;
// });

// console.log(
//     names.find(function(name){
//         return name === 'bob';
//     })
// );

// // console.log(person);
// console.log(person.name);

// const person2 = people.filter(function(person){
//     return person.id === 3;
// });
// // console.log(person2);
// console.log(person2[0].name);

// ----------------------------------------------
// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

// const people = [
//     {name: 'bob', age:20, position: 'developer', id:1, salary:200},
//     {name: 'peter', age:24, position: 'designer', id:2, salary:300},
//     {name: 'susy', age:23, position: 'engineer', id:3, salary:400},
// ];

// const total = people.reduce(function(acc, currItem){
//     console.log(`total ${acc}`);
//     console.log(`current money: ${currItem.salary}`);
//     acc += currItem.salary;
//     return acc;
// },0);

// console.log(total);

// --------------------------------------------------------
// Math
// Standard built-in objects - always available
// const number = 4.56789;
// const result = Math.floor(8.9999);

// const number = 4.12344;
// const result = Math.ceil(number);

// const number = 64;
// const result = Math.sqrt(number);

// const result = Math.PI;
// const result = Math.min(4,5,6,7,9);
// const result = Math.max(4,5,6,7,9,100,200,1000);

// const result = Math.floor(Math.random() * 10);
// const result = Math.ceil(Math.random() * 10);
// console.log(result);

// ---------------------------------------------------------
// Date
// const months = [
//     'January','February','March','April','May','June',
//     'July','August','September','October','November','December'
// ];

// const days = [
//     'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
// ];

// // const date = new Date();
// const date = new Date('1/12/2004');
// const month = date.getMonth();
// console.log(months[month]); 

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
// // console.log(sentence);

// document.body.innerHTML = sentence;

// --------------------------------  -------------
// ----------------- DOM -----------------------------
// -----------------------------------------------
// Select elements
// Traverse DOM
// Insert/Remove Elements
// Apply Styling
// Add/Remove css Classes
// -----------------------------------------
// similar to CSS
// Select the element or group of elements that we want to affect
// Decide the effect we want to apply to the selection

// -------many different ways ---
// document.body.style.background = 'grey';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// assighn to a variable 
// const element = document.getElementById('element');

// do something 
// document.querySelector('element');

// window object
/* Once we included our property in our index.html
 we have accessd to a global window object */
// console.log(window);

// ---- returns a node object or a node list, node list is an arraylike object
// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css);
// ----------------------------------------------------------------
// window object = browser api (way for browser that gives option to works with browser)
// when talkig window we are talking about the tab we are currently operating in...

// within the window object we have the document, 
// whay we don't write window.object?

// document
// console.dir

// console.dir(document);

// --------------------------------------------------------------
// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementById('element')

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// const btn = document.getElementById('btn');
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

// -------------------------------------------------------
// getElementByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// console.log(headings);
// console.log(headings.length);

// const items = document.getElementsByTagName('li');

// items.forEach(function(item) {
//     console.log(item); 
// }); 

// items[2].style.color = 'red';

// const betterItems = [...items];
// betterItems.forEach(function(item){
//     console.log(item);
// });

// console.log(items);
// console.log(betterItems);
// -------------------------------------------------

// getElementsByClassName('classname');

// node-list = array-like object
// index, length property but not array methods

// const listItems = document.getElementsByClassName('special');
// listItems[1].style.color = 'blue';
// ---------------------------------------------------------

// querySelector('any css'); - selects single
// querySelectorAll('any css'); - selects all

// const result = document.querySelector('#result');
// result.style.backgroundColor = 'red';

// const item = document.querySelector('.special');
// console.log(item);

// const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item){
//     console.log(item);
//     item.style.color = 'white';
// });
// ----------------------------------------------------------------

// select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which
// is treated as a text node

// children
// firstChild
// lastChild

// const result = document.querySelector('#result');
// const allChildren = result.childNodes;
// // console.log(allChildren);

// const children = result.children;
// console.log(children);

// console.log(result.firstChild);
// console.log(result.lastChild);
// ----------------------------------------------

// const heading = document.querySelector('h2');
// console.log(heading.parentElement.parentElement.parentElement.parentElement);
// const parent = heading.parentElement;
// parent.style.color = 'red';

// -----------------------------------------------
// previousSibling
// nextSibling
// return whitespace

// const first = document.querySelector('.first');
// const second = first.nextSibling.nextSibling;
// second.style.color = 'red';
// console.log(second);

// const last = document.querySelector('#last');
// const third = last.previousSibling.previousSibling;
// console.log(third);
// console.log(last.nextSibling.nextSibling);

// -----------------------------------------------
// previousElementSibling
// nextElementSibling

// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
// const last = document.querySelector('#last');

// -----------------------------------------------------
// nodeValue
// textContent

// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;
// console.log(item.childNodes[0].nodeValue);
// console.log(item.firstChild.nodeValue);

// const easyValue = item.textContent;
// console.log(easyValue);
// -------------------------------------------------------

// getAttribute();
// setAttribute();

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('class');
// console.log(classValue);

// const idValue = first.getAttribute('id');
// console.log(idValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute('class','first');
// last.textContent = 'i also have a class of first';
// console.log(last);

// const links = document.querySelectorAll('.first');
// console.log(links);

// -----------------------------------------------------
// className 
// classList

// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// const classValue = first.className;
// console.log(classValue);

// second.className = 'colors';
// second.className = 'text';
// here first class is removed when second class is initialized
// so we write as below to apply both classes,
// second.className = 'colors text';

// third.classList.add('colors','text');
// third.classList.add('text');
// third.classList.remove('text');


// const result = third.classList.contains('colors');
// if(result){
//     console.log('hello world');
// } else {
//     console.log('does not have the class');
// }   

// const classValue = third.classList;
// console.log(classValue);
// -----------------------------------------------------
// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location');

// replaceChild('new', 'old');

// const result = document.querySelector('#result');
// const first = document.querySelector('.red');

// create empty element
// const bodyDiv = document.createElement('div');
// create text node
// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// document.body.insertBefore(bodyDiv, result);

// result element
// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.appendChild(heading);

// Before
// result.insertBefore(heading,first);

// ----- replaceChild --------
// const smallHeading = document.createElement('h6');
// const smallText = document.createTextNode(`i'm a small heading text`);
// smallHeading.classList.add('red');
// smallHeading.appendChild(smallText);
// document.body.replaceChild(smallHeading,bodyDiv);

// console.log(result.children);

// ----------------------------------------------------
// prepend
// innerText

// const heading = document.createElement('h2');
// heading.innerText = `i am a dyanamic heading`;
// document.body.prepend(heading);

// ------------------------------------------------
// remove
// removeChild
// const result = document.querySelector('#result');
// result.remove();

// const heading = result.querySelector('h1');
// result.removeChild(heading);
// console.log(heading);

// -------------------------------------------------
// innerHTML
// textContent

// const list = document.getElementById('first');
// const div = document.getElementById('second');
// const item = document.querySelector('.item');

// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const randomVar = 'random value';

// const ul = document.createElement('ul');
// ul.innerHTML = `<li class="item">${randomVar}</li>
// <li>list item</li> <li>list item</li>`;
// document.body.appendChild(ul);

// div.textContent = 'hello world';
// div.innerHTML  = 'hello people';


// div.textContent = `<li class="item">${randomVar}</li>
// <li>list item</li> <li>list item</li>`;
// div.innerHTML  = `<li class="item">${randomVar}</li>
// <li>list item</li> <li>list item</li>`;

// --------------------------------------------------------
// CSS
// const random = document.querySelector('.random');

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

// random.classList.add('title');

// -----------------------------------------------------
// select element
// addEventListener()
// what event, what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// btn.addEventListener('click', function(){
//     // console.log('hey you clicked me');
//     heading.classList.add('red');
// });
// --------------------------
// function changeColors(){
//     // console.log('hello');
//     let hasClass = heading.classList.contains('red');
//     if(hasClass){
//         heading.classList.remove('red');
//     } else{
//         heading.classList.add('red');
//     }
// }
// // invoked here
// // btn.addEventListener('click',changeColors()); 

// // here passing it as a reference
// btn.addEventListener('click',changeColors); 
// ------------------------------------------------------
// click - fires after full action occurs
// mousedown - button is pressed
// mousedown - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click',function(){
//     console.log('you clicked me');
// });

// btn.addEventListener('mousedown',function(){
//     console.log('down');
// });

// btn.addEventListener('mouseup',function(){
//     console.log('up');
// });

// heading.addEventListener('mouseenter', function(){
//     heading.classList.add('blue');
// });

// heading.addEventListener('mouseleave', function(){
//     heading.classList.remove('blue');
// });

// -----------------------------------------------
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// const nameInput = document.getElementById('name');

// nameInput.addEventListener('keypress', function(){
//     console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function(){
//     console.log('you pressed a key');
// });

// nameInput.addEventListener('keyup', function(){
//     // console.log('you pressed a key');
//     // console.dir(nameInput);
//     console.log(nameInput.value);
// });

// --------------------------------------------------------
// event object, argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const link = document.getElementById('link');

// heading.addEventListener('click', event => {
//     console.log(event.currentTarget);
//     console.log(this);
// });

// heading.addEventListener('click', function(event){
//     // console.log(event.currentTarget);
//     event.currentTarget.classList.add('blue');  
// });

// btn.addEventListener('click', function(event){
//     console.log(event.currentTarget);
//     event.currentTarget.classList.add('blue');  
//     console.log(event.type);
// });

// // prevent default
// function someFunc(e){
//     e.preventDefault();
// }

// link.addEventListener('click',someFunc);

// ---------------------------------------------------------
// currentTarget - always refers to the element to which the event
// handler has been attached to...
// target - identifies the element on which the event occured
 
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = 'black';
//     // -----------------------------------------
//        console.log('target',e.target);
//        console.log('currentTarget',e.currentTarget);
//        e.target.style.color = 'black';

//     });
// });

// ----------------------------------------------------------
// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

// const container = document.querySelector('.container');
// const list = document.querySelector('.list-items');

// function showBubbling(e){
//     console.log('current target', e.currentTarget);
    // console.log('target',e.target);
    // if(e.target.classList.contains('link')){
    //     console.log('you clicked on the link');
    // }
// }

// function stopPropagation(e){
//     console.log('you clicked on list');
//     e.stopPropagation();
// }

// list.addEventListener('click',stopPropagation);
// container.addEventListener('click',showBubbling);
// document.addEventListener('click',showBubbling);
// window.addEventListener('click',showBubbling);
// list.addEventListener('click',showBubbling);
// -------------------------------------------------
// event capturing
// container.addEventListener('click',showBubbling,{capture:true});
// document.addEventListener('click',showBubbling,{capture:true});
// window.addEventListener('click',showBubbling,{capture:true});
// list.addEventListener('click',showBubbling,{capture:true});

// -------------------------------------------------------------
// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');

// console.log(heading);

// function sayHello(){
//     console.log('hello there');
// }

// btn.addEventListener('click', function(){
//     const element = document.createElement('h1');
//     element.classList.add('heading');
//     element.textContent = `i'm inside the container`;
//     container.appendChild(element);
// });

// container.addEventListener('click',function(e){
//     if(event.target.classList.contains('heading')){
//         console.log('hello there');
//     }
// });

// heading.addEventListener('click',sayHello);

// -----------------------------------------------------------
// submit event listener
// prevent default
// how to get a value

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', function(e){
//     // e.preventDefault();
//     console.log('form submitted');
//     console.log(name.value);
//     console.log(password.value);
// });

// -----------------------------------------------------------------
// Web storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// localStorage.setItem('name','john');
// localStorage.setItem('friend','peter');
// localStorage.setItem('job','developer');
// localStorage.setItem('address','street 123');

// const name = localStorage.getItem('name');
// console.log(name);
 
// localStorage.removeItem('name');

// const anotherName = localStorage.getItem('name');
// console.log(anotherName);

// localStorage.clear();

// --------------------------------------------------------------
// JSON.stringify(), JSON.parse()

// const friends = ['john', 'peter', 'bob'];
// // localStorage.setItem('friends', friends);
// localStorage.setItem('friends', JSON.stringify(friends));

// // const values = localStorage.getItem('friends');
// const values = JSON.parse(localStorage.getItem('friends'));
// console.log(values[2]);


// let fruits;

// if(localStorage.getItem('fruits')){
//     fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//     fruits = [];
// }
// console.log(fruits);

// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));
