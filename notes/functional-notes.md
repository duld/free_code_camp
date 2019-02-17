# Functional Programmoing - Notes

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

Functional Programming is about

* __Isolated functions__
  * there is no dependence on the state of the program, which includes global variables that are subject to change.
* __Pure functions__
  * the same input always gives the same output.
* __Functions with limited side effects__
  * any changes, or mutations, to the state of the program outside the function are carefully controlled.

## Callbacks

Callbacks are functions that are slipped or passed into another function to decide the invocation of that function.

## First Class Functions

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal falue, are called __first class functions__. In JS all functions are first class functions.

## Lambdas

When a function is *passed into* another function or *returned* from another function, then that function can be called a __lambda__ function.