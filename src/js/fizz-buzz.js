// global variables
let fizzBuzzValue
let timeLeft = 25
let points = 0

function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 == 0) {
            fizzBuzzValue = 'FizzBuzz'
            return 'FizzBuzz'
        } else if (number % 5 == 0) {
            fizzBuzzValue = 'Buzz'
            return 'Buzz'
        } else if (number % 3 == 0) {
            fizzBuzzValue = 'Fizz'
            return 'Fizz'
        } else {
            fizzBuzzValue = 'Integer'
            return number
        }
    }
    this.generateNumber = () => {
        number = Math.floor(Math.random() * 100 + 1)
        document.getElementById('display_number').innerHTML = number
        fizzBuzz.check(number)
    }
}

fizzBuzz = new FizzBuzz
fizzBuzz.generateNumber()

const checkGuess = () => {
    if (fizzBuzzValue == userGuess) {
        points++
        pointsParagraph.innerHTML = `${points} points`
        pling.play()
        fizzBuzz.generateNumber()
    } else {
        gameOver()
    }
}

const gameOver = () => {
    points = 0
    document.getElementById('points').innerHTML = `${points} points`
}

// event listeners

fizz.addEventListener('click', event => {
    userGuess = 'Fizz'
    checkGuess()
})

buzz.addEventListener('click', event => {
    userGuess = 'Buzz'
    checkGuess()
})

fizzbuzz.addEventListener('click', event => {
    userGuess = 'FizzBuzz'
    checkGuess()
})

integer.addEventListener('click', event => {
    userGuess = 'Integer'
    checkGuess()
})