#
naming function 
set up for arrow function. 
half the work for arrow function

What is a difference between a traditional function declaraction and arrow function? 

Hoisting - the JavaScript engine, reads thru the line of code, the function declaration is hoisted meaning it is called before it is defined in the code. 

- stay away from var because its hoisted
- it read code from top to bottom and because the variable is define on top it cannot located the variable. 

Example 
>   const cfpData = getLS();
    const getLS()

correct
>   const getLs();
    const cfpData = getLS();

Hoising is built in hevhavior of the language throug which declaration of functions, variables and classes are moved to the top of their schop all before code excecution. 

declare a function: 
>   const add2 = function() {
    console.log(2+2)
}
 
setting on a global scope: 
> add2() 

inside the function and it return control to the function

call the function, run the function, return control to the function

const add2 = function(parameter) recieve inside its call parameter

add2(argument) sending something an argument 
In dev tool, what is passed in by value 
a is declared inside the block and only available inside this block of code 
pass by value 
> const add2 = function(a) {
    console.log(2+2)} 
    
    this is not return

> add2(3)

read form global scope but the global scope can't read things inside the block scope

Traditional 

passing an argument which become a parameter where it is pass as a value and being declared within the scope, the statment is run
return the value: return the control back to the function
the function runs the function control path and come back

To return value: 

> const add2 = function(a) {
    return 2+a}  declare return 

> add2(3)
this return the value but it is not capture until we save it inside a variable. 

to save inside a variable: 

>const result = add2(3)


> const add2 = function(a - 10) {
    console.log(2+a)} 

    a-10 this is a default value

> const result = add2()

rest argrument 
 
> > const add2 = function(..a) {
    return (2+a)} 
const result = add2(1,2,3,4)


when you pass in many argument it pass in as a array and you have to have logic to use the passed argument inside the function please reference

the inner function can read the outer scope function
it can read the parent scope but cannot read block scope

javascript function
closure outer function and inner function 
nested function
global and block
iife are self-execute soon as the 
arrow function 

edge case make sure that you think 



Summary: 

I am aware of passing a value into a parameter.  This is great because I did not realized that add2() was a function call and does not hold the value of the return. I thought its returned and can be used. 


## default value 
We can update functions to have default parameter values by using the default parameters feature. This ensures that if a value is not provided when calling the function, it will default to the specified value.

## rest operator 
The rest operator (...) can be used when you want a function to accept an indefinite number of arguments and handle them as an array.
