// DOM variables

// global variables
let fizzBuzzValue
let points

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
        barWidth600()
    }
    this.setWidth = () => {
        bar.style.transitionDuration = '3s'
        bar.style.transitionTimingFunction = 'linear'
        bar.style.width = '0px'
    }
}

const barWidth600 = () => {
    bar.style.transitionDuration = '0s'
    bar.style.width = '600px'
}

fizzBuzz = new FizzBuzz
fizzBuzz.generateNumber()

const checkGuess = () => {
    if (fizzBuzzValue == userGuess) {
        console.log('you guessed right')
        pling.play()
        fizzBuzz.generateNumber()
        barWidth600()
        setTimeout(function(){
            fizzBuzz.setWidth()
        }, 20);
    } else {
        console.log('you guessed wrong')
        points = 0
    }
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