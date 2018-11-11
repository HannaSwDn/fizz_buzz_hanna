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
We use feature tests when we want to test the functionality of the whole application.
So the difference between unit testing and feature testing is the scope of the test.

6. What are expectations in the context of testing?
Expectations are used to define expected outcomes, when you want to test a block of code to check if (for example) a variable is equal to the value of an input element.

7. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code
```js
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () => {
        let value = document.getElementById('value').value
        let fizzBuzz = new FizzBuzz
        let result = fizzBuzz.check(value)
        displayDiv.innerHTML = result;
    })
})
```
At the first line, it is checking to see if the content (HTML elements) of the DOM has been loaded. If that is true, it goes in to the code block and sets two variables. First variable 'button' stores an element with the id of #button. The second variable stores an element with the id of #display_answer.
At the third line inside the first code block, it is using an event listener to check if the #button element has been clicked. If that is true, it will execute the code in the second code block.
At the first line inside the second code block, it creates a variable 'value', and that variable contains the value of the element with the id of 'value'.
The fizzBuzz variable creates and stores a new instance of the FizzBuzz object that we have in the fizz-buzz.js file.
The result variable calls the check() method of the fizzBuzz object with an argument of the variable 'value' it assigned earlier.
And the last line sets the innerHTML of the #display_answer div (that we store inside the displayDiv variable), to the value of the result variable.

8. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?
The physical distance between a website's hosting server and it's users can affect the loading time and performance of the website. In order to improve that, you can use a Content delivery network.
A CDN stores a website's static content (images, videos etc) in multiple servers (nodes) at different geographically locations, so when the user wants to for example download an image, it will recognize the user's physical location. Then, it will find the node closest to the user's location and from there, the user will be able to download the image.
Not using a CDN can cause the website to lose visitors since it will take longer time to load the content of the website.