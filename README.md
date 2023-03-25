# Understanding Errors

## Lesson Objectives:

1. Name at least three kinds of Javascript errors
2. Identify two parts of an error message that help you find where the error originates
3. Be able to understand how to research and resolve errors

### The Anatomy of an Error

- An error is a type of object built into the JS language, consisting of a name/type and a message. Errors contain crucial information that can assist you in locating the code responsible for the error, determining why you have this error, and resolving the error.

### Reference Error?

- thrown when one refers to a variable that is not declared and/or initialized within the current scope

### Common Types of Errors

- Syntax Error => when the code you are trying to run is not written correctly
- Reference Error => trying to reference variable does not exist
- Type Error => parameter passed to a function is incompatible with the type expected by that operator or function
  => when attempting to modify a value that cannot be changed
  => when attempting to use a value in an inappropriate way

### Tips for Resolving Errors

1. Read the error carefully and try to understand it on your own.
2. Next, Google the error! Chances are, you can find a fix or explanation on StackOverflow or in the documentation. If nothing else, you will receive more clarity as to why you are receiving this error.
3. Use the debugger! As previously mentioned, the debugger is great for more involved troubleshooting, and is a critical tool for a developer. You can set breakpoints, view the value of any given variable at any point in your application’s execution, step through code line by line, and more! It is an extremely valuable tool and every programmer should know how to use it. This tutorial dives into the Chrome Debugger.
4. Make use of the console! console.log() is a popular choice for quick debugging. For more involved troubleshooting, using the debugger might be more appropriate, but using console.log() is great for getting immediate feedback without needing to step through your functions.
