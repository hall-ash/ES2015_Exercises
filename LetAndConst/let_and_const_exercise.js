/* 
Hall, Ashley
Unit 10.2.7 let and const Exercise
Refactor ES5 code into ES2015
*/


/* 
Code to refactor:
ES5 Global Constants 
*/
var PI = 3.14;
PI = 42;

/* 
Refactored code:
ES2015 Global Constants 
*/
const PI = 3.14;

/*
Quiz questions:  
What is the difference between var and let?
var is defined and accessible inside its function (function scope) and can be redeclared. 
let is defined and accessible inside the curly braces it has been declared in (block scope)
and cannot be redeclared.

What is the difference between var and const?
var can be reassigned and redeclared, and it has function scope.
const cannot be reassigned or redeclared, and it has block scope.

What is the difference between let and const?
let can be reassigned, and const cannot be reassigned.

What is hoisting?
Hoisting moves variable and function declarations to the top of their scope
before code execution.
*/