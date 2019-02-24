# Async And Performance - notes

## Chapter 1: Asynchrony: Now & Later

### Definitions to Understand

#### Atomic

One operation at a time. An operation that appears to be instantaneous from the perspecive of all other threads. You don't need to worry about a partly complete operation when the guarantee applies. It is possible in computing to have one process setting a variable as another is attempting to read the variable, this could cause partial read values. - [notes from stackoverflow](https://stackoverflow.com/questions/15054086/what-does-atomic-mean-in-programming)

#### Race Condition

A race condition or 'race hazard' is the behavior of an electronic, software or other system where the output is dependant on the sequence or timing of other uncontrollable events.

#### Concurency

Concurency is when two or more 'processes' are executing simultaneously over the same period, regardless of whether their individual constituent operations happen in parallel (at the same instant on seperate processors or cores).

#### Parallel

Means that two or more calculations are happening simultaneously. Large problems can often be divided into smaller ones, which can then be solved at the same time.

#### Nondeterminism

Nondeterminism in programming is where you can run an application multiple times and recieve different output from the same input. A deterministic program will return the same result with the same input every time.

> Nondeterminism in your code is not a bad thing by default, especially if the two process do not rely on one another.

### Thoughts on Long Running Processes

Sometimes we may need to process large amounts of data, but this can lead to a bad user experience due to how JS in the browser behaves. We could break up the work into a series of 'chunks' and process each chunk, then return control back to the browser, if nothing is occuring process another chunk, then return control, etc etc...

### Jobs

Introduced in ES6 JS now has a 'Job Queue', which Promises takes advantage of. Whatever is inside of the Job Queue has priority in the Event Loop. Later, but as soon as possible.

### Statement Ordering & Review

__The order in which we express statements in our code is not necessarily the same order as the JS engine will execute them__. An important reminder, the rest of the section explains that because JS is compiled and optimized or code can be changed from how we wrote it. The changes can make the code more optimized for the computer to execute, etc.

---

## Chapter 2: Callbacks

Points on Callbacks

* A function is a 'callback', because it serves as the target for the event loop to 'call back into' the program, whenever that item in the queue is processed.
* Callbacks are by far the most common way that asynchrony in JS programs is expressed and managed.
* The call back is the most fundamental async pattern in JavaScript.

### Continuations

A callback can be thought as a wrapper/encapsulation of a program's continued execution.

### Sequential Brain

We can't really multitask, we seem to only be able to quickly context switch fast enough to handle multiple tasks at once. Kinda like the JS event Loop. So if our brain is the Event Loop, an Asynchronous call could represent delegation of a job to another individual and having them report back.

### Doing VS. Planning

We tend to plan synchronous tasks but in practice we constantly context switch between multiple small unrelated tasks. Thats a good excuse for procrastination and missing goals I suppose. Not my fault, I'm too async!

### Nested / Chained Callbacks

There is a problem when we introduce multiple callbacks that fire their own callbacks; complexity. Callback hell is commonly refered to when we have nested callbacks and the indentation of the code looks like a sideways pyramid. The Author of YDKJS argues that, that is just a visual indication of the true complexity and not the cause. He demonstrates this by breaking the nested callbacks into their own blocks outside of one another and asks the reader to reason about how the code work.

Instead of going deeper and deeper into the code as before, the reader has to continually scan up and down, over and over from one function to another to get the order of calls in their mind correctly. It can be just as frustrating trying to reason about it.

> But the brittle nature of manually hardcoded callbacks (even with hardcoded error handling) is often far less graceful. Once you end up specifying (aka pre-planning) all the various eventualities/paths, thecode becomes so convoluted that it's hard to ever maintain or update it.

### Trust Issues

When we pass our callback to some asynchronous call we are handing off control. Often the function we pass our callback to is from a library that we didn't write and an author we never met. Outsiders! *HIIIIIIISSSSS!!!*

#### Inversion of Control

When you take part of your program and give over control of its execution to another third party. There's an unspoken 'contract' that exists between your code and theird-party utility -- a set of thigs you expect to be maintained. (YDKJS)

> In IoC, custom-written portions of a computer program recieve the flow of control from a generic framework. A software architecture with this design inverts control as compared to traditional procedural programming: in traditional programming, the custom code that expresses the purpose of the program calls into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.
>
> Inversion of control is used to increase modularity of the programe and make it extensiblie. 
>
>(Wikipedia)

### Tale of Five Callbacks

