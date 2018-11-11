1. What does the following lines of code do?
```js
let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
Answer: The first line creates a let variable (variables declared with let can be re-assigned, while variables declared with const can not be re-assigned, they can only be modified for example like this:)
```js
const array = [1, 2, 3, 4]
array.push(5)
```
The value of the fizzBuzz variable is a JavaScript file called fizz-buzz.js.
The eval() evaluates a block of string as a JavaScript command.
The export statement allows you to break up your code in different files or modules. You can export the code with export, and import it with import.
To sum up, these two lines creates a variable with the JavaScript file and exports it so my guess is that we will use the import statement in another file.

2. Why are we placing this outside the it block?
```js
let fizzBuzz = new FizzBuzz
```
Answer: Because we want to create a new instance of the FizzBuzz class (we do not want it to have a scope of only one test, because we will use it in more than one tests), it would be unnecessary to add it inside every test that needs an instance of the class.

3. What is the difference between using == and === in JS?
Answer: The difference is that when you use == you compare the value and not the datatype, but when you use === you compare both the value and the datatype. For example this would return true;
```js
'5' == 5
```
but this would return false because we are comparing string to a number:
```js
'5' === 5
```

4. Why are we moving this to the top of the if statement:
```js
(number % 5 == 0)
```
Answer: Because if the first condition of the if statement is true, it doesn't evaluates the else / else if statements. If we would have for example this on the top and it was true, it would never evaluate the other tests:
```js
(number % 3 == 0)
```
We need the conditions in the if statement in order most rare - least rare.

5. What is the difference between feature test and unit test?
Answer: Unit test are written to test small pieces of code to see if they do what they are supposed to do, for example a function. It makes us write less and more efficient code.
Feature tests can test much bigger parts of code, they can test a whole application.

6. What are expectations in the context of testing?

7. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code
```js
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () =>{
        let value = document.getElementById('value').value
        let fizzBuzz = new FizzBuzz
        let result = fizzBuzz.check(value)
        displayDiv.innerHTML = result;
    })
})
```

8. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?
A CDN is 