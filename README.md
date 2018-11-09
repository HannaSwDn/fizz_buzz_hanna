1. What does the following lines of code do?
```js
let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
<!-- Should it be export and not exports on line 4? -->
Answer: The first line creates a let variable (variables declared with let can be re-assigned, while variables declared with const can not be re-assigned, they can only be modified for example like this:)
```js
const array = [1, 2, 3, 4]
array.push(5)
```
The value of the fizzBuzz variable is a JavaScript file called fizz-buzz.js.
The eval() evaluates a block of string as a JavaScript command.
The export statement allows you to break up your code in different files or modules. You can export the code with export, and import it with import.
To sum up, these two lines creates a variable with the JavaScript file and exports it so my guess is that we will use the import statement in another file.
