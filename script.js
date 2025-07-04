'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1)
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = '🔴 No Number!'
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = '🎉 Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too High!'
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Game Over'
        }
    } else {
        document.querySelector('.message').textContent = '📉 Too Low!'
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'Game Over'
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
})