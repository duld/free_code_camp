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