// DOM variables

document.addEventListener('DOMContentLoaded', function() {
    FizzBuzz()
})

function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 == 0) {
            return 'FizzBuzz'
        } else if (number % 5 == 0) {
            return 'Buzz'
        } else if (number % 3 == 0) {
            return 'Fizz'
        } else {
            return number
        }
    }
}

// function to generate a random fizzbuzz number
const generateNumber = () => {
    number = Math.floor(Math.random() * 100 + 1)
}

let userGuess;
fizz.addEventListener('click', event => {
    userGuess = 'fizz'
    alert(userGuess)
})

buzz.addEventListener('click', event => {
    userGuess = 'buzz'
    alert(userGuess)
})

fizzbuzz.addEventListener('click', event => {
    userGuess = 'fizzbuzz'
    alert(userGuess)
})

generateNumber()